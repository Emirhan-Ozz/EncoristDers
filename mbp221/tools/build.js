/* Soru bankasını doğrular ve assets/questions.js dosyasını üretir.
   Kullanım (repo kökünde):  node tools/build.js
   Hata varsa dosya yazılmaz. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const SRC = require('./questions.src.js');

// content.js'ten konu id'lerini oku
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'assets/content.js'), 'utf8'), ctx);
const TOPIC_IDS = ctx.window.TOPICS.map(t => t.id);

/* ---- sabit tohumlu karıştırma (mulberry32) ---- */
let seed = 221;
function rnd() {
  seed |= 0; seed = seed + 0x6D2B79F5 | 0;
  let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function perm(n) {
  const p = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  return p;
}

const errors = [];
const dist = { A: 0, B: 0, C: 0, D: 0, E: 0 };
const tfDist = { Doğru: 0, Yanlış: 0 };
let count = 0;

function balanced(code) {
  // tırnak içlerini atıp (), {}, [] dengesine bak
  const s = code.replace(/'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*"|`[^`]*`/g, '""');
  const st = [], pair = { ')': '(', '}': '{', ']': '[' };
  for (const ch of s) {
    if ('({['.includes(ch)) st.push(ch);
    else if (pair[ch]) { if (st.pop() !== pair[ch]) return false; }
  }
  return st.length === 0;
}
function tagsBalanced(code) {
  // tırnakları ve ok fonksiyonlarını (=>) at; JSX ifadelerindeki {...} içini etiket sanma
  const s = code.replace(/'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*"/g, '""').replace(/=>/g, '=~');
  const st = [];
  // açılış etiketi çok satırlı olabilir ve içinde başka etiket barındırabilir (renderItem):
  // bu yüzden adı ve sonunu ayrı yakala
  const re = /<(\/?)([A-Z][A-Za-z]*)\b|(\/>)/g;
  let m;
  while ((m = re.exec(s))) {
    if (m[3]) {                           // "/>": en son açılan, henüz '>' ile kapanmamış etiket kendiliğinden kapanır
      for (let i = st.length - 1; i >= 0; i--) if (!st[i].closed) { st.splice(i, 1); break; }
      continue;
    }
    if (m[1]) { const top = st.pop(); if (!top || top.name !== m[2]) return false; continue; }
    // etiketin '>' ile mi (açık) yoksa '/>' ile mi bittiğini, araya giren { } derinliğine bakarak bul
    let depth = 0, j = re.lastIndex, closed = false;
    for (; j < s.length; j++) {
      const ch = s[j];
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
      else if (depth === 0 && ch === '/' && s[j + 1] === '>') { closed = false; j++; break; }
      else if (depth === 0 && ch === '>') { closed = true; break; }
    }
    if (closed) st.push({ name: m[2], closed: true });
    else re.lastIndex = j + 1;            // kendiliğinden kapanan: tamamen atla
  }
  return st.length === 0;
}

function prep(q, where, topic) {
  count++;
  const id = where + ' #' + count + ' (' + String(q.q || q.title).slice(0, 50) + ')';
  const out = Object.assign({}, q);
  if (topic) out.topic = topic;
  if (!out.topic || !TOPIC_IDS.includes(out.topic)) errors.push(id + ': geçersiz topic ' + out.topic);
  if (!out.q) errors.push(id + ': soru metni yok');
  if (/önceki|yukarıdaki soru/i.test(out.q)) errors.push(id + ': başka soruya atıf var');

  if (out.type === 'mc') {
    if (!Array.isArray(out.opts) || out.opts.length < 4) errors.push(id + ': en az 4 şık olmalı');
    if (new Set(out.opts).size !== out.opts.length) errors.push(id + ': aynı şık iki kez');
    if (!out.exp) errors.push(id + ': exp yok');
    if (out.a === undefined) {
      // doğru cevap opts[0]; karıştır
      const p = perm(out.opts.length);             // yeni konum k'da eski p[k]
      const newIndex = {};
      p.forEach((old, k) => { newIndex[old] = k; });
      out.opts = p.map(old => q.opts[old]);
      out.a = newIndex[0];
      if (q.why) {
        out.why = {};
        Object.keys(q.why).forEach(k => {
          if (+k === 0) errors.push(id + ': why doğru şıkkı açıklıyor');
          if (+k >= q.opts.length) errors.push(id + ': why anahtarı şık dışı');
          out.why[newIndex[+k]] = q.why[k];
        });
      }
    } else if (out.a < 0 || out.a >= out.opts.length) errors.push(id + ': a aralık dışı');
    else if (out.why && out.why[out.a] !== undefined) errors.push(id + ': why doğru şıkkı açıklıyor');
    dist['ABCDE'[out.a]]++;
  } else if (out.type === 'tf') {
    if (out.a !== 0 && out.a !== 1) errors.push(id + ': tf cevabı 0/1 olmalı');
    if (!out.exp) errors.push(id + ': exp yok');
    out.opts = ['Doğru', 'Yanlış'];
    tfDist[out.opts[out.a]]++;
  } else if (out.type === 'fill') {
    if ((out.code.match(/____/g) || []).length !== 1) errors.push(id + ': kodda tam bir ____ olmalı');
    if (!out.ans || !out.ans.length) errors.push(id + ': ans yok');
    if (!out.exp) errors.push(id + ': exp yok');
    const filled = out.code.replace('____', out.ans[0]);
    if (!balanced(filled)) errors.push(id + ': doldurulmuş kodda parantez dengesi bozuk');
  } else if (out.type === 'code') {
    const nums = (out.code.match(/\{\{(\d)\}\}/g) || []).map(x => +x[2]);
    if (nums.length !== out.blanks.length) errors.push(id + ': boşluk sayısı blanks ile uyuşmuyor');
    if (new Set(nums).size !== nums.length) errors.push(id + ': aynı boşluk iki kez');
    nums.forEach((n, k) => { if (n !== k + 1) errors.push(id + ': boşluklar sırayla 1..n olmalı'); });
    if (!out.exps || out.exps.length !== out.blanks.length) errors.push(id + ': exps sayısı yanlış');
    out.blanks.forEach((b, k) => { if (!b.ans || !b.ans.length) errors.push(id + ': boşluk ' + (k + 1) + ' cevapsız'); });
    const filled = out.code.replace(/\{\{(\d)\}\}/g, (m, n) => out.blanks[n - 1].ans[0]);
    if (!balanced(filled)) errors.push(id + ': doldurulmuş kodda parantez dengesi bozuk');
    if (!tagsBalanced(filled)) errors.push(id + ': doldurulmuş kodda JSX etiketleri dengesiz');
  } else errors.push(id + ': bilinmeyen tip ' + out.type);
  return out;
}

// Vize 20 test. Deneme bölümlerindeki D/Y soruları konu testlerine, kod soruları ek kod pratiğine aktarılır.
const movedTf = {}, movedCode = [];
function examOnly(list) {
  return list.filter(q => {
    if (q.type === 'tf') { (movedTf[q.topic] = movedTf[q.topic] || []).push(q); return false; }
    if (q.type === 'code') { movedCode.push(q); return false; }
    return true;
  });
}
['deneme1', 'deneme2', 'deneme3'].forEach(k => { SRC[k] = examOnly(SRC[k]); });

const EXAMS = [
  { id: 'hoca', title: 'Hocanın çalışma soruları', desc: 'Notların sonundaki 3 test + 3 Doğru/Yanlış, birebir. Ek olarak uygulama ödevinden bir kod sorusu.',
    featured: true, group: 'hoca', mode: 'practice', questions: SRC.hoca.map(q => prep(q, 'hoca')) },
  { id: 'deneme-1', title: 'Deneme vizesi 1', desc: '20 soru test, gerçek vize formatında.', questions: SRC.deneme1.map(q => prep(q, 'deneme1')) },
  { id: 'deneme-2', title: 'Deneme vizesi 2', desc: '20 soru test, gerçek vize formatında.', questions: SRC.deneme2.map(q => prep(q, 'deneme2')) },
  { id: 'deneme-3', title: 'Deneme vizesi 3', desc: '20 soru test, gerçek vize formatında.', questions: SRC.deneme3.map(q => prep(q, 'deneme3')) }
];

// deneme formatı: 20 çoktan seçmeli
EXAMS.filter(e => e.id.startsWith('deneme')).forEach(e => {
  const types = e.questions.map(q => q.type).join(',');
  const want = Array(20).fill('mc').join(',');
  if (types !== want) errors.push(e.id + ': format 20 çoktan seçmeli değil (' + e.questions.length + ' soru)');
});

const TOPIC_QUESTIONS = {};
TOPIC_IDS.forEach(t => {
  if (!SRC.topics[t] || !SRC.topics[t].length) errors.push('konu testi yok: ' + t);
  TOPIC_QUESTIONS[t] = (SRC.topics[t] || []).concat(movedTf[t] || []).map(q => prep(q, 'konu ' + t, t));
});
Object.keys(SRC.topics).forEach(t => { if (!TOPIC_IDS.includes(t)) errors.push('bilinmeyen konu anahtarı: ' + t); });
const EXTRA_CODE = movedCode.concat(SRC.extraCode).map(q => prep(q, 'ek kod'));

// aynı soru metni iki kez geçmesin
const seen = {};
[].concat(...EXAMS.map(e => e.questions), ...Object.values(TOPIC_QUESTIONS), EXTRA_CODE).forEach(q => {
  const k = q.q.trim();
  if (seen[k]) errors.push('tekrar eden soru: ' + k.slice(0, 60));
  seen[k] = 1;
});

if (errors.length) {
  console.error('HATA (' + errors.length + '):\n- ' + errors.join('\n- '));
  process.exit(1);
}

const header = '/* OTOMATİK ÜRETİLDİ: elle düzenleme. Kaynak tools/questions.src.js, üretmek için: node tools/build.js\n' +
  '   a: doğru şık indeksi (0 = A). tf: 0 = Doğru, 1 = Yanlış. blanks: kabul edilen cevaplar, cs: büyük/küçük harf duyarlı. */\n';
const js = header +
  'window.EXAMS = ' + JSON.stringify(EXAMS, null, 1) + ';\n' +
  'window.TOPIC_QUESTIONS = ' + JSON.stringify(TOPIC_QUESTIONS, null, 1) + ';\n' +
  'window.EXTRA_CODE = ' + JSON.stringify(EXTRA_CODE, null, 1) + ';\n';
fs.writeFileSync(path.join(ROOT, 'assets/questions.js'), js);

console.log('0 hata. ' + count + ' soru yazıldı.');
console.log('Çoktan seçmeli doğru şık dağılımı:', dist);
console.log('D/Y dağılımı:', tfDist);
