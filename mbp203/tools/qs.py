"""MBP203 soru bankası. İlk şık (a=0) doğru cevaptır; build sırasında şıklar karıştırılır.
sql=…  → build.py sorguyu MariaDB'de çalıştırır:
   mode 'val'  : tek hücre, doğru şıkla birebir aynı olmalı
   mode 'n'    : dönen satır sayısı (şık: '3' ya da '3 satır')
   mode 'col'  : ilk sütun ', ' ile birleştirilmiş, sırasıyla
   mode 'set'  : ilk sütun, sırasız (', ' ile, alfabetik karşılaştırılır)
   mode 'err'  : sorgu hata vermeli
   mode 'ok'   : sorgu hatasız çalışmalı
db: 'okul_db' | 'magaza' | None (tables= ile verilen küçük tablolar boş bir veri tabanında kurulur; ddl=True ise boş veri tabanı)."""
import textwrap
from content import OKUL_TABLES, tb

Q = []
CUR = {'t': None}
def topic(t): CUR['t'] = t
def dd(s): return textwrap.dedent(s).strip('\n')
OT = {t['name']: t for t in OKUL_TABLES}
def okul(*names): return [OT[n] for n in names]

def mc(q, opts, exp, sql=None, mode=None, db=None, tables=None, code=None, why=None, setup=None, src=None):
    d = {'type': 'mc', 'topic': CUR['t'], 'q': q, 'opts': list(opts), 'a': 0, 'exp': exp}
    if sql is not None and code is None: code = sql
    if code: d['code'] = dd(code)
    if tables: d['tables'] = tables
    if why: d['why'] = why
    if src: d['src'] = src
    d['chk'] = {'sql': dd(sql) if sql else None, 'mode': mode, 'db': db, 'setup': dd(setup) if setup else None}
    Q.append(d)
    return d

def fill(q, code, ans, exp, db=None, tables=None, setup=None, run=True, whyFill=None):
    d = {'type': 'fill', 'topic': CUR['t'], 'q': q, 'code': dd(code), 'ans': list(ans), 'cs': False, 'exp': exp}
    if tables: d['tables'] = tables
    if whyFill: d['whyFill'] = whyFill
    d['chk'] = {'db': db, 'run': run, 'setup': dd(setup) if setup else None}
    Q.append(d)
    return d

def match(q, pairs, exp):
    d = {'type': 'match', 'topic': CUR['t'], 'q': q, 'pairs': [list(p) for p in pairs], 'exp': exp, 'chk': {}}
    Q.append(d)
    return d

# ===================================================================== 1. Giriş
topic('giris')
mc('İşlenmemiş, tek başına anlam taşımayan ham gerçeklere ne denir?', ['Veri', 'Bilgi', 'Veri tabanı', 'Şema', 'Rapor'],
   'Veri ham değerdir (85, Ahmet). İşlenip anlam kazanınca bilgi olur.')
mc('"Ahmet\'in notu sınıf ortalamasının üstünde" ifadesi hangisine örnektir?', ['Bilgi', 'Veri', 'Metadata', 'Şema', 'Kısıt'],
   'Ham notlar işlenip yorumlanmış, anlam kazanmış: bilgi.')
mc('Veri tabanını tanımlama, saklama, sorgulama ve güvenlik işlerini yapan yazılıma ne denir?', ['VTYS (Veri Tabanı Yönetim Sistemi)', 'Veri tabanı', 'İşletim sistemi', 'Web sunucusu', 'Derleyici'],
   'VTYS (DBMS): MySQL, Oracle, PostgreSQL gibi.')
mc('Aşağıdakilerden hangisi bir VTYS **değildir**?', ['phpMyAdmin', 'MySQL', 'PostgreSQL', 'Oracle', 'Microsoft SQL Server'],
   'phpMyAdmin MySQL\'i tarayıcıdan yönetmeye yarayan web arayüzüdür; kendisi VTYS değildir.')
mc('Derste kullanılan MAMP paketi için hangisi doğrudur?', ['Apache, MySQL ve PHP\'yi birlikte kuran yerel sunucu paketidir', 'Bir veri tabanıdır', 'Bir SQL komutudur', 'Bir veri modelidir', 'Sadece metin düzenleyicidir'],
   'MAMP (Mac/Windows, Apache, MySQL, PHP) yerel geliştirme ortamıdır; phpMyAdmin de içinde gelir.')
mc('Dosya sistemine göre VTYS\'nin avantajı **olmayan** hangisidir?', ['Veri tekrarını artırması', 'Veri tutarlılığını sağlaması', 'Eşzamanlı erişimi denetlemesi', 'Yetkilendirme ile güvenlik sağlaması', 'Yedekleme ve kurtarma kolaylığı'],
   'VTYS veri tekrarını azaltır, artırmaz.')
mc('Aynı müşterinin adresinin iki farklı dosyada farklı yazılı olması hangi sorundur?', ['Veri tutarsızlığı', 'Veri bağımsızlığı', 'Normalizasyon', 'Kardinalite', 'Eşzamanlılık'],
   'Tekrar eden veri bir yerde güncellenip diğerinde eski kalınca tutarsızlık oluşur.')
mc('Verilerin satır ve sütunlardan oluşan tablolarda tutulduğu, tabloların anahtarlarla bağlandığı model hangisidir?', ['İlişkisel model', 'Hiyerarşik model', 'Ağ modeli', 'Belge (NoSQL) modeli', 'Anahtar-değer modeli'],
   'MySQL ilişkisel (relational) modeli kullanır.')
mc('Her kaydın tek bir üst (ebeveyn) kaydı olduğu, ağaç yapısındaki veri modeli hangisidir?', ['Hiyerarşik model', 'Ağ modeli', 'İlişkisel model', 'Nesne yönelimli model', 'Grafik modeli'],
   'Hiyerarşik modelde ağaç yapısı vardır; ağ modelinde bir kaydın birden çok üstü olabilir.')
mc('MongoDB hangi tür veri tabanına örnektir?', ['NoSQL (belge tabanlı)', 'İlişkisel', 'Hiyerarşik', 'Ağ modeli', 'Elektronik tablo'],
   'MongoDB verileri JSON benzeri belgelerde saklar.')
mc('Veri tabanının kurulumu, kullanıcı yetkileri, yedekleme ve performansından sorumlu kişi kimdir?', ['Veri tabanı yöneticisi (DBA)', 'Son kullanıcı', 'Grafik tasarımcı', 'Sistem analisti', 'Test uzmanı'],
   'DBA = Database Administrator.')
mc('Veri tabanının yapısına (tablolar, sütunlar, tipler, ilişkiler) ne denir?', ['Şema', 'Örnek (instance)', 'Kayıt', 'Sorgu', 'Görünüm'],
   'Şema yapıdır ve seyrek değişir; instance belli bir andaki verilerdir.')
mc('"Veri hakkındaki veri" (tablo adları, sütun tipleri, kısıtlar) için kullanılan terim hangisidir?', ['Metadata', 'Bilgi', 'Kayıt', 'İndeks', 'Tetikleyici'],
   'Metadata VTYS\'nin veri sözlüğünde (katalog) tutulur.')
mc('SQL\'in açılımı hangisidir?', ['Structured Query Language', 'Simple Query Logic', 'Standard Question Language', 'System Query List', 'Sequential Query Language'],
   'Yapılandırılmış Sorgu Dili.')
match('Kavramları eşleştirin.', [
    ['Veri', 'Ham, işlenmemiş gerçekler'],
    ['Bilgi', 'İşlenmiş, anlam kazanmış veri'],
    ['VTYS', 'Veri tabanını yöneten yazılım'],
    ['Şema', 'Veri tabanının yapısı']],
   'Veri → bilgi; VTYS yazılımdır; şema yapıdır.')
match('Araçları rolleriyle eşleştirin.', [
    ['MySQL', 'İlişkisel VTYS'],
    ['phpMyAdmin', 'MySQL\'i tarayıcıdan yöneten arayüz'],
    ['MAMP', 'Apache + MySQL + PHP yerel sunucu paketi'],
    ['MongoDB', 'NoSQL belge veri tabanı']],
   'Derste MAMP içinde gelen phpMyAdmin ile MySQL kullanıldı.')

# ===================================================================== 2. İlişkisel model
topic('iliskisel')
mc('İlişkisel modelde bir tablonun **satırına** ne ad verilir?', ['Demet (tuple) / kayıt', 'Nitelik', 'Alan (domain)', 'Derece', 'Şema'],
   'Satır = kayıt (tuple), sütun = nitelik (attribute).')
mc('İlişkisel modelde **sütun** için kullanılan terim hangisidir?', ['Nitelik (attribute)', 'Demet (tuple)', 'Kardinalite', 'İlişki (relation)', 'Instance'],
   'Sütun = nitelik/alan.')
mc('Bir sütunun alabileceği değerler kümesine ne denir?', ['Alan (domain)', 'Derece', 'Kardinalite', 'Anahtar', 'Şema'],
   'Örneğin harf_notu için {AA, BA, BB, …} kümesi.')
mc('4 sütunlu ve 6 satırlı bir tablonun **derecesi** kaçtır?', ['4', '6', '10', '24', '2'],
   'Derece = sütun sayısı; kardinalite = satır sayısı (6).')
mc('6 satır, 4 sütunlu bir tablonun **kardinalitesi** kaçtır?', ['6', '4', '10', '24', '1'],
   'Kardinalite = satır (kayıt) sayısı.')
mc('Birincil anahtar (PRIMARY KEY) için hangisi doğrudur?', ['Değerleri tekrar edemez ve NULL olamaz', 'NULL olabilir ama tekrar edemez', 'Tekrar edebilir ama NULL olamaz', 'Bir tabloda en çok iki tane olabilir', 'Sadece metin sütunlarda kullanılır'],
   'Varlık bütünlüğü kuralı: PK benzersiz ve NULL değil.', why={1: 'Bu UNIQUE kısıtının özelliği.'})
mc('Başka bir tablonun birincil anahtarına başvurarak iki tabloyu bağlayan sütun hangisidir?', ['Yabancı anahtar (FOREIGN KEY)', 'Aday anahtar', 'Süper anahtar', 'Alternatif anahtar', 'Bileşik anahtar'],
   'ders.bolum_no → bolum.bolum_no gibi.')
mc('Bir satırı benzersiz belirleyebilen, fazlası olmayan en küçük sütun kümesine ne denir?', ['Aday anahtar', 'Süper anahtar', 'Yabancı anahtar', 'Bileşik nitelik', 'İndeks'],
   'Aday anahtarlardan biri PK seçilir; diğerleri alternatif anahtardır.')
mc('Aday anahtarlardan birincil anahtar olarak **seçilmeyenlere** ne denir?', ['Alternatif anahtar', 'Yabancı anahtar', 'Süper anahtar', 'Bileşik anahtar', 'Yapay anahtar'],
   'Örn. ogrenci_no PK seçilirse eposta alternatif anahtar olur.')
mc('`ders_kaydi` tablosunda `(ogrenci_no, ders_kodu)` birlikte birincil anahtardır. Bu ne tür anahtardır?', ['Bileşik (composite) anahtar', 'Yabancı anahtar', 'Alternatif anahtar', 'Tekil anahtar', 'Süper anahtar değildir'],
   'Birden çok sütundan oluşan anahtar bileşik anahtardır.')
mc('Yabancı anahtardaki değerin başvurduğu tabloda bulunması gerektiğini söyleyen kural hangisidir?', ['Referans bütünlüğü', 'Varlık bütünlüğü', 'Alan bütünlüğü', 'Normalizasyon', 'Eşzamanlılık'],
   'Olmayan bir bolum_no ile ders eklenemez.')
mc('Birincil anahtarın NULL olamayacağını söyleyen kural hangisidir?', ['Varlık bütünlüğü', 'Referans bütünlüğü', 'Alan bütünlüğü', '1NF', 'Kardinalite kuralı'],
   'Entity integrity.')
mc('NULL için hangisi doğrudur?', ['Değerin bilinmediğini ya da olmadığını gösterir', '0 ile aynıdır', 'Boş metin (\'\') ile aynıdır', 'Sadece sayı sütunlarında olur', 'Her zaman hata demektir'],
   'NULL bir değer değil, değerin yokluğudur.')
mc('Bir bölüm birçok ders açar, her ders tek bir bölüme aittir. Bu ilişkinin türü nedir?', ['1:N (bire çok)', '1:1 (bire bir)', 'M:N (çoka çok)', 'N:1 değil, M:N', 'İlişki yoktur'],
   'Bölüm (1) — Ders (N).')
mc('1:N ilişkide yabancı anahtar hangi tabloya eklenir?', ['N (çok) tarafındaki tabloya', '1 tarafındaki tabloya', 'İki tabloya da', 'Ara tabloya', 'Hiçbirine, ilişki şemada tutulur'],
   'ders tablosuna bolum_no eklenir; bolum tablosuna ders_kodu konmaz.', why={1: 'Bir bölümün çok dersi var; tek sütuna sığmaz.'})
mc('Derste 1:1 ilişkide `ogrenci_karti.ogrenci_no` sütununa NOT NULL dışında hangi kısıt eklendi?', ['UNIQUE', 'AUTO_INCREMENT', 'DEFAULT 0', 'CHECK', 'INDEX'],
   'UNIQUE sayesinde bir öğrencinin ikinci kartı olamaz; ilişki 1:1 kalır.')
mc('Öğrenciler birçok derse, derslere birçok öğrenci kaydolur. Bu ilişki tablolara nasıl aktarılır?', ['Ara tablo (ders_kaydi) kurulur, iki tablonun PK\'leri burada FK olur', 'ogrenci tablosuna ders_kodu eklenir', 'ders tablosuna ogrenci_no eklenir', 'İki tablo tek tabloda birleştirilir', 'ogrenci_no UNIQUE yapılır'],
   'M:N ilişki ara (bağlantı) tablo ile çözülür.')
mc('Chen gösterimli ER diyagramında **varlık** hangi şekille çizilir?', ['Dikdörtgen', 'Elips', 'Eşkenar dörtgen (baklava)', 'Daire', 'Ok'],
   'Dikdörtgen = varlık (tablo).')
mc('ER diyagramında **nitelik** (sütun) hangi şekille gösterilir?', ['Elips', 'Dikdörtgen', 'Baklava', 'Üçgen', 'Paralelkenar'],
   'Elips = nitelik; PK olanın altı çizilir.')
mc('ER diyagramında **ilişki** hangi şekille gösterilir?', ['Eşkenar dörtgen (baklava)', 'Elips', 'Dikdörtgen', 'Çift çizgi', 'Altıgen'],
   'Derste çizilen "Relationship" ve "BolumDers" baklavaları.')
mc('ER diyagramında bir niteliğin **altının çizili** olması neyi gösterir?', ['Birincil anahtar olduğunu', 'Yabancı anahtar olduğunu', 'NULL olabileceğini', 'Türetilmiş nitelik olduğunu', 'Silineceğini'],
   'Altı çizili nitelik = PK.')
mc('Her hücrede tek (atomik) değer bulunmasını şart koşan normal form hangisidir?', ['1NF', '2NF', '3NF', 'BCNF', '4NF'],
   '`telefonlar = "0532.., 0505.."` gibi çok değerli hücre 1NF\'yi bozar.')
mc('Anahtar olmayan bir sütunun başka bir anahtar olmayan sütuna bağlı olması (geçişli bağımlılık) hangi normal formda giderilir?', ['3NF', '1NF', '2NF', '0NF', 'Hiçbiri'],
   '3NF geçişli bağımlılığı kaldırır; 2NF kısmi bağımlılığı.')
mc('Normalizasyonun temel amacı hangisidir?', ['Veri tekrarını ve güncelleme anomalilerini azaltmak', 'Sorguları yavaşlatmak', 'Tablo sayısını bire indirmek', 'Bütün sütunları NULL yapmak', 'Yabancı anahtarları kaldırmak'],
   'Ekleme, silme, güncelleme anomalileri azalır.')
match('İlişki türünü tabloya dönüştürme yöntemiyle eşleştirin.', [
    ['1:1', 'FK eklenir ve UNIQUE yapılır'],
    ['1:N', 'FK çok tarafına eklenir'],
    ['M:N', 'Ara tablo kurulur'],
    ['Bileşik PK', 'Birden çok sütun birlikte anahtar olur']],
   'Derste: ogrenci_karti (1:1), ders (1:N), ders_kaydi (M:N).')
match('ER diyagramı şekillerini anlamlarıyla eşleştirin.', [
    ['Dikdörtgen', 'Varlık (tablo)'],
    ['Elips', 'Nitelik (sütun)'],
    ['Eşkenar dörtgen', 'İlişki'],
    ['Altı çizili nitelik', 'Birincil anahtar']],
   'Chen gösterimi.')
match('Terimleri eşleştirin.', [
    ['Demet (tuple)', 'Satır'],
    ['Nitelik', 'Sütun'],
    ['Derece', 'Sütun sayısı'],
    ['Kardinalite', 'Satır sayısı']],
   'İlişkisel modelin temel terimleri.')

# ===================================================================== 3. SQL'e giriş
topic('sql-giris')
mc('`CREATE`, `ALTER`, `DROP` komutları hangi SQL alt diline aittir?', ['DDL', 'DML', 'DCL', 'TCL', 'DQL'], 'Data Definition Language: yapıyı tanımlar.')
mc('`INSERT`, `UPDATE`, `DELETE` komutları hangi alt dile aittir?', ['DML', 'DDL', 'DCL', 'TCL', 'Hiçbiri'], 'Data Manipulation Language: veriyi değiştirir.')
mc('`GRANT` ve `REVOKE` hangi alt dile aittir?', ['DCL', 'DDL', 'DML', 'TCL', 'DQL'], 'Data Control Language: yetki verme/geri alma.')
mc('`COMMIT` ve `ROLLBACK` hangi alt dile aittir?', ['TCL', 'DCL', 'DML', 'DDL', 'DQL'], 'Transaction Control Language.')
mc('Hangisi **DDL** komutudur?', ['TRUNCATE', 'DELETE', 'UPDATE', 'INSERT', 'SELECT'], 'TRUNCATE veriyi silse de tabloyu yeniden oluşturduğu için DDL sayılır.', why={1: 'DELETE DML\'dir.'})
mc('Derste `CREATE TABLE` çalıştırılırken **#1046 No database selected** hatası alındı. Sebebi nedir?', ['Komuttan önce veri tabanı seçilmemiş (USE yapılmamış)', 'Tablo adı Türkçe karakter içeriyor', 'PRIMARY KEY yazılmamış', 'utf8mb4 desteklenmiyor', 'Sütun tipi hatalı'],
   'Çözüm: `USE okul_db;` ya da phpMyAdmin\'de soldan veri tabanını seçmek.')
mc('`CREATE DATABASE IF NOT EXISTS okul_db` ifadesinde `IF NOT EXISTS` ne işe yarar?', ['Veri tabanı zaten varsa hata vermeden atlar', 'Veri tabanını siler ve yeniden kurar', 'Sadece tablo yoksa çalışır', 'Veri tabanını gizler', 'Veri tabanını salt okunur yapar'],
   'Var olan veri tabanı için "already exists" hatasını engeller.')
mc('Türkçe karakterlerin doğru saklanması ve Türkçe sıralama için derste hangi ayar kullanıldı?', ['CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci', 'CHARACTER SET latin1', 'COLLATE ascii_bin', 'ENGINE=MyISAM', 'DEFAULT CHARSET=ucs2'],
   'utf8mb4 = tam Unicode; turkish_ci = Türkçe karşılaştırma, büyük/küçük harf duyarsız.')
mc('`utf8mb4_turkish_ci` içindeki **ci** ne demektir?', ['Case insensitive: büyük/küçük harf duyarsız', 'Character index', 'Country identifier', 'Compressed index', 'Case important'],
   '`_cs` duyarlı, `_ci` duyarsız karşılaştırma.')
mc('Para tutarı (örn. 1250.00) için en uygun veri tipi hangisidir?', ['DECIMAL(10,2)', 'FLOAT', 'VARCHAR(10)', 'INT', 'DATE'],
   'DECIMAL tam hassastır; FLOAT yuvarlama hatası yapabilir.')
mc('`DECIMAL(10,2)` tipinde en büyük değer hangisi olabilir?', ['99999999.99', '9999999999.99', '9999999999', '99.99', '10.2'],
   'Toplam 10 basamak, 2\'si virgülden sonra: 8 + 2.')
mc('`VARCHAR(50)` ile `CHAR(50)` farkı nedir?', ['VARCHAR girilen uzunluk kadar, CHAR her zaman sabit uzunlukta yer kaplar', 'CHAR daha uzun metin tutar', 'VARCHAR sadece sayı tutar', 'İkisi tamamen aynıdır', 'CHAR NULL olamaz'],
   'Harf notu gibi hep 2 karakterlik değerler için CHAR(2) uygundur.')
mc('Değer verilmeyen satırlarda sütuna otomatik değer koyan kısıt hangisidir?', ['DEFAULT', 'UNIQUE', 'NOT NULL', 'CHECK', 'PRIMARY KEY'], '`stok INT NOT NULL DEFAULT 0` gibi.')
mc('Her yeni satırda 1, 2, 3… diye kendiliğinden artan sütun için hangisi kullanılır?', ['AUTO_INCREMENT', 'DEFAULT 1', 'SERIAL KEY', 'INCREMENT BY', 'NEXTVAL'], 'MySQL\'de AUTO_INCREMENT, genelde PK ile.')
mc('UNIQUE kısıtı için hangisi doğrudur?', ['Değerler tekrar edemez, NULL olabilir; bir tabloda birden çok olabilir', 'NULL olamaz', 'Tabloda sadece bir tane olabilir', 'PRIMARY KEY ile tamamen aynıdır', 'Sadece metin sütunlarda kullanılır'],
   'PK\'den farkı NULL\'a izin vermesi ve birden çok tanımlanabilmesi.')
mc('Aşağıdaki tablo oluşturulduktan sonra hangi INSERT **hata verir**?',
   ['INSERT INTO bolum VALUES (1, \'Muhasebe\');', 'INSERT INTO bolum VALUES (2, \'Muhasebe\');', 'INSERT INTO bolum VALUES (3, \'Turizm\');', 'INSERT INTO bolum (bolum_no, bolum_adi) VALUES (4, \'Spor\');', 'Hiçbiri'],
   'bolum_no = 1 zaten var; PK tekrar edemez (#1062 Duplicate entry).',
   code="""CREATE TABLE bolum (bolum_no INT PRIMARY KEY, bolum_adi VARCHAR(100) NOT NULL);
INSERT INTO bolum VALUES (1, 'Bilgisayar Programcılığı');""",
   sql="""CREATE TABLE bolum (bolum_no INT PRIMARY KEY, bolum_adi VARCHAR(100) NOT NULL);
INSERT INTO bolum VALUES (1, 'Bilgisayar Programcılığı');
INSERT INTO bolum VALUES (1, 'Muhasebe');""", mode='err')
mc('`ders` tablosunda `bolum_no` FK\'dir ve `bolum` tablosunda sadece 1, 2, 3, 4 numaraları vardır. `INSERT INTO ders VALUES (401, \'Turizm Coğrafyası\', 3, 5);` çalıştırılırsa ne olur?',
   ['Hata: yabancı anahtar kısıtı ihlali (#1452)', 'Satır eklenir, bolum_no NULL olur', 'Satır eklenir ve 5 numaralı bölüm otomatik oluşur', 'Satır eklenir, uyarı verilmez', 'Tablo silinir'],
   'Referans bütünlüğü: bölüm 5 yok, ders eklenemez.',
   sql="INSERT INTO ders VALUES (401, 'Turizm Coğrafyası', 3, 5);", mode='err', db='okul_db')
mc('`ders_kaydi` tablosunun birincil anahtarı `(ogrenci_no, ders_kodu)`dur. Aynı öğrenciyi aynı derse ikinci kez kaydetmek istersek ne olur?',
   ['Hata: Duplicate entry (birincil anahtar tekrarı)', 'İkinci kayıt eklenir', 'Eski kayıt silinir, yenisi eklenir', 'harf_notu NULL olur', 'Uyarı verilip eklenir'],
   'Bileşik PK, aynı (öğrenci, ders) çiftinin tekrarını engeller.',
   sql="INSERT INTO ders_kaydi VALUES (20250101, 101, '2025-10-01', 'BB');", mode='err', db='okul_db', code="INSERT INTO ders_kaydi VALUES (20250101, 101, '2025-10-01', 'BB');  -- 20250101 zaten 101'e kayıtlı")
mc('`ogrenci_karti.ogrenci_no` UNIQUE\'tir. 20250101 numaralı öğrencinin zaten kartı varken ikinci kart eklenirse ne olur?',
   ['Hata: Duplicate entry (UNIQUE ihlali)', 'Kart eklenir', 'Eski kart güncellenir', 'Öğrenci silinir', 'İlişki 1:N\'ye dönüşür'],
   'UNIQUE kısıtı 1:1 ilişkiyi korur.',
   sql="INSERT INTO ogrenci_karti VALUES (5009, 20250101, '2026-01-01', '2028-01-01');", mode='err', db='okul_db')
mc('Ana tablodaki satır silindiğinde ona bağlı satırların da otomatik silinmesi için FK\'ye ne eklenir?', ['ON DELETE CASCADE', 'ON DELETE RESTRICT', 'ON DELETE SET NULL', 'ON UPDATE NO ACTION', 'DROP CASCADE'],
   'Derste müşteri silinince siparişlerinin de silinmesi için kullanıldı.')
mc('FK tanımında `ON DELETE` belirtilmezse MySQL ne yapar?', ['Bağlı satır varken ana satırın silinmesine izin vermez (RESTRICT)', 'Bağlı satırları da siler', 'Bağlı satırların FK\'sini NULL yapar', 'FK\'yi kaldırır', 'Uyarı verip siler'],
   'Varsayılan davranış RESTRICT / NO ACTION.')
mc('`bolum` tablosundan 1 numaralı bölüm silinmek istendi; `ders` tablosunda bu bölüme ait dersler var ve FK\'de ON DELETE yazılmamış. Sonuç?',
   ['Hata: bağlı satır olduğu için silinemez', 'Bölüm ve dersleri silinir', 'Bölüm silinir, derslerin bolum_no\'su NULL olur', 'Sadece dersler silinir', 'Bölüm silinir, dersler değişmez'],
   'Varsayılan RESTRICT: önce bağlı satırlar silinmeli.',
   sql="DELETE FROM bolum WHERE bolum_no = 1;", mode='err', db='okul_db')
mc('Var olan `ogrenci` tablosuna `telefon` sütunu eklemek için hangi komut kullanılır?', ['ALTER TABLE ogrenci ADD telefon VARCHAR(15);', 'UPDATE ogrenci ADD telefon VARCHAR(15);', 'INSERT INTO ogrenci telefon VARCHAR(15);', 'CREATE COLUMN telefon ON ogrenci;', 'MODIFY TABLE ogrenci telefon;'],
   'Yapı değişikliği ALTER TABLE ile yapılır.',
   sql="ALTER TABLE ogrenci ADD telefon VARCHAR(15);", mode='ok', code=None,
   setup="CREATE TABLE ogrenci (ogrenci_no INT PRIMARY KEY, ad VARCHAR(50) NOT NULL);")
mc('Bir sütunun **veri tipini** değiştirmek için hangisi kullanılır?', ['ALTER TABLE ogrenci MODIFY eposta VARCHAR(150);', 'UPDATE ogrenci SET eposta VARCHAR(150);', 'ALTER TABLE ogrenci RENAME eposta;', 'CHANGE TYPE eposta TO VARCHAR(150);', 'DROP eposta VARCHAR(150);'],
   'MODIFY tipi değiştirir; CHANGE hem adı hem tipi değiştirebilir.')
mc('Tabloyu yapısıyla birlikte tamamen kaldıran komut hangisidir?', ['DROP TABLE', 'DELETE FROM', 'TRUNCATE TABLE', 'ALTER TABLE … DROP', 'REMOVE TABLE'],
   'TRUNCATE ve DELETE satırları siler, tablo yapısı kalır.')
mc('Tablodaki **bütün satırları** silip yapıyı koruyan ve AUTO_INCREMENT sayacını sıfırlayan komut hangisidir?', ['TRUNCATE TABLE', 'DROP TABLE', 'DELETE TABLE', 'ALTER TABLE … RESET', 'CLEAR TABLE'],
   'TRUNCATE hızlıdır, WHERE almaz.')
mc('`UPDATE ogrenci SET soyad = \'Kaya\';` komutu (WHERE yok) ne yapar?', ['Bütün öğrencilerin soyadını Kaya yapar', 'Sadece ilk öğrenciyi değiştirir', 'Hata verir', 'Hiçbir şey yapmaz', 'Yeni bir satır ekler'],
   'WHERE yoksa tablodaki tüm satırlar güncellenir.')
mc('Aşağıdaki komutlardan sonra `bolum` tablosunda kaç satır kalır?', ['2', '3', '4', '1', '0'],
   'İki satır eklenir, biri eklenir (3), biri silinir (2).',
   sql="""CREATE TABLE bolum (bolum_no INT PRIMARY KEY, bolum_adi VARCHAR(100) NOT NULL);
INSERT INTO bolum VALUES (1, 'Bilgisayar'), (2, 'Grafik');
INSERT INTO bolum VALUES (3, 'Muhasebe');
DELETE FROM bolum WHERE bolum_no = 2;
SELECT COUNT(*) FROM bolum;""", mode='val',
   code="""CREATE TABLE bolum (bolum_no INT PRIMARY KEY, bolum_adi VARCHAR(100) NOT NULL);
INSERT INTO bolum VALUES (1, 'Bilgisayar'), (2, 'Grafik');
INSERT INTO bolum VALUES (3, 'Muhasebe');
DELETE FROM bolum WHERE bolum_no = 2;""")
mc('Aşağıdaki tabloya `INSERT INTO urun (ad) VALUES (\'Kalem\');` ile bir satır eklendiğinde `stok` değeri ne olur?', ['0', 'NULL', 'Hata verir', '1', 'Boş metin'],
   'Değer verilmeyen sütuna DEFAULT değeri yazılır.',
   sql="""CREATE TABLE urun (id INT AUTO_INCREMENT PRIMARY KEY, ad VARCHAR(50) NOT NULL, stok INT NOT NULL DEFAULT 0);
INSERT INTO urun (ad) VALUES ('Kalem');
SELECT stok FROM urun;""", mode='val',
   code="CREATE TABLE urun (\n  id   INT AUTO_INCREMENT PRIMARY KEY,\n  ad   VARCHAR(50) NOT NULL,\n  stok INT NOT NULL DEFAULT 0\n);")
mc('Aynı tabloya üç satır `INSERT INTO urun (ad) VALUES (\'A\'), (\'B\'), (\'C\');` ile eklenirse son satırın `id` değeri kaç olur?', ['3', '1', '0', 'NULL', '2'],
   'AUTO_INCREMENT 1\'den başlayıp birer artar.',
   sql="""CREATE TABLE urun (id INT AUTO_INCREMENT PRIMARY KEY, ad VARCHAR(50) NOT NULL, stok INT NOT NULL DEFAULT 0);
INSERT INTO urun (ad) VALUES ('A'), ('B'), ('C');
SELECT MAX(id) FROM urun;""", mode='val',
   code="CREATE TABLE urun (\n  id   INT AUTO_INCREMENT PRIMARY KEY,\n  ad   VARCHAR(50) NOT NULL,\n  stok INT NOT NULL DEFAULT 0\n);")
mc('`INSERT INTO ogrenci (ogrenci_no, soyad) VALUES (20250199, \'Ak\');` neden hata verir? (ad sütunu `VARCHAR(50) NOT NULL`)', ['ad sütunu NOT NULL ve değer verilmedi', 'ogrenci_no tekrar ediyor', 'Soyad çok kısa', 'Sütun listesi yazılamaz', 'eposta zorunlu'],
   'NOT NULL ve DEFAULT\'u olmayan sütuna değer verilmeli.',
   sql="INSERT INTO ogrenci (ogrenci_no, soyad) VALUES (20250199, 'Ak');", mode='err', db='okul_db', code=None)
fill('Boşluğu doldurun: veri tabanını seçin.', '____ okul_db;', ['USE'], 'USE ile komutların çalışacağı veri tabanı seçilir.', run=False)
fill('Boşluğu doldurun: birincil anahtar.', 'CREATE TABLE bolum (\n  bolum_no  INT ____,\n  bolum_adi VARCHAR(100) NOT NULL\n);', ['PRIMARY KEY'], 'PRIMARY KEY tekrar etmez, NULL olmaz.')
fill('Boşluğu doldurun: yabancı anahtarın başvurduğu tablo.', 'CREATE TABLE ders (\n  ders_kodu INT PRIMARY KEY,\n  ders_adi  VARCHAR(100) NOT NULL,\n  bolum_no  INT NOT NULL,\n  FOREIGN KEY (bolum_no) ____ bolum(bolum_no)\n);', ['REFERENCES'],
     'FOREIGN KEY (sütun) REFERENCES tablo(sütun).', setup="CREATE TABLE bolum (bolum_no INT PRIMARY KEY, bolum_adi VARCHAR(100) NOT NULL);")
fill('Boşluğu doldurun: 1:1 ilişki için kart tablosunda aynı öğrenci iki kez olmamalı.', 'CREATE TABLE ogrenci_karti (\n  kart_no    INT PRIMARY KEY,\n  ogrenci_no INT NOT NULL ____\n);', ['UNIQUE'],
     'UNIQUE ile her öğrencinin en fazla bir kartı olur.')
fill('Boşluğu doldurun: sayı her satırda kendiliğinden artsın.', 'CREATE TABLE musteri (\n  musteri_no  INT ____ PRIMARY KEY,\n  musteri_adi VARCHAR(100)\n);', ['AUTO_INCREMENT'], 'AUTO_INCREMENT.')
fill('Boşluğu doldurun: tabloya yeni satır ekleyin.', "____ INTO bolum (bolum_no, bolum_adi) VALUES (5, 'Spor');", ['INSERT'], 'INSERT INTO … VALUES.', db='okul_db')
fill('Boşluğu doldurun: 102 kodlu dersin kredisini 5 yapın.', 'UPDATE ders ____ kredi = 5 WHERE ders_kodu = 102;', ['SET'], 'UPDATE tablo SET sütun = değer WHERE koşul.', db='okul_db')
fill('Boşluğu doldurun: notu girilmemiş kayıtları silin.', 'DELETE ____ ders_kaydi WHERE harf_notu IS NULL;', ['FROM'], 'DELETE FROM tablo WHERE koşul.', db='okul_db')
fill('Boşluğu doldurun: var olan tabloya sütun ekleyin.', '____ TABLE ogrenci ADD telefon VARCHAR(15);', ['ALTER'], 'ALTER TABLE.',
     setup="CREATE TABLE ogrenci (ogrenci_no INT PRIMARY KEY, ad VARCHAR(50) NOT NULL);")
fill('Boşluğu doldurun: müşteri silinince siparişleri de silinsin.', 'CREATE TABLE siparis (\n  siparis_no INT PRIMARY KEY,\n  musteri_no INT,\n  FOREIGN KEY (musteri_no) REFERENCES musteri(musteri_no)\n    ON DELETE ____\n);', ['CASCADE'],
     'ON DELETE CASCADE.', setup="CREATE TABLE musteri (musteri_no INT PRIMARY KEY);")
match('Komutları SQL alt dilleriyle eşleştirin.', [
    ['CREATE TABLE', 'DDL'], ['INSERT INTO', 'DML'], ['GRANT', 'DCL'], ['ROLLBACK', 'TCL']],
   'DDL yapı, DML veri, DCL yetki, TCL işlem.')
match('Kısıtları anlamlarıyla eşleştirin.', [
    ['PRIMARY KEY', 'Tekrar etmez, NULL olmaz'], ['UNIQUE', 'Tekrar etmez, NULL olabilir'], ['NOT NULL', 'Boş bırakılamaz'], ['DEFAULT', 'Değer verilmezse varsayılanı yazar']],
   'Kısıtlar CREATE TABLE içinde sütunun yanına yazılır.')
match('Silme komutlarını eşleştirin.', [
    ['DELETE FROM t WHERE …', 'Koşula uyan satırları siler (DML)'], ['TRUNCATE TABLE t', 'Bütün satırları siler, yapı kalır (DDL)'], ['DROP TABLE t', 'Tabloyu yapısıyla siler'], ['ALTER TABLE t DROP COLUMN c', 'Bir sütunu siler']],
   'DELETE WHERE alabilir; TRUNCATE ve DROP almaz.')
match('Veri tiplerini kullanım yerleriyle eşleştirin.', [
    ['DECIMAL(10,2)', 'Fiyat, tutar'], ['VARCHAR(100)', 'Ad, e-posta'], ['DATE', 'Kayıt tarihi'], ['CHAR(2)', 'Harf notu (AA, BA…)']],
   'Para için DECIMAL, sabit uzunluklu kısa kod için CHAR.')

# ===================================================================== 4. Sorgular
topic('sorgular')
OG = okul('ogrenci'); DE = okul('ders'); DK = okul('ders_kaydi')
mc('Aşağıdaki sorgu kaç satır döndürür?', ['3', '2', '4', '6', '0'], '20250104, 20250105, 20250106: 3 öğrenci.',
   sql="SELECT ad FROM ogrenci WHERE ogrenci_no > 20250103;", mode='n', db='okul_db', tables=OG)
mc('Sorgu sonucu hangisidir?', ['Mert, Kerem', 'Mert', 'Kerem', 'Ahmet, Mert, Kerem', 'Zehra, Deniz'], '%er% içinde "er" geçenler: M**er**t, K**er**em.',
   sql="SELECT ad FROM ogrenci WHERE ad LIKE '%er%' ORDER BY ogrenci_no;", mode='col', db='okul_db', tables=OG)
mc('Sorgu sonucu hangisidir?', ['Zehra', 'Ahmet, Zehra', 'Ahmet', 'Deniz', 'Hiçbiri'], "'%a' a ile biten adlar: Zehr**a**.",
   sql="SELECT ad FROM ogrenci WHERE ad LIKE '%a';", mode='col', db='okul_db', tables=OG)
mc('`ad LIKE \'_e%\'` koşulu hangi adları getirir?', ['Zehra, Mert, Deniz, Kerem', 'Mert, Deniz, Kerem', 'Ahmet, Zehra', 'Sadece Kerem', 'Zehra, İrem, Kerem'],
   '_ tam bir karakter: ikinci harfi e olanlar (Z**e**hra, M**e**rt, D**e**niz, K**e**rem). İrem\'in ikinci harfi r.',
   sql="SELECT ad FROM ogrenci WHERE ad LIKE '_e%' ORDER BY ogrenci_no;", mode='col', db='okul_db', tables=OG)
mc('Sorgu kaç satır döndürür?', ['4', '2', '3', '5', '6'], 'Bütün derslerin kredisi 3–4 aralığında (BETWEEN uçları dahil eder); bölüm 2\'nin iki dersi çıkınca 4 ders kalır.',
   sql="SELECT ders_adi FROM ders WHERE kredi BETWEEN 3 AND 4 AND bolum_no <> 2;", mode='n', db='okul_db', tables=DE)
mc('Sorgu sonucu kaç satırdır?', ['3', '0', '11', '8', '1'], 'NULL kontrolü IS NULL ile: 3 kaydın notu girilmemiş.',
   sql="SELECT ogrenci_no FROM ders_kaydi WHERE harf_notu IS NULL;", mode='n', db='okul_db', tables=DK)
mc('Sorgu kaç satır döndürür?', ['0', '3', '11', '8', 'Hata verir'], '`= NULL` hiçbir zaman doğru olmaz (UNKNOWN); hata vermez ama satır gelmez.',
   sql="SELECT ogrenci_no FROM ders_kaydi WHERE harf_notu = NULL;", mode='n', db='okul_db', tables=DK, why={1: 'IS NULL yazılsaydı 3 olurdu.'})
mc('Sorgu sonucu hangisidir?', ['3, 4', '4, 3', '3, 3, 3, 4, 4, 4', '3', '4'], 'DISTINCT tekrarları atar, ORDER BY artan sıralar.',
   sql="SELECT DISTINCT kredi FROM ders ORDER BY kredi;", mode='col', db='okul_db', tables=DE)
mc('Sorgunun döndürdüğü **ilk** ders hangisidir?', ['Genel Muhasebe', 'Veritabanı Yönetim Sistemleri', 'Web Programlama', 'Tipografi', 'Dijital Fotoğrafçılık'],
   'Önce kredi azalan (4\'lüler), eşitlerde ad artan: Genel Muhasebe < Veritabanı… < Web….',
   sql="SELECT ders_adi FROM ders ORDER BY kredi DESC, ders_adi ASC LIMIT 1;", mode='val', db='okul_db', tables=DE)
mc('Sorgu sonucu hangisidir?', ['102, 103', '101, 102', '103, 201', '101', '102'], 'LIMIT 1, 2: 1 satır atla, 2 satır getir (ders_kodu sırasıyla 102 ve 103).',
   sql="SELECT ders_kodu FROM ders ORDER BY ders_kodu LIMIT 1, 2;", mode='col', db='okul_db', tables=DE)
mc('Sorgu sonucu hangisidir?', ['101, 201', '101', '201', '101, 102, 201', 'Hata verir'], 'IN listedeki değerlerden biriyle eşleşenler.',
   sql="SELECT ders_kodu FROM ders WHERE ders_kodu IN (101, 201, 999) ORDER BY ders_kodu;", mode='col', db='okul_db', tables=DE)
mc('`SELECT ad AS isim FROM ogrenci;` sorgusunda `AS` ne yapar?', ['Sonuçtaki sütuna "isim" takma adını verir', 'ad sütununun adını kalıcı olarak değiştirir', 'Yeni bir sütun ekler', 'Sıralama yapar', 'Hata verir'],
   'Takma ad sadece sorgu sonucunda görünür; tablo değişmez.')
mc('Hangi koşul "kredisi 3 **olmayan**" dersleri getirir?', ['kredi <> 3', 'kredi =! 3', 'kredi NOT 3', 'kredi IS NOT 3', 'kredi >< 3'], 'Eşit değil: `<>` ya da `!=`.')
mc('`WHERE bolum_no = 1 OR bolum_no = 2 AND kredi = 4` koşulunda önce hangisi işlenir?', ['AND', 'OR', 'Soldan sağa, önce OR', 'İkisi aynı anda', 'Parantez olmadan hata verir'],
   'AND\'in önceliği OR\'dan yüksektir; istenen bu değilse parantez kullanılır.')
mc('Sorgu sonucu kaç satırdır?', ['4', '3', '5', '6', '2'], 'AND önce işlenir: bölüm 1\'in 3 dersi + (bölüm 3 ve kredi 4) olan Genel Muhasebe = 4.',
   sql="SELECT ders_kodu FROM ders WHERE bolum_no = 1 OR bolum_no = 3 AND kredi = 4;", mode='n', db='okul_db', tables=DE)
mc('Alt sorgu ile Bilgisayar Programcılığı bölümünün derslerini getiren sorgu kaç satır döndürür?', ['3', '2', '6', '1', '0'], 'İç sorgu 1 döndürür; bolum_no = 1 olan 3 ders.',
   sql="""SELECT ders_adi FROM ders
WHERE bolum_no = (SELECT bolum_no FROM bolum WHERE bolum_adi = 'Bilgisayar Programcılığı');""", mode='n', db='okul_db', tables=okul('ders', 'bolum'))
mc('Sorgu sonucu hangisidir?', ['Kerem', 'Deniz, Kerem', 'Ahmet', 'İrem', 'Hiçbiri'], 'ders_kaydi\'nda hiç kaydı olmayan tek öğrenci 20250106 Kerem.',
   sql="SELECT ad FROM ogrenci WHERE ogrenci_no NOT IN (SELECT ogrenci_no FROM ders_kaydi);", mode='col', db='okul_db', tables=okul('ogrenci', 'ders_kaydi'))
mc('Sorgu sonucu kaç satırdır?', ['4', '3', '5', '11', '6'], '101 dersine kayıtlı öğrenciler: Ahmet, Zehra, Mert, Deniz.',
   sql="SELECT ad FROM ogrenci WHERE ogrenci_no IN (SELECT ogrenci_no FROM ders_kaydi WHERE ders_kodu = 101);", mode='n', db='okul_db', tables=okul('ogrenci', 'ders_kaydi'))
mc('Sorgu sonucu kaç satırdır?', ['3', '6', '2', '4', '0'], 'Ortalama kredi 3.5; 4 kredili 3 ders ortalamanın üstünde.',
   sql="SELECT ders_adi FROM ders WHERE kredi > (SELECT AVG(kredi) FROM ders);", mode='n', db='okul_db', tables=DE)
mc('Aşağıdaki sorgu neden **hata verir**?', ['Alt sorgu birden çok satır döndürüyor, = ile karşılaştırılamaz', 'Alt sorgu parantez içinde yazılamaz', 'ders_kaydi tablosu yok', 'WHERE alt sorguyla kullanılamaz', 'ad sütunu yok'],
   '#1242 Subquery returns more than 1 row. Çözüm: `IN`.',
   sql="SELECT ad FROM ogrenci WHERE ogrenci_no = (SELECT ogrenci_no FROM ders_kaydi WHERE ders_kodu = 101);", mode='err', db='okul_db')
mc('Çok satır döndüren bir alt sorguyla "listedekilerden biri mi?" kontrolü için hangisi kullanılır?', ['IN', '=', 'LIKE', 'BETWEEN', 'IS'], 'IN / NOT IN / EXISTS / ANY / ALL.')
mc('`EXISTS (alt sorgu)` ne zaman doğru olur?', ['Alt sorgu en az bir satır döndürürse', 'Alt sorgu NULL döndürürse', 'Alt sorgu tam bir satır döndürürse', 'Alt sorgu hata verirse', 'Dış tablo boşsa'],
   'Satırların içeriğine değil, varlığına bakar.')
mc('Sorgu sonucu kaç satırdır?', ['5', '6', '4', '1', '0'], 'En az bir ders kaydı olan öğrenciler: Kerem hariç 5.',
   sql="SELECT ad FROM ogrenci o WHERE EXISTS (SELECT 1 FROM ders_kaydi k WHERE k.ogrenci_no = o.ogrenci_no);", mode='n', db='okul_db', tables=okul('ogrenci', 'ders_kaydi'))
mc('Bir SELECT ifadesinde yazım sırası hangisidir?', ['SELECT … FROM … WHERE … ORDER BY … LIMIT', 'FROM … SELECT … WHERE … LIMIT', 'SELECT … WHERE … FROM … ORDER BY', 'SELECT … FROM … ORDER BY … WHERE', 'WHERE … SELECT … FROM'], 'WHERE FROM\'dan sonra, ORDER BY WHERE\'den sonra, LIMIT en sonda.')
fill('Boşluğu doldurun: notu girilmemiş kayıtlar.', 'SELECT * FROM ders_kaydi WHERE harf_notu ____;', ['IS NULL'], '`= NULL` çalışmaz; IS NULL yazılır.', db='okul_db',
     whyFill={'= NULL': '= NULL hiçbir satır getirmez.'})
fill('Boşluğu doldurun: tekrar edenleri bir kez göster.', 'SELECT ____ kredi FROM ders;', ['DISTINCT'], 'DISTINCT.', db='okul_db')
fill('Boşluğu doldurun: A ile başlayan adlar.', "SELECT * FROM ogrenci WHERE ad ____ 'A%';", ['LIKE'], 'LIKE desen arar; % herhangi sayıda karakter.', db='okul_db')
fill('Boşluğu doldurun: büyükten küçüğe sırala.', 'SELECT ders_adi, kredi FROM ders ORDER BY kredi ____;', ['DESC'], 'DESC azalan, ASC artan (varsayılan).', db='okul_db')
fill('Boşluğu doldurun: sadece ilk 3 satır.', 'SELECT * FROM ders ORDER BY ders_kodu ____ 3;', ['LIMIT'], 'MySQL\'de LIMIT (SQL Server\'da TOP).', db='okul_db')
fill('Boşluğu doldurun: 101 veya 102 dersine kayıtlı öğrenciler (alt sorgu).', 'SELECT ad FROM ogrenci\nWHERE ogrenci_no ____ (SELECT ogrenci_no FROM ders_kaydi WHERE ders_kodu IN (101, 102));', ['IN'],
     'Alt sorgu birden çok satır döndürür; = değil IN.', db='okul_db')
fill('Boşluğu doldurun: kredisi 3 ile 4 arasında (dahil).', 'SELECT ders_adi FROM ders WHERE kredi ____ 3 AND 4;', ['BETWEEN'], 'BETWEEN uçları dahil eder.', db='okul_db')
match('Operatörleri anlamlarıyla eşleştirin.', [
    ["LIKE 'A%'", 'A ile başlayan'], ['BETWEEN 3 AND 4', '3 ve 4 dahil aralık'], ['IN (101, 201)', 'Listedekilerden biri'], ['IS NULL', 'Değeri girilmemiş']],
   'WHERE koşulunda kullanılan operatörler.')
match('LIKE desenlerini eşleştirin.', [
    ["'%a'", 'a ile biten'], ["'a%'", 'a ile başlayan'], ["'%a%'", 'içinde a geçen'], ["'_a%'", 'ikinci harfi a olan']],
   '% = herhangi sayıda karakter, _ = tam bir karakter.')

# ===================================================================== 5. İleri SQL I
topic('ileri1')
mc('`COUNT(*)` ile `COUNT(harf_notu)` arasındaki fark nedir?', ['COUNT(*) tüm satırları, COUNT(harf_notu) NULL olmayanları sayar', 'İkisi her zaman aynı sonucu verir', 'COUNT(*) sadece NULL\'ları sayar', 'COUNT(harf_notu) tekrar edenleri saymaz', 'COUNT(*) hata verir'],
   'Toplama fonksiyonları (COUNT(*) hariç) NULL\'ları atlar.')
mc('Sorgu sonucu hangisidir? (`kayit | notu_olan`)', ['11 | 8', '11 | 11', '8 | 11', '8 | 8', '11 | 3'], '11 kayıt var, 3\'ünün notu NULL.',
   sql="SELECT CONCAT(COUNT(*), ' | ', COUNT(harf_notu)) FROM ders_kaydi;", code="SELECT COUNT(*) AS kayit, COUNT(harf_notu) AS notu_olan FROM ders_kaydi;", mode='val', db='okul_db', tables=DK)
mc('Sorgu sonucu kaçtır?', ['6', '11', '5', '4', '3'], 'COUNT(DISTINCT) farklı değerleri sayar: 101, 102, 103, 201, 202, 301.',
   sql="SELECT COUNT(DISTINCT ders_kodu) FROM ders_kaydi;", mode='val', db='okul_db', tables=DK)
mc('Sorgu sonucu kaçtır?', ['21', '6', '3.5000', '4', '24'], 'Kredilerin toplamı: 4+4+3+3+3+4 = 21.',
   sql="SELECT SUM(kredi) FROM ders;", mode='val', db='okul_db', tables=DE)
mc('Sorgu sonucu kaçtır?', ['3.5000', '3', '4', '21', '3.50'], 'AVG: 21 / 6 = 3.5. MySQL INT ortalamasını 4 ondalıkla gösterir.',
   sql="SELECT AVG(kredi) FROM ders;", mode='val', db='okul_db', tables=DE)
mc('Ürünlerin ortalama fiyatını 2 basamağa yuvarlamak için hangisi yazılır?', ['ROUND(AVG(fiyat), 2)', 'AVG(ROUND(fiyat))', 'ROUND(fiyat, 2) AVG', 'AVG(fiyat, 2)', 'FORMAT AVG(fiyat)'],
   'Uygulama soru 2.')
mc('Hangi sorgu **hata verir**?', ['SELECT sehir FROM musteriler WHERE COUNT(*) > 1;', 'SELECT sehir, COUNT(*) FROM musteriler GROUP BY sehir;', 'SELECT sehir, COUNT(*) FROM musteriler GROUP BY sehir HAVING COUNT(*) > 1;', 'SELECT COUNT(*) FROM musteriler;', 'SELECT sehir FROM musteriler WHERE sehir = \'İzmir\';'],
   'Toplama fonksiyonu WHERE\'de kullanılamaz (#1111 Invalid use of group function).',
   sql="SELECT sehir FROM musteriler WHERE COUNT(*) > 1;", mode='err', db='magaza', code=None)
mc('Toplama fonksiyonu içeren koşul (ör. `COUNT(*) > 1`) nereye yazılır?', ['HAVING', 'WHERE', 'ORDER BY', 'FROM', 'SELECT'], 'HAVING grupları süzer.')
mc('WHERE ile HAVING için hangisi doğrudur?', ['WHERE gruplamadan önce satırları, HAVING gruplamadan sonra grupları süzer', 'HAVING gruplamadan önce çalışır', 'İkisi aynı anda çalışır', 'HAVING sadece ORDER BY ile kullanılır', 'WHERE toplama fonksiyonu alır'],
   'Uygulamadaki kısa hatırlatma.')
mc('Doğru yazım sırası hangisidir?', ['SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY', 'SELECT, FROM, GROUP BY, WHERE, HAVING, ORDER BY', 'SELECT, FROM, WHERE, HAVING, GROUP BY, ORDER BY', 'SELECT, WHERE, FROM, GROUP BY, ORDER BY, HAVING', 'FROM, SELECT, WHERE, ORDER BY, GROUP BY, HAVING'],
   'Uygulama: SELECT … FROM … JOIN … WHERE … GROUP BY … HAVING … ORDER BY …')
mc('Mantıksal çalışma sırasında hangisi **en önce** işlenir?', ['FROM', 'SELECT', 'WHERE', 'GROUP BY', 'ORDER BY'], 'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.')
mc('`magaza` veri tabanında aşağıdaki sorgu kaç satır döndürür? (Şehirler: İzmir 3, İstanbul 3, Ankara 2, Gaziantep 1, Bursa 1 müşteri)', ['3', '5', '2', '10', '1'],
   'Birden fazla müşterisi olan şehirler: İzmir, İstanbul, Ankara (uygulama soru 7).',
   sql="SELECT sehir, COUNT(*) FROM musteriler GROUP BY sehir HAVING COUNT(*) > 1;", mode='n', db='magaza')
mc('`magaza` veri tabanında her şehirdeki müşteri sayısını veren sorgu (uygulama soru 3) kaç satır döndürür?', ['5', '10', '3', '1', '6'],
   '5 farklı şehir: İzmir, İstanbul, Ankara, Gaziantep, Bursa.',
   sql="SELECT sehir, COUNT(*) AS musteri_sayisi FROM musteriler GROUP BY sehir;", mode='n', db='magaza')
SIP = [tb('siparisler', ['siparis_id', 'musteri_id', 'durum'], [[1, 1, 'Teslim Edildi'], [2, 2, 'Teslim Edildi'], [3, 1, 'Kargoda'], [4, 3, 'İptal'], [5, 1, 'Teslim Edildi'], [6, 2, 'İptal']])]
mc('Sorgu sonucunda "Teslim Edildi" satırındaki sayı kaçtır?', ['3', '2', '6', '1', '4'], 'Durum bazında sayım (uygulama soru 4): Teslim Edildi 3, İptal 2, Kargoda 1.',
   sql="SELECT COUNT(*) FROM siparisler GROUP BY durum HAVING durum = 'Teslim Edildi';", code="SELECT durum, COUNT(*) AS adet\nFROM siparisler\nGROUP BY durum;", mode='val', tables=SIP)
mc('Sorgu kaç satır döndürür?', ['1', '2', '3', '0', '6'], 'Müşteri bazında sipariş sayıları: 1 → 3, 2 → 2, 3 → 1. En az 3 olan sadece müşteri 1.',
   sql="SELECT musteri_id, COUNT(*) AS n FROM siparisler GROUP BY musteri_id HAVING COUNT(*) >= 3;", mode='n', tables=SIP)
mc('Sorgu sonucu hangisidir?', ['1, 2', '1', '2, 3', '1, 2, 3', '3'], 'Önce WHERE iptalleri atar (4, 6). Kalan: müşteri 1 → 3, 2 → 1. HAVING COUNT >= 1: 1 ve 2.',
   sql="SELECT musteri_id FROM siparisler WHERE durum <> 'İptal' GROUP BY musteri_id HAVING COUNT(*) >= 1 ORDER BY musteri_id;", mode='col', tables=SIP)
DET = [tb('siparis_detay', ['siparis_id', 'urun_id', 'adet', 'birim_fiyat'], [[1, 1, 1, '1250.00'], [1, 8, 2, '320.00'], [2, 2, 1, '3400.00'], [3, 8, 3, '320.00'], [3, 9, 1, '410.00']])]
mc('Sorgu sonucunda 1 numaralı siparişin toplamı kaçtır?', ['1890.00', '1570.00', '1250.00', '3', '640.00'], 'Satır tutarı adet * birim_fiyat: 1·1250 + 2·320 = 1890.00 (uygulama soru 6).',
   sql="SELECT SUM(adet * birim_fiyat) FROM siparis_detay WHERE siparis_id = 1;", code="SELECT siparis_id, SUM(adet * birim_fiyat) AS toplam\nFROM siparis_detay\nGROUP BY siparis_id;", mode='val', tables=DET)
mc('Sorgu sonucu hangi ürün numaralarıdır?', ['8', '1, 8', '8, 9', '2', '1, 2, 8'], 'Ürün 8: 2 + 3 = 5 adet ≥ 3. Diğerleri 1 adet.',
   sql="SELECT urun_id FROM siparis_detay GROUP BY urun_id HAVING SUM(adet) >= 3;", mode='col', tables=DET)
mc('Sorgu sonucu kaçtır?', ['3400.00', '1250.00', '410.00', '320.00', '5380.00'], 'En büyük birim fiyat.',
   sql="SELECT MAX(birim_fiyat) FROM siparis_detay;", mode='val', tables=DET)
mc('`SELECT sehir, ad, COUNT(*) FROM musteriler GROUP BY sehir;` sorgusunun sorunu nedir?', ['ad sütunu GROUP BY\'da yok ve toplama fonksiyonu içinde değil', 'COUNT(*) GROUP BY ile kullanılamaz', 'sehir sütunu SELECT\'te olamaz', 'GROUP BY\'dan sonra WHERE gelmeli', 'Sorun yoktur'],
   'Bir şehirde birden çok ad var; hangisinin yazılacağı belli değil (ONLY_FULL_GROUP_BY hatası).',
   sql="SELECT sehir, ad, COUNT(*) FROM musteriler GROUP BY sehir;", mode='err', db='magaza', code=None,
   setup="SET SESSION sql_mode = 'ONLY_FULL_GROUP_BY';")
mc('Uygulama soru 10\'da (iptaller hariç, cirosu 5000 TL\'yi geçen şehirler) iptal edilen siparişler hangi bölümde elenir?', ['WHERE', 'HAVING', 'ORDER BY', 'GROUP BY', 'SELECT'],
   'İptal tek tek satırların özelliğidir, gruplamadan önce WHERE ile atılır; 5000 koşulu ise HAVING\'dedir.')
mc('`magaza` veri tabanında uygulama soru 10\'un sorgusu kaç şehir döndürür?', ['2', '3', '4', '5', '1'],
   'İstanbul (16579.70) ve İzmir (13014.20). Gaziantep (3899.00) ve Ankara (3500.00) 5000 TL\'nin altında kalır; Bursa\'dan sipariş yok.',
   sql="""SELECT m.sehir, SUM(d.adet * d.birim_fiyat) AS ciro
FROM musteriler m
JOIN siparisler s    ON s.musteri_id = m.musteri_id
JOIN siparis_detay d ON d.siparis_id = s.siparis_id
WHERE s.durum <> 'İptal'
GROUP BY m.sehir
HAVING SUM(d.adet * d.birim_fiyat) > 5000
ORDER BY ciro DESC;""", mode='n', db='magaza')
mc('Aynı sorguda (uygulama 10) ilk satırdaki şehir hangisidir?', ['İstanbul', 'İzmir', 'Ankara', 'Gaziantep', 'Bursa'], 'En yüksek ciro İstanbul\'da.',
   sql="""SELECT m.sehir
FROM musteriler m
JOIN siparisler s    ON s.musteri_id = m.musteri_id
JOIN siparis_detay d ON d.siparis_id = s.siparis_id
WHERE s.durum <> 'İptal'
GROUP BY m.sehir
HAVING SUM(d.adet * d.birim_fiyat) > 5000
ORDER BY SUM(d.adet * d.birim_fiyat) DESC LIMIT 1;""", mode='val', db='magaza', code="-- uygulama soru 10'un sorgusu, ORDER BY ciro DESC")
mc('`magaza` veri tabanında toplam kaç müşteri vardır? (uygulama soru 1)', ['10', '18', '9', '5', '30'], '`SELECT COUNT(*) FROM musteriler;`',
   sql="SELECT COUNT(*) FROM musteriler;", mode='val', db='magaza', code="SELECT COUNT(*) FROM musteriler;")
mc('`magaza` veri tabanında en az 2 sipariş vermiş müşteri sayısı kaçtır? (uygulama soru 8)', ['6', '3', '8', '10', '2'],
   'Ayşe 3, Mehmet 3, Zeynep 3, Elif 2, Can 2, Deniz 2 sipariş verdi.',
   sql="""SELECT COUNT(*) FROM (SELECT m.musteri_id FROM musteriler m JOIN siparisler s ON s.musteri_id = m.musteri_id
GROUP BY m.musteri_id HAVING COUNT(s.siparis_id) >= 2) x;""", mode='val', db='magaza',
   code="""SELECT m.ad, m.soyad, COUNT(s.siparis_id) AS siparis_sayisi
FROM musteriler m
JOIN siparisler s ON s.musteri_id = m.musteri_id
GROUP BY m.musteri_id, m.ad, m.soyad
HAVING COUNT(s.siparis_id) >= 2;""")
mc('`AVG` fonksiyonu NULL değerleri nasıl ele alır?', ['Hesaba katmaz; NULL olmayanların ortalamasını alır', '0 olarak sayar', 'Hata verir', 'Sonucu NULL yapar', 'En büyük değer yapar'],
   'Not: 10, NULL, 20 → AVG = 15, (10+0+20)/3 değil.')
NOTLAR = [tb('notlar', ['ogrenci', 'puan'], [['Ali', 10], ['Ayşe', None], ['Can', 20]])]
mc('Sorgu sonucu kaçtır?', ['15.0000', '10.0000', 'NULL', '30', '20.0000'], 'AVG NULL\'u atlar: (10 + 20) / 2.',
   sql="SELECT AVG(puan) FROM notlar;", mode='val', tables=NOTLAR)
mc('Sorgu sonucu (`a | b`) hangisidir?', ['3 | 2', '3 | 3', '2 | 2', '2 | 3', '3 | 0'], 'COUNT(*) 3 satır, COUNT(puan) NULL olmayan 2.',
   sql="SELECT CONCAT(COUNT(*), ' | ', COUNT(puan)) FROM notlar;", code="SELECT COUNT(*) AS a, COUNT(puan) AS b FROM notlar;", mode='val', tables=NOTLAR)
fill('Boşluğu doldurun: her şehirdeki müşteri sayısı.', 'SELECT sehir, COUNT(*) FROM musteriler ____ sehir;', ['GROUP BY'], 'GROUP BY aynı şehirleri bir grup yapar.', db='magaza')
fill('Boşluğu doldurun: birden fazla müşterisi olan şehirler.', 'SELECT sehir, COUNT(*) FROM musteriler\nGROUP BY sehir\n____ COUNT(*) > 1;', ['HAVING'], 'Toplama fonksiyonlu koşul HAVING\'e.', db='magaza',
     whyFill={'WHERE': 'WHERE\'de COUNT kullanılamaz ve GROUP BY\'dan sonra gelemez.'})
fill('Boşluğu doldurun: her siparişin toplam tutarı.', 'SELECT siparis_id, ____(adet * birim_fiyat) AS toplam\nFROM siparis_detay\nGROUP BY siparis_id;', ['SUM'], 'SUM toplar.', db='magaza')
fill('Boşluğu doldurun: ortalamayı 2 basamağa yuvarla.', 'SELECT ____(AVG(fiyat), 2) AS ortalama FROM urunler;', ['ROUND'], 'ROUND(x, 2).', db='magaza')
fill('Boşluğu doldurun: en pahalı ürünün fiyatı.', 'SELECT ____(fiyat) FROM urunler;', ['MAX'], 'MAX en büyük değeri döndürür.', db='magaza')
match('Fonksiyonları eşleştirin.', [
    ['COUNT(*)', 'Satır sayısı'], ['SUM(adet)', 'Toplam'], ['AVG(fiyat)', 'Ortalama'], ['MAX(fiyat)', 'En büyük değer']],
   'Toplama (aggregate) fonksiyonları her grup için tek değer üretir.')
match('Sorgu bölümlerini görevleriyle eşleştirin.', [
    ['WHERE', 'Gruplamadan önce satırları süzer'], ['GROUP BY', 'Aynı değerli satırları gruplar'], ['HAVING', 'Gruplamadan sonra grupları süzer'], ['ORDER BY', 'Sonucu sıralar']],
   'Uygulamadaki kısa hatırlatma.')

# ===================================================================== 6. İleri SQL II
topic('ileri2')
mc('`INNER JOIN` hangi satırları getirir?', ['Sadece iki tabloda da eşleşen satırları', 'Soldaki tablonun bütün satırlarını', 'Sağdaki tablonun bütün satırlarını', 'Her satırı her satırla', 'Eşleşmeyen satırları'],
   'Eşleşme yoksa satır sonuçta yer almaz.')
mc('`LEFT JOIN` hangi satırları getirir?', ['Soldaki tablonun bütün satırlarını; sağda eşleşme yoksa sağ sütunlar NULL', 'Sadece eşleşen satırları', 'Sağdaki tablonun bütün satırlarını', 'Sadece eşleşmeyenleri', 'Kartezyen çarpımı'],
   'Kartı olmayan öğrenciyi de listelemek için kullanıldı.')
mc('Sorgu kaç satır döndürür?', ['5', '6', '4', '30', '1'], 'Kerem\'in kartı yok; INNER JOIN onu getirmez.',
   sql="SELECT o.ad, k.kart_no FROM ogrenci o JOIN ogrenci_karti k ON k.ogrenci_no = o.ogrenci_no;", mode='n', db='okul_db', tables=okul('ogrenci', 'ogrenci_karti'))
mc('Sorgu kaç satır döndürür?', ['6', '5', '1', '30', '11'], 'LEFT JOIN soldaki 6 öğrencinin hepsini getirir; Kerem\'in kart_no\'su NULL.',
   sql="SELECT o.ad, k.kart_no FROM ogrenci o LEFT JOIN ogrenci_karti k ON k.ogrenci_no = o.ogrenci_no;", mode='n', db='okul_db', tables=okul('ogrenci', 'ogrenci_karti'))
mc('Sorgu sonucu hangisidir?', ['Kerem', 'Deniz', 'Ahmet', 'Kerem, Deniz', 'Boş sonuç'], 'LEFT JOIN + IS NULL: kartı olmayan öğrenci.',
   sql="SELECT o.ad FROM ogrenci o LEFT JOIN ogrenci_karti k ON k.ogrenci_no = o.ogrenci_no WHERE k.kart_no IS NULL;", mode='col', db='okul_db', tables=okul('ogrenci', 'ogrenci_karti'))
mc('Sorgu sonucu hangisidir?', ['Turizm ve Otel İşletmeciliği', 'Grafik Tasarımı', 'Muhasebe ve Vergi Uygulamaları', 'Bilgisayar Programcılığı', 'Boş sonuç'],
   'Hiç dersi olmayan bölüm: 4 numara.',
   sql="SELECT b.bolum_adi FROM bolum b LEFT JOIN ders d ON d.bolum_no = b.bolum_no WHERE d.ders_kodu IS NULL;", mode='col', db='okul_db', tables=okul('bolum', 'ders'))
mc('Sorgu kaç satır döndürür?', ['24', '10', '6', '4', '1'], 'CROSS JOIN kartezyen çarpım: 6 ders × 4 bölüm = 24.',
   sql="SELECT * FROM ders CROSS JOIN bolum;", mode='n', db='okul_db')
mc('MySQL\'de hangi JOIN türü **doğrudan desteklenmez**?', ['FULL OUTER JOIN', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'CROSS JOIN'], 'LEFT JOIN … UNION … RIGHT JOIN ile yapılır.')
mc('Aşağıdaki sorgu neden **hata verir**?', ['ogrenci_no iki tabloda da var; hangi tablonunki olduğu belirsiz', 'JOIN yerine WHERE yazılmalıydı', 'Takma ad kullanılamaz', 'ON yerine IN gelmeli', 'SELECT\'te iki sütun olamaz'],
   '#1052 Column \'ogrenci_no\' in field list is ambiguous. Çözüm: `o.ogrenci_no`.',
   sql="SELECT ogrenci_no, ders_kodu FROM ogrenci o JOIN ders_kaydi k ON k.ogrenci_no = o.ogrenci_no;", mode='err', db='okul_db')
mc('Bölüm 2 (Grafik) derslerine kayıtları getiren 3 tablolu JOIN kaç satır döndürür?', ['4', '2', '3', '5', '11'],
   '201: Ahmet, İrem; 202: Mert, İrem.',
   sql="""SELECT o.ad, d.ders_adi, k.harf_notu
FROM ders_kaydi k
JOIN ogrenci o ON o.ogrenci_no = k.ogrenci_no
JOIN ders d    ON d.ders_kodu  = k.ders_kodu
WHERE d.bolum_no = 2;""", mode='n', db='okul_db', tables=okul('ders_kaydi', 'ders'))
mc('Her öğrencinin kaç derse kayıtlı olduğunu (kaydı olmayan da 0 görünsün) listelemek için hangisi doğrudur?',
   ['LEFT JOIN ders_kaydi ve COUNT(k.ders_kodu)', 'INNER JOIN ve COUNT(*)', 'LEFT JOIN ve COUNT(*)', 'CROSS JOIN ve SUM', 'RIGHT JOIN ve MAX'],
   'COUNT(*) eşleşmeyen satırı 1 sayar; sağ tablonun sütunu sayılınca 0 olur.')
mc('Sorguda Kerem\'in satırında hangi sayı görünür?', ['0', '1', 'NULL', '6', 'Satır görünmez'], 'LEFT JOIN Kerem\'i getirir; COUNT(k.ders_kodu) NULL\'u saymaz → 0.',
   sql="SELECT COUNT(k.ders_kodu) FROM ogrenci o LEFT JOIN ders_kaydi k ON k.ogrenci_no = o.ogrenci_no WHERE o.ad = 'Kerem' GROUP BY o.ogrenci_no;",
   code="SELECT o.ad, COUNT(k.ders_kodu) AS ders_sayisi\nFROM ogrenci o\nLEFT JOIN ders_kaydi k ON k.ogrenci_no = o.ogrenci_no\nGROUP BY o.ogrenci_no, o.ad;", mode='val', db='okul_db', tables=okul('ogrenci', 'ders_kaydi'))
mc('Aynı sorguda `COUNT(*)` kullanılsaydı Kerem\'in satırında kaç yazardı?', ['1', '0', 'NULL', '6', 'Hata verirdi'], 'LEFT JOIN\'in eşleşmesiz satırı da bir satırdır; COUNT(*) onu sayar.',
   sql="SELECT COUNT(*) FROM ogrenci o LEFT JOIN ders_kaydi k ON k.ogrenci_no = o.ogrenci_no WHERE o.ad = 'Kerem' GROUP BY o.ogrenci_no;",
   code="SELECT o.ad, COUNT(*) AS ders_sayisi\nFROM ogrenci o\nLEFT JOIN ders_kaydi k ON k.ogrenci_no = o.ogrenci_no\nGROUP BY o.ogrenci_no, o.ad;", mode='val', db='okul_db', tables=okul('ogrenci', 'ders_kaydi'))
mc('`magaza` veri tabanında hiç satılmamış ürünler (uygulama bonus) hangileridir?', ['Mekanik Klavye, Kamp Sandalyesi', 'Mekanik Klavye', 'Kamp Sandalyesi, Termos', 'Oyuncak', 'Hepsi satıldı'],
   'LEFT JOIN + GROUP BY + HAVING COUNT(d.detay_id) = 0.',
   sql="""SELECT u.urun_adi
FROM urunler u
LEFT JOIN siparis_detay d ON d.urun_id = u.urun_id
GROUP BY u.urun_id, u.urun_adi
HAVING COUNT(d.detay_id) = 0
ORDER BY u.urun_id;""", mode='col', db='magaza')
mc('`magaza` veri tabanında her kategorinin ürün sayısını, ürünü olmayan "Oyuncak" da 0 görünecek şekilde listelemek için hangisi gerekir?', ['kategoriler LEFT JOIN urunler', 'kategoriler INNER JOIN urunler', 'urunler CROSS JOIN kategoriler', 'Sadece WHERE', 'HAVING COUNT(*) > 0'],
   'INNER JOIN ürünü olmayan kategoriyi atar.')
mc('Sorgu sonucu kaç satırdır?', ['4', '5', '3', '6', '2'], '4 kredili dersler 101, 102, 301; AA alan dersler 101, 202. UNION tekrarı (101) atar: 101, 102, 202, 301.',
   sql="SELECT ders_kodu FROM ders WHERE kredi = 4 UNION SELECT ders_kodu FROM ders_kaydi WHERE harf_notu = 'AA';", mode='n', db='okul_db', tables=okul('ders', 'ders_kaydi'))
mc('Aynı sorgu `UNION ALL` ile yazılırsa kaç satır döner?', ['5', '4', '3', '6', '2'], 'UNION ALL tekrarları atmaz: 3 + 2 = 5.',
   sql="SELECT ders_kodu FROM ders WHERE kredi = 4 UNION ALL SELECT ders_kodu FROM ders_kaydi WHERE harf_notu = 'AA';", mode='n', db='okul_db', tables=okul('ders', 'ders_kaydi'))
mc('Sorgu sonucu hangisidir?', ['Ahmet Kara', 'AhmetKara', 'Ahmet', 'Kara Ahmet', 'NULL'], 'CONCAT değerleri birleştirir; araya \' \' konmuş.',
   sql="SELECT CONCAT(ad, ' ', soyad) FROM ogrenci WHERE ogrenci_no = 20250101;", mode='val', db='okul_db', tables=OG)
mc('Sorgu sonucu hangisidir?', ['Girilmedi', 'NULL', 'AA', '0', 'Boş'], '20250102\'nin 103 dersinde notu NULL; IFNULL ikinci değeri döndürür.',
   sql="SELECT IFNULL(harf_notu, 'Girilmedi') FROM ders_kaydi WHERE ogrenci_no = 20250102 AND ders_kodu = 103;", mode='val', db='okul_db', tables=DK)
mc('`SELECT UPPER(\'sql\');` sonucu nedir?', ['SQL', 'sql', 'Sql', '3', 'Hata'], 'UPPER büyük harfe, LOWER küçük harfe çevirir.', sql="SELECT UPPER('sql');", mode='val')
mc('`SELECT CHAR_LENGTH(\'Mert\');` sonucu nedir?', ['4', '5', '3', 'Mert', '8'], 'Karakter sayısı.',
   sql="SELECT CHAR_LENGTH('Mert');", mode='val')
mc('`SELECT SUBSTRING(\'Veritabanı\', 1, 4);` sonucu nedir?', ['Veri', 'erit', 'tabanı', 'V', 'Veritabanı'], '1. karakterden başlayıp 4 karakter.',
   sql="SELECT SUBSTRING('Veritabanı', 1, 4);", mode='val')
mc('`SELECT DATEDIFF(\'2025-09-23\', \'2025-09-20\');` sonucu nedir?', ['3', '-3', '0', '23', '2025'], 'İlk tarih eksi ikinci tarih, gün olarak.',
   sql="SELECT DATEDIFF('2025-09-23', '2025-09-20');", mode='val')
mc('`SELECT YEAR(\'2025-09-20\');` sonucu nedir?', ['2025', '09', '20', '2025-09-20', '9'], 'YEAR tarihin yılını döndürür.', sql="SELECT YEAR('2025-09-20');", mode='val')
mc('`SELECT ROUND(989.6294, 2);` sonucu nedir?', ['989.63', '989.62', '990', '989.6294', '989.6'], 'İkinci basamaktan sonra 9 → yukarı yuvarlanır.', sql="SELECT ROUND(989.6294, 2);", mode='val')
mc('Sorgu kaç satırda "Ağır" yazar?', ['2', '3', '1', '0', '6'], 'Bölüm 1: 101 (4), 102 (4), 103 (3) → iki ders Ağır.',
   sql="SELECT COUNT(*) FROM ders WHERE bolum_no = 1 AND (CASE WHEN kredi >= 4 THEN 'Ağır' ELSE 'Normal' END) = 'Ağır';",
   code="SELECT ders_adi,\n  CASE WHEN kredi >= 4 THEN 'Ağır' ELSE 'Normal' END AS yuk\nFROM ders WHERE bolum_no = 1;", mode='val', db='okul_db', tables=DE)
mc('Tabloya takma ad vermek için hangisi doğrudur?', ['FROM ogrenci AS o', 'FROM o = ogrenci', 'FROM ogrenci TO o', 'FROM ALIAS ogrenci o', 'FROM ogrenci(o)'], '`AS` yazılmadan `FROM ogrenci o` da olur.')
fill('Boşluğu doldurun: kartı olmayan öğrenciler de listelensin.', 'SELECT o.ad, k.kart_no\nFROM ogrenci o\n____ JOIN ogrenci_karti k ON k.ogrenci_no = o.ogrenci_no;', ['LEFT'], 'LEFT JOIN soldakilerin hepsini getirir.', db='okul_db')
fill('Boşluğu doldurun: birleştirme koşulu.', 'SELECT d.ders_adi, b.bolum_adi\nFROM ders d JOIN bolum b ____ b.bolum_no = d.bolum_no;', ['ON'], 'JOIN … ON eşitlik.', db='okul_db')
fill('Boşluğu doldurun: eşleşmeyenler.', 'SELECT b.bolum_adi FROM bolum b\nLEFT JOIN ders d ON d.bolum_no = b.bolum_no\nWHERE d.ders_kodu ____;', ['IS NULL'], 'LEFT JOIN + IS NULL eşleşmeyenleri bulur.', db='okul_db')
fill('Boşluğu doldurun: iki sorgunun sonucunu tekrarsız birleştir.', 'SELECT ders_kodu FROM ders WHERE kredi = 4\n____\nSELECT ders_kodu FROM ders_kaydi WHERE harf_notu = \'AA\';', ['UNION'], 'UNION tekrarları atar.', db='okul_db')
fill('Boşluğu doldurun: ad ve soyadı birleştir.', "SELECT ____(ad, ' ', soyad) AS tam_ad FROM ogrenci;", ['CONCAT'], 'CONCAT.', db='okul_db')
match('JOIN türlerini eşleştirin.', [
    ['INNER JOIN', 'Sadece eşleşenler'], ['LEFT JOIN', 'Soldaki tablonun hepsi'], ['RIGHT JOIN', 'Sağdaki tablonun hepsi'], ['CROSS JOIN', 'Her satır her satırla']],
   'MySQL\'de FULL OUTER JOIN yoktur.')
match('Fonksiyonları eşleştirin.', [
    ['CONCAT', 'Metinleri birleştirir'], ['IFNULL', 'NULL ise yerine değer koyar'], ['DATEDIFF', 'İki tarih arasındaki gün'], ['UPPER', 'Büyük harfe çevirir']],
   'Sık kullanılan tek satır fonksiyonları.')

# ===================================================================== 7. Görünüm ve tetikleyici
topic('gorunum')
mc('Görünüm (VIEW) için hangisi doğrudur?', ['Bir SELECT sorgusuna verilen addır; veriyi kendisi saklamaz (sanal tablo)', 'Tablonun yedek kopyasıdır', 'Sadece bir kez çalışır', 'INSERT olunca kendiliğinden çalışır', 'Veri tabanı oluşturur'],
   'Her çağrıldığında içindeki sorgu yeniden çalışır.', why={3: 'Bu tetikleyicinin tanımı.'})
mc('Görünüm oluşturan komut hangisidir?', ['CREATE VIEW ad AS SELECT …', 'CREATE TABLE ad AS VIEW …', 'MAKE VIEW ad …', 'NEW VIEW ad = SELECT …', 'CREATE VIEW ad ON tablo'], 'CREATE VIEW … AS SELECT.')
mc('Var olan bir görünümü yoksa oluşturan, varsa değiştiren komut hangisidir?', ['CREATE OR REPLACE VIEW', 'ALTER OR CREATE VIEW', 'UPDATE VIEW', 'REPLACE TABLE', 'MODIFY VIEW'], 'CREATE OR REPLACE VIEW (ALTER VIEW de tanımı değiştirir).')
mc('`DROP VIEW ogrenci_notlari;` çalıştırılırsa ne olur?', ['Sadece görünüm tanımı silinir; tablolardaki veriler kalır', 'ogrenci tablosu da silinir', 'Notlar silinir', 'Veri tabanı silinir', 'Hata verir; görünüm silinemez'],
   'Görünüm verinin kopyası değildir.')
mc('Görünüm kullanmanın faydası **olmayan** hangisidir?', ['Verinin ikinci bir kopyasını diskte saklayıp yedek oluşturması', 'Karmaşık JOIN sorgusunu tek isimle kullanmak', 'Kullanıcıya sadece belli sütunları göstermek (güvenlik)', 'Uygulama kodunu sadeleştirmek', 'Tablo yapısını kullanıcıdan gizlemek'],
   'Görünüm veri saklamaz, yedek değildir.')
mc('Görünüm oluşturulduktan sonra temel tabloya yeni satır eklenirse görünüm ne gösterir?', ['Yeni satırı da gösterir', 'Eski veriyi gösterir', 'Hata verir', 'Görünüm silinir', 'Sadece yeni satırı gösterir'],
   'Görünüm her seferinde sorguyu yeniden çalıştırır.',
   sql="""CREATE TABLE urun (id INT PRIMARY KEY, ad VARCHAR(50), fiyat INT);
INSERT INTO urun VALUES (1, 'Kalem', 10);
CREATE VIEW ucuz AS SELECT ad FROM urun WHERE fiyat < 50;
INSERT INTO urun VALUES (2, 'Silgi', 5);
SELECT CASE WHEN COUNT(*) = 2 THEN 'Yeni satırı da gösterir' ELSE 'Eski veriyi gösterir' END FROM ucuz;""", mode='val',
   code="""CREATE VIEW ucuz AS SELECT ad FROM urun WHERE fiyat < 50;
INSERT INTO urun VALUES (2, 'Silgi', 5);
SELECT * FROM ucuz;""")
mc('Sorgu kaç satır döndürür?', ['2', '3', '11', '1', '0'], 'Görünüm 3 tablolu JOIN; AA notu olan 2 kayıt (Ahmet-101, Mert-202).',
   sql="""CREATE OR REPLACE VIEW ogrenci_notlari AS
SELECT o.ad, o.soyad, d.ders_adi, k.harf_notu
FROM ders_kaydi k
JOIN ogrenci o ON o.ogrenci_no = k.ogrenci_no
JOIN ders d    ON d.ders_kodu  = k.ders_kodu;
SELECT * FROM ogrenci_notlari WHERE harf_notu = 'AA';""", mode='n', db='okul_db', tables=DK)
mc('Hangi görünüm üzerinden **UPDATE yapılamaz**?', ['GROUP BY ve COUNT içeren görünüm', 'Tek tablodan bazı sütunları seçen görünüm', 'Tek tablodan WHERE ile süzen görünüm', 'Takma ad kullanan basit görünüm', 'Tek tablonun tüm sütunlarını seçen görünüm'],
   'Toplama fonksiyonu / GROUP BY / DISTINCT içeren görünüm güncellenemez.')
mc('Tetikleyici (TRIGGER) için hangisi doğrudur?', ['Tabloda INSERT, UPDATE veya DELETE olunca kendiliğinden çalışır', 'CALL ile elle çağrılır', 'SELECT sorgularında çalışır', 'Sadece veri tabanı oluşturulurken çalışır', 'Veriyi sanal tablo gibi gösterir'],
   'Elle çağrılan saklı yordamdır (CALL); tetikleyici olayla çalışır.')
mc('Tetikleyici hangi olay için **tanımlanamaz**?', ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'Hepsi için tanımlanabilir'], 'Tetikleyici sadece veri değiştiren olaylarda (INSERT/UPDATE/DELETE) çalışır.')
mc('Tetikleyicide `NEW.adet` ifadesi neyi gösterir?', ['Eklenen / güncellenen satırın yeni adet değerini', 'Silinen satırın adet değerini', 'Tablodaki toplam adedi', 'Bir önceki tetikleyicinin sonucunu', 'Yeni oluşturulan tabloyu'],
   'NEW yeni değer, OLD eski değer.')
mc('`AFTER INSERT` tetikleyicisinde hangisi **kullanılamaz**?', ['OLD', 'NEW', 'FOR EACH ROW', 'BEGIN … END', 'UPDATE'], 'INSERT\'te önceki satır olmadığı için OLD yoktur.')
mc('`DELETE` tetikleyicisinde silinen satırın değerlerine nasıl erişilir?', ['OLD.sutun', 'NEW.sutun', 'DELETED.sutun', 'THIS.sutun', 'ROW.sutun'], 'DELETE\'te NEW yoktur, OLD vardır.')
mc('`FOR EACH ROW` ne anlama gelir?', ['Tetikleyici etkilenen her satır için bir kez çalışır', 'Tetikleyici tablo başına bir kez çalışır', 'Bütün tablolara uygulanır', 'Tabloyu satır satır kopyalar', 'Döngü kurar ve sonsuza kadar çalışır'],
   'Üç satır eklenirse tetikleyici üç kez çalışır.')
mc('Tetikleyici gövdesindeki `;` işaretlerinin komutu erken bitirmemesi için ne kullanılır?', ['DELIMITER $$', 'COMMIT', 'GO', 'END IF', 'SET NAMES'], 'Geçici ayırıcı; sonra `DELIMITER ;` ile geri alınır.')
mc('Satış eklendiğinde stok düşen tetikleyici çalıştıktan sonra ürünün stoku kaç olur?', ['7', '10', '3', '13', '0'], 'AFTER INSERT: 10 - 3 = 7.',
   sql="""CREATE TABLE urun (id INT PRIMARY KEY, ad VARCHAR(50), stok INT);
CREATE TABLE satis (id INT AUTO_INCREMENT PRIMARY KEY, urun_id INT, adet INT);
DELIMITER $$
CREATE TRIGGER stok_dus AFTER INSERT ON satis
FOR EACH ROW
BEGIN
  UPDATE urun SET stok = stok - NEW.adet WHERE id = NEW.urun_id;
END$$
DELIMITER ;
INSERT INTO urun VALUES (1, 'Kulaklık', 10);
INSERT INTO satis (urun_id, adet) VALUES (1, 3);
SELECT stok FROM urun WHERE id = 1;""", mode='val',
   code="""DELIMITER $$
CREATE TRIGGER stok_dus AFTER INSERT ON satis
FOR EACH ROW
BEGIN
  UPDATE urun SET stok = stok - NEW.adet WHERE id = NEW.urun_id;
END$$
DELIMITER ;

INSERT INTO urun VALUES (1, 'Kulaklık', 10);
INSERT INTO satis (urun_id, adet) VALUES (1, 3);
SELECT stok FROM urun WHERE id = 1;""")
mc('Aynı tetikleyiciyle iki satış yapılırsa (adet 2 ve 4) stok 10\'dan kaça düşer?', ['4', '6', '8', '10', '2'], 'Her satış için ayrı çalışır: 10 - 2 - 4 = 4.',
   sql="""CREATE TABLE urun (id INT PRIMARY KEY, ad VARCHAR(50), stok INT);
CREATE TABLE satis (id INT AUTO_INCREMENT PRIMARY KEY, urun_id INT, adet INT);
DELIMITER $$
CREATE TRIGGER stok_dus AFTER INSERT ON satis
FOR EACH ROW
BEGIN
  UPDATE urun SET stok = stok - NEW.adet WHERE id = NEW.urun_id;
END$$
DELIMITER ;
INSERT INTO urun VALUES (1, 'Kulaklık', 10);
INSERT INTO satis (urun_id, adet) VALUES (1, 2), (1, 4);
SELECT stok FROM urun WHERE id = 1;""", mode='val',
   code="INSERT INTO satis (urun_id, adet) VALUES (1, 2), (1, 4);\nSELECT stok FROM urun WHERE id = 1;")
mc('`BEFORE INSERT` tetikleyicisi `IF NEW.stok < 0 THEN SET NEW.stok = 0; END IF;` içeriyor. `INSERT INTO urun VALUES (1, -5);` sonrası stok kaçtır?', ['0', '-5', '5', 'NULL', 'Satır eklenmez'],
   'BEFORE tetikleyicisi eklenecek değeri değiştirebilir.',
   sql="""CREATE TABLE urun (id INT PRIMARY KEY, stok INT);
DELIMITER $$
CREATE TRIGGER stok_kontrol BEFORE INSERT ON urun
FOR EACH ROW
BEGIN
  IF NEW.stok < 0 THEN
    SET NEW.stok = 0;
  END IF;
END$$
DELIMITER ;
INSERT INTO urun VALUES (1, -5);
SELECT stok FROM urun;""", mode='val', code=None)
mc('Silinen müşterileri bir log tablosuna yazmak için hangi tetikleyici uygundur?', ['AFTER DELETE ON musteri … OLD.ad', 'AFTER INSERT ON musteri … NEW.ad', 'BEFORE SELECT ON musteri', 'AFTER DELETE ON musteri … NEW.ad', 'CREATE VIEW silinenler'],
   'DELETE\'te silinen satır OLD ile okunur.')
mc('Tetikleyiciyi silen komut hangisidir?', ['DROP TRIGGER ad;', 'DELETE TRIGGER ad;', 'REMOVE TRIGGER ad;', 'ALTER TRIGGER ad DROP;', 'TRUNCATE TRIGGER ad;'], 'DROP TRIGGER.')
mc('Saklı yordam (PROCEDURE) ile tetikleyici arasındaki temel fark nedir?', ['Yordam CALL ile elle çağrılır, tetikleyici olayla kendiliğinden çalışır', 'Tetikleyici CALL ile çağrılır', 'Yordam sadece SELECT içerir', 'İkisi aynıdır', 'Tetikleyici parametre alır, yordam almaz'],
   'Tetikleyici çağrılmaz; olay (INSERT/UPDATE/DELETE) tetikler.')
fill('Boşluğu doldurun: görünüm oluşturun.', 'CREATE ____ kredili_dersler AS\nSELECT ders_adi, kredi FROM ders WHERE kredi >= 4;', ['VIEW'], 'CREATE VIEW … AS SELECT.', db='okul_db')
fill('Boşluğu doldurun: satış eklendikten sonra çalışsın.', 'CREATE TRIGGER stok_dus ____ INSERT ON satis\nFOR EACH ROW\n  UPDATE urun SET stok = stok - NEW.adet WHERE id = NEW.urun_id;', ['AFTER'],
     'AFTER INSERT: satır eklendikten sonra.', setup="CREATE TABLE urun (id INT PRIMARY KEY, stok INT);\nCREATE TABLE satis (id INT PRIMARY KEY, urun_id INT, adet INT);")
fill('Boşluğu doldurun: eklenen satırın değeri.', 'CREATE TRIGGER stok_dus AFTER INSERT ON satis\nFOR EACH ROW\n  UPDATE urun SET stok = stok - ____.adet WHERE id = NEW.urun_id;', ['NEW'],
     'INSERT\'te yeni satır NEW ile okunur.', setup="CREATE TABLE urun (id INT PRIMARY KEY, stok INT);\nCREATE TABLE satis (id INT PRIMARY KEY, urun_id INT, adet INT);")
fill('Boşluğu doldurun: her satır için çalışsın.', 'CREATE TRIGGER log_ekle AFTER DELETE ON musteri\nFOR ____ ROW\n  INSERT INTO silinen VALUES (OLD.id, OLD.ad);', ['EACH'],
     'FOR EACH ROW.', setup="CREATE TABLE musteri (id INT PRIMARY KEY, ad VARCHAR(50));\nCREATE TABLE silinen (id INT, ad VARCHAR(50));")
match('Tetikleyici parçalarını eşleştirin.', [
    ['BEFORE / AFTER', 'Olaydan önce mi sonra mı'], ['FOR EACH ROW', 'Her etkilenen satır için'], ['NEW', 'Yeni değer (INSERT, UPDATE)'], ['OLD', 'Eski değer (UPDATE, DELETE)']],
   'CREATE TRIGGER ad BEFORE|AFTER olay ON tablo FOR EACH ROW …')
match('Nesneleri eşleştirin.', [
    ['VIEW', 'Adı verilmiş SELECT, sanal tablo'], ['TRIGGER', 'Olayla kendiliğinden çalışan blok'], ['PROCEDURE', 'CALL ile çağrılan blok'], ['TABLE', 'Veriyi saklayan yapı']],
   'Sadece tablo veriyi kendisi saklar.')
