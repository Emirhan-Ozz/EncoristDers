"""MBP203 Veri Tabanı ve Yönetimi · konu özetleri (MySQL).
Kaynak: ders konu listesi (7 hafta), derste kurulan okul_db (1-1_kod, 1-2_kod, INSERT), phpMyAdmin dökümü, ER çizimleri,
magaza veritabanı ve GROUP BY / HAVING uygulaması.
Kod bloklarında 'db' varsa build.py sorguyu MariaDB'de çalıştırır ve sonuç tablosunu ('res') ekler;
'ddl': True olanlar boş bir deneme veritabanında hatasız çalışmalıdır."""
from html import escape as E


# ======================================================================= ER çizici (Chen gösterimi)
def erd(ents, rels, w=640, h=250):
    """ents: {ad: (x, y, [(nitelik, tür, dx, dy)])}  tür: 'pk' | 'fk' | ''
       rels: [(ad, x, y, sol_varlık, sağ_varlık, sol_kardinalite, sağ_kardinalite)]"""
    s = ['<svg viewBox="0 0 %d %d" xmlns="http://www.w3.org/2000/svg" role="img">' % (w, h)]
    EW, EH = 120, 40
    for r in rels:
        name, x, y, a, b, ca, cb = r
        ax, ay = ents[a][0], ents[a][1]
        bx, by = ents[b][0], ents[b][1]
        s.append('<line x1="%d" y1="%d" x2="%d" y2="%d"/>' % (ax + EW / 2, ay, x - 52, y))
        s.append('<line x1="%d" y1="%d" x2="%d" y2="%d"/>' % (x + 52, y, bx - EW / 2, by))
        s.append('<text class="card" x="%d" y="%d">%s</text>' % ((ax + EW / 2 + x - 52) / 2, y - 11, ca))
        s.append('<text class="card" x="%d" y="%d">%s</text>' % ((x + 52 + bx - EW / 2) / 2, y - 11, cb))
    for name, (x, y, atts) in ents.items():
        for at, kind, dx, dy in atts:
            s.append('<line x1="%d" y1="%d" x2="%d" y2="%d"/>' % (x, y, x + dx, y + dy))
    for r in rels:
        name, x, y = r[0], r[1], r[2]
        s.append('<g class="rel"><polygon points="%d,%d %d,%d %d,%d %d,%d"/><text x="%d" y="%d">%s</text></g>' % (
            x - 52, y, x, y - 26, x + 52, y, x, y + 26, x, y + 1, E(name)))
    for name, (x, y, atts) in ents.items():
        for at, kind, dx, dy in atts:
            rx = max(44, len(at) * 4.1 + 14)
            s.append('<g class="att%s"><ellipse cx="%d" cy="%d" rx="%d" ry="16"/><text x="%d" y="%d">%s</text></g>' % (
                ' ' + kind if kind else '', x + dx, y + dy, rx, x + dx, y + dy + 1, E(at)))
        s.append('<g class="ent"><rect x="%d" y="%d" width="%d" height="%d"/><text x="%d" y="%d">%s</text></g>' % (
            x - EW / 2, y - EH / 2, EW, EH, x, y + 1, E(name)))
    s.append('</svg>')
    return ''.join(s)


ERD_11 = erd({
    'Ogrenci': (170, 125, [('ogrenci_no', 'pk', -40, 80), ('ad', '', -75, -78), ('soyad', '', 25, -84), ('eposta', '', 95, 70)]),
    'Ogrenci_Karti': (580, 125, [('kart_no', 'pk', -70, -80), ('ogrenci_no', 'fk', 55, -82), ('verilis_tarihi', '', -95, 82), ('gecerlilik_tarihi', '', 85, 82)]),
}, [('Sahip', 375, 125, 'Ogrenci', 'Ogrenci_Karti', '1', '1')], w=760)

ERD_1N = erd({
    'Bolum': (170, 120, [('bolum_no', 'pk', -40, -78), ('bolum_adi', '', -30, 80)]),
    'Ders': (580, 120, [('ders_kodu', 'pk', -65, -78), ('ders_adi', '', 60, -80), ('kredi', '', 95, 70), ('bolum_no', 'fk', -45, 82)]),
}, [('Acar', 375, 120, 'Bolum', 'Ders', '1', 'N')], w=760)

ERD_MN = erd({
    'Ogrenci': (170, 120, [('ogrenci_no', 'pk', -20, -78), ('ad', '', -45, 80)]),
    'Ders': (580, 120, [('ders_kodu', 'pk', 20, -78), ('ders_adi', '', 45, 80)]),
}, [('Ders_Kaydi', 375, 120, 'Ogrenci', 'Ders', 'M', 'N')], w=760, h=240)


# ======================================================================= tablolar (sitede gösterilen örnek veriler)
def tb(name, cols, rows):
    return {'name': name, 'cols': cols, 'rows': [[None if c is None else str(c) for c in r] for r in rows]}

OKUL_TABLES = [
    tb('ogrenci', ['ogrenci_no', 'ad', 'soyad'], [
        [20250101, 'Ahmet', 'Kara'], [20250102, 'Zehra', 'Aksoy'], [20250103, 'Mert', 'Güneş'],
        [20250104, 'İrem', 'Toprak'], [20250105, 'Deniz', 'Uçar'], [20250106, 'Kerem', 'Yalçın']]),
    tb('ders', ['ders_kodu', 'ders_adi', 'kredi', 'bolum_no'], [
        [101, 'Veritabanı Yönetim Sistemleri', 4, 1], [102, 'Web Programlama', 4, 1], [103, 'Nesne Tabanlı Programlama', 3, 1],
        [201, 'Tipografi', 3, 2], [202, 'Dijital Fotoğrafçılık', 3, 2], [301, 'Genel Muhasebe', 4, 3]]),
    tb('ders_kaydi', ['ogrenci_no', 'ders_kodu', 'harf_notu'], [
        [20250101, 101, 'AA'], [20250101, 102, 'BA'], [20250101, 201, None], [20250102, 101, 'BB'], [20250102, 103, None],
        [20250103, 101, 'CB'], [20250103, 202, 'AA'], [20250104, 201, 'BA'], [20250104, 202, None], [20250105, 301, 'CC'], [20250105, 101, 'DC']]),
    tb('bolum', ['bolum_no', 'bolum_adi'], [[1, 'Bilgisayar Programcılığı'], [2, 'Grafik Tasarımı'], [3, 'Muhasebe ve Vergi Uygulamaları'], [4, 'Turizm ve Otel İşletmeciliği']]),
    tb('ogrenci_karti', ['kart_no', 'ogrenci_no'], [[5001, 20250101], [5002, 20250102], [5003, 20250103], [5004, 20250104], [5005, 20250105]]),
]


T = []
def topic(id, title, src, *blocks):
    T.append({'id': id, 'title': title, 'src': src, 'blocks': list(blocks)})
P = lambda s: {'t': 'p', 'text': s}
UL = lambda *a: {'t': 'ul', 'items': list(a)}
TB = lambda head, rows: {'t': 'table', 'head': head, 'rows': rows}
TRAP = lambda s: {'t': 'trap', 'text': s}
TIP = lambda s: {'t': 'tip', 'text': s}
LOW = lambda s: {'t': 'low', 'text': s}
def CODE(code, db=None, ddl=False, out=None, pre=None):
    d = {'t': 'code', 'code': code.strip('\n')}
    if db: d['db'] = db
    if ddl: d['ddl'] = True
    if pre: d['pre'] = pre
    if out: d['out'] = out
    return d
ERD = lambda svg, cap: {'t': 'erd', 'svg': svg, 'cap': cap}

# ----------------------------------------------------------------------- 1
topic('giris', 'Veri ve veri tabanına giriş', 'Hafta 1',
    P('**Veri** (data) ham, işlenmemiş gerçeklerdir: `85`, `Ahmet`, `2025-09-20`. Veri işlenip anlam kazanınca **bilgi** (information) olur: "Ahmet\'in VTYS notu 85, sınıf ortalamasının üstünde".'),
    P('**Veri tabanı**: birbiriyle ilişkili verilerin, tekrarsız ve düzenli biçimde saklandığı topluluktur. **Veri Tabanı Yönetim Sistemi (VTYS / DBMS)** ise bu verileri tanımlamayı, saklamayı, sorgulamayı, güncellemeyi ve korumayı sağlayan yazılımdır.'),
    TB(['Kavram', 'Örnek'], [
        ['Veri tabanı', '`okul_db`, `magaza`'],
        ['VTYS (yazılım)', 'MySQL, MariaDB, PostgreSQL, Oracle, Microsoft SQL Server, SQLite'],
        ['Yönetim arayüzü', 'phpMyAdmin (MAMP / XAMPP ile gelir), MySQL Workbench'],
        ['Sorgu dili', 'SQL (Structured Query Language)']]),
    TRAP('MySQL bir **VTYS**dir, veri tabanı değildir. phpMyAdmin de VTYS değil, MySQL\'i tarayıcıdan yönetmeye yarayan **web arayüzüdür**. MAMP ise Apache + MySQL + PHP\'yi birlikte kuran pakettir.'),
    {'t': 'p', 'text': '**Dosya sistemi yerine VTYS kullanmanın nedenleri** (dosya sisteminin sorunları):'},
    TB(['Dosya sisteminde sorun', 'VTYS\'nin çözümü'], [
        ['Veri tekrarı (aynı bilgi birçok dosyada)', 'Veri bir kez saklanır, ilişkilerle bağlanır'],
        ['Tutarsızlık (bir dosyada güncellenir, diğerinde eski kalır)', 'Bütünlük kısıtları (PK, FK, NOT NULL) tutarlılığı korur'],
        ['Veriye erişim zor (her soru için yeni program)', 'SQL ile anında sorgu'],
        ['Güvenlik zayıf', 'Kullanıcı ve yetki yönetimi (GRANT / REVOKE)'],
        ['Aynı anda erişimde çakışma', 'Eşzamanlılık denetimi, kilitleme, işlemler (transaction)'],
        ['Yedekleme / kurtarma zor', 'Yedekleme ve geri yükleme araçları']]),
    P('**Veri modelleri** (verinin nasıl düzenlendiği):'),
    UL('**Hiyerarşik model**: ağaç yapısı, her kaydın tek bir üstü (ebeveyni) vardır.',
       '**Ağ (network) modeli**: bir kaydın birden çok üstü olabilir, grafik yapısı.',
       '**İlişkisel model**: veriler satır ve sütunlardan oluşan **tablolarda** tutulur; tablolar anahtarlarla bağlanır. MySQL bu modeli kullanır.',
       '**Nesne yönelimli model**: veri, nesne ve sınıflar biçiminde saklanır.',
       '**NoSQL**: belge (MongoDB), anahtar-değer (Redis), grafik (Neo4j) gibi tablo dışı yapılar.'),
    P('**Veri tabanında görev alanlar**: Veri Tabanı Yöneticisi (**DBA**: kurulum, yetki, yedek, performans), veri tabanı tasarımcısı, uygulama geliştirici ve son kullanıcı.'),
    UL('**Şema (schema)**: veri tabanının yapısı (tablolar, sütunlar, tipler, ilişkiler). Seyrek değişir.',
       '**Örnek / anlık durum (instance)**: belli bir andaki veriler. Her INSERT/UPDATE ile değişir.',
       '**Metadata (veri sözlüğü)**: veri hakkındaki veri; tablo adları, sütun tipleri, kısıtlar.'),
    TIP('Testte "veri / bilgi" ve "veri tabanı / VTYS" ayrımı sık sorulur. Veri ham, bilgi işlenmiş; veri tabanı verinin kendisi, VTYS onu yöneten yazılım.'),
)

# ----------------------------------------------------------------------- 2
topic('iliskisel', 'İlişkisel veri tabanı modeli', 'Hafta 2 · derste çizilen ER diyagramları',
    P('İlişkisel modelde her **tablo** (ilişki / relation) bir varlığı tutar. Tablonun **satırı** bir kayıttır (tuple / record), **sütunu** bir niteliktir (attribute / field).'),
    TB(['İlişkisel terim', 'Gündelik karşılığı', 'Örnek (ogrenci tablosu)'], [
        ['İlişki (relation)', 'Tablo', '`ogrenci`'],
        ['Demet (tuple)', 'Satır / kayıt', '`20250101, Ahmet, Kara`'],
        ['Nitelik (attribute)', 'Sütun / alan', '`ad`, `soyad`'],
        ['Alan (domain)', 'Sütunun alabileceği değerler', '`ad` için en çok 50 karakterlik metin'],
        ['Derece (degree)', 'Sütun sayısı', '4'],
        ['Kardinalite', 'Satır sayısı', '6']]),
    P('**Anahtarlar**'),
    TB(['Anahtar', 'Tanım', 'okul_db örneği'], [
        ['Süper anahtar', 'Satırı tek başına belirleyen bir veya daha çok sütun (fazlası olabilir)', '`(ogrenci_no, ad)`'],
        ['Aday anahtar', 'Fazlası olmayan en küçük süper anahtar', '`ogrenci_no`, `eposta`'],
        ['Birincil anahtar (PK)', 'Aday anahtarlardan seçilen; **tekrar edemez, NULL olamaz**', '`ogrenci.ogrenci_no`'],
        ['Alternatif anahtar', 'PK seçilmeyen diğer aday anahtar', '`eposta`'],
        ['Yabancı anahtar (FK)', 'Başka tablonun PK\'sine başvuran sütun; tablolar arası bağ', '`ders.bolum_no` → `bolum.bolum_no`'],
        ['Bileşik anahtar', 'Birden çok sütundan oluşan anahtar', '`ders_kaydi (ogrenci_no, ders_kodu)`']]),
    P('**Bütünlük kuralları**'),
    UL('**Varlık bütünlüğü**: birincil anahtar NULL olamaz ve tekrar edemez.',
       '**Referans bütünlüğü**: yabancı anahtardaki değer, başvurduğu tabloda var olmalıdır (ya da NULL olmalıdır). Olmayan bir `bolum_no` ile ders eklenemez.',
       '**Alan bütünlüğü**: değer, sütunun tipine ve kısıtlarına (NOT NULL, CHECK) uymalıdır.'),
    P('**NULL**: değerin bilinmediği ya da olmadığı anlamına gelir. 0 ya da boş metin (`\'\'`) ile aynı şey değildir.'),
    P('**İlişki türleri ve tabloya dönüşümü**'),
    ERD(ERD_11, '1:1 (bire bir): her öğrencinin en fazla bir kartı, her kartın tek sahibi. FK\'ye UNIQUE eklenir. Altı çizili = PK, kesikli turuncu = FK.'),
    ERD(ERD_1N, '1:N (bire çok): bir bölüm çok ders açar, her ders tek bölüme aittir. FK "çok" tarafa (ders) konur.'),
    ERD(ERD_MN, 'M:N (çoka çok): bir öğrenci çok derse, bir derse çok öğrenci kayıt olur. Ara tablo (ders_kaydi) iki FK taşır.'),
    TB(['İlişki', 'Tabloya nasıl çevrilir?'], [
        ['1:1', 'Taraflardan birine diğerinin PK\'si FK olarak eklenir ve **UNIQUE** yapılır (`ogrenci_karti.ogrenci_no INT NOT NULL UNIQUE`).'],
        ['1:N', 'FK **çok tarafına** eklenir (`ders.bolum_no`).'],
        ['M:N', '**Ara (bağlantı) tablo** kurulur; iki tablonun PK\'leri burada FK olur, ikisi birlikte bileşik PK olur (`ders_kaydi`).']]),
    P('**ER diyagramı (Chen gösterimi)**: **dikdörtgen** = varlık (tablo), **elips** = nitelik (sütun), **eşkenar dörtgen (baklava)** = ilişki, çizgi üstündeki **1 / N / M** = kardinalite. Birincil anahtarın **altı çizilir**. phpMyAdmin\'in **Designer** ekranı ise tabloları kutu, FK bağlarını çizgi olarak gösterir.'),
    TRAP('1:N ilişkide FK **"1" tarafına değil, "N" tarafına** eklenir. Bölüm tablosuna ders_kodu koymak yanlıştır: bir bölümün birden çok dersi vardır, tek sütuna sığmaz.'),
    P('**Normalizasyon**: tekrarları ve güncelleme sorunlarını (anomalileri) azaltmak için tabloları bölme süreci.'),
    TB(['Normal form', 'Kural'], [
        ['1NF', 'Her hücrede **tek (atomik) değer**; tekrar eden sütun grupları yok (`ders1, ders2, ders3` gibi).'],
        ['2NF', '1NF + bileşik anahtarlı tabloda her sütun anahtarın **tamamına** bağlı (kısmi bağımlılık yok).'],
        ['3NF', '2NF + anahtar olmayan sütun başka bir anahtar olmayan sütuna bağlı değil (**geçişli bağımlılık** yok).']]),
    TIP('Ekleme, silme ve güncelleme **anomalisi** normalizasyonun çözdüğü sorunlardır. Örnek: bölüm adı her derste tekrar yazılırsa, adı değişince bütün satırları güncellemek gerekir.'),
)

# ----------------------------------------------------------------------- 3
topic('sql-giris', 'SQL\'e giriş: DDL ve DML', 'Hafta 3 · okul_db kurulumu (1-1, 1-2 kodları, INSERT)',
    P('**SQL** (Structured Query Language) ilişkisel veri tabanlarının standart dilidir. Komutlar büyük/küçük harf duyarsızdır (`select` = `SELECT`), ifade **noktalı virgül** ile biter.'),
    TB(['Alt dil', 'Açılımı', 'Komutlar'], [
        ['**DDL**', 'Data Definition Language: yapıyı tanımlar', '`CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME`'],
        ['**DML**', 'Data Manipulation Language: veriyi değiştirir', '`INSERT`, `UPDATE`, `DELETE`'],
        ['**DQL**', 'Data Query Language: veriyi sorgular', '`SELECT`'],
        ['**DCL**', 'Data Control Language: yetki', '`GRANT`, `REVOKE`'],
        ['**TCL**', 'Transaction Control Language: işlem', '`COMMIT`, `ROLLBACK`, `SAVEPOINT`, `START TRANSACTION`']]),
    TRAP('`SELECT` bazı kaynaklarda DML içinde sayılır, bazılarında ayrı **DQL** olarak. Testte "veri sorgulama" geçiyorsa DQL, "veri değiştirme" geçiyorsa DML seç. `TRUNCATE` veriyi silse de **DDL**dir.'),
    P('**Veri tabanı oluşturma ve seçme** (derste MAMP + phpMyAdmin ile):'),
    CODE("""CREATE DATABASE IF NOT EXISTS okul_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_turkish_ci;

USE okul_db;"""),
    UL('`IF NOT EXISTS`: veri tabanı zaten varsa hata vermez, atlar.',
       '`utf8mb4`: Türkçe karakterler ve emojiler dahil tüm Unicode. `utf8mb4_turkish_ci`: Türkçe sıralama ve karşılaştırma kuralı; `ci` = case insensitive (büyük/küçük harf duyarsız).',
       '`USE`: sonraki komutların hangi veri tabanında çalışacağını seçer.'),
    TRAP('Derste görülen **#1046 No database selected** hatası: `CREATE TABLE` çalıştırılmadan önce veri tabanı seçilmemiş. Çözüm: `USE okul_db;` ya da phpMyAdmin\'de soldan veri tabanını seçip SQL sekmesine geçmek.'),
    P('**Sık kullanılan veri tipleri**'),
    TB(['Tip', 'Ne tutar', 'Örnek'], [
        ['`INT`', 'Tam sayı', '`ogrenci_no INT`'],
        ['`DECIMAL(10,2)`', 'Ondalıklı, tam hassas (para). 10 basamak, 2\'si virgülden sonra', '`fiyat DECIMAL(10,2)` → 1250.00'],
        ['`FLOAT` / `DOUBLE`', 'Yaklaşık ondalık (bilimsel)', ''],
        ['`VARCHAR(n)`', 'Değişken uzunluklu metin, en çok n karakter', '`ad VARCHAR(50)`'],
        ['`CHAR(n)`', 'Sabit uzunluklu metin, her zaman n karakter yer', '`harf_notu CHAR(2)`'],
        ['`TEXT`', 'Uzun metin', 'açıklama'],
        ['`DATE` / `DATETIME`', 'Tarih (YYYY-MM-DD) / tarih + saat', '`\'2025-09-20\'`'],
        ['`BOOLEAN`', 'MySQL\'de `TINYINT(1)`: 0 / 1', '`aktif BOOLEAN`']]),
    P('**Kısıtlar (constraints)**'),
    TB(['Kısıt', 'Anlamı'], [
        ['`PRIMARY KEY`', 'Birincil anahtar: tekrar edemez, NULL olamaz. Tabloda **bir tane** olur (birden çok sütundan oluşabilir).'],
        ['`NOT NULL`', 'Boş bırakılamaz.'],
        ['`UNIQUE`', 'Tekrar edemez (NULL olabilir). Bir tabloda birden çok olabilir.'],
        ['`DEFAULT değer`', 'Değer verilmezse kullanılacak varsayılan.'],
        ['`AUTO_INCREMENT`', 'Sayı otomatik artar (1, 2, 3…); genelde PK ile.'],
        ['`FOREIGN KEY (s) REFERENCES t(s)`', 'Yabancı anahtar; referans bütünlüğü.'],
        ['`CHECK (koşul)`', 'Değer koşula uymalı (MySQL 8.0.16+ uygular).']]),
    P('Derste yazılan 1:1 ve 1:N tabloları:'),
    CODE("""CREATE TABLE ogrenci (
  ogrenci_no INT PRIMARY KEY,
  ad         VARCHAR(50) NOT NULL,
  soyad      VARCHAR(50) NOT NULL,
  eposta     VARCHAR(100)
);

CREATE TABLE ogrenci_karti (
  kart_no           INT PRIMARY KEY,
  ogrenci_no        INT NOT NULL UNIQUE,      -- UNIQUE: 1:1 olmasını sağlar
  verilis_tarihi    DATE NOT NULL,
  gecerlilik_tarihi DATE NOT NULL,
  FOREIGN KEY (ogrenci_no) REFERENCES ogrenci(ogrenci_no)
);

CREATE TABLE bolum (
  bolum_no  INT PRIMARY KEY,
  bolum_adi VARCHAR(100) NOT NULL
);

CREATE TABLE ders (
  ders_kodu INT PRIMARY KEY,
  ders_adi  VARCHAR(100) NOT NULL,
  kredi     INT NOT NULL,
  bolum_no  INT NOT NULL,                     -- "çok" tarafındaki yabancı anahtar
  FOREIGN KEY (bolum_no) REFERENCES bolum(bolum_no)
);""", ddl=True),
    P('M:N için ara tablo; iki sütun birlikte birincil anahtar (bileşik PK):'),
    CODE("""CREATE TABLE ders_kaydi (
  ogrenci_no   INT NOT NULL,
  ders_kodu    INT NOT NULL,
  kayit_tarihi DATE,
  harf_notu    CHAR(2),
  PRIMARY KEY (ogrenci_no, ders_kodu),
  FOREIGN KEY (ogrenci_no) REFERENCES ogrenci(ogrenci_no),
  FOREIGN KEY (ders_kodu)  REFERENCES ders(ders_kodu)
);""", ddl=True, pre='CREATE TABLE ogrenci (ogrenci_no INT PRIMARY KEY); CREATE TABLE ders (ders_kodu INT PRIMARY KEY);'),
    TRAP('FK ile başvurulan sütunun tipi aynı olmalı. `ders.ders_kodu` VARCHAR, `ders_kaydi.ders_kodu` INT olursa FK kurulamaz (#1005 / errno 150). Bu yüzden derste ders_kodu INT\'e çevrildi.'),
    P('**FK eylemleri**: ana tablodaki satır silinir/güncellenirse bağlı satırlara ne olacağı.'),
    TB(['Eylem', 'Sonuç'], [
        ['`ON DELETE CASCADE`', 'Ana satır silinince bağlı satırlar da silinir (müşteri silinince siparişleri de).'],
        ['`ON DELETE SET NULL`', 'Bağlı satırların FK\'si NULL olur (sütun NULL kabul etmeli).'],
        ['`ON DELETE RESTRICT` / `NO ACTION`', 'Bağlı satır varken ana satır silinemez. **Varsayılan budur.**'],
        ['`ON UPDATE CASCADE`', 'Ana anahtar değişince FK\'ler de güncellenir.']]),
    CODE("""CREATE TABLE musteri (
  musteri_no  INT AUTO_INCREMENT PRIMARY KEY,
  musteri_adi VARCHAR(100) NOT NULL
);
CREATE TABLE siparis (
  siparis_no     INT AUTO_INCREMENT PRIMARY KEY,
  siparis_tarihi DATE NOT NULL,
  toplam_tutar   DECIMAL(10,2) NOT NULL,
  musteri_no     INT NOT NULL,
  CONSTRAINT fk_musteri_siparis FOREIGN KEY (musteri_no)
    REFERENCES musteri(musteri_no)
    ON DELETE CASCADE ON UPDATE CASCADE
);""", ddl=True),
    P('**ALTER TABLE**: var olan tabloyu değiştirir.'),
    CODE("""ALTER TABLE ogrenci ADD telefon VARCHAR(15);          -- sütun ekle
ALTER TABLE ogrenci MODIFY telefon VARCHAR(20);       -- tip değiştir
ALTER TABLE ogrenci CHANGE telefon tel VARCHAR(20);   -- adını ve tipini değiştir
ALTER TABLE ogrenci DROP COLUMN tel;                  -- sütun sil
ALTER TABLE ogrenci ADD UNIQUE (eposta);              -- kısıt ekle
RENAME TABLE ogrenci TO talebe;                       -- tablo adını değiştir""", ddl=True,
         pre='CREATE TABLE ogrenci (ogrenci_no INT PRIMARY KEY, ad VARCHAR(50) NOT NULL, soyad VARCHAR(50) NOT NULL, eposta VARCHAR(100));'),
    TB(['Komut', 'Ne siler', 'Yapı kalır mı?', 'WHERE?', 'Tür'], [
        ['`DELETE FROM t WHERE …`', 'Koşula uyan satırları', 'Evet', 'Var', 'DML'],
        ['`TRUNCATE TABLE t`', 'Bütün satırları (hızlı, AUTO_INCREMENT sıfırlanır)', 'Evet', 'Yok', 'DDL'],
        ['`DROP TABLE t`', 'Tabloyu yapısıyla birlikte', 'Hayır', 'Yok', 'DDL']]),
    P('**Veri ekleme, güncelleme, silme (DML)**'),
    CODE("""INSERT INTO bolum (bolum_no, bolum_adi) VALUES
(1, 'Bilgisayar Programcılığı'),
(2, 'Grafik Tasarımı');                       -- tek komutla çok satır

INSERT INTO bolum VALUES (3, 'Muhasebe');     -- sütun listesi yoksa TÜM sütunlar sırayla

UPDATE bolum SET bolum_adi = 'Grafik Tasarım' WHERE bolum_no = 2;

DELETE FROM bolum WHERE bolum_no = 3;""", ddl=True, pre='CREATE TABLE bolum (bolum_no INT PRIMARY KEY, bolum_adi VARCHAR(100) NOT NULL);'),
    TRAP('`UPDATE` ve `DELETE`\'te **WHERE unutulursa tablodaki bütün satırlar** güncellenir / silinir. Metin ve tarih değerleri tek tırnakla yazılır: `\'Ahmet\'`, `\'2025-09-20\'`; sayılar tırnaksız.'),
    TRAP('Sıra önemli: önce ana tablo (`bolum`, `ogrenci`), sonra ona başvuran tablo (`ders`, `ders_kaydi`) doldurulur. Ana tabloda olmayan bir değerle FK eklenirse **#1452 Cannot add or update a child row: a foreign key constraint fails** hatası alınır.'),
)

# ----------------------------------------------------------------------- 4
topic('sorgular', 'SQL sorguları ve alt sorgular', 'Hafta 4 · okul_db üzerinde',
    P('Bu ve sonraki konulardaki örnekler derste kurulan **okul_db** verisiyle çalıştırıldı (sonuç tabloları gerçek çıktı):'),
    {'t': 'tables', 'tables': OKUL_TABLES[:3]},
    P('**SELECT yapısı**: `SELECT sütunlar FROM tablo WHERE koşul ORDER BY sütun LIMIT n;`'),
    CODE("""SELECT ad, soyad FROM ogrenci WHERE ogrenci_no > 20250103;""", db='okul_db'),
    UL('`SELECT *` bütün sütunları getirir.',
       '`AS` sütuna ya da tabloya takma ad verir: `SELECT ad AS isim`. `AS` yazılmasa da olur: `SELECT ad isim`.',
       '`DISTINCT` tekrar eden satırları bir kez gösterir.'),
    CODE("""SELECT DISTINCT kredi FROM ders ORDER BY kredi;""", db='okul_db'),
    TB(['Operatör', 'Örnek', 'Anlamı'], [
        ['`=  <>  !=  <  >  <=  >=`', '`kredi <> 4`', 'Karşılaştırma (`<>` ve `!=` eşit değil)'],
        ['`AND  OR  NOT`', '`kredi = 3 AND bolum_no = 2`', 'Mantıksal; AND, OR\'dan önce işlenir'],
        ['`BETWEEN a AND b`', '`kredi BETWEEN 3 AND 4`', 'a ve b **dahil** aralık'],
        ['`IN (…)`', '`ders_kodu IN (101, 201)`', 'Listedekilerden biri'],
        ['`LIKE`', '`ad LIKE \'A%\'`', 'Desen: `%` = 0 veya daha çok karakter, `_` = tam 1 karakter'],
        ['`IS NULL` / `IS NOT NULL`', '`harf_notu IS NULL`', 'NULL kontrolü']]),
    CODE("""SELECT ogrenci_no, ders_kodu FROM ders_kaydi WHERE harf_notu IS NULL;""", db='okul_db'),
    TRAP('`harf_notu = NULL` **hiçbir satır döndürmez**; NULL ile karşılaştırma her zaman bilinmez (UNKNOWN) olur. Doğrusu `IS NULL`.'),
    CODE("""SELECT ders_adi FROM ders WHERE ders_adi LIKE '%Programlama';""", db='okul_db'),
    TB(['Desen', 'Eşleşir', 'Eşleşmez'], [
        ['`\'A%\'`', 'A ile başlayan: Ahmet', 'Zehra'],
        ['`\'%a\'`', 'a ile biten: Zehra', 'Ahmet'],
        ['`\'%er%\'`', 'içinde er geçen: Mert, Kerem', 'Ahmet'],
        ['`\'_e%\'`', 'ikinci harfi e: Zehra, Mert, Deniz, Kerem', 'Ahmet, İrem']]),
    P('**Sıralama ve sınırlama**: `ORDER BY sütun ASC` (artan, varsayılan) / `DESC` (azalan). Birden çok sütunla sıralanabilir: `ORDER BY kredi DESC, ders_adi`. `LIMIT n` ilk n satırı, `LIMIT 2, 3` 3. satırdan başlayıp 3 satır getirir (ilk sayı atlanacak satır sayısı).'),
    CODE("""SELECT ders_adi, kredi FROM ders ORDER BY kredi DESC, ders_adi ASC LIMIT 3;""", db='okul_db'),
    P('**Alt sorgu (subquery)**: parantez içinde başka bir SELECT. Önce iç sorgu çalışır, sonucu dış sorguda kullanılır.'),
    CODE("""-- Bilgisayar Programcılığı bölümünün dersleri (bölüm numarasını bilmeden)
SELECT ders_adi FROM ders
WHERE bolum_no = (SELECT bolum_no FROM bolum WHERE bolum_adi = 'Bilgisayar Programcılığı');""", db='okul_db'),
    CODE("""-- 101 koduna kayıtlı öğrenciler
SELECT ad, soyad FROM ogrenci
WHERE ogrenci_no IN (SELECT ogrenci_no FROM ders_kaydi WHERE ders_kodu = 101);""", db='okul_db'),
    CODE("""-- hiç derse kaydolmamış öğrenci
SELECT ad, soyad FROM ogrenci
WHERE ogrenci_no NOT IN (SELECT ogrenci_no FROM ders_kaydi);""", db='okul_db'),
    CODE("""-- kredisi ortalamanın üstündeki dersler
SELECT ders_adi, kredi FROM ders WHERE kredi > (SELECT AVG(kredi) FROM ders);""", db='okul_db'),
    UL('Tek değer döndüren alt sorgu `=`, `>`, `<` ile; **çok satır** döndüren alt sorgu `IN`, `NOT IN`, `ANY`, `ALL`, `EXISTS` ile kullanılır.',
       '`EXISTS (alt sorgu)`: alt sorgu en az bir satır döndürürse doğru.'),
    TRAP('Çok satır dönen alt sorguyu `=` ile kullanmak hata verir: **#1242 Subquery returns more than 1 row**. O durumda `IN` yazılır.'),
)

# ----------------------------------------------------------------------- 5
topic('ileri1', 'İleri SQL I: toplama fonksiyonları, GROUP BY, HAVING', 'Hafta 5 · magaza veritabanı, GROUP BY ve HAVING uygulaması',
    P('Derste kullanılan **magaza** veri tabanı: `kategoriler` 1─N `urunler`, `musteriler` 1─N `siparisler`, `siparisler` N─M `urunler` (ara tablo `siparis_detay`). Satır tutarı = `adet * birim_fiyat`. Oyuncak kategorisinin ürünü yok; Mekanik Klavye ve Kamp Sandalyesi hiç satılmadı; Emre Aydın hiç sipariş vermedi.'),
    TB(['Fonksiyon', 'Ne döndürür', 'NULL\'lar'], [
        ['`COUNT(*)`', 'Satır sayısı', 'NULL olan satırlar da sayılır'],
        ['`COUNT(sutun)`', 'O sütunu NULL olmayan satır sayısı', 'Sayılmaz'],
        ['`COUNT(DISTINCT sutun)`', 'Farklı değer sayısı', 'Sayılmaz'],
        ['`SUM(sutun)`', 'Toplam', 'Atlanır'],
        ['`AVG(sutun)`', 'Ortalama (NULL olmayanların)', 'Atlanır'],
        ['`MIN` / `MAX`', 'En küçük / en büyük', 'Atlanır'],
        ['`ROUND(x, 2)`', 'x\'i 2 basamağa yuvarlar', '']]),
    CODE("""SELECT COUNT(*) AS kayit, COUNT(harf_notu) AS notu_olan FROM ders_kaydi;""", db='okul_db'),
    TRAP('`COUNT(*)` ile `COUNT(harf_notu)` farklıdır: notu girilmemiş (NULL) 3 kayıt ikincisinde sayılmaz.'),
    P('**Uygulama soru 2**: en düşük, en yüksek ve ortalama fiyat tek sorguda.'),
    CODE("""SELECT MIN(fiyat) AS en_dusuk, MAX(fiyat) AS en_yuksek, ROUND(AVG(fiyat), 2) AS ortalama
FROM urunler;""", db='magaza'),
    P('**GROUP BY**: aynı değere sahip satırları bir grup yapar; toplama fonksiyonu **her grup için ayrı** hesaplanır.'),
    CODE("""-- Uygulama soru 3: her şehirde kaç müşteri var
SELECT sehir, COUNT(*) AS musteri_sayisi
FROM musteriler
GROUP BY sehir;""", db='magaza'),
    CODE("""-- Uygulama soru 5: kategori adı, ürün sayısı, ortalama fiyat
SELECT k.kategori_adi, COUNT(u.urun_id) AS urun_sayisi, ROUND(AVG(u.fiyat), 2) AS ort_fiyat
FROM kategoriler k
JOIN urunler u ON u.kategori_id = k.kategori_id
GROUP BY k.kategori_id, k.kategori_adi;""", db='magaza'),
    CODE("""-- Uygulama soru 6: her siparişin toplam tutarı (ilk 5)
SELECT siparis_id, SUM(adet * birim_fiyat) AS toplam
FROM siparis_detay
GROUP BY siparis_id
LIMIT 5;""", db='magaza'),
    TRAP('SELECT\'te toplama fonksiyonu **dışında** kalan her sütun GROUP BY\'da da yazılmalıdır. `SELECT sehir, ad, COUNT(*) … GROUP BY sehir` hatalıdır: bir şehirde birden çok ad var, hangisi yazılacak? (MySQL\'in `ONLY_FULL_GROUP_BY` modu bunu hata sayar.)'),
    P('**HAVING**: gruplamadan **sonra** grupları süzer. Toplama fonksiyonlu koşul (COUNT, SUM, AVG…) **WHERE\'e değil HAVING\'e** yazılır.'),
    CODE("""-- Uygulama soru 7: birden fazla müşterisi olan şehirler
SELECT sehir, COUNT(*) AS musteri_sayisi
FROM musteriler
GROUP BY sehir
HAVING COUNT(*) > 1;""", db='magaza'),
    CODE("""-- Uygulama soru 8: en az 2 sipariş vermiş müşteriler
SELECT m.ad, m.soyad, COUNT(s.siparis_id) AS siparis_sayisi
FROM musteriler m
JOIN siparisler s ON s.musteri_id = m.musteri_id
GROUP BY m.musteri_id, m.ad, m.soyad
HAVING COUNT(s.siparis_id) >= 2;""", db='magaza'),
    CODE("""-- Uygulama soru 9: toplam 3 veya daha fazla adet satılan ürünler, çok satandan aza
SELECT u.urun_adi, SUM(d.adet) AS toplam_adet
FROM urunler u
JOIN siparis_detay d ON d.urun_id = u.urun_id
GROUP BY u.urun_id, u.urun_adi
HAVING SUM(d.adet) >= 3
ORDER BY toplam_adet DESC;""", db='magaza'),
    CODE("""-- Uygulama soru 10: iptaller hariç, cirosu 5000 TL'yi geçen şehirler
SELECT m.sehir, SUM(d.adet * d.birim_fiyat) AS ciro
FROM musteriler m
JOIN siparisler s    ON s.musteri_id = m.musteri_id
JOIN siparis_detay d ON d.siparis_id = s.siparis_id
WHERE s.durum <> 'İptal'
GROUP BY m.sehir
HAVING SUM(d.adet * d.birim_fiyat) > 5000
ORDER BY ciro DESC;""", db='magaza'),
    TB(['', 'WHERE', 'HAVING'], [
        ['Ne zaman çalışır?', 'Gruplamadan **önce**', 'Gruplamadan **sonra**'],
        ['Neyi süzer?', 'Satırları', 'Grupları'],
        ['Toplama fonksiyonu?', 'Kullanılamaz (`WHERE COUNT(*) > 1` hata)', 'Kullanılır'],
        ['Örnek', '`WHERE durum <> \'İptal\'`', '`HAVING SUM(…) > 5000`']]),
    P('**Yazım sırası**: `SELECT … FROM … JOIN … WHERE … GROUP BY … HAVING … ORDER BY … LIMIT`'),
    P('**Mantıksal çalışma sırası**: `FROM / JOIN` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY` → `LIMIT`. Bu yüzden SELECT\'te verilen takma ad WHERE\'de kullanılamaz, ORDER BY\'da kullanılabilir.'),
    TIP('Testte "toplama fonksiyonuna koşul" görürsen cevap HAVING. "Belli satırları gruplamadan önce ele" görürsen WHERE. İkisi aynı sorguda birlikte kullanılabilir (uygulama soru 10).'),
)

# ----------------------------------------------------------------------- 6
topic('ileri2', 'İleri SQL II: JOIN, birleşim ve fonksiyonlar', 'Hafta 6 · Küçük Sınav I',
    P('**JOIN**: birden çok tablodaki ilişkili satırları FK = PK eşitliğiyle (`ON`) yan yana getirir. Tablolara kısa takma ad verilir: `ogrenci o`, `ders d`.'),
    TB(['JOIN', 'Getirdiği satırlar'], [
        ['`INNER JOIN` (ya da sadece `JOIN`)', 'Sadece **iki tabloda da eşleşen** satırlar'],
        ['`LEFT JOIN`', 'Soldaki tablonun **tüm** satırları; sağda eşleşme yoksa sağ sütunlar NULL'],
        ['`RIGHT JOIN`', 'Sağdaki tablonun tüm satırları; solda eşleşme yoksa NULL'],
        ['`CROSS JOIN`', 'Kartezyen çarpım: her satır her satırla (m × n satır)'],
        ['`FULL OUTER JOIN`', 'MySQL\'de **yok**; `LEFT JOIN … UNION … RIGHT JOIN` ile yapılır'],
        ['Self join', 'Tablonun kendisiyle birleştirilmesi (iki farklı takma adla)']]),
    CODE("""-- öğrenci adı + ders adı + not (M:N, 3 tablo)
SELECT o.ad, d.ders_adi, k.harf_notu
FROM ders_kaydi k
JOIN ogrenci o ON o.ogrenci_no = k.ogrenci_no
JOIN ders d    ON d.ders_kodu  = k.ders_kodu
WHERE d.bolum_no = 2;""", db='okul_db'),
    CODE("""-- LEFT JOIN: kartı olmayan öğrenci de listelenir
SELECT o.ad, o.soyad, k.kart_no
FROM ogrenci o
LEFT JOIN ogrenci_karti k ON k.ogrenci_no = o.ogrenci_no;""", db='okul_db'),
    CODE("""-- eşleşmeyenleri bulmak: LEFT JOIN + IS NULL
SELECT b.bolum_adi
FROM bolum b
LEFT JOIN ders d ON d.bolum_no = b.bolum_no
WHERE d.ders_kodu IS NULL;""", db='okul_db'),
    CODE("""-- Uygulama bonus: hiç satılmamış ürünler (LEFT JOIN + GROUP BY + HAVING COUNT = 0)
SELECT u.urun_adi
FROM urunler u
LEFT JOIN siparis_detay d ON d.urun_id = u.urun_id
GROUP BY u.urun_id, u.urun_adi
HAVING COUNT(d.detay_id) = 0;""", db='magaza'),
    TRAP('LEFT JOIN\'de `COUNT(*)` kullanılırsa eşleşmeyen satır da 1 sayılır. Eşleşmeyenleri 0 saymak için **sağ tablonun bir sütunu** sayılır: `COUNT(d.detay_id)`.'),
    TRAP('JOIN\'de iki tabloda aynı adlı sütun varsa takma adla yazılmalı: `SELECT ogrenci_no …` iki tabloda da olduğu için **#1052 Column \'ogrenci_no\' in field list is ambiguous** hatası verir; `o.ogrenci_no` yazılır.'),
    P('**UNION**: iki SELECT\'in sonucunu alt alta ekler. Sütun sayısı ve sırası aynı olmalı. `UNION` tekrarları atar, `UNION ALL` atmaz.'),
    CODE("""SELECT ders_kodu FROM ders WHERE kredi = 4
UNION
SELECT ders_kodu FROM ders_kaydi WHERE harf_notu = 'AA';""", db='okul_db'),
    P('**Sık kullanılan fonksiyonlar**'),
    TB(['Fonksiyon', 'Örnek', 'Sonuç'], [
        ['`CONCAT(a, b, …)`', '`CONCAT(ad, \' \', soyad)`', 'Ahmet Kara'],
        ['`UPPER` / `LOWER`', '`UPPER(\'sql\')`', 'SQL'],
        ['`LENGTH` / `CHAR_LENGTH`', '`CHAR_LENGTH(\'Mert\')`', '4 (LENGTH bayt sayar: \'ş\' 2 bayt)'],
        ['`SUBSTRING(s, başla, uzunluk)`', '`SUBSTRING(\'Veritabanı\', 1, 4)`', 'Veri'],
        ['`ROUND(x, n)`', '`ROUND(989.6294, 2)`', '989.63'],
        ['`IFNULL(a, b)`', '`IFNULL(harf_notu, \'Girilmedi\')`', 'NULL ise b'],
        ['`NOW()` / `CURDATE()`', '', 'Şu anki tarih-saat / tarih'],
        ['`YEAR(t)` / `MONTH(t)`', '`YEAR(\'2025-09-20\')`', '2025'],
        ['`DATEDIFF(t1, t2)`', '`DATEDIFF(\'2025-09-23\', \'2025-09-20\')`', '3 (gün)']]),
    CODE("""SELECT CONCAT(o.ad, ' ', o.soyad) AS ogrenci,
       IFNULL(k.harf_notu, 'Girilmedi') AS notu
FROM ogrenci o JOIN ders_kaydi k ON k.ogrenci_no = o.ogrenci_no
WHERE k.ders_kodu = 201;""", db='okul_db'),
    P('**CASE**: koşula göre değer üretir (SQL\'in if-else\'i).'),
    CODE("""SELECT ders_adi,
  CASE WHEN kredi >= 4 THEN 'Ağır' ELSE 'Normal' END AS yuk
FROM ders WHERE bolum_no = 1;""", db='okul_db'),
    TIP('Testlerde JOIN sorusu genelde "hangi satırlar gelir?" diye sorulur: INNER = ortak olanlar, LEFT = soldakilerin hepsi. Satır sayısını saymak için önce eşleşmeyen satır var mı ona bak.'),
)

# ----------------------------------------------------------------------- 7
topic('gorunum', 'Görünümler (VIEW) ve tetikleyiciler (TRIGGER)', 'Hafta 7',
    P('**Görünüm (VIEW)**: bir SELECT sorgusuna verilen addır; **sanal tablo** gibi kullanılır. Veriyi kendisi saklamaz, her çağrıldığında sorgu yeniden çalışır; temel tablo değişince görünüm de güncel veriyi gösterir.'),
    CODE("""CREATE VIEW ogrenci_notlari AS
SELECT o.ad, o.soyad, d.ders_adi, k.harf_notu
FROM ders_kaydi k
JOIN ogrenci o ON o.ogrenci_no = k.ogrenci_no
JOIN ders d    ON d.ders_kodu  = k.ders_kodu;

SELECT * FROM ogrenci_notlari WHERE harf_notu = 'AA';""", db='okul_db'),
    TB(['Komut', 'Ne yapar'], [
        ['`CREATE VIEW ad AS SELECT …`', 'Görünüm oluşturur'],
        ['`CREATE OR REPLACE VIEW ad AS …`', 'Varsa değiştirir, yoksa oluşturur'],
        ['`ALTER VIEW ad AS …`', 'Tanımı değiştirir'],
        ['`DROP VIEW ad`', 'Görünümü siler (tablolardaki veri **silinmez**)'],
        ['`SHOW FULL TABLES WHERE Table_type = \'VIEW\'`', 'Görünümleri listeler']]),
    UL('**Neden kullanılır?** Karmaşık sorguyu (JOIN, GROUP BY) tek isimle saklamak; kullanıcıya sadece bazı sütunları göstermek (**güvenlik**, örneğin maaş sütununu gizlemek); tablo yapısı değişse de uygulamanın aynı adı kullanabilmesi.',
       '**Güncellenebilir görünüm**: tek tablodan, toplama fonksiyonu / DISTINCT / GROUP BY olmadan oluşturulmuşsa üzerinden INSERT/UPDATE yapılabilir; değişiklik temel tabloya yansır. GROUP BY\'lı görünüm güncellenemez.'),
    TRAP('Görünüm verinin kopyası değildir. `DROP VIEW` sadece tanımı siler; `ogrenci` tablosundaki satırlar yerinde kalır.'),
    P('**Tetikleyici (TRIGGER)**: bir tabloda **INSERT, UPDATE veya DELETE** olduğunda **kendiliğinden** çalışan SQL bloğu. Elle çağrılmaz.'),
    CODE("""CREATE TABLE urun (id INT PRIMARY KEY, ad VARCHAR(50), stok INT);
CREATE TABLE satis (id INT AUTO_INCREMENT PRIMARY KEY, urun_id INT, adet INT);

DELIMITER $$
CREATE TRIGGER stok_dus
AFTER INSERT ON satis
FOR EACH ROW
BEGIN
  UPDATE urun SET stok = stok - NEW.adet WHERE id = NEW.urun_id;
END$$
DELIMITER ;

INSERT INTO urun VALUES (1, 'Kulaklık', 10);
INSERT INTO satis (urun_id, adet) VALUES (1, 3);
SELECT ad, stok FROM urun;""", ddl=True),
    TB(['Parça', 'Anlamı'], [
        ['`BEFORE` / `AFTER`', 'Olaydan önce mi sonra mı çalışacak (BEFORE ile eklenecek değer değiştirilebilir/denetlenebilir)'],
        ['`INSERT` / `UPDATE` / `DELETE`', 'Hangi olayda (SELECT için tetikleyici **yoktur**)'],
        ['`ON tablo`', 'Hangi tablo'],
        ['`FOR EACH ROW`', 'Etkilenen her satır için bir kez çalışır'],
        ['`NEW.sutun`', 'Yeni değer: INSERT ve UPDATE\'te var'],
        ['`OLD.sutun`', 'Eski değer: UPDATE ve DELETE\'te var'],
        ['`DELIMITER $$`', 'Gövdedeki `;` komutu bitirmesin diye geçici ayırıcı (phpMyAdmin\'de Delimiter kutusu)']]),
    TRAP('INSERT tetikleyicisinde **OLD yoktur** (önceki satır yok), DELETE tetikleyicisinde **NEW yoktur** (yeni satır yok). UPDATE\'te ikisi de vardır.'),
    CODE("""-- BEFORE ile denetim: negatif stok girilmesin
CREATE TABLE urun (id INT PRIMARY KEY, stok INT);
DELIMITER $$
CREATE TRIGGER stok_kontrol
BEFORE INSERT ON urun
FOR EACH ROW
BEGIN
  IF NEW.stok < 0 THEN
    SET NEW.stok = 0;
  END IF;
END$$
DELIMITER ;
INSERT INTO urun VALUES (1, -5);
SELECT * FROM urun;""", ddl=True),
    CODE("""-- silinen kayıtları arşive (log) yazmak: AFTER DELETE + OLD
CREATE TABLE musteri (id INT PRIMARY KEY, ad VARCHAR(50));
CREATE TABLE silinen_musteri (id INT, ad VARCHAR(50), silinme DATETIME);
CREATE TRIGGER musteri_log AFTER DELETE ON musteri
FOR EACH ROW
  INSERT INTO silinen_musteri VALUES (OLD.id, OLD.ad, NOW());
INSERT INTO musteri VALUES (1, 'Ayşe');
DELETE FROM musteri WHERE id = 1;
SELECT id, ad FROM silinen_musteri;""", ddl=True),
    UL('Kullanım alanları: stok güncelleme, değişiklik günlüğü (log / audit), otomatik hesaplanan alanlar, iş kuralı denetimi.',
       '`SHOW TRIGGERS;` listeler, `DROP TRIGGER ad;` siler. Bir tabloda aynı olay ve zaman için birden çok tetikleyici olabilir (MySQL 5.7+).'),
    LOW('Saklı yordam (`CREATE PROCEDURE … CALL`) tetikleyiciye benzer ama **elle çağrılır**; tetikleyici olayla kendiliğinden çalışır. Ayrımı bilmen yeterli.'),
)

TRAPS = [
    {'t': 'MySQL bir **VTYS**, phpMyAdmin bir **web arayüzü**, `okul_db` bir **veri tabanı**dır.', 'topic': 'giris'},
    {'t': 'Veri ham değerdir, işlenip anlam kazanınca **bilgi** olur.', 'topic': 'giris'},
    {'t': 'Birincil anahtar **tekrar edemez ve NULL olamaz**; UNIQUE tekrar edemez ama NULL olabilir.', 'topic': 'iliskisel'},
    {'t': '1:N ilişkide FK **N (çok) tarafına** konur; 1:1\'de FK\'ye **UNIQUE** eklenir; M:N için **ara tablo** gerekir.', 'topic': 'iliskisel'},
    {'t': 'ER diyagramında dikdörtgen = varlık, elips = nitelik, baklava = ilişki, altı çizili = PK.', 'topic': 'iliskisel'},
    {'t': '`TRUNCATE` ve `DROP` **DDL**, `DELETE` **DML**dir. DROP yapıyı da siler.', 'topic': 'sql-giris'},
    {'t': '**#1046 No database selected**: önce `USE okul_db;`. **#1452**: ana tabloda olmayan değerle FK eklenmiş.', 'topic': 'sql-giris'},
    {'t': '`UPDATE` / `DELETE`\'te WHERE yazılmazsa **bütün satırlar** etkilenir.', 'topic': 'sql-giris'},
    {'t': 'NULL kontrolü `= NULL` ile değil **`IS NULL`** ile yapılır.', 'topic': 'sorgular'},
    {'t': '`LIKE` deseninde `%` = 0 veya daha çok karakter, `_` = tam 1 karakter. `BETWEEN` uçları **dahil** eder.', 'topic': 'sorgular'},
    {'t': '`COUNT(*)` NULL\'ları da sayar, `COUNT(sutun)` saymaz. AVG NULL\'ları hesaba katmaz.', 'topic': 'ileri1'},
    {'t': 'Toplama fonksiyonlu koşul **HAVING**\'e yazılır; WHERE gruplamadan önce satırları süzer.', 'topic': 'ileri1'},
    {'t': 'Yazım sırası: SELECT, FROM, JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT.', 'topic': 'ileri1'},
    {'t': 'INNER JOIN sadece eşleşenleri, LEFT JOIN soldakilerin **hepsini** getirir; eşleşmeyenlerde sağ sütunlar NULL.', 'topic': 'ileri2'},
    {'t': 'UNION tekrarları atar, UNION ALL atmaz. MySQL\'de FULL OUTER JOIN yoktur.', 'topic': 'ileri2'},
    {'t': 'VIEW veri saklamaz (sanal tablo). DROP VIEW tablodaki veriyi silmez.', 'topic': 'gorunum'},
    {'t': 'Tetikleyici INSERT/UPDATE/DELETE ile kendiliğinden çalışır; INSERT\'te OLD, DELETE\'te NEW yoktur.', 'topic': 'gorunum'},
]

TOPIC_RULES = {
    'giris': 'Veri ham, bilgi işlenmiş veridir. Veri tabanı veriler, VTYS (MySQL, Oracle…) onları yöneten yazılım. VTYS veri tekrarını ve tutarsızlığı azaltır, güvenlik ve eşzamanlı erişim sağlar.',
    'iliskisel': 'Tablo = ilişki, satır = kayıt (tuple), sütun = nitelik. PK tekrar etmez ve NULL olmaz; FK başka tablonun PK\'sine başvurur. 1:N\'de FK çok tarafa, 1:1\'de FK + UNIQUE, M:N\'de ara tablo.',
    'sql-giris': 'DDL: CREATE, ALTER, DROP, TRUNCATE. DML: INSERT, UPDATE, DELETE. DCL: GRANT, REVOKE. TCL: COMMIT, ROLLBACK. UPDATE/DELETE\'te WHERE unutulursa tüm satırlar etkilenir.',
    'sorgular': 'SELECT sütun FROM tablo WHERE koşul ORDER BY sütun LIMIT n. NULL için IS NULL; LIKE\'ta % çok karakter, _ tek karakter; BETWEEN uçları dahil. Çok satır dönen alt sorgu IN ile kullanılır.',
    'ileri1': 'GROUP BY satırları gruplar, toplama fonksiyonu her grup için çalışır. WHERE gruplamadan önce satırları, HAVING sonra grupları süzer. COUNT(*) tüm satırları, COUNT(sütun) NULL olmayanları sayar.',
    'ileri2': 'INNER JOIN eşleşenleri, LEFT JOIN soldaki tablonun hepsini getirir (eşleşmeyende sağ taraf NULL). Ortak sütun adları takma adla yazılır. UNION tekrarları atar, UNION ALL atmaz.',
    'gorunum': 'VIEW = adı verilmiş SELECT (sanal tablo), veri saklamaz. TRIGGER = INSERT/UPDATE/DELETE olayında kendiliğinden çalışan blok; BEFORE/AFTER, FOR EACH ROW, NEW ve OLD.',
}
