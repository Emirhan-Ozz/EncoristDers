/* GER101 soru bankası. Kaynak: Schritte international Neu 1, Lektion 1–4.
   tl1–tl4: Arbeitsbuch "Test Lektion" sayfaları birebir, cevaplar "Lösungen zu den Tests"ten.
   Diğerleri: kitabın kelime ve yapılarıyla yazıldı. Çoktan seçmelide doğru şık yazarken hep ilk sıradadır,
   M() onu soru metnine bağlı sabit bir tohumla karıştırır (doğru cevap hep A olmasın diye). */
(function () {
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function M(o) {
    var n = o.opts.length, idx = [], r = rng(hash(o.q + '|' + (o.listen || '') + '|' + (o.text || '') + '|' + o.opts.join('/')));
    for (var i = 0; i < n; i++) idx.push(i);
    for (var j = n - 1; j > 0; j--) { var k = Math.floor(r() * (j + 1)); var t = idx[j]; idx[j] = idx[k]; idx[k] = t; }
    var why = {};
    var opts = idx.map(function (orig, pos) { if (o.why && o.why[orig]) why[pos] = o.why[orig]; return o.opts[orig]; });
    o.type = 'mc'; o.opts = opts; o.a = idx.indexOf(0); o.why = why;
    return o;
  }
  function F(o) { o.type = 'fill'; o.cs = !!o.cs; return o; }
  function C(o) { o.type = 'code'; o.blanks = o.blanks.map(function (b) { return { ans: b, cs: false }; }); return o; }
  function O(o) { o.type = 'open'; return o; }
  window.__Q = { M: M, F: F, C: C, O: O };

  /* ================= Kitaptaki Test Lektion 1–4 ================= */
  var tl1 = [
    C({ topic: 'begruessung', src: 'Test L1 · Aufgabe 1', title: '1 Ergänzen Sie. (selamlaşmalar)',
      q: 'Resimdeki duruma göre selamı yaz. (a örnek: **Hallo**)',
      code: 'b  sabah, el sıkışma        (G … r …)   →  {{1}}\nc  akşam                    (… t … d)   →  {{2}}\nd  ayrılırken, resmi        (A … s …)   →  {{3}}\ne  ayrılırken, el sallama   (… c …)     →  {{4}}\nf  yatarken                 (… u … a …) →  {{5}}',
      blanks: [['Guten Morgen'], ['Guten Abend'], ['Auf Wiedersehen'], ['Tschüs', 'Tschüss'], ['Gute Nacht']],
      exps: ['`Guten Morgen` (sabah)', '`Guten Abend` (akşam)', '`Auf Wiedersehen` (yüz yüze resmi veda)', '`Tschüs` (samimi veda)', '`Gute Nacht` (iyi geceler)'] }),
    C({ topic: 'person', src: 'Test L1 · Aufgabe 2', title: '2 Ordnen Sie zu.',
      q: 'Kartvizitteki bilgilerin form karşılığı. Kelimeler: Stadt · Land · Straße · Postleitzahl · Hausnummer · E-Mail · Telefon',
      code: 'Alina Egger           → a Vorname   b Familienname\nBändelgasse 1         → c {{1}}   d {{2}}\n4057 Basel            → e {{3}}   f {{4}}\nSCHWEIZ               → g {{5}}\n+41 4161/822 94 33    → h {{6}}\nalina@egger.ch        → i {{7}}',
      blanks: [['Straße', 'Strasse'], ['Hausnummer'], ['Postleitzahl', 'PLZ'], ['Stadt'], ['Land'], ['Telefon'], ['E-Mail', 'Email']],
      exps: ['Bändelgasse = **Straße**', '1 = **Hausnummer**', '4057 = **Postleitzahl**', 'Basel = **Stadt**', 'Schweiz = **Land**', '+41 … = **Telefon**', '…@… = **E-Mail**'] }),
    C({ topic: 'satz', src: 'Test L1 · Aufgabe 3', title: '3 Ergänzen Sie.',
      q: 'Soru kelimesini yaz.',
      code: '◆ Wie heißen Sie?          ○ Alina Egger.\n◆ {{1}} kommen Sie?        ○ Aus der Schweiz.\n◆ Und {{2}} sprechen Sie?  ○ Deutsch und Italienisch.\n◆ {{3}} ist das?           ○ Das ist Dario Egger.',
      blanks: [['Woher'], ['was'], ['Wer']],
      exps: ['Cevap ülke → **Woher** (nereden)', 'Cevap diller → **was** (ne)', 'Cevap kişi → **Wer** (kim)'] }),
    C({ topic: 'verben', src: 'Test L1 · Aufgabe 4a', title: '4a Ergänzen Sie.',
      q: 'Fiili doğru çekimle yaz (ilk harfler verilmiş).',
      code: '◆ Hallo. Ich bin Mercy. Wie h{{1}} du?\n○ Ich h{{2}} Kim und k{{3}} aus China.\n◆ Du s{{4}} gut Deutsch.\n○ Nein, nur ein bisschen. Ich s{{5}} gut Englisch.',
      blanks: [['eißt', 'heißt'], ['eiße', 'heiße'], ['omme', 'komme'], ['prichst', 'sprichst'], ['preche', 'spreche']],
      exps: ['du **heißt**', 'ich **heiße**', 'ich **komme**', 'du **sprichst** (e → i)', 'ich **spreche**'],
      note: 'Sadece eksik harfleri ya da kelimenin tamamını yazabilirsin; ikisi de kabul.' }),
    C({ topic: 'verben', src: 'Test L1 · Aufgabe 4b', title: '4b Ergänzen Sie.',
      q: 'Fiili doğru çekimle yaz (ilk harfler verilmiş).',
      code: '▲ Guten Morgen. Mein Name i{{1}} Hinata Numajiri.\n□ Entschuldigung, wie h{{2}} Sie?\n▲ Hinata Numajiri.\n□ Ah, ja. Guten Morgen, Herr Numajiri.\n  Ich b{{3}} John Winterfield und das i{{4}} Frau Bianchi.',
      blanks: [['st', 'ist'], ['eißen', 'heißen'], ['in', 'bin'], ['st', 'ist']],
      exps: ['mein Name **ist**', 'Sie **heißen**', 'ich **bin**', 'das **ist**'] }),
    C({ topic: 'begruessung', src: 'Test L1 · Aufgabe 5', title: '5 Ordnen Sie zu.',
      q: 'Telefon konuşmasını tamamla. Kelimeler: Einen Moment · Tut mir leid · Ich buchstabiere · Entschuldigung · Danke',
      code: '◆ Firma Computec, Moritz Spengler, guten Tag.\n○ Guten Tag. Mein Name ist Paulinho. Ist Frau Egger da?\n◆ Guten Tag, Herr … {{1}}, wie ist Ihr Name?\n○ Paulinho. {{2}}: P – A – U – L – I – N – H – O.\n◆ Ah, ja. {{3}}, Herr Paulinho. {{4}}, bitte …\n  Herr Paulinho? {{5}}, Frau Egger ist nicht da.\n○ Ja, gut. Danke. Auf Wiederhören.',
      blanks: [['Entschuldigung'], ['Ich buchstabiere'], ['Danke'], ['Einen Moment'], ['Tut mir leid']],
      exps: ['**Entschuldigung** (pardon), adınız neydi?', '**Ich buchstabiere** (harf harf söylüyorum)', '**Danke**', '**Einen Moment**, bitte (bir dakika)', '**Tut mir leid** (üzgünüm), yok.'] })
  ];

  var tl2 = [
    C({ topic: 'possessiv', src: 'Test L2 · Aufgabe 1', title: '1 Ergänzen Sie.',
      q: 'Aile kelimelerini yaz.',
      code: 'a meine Eltern      = mein Vater und meine {{1}}\nb meine Geschwister = mein {{2}} und meine {{3}}\nc meine Kinder      = mein {{4}} und meine {{5}}\nd meine Großeltern  = mein {{6}} und meine {{7}}',
      blanks: [['Mutter'], ['Bruder'], ['Schwester'], ['Sohn'], ['Tochter'], ['Opa', 'Großvater'], ['Oma', 'Großmutter']],
      exps: ['**Mutter**', '**Bruder**', '**Schwester**', '**Sohn**', '**Tochter**', '**Opa / Großvater**', '**Oma / Großmutter**'] }),
    C({ topic: 'zahlen', src: 'Test L2 · Aufgabe 2', title: '2 Ergänzen Sie die Zahlen.',
      q: 'Sayıları yazıyla yaz. (a örnek: 4 vier)',
      code: 'b  9  {{1}}\nc 16  {{2}}\nd 13  {{3}}\ne 11  {{4}}\nf 20  {{5}}',
      blanks: [['neun'], ['sechzehn'], ['dreizehn'], ['elf'], ['zwanzig']],
      exps: ['9 **neun**', '16 **sechzehn** (sechs’in s’si düşer)', '13 **dreizehn**', '11 **elf**', '20 **zwanzig**'] }),
    C({ topic: 'person', src: 'Test L2 · Aufgabe 3', title: '3 Ergänzen Sie.',
      q: 'Eksik kelimeleri yaz (ilk harfler verilmiş).',
      code: '◆ Wo wohnen Sie, Herr Jovanović?\n○ In Eisenstadt.\n◆ Und wo sind Sie g e b {{1}}?\n○ In Belgrad. Das ist die H {{2}} von Serbien.\n◆ Aha. Haben Sie F {{3}} hier in Österreich?\n○ Nein. Ich bin l {{4}}.',
      blanks: [['oren', 'geboren'], ['auptstadt', 'Hauptstadt'], ['amilie', 'Familie'], ['edig', 'ledig']],
      exps: ['**geboren** (doğmuş)', '**Hauptstadt** (başkent)', '**Familie**', '**ledig** (bekar)'], note: 'Eksik harfleri ya da kelimenin tamamını yazabilirsin.' }),
    C({ topic: 'possessiv', src: 'Test L2 · Aufgabe 4', title: '4 Ordnen Sie zu.',
      q: 'Kelimeler: dein · Deine · Er · Ihre · mein · sie · Sie',
      code: 'a ◆ Haben Sie Kinder, Frau Glöckl?\n  ○ Ja. Das sind meine Kinder.\n  ◆ Wie alt sind {{1}} Kinder?\n  ○ {{2}} sind 19 und 20.\nb ▲ Das ist {{3}} Mann.\n  □ Woher kommt {{4}} Mann?\n  ▲ Aus der Ukraine. {{5}} lebt schon 20 Jahre in Deutschland.\nc ◆ {{6}} Tochter lebt in Paris, oder?\n  ● Ja, genau, {{7}} lernt Französisch.',
      blanks: [['Ihre'], ['Sie'], ['mein'], ['dein'], ['Er'], ['Deine'], ['sie']],
      exps: ['Frau Glöckl’e resmi + Kinder çoğul → **Ihre**', 'Kinder → **Sie** (onlar, cümle başı)', '**mein** Mann', '**dein** Mann', 'der Mann → **Er**', 'die Tochter → **Deine**', 'die Tochter → **sie**'] }),
    C({ topic: 'verben', src: 'Test L2 · Aufgabe 5 (1)', title: '5 Ergänzen Sie in der richtigen Form. (1. kısım)',
      q: 'Parantezdeki fiili çek.',
      code: '◆ Wir sind (sein) Dascha und Mascha.\n  Wir {{1}} (kommen) aus Russland.\n  Wir {{2}} (leben) in der Schweiz.\n  Wir {{3}} (sprechen) Russisch und Deutsch.\n  Aber Mascha {{4}} (sprechen) auch gut Englisch.\n○ Aha. Und {{5}} (sein) ihr verheiratet?',
      blanks: [['kommen'], ['leben'], ['sprechen'], ['spricht'], ['seid']],
      exps: ['wir **kommen**', 'wir **leben**', 'wir **sprechen**', 'Mascha = sie → **spricht**', 'ihr **seid**'] }),
    C({ topic: 'verben', src: 'Test L2 · Aufgabe 5 (2)', title: '5 Ergänzen Sie in der richtigen Form. (2. kısım)',
      q: 'Parantezdeki fiili çek.',
      code: '○ {{1}} (haben) ihr Kinder?\n◆ Ich {{2}} (sein) ledig und {{3}} (haben) keine Kinder.\n  Mascha {{4}} (sein) verheiratet. Sie {{5}} (haben) eine Tochter.',
      blanks: [['Habt'], ['bin'], ['habe'], ['ist'], ['hat']],
      exps: ['ihr **habt** (soru, başta: Habt)', 'ich **bin**', 'ich **habe**', 'Mascha **ist**', 'sie **hat**'] }),
    C({ topic: 'begruessung', src: 'Test L2 · Aufgabe 6', title: '6 Schreiben Sie Fragen.',
      q: 'Soruyu yaz (soru işaretsiz de olur).',
      code: 'a ◆ Hallo, Sarah. Na, wie geht’s?\n  ○ Danke, gut. {{1}}?\n  ◆ Auch gut, danke. Das ist Herr Wolf.\n  ○ Guten Tag. {{2}}?\n  ▲ Sehr gut.\nb □ Herr Wolf, {{3}}?\n  ▲ Ich wohne in Berlin.\n  □ {{4}}?\n  ▲ Friedrichstraße 118, 10117 Berlin.',
      blanks: [['Und dir', 'Und wie geht es dir', 'Und wie geht’s dir', "Und wie geht's dir", 'Und wie gehts dir', 'Und wie geht’s', "Und wie geht's"],
        ['Wie geht es Ihnen', 'Wie geht’s', "Wie geht's", 'Wie gehts'],
        ['wo wohnen Sie', 'Wo wohnen Sie'],
        ['Wie ist Ihre Adresse', 'Was ist Ihre Adresse', 'Wo wohnen Sie genau']],
      exps: ['Sarah’ya samimi: **Und (wie geht es) dir?**', 'Herr Wolf’a resmi: **Wie geht es Ihnen?** (kitap: Wie geht’s da kabul)', '**wo wohnen Sie?**', '**Wie ist Ihre Adresse?**'] })
  ];

  var tl3 = [
    C({ topic: 'zahlen', src: 'Test L3 · Aufgabe 1', title: '1 Bilden Sie Wörter und ordnen Sie zu.',
      q: 'Hecelerden kelime kur. Heceler: was · Kar · ghurt · schen · feln · ne · Fla · cher · Mi · tof · ser · Be · Jo · ral',
      code: 'a (1 kg’lık patates torbası)   ein Kilo {{1}}\nb (iki yoğurt kabı)            zwei {{2}} {{3}}\nc (iki şişe su)                zwei {{4}} {{5}}',
      blanks: [['Kartoffeln'], ['Becher'], ['Joghurt'], ['Flaschen'], ['Mineralwasser']],
      exps: ['Kar-tof-feln → **Kartoffeln**', 'Be-cher → **Becher**', 'Jo-ghurt → **Joghurt**', 'Fla-schen → **Flaschen**', 'Mi-ne-ral-was-ser → **Mineralwasser**'] }),
    C({ topic: 'satz', src: 'Test L3 · Aufgabe 2', title: '2 Schreiben Sie Fragen.',
      q: 'Kelimelerden soru kur. (a örnek: Sind das Äpfel?)',
      code: 'b {{1}}?  (Brot – bitte – du – kaufst)\nc {{2}}?  (möchten – Sie – was)\nd {{3}}?  (wir – brauchen – Orangen)\ne {{4}}?  (brauchen – was – wir)',
      blanks: [['Kaufst du bitte Brot', 'Kaufst du Brot bitte'], ['Was möchten Sie'], ['Brauchen wir Orangen'], ['Was brauchen wir']],
      exps: ['Evet/hayır sorusu: fiil başta → **Kaufst du bitte Brot?**', 'W-sorusu: Was + fiil → **Was möchten Sie?**', '**Brauchen wir Orangen?**', '**Was brauchen wir?**'] }),
    C({ topic: 'artikel', src: 'Test L3 · Aufgabe 3', title: '3 Ordnen Sie zu.',
      q: 'Kelimeler: ein · ein · eine · eine · kein · keine · keine',
      code: 'a ◆ Hmm, Schokolade!  ○ He! Das ist meine Schokolade.\nb ◆ Haben Sie Äpfel?\n  ○ Nein, tut mir leid. Ich habe {{1}} Äpfel.\nc ◆ Wie heißt das auf Deutsch?  ○ Das ist {{2}} Würstchen.\n  ◆ Und ist das {{3}} Birne?     ○ Nein. Das ist doch {{4}} Birne.\n  ◆ Ist das {{5}} Ei?\n  ○ Nein, das ist {{6}} Ei, das ist {{7}} Kartoffel.',
      blanks: [['keine'], ['ein'], ['eine'], ['keine'], ['ein'], ['kein'], ['eine']],
      exps: ['Äpfel çoğul → **keine**', 'das Würstchen → **ein**', 'die Birne → **eine**', 'olumsuz, die → **keine**', 'das Ei → **ein**', 'olumsuz, das → **kein**', 'die Kartoffel → **eine**'] }),
    C({ topic: 'plural', src: 'Test L3 · Aufgabe 4', title: '4 Ergänzen Sie.',
      q: 'Çoğulunu yaz. (a örnek: eine Banane – fünf Bananen)',
      code: 'b ein Kuchen     vier  {{1}}\nc ein Würstchen  zwei  {{2}}\nd eine Kiwi      drei  {{3}}\ne ein Ei         sechs {{4}}\nf ein Brot       zwei  {{5}}',
      blanks: [['Kuchen'], ['Würstchen'], ['Kiwis'], ['Eier'], ['Brote']],
      exps: ['Kuchen → **Kuchen** (değişmez)', 'Würstchen → **Würstchen** (-chen değişmez)', 'Kiwi → **Kiwis**', 'Ei → **Eier**', 'Brot → **Brote**'] }),
    C({ topic: 'essen', src: 'Test L3 · Aufgabe 5', title: '5 Ordnen Sie zu.',
      q: 'Kelimeler: Nein, danke · Haben Sie · Sonst noch etwas · Wie viel kostet',
      code: '◆ Ich brauche Birnen. (a) {{1}} Birnen? (b)\n○ Ja, natürlich.\n◆ {{2}} ein Kilo Birnen? (c)\n○ Ein Kilo Birnen kostet 2,99 €, bitte.\n◆ Gut. Ein Pfund, bitte.\n○ Sehr gern. {{3}}? (d)\n◆ {{4}}. (e)',
      blanks: [['Haben Sie'], ['Wie viel kostet'], ['Sonst noch etwas'], ['Nein, danke', 'Nein danke']],
      exps: ['**Haben Sie** Birnen?', '**Wie viel kostet** ein Kilo?', '**Sonst noch etwas?** (başka?)', '**Nein, danke.**'] })
  ];

  var tl4 = [
    C({ topic: 'wohnung', src: 'Test L4 · Aufgabe 1', title: '1 Wie heißt das Gegenteil?',
      q: 'Zıt anlamlısını yaz. (a örnek: teuer – billig)',
      code: 'b neu    {{1}}\nc schön  {{2}}\nd breit  {{3}}\ne hell   {{4}}\nf klein  {{5}}',
      blanks: [['alt'], ['hässlich', 'haesslich'], ['schmal'], ['dunkel'], ['groß', 'gross']],
      exps: ['neu ↔ **alt**', 'schön ↔ **hässlich**', 'breit ↔ **schmal**', 'hell ↔ **dunkel**', 'klein ↔ **groß**'] }),
    C({ topic: 'artikel', src: 'Test L4 · Aufgabe 2', title: '2 Bilden Sie Wörter und ordnen Sie zu. der – das – die',
      q: 'Hecelerden kelime kur, artikeliyle yaz. Heceler: pe · Kühl · mer · Schreib · zim · sel · Wohn · Lam · schrank · tisch · Ses',
      code: 'Wohnung:       die Küche · {{1}}\nMöbel:         {{2}} · {{3}}\nElektrogeräte: {{4}} · {{5}}',
      blanks: [['das Wohnzimmer'], ['der Schreibtisch', 'der Sessel'], ['der Sessel', 'der Schreibtisch'], ['der Kühlschrank', 'die Lampe'], ['die Lampe', 'der Kühlschrank']],
      exps: ['**das Wohnzimmer** (Wohn-zim-mer)', '**der Schreibtisch** (Schreib-tisch)', '**der Sessel** (Ses-sel)', '**der Kühlschrank** (Kühl-schrank)', '**die Lampe** (Lam-pe)'],
      note: 'Aynı gruptaki iki kelime yer değiştirebilir. Bileşik isimde artikel son kelimeden: das Zimmer → das Wohnzimmer, der Tisch → der Schreibtisch, der Schrank → der Kühlschrank.' }),
    C({ topic: 'plural', src: 'Test L4 · Aufgabe 3', title: '3 Ergänzen Sie die Wörter aus 2 wie im Beispiel.',
      q: 'Çoğullarını artikeliyle yaz. (a örnek: die Küchen)',
      code: 'b (Wohnzimmer)  {{1}}\nc (Schreibtisch) {{2}}\nd (Sessel)       {{3}}\ne (Kühlschrank)  {{4}}\nf (Lampe)        {{5}}',
      blanks: [['die Wohnzimmer'], ['die Schreibtische'], ['die Sessel'], ['die Kühlschränke'], ['die Lampen']],
      exps: ['**die Wohnzimmer** (değişmez)', '**die Schreibtische** (+e)', '**die Sessel** (değişmez)', '**die Kühlschränke** (¨e)', '**die Lampen** (+n)'] }),
    C({ topic: 'pronomen', src: 'Test L4 · Aufgabe 4', title: '4 Im Möbelhaus: er – es – sie',
      q: 'Doğru zamiri yaz.',
      code: '◆ Der Schrank ist sehr schön. Was kostet er?\n○ {{1}} kostet 500 Euro.\n◆ Aha. Und was kostet das Regal dort?\n○ Nur 125 Euro. {{2}} ist auch sehr modern.\n◆ Ja, das finde ich auch. Die Lampe ist auch schön. Ist {{3}} teuer?\n○ Nein. Und schauen Sie mal: Wie gefallen Ihnen die Stühle?\n◆ Nicht so gut. {{4}} sind ziemlich schmal.',
      blanks: [['Er'], ['Es'], ['sie'], ['Sie']],
      exps: ['der Schrank → **Er**', 'das Regal → **Es**', 'die Lampe → **sie**', 'die Stühle (Pl.) → **Sie**'] }),
    C({ topic: 'artikel', src: 'Test L4 · Aufgabe 5', title: '5 Ergänzen Sie nicht oder kein/keine.',
      q: '(a örnek: Sie kommt nicht aus der Schweiz.)',
      code: 'b Sie ist {{1}} verheiratet und sie hat {{2}} Kinder.\nc Sie hat {{3}} Wohnung. Sie wohnt bei Freunden.',
      blanks: [['nicht'], ['keine'], ['keine']],
      exps: ['sıfat (verheiratet) → **nicht**', 'isim, çoğul → **keine**', 'isim, die Wohnung → **keine**'] }),
    C({ topic: 'wohnung', src: 'Test L4 · Aufgabe 6', title: '6 Ordnen Sie zu.',
      q: 'Kelimeler: Wie groß sind sie · er findet · Sag mal · gefällt mir gut · Oh, das ist schön · neu und modern',
      code: '◆ {{1}}, wie ist denn deine Wohnung?\n○ Sie {{2}}! Die Küche ist ganz {{3}}.\n◆ {{4}}. Und die Zimmer? {{5}}?\n○ Sie sind ziemlich klein, aber hell.\n◆ Was sagt denn Julian? Gefällt Julian die Wohnung auch?\n○ Ja, {{6}} sie auch sehr schön.\n◆ Das ist super!',
      blanks: [['Sag mal'], ['gefällt mir gut'], ['neu und modern'], ['Oh, das ist schön', 'Oh das ist schön'], ['Wie groß sind sie'], ['er findet']],
      exps: ['**Sag mal** (söylesene)', 'Sie **gefällt mir gut**', 'ganz **neu und modern**', '**Oh, das ist schön.**', '**Wie groß sind sie?**', 'Julian → **er findet** sie schön'] })
  ];

  window.EXAMS = [
    { id: 'tl1', group: 'hoca', mode: 'practice', featured: true, title: 'Test Lektion 1', desc: 'AB s. 18 · selamlaşma, form, W-soruları, fiil, telefon', questions: tl1 },
    { id: 'tl2', group: 'hoca', mode: 'practice', featured: true, title: 'Test Lektion 2', desc: 'AB s. 28 · aile, sayılar, mein/dein/Ihr, sein/haben', questions: tl2 },
    { id: 'tl3', group: 'hoca', mode: 'practice', featured: true, title: 'Test Lektion 3', desc: 'AB s. 39 · yiyecek, soru kurma, ein/kein, çoğul, alışveriş', questions: tl3 },
    { id: 'tl4', group: 'hoca', mode: 'practice', featured: true, title: 'Test Lektion 4', desc: 'AB s. 50 · ev, zıt anlam, der/das/die, er/es/sie, nicht/kein', questions: tl4 }
  ];
})();
