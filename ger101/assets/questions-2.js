/* Deneme ara sınavları (Hören · Grammatik · Lesen · Schreiben) ve konu testleri. Lektion 1–4 kelime ve yapıları. */
(function () {
  var Q = window.__Q, M = Q.M, F = Q.F, O = Q.O;

  /* ---------- Yazma soruları (model cevaplı) ---------- */
  var W_vorstellen = O({ topic: 'yazma', q: '**Schreiben Sie über sich.** (Kendini tanıt.) Name, Land, Wohnort, Alter, Familienstand, Sprachen. 6–8 Sätze.',
    model: 'Hallo! Ich heiße Emirhan Öz.\nIch komme aus der Türkei und wohne in Izmir.\nIch bin 20 Jahre alt und ledig.\nIch bin Student und lerne Deutsch.\nIch spreche Türkisch, Englisch und ein bisschen Deutsch.\nMeine Familie wohnt auch in Izmir.\n- Kontrol: her cümlede fiil 2. sırada mı? (Ich **heiße**, Ich **komme**, Ich **bin**)\n- `aus der Türkei` (der!), `in Izmir`.' });
  var W_familie = O({ topic: 'yazma', q: '**Schreiben Sie über Ihre Familie.** Wer ist in Ihrer Familie? Wie heißen sie? Wie alt sind sie? Wo wohnen sie?',
    model: 'Das ist meine Familie.\nMein Vater heißt Ahmet. Er ist 50 Jahre alt.\nMeine Mutter heißt Ayşe. Sie ist 46.\nIch habe zwei Geschwister.\nMein Bruder heißt Can, er ist sechzehn.\nMeine Schwester heißt Elif. Sie ist verheiratet und hat ein Kind.\nMeine Eltern wohnen in Izmir.\n- der/das kişi → **mein**, die kişi ve çoğul → **meine**.\n- er (erkek) / sie (kadın) + ist / heißt / wohnt.' });
  var W_wohnung = O({ topic: 'yazma', q: '**Beschreiben Sie Ihre Wohnung oder Ihr Zimmer.** Wie viele Zimmer? Wie ist die Wohnung? Welche Möbel? Gefällt sie Ihnen?',
    model: 'Ich wohne in Izmir. Meine Wohnung ist nicht groß, aber hell.\nSie hat drei Zimmer, eine Küche und ein Bad. Der Balkon ist klein, aber schön.\nDie Küche ist neu und modern.\nMein Zimmer ist klein. Da sind ein Bett, ein Schreibtisch, ein Stuhl und ein Regal.\nDer Schreibtisch ist braun, die Lampe ist weiß.\nDie Miete ist nicht teuer.\nDie Wohnung gefällt mir sehr gut.\n- Sıfatlar: groß/klein, hell/dunkel, neu/alt, schön/hässlich, teuer/billig.\n- `Die Wohnung gefällt mir.` / `Ich finde sie schön.`' });
  var W_essen = O({ topic: 'yazma', q: '**Was essen und trinken Sie gern?** Was ist Ihr Lieblingsessen? Was essen Sie nicht gern? Was trinken Sie gern?',
    model: 'Ich esse gern Fisch und Salat.\nMein Lieblingsessen ist Pizza.\nIch esse nicht gern Fleisch.\nAm Morgen esse ich Brot, Käse und Tomaten.\nIch trinke gern Tee und Kaffee.\nIch trinke nicht gern Milch.\nWir kochen zusammen. Das schmeckt sehr gut!\n- Kalıp: Ich esse/trinke (nicht) gern … · Mein Lieblingsessen ist …' });
  var W_einkauf = O({ topic: 'yazma', q: '**Sie machen eine Party. Was brauchen Sie?** Schreiben Sie einen Einkaufszettel und 4–5 Sätze. (Was kaufen Sie? Wie viel?)',
    model: 'Einkaufszettel: 2 Kilo Kartoffeln, 1 Kilo Tomaten, 6 Eier, 500 Gramm Käse, 4 Flaschen Wasser, 2 Flaschen Saft.\nIch mache eine Party.\nIch brauche zwei Kilo Kartoffeln und ein Kilo Tomaten.\nIch kaufe auch Käse, Brot und Obst.\nWir trinken Wasser, Saft und Cola.\nWir haben keine Milch und keine Butter. Ich kaufe sie auch.\n- Miktar + isim, artikel yok: `zwei Kilo Äpfel`, `vier Flaschen Wasser`.' });
  var W_email = O({ topic: 'yazma', q: '**Schreiben Sie eine kurze E-Mail an Ihre Freundin Lena.** Sie haben eine neue Wohnung. Wie ist sie? Wie viele Zimmer? Was gefällt Ihnen?',
    model: 'Liebe Lena,\nich habe jetzt eine neue Wohnung!\nSie hat zwei Zimmer, eine Küche und ein Bad.\nDas Wohnzimmer ist groß und hell. Die Küche ist klein, aber modern.\nDie Miete ist nicht so teuer: 450 Euro im Monat.\nDie Wohnung gefällt mir sehr gut.\nViele Grüße\nEmirhan\n- Hitap: Liebe (kadın) / Lieber (erkek) / Hallo … · Kapanış: Viele Grüße' });
  var W_formular = O({ topic: 'yazma', q: '**Ergänzen Sie das Formular für sich und schreiben Sie dann 3 Sätze.** Vorname · Familienname · Straße · Hausnummer · Postleitzahl · Wohnort · Land · Telefon · Familienstand · Sprachen',
    model: 'Vorname: Emirhan · Familienname: Öz · Straße: Atatürk Caddesi · Hausnummer: 25 · Postleitzahl: 35220 · Wohnort: Izmir · Land: Türkei · Telefon: 0532 … · Familienstand: ledig · Sprachen: Türkisch, Englisch, Deutsch\nIch heiße Emirhan Öz und wohne in Izmir.\nMeine Adresse ist Atatürk Caddesi 25, 35220 Izmir.\nIch bin ledig und spreche Türkisch, Englisch und ein bisschen Deutsch.' });

  /* ================= Deneme ara sınavı 1 ================= */
  var d1 = [
    M({ topic: 'begruessung', listen: 'Frau Keller: Guten Abend, Herr Weber!\nHerr Weber: Guten Abend, Frau Keller. Wie geht es Ihnen?\nFrau Keller: Danke, sehr gut. Und Ihnen?\nHerr Weber: Na ja, es geht.',
      q: 'Hören Sie. Was ist richtig?', opts: ['Herr Weber sagt: Es geht.', 'Es ist Morgen.', 'Frau Keller sagt: Nicht so gut.', 'Frau Keller und Herr Weber sagen „du“.'],
      exp: '`Guten Abend` → akşam. Frau Keller: sehr gut. Herr Weber: **Na ja, es geht** (idare eder). `Wie geht es Ihnen?` resmi, yani „Sie“.', why: { 1: 'Guten **Abend** dediler: akşam.', 2: 'Frau Keller „sehr gut“ dedi.', 3: '`Ihnen` resmi; birbirlerine „Sie“ diyorlar.' } }),
    M({ topic: 'begruessung', listen: 'Firma Teletec, Sandra Roth, guten Tag.\nGuten Tag, mein Name ist Novak. Ist Herr Bauer da?\nTut mir leid, Herr Bauer ist nicht da.\nAch so. Danke. Auf Wiederhören!',
      q: 'Hören Sie. Was ist richtig?', opts: ['Herr Bauer ist nicht da.', 'Herr Bauer ist da.', 'Frau Roth heißt Novak.', 'Das Gespräch ist im Kurs.'],
      exp: '`Tut mir leid, Herr Bauer ist nicht da.` Telefon konuşması: `Auf Wiederhören`.' }),
    M({ topic: 'begruessung', listen: 'Wie heißen Sie, bitte?\nMein Name ist Yilmaz.\nWie bitte? Buchstabieren Sie, bitte.\nY – I – L – M – A – Z.\nDanke schön.',
      q: 'Hören Sie. Wie heißt die Person?', opts: ['Yilmaz', 'Yildiz', 'Jilmaz', 'Yilmas'],
      exp: 'Harfler: **Y – I – L – M – A – Z**. Almanca Y = „üpsilon“, J = „yot“, Z = „tset“, S = „es“.' }),
    M({ topic: 'possessiv', listen: 'Das ist meine Familie. Mein Vater heißt Peter, meine Mutter heißt Anna.\nIch habe zwei Geschwister. Mein Bruder heißt Max, er ist sechzehn.\nMeine Schwester Lisa ist elf.',
      q: 'Hören Sie. Wie alt ist Max?', opts: ['16', '11', '6', '60'],
      exp: '`Mein Bruder heißt Max, er ist **sechzehn**` = 16. Lisa **elf** = 11.', why: { 3: '60 = sechzig. 16 = sechzehn.' } }),
    M({ topic: 'essen', listen: 'Guten Tag. Was möchten Sie?\nIch brauche ein Kilo Tomaten und zwei Flaschen Wasser.\nSonst noch etwas?\nNein, danke.\nDas macht vier Euro fünfzig.',
      q: 'Hören Sie. Wie viel kostet alles?', opts: ['4,50 €', '5,40 €', '4,15 €', '14,50 €'],
      exp: '`vier Euro fünfzig` = 4,50 €. (fünfzehn = 15, vierzehn = 14)' }),

    M({ topic: 'verben', q: 'Woher ____ du?', opts: ['kommst', 'kommen', 'kommt', 'komme'], exp: 'du → **-st**: du kommst.', why: { 1: 'kommen: wir/sie/Sie.', 2: 'kommt: er/sie/es, ihr.', 3: 'komme: ich.' } }),
    F({ topic: 'verben', q: 'Fiili doğru biçimde yaz.', code: 'Mascha ____ (sprechen) gut Englisch.', ans: ['spricht'], exp: 'sprechen: e → i. er/sie **spricht**.', whyFill: { 'sprecht': 'sprecht = ihr. Mascha = sie → spricht.', 'sprichst': 'sprichst = du.' } }),
    M({ topic: 'verben', q: '____ ihr verheiratet?', opts: ['Seid', 'Sind', 'Ist', 'Habt'], exp: 'sein: ihr **seid**. Evet/hayır sorusunda fiil başta.', why: { 1: 'sind = wir / sie / Sie.', 3: '`verheiratet sein`: sein lazım, haben değil.' } }),
    M({ topic: 'possessiv', q: 'Das ist ____ Schwester. Sie heißt Elif.', opts: ['meine', 'mein', 'dein', 'Ihr'], exp: 'die Schwester (feminin) → **meine**.', why: { 1: 'mein: der/das isimler için.', 2: 'die → deine olurdu.', 3: 'die → Ihre olurdu.' } }),
    F({ topic: 'artikel', q: 'Boşluğu doldur.', code: 'Ist das ein Apfel? – Nein, das ist ____ Apfel. Das ist eine Birne.', ans: ['kein'], exp: 'ein Apfel → **kein** Apfel.', whyFill: { 'nicht': 'İsim + ein/eine → kein. nicht değil.', 'keine': 'der Apfel maskulin → kein (keine: die veya çoğul).' } }),
    M({ topic: 'pronomen', q: 'Der Tisch ist schön. Was kostet ____?', opts: ['er', 'es', 'sie', 'Sie'], exp: 'der Tisch → **er**.', why: { 1: 'es: das-isimler için.', 2: 'sie: die-isimler ve çoğul için.' } }),
    F({ topic: 'plural', q: 'Çoğulunu yaz.', code: 'ein Apfel – drei ____', ans: ['Äpfel'], exp: 'der Apfel, ¨ → die **Äpfel** (sadece umlaut).', whyFill: { 'apfel': 'Umlaut gerekli: Äpfel (ae de kabul).', 'apfeln': 'Apfel → Äpfel, -n yok.' } }),
    M({ topic: 'artikel', q: 'Sie ist ledig und hat ____ Kinder.', opts: ['keine', 'nicht', 'kein', 'ein'], exp: 'Çoğul isim olumsuz → **keine** Kinder.', why: { 1: 'nicht isimle (artikelsiz) kullanılmaz.', 2: 'kein: der/das tekil.' } }),
    M({ topic: 'satz', q: 'Welche Frage ist richtig?', opts: ['Brauchen wir Milch?', 'Brauchen Milch wir?', 'Wir Milch brauchen?', 'Milch wir brauchen?'], exp: 'Evet/hayır sorusu: **fiil + özne + gerisi**.' }),
    F({ topic: 'wohnung', q: 'Fiili doğru biçimde yaz.', code: 'Wie ____ (gefallen) dir die Stühle?', ans: ['gefallen'], exp: 'Özne **die Stühle** (çoğul) → gefall**en**. Tekilde: Wie gefällt dir der Stuhl?', whyFill: { 'gefällt': 'gefällt tekil özneyle; burada die Stühle çoğul.' } }),

    M({ topic: 'person', text: '**Dr. Klaus Berger**\nArzt\nGartenstraße 12\n80331 München\nTel. 089 / 45 66 21',
      q: 'Lesen Sie die Visitenkarte. Was ist richtig?', opts: ['Die Postleitzahl ist 80331.', 'Herr Berger ist Lehrer.', 'Die Hausnummer ist 21.', 'Der Vorname ist Berger.'],
      exp: 'Postleitzahl = **80331**, Stadt = München, Straße = Gartenstraße, Hausnummer = **12**, Vorname = **Klaus**, Beruf = Arzt (doktor).' }),
    M({ topic: 'person', text: 'Hallo! Ich heiße Sofia. Ich bin 24 Jahre alt und komme aus Spanien, aus Madrid. Jetzt wohne ich in Wien, in Österreich. Ich bin verheiratet. Mein Mann heißt Paul, er kommt aus Österreich. Wir haben keine Kinder. Ich spreche Spanisch, Englisch und ein bisschen Deutsch.',
      q: 'Lesen Sie den Text. Was ist richtig?', opts: ['Sofia wohnt in Österreich.', 'Sofia hat zwei Kinder.', 'Paul kommt aus Spanien.', 'Sofia spricht sehr gut Deutsch.'],
      exp: '`Jetzt wohne ich in Wien, in Österreich.` → **Sofia wohnt in Österreich.**', why: { 1: '`Wir haben keine Kinder.` Çocukları yok.', 2: '`Mein Mann heißt Paul, er kommt aus Österreich.` İspanya’dan gelen Sofia, Paul değil.', 3: '`ein bisschen Deutsch` = biraz Almanca, sehr gut değil.' } }),
    M({ topic: 'person', text: 'Hallo! Ich heiße Sofia. Ich bin 24 Jahre alt und komme aus Spanien, aus Madrid. Jetzt wohne ich in Wien, in Österreich. Ich bin verheiratet. Mein Mann heißt Paul, er kommt aus Österreich. Wir haben keine Kinder. Ich spreche Spanisch, Englisch und ein bisschen Deutsch.',
      q: 'Lesen Sie den Text. Sofia ist …', opts: ['verheiratet.', 'ledig.', 'geschieden.', 'verwitwet.'], exp: '`Ich bin verheiratet. Mein Mann heißt Paul.`' }),
    M({ topic: 'wohnung', text: '**Schöne 2-Zimmer-Wohnung** in Bonn, 55 m², Küche, Bad, Balkon, 2. Stock. Miete: 620 €, ab sofort. Anruf ab 18 Uhr: 0176 / 23 45 61',
      q: 'Lesen Sie die Anzeige. Was ist richtig?', opts: ['Die Wohnung hat zwei Zimmer.', 'Die Wohnung ist 62 m² groß.', 'Die Miete ist 550 Euro.', 'Die Wohnung ist im 1. Stock.'],
      exp: '**2-Zimmer**-Wohnung, 55 m², Miete 620 €, 2. Stock.' }),
    M({ topic: 'zahlen', text: '**Sonderangebote!**\nÄpfel – 1 kg – 1,99 €\nBananen – 1 kg – 1,49 €\nKäse – 100 g – 1,29 €\nMilch – 1 l – 0,99 €',
      q: 'Lesen Sie den Prospekt. Wie viel kostet ein Liter Milch?', opts: ['0,99 €', '1,29 €', '1,49 €', '1,99 €'], exp: 'Milch – 1 l (ein Liter) – **0,99 €** = neunundneunzig Cent.' }),

    W_vorstellen, W_wohnung
  ];

  /* ================= Deneme ara sınavı 2 ================= */
  var d2 = [
    M({ topic: 'begruessung', listen: 'Gute Nacht, Mama!\nGute Nacht, Lili! Schlaf gut!',
      q: 'Hören Sie. Wann ist das Gespräch?', opts: ['In der Nacht.', 'Am Morgen.', 'Am Telefon.', 'Im Deutschkurs.'],
      exp: '`Gute Nacht` → yatmadan önce, gece.' }),
    M({ topic: 'person', listen: 'Hallo, ich bin Marco. Und wie heißt du?\nIch heiße Ana.\nWoher kommst du, Ana?\nIch komme aus Portugal. Und du?\nIch komme aus Italien, aus Rom.',
      q: 'Hören Sie. Woher kommt Marco?', opts: ['Aus Italien.', 'Aus Portugal.', 'Aus Polen.', 'Aus Österreich.'],
      exp: 'Marco: `Ich komme aus Italien, aus Rom.` Ana: aus Portugal.' }),
    M({ topic: 'zahlen', listen: 'Wie ist Ihre Telefonnummer?\nNull – eins – sieben – drei, dann vierzehn – neunzehn – zwölf.',
      q: 'Hören Sie. Welche Nummer ist richtig?', opts: ['0173 / 14 19 12', '0173 / 40 90 20', '0137 / 14 19 12', '0173 / 41 91 12'],
      exp: 'null-eins-sieben-drei = 0173; vierzehn 14, neunzehn 19, zwölf 12.', why: { 1: 'vierzig = 40, vierzehn = 14.', 2: 'sieben – drei: 0**173**.' } }),
    M({ topic: 'possessiv', listen: 'Wer ist das? Ist das deine Mutter?\nNein, das ist meine Oma. Sie ist schon achtzig Jahre alt.\nUnd wo wohnt sie?\nSie wohnt in Hamburg.',
      q: 'Hören Sie. Was ist richtig?', opts: ['Die Oma wohnt in Hamburg.', 'Das ist die Mutter.', 'Die Oma ist achtzehn.', 'Die Oma wohnt in Berlin.'],
      exp: '`meine Oma`, `achtzig` (80), `in Hamburg`.', why: { 2: 'achtzehn = 18, achtzig = 80.' } }),
    M({ topic: 'wohnung', listen: 'Wie gefällt dir die Wohnung?\nSehr gut! Das Wohnzimmer ist groß und hell.\nUnd die Küche?\nDie Küche ist klein, aber modern.',
      q: 'Hören Sie. Wie ist die Küche?', opts: ['Klein und modern.', 'Groß und hell.', 'Klein und dunkel.', 'Alt und hässlich.'],
      exp: '`Die Küche ist klein, aber modern.` Groß und hell = das Wohnzimmer.' }),

    F({ topic: 'verben', q: 'Fiili doğru biçimde yaz.', code: 'Wie ____ (heißen) du?', ans: ['heißt', 'heisst'], exp: 'heißen kökü -ß ile biter → du **heißt** (heißst yok).', whyFill: { 'heißst': 'Kökte zaten ß var, sadece -t eklenir: heißt.' } }),
    M({ topic: 'verben', q: 'Wir ____ zwei Kinder.', opts: ['haben', 'habt', 'hat', 'sind'], exp: 'wir **haben**.', why: { 1: 'habt = ihr.', 2: 'hat = er/sie/es.', 3: 'Çocuk "sahip olmak" = haben.' } }),
    M({ topic: 'pronomen', q: 'Frau Novak, woher kommen ____?', opts: ['Sie', 'du', 'ihr', 'sie'], exp: 'Frau + soyad → resmi **Sie** (büyük S).', why: { 1: 'du samimi; Frau Novak’a Sie denir.', 3: 'küçük sie = o/onlar.' } }),
    F({ topic: 'possessiv', q: 'mein / meine yaz.', code: 'Das sind ____ Eltern.', ans: ['meine'], exp: 'Çoğul (Eltern) → **meine**.', whyFill: { 'mein': 'Çoğulda meine.' } }),
    M({ topic: 'artikel', q: 'Das ist ____ Lampe. Sie ist neu.', opts: ['eine', 'ein', 'der', 'kein'], exp: 'die Lampe → belirsiz **eine**.', why: { 1: 'ein: der/das.', 2: 'die Lampe: der değil.' } }),
    F({ topic: 'plural', q: 'Çoğulunu yaz.', code: 'das Ei – sechs ____', ans: ['Eier'], exp: 'das Ei, -er → die **Eier**.' }),
    M({ topic: 'artikel', q: 'Das Zimmer ist ____ teuer. Es kostet nur 300 Euro.', opts: ['nicht', 'kein', 'keine', 'nein'], exp: 'Sıfatın olumsuzu → **nicht** teuer.', why: { 1: 'kein isimle kullanılır.', 3: 'nein = hayır (cevap).' } }),
    M({ topic: 'satz', q: '____ wohnen Sie? – In Ankara.', opts: ['Wo', 'Woher', 'Wer', 'Was'], exp: 'Cevap yer (in Ankara) → **Wo** (nerede).', why: { 1: 'Woher = nereden (aus …).', 2: 'Wer = kim.' } }),
    F({ topic: 'essen', q: 'möchten’i çek.', code: 'Was ____ (möchten) du?', ans: ['möchtest', 'moechtest'], exp: 'du **möchtest**. (ich/er möchte)' }),
    M({ topic: 'pronomen', q: 'Wie gefällt dir das Sofa? – ____ ist sehr schön.', opts: ['Es', 'Er', 'Sie', 'Das Sofa ist'], exp: 'das Sofa → **es** (cümle başında Es).', why: { 1: 'Er: der-isimler için.', 2: 'Sie: die-isimler/çoğul için.', 3: '„Das Sofa ist ist“ olur; zamir yeterli.' } }),

    M({ topic: 'essen', text: 'Einkaufszettel\n- 1 Kilo Kartoffeln\n- 2 Flaschen Saft\n- 6 Eier\n- 200 Gramm Käse\n- 1 Pfund Tomaten',
      q: 'Lesen Sie den Einkaufszettel. Was ist richtig?', opts: ['Sie kaufen ein Pfund Tomaten.', 'Sie kaufen zwei Kilo Kartoffeln.', 'Sie kaufen drei Eier.', 'Sie kaufen Milch.'],
      exp: 'Listede: 1 kg Kartoffeln, 2 Flaschen Saft, 6 Eier, 200 g Käse, **1 Pfund Tomaten**. Milch yok.' }),
    M({ topic: 'possessiv', text: 'Ich heiße Jonas und bin 19. Ich wohne in Graz. Meine Eltern sind geschieden. Mein Vater lebt in Wien. Meine Mutter und meine Schwester Mia leben hier in Graz. Mia ist 15.',
      q: 'Lesen Sie den Text. Was ist richtig?', opts: ['Jonas’ Vater wohnt in Wien.', 'Die Eltern leben zusammen.', 'Mia ist 19.', 'Jonas hat keine Geschwister.'],
      exp: '`Mein Vater lebt in Wien.` Eltern geschieden (birlikte değil). Mia 15. Mia = Schwester → Geschwister var.' }),
    M({ topic: 'possessiv', text: 'Ich heiße Jonas und bin 19. Ich wohne in Graz. Meine Eltern sind geschieden. Mein Vater lebt in Wien. Meine Mutter und meine Schwester Mia leben hier in Graz. Mia ist 15.',
      q: 'Lesen Sie den Text. Wer wohnt in Graz?', opts: ['Jonas, seine Mutter und Mia.', 'Nur Jonas.', 'Der Vater und Mia.', 'Die Großeltern.'],
      exp: 'Graz: Jonas + Mutter + Schwester Mia. Vater: Wien.' }),
    M({ topic: 'wohnung', text: '**Möbelhaus Krone – Sonderangebote**\nSofa, grau, modern – 399 €\nTisch, Holz, 160 cm lang – 249 €\nStuhl, schwarz – 49 €\nLampe, weiß – 29 €',
      q: 'Lesen Sie die Anzeige. Was ist richtig?', opts: ['Der Stuhl kostet 49 Euro.', 'Das Sofa ist schwarz.', 'Die Lampe kostet 249 Euro.', 'Der Tisch ist 106 cm lang.'],
      exp: 'Stuhl – **49 €**. Sofa grau. Lampe 29 €. Tisch 160 cm (hundertsechzig).' }),
    M({ topic: 'person', text: 'Liebe Frau Schmidt,\nich heiße Ayşe Demir. Ich komme aus der Türkei und wohne jetzt in Köln. Ich spreche Türkisch und Englisch. Ich möchte Deutsch lernen. Meine Telefonnummer ist 0157 / 22 31 18.\nViele Grüße\nAyşe Demir',
      q: 'Lesen Sie die E-Mail. Was ist richtig?', opts: ['Ayşe möchte Deutsch lernen.', 'Ayşe wohnt in der Türkei.', 'Ayşe spricht gut Deutsch.', 'Die Telefonnummer ist 0157 / 22 13 18.'],
      exp: '`Ich möchte Deutsch lernen.` Köln’de oturuyor (Türkiye’den geliyor). Diller: Türkisch, Englisch. Numara 22 **31** 18.' }),

    W_familie, W_essen
  ];

  /* ================= Deneme ara sınavı 3 ================= */
  var d3 = [
    M({ topic: 'begruessung', listen: 'Hallo, Tim! Wie geht’s?\nAch, nicht so gut. Und dir?\nMir geht’s super, danke!',
      q: 'Hören Sie. Wie geht es Tim?', opts: ['Nicht so gut.', 'Super.', 'Sehr gut.', 'Es geht.'], exp: 'Tim: `Ach, nicht so gut.` Diğer kişi: super.' }),
    M({ topic: 'zahlen', listen: 'Entschuldigung, was kostet der Kühlschrank?\nDer Kühlschrank? Dreihundertneunundachtzig Euro.\nOh, das ist teuer!',
      q: 'Hören Sie. Wie viel kostet der Kühlschrank?', opts: ['389 €', '398 €', '983 €', '189 €'], exp: 'drei**hundert** + neun**und**achtzig = **389**. Birler önce okunur.' }),
    M({ topic: 'person', listen: 'Wie ist Ihre Adresse, Frau Lang?\nBahnhofstraße siebzehn, in Mainz.\nUnd die Postleitzahl?\nFünf fünf eins eins sechs.',
      q: 'Hören Sie. Was ist die Hausnummer?', opts: ['17', '70', '7', '16'], exp: '`siebzehn` = 17 (siebzig = 70).' }),
    M({ topic: 'essen', listen: 'Was isst du gern, Paula?\nIch esse gern Pizza und Salat. Fleisch esse ich nicht gern.\nUnd was trinkst du gern?\nTee. Kaffee trinke ich nicht.',
      q: 'Hören Sie. Was isst Paula nicht gern?', opts: ['Fleisch.', 'Pizza.', 'Salat.', 'Fisch.'], exp: '`Fleisch esse ich nicht gern.` Pizza ve Salat sever. Fisch söylenmedi.' }),
    M({ topic: 'wohnung', listen: 'Ich suche eine Wohnung. Wie viel kostet die Wohnung im Monat?\nDie Miete ist sechshundertfünfzig Euro.\nUnd wie groß ist sie?\nSiebzig Quadratmeter. Sie hat drei Zimmer, Küche, Bad und Balkon.',
      q: 'Hören Sie. Was ist richtig?', opts: ['Die Wohnung hat drei Zimmer.', 'Die Miete ist 560 Euro.', 'Die Wohnung ist 17 m² groß.', 'Die Wohnung hat zwei Zimmer.'],
      exp: 'Miete **650** € (sechshundertfünfzig), **70** m² (siebzig), **drei Zimmer**.' }),

    M({ topic: 'verben', q: 'Er ____ Deutsch und Türkisch.', opts: ['spricht', 'sprecht', 'sprichst', 'spreche'], exp: 'er → **spricht** (e→i).', why: { 1: 'sprecht = ihr.', 2: 'sprichst = du.' } }),
    F({ topic: 'verben', q: 'sein fiilini çek.', code: 'Ich ____ Student und wohne in Izmir.', ans: ['bin'], exp: 'ich **bin**.' }),
    F({ topic: 'verben', q: 'haben fiilini çek.', code: '____ du Geschwister?', ans: ['Hast'], exp: 'du **hast**. Soru → fiil başta.', whyFill: { 'habst': 'haben düzensiz: du hast.' } }),
    M({ topic: 'possessiv', q: 'Wie alt ist ____ Sohn, Herr Klein?', opts: ['Ihr', 'Ihre', 'dein', 'deine'], exp: 'Herr Klein → resmi **Ihr**; der Sohn → -e yok: **Ihr Sohn**.', why: { 1: 'Ihre: die/çoğul isimler.', 2: 'Herr Klein’a du denmez.' } }),
    F({ topic: 'artikel', q: 'nicht / kein / keine yaz.', code: 'Tut mir leid, Frau Beck ist ____ da.', ans: ['nicht'], exp: '`da sein` (orada olmak) olumsuzu → **nicht** da.', whyFill: { 'kein': 'İsim yok; da (zarf) → nicht.' } }),
    M({ topic: 'artikel', q: 'Ist das eine Tomate? – Nein, das ist ____ Tomate. Das ist eine Orange.', opts: ['keine', 'kein', 'nicht', 'nicht eine'], exp: 'eine Tomate → **keine** Tomate.', why: { 1: 'die Tomate feminin → keine.', 2: 'İsim olumsuzu kein/keine.' } }),
    F({ topic: 'plural', q: 'Çoğulunu yaz.', code: 'der Stuhl – vier ____', ans: ['Stühle'], exp: 'der Stuhl, ¨e → die **Stühle**.' }),
    M({ topic: 'artikel', q: 'Welcher Artikel ist richtig? ____ Kühlschrank ist neu.', opts: ['Der', 'Die', 'Das', 'Den'], exp: 'Bileşik isim, son kelime: der Schrank → **der Kühlschrank**.' }),
    M({ topic: 'satz', q: 'Welcher Satz ist richtig?', opts: ['Ich wohne in Berlin.', 'Ich in Berlin wohne.', 'In Berlin ich wohne.', 'Wohne in Berlin ich.'], exp: 'Düz cümle: fiil **2. sırada**: Ich **wohne** in Berlin. / In Berlin **wohne** ich.' }),
    M({ topic: 'zahlen', q: '25 = ?', opts: ['fünfundzwanzig', 'zwanzigfünf', 'zweiundfünfzig', 'fünfzwanzig'], exp: 'Birler + und + onlar: **fünf-und-zwanzig**.', why: { 2: 'zweiundfünfzig = 52.' } }),

    M({ topic: 'person', text: '**Anmeldung – Deutschkurs A1**\nFamilienname: Kaya\nVorname: Deniz\nGeburtsort: Izmir\nAlter: 21\nFamilienstand: ledig\nWohnort: 10115 Berlin\nSprachen: Türkisch, Englisch',
      q: 'Lesen Sie das Formular. Was ist richtig?', opts: ['Deniz ist in Izmir geboren.', 'Deniz wohnt in Izmir.', 'Deniz ist verheiratet.', 'Deniz spricht Deutsch und Englisch.'],
      exp: 'Geburtsort Izmir → **in Izmir geboren**. Wohnort Berlin. ledig. Diller: Türkisch, Englisch.' }),
    M({ topic: 'person', text: '**Anmeldung – Deutschkurs A1**\nFamilienname: Kaya\nVorname: Deniz\nGeburtsort: Izmir\nAlter: 21\nFamilienstand: ledig\nWohnort: 10115 Berlin\nSprachen: Türkisch, Englisch',
      q: 'Lesen Sie das Formular. Wie ist der Familienname?', opts: ['Kaya', 'Deniz', 'Izmir', 'Berlin'], exp: 'Familienname = soyadı = **Kaya**. Vorname = Deniz.' }),
    M({ topic: 'essen', text: '**Mensa – Heute**\nGemüsesuppe – 2,10 €\nHähnchen mit Reis – 3,90 €\nPizza – 3,50 €\nWasser (0,5 l) – 0,80 €',
      q: 'Lesen Sie. Was kostet Hähnchen mit Reis?', opts: ['3,90 €', '3,50 €', '2,10 €', '0,80 €'], exp: 'Hähnchen mit Reis – **3,90 €** (drei Euro neunzig).' }),
    M({ topic: 'wohnung', text: 'Hallo Ben, meine neue Wohnung ist super! Sie ist nicht groß, aber hell. Das Wohnzimmer ist schön, die Küche ist ganz neu. Das Bad ist leider klein. Die Miete ist 480 Euro. Liebe Grüße, Clara',
      q: 'Lesen Sie die Nachricht. Was ist richtig?', opts: ['Das Bad ist klein.', 'Die Wohnung ist groß und dunkel.', 'Die Küche ist alt.', 'Die Miete ist 840 Euro.'],
      exp: '`Das Bad ist leider klein.` Wohnung: nicht groß, hell. Küche ganz neu. Miete 480.' }),
    M({ topic: 'possessiv', text: 'Das ist Familie Yıldız. Herr Yıldız heißt Murat. Er ist 45 und Arzt. Frau Yıldız heißt Selin, sie ist Lehrerin. Sie haben drei Kinder: zwei Söhne und eine Tochter. Die Familie wohnt in Köln.',
      q: 'Lesen Sie den Text. Was ist richtig?', opts: ['Familie Yıldız hat zwei Söhne und eine Tochter.', 'Familie Yıldız hat keine Kinder.', 'Frau Yıldız ist Ärztin.', 'Die Familie wohnt in Istanbul.'],
      exp: '`drei Kinder: zwei Söhne und eine Tochter`. Herr Yıldız Arzt, Frau Yıldız Lehrerin, Köln.' }),

    W_email, W_einkauf
  ];
  window.EXAMS.push(
    { id: 'd1', group: 'vize', title: 'Deneme ara sınavı 1', desc: '5 dinleme · 10 gramer · 5 okuma · 2 yazma', questions: d1 },
    { id: 'd2', group: 'vize', title: 'Deneme ara sınavı 2', desc: '5 dinleme · 10 gramer · 5 okuma · 2 yazma', questions: d2 },
    { id: 'd3', group: 'vize', title: 'Deneme ara sınavı 3', desc: '5 dinleme · 10 gramer · 5 okuma · 2 yazma', questions: d3 }
  );

  /* ================= Konu testleri için ek sorular ================= */
  var extra = {
    begruessung: [
      M({ q: 'Telefonda nasıl vedalaşılır?', opts: ['Auf Wiederhören!', 'Auf Wiedersehen!', 'Gute Nacht!', 'Guten Tag!'], exp: 'Telefon: **Auf Wiederhören** (hören = duymak). Yüz yüze: Auf Wiedersehen.' }),
      M({ q: 'Saat 8.00, sınıfa giriyorsun. Hocaya ne dersin?', opts: ['Guten Morgen!', 'Gute Nacht!', 'Guten Abend!', 'Tschüs!'], exp: 'Sabah: **Guten Morgen**.' }),
      M({ q: '„Wie geht es Ihnen?“ – Doğru cevap hangisi?', opts: ['Danke, gut. Und Ihnen?', 'Ich heiße Paul.', 'Aus der Türkei.', 'Danke, gut. Und dir?'], exp: 'Resmi soruya resmi karşılık: **Und Ihnen?**', why: { 3: '`dir` samimi; soru `Ihnen` ile soruldu.' } }),
      F({ q: 'Anlamadın, tekrar istiyorsun.', code: 'Wie ____? Noch einmal, bitte.', ans: ['bitte'], exp: '**Wie bitte?** = Efendim? / Anlamadım.' }),
      M({ listen: 'Guten Tag, Firma Hansen, Becker.\nGuten Tag, hier ist Kaya. Ist Frau Hansen da?\nEinen Moment, bitte.', q: 'Hören Sie. Was sagt Frau Becker?', opts: ['Einen Moment, bitte.', 'Tut mir leid, Frau Hansen ist nicht da.', 'Auf Wiederhören.', 'Wie bitte?'], exp: '`Einen Moment, bitte.` = Bir dakika lütfen (bağlıyor).' }),
      M({ q: '„Tschüs!“ kime söylenir?', opts: ['Arkadaşa (samimi).', 'Yalnızca telefonda.', 'Sadece sabah.', 'Tanımadığın bir yetkiliye.'], exp: '**Tschüs** samimi veda. Resmi: Auf Wiedersehen.' })
    ],
    satz: [
      M({ q: '____ ist das? – Das ist Frau Müller.', opts: ['Wer', 'Was', 'Wo', 'Woher'], exp: 'Cevap kişi → **Wer**.' }),
      M({ q: '____ sprechen Sie? – Türkisch und Englisch.', opts: ['Was', 'Wer', 'Wie', 'Woher'], exp: 'Diller → **Was** sprechen Sie?' }),
      M({ q: '____ heißt du? – Ich heiße Can.', opts: ['Wie', 'Was', 'Wer', 'Wo'], exp: 'İsim sorusu Almancada **Wie** heißt du? (Was heißt du yanlış.)', why: { 1: 'Türkçedeki "adın ne" mantığı burada yok: **Wie** heißt du?' } }),
      F({ q: 'Kelimelerden soru kur (soru işaretsiz yazabilirsin).', code: '(du – Tee – trinkst)  →  ____?', ans: ['Trinkst du Tee'], exp: 'Evet/hayır sorusu: fiil başta → **Trinkst du Tee?**' }),
      F({ q: 'Kelimelerden soru kur.', code: '(kommen – woher – Sie)  →  ____?', ans: ['Woher kommen Sie'], exp: 'W-kelimesi başta, fiil 2.: **Woher kommen Sie?**' }),
      M({ q: 'Hangisi doğru cümle?', opts: ['Mein Name ist Ali.', 'Mein Name Ali ist.', 'Ist mein Name Ali.', 'Ali mein Name ist.'], exp: 'Düz cümlede fiil 2. pozisyon: Mein Name **ist** Ali.' })
    ],
    verben: [
      M({ q: 'ihr ____ aus Polen.', opts: ['kommt', 'kommen', 'kommst', 'komme'], exp: 'ihr → **-t**: ihr kommt.' }),
      M({ q: 'Sie (siz, resmi) ____ in Berlin.', opts: ['wohnen', 'wohnt', 'wohnst', 'wohne'], exp: 'Sie (resmi) = sie (onlar) çekimi: **wohnen**.' }),
      F({ q: 'sein fiilini çek.', code: 'Das ____ meine Kinder.', ans: ['sind'], exp: 'Kinder çoğul → das **sind** …' }),
      F({ q: 'haben fiilini çek.', code: 'Lara ____ zwei Geschwister.', ans: ['hat'], exp: 'Lara = sie → **hat**.' }),
      F({ q: 'essen fiilini çek.', code: 'Was ____ (essen) du gern?', ans: ['isst'], exp: 'essen: e → i: du **isst**, er isst.' }),
      F({ q: 'arbeiten fiilini çek.', code: 'Er ____ (arbeiten) bei der Polizei.', ans: ['arbeitet'], exp: 'Kök -t ile bitince araya e: er arbeit**et**, du arbeit**est**.' }),
      M({ q: '____ ihr Hunger?', opts: ['Habt', 'Hat', 'Haben', 'Hast'], exp: 'ihr **habt**.' }),
      M({ q: 'Was ____ Sie? – Ich möchte zwei Brötchen.', opts: ['möchten', 'möchte', 'möchtest', 'möchtet'], exp: 'Sie → **möchten**.' })
    ],
    pronomen: [
      M({ q: 'Hocanla konuşuyorsun: „Woher kommen ____, Herr Schmitt?“', opts: ['Sie', 'du', 'ihr', 'er'], exp: 'Herr/Frau + soyad → **Sie**.' }),
      M({ q: 'İki arkadaşına soruyorsun: „Woher kommt ____?“', opts: ['ihr', 'du', 'Sie', 'wir'], exp: 'Birden çok arkadaş → **ihr** kommt.' }),
      F({ q: 'er / es / sie yaz.', code: 'Wo ist das Bad? – ____ ist dort.', ans: ['Es'], exp: 'das Bad → **es**.' }),
      F({ q: 'er / es / sie yaz.', code: 'Wie ist die Küche? – ____ ist sehr schön.', ans: ['Sie'], exp: 'die Küche → **sie** (cümle başı: Sie).' }),
      F({ q: 'er / es / sie yaz.', code: 'Und der Balkon? – ____ ist groß.', ans: ['Er'], exp: 'der Balkon → **er**.' }),
      M({ q: 'Das sind Anna und Tom. ____ kommen aus Hamburg.', opts: ['Sie', 'Er', 'Ihr', 'Es'], exp: 'Anna ve Tom = onlar → **sie** (başta Sie) kommen.' })
    ],
    possessiv: [
      M({ q: 'Wie heißt ____ Vater, Lisa?', opts: ['dein', 'deine', 'Ihr', 'Ihre'], exp: 'Lisa’ya samimi + der Vater → **dein**.' }),
      M({ q: 'Frau Wolf, sind das ____ Kinder?', opts: ['Ihre', 'Ihr', 'deine', 'mein'], exp: 'Resmi + çoğul → **Ihre** Kinder.' }),
      F({ q: 'mein / meine yaz.', code: 'Das ist ____ Kind. Es ist drei Jahre alt.', ans: ['mein'], exp: 'das Kind → **mein** (-e yok).' }),
      M({ q: 'meine Eltern = mein Vater und meine …', opts: ['Mutter', 'Schwester', 'Tochter', 'Oma'], exp: 'Eltern = Vater + **Mutter**.' }),
      M({ q: 'Der Vater von meinem Vater ist mein …', opts: ['Großvater', 'Bruder', 'Enkel', 'Sohn'], exp: 'Babamın babası = **Großvater / Opa**.' }),
      M({ q: '„die Geschwister“ ne demek?', opts: ['kardeşler', 'büyükanne ve büyükbaba', 'anne-baba', 'torunlar'], exp: 'Geschwister = **kardeşler** (Bruder + Schwester).' }),
      F({ q: 'Aile kelimesini yaz.', code: 'Lili ist Walters Enkelin. Walter ist Lilis ____ (dede).', ans: ['Opa', 'Großvater'], exp: '**Opa / Großvater**.' })
    ],
    person: [
      M({ q: 'Ich komme aus ____ Türkei.', opts: ['der', 'die', 'dem', '–'], exp: '`aus der Türkei` (die Türkei → aus der). Aynı: aus der Schweiz.' }),
      M({ q: 'Ich wohne ____ Istanbul.', opts: ['in', 'aus', 'von', 'bei'], exp: 'Şehirde oturmak: **in** Istanbul. aus = …den.' }),
      M({ q: '„verheiratet“ ne demek?', opts: ['evli', 'bekar', 'boşanmış', 'dul'], exp: 'verheiratet = **evli**. ledig = bekar, geschieden = boşanmış, verwitwet = dul.' }),
      M({ q: '„Familienname“ hangisi? → Name: **Emirhan Öz**', opts: ['Öz', 'Emirhan', 'Emirhan Öz', 'Izmir'], exp: 'Familienname/Nachname = soyadı = **Öz**. Vorname = Emirhan.' }),
      F({ q: 'Dili yaz.', code: 'Ich komme aus Frankreich. Ich spreche ____.', ans: ['Französisch'], exp: 'Frankreich → **Französisch**.' }),
      M({ q: 'Berlin ist die ____ von Deutschland.', opts: ['Hauptstadt', 'Postleitzahl', 'Straße', 'Familie'], exp: '**Hauptstadt** = başkent.' })
    ],
    zahlen: [
      M({ q: '17 = ?', opts: ['siebzehn', 'siebenzehn', 'siebzig', 'sechzehn'], exp: '17 = **siebzehn** (sieben’in -en’i düşer). siebzig = 70.' }),
      M({ q: '30 = ?', opts: ['dreißig', 'dreizig', 'dreizehn', 'dreiunddreißig'], exp: '30 = drei**ß**ig (istisna: -zig değil -ßig).' }),
      F({ q: 'Sayıyı yazıyla yaz.', code: '12 = ____', ans: ['zwölf', 'zwoelf'], exp: '12 = **zwölf**.' }),
      F({ q: 'Sayıyı yazıyla yaz.', code: '21 = ____', ans: ['einundzwanzig'], exp: '21 = **ein-und-zwanzig**.' }),
      M({ q: '2,49 € nasıl okunur?', opts: ['zwei Euro neunundvierzig', 'zwei Euro vierundneunzig', 'zweiundvierzig Euro neun', 'vier Euro neunundzwanzig'], exp: '2,49 € = zwei Euro **neunundvierzig**.' }),
      M({ q: 'Ein Pfund = ?', opts: ['500 Gramm', '1000 Gramm', '100 Gramm', '1 Liter'], exp: 'ein Pfund = **500 Gramm** (yarım kilo).' }),
      M({ q: 'Ich kaufe zwei ____ Wasser.', opts: ['Flaschen', 'Flasche', 'Kilo', 'Gramm'], exp: 'Şişe çoğul olur: zwei **Flaschen** Wasser. (Su kiloyla alınmaz.)' })
    ],
    artikel: [
      M({ q: 'Artikel? ____ Wohnung', opts: ['die', 'der', 'das'], exp: '-ung → hep **die**: die Wohnung.' }),
      M({ q: 'Artikel? ____ Brötchen', opts: ['das', 'der', 'die'], exp: '-chen → hep **das**: das Brötchen.' }),
      M({ q: 'Artikel? ____ Käse', opts: ['der', 'die', 'das'], exp: '**der** Käse (-e ile bitiyor ama der! İstisna).' }),
      F({ q: 'ein / eine yaz.', code: 'Das ist ____ Kiwi.', ans: ['eine'], exp: 'die Kiwi → **eine**.' }),
      F({ q: 'ein / eine yaz.', code: 'Ist das ____ Kuchen?', ans: ['ein'], exp: 'der Kuchen → **ein**.' }),
      F({ q: 'nicht / kein / keine yaz.', code: 'Die Wohnung ist ____ groß.', ans: ['nicht'], exp: 'Sıfat → **nicht** groß.' }),
      M({ q: 'Welcher Satz ist richtig?', opts: ['Das ist keine Banane.', 'Das ist nicht Banane.', 'Das ist kein Banane.', 'Das ist nicht eine Banane.'], exp: 'eine Banane → **keine** Banane.' })
    ],
    plural: [
      F({ q: 'Çoğulunu yaz.', code: 'die Tomate – drei ____', ans: ['Tomaten'], exp: '-e → +n: **Tomaten**.' }),
      F({ q: 'Çoğulunu yaz.', code: 'das Kind – zwei ____', ans: ['Kinder'], exp: 'das Kind, -er → **Kinder**.' }),
      F({ q: 'Çoğulunu yaz.', code: 'der Saft – zwei ____', ans: ['Säfte', 'Saefte'], exp: 'der Saft, ¨e → **Säfte**.' }),
      F({ q: 'Çoğulunu yaz.', code: 'das Haus – zwei ____', ans: ['Häuser', 'Haeuser'], exp: 'das Haus, ¨er → **Häuser**.' }),
      F({ q: 'Çoğulunu yaz.', code: 'die Wohnung – drei ____', ans: ['Wohnungen'], exp: '-ung → +en: **Wohnungen**.' }),
      M({ q: 'Çoğul hangisi? der Bruder → die …', opts: ['Brüder', 'Bruders', 'Bruderen', 'Brudere'], exp: 'der Bruder, ¨ → die **Brüder**.' }),
      M({ q: 'Çoğul hangisi? das Sofa → die …', opts: ['Sofas', 'Sofen', 'Sofae', 'Söfa'], exp: '-a ile biten yabancı kelimeler +s: **Sofas**.' }),
      M({ q: 'Hangisinin çoğulu YOKTUR (Sg.)?', opts: ['die Milch', 'die Banane', 'der Apfel', 'das Ei'], exp: 'Milch, Butter, Zucker, Mehl, Obst, Salz → çoğulsuz.' })
    ],
    essen: [
      M({ q: 'Satıcı: „Sonst noch etwas?“ Ne demek?', opts: ['Başka bir şey?', 'Ne kadar?', 'Ne istersiniz?', 'Afiyet olsun.'], exp: '`Sonst noch etwas?` = Başka bir şey istiyor musunuz?' }),
      M({ q: 'Susadın. Ne dersin?', opts: ['Ich habe Durst.', 'Ich habe Hunger.', 'Ich bin Durst.', 'Ich habe Wasser.'], exp: 'Durst = susuzluk: **Ich habe Durst.** (haben ile!)', why: { 2: 'Almancada "susamak" haben + Durst: Ich **habe** Durst.' } }),
      F({ q: 'Boşluğu doldur.', code: 'Ich esse ____ Fisch. Fisch ist mein Lieblingsessen.', ans: ['gern', 'gerne'], exp: 'Severek yemek: **gern** essen.' }),
      M({ q: '„Das schmeckt gut!“ ne demek?', opts: ['Bunun tadı güzel!', 'Bu pahalı!', 'Bu yeterli!', 'Bu taze!'], exp: 'schmecken = tadı …olmak.' }),
      M({ q: 'Hangisi içecek DEĞİL?', opts: ['das Brötchen', 'der Saft', 'der Tee', 'das Mineralwasser'], exp: 'Brötchen = küçük ekmek. Diğerleri Getränke.' }),
      M({ q: 'Hangisi meyve/sebze DEĞİL?', opts: ['der Käse', 'die Birne', 'die Zwiebel', 'die Kartoffel'], exp: 'Käse = peynir.' }),
      M({ listen: 'Was möchten Sie?\nIch möchte drei Brötchen und ein Stück Kuchen.\nGern. Sonst noch etwas?\nNein, danke.', q: 'Hören Sie. Was kauft die Person?', opts: ['Brötchen und Kuchen.', 'Brot und Käse.', 'Kaffee und Kuchen.', 'Drei Kuchen.'], exp: '`drei Brötchen und ein Stück Kuchen`.' })
    ],
    wohnung: [
      M({ q: 'teuer ↔ ?', opts: ['billig', 'hell', 'neu', 'breit'], exp: 'teuer (pahalı) ↔ **billig** (ucuz).' }),
      M({ q: 'hell ↔ ?', opts: ['dunkel', 'klein', 'alt', 'schmal'], exp: 'hell (aydınlık) ↔ **dunkel**.' }),
      M({ q: 'Hangisi Elektrogerät?', opts: ['der Herd', 'der Sessel', 'das Regal', 'der Teppich'], exp: 'Herd = ocak (elektrikli). Sessel, Regal, Teppich mobilya/eşya.' }),
      F({ q: 'gefallen fiilini çek.', code: 'Die Wohnung ____ mir sehr gut.', ans: ['gefällt', 'gefaellt'], exp: 'Tekil özne → **gefällt** (a → ä).' }),
      M({ q: 'Wohnungsanzeige: „3-Zi.-Whg., ca. 70 m², möbl.“ – „möbl.“ ne demek?', opts: ['eşyalı', 'modern', 'mutfaklı', 'ucuz'], exp: 'möbl. = **möbliert** (eşyalı). Zi. = Zimmer, ca. = yaklaşık.' }),
      M({ q: 'Wo kochen wir?', opts: ['In der Küche.', 'Im Bad.', 'Im Flur.', 'Auf dem Balkon.'], exp: 'Yemek **Küche**’de pişer.' }),
      M({ q: 'Mein Stuhl ist schwarz. „schwarz“ hangi renk?', opts: ['siyah', 'beyaz', 'gri', 'kahverengi'], exp: 'schwarz = siyah, weiß = beyaz, grau = gri, braun = kahverengi.' }),
      M({ listen: 'Wie gefällt dir der Schreibtisch?\nEr gefällt mir sehr gut! Er ist aus Holz.\nUnd wie viel kostet er?\nNur neunundvierzig Euro.', q: 'Hören Sie. Wie viel kostet der Schreibtisch?', opts: ['49 €', '94 €', '19 €', '40 €'], exp: 'neun**und**vierzig = **49**.' })
    ],
    yazma: [W_formular]
  };

  window.TOPIC_QUESTIONS = {};
  window.TOPICS.forEach(function (t) {
    var list = (extra[t.id] || []).map(function (q) { q.topic = t.id; return q; });
    [d1, d2, d3].forEach(function (d) { d.forEach(function (q) { if (q.topic === t.id) list.push(q); }); });
    window.TOPIC_QUESTIONS[t.id] = list;
  });
  window.EXTRA_CODE = [];

  /* Dinleme: her satırı kim söylüyor (app.js'teki ROLES) */
  var VOICES = {
    'Frau Keller: Guten Abend': ['w', 'm', 'w', 'm'],
    'Firma Teletec, Sandra Ro': ['yw', 'm', 'yw', 'm'],
    'Wie heißen Sie, bitte?\nM': ['w', 'm', 'w', 'm', 'w'],
    'Das ist meine Familie. M': ['b', 'b', 'b'],
    'Guten Tag. Was möchten S': ['m', 'ow', 'm', 'ow', 'm'],
    'Gute Nacht, Mama!\nGute N': ['g', 'w'],
    'Hallo, ich bin Marco. Un': ['ym', 'yw', 'ym', 'yw', 'ym'],
    'Wie ist Ihre Telefonnumm': ['w', 'm'],
    'Wer ist das? Ist das dei': ['yw', 'ym', 'yw', 'ym'],
    'Wie gefällt dir die Wohn': ['ym', 'yw', 'ym', 'yw'],
    'Hallo, Tim! Wie geht’s?\n': ['yw', 'ym', 'yw'],
    'Entschuldigung, was kost': ['w', 'm', 'w'],
    'Wie ist Ihre Adresse, Fr': ['m', 'w', 'm', 'w'],
    'Was isst du gern, Paula?': ['w', 'g', 'w', 'g'],
    'Ich suche eine Wohnung. ': ['ym', 'om', 'ym', 'om'],
    'Guten Tag, Firma Hansen,': ['w', 'm', 'w'],
    'Was möchten Sie?\nIch möc': ['yw', 'om', 'yw', 'om'],
    'Wie gefällt dir der Schr': ['w', 'm', 'w', 'm']
  };
  var vMiss = [];
  function setVoices(q) { if (q.listen) { q.voices = VOICES[q.listen.slice(0, 24)]; if (!q.voices) vMiss.push(q.listen.slice(0, 24)); } }
  window.EXAMS.forEach(function (e) { e.questions.forEach(setVoices); });
  Object.keys(window.TOPIC_QUESTIONS).forEach(function (k) { window.TOPIC_QUESTIONS[k].forEach(setVoices); });
  window.__voiceMiss = vMiss;

  /* ß içeren her cevaba "ss" yazımını da ekle (heiße → heisse, Straße → Strasse, groß → gross). */
  function addSS(list) {
    list.slice().forEach(function (x) {
      if (x.indexOf('ß') !== -1) { var v = x.replace(/ß/g, 'ss'); if (list.indexOf(v) === -1) list.push(v); }
    });
    return list;
  }
  var seenQ = [];
  function fixQ(q) {
    if (seenQ.indexOf(q) !== -1) return; seenQ.push(q);
    if (q.ans) addSS(q.ans);
    if (q.blanks) q.blanks.forEach(function (b) { addSS(b.ans); });
  }
  window.EXAMS.forEach(function (e) { e.questions.forEach(fixQ); });
  Object.keys(window.TOPIC_QUESTIONS).forEach(function (k) { window.TOPIC_QUESTIONS[k].forEach(fixQ); });
})();
