/* MBP203 Veri Tabanı ve Yönetimi · konu özetleri. tools/build.py ile üretildi. */
window.COURSE = {
 "id": "mbp203",
 "lang": "sql",
 "storeKey": "mbp203-best",
 "themeKey": "mbp203-theme",
 "points": {
  "mc": 5,
  "fill": 5,
  "match": 5
 },
 "randomMix": [
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "fill",
  "fill",
  "match"
 ],
 "randomTitle": "Rastgele deneme (20 soru)",
 "randomDesc": "17 test, 2 boşluk, 1 eşleştirme; 7 konuya yayılır. Az gördüğün sorular önce gelir.",
 "reviewTitle": "Veri Tabanı ve Yönetimi",
 "reviewLead": "MySQL ile 7 konu: giriş, ilişkisel model, SQL'e giriş (DDL/DML), sorgular ve alt sorgular, toplama fonksiyonları ve GROUP BY/HAVING, JOIN ve fonksiyonlar, görünüm ve tetikleyiciler. Örnekler derste kurulan **okul_db** ve **magaza** veri tabanlarıyla; sonuç tabloları sorgular gerçekten çalıştırılarak alındı.",
 "testLead": "Sınav sistem üzerinden 20 soru, yaklaşık %85'i test; birkaç boşluk doldurma ya da eşleştirme olabilir. Önce **deneme sınavlarını** çöz (5 deneme, ortak soru yok). Toplam 217 soru; SQL sonucu soranlar MySQL uyumlu veri tabanında çalıştırılarak doğrulandı.",
 "formatTitle": "Sınav formatı (varsayım)",
 "formatNote": "Hocanın söylediği: sınav sistem üzerinden, 20 soru, yaklaşık %85 test; eşleştirme veya boşluk doldurma olabilir. Puan dağılımı açıklanmadı; burada her soru 5 puan sayıldı.",
 "hocaLink": {
  "href": "#test/deneme1",
  "text": "Deneme sınavı 1'i çöz →"
 },
 "hocaTitle": "Ders uygulaması",
 "hocaNote": "Derste phpMyAdmin'de yapılan GROUP BY ve HAVING uygulaması.",
 "trapsLead": "Testlerde en çok karıştırılan noktalar."
};
window.EXAM_FORMAT = [
 {
  "range": "≈17 soru",
  "what": "Çoktan seçmeli test",
  "big": "85",
  "small": "puan"
 },
 {
  "range": "≈3 soru",
  "what": "Boşluk doldurma / eşleştirme",
  "big": "15",
  "small": "puan"
 },
 {
  "range": "Toplam",
  "what": "20 soru, sistem üzerinden",
  "big": "20",
  "small": "soru"
 }
];
window.TRAPS = [
 {
  "t": "MySQL bir **VTYS**, phpMyAdmin bir **web arayüzü**, `okul_db` bir **veri tabanı**dır.",
  "topic": "giris"
 },
 {
  "t": "Veri ham değerdir, işlenip anlam kazanınca **bilgi** olur.",
  "topic": "giris"
 },
 {
  "t": "Birincil anahtar **tekrar edemez ve NULL olamaz**; UNIQUE tekrar edemez ama NULL olabilir.",
  "topic": "iliskisel"
 },
 {
  "t": "1:N ilişkide FK **N (çok) tarafına** konur; 1:1'de FK'ye **UNIQUE** eklenir; M:N için **ara tablo** gerekir.",
  "topic": "iliskisel"
 },
 {
  "t": "ER diyagramında dikdörtgen = varlık, elips = nitelik, baklava = ilişki, altı çizili = PK.",
  "topic": "iliskisel"
 },
 {
  "t": "`TRUNCATE` ve `DROP` **DDL**, `DELETE` **DML**dir. DROP yapıyı da siler.",
  "topic": "sql-giris"
 },
 {
  "t": "**#1046 No database selected**: önce `USE okul_db;`. **#1452**: ana tabloda olmayan değerle FK eklenmiş.",
  "topic": "sql-giris"
 },
 {
  "t": "`UPDATE` / `DELETE`'te WHERE yazılmazsa **bütün satırlar** etkilenir.",
  "topic": "sql-giris"
 },
 {
  "t": "NULL kontrolü `= NULL` ile değil **`IS NULL`** ile yapılır.",
  "topic": "sorgular"
 },
 {
  "t": "`LIKE` deseninde `%` = 0 veya daha çok karakter, `_` = tam 1 karakter. `BETWEEN` uçları **dahil** eder.",
  "topic": "sorgular"
 },
 {
  "t": "`COUNT(*)` NULL'ları da sayar, `COUNT(sutun)` saymaz. AVG NULL'ları hesaba katmaz.",
  "topic": "ileri1"
 },
 {
  "t": "Toplama fonksiyonlu koşul **HAVING**'e yazılır; WHERE gruplamadan önce satırları süzer.",
  "topic": "ileri1"
 },
 {
  "t": "Yazım sırası: SELECT, FROM, JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT.",
  "topic": "ileri1"
 },
 {
  "t": "INNER JOIN sadece eşleşenleri, LEFT JOIN soldakilerin **hepsini** getirir; eşleşmeyenlerde sağ sütunlar NULL.",
  "topic": "ileri2"
 },
 {
  "t": "UNION tekrarları atar, UNION ALL atmaz. MySQL'de FULL OUTER JOIN yoktur.",
  "topic": "ileri2"
 },
 {
  "t": "VIEW veri saklamaz (sanal tablo). DROP VIEW tablodaki veriyi silmez.",
  "topic": "gorunum"
 },
 {
  "t": "Tetikleyici INSERT/UPDATE/DELETE ile kendiliğinden çalışır; INSERT'te OLD, DELETE'te NEW yoktur.",
  "topic": "gorunum"
 }
];
window.TOPICS = [
 {
  "id": "giris",
  "title": "Veri ve veri tabanına giriş",
  "src": "Hafta 1",
  "blocks": [
   {
    "t": "p",
    "text": "**Veri** (data) ham, işlenmemiş gerçeklerdir: `85`, `Ahmet`, `2025-09-20`. Veri işlenip anlam kazanınca **bilgi** (information) olur: \"Ahmet'in VTYS notu 85, sınıf ortalamasının üstünde\"."
   },
   {
    "t": "p",
    "text": "**Veri tabanı**: birbiriyle ilişkili verilerin, tekrarsız ve düzenli biçimde saklandığı topluluktur. **Veri Tabanı Yönetim Sistemi (VTYS / DBMS)** ise bu verileri tanımlamayı, saklamayı, sorgulamayı, güncellemeyi ve korumayı sağlayan yazılımdır."
   },
   {
    "t": "table",
    "head": [
     "Kavram",
     "Örnek"
    ],
    "rows": [
     [
      "Veri tabanı",
      "`okul_db`, `magaza`"
     ],
     [
      "VTYS (yazılım)",
      "MySQL, MariaDB, PostgreSQL, Oracle, Microsoft SQL Server, SQLite"
     ],
     [
      "Yönetim arayüzü",
      "phpMyAdmin (MAMP / XAMPP ile gelir), MySQL Workbench"
     ],
     [
      "Sorgu dili",
      "SQL (Structured Query Language)"
     ]
    ]
   },
   {
    "t": "trap",
    "text": "MySQL bir **VTYS**dir, veri tabanı değildir. phpMyAdmin de VTYS değil, MySQL'i tarayıcıdan yönetmeye yarayan **web arayüzüdür**. MAMP ise Apache + MySQL + PHP'yi birlikte kuran pakettir."
   },
   {
    "t": "p",
    "text": "**Dosya sistemi yerine VTYS kullanmanın nedenleri** (dosya sisteminin sorunları):"
   },
   {
    "t": "table",
    "head": [
     "Dosya sisteminde sorun",
     "VTYS'nin çözümü"
    ],
    "rows": [
     [
      "Veri tekrarı (aynı bilgi birçok dosyada)",
      "Veri bir kez saklanır, ilişkilerle bağlanır"
     ],
     [
      "Tutarsızlık (bir dosyada güncellenir, diğerinde eski kalır)",
      "Bütünlük kısıtları (PK, FK, NOT NULL) tutarlılığı korur"
     ],
     [
      "Veriye erişim zor (her soru için yeni program)",
      "SQL ile anında sorgu"
     ],
     [
      "Güvenlik zayıf",
      "Kullanıcı ve yetki yönetimi (GRANT / REVOKE)"
     ],
     [
      "Aynı anda erişimde çakışma",
      "Eşzamanlılık denetimi, kilitleme, işlemler (transaction)"
     ],
     [
      "Yedekleme / kurtarma zor",
      "Yedekleme ve geri yükleme araçları"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Veri modelleri** (verinin nasıl düzenlendiği):"
   },
   {
    "t": "ul",
    "items": [
     "**Hiyerarşik model**: ağaç yapısı, her kaydın tek bir üstü (ebeveyni) vardır.",
     "**Ağ (network) modeli**: bir kaydın birden çok üstü olabilir, grafik yapısı.",
     "**İlişkisel model**: veriler satır ve sütunlardan oluşan **tablolarda** tutulur; tablolar anahtarlarla bağlanır. MySQL bu modeli kullanır.",
     "**Nesne yönelimli model**: veri, nesne ve sınıflar biçiminde saklanır.",
     "**NoSQL**: belge (MongoDB), anahtar-değer (Redis), grafik (Neo4j) gibi tablo dışı yapılar."
    ]
   },
   {
    "t": "p",
    "text": "**Veri tabanında görev alanlar**: Veri Tabanı Yöneticisi (**DBA**: kurulum, yetki, yedek, performans), veri tabanı tasarımcısı, uygulama geliştirici ve son kullanıcı."
   },
   {
    "t": "ul",
    "items": [
     "**Şema (schema)**: veri tabanının yapısı (tablolar, sütunlar, tipler, ilişkiler). Seyrek değişir.",
     "**Örnek / anlık durum (instance)**: belli bir andaki veriler. Her INSERT/UPDATE ile değişir.",
     "**Metadata (veri sözlüğü)**: veri hakkındaki veri; tablo adları, sütun tipleri, kısıtlar."
    ]
   },
   {
    "t": "tip",
    "text": "Testte \"veri / bilgi\" ve \"veri tabanı / VTYS\" ayrımı sık sorulur. Veri ham, bilgi işlenmiş; veri tabanı verinin kendisi, VTYS onu yöneten yazılım."
   }
  ]
 },
 {
  "id": "iliskisel",
  "title": "İlişkisel veri tabanı modeli",
  "src": "Hafta 2 · derste çizilen ER diyagramları",
  "blocks": [
   {
    "t": "p",
    "text": "İlişkisel modelde her **tablo** (ilişki / relation) bir varlığı tutar. Tablonun **satırı** bir kayıttır (tuple / record), **sütunu** bir niteliktir (attribute / field)."
   },
   {
    "t": "table",
    "head": [
     "İlişkisel terim",
     "Gündelik karşılığı",
     "Örnek (ogrenci tablosu)"
    ],
    "rows": [
     [
      "İlişki (relation)",
      "Tablo",
      "`ogrenci`"
     ],
     [
      "Demet (tuple)",
      "Satır / kayıt",
      "`20250101, Ahmet, Kara`"
     ],
     [
      "Nitelik (attribute)",
      "Sütun / alan",
      "`ad`, `soyad`"
     ],
     [
      "Alan (domain)",
      "Sütunun alabileceği değerler",
      "`ad` için en çok 50 karakterlik metin"
     ],
     [
      "Derece (degree)",
      "Sütun sayısı",
      "4"
     ],
     [
      "Kardinalite",
      "Satır sayısı",
      "6"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Anahtarlar**"
   },
   {
    "t": "table",
    "head": [
     "Anahtar",
     "Tanım",
     "okul_db örneği"
    ],
    "rows": [
     [
      "Süper anahtar",
      "Satırı tek başına belirleyen bir veya daha çok sütun (fazlası olabilir)",
      "`(ogrenci_no, ad)`"
     ],
     [
      "Aday anahtar",
      "Fazlası olmayan en küçük süper anahtar",
      "`ogrenci_no`, `eposta`"
     ],
     [
      "Birincil anahtar (PK)",
      "Aday anahtarlardan seçilen; **tekrar edemez, NULL olamaz**",
      "`ogrenci.ogrenci_no`"
     ],
     [
      "Alternatif anahtar",
      "PK seçilmeyen diğer aday anahtar",
      "`eposta`"
     ],
     [
      "Yabancı anahtar (FK)",
      "Başka tablonun PK'sine başvuran sütun; tablolar arası bağ",
      "`ders.bolum_no` → `bolum.bolum_no`"
     ],
     [
      "Bileşik anahtar",
      "Birden çok sütundan oluşan anahtar",
      "`ders_kaydi (ogrenci_no, ders_kodu)`"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Bütünlük kuralları**"
   },
   {
    "t": "ul",
    "items": [
     "**Varlık bütünlüğü**: birincil anahtar NULL olamaz ve tekrar edemez.",
     "**Referans bütünlüğü**: yabancı anahtardaki değer, başvurduğu tabloda var olmalıdır (ya da NULL olmalıdır). Olmayan bir `bolum_no` ile ders eklenemez.",
     "**Alan bütünlüğü**: değer, sütunun tipine ve kısıtlarına (NOT NULL, CHECK) uymalıdır."
    ]
   },
   {
    "t": "p",
    "text": "**NULL**: değerin bilinmediği ya da olmadığı anlamına gelir. 0 ya da boş metin (`''`) ile aynı şey değildir."
   },
   {
    "t": "p",
    "text": "**İlişki türleri ve tabloya dönüşümü**"
   },
   {
    "t": "erd",
    "svg": "<svg viewBox=\"0 0 760 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><line x1=\"230\" y1=\"125\" x2=\"323\" y2=\"125\"/><line x1=\"427\" y1=\"125\" x2=\"520\" y2=\"125\"/><text class=\"card\" x=\"276\" y=\"114\">1</text><text class=\"card\" x=\"473\" y=\"114\">1</text><line x1=\"170\" y1=\"125\" x2=\"130\" y2=\"205\"/><line x1=\"170\" y1=\"125\" x2=\"95\" y2=\"47\"/><line x1=\"170\" y1=\"125\" x2=\"195\" y2=\"41\"/><line x1=\"170\" y1=\"125\" x2=\"265\" y2=\"195\"/><line x1=\"580\" y1=\"125\" x2=\"510\" y2=\"45\"/><line x1=\"580\" y1=\"125\" x2=\"635\" y2=\"43\"/><line x1=\"580\" y1=\"125\" x2=\"485\" y2=\"207\"/><line x1=\"580\" y1=\"125\" x2=\"665\" y2=\"207\"/><g class=\"rel\"><polygon points=\"323,125 375,99 427,125 375,151\"/><text x=\"375\" y=\"126\">Sahip</text></g><g class=\"att pk\"><ellipse cx=\"130\" cy=\"205\" rx=\"55\" ry=\"16\"/><text x=\"130\" y=\"206\">ogrenci_no</text></g><g class=\"att\"><ellipse cx=\"95\" cy=\"47\" rx=\"44\" ry=\"16\"/><text x=\"95\" y=\"48\">ad</text></g><g class=\"att\"><ellipse cx=\"195\" cy=\"41\" rx=\"44\" ry=\"16\"/><text x=\"195\" y=\"42\">soyad</text></g><g class=\"att\"><ellipse cx=\"265\" cy=\"195\" rx=\"44\" ry=\"16\"/><text x=\"265\" y=\"196\">eposta</text></g><g class=\"ent\"><rect x=\"110\" y=\"105\" width=\"120\" height=\"40\"/><text x=\"170\" y=\"126\">Ogrenci</text></g><g class=\"att pk\"><ellipse cx=\"510\" cy=\"45\" rx=\"44\" ry=\"16\"/><text x=\"510\" y=\"46\">kart_no</text></g><g class=\"att fk\"><ellipse cx=\"635\" cy=\"43\" rx=\"55\" ry=\"16\"/><text x=\"635\" y=\"44\">ogrenci_no</text></g><g class=\"att\"><ellipse cx=\"485\" cy=\"207\" rx=\"71\" ry=\"16\"/><text x=\"485\" y=\"208\">verilis_tarihi</text></g><g class=\"att\"><ellipse cx=\"665\" cy=\"207\" rx=\"83\" ry=\"16\"/><text x=\"665\" y=\"208\">gecerlilik_tarihi</text></g><g class=\"ent\"><rect x=\"520\" y=\"105\" width=\"120\" height=\"40\"/><text x=\"580\" y=\"126\">Ogrenci_Karti</text></g></svg>",
    "cap": "1:1 (bire bir): her öğrencinin en fazla bir kartı, her kartın tek sahibi. FK'ye UNIQUE eklenir."
   },
   {
    "t": "erd",
    "svg": "<svg viewBox=\"0 0 760 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><line x1=\"230\" y1=\"120\" x2=\"323\" y2=\"120\"/><line x1=\"427\" y1=\"120\" x2=\"520\" y2=\"120\"/><text class=\"card\" x=\"276\" y=\"109\">1</text><text class=\"card\" x=\"473\" y=\"109\">N</text><line x1=\"170\" y1=\"120\" x2=\"130\" y2=\"42\"/><line x1=\"170\" y1=\"120\" x2=\"140\" y2=\"200\"/><line x1=\"580\" y1=\"120\" x2=\"515\" y2=\"42\"/><line x1=\"580\" y1=\"120\" x2=\"640\" y2=\"40\"/><line x1=\"580\" y1=\"120\" x2=\"675\" y2=\"190\"/><line x1=\"580\" y1=\"120\" x2=\"535\" y2=\"202\"/><g class=\"rel\"><polygon points=\"323,120 375,94 427,120 375,146\"/><text x=\"375\" y=\"121\">Acar</text></g><g class=\"att pk\"><ellipse cx=\"130\" cy=\"42\" rx=\"46\" ry=\"16\"/><text x=\"130\" y=\"43\">bolum_no</text></g><g class=\"att\"><ellipse cx=\"140\" cy=\"200\" rx=\"50\" ry=\"16\"/><text x=\"140\" y=\"201\">bolum_adi</text></g><g class=\"ent\"><rect x=\"110\" y=\"100\" width=\"120\" height=\"40\"/><text x=\"170\" y=\"121\">Bolum</text></g><g class=\"att pk\"><ellipse cx=\"515\" cy=\"42\" rx=\"50\" ry=\"16\"/><text x=\"515\" y=\"43\">ders_kodu</text></g><g class=\"att\"><ellipse cx=\"640\" cy=\"40\" rx=\"46\" ry=\"16\"/><text x=\"640\" y=\"41\">ders_adi</text></g><g class=\"att\"><ellipse cx=\"675\" cy=\"190\" rx=\"44\" ry=\"16\"/><text x=\"675\" y=\"191\">kredi</text></g><g class=\"att fk\"><ellipse cx=\"535\" cy=\"202\" rx=\"46\" ry=\"16\"/><text x=\"535\" y=\"203\">bolum_no</text></g><g class=\"ent\"><rect x=\"520\" y=\"100\" width=\"120\" height=\"40\"/><text x=\"580\" y=\"121\">Ders</text></g></svg>",
    "cap": "1:N (bire çok): bir bölüm çok ders açar, her ders tek bölüme aittir. FK \"çok\" tarafa (ders) konur."
   },
   {
    "t": "erd",
    "svg": "<svg viewBox=\"0 0 760 240\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><line x1=\"230\" y1=\"120\" x2=\"323\" y2=\"120\"/><line x1=\"427\" y1=\"120\" x2=\"520\" y2=\"120\"/><text class=\"card\" x=\"276\" y=\"109\">M</text><text class=\"card\" x=\"473\" y=\"109\">N</text><line x1=\"170\" y1=\"120\" x2=\"150\" y2=\"42\"/><line x1=\"170\" y1=\"120\" x2=\"125\" y2=\"200\"/><line x1=\"580\" y1=\"120\" x2=\"600\" y2=\"42\"/><line x1=\"580\" y1=\"120\" x2=\"625\" y2=\"200\"/><g class=\"rel\"><polygon points=\"323,120 375,94 427,120 375,146\"/><text x=\"375\" y=\"121\">Ders_Kaydi</text></g><g class=\"att pk\"><ellipse cx=\"150\" cy=\"42\" rx=\"55\" ry=\"16\"/><text x=\"150\" y=\"43\">ogrenci_no</text></g><g class=\"att\"><ellipse cx=\"125\" cy=\"200\" rx=\"44\" ry=\"16\"/><text x=\"125\" y=\"201\">ad</text></g><g class=\"ent\"><rect x=\"110\" y=\"100\" width=\"120\" height=\"40\"/><text x=\"170\" y=\"121\">Ogrenci</text></g><g class=\"att pk\"><ellipse cx=\"600\" cy=\"42\" rx=\"50\" ry=\"16\"/><text x=\"600\" y=\"43\">ders_kodu</text></g><g class=\"att\"><ellipse cx=\"625\" cy=\"200\" rx=\"46\" ry=\"16\"/><text x=\"625\" y=\"201\">ders_adi</text></g><g class=\"ent\"><rect x=\"520\" y=\"100\" width=\"120\" height=\"40\"/><text x=\"580\" y=\"121\">Ders</text></g></svg>",
    "cap": "M:N (çoka çok): bir öğrenci çok derse, bir derse çok öğrenci kayıt olur. Ara tablo (ders_kaydi) iki FK taşır."
   },
   {
    "t": "table",
    "head": [
     "İlişki",
     "Tabloya nasıl çevrilir?"
    ],
    "rows": [
     [
      "1:1",
      "Taraflardan birine diğerinin PK'si FK olarak eklenir ve **UNIQUE** yapılır (`ogrenci_karti.ogrenci_no INT NOT NULL UNIQUE`)."
     ],
     [
      "1:N",
      "FK **çok tarafına** eklenir (`ders.bolum_no`)."
     ],
     [
      "M:N",
      "**Ara (bağlantı) tablo** kurulur; iki tablonun PK'leri burada FK olur, ikisi birlikte bileşik PK olur (`ders_kaydi`)."
     ]
    ]
   },
   {
    "t": "p",
    "text": "**ER diyagramı (Chen gösterimi)**: **dikdörtgen** = varlık (tablo), **elips** = nitelik (sütun), **eşkenar dörtgen (baklava)** = ilişki, çizgi üstündeki **1 / N / M** = kardinalite. Birincil anahtarın **altı çizilir**. phpMyAdmin'in **Designer** ekranı ise tabloları kutu, FK bağlarını çizgi olarak gösterir."
   },
   {
    "t": "trap",
    "text": "1:N ilişkide FK **\"1\" tarafına değil, \"N\" tarafına** eklenir. Bölüm tablosuna ders_kodu koymak yanlıştır: bir bölümün birden çok dersi vardır, tek sütuna sığmaz."
   },
   {
    "t": "p",
    "text": "**Normalizasyon**: tekrarları ve güncelleme sorunlarını (anomalileri) azaltmak için tabloları bölme süreci."
   },
   {
    "t": "table",
    "head": [
     "Normal form",
     "Kural"
    ],
    "rows": [
     [
      "1NF",
      "Her hücrede **tek (atomik) değer**; tekrar eden sütun grupları yok (`ders1, ders2, ders3` gibi)."
     ],
     [
      "2NF",
      "1NF + bileşik anahtarlı tabloda her sütun anahtarın **tamamına** bağlı (kısmi bağımlılık yok)."
     ],
     [
      "3NF",
      "2NF + anahtar olmayan sütun başka bir anahtar olmayan sütuna bağlı değil (**geçişli bağımlılık** yok)."
     ]
    ]
   },
   {
    "t": "tip",
    "text": "Ekleme, silme ve güncelleme **anomalisi** normalizasyonun çözdüğü sorunlardır. Örnek: bölüm adı her derste tekrar yazılırsa, adı değişince bütün satırları güncellemek gerekir."
   }
  ]
 },
 {
  "id": "sql-giris",
  "title": "SQL'e giriş: DDL ve DML",
  "src": "Hafta 3 · okul_db kurulumu (1-1, 1-2 kodları, INSERT)",
  "blocks": [
   {
    "t": "p",
    "text": "**SQL** (Structured Query Language) ilişkisel veri tabanlarının standart dilidir. Komutlar büyük/küçük harf duyarsızdır (`select` = `SELECT`), ifade **noktalı virgül** ile biter."
   },
   {
    "t": "table",
    "head": [
     "Alt dil",
     "Açılımı",
     "Komutlar"
    ],
    "rows": [
     [
      "**DDL**",
      "Data Definition Language: yapıyı tanımlar",
      "`CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME`"
     ],
     [
      "**DML**",
      "Data Manipulation Language: veriyi değiştirir",
      "`INSERT`, `UPDATE`, `DELETE`"
     ],
     [
      "**DQL**",
      "Data Query Language: veriyi sorgular",
      "`SELECT`"
     ],
     [
      "**DCL**",
      "Data Control Language: yetki",
      "`GRANT`, `REVOKE`"
     ],
     [
      "**TCL**",
      "Transaction Control Language: işlem",
      "`COMMIT`, `ROLLBACK`, `SAVEPOINT`, `START TRANSACTION`"
     ]
    ]
   },
   {
    "t": "trap",
    "text": "`SELECT` bazı kaynaklarda DML içinde sayılır, bazılarında ayrı **DQL** olarak. Testte \"veri sorgulama\" geçiyorsa DQL, \"veri değiştirme\" geçiyorsa DML seç. `TRUNCATE` veriyi silse de **DDL**dir."
   },
   {
    "t": "p",
    "text": "**Veri tabanı oluşturma ve seçme** (derste MAMP + phpMyAdmin ile):"
   },
   {
    "t": "code",
    "code": "CREATE DATABASE IF NOT EXISTS okul_db\nCHARACTER SET utf8mb4\nCOLLATE utf8mb4_turkish_ci;\n\nUSE okul_db;"
   },
   {
    "t": "ul",
    "items": [
     "`IF NOT EXISTS`: veri tabanı zaten varsa hata vermez, atlar.",
     "`utf8mb4`: Türkçe karakterler ve emojiler dahil tüm Unicode. `utf8mb4_turkish_ci`: Türkçe sıralama ve karşılaştırma kuralı; `ci` = case insensitive (büyük/küçük harf duyarsız).",
     "`USE`: sonraki komutların hangi veri tabanında çalışacağını seçer."
    ]
   },
   {
    "t": "trap",
    "text": "Derste görülen **#1046 No database selected** hatası: `CREATE TABLE` çalıştırılmadan önce veri tabanı seçilmemiş. Çözüm: `USE okul_db;` ya da phpMyAdmin'de soldan veri tabanını seçip SQL sekmesine geçmek."
   },
   {
    "t": "p",
    "text": "**Sık kullanılan veri tipleri**"
   },
   {
    "t": "table",
    "head": [
     "Tip",
     "Ne tutar",
     "Örnek"
    ],
    "rows": [
     [
      "`INT`",
      "Tam sayı",
      "`ogrenci_no INT`"
     ],
     [
      "`DECIMAL(10,2)`",
      "Ondalıklı, tam hassas (para). 10 basamak, 2'si virgülden sonra",
      "`fiyat DECIMAL(10,2)` → 1250.00"
     ],
     [
      "`FLOAT` / `DOUBLE`",
      "Yaklaşık ondalık (bilimsel)",
      ""
     ],
     [
      "`VARCHAR(n)`",
      "Değişken uzunluklu metin, en çok n karakter",
      "`ad VARCHAR(50)`"
     ],
     [
      "`CHAR(n)`",
      "Sabit uzunluklu metin, her zaman n karakter yer",
      "`harf_notu CHAR(2)`"
     ],
     [
      "`TEXT`",
      "Uzun metin",
      "açıklama"
     ],
     [
      "`DATE` / `DATETIME`",
      "Tarih (YYYY-MM-DD) / tarih + saat",
      "`'2025-09-20'`"
     ],
     [
      "`BOOLEAN`",
      "MySQL'de `TINYINT(1)`: 0 / 1",
      "`aktif BOOLEAN`"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Kısıtlar (constraints)**"
   },
   {
    "t": "table",
    "head": [
     "Kısıt",
     "Anlamı"
    ],
    "rows": [
     [
      "`PRIMARY KEY`",
      "Birincil anahtar: tekrar edemez, NULL olamaz. Tabloda **bir tane** olur (birden çok sütundan oluşabilir)."
     ],
     [
      "`NOT NULL`",
      "Boş bırakılamaz."
     ],
     [
      "`UNIQUE`",
      "Tekrar edemez (NULL olabilir). Bir tabloda birden çok olabilir."
     ],
     [
      "`DEFAULT değer`",
      "Değer verilmezse kullanılacak varsayılan."
     ],
     [
      "`AUTO_INCREMENT`",
      "Sayı otomatik artar (1, 2, 3…); genelde PK ile."
     ],
     [
      "`FOREIGN KEY (s) REFERENCES t(s)`",
      "Yabancı anahtar; referans bütünlüğü."
     ],
     [
      "`CHECK (koşul)`",
      "Değer koşula uymalı (MySQL 8.0.16+ uygular)."
     ]
    ]
   },
   {
    "t": "p",
    "text": "Derste yazılan 1:1 ve 1:N tabloları:"
   },
   {
    "t": "code",
    "code": "CREATE TABLE ogrenci (\n  ogrenci_no INT PRIMARY KEY,\n  ad         VARCHAR(50) NOT NULL,\n  soyad      VARCHAR(50) NOT NULL,\n  eposta     VARCHAR(100)\n);\n\nCREATE TABLE ogrenci_karti (\n  kart_no           INT PRIMARY KEY,\n  ogrenci_no        INT NOT NULL UNIQUE,      -- UNIQUE: 1:1 olmasını sağlar\n  verilis_tarihi    DATE NOT NULL,\n  gecerlilik_tarihi DATE NOT NULL,\n  FOREIGN KEY (ogrenci_no) REFERENCES ogrenci(ogrenci_no)\n);\n\nCREATE TABLE bolum (\n  bolum_no  INT PRIMARY KEY,\n  bolum_adi VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE ders (\n  ders_kodu INT PRIMARY KEY,\n  ders_adi  VARCHAR(100) NOT NULL,\n  kredi     INT NOT NULL,\n  bolum_no  INT NOT NULL,                     -- \"çok\" tarafındaki yabancı anahtar\n  FOREIGN KEY (bolum_no) REFERENCES bolum(bolum_no)\n);"
   },
   {
    "t": "p",
    "text": "M:N için ara tablo; iki sütun birlikte birincil anahtar (bileşik PK):"
   },
   {
    "t": "code",
    "code": "CREATE TABLE ders_kaydi (\n  ogrenci_no   INT NOT NULL,\n  ders_kodu    INT NOT NULL,\n  kayit_tarihi DATE,\n  harf_notu    CHAR(2),\n  PRIMARY KEY (ogrenci_no, ders_kodu),\n  FOREIGN KEY (ogrenci_no) REFERENCES ogrenci(ogrenci_no),\n  FOREIGN KEY (ders_kodu)  REFERENCES ders(ders_kodu)\n);"
   },
   {
    "t": "trap",
    "text": "FK ile başvurulan sütunun tipi aynı olmalı. `ders.ders_kodu` VARCHAR, `ders_kaydi.ders_kodu` INT olursa FK kurulamaz (#1005 / errno 150). Bu yüzden derste ders_kodu INT'e çevrildi."
   },
   {
    "t": "p",
    "text": "**FK eylemleri**: ana tablodaki satır silinir/güncellenirse bağlı satırlara ne olacağı."
   },
   {
    "t": "table",
    "head": [
     "Eylem",
     "Sonuç"
    ],
    "rows": [
     [
      "`ON DELETE CASCADE`",
      "Ana satır silinince bağlı satırlar da silinir (müşteri silinince siparişleri de)."
     ],
     [
      "`ON DELETE SET NULL`",
      "Bağlı satırların FK'si NULL olur (sütun NULL kabul etmeli)."
     ],
     [
      "`ON DELETE RESTRICT` / `NO ACTION`",
      "Bağlı satır varken ana satır silinemez. **Varsayılan budur.**"
     ],
     [
      "`ON UPDATE CASCADE`",
      "Ana anahtar değişince FK'ler de güncellenir."
     ]
    ]
   },
   {
    "t": "code",
    "code": "CREATE TABLE musteri (\n  musteri_no  INT AUTO_INCREMENT PRIMARY KEY,\n  musteri_adi VARCHAR(100) NOT NULL\n);\nCREATE TABLE siparis (\n  siparis_no     INT AUTO_INCREMENT PRIMARY KEY,\n  siparis_tarihi DATE NOT NULL,\n  toplam_tutar   DECIMAL(10,2) NOT NULL,\n  musteri_no     INT NOT NULL,\n  CONSTRAINT fk_musteri_siparis FOREIGN KEY (musteri_no)\n    REFERENCES musteri(musteri_no)\n    ON DELETE CASCADE ON UPDATE CASCADE\n);"
   },
   {
    "t": "p",
    "text": "**ALTER TABLE**: var olan tabloyu değiştirir."
   },
   {
    "t": "code",
    "code": "ALTER TABLE ogrenci ADD telefon VARCHAR(15);          -- sütun ekle\nALTER TABLE ogrenci MODIFY telefon VARCHAR(20);       -- tip değiştir\nALTER TABLE ogrenci CHANGE telefon tel VARCHAR(20);   -- adını ve tipini değiştir\nALTER TABLE ogrenci DROP COLUMN tel;                  -- sütun sil\nALTER TABLE ogrenci ADD UNIQUE (eposta);              -- kısıt ekle\nRENAME TABLE ogrenci TO talebe;                       -- tablo adını değiştir"
   },
   {
    "t": "table",
    "head": [
     "Komut",
     "Ne siler",
     "Yapı kalır mı?",
     "WHERE?",
     "Tür"
    ],
    "rows": [
     [
      "`DELETE FROM t WHERE …`",
      "Koşula uyan satırları",
      "Evet",
      "Var",
      "DML"
     ],
     [
      "`TRUNCATE TABLE t`",
      "Bütün satırları (hızlı, AUTO_INCREMENT sıfırlanır)",
      "Evet",
      "Yok",
      "DDL"
     ],
     [
      "`DROP TABLE t`",
      "Tabloyu yapısıyla birlikte",
      "Hayır",
      "Yok",
      "DDL"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Veri ekleme, güncelleme, silme (DML)**"
   },
   {
    "t": "code",
    "code": "INSERT INTO bolum (bolum_no, bolum_adi) VALUES\n(1, 'Bilgisayar Programcılığı'),\n(2, 'Grafik Tasarımı');                       -- tek komutla çok satır\n\nINSERT INTO bolum VALUES (3, 'Muhasebe');     -- sütun listesi yoksa TÜM sütunlar sırayla\n\nUPDATE bolum SET bolum_adi = 'Grafik Tasarım' WHERE bolum_no = 2;\n\nDELETE FROM bolum WHERE bolum_no = 3;"
   },
   {
    "t": "trap",
    "text": "`UPDATE` ve `DELETE`'te **WHERE unutulursa tablodaki bütün satırlar** güncellenir / silinir. Metin ve tarih değerleri tek tırnakla yazılır: `'Ahmet'`, `'2025-09-20'`; sayılar tırnaksız."
   },
   {
    "t": "trap",
    "text": "Sıra önemli: önce ana tablo (`bolum`, `ogrenci`), sonra ona başvuran tablo (`ders`, `ders_kaydi`) doldurulur. Ana tabloda olmayan bir değerle FK eklenirse **#1452 Cannot add or update a child row: a foreign key constraint fails** hatası alınır."
   }
  ]
 },
 {
  "id": "sorgular",
  "title": "SQL sorguları ve alt sorgular",
  "src": "Hafta 4 · okul_db üzerinde",
  "blocks": [
   {
    "t": "p",
    "text": "Bu ve sonraki konulardaki örnekler derste kurulan **okul_db** verisiyle çalıştırıldı (sonuç tabloları gerçek çıktı):"
   },
   {
    "t": "tables",
    "tables": [
     {
      "name": "ogrenci",
      "cols": [
       "ogrenci_no",
       "ad",
       "soyad"
      ],
      "rows": [
       [
        "20250101",
        "Ahmet",
        "Kara"
       ],
       [
        "20250102",
        "Zehra",
        "Aksoy"
       ],
       [
        "20250103",
        "Mert",
        "Güneş"
       ],
       [
        "20250104",
        "İrem",
        "Toprak"
       ],
       [
        "20250105",
        "Deniz",
        "Uçar"
       ],
       [
        "20250106",
        "Kerem",
        "Yalçın"
       ]
      ]
     },
     {
      "name": "ders",
      "cols": [
       "ders_kodu",
       "ders_adi",
       "kredi",
       "bolum_no"
      ],
      "rows": [
       [
        "101",
        "Veritabanı Yönetim Sistemleri",
        "4",
        "1"
       ],
       [
        "102",
        "Web Programlama",
        "4",
        "1"
       ],
       [
        "103",
        "Nesne Tabanlı Programlama",
        "3",
        "1"
       ],
       [
        "201",
        "Tipografi",
        "3",
        "2"
       ],
       [
        "202",
        "Dijital Fotoğrafçılık",
        "3",
        "2"
       ],
       [
        "301",
        "Genel Muhasebe",
        "4",
        "3"
       ]
      ]
     },
     {
      "name": "ders_kaydi",
      "cols": [
       "ogrenci_no",
       "ders_kodu",
       "harf_notu"
      ],
      "rows": [
       [
        "20250101",
        "101",
        "AA"
       ],
       [
        "20250101",
        "102",
        "BA"
       ],
       [
        "20250101",
        "201",
        null
       ],
       [
        "20250102",
        "101",
        "BB"
       ],
       [
        "20250102",
        "103",
        null
       ],
       [
        "20250103",
        "101",
        "CB"
       ],
       [
        "20250103",
        "202",
        "AA"
       ],
       [
        "20250104",
        "201",
        "BA"
       ],
       [
        "20250104",
        "202",
        null
       ],
       [
        "20250105",
        "301",
        "CC"
       ],
       [
        "20250105",
        "101",
        "DC"
       ]
      ]
     }
    ]
   },
   {
    "t": "p",
    "text": "**SELECT yapısı**: `SELECT sütunlar FROM tablo WHERE koşul ORDER BY sütun LIMIT n;`"
   },
   {
    "t": "code",
    "code": "SELECT ad, soyad FROM ogrenci WHERE ogrenci_no > 20250103;",
    "res": {
     "cols": [
      "ad",
      "soyad"
     ],
     "rows": [
      [
       "İrem",
       "Toprak"
      ],
      [
       "Deniz",
       "Uçar"
      ],
      [
       "Kerem",
       "Yalçın"
      ]
     ]
    }
   },
   {
    "t": "ul",
    "items": [
     "`SELECT *` bütün sütunları getirir.",
     "`AS` sütuna ya da tabloya takma ad verir: `SELECT ad AS isim`. `AS` yazılmasa da olur: `SELECT ad isim`.",
     "`DISTINCT` tekrar eden satırları bir kez gösterir."
    ]
   },
   {
    "t": "code",
    "code": "SELECT DISTINCT kredi FROM ders ORDER BY kredi;",
    "res": {
     "cols": [
      "kredi"
     ],
     "rows": [
      [
       "3"
      ],
      [
       "4"
      ]
     ]
    }
   },
   {
    "t": "table",
    "head": [
     "Operatör",
     "Örnek",
     "Anlamı"
    ],
    "rows": [
     [
      "`=  <>  !=  <  >  <=  >=`",
      "`kredi <> 4`",
      "Karşılaştırma (`<>` ve `!=` eşit değil)"
     ],
     [
      "`AND  OR  NOT`",
      "`kredi = 3 AND bolum_no = 2`",
      "Mantıksal; AND, OR'dan önce işlenir"
     ],
     [
      "`BETWEEN a AND b`",
      "`kredi BETWEEN 3 AND 4`",
      "a ve b **dahil** aralık"
     ],
     [
      "`IN (…)`",
      "`ders_kodu IN (101, 201)`",
      "Listedekilerden biri"
     ],
     [
      "`LIKE`",
      "`ad LIKE 'A%'`",
      "Desen: `%` = 0 veya daha çok karakter, `_` = tam 1 karakter"
     ],
     [
      "`IS NULL` / `IS NOT NULL`",
      "`harf_notu IS NULL`",
      "NULL kontrolü"
     ]
    ]
   },
   {
    "t": "code",
    "code": "SELECT ogrenci_no, ders_kodu FROM ders_kaydi WHERE harf_notu IS NULL;",
    "res": {
     "cols": [
      "ogrenci_no",
      "ders_kodu"
     ],
     "rows": [
      [
       "20250101",
       "201"
      ],
      [
       "20250102",
       "103"
      ],
      [
       "20250104",
       "202"
      ]
     ]
    }
   },
   {
    "t": "trap",
    "text": "`harf_notu = NULL` **hiçbir satır döndürmez**; NULL ile karşılaştırma her zaman bilinmez (UNKNOWN) olur. Doğrusu `IS NULL`."
   },
   {
    "t": "code",
    "code": "SELECT ders_adi FROM ders WHERE ders_adi LIKE '%Programlama';",
    "res": {
     "cols": [
      "ders_adi"
     ],
     "rows": [
      [
       "Web Programlama"
      ],
      [
       "Nesne Tabanlı Programlama"
      ]
     ]
    }
   },
   {
    "t": "table",
    "head": [
     "Desen",
     "Eşleşir",
     "Eşleşmez"
    ],
    "rows": [
     [
      "`'A%'`",
      "A ile başlayan: Ahmet",
      "Zehra"
     ],
     [
      "`'%a'`",
      "a ile biten: Zehra",
      "Ahmet"
     ],
     [
      "`'%er%'`",
      "içinde er geçen: Mert, Kerem",
      "Ahmet"
     ],
     [
      "`'_e%'`",
      "ikinci harfi e: Zehra, Mert, Deniz, Kerem",
      "Ahmet, İrem"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Sıralama ve sınırlama**: `ORDER BY sütun ASC` (artan, varsayılan) / `DESC` (azalan). Birden çok sütunla sıralanabilir: `ORDER BY kredi DESC, ders_adi`. `LIMIT n` ilk n satırı, `LIMIT 2, 3` 3. satırdan başlayıp 3 satır getirir (ilk sayı atlanacak satır sayısı)."
   },
   {
    "t": "code",
    "code": "SELECT ders_adi, kredi FROM ders ORDER BY kredi DESC, ders_adi ASC LIMIT 3;",
    "res": {
     "cols": [
      "ders_adi",
      "kredi"
     ],
     "rows": [
      [
       "Genel Muhasebe",
       "4"
      ],
      [
       "Veritabanı Yönetim Sistemleri",
       "4"
      ],
      [
       "Web Programlama",
       "4"
      ]
     ]
    }
   },
   {
    "t": "p",
    "text": "**Alt sorgu (subquery)**: parantez içinde başka bir SELECT. Önce iç sorgu çalışır, sonucu dış sorguda kullanılır."
   },
   {
    "t": "code",
    "code": "-- Bilgisayar Programcılığı bölümünün dersleri (bölüm numarasını bilmeden)\nSELECT ders_adi FROM ders\nWHERE bolum_no = (SELECT bolum_no FROM bolum WHERE bolum_adi = 'Bilgisayar Programcılığı');",
    "res": {
     "cols": [
      "ders_adi"
     ],
     "rows": [
      [
       "Veritabanı Yönetim Sistemleri"
      ],
      [
       "Web Programlama"
      ],
      [
       "Nesne Tabanlı Programlama"
      ]
     ]
    }
   },
   {
    "t": "code",
    "code": "-- 101 koduna kayıtlı öğrenciler\nSELECT ad, soyad FROM ogrenci\nWHERE ogrenci_no IN (SELECT ogrenci_no FROM ders_kaydi WHERE ders_kodu = 101);",
    "res": {
     "cols": [
      "ad",
      "soyad"
     ],
     "rows": [
      [
       "Ahmet",
       "Kara"
      ],
      [
       "Zehra",
       "Aksoy"
      ],
      [
       "Mert",
       "Güneş"
      ],
      [
       "Deniz",
       "Uçar"
      ]
     ]
    }
   },
   {
    "t": "code",
    "code": "-- hiç derse kaydolmamış öğrenci\nSELECT ad, soyad FROM ogrenci\nWHERE ogrenci_no NOT IN (SELECT ogrenci_no FROM ders_kaydi);",
    "res": {
     "cols": [
      "ad",
      "soyad"
     ],
     "rows": [
      [
       "Kerem",
       "Yalçın"
      ]
     ]
    }
   },
   {
    "t": "code",
    "code": "-- kredisi ortalamanın üstündeki dersler\nSELECT ders_adi, kredi FROM ders WHERE kredi > (SELECT AVG(kredi) FROM ders);",
    "res": {
     "cols": [
      "ders_adi",
      "kredi"
     ],
     "rows": [
      [
       "Veritabanı Yönetim Sistemleri",
       "4"
      ],
      [
       "Web Programlama",
       "4"
      ],
      [
       "Genel Muhasebe",
       "4"
      ]
     ]
    }
   },
   {
    "t": "ul",
    "items": [
     "Tek değer döndüren alt sorgu `=`, `>`, `<` ile; **çok satır** döndüren alt sorgu `IN`, `NOT IN`, `ANY`, `ALL`, `EXISTS` ile kullanılır.",
     "`EXISTS (alt sorgu)`: alt sorgu en az bir satır döndürürse doğru."
    ]
   },
   {
    "t": "trap",
    "text": "Çok satır dönen alt sorguyu `=` ile kullanmak hata verir: **#1242 Subquery returns more than 1 row**. O durumda `IN` yazılır."
   }
  ]
 },
 {
  "id": "ileri1",
  "title": "İleri SQL I: toplama fonksiyonları, GROUP BY, HAVING",
  "src": "Hafta 5 · magaza veritabanı, GROUP BY ve HAVING uygulaması",
  "blocks": [
   {
    "t": "p",
    "text": "Derste kullanılan **magaza** veri tabanı: `kategoriler` 1─N `urunler`, `musteriler` 1─N `siparisler`, `siparisler` N─M `urunler` (ara tablo `siparis_detay`). Satır tutarı = `adet * birim_fiyat`. Oyuncak kategorisinin ürünü yok; Mekanik Klavye ve Kamp Sandalyesi hiç satılmadı; Emre Aydın hiç sipariş vermedi."
   },
   {
    "t": "table",
    "head": [
     "Fonksiyon",
     "Ne döndürür",
     "NULL'lar"
    ],
    "rows": [
     [
      "`COUNT(*)`",
      "Satır sayısı",
      "NULL olan satırlar da sayılır"
     ],
     [
      "`COUNT(sutun)`",
      "O sütunu NULL olmayan satır sayısı",
      "Sayılmaz"
     ],
     [
      "`COUNT(DISTINCT sutun)`",
      "Farklı değer sayısı",
      "Sayılmaz"
     ],
     [
      "`SUM(sutun)`",
      "Toplam",
      "Atlanır"
     ],
     [
      "`AVG(sutun)`",
      "Ortalama (NULL olmayanların)",
      "Atlanır"
     ],
     [
      "`MIN` / `MAX`",
      "En küçük / en büyük",
      "Atlanır"
     ],
     [
      "`ROUND(x, 2)`",
      "x'i 2 basamağa yuvarlar",
      ""
     ]
    ]
   },
   {
    "t": "code",
    "code": "SELECT COUNT(*) AS kayit, COUNT(harf_notu) AS notu_olan FROM ders_kaydi;",
    "res": {
     "cols": [
      "kayit",
      "notu_olan"
     ],
     "rows": [
      [
       "11",
       "8"
      ]
     ]
    }
   },
   {
    "t": "trap",
    "text": "`COUNT(*)` ile `COUNT(harf_notu)` farklıdır: notu girilmemiş (NULL) 3 kayıt ikincisinde sayılmaz."
   },
   {
    "t": "p",
    "text": "**Uygulama soru 2**: en düşük, en yüksek ve ortalama fiyat tek sorguda."
   },
   {
    "t": "code",
    "code": "SELECT MIN(fiyat) AS en_dusuk, MAX(fiyat) AS en_yuksek, ROUND(AVG(fiyat), 2) AS ortalama\nFROM urunler;",
    "res": {
     "cols": [
      "en_dusuk",
      "en_yuksek",
      "ortalama"
     ],
     "rows": [
      [
       "299.90",
       "3400.00",
       "989.63"
      ]
     ]
    }
   },
   {
    "t": "p",
    "text": "**GROUP BY**: aynı değere sahip satırları bir grup yapar; toplama fonksiyonu **her grup için ayrı** hesaplanır."
   },
   {
    "t": "code",
    "code": "-- Uygulama soru 3: her şehirde kaç müşteri var\nSELECT sehir, COUNT(*) AS musteri_sayisi\nFROM musteriler\nGROUP BY sehir;",
    "res": {
     "cols": [
      "sehir",
      "musteri_sayisi"
     ],
     "rows": [
      [
       "Ankara",
       "2"
      ],
      [
       "Bursa",
       "1"
      ],
      [
       "Gaziantep",
       "1"
      ],
      [
       "İstanbul",
       "3"
      ],
      [
       "İzmir",
       "3"
      ]
     ]
    }
   },
   {
    "t": "code",
    "code": "-- Uygulama soru 5: kategori adı, ürün sayısı, ortalama fiyat\nSELECT k.kategori_adi, COUNT(u.urun_id) AS urun_sayisi, ROUND(AVG(u.fiyat), 2) AS ort_fiyat\nFROM kategoriler k\nJOIN urunler u ON u.kategori_id = k.kategori_id\nGROUP BY k.kategori_id, k.kategori_adi;",
    "res": {
     "cols": [
      "kategori_adi",
      "urun_sayisi",
      "ort_fiyat"
     ],
     "rows": [
      [
       "Elektronik",
       "5",
       "1566.00"
      ],
      [
       "Giyim",
       "2",
       "774.90"
      ],
      [
       "Kitap",
       "3",
       "371.67"
      ],
      [
       "Ev & Yaşam",
       "3",
       "789.97"
      ],
      [
       "Spor",
       "4",
       "989.75"
      ]
     ]
    }
   },
   {
    "t": "code",
    "code": "-- Uygulama soru 6: her siparişin toplam tutarı (ilk 5)\nSELECT siparis_id, SUM(adet * birim_fiyat) AS toplam\nFROM siparis_detay\nGROUP BY siparis_id\nLIMIT 5;",
    "res": {
     "cols": [
      "siparis_id",
      "toplam"
     ],
     "rows": [
      [
       "1",
       "1890.00"
      ],
      [
       "2",
       "3400.00"
      ],
      [
       "3",
       "2199.70"
      ],
      [
       "4",
       "1145.00"
      ],
      [
       "5",
       "1650.00"
      ]
     ]
    }
   },
   {
    "t": "trap",
    "text": "SELECT'te toplama fonksiyonu **dışında** kalan her sütun GROUP BY'da da yazılmalıdır. `SELECT sehir, ad, COUNT(*) … GROUP BY sehir` hatalıdır: bir şehirde birden çok ad var, hangisi yazılacak? (MySQL'in `ONLY_FULL_GROUP_BY` modu bunu hata sayar.)"
   },
   {
    "t": "p",
    "text": "**HAVING**: gruplamadan **sonra** grupları süzer. Toplama fonksiyonlu koşul (COUNT, SUM, AVG…) **WHERE'e değil HAVING'e** yazılır."
   },
   {
    "t": "code",
    "code": "-- Uygulama soru 7: birden fazla müşterisi olan şehirler\nSELECT sehir, COUNT(*) AS musteri_sayisi\nFROM musteriler\nGROUP BY sehir\nHAVING COUNT(*) > 1;",
    "res": {
     "cols": [
      "sehir",
      "musteri_sayisi"
     ],
     "rows": [
      [
       "Ankara",
       "2"
      ],
      [
       "İstanbul",
       "3"
      ],
      [
       "İzmir",
       "3"
      ]
     ]
    }
   },
   {
    "t": "code",
    "code": "-- Uygulama soru 8: en az 2 sipariş vermiş müşteriler\nSELECT m.ad, m.soyad, COUNT(s.siparis_id) AS siparis_sayisi\nFROM musteriler m\nJOIN siparisler s ON s.musteri_id = m.musteri_id\nGROUP BY m.musteri_id, m.ad, m.soyad\nHAVING COUNT(s.siparis_id) >= 2;",
    "res": {
     "cols": [
      "ad",
      "soyad",
      "siparis_sayisi"
     ],
     "rows": [
      [
       "Ayşe",
       "Yılmaz",
       "3"
      ],
      [
       "Mehmet",
       "Kaya",
       "3"
      ],
      [
       "Zeynep",
       "Demir",
       "3"
      ],
      [
       "Elif",
       "Şahin",
       "2"
      ],
      [
       "Can",
       "Öztürk",
       "2"
      ],
      [
       "Deniz",
       "Arslan",
       "2"
      ]
     ]
    }
   },
   {
    "t": "code",
    "code": "-- Uygulama soru 9: toplam 3 veya daha fazla adet satılan ürünler, çok satandan aza\nSELECT u.urun_adi, SUM(d.adet) AS toplam_adet\nFROM urunler u\nJOIN siparis_detay d ON d.urun_id = u.urun_id\nGROUP BY u.urun_id, u.urun_adi\nHAVING SUM(d.adet) >= 3\nORDER BY toplam_adet DESC;",
    "res": {
     "cols": [
      "urun_adi",
      "toplam_adet"
     ],
     "rows": [
      [
       "Python ile Programlama",
       "6"
      ],
      [
       "Termos",
       "5"
      ],
      [
       "Yoga Matı",
       "4"
      ],
      [
       "Bluetooth Hoparlör",
       "3"
      ],
      [
       "Yapay Zekâ Temelleri",
       "3"
      ],
      [
       "Kapüşonlu Sweatshirt",
       "3"
      ],
      [
       "Akıllı Saat",
       "3"
      ],
      [
       "Kot Pantolon",
       "3"
      ],
      [
       "Kablosuz Kulaklık",
       "3"
      ]
     ]
    }
   },
   {
    "t": "code",
    "code": "-- Uygulama soru 10: iptaller hariç, cirosu 5000 TL'yi geçen şehirler\nSELECT m.sehir, SUM(d.adet * d.birim_fiyat) AS ciro\nFROM musteriler m\nJOIN siparisler s    ON s.musteri_id = m.musteri_id\nJOIN siparis_detay d ON d.siparis_id = s.siparis_id\nWHERE s.durum <> 'İptal'\nGROUP BY m.sehir\nHAVING SUM(d.adet * d.birim_fiyat) > 5000\nORDER BY ciro DESC;",
    "res": {
     "cols": [
      "sehir",
      "ciro"
     ],
     "rows": [
      [
       "İstanbul",
       "13179.70"
      ],
      [
       "İzmir",
       "13014.20"
      ]
     ]
    }
   },
   {
    "t": "table",
    "head": [
     "",
     "WHERE",
     "HAVING"
    ],
    "rows": [
     [
      "Ne zaman çalışır?",
      "Gruplamadan **önce**",
      "Gruplamadan **sonra**"
     ],
     [
      "Neyi süzer?",
      "Satırları",
      "Grupları"
     ],
     [
      "Toplama fonksiyonu?",
      "Kullanılamaz (`WHERE COUNT(*) > 1` hata)",
      "Kullanılır"
     ],
     [
      "Örnek",
      "`WHERE durum <> 'İptal'`",
      "`HAVING SUM(…) > 5000`"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Yazım sırası**: `SELECT … FROM … JOIN … WHERE … GROUP BY … HAVING … ORDER BY … LIMIT`"
   },
   {
    "t": "p",
    "text": "**Mantıksal çalışma sırası**: `FROM / JOIN` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY` → `LIMIT`. Bu yüzden SELECT'te verilen takma ad WHERE'de kullanılamaz, ORDER BY'da kullanılabilir."
   },
   {
    "t": "tip",
    "text": "Testte \"toplama fonksiyonuna koşul\" görürsen cevap HAVING. \"Belli satırları gruplamadan önce ele\" görürsen WHERE. İkisi aynı sorguda birlikte kullanılabilir (uygulama soru 10)."
   }
  ]
 },
 {
  "id": "ileri2",
  "title": "İleri SQL II: JOIN, birleşim ve fonksiyonlar",
  "src": "Hafta 6 · Küçük Sınav I",
  "blocks": [
   {
    "t": "p",
    "text": "**JOIN**: birden çok tablodaki ilişkili satırları FK = PK eşitliğiyle (`ON`) yan yana getirir. Tablolara kısa takma ad verilir: `ogrenci o`, `ders d`."
   },
   {
    "t": "table",
    "head": [
     "JOIN",
     "Getirdiği satırlar"
    ],
    "rows": [
     [
      "`INNER JOIN` (ya da sadece `JOIN`)",
      "Sadece **iki tabloda da eşleşen** satırlar"
     ],
     [
      "`LEFT JOIN`",
      "Soldaki tablonun **tüm** satırları; sağda eşleşme yoksa sağ sütunlar NULL"
     ],
     [
      "`RIGHT JOIN`",
      "Sağdaki tablonun tüm satırları; solda eşleşme yoksa NULL"
     ],
     [
      "`CROSS JOIN`",
      "Kartezyen çarpım: her satır her satırla (m × n satır)"
     ],
     [
      "`FULL OUTER JOIN`",
      "MySQL'de **yok**; `LEFT JOIN … UNION … RIGHT JOIN` ile yapılır"
     ],
     [
      "Self join",
      "Tablonun kendisiyle birleştirilmesi (iki farklı takma adla)"
     ]
    ]
   },
   {
    "t": "code",
    "code": "-- öğrenci adı + ders adı + not (M:N, 3 tablo)\nSELECT o.ad, d.ders_adi, k.harf_notu\nFROM ders_kaydi k\nJOIN ogrenci o ON o.ogrenci_no = k.ogrenci_no\nJOIN ders d    ON d.ders_kodu  = k.ders_kodu\nWHERE d.bolum_no = 2;",
    "res": {
     "cols": [
      "ad",
      "ders_adi",
      "harf_notu"
     ],
     "rows": [
      [
       "Ahmet",
       "Tipografi",
       null
      ],
      [
       "İrem",
       "Tipografi",
       "BA"
      ],
      [
       "Mert",
       "Dijital Fotoğrafçılık",
       "AA"
      ],
      [
       "İrem",
       "Dijital Fotoğrafçılık",
       null
      ]
     ]
    }
   },
   {
    "t": "code",
    "code": "-- LEFT JOIN: kartı olmayan öğrenci de listelenir\nSELECT o.ad, o.soyad, k.kart_no\nFROM ogrenci o\nLEFT JOIN ogrenci_karti k ON k.ogrenci_no = o.ogrenci_no;",
    "res": {
     "cols": [
      "ad",
      "soyad",
      "kart_no"
     ],
     "rows": [
      [
       "Ahmet",
       "Kara",
       "5001"
      ],
      [
       "Zehra",
       "Aksoy",
       "5002"
      ],
      [
       "Mert",
       "Güneş",
       "5003"
      ],
      [
       "İrem",
       "Toprak",
       "5004"
      ],
      [
       "Deniz",
       "Uçar",
       "5005"
      ],
      [
       "Kerem",
       "Yalçın",
       null
      ]
     ]
    }
   },
   {
    "t": "code",
    "code": "-- eşleşmeyenleri bulmak: LEFT JOIN + IS NULL\nSELECT b.bolum_adi\nFROM bolum b\nLEFT JOIN ders d ON d.bolum_no = b.bolum_no\nWHERE d.ders_kodu IS NULL;",
    "res": {
     "cols": [
      "bolum_adi"
     ],
     "rows": [
      [
       "Turizm ve Otel İşletmeciliği"
      ]
     ]
    }
   },
   {
    "t": "code",
    "code": "-- Uygulama bonus: hiç satılmamış ürünler (LEFT JOIN + GROUP BY + HAVING COUNT = 0)\nSELECT u.urun_adi\nFROM urunler u\nLEFT JOIN siparis_detay d ON d.urun_id = u.urun_id\nGROUP BY u.urun_id, u.urun_adi\nHAVING COUNT(d.detay_id) = 0;",
    "res": {
     "cols": [
      "urun_adi"
     ],
     "rows": [
      [
       "Mekanik Klavye"
      ],
      [
       "Kamp Sandalyesi"
      ]
     ]
    }
   },
   {
    "t": "trap",
    "text": "LEFT JOIN'de `COUNT(*)` kullanılırsa eşleşmeyen satır da 1 sayılır. Eşleşmeyenleri 0 saymak için **sağ tablonun bir sütunu** sayılır: `COUNT(d.detay_id)`."
   },
   {
    "t": "trap",
    "text": "JOIN'de iki tabloda aynı adlı sütun varsa takma adla yazılmalı: `SELECT ogrenci_no …` iki tabloda da olduğu için **#1052 Column 'ogrenci_no' in field list is ambiguous** hatası verir; `o.ogrenci_no` yazılır."
   },
   {
    "t": "p",
    "text": "**UNION**: iki SELECT'in sonucunu alt alta ekler. Sütun sayısı ve sırası aynı olmalı. `UNION` tekrarları atar, `UNION ALL` atmaz."
   },
   {
    "t": "code",
    "code": "SELECT ders_kodu FROM ders WHERE kredi = 4\nUNION\nSELECT ders_kodu FROM ders_kaydi WHERE harf_notu = 'AA';",
    "res": {
     "cols": [
      "ders_kodu"
     ],
     "rows": [
      [
       "101"
      ],
      [
       "102"
      ],
      [
       "301"
      ],
      [
       "202"
      ]
     ]
    }
   },
   {
    "t": "p",
    "text": "**Sık kullanılan fonksiyonlar**"
   },
   {
    "t": "table",
    "head": [
     "Fonksiyon",
     "Örnek",
     "Sonuç"
    ],
    "rows": [
     [
      "`CONCAT(a, b, …)`",
      "`CONCAT(ad, ' ', soyad)`",
      "Ahmet Kara"
     ],
     [
      "`UPPER` / `LOWER`",
      "`UPPER('sql')`",
      "SQL"
     ],
     [
      "`LENGTH` / `CHAR_LENGTH`",
      "`CHAR_LENGTH('Mert')`",
      "4 (LENGTH bayt sayar: 'ş' 2 bayt)"
     ],
     [
      "`SUBSTRING(s, başla, uzunluk)`",
      "`SUBSTRING('Veritabanı', 1, 4)`",
      "Veri"
     ],
     [
      "`ROUND(x, n)`",
      "`ROUND(989.6294, 2)`",
      "989.63"
     ],
     [
      "`IFNULL(a, b)`",
      "`IFNULL(harf_notu, 'Girilmedi')`",
      "NULL ise b"
     ],
     [
      "`NOW()` / `CURDATE()`",
      "",
      "Şu anki tarih-saat / tarih"
     ],
     [
      "`YEAR(t)` / `MONTH(t)`",
      "`YEAR('2025-09-20')`",
      "2025"
     ],
     [
      "`DATEDIFF(t1, t2)`",
      "`DATEDIFF('2025-09-23', '2025-09-20')`",
      "3 (gün)"
     ]
    ]
   },
   {
    "t": "code",
    "code": "SELECT CONCAT(o.ad, ' ', o.soyad) AS ogrenci,\n       IFNULL(k.harf_notu, 'Girilmedi') AS notu\nFROM ogrenci o JOIN ders_kaydi k ON k.ogrenci_no = o.ogrenci_no\nWHERE k.ders_kodu = 201;",
    "res": {
     "cols": [
      "ogrenci",
      "notu"
     ],
     "rows": [
      [
       "Ahmet Kara",
       "Girilmedi"
      ],
      [
       "İrem Toprak",
       "BA"
      ]
     ]
    }
   },
   {
    "t": "p",
    "text": "**CASE**: koşula göre değer üretir (SQL'in if-else'i)."
   },
   {
    "t": "code",
    "code": "SELECT ders_adi,\n  CASE WHEN kredi >= 4 THEN 'Ağır' ELSE 'Normal' END AS yuk\nFROM ders WHERE bolum_no = 1;",
    "res": {
     "cols": [
      "ders_adi",
      "yuk"
     ],
     "rows": [
      [
       "Veritabanı Yönetim Sistemleri",
       "Ağır"
      ],
      [
       "Web Programlama",
       "Ağır"
      ],
      [
       "Nesne Tabanlı Programlama",
       "Normal"
      ]
     ]
    }
   },
   {
    "t": "tip",
    "text": "Testlerde JOIN sorusu genelde \"hangi satırlar gelir?\" diye sorulur: INNER = ortak olanlar, LEFT = soldakilerin hepsi. Satır sayısını saymak için önce eşleşmeyen satır var mı ona bak."
   }
  ]
 },
 {
  "id": "gorunum",
  "title": "Görünümler (VIEW) ve tetikleyiciler (TRIGGER)",
  "src": "Hafta 7",
  "blocks": [
   {
    "t": "p",
    "text": "**Görünüm (VIEW)**: bir SELECT sorgusuna verilen addır; **sanal tablo** gibi kullanılır. Veriyi kendisi saklamaz, her çağrıldığında sorgu yeniden çalışır; temel tablo değişince görünüm de güncel veriyi gösterir."
   },
   {
    "t": "code",
    "code": "CREATE VIEW ogrenci_notlari AS\nSELECT o.ad, o.soyad, d.ders_adi, k.harf_notu\nFROM ders_kaydi k\nJOIN ogrenci o ON o.ogrenci_no = k.ogrenci_no\nJOIN ders d    ON d.ders_kodu  = k.ders_kodu;\n\nSELECT * FROM ogrenci_notlari WHERE harf_notu = 'AA';",
    "res": {
     "cols": [
      "ad",
      "soyad",
      "ders_adi",
      "harf_notu"
     ],
     "rows": [
      [
       "Ahmet",
       "Kara",
       "Veritabanı Yönetim Sistemleri",
       "AA"
      ],
      [
       "Mert",
       "Güneş",
       "Dijital Fotoğrafçılık",
       "AA"
      ]
     ]
    }
   },
   {
    "t": "table",
    "head": [
     "Komut",
     "Ne yapar"
    ],
    "rows": [
     [
      "`CREATE VIEW ad AS SELECT …`",
      "Görünüm oluşturur"
     ],
     [
      "`CREATE OR REPLACE VIEW ad AS …`",
      "Varsa değiştirir, yoksa oluşturur"
     ],
     [
      "`ALTER VIEW ad AS …`",
      "Tanımı değiştirir"
     ],
     [
      "`DROP VIEW ad`",
      "Görünümü siler (tablolardaki veri **silinmez**)"
     ],
     [
      "`SHOW FULL TABLES WHERE Table_type = 'VIEW'`",
      "Görünümleri listeler"
     ]
    ]
   },
   {
    "t": "ul",
    "items": [
     "**Neden kullanılır?** Karmaşık sorguyu (JOIN, GROUP BY) tek isimle saklamak; kullanıcıya sadece bazı sütunları göstermek (**güvenlik**, örneğin maaş sütununu gizlemek); tablo yapısı değişse de uygulamanın aynı adı kullanabilmesi.",
     "**Güncellenebilir görünüm**: tek tablodan, toplama fonksiyonu / DISTINCT / GROUP BY olmadan oluşturulmuşsa üzerinden INSERT/UPDATE yapılabilir; değişiklik temel tabloya yansır. GROUP BY'lı görünüm güncellenemez."
    ]
   },
   {
    "t": "trap",
    "text": "Görünüm verinin kopyası değildir. `DROP VIEW` sadece tanımı siler; `ogrenci` tablosundaki satırlar yerinde kalır."
   },
   {
    "t": "p",
    "text": "**Tetikleyici (TRIGGER)**: bir tabloda **INSERT, UPDATE veya DELETE** olduğunda **kendiliğinden** çalışan SQL bloğu. Elle çağrılmaz."
   },
   {
    "t": "code",
    "code": "CREATE TABLE urun (id INT PRIMARY KEY, ad VARCHAR(50), stok INT);\nCREATE TABLE satis (id INT AUTO_INCREMENT PRIMARY KEY, urun_id INT, adet INT);\n\nDELIMITER $$\nCREATE TRIGGER stok_dus\nAFTER INSERT ON satis\nFOR EACH ROW\nBEGIN\n  UPDATE urun SET stok = stok - NEW.adet WHERE id = NEW.urun_id;\nEND$$\nDELIMITER ;\n\nINSERT INTO urun VALUES (1, 'Kulaklık', 10);\nINSERT INTO satis (urun_id, adet) VALUES (1, 3);\nSELECT ad, stok FROM urun;",
    "res": {
     "cols": [
      "ad",
      "stok"
     ],
     "rows": [
      [
       "Kulaklık",
       "7"
      ]
     ]
    }
   },
   {
    "t": "table",
    "head": [
     "Parça",
     "Anlamı"
    ],
    "rows": [
     [
      "`BEFORE` / `AFTER`",
      "Olaydan önce mi sonra mı çalışacak (BEFORE ile eklenecek değer değiştirilebilir/denetlenebilir)"
     ],
     [
      "`INSERT` / `UPDATE` / `DELETE`",
      "Hangi olayda (SELECT için tetikleyici **yoktur**)"
     ],
     [
      "`ON tablo`",
      "Hangi tablo"
     ],
     [
      "`FOR EACH ROW`",
      "Etkilenen her satır için bir kez çalışır"
     ],
     [
      "`NEW.sutun`",
      "Yeni değer: INSERT ve UPDATE'te var"
     ],
     [
      "`OLD.sutun`",
      "Eski değer: UPDATE ve DELETE'te var"
     ],
     [
      "`DELIMITER $$`",
      "Gövdedeki `;` komutu bitirmesin diye geçici ayırıcı (phpMyAdmin'de Delimiter kutusu)"
     ]
    ]
   },
   {
    "t": "trap",
    "text": "INSERT tetikleyicisinde **OLD yoktur** (önceki satır yok), DELETE tetikleyicisinde **NEW yoktur** (yeni satır yok). UPDATE'te ikisi de vardır."
   },
   {
    "t": "code",
    "code": "-- BEFORE ile denetim: negatif stok girilmesin\nCREATE TABLE urun (id INT PRIMARY KEY, stok INT);\nDELIMITER $$\nCREATE TRIGGER stok_kontrol\nBEFORE INSERT ON urun\nFOR EACH ROW\nBEGIN\n  IF NEW.stok < 0 THEN\n    SET NEW.stok = 0;\n  END IF;\nEND$$\nDELIMITER ;\nINSERT INTO urun VALUES (1, -5);\nSELECT * FROM urun;",
    "res": {
     "cols": [
      "id",
      "stok"
     ],
     "rows": [
      [
       "1",
       "0"
      ]
     ]
    }
   },
   {
    "t": "code",
    "code": "-- silinen kayıtları arşive (log) yazmak: AFTER DELETE + OLD\nCREATE TABLE musteri (id INT PRIMARY KEY, ad VARCHAR(50));\nCREATE TABLE silinen_musteri (id INT, ad VARCHAR(50), silinme DATETIME);\nCREATE TRIGGER musteri_log AFTER DELETE ON musteri\nFOR EACH ROW\n  INSERT INTO silinen_musteri VALUES (OLD.id, OLD.ad, NOW());\nINSERT INTO musteri VALUES (1, 'Ayşe');\nDELETE FROM musteri WHERE id = 1;\nSELECT id, ad FROM silinen_musteri;",
    "res": {
     "cols": [
      "id",
      "ad"
     ],
     "rows": [
      [
       "1",
       "Ayşe"
      ]
     ]
    }
   },
   {
    "t": "ul",
    "items": [
     "Kullanım alanları: stok güncelleme, değişiklik günlüğü (log / audit), otomatik hesaplanan alanlar, iş kuralı denetimi.",
     "`SHOW TRIGGERS;` listeler, `DROP TRIGGER ad;` siler. Bir tabloda aynı olay ve zaman için birden çok tetikleyici olabilir (MySQL 5.7+)."
    ]
   },
   {
    "t": "low",
    "text": "Saklı yordam (`CREATE PROCEDURE … CALL`) tetikleyiciye benzer ama **elle çağrılır**; tetikleyici olayla kendiliğinden çalışır. Ayrımı bilmen yeterli."
   }
  ]
 }
];
window.TOPIC_RULES = {
 "giris": "Veri ham, bilgi işlenmiş veridir. Veri tabanı veriler, VTYS (MySQL, Oracle…) onları yöneten yazılım. VTYS veri tekrarını ve tutarsızlığı azaltır, güvenlik ve eşzamanlı erişim sağlar.",
 "iliskisel": "Tablo = ilişki, satır = kayıt (tuple), sütun = nitelik. PK tekrar etmez ve NULL olmaz; FK başka tablonun PK'sine başvurur. 1:N'de FK çok tarafa, 1:1'de FK + UNIQUE, M:N'de ara tablo.",
 "sql-giris": "DDL: CREATE, ALTER, DROP, TRUNCATE. DML: INSERT, UPDATE, DELETE. DCL: GRANT, REVOKE. TCL: COMMIT, ROLLBACK. UPDATE/DELETE'te WHERE unutulursa tüm satırlar etkilenir.",
 "sorgular": "SELECT sütun FROM tablo WHERE koşul ORDER BY sütun LIMIT n. NULL için IS NULL; LIKE'ta % çok karakter, _ tek karakter; BETWEEN uçları dahil. Çok satır dönen alt sorgu IN ile kullanılır.",
 "ileri1": "GROUP BY satırları gruplar, toplama fonksiyonu her grup için çalışır. WHERE gruplamadan önce satırları, HAVING sonra grupları süzer. COUNT(*) tüm satırları, COUNT(sütun) NULL olmayanları sayar.",
 "ileri2": "INNER JOIN eşleşenleri, LEFT JOIN soldaki tablonun hepsini getirir (eşleşmeyende sağ taraf NULL). Ortak sütun adları takma adla yazılır. UNION tekrarları atar, UNION ALL atmaz.",
 "gorunum": "VIEW = adı verilmiş SELECT (sanal tablo), veri saklamaz. TRIGGER = INSERT/UPDATE/DELETE olayında kendiliğinden çalışan blok; BEFORE/AFTER, FOR EACH ROW, NEW ve OLD."
};
