/* MBP203 test soruları. tools/build.py ile üretildi. */
window.EXAMS = [
 {
  "id": "uygulama",
  "title": "GROUP BY / HAVING uygulaması",
  "group": "hoca",
  "mode": "practice",
  "desc": "Derste yapılan magaza uygulamasının (10 soru + bonus) sonuçlarını soran sorular. Anında kontrol.",
  "questions": [
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Ürünlerin ortalama fiyatını 2 basamağa yuvarlamak için hangisi yazılır?",
    "opts": [
     "AVG(fiyat, 2)",
     "AVG(ROUND(fiyat))",
     "FORMAT AVG(fiyat)",
     "ROUND(fiyat, 2) AVG",
     "ROUND(AVG(fiyat), 2)"
    ],
    "a": 4,
    "exp": "Uygulama soru 2."
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "WHERE ile HAVING için hangisi doğrudur?",
    "opts": [
     "WHERE toplama fonksiyonu alır",
     "HAVING sadece ORDER BY ile kullanılır",
     "WHERE gruplamadan önce satırları, HAVING gruplamadan sonra grupları süzer",
     "HAVING gruplamadan önce çalışır",
     "İkisi aynı anda çalışır"
    ],
    "a": 2,
    "exp": "Uygulamadaki kısa hatırlatma."
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Doğru yazım sırası hangisidir?",
    "opts": [
     "FROM, SELECT, WHERE, ORDER BY, GROUP BY, HAVING",
     "SELECT, WHERE, FROM, GROUP BY, ORDER BY, HAVING",
     "SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY",
     "SELECT, FROM, GROUP BY, WHERE, HAVING, ORDER BY",
     "SELECT, FROM, WHERE, HAVING, GROUP BY, ORDER BY"
    ],
    "a": 2,
    "exp": "Uygulama: SELECT … FROM … JOIN … WHERE … GROUP BY … HAVING … ORDER BY …"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`magaza` veri tabanında aşağıdaki sorgu kaç satır döndürür? (Şehirler: İzmir 3, İstanbul 3, Ankara 2, Gaziantep 1, Bursa 1 müşteri)",
    "opts": [
     "3",
     "2",
     "5",
     "1",
     "10"
    ],
    "a": 0,
    "exp": "Birden fazla müşterisi olan şehirler: İzmir, İstanbul, Ankara (uygulama soru 7).",
    "code": "SELECT sehir, COUNT(*) FROM musteriler GROUP BY sehir HAVING COUNT(*) > 1;"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`magaza` veri tabanında her şehirdeki müşteri sayısını veren sorgu (uygulama soru 3) kaç satır döndürür?",
    "opts": [
     "10",
     "6",
     "5",
     "3",
     "1"
    ],
    "a": 2,
    "exp": "5 farklı şehir: İzmir, İstanbul, Ankara, Gaziantep, Bursa.",
    "code": "SELECT sehir, COUNT(*) AS musteri_sayisi FROM musteriler GROUP BY sehir;"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu sonucunda \"Teslim Edildi\" satırındaki sayı kaçtır?",
    "opts": [
     "1",
     "4",
     "6",
     "3",
     "2"
    ],
    "a": 3,
    "exp": "Durum bazında sayım (uygulama soru 4): Teslim Edildi 3, İptal 2, Kargoda 1.",
    "code": "SELECT durum, COUNT(*) AS adet\nFROM siparisler\nGROUP BY durum;",
    "tables": [
     {
      "name": "siparisler",
      "cols": [
       "siparis_id",
       "musteri_id",
       "durum"
      ],
      "rows": [
       [
        "1",
        "1",
        "Teslim Edildi"
       ],
       [
        "2",
        "2",
        "Teslim Edildi"
       ],
       [
        "3",
        "1",
        "Kargoda"
       ],
       [
        "4",
        "3",
        "İptal"
       ],
       [
        "5",
        "1",
        "Teslim Edildi"
       ],
       [
        "6",
        "2",
        "İptal"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu sonucunda 1 numaralı siparişin toplamı kaçtır?",
    "opts": [
     "640.00",
     "1250.00",
     "1570.00",
     "1890.00",
     "3"
    ],
    "a": 3,
    "exp": "Satır tutarı adet * birim_fiyat: 1·1250 + 2·320 = 1890.00 (uygulama soru 6).",
    "code": "SELECT siparis_id, SUM(adet * birim_fiyat) AS toplam\nFROM siparis_detay\nGROUP BY siparis_id;",
    "tables": [
     {
      "name": "siparis_detay",
      "cols": [
       "siparis_id",
       "urun_id",
       "adet",
       "birim_fiyat"
      ],
      "rows": [
       [
        "1",
        "1",
        "1",
        "1250.00"
       ],
       [
        "1",
        "8",
        "2",
        "320.00"
       ],
       [
        "2",
        "2",
        "1",
        "3400.00"
       ],
       [
        "3",
        "8",
        "3",
        "320.00"
       ],
       [
        "3",
        "9",
        "1",
        "410.00"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Uygulama soru 10'da (iptaller hariç, cirosu 5000 TL'yi geçen şehirler) iptal edilen siparişler hangi bölümde elenir?",
    "opts": [
     "WHERE",
     "HAVING",
     "ORDER BY",
     "GROUP BY",
     "SELECT"
    ],
    "a": 0,
    "exp": "İptal tek tek satırların özelliğidir, gruplamadan önce WHERE ile atılır; 5000 koşulu ise HAVING'dedir."
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`magaza` veri tabanında uygulama soru 10'un sorgusu kaç şehir döndürür?",
    "opts": [
     "2",
     "1",
     "5",
     "4",
     "3"
    ],
    "a": 0,
    "exp": "İstanbul (16579.70) ve İzmir (13014.20). Gaziantep (3899.00) ve Ankara (3500.00) 5000 TL'nin altında kalır; Bursa'dan sipariş yok.",
    "code": "SELECT m.sehir, SUM(d.adet * d.birim_fiyat) AS ciro\nFROM musteriler m\nJOIN siparisler s    ON s.musteri_id = m.musteri_id\nJOIN siparis_detay d ON d.siparis_id = s.siparis_id\nWHERE s.durum <> 'İptal'\nGROUP BY m.sehir\nHAVING SUM(d.adet * d.birim_fiyat) > 5000\nORDER BY ciro DESC;"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Aynı sorguda (uygulama 10) ilk satırdaki şehir hangisidir?",
    "opts": [
     "Ankara",
     "İzmir",
     "Gaziantep",
     "İstanbul",
     "Bursa"
    ],
    "a": 3,
    "exp": "En yüksek ciro İstanbul'da.",
    "code": "-- uygulama soru 10'un sorgusu, ORDER BY ciro DESC"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`magaza` veri tabanında toplam kaç müşteri vardır? (uygulama soru 1)",
    "opts": [
     "5",
     "30",
     "18",
     "9",
     "10"
    ],
    "a": 4,
    "exp": "`SELECT COUNT(*) FROM musteriler;`",
    "code": "SELECT COUNT(*) FROM musteriler;"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`magaza` veri tabanında en az 2 sipariş vermiş müşteri sayısı kaçtır? (uygulama soru 8)",
    "opts": [
     "6",
     "2",
     "3",
     "8",
     "10"
    ],
    "a": 0,
    "exp": "Ayşe 3, Mehmet 3, Zeynep 3, Elif 2, Can 2, Deniz 2 sipariş verdi.",
    "code": "SELECT m.ad, m.soyad, COUNT(s.siparis_id) AS siparis_sayisi\nFROM musteriler m\nJOIN siparisler s ON s.musteri_id = m.musteri_id\nGROUP BY m.musteri_id, m.ad, m.soyad\nHAVING COUNT(s.siparis_id) >= 2;"
   },
   {
    "type": "match",
    "topic": "ileri1",
    "q": "Sorgu bölümlerini görevleriyle eşleştirin.",
    "pairs": [
     [
      "WHERE",
      "Gruplamadan önce satırları süzer"
     ],
     [
      "GROUP BY",
      "Aynı değerli satırları gruplar"
     ],
     [
      "HAVING",
      "Gruplamadan sonra grupları süzer"
     ],
     [
      "ORDER BY",
      "Sonucu sıralar"
     ]
    ],
    "exp": "Uygulamadaki kısa hatırlatma.",
    "choices": [
     "Sonucu sıralar",
     "Gruplamadan önce satırları süzer",
     "Aynı değerli satırları gruplar",
     "Gruplamadan sonra grupları süzer"
    ]
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`magaza` veri tabanında hiç satılmamış ürünler (uygulama bonus) hangileridir?",
    "opts": [
     "Kamp Sandalyesi, Termos",
     "Mekanik Klavye",
     "Mekanik Klavye, Kamp Sandalyesi",
     "Hepsi satıldı",
     "Oyuncak"
    ],
    "a": 2,
    "exp": "LEFT JOIN + GROUP BY + HAVING COUNT(d.detay_id) = 0.",
    "code": "SELECT u.urun_adi\nFROM urunler u\nLEFT JOIN siparis_detay d ON d.urun_id = u.urun_id\nGROUP BY u.urun_id, u.urun_adi\nHAVING COUNT(d.detay_id) = 0\nORDER BY u.urun_id;"
   }
  ]
 },
 {
  "id": "deneme1",
  "title": "Deneme sınavı 1",
  "desc": "20 soru: 17 test, 2 boşluk doldurma, 1 eşleştirme. 7 konudan, diğer denemelerle ortak soru yok.",
  "featured": true,
  "questions": [
   {
    "type": "mc",
    "topic": "giris",
    "q": "\"Ahmet'in notu sınıf ortalamasının üstünde\" ifadesi hangisine örnektir?",
    "opts": [
     "Şema",
     "Metadata",
     "Kısıt",
     "Bilgi",
     "Veri"
    ],
    "a": 3,
    "exp": "Ham notlar işlenip yorumlanmış, anlam kazanmış: bilgi."
   },
   {
    "type": "mc",
    "topic": "giris",
    "q": "İşlenmemiş, tek başına anlam taşımayan ham gerçeklere ne denir?",
    "opts": [
     "Bilgi",
     "Veri",
     "Şema",
     "Rapor",
     "Veri tabanı"
    ],
    "a": 1,
    "exp": "Veri ham değerdir (85, Ahmet). İşlenip anlam kazanınca bilgi olur."
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Normalizasyonun temel amacı hangisidir?",
    "opts": [
     "Yabancı anahtarları kaldırmak",
     "Bütün sütunları NULL yapmak",
     "Tablo sayısını bire indirmek",
     "Sorguları yavaşlatmak",
     "Veri tekrarını ve güncelleme anomalilerini azaltmak"
    ],
    "a": 4,
    "exp": "Ekleme, silme, güncelleme anomalileri azalır."
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "6 satır, 4 sütunlu bir tablonun **kardinalitesi** kaçtır?",
    "opts": [
     "1",
     "24",
     "6",
     "4",
     "10"
    ],
    "a": 2,
    "exp": "Kardinalite = satır (kayıt) sayısı."
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Tablodaki **bütün satırları** silip yapıyı koruyan ve AUTO_INCREMENT sayacını sıfırlayan komut hangisidir?",
    "opts": [
     "DROP TABLE",
     "TRUNCATE TABLE",
     "DELETE TABLE",
     "ALTER TABLE … RESET",
     "CLEAR TABLE"
    ],
    "a": 1,
    "exp": "TRUNCATE hızlıdır, WHERE almaz."
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Ana tablodaki satır silindiğinde ona bağlı satırların da otomatik silinmesi için FK'ye ne eklenir?",
    "opts": [
     "ON DELETE RESTRICT",
     "ON DELETE SET NULL",
     "DROP CASCADE",
     "ON DELETE CASCADE",
     "ON UPDATE NO ACTION"
    ],
    "a": 3,
    "exp": "Derste müşteri silinince siparişlerinin de silinmesi için kullanıldı."
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Hangisi **DDL** komutudur?",
    "opts": [
     "INSERT",
     "TRUNCATE",
     "UPDATE",
     "SELECT",
     "DELETE"
    ],
    "a": 1,
    "exp": "TRUNCATE veriyi silse de tabloyu yeniden oluşturduğu için DDL sayılır.",
    "why": {
     "4": "DELETE DML'dir."
    }
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Bir SELECT ifadesinde yazım sırası hangisidir?",
    "opts": [
     "WHERE … SELECT … FROM",
     "FROM … SELECT … WHERE … LIMIT",
     "SELECT … FROM … WHERE … ORDER BY … LIMIT",
     "SELECT … WHERE … FROM … ORDER BY",
     "SELECT … FROM … ORDER BY … WHERE"
    ],
    "a": 2,
    "exp": "WHERE FROM'dan sonra, ORDER BY WHERE'den sonra, LIMIT en sonda."
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Sorgu sonucu hangisidir?",
    "opts": [
     "İrem",
     "Deniz, Kerem",
     "Ahmet",
     "Hiçbiri",
     "Kerem"
    ],
    "a": 4,
    "exp": "ders_kaydi'nda hiç kaydı olmayan tek öğrenci 20250106 Kerem.",
    "code": "SELECT ad FROM ogrenci WHERE ogrenci_no NOT IN (SELECT ogrenci_no FROM ders_kaydi);",
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
    "type": "mc",
    "topic": "sorgular",
    "q": "Sorgu sonucu hangisidir?",
    "opts": [
     "Zehra",
     "Ahmet, Zehra",
     "Hiçbiri",
     "Deniz",
     "Ahmet"
    ],
    "a": 0,
    "exp": "'%a' a ile biten adlar: Zehr**a**.",
    "code": "SELECT ad FROM ogrenci WHERE ad LIKE '%a';",
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
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`COUNT(*)` ile `COUNT(harf_notu)` arasındaki fark nedir?",
    "opts": [
     "COUNT(*) sadece NULL'ları sayar",
     "COUNT(harf_notu) tekrar edenleri saymaz",
     "COUNT(*) tüm satırları, COUNT(harf_notu) NULL olmayanları sayar",
     "COUNT(*) hata verir",
     "İkisi her zaman aynı sonucu verir"
    ],
    "a": 2,
    "exp": "Toplama fonksiyonları (COUNT(*) hariç) NULL'ları atlar."
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu sonucu kaçtır?",
    "opts": [
     "4",
     "21",
     "3.5000",
     "3.50",
     "3"
    ],
    "a": 2,
    "exp": "AVG: 21 / 6 = 3.5. MySQL INT ortalamasını 4 ondalıkla gösterir.",
    "code": "SELECT AVG(kredi) FROM ders;",
    "tables": [
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
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`magaza` veri tabanında uygulama soru 10'un sorgusu kaç şehir döndürür?",
    "opts": [
     "2",
     "1",
     "5",
     "4",
     "3"
    ],
    "a": 0,
    "exp": "İstanbul (16579.70) ve İzmir (13014.20). Gaziantep (3899.00) ve Ankara (3500.00) 5000 TL'nin altında kalır; Bursa'dan sipariş yok.",
    "code": "SELECT m.sehir, SUM(d.adet * d.birim_fiyat) AS ciro\nFROM musteriler m\nJOIN siparisler s    ON s.musteri_id = m.musteri_id\nJOIN siparis_detay d ON d.siparis_id = s.siparis_id\nWHERE s.durum <> 'İptal'\nGROUP BY m.sehir\nHAVING SUM(d.adet * d.birim_fiyat) > 5000\nORDER BY ciro DESC;"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Sorgu kaç satır döndürür?",
    "opts": [
     "5",
     "1",
     "4",
     "30",
     "6"
    ],
    "a": 0,
    "exp": "Kerem'in kartı yok; INNER JOIN onu getirmez.",
    "code": "SELECT o.ad, k.kart_no FROM ogrenci o JOIN ogrenci_karti k ON k.ogrenci_no = o.ogrenci_no;",
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
      "name": "ogrenci_karti",
      "cols": [
       "kart_no",
       "ogrenci_no"
      ],
      "rows": [
       [
        "5001",
        "20250101"
       ],
       [
        "5002",
        "20250102"
       ],
       [
        "5003",
        "20250103"
       ],
       [
        "5004",
        "20250104"
       ],
       [
        "5005",
        "20250105"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Aşağıdaki sorgu neden **hata verir**?",
    "opts": [
     "Takma ad kullanılamaz",
     "JOIN yerine WHERE yazılmalıydı",
     "SELECT'te iki sütun olamaz",
     "ON yerine IN gelmeli",
     "ogrenci_no iki tabloda da var; hangi tablonunki olduğu belirsiz"
    ],
    "a": 4,
    "exp": "#1052 Column 'ogrenci_no' in field list is ambiguous. Çözüm: `o.ogrenci_no`.",
    "code": "SELECT ogrenci_no, ders_kodu FROM ogrenci o JOIN ders_kaydi k ON k.ogrenci_no = o.ogrenci_no;"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Görünüm oluşturulduktan sonra temel tabloya yeni satır eklenirse görünüm ne gösterir?",
    "opts": [
     "Eski veriyi gösterir",
     "Yeni satırı da gösterir",
     "Hata verir",
     "Görünüm silinir",
     "Sadece yeni satırı gösterir"
    ],
    "a": 1,
    "exp": "Görünüm her seferinde sorguyu yeniden çalıştırır.",
    "code": "CREATE VIEW ucuz AS SELECT ad FROM urun WHERE fiyat < 50;\nINSERT INTO urun VALUES (2, 'Silgi', 5);\nSELECT * FROM ucuz;"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "`DROP VIEW ogrenci_notlari;` çalıştırılırsa ne olur?",
    "opts": [
     "Sadece görünüm tanımı silinir; tablolardaki veriler kalır",
     "Notlar silinir",
     "Hata verir; görünüm silinemez",
     "ogrenci tablosu da silinir",
     "Veri tabanı silinir"
    ],
    "a": 0,
    "exp": "Görünüm verinin kopyası değildir."
   },
   {
    "type": "fill",
    "topic": "gorunum",
    "q": "Boşluğu doldurun: görünüm oluşturun.",
    "code": "CREATE ____ kredili_dersler AS\nSELECT ders_adi, kredi FROM ders WHERE kredi >= 4;",
    "ans": [
     "VIEW"
    ],
    "cs": false,
    "exp": "CREATE VIEW … AS SELECT."
   },
   {
    "type": "fill",
    "topic": "sql-giris",
    "q": "Boşluğu doldurun: notu girilmemiş kayıtları silin.",
    "code": "DELETE ____ ders_kaydi WHERE harf_notu IS NULL;",
    "ans": [
     "FROM"
    ],
    "cs": false,
    "exp": "DELETE FROM tablo WHERE koşul."
   },
   {
    "type": "match",
    "topic": "iliskisel",
    "q": "Terimleri eşleştirin.",
    "pairs": [
     [
      "Demet (tuple)",
      "Satır"
     ],
     [
      "Nitelik",
      "Sütun"
     ],
     [
      "Derece",
      "Sütun sayısı"
     ],
     [
      "Kardinalite",
      "Satır sayısı"
     ]
    ],
    "exp": "İlişkisel modelin temel terimleri.",
    "choices": [
     "Satır",
     "Sütun sayısı",
     "Satır sayısı",
     "Sütun"
    ]
   }
  ]
 },
 {
  "id": "deneme2",
  "title": "Deneme sınavı 2",
  "desc": "20 soru: 17 test, 2 boşluk doldurma, 1 eşleştirme. 7 konudan, diğer denemelerle ortak soru yok.",
  "featured": false,
  "questions": [
   {
    "type": "mc",
    "topic": "giris",
    "q": "Verilerin satır ve sütunlardan oluşan tablolarda tutulduğu, tabloların anahtarlarla bağlandığı model hangisidir?",
    "opts": [
     "İlişkisel model",
     "Ağ modeli",
     "Hiyerarşik model",
     "Belge (NoSQL) modeli",
     "Anahtar-değer modeli"
    ],
    "a": 0,
    "exp": "MySQL ilişkisel (relational) modeli kullanır."
   },
   {
    "type": "mc",
    "topic": "giris",
    "q": "MongoDB hangi tür veri tabanına örnektir?",
    "opts": [
     "NoSQL (belge tabanlı)",
     "Hiyerarşik",
     "Elektronik tablo",
     "Ağ modeli",
     "İlişkisel"
    ],
    "a": 0,
    "exp": "MongoDB verileri JSON benzeri belgelerde saklar."
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "4 sütunlu ve 6 satırlı bir tablonun **derecesi** kaçtır?",
    "opts": [
     "2",
     "10",
     "24",
     "6",
     "4"
    ],
    "a": 4,
    "exp": "Derece = sütun sayısı; kardinalite = satır sayısı (6)."
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Her hücrede tek (atomik) değer bulunmasını şart koşan normal form hangisidir?",
    "opts": [
     "1NF",
     "2NF",
     "BCNF",
     "3NF",
     "4NF"
    ],
    "a": 0,
    "exp": "`telefonlar = \"0532.., 0505..\"` gibi çok değerli hücre 1NF'yi bozar."
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Aşağıdaki tablo oluşturulduktan sonra hangi INSERT **hata verir**?",
    "opts": [
     "INSERT INTO bolum VALUES (1, 'Muhasebe');",
     "Hiçbiri",
     "INSERT INTO bolum (bolum_no, bolum_adi) VALUES (4, 'Spor');",
     "INSERT INTO bolum VALUES (2, 'Muhasebe');",
     "INSERT INTO bolum VALUES (3, 'Turizm');"
    ],
    "a": 0,
    "exp": "bolum_no = 1 zaten var; PK tekrar edemez (#1062 Duplicate entry).",
    "code": "CREATE TABLE bolum (bolum_no INT PRIMARY KEY, bolum_adi VARCHAR(100) NOT NULL);\nINSERT INTO bolum VALUES (1, 'Bilgisayar Programcılığı');"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`ders` tablosunda `bolum_no` FK'dir ve `bolum` tablosunda sadece 1, 2, 3, 4 numaraları vardır. `INSERT INTO ders VALUES (401, 'Turizm Coğrafyası', 3, 5);` çalıştırılırsa ne olur?",
    "opts": [
     "Satır eklenir, uyarı verilmez",
     "Tablo silinir",
     "Hata: yabancı anahtar kısıtı ihlali (#1452)",
     "Satır eklenir, bolum_no NULL olur",
     "Satır eklenir ve 5 numaralı bölüm otomatik oluşur"
    ],
    "a": 2,
    "exp": "Referans bütünlüğü: bölüm 5 yok, ders eklenemez.",
    "code": "INSERT INTO ders VALUES (401, 'Turizm Coğrafyası', 3, 5);"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`VARCHAR(50)` ile `CHAR(50)` farkı nedir?",
    "opts": [
     "VARCHAR sadece sayı tutar",
     "CHAR NULL olamaz",
     "VARCHAR girilen uzunluk kadar, CHAR her zaman sabit uzunlukta yer kaplar",
     "CHAR daha uzun metin tutar",
     "İkisi tamamen aynıdır"
    ],
    "a": 2,
    "exp": "Harf notu gibi hep 2 karakterlik değerler için CHAR(2) uygundur."
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Sorgu sonucu hangisidir?",
    "opts": [
     "Kerem",
     "Mert, Kerem",
     "Ahmet, Mert, Kerem",
     "Zehra, Deniz",
     "Mert"
    ],
    "a": 1,
    "exp": "%er% içinde \"er\" geçenler: M**er**t, K**er**em.",
    "code": "SELECT ad FROM ogrenci WHERE ad LIKE '%er%' ORDER BY ogrenci_no;",
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
     }
    ]
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Sorgu sonucu kaç satırdır?",
    "opts": [
     "8",
     "3",
     "11",
     "1",
     "0"
    ],
    "a": 1,
    "exp": "NULL kontrolü IS NULL ile: 3 kaydın notu girilmemiş.",
    "code": "SELECT ogrenci_no FROM ders_kaydi WHERE harf_notu IS NULL;",
    "tables": [
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
    "type": "mc",
    "topic": "sorgular",
    "q": "`WHERE bolum_no = 1 OR bolum_no = 2 AND kredi = 4` koşulunda önce hangisi işlenir?",
    "opts": [
     "OR",
     "İkisi aynı anda",
     "Soldan sağa, önce OR",
     "AND",
     "Parantez olmadan hata verir"
    ],
    "a": 3,
    "exp": "AND'in önceliği OR'dan yüksektir; istenen bu değilse parantez kullanılır."
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu sonucu hangisidir?",
    "opts": [
     "1, 2",
     "1, 2, 3",
     "2, 3",
     "3",
     "1"
    ],
    "a": 0,
    "exp": "Önce WHERE iptalleri atar (4, 6). Kalan: müşteri 1 → 3, 2 → 1. HAVING COUNT >= 1: 1 ve 2.",
    "code": "SELECT musteri_id FROM siparisler WHERE durum <> 'İptal' GROUP BY musteri_id HAVING COUNT(*) >= 1 ORDER BY musteri_id;",
    "tables": [
     {
      "name": "siparisler",
      "cols": [
       "siparis_id",
       "musteri_id",
       "durum"
      ],
      "rows": [
       [
        "1",
        "1",
        "Teslim Edildi"
       ],
       [
        "2",
        "2",
        "Teslim Edildi"
       ],
       [
        "3",
        "1",
        "Kargoda"
       ],
       [
        "4",
        "3",
        "İptal"
       ],
       [
        "5",
        "1",
        "Teslim Edildi"
       ],
       [
        "6",
        "2",
        "İptal"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`magaza` veri tabanında toplam kaç müşteri vardır? (uygulama soru 1)",
    "opts": [
     "5",
     "30",
     "18",
     "9",
     "10"
    ],
    "a": 4,
    "exp": "`SELECT COUNT(*) FROM musteriler;`",
    "code": "SELECT COUNT(*) FROM musteriler;"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu sonucu (`a | b`) hangisidir?",
    "opts": [
     "2 | 2",
     "3 | 0",
     "2 | 3",
     "3 | 2",
     "3 | 3"
    ],
    "a": 3,
    "exp": "COUNT(*) 3 satır, COUNT(puan) NULL olmayan 2.",
    "code": "SELECT COUNT(*) AS a, COUNT(puan) AS b FROM notlar;",
    "tables": [
     {
      "name": "notlar",
      "cols": [
       "ogrenci",
       "puan"
      ],
      "rows": [
       [
        "Ali",
        "10"
       ],
       [
        "Ayşe",
        null
       ],
       [
        "Can",
        "20"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "MySQL'de hangi JOIN türü **doğrudan desteklenmez**?",
    "opts": [
     "RIGHT JOIN",
     "LEFT JOIN",
     "FULL OUTER JOIN",
     "INNER JOIN",
     "CROSS JOIN"
    ],
    "a": 2,
    "exp": "LEFT JOIN … UNION … RIGHT JOIN ile yapılır."
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Bölüm 2 (Grafik) derslerine kayıtları getiren 3 tablolu JOIN kaç satır döndürür?",
    "opts": [
     "4",
     "3",
     "2",
     "11",
     "5"
    ],
    "a": 0,
    "exp": "201: Ahmet, İrem; 202: Mert, İrem.",
    "code": "SELECT o.ad, d.ders_adi, k.harf_notu\nFROM ders_kaydi k\nJOIN ogrenci o ON o.ogrenci_no = k.ogrenci_no\nJOIN ders d    ON d.ders_kodu  = k.ders_kodu\nWHERE d.bolum_no = 2;",
    "tables": [
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
     }
    ]
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Tetikleyici hangi olay için **tanımlanamaz**?",
    "opts": [
     "SELECT",
     "DELETE",
     "Hepsi için tanımlanabilir",
     "INSERT",
     "UPDATE"
    ],
    "a": 0,
    "exp": "Tetikleyici sadece veri değiştiren olaylarda (INSERT/UPDATE/DELETE) çalışır."
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Görünüm kullanmanın faydası **olmayan** hangisidir?",
    "opts": [
     "Verinin ikinci bir kopyasını diskte saklayıp yedek oluşturması",
     "Karmaşık JOIN sorgusunu tek isimle kullanmak",
     "Tablo yapısını kullanıcıdan gizlemek",
     "Kullanıcıya sadece belli sütunları göstermek (güvenlik)",
     "Uygulama kodunu sadeleştirmek"
    ],
    "a": 0,
    "exp": "Görünüm veri saklamaz, yedek değildir."
   },
   {
    "type": "fill",
    "topic": "sql-giris",
    "q": "Boşluğu doldurun: sayı her satırda kendiliğinden artsın.",
    "code": "CREATE TABLE musteri (\n  musteri_no  INT ____ PRIMARY KEY,\n  musteri_adi VARCHAR(100)\n);",
    "ans": [
     "AUTO_INCREMENT"
    ],
    "cs": false,
    "exp": "AUTO_INCREMENT."
   },
   {
    "type": "fill",
    "topic": "gorunum",
    "q": "Boşluğu doldurun: eklenen satırın değeri.",
    "code": "CREATE TRIGGER stok_dus AFTER INSERT ON satis\nFOR EACH ROW\n  UPDATE urun SET stok = stok - ____.adet WHERE id = NEW.urun_id;",
    "ans": [
     "NEW"
    ],
    "cs": false,
    "exp": "INSERT'te yeni satır NEW ile okunur."
   },
   {
    "type": "match",
    "topic": "ileri2",
    "q": "Fonksiyonları eşleştirin.",
    "pairs": [
     [
      "CONCAT",
      "Metinleri birleştirir"
     ],
     [
      "IFNULL",
      "NULL ise yerine değer koyar"
     ],
     [
      "DATEDIFF",
      "İki tarih arasındaki gün"
     ],
     [
      "UPPER",
      "Büyük harfe çevirir"
     ]
    ],
    "exp": "Sık kullanılan tek satır fonksiyonları.",
    "choices": [
     "NULL ise yerine değer koyar",
     "Büyük harfe çevirir",
     "İki tarih arasındaki gün",
     "Metinleri birleştirir"
    ]
   }
  ]
 },
 {
  "id": "deneme3",
  "title": "Deneme sınavı 3",
  "desc": "20 soru: 17 test, 2 boşluk doldurma, 1 eşleştirme. 7 konudan, diğer denemelerle ortak soru yok.",
  "featured": false,
  "questions": [
   {
    "type": "mc",
    "topic": "giris",
    "q": "Aşağıdakilerden hangisi bir VTYS **değildir**?",
    "opts": [
     "MySQL",
     "phpMyAdmin",
     "PostgreSQL",
     "Microsoft SQL Server",
     "Oracle"
    ],
    "a": 1,
    "exp": "phpMyAdmin MySQL'i tarayıcıdan yönetmeye yarayan web arayüzüdür; kendisi VTYS değildir."
   },
   {
    "type": "mc",
    "topic": "giris",
    "q": "\"Veri hakkındaki veri\" (tablo adları, sütun tipleri, kısıtlar) için kullanılan terim hangisidir?",
    "opts": [
     "Metadata",
     "Kayıt",
     "Tetikleyici",
     "Bilgi",
     "İndeks"
    ],
    "a": 0,
    "exp": "Metadata VTYS'nin veri sözlüğünde (katalog) tutulur."
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Chen gösterimli ER diyagramında **varlık** hangi şekille çizilir?",
    "opts": [
     "Ok",
     "Elips",
     "Daire",
     "Dikdörtgen",
     "Eşkenar dörtgen (baklava)"
    ],
    "a": 3,
    "exp": "Dikdörtgen = varlık (tablo)."
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Birincil anahtarın NULL olamayacağını söyleyen kural hangisidir?",
    "opts": [
     "Kardinalite kuralı",
     "1NF",
     "Alan bütünlüğü",
     "Referans bütünlüğü",
     "Varlık bütünlüğü"
    ],
    "a": 4,
    "exp": "Entity integrity."
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`GRANT` ve `REVOKE` hangi alt dile aittir?",
    "opts": [
     "DQL",
     "DDL",
     "DCL",
     "TCL",
     "DML"
    ],
    "a": 2,
    "exp": "Data Control Language: yetki verme/geri alma."
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "FK tanımında `ON DELETE` belirtilmezse MySQL ne yapar?",
    "opts": [
     "Uyarı verip siler",
     "Bağlı satırların FK'sini NULL yapar",
     "FK'yi kaldırır",
     "Bağlı satırları da siler",
     "Bağlı satır varken ana satırın silinmesine izin vermez (RESTRICT)"
    ],
    "a": 4,
    "exp": "Varsayılan davranış RESTRICT / NO ACTION."
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Bir sütunun **veri tipini** değiştirmek için hangisi kullanılır?",
    "opts": [
     "ALTER TABLE ogrenci RENAME eposta;",
     "CHANGE TYPE eposta TO VARCHAR(150);",
     "DROP eposta VARCHAR(150);",
     "ALTER TABLE ogrenci MODIFY eposta VARCHAR(150);",
     "UPDATE ogrenci SET eposta VARCHAR(150);"
    ],
    "a": 3,
    "exp": "MODIFY tipi değiştirir; CHANGE hem adı hem tipi değiştirebilir."
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Çok satır döndüren bir alt sorguyla \"listedekilerden biri mi?\" kontrolü için hangisi kullanılır?",
    "opts": [
     "LIKE",
     "IN",
     "=",
     "BETWEEN",
     "IS"
    ],
    "a": 1,
    "exp": "IN / NOT IN / EXISTS / ANY / ALL."
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Alt sorgu ile Bilgisayar Programcılığı bölümünün derslerini getiren sorgu kaç satır döndürür?",
    "opts": [
     "2",
     "1",
     "3",
     "0",
     "6"
    ],
    "a": 2,
    "exp": "İç sorgu 1 döndürür; bolum_no = 1 olan 3 ders.",
    "code": "SELECT ders_adi FROM ders\nWHERE bolum_no = (SELECT bolum_no FROM bolum WHERE bolum_adi = 'Bilgisayar Programcılığı');",
    "tables": [
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
      "name": "bolum",
      "cols": [
       "bolum_no",
       "bolum_adi"
      ],
      "rows": [
       [
        "1",
        "Bilgisayar Programcılığı"
       ],
       [
        "2",
        "Grafik Tasarımı"
       ],
       [
        "3",
        "Muhasebe ve Vergi Uygulamaları"
       ],
       [
        "4",
        "Turizm ve Otel İşletmeciliği"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Sorgu sonucu kaç satırdır?",
    "opts": [
     "4",
     "6",
     "11",
     "3",
     "5"
    ],
    "a": 0,
    "exp": "101 dersine kayıtlı öğrenciler: Ahmet, Zehra, Mert, Deniz.",
    "code": "SELECT ad FROM ogrenci WHERE ogrenci_no IN (SELECT ogrenci_no FROM ders_kaydi WHERE ders_kodu = 101);",
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
    "type": "mc",
    "topic": "ileri1",
    "q": "Uygulama soru 10'da (iptaller hariç, cirosu 5000 TL'yi geçen şehirler) iptal edilen siparişler hangi bölümde elenir?",
    "opts": [
     "WHERE",
     "HAVING",
     "ORDER BY",
     "GROUP BY",
     "SELECT"
    ],
    "a": 0,
    "exp": "İptal tek tek satırların özelliğidir, gruplamadan önce WHERE ile atılır; 5000 koşulu ise HAVING'dedir."
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Toplama fonksiyonu içeren koşul (ör. `COUNT(*) > 1`) nereye yazılır?",
    "opts": [
     "WHERE",
     "SELECT",
     "ORDER BY",
     "HAVING",
     "FROM"
    ],
    "a": 3,
    "exp": "HAVING grupları süzer."
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu kaç satır döndürür?",
    "opts": [
     "2",
     "1",
     "3",
     "6",
     "0"
    ],
    "a": 1,
    "exp": "Müşteri bazında sipariş sayıları: 1 → 3, 2 → 2, 3 → 1. En az 3 olan sadece müşteri 1.",
    "code": "SELECT musteri_id, COUNT(*) AS n FROM siparisler GROUP BY musteri_id HAVING COUNT(*) >= 3;",
    "tables": [
     {
      "name": "siparisler",
      "cols": [
       "siparis_id",
       "musteri_id",
       "durum"
      ],
      "rows": [
       [
        "1",
        "1",
        "Teslim Edildi"
       ],
       [
        "2",
        "2",
        "Teslim Edildi"
       ],
       [
        "3",
        "1",
        "Kargoda"
       ],
       [
        "4",
        "3",
        "İptal"
       ],
       [
        "5",
        "1",
        "Teslim Edildi"
       ],
       [
        "6",
        "2",
        "İptal"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Sorgu sonucu hangisidir?",
    "opts": [
     "Ahmet",
     "NULL",
     "AhmetKara",
     "Ahmet Kara",
     "Kara Ahmet"
    ],
    "a": 3,
    "exp": "CONCAT değerleri birleştirir; araya ' ' konmuş.",
    "code": "SELECT CONCAT(ad, ' ', soyad) FROM ogrenci WHERE ogrenci_no = 20250101;",
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
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Sorgu sonucu hangisidir?",
    "opts": [
     "Muhasebe ve Vergi Uygulamaları",
     "Turizm ve Otel İşletmeciliği",
     "Boş sonuç",
     "Grafik Tasarımı",
     "Bilgisayar Programcılığı"
    ],
    "a": 1,
    "exp": "Hiç dersi olmayan bölüm: 4 numara.",
    "code": "SELECT b.bolum_adi FROM bolum b LEFT JOIN ders d ON d.bolum_no = b.bolum_no WHERE d.ders_kodu IS NULL;",
    "tables": [
     {
      "name": "bolum",
      "cols": [
       "bolum_no",
       "bolum_adi"
      ],
      "rows": [
       [
        "1",
        "Bilgisayar Programcılığı"
       ],
       [
        "2",
        "Grafik Tasarımı"
       ],
       [
        "3",
        "Muhasebe ve Vergi Uygulamaları"
       ],
       [
        "4",
        "Turizm ve Otel İşletmeciliği"
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
     }
    ]
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Var olan bir görünümü yoksa oluşturan, varsa değiştiren komut hangisidir?",
    "opts": [
     "CREATE OR REPLACE VIEW",
     "REPLACE TABLE",
     "MODIFY VIEW",
     "UPDATE VIEW",
     "ALTER OR CREATE VIEW"
    ],
    "a": 0,
    "exp": "CREATE OR REPLACE VIEW (ALTER VIEW de tanımı değiştirir)."
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Satış eklendiğinde stok düşen tetikleyici çalıştıktan sonra ürünün stoku kaç olur?",
    "opts": [
     "3",
     "7",
     "0",
     "13",
     "10"
    ],
    "a": 1,
    "exp": "AFTER INSERT: 10 - 3 = 7.",
    "code": "DELIMITER $$\nCREATE TRIGGER stok_dus AFTER INSERT ON satis\nFOR EACH ROW\nBEGIN\n  UPDATE urun SET stok = stok - NEW.adet WHERE id = NEW.urun_id;\nEND$$\nDELIMITER ;\n\nINSERT INTO urun VALUES (1, 'Kulaklık', 10);\nINSERT INTO satis (urun_id, adet) VALUES (1, 3);\nSELECT stok FROM urun WHERE id = 1;"
   },
   {
    "type": "fill",
    "topic": "sql-giris",
    "q": "Boşluğu doldurun: 102 kodlu dersin kredisini 5 yapın.",
    "code": "UPDATE ders ____ kredi = 5 WHERE ders_kodu = 102;",
    "ans": [
     "SET"
    ],
    "cs": false,
    "exp": "UPDATE tablo SET sütun = değer WHERE koşul."
   },
   {
    "type": "fill",
    "topic": "sorgular",
    "q": "Boşluğu doldurun: notu girilmemiş kayıtlar.",
    "code": "SELECT * FROM ders_kaydi WHERE harf_notu ____;",
    "ans": [
     "IS NULL"
    ],
    "cs": false,
    "exp": "`= NULL` çalışmaz; IS NULL yazılır.",
    "whyFill": {
     "= NULL": "= NULL hiçbir satır getirmez."
    }
   },
   {
    "type": "match",
    "topic": "sql-giris",
    "q": "Komutları SQL alt dilleriyle eşleştirin.",
    "pairs": [
     [
      "CREATE TABLE",
      "DDL"
     ],
     [
      "INSERT INTO",
      "DML"
     ],
     [
      "GRANT",
      "DCL"
     ],
     [
      "ROLLBACK",
      "TCL"
     ]
    ],
    "exp": "DDL yapı, DML veri, DCL yetki, TCL işlem.",
    "choices": [
     "DML",
     "TCL",
     "DDL",
     "DCL"
    ]
   }
  ]
 },
 {
  "id": "deneme4",
  "title": "Deneme sınavı 4",
  "desc": "20 soru: 17 test, 2 boşluk doldurma, 1 eşleştirme. 7 konudan, diğer denemelerle ortak soru yok.",
  "featured": false,
  "questions": [
   {
    "type": "mc",
    "topic": "giris",
    "q": "Derste kullanılan MAMP paketi için hangisi doğrudur?",
    "opts": [
     "Apache, MySQL ve PHP'yi birlikte kuran yerel sunucu paketidir",
     "Bir SQL komutudur",
     "Bir veri tabanıdır",
     "Bir veri modelidir",
     "Sadece metin düzenleyicidir"
    ],
    "a": 0,
    "exp": "MAMP (Mac/Windows, Apache, MySQL, PHP) yerel geliştirme ortamıdır; phpMyAdmin de içinde gelir."
   },
   {
    "type": "mc",
    "topic": "giris",
    "q": "Veri tabanının yapısına (tablolar, sütunlar, tipler, ilişkiler) ne denir?",
    "opts": [
     "Görünüm",
     "Kayıt",
     "Sorgu",
     "Örnek (instance)",
     "Şema"
    ],
    "a": 4,
    "exp": "Şema yapıdır ve seyrek değişir; instance belli bir andaki verilerdir."
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Aday anahtarlardan birincil anahtar olarak **seçilmeyenlere** ne denir?",
    "opts": [
     "Yapay anahtar",
     "Yabancı anahtar",
     "Alternatif anahtar",
     "Bileşik anahtar",
     "Süper anahtar"
    ],
    "a": 2,
    "exp": "Örn. ogrenci_no PK seçilirse eposta alternatif anahtar olur."
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "NULL için hangisi doğrudur?",
    "opts": [
     "Değerin bilinmediğini ya da olmadığını gösterir",
     "0 ile aynıdır",
     "Her zaman hata demektir",
     "Sadece sayı sütunlarında olur",
     "Boş metin ('') ile aynıdır"
    ],
    "a": 0,
    "exp": "NULL bir değer değil, değerin yokluğudur."
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Aşağıdaki komutlardan sonra `bolum` tablosunda kaç satır kalır?",
    "opts": [
     "1",
     "2",
     "4",
     "3",
     "0"
    ],
    "a": 1,
    "exp": "İki satır eklenir, biri eklenir (3), biri silinir (2).",
    "code": "CREATE TABLE bolum (bolum_no INT PRIMARY KEY, bolum_adi VARCHAR(100) NOT NULL);\nINSERT INTO bolum VALUES (1, 'Bilgisayar'), (2, 'Grafik');\nINSERT INTO bolum VALUES (3, 'Muhasebe');\nDELETE FROM bolum WHERE bolum_no = 2;"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Para tutarı (örn. 1250.00) için en uygun veri tipi hangisidir?",
    "opts": [
     "VARCHAR(10)",
     "DATE",
     "FLOAT",
     "INT",
     "DECIMAL(10,2)"
    ],
    "a": 4,
    "exp": "DECIMAL tam hassastır; FLOAT yuvarlama hatası yapabilir."
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Her yeni satırda 1, 2, 3… diye kendiliğinden artan sütun için hangisi kullanılır?",
    "opts": [
     "NEXTVAL",
     "AUTO_INCREMENT",
     "SERIAL KEY",
     "DEFAULT 1",
     "INCREMENT BY"
    ],
    "a": 1,
    "exp": "MySQL'de AUTO_INCREMENT, genelde PK ile."
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Aşağıdaki sorgu neden **hata verir**?",
    "opts": [
     "ders_kaydi tablosu yok",
     "Alt sorgu parantez içinde yazılamaz",
     "Alt sorgu birden çok satır döndürüyor, = ile karşılaştırılamaz",
     "WHERE alt sorguyla kullanılamaz",
     "ad sütunu yok"
    ],
    "a": 2,
    "exp": "#1242 Subquery returns more than 1 row. Çözüm: `IN`.",
    "code": "SELECT ad FROM ogrenci WHERE ogrenci_no = (SELECT ogrenci_no FROM ders_kaydi WHERE ders_kodu = 101);"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "`EXISTS (alt sorgu)` ne zaman doğru olur?",
    "opts": [
     "Dış tablo boşsa",
     "Alt sorgu NULL döndürürse",
     "Alt sorgu en az bir satır döndürürse",
     "Alt sorgu hata verirse",
     "Alt sorgu tam bir satır döndürürse"
    ],
    "a": 2,
    "exp": "Satırların içeriğine değil, varlığına bakar."
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Sorgu sonucu kaç satırdır?",
    "opts": [
     "4",
     "5",
     "6",
     "3",
     "2"
    ],
    "a": 0,
    "exp": "AND önce işlenir: bölüm 1'in 3 dersi + (bölüm 3 ve kredi 4) olan Genel Muhasebe = 4.",
    "code": "SELECT ders_kodu FROM ders WHERE bolum_no = 1 OR bolum_no = 3 AND kredi = 4;",
    "tables": [
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
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu sonucu kaçtır?",
    "opts": [
     "3",
     "11",
     "5",
     "4",
     "6"
    ],
    "a": 4,
    "exp": "COUNT(DISTINCT) farklı değerleri sayar: 101, 102, 103, 201, 202, 301.",
    "code": "SELECT COUNT(DISTINCT ders_kodu) FROM ders_kaydi;",
    "tables": [
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
    "type": "mc",
    "topic": "ileri1",
    "q": "Ürünlerin ortalama fiyatını 2 basamağa yuvarlamak için hangisi yazılır?",
    "opts": [
     "AVG(fiyat, 2)",
     "AVG(ROUND(fiyat))",
     "FORMAT AVG(fiyat)",
     "ROUND(fiyat, 2) AVG",
     "ROUND(AVG(fiyat), 2)"
    ],
    "a": 4,
    "exp": "Uygulama soru 2."
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu sonucu kaçtır?",
    "opts": [
     "5380.00",
     "1250.00",
     "410.00",
     "3400.00",
     "320.00"
    ],
    "a": 3,
    "exp": "En büyük birim fiyat.",
    "code": "SELECT MAX(birim_fiyat) FROM siparis_detay;",
    "tables": [
     {
      "name": "siparis_detay",
      "cols": [
       "siparis_id",
       "urun_id",
       "adet",
       "birim_fiyat"
      ],
      "rows": [
       [
        "1",
        "1",
        "1",
        "1250.00"
       ],
       [
        "1",
        "8",
        "2",
        "320.00"
       ],
       [
        "2",
        "2",
        "1",
        "3400.00"
       ],
       [
        "3",
        "8",
        "3",
        "320.00"
       ],
       [
        "3",
        "9",
        "1",
        "410.00"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`magaza` veri tabanında hiç satılmamış ürünler (uygulama bonus) hangileridir?",
    "opts": [
     "Kamp Sandalyesi, Termos",
     "Mekanik Klavye",
     "Mekanik Klavye, Kamp Sandalyesi",
     "Hepsi satıldı",
     "Oyuncak"
    ],
    "a": 2,
    "exp": "LEFT JOIN + GROUP BY + HAVING COUNT(d.detay_id) = 0.",
    "code": "SELECT u.urun_adi\nFROM urunler u\nLEFT JOIN siparis_detay d ON d.urun_id = u.urun_id\nGROUP BY u.urun_id, u.urun_adi\nHAVING COUNT(d.detay_id) = 0\nORDER BY u.urun_id;"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Sorgu kaç satır döndürür?",
    "opts": [
     "5",
     "6",
     "11",
     "30",
     "1"
    ],
    "a": 1,
    "exp": "LEFT JOIN soldaki 6 öğrencinin hepsini getirir; Kerem'in kart_no'su NULL.",
    "code": "SELECT o.ad, k.kart_no FROM ogrenci o LEFT JOIN ogrenci_karti k ON k.ogrenci_no = o.ogrenci_no;",
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
      "name": "ogrenci_karti",
      "cols": [
       "kart_no",
       "ogrenci_no"
      ],
      "rows": [
       [
        "5001",
        "20250101"
       ],
       [
        "5002",
        "20250102"
       ],
       [
        "5003",
        "20250103"
       ],
       [
        "5004",
        "20250104"
       ],
       [
        "5005",
        "20250105"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "`AFTER INSERT` tetikleyicisinde hangisi **kullanılamaz**?",
    "opts": [
     "BEGIN … END",
     "NEW",
     "FOR EACH ROW",
     "OLD",
     "UPDATE"
    ],
    "a": 3,
    "exp": "INSERT'te önceki satır olmadığı için OLD yoktur."
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Tetikleyici gövdesindeki `;` işaretlerinin komutu erken bitirmemesi için ne kullanılır?",
    "opts": [
     "DELIMITER $$",
     "COMMIT",
     "SET NAMES",
     "GO",
     "END IF"
    ],
    "a": 0,
    "exp": "Geçici ayırıcı; sonra `DELIMITER ;` ile geri alınır."
   },
   {
    "type": "fill",
    "topic": "ileri1",
    "q": "Boşluğu doldurun: her şehirdeki müşteri sayısı.",
    "code": "SELECT sehir, COUNT(*) FROM musteriler ____ sehir;",
    "ans": [
     "GROUP BY"
    ],
    "cs": false,
    "exp": "GROUP BY aynı şehirleri bir grup yapar."
   },
   {
    "type": "fill",
    "topic": "sorgular",
    "q": "Boşluğu doldurun: kredisi 3 ile 4 arasında (dahil).",
    "code": "SELECT ders_adi FROM ders WHERE kredi ____ 3 AND 4;",
    "ans": [
     "BETWEEN"
    ],
    "cs": false,
    "exp": "BETWEEN uçları dahil eder."
   },
   {
    "type": "match",
    "topic": "ileri2",
    "q": "JOIN türlerini eşleştirin.",
    "pairs": [
     [
      "INNER JOIN",
      "Sadece eşleşenler"
     ],
     [
      "LEFT JOIN",
      "Soldaki tablonun hepsi"
     ],
     [
      "RIGHT JOIN",
      "Sağdaki tablonun hepsi"
     ],
     [
      "CROSS JOIN",
      "Her satır her satırla"
     ]
    ],
    "exp": "MySQL'de FULL OUTER JOIN yoktur.",
    "choices": [
     "Soldaki tablonun hepsi",
     "Sağdaki tablonun hepsi",
     "Her satır her satırla",
     "Sadece eşleşenler"
    ]
   }
  ]
 },
 {
  "id": "deneme5",
  "title": "Deneme sınavı 5",
  "desc": "20 soru: 17 test, 2 boşluk doldurma, 1 eşleştirme. 7 konudan, diğer denemelerle ortak soru yok.",
  "featured": false,
  "questions": [
   {
    "type": "mc",
    "topic": "giris",
    "q": "SQL'in açılımı hangisidir?",
    "opts": [
     "Sequential Query Language",
     "Standard Question Language",
     "Structured Query Language",
     "System Query List",
     "Simple Query Logic"
    ],
    "a": 2,
    "exp": "Yapılandırılmış Sorgu Dili."
   },
   {
    "type": "mc",
    "topic": "giris",
    "q": "Her kaydın tek bir üst (ebeveyn) kaydı olduğu, ağaç yapısındaki veri modeli hangisidir?",
    "opts": [
     "Grafik modeli",
     "Nesne yönelimli model",
     "Ağ modeli",
     "İlişkisel model",
     "Hiyerarşik model"
    ],
    "a": 4,
    "exp": "Hiyerarşik modelde ağaç yapısı vardır; ağ modelinde bir kaydın birden çok üstü olabilir."
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "1:N ilişkide yabancı anahtar hangi tabloya eklenir?",
    "opts": [
     "1 tarafındaki tabloya",
     "Ara tabloya",
     "N (çok) tarafındaki tabloya",
     "Hiçbirine, ilişki şemada tutulur",
     "İki tabloya da"
    ],
    "a": 2,
    "exp": "ders tablosuna bolum_no eklenir; bolum tablosuna ders_kodu konmaz.",
    "why": {
     "0": "Bir bölümün çok dersi var; tek sütuna sığmaz."
    }
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "ER diyagramında bir niteliğin **altının çizili** olması neyi gösterir?",
    "opts": [
     "Silineceğini",
     "NULL olabileceğini",
     "Türetilmiş nitelik olduğunu",
     "Birincil anahtar olduğunu",
     "Yabancı anahtar olduğunu"
    ],
    "a": 3,
    "exp": "Altı çizili nitelik = PK."
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`DECIMAL(10,2)` tipinde en büyük değer hangisi olabilir?",
    "opts": [
     "99999999.99",
     "99.99",
     "9999999999.99",
     "10.2",
     "9999999999"
    ],
    "a": 0,
    "exp": "Toplam 10 basamak, 2'si virgülden sonra: 8 + 2."
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`ogrenci_karti.ogrenci_no` UNIQUE'tir. 20250101 numaralı öğrencinin zaten kartı varken ikinci kart eklenirse ne olur?",
    "opts": [
     "İlişki 1:N'ye dönüşür",
     "Eski kart güncellenir",
     "Öğrenci silinir",
     "Hata: Duplicate entry (UNIQUE ihlali)",
     "Kart eklenir"
    ],
    "a": 3,
    "exp": "UNIQUE kısıtı 1:1 ilişkiyi korur.",
    "code": "INSERT INTO ogrenci_karti VALUES (5009, 20250101, '2026-01-01', '2028-01-01');"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`INSERT`, `UPDATE`, `DELETE` komutları hangi alt dile aittir?",
    "opts": [
     "Hiçbiri",
     "DML",
     "DCL",
     "DDL",
     "TCL"
    ],
    "a": 1,
    "exp": "Data Manipulation Language: veriyi değiştirir."
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Hangi koşul \"kredisi 3 **olmayan**\" dersleri getirir?",
    "opts": [
     "kredi NOT 3",
     "kredi =! 3",
     "kredi IS NOT 3",
     "kredi >< 3",
     "kredi <> 3"
    ],
    "a": 4,
    "exp": "Eşit değil: `<>` ya da `!=`."
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Aşağıdaki sorgu kaç satır döndürür?",
    "opts": [
     "6",
     "0",
     "3",
     "4",
     "2"
    ],
    "a": 2,
    "exp": "20250104, 20250105, 20250106: 3 öğrenci.",
    "code": "SELECT ad FROM ogrenci WHERE ogrenci_no > 20250103;",
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
     }
    ]
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "`ad LIKE '_e%'` koşulu hangi adları getirir?",
    "opts": [
     "Sadece Kerem",
     "Mert, Deniz, Kerem",
     "Zehra, İrem, Kerem",
     "Zehra, Mert, Deniz, Kerem",
     "Ahmet, Zehra"
    ],
    "a": 3,
    "exp": "_ tam bir karakter: ikinci harfi e olanlar (Z**e**hra, M**e**rt, D**e**niz, K**e**rem). İrem'in ikinci harfi r.",
    "code": "SELECT ad FROM ogrenci WHERE ad LIKE '_e%' ORDER BY ogrenci_no;",
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
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Hangi sorgu **hata verir**?",
    "opts": [
     "SELECT COUNT(*) FROM musteriler;",
     "SELECT sehir, COUNT(*) FROM musteriler GROUP BY sehir HAVING COUNT(*) > 1;",
     "SELECT sehir FROM musteriler WHERE COUNT(*) > 1;",
     "SELECT sehir FROM musteriler WHERE sehir = 'İzmir';",
     "SELECT sehir, COUNT(*) FROM musteriler GROUP BY sehir;"
    ],
    "a": 2,
    "exp": "Toplama fonksiyonu WHERE'de kullanılamaz (#1111 Invalid use of group function).",
    "code": "SELECT sehir FROM musteriler WHERE COUNT(*) > 1;"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu sonucu kaçtır?",
    "opts": [
     "4",
     "3.5000",
     "6",
     "24",
     "21"
    ],
    "a": 4,
    "exp": "Kredilerin toplamı: 4+4+3+3+3+4 = 21.",
    "code": "SELECT SUM(kredi) FROM ders;",
    "tables": [
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
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "WHERE ile HAVING için hangisi doğrudur?",
    "opts": [
     "WHERE toplama fonksiyonu alır",
     "HAVING sadece ORDER BY ile kullanılır",
     "WHERE gruplamadan önce satırları, HAVING gruplamadan sonra grupları süzer",
     "HAVING gruplamadan önce çalışır",
     "İkisi aynı anda çalışır"
    ],
    "a": 2,
    "exp": "Uygulamadaki kısa hatırlatma."
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Sorgu kaç satırda \"Ağır\" yazar?",
    "opts": [
     "6",
     "3",
     "0",
     "1",
     "2"
    ],
    "a": 4,
    "exp": "Bölüm 1: 101 (4), 102 (4), 103 (3) → iki ders Ağır.",
    "code": "SELECT ders_adi,\n  CASE WHEN kredi >= 4 THEN 'Ağır' ELSE 'Normal' END AS yuk\nFROM ders WHERE bolum_no = 1;",
    "tables": [
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
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`SELECT CHAR_LENGTH('Mert');` sonucu nedir?",
    "opts": [
     "Mert",
     "4",
     "3",
     "5",
     "8"
    ],
    "a": 1,
    "exp": "Karakter sayısı.",
    "code": "SELECT CHAR_LENGTH('Mert');"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Tetikleyici (TRIGGER) için hangisi doğrudur?",
    "opts": [
     "Sadece veri tabanı oluşturulurken çalışır",
     "Veriyi sanal tablo gibi gösterir",
     "Tabloda INSERT, UPDATE veya DELETE olunca kendiliğinden çalışır",
     "SELECT sorgularında çalışır",
     "CALL ile elle çağrılır"
    ],
    "a": 2,
    "exp": "Elle çağrılan saklı yordamdır (CALL); tetikleyici olayla çalışır."
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Tetikleyicide `NEW.adet` ifadesi neyi gösterir?",
    "opts": [
     "Bir önceki tetikleyicinin sonucunu",
     "Yeni oluşturulan tabloyu",
     "Silinen satırın adet değerini",
     "Eklenen / güncellenen satırın yeni adet değerini",
     "Tablodaki toplam adedi"
    ],
    "a": 3,
    "exp": "NEW yeni değer, OLD eski değer."
   },
   {
    "type": "fill",
    "topic": "ileri2",
    "q": "Boşluğu doldurun: birleştirme koşulu.",
    "code": "SELECT d.ders_adi, b.bolum_adi\nFROM ders d JOIN bolum b ____ b.bolum_no = d.bolum_no;",
    "ans": [
     "ON"
    ],
    "cs": false,
    "exp": "JOIN … ON eşitlik."
   },
   {
    "type": "fill",
    "topic": "sql-giris",
    "q": "Boşluğu doldurun: tabloya yeni satır ekleyin.",
    "code": "____ INTO bolum (bolum_no, bolum_adi) VALUES (5, 'Spor');",
    "ans": [
     "INSERT"
    ],
    "cs": false,
    "exp": "INSERT INTO … VALUES."
   },
   {
    "type": "match",
    "topic": "iliskisel",
    "q": "ER diyagramı şekillerini anlamlarıyla eşleştirin.",
    "pairs": [
     [
      "Dikdörtgen",
      "Varlık (tablo)"
     ],
     [
      "Elips",
      "Nitelik (sütun)"
     ],
     [
      "Eşkenar dörtgen",
      "İlişki"
     ],
     [
      "Altı çizili nitelik",
      "Birincil anahtar"
     ]
    ],
    "exp": "Chen gösterimi.",
    "choices": [
     "Varlık (tablo)",
     "İlişki",
     "Birincil anahtar",
     "Nitelik (sütun)"
    ]
   }
  ]
 }
];
window.TOPIC_QUESTIONS = {
 "giris": [
  {
   "type": "mc",
   "topic": "giris",
   "q": "İşlenmemiş, tek başına anlam taşımayan ham gerçeklere ne denir?",
   "opts": [
    "Bilgi",
    "Veri",
    "Şema",
    "Rapor",
    "Veri tabanı"
   ],
   "a": 1,
   "exp": "Veri ham değerdir (85, Ahmet). İşlenip anlam kazanınca bilgi olur."
  },
  {
   "type": "mc",
   "topic": "giris",
   "q": "\"Ahmet'in notu sınıf ortalamasının üstünde\" ifadesi hangisine örnektir?",
   "opts": [
    "Şema",
    "Metadata",
    "Kısıt",
    "Bilgi",
    "Veri"
   ],
   "a": 3,
   "exp": "Ham notlar işlenip yorumlanmış, anlam kazanmış: bilgi."
  },
  {
   "type": "mc",
   "topic": "giris",
   "q": "Veri tabanını tanımlama, saklama, sorgulama ve güvenlik işlerini yapan yazılıma ne denir?",
   "opts": [
    "Derleyici",
    "Veri tabanı",
    "VTYS (Veri Tabanı Yönetim Sistemi)",
    "İşletim sistemi",
    "Web sunucusu"
   ],
   "a": 2,
   "exp": "VTYS (DBMS): MySQL, Oracle, PostgreSQL gibi."
  },
  {
   "type": "mc",
   "topic": "giris",
   "q": "Aşağıdakilerden hangisi bir VTYS **değildir**?",
   "opts": [
    "MySQL",
    "phpMyAdmin",
    "PostgreSQL",
    "Microsoft SQL Server",
    "Oracle"
   ],
   "a": 1,
   "exp": "phpMyAdmin MySQL'i tarayıcıdan yönetmeye yarayan web arayüzüdür; kendisi VTYS değildir."
  },
  {
   "type": "mc",
   "topic": "giris",
   "q": "Derste kullanılan MAMP paketi için hangisi doğrudur?",
   "opts": [
    "Apache, MySQL ve PHP'yi birlikte kuran yerel sunucu paketidir",
    "Bir SQL komutudur",
    "Bir veri tabanıdır",
    "Bir veri modelidir",
    "Sadece metin düzenleyicidir"
   ],
   "a": 0,
   "exp": "MAMP (Mac/Windows, Apache, MySQL, PHP) yerel geliştirme ortamıdır; phpMyAdmin de içinde gelir."
  },
  {
   "type": "mc",
   "topic": "giris",
   "q": "Dosya sistemine göre VTYS'nin avantajı **olmayan** hangisidir?",
   "opts": [
    "Eşzamanlı erişimi denetlemesi",
    "Yetkilendirme ile güvenlik sağlaması",
    "Yedekleme ve kurtarma kolaylığı",
    "Veri tutarlılığını sağlaması",
    "Veri tekrarını artırması"
   ],
   "a": 4,
   "exp": "VTYS veri tekrarını azaltır, artırmaz."
  },
  {
   "type": "mc",
   "topic": "giris",
   "q": "Aynı müşterinin adresinin iki farklı dosyada farklı yazılı olması hangi sorundur?",
   "opts": [
    "Kardinalite",
    "Normalizasyon",
    "Veri tutarsızlığı",
    "Veri bağımsızlığı",
    "Eşzamanlılık"
   ],
   "a": 2,
   "exp": "Tekrar eden veri bir yerde güncellenip diğerinde eski kalınca tutarsızlık oluşur."
  },
  {
   "type": "mc",
   "topic": "giris",
   "q": "Verilerin satır ve sütunlardan oluşan tablolarda tutulduğu, tabloların anahtarlarla bağlandığı model hangisidir?",
   "opts": [
    "İlişkisel model",
    "Ağ modeli",
    "Hiyerarşik model",
    "Belge (NoSQL) modeli",
    "Anahtar-değer modeli"
   ],
   "a": 0,
   "exp": "MySQL ilişkisel (relational) modeli kullanır."
  },
  {
   "type": "mc",
   "topic": "giris",
   "q": "Her kaydın tek bir üst (ebeveyn) kaydı olduğu, ağaç yapısındaki veri modeli hangisidir?",
   "opts": [
    "Grafik modeli",
    "Nesne yönelimli model",
    "Ağ modeli",
    "İlişkisel model",
    "Hiyerarşik model"
   ],
   "a": 4,
   "exp": "Hiyerarşik modelde ağaç yapısı vardır; ağ modelinde bir kaydın birden çok üstü olabilir."
  },
  {
   "type": "mc",
   "topic": "giris",
   "q": "MongoDB hangi tür veri tabanına örnektir?",
   "opts": [
    "NoSQL (belge tabanlı)",
    "Hiyerarşik",
    "Elektronik tablo",
    "Ağ modeli",
    "İlişkisel"
   ],
   "a": 0,
   "exp": "MongoDB verileri JSON benzeri belgelerde saklar."
  },
  {
   "type": "mc",
   "topic": "giris",
   "q": "Veri tabanının kurulumu, kullanıcı yetkileri, yedekleme ve performansından sorumlu kişi kimdir?",
   "opts": [
    "Test uzmanı",
    "Veri tabanı yöneticisi (DBA)",
    "Son kullanıcı",
    "Grafik tasarımcı",
    "Sistem analisti"
   ],
   "a": 1,
   "exp": "DBA = Database Administrator."
  },
  {
   "type": "mc",
   "topic": "giris",
   "q": "Veri tabanının yapısına (tablolar, sütunlar, tipler, ilişkiler) ne denir?",
   "opts": [
    "Görünüm",
    "Kayıt",
    "Sorgu",
    "Örnek (instance)",
    "Şema"
   ],
   "a": 4,
   "exp": "Şema yapıdır ve seyrek değişir; instance belli bir andaki verilerdir."
  },
  {
   "type": "mc",
   "topic": "giris",
   "q": "\"Veri hakkındaki veri\" (tablo adları, sütun tipleri, kısıtlar) için kullanılan terim hangisidir?",
   "opts": [
    "Metadata",
    "Kayıt",
    "Tetikleyici",
    "Bilgi",
    "İndeks"
   ],
   "a": 0,
   "exp": "Metadata VTYS'nin veri sözlüğünde (katalog) tutulur."
  },
  {
   "type": "mc",
   "topic": "giris",
   "q": "SQL'in açılımı hangisidir?",
   "opts": [
    "Sequential Query Language",
    "Standard Question Language",
    "Structured Query Language",
    "System Query List",
    "Simple Query Logic"
   ],
   "a": 2,
   "exp": "Yapılandırılmış Sorgu Dili."
  },
  {
   "type": "match",
   "topic": "giris",
   "q": "Kavramları eşleştirin.",
   "pairs": [
    [
     "Veri",
     "Ham, işlenmemiş gerçekler"
    ],
    [
     "Bilgi",
     "İşlenmiş, anlam kazanmış veri"
    ],
    [
     "VTYS",
     "Veri tabanını yöneten yazılım"
    ],
    [
     "Şema",
     "Veri tabanının yapısı"
    ]
   ],
   "exp": "Veri → bilgi; VTYS yazılımdır; şema yapıdır.",
   "choices": [
    "Veri tabanını yöneten yazılım",
    "Ham, işlenmemiş gerçekler",
    "İşlenmiş, anlam kazanmış veri",
    "Veri tabanının yapısı"
   ]
  },
  {
   "type": "match",
   "topic": "giris",
   "q": "Araçları rolleriyle eşleştirin.",
   "pairs": [
    [
     "MySQL",
     "İlişkisel VTYS"
    ],
    [
     "phpMyAdmin",
     "MySQL'i tarayıcıdan yöneten arayüz"
    ],
    [
     "MAMP",
     "Apache + MySQL + PHP yerel sunucu paketi"
    ],
    [
     "MongoDB",
     "NoSQL belge veri tabanı"
    ]
   ],
   "exp": "Derste MAMP içinde gelen phpMyAdmin ile MySQL kullanıldı.",
   "choices": [
    "NoSQL belge veri tabanı",
    "MySQL'i tarayıcıdan yöneten arayüz",
    "İlişkisel VTYS",
    "Apache + MySQL + PHP yerel sunucu paketi"
   ]
  }
 ],
 "iliskisel": [
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "İlişkisel modelde bir tablonun **satırına** ne ad verilir?",
   "opts": [
    "Demet (tuple) / kayıt",
    "Alan (domain)",
    "Nitelik",
    "Şema",
    "Derece"
   ],
   "a": 0,
   "exp": "Satır = kayıt (tuple), sütun = nitelik (attribute)."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "İlişkisel modelde **sütun** için kullanılan terim hangisidir?",
   "opts": [
    "İlişki (relation)",
    "Kardinalite",
    "Demet (tuple)",
    "Instance",
    "Nitelik (attribute)"
   ],
   "a": 4,
   "exp": "Sütun = nitelik/alan."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Bir sütunun alabileceği değerler kümesine ne denir?",
   "opts": [
    "Derece",
    "Şema",
    "Anahtar",
    "Kardinalite",
    "Alan (domain)"
   ],
   "a": 4,
   "exp": "Örneğin harf_notu için {AA, BA, BB, …} kümesi."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "4 sütunlu ve 6 satırlı bir tablonun **derecesi** kaçtır?",
   "opts": [
    "2",
    "10",
    "24",
    "6",
    "4"
   ],
   "a": 4,
   "exp": "Derece = sütun sayısı; kardinalite = satır sayısı (6)."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "6 satır, 4 sütunlu bir tablonun **kardinalitesi** kaçtır?",
   "opts": [
    "1",
    "24",
    "6",
    "4",
    "10"
   ],
   "a": 2,
   "exp": "Kardinalite = satır (kayıt) sayısı."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Birincil anahtar (PRIMARY KEY) için hangisi doğrudur?",
   "opts": [
    "Değerleri tekrar edemez ve NULL olamaz",
    "Tekrar edebilir ama NULL olamaz",
    "Sadece metin sütunlarda kullanılır",
    "Bir tabloda en çok iki tane olabilir",
    "NULL olabilir ama tekrar edemez"
   ],
   "a": 0,
   "exp": "Varlık bütünlüğü kuralı: PK benzersiz ve NULL değil.",
   "why": {
    "4": "Bu UNIQUE kısıtının özelliği."
   }
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Başka bir tablonun birincil anahtarına başvurarak iki tabloyu bağlayan sütun hangisidir?",
   "opts": [
    "Süper anahtar",
    "Bileşik anahtar",
    "Yabancı anahtar (FOREIGN KEY)",
    "Alternatif anahtar",
    "Aday anahtar"
   ],
   "a": 2,
   "exp": "ders.bolum_no → bolum.bolum_no gibi."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Bir satırı benzersiz belirleyebilen, fazlası olmayan en küçük sütun kümesine ne denir?",
   "opts": [
    "İndeks",
    "Bileşik nitelik",
    "Süper anahtar",
    "Aday anahtar",
    "Yabancı anahtar"
   ],
   "a": 3,
   "exp": "Aday anahtarlardan biri PK seçilir; diğerleri alternatif anahtardır."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Aday anahtarlardan birincil anahtar olarak **seçilmeyenlere** ne denir?",
   "opts": [
    "Yapay anahtar",
    "Yabancı anahtar",
    "Alternatif anahtar",
    "Bileşik anahtar",
    "Süper anahtar"
   ],
   "a": 2,
   "exp": "Örn. ogrenci_no PK seçilirse eposta alternatif anahtar olur."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "`ders_kaydi` tablosunda `(ogrenci_no, ders_kodu)` birlikte birincil anahtardır. Bu ne tür anahtardır?",
   "opts": [
    "Alternatif anahtar",
    "Süper anahtar değildir",
    "Tekil anahtar",
    "Bileşik (composite) anahtar",
    "Yabancı anahtar"
   ],
   "a": 3,
   "exp": "Birden çok sütundan oluşan anahtar bileşik anahtardır."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Yabancı anahtardaki değerin başvurduğu tabloda bulunması gerektiğini söyleyen kural hangisidir?",
   "opts": [
    "Eşzamanlılık",
    "Varlık bütünlüğü",
    "Referans bütünlüğü",
    "Normalizasyon",
    "Alan bütünlüğü"
   ],
   "a": 2,
   "exp": "Olmayan bir bolum_no ile ders eklenemez."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Birincil anahtarın NULL olamayacağını söyleyen kural hangisidir?",
   "opts": [
    "Kardinalite kuralı",
    "1NF",
    "Alan bütünlüğü",
    "Referans bütünlüğü",
    "Varlık bütünlüğü"
   ],
   "a": 4,
   "exp": "Entity integrity."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "NULL için hangisi doğrudur?",
   "opts": [
    "Değerin bilinmediğini ya da olmadığını gösterir",
    "0 ile aynıdır",
    "Her zaman hata demektir",
    "Sadece sayı sütunlarında olur",
    "Boş metin ('') ile aynıdır"
   ],
   "a": 0,
   "exp": "NULL bir değer değil, değerin yokluğudur."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Bir bölüm birçok ders açar, her ders tek bir bölüme aittir. Bu ilişkinin türü nedir?",
   "opts": [
    "1:N (bire çok)",
    "İlişki yoktur",
    "1:1 (bire bir)",
    "N:1 değil, M:N",
    "M:N (çoka çok)"
   ],
   "a": 0,
   "exp": "Bölüm (1) — Ders (N)."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "1:N ilişkide yabancı anahtar hangi tabloya eklenir?",
   "opts": [
    "1 tarafındaki tabloya",
    "Ara tabloya",
    "N (çok) tarafındaki tabloya",
    "Hiçbirine, ilişki şemada tutulur",
    "İki tabloya da"
   ],
   "a": 2,
   "exp": "ders tablosuna bolum_no eklenir; bolum tablosuna ders_kodu konmaz.",
   "why": {
    "0": "Bir bölümün çok dersi var; tek sütuna sığmaz."
   }
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Derste 1:1 ilişkide `ogrenci_karti.ogrenci_no` sütununa NOT NULL dışında hangi kısıt eklendi?",
   "opts": [
    "INDEX",
    "UNIQUE",
    "DEFAULT 0",
    "AUTO_INCREMENT",
    "CHECK"
   ],
   "a": 1,
   "exp": "UNIQUE sayesinde bir öğrencinin ikinci kartı olamaz; ilişki 1:1 kalır."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Öğrenciler birçok derse, derslere birçok öğrenci kaydolur. Bu ilişki tablolara nasıl aktarılır?",
   "opts": [
    "İki tablo tek tabloda birleştirilir",
    "ogrenci_no UNIQUE yapılır",
    "ders tablosuna ogrenci_no eklenir",
    "ogrenci tablosuna ders_kodu eklenir",
    "Ara tablo (ders_kaydi) kurulur, iki tablonun PK'leri burada FK olur"
   ],
   "a": 4,
   "exp": "M:N ilişki ara (bağlantı) tablo ile çözülür."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Chen gösterimli ER diyagramında **varlık** hangi şekille çizilir?",
   "opts": [
    "Ok",
    "Elips",
    "Daire",
    "Dikdörtgen",
    "Eşkenar dörtgen (baklava)"
   ],
   "a": 3,
   "exp": "Dikdörtgen = varlık (tablo)."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "ER diyagramında **nitelik** (sütun) hangi şekille gösterilir?",
   "opts": [
    "Paralelkenar",
    "Dikdörtgen",
    "Elips",
    "Baklava",
    "Üçgen"
   ],
   "a": 2,
   "exp": "Elips = nitelik; PK olanın altı çizilir."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "ER diyagramında **ilişki** hangi şekille gösterilir?",
   "opts": [
    "Elips",
    "Çift çizgi",
    "Altıgen",
    "Dikdörtgen",
    "Eşkenar dörtgen (baklava)"
   ],
   "a": 4,
   "exp": "Derste çizilen \"Relationship\" ve \"BolumDers\" baklavaları."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "ER diyagramında bir niteliğin **altının çizili** olması neyi gösterir?",
   "opts": [
    "Silineceğini",
    "NULL olabileceğini",
    "Türetilmiş nitelik olduğunu",
    "Birincil anahtar olduğunu",
    "Yabancı anahtar olduğunu"
   ],
   "a": 3,
   "exp": "Altı çizili nitelik = PK."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Her hücrede tek (atomik) değer bulunmasını şart koşan normal form hangisidir?",
   "opts": [
    "1NF",
    "2NF",
    "BCNF",
    "3NF",
    "4NF"
   ],
   "a": 0,
   "exp": "`telefonlar = \"0532.., 0505..\"` gibi çok değerli hücre 1NF'yi bozar."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Anahtar olmayan bir sütunun başka bir anahtar olmayan sütuna bağlı olması (geçişli bağımlılık) hangi normal formda giderilir?",
   "opts": [
    "Hiçbiri",
    "3NF",
    "1NF",
    "2NF",
    "0NF"
   ],
   "a": 1,
   "exp": "3NF geçişli bağımlılığı kaldırır; 2NF kısmi bağımlılığı."
  },
  {
   "type": "mc",
   "topic": "iliskisel",
   "q": "Normalizasyonun temel amacı hangisidir?",
   "opts": [
    "Yabancı anahtarları kaldırmak",
    "Bütün sütunları NULL yapmak",
    "Tablo sayısını bire indirmek",
    "Sorguları yavaşlatmak",
    "Veri tekrarını ve güncelleme anomalilerini azaltmak"
   ],
   "a": 4,
   "exp": "Ekleme, silme, güncelleme anomalileri azalır."
  },
  {
   "type": "match",
   "topic": "iliskisel",
   "q": "İlişki türünü tabloya dönüştürme yöntemiyle eşleştirin.",
   "pairs": [
    [
     "1:1",
     "FK eklenir ve UNIQUE yapılır"
    ],
    [
     "1:N",
     "FK çok tarafına eklenir"
    ],
    [
     "M:N",
     "Ara tablo kurulur"
    ],
    [
     "Bileşik PK",
     "Birden çok sütun birlikte anahtar olur"
    ]
   ],
   "exp": "Derste: ogrenci_karti (1:1), ders (1:N), ders_kaydi (M:N).",
   "choices": [
    "Ara tablo kurulur",
    "Birden çok sütun birlikte anahtar olur",
    "FK çok tarafına eklenir",
    "FK eklenir ve UNIQUE yapılır"
   ]
  },
  {
   "type": "match",
   "topic": "iliskisel",
   "q": "ER diyagramı şekillerini anlamlarıyla eşleştirin.",
   "pairs": [
    [
     "Dikdörtgen",
     "Varlık (tablo)"
    ],
    [
     "Elips",
     "Nitelik (sütun)"
    ],
    [
     "Eşkenar dörtgen",
     "İlişki"
    ],
    [
     "Altı çizili nitelik",
     "Birincil anahtar"
    ]
   ],
   "exp": "Chen gösterimi.",
   "choices": [
    "Varlık (tablo)",
    "İlişki",
    "Birincil anahtar",
    "Nitelik (sütun)"
   ]
  },
  {
   "type": "match",
   "topic": "iliskisel",
   "q": "Terimleri eşleştirin.",
   "pairs": [
    [
     "Demet (tuple)",
     "Satır"
    ],
    [
     "Nitelik",
     "Sütun"
    ],
    [
     "Derece",
     "Sütun sayısı"
    ],
    [
     "Kardinalite",
     "Satır sayısı"
    ]
   ],
   "exp": "İlişkisel modelin temel terimleri.",
   "choices": [
    "Satır",
    "Sütun sayısı",
    "Satır sayısı",
    "Sütun"
   ]
  }
 ],
 "sql-giris": [
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`CREATE`, `ALTER`, `DROP` komutları hangi SQL alt diline aittir?",
   "opts": [
    "DDL",
    "DQL",
    "DCL",
    "DML",
    "TCL"
   ],
   "a": 0,
   "exp": "Data Definition Language: yapıyı tanımlar."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`INSERT`, `UPDATE`, `DELETE` komutları hangi alt dile aittir?",
   "opts": [
    "Hiçbiri",
    "DML",
    "DCL",
    "DDL",
    "TCL"
   ],
   "a": 1,
   "exp": "Data Manipulation Language: veriyi değiştirir."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`GRANT` ve `REVOKE` hangi alt dile aittir?",
   "opts": [
    "DQL",
    "DDL",
    "DCL",
    "TCL",
    "DML"
   ],
   "a": 2,
   "exp": "Data Control Language: yetki verme/geri alma."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`COMMIT` ve `ROLLBACK` hangi alt dile aittir?",
   "opts": [
    "DQL",
    "TCL",
    "DML",
    "DDL",
    "DCL"
   ],
   "a": 1,
   "exp": "Transaction Control Language."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Hangisi **DDL** komutudur?",
   "opts": [
    "INSERT",
    "TRUNCATE",
    "UPDATE",
    "SELECT",
    "DELETE"
   ],
   "a": 1,
   "exp": "TRUNCATE veriyi silse de tabloyu yeniden oluşturduğu için DDL sayılır.",
   "why": {
    "4": "DELETE DML'dir."
   }
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Derste `CREATE TABLE` çalıştırılırken **#1046 No database selected** hatası alındı. Sebebi nedir?",
   "opts": [
    "Komuttan önce veri tabanı seçilmemiş (USE yapılmamış)",
    "Sütun tipi hatalı",
    "Tablo adı Türkçe karakter içeriyor",
    "utf8mb4 desteklenmiyor",
    "PRIMARY KEY yazılmamış"
   ],
   "a": 0,
   "exp": "Çözüm: `USE okul_db;` ya da phpMyAdmin'de soldan veri tabanını seçmek."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`CREATE DATABASE IF NOT EXISTS okul_db` ifadesinde `IF NOT EXISTS` ne işe yarar?",
   "opts": [
    "Veri tabanını salt okunur yapar",
    "Veri tabanı zaten varsa hata vermeden atlar",
    "Sadece tablo yoksa çalışır",
    "Veri tabanını gizler",
    "Veri tabanını siler ve yeniden kurar"
   ],
   "a": 1,
   "exp": "Var olan veri tabanı için \"already exists\" hatasını engeller."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Türkçe karakterlerin doğru saklanması ve Türkçe sıralama için derste hangi ayar kullanıldı?",
   "opts": [
    "COLLATE ascii_bin",
    "ENGINE=MyISAM",
    "CHARACTER SET latin1",
    "CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci",
    "DEFAULT CHARSET=ucs2"
   ],
   "a": 3,
   "exp": "utf8mb4 = tam Unicode; turkish_ci = Türkçe karşılaştırma, büyük/küçük harf duyarsız."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`utf8mb4_turkish_ci` içindeki **ci** ne demektir?",
   "opts": [
    "Character index",
    "Country identifier",
    "Compressed index",
    "Case important",
    "Case insensitive: büyük/küçük harf duyarsız"
   ],
   "a": 4,
   "exp": "`_cs` duyarlı, `_ci` duyarsız karşılaştırma."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Para tutarı (örn. 1250.00) için en uygun veri tipi hangisidir?",
   "opts": [
    "VARCHAR(10)",
    "DATE",
    "FLOAT",
    "INT",
    "DECIMAL(10,2)"
   ],
   "a": 4,
   "exp": "DECIMAL tam hassastır; FLOAT yuvarlama hatası yapabilir."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`DECIMAL(10,2)` tipinde en büyük değer hangisi olabilir?",
   "opts": [
    "99999999.99",
    "99.99",
    "9999999999.99",
    "10.2",
    "9999999999"
   ],
   "a": 0,
   "exp": "Toplam 10 basamak, 2'si virgülden sonra: 8 + 2."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`VARCHAR(50)` ile `CHAR(50)` farkı nedir?",
   "opts": [
    "VARCHAR sadece sayı tutar",
    "CHAR NULL olamaz",
    "VARCHAR girilen uzunluk kadar, CHAR her zaman sabit uzunlukta yer kaplar",
    "CHAR daha uzun metin tutar",
    "İkisi tamamen aynıdır"
   ],
   "a": 2,
   "exp": "Harf notu gibi hep 2 karakterlik değerler için CHAR(2) uygundur."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Değer verilmeyen satırlarda sütuna otomatik değer koyan kısıt hangisidir?",
   "opts": [
    "NOT NULL",
    "UNIQUE",
    "PRIMARY KEY",
    "DEFAULT",
    "CHECK"
   ],
   "a": 3,
   "exp": "`stok INT NOT NULL DEFAULT 0` gibi."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Her yeni satırda 1, 2, 3… diye kendiliğinden artan sütun için hangisi kullanılır?",
   "opts": [
    "NEXTVAL",
    "AUTO_INCREMENT",
    "SERIAL KEY",
    "DEFAULT 1",
    "INCREMENT BY"
   ],
   "a": 1,
   "exp": "MySQL'de AUTO_INCREMENT, genelde PK ile."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "UNIQUE kısıtı için hangisi doğrudur?",
   "opts": [
    "Değerler tekrar edemez, NULL olabilir; bir tabloda birden çok olabilir",
    "NULL olamaz",
    "PRIMARY KEY ile tamamen aynıdır",
    "Sadece metin sütunlarda kullanılır",
    "Tabloda sadece bir tane olabilir"
   ],
   "a": 0,
   "exp": "PK'den farkı NULL'a izin vermesi ve birden çok tanımlanabilmesi."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Aşağıdaki tablo oluşturulduktan sonra hangi INSERT **hata verir**?",
   "opts": [
    "INSERT INTO bolum VALUES (1, 'Muhasebe');",
    "Hiçbiri",
    "INSERT INTO bolum (bolum_no, bolum_adi) VALUES (4, 'Spor');",
    "INSERT INTO bolum VALUES (2, 'Muhasebe');",
    "INSERT INTO bolum VALUES (3, 'Turizm');"
   ],
   "a": 0,
   "exp": "bolum_no = 1 zaten var; PK tekrar edemez (#1062 Duplicate entry).",
   "code": "CREATE TABLE bolum (bolum_no INT PRIMARY KEY, bolum_adi VARCHAR(100) NOT NULL);\nINSERT INTO bolum VALUES (1, 'Bilgisayar Programcılığı');"
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`ders` tablosunda `bolum_no` FK'dir ve `bolum` tablosunda sadece 1, 2, 3, 4 numaraları vardır. `INSERT INTO ders VALUES (401, 'Turizm Coğrafyası', 3, 5);` çalıştırılırsa ne olur?",
   "opts": [
    "Satır eklenir, uyarı verilmez",
    "Tablo silinir",
    "Hata: yabancı anahtar kısıtı ihlali (#1452)",
    "Satır eklenir, bolum_no NULL olur",
    "Satır eklenir ve 5 numaralı bölüm otomatik oluşur"
   ],
   "a": 2,
   "exp": "Referans bütünlüğü: bölüm 5 yok, ders eklenemez.",
   "code": "INSERT INTO ders VALUES (401, 'Turizm Coğrafyası', 3, 5);"
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`ders_kaydi` tablosunun birincil anahtarı `(ogrenci_no, ders_kodu)`dur. Aynı öğrenciyi aynı derse ikinci kez kaydetmek istersek ne olur?",
   "opts": [
    "Uyarı verilip eklenir",
    "harf_notu NULL olur",
    "Hata: Duplicate entry (birincil anahtar tekrarı)",
    "Eski kayıt silinir, yenisi eklenir",
    "İkinci kayıt eklenir"
   ],
   "a": 2,
   "exp": "Bileşik PK, aynı (öğrenci, ders) çiftinin tekrarını engeller.",
   "code": "INSERT INTO ders_kaydi VALUES (20250101, 101, '2025-10-01', 'BB');  -- 20250101 zaten 101'e kayıtlı"
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`ogrenci_karti.ogrenci_no` UNIQUE'tir. 20250101 numaralı öğrencinin zaten kartı varken ikinci kart eklenirse ne olur?",
   "opts": [
    "İlişki 1:N'ye dönüşür",
    "Eski kart güncellenir",
    "Öğrenci silinir",
    "Hata: Duplicate entry (UNIQUE ihlali)",
    "Kart eklenir"
   ],
   "a": 3,
   "exp": "UNIQUE kısıtı 1:1 ilişkiyi korur.",
   "code": "INSERT INTO ogrenci_karti VALUES (5009, 20250101, '2026-01-01', '2028-01-01');"
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Ana tablodaki satır silindiğinde ona bağlı satırların da otomatik silinmesi için FK'ye ne eklenir?",
   "opts": [
    "ON DELETE RESTRICT",
    "ON DELETE SET NULL",
    "DROP CASCADE",
    "ON DELETE CASCADE",
    "ON UPDATE NO ACTION"
   ],
   "a": 3,
   "exp": "Derste müşteri silinince siparişlerinin de silinmesi için kullanıldı."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "FK tanımında `ON DELETE` belirtilmezse MySQL ne yapar?",
   "opts": [
    "Uyarı verip siler",
    "Bağlı satırların FK'sini NULL yapar",
    "FK'yi kaldırır",
    "Bağlı satırları da siler",
    "Bağlı satır varken ana satırın silinmesine izin vermez (RESTRICT)"
   ],
   "a": 4,
   "exp": "Varsayılan davranış RESTRICT / NO ACTION."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`bolum` tablosundan 1 numaralı bölüm silinmek istendi; `ders` tablosunda bu bölüme ait dersler var ve FK'de ON DELETE yazılmamış. Sonuç?",
   "opts": [
    "Hata: bağlı satır olduğu için silinemez",
    "Bölüm ve dersleri silinir",
    "Bölüm silinir, derslerin bolum_no'su NULL olur",
    "Bölüm silinir, dersler değişmez",
    "Sadece dersler silinir"
   ],
   "a": 0,
   "exp": "Varsayılan RESTRICT: önce bağlı satırlar silinmeli.",
   "code": "DELETE FROM bolum WHERE bolum_no = 1;"
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Var olan `ogrenci` tablosuna `telefon` sütunu eklemek için hangi komut kullanılır?",
   "opts": [
    "CREATE COLUMN telefon ON ogrenci;",
    "MODIFY TABLE ogrenci telefon;",
    "INSERT INTO ogrenci telefon VARCHAR(15);",
    "ALTER TABLE ogrenci ADD telefon VARCHAR(15);",
    "UPDATE ogrenci ADD telefon VARCHAR(15);"
   ],
   "a": 3,
   "exp": "Yapı değişikliği ALTER TABLE ile yapılır.",
   "code": "ALTER TABLE ogrenci ADD telefon VARCHAR(15);"
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Bir sütunun **veri tipini** değiştirmek için hangisi kullanılır?",
   "opts": [
    "ALTER TABLE ogrenci RENAME eposta;",
    "CHANGE TYPE eposta TO VARCHAR(150);",
    "DROP eposta VARCHAR(150);",
    "ALTER TABLE ogrenci MODIFY eposta VARCHAR(150);",
    "UPDATE ogrenci SET eposta VARCHAR(150);"
   ],
   "a": 3,
   "exp": "MODIFY tipi değiştirir; CHANGE hem adı hem tipi değiştirebilir."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Tabloyu yapısıyla birlikte tamamen kaldıran komut hangisidir?",
   "opts": [
    "TRUNCATE TABLE",
    "ALTER TABLE … DROP",
    "DROP TABLE",
    "DELETE FROM",
    "REMOVE TABLE"
   ],
   "a": 2,
   "exp": "TRUNCATE ve DELETE satırları siler, tablo yapısı kalır."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Tablodaki **bütün satırları** silip yapıyı koruyan ve AUTO_INCREMENT sayacını sıfırlayan komut hangisidir?",
   "opts": [
    "DROP TABLE",
    "TRUNCATE TABLE",
    "DELETE TABLE",
    "ALTER TABLE … RESET",
    "CLEAR TABLE"
   ],
   "a": 1,
   "exp": "TRUNCATE hızlıdır, WHERE almaz."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`UPDATE ogrenci SET soyad = 'Kaya';` komutu (WHERE yok) ne yapar?",
   "opts": [
    "Hata verir",
    "Bütün öğrencilerin soyadını Kaya yapar",
    "Sadece ilk öğrenciyi değiştirir",
    "Yeni bir satır ekler",
    "Hiçbir şey yapmaz"
   ],
   "a": 1,
   "exp": "WHERE yoksa tablodaki tüm satırlar güncellenir."
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Aşağıdaki komutlardan sonra `bolum` tablosunda kaç satır kalır?",
   "opts": [
    "1",
    "2",
    "4",
    "3",
    "0"
   ],
   "a": 1,
   "exp": "İki satır eklenir, biri eklenir (3), biri silinir (2).",
   "code": "CREATE TABLE bolum (bolum_no INT PRIMARY KEY, bolum_adi VARCHAR(100) NOT NULL);\nINSERT INTO bolum VALUES (1, 'Bilgisayar'), (2, 'Grafik');\nINSERT INTO bolum VALUES (3, 'Muhasebe');\nDELETE FROM bolum WHERE bolum_no = 2;"
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Aşağıdaki tabloya `INSERT INTO urun (ad) VALUES ('Kalem');` ile bir satır eklendiğinde `stok` değeri ne olur?",
   "opts": [
    "Hata verir",
    "NULL",
    "1",
    "Boş metin",
    "0"
   ],
   "a": 4,
   "exp": "Değer verilmeyen sütuna DEFAULT değeri yazılır.",
   "code": "CREATE TABLE urun (\n  id   INT AUTO_INCREMENT PRIMARY KEY,\n  ad   VARCHAR(50) NOT NULL,\n  stok INT NOT NULL DEFAULT 0\n);"
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "Aynı tabloya üç satır `INSERT INTO urun (ad) VALUES ('A'), ('B'), ('C');` ile eklenirse son satırın `id` değeri kaç olur?",
   "opts": [
    "0",
    "2",
    "1",
    "3",
    "NULL"
   ],
   "a": 3,
   "exp": "AUTO_INCREMENT 1'den başlayıp birer artar.",
   "code": "CREATE TABLE urun (\n  id   INT AUTO_INCREMENT PRIMARY KEY,\n  ad   VARCHAR(50) NOT NULL,\n  stok INT NOT NULL DEFAULT 0\n);"
  },
  {
   "type": "mc",
   "topic": "sql-giris",
   "q": "`INSERT INTO ogrenci (ogrenci_no, soyad) VALUES (20250199, 'Ak');` neden hata verir? (ad sütunu `VARCHAR(50) NOT NULL`)",
   "opts": [
    "Soyad çok kısa",
    "Sütun listesi yazılamaz",
    "eposta zorunlu",
    "ogrenci_no tekrar ediyor",
    "ad sütunu NOT NULL ve değer verilmedi"
   ],
   "a": 4,
   "exp": "NOT NULL ve DEFAULT'u olmayan sütuna değer verilmeli.",
   "code": "INSERT INTO ogrenci (ogrenci_no, soyad) VALUES (20250199, 'Ak');"
  },
  {
   "type": "fill",
   "topic": "sql-giris",
   "q": "Boşluğu doldurun: veri tabanını seçin.",
   "code": "____ okul_db;",
   "ans": [
    "USE"
   ],
   "cs": false,
   "exp": "USE ile komutların çalışacağı veri tabanı seçilir."
  },
  {
   "type": "fill",
   "topic": "sql-giris",
   "q": "Boşluğu doldurun: birincil anahtar.",
   "code": "CREATE TABLE bolum (\n  bolum_no  INT ____,\n  bolum_adi VARCHAR(100) NOT NULL\n);",
   "ans": [
    "PRIMARY KEY"
   ],
   "cs": false,
   "exp": "PRIMARY KEY tekrar etmez, NULL olmaz."
  },
  {
   "type": "fill",
   "topic": "sql-giris",
   "q": "Boşluğu doldurun: yabancı anahtarın başvurduğu tablo.",
   "code": "CREATE TABLE ders (\n  ders_kodu INT PRIMARY KEY,\n  ders_adi  VARCHAR(100) NOT NULL,\n  bolum_no  INT NOT NULL,\n  FOREIGN KEY (bolum_no) ____ bolum(bolum_no)\n);",
   "ans": [
    "REFERENCES"
   ],
   "cs": false,
   "exp": "FOREIGN KEY (sütun) REFERENCES tablo(sütun)."
  },
  {
   "type": "fill",
   "topic": "sql-giris",
   "q": "Boşluğu doldurun: 1:1 ilişki için kart tablosunda aynı öğrenci iki kez olmamalı.",
   "code": "CREATE TABLE ogrenci_karti (\n  kart_no    INT PRIMARY KEY,\n  ogrenci_no INT NOT NULL ____\n);",
   "ans": [
    "UNIQUE"
   ],
   "cs": false,
   "exp": "UNIQUE ile her öğrencinin en fazla bir kartı olur."
  },
  {
   "type": "fill",
   "topic": "sql-giris",
   "q": "Boşluğu doldurun: sayı her satırda kendiliğinden artsın.",
   "code": "CREATE TABLE musteri (\n  musteri_no  INT ____ PRIMARY KEY,\n  musteri_adi VARCHAR(100)\n);",
   "ans": [
    "AUTO_INCREMENT"
   ],
   "cs": false,
   "exp": "AUTO_INCREMENT."
  },
  {
   "type": "fill",
   "topic": "sql-giris",
   "q": "Boşluğu doldurun: tabloya yeni satır ekleyin.",
   "code": "____ INTO bolum (bolum_no, bolum_adi) VALUES (5, 'Spor');",
   "ans": [
    "INSERT"
   ],
   "cs": false,
   "exp": "INSERT INTO … VALUES."
  },
  {
   "type": "fill",
   "topic": "sql-giris",
   "q": "Boşluğu doldurun: 102 kodlu dersin kredisini 5 yapın.",
   "code": "UPDATE ders ____ kredi = 5 WHERE ders_kodu = 102;",
   "ans": [
    "SET"
   ],
   "cs": false,
   "exp": "UPDATE tablo SET sütun = değer WHERE koşul."
  },
  {
   "type": "fill",
   "topic": "sql-giris",
   "q": "Boşluğu doldurun: notu girilmemiş kayıtları silin.",
   "code": "DELETE ____ ders_kaydi WHERE harf_notu IS NULL;",
   "ans": [
    "FROM"
   ],
   "cs": false,
   "exp": "DELETE FROM tablo WHERE koşul."
  },
  {
   "type": "fill",
   "topic": "sql-giris",
   "q": "Boşluğu doldurun: var olan tabloya sütun ekleyin.",
   "code": "____ TABLE ogrenci ADD telefon VARCHAR(15);",
   "ans": [
    "ALTER"
   ],
   "cs": false,
   "exp": "ALTER TABLE."
  },
  {
   "type": "fill",
   "topic": "sql-giris",
   "q": "Boşluğu doldurun: müşteri silinince siparişleri de silinsin.",
   "code": "CREATE TABLE siparis (\n  siparis_no INT PRIMARY KEY,\n  musteri_no INT,\n  FOREIGN KEY (musteri_no) REFERENCES musteri(musteri_no)\n    ON DELETE ____\n);",
   "ans": [
    "CASCADE"
   ],
   "cs": false,
   "exp": "ON DELETE CASCADE."
  },
  {
   "type": "match",
   "topic": "sql-giris",
   "q": "Komutları SQL alt dilleriyle eşleştirin.",
   "pairs": [
    [
     "CREATE TABLE",
     "DDL"
    ],
    [
     "INSERT INTO",
     "DML"
    ],
    [
     "GRANT",
     "DCL"
    ],
    [
     "ROLLBACK",
     "TCL"
    ]
   ],
   "exp": "DDL yapı, DML veri, DCL yetki, TCL işlem.",
   "choices": [
    "DML",
    "TCL",
    "DDL",
    "DCL"
   ]
  },
  {
   "type": "match",
   "topic": "sql-giris",
   "q": "Kısıtları anlamlarıyla eşleştirin.",
   "pairs": [
    [
     "PRIMARY KEY",
     "Tekrar etmez, NULL olmaz"
    ],
    [
     "UNIQUE",
     "Tekrar etmez, NULL olabilir"
    ],
    [
     "NOT NULL",
     "Boş bırakılamaz"
    ],
    [
     "DEFAULT",
     "Değer verilmezse varsayılanı yazar"
    ]
   ],
   "exp": "Kısıtlar CREATE TABLE içinde sütunun yanına yazılır.",
   "choices": [
    "Tekrar etmez, NULL olabilir",
    "Değer verilmezse varsayılanı yazar",
    "Tekrar etmez, NULL olmaz",
    "Boş bırakılamaz"
   ]
  },
  {
   "type": "match",
   "topic": "sql-giris",
   "q": "Silme komutlarını eşleştirin.",
   "pairs": [
    [
     "DELETE FROM t WHERE …",
     "Koşula uyan satırları siler (DML)"
    ],
    [
     "TRUNCATE TABLE t",
     "Bütün satırları siler, yapı kalır (DDL)"
    ],
    [
     "DROP TABLE t",
     "Tabloyu yapısıyla siler"
    ],
    [
     "ALTER TABLE t DROP COLUMN c",
     "Bir sütunu siler"
    ]
   ],
   "exp": "DELETE WHERE alabilir; TRUNCATE ve DROP almaz.",
   "choices": [
    "Bütün satırları siler, yapı kalır (DDL)",
    "Bir sütunu siler",
    "Tabloyu yapısıyla siler",
    "Koşula uyan satırları siler (DML)"
   ]
  },
  {
   "type": "match",
   "topic": "sql-giris",
   "q": "Veri tiplerini kullanım yerleriyle eşleştirin.",
   "pairs": [
    [
     "DECIMAL(10,2)",
     "Fiyat, tutar"
    ],
    [
     "VARCHAR(100)",
     "Ad, e-posta"
    ],
    [
     "DATE",
     "Kayıt tarihi"
    ],
    [
     "CHAR(2)",
     "Harf notu (AA, BA…)"
    ]
   ],
   "exp": "Para için DECIMAL, sabit uzunluklu kısa kod için CHAR.",
   "choices": [
    "Harf notu (AA, BA…)",
    "Kayıt tarihi",
    "Ad, e-posta",
    "Fiyat, tutar"
   ]
  }
 ],
 "sorgular": [
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Aşağıdaki sorgu kaç satır döndürür?",
   "opts": [
    "6",
    "0",
    "3",
    "4",
    "2"
   ],
   "a": 2,
   "exp": "20250104, 20250105, 20250106: 3 öğrenci.",
   "code": "SELECT ad FROM ogrenci WHERE ogrenci_no > 20250103;",
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgu sonucu hangisidir?",
   "opts": [
    "Kerem",
    "Mert, Kerem",
    "Ahmet, Mert, Kerem",
    "Zehra, Deniz",
    "Mert"
   ],
   "a": 1,
   "exp": "%er% içinde \"er\" geçenler: M**er**t, K**er**em.",
   "code": "SELECT ad FROM ogrenci WHERE ad LIKE '%er%' ORDER BY ogrenci_no;",
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgu sonucu hangisidir?",
   "opts": [
    "Zehra",
    "Ahmet, Zehra",
    "Hiçbiri",
    "Deniz",
    "Ahmet"
   ],
   "a": 0,
   "exp": "'%a' a ile biten adlar: Zehr**a**.",
   "code": "SELECT ad FROM ogrenci WHERE ad LIKE '%a';",
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "`ad LIKE '_e%'` koşulu hangi adları getirir?",
   "opts": [
    "Sadece Kerem",
    "Mert, Deniz, Kerem",
    "Zehra, İrem, Kerem",
    "Zehra, Mert, Deniz, Kerem",
    "Ahmet, Zehra"
   ],
   "a": 3,
   "exp": "_ tam bir karakter: ikinci harfi e olanlar (Z**e**hra, M**e**rt, D**e**niz, K**e**rem). İrem'in ikinci harfi r.",
   "code": "SELECT ad FROM ogrenci WHERE ad LIKE '_e%' ORDER BY ogrenci_no;",
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgu kaç satır döndürür?",
   "opts": [
    "5",
    "3",
    "2",
    "4",
    "6"
   ],
   "a": 3,
   "exp": "Bütün derslerin kredisi 3–4 aralığında (BETWEEN uçları dahil eder); bölüm 2'nin iki dersi çıkınca 4 ders kalır.",
   "code": "SELECT ders_adi FROM ders WHERE kredi BETWEEN 3 AND 4 AND bolum_no <> 2;",
   "tables": [
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgu sonucu kaç satırdır?",
   "opts": [
    "8",
    "3",
    "11",
    "1",
    "0"
   ],
   "a": 1,
   "exp": "NULL kontrolü IS NULL ile: 3 kaydın notu girilmemiş.",
   "code": "SELECT ogrenci_no FROM ders_kaydi WHERE harf_notu IS NULL;",
   "tables": [
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
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgu kaç satır döndürür?",
   "opts": [
    "8",
    "Hata verir",
    "11",
    "3",
    "0"
   ],
   "a": 4,
   "exp": "`= NULL` hiçbir zaman doğru olmaz (UNKNOWN); hata vermez ama satır gelmez.",
   "code": "SELECT ogrenci_no FROM ders_kaydi WHERE harf_notu = NULL;",
   "tables": [
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
   ],
   "why": {
    "3": "IS NULL yazılsaydı 3 olurdu."
   }
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgu sonucu hangisidir?",
   "opts": [
    "4",
    "3, 4",
    "4, 3",
    "3",
    "3, 3, 3, 4, 4, 4"
   ],
   "a": 1,
   "exp": "DISTINCT tekrarları atar, ORDER BY artan sıralar.",
   "code": "SELECT DISTINCT kredi FROM ders ORDER BY kredi;",
   "tables": [
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgunun döndürdüğü **ilk** ders hangisidir?",
   "opts": [
    "Tipografi",
    "Veritabanı Yönetim Sistemleri",
    "Web Programlama",
    "Dijital Fotoğrafçılık",
    "Genel Muhasebe"
   ],
   "a": 4,
   "exp": "Önce kredi azalan (4'lüler), eşitlerde ad artan: Genel Muhasebe < Veritabanı… < Web….",
   "code": "SELECT ders_adi FROM ders ORDER BY kredi DESC, ders_adi ASC LIMIT 1;",
   "tables": [
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgu sonucu hangisidir?",
   "opts": [
    "101",
    "102",
    "103, 201",
    "101, 102",
    "102, 103"
   ],
   "a": 4,
   "exp": "LIMIT 1, 2: 1 satır atla, 2 satır getir (ders_kodu sırasıyla 102 ve 103).",
   "code": "SELECT ders_kodu FROM ders ORDER BY ders_kodu LIMIT 1, 2;",
   "tables": [
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgu sonucu hangisidir?",
   "opts": [
    "Hata verir",
    "101",
    "101, 201",
    "101, 102, 201",
    "201"
   ],
   "a": 2,
   "exp": "IN listedeki değerlerden biriyle eşleşenler.",
   "code": "SELECT ders_kodu FROM ders WHERE ders_kodu IN (101, 201, 999) ORDER BY ders_kodu;",
   "tables": [
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "`SELECT ad AS isim FROM ogrenci;` sorgusunda `AS` ne yapar?",
   "opts": [
    "Hata verir",
    "Yeni bir sütun ekler",
    "Sonuçtaki sütuna \"isim\" takma adını verir",
    "Sıralama yapar",
    "ad sütununun adını kalıcı olarak değiştirir"
   ],
   "a": 2,
   "exp": "Takma ad sadece sorgu sonucunda görünür; tablo değişmez."
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Hangi koşul \"kredisi 3 **olmayan**\" dersleri getirir?",
   "opts": [
    "kredi NOT 3",
    "kredi =! 3",
    "kredi IS NOT 3",
    "kredi >< 3",
    "kredi <> 3"
   ],
   "a": 4,
   "exp": "Eşit değil: `<>` ya da `!=`."
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "`WHERE bolum_no = 1 OR bolum_no = 2 AND kredi = 4` koşulunda önce hangisi işlenir?",
   "opts": [
    "OR",
    "İkisi aynı anda",
    "Soldan sağa, önce OR",
    "AND",
    "Parantez olmadan hata verir"
   ],
   "a": 3,
   "exp": "AND'in önceliği OR'dan yüksektir; istenen bu değilse parantez kullanılır."
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgu sonucu kaç satırdır?",
   "opts": [
    "4",
    "5",
    "6",
    "3",
    "2"
   ],
   "a": 0,
   "exp": "AND önce işlenir: bölüm 1'in 3 dersi + (bölüm 3 ve kredi 4) olan Genel Muhasebe = 4.",
   "code": "SELECT ders_kodu FROM ders WHERE bolum_no = 1 OR bolum_no = 3 AND kredi = 4;",
   "tables": [
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Alt sorgu ile Bilgisayar Programcılığı bölümünün derslerini getiren sorgu kaç satır döndürür?",
   "opts": [
    "2",
    "1",
    "3",
    "0",
    "6"
   ],
   "a": 2,
   "exp": "İç sorgu 1 döndürür; bolum_no = 1 olan 3 ders.",
   "code": "SELECT ders_adi FROM ders\nWHERE bolum_no = (SELECT bolum_no FROM bolum WHERE bolum_adi = 'Bilgisayar Programcılığı');",
   "tables": [
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
     "name": "bolum",
     "cols": [
      "bolum_no",
      "bolum_adi"
     ],
     "rows": [
      [
       "1",
       "Bilgisayar Programcılığı"
      ],
      [
       "2",
       "Grafik Tasarımı"
      ],
      [
       "3",
       "Muhasebe ve Vergi Uygulamaları"
      ],
      [
       "4",
       "Turizm ve Otel İşletmeciliği"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgu sonucu hangisidir?",
   "opts": [
    "İrem",
    "Deniz, Kerem",
    "Ahmet",
    "Hiçbiri",
    "Kerem"
   ],
   "a": 4,
   "exp": "ders_kaydi'nda hiç kaydı olmayan tek öğrenci 20250106 Kerem.",
   "code": "SELECT ad FROM ogrenci WHERE ogrenci_no NOT IN (SELECT ogrenci_no FROM ders_kaydi);",
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
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgu sonucu kaç satırdır?",
   "opts": [
    "4",
    "6",
    "11",
    "3",
    "5"
   ],
   "a": 0,
   "exp": "101 dersine kayıtlı öğrenciler: Ahmet, Zehra, Mert, Deniz.",
   "code": "SELECT ad FROM ogrenci WHERE ogrenci_no IN (SELECT ogrenci_no FROM ders_kaydi WHERE ders_kodu = 101);",
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
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgu sonucu kaç satırdır?",
   "opts": [
    "3",
    "4",
    "0",
    "6",
    "2"
   ],
   "a": 0,
   "exp": "Ortalama kredi 3.5; 4 kredili 3 ders ortalamanın üstünde.",
   "code": "SELECT ders_adi FROM ders WHERE kredi > (SELECT AVG(kredi) FROM ders);",
   "tables": [
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Aşağıdaki sorgu neden **hata verir**?",
   "opts": [
    "ders_kaydi tablosu yok",
    "Alt sorgu parantez içinde yazılamaz",
    "Alt sorgu birden çok satır döndürüyor, = ile karşılaştırılamaz",
    "WHERE alt sorguyla kullanılamaz",
    "ad sütunu yok"
   ],
   "a": 2,
   "exp": "#1242 Subquery returns more than 1 row. Çözüm: `IN`.",
   "code": "SELECT ad FROM ogrenci WHERE ogrenci_no = (SELECT ogrenci_no FROM ders_kaydi WHERE ders_kodu = 101);"
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Çok satır döndüren bir alt sorguyla \"listedekilerden biri mi?\" kontrolü için hangisi kullanılır?",
   "opts": [
    "LIKE",
    "IN",
    "=",
    "BETWEEN",
    "IS"
   ],
   "a": 1,
   "exp": "IN / NOT IN / EXISTS / ANY / ALL."
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "`EXISTS (alt sorgu)` ne zaman doğru olur?",
   "opts": [
    "Dış tablo boşsa",
    "Alt sorgu NULL döndürürse",
    "Alt sorgu en az bir satır döndürürse",
    "Alt sorgu hata verirse",
    "Alt sorgu tam bir satır döndürürse"
   ],
   "a": 2,
   "exp": "Satırların içeriğine değil, varlığına bakar."
  },
  {
   "type": "mc",
   "topic": "sorgular",
   "q": "Sorgu sonucu kaç satırdır?",
   "opts": [
    "1",
    "6",
    "5",
    "0",
    "4"
   ],
   "a": 2,
   "exp": "En az bir ders kaydı olan öğrenciler: Kerem hariç 5.",
   "code": "SELECT ad FROM ogrenci o WHERE EXISTS (SELECT 1 FROM ders_kaydi k WHERE k.ogrenci_no = o.ogrenci_no);",
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
   "type": "mc",
   "topic": "sorgular",
   "q": "Bir SELECT ifadesinde yazım sırası hangisidir?",
   "opts": [
    "WHERE … SELECT … FROM",
    "FROM … SELECT … WHERE … LIMIT",
    "SELECT … FROM … WHERE … ORDER BY … LIMIT",
    "SELECT … WHERE … FROM … ORDER BY",
    "SELECT … FROM … ORDER BY … WHERE"
   ],
   "a": 2,
   "exp": "WHERE FROM'dan sonra, ORDER BY WHERE'den sonra, LIMIT en sonda."
  },
  {
   "type": "fill",
   "topic": "sorgular",
   "q": "Boşluğu doldurun: notu girilmemiş kayıtlar.",
   "code": "SELECT * FROM ders_kaydi WHERE harf_notu ____;",
   "ans": [
    "IS NULL"
   ],
   "cs": false,
   "exp": "`= NULL` çalışmaz; IS NULL yazılır.",
   "whyFill": {
    "= NULL": "= NULL hiçbir satır getirmez."
   }
  },
  {
   "type": "fill",
   "topic": "sorgular",
   "q": "Boşluğu doldurun: tekrar edenleri bir kez göster.",
   "code": "SELECT ____ kredi FROM ders;",
   "ans": [
    "DISTINCT"
   ],
   "cs": false,
   "exp": "DISTINCT."
  },
  {
   "type": "fill",
   "topic": "sorgular",
   "q": "Boşluğu doldurun: A ile başlayan adlar.",
   "code": "SELECT * FROM ogrenci WHERE ad ____ 'A%';",
   "ans": [
    "LIKE"
   ],
   "cs": false,
   "exp": "LIKE desen arar; % herhangi sayıda karakter."
  },
  {
   "type": "fill",
   "topic": "sorgular",
   "q": "Boşluğu doldurun: büyükten küçüğe sırala.",
   "code": "SELECT ders_adi, kredi FROM ders ORDER BY kredi ____;",
   "ans": [
    "DESC"
   ],
   "cs": false,
   "exp": "DESC azalan, ASC artan (varsayılan)."
  },
  {
   "type": "fill",
   "topic": "sorgular",
   "q": "Boşluğu doldurun: sadece ilk 3 satır.",
   "code": "SELECT * FROM ders ORDER BY ders_kodu ____ 3;",
   "ans": [
    "LIMIT"
   ],
   "cs": false,
   "exp": "MySQL'de LIMIT (SQL Server'da TOP)."
  },
  {
   "type": "fill",
   "topic": "sorgular",
   "q": "Boşluğu doldurun: 101 veya 102 dersine kayıtlı öğrenciler (alt sorgu).",
   "code": "SELECT ad FROM ogrenci\nWHERE ogrenci_no ____ (SELECT ogrenci_no FROM ders_kaydi WHERE ders_kodu IN (101, 102));",
   "ans": [
    "IN"
   ],
   "cs": false,
   "exp": "Alt sorgu birden çok satır döndürür; = değil IN."
  },
  {
   "type": "fill",
   "topic": "sorgular",
   "q": "Boşluğu doldurun: kredisi 3 ile 4 arasında (dahil).",
   "code": "SELECT ders_adi FROM ders WHERE kredi ____ 3 AND 4;",
   "ans": [
    "BETWEEN"
   ],
   "cs": false,
   "exp": "BETWEEN uçları dahil eder."
  },
  {
   "type": "match",
   "topic": "sorgular",
   "q": "Operatörleri anlamlarıyla eşleştirin.",
   "pairs": [
    [
     "LIKE 'A%'",
     "A ile başlayan"
    ],
    [
     "BETWEEN 3 AND 4",
     "3 ve 4 dahil aralık"
    ],
    [
     "IN (101, 201)",
     "Listedekilerden biri"
    ],
    [
     "IS NULL",
     "Değeri girilmemiş"
    ]
   ],
   "exp": "WHERE koşulunda kullanılan operatörler.",
   "choices": [
    "3 ve 4 dahil aralık",
    "A ile başlayan",
    "Değeri girilmemiş",
    "Listedekilerden biri"
   ]
  },
  {
   "type": "match",
   "topic": "sorgular",
   "q": "LIKE desenlerini eşleştirin.",
   "pairs": [
    [
     "'%a'",
     "a ile biten"
    ],
    [
     "'a%'",
     "a ile başlayan"
    ],
    [
     "'%a%'",
     "içinde a geçen"
    ],
    [
     "'_a%'",
     "ikinci harfi a olan"
    ]
   ],
   "exp": "% = herhangi sayıda karakter, _ = tam bir karakter.",
   "choices": [
    "a ile başlayan",
    "a ile biten",
    "ikinci harfi a olan",
    "içinde a geçen"
   ]
  }
 ],
 "ileri1": [
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "`COUNT(*)` ile `COUNT(harf_notu)` arasındaki fark nedir?",
   "opts": [
    "COUNT(*) sadece NULL'ları sayar",
    "COUNT(harf_notu) tekrar edenleri saymaz",
    "COUNT(*) tüm satırları, COUNT(harf_notu) NULL olmayanları sayar",
    "COUNT(*) hata verir",
    "İkisi her zaman aynı sonucu verir"
   ],
   "a": 2,
   "exp": "Toplama fonksiyonları (COUNT(*) hariç) NULL'ları atlar."
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucu hangisidir? (`kayit | notu_olan`)",
   "opts": [
    "11 | 8",
    "8 | 8",
    "11 | 11",
    "8 | 11",
    "11 | 3"
   ],
   "a": 0,
   "exp": "11 kayıt var, 3'ünün notu NULL.",
   "code": "SELECT COUNT(*) AS kayit, COUNT(harf_notu) AS notu_olan FROM ders_kaydi;",
   "tables": [
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
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucu kaçtır?",
   "opts": [
    "3",
    "11",
    "5",
    "4",
    "6"
   ],
   "a": 4,
   "exp": "COUNT(DISTINCT) farklı değerleri sayar: 101, 102, 103, 201, 202, 301.",
   "code": "SELECT COUNT(DISTINCT ders_kodu) FROM ders_kaydi;",
   "tables": [
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
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucu kaçtır?",
   "opts": [
    "4",
    "3.5000",
    "6",
    "24",
    "21"
   ],
   "a": 4,
   "exp": "Kredilerin toplamı: 4+4+3+3+3+4 = 21.",
   "code": "SELECT SUM(kredi) FROM ders;",
   "tables": [
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucu kaçtır?",
   "opts": [
    "4",
    "21",
    "3.5000",
    "3.50",
    "3"
   ],
   "a": 2,
   "exp": "AVG: 21 / 6 = 3.5. MySQL INT ortalamasını 4 ondalıkla gösterir.",
   "code": "SELECT AVG(kredi) FROM ders;",
   "tables": [
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Ürünlerin ortalama fiyatını 2 basamağa yuvarlamak için hangisi yazılır?",
   "opts": [
    "AVG(fiyat, 2)",
    "AVG(ROUND(fiyat))",
    "FORMAT AVG(fiyat)",
    "ROUND(fiyat, 2) AVG",
    "ROUND(AVG(fiyat), 2)"
   ],
   "a": 4,
   "exp": "Uygulama soru 2."
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Hangi sorgu **hata verir**?",
   "opts": [
    "SELECT COUNT(*) FROM musteriler;",
    "SELECT sehir, COUNT(*) FROM musteriler GROUP BY sehir HAVING COUNT(*) > 1;",
    "SELECT sehir FROM musteriler WHERE COUNT(*) > 1;",
    "SELECT sehir FROM musteriler WHERE sehir = 'İzmir';",
    "SELECT sehir, COUNT(*) FROM musteriler GROUP BY sehir;"
   ],
   "a": 2,
   "exp": "Toplama fonksiyonu WHERE'de kullanılamaz (#1111 Invalid use of group function).",
   "code": "SELECT sehir FROM musteriler WHERE COUNT(*) > 1;"
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Toplama fonksiyonu içeren koşul (ör. `COUNT(*) > 1`) nereye yazılır?",
   "opts": [
    "WHERE",
    "SELECT",
    "ORDER BY",
    "HAVING",
    "FROM"
   ],
   "a": 3,
   "exp": "HAVING grupları süzer."
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "WHERE ile HAVING için hangisi doğrudur?",
   "opts": [
    "WHERE toplama fonksiyonu alır",
    "HAVING sadece ORDER BY ile kullanılır",
    "WHERE gruplamadan önce satırları, HAVING gruplamadan sonra grupları süzer",
    "HAVING gruplamadan önce çalışır",
    "İkisi aynı anda çalışır"
   ],
   "a": 2,
   "exp": "Uygulamadaki kısa hatırlatma."
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Doğru yazım sırası hangisidir?",
   "opts": [
    "FROM, SELECT, WHERE, ORDER BY, GROUP BY, HAVING",
    "SELECT, WHERE, FROM, GROUP BY, ORDER BY, HAVING",
    "SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY",
    "SELECT, FROM, GROUP BY, WHERE, HAVING, ORDER BY",
    "SELECT, FROM, WHERE, HAVING, GROUP BY, ORDER BY"
   ],
   "a": 2,
   "exp": "Uygulama: SELECT … FROM … JOIN … WHERE … GROUP BY … HAVING … ORDER BY …"
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Mantıksal çalışma sırasında hangisi **en önce** işlenir?",
   "opts": [
    "SELECT",
    "GROUP BY",
    "ORDER BY",
    "FROM",
    "WHERE"
   ],
   "a": 3,
   "exp": "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT."
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "`magaza` veri tabanında aşağıdaki sorgu kaç satır döndürür? (Şehirler: İzmir 3, İstanbul 3, Ankara 2, Gaziantep 1, Bursa 1 müşteri)",
   "opts": [
    "3",
    "2",
    "5",
    "1",
    "10"
   ],
   "a": 0,
   "exp": "Birden fazla müşterisi olan şehirler: İzmir, İstanbul, Ankara (uygulama soru 7).",
   "code": "SELECT sehir, COUNT(*) FROM musteriler GROUP BY sehir HAVING COUNT(*) > 1;"
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "`magaza` veri tabanında her şehirdeki müşteri sayısını veren sorgu (uygulama soru 3) kaç satır döndürür?",
   "opts": [
    "10",
    "6",
    "5",
    "3",
    "1"
   ],
   "a": 2,
   "exp": "5 farklı şehir: İzmir, İstanbul, Ankara, Gaziantep, Bursa.",
   "code": "SELECT sehir, COUNT(*) AS musteri_sayisi FROM musteriler GROUP BY sehir;"
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucunda \"Teslim Edildi\" satırındaki sayı kaçtır?",
   "opts": [
    "1",
    "4",
    "6",
    "3",
    "2"
   ],
   "a": 3,
   "exp": "Durum bazında sayım (uygulama soru 4): Teslim Edildi 3, İptal 2, Kargoda 1.",
   "code": "SELECT durum, COUNT(*) AS adet\nFROM siparisler\nGROUP BY durum;",
   "tables": [
    {
     "name": "siparisler",
     "cols": [
      "siparis_id",
      "musteri_id",
      "durum"
     ],
     "rows": [
      [
       "1",
       "1",
       "Teslim Edildi"
      ],
      [
       "2",
       "2",
       "Teslim Edildi"
      ],
      [
       "3",
       "1",
       "Kargoda"
      ],
      [
       "4",
       "3",
       "İptal"
      ],
      [
       "5",
       "1",
       "Teslim Edildi"
      ],
      [
       "6",
       "2",
       "İptal"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu kaç satır döndürür?",
   "opts": [
    "2",
    "1",
    "3",
    "6",
    "0"
   ],
   "a": 1,
   "exp": "Müşteri bazında sipariş sayıları: 1 → 3, 2 → 2, 3 → 1. En az 3 olan sadece müşteri 1.",
   "code": "SELECT musteri_id, COUNT(*) AS n FROM siparisler GROUP BY musteri_id HAVING COUNT(*) >= 3;",
   "tables": [
    {
     "name": "siparisler",
     "cols": [
      "siparis_id",
      "musteri_id",
      "durum"
     ],
     "rows": [
      [
       "1",
       "1",
       "Teslim Edildi"
      ],
      [
       "2",
       "2",
       "Teslim Edildi"
      ],
      [
       "3",
       "1",
       "Kargoda"
      ],
      [
       "4",
       "3",
       "İptal"
      ],
      [
       "5",
       "1",
       "Teslim Edildi"
      ],
      [
       "6",
       "2",
       "İptal"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucu hangisidir?",
   "opts": [
    "1, 2",
    "1, 2, 3",
    "2, 3",
    "3",
    "1"
   ],
   "a": 0,
   "exp": "Önce WHERE iptalleri atar (4, 6). Kalan: müşteri 1 → 3, 2 → 1. HAVING COUNT >= 1: 1 ve 2.",
   "code": "SELECT musteri_id FROM siparisler WHERE durum <> 'İptal' GROUP BY musteri_id HAVING COUNT(*) >= 1 ORDER BY musteri_id;",
   "tables": [
    {
     "name": "siparisler",
     "cols": [
      "siparis_id",
      "musteri_id",
      "durum"
     ],
     "rows": [
      [
       "1",
       "1",
       "Teslim Edildi"
      ],
      [
       "2",
       "2",
       "Teslim Edildi"
      ],
      [
       "3",
       "1",
       "Kargoda"
      ],
      [
       "4",
       "3",
       "İptal"
      ],
      [
       "5",
       "1",
       "Teslim Edildi"
      ],
      [
       "6",
       "2",
       "İptal"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucunda 1 numaralı siparişin toplamı kaçtır?",
   "opts": [
    "640.00",
    "1250.00",
    "1570.00",
    "1890.00",
    "3"
   ],
   "a": 3,
   "exp": "Satır tutarı adet * birim_fiyat: 1·1250 + 2·320 = 1890.00 (uygulama soru 6).",
   "code": "SELECT siparis_id, SUM(adet * birim_fiyat) AS toplam\nFROM siparis_detay\nGROUP BY siparis_id;",
   "tables": [
    {
     "name": "siparis_detay",
     "cols": [
      "siparis_id",
      "urun_id",
      "adet",
      "birim_fiyat"
     ],
     "rows": [
      [
       "1",
       "1",
       "1",
       "1250.00"
      ],
      [
       "1",
       "8",
       "2",
       "320.00"
      ],
      [
       "2",
       "2",
       "1",
       "3400.00"
      ],
      [
       "3",
       "8",
       "3",
       "320.00"
      ],
      [
       "3",
       "9",
       "1",
       "410.00"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucu hangi ürün numaralarıdır?",
   "opts": [
    "1, 2, 8",
    "1, 8",
    "8, 9",
    "2",
    "8"
   ],
   "a": 4,
   "exp": "Ürün 8: 2 + 3 = 5 adet ≥ 3. Diğerleri 1 adet.",
   "code": "SELECT urun_id FROM siparis_detay GROUP BY urun_id HAVING SUM(adet) >= 3;",
   "tables": [
    {
     "name": "siparis_detay",
     "cols": [
      "siparis_id",
      "urun_id",
      "adet",
      "birim_fiyat"
     ],
     "rows": [
      [
       "1",
       "1",
       "1",
       "1250.00"
      ],
      [
       "1",
       "8",
       "2",
       "320.00"
      ],
      [
       "2",
       "2",
       "1",
       "3400.00"
      ],
      [
       "3",
       "8",
       "3",
       "320.00"
      ],
      [
       "3",
       "9",
       "1",
       "410.00"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucu kaçtır?",
   "opts": [
    "5380.00",
    "1250.00",
    "410.00",
    "3400.00",
    "320.00"
   ],
   "a": 3,
   "exp": "En büyük birim fiyat.",
   "code": "SELECT MAX(birim_fiyat) FROM siparis_detay;",
   "tables": [
    {
     "name": "siparis_detay",
     "cols": [
      "siparis_id",
      "urun_id",
      "adet",
      "birim_fiyat"
     ],
     "rows": [
      [
       "1",
       "1",
       "1",
       "1250.00"
      ],
      [
       "1",
       "8",
       "2",
       "320.00"
      ],
      [
       "2",
       "2",
       "1",
       "3400.00"
      ],
      [
       "3",
       "8",
       "3",
       "320.00"
      ],
      [
       "3",
       "9",
       "1",
       "410.00"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "`SELECT sehir, ad, COUNT(*) FROM musteriler GROUP BY sehir;` sorgusunun sorunu nedir?",
   "opts": [
    "GROUP BY'dan sonra WHERE gelmeli",
    "sehir sütunu SELECT'te olamaz",
    "ad sütunu GROUP BY'da yok ve toplama fonksiyonu içinde değil",
    "Sorun yoktur",
    "COUNT(*) GROUP BY ile kullanılamaz"
   ],
   "a": 2,
   "exp": "Bir şehirde birden çok ad var; hangisinin yazılacağı belli değil (ONLY_FULL_GROUP_BY hatası).",
   "code": "SELECT sehir, ad, COUNT(*) FROM musteriler GROUP BY sehir;"
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Uygulama soru 10'da (iptaller hariç, cirosu 5000 TL'yi geçen şehirler) iptal edilen siparişler hangi bölümde elenir?",
   "opts": [
    "WHERE",
    "HAVING",
    "ORDER BY",
    "GROUP BY",
    "SELECT"
   ],
   "a": 0,
   "exp": "İptal tek tek satırların özelliğidir, gruplamadan önce WHERE ile atılır; 5000 koşulu ise HAVING'dedir."
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "`magaza` veri tabanında uygulama soru 10'un sorgusu kaç şehir döndürür?",
   "opts": [
    "2",
    "1",
    "5",
    "4",
    "3"
   ],
   "a": 0,
   "exp": "İstanbul (16579.70) ve İzmir (13014.20). Gaziantep (3899.00) ve Ankara (3500.00) 5000 TL'nin altında kalır; Bursa'dan sipariş yok.",
   "code": "SELECT m.sehir, SUM(d.adet * d.birim_fiyat) AS ciro\nFROM musteriler m\nJOIN siparisler s    ON s.musteri_id = m.musteri_id\nJOIN siparis_detay d ON d.siparis_id = s.siparis_id\nWHERE s.durum <> 'İptal'\nGROUP BY m.sehir\nHAVING SUM(d.adet * d.birim_fiyat) > 5000\nORDER BY ciro DESC;"
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Aynı sorguda (uygulama 10) ilk satırdaki şehir hangisidir?",
   "opts": [
    "Ankara",
    "İzmir",
    "Gaziantep",
    "İstanbul",
    "Bursa"
   ],
   "a": 3,
   "exp": "En yüksek ciro İstanbul'da.",
   "code": "-- uygulama soru 10'un sorgusu, ORDER BY ciro DESC"
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "`magaza` veri tabanında toplam kaç müşteri vardır? (uygulama soru 1)",
   "opts": [
    "5",
    "30",
    "18",
    "9",
    "10"
   ],
   "a": 4,
   "exp": "`SELECT COUNT(*) FROM musteriler;`",
   "code": "SELECT COUNT(*) FROM musteriler;"
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "`magaza` veri tabanında en az 2 sipariş vermiş müşteri sayısı kaçtır? (uygulama soru 8)",
   "opts": [
    "6",
    "2",
    "3",
    "8",
    "10"
   ],
   "a": 0,
   "exp": "Ayşe 3, Mehmet 3, Zeynep 3, Elif 2, Can 2, Deniz 2 sipariş verdi.",
   "code": "SELECT m.ad, m.soyad, COUNT(s.siparis_id) AS siparis_sayisi\nFROM musteriler m\nJOIN siparisler s ON s.musteri_id = m.musteri_id\nGROUP BY m.musteri_id, m.ad, m.soyad\nHAVING COUNT(s.siparis_id) >= 2;"
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "`AVG` fonksiyonu NULL değerleri nasıl ele alır?",
   "opts": [
    "0 olarak sayar",
    "Hesaba katmaz; NULL olmayanların ortalamasını alır",
    "En büyük değer yapar",
    "Sonucu NULL yapar",
    "Hata verir"
   ],
   "a": 1,
   "exp": "Not: 10, NULL, 20 → AVG = 15, (10+0+20)/3 değil."
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucu kaçtır?",
   "opts": [
    "30",
    "NULL",
    "15.0000",
    "10.0000",
    "20.0000"
   ],
   "a": 2,
   "exp": "AVG NULL'u atlar: (10 + 20) / 2.",
   "code": "SELECT AVG(puan) FROM notlar;",
   "tables": [
    {
     "name": "notlar",
     "cols": [
      "ogrenci",
      "puan"
     ],
     "rows": [
      [
       "Ali",
       "10"
      ],
      [
       "Ayşe",
       null
      ],
      [
       "Can",
       "20"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucu (`a | b`) hangisidir?",
   "opts": [
    "2 | 2",
    "3 | 0",
    "2 | 3",
    "3 | 2",
    "3 | 3"
   ],
   "a": 3,
   "exp": "COUNT(*) 3 satır, COUNT(puan) NULL olmayan 2.",
   "code": "SELECT COUNT(*) AS a, COUNT(puan) AS b FROM notlar;",
   "tables": [
    {
     "name": "notlar",
     "cols": [
      "ogrenci",
      "puan"
     ],
     "rows": [
      [
       "Ali",
       "10"
      ],
      [
       "Ayşe",
       null
      ],
      [
       "Can",
       "20"
      ]
     ]
    }
   ]
  },
  {
   "type": "fill",
   "topic": "ileri1",
   "q": "Boşluğu doldurun: her şehirdeki müşteri sayısı.",
   "code": "SELECT sehir, COUNT(*) FROM musteriler ____ sehir;",
   "ans": [
    "GROUP BY"
   ],
   "cs": false,
   "exp": "GROUP BY aynı şehirleri bir grup yapar."
  },
  {
   "type": "fill",
   "topic": "ileri1",
   "q": "Boşluğu doldurun: birden fazla müşterisi olan şehirler.",
   "code": "SELECT sehir, COUNT(*) FROM musteriler\nGROUP BY sehir\n____ COUNT(*) > 1;",
   "ans": [
    "HAVING"
   ],
   "cs": false,
   "exp": "Toplama fonksiyonlu koşul HAVING'e.",
   "whyFill": {
    "WHERE": "WHERE'de COUNT kullanılamaz ve GROUP BY'dan sonra gelemez."
   }
  },
  {
   "type": "fill",
   "topic": "ileri1",
   "q": "Boşluğu doldurun: her siparişin toplam tutarı.",
   "code": "SELECT siparis_id, ____(adet * birim_fiyat) AS toplam\nFROM siparis_detay\nGROUP BY siparis_id;",
   "ans": [
    "SUM"
   ],
   "cs": false,
   "exp": "SUM toplar."
  },
  {
   "type": "fill",
   "topic": "ileri1",
   "q": "Boşluğu doldurun: ortalamayı 2 basamağa yuvarla.",
   "code": "SELECT ____(AVG(fiyat), 2) AS ortalama FROM urunler;",
   "ans": [
    "ROUND"
   ],
   "cs": false,
   "exp": "ROUND(x, 2)."
  },
  {
   "type": "fill",
   "topic": "ileri1",
   "q": "Boşluğu doldurun: en pahalı ürünün fiyatı.",
   "code": "SELECT ____(fiyat) FROM urunler;",
   "ans": [
    "MAX"
   ],
   "cs": false,
   "exp": "MAX en büyük değeri döndürür."
  },
  {
   "type": "match",
   "topic": "ileri1",
   "q": "Fonksiyonları eşleştirin.",
   "pairs": [
    [
     "COUNT(*)",
     "Satır sayısı"
    ],
    [
     "SUM(adet)",
     "Toplam"
    ],
    [
     "AVG(fiyat)",
     "Ortalama"
    ],
    [
     "MAX(fiyat)",
     "En büyük değer"
    ]
   ],
   "exp": "Toplama (aggregate) fonksiyonları her grup için tek değer üretir.",
   "choices": [
    "Toplam",
    "En büyük değer",
    "Ortalama",
    "Satır sayısı"
   ]
  },
  {
   "type": "match",
   "topic": "ileri1",
   "q": "Sorgu bölümlerini görevleriyle eşleştirin.",
   "pairs": [
    [
     "WHERE",
     "Gruplamadan önce satırları süzer"
    ],
    [
     "GROUP BY",
     "Aynı değerli satırları gruplar"
    ],
    [
     "HAVING",
     "Gruplamadan sonra grupları süzer"
    ],
    [
     "ORDER BY",
     "Sonucu sıralar"
    ]
   ],
   "exp": "Uygulamadaki kısa hatırlatma.",
   "choices": [
    "Sonucu sıralar",
    "Gruplamadan önce satırları süzer",
    "Aynı değerli satırları gruplar",
    "Gruplamadan sonra grupları süzer"
   ]
  }
 ],
 "ileri2": [
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "`INNER JOIN` hangi satırları getirir?",
   "opts": [
    "Sadece iki tabloda da eşleşen satırları",
    "Her satırı her satırla",
    "Sağdaki tablonun bütün satırlarını",
    "Soldaki tablonun bütün satırlarını",
    "Eşleşmeyen satırları"
   ],
   "a": 0,
   "exp": "Eşleşme yoksa satır sonuçta yer almaz."
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "`LEFT JOIN` hangi satırları getirir?",
   "opts": [
    "Soldaki tablonun bütün satırlarını; sağda eşleşme yoksa sağ sütunlar NULL",
    "Sadece eşleşen satırları",
    "Kartezyen çarpımı",
    "Sadece eşleşmeyenleri",
    "Sağdaki tablonun bütün satırlarını"
   ],
   "a": 0,
   "exp": "Kartı olmayan öğrenciyi de listelemek için kullanıldı."
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorgu kaç satır döndürür?",
   "opts": [
    "5",
    "1",
    "4",
    "30",
    "6"
   ],
   "a": 0,
   "exp": "Kerem'in kartı yok; INNER JOIN onu getirmez.",
   "code": "SELECT o.ad, k.kart_no FROM ogrenci o JOIN ogrenci_karti k ON k.ogrenci_no = o.ogrenci_no;",
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
     "name": "ogrenci_karti",
     "cols": [
      "kart_no",
      "ogrenci_no"
     ],
     "rows": [
      [
       "5001",
       "20250101"
      ],
      [
       "5002",
       "20250102"
      ],
      [
       "5003",
       "20250103"
      ],
      [
       "5004",
       "20250104"
      ],
      [
       "5005",
       "20250105"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorgu kaç satır döndürür?",
   "opts": [
    "5",
    "6",
    "11",
    "30",
    "1"
   ],
   "a": 1,
   "exp": "LEFT JOIN soldaki 6 öğrencinin hepsini getirir; Kerem'in kart_no'su NULL.",
   "code": "SELECT o.ad, k.kart_no FROM ogrenci o LEFT JOIN ogrenci_karti k ON k.ogrenci_no = o.ogrenci_no;",
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
     "name": "ogrenci_karti",
     "cols": [
      "kart_no",
      "ogrenci_no"
     ],
     "rows": [
      [
       "5001",
       "20250101"
      ],
      [
       "5002",
       "20250102"
      ],
      [
       "5003",
       "20250103"
      ],
      [
       "5004",
       "20250104"
      ],
      [
       "5005",
       "20250105"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorgu sonucu hangisidir?",
   "opts": [
    "Ahmet",
    "Boş sonuç",
    "Kerem, Deniz",
    "Deniz",
    "Kerem"
   ],
   "a": 4,
   "exp": "LEFT JOIN + IS NULL: kartı olmayan öğrenci.",
   "code": "SELECT o.ad FROM ogrenci o LEFT JOIN ogrenci_karti k ON k.ogrenci_no = o.ogrenci_no WHERE k.kart_no IS NULL;",
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
     "name": "ogrenci_karti",
     "cols": [
      "kart_no",
      "ogrenci_no"
     ],
     "rows": [
      [
       "5001",
       "20250101"
      ],
      [
       "5002",
       "20250102"
      ],
      [
       "5003",
       "20250103"
      ],
      [
       "5004",
       "20250104"
      ],
      [
       "5005",
       "20250105"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorgu sonucu hangisidir?",
   "opts": [
    "Muhasebe ve Vergi Uygulamaları",
    "Turizm ve Otel İşletmeciliği",
    "Boş sonuç",
    "Grafik Tasarımı",
    "Bilgisayar Programcılığı"
   ],
   "a": 1,
   "exp": "Hiç dersi olmayan bölüm: 4 numara.",
   "code": "SELECT b.bolum_adi FROM bolum b LEFT JOIN ders d ON d.bolum_no = b.bolum_no WHERE d.ders_kodu IS NULL;",
   "tables": [
    {
     "name": "bolum",
     "cols": [
      "bolum_no",
      "bolum_adi"
     ],
     "rows": [
      [
       "1",
       "Bilgisayar Programcılığı"
      ],
      [
       "2",
       "Grafik Tasarımı"
      ],
      [
       "3",
       "Muhasebe ve Vergi Uygulamaları"
      ],
      [
       "4",
       "Turizm ve Otel İşletmeciliği"
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorgu kaç satır döndürür?",
   "opts": [
    "1",
    "24",
    "10",
    "4",
    "6"
   ],
   "a": 1,
   "exp": "CROSS JOIN kartezyen çarpım: 6 ders × 4 bölüm = 24.",
   "code": "SELECT * FROM ders CROSS JOIN bolum;"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "MySQL'de hangi JOIN türü **doğrudan desteklenmez**?",
   "opts": [
    "RIGHT JOIN",
    "LEFT JOIN",
    "FULL OUTER JOIN",
    "INNER JOIN",
    "CROSS JOIN"
   ],
   "a": 2,
   "exp": "LEFT JOIN … UNION … RIGHT JOIN ile yapılır."
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Aşağıdaki sorgu neden **hata verir**?",
   "opts": [
    "Takma ad kullanılamaz",
    "JOIN yerine WHERE yazılmalıydı",
    "SELECT'te iki sütun olamaz",
    "ON yerine IN gelmeli",
    "ogrenci_no iki tabloda da var; hangi tablonunki olduğu belirsiz"
   ],
   "a": 4,
   "exp": "#1052 Column 'ogrenci_no' in field list is ambiguous. Çözüm: `o.ogrenci_no`.",
   "code": "SELECT ogrenci_no, ders_kodu FROM ogrenci o JOIN ders_kaydi k ON k.ogrenci_no = o.ogrenci_no;"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Bölüm 2 (Grafik) derslerine kayıtları getiren 3 tablolu JOIN kaç satır döndürür?",
   "opts": [
    "4",
    "3",
    "2",
    "11",
    "5"
   ],
   "a": 0,
   "exp": "201: Ahmet, İrem; 202: Mert, İrem.",
   "code": "SELECT o.ad, d.ders_adi, k.harf_notu\nFROM ders_kaydi k\nJOIN ogrenci o ON o.ogrenci_no = k.ogrenci_no\nJOIN ders d    ON d.ders_kodu  = k.ders_kodu\nWHERE d.bolum_no = 2;",
   "tables": [
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Her öğrencinin kaç derse kayıtlı olduğunu (kaydı olmayan da 0 görünsün) listelemek için hangisi doğrudur?",
   "opts": [
    "LEFT JOIN ve COUNT(*)",
    "LEFT JOIN ders_kaydi ve COUNT(k.ders_kodu)",
    "CROSS JOIN ve SUM",
    "INNER JOIN ve COUNT(*)",
    "RIGHT JOIN ve MAX"
   ],
   "a": 1,
   "exp": "COUNT(*) eşleşmeyen satırı 1 sayar; sağ tablonun sütunu sayılınca 0 olur."
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorguda Kerem'in satırında hangi sayı görünür?",
   "opts": [
    "Satır görünmez",
    "NULL",
    "6",
    "1",
    "0"
   ],
   "a": 4,
   "exp": "LEFT JOIN Kerem'i getirir; COUNT(k.ders_kodu) NULL'u saymaz → 0.",
   "code": "SELECT o.ad, COUNT(k.ders_kodu) AS ders_sayisi\nFROM ogrenci o\nLEFT JOIN ders_kaydi k ON k.ogrenci_no = o.ogrenci_no\nGROUP BY o.ogrenci_no, o.ad;",
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
   "type": "mc",
   "topic": "ileri2",
   "q": "Aynı sorguda `COUNT(*)` kullanılsaydı Kerem'in satırında kaç yazardı?",
   "opts": [
    "1",
    "Hata verirdi",
    "6",
    "0",
    "NULL"
   ],
   "a": 0,
   "exp": "LEFT JOIN'in eşleşmesiz satırı da bir satırdır; COUNT(*) onu sayar.",
   "code": "SELECT o.ad, COUNT(*) AS ders_sayisi\nFROM ogrenci o\nLEFT JOIN ders_kaydi k ON k.ogrenci_no = o.ogrenci_no\nGROUP BY o.ogrenci_no, o.ad;",
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
   "type": "mc",
   "topic": "ileri2",
   "q": "`magaza` veri tabanında hiç satılmamış ürünler (uygulama bonus) hangileridir?",
   "opts": [
    "Kamp Sandalyesi, Termos",
    "Mekanik Klavye",
    "Mekanik Klavye, Kamp Sandalyesi",
    "Hepsi satıldı",
    "Oyuncak"
   ],
   "a": 2,
   "exp": "LEFT JOIN + GROUP BY + HAVING COUNT(d.detay_id) = 0.",
   "code": "SELECT u.urun_adi\nFROM urunler u\nLEFT JOIN siparis_detay d ON d.urun_id = u.urun_id\nGROUP BY u.urun_id, u.urun_adi\nHAVING COUNT(d.detay_id) = 0\nORDER BY u.urun_id;"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "`magaza` veri tabanında her kategorinin ürün sayısını, ürünü olmayan \"Oyuncak\" da 0 görünecek şekilde listelemek için hangisi gerekir?",
   "opts": [
    "kategoriler INNER JOIN urunler",
    "kategoriler LEFT JOIN urunler",
    "HAVING COUNT(*) > 0",
    "Sadece WHERE",
    "urunler CROSS JOIN kategoriler"
   ],
   "a": 1,
   "exp": "INNER JOIN ürünü olmayan kategoriyi atar."
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorgu sonucu kaç satırdır?",
   "opts": [
    "3",
    "2",
    "6",
    "4",
    "5"
   ],
   "a": 3,
   "exp": "4 kredili dersler 101, 102, 301; AA alan dersler 101, 202. UNION tekrarı (101) atar: 101, 102, 202, 301.",
   "code": "SELECT ders_kodu FROM ders WHERE kredi = 4 UNION SELECT ders_kodu FROM ders_kaydi WHERE harf_notu = 'AA';",
   "tables": [
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
   "type": "mc",
   "topic": "ileri2",
   "q": "Aynı sorgu `UNION ALL` ile yazılırsa kaç satır döner?",
   "opts": [
    "6",
    "4",
    "2",
    "3",
    "5"
   ],
   "a": 4,
   "exp": "UNION ALL tekrarları atmaz: 3 + 2 = 5.",
   "code": "SELECT ders_kodu FROM ders WHERE kredi = 4 UNION ALL SELECT ders_kodu FROM ders_kaydi WHERE harf_notu = 'AA';",
   "tables": [
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
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorgu sonucu hangisidir?",
   "opts": [
    "Ahmet",
    "NULL",
    "AhmetKara",
    "Ahmet Kara",
    "Kara Ahmet"
   ],
   "a": 3,
   "exp": "CONCAT değerleri birleştirir; araya ' ' konmuş.",
   "code": "SELECT CONCAT(ad, ' ', soyad) FROM ogrenci WHERE ogrenci_no = 20250101;",
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorgu sonucu hangisidir?",
   "opts": [
    "NULL",
    "Boş",
    "0",
    "Girilmedi",
    "AA"
   ],
   "a": 3,
   "exp": "20250102'nin 103 dersinde notu NULL; IFNULL ikinci değeri döndürür.",
   "code": "SELECT IFNULL(harf_notu, 'Girilmedi') FROM ders_kaydi WHERE ogrenci_no = 20250102 AND ders_kodu = 103;",
   "tables": [
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
   "type": "mc",
   "topic": "ileri2",
   "q": "`SELECT UPPER('sql');` sonucu nedir?",
   "opts": [
    "Sql",
    "3",
    "SQL",
    "Hata",
    "sql"
   ],
   "a": 2,
   "exp": "UPPER büyük harfe, LOWER küçük harfe çevirir.",
   "code": "SELECT UPPER('sql');"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "`SELECT CHAR_LENGTH('Mert');` sonucu nedir?",
   "opts": [
    "Mert",
    "4",
    "3",
    "5",
    "8"
   ],
   "a": 1,
   "exp": "Karakter sayısı.",
   "code": "SELECT CHAR_LENGTH('Mert');"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "`SELECT SUBSTRING('Veritabanı', 1, 4);` sonucu nedir?",
   "opts": [
    "erit",
    "Veritabanı",
    "Veri",
    "V",
    "tabanı"
   ],
   "a": 2,
   "exp": "1. karakterden başlayıp 4 karakter.",
   "code": "SELECT SUBSTRING('Veritabanı', 1, 4);"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "`SELECT DATEDIFF('2025-09-23', '2025-09-20');` sonucu nedir?",
   "opts": [
    "-3",
    "2025",
    "3",
    "0",
    "23"
   ],
   "a": 2,
   "exp": "İlk tarih eksi ikinci tarih, gün olarak.",
   "code": "SELECT DATEDIFF('2025-09-23', '2025-09-20');"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "`SELECT YEAR('2025-09-20');` sonucu nedir?",
   "opts": [
    "2025",
    "09",
    "9",
    "20",
    "2025-09-20"
   ],
   "a": 0,
   "exp": "YEAR tarihin yılını döndürür.",
   "code": "SELECT YEAR('2025-09-20');"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "`SELECT ROUND(989.6294, 2);` sonucu nedir?",
   "opts": [
    "989.63",
    "990",
    "989.62",
    "989.6294",
    "989.6"
   ],
   "a": 0,
   "exp": "İkinci basamaktan sonra 9 → yukarı yuvarlanır.",
   "code": "SELECT ROUND(989.6294, 2);"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorgu kaç satırda \"Ağır\" yazar?",
   "opts": [
    "6",
    "3",
    "0",
    "1",
    "2"
   ],
   "a": 4,
   "exp": "Bölüm 1: 101 (4), 102 (4), 103 (3) → iki ders Ağır.",
   "code": "SELECT ders_adi,\n  CASE WHEN kredi >= 4 THEN 'Ağır' ELSE 'Normal' END AS yuk\nFROM ders WHERE bolum_no = 1;",
   "tables": [
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
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Tabloya takma ad vermek için hangisi doğrudur?",
   "opts": [
    "FROM o = ogrenci",
    "FROM ogrenci AS o",
    "FROM ogrenci TO o",
    "FROM ogrenci(o)",
    "FROM ALIAS ogrenci o"
   ],
   "a": 1,
   "exp": "`AS` yazılmadan `FROM ogrenci o` da olur."
  },
  {
   "type": "fill",
   "topic": "ileri2",
   "q": "Boşluğu doldurun: kartı olmayan öğrenciler de listelensin.",
   "code": "SELECT o.ad, k.kart_no\nFROM ogrenci o\n____ JOIN ogrenci_karti k ON k.ogrenci_no = o.ogrenci_no;",
   "ans": [
    "LEFT"
   ],
   "cs": false,
   "exp": "LEFT JOIN soldakilerin hepsini getirir."
  },
  {
   "type": "fill",
   "topic": "ileri2",
   "q": "Boşluğu doldurun: birleştirme koşulu.",
   "code": "SELECT d.ders_adi, b.bolum_adi\nFROM ders d JOIN bolum b ____ b.bolum_no = d.bolum_no;",
   "ans": [
    "ON"
   ],
   "cs": false,
   "exp": "JOIN … ON eşitlik."
  },
  {
   "type": "fill",
   "topic": "ileri2",
   "q": "Boşluğu doldurun: eşleşmeyenler.",
   "code": "SELECT b.bolum_adi FROM bolum b\nLEFT JOIN ders d ON d.bolum_no = b.bolum_no\nWHERE d.ders_kodu ____;",
   "ans": [
    "IS NULL"
   ],
   "cs": false,
   "exp": "LEFT JOIN + IS NULL eşleşmeyenleri bulur."
  },
  {
   "type": "fill",
   "topic": "ileri2",
   "q": "Boşluğu doldurun: iki sorgunun sonucunu tekrarsız birleştir.",
   "code": "SELECT ders_kodu FROM ders WHERE kredi = 4\n____\nSELECT ders_kodu FROM ders_kaydi WHERE harf_notu = 'AA';",
   "ans": [
    "UNION"
   ],
   "cs": false,
   "exp": "UNION tekrarları atar."
  },
  {
   "type": "fill",
   "topic": "ileri2",
   "q": "Boşluğu doldurun: ad ve soyadı birleştir.",
   "code": "SELECT ____(ad, ' ', soyad) AS tam_ad FROM ogrenci;",
   "ans": [
    "CONCAT"
   ],
   "cs": false,
   "exp": "CONCAT."
  },
  {
   "type": "match",
   "topic": "ileri2",
   "q": "JOIN türlerini eşleştirin.",
   "pairs": [
    [
     "INNER JOIN",
     "Sadece eşleşenler"
    ],
    [
     "LEFT JOIN",
     "Soldaki tablonun hepsi"
    ],
    [
     "RIGHT JOIN",
     "Sağdaki tablonun hepsi"
    ],
    [
     "CROSS JOIN",
     "Her satır her satırla"
    ]
   ],
   "exp": "MySQL'de FULL OUTER JOIN yoktur.",
   "choices": [
    "Soldaki tablonun hepsi",
    "Sağdaki tablonun hepsi",
    "Her satır her satırla",
    "Sadece eşleşenler"
   ]
  },
  {
   "type": "match",
   "topic": "ileri2",
   "q": "Fonksiyonları eşleştirin.",
   "pairs": [
    [
     "CONCAT",
     "Metinleri birleştirir"
    ],
    [
     "IFNULL",
     "NULL ise yerine değer koyar"
    ],
    [
     "DATEDIFF",
     "İki tarih arasındaki gün"
    ],
    [
     "UPPER",
     "Büyük harfe çevirir"
    ]
   ],
   "exp": "Sık kullanılan tek satır fonksiyonları.",
   "choices": [
    "NULL ise yerine değer koyar",
    "Büyük harfe çevirir",
    "İki tarih arasındaki gün",
    "Metinleri birleştirir"
   ]
  }
 ],
 "gorunum": [
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Görünüm (VIEW) için hangisi doğrudur?",
   "opts": [
    "Sadece bir kez çalışır",
    "INSERT olunca kendiliğinden çalışır",
    "Veri tabanı oluşturur",
    "Bir SELECT sorgusuna verilen addır; veriyi kendisi saklamaz (sanal tablo)",
    "Tablonun yedek kopyasıdır"
   ],
   "a": 3,
   "exp": "Her çağrıldığında içindeki sorgu yeniden çalışır.",
   "why": {
    "1": "Bu tetikleyicinin tanımı."
   }
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Görünüm oluşturan komut hangisidir?",
   "opts": [
    "MAKE VIEW ad …",
    "NEW VIEW ad = SELECT …",
    "CREATE VIEW ad ON tablo",
    "CREATE VIEW ad AS SELECT …",
    "CREATE TABLE ad AS VIEW …"
   ],
   "a": 3,
   "exp": "CREATE VIEW … AS SELECT."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Var olan bir görünümü yoksa oluşturan, varsa değiştiren komut hangisidir?",
   "opts": [
    "CREATE OR REPLACE VIEW",
    "REPLACE TABLE",
    "MODIFY VIEW",
    "UPDATE VIEW",
    "ALTER OR CREATE VIEW"
   ],
   "a": 0,
   "exp": "CREATE OR REPLACE VIEW (ALTER VIEW de tanımı değiştirir)."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "`DROP VIEW ogrenci_notlari;` çalıştırılırsa ne olur?",
   "opts": [
    "Sadece görünüm tanımı silinir; tablolardaki veriler kalır",
    "Notlar silinir",
    "Hata verir; görünüm silinemez",
    "ogrenci tablosu da silinir",
    "Veri tabanı silinir"
   ],
   "a": 0,
   "exp": "Görünüm verinin kopyası değildir."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Görünüm kullanmanın faydası **olmayan** hangisidir?",
   "opts": [
    "Verinin ikinci bir kopyasını diskte saklayıp yedek oluşturması",
    "Karmaşık JOIN sorgusunu tek isimle kullanmak",
    "Tablo yapısını kullanıcıdan gizlemek",
    "Kullanıcıya sadece belli sütunları göstermek (güvenlik)",
    "Uygulama kodunu sadeleştirmek"
   ],
   "a": 0,
   "exp": "Görünüm veri saklamaz, yedek değildir."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Görünüm oluşturulduktan sonra temel tabloya yeni satır eklenirse görünüm ne gösterir?",
   "opts": [
    "Eski veriyi gösterir",
    "Yeni satırı da gösterir",
    "Hata verir",
    "Görünüm silinir",
    "Sadece yeni satırı gösterir"
   ],
   "a": 1,
   "exp": "Görünüm her seferinde sorguyu yeniden çalıştırır.",
   "code": "CREATE VIEW ucuz AS SELECT ad FROM urun WHERE fiyat < 50;\nINSERT INTO urun VALUES (2, 'Silgi', 5);\nSELECT * FROM ucuz;"
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Sorgu kaç satır döndürür?",
   "opts": [
    "0",
    "3",
    "2",
    "1",
    "11"
   ],
   "a": 2,
   "exp": "Görünüm 3 tablolu JOIN; AA notu olan 2 kayıt (Ahmet-101, Mert-202).",
   "code": "CREATE OR REPLACE VIEW ogrenci_notlari AS\nSELECT o.ad, o.soyad, d.ders_adi, k.harf_notu\nFROM ders_kaydi k\nJOIN ogrenci o ON o.ogrenci_no = k.ogrenci_no\nJOIN ders d    ON d.ders_kodu  = k.ders_kodu;\nSELECT * FROM ogrenci_notlari WHERE harf_notu = 'AA';",
   "tables": [
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
   "type": "mc",
   "topic": "gorunum",
   "q": "Hangi görünüm üzerinden **UPDATE yapılamaz**?",
   "opts": [
    "Tek tablodan WHERE ile süzen görünüm",
    "Tek tablodan bazı sütunları seçen görünüm",
    "Takma ad kullanan basit görünüm",
    "Tek tablonun tüm sütunlarını seçen görünüm",
    "GROUP BY ve COUNT içeren görünüm"
   ],
   "a": 4,
   "exp": "Toplama fonksiyonu / GROUP BY / DISTINCT içeren görünüm güncellenemez."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Tetikleyici (TRIGGER) için hangisi doğrudur?",
   "opts": [
    "Sadece veri tabanı oluşturulurken çalışır",
    "Veriyi sanal tablo gibi gösterir",
    "Tabloda INSERT, UPDATE veya DELETE olunca kendiliğinden çalışır",
    "SELECT sorgularında çalışır",
    "CALL ile elle çağrılır"
   ],
   "a": 2,
   "exp": "Elle çağrılan saklı yordamdır (CALL); tetikleyici olayla çalışır."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Tetikleyici hangi olay için **tanımlanamaz**?",
   "opts": [
    "SELECT",
    "DELETE",
    "Hepsi için tanımlanabilir",
    "INSERT",
    "UPDATE"
   ],
   "a": 0,
   "exp": "Tetikleyici sadece veri değiştiren olaylarda (INSERT/UPDATE/DELETE) çalışır."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Tetikleyicide `NEW.adet` ifadesi neyi gösterir?",
   "opts": [
    "Bir önceki tetikleyicinin sonucunu",
    "Yeni oluşturulan tabloyu",
    "Silinen satırın adet değerini",
    "Eklenen / güncellenen satırın yeni adet değerini",
    "Tablodaki toplam adedi"
   ],
   "a": 3,
   "exp": "NEW yeni değer, OLD eski değer."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "`AFTER INSERT` tetikleyicisinde hangisi **kullanılamaz**?",
   "opts": [
    "BEGIN … END",
    "NEW",
    "FOR EACH ROW",
    "OLD",
    "UPDATE"
   ],
   "a": 3,
   "exp": "INSERT'te önceki satır olmadığı için OLD yoktur."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "`DELETE` tetikleyicisinde silinen satırın değerlerine nasıl erişilir?",
   "opts": [
    "DELETED.sutun",
    "ROW.sutun",
    "THIS.sutun",
    "OLD.sutun",
    "NEW.sutun"
   ],
   "a": 3,
   "exp": "DELETE'te NEW yoktur, OLD vardır."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "`FOR EACH ROW` ne anlama gelir?",
   "opts": [
    "Tetikleyici etkilenen her satır için bir kez çalışır",
    "Döngü kurar ve sonsuza kadar çalışır",
    "Tetikleyici tablo başına bir kez çalışır",
    "Bütün tablolara uygulanır",
    "Tabloyu satır satır kopyalar"
   ],
   "a": 0,
   "exp": "Üç satır eklenirse tetikleyici üç kez çalışır."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Tetikleyici gövdesindeki `;` işaretlerinin komutu erken bitirmemesi için ne kullanılır?",
   "opts": [
    "DELIMITER $$",
    "COMMIT",
    "SET NAMES",
    "GO",
    "END IF"
   ],
   "a": 0,
   "exp": "Geçici ayırıcı; sonra `DELIMITER ;` ile geri alınır."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Satış eklendiğinde stok düşen tetikleyici çalıştıktan sonra ürünün stoku kaç olur?",
   "opts": [
    "3",
    "7",
    "0",
    "13",
    "10"
   ],
   "a": 1,
   "exp": "AFTER INSERT: 10 - 3 = 7.",
   "code": "DELIMITER $$\nCREATE TRIGGER stok_dus AFTER INSERT ON satis\nFOR EACH ROW\nBEGIN\n  UPDATE urun SET stok = stok - NEW.adet WHERE id = NEW.urun_id;\nEND$$\nDELIMITER ;\n\nINSERT INTO urun VALUES (1, 'Kulaklık', 10);\nINSERT INTO satis (urun_id, adet) VALUES (1, 3);\nSELECT stok FROM urun WHERE id = 1;"
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Aynı tetikleyiciyle iki satış yapılırsa (adet 2 ve 4) stok 10'dan kaça düşer?",
   "opts": [
    "2",
    "8",
    "10",
    "6",
    "4"
   ],
   "a": 4,
   "exp": "Her satış için ayrı çalışır: 10 - 2 - 4 = 4.",
   "code": "INSERT INTO satis (urun_id, adet) VALUES (1, 2), (1, 4);\nSELECT stok FROM urun WHERE id = 1;"
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "`BEFORE INSERT` tetikleyicisi `IF NEW.stok < 0 THEN SET NEW.stok = 0; END IF;` içeriyor. `INSERT INTO urun VALUES (1, -5);` sonrası stok kaçtır?",
   "opts": [
    "0",
    "Satır eklenmez",
    "NULL",
    "5",
    "-5"
   ],
   "a": 0,
   "exp": "BEFORE tetikleyicisi eklenecek değeri değiştirebilir.",
   "code": "CREATE TABLE urun (id INT PRIMARY KEY, stok INT);\nDELIMITER $$\nCREATE TRIGGER stok_kontrol BEFORE INSERT ON urun\nFOR EACH ROW\nBEGIN\n  IF NEW.stok < 0 THEN\n    SET NEW.stok = 0;\n  END IF;\nEND$$\nDELIMITER ;\nINSERT INTO urun VALUES (1, -5);\nSELECT stok FROM urun;"
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Silinen müşterileri bir log tablosuna yazmak için hangi tetikleyici uygundur?",
   "opts": [
    "AFTER DELETE ON musteri … NEW.ad",
    "BEFORE SELECT ON musteri",
    "CREATE VIEW silinenler",
    "AFTER INSERT ON musteri … NEW.ad",
    "AFTER DELETE ON musteri … OLD.ad"
   ],
   "a": 4,
   "exp": "DELETE'te silinen satır OLD ile okunur."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Tetikleyiciyi silen komut hangisidir?",
   "opts": [
    "ALTER TRIGGER ad DROP;",
    "DELETE TRIGGER ad;",
    "REMOVE TRIGGER ad;",
    "DROP TRIGGER ad;",
    "TRUNCATE TRIGGER ad;"
   ],
   "a": 3,
   "exp": "DROP TRIGGER."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Saklı yordam (PROCEDURE) ile tetikleyici arasındaki temel fark nedir?",
   "opts": [
    "Tetikleyici parametre alır, yordam almaz",
    "Tetikleyici CALL ile çağrılır",
    "Yordam sadece SELECT içerir",
    "Yordam CALL ile elle çağrılır, tetikleyici olayla kendiliğinden çalışır",
    "İkisi aynıdır"
   ],
   "a": 3,
   "exp": "Tetikleyici çağrılmaz; olay (INSERT/UPDATE/DELETE) tetikler."
  },
  {
   "type": "fill",
   "topic": "gorunum",
   "q": "Boşluğu doldurun: görünüm oluşturun.",
   "code": "CREATE ____ kredili_dersler AS\nSELECT ders_adi, kredi FROM ders WHERE kredi >= 4;",
   "ans": [
    "VIEW"
   ],
   "cs": false,
   "exp": "CREATE VIEW … AS SELECT."
  },
  {
   "type": "fill",
   "topic": "gorunum",
   "q": "Boşluğu doldurun: satış eklendikten sonra çalışsın.",
   "code": "CREATE TRIGGER stok_dus ____ INSERT ON satis\nFOR EACH ROW\n  UPDATE urun SET stok = stok - NEW.adet WHERE id = NEW.urun_id;",
   "ans": [
    "AFTER"
   ],
   "cs": false,
   "exp": "AFTER INSERT: satır eklendikten sonra."
  },
  {
   "type": "fill",
   "topic": "gorunum",
   "q": "Boşluğu doldurun: eklenen satırın değeri.",
   "code": "CREATE TRIGGER stok_dus AFTER INSERT ON satis\nFOR EACH ROW\n  UPDATE urun SET stok = stok - ____.adet WHERE id = NEW.urun_id;",
   "ans": [
    "NEW"
   ],
   "cs": false,
   "exp": "INSERT'te yeni satır NEW ile okunur."
  },
  {
   "type": "fill",
   "topic": "gorunum",
   "q": "Boşluğu doldurun: her satır için çalışsın.",
   "code": "CREATE TRIGGER log_ekle AFTER DELETE ON musteri\nFOR ____ ROW\n  INSERT INTO silinen VALUES (OLD.id, OLD.ad);",
   "ans": [
    "EACH"
   ],
   "cs": false,
   "exp": "FOR EACH ROW."
  },
  {
   "type": "match",
   "topic": "gorunum",
   "q": "Tetikleyici parçalarını eşleştirin.",
   "pairs": [
    [
     "BEFORE / AFTER",
     "Olaydan önce mi sonra mı"
    ],
    [
     "FOR EACH ROW",
     "Her etkilenen satır için"
    ],
    [
     "NEW",
     "Yeni değer (INSERT, UPDATE)"
    ],
    [
     "OLD",
     "Eski değer (UPDATE, DELETE)"
    ]
   ],
   "exp": "CREATE TRIGGER ad BEFORE|AFTER olay ON tablo FOR EACH ROW …",
   "choices": [
    "Yeni değer (INSERT, UPDATE)",
    "Olaydan önce mi sonra mı",
    "Her etkilenen satır için",
    "Eski değer (UPDATE, DELETE)"
   ]
  },
  {
   "type": "match",
   "topic": "gorunum",
   "q": "Nesneleri eşleştirin.",
   "pairs": [
    [
     "VIEW",
     "Adı verilmiş SELECT, sanal tablo"
    ],
    [
     "TRIGGER",
     "Olayla kendiliğinden çalışan blok"
    ],
    [
     "PROCEDURE",
     "CALL ile çağrılan blok"
    ],
    [
     "TABLE",
     "Veriyi saklayan yapı"
    ]
   ],
   "exp": "Sadece tablo veriyi kendisi saklar.",
   "choices": [
    "CALL ile çağrılan blok",
    "Adı verilmiş SELECT, sanal tablo",
    "Olayla kendiliğinden çalışan blok",
    "Veriyi saklayan yapı"
   ]
  }
 ]
};
window.EXTRA_CODE = [];
