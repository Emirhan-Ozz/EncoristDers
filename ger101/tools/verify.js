const fs=require('fs'),vm=require('vm');
const dir=process.argv[2];
const ctx={window:{},Math,console};ctx.window.window=ctx.window;vm.createContext(ctx);
for(const f of ['content.js','words.js','questions.js','questions-2.js']) vm.runInContext(fs.readFileSync(dir+'/assets/'+f,'utf8'),ctx,{filename:f});
const W=ctx.window; let err=0, n=0; const E=(m)=>{err++;console.log('HATA:',m)};
const topics=new Set(W.TOPICS.map(t=>t.id));
function chk(q,where){
  n++;
  if(!q.topic||!topics.has(q.topic)) E(where+' topic yok: '+q.q);
  if(!q.q) E(where+' q yok');
  if(q.listen){ const nl=q.listen.split('\n').filter(x=>x.trim()).length; if(!q.voices||q.voices.length!==nl) E(where+' ses sayısı≠satır '+q.listen.slice(0,30)); }
  if(q.type==='mc'){
    if(!(q.a>=0&&q.a<q.opts.length)) E(where+' a aralık dışı '+q.q);
    if(new Set(q.opts).size!==q.opts.length) E(where+' tekrar eden şık '+q.q);
    if(!q.exp) E(where+' exp yok');
  } else if(q.type==='fill'){
    if((q.code.match(/____/g)||[]).length!==1) E(where+' fill boşluk sayısı '+q.code);
    if(!q.ans||!q.ans.length||q.ans.some(a=>!a)) E(where+' ans boş');
  } else if(q.type==='code'){
    const m=(q.code.match(/\{\{(\d)\}\}/g)||[]);
    if(m.length!==q.blanks.length) E(where+' blank sayısı '+m.length+'≠'+q.blanks.length+' '+q.title);
    m.forEach((x,i)=>{ if(x!=='{{'+(i+1)+'}}') E(where+' sıra '+x); });
    if(q.exps.length!==q.blanks.length) E(where+' exps sayısı '+q.title);
  } else if(q.type==='open'){ if(!q.model) E(where+' model yok'); }
  else E(where+' tip? '+q.type);
}
W.EXAMS.forEach(e=>e.questions.forEach((q,i)=>chk(q,e.id+'#'+(i+1))));
Object.keys(W.TOPIC_QUESTIONS).forEach(t=>{ if(!W.TOPIC_QUESTIONS[t].length) E('boş konu '+t); W.TOPIC_QUESTIONS[t].forEach((q,i)=>chk(q,'konu-'+t+'#'+(i+1)));});
// deneme formatı
const secOf=q=>q.listen?'hoeren':q.text?'lesen':q.type==='open'?'yazma':'grammatik';
W.EXAMS.filter(e=>e.group==='vize').forEach(e=>{
  const c={};e.questions.forEach(q=>c[secOf(q)]=(c[secOf(q)]||0)+1);
  const pts=e.questions.reduce((s,q)=>s+W.COURSE.sections.find(x=>x.id===secOf(q)).each,0);
  const ord=e.questions.map(secOf).join(',');
  if(JSON.stringify(c)!==JSON.stringify({hoeren:5,grammatik:10,lesen:5,yazma:2})) E(e.id+' format '+JSON.stringify(c));
  if(pts!==100) E(e.id+' puan '+pts);
  if(!/^(hoeren,){5}(grammatik,){10}(lesen,){5}yazma,yazma$/.test(ord)) E(e.id+' sıra '+ord);
});
// dinleme: her satıra bir konuşmacı sesi
if (W.__voiceMiss && W.__voiceMiss.length) E('ses ataması yok: '+W.__voiceMiss.join(' | '));
// doğru şık dağılımı
const dist=[0,0,0,0,0]; let mcs=0;
const all=new Set(); W.EXAMS.forEach(e=>e.questions.forEach(q=>all.add(q))); Object.values(W.TOPIC_QUESTIONS).forEach(l=>l.forEach(q=>all.add(q)));
all.forEach(q=>{ if(q.type==='mc'){dist[q.a]++;mcs++;} });
// kelimeler
const seen={}; W.WORDS.forEach(w=>{
  if(![1,2,3,4].includes(w.l)) E('lektion '+w.w);
  if(!w.t) E('tr yok '+w.w);
  const key=(w.a||'')+w.w; if(seen[key]) E('çift kelime '+key); seen[key]=1;
  if(w.a && !['der','die','das','der/das','die/das'].includes(w.a)) E('artikel '+w.w);
  if(w.a && !w.pl && w.p===undefined) E('çoğul alanı yok '+w.w);
  if(w.a && w.p && /^[a-zäöü]/.test(w.p)) E('çoğul küçük harf '+w.w);
});
// Test Lektion cevapları kitabın Lösungen sayfasıyla
const L={tl1:[['Guten Morgen','Guten Abend','Auf Wiedersehen','Tschüs','Gute Nacht'],['Straße','Hausnummer','Postleitzahl','Stadt','Land','Telefon','E-Mail'],['Woher','was','Wer'],['heißt','heiße','komme','sprichst','spreche'],['ist','heißen','bin','ist'],['Entschuldigung','Ich buchstabiere','Danke','Einen Moment','Tut mir leid']],
 tl2:[['Mutter','Bruder','Schwester','Sohn','Tochter','Opa','Oma'],['neun','sechzehn','dreizehn','elf','zwanzig'],['geboren','Hauptstadt','Familie','ledig'],['Ihre','Sie','mein','dein','Er','Deine','sie'],['kommen','leben','sprechen','spricht','seid'],['Habt','bin','habe','ist','hat'],['Und dir','Wie geht es Ihnen','wo wohnen Sie','Wie ist Ihre Adresse']],
 tl3:[['Kartoffeln','Becher','Joghurt','Flaschen','Mineralwasser'],['Kaufst du bitte Brot','Was möchten Sie','Brauchen wir Orangen','Was brauchen wir'],['keine','ein','eine','keine','ein','kein','eine'],['Kuchen','Würstchen','Kiwis','Eier','Brote'],['Haben Sie','Wie viel kostet','Sonst noch etwas','Nein, danke']],
 tl4:[['alt','hässlich','schmal','dunkel','groß'],['das Wohnzimmer','der Schreibtisch','der Sessel','der Kühlschrank','die Lampe'],['die Wohnzimmer','die Schreibtische','die Sessel','die Kühlschränke','die Lampen'],['Er','Es','sie','Sie'],['nicht','keine','keine'],['Sag mal','gefällt mir gut','neu und modern','Oh, das ist schön','Wie groß sind sie','er findet']]};
// app.js ile aynı eşleştirme
function norm(x){return x.toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').replace(/[.!?,]+$/g,'').replace(/[’`]/g,"'").replace(/\s+/g,' ').trim();}
function match(inp,ans){const s=inp.trim().replace(/\s+/g,' ');const c=[s,s.replace(/^["']+|["']+$/g,'').trim(),s.replace(/;$/,'').trim()];return ans.some(a=>c.some(x=>x&&norm(x)===norm(a)));}
Object.keys(L).forEach(id=>{const ex=W.EXAMS.find(e=>e.id===id); L[id].forEach((row,k)=>{const q=ex.questions[k]; if(row.length!==q.blanks.length) return E(id+' görev '+(k+1)+' sayı'); row.forEach((v,j)=>{ if(!match(v,q.blanks[j].ans)) E(id+' görev '+(k+1)+' boşluk '+(j+1)+': kitap cevabı "'+v+'" kabul edilmiyor'); });});});
// ss / ae varyantları kabul ediliyor mu
['Kuehlschraenke','Strasse','gross'].forEach((v,i)=>{});
console.log('Soru:',n,'(benzersiz',all.size,') · MC doğru şık dağılımı A-E:',dist.join('/'),'· kelime:',W.WORDS.length,'· isim:',W.WORDS.filter(w=>w.a).length);
console.log(err?('TOPLAM HATA: '+err):'0 hata');
process.exit(err?1:0);
