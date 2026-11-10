/* Konu özetleri, seviyeler, kurallar. Satır içi biçim: `kod` ve **kalın**. */
window.COURSE = {
  id: 'piano',
  storePrefix: 'piano-',
  reviewLead: 'Porte, iki anahtar, ek çizgiler, işaretler ve klavye. Her notaya dokununca sesini duyarsın; konunun sonunda ilgili alıştırmaya geçebilirsin.',
  testLead: 'Bir seviye seç, cevap yolunu ve modu belirle. Yanlış yaptığın nota birkaç soru sonra tekrar gelir; sonraki oturumlarda da daha sık sorulur.'
};

window.LEVELS = [
  { id: 'sol-1', no: 1, title: 'Sol anahtarı · porte içi', desc: '1. çizgideki Mi ile 5. çizgideki Fa arası, 9 nota.', clefs: { treble: ['E4', 'F5'] }, topic: 'sol' },
  { id: 'fa-1', no: 2, title: 'Fa anahtarı · porte içi', desc: '1. çizgideki Sol ile 5. çizgideki La arası, 9 nota.', clefs: { bass: ['G2', 'A3'] }, topic: 'fa' },
  { id: 'orta-do', no: 3, title: 'Orta Do bölgesi', desc: 'İki portenin buluştuğu yer: sol anahtarının altı, fa anahtarının üstü.', clefs: { treble: ['A3', 'G4'], bass: ['F3', 'E4'] }, topic: 'orta-do' },
  { id: 'sol-2', no: 4, title: 'Sol anahtarı · ek çizgiler', desc: 'Alttaki 2. ek çizgideki La\'dan üstteki 2. ek çizgideki Do\'ya.', clefs: { treble: ['A3', 'C6'] }, topic: 'ek' },
  { id: 'fa-2', no: 5, title: 'Fa anahtarı · ek çizgiler', desc: 'Alttaki 2. ek çizgideki Do\'dan üstteki 2. ek çizgideki Mi\'ye.', clefs: { bass: ['C2', 'E4'] }, topic: 'ek' },
  { id: 'karisik', no: 6, title: 'İki anahtar karışık', desc: 'Sol ve fa anahtarı rastgele, ek çizgiler dahil.', clefs: { treble: ['A3', 'C6'], bass: ['C2', 'E4'] }, topic: 'orta-do' },
  { id: 'isaretler', no: 7, title: 'Diyez ve bemoller', desc: 'İki anahtarda porte içi notalar, ♯ ve ♭ ile.', clefs: { treble: ['E4', 'F5'], bass: ['G2', 'A3'] }, acc: true, topic: 'isaretler' }
];

// Özel çalışmada kullanılan aralıklar
window.RANGES = {
  treble: { dar: ['E4', 'F5'], genis: ['A3', 'C6'] },
  bass: { dar: ['G2', 'A3'], genis: ['C2', 'E4'] }
};

window.TRAPS = [
  { t: 'Sol anahtarında 1. çizgi **Mi**\'dir, Do değil. Do, portenin altındaki ek çizgidedir.', topic: 'sol' },
  { t: 'Fa anahtarında aynı konum, sol anahtarındakinden **iki adım yukarıdaki** notadır: 1. çizgi Mi değil, Sol.', topic: 'fa' },
  { t: 'Çizgiden çizgiye geçmek **iki adımdır**: Mi\'den sonraki çizgi Fa değil, Sol.', topic: 'temel' },
  { t: 'Orta Do, sol anahtarında **alttaki**, fa anahtarında **üstteki** 1. ek çizgidedir.', topic: 'orta-do' },
  { t: 'İşaret notanın solunda durur, ama nota adını yine notanın konumu belirler.', topic: 'isaretler' }
];

window.TOPICS = [
  {
    id: 'temel', title: 'Nota adları ve porte', level: 'sol-1',
    blocks: [
      { t: 'p', text: 'Yedi nota adı vardır: **Do, Re, Mi, Fa, Sol, La, Si**. Si\'den sonra yine Do gelir; aynı adın bir üstteki tekrarına **oktav** denir.' },
      { t: 'table', head: ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'], rows: [['C', 'D', 'E', 'F', 'G', 'A', 'B']], caption: 'Yabancı kaynaklardaki harf adları' },
      { t: 'p', text: 'Porte 5 çizgi ve aralarındaki 4 aradan oluşur. Çizgiler de aralar da **aşağıdan yukarı** sayılır.' },
      { t: 'staff', clef: 'treble', notes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'], caption: 'Sol anahtarında Do\'dan Do\'ya: her adımda çizgi ve ara sırayla değişir' },
      { t: 'ul', items: [
        'Bir adım yukarı çıkınca çizgiden araya ya da aradan çizgiye geçilir.',
        'Çizgiden bir sonraki çizgiye geçmek **iki adımdır** (Mi → Sol).',
        'Notanın adı anahtar olmadan bilinemez; anahtar, portenin haritasıdır.'
      ] },
      { t: 'tip', text: 'Bu sitede oktav bilimsel gösterimle yazılır: Orta Do **Do4**\'tür, bir üstündeki Do ise Do5. Sayı her Do\'da bir artar.' }
    ]
  },
  {
    id: 'sol', title: 'Sol anahtarı', level: 'sol-1',
    blocks: [
      { t: 'p', text: 'Sol anahtarının kıvrımı **2. çizgiyi** sarar; o çizgideki nota Sol\'dür (Sol4). Piyanoda sağ elin partisi genelde bu anahtarla yazılır.' },
      { t: 'staff', clef: 'treble', notes: ['E4', 'G4', 'B4', 'D5', 'F5'], caption: 'Çizgiler: Mi – Sol – Si – Re – Fa' },
      { t: 'staff', clef: 'treble', notes: ['F4', 'A4', 'C5', 'E5'], caption: 'Aralar: Fa – La – Do – Mi' },
      { t: 'p', text: 'Bütün notaları tek tek ezberlemek yerine birkaç **referans nota** bil, gerisini oradan adım sayarak bul:' },
      { t: 'staff', clef: 'treble', notes: ['C4', 'G4', 'C5', 'F5'], caption: 'Referans notalar: Orta Do, Sol (2. çizgi), Do (3. ara), Fa (5. çizgi)' },
      { t: 'trap', text: '1. çizgi **Mi**\'dir, Do değil. Do, portenin altındaki ek çizgidedir.' }
    ]
  },
  {
    id: 'fa', title: 'Fa anahtarı', level: 'fa-1',
    blocks: [
      { t: 'p', text: 'Fa anahtarının iki noktası **4. çizgiyi** çevreler; o çizgideki nota Fa\'dır (Fa3). Sol elin partisi genelde bu anahtarla yazılır.' },
      { t: 'staff', clef: 'bass', notes: ['G2', 'B2', 'D3', 'F3', 'A3'], caption: 'Çizgiler: Sol – Si – Re – Fa – La' },
      { t: 'staff', clef: 'bass', notes: ['A2', 'C3', 'E3', 'G3'], caption: 'Aralar: La – Do – Mi – Sol' },
      { t: 'staff', clef: 'bass', notes: ['G2', 'C3', 'F3', 'C4'], caption: 'Referans notalar: Sol (1. çizgi), Do (2. ara), Fa (4. çizgi), Orta Do (üstteki ek çizgi)' },
      { t: 'trap', text: 'Sol anahtarı alışkanlığıyla okuma. Aynı konum, fa anahtarında **iki adım yukarıdaki** notadır: 1. çizgi Mi değil Sol, 1. ara Fa değil La.' },
      { t: 'low', text: '"İki adım ekle" kuralı başta köprü olarak işe yarar, ama kalıcı olarak referans notalarla okumaya alış; yoksa her notada çeviri yaparsın.' }
    ]
  },
  {
    id: 'ek', title: 'Ek çizgiler', level: 'sol-2',
    blocks: [
      { t: 'p', text: 'Portenin dışına taşan notalar için kısa **ek çizgiler** çizilir. Düzen bozulmaz: ek çizgi ile yanındaki boşluk da birer adımdır.' },
      { t: 'staff', clef: 'treble', notes: ['D4', 'C4', 'B3', 'A3', 'G5', 'A5', 'B5', 'C6'], caption: 'Sol anahtarı: altta Re, Do, Si, La; üstte Sol, La, Si, Do' },
      { t: 'staff', clef: 'bass', notes: ['F2', 'E2', 'D2', 'C2', 'B3', 'C4', 'D4', 'E4'], caption: 'Fa anahtarı: altta Fa, Mi, Re, Do; üstte Si, Do, Re, Mi' },
      { t: 'table', head: ['Konum', 'Sol anahtarı', 'Fa anahtarı'], rows: [
        ['Üstteki 2. ek çizgi', 'Do', 'Mi'],
        ['Üstteki 1. ek çizgi', 'La', 'Do (Orta Do)'],
        ['5. çizginin hemen üstü', 'Sol', 'Si'],
        ['1. çizginin hemen altı', 'Re', 'Fa'],
        ['Alttaki 1. ek çizgi', 'Do (Orta Do)', 'Mi'],
        ['Alttaki 2. ek çizgi', 'La', 'Do']
      ] },
      { t: 'tip', text: 'Ek çizgileri tek tek saymak yavaştır. **Do**\'ları işaret al: sol anahtarında alttaki 1. ve üstteki 2. ek çizgi Do; fa anahtarında alttaki 2. ve üstteki 1. ek çizgi Do.' }
    ]
  },
  {
    id: 'orta-do', title: 'Büyük porte ve Orta Do', level: 'orta-do',
    blocks: [
      { t: 'p', text: 'Piyano notası iki porteyle yazılır: üstte sol anahtarı, altta fa anahtarı. İkisine birlikte **büyük porte** denir.' },
      { t: 'staff', clef: 'grand', notes: [{ n: 'C4', st: 'treble' }, { n: 'C4', st: 'bass' }], caption: 'İkisi de Orta Do (Do4): aynı tuş, iki yazılış' },
      { t: 'p', text: 'Orta Do iki portenin tam ortasındadır. Sol anahtarının alttaki 1. ek çizgisi ile fa anahtarının üstteki 1. ek çizgisi **aynı sestir**. Yakınındaki notalar da iki türlü yazılabilir:' },
      { t: 'staff', clef: 'grand', notes: [{ n: 'B3', st: 'bass' }, { n: 'B3', st: 'treble' }, { n: 'D4', st: 'bass' }, { n: 'D4', st: 'treble' }], caption: 'Si3 ve Re4, önce fa sonra sol anahtarında' },
      { t: 'ul', items: [
        'Orta Do\'nun hemen altı **Si**: fa anahtarında 5. çizginin üstü.',
        'Orta Do\'nun hemen üstü **Re**: sol anahtarında 1. çizginin altı.',
        'İki elin buluştuğu bu bölge en çok karıştırılan yerdir; "Orta Do bölgesi" seviyesiyle ayrıca çalış.'
      ] }
    ]
  },
  {
    id: 'isaretler', title: 'Diyez, bemol, natürel', level: 'isaretler',
    blocks: [
      { t: 'p', text: '**Diyez (♯)** notayı yarım ses tizleştirir: klavyede sağdaki ilk tuş. **Bemol (♭)** yarım ses pesleştirir: soldaki ilk tuş. **Natürel (♮)** önceki işareti iptal eder.' },
      { t: 'staff', clef: 'treble', notes: ['F#4', 'Bb4', 'C#5', 'Eb4'], caption: 'Fa♯, Si♭, Do♯, Mi♭' },
      { t: 'ul', items: [
        'İşaret notanın **solunda**, notayla aynı çizgide ya da arada durur.',
        'Önce konumdan nota adını bul, sonra işareti ekle: Fa + ♯ = **Fa diyez**.',
        'Ölçü içinde konan işaret, o ölçünün sonuna kadar aynı konumdaki notalar için geçerlidir.'
      ] },
      { t: 'keys', from: 'C4', to: 'B4', labels: 'all', caption: 'Bir oktavda 12 tuş: siyah tuşların iki adı vardır' },
      { t: 'p', text: 'Do♯ ile Re♭ aynı tuştur (**enarmonik**). Notada hangisi yazıyorsa adı odur; Klavye cevap yolunda ikisi de aynı tuşa basılarak cevaplanır.' },
      { t: 'trap', text: 'Mi–Fa ve Si–Do arasında siyah tuş yoktur. Bu yüzden Mi♯ beyaz Fa tuşuna, Do♭ beyaz Si tuşuna denk gelir. Bu dört özel nota (Mi♯, Si♯, Fa♭, Do♭) burada sorulmaz.' }
    ]
  },
  {
    id: 'klavye', title: 'Klavyede notalar', level: 'sol-1',
    blocks: [
      { t: 'p', text: 'Siyah tuşlar 2\'li ve 3\'lü gruplar halindedir. Her şey buradan bulunur: 2\'li grubun hemen **solundaki** beyaz tuş Do, 3\'lü grubun hemen solundaki beyaz tuş Fa\'dır.' },
      { t: 'keys', from: 'C3', to: 'B4', labels: 'white', mark: 'C4', caption: 'İki oktav; noktalı tuş Orta Do' },
      { t: 'ul', items: [
        'Bir oktavda 12 tuş vardır: 7 beyaz, 5 siyah.',
        'Yan yana iki tuşun arası (siyahlar dahil) **yarım ses**tir.',
        '88 tuşlu piyanoda Orta Do, soldan 4. Do\'dur ve klavyenin ortasına yakındır.'
      ] },
      { t: 'tip', text: 'Okuduğun notayı klavyede de bul. **Klavye** cevap yolu porteden tuşa, **Porte** cevap yolu tuştan porteye çalıştırır.' }
    ]
  },
  {
    id: 'yontem', title: 'Nasıl çalışmalı?', level: 'sol-1',
    blocks: [
      { t: 'ul', items: [
        '**Önce doğruluk, sonra hız.** Pratik modunda rahatça doğru okuduğun seviyede Hız turuna geç.',
        '**Az ama her gün.** Günde 10 dakika, haftada bir uzun oturumdan daha etkilidir.',
        '**Referans notalardan adım say.** Zamanla saymadan tanımaya başlarsın.',
        '**Aralıklarla düşün.** İki nota arasındaki adımı (çizgi-çizgi = iki adım) görmek, gerçek nota okurken en çok işine yarayacak beceridir.'
      ] },
      { t: 'tip', text: 'Önerilen sıra: Sol anahtarı porte içi → Fa anahtarı porte içi → Orta Do bölgesi → ek çizgiler → karışık → diyez ve bemoller.' },
      { t: 'low', text: 'Eskiden çaldıysan ilk birkaç gün yavaş gelmesi normal. Okuma, parmaklardan önce geri gelir.' }
    ]
  }
];

// Yanlış cevapta gösterilen kural (anahtar + bölge)
window.RULES = {
  'treble-cizgi': 'Sol anahtarında çizgiler aşağıdan yukarı: **Mi – Sol – Si – Re – Fa**. Anahtarın kıvrımı 2. çizgiyi, yani Sol\'ü sarar.',
  'treble-ara': 'Sol anahtarında aralar aşağıdan yukarı: **Fa – La – Do – Mi**.',
  'treble-alt': 'Sol anahtarının altı: 1. çizginin altı **Re**, alttaki 1. ek çizgi **Do** (Orta Do), onun altı **Si**, alttaki 2. ek çizgi **La**.',
  'treble-ust': 'Sol anahtarının üstü: 5. çizginin üstü **Sol**, üstteki 1. ek çizgi **La**, onun üstü **Si**, üstteki 2. ek çizgi **Do**.',
  'bass-cizgi': 'Fa anahtarında çizgiler aşağıdan yukarı: **Sol – Si – Re – Fa – La**. Anahtarın iki noktası 4. çizgiyi, yani Fa\'yı çevreler.',
  'bass-ara': 'Fa anahtarında aralar aşağıdan yukarı: **La – Do – Mi – Sol**.',
  'bass-alt': 'Fa anahtarının altı: 1. çizginin altı **Fa**, alttaki 1. ek çizgi **Mi**, onun altı **Re**, alttaki 2. ek çizgi **Do**.',
  'bass-ust': 'Fa anahtarının üstü: 5. çizginin üstü **Si**, üstteki 1. ek çizgi **Do** (Orta Do), onun üstü **Re**, üstteki 2. ek çizgi **Mi**.',
  'isaret': '**♯** notayı yarım ses tizleştirir (sağdaki tuş), **♭** yarım ses pesleştirir (soldaki tuş). Adı söylerken işaret nota adına eklenir: Fa♯, Si♭.',
  'klavye': 'Siyah tuşlar 2\'li ve 3\'lü gruplardır. 2\'li grubun solundaki beyaz tuş **Do**, 3\'lü grubun solundaki **Fa**.'
};
