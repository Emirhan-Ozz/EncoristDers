/* GER101 Almanca I · Ara sınav (11 Kasım 2026, 09.00–10.00)
   Kaynak: Schritte international Neu A1.1, Kursbuch + Arbeitsbuch, Lektion 1–4
   (Lernwortschatz, Grammatikübersicht, AB "Test Lektion" sayfaları ve "Lösungen zu den Tests"). */

window.COURSE = {
  id: 'ger101', lang: 'none',
  storeKey: 'ger101-best', themeKey: 'ger101-theme', defaultTheme: 'dark',
  reviewTitle: 'GER101 · Genel tekrar (Lektion 1–4)',
  reviewLead: 'Ara sınav **11 Kasım Çarşamba 09.00–10.00**. Sorumlu olduğumuz kısım: Schritte international Neu 1, **Lektion 1–4** (Guten Tag · Meine Familie · Essen und Trinken · Meine Wohnung). Her konunun sonunda konu testi var; kelimeler için üstteki **Kelimeler** sekmesine bak.',
  testLead: 'Sınav 4 bölüm: **Dinleme · Gramer · Okuduğunu anlama · 2 yazma konusu**. Puan dağılımını hoca söylemedi; deneme vizelerinde 20 + 30 + 20 + 30 = 100 varsayıldı. Dinleme soruları tarayıcının Almanca sesiyle okunur (Chrome/Edge önerilir).',
  formatTitle: 'Ara sınav formatı (hocanın duyurusu)',
  formatNote: 'Bölümler hocanın duyurusundan. **Puanlar ve soru sayıları varsayım**; gerçek sınavda farklı olabilir. Hocanın önerisi: KB sonundaki ünite tekrarları → AB sonundaki **Test Lektion** → Lernwortschatz kelimeleri. Test Lektion’ların hepsi, kitabın kendi cevap anahtarıyla Test sekmesinde.',
  hocaLink: { href: '#test/tl1', text: 'Test Lektion 1–4’ü çöz →' },
  hocaTitle: 'Kitaptaki Test Lektion 1–4 (hocanın önerdiği)',
  hocaNote: 'Arbeitsbuch’taki testler birebir; cevaplar kitabın “Lösungen zu den Tests” sayfasından. Her soru anında kontrol edilir.',
  noCodeTest: true,
  trapsNote: 'Test Lektion’larda ve gramer sorularında en çok hata yapılan noktalar.',
  tocFormat: 'Sınav formatı',
  sections: [
    { id: 'hoeren', name: '1. Dinleme (Hören)', n: 5, each: 4 },
    { id: 'grammatik', name: '2. Gramer (Grammatik)', n: 10, each: 3 },
    { id: 'lesen', name: '3. Okuduğunu anlama (Lesen)', n: 5, each: 4 },
    { id: 'yazma', name: '4. Yazma (Schreiben)', n: 2, each: 15 }
  ],
  randomTitle: 'Rastgele ara sınav',
  randomDesc: 'Her açılışta farklı: 5 dinleme, 10 gramer, 5 okuma, 2 yazma. Az gördüğün sorular önce.'
};

window.LESSON_NAMES = { 1: 'Guten Tag. Mein Name ist …', 2: 'Meine Familie', 3: 'Essen und Trinken', 4: 'Meine Wohnung' };

window.EXAM_FORMAT = [
  { range: 'Bölüm 1', what: 'Dinleme (Hören)', big: '~20', small: 'puan (varsayım)' },
  { range: 'Bölüm 2', what: 'Gramer (Grammatik)', big: '~30', small: 'puan (varsayım)' },
  { range: 'Bölüm 3', what: 'Okuduğunu anlama', big: '~20', small: 'puan (varsayım)' },
  { range: 'Bölüm 4', what: '2 yazma konusu', big: '~30', small: 'puan (varsayım)' }
];

window.TRAPS = [
  { t: '`du heißt` (heißen’in kökü zaten -ß ile biter, `heißst` yok). Aynısı: `du sitzt`, `er heißt`.', topic: 'verben' },
  { t: '`sprechen` düzensiz: `du sprichst`, `er/sie spricht`; ama `ich spreche`, `wir sprechen`.', topic: 'verben' },
  { t: '`sein`: ich **bin**, du **bist**, er **ist**, wir **sind**, ihr **seid**, sie/Sie **sind**. `ihr sind` YANLIŞ.', topic: 'verben' },
  { t: '`haben`: du **hast**, er **hat** (`habst/habt` değil). ihr **habt**.', topic: 'verben' },
  { t: 'W-sorusunda fiil **2. sırada**: `Woher kommen Sie?` · Evet/hayır sorusunda fiil **başta**: `Kommen Sie aus Polen?`', topic: 'satz' },
  { t: '`Sie` (büyük S) = siz (resmi), fiili `sie` (onlar) ile aynı: `Sie kommen`. Küçük `sie` = o (kadın) / onlar.', topic: 'pronomen' },
  { t: 'Eşya için de er/es/sie: `Der Tisch` → **er**, `das Sofa` → **es**, `die Lampe` → **sie**, çoğul → **sie**.', topic: 'pronomen' },
  { t: '`mein` / `meine`: der/das → **mein** (mein Vater, mein Kind), die + çoğul → **meine** (meine Mutter, meine Kinder).', topic: 'possessiv' },
  { t: 'İsim olumsuzluğu **kein/keine**, geri kalanı **nicht**: `Das ist kein Apfel.` ama `Das ist nicht teuer.` / `Sie kommt nicht aus Polen.`', topic: 'artikel' },
  { t: 'Çoğulda artikel hep **die**, belirsiz artikelin çoğulu **yok**: `ein Apfel` → `Äpfel`, `kein Apfel` → `keine Äpfel`.', topic: 'artikel' },
  { t: 'Çoğulda umlaut: der Apfel → die **Ä**pfel, der Saft → die S**ä**fte, das Haus → die H**ä**user, die Mutter → die M**ü**tter.', topic: 'plural' },
  { t: 'Sayılarda birler önce: 21 = **einundzwanzig**, 39 = neununddreißig. 16 = sech**zehn** (s düşer), 17 = sieb**zehn**, 30 = drei**ß**ig.', topic: 'zahlen' },
  { t: 'Telefonda vedalaşma **Auf Wiederhören**, yüz yüze **Auf Wiedersehen**.', topic: 'begruessung' },
  { t: '`Wie geht es Ihnen?` (resmi) / `Wie geht’s?` / `Wie geht es dir?` (samimi). Cevap: `Danke, gut. Und Ihnen? / Und dir?`', topic: 'begruessung' },
  { t: '`aus` + ülke: `Ich komme aus Deutschland.` ama `aus der Schweiz`, `aus der Türkei` (artikelli ülkeler).', topic: 'person' }
];

window.TOPICS = [
  {
    id: 'begruessung', title: 'Selamlaşma, telefon, alfabe', src: 'Lektion 1 (A, D) · Lektion 2 (A) · Test Lektion 1/1, 1/5, 2/6',
    blocks: [
      { t: 'table', head: ['Almanca', 'Ne zaman / anlamı'], rows: [
        ['`Guten Morgen!`', 'Sabah (~11’e kadar)'],
        ['`Guten Tag!`', 'Gün içinde, resmi'],
        ['`Guten Abend!`', 'Akşam'],
        ['`Gute Nacht!`', 'Yatarken / gece vedası'],
        ['`Hallo!`', 'Merhaba (samimi)'],
        ['`Tschüs!`', 'Hoşça kal (samimi)'],
        ['`Auf Wiedersehen!`', 'Hoşça kalın (yüz yüze, resmi)'],
        ['`Auf Wiederhören!`', 'Hoşça kalın (**telefonda**)']
      ] },
      { t: 'p', text: '**Nasılsın?** (Lektion 2)' },
      { t: 'table', head: ['Soru', 'Cevap'], rows: [
        ['`Wie geht es Ihnen?` (resmi)', '`Sehr gut, danke. Und Ihnen?`'],
        ['`Wie geht’s?` / `Wie geht es dir?` (samimi)', '`Danke, gut. Und dir?`'],
        ['', '`Super! · Sehr gut. · Gut. · Es geht. · Nicht so gut.`']
      ] },
      { t: 'p', text: '**Telefon kalıpları** (Test Lektion 1/5’in hepsi bunlar):' },
      { t: 'ul', items: [
        '`Firma Computec, Moritz Spengler, guten Tag.` → firmayla açılış',
        '`Ist Frau Egger da?` → Frau Egger orada mı?',
        '`Entschuldigung, wie ist Ihr Name?` → Pardon, adınız neydi?',
        '`Ich buchstabiere: P-A-U-L-I-N-H-O.` / `Buchstabieren Sie, bitte.` → harf harf söyleme',
        '`Einen Moment, bitte.` → bir dakika lütfen · `Tut mir leid, Frau Egger ist nicht da.` → üzgünüm, yok',
        '`Danke. / Vielen Dank.` · `Wie bitte?` → efendim? (anlamadım) · `Auf Wiederhören.`'
      ] },
      { t: 'p', text: '**Alfabe**: a (a), b (be), c (tse), d (de), e (e), f (ef), g (ge), h (ha), i (i), j (yot), k (ka), l (el), m (em), n (en), o (o), p (pe), q (ku), r (er), s (es), t (te), u (u), v (fau), w (ve), x (iks), y (üpsilon), z (tset), **ä, ö, ü, ß (eszet)**.' },
      { t: 'tip', text: 'Dinlemede genelde selamlaşmanın **günün hangi saati** ya da **telefon mu yüz yüze mi** olduğu sorulur. `Wiederhören` = telefon.' }
    ]
  },
  {
    id: 'satz', title: 'Soru kelimeleri ve cümle yapısı', src: 'Lektion 1 (B, C), Lektion 2, Lektion 3 (C) · Grammatikübersicht “Sätze” · Test Lektion 1/3, 2/6, 3/2',
    blocks: [
      { t: 'table', head: ['W-Wort', 'Anlam', 'Örnek'], rows: [
        ['`Wer?`', 'Kim?', '`Wer ist das?` – Das ist Lara.'],
        ['`Wie?`', 'Nasıl? / Ne? (isim)', '`Wie heißen Sie?` – Ich heiße …'],
        ['`Woher?`', 'Nereden?', '`Woher kommen Sie?` – Aus der Türkei.'],
        ['`Wo?`', 'Nerede?', '`Wo wohnen Sie?` – In Izmir.'],
        ['`Was?`', 'Ne?', '`Was sprechen Sie?` – Türkisch und Englisch.'],
        ['`Wie alt?`', 'Kaç yaşında?', '`Wie alt bist du?` – Ich bin 20 (Jahre alt).'],
        ['`Wie viel?`', 'Ne kadar?', '`Wie viel kostet das?` – 2,99 €.']
      ] },
      { t: 'p', text: '**Fiil hep 2. pozisyonda** (düz cümle ve W-sorusu):' },
      { t: 'table', head: ['Pozisyon 1', 'Pozisyon 2 (fiil)', 'Gerisi'], rows: [
        ['Ich', '**komme**', 'aus der Türkei.'],
        ['Mein Name', '**ist**', 'Emirhan.'],
        ['Woher', '**kommen**', 'Sie?'],
        ['Was', '**möchten**', 'Sie?']
      ] },
      { t: 'p', text: '**Evet/hayır sorusu** (Satzfrage, Lektion 3): fiil **başa** gelir. Cevap Ja / Nein.' },
      { t: 'code', code: 'Du kaufst bitte Brot.   →  Kaufst du bitte Brot?\nWir brauchen Orangen.   →  Brauchen wir Orangen?\nDas sind Äpfel.         →  Sind das Äpfel?' },
      { t: 'trap', text: 'Test Lektion 3/2 tipi: kelimeler karışık verilir, soru kurarsın. Kelimeler arasında W-kelimesi varsa (`was`) o başa, fiil 2. sıraya: `Was brauchen wir?` W-kelimesi yoksa fiil başa: `Brauchen wir Orangen?`' }
    ]
  },
  {
    id: 'verben', title: 'Fiil çekimi: düzenli, sprechen, sein, haben', src: 'Lektion 1 (B, C) · Lektion 2 (C, D) · Grammatikübersicht “Verben” · Test Lektion 1/4, 2/5',
    blocks: [
      { t: 'table', head: ['', 'kommen', 'heißen', 'sprechen', 'sein', 'haben'], rows: [
        ['ich', 'komm**e**', 'heiß**e**', 'sprech**e**', '**bin**', 'hab**e**'],
        ['du', 'komm**st**', 'heiß**t**', 'spr**i**ch**st**', '**bist**', 'ha**st**'],
        ['er/es/sie', 'komm**t**', 'heiß**t**', 'spr**i**ch**t**', '**ist**', 'ha**t**'],
        ['wir', 'komm**en**', 'heiß**en**', 'sprech**en**', '**sind**', 'hab**en**'],
        ['ihr', 'komm**t**', 'heiß**t**', 'sprech**t**', '**seid**', 'hab**t**'],
        ['sie/Sie', 'komm**en**', 'heiß**en**', 'sprech**en**', '**sind**', 'hab**en**']
      ] },
      { t: 'p', text: 'Düzenli fiiller `kommen` gibi: **wohnen, leben, lernen, kaufen, brauchen, kochen, trinken, kosten** (kosten: es kost**et**), **arbeiten** (du arbeit**est**, er arbeit**et**).' },
      { t: 'ul', items: [
        '`heißen`: kök -ß ile bittiği için **du heißt** (s eklenmez).',
        '`sprechen`: du/er’de **e → i**: du sprichst, er spricht. Aynı tip L3’te: **essen** → du **isst**, er **isst**.',
        '`möchten` (L3, istemek – kibar): ich möchte, du möchtest, er möchte, wir möchten, ihr möchtet, sie/Sie möchten.',
        '`finden` (L4): er findet · `gefallen` (L4): Die Wohnung **gefällt** mir. / Die Stühle **gefallen** mir.'
      ] },
      { t: 'trap', text: '`ihr` için hep **-t**: ihr kommt, ihr habt, ihr sprecht; ama `sein` → **ihr seid**. `Seid ihr verheiratet? Habt ihr Kinder?` (Test Lektion 2/5)' },
      { t: 'tip', text: 'Gramer bölümünde neredeyse kesin: parantez içindeki fiili doğru şahısla yaz. Önce öznenin kim olduğunu bul (Mascha = sie → spricht, ist, hat).' }
    ]
  },
  {
    id: 'pronomen', title: 'Şahıs zamirleri: du / Sie / ihr, er-es-sie', src: 'Lektion 1 (C) · Lektion 2 (C, D) · Lektion 4 (A) · Test Lektion 4/4',
    blocks: [
      { t: 'table', head: ['Tekil', '', 'Çoğul', ''], rows: [
        ['ich', 'ben', 'wir', 'biz'],
        ['du', 'sen (samimi)', 'ihr', 'siz (samimi, çok kişi)'],
        ['er / es / sie', 'o (eril / nötr / dişil)', 'sie', 'onlar'],
        ['**Sie**', 'siz (resmi, tek veya çok)', '**Sie**', 'siz (resmi)']
      ] },
      { t: 'ul', items: [
        '**du**: arkadaş, aile, çocuk; **Sie**: tanımadığın yetişkin, Herr / Frau ile hitap ettiğin kişi; **ihr**: birden fazla arkadaş.',
        'Sınıfta öğrenci arkadaşına: `Woher kommst du?` · Hocaya: `Woher kommen Sie?`'
      ] },
      { t: 'p', text: '**Eşyalar için de er/es/sie** (Lektion 4): artikel neyse zamir ona göre.' },
      { t: 'table', head: ['Artikel', 'Zamir', 'Örnek'], rows: [
        ['der Schrank', '**er**', 'Der Schrank ist schön. Was kostet **er**? – **Er** kostet 500 Euro.'],
        ['das Regal', '**es**', 'Und das Regal? – **Es** ist auch sehr modern.'],
        ['die Lampe', '**sie**', 'Die Lampe ist schön. Ist **sie** teuer?'],
        ['die Stühle (Pl.)', '**sie**', 'Wie gefallen Ihnen die Stühle? – **Sie** sind ziemlich schmal.']
      ] },
      { t: 'trap', text: 'Cümle başındaki `Sie`’nin "siz" mi "o/onlar" mı olduğunu fiil ve bağlamdan anla: `Sie ist ledig.` (o-kadın, ist), `Sie sind ledig.` (siz/onlar).' }
    ]
  },
  {
    id: 'possessiv', title: 'mein / dein / Ihr · aile', src: 'Lektion 2 (B, C) · Grammatikübersicht “Possessivartikel” · Test Lektion 2/1, 2/4',
    blocks: [
      { t: 'table', head: ['', 'der (maskulin)', 'das (neutral)', 'die (feminin)', 'die (Plural)'], rows: [
        ['benim', 'mein Bruder', 'mein Kind', 'mein**e** Schwester', 'mein**e** Kinder'],
        ['senin', 'dein Bruder', 'dein Kind', 'dein**e** Schwester', 'dein**e** Kinder'],
        ['sizin (resmi)', 'Ihr Bruder', 'Ihr Kind', 'Ihr**e** Schwester', 'Ihr**e** Kinder']
      ] },
      { t: 'p', text: '**Aile** (artikel + çoğul):' },
      { t: 'table', head: ['Erkek', 'Kadın', 'Birlikte (Pl.)'], rows: [
        ['der Vater, ¨ (baba)', 'die Mutter, ¨ (anne)', 'die **Eltern** (ebeveyn)'],
        ['der Bruder, ¨ (erkek kardeş)', 'die Schwester, -n (kız kardeş)', 'die **Geschwister** (kardeşler)'],
        ['der Sohn, ¨e (oğul)', 'die Tochter, ¨ (kız evlat)', 'die Kinder (çocuklar)'],
        ['der Großvater / der Opa', 'die Großmutter / die Oma', 'die **Großeltern**'],
        ['der Enkel', 'die Enkelin', '–'],
        ['der (Ehe)mann, ¨er', 'die (Ehe)frau, -en', 'das Ehepaar']
      ] },
      { t: 'tip', text: 'Test Lektion 2/1 birebir: meine Eltern = mein **Vater** und meine **Mutter** · Geschwister = mein **Bruder** und meine **Schwester** · Kinder = mein **Sohn** und meine **Tochter** · Großeltern = mein **Opa/Großvater** und meine **Oma/Großmutter**.' },
      { t: 'trap', text: '`Ihre` hem "sizin" (resmi, büyük I) hem cümle başında olabilir. `Wie alt sind Ihre Kinder?` – Kinder çoğul → **Ihre**.' }
    ]
  },
  {
    id: 'person', title: 'Kişisel bilgiler, ülkeler, form', src: 'Lektion 1 (C, E) · Lektion 2 (D, E) · Test Lektion 1/2, 2/3',
    blocks: [
      { t: 'table', head: ['Form alanı', 'Türkçe', 'Örnek'], rows: [
        ['Vorname / Familienname (Nachname)', 'Ad / Soyad', 'Alina / Egger'],
        ['Straße, Hausnummer', 'Sokak, kapı no', 'Bändelgasse 1'],
        ['Postleitzahl (PLZ), Stadt (Wohnort)', 'Posta kodu, şehir', '4057 Basel'],
        ['Land', 'Ülke', 'Schweiz'],
        ['Telefon, E-Mail', 'Telefon, e-posta', '+41 …, alina@egger.ch'],
        ['Geburtsort / geboren in', 'Doğum yeri', 'geboren in Izmir'],
        ['Alter', 'Yaş', '20 Jahre'],
        ['Familienstand', 'Medeni hal', '**ledig** (bekar), **verheiratet** (evli), **geschieden** (boşanmış), **verwitwet** (dul)']
      ] },
      { t: 'p', text: '**Kendini tanıtma kalıpları**:' },
      { t: 'code', code: 'Ich heiße … / Mein Name ist …\nIch komme aus der Türkei.  (aus + Land)\nIch wohne in Izmir.        (in + Stadt)\nIch bin 20 Jahre alt.\nIch bin ledig. Ich habe keine Kinder.\nIch spreche Türkisch, Englisch und ein bisschen Deutsch.\nIch lerne Deutsch.' },
      { t: 'table', head: ['Land (ülke)', 'Sprache (dil)'], rows: [
        ['Deutschland, Österreich, die Schweiz', 'Deutsch (İsviçre: auch Französisch, Italienisch)'],
        ['**die Türkei**', 'Türkisch'],
        ['Polen · Spanien · Italien · Frankreich', 'Polnisch · Spanisch · Italienisch · Französisch'],
        ['Russland · China · Griechenland · Großbritannien', 'Russisch · Chinesisch · Griechisch · Englisch']
      ] },
      { t: 'trap', text: '`aus der Türkei`, `aus der Schweiz` (die-ülkeler, `der` olur). Diğerleri artikelsiz: `aus Polen`, `aus Deutschland`. Başkentler: `Berlin ist die **Hauptstadt** von Deutschland.`' }
    ]
  },
  {
    id: 'zahlen', title: 'Sayılar, fiyatlar, miktarlar', src: 'Lektion 2 (D) 0–20 · Lektion 3 (D) fiyat · Lektion 4 (D) bir milyona kadar · Test Lektion 2/2',
    blocks: [
      { t: 'table', head: ['0–12', '13–20', 'Onlar'], rows: [
        ['0 null · 1 eins · 2 zwei · 3 drei', '13 dreizehn · 14 vierzehn', '20 zwanzig · 30 drei**ß**ig'],
        ['4 vier · 5 fünf · 6 sechs', '15 fünfzehn · 16 **sech**zehn', '40 vierzig · 50 fünfzig'],
        ['7 sieben · 8 acht · 9 neun', '17 **sieb**zehn · 18 achtzehn', '60 **sech**zig · 70 **sieb**zig'],
        ['10 zehn · 11 elf · 12 zwölf', '19 neunzehn · 20 zwanzig', '80 achtzig · 90 neunzig · 100 (ein)hundert']
      ] },
      { t: 'ul', items: [
        '21 = **ein**und**zwanzig**, 39 = neun**und**dreißig (önce birler, sonra onlar).',
        '125 = (ein)hundertfünfundzwanzig · 440 = vierhundertvierzig · 1.000 = (ein)tausend · 1.000.000 = eine Million.',
        'Fiyat: `2,99 €` = zwei Euro neunundneunzig · `0,80 €` = achtzig Cent · `Wie viel kostet …? / Was kostet …?`'
      ] },
      { t: 'table', head: ['Miktar', 'Örnek'], rows: [
        ['das Kilo (kg) · das Pfund (500 g) · das Gramm (g) · der Liter (l)', '`ein Kilo Kartoffeln`, `ein Pfund Birnen`, `200 Gramm Käse`, `ein Liter Milch`'],
        ['die Flasche · die Dose · der Becher · das Glas', '`zwei Flaschen Mineralwasser`, `zwei Becher Joghurt`, `eine Dose Tomaten`']
      ] },
      { t: 'trap', text: 'Miktardan sonra **artikel yok** ve ölçü birimi Kilo/Gramm/Liter **çoğul olmaz**: `zwei Kilo Äpfel` (Kilos değil). Ama Flasche/Becher çoğul olur: `zwei Flaschen`, `zwei Becher`.' }
    ]
  },
  {
    id: 'artikel', title: 'der/das/die · ein/eine · kein/keine · nicht', src: 'Lektion 3 (A, B) · Lektion 4 (A, B) · Grammatikübersicht · Test Lektion 3/3, 4/5',
    blocks: [
      { t: 'table', head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'], rows: [
        ['belirli (Lektion 4)', '**der** Tisch', '**das** Sofa', '**die** Lampe', '**die** Lampen'],
        ['belirsiz (Lektion 3)', '**ein** Apfel', '**ein** Ei', '**eine** Banane', '– Äpfel (artikelsiz)'],
        ['olumsuz (Lektion 3)', '**kein** Apfel', '**kein** Ei', '**keine** Banane', '**keine** Äpfel'],
        ['iyelik (Lektion 2)', 'mein Apfel', 'mein Ei', 'meine Banane', 'meine Äpfel']
      ] },
      { t: 'ul', items: [
        'İlk kez söz edilen / herhangi biri → **ein/eine**: `Das ist ein Apfel.` Bilinen, belirli olan → **der/das/die**: `Der Apfel ist teuer.`',
        'Soru: `Ist das ein Ei?` – `Nein, das ist **kein** Ei, das ist **eine** Kartoffel.` (Test Lektion 3/3)',
        '`doch` vurgu: `Das ist doch kein Saft!` (ama bu meyve suyu değil ki!)'
      ] },
      { t: 'p', text: '**nicht mi kein mi?** (Test Lektion 4/5)' },
      { t: 'table', head: ['kein/keine', 'nicht'], rows: [
        ['isim + belirsiz/artikelsiz: `Sie hat keine Kinder.` `Sie hat keine Wohnung.`', 'fiil, sıfat, yer, isim/kişi: `Sie ist nicht verheiratet.` `Sie kommt nicht aus der Schweiz.` `Das ist nicht teuer.` `Frau Beck ist nicht da.`'],
        ['`ein` → `kein`, `eine` → `keine`, artikelsiz çoğul → `keine`', '`der/das/die` + isim → `nicht`: `Das ist nicht der Schrank.`']
      ] },
      { t: 'p', text: '**sehr / nicht / ziemlich / nicht so** + sıfat: `Das Zimmer ist sehr groß / ziemlich klein / nicht teuer / nicht so schön.`' },
      { t: 'trap', text: 'Artikel ipuçları: **-e** ile biten çoğu kelime **die** (die Lampe, die Küche, die Banane) ama der Käse! · **-chen** hep **das** (das Brötchen, das Würstchen, das Hähnchen) · **-ung** hep **die** (die Wohnung) · bileşik kelimede **son kelimenin** artikeli: das Wohnzimmer (das Zimmer), der Kühlschrank (der Schrank), der Schreibtisch (der Tisch).' }
    ]
  },
  {
    id: 'plural', title: 'Çoğul (Plural)', src: 'Lektion 3 (B) · Lektion 4 (C) · Lernwortschatz · Test Lektion 3/4, 4/3',
    blocks: [
      { t: 'p', text: 'Sözlükte çoğul şöyle yazılır: `der Apfel, ¨` → die Äpfel · `das Ei, -er` → die Eier. Çoğulda artikel **hep die**.' },
      { t: 'table', head: ['İşaret', 'Kural', 'Örnekler (L1–4)'], rows: [
        ['–', 'değişmez', 'der Kuchen → die Kuchen · das Brötchen → die Brötchen · das Zimmer → die Zimmer · der Sessel → die Sessel · der Lehrer → die Lehrer'],
        ['¨', 'sadece umlaut', 'der Apfel → die **Ä**pfel · der Vater → die V**ä**ter · die Mutter → die M**ü**tter · der Bruder → die Br**ü**der · die Tochter → die T**ö**chter'],
        ['-e', '+e', 'das Brot → die Brote · der Tisch → die Tische · der Fisch → die Fische · der Schreibtisch → die Schreibtische'],
        ['¨e', 'umlaut + e', 'der Saft → die S**ä**fte · der Stuhl → die St**ü**hle · der Schrank → die Schr**ä**nke · der Kühlschrank → die Kühlschr**ä**nke · der Sohn → die S**ö**hne'],
        ['-er / ¨er', '+er', 'das Ei → die Eier · das Kind → die Kinder · das Haus → die H**ä**user · das Bad → die B**ä**der · der Mann → die M**ä**nner'],
        ['-n / -en', '+n, +en', 'die Banane → die Bananen · die Lampe → die Lampen · die Kartoffel → die Kartoffeln · die Wohnung → die Wohnungen · die Frau → die Frauen'],
        ['-s', '+s', 'die Kiwi → die Kiwis · das Sofa → die Sofas · der Joghurt → die Joghurts · die Oma → die Omas · das Foto → die Fotos'],
        ['-nen', '-in → -innen', 'die Lehrerin → die Lehrerinnen · die Enkelin → die Enkelinnen']
      ] },
      { t: 'tip', text: 'Test Lektion 3/4 birebir: Banane → fünf **Bananen**, Kuchen → vier **Kuchen**, Würstchen → zwei **Würstchen**, Kiwi → drei **Kiwis**, Ei → sechs **Eier**, Brot → zwei **Brote**. Test Lektion 4/3: die Küchen, die Wohnzimmer, die Schreibtische, die Sessel, die Kühlschränke, die Lampen.' },
      { t: 'low', text: 'Çoğulu olmayanlar (Sg.): die Milch, die Butter, der Zucker, das Mehl, das Salz, das Obst, der Käse, der Reis, das Fleisch, die Musik. Yalnız çoğul: die Eltern, die Geschwister, die Großeltern, die Möbel, die Pommes frites.' }
    ]
  },
  {
    id: 'essen', title: 'Yiyecek-içecek ve alışveriş', src: 'Lektion 3 (tamamı) · Test Lektion 3/1, 3/2, 3/5',
    blocks: [
      { t: 'p', text: '**Alışveriş diyaloğu** (Test Lektion 3/5 birebir):' },
      { t: 'code', code: '◆ Ich brauche Birnen. Haben Sie Birnen?\n○ Ja, natürlich.\n◆ Wie viel kostet ein Kilo Birnen?\n○ Ein Kilo Birnen kostet 2,99 €, bitte.\n◆ Gut. Ein Pfund, bitte.\n○ Sehr gern. Sonst noch etwas?\n◆ Nein, danke.' },
      { t: 'table', head: ['Satıcı', 'Müşteri'], rows: [
        ['`Was möchten Sie?` / `Was darf es sein?` (Ne arzu edersiniz?)', '`Ich möchte … / Ich brauche … / Ich hätte gern …`'],
        ['`Sonst noch etwas?` (Başka bir şey?)', '`Nein, danke. Das ist alles.` / `Ja, …`'],
        ['`Das macht (zusammen) 3 Euro 87.`', '`Wie viel kostet …? / Was kostet …?`']
      ] },
      { t: 'ul', items: [
        '**Hunger / Durst**: `Ich habe Hunger.` (açım) · `Ich habe Durst.` (susadım)',
        '**gern**: `Ich esse gern Fisch.` `Ich trinke gern Tee.` `Ich esse nicht gern Fleisch.` · `Mein Lieblingsessen ist Pizza.`',
        '`Das schmeckt (sehr) gut!` (çok lezzetli) · `Wir kochen …` · `Wir essen in der Mensa.`',
        'Kahvaltılık: das Brot, das Brötchen, die Butter, der Käse, die Wurst, das Ei, der Joghurt, die Milch, der Kaffee, der Tee, der Saft',
        'Meyve-sebze: der Apfel, die Banane, die Birne, die Orange, die Kiwi, die Tomate, die Kartoffel, die Zwiebel, das Obst, das Gemüse',
        'Yemek: der Fisch, das Fleisch, das Hähnchen, das Steak, der Salat, die Suppe, die Pizza, die Pommes frites, der Reis, der Kuchen'
      ] },
      { t: 'trap', text: '`möchten`’de **ich möchte / er möchte** (t yok!), du möchtest. `Was möchten Sie?` – `Ich möchte ein Kilo Äpfel.`' }
    ]
  },
  {
    id: 'wohnung', title: 'Ev, mobilya, sıfatlar, renkler', src: 'Lektion 4 (tamamı) · Test Lektion 4/1, 4/2, 4/6',
    blocks: [
      { t: 'table', head: ['Wohnung (odalar)', 'Möbel (mobilya)', 'Elektrogeräte'], rows: [
        ['die Küche · das Bad · das Wohnzimmer · das Schlafzimmer · das Kinderzimmer · das Arbeitszimmer · der Flur · die Toilette · der Balkon · der Garten', 'der Tisch · der Stuhl · der Schrank · das Regal · das Bett · das Sofa · der Sessel · der Schreibtisch · der Teppich', 'der Kühlschrank · der Herd · der Fernseher · die Lampe · das Handy · der Computer']
      ] },
      { t: 'p', text: '**Zıt anlamlılar** (Test Lektion 4/1 birebir):' },
      { t: 'table', head: ['', 'Gegenteil'], rows: [
        ['teuer (pahalı)', '**billig** / günstig (ucuz)'],
        ['neu (yeni)', '**alt** (eski)'],
        ['schön (güzel)', '**hässlich** (çirkin)'],
        ['breit (geniş)', '**schmal** (dar)'],
        ['hell (aydınlık)', '**dunkel** (karanlık)'],
        ['klein (küçük)', '**groß** (büyük)'],
        ['modern', 'alt']
      ] },
      { t: 'p', text: '**Beğeni** (L4): `Wie gefällt dir / Ihnen die Wohnung?` – `Sie gefällt mir gut.` · `Wie findest du …?` – `Ich finde sie schön.` · `Das finde ich auch.`' },
      { t: 'p', text: '**Renkler**: schwarz, weiß, grau, rot, blau, grün, gelb, braun · `hellblau`, `dunkelrot`.' },
      { t: 'p', text: '**Ev ilanı kısaltmaları** (Wohnungsanzeigen): `Zi.` Zimmer · `m²/qm` Quadratmeter · `ca.` circa (yaklaşık) · `max.` maximal · `möbl.` möbliert (eşyalı) · `ab sofort` hemen · `Miete` kira · `Anruf ab 19 Uhr` 19’dan sonra arayın · `1. Stock` 1. kat.' },
      { t: 'tip', text: 'Test Lektion 4/6 diyaloğu: `Sag mal, wie ist denn deine Wohnung?` – `Sie gefällt mir gut! Die Küche ist ganz neu und modern.` – `Oh, das ist schön. Und die Zimmer? Wie groß sind sie?` – `Ziemlich klein, aber hell.` … `Ja, er findet sie auch sehr schön.`' }
    ]
  },
  {
    id: 'yazma', title: 'Yazma: şablonlar', src: 'Hocanın notu: konular ve kelimeler oturmuşsa yazma sorularında ne çıkarsa cevaplanır.',
    blocks: [
      { t: 'p', text: 'A1 yazmada beklenen: **kısa, doğru cümleler**, her cümlede fiil 2. sırada, doğru çekim. 6–8 cümle yeterli. Konu Lektion 1–4’ten olacağı için muhtemel konular:' },
      { t: 'ul', items: [
        '**Kendini tanıt** (Sich vorstellen): ad, ülke, şehir, yaş, diller, okul/bölüm.',
        '**Aileni anlat**: anne-baba, kardeşler, yaş, nerede yaşıyorlar, medeni hal.',
        '**Evini/odanı anlat**: kaç oda, nasıl (groß/klein/hell), mobilyalar, renkler, beğeni.',
        '**Yemek/alışveriş**: sevdiğin yemek-içecek, alışveriş listesi, market diyaloğu.',
        '**Form doldur / kartvizit / kısa e-posta** (Liebe …, / Hallo …, … Viele Grüße).'
      ] },
      { t: 'code', code: 'Hallo! Ich heiße Emirhan Öz. Ich komme aus der Türkei.\nIch wohne in Izmir. Ich bin 20 Jahre alt und ledig.\nIch bin Student. Ich lerne Deutsch.\nIch spreche Türkisch, Englisch und ein bisschen Deutsch.\nMeine Familie wohnt auch in Izmir.\nMein Vater heißt … und meine Mutter heißt …\nIch habe zwei Geschwister.  (ya da: Ich habe keine Geschwister.)' },
      { t: 'tip', text: 'Lektion 6 öncesi `einen` (Akkusativ) öğrenilmedi; riskliyse `Ich habe eine Schwester.` / `Mein Bruder heißt …` gibi güvenli kur. Bağlaçlar: **und, aber, auch**. Ezberlenecek kalıp: Ich heiße / komme aus / wohne in / bin … Jahre alt / spreche / habe / esse gern / trinke gern / finde … schön.' },
      { t: 'trap', text: 'İsimleri **büyük harfle** yaz (die Küche, das Zimmer, der Kaffee). `Sie` (resmi) büyük S. Cümle sonuna nokta.' },
      { t: 'p', text: '**Testlerdeki yazma sorularının örnek cevapları.** Ezberle, sonra kendi bilgilerinle değiştir. Bir konu çıkınca diğer şablonlardan da cümle ödünç alabilirsin (ör. “Ich wohne in Izmir.” her konuya uyar).' },

      { t: 'p', text: '**1) Schreiben Sie über sich.** (Kendini tanıt: ad, ülke, şehir, yaş, medeni hal, diller) · (Deneme 1)' },
      { t: 'code', code: 'Hallo! Ich heiße Emirhan Öz.\nIch komme aus der Türkei und wohne in Izmir.\nIch bin 20 Jahre alt und ledig.\nIch bin Student und lerne Deutsch.\nIch spreche Türkisch, Englisch und ein bisschen Deutsch.\nMeine Familie wohnt auch in Izmir.\nIch finde Deutsch schön.' },
      { t: 'ul', items: ['Hallo! Ben Emirhan Öz. · Türkiye’denim, İzmir’de oturuyorum. · 20 yaşındayım, bekarım. · Öğrenciyim, Almanca öğreniyorum. · Türkçe, İngilizce ve biraz Almanca konuşuyorum. · Ailem de İzmir’de oturuyor. · Almancayı güzel buluyorum.'] },

      { t: 'p', text: '**2) Beschreiben Sie Ihre Wohnung oder Ihr Zimmer.** (Kaç oda, nasıl, hangi eşyalar, beğeni) · (Deneme 1)' },
      { t: 'code', code: 'Ich wohne in Izmir. Meine Wohnung ist nicht groß, aber hell.\nSie hat drei Zimmer, eine Küche und ein Bad.\nDie Küche ist neu und modern.\nMein Zimmer ist klein. Da sind ein Bett, ein Schreibtisch, ein Stuhl und ein Regal.\nDer Schreibtisch ist braun und die Lampe ist weiß.\nDie Miete ist nicht teuer.\nDie Wohnung gefällt mir sehr gut.' },
      { t: 'ul', items: ['İzmir’de oturuyorum. Evim büyük değil ama aydınlık. · 3 oda, mutfak, banyo. · Mutfak yeni ve modern. · Odam küçük: yatak, çalışma masası, sandalye, raf var. · Masa kahverengi, lamba beyaz. · Kira pahalı değil. · Ev çok hoşuma gidiyor.'] },

      { t: 'p', text: '**3) Schreiben Sie über Ihre Familie.** (Kimler var, adları, yaşları, nerede oturuyorlar) · (Deneme 2)' },
      { t: 'code', code: 'Das ist meine Familie.\nMein Vater heißt Ahmet. Er ist 50 Jahre alt.\nMeine Mutter heißt Ayşe. Sie ist 46.\nIch habe zwei Geschwister.\nMein Bruder heißt Can. Er ist sechzehn.\nMeine Schwester heißt Elif. Sie ist verheiratet und hat ein Kind.\nMeine Eltern wohnen in Izmir.' },
      { t: 'ul', items: ['der/das kişi → **mein** (mein Vater, mein Bruder), die kişi ve çoğul → **meine** (meine Mutter, meine Eltern).', 'Kişiden sonra zamir: Vater → **er**, Mutter → **sie**. İsimleri kendi ailenle değiştir.'] },

      { t: 'p', text: '**4) Was essen und trinken Sie gern?** (Sevdiğin yemek, sevmediğin, içecekler) · (Deneme 2)' },
      { t: 'code', code: 'Ich esse gern Fisch und Salat.\nMein Lieblingsessen ist Pizza.\nIch esse nicht gern Fleisch.\nAm Morgen esse ich Brot, Käse und Tomaten.\nIch trinke gern Tee und Kaffee.\nIch trinke nicht gern Milch.\nWir kochen zusammen. Das schmeckt sehr gut!' },
      { t: 'ul', items: ['Kalıp: **Ich esse / trinke (nicht) gern …** · **Mein Lieblingsessen ist …** · **Das schmeckt gut!**'] },

      { t: 'p', text: '**5) E-Mail an Ihre Freundin Lena: Sie haben eine neue Wohnung.** (Nasıl, kaç oda, ne hoşuna gidiyor) · (Deneme 3)' },
      { t: 'code', code: 'Liebe Lena,\nich habe jetzt eine neue Wohnung!\nSie hat zwei Zimmer, eine Küche und ein Bad.\nDas Wohnzimmer ist groß und hell.\nDie Küche ist klein, aber modern.\nDie Miete ist nicht so teuer: 450 Euro im Monat.\nDie Wohnung gefällt mir sehr gut.\nViele Grüße\nEmirhan' },
      { t: 'ul', items: ['Hitap: **Liebe** + kadın adı, **Lieber** + erkek adı, ya da **Hallo …,**. Virgülden sonra küçük harfle devam: *ich habe …*', 'Kapanış: **Viele Grüße** / **Liebe Grüße** + adın.'] },

      { t: 'p', text: '**6) Sie machen eine Party. Was brauchen Sie?** (Alışveriş listesi + 4–5 cümle) · (Deneme 3)' },
      { t: 'code', code: 'Einkaufszettel:\n2 Kilo Kartoffeln, 1 Kilo Tomaten, 6 Eier,\n500 Gramm Käse, 4 Flaschen Wasser, 2 Flaschen Saft\n\nIch mache eine Party.\nIch brauche zwei Kilo Kartoffeln und ein Kilo Tomaten.\nIch kaufe auch Käse, Brot und Obst.\nWir trinken Wasser, Saft und Cola.\nWir haben keine Milch und keine Butter. Ich kaufe sie auch.' },
      { t: 'ul', items: ['Miktar + isim, artikelsiz: **zwei Kilo Äpfel**, **vier Flaschen Wasser** (Kilo/Gramm çoğul olmaz, Flasche olur: Flaschen).', 'Olumsuz: **keine Milch**, **keine Eier**.'] },

      { t: 'p', text: '**7) Formular + 3 Sätze.** (Ad, soyad, adres, telefon, medeni hal, diller) · (Yazma konu testi)' },
      { t: 'code', code: 'Vorname: Emirhan\nFamilienname: Öz\nStraße, Hausnummer: Atatürk Caddesi 25\nPostleitzahl, Wohnort: 35220 Izmir\nLand: Türkei\nFamilienstand: ledig\nSprachen: Türkisch, Englisch, Deutsch\n\nIch heiße Emirhan Öz und wohne in Izmir.\nMeine Adresse ist Atatürk Caddesi 25, 35220 Izmir.\nIch bin ledig und spreche Türkisch, Englisch und ein bisschen Deutsch.' },
      { t: 'tip', text: 'Sınavda sorulmayan bir konu çıkarsa: önce **kendini tanıt** şablonundan 2–3 cümle, sonra konuya özel 3–4 cümle yaz. Her cümle: **özne + fiil (2. sıra) + gerisi**.' }
    ]
  }
];

window.TOPIC_RULES = {
  begruessung: 'Saat: Guten **Morgen** / **Tag** / **Abend**, **Gute Nacht**. Veda: **Tschüs** (samimi), **Auf Wiedersehen** (resmi), **Auf Wiederhören** (telefon). Nasılsın: `Wie geht es Ihnen?` (resmi) / `Wie geht’s? Wie geht es dir?` (samimi).',
  satz: 'Düz cümle ve W-sorusu: **fiil 2. sırada**. Evet/hayır sorusu: **fiil 1. sırada**. W-kelimeleri: wer (kim), wie (nasıl), woher (nereden), wo (nerede), was (ne).',
  verben: 'ich **-e**, du **-st**, er/sie/es **-t**, wir **-en**, ihr **-t**, sie/Sie **-en**. sein: bin, bist, ist, sind, **seid**, sind. haben: habe, **hast, hat**, haben, habt, haben. sprechen: du **sprichst**, er **spricht**. heißen: du **heißt**.',
  pronomen: 'du = sen (samimi), ihr = siz (samimi çoğul), Sie = siz (resmi). Eşyalar: der → **er**, das → **es**, die → **sie**, çoğul → **sie**.',
  possessiv: 'der/das isim → **mein / dein / Ihr**; die isim ve çoğul → **meine / deine / Ihre**.',
  person: 'Ich heiße … · Ich komme **aus** + ülke (aus **der** Türkei/Schweiz) · Ich wohne **in** + şehir · Familienstand: ledig, verheiratet, geschieden, verwitwet.',
  zahlen: 'Birler önce: 21 = ein**und**zwanzig. 16 **sech**zehn, 17 **sieb**zehn, 30 drei**ß**ig, 60 sechzig, 70 siebzig. Fiyat: 2,99 € = zwei Euro neunundneunzig.',
  artikel: 'Belirsiz **ein/eine**, olumsuz **kein/keine**, belirli **der/das/die**. Çoğul: die / keine / (artikelsiz). İsim olumsuzu **kein**, gerisi **nicht**.',
  plural: 'Çoğulu kelimeyle ezberle: -e (Brote), ¨e (Säfte, Stühle), -er/¨er (Eier, Häuser), -n/-en (Bananen, Wohnungen), -s (Kiwis, Sofas), – (Kuchen, Zimmer), ¨ (Äpfel, Väter). Artikel hep **die**.',
  essen: 'Kalıplar: `Was möchten Sie?` · `Ich brauche / möchte …` · `Haben Sie …?` · `Wie viel kostet …?` · `Sonst noch etwas?` – `Nein, danke.` · `Ich esse/trinke gern …`',
  wohnung: 'Zıtlar: teuer–billig, neu–alt, schön–hässlich, breit–schmal, hell–dunkel, groß–klein. Beğeni: `Die Wohnung gefällt mir.` / `Die Stühle gefallen mir.` · `Ich finde sie schön.`',
  yazma: 'Kısa doğru cümle, fiil 2. sırada, isimler büyük harf. Konu başlığındaki bütün maddelere birer cümle yaz.'
};
