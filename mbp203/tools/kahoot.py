"""Derste (Panopto kayıtlarında) oynanan 5 Kahoot. Soru ve doğru cevaplar Kahoot'ların kendisinden.
mc: şık sırası Kahoot'taki gibi korunur, a = doğru şıkkın sırası. Birden çok doğrulu sorular tek doğru şıklı (birleşik) teste çevrildi.
fill: açık uçlu Kahoot 2; kabul edilen yazımlar ans listesinde."""

I, D, S, A, J = 'iliskisel', 'sql-giris', 'sorgular', 'ileri1', 'ileri2'
DY = ['Doğru', 'Yanlış']

def mc(topic, q, opts, a, exp):
    return {'type': 'mc', 'topic': topic, 'q': q, 'opts': opts, 'a': a, 'exp': exp, 'src': 'Kahoot'}

def op(topic, q, ans, exp):
    return {'type': 'fill', 'topic': topic, 'q': q, 'code': '____', 'ans': ans, 'cs': False, 'exp': exp, 'src': 'Kahoot'}

K1 = [
    mc(I, 'Aşağıdakilerden hangisi 1:1 (bire bir) ilişkiye örnektir?', ['Öğrenci – Öğrenci Kartı', 'Bölüm – Ders', 'Yazar – Kitap', 'Öğrenci – Ders'], 0,
       'Her öğrencinin tek kartı, her kartın tek öğrencisi var. Bölüm–Ders ve Yazar–Kitap 1:N, Öğrenci–Ders M:N.'),
    mc(I, '`ogrenci_karti` tablosunda 1:1 ilişkiyi garanti eden kelime hangisidir?', ['UNIQUE', 'PRIMARY', 'AUTO_INCREMENT', 'DEFAULT'], 0,
       'FK sütunu (ogrenci_no) UNIQUE olunca aynı öğrenciye ikinci kart eklenemez; ilişki 1:1 kalır.'),
    mc(I, '(Doğru/Yanlış) Ahmet\'e ikinci bir kart eklemeye çalıştığımızda MySQL\'in hata vermesi, veritabanının yanlış tasarlandığını gösterir.', DY, 1,
       'Yanlış: hata, UNIQUE kısıtının doğru çalıştığını gösterir. Tasarım tam olarak bunu engellemek için yapıldı.'),
]

K2 = [
    op(I, 'Tablodaki her satırı tekil olarak tanımlayan sütuna ne ad verilir?',
       ['PRIMARY KEY', 'primary', 'PK', 'birincil anahtar', 'birincil', 'primary key (birincil anahtar)'], 'PRIMARY KEY (birincil anahtar, PK).'),
    op(I, 'Başka bir tablonun birincil anahtarına bağlanan sütuna ne ad verilir?',
       ['FOREIGN KEY', 'foreign', 'FK', 'yabancı anahtar', 'yabanci anahtar', 'yabancı', 'yabanci', 'ikincil anahtar'], 'FOREIGN KEY (yabancı anahtar, FK).'),
    op(I, '1:1 ilişkide, yabancı anahtar sütununa ilişkinin bozulmaması için hangi kısıt eklenir?',
       ['UNIQUE', 'tekil', 'benzersiz'], 'UNIQUE: aynı FK değeri ikinci kez girilemez.'),
    op(D, 'Tabloya yeni bir kayıt eklemek için hangi SQL komutu kullanılır?',
       ['INSERT INTO', 'INSERT', 'INSERT INTO ... VALUES', 'INSERT INTO VALUES'], 'INSERT INTO tablo (sütunlar) VALUES (...);'),
    op(I, 'Bölüm–Ders (1:N) ilişkisinde yabancı anahtar hangi tabloya eklenir?',
       ['ders', 'ders tablosu', 'ders tablosuna', 'ders tablosuna (çok tarafı)', 'çok tarafı', 'cok tarafi'], '1:N\'de FK her zaman çok tarafına, yani ders tablosuna eklenir (bolum_no).'),
    op(I, 'Öğrenci–Ders (M:N) ilişkisini kurabilmek için veritabanımıza eklediğimiz ara tablonun adı nedir?',
       ['ders_kaydi', 'ders_kaydı', 'ders kaydi', 'ders kaydı', 'derskaydi'], 'ders_kaydi: ogrenci_no ve ders_kodu FK\'lerini tutar.'),
    op(D, '`ders` tablosunda `ders_kodu` INT ise, `ders_kaydi` tablosundaki `ders_kodu` hangi veri tipinde olmalıdır?',
       ['INT', 'integer', 'tam sayı', 'tam sayi', 'tamsayı', 'tamsayi'], 'FK ile başvurduğu sütun aynı tipte olmalı: INT.'),
    op(D, 'Önce hangi tabloya INSERT yapılmalıdır: `bolum` mu, `ders` mi?',
       ['bolum', 'bölüm', 'bolum tablosu', 'bölüm tablosu', 'bolum tablosuna', 'bölüm tablosuna'], 'Ders, bolum_no ile bölüme bağlı; bölüm yoksa FK hatası alınır. Önce bolum.'),
    op(I, '`ders_kaydi` tablosundaki `harf_notu` bilgisi öğrenciye mi, derse mi, yoksa kayda mı aittir?',
       ['kayda', 'kayıt', 'kayit', 'kayda ait', 'ders kaydına', 'ders kaydina', 'ders_kaydi', 'ders_kaydına', 'kayda aittir'],
       'Not belli bir öğrencinin belli bir dersteki kaydına aittir; bu yüzden ara tabloda durur.'),
]

K3 = [
    mc(I, 'Bir kişinin yalnızca bir pasaportu olabiliyorsa kişi – pasaport ilişkisi hangisidir?', ['İlişki yoktur', 'Çoka çok (M:N)', 'Bire çok (1:N)', 'Bire bir (1:1)'], 3, 'Her iki taraf da en fazla bir: 1:1.'),
    mc(I, 'Bir müşterinin birden çok siparişi olabiliyorsa müşteri – sipariş ilişkisi hangisidir?', ['İlişki kurulamaz', '1:N', 'M:N', '1:1'], 1, 'Bir müşteri → çok sipariş, bir sipariş → tek müşteri: 1:N.'),
    mc(I, 'Çoka çok (M:N) ilişki ilişkisel veritabanında nasıl kurulur?', ['Bir tabloya liste olarak yazılır', 'Tek tabloda birleştirilir', 'Sadece FOREIGN KEY yeterlidir', 'Ara (bağlantı) tablo oluşturulur'], 3,
       'İki tarafın PK\'lerini FK olarak tutan ara tablo (ör. ders_kaydi).'),
    mc(I, 'Bir tablodaki her satırı benzersiz olarak tanımlayan alana ne denir?', ['FOREIGN KEY', 'INDEX', 'DEFAULT', 'PRIMARY KEY'], 3, 'PRIMARY KEY: benzersiz ve NULL olamaz.'),
    mc(I, 'FOREIGN KEY (yabancı anahtar) ne işe yarar?', ['Tekrarlı kayıtları siler', 'Sorguları otomatik hızlandırır', 'Sütunu otomatik artırır', 'Tablolar arası bilgi bütünlüğünü korur'], 3,
       'Referans bütünlüğü: FK değeri başvurduğu tabloda olmalı.'),
    mc(D, 'Bir sütunda aynı değerin iki kez girilmesini engelleyen kısıt hangisidir?', ['CHECK', 'UNIQUE', 'NOT NULL', 'DEFAULT'], 1, 'UNIQUE tekrar eden değeri engeller.'),
    mc(I, 'ER diyagramında varlıklar (entity) genellikle hangi şekille gösterilir?', ['Ok', 'Eşkenar dörtgen', 'Dikdörtgen', 'Elips'], 2, 'Varlık dikdörtgen, nitelik elips, ilişki eşkenar dörtgen.'),
    mc(D, 'Uzunluğu değişen metinler (ad, adres) için en uygun veri tipi hangisidir?', ['DATE', 'INT', 'CHAR(2)', 'VARCHAR'], 3, 'VARCHAR(n) değişken uzunluklu metin.'),
    mc(S, 'NULL değer içeren kayıtları bulmak için doğru koşul hangisidir?', ['IS NULL', '= NULL', "= ''", '== NULL'], 0, 'NULL = ile karşılaştırılamaz; IS NULL yazılır.'),
    mc(S, "`LIKE 'A%'` koşulu hangi değerleri getirir?", ['A ile başlayanları', 'A ile bitenleri', 'İçinde A geçenleri', "Sadece 'A' olanları"], 0, '% herhangi sayıda karakter: A ile başlayan her şey.'),
    mc(S, 'Sonuçta tekrar eden satırları tek göstermek için hangisi kullanılır?', ['DISTINCT', 'DIFFERENT', 'SINGLE', 'UNIQUE'], 0, 'SELECT DISTINCT tekrarları atar. UNIQUE bir kısıttır.'),
    mc(S, '`ORDER BY sütun DESC` ifadesi ne yapar?', ['Küçükten büyüğe sıralar', 'Tekrarları siler', 'İlk satırı getirir', 'Büyükten küçüğe (azalan) sıralar'], 3, 'DESC azalan, ASC (varsayılan) artan.'),
    mc(S, 'Sorgu sonucunu ilk 5 satırla sınırlamak için MySQL\'de hangisi kullanılır?', ['LIMIT 5', 'TOP 5', 'ROWNUM 5', 'FIRST 5'], 0, 'MySQL: LIMIT. TOP SQL Server\'da, ROWNUM Oracle\'da.'),
    mc(A, '`COUNT(*)` ile `COUNT(sütun)` arasındaki fark nedir?', ['COUNT(sütun) NULL\'ları saymaz', 'COUNT(sütun) tekrarları saymaz', 'Fark yoktur', 'COUNT(*) NULL\'ları saymaz'], 0,
       'COUNT(*) bütün satırları sayar; COUNT(sütun) NULL olmayanları.'),
    mc(A, 'Bir sütunun ortalamasını hesaplayan fonksiyon hangisidir?', ['COUNT', 'AVG', 'SUM', 'MEAN'], 1, 'AVG ortalama. SQL\'de MEAN yok.'),
    mc(A, 'Kayıtları gruplayıp her grup için toplam/sayı almak için hangisi kullanılır?', ['LIMIT', 'GROUP BY', 'DISTINCT', 'ORDER BY'], 1, 'GROUP BY + toplama fonksiyonu.'),
    mc(A, 'WHERE ile HAVING arasındaki temel fark nedir?', ['HAVING gruplara, WHERE satırlara koşul koyar', 'İkisi aynıdır', 'WHERE gruplara, HAVING satırlara koşul koyar', 'HAVING sadece JOIN\'de kullanılır'], 0,
       'WHERE gruplamadan önce satırları, HAVING sonra grupları süzer.'),
    mc(J, 'Yalnızca iki tabloda da eşleşen kayıtları getiren JOIN türü hangisidir?', ['CROSS JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN'], 3, 'INNER JOIN sadece eşleşenleri getirir.'),
    mc(J, 'LEFT JOIN\'de sağ tabloda eşleşme yoksa o sütunlara ne gelir?', ['Boş metin', '0', 'Satır listelenmez', 'NULL'], 3, 'Sol satır yine gelir; sağ sütunlar NULL olur.'),
    mc(J, 'İki tabloyu JOIN ile birleştirirken ON kısmında genellikle hangi alanlar eşleştirilir?', ['PRIMARY KEY ile FOREIGN KEY', 'İki tablonun PRIMARY KEY\'leri', 'İki tablonun ilk sütunları', 'Aynı veri tipindeki tüm sütunlar'], 0,
       'ON k.ogrenci_no = o.ogrenci_no: FK ile başvurduğu PK.'),
]

K4 = [
    mc(I, 'Öğrenci ile öğrenci kartı arasındaki ilişki türü hangisidir?', ['İlişki yoktur', '1:N', '1:1', 'M:N'], 2, 'Bir öğrenci → bir kart: 1:1.'),
    mc(I, 'Bölüm – Ders (bir bölümün çok dersi var) ilişkisinde FOREIGN KEY hangi tabloya eklenir?', ['Ara tabloya', 'İki tabloya da', 'Ders tablosuna', 'Bölüm tablosuna'], 2, 'FK çok tarafına: ders.bolum_no.'),
    mc(I, 'M:N ilişkiyi tablolara dönüştürmek için ne gerekir?', ['AUTO_INCREMENT', 'Ara (bağlantı) tablo', 'UNIQUE kısıtı', 'Tek bir FOREIGN KEY'], 1, 'M:N → ara tablo.'),
    mc(I, 'PRIMARY KEY için hangisi DOĞRUDUR?', ['Her tabloda birden çok olabilir', 'Benzersiz ve NULL olamaz', 'Tekrar edebilir', 'NULL olabilir'], 1, 'PK = UNIQUE + NOT NULL, tabloda bir tane.'),
    mc(J, 'İki tabloda yalnızca eşleşen kayıtları getiren JOIN hangisidir?', ['CROSS JOIN', 'INNER JOIN', 'RIGHT JOIN', 'LEFT JOIN'], 1, 'INNER JOIN.'),
    mc(J, 'Hiç siparişi olmayan müşterileri de listelemek için hangisi kullanılır?', ['WHERE ile eşitlik', 'LEFT JOIN (müşteriler solda)', 'GROUP BY', 'INNER JOIN'], 1, 'Soldaki (müşteriler) bütün satırlar gelir; siparişi olmayanın sipariş sütunları NULL.'),
    mc(A, 'Bir sütundaki değerlerin ortalamasını veren fonksiyon hangisidir?', ['AVG()', 'SUM()', 'COUNT()', 'MAX()'], 0, 'AVG ortalama.'),
    mc(A, '`COUNT(*)` ile `COUNT(sutun)` farkı nedir?', ['COUNT(sutun) NULL değerleri saymaz', 'COUNT(*) NULL saymaz', 'Fark yoktur', 'COUNT(sutun) daha hızlıdır'], 0, 'COUNT(sutun) NULL\'ları atlar.'),
    mc(A, '`SELECT MAX(fiyat) FROM urunler;` sorgusu kaç satır döndürür?', ['Kategori sayısı kadar', 'Tablodaki satır sayısı kadar', '0', '1'], 3, 'GROUP BY yoksa toplama fonksiyonu tek satır (tek değer) döndürür.'),
    mc(A, 'GROUP BY ne işe yarar?', ['Tekrarları siler', 'Aynı değere sahip satırları gruplar', 'Satırları sıralar', 'Tabloları birleştirir'], 1, 'Aynı değerli satırları bir grup yapar.'),
    mc(A, '`SELECT kategori_id, COUNT(*) FROM urunler GROUP BY kategori_id;` ne listeler?', ['Her kategorideki ürün sayısını', 'Kategori adlarını', 'En pahalı ürünü', 'Toplam ürün sayısını'], 0, 'Her kategori_id için bir satır ve o gruptaki ürün sayısı.'),
    mc(A, 'GROUP BY kullanılan sorguda SELECT\'e hangi sütunlar yazılabilir?', ['Tüm sütunlar', 'Gruplanan sütunlar ve aggregate fonksiyonlar', 'Sadece sayısal sütunlar', 'Sadece PRIMARY KEY'], 1,
       'Gruplanmayan bir sütun yazılırsa hangi değerin geleceği belli olmaz (ONLY_FULL_GROUP_BY hatası).'),
    mc(A, 'Birden fazla sütuna göre gruplama nasıl yazılır?', ['GROUP sehir BY yil', 'GROUP BY sehir AND yil', 'GROUP BY sehir, yil', 'GROUP BY (sehir + yil)'], 2, 'Sütunlar virgülle ayrılır.'),
    mc(A, 'HAVING ne zaman kullanılır?', ['Tablo birleştirmek için', 'Gruplamadan önce filtrelemek için', 'Gruplanmış sonuçları filtrelemek için', 'Sıralama yapmak için'], 2, 'HAVING grupları süzer.'),
    mc(A, 'WHERE içinde aggregate fonksiyon (ör. COUNT) kullanılabilir mi?', ['Sadece LIMIT ile birlikte', 'Sadece SUM kullanılabilir', 'Evet, her zaman', 'Hayır, HAVING kullanılır'], 3, 'WHERE\'de COUNT → #1111 Invalid use of group function.'),
    mc(A, '5\'ten fazla ürünü olan kategoriler için doğru koşul hangisidir?', ['ORDER BY COUNT(*) > 5', 'HAVING COUNT(*) > 5', 'WHERE COUNT(*) > 5', 'GROUP BY COUNT(*) > 5'], 1, 'Toplama fonksiyonlu koşul HAVING\'e.'),
    mc(A, 'İptal edilen siparişleri hesaba katmadan toplam almak için koşul nereye yazılır?', ['GROUP BY durum', "WHERE durum <> 'iptal'", "HAVING durum <> 'iptal'", 'ORDER BY durum'], 1,
       'İptal tek tek satırların özelliği; gruplamadan önce WHERE ile atılır.'),
    mc(A, 'Doğru cümle sırası hangisidir?', ['SELECT-FROM-GROUP BY-WHERE-HAVING', 'SELECT-GROUP BY-FROM-WHERE-ORDER BY', 'SELECT-FROM-WHERE-HAVING-GROUP BY', 'SELECT-FROM-WHERE-GROUP BY-HAVING-ORDER BY'], 3,
       'SELECT … FROM … WHERE … GROUP BY … HAVING … ORDER BY …'),
    mc(A, 'Sorgu çalışırken hangisi önce işlenir?', ['SELECT', 'HAVING', 'ORDER BY', 'WHERE'], 3, 'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.'),
    mc(A, 'Toplam satışa göre en çok satan kategoriyi bulmak için GROUP BY\'a hangi ikili eklenir?', ['WHERE + LIMIT', 'ORDER BY ... DESC LIMIT', 'JOIN + UNION', 'HAVING + DISTINCT'], 1, 'Toplama göre azalan sırala, ilk satırı al: ORDER BY SUM(...) DESC LIMIT 1.'),
]

K5 = [
    mc(I, 'Bir yazarın birden çok kitabı olabilir, her kitabın tek yazarı vardır. İlişki türü nedir?', ['1:1', 'M:N', 'İlişki yoktur', '1:N'], 3, 'Yazar → çok kitap, kitap → tek yazar: 1:N.'),
    mc(I, 'Her ülkenin tek başkenti vardır, her başkent tek ülkeye aittir. İlişki türü nedir?', ['1:1', 'M:N', '1:N', 'Mutlaka ara tablo gerekir'], 0, 'İki taraf da tek: 1:1.'),
    mc(I, 'Doktor–Hasta M:N ilişkisinde muayene tarihi gibi bilgiler nerede saklanır?', ['Saklanamaz', 'Doktor tablosunda', 'Ara (bağlantı) tabloda', 'Hasta tablosunda'], 2,
       'Tarih belli bir doktor–hasta eşleşmesine ait; ara tabloda durur (harf_notu gibi).'),
    mc(D, 'Yeni bir veritabanı oluşturan komut hangisidir?', ['NEW DATABASE Kutuphane;', 'MAKE DATABASE Kutuphane;', 'CREATE DATABASE Kutuphane;', 'CREATE TABLE Kutuphane;'], 2, 'CREATE DATABASE; CREATE TABLE tablo oluşturur.'),
    mc(I, 'PRIMARY KEY için **doğru olanların hepsi** hangi şıkta verilmiştir?',
       ['NULL değer alamaz + Her kaydı benzersiz tanımlar', 'Değerleri tekrar edebilir + NULL değer alamaz', 'Bir tabloda iki ayrı PRIMARY KEY olabilir + Her kaydı benzersiz tanımlar', 'Sadece: Her kaydı benzersiz tanımlar'], 0,
       'Kahoot\'ta birden çok doğrulu soruydu. PK tekrar edemez ve tabloda bir tanedir (birden çok sütundan oluşabilir ama yine tek PK).'),
    mc(I, 'FOREIGN KEY için **doğru olanların hepsi** hangi şıkta verilmiştir?',
       ['Bir tabloda birden çok FK olabilir + Referans bütünlüğünü sağlar + Başka tablonun PK\'sini referans eder',
        'FK sütunu her zaman PK olmalıdır + Referans bütünlüğünü sağlar',
        'Referans bütünlüğünü sağlar + Başka tablonun PK\'sini referans eder',
        'Bir tabloda birden çok FK olabilir + FK sütunu her zaman PK olmalıdır'], 0,
       'Kahoot\'ta birden çok doğrulu soruydu. FK\'nin PK olması gerekmez (ders.bolum_no FK ama PK değil). ders_kaydi\'nde 2 FK var.'),
    mc(D, '`Siparis` tablosunda `MusteriID` için doğru FOREIGN KEY tanımı hangisidir?',
       ['FOREIGN KEY (MusteriID) REFERENCES Musteri(MusteriID)', 'FOREIGN KEY (MusteriID) LINKS Musteri(MusteriID)', 'REFERENCES (MusteriID) FROM Musteri', 'FOREIGN KEY Musteri JOINS MusteriID'], 0,
       'Kalıp: FOREIGN KEY (sütun) REFERENCES tablo(sütun).'),
    mc(D, '`Musteri` tablosunda olmayan `MusteriID=9` ile `Siparis` eklenirse ne olur?', ['Musteri otomatik eklenir', 'Kayıt eklenir', 'FOREIGN KEY hatası alınır', 'MusteriID NULL olur'], 2,
       'Referans bütünlüğü: #1452 Cannot add or update a child row.'),
    mc(D, '`Ogrenci(No PK, Ad NOT NULL, Bolum)`. Hangi INSERT **hatalıdır**?',
       ["INSERT INTO Ogrenci (No,Ad) VALUES (4,'Ece');", "INSERT INTO Ogrenci VALUES (2,NULL,'BP');", "INSERT INTO Ogrenci (Ad,No) VALUES ('Can',3);", "INSERT INTO Ogrenci VALUES (1,'Ali','BP');"], 1,
       'Ad NOT NULL; NULL verilemez. Sütun sırası belirtilirse (Ad,No) farklı sırada yazmak serbest.'),
    mc(D, "`No=1` tabloda zaten varken `INSERT INTO Ogrenci VALUES (1,'Su','BP');` çalışırsa?", ['Kayıt eklenir', 'Duplicate entry (PK) hatası', 'Eski kayıt güncellenir', 'No otomatik 2 olur'], 1,
       'PK tekrar edemez: #1062 Duplicate entry \'1\' for key \'PRIMARY\'.'),
    mc(J, '`Musteri`: 1, 2, 3. `Siparis.MusteriID`: 1, 1, 2. INNER JOIN (MusteriID) kaç satır döner?', ['6', '2', '3', '4'], 2, 'Her sipariş satırı bir müşteriyle eşleşir: 3 satır. Müşteri 3 gelmez.'),
    mc(J, 'Aynı tablolarda `Musteri LEFT JOIN Siparis` kaç satır döner?', ['6', '4', '3', '2', '5'], 1, '3 eşleşen + siparişi olmayan müşteri 3 için NULL\'lu 1 satır = 4.'),
    mc(A, '`SELECT UrunID, SUM(Miktar) FROM Satis GROUP BY UrunID;` ne döndürür?', ['En çok satan ürün', 'Her ürünün satış sayısı', 'Her ürünün toplam satış miktarı', 'Tüm satışların toplamı'], 2,
       'SUM(Miktar) miktarları toplar; satış sayısı COUNT(*) olurdu.'),
    mc(A, 'GROUP BY için **doğru olanların hepsi** hangi şıkta verilmiştir?',
       ['Aggregate fonksiyonlarla kullanılır + Satırları gruplara ayırır + Her grup için özet satır üretir',
        'Sadece sayısal sütunlarda kullanılır + Satırları gruplara ayırır',
        'Satırları gruplara ayırır + Her grup için özet satır üretir',
        'Sadece sayısal sütunlarda kullanılır + Aggregate fonksiyonlarla kullanılır'], 0,
       'Kahoot\'ta birden çok doğrulu soruydu. Metin sütunuyla (sehir) da gruplanır.'),
    mc(A, 'COUNT için **doğru olanların hepsi** hangi şıkta verilmiştir?',
       ['COUNT(*) NULL içeren satırları da sayar + COUNT(DISTINCT sutun) benzersizleri sayar + COUNT(sutun) NULL değerleri saymaz',
        'COUNT(*) NULL içeren satırları da sayar + Sadece GROUP BY ile kullanılabilir',
        'COUNT(DISTINCT sutun) benzersizleri sayar + COUNT(sutun) NULL değerleri saymaz',
        'Sadece GROUP BY ile kullanılabilir + COUNT(sutun) NULL değerleri saymaz'], 0,
       'Kahoot\'ta birden çok doğrulu soruydu. COUNT GROUP BY olmadan da kullanılır: SELECT COUNT(*) FROM musteriler;'),
    mc(A, '`SELECT m.Ad, ___(s.Tutar) FROM Musteri m JOIN Siparis s ON ...` Müşteri başına TOPLAM için boşluğa ne gelir?', ['COUNT', 'SUM', 'AVG', 'MAX'], 1, 'Toplam tutar: SUM.'),
    mc(A, 'Müşteri başına toplam sorgusunun sonuna hangisi eklenmelidir?', ['ORDER BY m.Ad', 'HAVING m.Ad', 'GROUP BY m.Ad', 'WHERE m.Ad'], 2, 'Müşteri başına = müşteriye göre grupla.'),
    mc(A, '`SELECT Sehir, COUNT(*) FROM Musteri GROUP BY Sehir WHERE COUNT(*) > 2;` sorgusundaki **hataların hepsi** hangi şıkta verilmiştir?',
       ["WHERE, GROUP BY'dan önce gelmeli + Aggregate koşul için HAVING kullanılmalı", 'COUNT(*) yanlış yazılmış', 'Hata yok', "Sadece: WHERE, GROUP BY'dan önce gelmeli"], 0,
       'Kahoot\'ta birden çok doğrulu soruydu. Doğrusu: … GROUP BY Sehir HAVING COUNT(*) > 2;'),
    mc(S, 'Fiyatlar: Kalem 10, Defter 25, Cetvel 40, Çanta 60. `WHERE Fiyat BETWEEN 25 AND 40` ne döndürür?', ['Defter ve Cetvel', 'Cetvel ve Çanta', 'Kalem, Defter, Cetvel', 'Sadece Defter'], 0, 'BETWEEN uç değerleri dahil eder: 25 ≤ fiyat ≤ 40.'),
    mc(S, "Soyadı 'K' ile başlayanları bulmak için doğru koşul hangisidir?", ["Soyad IN ('K')", "Soyad LIKE '%K'", "Soyad LIKE 'K%'", "Soyad = 'K%'"], 2, "'K%' K ile başlayan; '%K' K ile biten. = ile joker çalışmaz."),
]

KAHOOTS = [
    {'id': 'kahoot1', 'title': 'Kahoot 1 · İlişkiler ve ER diyagramı', 'questions': K1},
    {'id': 'kahoot2', 'title': 'Kahoot 2 · İlişkiler ve temel SQL (yazarak cevap)', 'questions': K2},
    {'id': 'kahoot3', 'title': 'Kahoot 3 · İlişkisel VT ve SQL temel kavramlar', 'questions': K3},
    {'id': 'kahoot4', 'title': 'Kahoot 4 · SQL ve sorgulama (GROUP BY, HAVING)', 'questions': K4},
    {'id': 'kahoot5', 'title': 'Kahoot 5 · Veritabanı ve SQL bilgi yarışması', 'questions': K5},
]
for k in KAHOOTS:
    for q in k['questions']:
        if q['type'] == 'mc': assert 0 <= q['a'] < len(q['opts']), q['q']

# ---------------- Ek: hocanın hesabındaki diğer Kahoot'lar (Şubat–Nisan 2026, dersin geçen dönemki hali)
G, F, V = 'giris', 'ileri2', 'gorunum'
K6 = [
    mc(I, 'ER diyagramında bir özniteliğin Birincil Anahtar (PK) olduğunu Chen notasyonunda nasıl gösteririz?', ['Yıldız işareti eklenir', 'Metnin altı çizilir', 'Metin kalın yazılır', 'Oval çift çizgi yapılır'], 1, 'Chen notasyonunda anahtar öznitelik altı çizili yazılır.'),
    mc(I, 'Bir okulda birçok öğrenci var, her öğrenci sadece bir okula kayıtlı. İlişki türü nedir?', ['Zayıf ilişki', '1:1', 'M:N', '1:N'], 3, 'Okul → çok öğrenci, öğrenci → tek okul: 1:N.'),
    mc(I, 'Chen notasyonunda "Elmas" (Diamond) sembolü neyi temsil eder?', ['İlişki (Relationship)', 'Veri Akışı', 'Öznitelik (Attribute)', 'Varlık Kümesi'], 0, 'Varlık dikdörtgen, öznitelik oval, ilişki elmas (eşkenar dörtgen).'),
    mc(I, 'Filmler ve Oyuncular (bir filmde çok oyuncu, bir oyuncu çok filmde) arasındaki ilişki hangisidir?', ['1:N', 'N:M', 'N:1', '1:1'], 1, 'İki taraf da çok: N:M (M:N), ara tablo gerekir.'),
    mc(I, 'ER diyagramlarının önemine dair hangisi **yanlıştır**?', ['Ekip içi iletişimi kolaylaştırır', 'SQL sorgularının temelini oluşturur', 'Tasarım hatalarının erken fark edilmesini sağlar', 'Sadece küçük ölçekli veri tabanları için geçerlidir'], 3, 'ER diyagramı her ölçekte kullanılır.'),
    mc(I, 'Chen notasyonunda öznitelikler (Attributes) hangi sembolle gösterilir?', ['Oval (Elips)', 'Üçgen', 'Kare', 'Daire'], 0, 'Öznitelik: oval.'),
    mc(I, 'ER diyagramında "Kardinalite" (Cardinality) neyi ifade eder?', ['Varlıklar arasındaki sayısal ilişki miktarını', 'Toplam tablo sayısını', 'Sorguların çalışma hızını', 'Verilerin disk üzerindeki boyutunu'], 0, 'Kardinalite: 1:1, 1:N, M:N.'),
]
K7 = [
    mc(I, 'Normalizasyonun temel amacı nedir?', ['Tekrarı azaltmak', 'Tabloyu büyütmek', 'Veri şifrelemek', 'Index silmek'], 0, 'Normalizasyon veri tekrarını ve tutarsızlığı azaltır.'),
    mc(I, 'Doğal anahtar (natural key) kullanmanın riski nedir?', ['Çoğalır', 'Değişebilir', 'Yavaşlatır', 'Anlamsızdır'], 1, 'TC no, e-posta gibi gerçek dünya değerleri zamanla değişebilir.'),
    mc(I, 'Vekil anahtarın (surrogate key) avantajı nedir?', ['Değişmez ve hızlı', 'Karmaşıktır', 'Güvensizdir', 'Anlamlıdır'], 0, 'AUTO_INCREMENT id gibi anlamı olmayan, değişmeyen kısa anahtar.'),
    mc(I, 'Cümleyi tamamla: "1:M en ..."', ['yaygın ilişkidir', 'karmaşık türdür', 'seyrek görülür', 'yavaş modeldir'], 0, '1:M (1:N) en yaygın ilişki türüdür.'),
    mc(I, 'Departman – Çalışan hangi ilişkidir?', ['Zayıf ilişki', 'M:N', '1:M', '1:1'], 2, 'Bir departmanda çok çalışan, çalışan tek departmanda.'),
    mc(I, 'Öğrenci – Ders hangi ilişkidir?', ['Bağsız', 'M:N', '1:M', '1:1'], 1, 'Öğrenci çok ders alır, derste çok öğrenci var.'),
    mc(I, 'Öğrenci kimlik kartı tablosunda FK hangisidir?', ['gecerlilik', 'ad', 'kart_no', 'ogrenci_id'], 3, 'Kart, ogrenci_id ile öğrenciye bağlanır; kart_no kartın kendi PK\'si.'),
    mc(I, '(Doğru/Yanlış) FK her zaman ara tabloda bulunur.', DY, 1, 'Yanlış: 1:N\'de FK çok tarafındaki normal tabloda (ders.bolum_no).'),
    mc(I, 'Öğretmen – Ders hangi ilişkidir?', ['1:M', 'Zayıf bağ', '1:1', 'M:N'], 0, 'Kahoot\'un cevabı: bir öğretmen çok ders verir, her dersin tek öğretmeni var.'),
    mc(I, 'Kategori – Ürün hangi ilişkidir?', ['1:M', '1:1', 'M:N', 'Yok'], 0, 'Kategoride çok ürün, ürün tek kategoride.'),
    mc(I, 'Ara tabloda hangi anahtarlar vardır?', ['Tek PK', 'Sadece indeks', 'İki FK', 'Sanal alan'], 2, 'İki tarafın PK\'lerini tutan iki FK (çoğu zaman birlikte PK).'),
]
K8 = [
    mc(G, 'Veritabanı nedir?', ['Bir programlama dili', 'İnternet tarayıcısı', 'Grafik tasarım aracı', 'Organize edilmiş veri koleksiyonu'], 3, 'Düzenli saklanan, ilişkili veri topluluğu.'),
    mc(G, 'Hangisi bir Veritabanı Yönetim Sistemi (DBMS) **değildir**?', ['Oracle', 'Microsoft Access', 'Microsoft Word', 'MySQL'], 2, 'Word kelime işlemcidir.'),
    mc(G, 'SQL\'in açılımı nedir?', ['Structured Query Language', 'Simple Question Logic', 'Software Quality Level', 'System Query Loop'], 0, 'Yapılandırılmış Sorgu Dili.'),
    mc(G, 'Bir tabloda satırlar neyi temsil eder?', ['Kayıtları (records)', 'Alanları (fields)', 'Tabloların ilişkisini', 'Veritabanı adını'], 0, 'Satır = kayıt, sütun = alan.'),
    mc(G, 'Aşağıdakilerden hangisi veritabanı **kullanmaz**?', ['Netflix', 'Online bankacılık', 'Hastane sistemi', 'Hesap makinesi uygulaması'], 3, 'Hesap makinesi kalıcı veri saklamaz.'),
    mc(G, 'Dünyanın en çok kullanılan açık kaynak veritabanı hangisidir?', ['Microsoft SQL Server', 'MongoDB', 'MySQL', 'Firebase'], 2, 'MySQL açık kaynak ilişkisel VTYS.'),
]
K9 = [
    mc(A, 'GROUP BY hangi komuttan **önce** yazılır?', ['HAVING', 'FROM', 'WHERE', 'SELECT'], 0, '… WHERE … GROUP BY … HAVING …'),
    mc(A, 'GROUP BY ile en sık hangi fonksiyon kullanılır?', ['LIMIT', 'LIKE', 'COUNT', 'CONCAT'], 2, 'COUNT, SUM, AVG gibi toplama fonksiyonları.'),
    mc(A, 'GROUP BY\'da ID kolonu kullanılmasının nedeni nedir?', ['Daha kolay yazım', 'Benzersiz gruplama', 'Daha hızlı sorgulama', 'Daha az bellek'], 1, 'Aynı isimli farklı kayıtlar (iki "Ahmet") karışmaz.'),
    mc(A, 'HAVING hangi komuttan **sonra** yazılır?', ['GROUP BY', 'SELECT', 'FROM', 'WHERE'], 0, 'HAVING, GROUP BY\'dan hemen sonra gelir.'),
]
K10 = [
    mc(J, 'JOIN kullanırken tabloları birleştiren (eşleşme koşulunu yazdığımız) anahtar kelime hangisidir?', ['ON', 'FROM', 'AS', 'WHERE'], 0, 'JOIN … ON a.id = b.a_id'),
    mc(J, '3 tabloyu birleştirmek için kaç tane JOIN gerekir?', ['2', '1', '4', '3'], 0, 'n tablo için n − 1 JOIN.'),
    mc(J, 'LEFT JOIN ile JOIN arasındaki temel fark nedir?', ['Hiçbir fark yoktur', 'LEFT JOIN eşleşme olmasa da sol tablonun tüm satırlarını getirir', 'JOIN her zaman daha fazla sonuç döndürür', 'LEFT JOIN daha hızlıdır'], 1, 'JOIN (INNER) sadece eşleşenleri getirir.'),
    mc(J, '`FROM bolge b JOIN iller i ON b.bolge_id = i.bolge_id` ifadesinde `b` ve `i` ne işe yarar?', ['Tablo takma adıdır (alias)', 'Filtre uygular', 'Kolon adı belirtir', 'Sıralama belirtir'], 0, 'Takma ad; AS yazmadan da verilebilir.'),
    mc(A, 'GROUP BY ile birlikte hangisi (aggregate olarak) kullanılamaz?', ['COUNT', 'MAX', 'LIKE', 'SUM'], 2, 'LIKE bir karşılaştırma operatörüdür, toplama fonksiyonu değil.'),
    mc(A, 'Aşağıdakilerden hangisi HAVING içinde kullanılabilir?', ['COUNT(*)', 'BETWEEN', 'LIKE', 'ORDER BY'], 0, 'Kahoot\'un cevabı: HAVING toplama fonksiyonlarıyla grupları süzer.'),
    mc(A, 'SQL\'de veritabanının sorguyu işleme sırası hangisidir?', ['WHERE → FROM → GROUP BY → HAVING → SELECT', 'FROM → SELECT → WHERE → HAVING → GROUP BY', 'SELECT → FROM → WHERE → GROUP BY → HAVING', 'FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT'], 3, 'Mantıksal çalışma sırası; yazım sırasından farklı.'),
    mc(A, 'Ankara\'nın ilçe sayısından fazla ilçesi olan illeri bulmak için en uygun yöntem hangisidir?', ['ORDER BY ilce_sayisi DESC LIMIT 1', "WHERE il_ad != 'Ankara'", "HAVING ilce_sayisi > (SELECT COUNT(*) FROM ... WHERE il_ad = 'Ankara')", 'HAVING ilce_sayisi > 25'], 2, 'Karşılaştırılacak sayı sabit yazılmaz, alt sorguyla hesaplanır.'),
]
K11 = [
    mc(F, 'Hem tarihi hem saati aynı anda döndüren MySQL fonksiyonu hangisidir?', ['CURTIME()', 'CURRENT_TIMESTAMP', 'CURDATE()', 'SYSDATE_NOW()'], 1, 'CURRENT_TIMESTAMP (NOW() ile aynı): 2024-11-15 14:05:30.'),
    mc(F, '`SELECT CURDATE();` ne döndürür?', ['11-15-2024', '14:05:30', '2024-11-15', '2024-11-15 14:05'], 2, 'Sadece tarih, YYYY-MM-DD.'),
    mc(F, 'EXTRACT fonksiyonunun doğru sözdizimi hangisidir?', ['EXTRACT(YEAR FROM tarih)', 'EXTRACT(YEAR OF tarih)', 'EXTRACT(tarih FROM YEAR)', 'EXTRACT(tarih, YEAR)'], 0, 'EXTRACT(birim FROM tarih).'),
    mc(F, "`SELECT EXTRACT(MONTH FROM '2010-04-15');` ne döndürür?", ['4', '10', '2010', '15'], 0, 'Ay: 4 (Kahoot\'ta "04" yazıyordu).'),
    mc(F, 'EXTRACT\'ta kullanılan bileşenlerden hangisi **yanlıştır**? (derste gösterilen listeye göre)', ['YEAR', 'WEEK', 'SECOND', 'MINUTE'], 1, 'Kahoot\'un cevabı WEEK. Not: MySQL aslında WEEK\'i de destekler; derste gösterilen listede yoktu.'),
    mc(F, 'Bugünkü tarihe 10 gün ekleyen sorgu hangisidir?', ['NOW() + INTERVAL 10 DAY', 'DATE_ADD(NOW(), INTERVAL 10 DAY)', 'ADD_DATE(NOW(), INTERVAL 10)', 'DATE_ADD(NOW(), 10 DAY)'], 1, 'Kahoot\'un cevabı DATE_ADD(…, INTERVAL 10 DAY). (a da MySQL\'de çalışır ama derste DATE_ADD gösterildi.)'),
    mc(F, 'Mevcut saate 90 dakika ekleyen sorgu hangisidir?', ['DATE_SUB(NOW(), INTERVAL 90 MINUTE)', 'DATE_ADD(NOW(), INTERVAL 90 MINUTE)', 'DATE_ADD(NOW(), INTERVAL 1.5 HOUR)', 'DATE_ADD(NOW(), INTERVAL 90 SECOND)'], 1, 'DATE_SUB çıkarır; INTERVAL ondalık saat almaz.'),
    mc(F, 'Türkçe gün/ay adı almak için hangi komut çalıştırılmalıdır?', ["USE LANGUAGE 'tr_TR'", "SET NLS_LANGUAGE = 'TURKISH'", "SET lc_time_names = 'tr_TR'", "SET LANGUAGE = 'Turkish'"], 2, 'lc_time_names MONTHNAME, DAYNAME, DATE_FORMAT adlarını değiştirir.'),
    mc(F, "`lc_time_names = 'tr_TR'` iken `MONTHNAME('1997-04-03')` ne döndürür?", ['Mart', 'Mayıs', 'Nisan', '04'], 2, '4. ay: Nisan.'),
    mc(F, "`SELECT DATEDIFF('2024-04-25', '2024-04-15');` ne döndürür?", ['10', '15', '-10', '25'], 0, 'İlk tarih − ikinci tarih = 10 gün.'),
    mc(F, 'İki saat değeri arasındaki farkı HH:MM:SS formatında döndüren fonksiyon hangisidir?', ['TIMESTAMPDIFF()', 'TIMEDIFF()', 'DATEDIFF()', 'TIME_BETWEEN()'], 1, 'DATEDIFF gün sayısı verir, TIMEDIFF saat farkı.'),
    mc(F, "`DATE_FORMAT(tarih, '%d %M %Y %W')` hangi çıktıyı üretir? (Türkçe ayarda)", ['15 Kasım 2024 Cuma', '2024/11/15 Cuma', 'Cuma, 15-11-2024', '15 Kas 2024 Cum'], 0, '%d gün, %M ay adı, %Y 4 haneli yıl, %W gün adı.'),
    mc(F, 'DATE_FORMAT içinde günü 2 haneli sayı olarak gösteren format kodu hangisidir?', ['%D', '%d', '%G', '%y'], 1, '%d: 01–31. %D: 1st, 2nd… %y: 2 haneli yıl.'),
    mc(F, 'Tarih/saat fonksiyonları SQL\'in hangi cümleleriyle kullanılabilir?', ['Yalnızca ORDER BY', 'Yalnızca SELECT', 'SELECT, WHERE ve ORDER BY', 'Yalnızca WHERE'], 2, 'Örn. WHERE YEAR(tarih) = 2024, ORDER BY MONTH(tarih).'),
]
K12 = [
    mc(F, "`UPPER('ankara')` sonucu nedir?", ["'ANkara'", "'ankara'", "'Ankara'", "'ANKARA'"], 3, 'UPPER tamamını büyük harfe çevirir.'),
    mc(F, 'Türkçe karakter içeren metindeki karakter sayısını doğru ölçen fonksiyon hangisidir?', ['SIZE()', 'CHAR_LENGTH()', 'COUNT()', 'LENGTH()'], 1, 'LENGTH byte sayar (ş, ğ 2 byte); CHAR_LENGTH karakter sayar.'),
    mc(F, "`SELECT LEFT('Bilgisayar', 4);` sonucu nedir?", ["'sara'", "'Bilg'", "'yar '", "'Bilgi'"], 1, 'Soldan 4 karakter.'),
    mc(F, "`SELECT LPAD('42', 6, '0');` sonucu nedir?", ["'42 '", "'004200'", "'420000'", "'000042'"], 3, 'Soldan 0 ile 6 karaktere tamamlar.'),
    mc(F, "`TRIM(' Merhaba ')` sonucu nedir?", ["'Merhaba '", "' Merhaba'", "'Merhaba'", "'merhaba'"], 2, 'Baştaki ve sondaki boşlukları siler.'),
    mc(F, "`SELECT REPLACE('05-32-100', '-', '');` sonucu nedir?", ["'053 2100'", "'05-32-100'", "'0532100'", "'05 32 100'"], 2, 'Bütün - karakterleri boş metinle değiştirilir.'),
    mc(F, "`INSTR('Ankara', 'kar')` ne döndürür?", ['2', '1', '4', '3'], 3, 'A1 n2 k3: "kar" 3. karakterde başlar.'),
    mc(F, "`SELECT SUBSTRING('Programlama', 8, 4);` sonucu nedir?", ["'ama '", "'Prog'", "'gram'", "'lama'"], 3, '8. karakterden (l) başlayıp 4 karakter: lama.'),
    mc(F, '`FORMAT(1234567.5, 2)` sonucu nedir?', ["'1.234.567,50'", "'1234567.50'", "'12345.6750'", "'1,234,567.50'"], 3, 'Varsayılan (en_US) biçim: binlik virgül, ondalık nokta.'),
    mc(F, "`ogrenci_no = '2021001003'` iken sağdan 4 karakteri almak için hangisi kullanılır?", ['LEFT(ogrenci_no, 4)', 'TRIM(ogrenci_no, 4)', 'INSTR(ogrenci_no, 4)', 'RIGHT(ogrenci_no, 4)'], 3, 'RIGHT → 1003.'),
    mc(F, "`SELECT CONCAT_WS(' ', 'Ahmet', NULL, 'Yilmaz');` sonucu nedir?", ['NULL', "'Ahmet Yilmaz'", "'Ahmet NULL Yilmaz'"], 1, 'CONCAT_WS NULL\'ları atlar. (CONCAT olsaydı sonuç NULL olurdu.)'),
]
K13 = [
    mc(V, 'SQL\'de VIEW (Görünüm) nedir?', ['Verileri fiziksel olarak depolayan tablo', 'Yalnızca sayısal veri tutan yapı', 'Birden fazla veritabanını birleştiren araç', 'SELECT sorgusuna dayalı sanal bir tablo'], 3, 'VIEW veri saklamaz; kayıtlı bir SELECT\'tir.'),
    mc(V, 'Yeni bir VIEW oluşturmak için hangi komut kullanılır?', ['MAKE VIEW view_adi FROM SELECT', 'CREATE VIEW view_adi AS SELECT', 'BUILD VIEW view_adi USING SELECT', 'INSERT INTO view_adi AS SELECT'], 1, 'CREATE VIEW ad AS SELECT …;'),
    mc(V, 'VIEW yapısında hangisi **yapılamaz**? (derste anlatılana göre)', ['WHERE ile filtreleme', 'Doğrudan INSERT / UPDATE / DELETE yapmak', 'JOIN ile birden fazla tabloyu birleştirmek', 'GROUP BY ile gruplama'], 1, 'Derste anlatılan: VIEW üzerinden veri değiştirilmez (JOIN/GROUP BY\'lı VIEW\'larda MySQL de izin vermez).'),
    mc(V, '`DROP VIEW view_adi;` ne işe yarar?', ['VIEW\'ı kalıcı olarak siler', 'Geçici olarak devre dışı bırakır', 'Adını değiştirir', 'İçindeki tüm satırları temizler'], 0, 'Sadece VIEW tanımı silinir; temel tablolar etkilenmez.'),
    mc(V, '`CREATE OR REPLACE VIEW` ne zaman kullanılır?', ['Mevcut VIEW\'ı silmeden güncellemek için', 'Başka veritabanına kopyalamak için', 'İki VIEW\'ı birleştirmek için', 'Verileri yedeklemek için'], 0, 'Varsa tanımı değiştirir, yoksa oluşturur.'),
    mc(V, 'VIEW içinde COUNT, SUM gibi aggregate fonksiyon kullanırken ne zorunludur?', ['Sonuçlara AS ile takma ad verilmesi', 'Sütun adlarının tek tırnak içine alınması', 'Fonksiyonların büyük harfle yazılması', 'GROUP BY\'ın VIEW öncesinde yazılması'], 0, 'VIEW\'ın sütun adı olacağı için COUNT(*) AS ders_sayisi gibi ad verilir.'),
    mc(V, 'VIEW her sorgulandığında ne olur?', ['Tanımı silinir', 'Kalıcı tabloya dönüşür', 'Yalnızca önbellekten okunur', 'Veritabanı motoru VIEW\'ı yeniden üretir'], 3, 'SELECT her seferinde güncel veriyle yeniden çalışır.'),
    mc(V, 'Bir VIEW\'ın dayandığı tabloya ne ad verilir?', ['Source Table', 'Root Table', 'Master Table', 'Base Table (Temel Tablo)'], 3, 'Temel tablo (base table).'),
]
K14 = [
    mc(J, 'Hangi JOIN türü iki tablonun kartezyen çarpımını üretir?', ['LEFT JOIN', 'INNER JOIN', 'RIGHT JOIN', 'CROSS JOIN'], 3, 'Her satır her satırla: m × n.'),
    mc(J, 'Birden fazla tabloyu birleştiren SQL anahtar kelimesi hangisidir?', ['LINK', 'MERGE', 'UNION', 'JOIN'], 3, 'UNION sonuçları alt alta ekler; tabloları sütun bazında birleştiren JOIN.'),
    mc(J, 'Doktor ve hasta tablolarını birleştirmek için hangisi doğrudur?', ['doktor JOIN hasta ON doktor.id = hasta.dok_id', 'doktor MERGE hasta ON id', 'doktor CONNECT hasta ON id', 'doktor UNION hasta'], 0, 'JOIN … ON PK = FK.'),
    mc(J, 'RIGHT JOIN ile LEFT JOIN arasındaki temel fark nedir?', ['İkisi çıktı üretmez', 'Sol tablo önceliklidir', 'Sağ tablo önceliklidir', 'Fark yoktur'], 2, 'RIGHT JOIN\'de sağ tablonun bütün satırları gelir.'),
    mc(J, 'SELECT sorgusunda tablo takma adı (alias) hangi anahtar kelimeyle tanımlanır?', ['BY', 'AS', 'TO', 'IS'], 1, 'AS (isteğe bağlı, yazılmayabilir de).'),
    mc(A, 'Her bölgedeki il sayısını bulmak için hangi fonksiyon kullanılır?', ['AVG(il_id)', 'COUNT(il_id)', 'SUM(il_id)', 'MAX(il_id)'], 1, 'Sayı → COUNT; id\'leri toplamak anlamsız.'),
    mc(A, 'Bir gruptaki en büyük değeri döndüren aggregate fonksiyon hangisidir?', ['AVG()', 'SUM()', 'COUNT()', 'MAX()'], 3, 'MAX en büyük, MIN en küçük.'),
    mc(A, 'GROUP BY sorgusunda ORDER BY nereye yazılır?', ['GROUP BY\'dan önce', 'GROUP BY\'dan sonra', 'FROM\'dan önce', 'WHERE\'den önce'], 1, '… GROUP BY … HAVING … ORDER BY …'),
    mc(F, 'MySQL\'de anlık tarih ve saati döndüren fonksiyon hangisidir?', ['TODAY()', 'DATE()', 'NOW()', 'TIME()'], 2, 'NOW(): 2024-11-15 14:05:30.'),
    mc(F, "`YEAR('2024-06-15')` ne döndürür?", ['06', '2024', '15', '2024-06'], 1, 'Yıl kısmı.'),
    mc(F, 'İki tarih arasındaki gün farkını hesaplayan fonksiyon hangisidir?', ['DATEADD()', 'DIFFDATE()', 'TIMEDIFF()', 'DATEDIFF()'], 3, 'DATEDIFF(tarih1, tarih2) gün sayısı.'),
    mc(F, "`DATE_FORMAT(tarih, '%d/%m/%Y')` tarihi nasıl biçimlendirir?", ['YYYY/DD/MM', 'MM-DD-YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'], 2, '%d gün, %m ay, %Y yıl, araya /.'),
    mc(F, "`DATE_ADD('2024-01-01', INTERVAL 30 DAY)` ne döndürür?", ['2024-02-01', '2024-01-31', '2024-12-31', '2024-01-30'], 1, '1 Ocak + 30 gün = 31 Ocak.'),
    mc(F, "`MONTH('2024-08-20')` ne döndürür?", ['08-20', '20', '8', '2024'], 2, 'Ay sayısı: 8.'),
    mc(F, 'Yalnızca tarihi (saat olmadan) döndüren fonksiyon hangisidir?', ['YEAR()', 'DATE()', 'NOW()', 'TIME()'], 1, 'DATE(NOW()) → 2024-11-15.'),
    mc(F, '`CURDATE()` ve `CURTIME()` farkı nedir?', ['CURDATE() tarihi verir (saat yok), CURTIME() saati verir', 'İkisi de tarih ve saati verir', 'CURDATE() saati, CURTIME() tarihi verir', 'Fark yoktur'], 0, 'CURDATE: 2024-11-15, CURTIME: 14:05:30.'),
    mc(F, '2024 yılında yazılan reçeteleri filtrelemek için hangi koşul kullanılır?', ["WHERE DATE = '2024'", 'WHERE tarih = 2024', 'HAVING YEAR = 2024', 'WHERE YEAR(tarih) = 2024'], 3, 'Tarihin yıl kısmı alınıp karşılaştırılır.'),
    mc(F, '`DATE_SUB()` ne işe yarar?', ['Tarih ekler', 'Tarihi siler', 'Tarihten süre çıkarır', 'Tarihi sıralar'], 2, 'DATE_SUB(tarih, INTERVAL 7 DAY).'),
    mc(F, "`DAYOFWEEK('2024-01-01')` ne döndürür?", ['Haftanın gün numarası', 'Yılın kaçıncı günü', 'Ayın kaçıncı günü', 'Toplam gün sayısı'], 0, '1 = Pazar … 7 = Cumartesi.'),
    mc(F, 'Hastanın doğum tarihinden yaşını hesaplamak için hangisi kullanılır?', ['DAY(dogum_tar)', 'YEAR(NOW()) - YEAR(dogum_tar)', 'MONTH(dogum_tar)', 'DATE(dogum_tar)'], 1, 'Bu yıl − doğum yılı.'),
    mc(V, 'MySQL\'de saklı yordam (stored procedure) oluşturmak için hangisi kullanılır?', ['DEFINE PROCEDURE', 'CREATE PROCEDURE', 'MAKE PROCEDURE', 'BUILD PROCEDURE'], 1, 'CREATE PROCEDURE ad(…) BEGIN … END'),
    mc(V, 'Saklı yordamı çalıştırmak için hangi anahtar kelime kullanılır?', ['START', 'RUN', 'CALL', 'EXEC'], 2, 'CALL yordam_adi(…); (EXEC SQL Server\'da).'),
    mc(V, 'Saklı yordamda IN parametresi ne anlama gelir?', ['İkisi aynıdır', 'Hem alır hem verir', 'Değer döndürür', 'Değer alır (içeriye)'], 3, 'Dışarıdan yordama değer gelir.'),
    mc(V, 'Saklı yordamda OUT parametresi ne işe yarar?', ['Sorguyu siler', 'Hem alır hem verir', 'Sonucu dışa aktarır', 'Değer alır'], 2, 'Yordamın sonucu dışarı verilir.'),
    mc(V, 'DELIMITER komutunun saklı yordamdaki amacı nedir?', ['Satır sonunu kaldırır', 'Ayraç (bitiş) karakterini değiştirir', 'Yordamı siler', 'Tabloları böler'], 1, 'Yordamın içindeki ; komutu bitirmesin diye ayraç // yapılır.'),
    mc(V, 'Saklı yordam içinde yerel değişken tanımlamak için hangisi kullanılır?', ['SET', 'DEFINE', 'LET', 'DECLARE'], 3, 'DECLARE toplam INT; değer atamak için SET.'),
    mc(V, 'Saklı yordamı silmek için hangisi kullanılır?', ['ERASE PROCEDURE', 'DROP PROCEDURE', 'REMOVE PROCEDURE', 'DELETE PROCEDURE'], 1, 'DROP PROCEDURE ad;'),
    mc(V, 'Saklı yordamda INOUT parametresi ne anlama gelir?', ['Yalnızca değer alır', 'Hem değer alır hem verir', 'Yalnızca değer verir', 'Parametre almaz'], 1, 'IN + OUT birlikte.'),
]
EK = [('Kahoot 6 · ER diyagrama giriş', K6), ('Kahoot 7 · PK ve FK hızlı tur', K7), ('Kahoot 8 · Temel VT ve SQL', K8), ('Kahoot 9 · GROUP BY ve HAVING', K9),
      ('Kahoot 10 · JOIN, GROUP BY, HAVING', K10), ('Kahoot 11 · Tarih ve saat fonksiyonları', K11), ('Kahoot 12 · Metin fonksiyonları', K12),
      ('Kahoot 13 · VIEW ve alt sorgular', K13), ('Kahoot 14 · JOIN, tarih, saklı yordam', K14)]
for _, L in EK:
    for q in L: assert 0 <= q['a'] < len(q['opts']), q['q']
TUM = [dict(q, src=t.split(' · ')[0]) for t, L in [(k['title'], k['questions']) for k in KAHOOTS] + EK for q in L]
