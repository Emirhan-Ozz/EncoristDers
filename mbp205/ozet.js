/* MBP205 · Özet: tahtadaki 7 başlık için kısa özet + sınavda yazılacak boyutta kısa Java örnekleri.
   #ozet · #ozet/<id>
   Örnekler bilerek kısa: tam dosya değil, sadece kavramı gösteren satırlar (main yok). Hepsi stub eklenerek javac ile derlendi. */
(function () {
  'use strict';

  var OZET = [
    {
      id: 'kalitim', title: 'Kalıtım (Inheritance)',
      tanim: 'Bir sınıfın (alt sınıf) başka bir sınıfın (üst sınıf) alan ve metotlarını **miras almasıdır**. Java\'da `extends` ile yapılır.',
      maddeler: [
        'İlişki **"is-a"**: Kedi **bir** Hayvandır.',
        'Ortak kod üst sınıfa bir kez yazılır, **kod tekrarı** azalır.',
        'Java\'da **tek kalıtım**: bir sınıf sadece bir sınıfı extends edebilir.',
        '**Override:** alt sınıf, üst sınıfın metodunu **aynı imzayla** yeniden yazar (`@Override`).',
        '**super:** üst sınıfın yapıcısını `super(...)` ya da metodunu `super.metot()` ile çağırır.'
      ],
      kodlar: [
        { b: 'extends + override', k:
'class Hayvan {\n    void sesCikar() { System.out.println("..."); }\n}\nclass Kedi extends Hayvan {\n    @Override\n    void sesCikar() { System.out.println("Miyav"); }\n}' },
        { b: 'super ile üst yapıcı', k:
'class Hayvan {\n    String isim;\n    Hayvan(String isim) { this.isim = isim; }\n}\nclass Kedi extends Hayvan {\n    Kedi(String isim) { super(isim); }\n}' }
      ]
    },
    {
      id: 'kapsulleme', title: 'Kapsülleme (Encapsulation)',
      tanim: 'Sınıfın verisini `private` yapıp dışarıdan **doğrudan erişimi kapatmak**, erişimi sadece **getter / setter** metotlarıyla kontrollü vermektir.',
      maddeler: [
        'Veri yanlış değer alamaz: kontrol **setter içinde** yapılır.',
        'Erişim belirleyiciler: `public` (+), `protected` (#), default (~), `private` (−).',
        'Setter yazılmazsa alan **salt okunur** olur.',
        'Sadece "private yazmak" değil: **private alan + getter/setter + kontrol** birlikte söylenmeli.'
      ],
      kodlar: [
        { b: 'private alan + getter/setter', k:
'class Hesap {\n    private int bakiye;\n\n    public int getBakiye() { return bakiye; }\n    public void setBakiye(int b) {\n        if (b >= 0) bakiye = b;  // negatif olmaz\n    }\n}' },
        { b: 'dışarıdan kullanım', pre: 'class Hesap { private int bakiye; public int getBakiye(){return bakiye;} public void setBakiye(int b){ if(b>=0) bakiye=b; } }', wrap: true, k:
'Hesap h = new Hesap();\n// h.bakiye = -50;   // HATA: bakiye private\nh.setBakiye(100);\nSystem.out.println(h.getBakiye());   // 100' }
      ]
    },
    {
      id: 'soyutlama', title: 'Soyutlama (Abstraction)',
      tanim: 'Bir nesnenin **ne yaptığını gösterip nasıl yaptığını gizlemektir**. Kullanan kişi sadece gerekli işlemi görür, ayrıntıyla uğraşmaz.',
      maddeler: [
        'Benzetme: arabada gaza basarsın, motorun içini bilmen gerekmez.',
        'Java\'da iki araçla yapılır: **soyut sınıf** (`abstract class`) ve **arayüz** (`interface`).',
        '"Ne yapılacağı" metot imzasıyla verilir, "nasıl" alt sınıfa bırakılır.',
        'Kapsüllemeden farkı: soyutlama ayrıntıyı **göstermez**, kapsülleme veriye **dokundurmaz**.'
      ],
      kodlar: [
        { b: 'arayüz ile: ne / nasıl', k:
'interface Arac {\n    void calis();            // NE yapılacak\n}\nclass Araba implements Arac {\n    public void calis() {    // NASIL (gizli)\n        System.out.println("Motor calisti");\n    }\n}' },
        { b: 'kullanan sadece metodu çağırır', k:
'class Musteri {\n    private int bakiye = 100;\n    public void paraCek(int m) {  // kontrol gizli\n        if (m <= bakiye) bakiye -= m;\n        else System.out.println("Yetersiz Bakiye!");\n    }\n}\n// Main\'de sadece: m.paraCek(50);' }
      ]
    },
    {
      id: 'polimorfizm', title: 'Çok biçimlilik (Polymorphism)',
      tanim: 'Aynı metot çağrısının **farklı nesnelerde farklı davranmasıdır**. Üst sınıf tipindeki referans, alt sınıf nesnesini tutabilir.',
      maddeler: [
        '`Hayvan h = new Kedi();` geçerlidir.',
        'Hangi metodun **çağrılabileceğine** referans tipi, hangi sürümün **çalışacağına** nesnenin gerçek tipi karar verir.',
        '**Çalışma zamanı (dinamik):** override ile.',
        '**Derleme zamanı (statik):** overloading (aynı ad, farklı parametre) ile.'
      ],
      kodlar: [
        { b: 'override ile (dinamik)', pre: 'class Hayvan { void ses(){ System.out.println("..."); } } class Kedi extends Hayvan { void ses(){ System.out.println("Miyav"); } } class Kopek extends Hayvan { void ses(){ System.out.println("Hav"); } }', wrap: true, k:
'Hayvan h = new Kedi();\nh.ses();           // Miyav\nh = new Kopek();\nh.ses();           // Hav  (aynı çağrı, farklı sonuç)' },
        { b: 'overloading ile (statik)', k:
'class Hesapla {\n    int topla(int a, int b) { return a + b; }\n    double topla(double a, double b) { return a + b; }\n}' }
      ]
    },
    {
      id: 'soyut', title: 'Soyut sınıf (Abstract Class)',
      tanim: '`abstract` ile tanımlanan, **kendisinden nesne üretilmeyen**, sadece başka sınıflara **şablon (üst sınıf)** olmak için yazılan sınıftır.',
      maddeler: [
        'Hem **normal** hem **soyut** (gövdesiz) metot içerebilir; alan ve yapıcısı olabilir.',
        'Soyut metot gövdesizdir, `;` ile biter: `abstract void sesCikar();`',
        'Alt sınıf `extends` ile türer ve soyut metotların **hepsini** yazmak zorundadır.',
        '`new Hayvan()` hata verir ama `Hayvan h = new Kedi();` geçerlidir.'
      ],
      kodlar: [
        { b: 'soyut sınıf + alt sınıf', k:
'abstract class Hayvan {\n    void uyu() { System.out.println("Uyuyor"); } // normal\n    abstract void sesCikar();                      // gövdesiz\n}\nclass Kedi extends Hayvan {\n    void sesCikar() { System.out.println("Miyav"); }\n}' },
        { b: 'nesne / referans', pre: 'abstract class Hayvan { abstract void sesCikar(); } class Kedi extends Hayvan { void sesCikar(){} }', wrap: true, k:
'// Hayvan h = new Hayvan();  // HATA: nesne olmaz\nHayvan h = new Kedi();        // geçerli' }
      ]
    },
    {
      id: 'arayuz', title: 'Arayüz (Interface)',
      tanim: 'Bir sınıfın **ne yapabileceğini** bildiren sözleşmedir (yetenek listesi). `interface` ile tanımlanır, sınıflar `implements` ile uygular.',
      maddeler: [
        'Metotlar gövdesizdir (soyut), uygulayan sınıf hepsini `public` olarak yazar.',
        'Alanlar sadece **sabit** olur (`public static final`).',
        'Nesnesi üretilmez, ama referans olabilir.',
        'Bir sınıf **birden çok** arayüz uygulayabilir → Java\'da çoklu kalıtım arayüzlerle sağlanır.',
        'Sıra: önce `extends`, sonra `implements`.'
      ],
      kodlar: [
        { b: 'arayüz + implements', k:
'interface Kosabilir {\n    void kos();\n}\nclass Kedi implements Kosabilir {\n    public void kos() {\n        System.out.println("Kosuyor");\n    }\n}' },
        { b: 'tek üst sınıf, çok arayüz', pre: 'class Hayvan {} interface Kosabilir { void kos(); } interface SesCikarabilir { void sesCikar(); }', k:
'class Kedi extends Hayvan\n        implements Kosabilir, SesCikarabilir {\n    public void kos() { }\n    public void sesCikar() { }\n}' }
      ]
    },
    {
      id: 'uml', title: 'Karşılaştırma ve UML',
      tanim: '**Soyut sınıf** ortak alan ve kod paylaşan sınıflar için ("is-a"), **arayüz** farklı sınıflara ortak bir yetenek kazandırmak için ("can-do") kullanılır. **UML** sınıfları ve ilişkilerini çizen modelleme dilidir.',
      tablo: [
        ['', 'Soyut sınıf', 'Arayüz'],
        ['Anahtar kelime', '`extends`', '`implements`'],
        ['Kaç tane?', 'En fazla **bir**', '**Sınırsız**'],
        ['Metotlar', 'Soyut + normal', 'Soyut (gövdesiz)'],
        ['Alanlar', 'Her türlü', 'Sadece sabit'],
        ['Yapıcı', 'Var', 'Yok'],
        ['Nesne üretilir mi?', 'Hayır', 'Hayır']
      ],
      maddeler: [
        'UML sınıf kutusu 3 bölüm: **ad / alanlar / metotlar**. Önlerinde `+` public, `-` private, `#` protected.',
        'Soyut sınıf adı **italik** ya da `«abstract»`, arayüz `«interface»` yazılır.',
        '**Kalıtım:** düz çizgi + boş üçgen (`extends`). **Gerçekleşme:** kesikli çizgi + boş üçgen (`implements`).',
        '**Bağlantı (has-a):** bir sınıfın içinde başka sınıf tipinde alan olması.'
      ],
      kodlar: [
        { b: 'ne zaman hangisi', k:
'abstract class Hayvan {   // ortak alan + kod\n    String isim;\n    abstract void sesCikar();\n}\ninterface Kosabilir {     // sadece yetenek\n    void kos();\n}\n\n// Robot hayvan değil ama koşabilir:\nclass Robot implements Kosabilir {\n    public void kos() { }\n}' },
        { b: 'UML kutusu ve karşılığı', uml:
'+----------------------+\n|        Hesap         |\n+----------------------+\n| - bakiye : int       |\n+----------------------+\n| + getBakiye() : int  |\n| + paraCek(m : int)   |\n+----------------------+\n\n  Kedi ────▷ Hayvan        kalıtım (extends)\n  Kedi - - -▷ Kosabilir     gerçekleşme (implements)\n  Musteri ───> Hesap        bağlantı (has-a)',
          k: 'class Musteri {\n    private Hesap hesap;   // has-a\n}', pre: 'class Hesap {}' }
      ]
    }
  ];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function md(s) { return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>'); }
  function hl(c) { return window.VizeHL ? window.VizeHL(c) : esc(c); }

  var CSS = '' +
    '.oz-lead{background:var(--accent-soft);border-radius:var(--radius);padding:12px 16px;margin:0 0 16px;line-height:1.55}' +
    '.oz-nav{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 20px}' +
    '.oz-nav a{text-decoration:none;font-weight:600;font-size:.9rem;color:var(--text);background:var(--surface);border:1px solid var(--border);border-radius:999px;padding:6px 12px}' +
    '.oz-nav a:hover{border-color:var(--accent);color:var(--accent)}' +
    '.oz-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:18px 20px;margin:0 0 18px;box-shadow:var(--shadow);line-height:1.6;scroll-margin-top:84px}' +
    '.oz-card h2{margin:0 0 8px;font-size:1.2rem;display:flex;gap:10px;align-items:baseline}.oz-card h2 span{color:var(--accent);font-family:var(--mono);font-size:1rem}' +
    '.oz-tanim{margin:0 0 8px;font-size:1.02rem}.oz-card ul{margin:0 0 10px;padding-left:1.2rem}.oz-card li{margin:.2rem 0}' +
    '.oz-card code{font:.86em var(--mono);background:var(--surface-2);border:1px solid var(--border);border-radius:4px;padding:0 4px}' +
    '.oz-ex{margin-top:12px}.oz-ex small{display:block;font-weight:700;color:var(--muted);font-size:.85rem;margin-bottom:4px}' +
    '.oz-ex pre{margin:0;white-space:pre;font:15px/1.5 var(--mono);background:var(--code-bg);color:var(--code-text);border-radius:8px;padding:10px 12px;overflow:auto}' +
    '.oz-ex pre code{background:none;border:0;padding:0;font:inherit;color:inherit}' +
    '.oz-ex pre.uml{background:var(--surface-2);color:var(--text);border:1px solid var(--border);margin-bottom:6px}' +
    '.oz-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px}' +
    '.oz-head{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:12px}.oz-head h1{margin:0}.oz-head h1 a{color:inherit;text-decoration:none}' +
    '.oz-imp{text-decoration:none;font-weight:700;border:2px solid var(--accent);color:var(--accent);border-radius:999px;padding:5px 14px}.oz-imp:hover,.oz-imp.on{background:var(--accent);color:#fff}' +
    '.oz-img{display:block;width:100%;height:auto;border-radius:8px;border:1px solid var(--border)}' +
    '.oz-tab td,.oz-tab th{vertical-align:top}' +
    '.oz-tab{width:100%;border-collapse:collapse;margin:6px 0 12px;font-size:.93rem}.oz-tab th,.oz-tab td{border:1px solid var(--border);padding:6px 10px;text-align:left}.oz-tab th{background:var(--surface-2)}';


  /* Tahta fotoğrafı (hocanın sınav başlıkları) → tablo */
  var ONEMLI = {
    ust: '`Kedi extends Hayvan implements Kosabilir, SesCikarabilir, Surunebilir` → tek üst sınıf, birden çok arayüz',
    temel: [
      ['Kalıtım (Inheritance)', '↳ **override**', 'UML: düz çizgi + boş üçgen `──▷`'],
      ['Kapsülleme (Encapsulation)', '`public` / `private` / `protected`', 'UML: `+` / `−` / `#`'],
      ['Soyutlama (Abstraction)', 'Ne yaptığını göster, nasıl yaptığını gizle', '`abstract class` ve `interface` ile'],
      ['Çok biçimlilik (Polymorphism)', '`Hayvan h = new Kedi();`', '`ArrayList<Hayvan> liste;`'],
      ['Bağlantı (has-a) · köşedeki çizim', 'Sınıf ──▶ `Random` (ok ile)', '`Random r = new Random();`']
    ],
    cesit: [
      ['Tanım', '`public abstract class ...`', '`public interface ...`'],
      ['UML oku', 'düz çizgi + boş üçgen `──▷`', 'kesikli çizgi + boş üçgen `- - -▷`'],
      ['Nesne', 'Üretilmez', 'Yok'],
      ['Referans', 'Olabilir', 'Var'],
      ['Kullanım', '`extends` ile', '`implements` ile'],
      ['Kaç tane?', 'extends\'e bağlı: bir sınıfın **max bir** üst sınıfı olabilir', 'Bir sınıfın **sınırsız** arayüzü olabilir'],
      ['Metotlar', 'Soyut metot **içerebilir** (normal metot da olur)', 'Tüm metotları **soyuttur** ↳ `private` ve `default` normal metot yazılabilir'],
      ['Erişim', 'Kapsülleme kullanılabilir', 'Her şey `public`'],
      ['Özellikler', 'Her türlü alan', 'Özellikler **SABİT** (`final`)'],
      ['Constructor', '**Var**', '**Yok**']
    ]
  };

  function table(head, rows) {
    return '<table class="oz-tab"><tr>' + head.map(function (h) { return '<th>' + md(h) + '</th>'; }).join('') + '</tr>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return i ? '<td>' + md(c) + '</td>' : '<td><b>' + md(c) + '</b></td>'; }).join('') + '</tr>'; }).join('') + '</table>';
  }
  function head(active) {
    return '<div class="oz-head"><h1>' + (active === 'onemli' ? '<a href="#ozet">Özet</a>' : 'Özet') + '</h1>' +
      '<a class="oz-imp' + (active === 'onemli' ? ' on' : '') + '" href="#ozet/onemli">★ Önemli</a></div>';
  }
  function renderOnemli(app) {
    document.title = 'Önemli · MBP205';
    app.innerHTML = head('onemli') +
      '<div class="oz-lead"><b>Hocanın tahtası:</b> sınavdaki 7 soru bu başlıklardan gelecek. Fotoğraf aşağıda, yazıları tablolara çevirdim.</div>' +
      '<section class="oz-card"><h2><span>★</span>Tahtanın en üst satırı</h2><p class="oz-tanim">' + md(ONEMLI.ust) + '</p></section>' +
      '<section class="oz-card"><h2><span>1</span>NTP\'nin temelleri</h2>' + table(['Başlık', 'Tahtadaki not', 'Ek'], ONEMLI.temel) + '</section>' +
      '<section class="oz-card"><h2><span>2</span>Sınıf çeşitleri: Soyut sınıf ve Arayüz</h2>' + table(['', 'Soyut sınıf (Abstract Class)', 'Arayüz (Interface)'], ONEMLI.cesit) + '</section>' +
      '<section class="oz-card"><h2><span>📷</span>Tahtanın fotoğrafı</h2><a href="assets/tahta.jpg" target="_blank" rel="noopener"><img class="oz-img" src="assets/tahta.jpg" alt="Hocanın tahtası: NTP temelleri, sınıf çeşitleri, arayüz"></a>' +
      '<p style="color:var(--muted);font-size:.88rem;margin:6px 0 0">Büyütmek için fotoğrafa tıkla.</p></section>';
    window.scrollTo(0, 0);
  }

  function render(app, arg) {
    if (!document.getElementById('oz-css')) { var st = document.createElement('style'); st.id = 'oz-css'; st.textContent = CSS; document.head.appendChild(st); }
    if (arg === 'onemli') return renderOnemli(app);
    document.title = 'Özet · MBP205';
    app.innerHTML = head('ozet') +
      '<div class="oz-lead">Tahtadaki 7 başlık: <b>kısa tanım + maddeler + sınavda yazılacak boyutta örnek</b>. ' +
      'Hoca tam Java dosyası değil, kavramı gösteren <b>kısa kod</b> istiyor; buradaki örnekler o kadar (main yok, sadece gereken satırlar). ' +
      'Kâğıda: önce tanımı yaz, 2-3 madde ekle, altına bir örnek kod koy.</div>' +
      '<nav class="oz-nav">' + OZET.map(function (t, i) { return '<a href="#ozet/' + t.id + '">' + (i + 1) + '. ' + esc(t.title) + '</a>'; }).join('') + '</nav>' +
      OZET.map(function (t, i) {
        return '<section class="oz-card" id="oz-' + t.id + '"><h2><span>' + (i + 1) + '</span>' + esc(t.title) + '</h2>' +
          '<p class="oz-tanim">' + md(t.tanim) + '</p>' +
          (t.tablo ? '<table class="oz-tab">' + t.tablo.map(function (r, ri) {
            return '<tr>' + r.map(function (c) { return ri ? '<td>' + md(c) + '</td>' : '<th>' + md(c) + '</th>'; }).join('') + '</tr>';
          }).join('') + '</table>' : '') +
          '<ul>' + t.maddeler.map(function (m) { return '<li>' + md(m) + '</li>'; }).join('') + '</ul>' +
          '<div class="oz-grid">' + t.kodlar.map(function (k) {
            return '<div class="oz-ex"><small>Örnek · ' + esc(k.b) + '</small>' +
              (k.uml ? '<pre class="uml">' + esc(k.uml) + '</pre>' : '') +
              '<pre class="code">' + hl(k.k) + '</pre></div>';
          }).join('') + '</div></section>';
      }).join('');
    if (arg) { var el = document.getElementById('oz-' + arg); if (el) { el.scrollIntoView({ block: 'start' }); return; } }
    window.scrollTo(0, 0);
  }

  window.OZET = OZET;
  window.OZET_ONEMLI = ONEMLI;
  window.Ozet = { render: render };
})();
