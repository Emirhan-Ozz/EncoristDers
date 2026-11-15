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
