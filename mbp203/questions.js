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
    "q": "Sorgu kaç satır döndürür?",
    "opts": [
     "3",
     "2",
     "5",
     "1",
     "10"
    ],
    "a": 0,
    "exp": "Gruplar: İzmir 3, İstanbul 3, Ankara 2, Gaziantep 1, Bursa 1. HAVING COUNT(*) > 1 → İzmir, İstanbul, Ankara (uygulama soru 7).",
    "code": "SELECT sehir, COUNT(*) FROM musteriler GROUP BY sehir HAVING COUNT(*) > 1;",
    "tables": [
     {
      "name": "musteriler",
      "cols": [
       "musteri_id",
       "ad",
       "sehir"
      ],
      "rows": [
       [
        "1",
        "Ayşe",
        "İzmir"
       ],
       [
        "2",
        "Mehmet",
        "İstanbul"
       ],
       [
        "3",
        "Zeynep",
        "İzmir"
       ],
       [
        "4",
        "Ahmet",
        "Ankara"
       ],
       [
        "5",
        "Elif",
        "İstanbul"
       ],
       [
        "6",
        "Can",
        "Gaziantep"
       ],
       [
        "7",
        "Deniz",
        "İzmir"
       ],
       [
        "8",
        "Selin",
        "Ankara"
       ],
       [
        "9",
        "Emre",
        "Bursa"
       ],
       [
        "10",
        "Merve",
        "İstanbul"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Her şehirdeki müşteri sayısını veren sorgu kaç satır döndürür?",
    "opts": [
     "10",
     "6",
     "5",
     "3",
     "1"
    ],
    "a": 2,
    "exp": "GROUP BY her farklı şehir için bir satır üretir: İzmir, İstanbul, Ankara, Gaziantep, Bursa (uygulama soru 3).",
    "code": "SELECT sehir, COUNT(*) AS musteri_sayisi FROM musteriler GROUP BY sehir;",
    "tables": [
     {
      "name": "musteriler",
      "cols": [
       "musteri_id",
       "ad",
       "sehir"
      ],
      "rows": [
       [
        "1",
        "Ayşe",
        "İzmir"
       ],
       [
        "2",
        "Mehmet",
        "İstanbul"
       ],
       [
        "3",
        "Zeynep",
        "İzmir"
       ],
       [
        "4",
        "Ahmet",
        "Ankara"
       ],
       [
        "5",
        "Elif",
        "İstanbul"
       ],
       [
        "6",
        "Can",
        "Gaziantep"
       ],
       [
        "7",
        "Deniz",
        "İzmir"
       ],
       [
        "8",
        "Selin",
        "Ankara"
       ],
       [
        "9",
        "Emre",
        "Bursa"
       ],
       [
        "10",
        "Merve",
        "İstanbul"
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
     "1",
     "9",
     "3",
     "10",
     "5"
    ],
    "a": 3,
    "exp": "COUNT(*) tablodaki bütün satırları sayar (uygulama soru 1).",
    "code": "SELECT COUNT(*) FROM musteriler;",
    "tables": [
     {
      "name": "musteriler",
      "cols": [
       "musteri_id",
       "ad",
       "sehir"
      ],
      "rows": [
       [
        "1",
        "Ayşe",
        "İzmir"
       ],
       [
        "2",
        "Mehmet",
        "İstanbul"
       ],
       [
        "3",
        "Zeynep",
        "İzmir"
       ],
       [
        "4",
        "Ahmet",
        "Ankara"
       ],
       [
        "5",
        "Elif",
        "İstanbul"
       ],
       [
        "6",
        "Can",
        "Gaziantep"
       ],
       [
        "7",
        "Deniz",
        "İzmir"
       ],
       [
        "8",
        "Selin",
        "Ankara"
       ],
       [
        "9",
        "Emre",
        "Bursa"
       ],
       [
        "10",
        "Merve",
        "İstanbul"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu sonucunda \"Teslim Edildi\" satırındaki sayı kaçtır?",
    "opts": [
     "3",
     "1",
     "6",
     "4",
     "2"
    ],
    "a": 0,
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
     "1570.00",
     "1250.00",
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
    "q": "İptal edilen siparişler hariç, cirosu 5000 TL'yi geçen şehirler listelenecek. \"İptal olmasın\" koşulu sorgunun hangi bölümüne yazılır?",
    "opts": [
     "ORDER BY",
     "HAVING",
     "GROUP BY",
     "WHERE",
     "SELECT"
    ],
    "a": 3,
    "exp": "İptal tek tek satırların özelliğidir, gruplamadan önce WHERE ile atılır; 5000 koşulu ise HAVING'dedir (uygulama soru 10)."
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu kaç satır döndürür?",
    "opts": [
     "1",
     "0",
     "4",
     "3",
     "2"
    ],
    "a": 4,
    "exp": "Önce WHERE iptalleri atar. Kalan cirolar: İstanbul 6500, Ankara 5500, İzmir 3000. HAVING > 5000: İstanbul ve Ankara (uygulama soru 10).",
    "code": "SELECT sehir, SUM(tutar) AS ciro\nFROM satislar\nWHERE durum <> 'İptal'\nGROUP BY sehir\nHAVING SUM(tutar) > 5000\nORDER BY ciro DESC;",
    "tables": [
     {
      "name": "satislar",
      "cols": [
       "sehir",
       "durum",
       "tutar"
      ],
      "rows": [
       [
        "İstanbul",
        "Teslim Edildi",
        "4000.00"
       ],
       [
        "İstanbul",
        "Kargoda",
        "2500.00"
       ],
       [
        "İzmir",
        "Teslim Edildi",
        "3000.00"
       ],
       [
        "İzmir",
        "İptal",
        "4000.00"
       ],
       [
        "Ankara",
        "Teslim Edildi",
        "3500.00"
       ],
       [
        "Ankara",
        "Teslim Edildi",
        "2000.00"
       ],
       [
        "Gaziantep",
        "İptal",
        "6000.00"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu sonucunun ilk satırındaki şehir hangisidir?",
    "opts": [
     "İstanbul",
     "Boş sonuç",
     "Ankara",
     "İzmir",
     "Gaziantep"
    ],
    "a": 0,
    "exp": "ORDER BY ciro DESC: İstanbul 6500 > Ankara 5500 (uygulama soru 10).",
    "code": "SELECT sehir, SUM(tutar) AS ciro\nFROM satislar\nWHERE durum <> 'İptal'\nGROUP BY sehir\nHAVING SUM(tutar) > 5000\nORDER BY ciro DESC;",
    "tables": [
     {
      "name": "satislar",
      "cols": [
       "sehir",
       "durum",
       "tutar"
      ],
      "rows": [
       [
        "İstanbul",
        "Teslim Edildi",
        "4000.00"
       ],
       [
        "İstanbul",
        "Kargoda",
        "2500.00"
       ],
       [
        "İzmir",
        "Teslim Edildi",
        "3000.00"
       ],
       [
        "İzmir",
        "İptal",
        "4000.00"
       ],
       [
        "Ankara",
        "Teslim Edildi",
        "3500.00"
       ],
       [
        "Ankara",
        "Teslim Edildi",
        "2000.00"
       ],
       [
        "Gaziantep",
        "İptal",
        "6000.00"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Bu sorgudan `WHERE durum <> 'İptal'` satırı silinirse kaç satır döner?",
    "opts": [
     "2",
     "4",
     "0",
     "1",
     "3"
    ],
    "a": 1,
    "exp": "İptaller de toplanır: İzmir 7000, İstanbul 6500, Gaziantep 6000, Ankara 5500; hepsi 5000'i geçer (uygulama soru 10).",
    "code": "SELECT sehir, SUM(tutar) AS ciro\nFROM satislar\nWHERE durum <> 'İptal'\nGROUP BY sehir\nHAVING SUM(tutar) > 5000\nORDER BY ciro DESC;",
    "tables": [
     {
      "name": "satislar",
      "cols": [
       "sehir",
       "durum",
       "tutar"
      ],
      "rows": [
       [
        "İstanbul",
        "Teslim Edildi",
        "4000.00"
       ],
       [
        "İstanbul",
        "Kargoda",
        "2500.00"
       ],
       [
        "İzmir",
        "Teslim Edildi",
        "3000.00"
       ],
       [
        "İzmir",
        "İptal",
        "4000.00"
       ],
       [
        "Ankara",
        "Teslim Edildi",
        "3500.00"
       ],
       [
        "Ankara",
        "Teslim Edildi",
        "2000.00"
       ],
       [
        "Gaziantep",
        "İptal",
        "6000.00"
       ]
      ]
     }
    ]
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "En az 2 sipariş vermiş müşterileri listeleyen sorgu kaç satır döndürür?",
    "opts": [
     "6",
     "1",
     "2",
     "3",
     "0"
    ],
    "a": 2,
    "exp": "Müşteri bazında: 1 → 3, 2 → 2, 3 → 1 sipariş. HAVING COUNT(*) >= 2: müşteri 1 ve 2 (uygulama soru 8).",
    "code": "SELECT musteri_id, COUNT(*) AS siparis_sayisi\nFROM siparisler\nGROUP BY musteri_id\nHAVING COUNT(*) >= 2;",
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
     "Gruplamadan önce satırları süzer",
     "Sonucu sıralar",
     "Aynı değerli satırları gruplar",
     "Gruplamadan sonra grupları süzer"
    ]
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Sorgu hangi ürünleri döndürür?",
    "opts": [
     "Kablosuz Kulaklık, Akıllı Saat",
     "Boş sonuç",
     "Veri Bilimine Giriş, Kamp Sandalyesi",
     "Mekanik Klavye, Kamp Sandalyesi",
     "Mekanik Klavye"
    ],
    "a": 3,
    "exp": "LEFT JOIN bütün ürünleri getirir; siparis_detay'da hiç satırı olmayanların sayısı 0 olur. 16 ve 17 hiç satılmamış (uygulama bonus).",
    "code": "SELECT u.urun_adi\nFROM urunler u\nLEFT JOIN siparis_detay d ON d.urun_id = u.urun_id\nGROUP BY u.urun_id, u.urun_adi\nHAVING COUNT(d.urun_id) = 0\nORDER BY u.urun_id;",
    "tables": [
     {
      "name": "urunler",
      "cols": [
       "urun_id",
       "urun_adi"
      ],
      "rows": [
       [
        "1",
        "Kablosuz Kulaklık"
       ],
       [
        "2",
        "Akıllı Saat"
       ],
       [
        "8",
        "Python ile Programlama"
       ],
       [
        "9",
        "Veri Bilimine Giriş"
       ],
       [
        "16",
        "Mekanik Klavye"
       ],
       [
        "17",
        "Kamp Sandalyesi"
       ]
      ]
     },
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
    "q": "Bu sorguda `LEFT JOIN` yerine `JOIN` (INNER) yazılırsa kaç satır döner?",
    "opts": [
     "4 satır",
     "2 satır",
     "1 satır",
     "6 satır",
     "0 satır"
    ],
    "a": 4,
    "exp": "INNER JOIN satılmamış ürünleri hiç getirmez; kalan her ürünün sayısı en az 1 olur, HAVING = 0 kimseyi geçirmez (uygulama bonus).",
    "code": "SELECT u.urun_adi\nFROM urunler u\nLEFT JOIN siparis_detay d ON d.urun_id = u.urun_id\nGROUP BY u.urun_id, u.urun_adi\nHAVING COUNT(d.urun_id) = 0;",
    "tables": [
     {
      "name": "urunler",
      "cols": [
       "urun_id",
       "urun_adi"
      ],
      "rows": [
       [
        "1",
        "Kablosuz Kulaklık"
       ],
       [
        "2",
        "Akıllı Saat"
       ],
       [
        "8",
        "Python ile Programlama"
       ],
       [
        "9",
        "Veri Bilimine Giriş"
       ],
       [
        "16",
        "Mekanik Klavye"
       ],
       [
        "17",
        "Kamp Sandalyesi"
       ]
      ]
     },
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
    "q": "`AVG` fonksiyonu NULL değerleri nasıl ele alır?",
    "opts": [
     "Hata verir",
     "En büyük değer yapar",
     "Sonucu NULL yapar",
     "Hesaba katmaz; NULL olmayanların ortalamasını alır",
     "0 olarak sayar"
    ],
    "a": 3,
    "exp": "Not: 10, NULL, 20 → AVG = 15, (10+0+20)/3 değil."
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Sorgu kaç satır döndürür?",
    "opts": [
     "4",
     "1",
     "30",
     "6",
     "5"
    ],
    "a": 4,
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
     "ogrenci_no iki tabloda da var; hangi tablonunki olduğu belirsiz",
     "ON yerine IN gelmeli",
     "JOIN yerine WHERE yazılmalıydı",
     "SELECT'te iki sütun olamaz"
    ],
    "a": 1,
    "exp": "#1052 Column 'ogrenci_no' in field list is ambiguous. Çözüm: `o.ogrenci_no`.",
    "code": "SELECT ogrenci_no, ders_kodu FROM ogrenci o JOIN ders_kaydi k ON k.ogrenci_no = o.ogrenci_no;"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "`DROP VIEW ogrenci_notlari;` çalıştırılırsa ne olur?",
    "opts": [
     "Hata verir; görünüm silinemez",
     "ogrenci tablosu da silinir",
     "Sadece görünüm tanımı silinir; tablolardaki veriler kalır",
     "Veri tabanı silinir",
     "Notlar silinir"
    ],
    "a": 2,
    "exp": "Görünüm verinin kopyası değildir."
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Tetikleyici hangi olay için **tanımlanamaz**?",
    "opts": [
     "UPDATE",
     "Hepsi için tanımlanabilir",
     "DELETE",
     "SELECT",
     "INSERT"
    ],
    "a": 3,
    "exp": "Tetikleyici sadece veri değiştiren olaylarda (INSERT/UPDATE/DELETE) çalışır."
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
     "Ortalama",
     "Satır sayısı",
     "Toplam",
     "En büyük değer"
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
    "q": "`SELECT sehir, ad, COUNT(*) FROM musteriler GROUP BY sehir;` sorgusunun sorunu nedir?",
    "opts": [
     "ad sütunu GROUP BY'da yok ve toplama fonksiyonu içinde değil",
     "Sorun yoktur",
     "GROUP BY'dan sonra WHERE gelmeli",
     "sehir sütunu SELECT'te olamaz",
     "COUNT(*) GROUP BY ile kullanılamaz"
    ],
    "a": 0,
    "exp": "Bir şehirde birden çok ad var; hangisinin yazılacağı belli değil (ONLY_FULL_GROUP_BY hatası).",
    "code": "SELECT sehir, ad, COUNT(*) FROM musteriler GROUP BY sehir;"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu sonucunda \"Teslim Edildi\" satırındaki sayı kaçtır?",
    "opts": [
     "3",
     "1",
     "6",
     "4",
     "2"
    ],
    "a": 0,
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
     "1",
     "0",
     "4",
     "3",
     "2"
    ],
    "a": 4,
    "exp": "Önce WHERE iptalleri atar. Kalan cirolar: İstanbul 6500, Ankara 5500, İzmir 3000. HAVING > 5000: İstanbul ve Ankara (uygulama soru 10).",
    "code": "SELECT sehir, SUM(tutar) AS ciro\nFROM satislar\nWHERE durum <> 'İptal'\nGROUP BY sehir\nHAVING SUM(tutar) > 5000\nORDER BY ciro DESC;",
    "tables": [
     {
      "name": "satislar",
      "cols": [
       "sehir",
       "durum",
       "tutar"
      ],
      "rows": [
       [
        "İstanbul",
        "Teslim Edildi",
        "4000.00"
       ],
       [
        "İstanbul",
        "Kargoda",
        "2500.00"
       ],
       [
        "İzmir",
        "Teslim Edildi",
        "3000.00"
       ],
       [
        "İzmir",
        "İptal",
        "4000.00"
       ],
       [
        "Ankara",
        "Teslim Edildi",
        "3500.00"
       ],
       [
        "Ankara",
        "Teslim Edildi",
        "2000.00"
       ],
       [
        "Gaziantep",
        "İptal",
        "6000.00"
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
     "FULL OUTER JOIN",
     "LEFT JOIN",
     "INNER JOIN",
     "CROSS JOIN",
     "RIGHT JOIN"
    ],
    "a": 0,
    "exp": "LEFT JOIN … UNION … RIGHT JOIN ile yapılır."
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Bölüm 2 (Grafik) derslerine kayıtları getiren 3 tablolu JOIN kaç satır döndürür?",
    "opts": [
     "11",
     "3",
     "5",
     "2",
     "4"
    ],
    "a": 4,
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
    "q": "Görünüm kullanmanın faydası **olmayan** hangisidir?",
    "opts": [
     "Kullanıcıya sadece belli sütunları göstermek (güvenlik)",
     "Karmaşık JOIN sorgusunu tek isimle kullanmak",
     "Uygulama kodunu sadeleştirmek",
     "Tablo yapısını kullanıcıdan gizlemek",
     "Verinin ikinci bir kopyasını diskte saklayıp yedek oluşturması"
    ],
    "a": 4,
    "exp": "Görünüm veri saklamaz, yedek değildir."
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Var olan bir görünümü yoksa oluşturan, varsa değiştiren komut hangisidir?",
    "opts": [
     "ALTER OR CREATE VIEW",
     "CREATE OR REPLACE VIEW",
     "UPDATE VIEW",
     "REPLACE TABLE",
     "MODIFY VIEW"
    ],
    "a": 1,
    "exp": "CREATE OR REPLACE VIEW (ALTER VIEW de tanımı değiştirir)."
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
    "q": "Sorgu sonucu (`a | b`) hangisidir?",
    "opts": [
     "2 | 3",
     "2 | 2",
     "3 | 3",
     "3 | 2",
     "3 | 0"
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
    "topic": "ileri1",
    "q": "Sorgu sonucu kaçtır?",
    "opts": [
     "3400.00",
     "1250.00",
     "410.00",
     "320.00",
     "5380.00"
    ],
    "a": 0,
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
    "topic": "ileri2",
    "q": "Aynı sorgu `UNION ALL` ile yazılırsa kaç satır döner?",
    "opts": [
     "3",
     "6",
     "5",
     "2",
     "4"
    ],
    "a": 2,
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
     "Bilgisayar Programcılığı",
     "Muhasebe ve Vergi Uygulamaları",
     "Turizm ve Otel İşletmeciliği",
     "Grafik Tasarımı",
     "Boş sonuç"
    ],
    "a": 2,
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
    "q": "Satış eklendiğinde stok düşen tetikleyici çalıştıktan sonra ürünün stoku kaç olur?",
    "opts": [
     "13",
     "3",
     "0",
     "10",
     "7"
    ],
    "a": 4,
    "exp": "AFTER INSERT: 10 - 3 = 7.",
    "code": "DELIMITER $$\nCREATE TRIGGER stok_dus AFTER INSERT ON satis\nFOR EACH ROW\nBEGIN\n  UPDATE urun SET stok = stok - NEW.adet WHERE id = NEW.urun_id;\nEND$$\nDELIMITER ;\n\nINSERT INTO urun VALUES (1, 'Kulaklık', 10);\nINSERT INTO satis (urun_id, adet) VALUES (1, 3);\nSELECT stok FROM urun WHERE id = 1;"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Hangi görünüm üzerinden **UPDATE yapılamaz**?",
    "opts": [
     "Takma ad kullanan basit görünüm",
     "Tek tablonun tüm sütunlarını seçen görünüm",
     "Tek tablodan bazı sütunları seçen görünüm",
     "GROUP BY ve COUNT içeren görünüm",
     "Tek tablodan WHERE ile süzen görünüm"
    ],
    "a": 3,
    "exp": "Toplama fonksiyonu / GROUP BY / DISTINCT içeren görünüm güncellenemez."
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
     "Metinleri birleştirir",
     "İki tarih arasındaki gün",
     "Büyük harfe çevirir",
     "NULL ise yerine değer koyar"
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
     "10",
     "5",
     "3",
     "1",
     "4"
    ],
    "a": 1,
    "exp": "COUNT(DISTINCT sehir) farklı şehirleri sayar: İzmir, İstanbul, Ankara, Gaziantep, Bursa.",
    "code": "SELECT COUNT(DISTINCT sehir) FROM musteriler;",
    "tables": [
     {
      "name": "musteriler",
      "cols": [
       "musteri_id",
       "ad",
       "sehir"
      ],
      "rows": [
       [
        "1",
        "Ayşe",
        "İzmir"
       ],
       [
        "2",
        "Mehmet",
        "İstanbul"
       ],
       [
        "3",
        "Zeynep",
        "İzmir"
       ],
       [
        "4",
        "Ahmet",
        "Ankara"
       ],
       [
        "5",
        "Elif",
        "İstanbul"
       ],
       [
        "6",
        "Can",
        "Gaziantep"
       ],
       [
        "7",
        "Deniz",
        "İzmir"
       ],
       [
        "8",
        "Selin",
        "Ankara"
       ],
       [
        "9",
        "Emre",
        "Bursa"
       ],
       [
        "10",
        "Merve",
        "İstanbul"
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
    "topic": "ileri2",
    "q": "Sorgu hangi ürünleri döndürür?",
    "opts": [
     "Kablosuz Kulaklık, Akıllı Saat",
     "Boş sonuç",
     "Veri Bilimine Giriş, Kamp Sandalyesi",
     "Mekanik Klavye, Kamp Sandalyesi",
     "Mekanik Klavye"
    ],
    "a": 3,
    "exp": "LEFT JOIN bütün ürünleri getirir; siparis_detay'da hiç satırı olmayanların sayısı 0 olur. 16 ve 17 hiç satılmamış (uygulama bonus).",
    "code": "SELECT u.urun_adi\nFROM urunler u\nLEFT JOIN siparis_detay d ON d.urun_id = u.urun_id\nGROUP BY u.urun_id, u.urun_adi\nHAVING COUNT(d.urun_id) = 0\nORDER BY u.urun_id;",
    "tables": [
     {
      "name": "urunler",
      "cols": [
       "urun_id",
       "urun_adi"
      ],
      "rows": [
       [
        "1",
        "Kablosuz Kulaklık"
       ],
       [
        "2",
        "Akıllı Saat"
       ],
       [
        "8",
        "Python ile Programlama"
       ],
       [
        "9",
        "Veri Bilimine Giriş"
       ],
       [
        "16",
        "Mekanik Klavye"
       ],
       [
        "17",
        "Kamp Sandalyesi"
       ]
      ]
     },
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
    "q": "Sorgu kaç satır döndürür?",
    "opts": [
     "1",
     "6",
     "11",
     "5",
     "30"
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
    "q": "Görünüm (VIEW) için hangisi doğrudur?",
    "opts": [
     "Bir SELECT sorgusuna verilen addır; veriyi kendisi saklamaz (sanal tablo)",
     "Sadece bir kez çalışır",
     "Veri tabanı oluşturur",
     "Tablonun yedek kopyasıdır",
     "INSERT olunca kendiliğinden çalışır"
    ],
    "a": 0,
    "exp": "Her çağrıldığında içindeki sorgu yeniden çalışır.",
    "why": {
     "4": "Bu tetikleyicinin tanımı."
    }
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Tetikleyicide `NEW.adet` ifadesi neyi gösterir?",
    "opts": [
     "Eklenen / güncellenen satırın yeni adet değerini",
     "Yeni oluşturulan tabloyu",
     "Silinen satırın adet değerini",
     "Tablodaki toplam adedi",
     "Bir önceki tetikleyicinin sonucunu"
    ],
    "a": 0,
    "exp": "NEW yeni değer, OLD eski değer."
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
    "q": "Boşluğu doldurun: sayı her satırda kendiliğinden artsın.",
    "code": "CREATE TABLE musteri (\n  musteri_no  INT ____ PRIMARY KEY,\n  musteri_adi VARCHAR(100)\n);",
    "ans": [
     "AUTO_INCREMENT"
    ],
    "cs": false,
    "exp": "AUTO_INCREMENT."
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
    "q": "Sorgu sonucu hangi ürün numaralarıdır?",
    "opts": [
     "2",
     "8, 9",
     "8",
     "1, 2, 8",
     "1, 8"
    ],
    "a": 2,
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
    "q": "En az 2 sipariş vermiş müşterileri listeleyen sorgu kaç satır döndürür?",
    "opts": [
     "6",
     "1",
     "2",
     "3",
     "0"
    ],
    "a": 2,
    "exp": "Müşteri bazında: 1 → 3, 2 → 2, 3 → 1 sipariş. HAVING COUNT(*) >= 2: müşteri 1 ve 2 (uygulama soru 8).",
    "code": "SELECT musteri_id, COUNT(*) AS siparis_sayisi\nFROM siparisler\nGROUP BY musteri_id\nHAVING COUNT(*) >= 2;",
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
    "q": "Sorgu kaç satırda \"Ağır\" yazar?",
    "opts": [
     "1",
     "3",
     "0",
     "6",
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
     "4",
     "5",
     "8",
     "3",
     "Mert"
    ],
    "a": 0,
    "exp": "Karakter sayısı.",
    "code": "SELECT CHAR_LENGTH('Mert');"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Görünüm oluşturan komut hangisidir?",
    "opts": [
     "CREATE VIEW ad AS SELECT …",
     "CREATE TABLE ad AS VIEW …",
     "CREATE VIEW ad ON tablo",
     "MAKE VIEW ad …",
     "NEW VIEW ad = SELECT …"
    ],
    "a": 0,
    "exp": "CREATE VIEW … AS SELECT."
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "`AFTER INSERT` tetikleyicisinde hangisi **kullanılamaz**?",
    "opts": [
     "OLD",
     "NEW",
     "UPDATE",
     "FOR EACH ROW",
     "BEGIN … END"
    ],
    "a": 0,
    "exp": "INSERT'te önceki satır olmadığı için OLD yoktur."
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
   }
  ]
 },
 {
  "id": "kahoot-tum",
  "title": "Kahoot · Tüm sorular",
  "group": "kahoot",
  "mode": "practice",
  "featured": true,
  "desc": "169 soru: bu dönemin 5 Kahoot'u + hocanın geçen dönemki 9 Kahoot'u (ER, PK/FK, JOIN, GROUP BY, tarih/metin fonksiyonları, VIEW, saklı yordam). Anında kontrol.",
  "questions": [
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Aşağıdakilerden hangisi 1:1 (bire bir) ilişkiye örnektir?",
    "opts": [
     "Öğrenci – Öğrenci Kartı",
     "Bölüm – Ders",
     "Yazar – Kitap",
     "Öğrenci – Ders"
    ],
    "a": 0,
    "exp": "Her öğrencinin tek kartı, her kartın tek öğrencisi var. Bölüm–Ders ve Yazar–Kitap 1:N, Öğrenci–Ders M:N.",
    "src": "Kahoot 1"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "`ogrenci_karti` tablosunda 1:1 ilişkiyi garanti eden kelime hangisidir?",
    "opts": [
     "UNIQUE",
     "PRIMARY",
     "AUTO_INCREMENT",
     "DEFAULT"
    ],
    "a": 0,
    "exp": "FK sütunu (ogrenci_no) UNIQUE olunca aynı öğrenciye ikinci kart eklenemez; ilişki 1:1 kalır.",
    "src": "Kahoot 1"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "(Doğru/Yanlış) Ahmet'e ikinci bir kart eklemeye çalıştığımızda MySQL'in hata vermesi, veritabanının yanlış tasarlandığını gösterir.",
    "opts": [
     "Doğru",
     "Yanlış"
    ],
    "a": 1,
    "exp": "Yanlış: hata, UNIQUE kısıtının doğru çalıştığını gösterir. Tasarım tam olarak bunu engellemek için yapıldı.",
    "src": "Kahoot 1"
   },
   {
    "type": "fill",
    "topic": "iliskisel",
    "q": "Tablodaki her satırı tekil olarak tanımlayan sütuna ne ad verilir?",
    "code": "____",
    "ans": [
     "PRIMARY KEY",
     "primary",
     "PK",
     "birincil anahtar",
     "birincil",
     "primary key (birincil anahtar)"
    ],
    "cs": false,
    "exp": "PRIMARY KEY (birincil anahtar, PK).",
    "src": "Kahoot 2"
   },
   {
    "type": "fill",
    "topic": "iliskisel",
    "q": "Başka bir tablonun birincil anahtarına bağlanan sütuna ne ad verilir?",
    "code": "____",
    "ans": [
     "FOREIGN KEY",
     "foreign",
     "FK",
     "yabancı anahtar",
     "yabanci anahtar",
     "yabancı",
     "yabanci",
     "ikincil anahtar"
    ],
    "cs": false,
    "exp": "FOREIGN KEY (yabancı anahtar, FK).",
    "src": "Kahoot 2"
   },
   {
    "type": "fill",
    "topic": "iliskisel",
    "q": "1:1 ilişkide, yabancı anahtar sütununa ilişkinin bozulmaması için hangi kısıt eklenir?",
    "code": "____",
    "ans": [
     "UNIQUE",
     "tekil",
     "benzersiz"
    ],
    "cs": false,
    "exp": "UNIQUE: aynı FK değeri ikinci kez girilemez.",
    "src": "Kahoot 2"
   },
   {
    "type": "fill",
    "topic": "sql-giris",
    "q": "Tabloya yeni bir kayıt eklemek için hangi SQL komutu kullanılır?",
    "code": "____",
    "ans": [
     "INSERT INTO",
     "INSERT",
     "INSERT INTO ... VALUES",
     "INSERT INTO VALUES"
    ],
    "cs": false,
    "exp": "INSERT INTO tablo (sütunlar) VALUES (...);",
    "src": "Kahoot 2"
   },
   {
    "type": "fill",
    "topic": "iliskisel",
    "q": "Bölüm–Ders (1:N) ilişkisinde yabancı anahtar hangi tabloya eklenir?",
    "code": "____",
    "ans": [
     "ders",
     "ders tablosu",
     "ders tablosuna",
     "ders tablosuna (çok tarafı)",
     "çok tarafı",
     "cok tarafi"
    ],
    "cs": false,
    "exp": "1:N'de FK her zaman çok tarafına, yani ders tablosuna eklenir (bolum_no).",
    "src": "Kahoot 2"
   },
   {
    "type": "fill",
    "topic": "iliskisel",
    "q": "Öğrenci–Ders (M:N) ilişkisini kurabilmek için veritabanımıza eklediğimiz ara tablonun adı nedir?",
    "code": "____",
    "ans": [
     "ders_kaydi",
     "ders_kaydı",
     "ders kaydi",
     "ders kaydı",
     "derskaydi"
    ],
    "cs": false,
    "exp": "ders_kaydi: ogrenci_no ve ders_kodu FK'lerini tutar.",
    "src": "Kahoot 2"
   },
   {
    "type": "fill",
    "topic": "sql-giris",
    "q": "`ders` tablosunda `ders_kodu` INT ise, `ders_kaydi` tablosundaki `ders_kodu` hangi veri tipinde olmalıdır?",
    "code": "____",
    "ans": [
     "INT",
     "integer",
     "tam sayı",
     "tam sayi",
     "tamsayı",
     "tamsayi"
    ],
    "cs": false,
    "exp": "FK ile başvurduğu sütun aynı tipte olmalı: INT.",
    "src": "Kahoot 2"
   },
   {
    "type": "fill",
    "topic": "sql-giris",
    "q": "Önce hangi tabloya INSERT yapılmalıdır: `bolum` mu, `ders` mi?",
    "code": "____",
    "ans": [
     "bolum",
     "bölüm",
     "bolum tablosu",
     "bölüm tablosu",
     "bolum tablosuna",
     "bölüm tablosuna"
    ],
    "cs": false,
    "exp": "Ders, bolum_no ile bölüme bağlı; bölüm yoksa FK hatası alınır. Önce bolum.",
    "src": "Kahoot 2"
   },
   {
    "type": "fill",
    "topic": "iliskisel",
    "q": "`ders_kaydi` tablosundaki `harf_notu` bilgisi öğrenciye mi, derse mi, yoksa kayda mı aittir?",
    "code": "____",
    "ans": [
     "kayda",
     "kayıt",
     "kayit",
     "kayda ait",
     "ders kaydına",
     "ders kaydina",
     "ders_kaydi",
     "ders_kaydına",
     "kayda aittir"
    ],
    "cs": false,
    "exp": "Not belli bir öğrencinin belli bir dersteki kaydına aittir; bu yüzden ara tabloda durur.",
    "src": "Kahoot 2"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Bir kişinin yalnızca bir pasaportu olabiliyorsa kişi – pasaport ilişkisi hangisidir?",
    "opts": [
     "İlişki yoktur",
     "Çoka çok (M:N)",
     "Bire çok (1:N)",
     "Bire bir (1:1)"
    ],
    "a": 3,
    "exp": "Her iki taraf da en fazla bir: 1:1.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Bir müşterinin birden çok siparişi olabiliyorsa müşteri – sipariş ilişkisi hangisidir?",
    "opts": [
     "İlişki kurulamaz",
     "1:N",
     "M:N",
     "1:1"
    ],
    "a": 1,
    "exp": "Bir müşteri → çok sipariş, bir sipariş → tek müşteri: 1:N.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Çoka çok (M:N) ilişki ilişkisel veritabanında nasıl kurulur?",
    "opts": [
     "Bir tabloya liste olarak yazılır",
     "Tek tabloda birleştirilir",
     "Sadece FOREIGN KEY yeterlidir",
     "Ara (bağlantı) tablo oluşturulur"
    ],
    "a": 3,
    "exp": "İki tarafın PK'lerini FK olarak tutan ara tablo (ör. ders_kaydi).",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Bir tablodaki her satırı benzersiz olarak tanımlayan alana ne denir?",
    "opts": [
     "FOREIGN KEY",
     "INDEX",
     "DEFAULT",
     "PRIMARY KEY"
    ],
    "a": 3,
    "exp": "PRIMARY KEY: benzersiz ve NULL olamaz.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "FOREIGN KEY (yabancı anahtar) ne işe yarar?",
    "opts": [
     "Tekrarlı kayıtları siler",
     "Sorguları otomatik hızlandırır",
     "Sütunu otomatik artırır",
     "Tablolar arası bilgi bütünlüğünü korur"
    ],
    "a": 3,
    "exp": "Referans bütünlüğü: FK değeri başvurduğu tabloda olmalı.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Bir sütunda aynı değerin iki kez girilmesini engelleyen kısıt hangisidir?",
    "opts": [
     "CHECK",
     "UNIQUE",
     "NOT NULL",
     "DEFAULT"
    ],
    "a": 1,
    "exp": "UNIQUE tekrar eden değeri engeller.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "ER diyagramında varlıklar (entity) genellikle hangi şekille gösterilir?",
    "opts": [
     "Ok",
     "Eşkenar dörtgen",
     "Dikdörtgen",
     "Elips"
    ],
    "a": 2,
    "exp": "Varlık dikdörtgen, nitelik elips, ilişki eşkenar dörtgen.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Uzunluğu değişen metinler (ad, adres) için en uygun veri tipi hangisidir?",
    "opts": [
     "DATE",
     "INT",
     "CHAR(2)",
     "VARCHAR"
    ],
    "a": 3,
    "exp": "VARCHAR(n) değişken uzunluklu metin.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "NULL değer içeren kayıtları bulmak için doğru koşul hangisidir?",
    "opts": [
     "IS NULL",
     "= NULL",
     "= ''",
     "== NULL"
    ],
    "a": 0,
    "exp": "NULL = ile karşılaştırılamaz; IS NULL yazılır.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "`LIKE 'A%'` koşulu hangi değerleri getirir?",
    "opts": [
     "A ile başlayanları",
     "A ile bitenleri",
     "İçinde A geçenleri",
     "Sadece 'A' olanları"
    ],
    "a": 0,
    "exp": "% herhangi sayıda karakter: A ile başlayan her şey.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Sonuçta tekrar eden satırları tek göstermek için hangisi kullanılır?",
    "opts": [
     "DISTINCT",
     "DIFFERENT",
     "SINGLE",
     "UNIQUE"
    ],
    "a": 0,
    "exp": "SELECT DISTINCT tekrarları atar. UNIQUE bir kısıttır.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "`ORDER BY sütun DESC` ifadesi ne yapar?",
    "opts": [
     "Küçükten büyüğe sıralar",
     "Tekrarları siler",
     "İlk satırı getirir",
     "Büyükten küçüğe (azalan) sıralar"
    ],
    "a": 3,
    "exp": "DESC azalan, ASC (varsayılan) artan.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Sorgu sonucunu ilk 5 satırla sınırlamak için MySQL'de hangisi kullanılır?",
    "opts": [
     "LIMIT 5",
     "TOP 5",
     "ROWNUM 5",
     "FIRST 5"
    ],
    "a": 0,
    "exp": "MySQL: LIMIT. TOP SQL Server'da, ROWNUM Oracle'da.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`COUNT(*)` ile `COUNT(sütun)` arasındaki fark nedir?",
    "opts": [
     "COUNT(sütun) NULL'ları saymaz",
     "COUNT(sütun) tekrarları saymaz",
     "Fark yoktur",
     "COUNT(*) NULL'ları saymaz"
    ],
    "a": 0,
    "exp": "COUNT(*) bütün satırları sayar; COUNT(sütun) NULL olmayanları.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Bir sütunun ortalamasını hesaplayan fonksiyon hangisidir?",
    "opts": [
     "COUNT",
     "AVG",
     "SUM",
     "MEAN"
    ],
    "a": 1,
    "exp": "AVG ortalama. SQL'de MEAN yok.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Kayıtları gruplayıp her grup için toplam/sayı almak için hangisi kullanılır?",
    "opts": [
     "LIMIT",
     "GROUP BY",
     "DISTINCT",
     "ORDER BY"
    ],
    "a": 1,
    "exp": "GROUP BY + toplama fonksiyonu.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "WHERE ile HAVING arasındaki temel fark nedir?",
    "opts": [
     "HAVING gruplara, WHERE satırlara koşul koyar",
     "İkisi aynıdır",
     "WHERE gruplara, HAVING satırlara koşul koyar",
     "HAVING sadece JOIN'de kullanılır"
    ],
    "a": 0,
    "exp": "WHERE gruplamadan önce satırları, HAVING sonra grupları süzer.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Yalnızca iki tabloda da eşleşen kayıtları getiren JOIN türü hangisidir?",
    "opts": [
     "CROSS JOIN",
     "LEFT JOIN",
     "RIGHT JOIN",
     "INNER JOIN"
    ],
    "a": 3,
    "exp": "INNER JOIN sadece eşleşenleri getirir.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "LEFT JOIN'de sağ tabloda eşleşme yoksa o sütunlara ne gelir?",
    "opts": [
     "Boş metin",
     "0",
     "Satır listelenmez",
     "NULL"
    ],
    "a": 3,
    "exp": "Sol satır yine gelir; sağ sütunlar NULL olur.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "İki tabloyu JOIN ile birleştirirken ON kısmında genellikle hangi alanlar eşleştirilir?",
    "opts": [
     "PRIMARY KEY ile FOREIGN KEY",
     "İki tablonun PRIMARY KEY'leri",
     "İki tablonun ilk sütunları",
     "Aynı veri tipindeki tüm sütunlar"
    ],
    "a": 0,
    "exp": "ON k.ogrenci_no = o.ogrenci_no: FK ile başvurduğu PK.",
    "src": "Kahoot 3"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Öğrenci ile öğrenci kartı arasındaki ilişki türü hangisidir?",
    "opts": [
     "İlişki yoktur",
     "1:N",
     "1:1",
     "M:N"
    ],
    "a": 2,
    "exp": "Bir öğrenci → bir kart: 1:1.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Bölüm – Ders (bir bölümün çok dersi var) ilişkisinde FOREIGN KEY hangi tabloya eklenir?",
    "opts": [
     "Ara tabloya",
     "İki tabloya da",
     "Ders tablosuna",
     "Bölüm tablosuna"
    ],
    "a": 2,
    "exp": "FK çok tarafına: ders.bolum_no.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "M:N ilişkiyi tablolara dönüştürmek için ne gerekir?",
    "opts": [
     "AUTO_INCREMENT",
     "Ara (bağlantı) tablo",
     "UNIQUE kısıtı",
     "Tek bir FOREIGN KEY"
    ],
    "a": 1,
    "exp": "M:N → ara tablo.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "PRIMARY KEY için hangisi DOĞRUDUR?",
    "opts": [
     "Her tabloda birden çok olabilir",
     "Benzersiz ve NULL olamaz",
     "Tekrar edebilir",
     "NULL olabilir"
    ],
    "a": 1,
    "exp": "PK = UNIQUE + NOT NULL, tabloda bir tane.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "İki tabloda yalnızca eşleşen kayıtları getiren JOIN hangisidir?",
    "opts": [
     "CROSS JOIN",
     "INNER JOIN",
     "RIGHT JOIN",
     "LEFT JOIN"
    ],
    "a": 1,
    "exp": "INNER JOIN.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Hiç siparişi olmayan müşterileri de listelemek için hangisi kullanılır?",
    "opts": [
     "WHERE ile eşitlik",
     "LEFT JOIN (müşteriler solda)",
     "GROUP BY",
     "INNER JOIN"
    ],
    "a": 1,
    "exp": "Soldaki (müşteriler) bütün satırlar gelir; siparişi olmayanın sipariş sütunları NULL.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Bir sütundaki değerlerin ortalamasını veren fonksiyon hangisidir?",
    "opts": [
     "AVG()",
     "SUM()",
     "COUNT()",
     "MAX()"
    ],
    "a": 0,
    "exp": "AVG ortalama.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`COUNT(*)` ile `COUNT(sutun)` farkı nedir?",
    "opts": [
     "COUNT(sutun) NULL değerleri saymaz",
     "COUNT(*) NULL saymaz",
     "Fark yoktur",
     "COUNT(sutun) daha hızlıdır"
    ],
    "a": 0,
    "exp": "COUNT(sutun) NULL'ları atlar.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`SELECT MAX(fiyat) FROM urunler;` sorgusu kaç satır döndürür?",
    "opts": [
     "Kategori sayısı kadar",
     "Tablodaki satır sayısı kadar",
     "0",
     "1"
    ],
    "a": 3,
    "exp": "GROUP BY yoksa toplama fonksiyonu tek satır (tek değer) döndürür.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "GROUP BY ne işe yarar?",
    "opts": [
     "Tekrarları siler",
     "Aynı değere sahip satırları gruplar",
     "Satırları sıralar",
     "Tabloları birleştirir"
    ],
    "a": 1,
    "exp": "Aynı değerli satırları bir grup yapar.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`SELECT kategori_id, COUNT(*) FROM urunler GROUP BY kategori_id;` ne listeler?",
    "opts": [
     "Her kategorideki ürün sayısını",
     "Kategori adlarını",
     "En pahalı ürünü",
     "Toplam ürün sayısını"
    ],
    "a": 0,
    "exp": "Her kategori_id için bir satır ve o gruptaki ürün sayısı.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "GROUP BY kullanılan sorguda SELECT'e hangi sütunlar yazılabilir?",
    "opts": [
     "Tüm sütunlar",
     "Gruplanan sütunlar ve aggregate fonksiyonlar",
     "Sadece sayısal sütunlar",
     "Sadece PRIMARY KEY"
    ],
    "a": 1,
    "exp": "Gruplanmayan bir sütun yazılırsa hangi değerin geleceği belli olmaz (ONLY_FULL_GROUP_BY hatası).",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Birden fazla sütuna göre gruplama nasıl yazılır?",
    "opts": [
     "GROUP sehir BY yil",
     "GROUP BY sehir AND yil",
     "GROUP BY sehir, yil",
     "GROUP BY (sehir + yil)"
    ],
    "a": 2,
    "exp": "Sütunlar virgülle ayrılır.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "HAVING ne zaman kullanılır?",
    "opts": [
     "Tablo birleştirmek için",
     "Gruplamadan önce filtrelemek için",
     "Gruplanmış sonuçları filtrelemek için",
     "Sıralama yapmak için"
    ],
    "a": 2,
    "exp": "HAVING grupları süzer.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "WHERE içinde aggregate fonksiyon (ör. COUNT) kullanılabilir mi?",
    "opts": [
     "Sadece LIMIT ile birlikte",
     "Sadece SUM kullanılabilir",
     "Evet, her zaman",
     "Hayır, HAVING kullanılır"
    ],
    "a": 3,
    "exp": "WHERE'de COUNT → #1111 Invalid use of group function.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "5'ten fazla ürünü olan kategoriler için doğru koşul hangisidir?",
    "opts": [
     "ORDER BY COUNT(*) > 5",
     "HAVING COUNT(*) > 5",
     "WHERE COUNT(*) > 5",
     "GROUP BY COUNT(*) > 5"
    ],
    "a": 1,
    "exp": "Toplama fonksiyonlu koşul HAVING'e.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "İptal edilen siparişleri hesaba katmadan toplam almak için koşul nereye yazılır?",
    "opts": [
     "GROUP BY durum",
     "WHERE durum <> 'iptal'",
     "HAVING durum <> 'iptal'",
     "ORDER BY durum"
    ],
    "a": 1,
    "exp": "İptal tek tek satırların özelliği; gruplamadan önce WHERE ile atılır.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Doğru cümle sırası hangisidir?",
    "opts": [
     "SELECT-FROM-GROUP BY-WHERE-HAVING",
     "SELECT-GROUP BY-FROM-WHERE-ORDER BY",
     "SELECT-FROM-WHERE-HAVING-GROUP BY",
     "SELECT-FROM-WHERE-GROUP BY-HAVING-ORDER BY"
    ],
    "a": 3,
    "exp": "SELECT … FROM … WHERE … GROUP BY … HAVING … ORDER BY …",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu çalışırken hangisi önce işlenir?",
    "opts": [
     "SELECT",
     "HAVING",
     "ORDER BY",
     "WHERE"
    ],
    "a": 3,
    "exp": "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Toplam satışa göre en çok satan kategoriyi bulmak için GROUP BY'a hangi ikili eklenir?",
    "opts": [
     "WHERE + LIMIT",
     "ORDER BY ... DESC LIMIT",
     "JOIN + UNION",
     "HAVING + DISTINCT"
    ],
    "a": 1,
    "exp": "Toplama göre azalan sırala, ilk satırı al: ORDER BY SUM(...) DESC LIMIT 1.",
    "src": "Kahoot 4"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Bir yazarın birden çok kitabı olabilir, her kitabın tek yazarı vardır. İlişki türü nedir?",
    "opts": [
     "1:1",
     "M:N",
     "İlişki yoktur",
     "1:N"
    ],
    "a": 3,
    "exp": "Yazar → çok kitap, kitap → tek yazar: 1:N.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Her ülkenin tek başkenti vardır, her başkent tek ülkeye aittir. İlişki türü nedir?",
    "opts": [
     "1:1",
     "M:N",
     "1:N",
     "Mutlaka ara tablo gerekir"
    ],
    "a": 0,
    "exp": "İki taraf da tek: 1:1.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Doktor–Hasta M:N ilişkisinde muayene tarihi gibi bilgiler nerede saklanır?",
    "opts": [
     "Saklanamaz",
     "Doktor tablosunda",
     "Ara (bağlantı) tabloda",
     "Hasta tablosunda"
    ],
    "a": 2,
    "exp": "Tarih belli bir doktor–hasta eşleşmesine ait; ara tabloda durur (harf_notu gibi).",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Yeni bir veritabanı oluşturan komut hangisidir?",
    "opts": [
     "NEW DATABASE Kutuphane;",
     "MAKE DATABASE Kutuphane;",
     "CREATE DATABASE Kutuphane;",
     "CREATE TABLE Kutuphane;"
    ],
    "a": 2,
    "exp": "CREATE DATABASE; CREATE TABLE tablo oluşturur.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "PRIMARY KEY için **doğru olanların hepsi** hangi şıkta verilmiştir?",
    "opts": [
     "NULL değer alamaz + Her kaydı benzersiz tanımlar",
     "Değerleri tekrar edebilir + NULL değer alamaz",
     "Bir tabloda iki ayrı PRIMARY KEY olabilir + Her kaydı benzersiz tanımlar",
     "Sadece: Her kaydı benzersiz tanımlar"
    ],
    "a": 0,
    "exp": "Kahoot'ta birden çok doğrulu soruydu. PK tekrar edemez ve tabloda bir tanedir (birden çok sütundan oluşabilir ama yine tek PK).",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "FOREIGN KEY için **doğru olanların hepsi** hangi şıkta verilmiştir?",
    "opts": [
     "Bir tabloda birden çok FK olabilir + Referans bütünlüğünü sağlar + Başka tablonun PK'sini referans eder",
     "FK sütunu her zaman PK olmalıdır + Referans bütünlüğünü sağlar",
     "Referans bütünlüğünü sağlar + Başka tablonun PK'sini referans eder",
     "Bir tabloda birden çok FK olabilir + FK sütunu her zaman PK olmalıdır"
    ],
    "a": 0,
    "exp": "Kahoot'ta birden çok doğrulu soruydu. FK'nin PK olması gerekmez (ders.bolum_no FK ama PK değil). ders_kaydi'nde 2 FK var.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`Siparis` tablosunda `MusteriID` için doğru FOREIGN KEY tanımı hangisidir?",
    "opts": [
     "FOREIGN KEY (MusteriID) REFERENCES Musteri(MusteriID)",
     "FOREIGN KEY (MusteriID) LINKS Musteri(MusteriID)",
     "REFERENCES (MusteriID) FROM Musteri",
     "FOREIGN KEY Musteri JOINS MusteriID"
    ],
    "a": 0,
    "exp": "Kalıp: FOREIGN KEY (sütun) REFERENCES tablo(sütun).",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`Musteri` tablosunda olmayan `MusteriID=9` ile `Siparis` eklenirse ne olur?",
    "opts": [
     "Musteri otomatik eklenir",
     "Kayıt eklenir",
     "FOREIGN KEY hatası alınır",
     "MusteriID NULL olur"
    ],
    "a": 2,
    "exp": "Referans bütünlüğü: #1452 Cannot add or update a child row.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`Ogrenci(No PK, Ad NOT NULL, Bolum)`. Hangi INSERT **hatalıdır**?",
    "opts": [
     "INSERT INTO Ogrenci (No,Ad) VALUES (4,'Ece');",
     "INSERT INTO Ogrenci VALUES (2,NULL,'BP');",
     "INSERT INTO Ogrenci (Ad,No) VALUES ('Can',3);",
     "INSERT INTO Ogrenci VALUES (1,'Ali','BP');"
    ],
    "a": 1,
    "exp": "Ad NOT NULL; NULL verilemez. Sütun sırası belirtilirse (Ad,No) farklı sırada yazmak serbest.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`No=1` tabloda zaten varken `INSERT INTO Ogrenci VALUES (1,'Su','BP');` çalışırsa?",
    "opts": [
     "Kayıt eklenir",
     "Duplicate entry (PK) hatası",
     "Eski kayıt güncellenir",
     "No otomatik 2 olur"
    ],
    "a": 1,
    "exp": "PK tekrar edemez: #1062 Duplicate entry '1' for key 'PRIMARY'.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`Musteri`: 1, 2, 3. `Siparis.MusteriID`: 1, 1, 2. INNER JOIN (MusteriID) kaç satır döner?",
    "opts": [
     "6",
     "2",
     "3",
     "4"
    ],
    "a": 2,
    "exp": "Her sipariş satırı bir müşteriyle eşleşir: 3 satır. Müşteri 3 gelmez.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Aynı tablolarda `Musteri LEFT JOIN Siparis` kaç satır döner?",
    "opts": [
     "6",
     "4",
     "3",
     "2",
     "5"
    ],
    "a": 1,
    "exp": "3 eşleşen + siparişi olmayan müşteri 3 için NULL'lu 1 satır = 4.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`SELECT UrunID, SUM(Miktar) FROM Satis GROUP BY UrunID;` ne döndürür?",
    "opts": [
     "En çok satan ürün",
     "Her ürünün satış sayısı",
     "Her ürünün toplam satış miktarı",
     "Tüm satışların toplamı"
    ],
    "a": 2,
    "exp": "SUM(Miktar) miktarları toplar; satış sayısı COUNT(*) olurdu.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "GROUP BY için **doğru olanların hepsi** hangi şıkta verilmiştir?",
    "opts": [
     "Aggregate fonksiyonlarla kullanılır + Satırları gruplara ayırır + Her grup için özet satır üretir",
     "Sadece sayısal sütunlarda kullanılır + Satırları gruplara ayırır",
     "Satırları gruplara ayırır + Her grup için özet satır üretir",
     "Sadece sayısal sütunlarda kullanılır + Aggregate fonksiyonlarla kullanılır"
    ],
    "a": 0,
    "exp": "Kahoot'ta birden çok doğrulu soruydu. Metin sütunuyla (sehir) da gruplanır.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "COUNT için **doğru olanların hepsi** hangi şıkta verilmiştir?",
    "opts": [
     "COUNT(*) NULL içeren satırları da sayar + COUNT(DISTINCT sutun) benzersizleri sayar + COUNT(sutun) NULL değerleri saymaz",
     "COUNT(*) NULL içeren satırları da sayar + Sadece GROUP BY ile kullanılabilir",
     "COUNT(DISTINCT sutun) benzersizleri sayar + COUNT(sutun) NULL değerleri saymaz",
     "Sadece GROUP BY ile kullanılabilir + COUNT(sutun) NULL değerleri saymaz"
    ],
    "a": 0,
    "exp": "Kahoot'ta birden çok doğrulu soruydu. COUNT GROUP BY olmadan da kullanılır: SELECT COUNT(*) FROM musteriler;",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`SELECT m.Ad, ___(s.Tutar) FROM Musteri m JOIN Siparis s ON ...` Müşteri başına TOPLAM için boşluğa ne gelir?",
    "opts": [
     "COUNT",
     "SUM",
     "AVG",
     "MAX"
    ],
    "a": 1,
    "exp": "Toplam tutar: SUM.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Müşteri başına toplam sorgusunun sonuna hangisi eklenmelidir?",
    "opts": [
     "ORDER BY m.Ad",
     "HAVING m.Ad",
     "GROUP BY m.Ad",
     "WHERE m.Ad"
    ],
    "a": 2,
    "exp": "Müşteri başına = müşteriye göre grupla.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`SELECT Sehir, COUNT(*) FROM Musteri GROUP BY Sehir WHERE COUNT(*) > 2;` sorgusundaki **hataların hepsi** hangi şıkta verilmiştir?",
    "opts": [
     "WHERE, GROUP BY'dan önce gelmeli + Aggregate koşul için HAVING kullanılmalı",
     "COUNT(*) yanlış yazılmış",
     "Hata yok",
     "Sadece: WHERE, GROUP BY'dan önce gelmeli"
    ],
    "a": 0,
    "exp": "Kahoot'ta birden çok doğrulu soruydu. Doğrusu: … GROUP BY Sehir HAVING COUNT(*) > 2;",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Fiyatlar: Kalem 10, Defter 25, Cetvel 40, Çanta 60. `WHERE Fiyat BETWEEN 25 AND 40` ne döndürür?",
    "opts": [
     "Defter ve Cetvel",
     "Cetvel ve Çanta",
     "Kalem, Defter, Cetvel",
     "Sadece Defter"
    ],
    "a": 0,
    "exp": "BETWEEN uç değerleri dahil eder: 25 ≤ fiyat ≤ 40.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Soyadı 'K' ile başlayanları bulmak için doğru koşul hangisidir?",
    "opts": [
     "Soyad IN ('K')",
     "Soyad LIKE '%K'",
     "Soyad LIKE 'K%'",
     "Soyad = 'K%'"
    ],
    "a": 2,
    "exp": "'K%' K ile başlayan; '%K' K ile biten. = ile joker çalışmaz.",
    "src": "Kahoot 5"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "ER diyagramında bir özniteliğin Birincil Anahtar (PK) olduğunu Chen notasyonunda nasıl gösteririz?",
    "opts": [
     "Yıldız işareti eklenir",
     "Metnin altı çizilir",
     "Metin kalın yazılır",
     "Oval çift çizgi yapılır"
    ],
    "a": 1,
    "exp": "Chen notasyonunda anahtar öznitelik altı çizili yazılır.",
    "src": "Kahoot 6"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Bir okulda birçok öğrenci var, her öğrenci sadece bir okula kayıtlı. İlişki türü nedir?",
    "opts": [
     "Zayıf ilişki",
     "1:1",
     "M:N",
     "1:N"
    ],
    "a": 3,
    "exp": "Okul → çok öğrenci, öğrenci → tek okul: 1:N.",
    "src": "Kahoot 6"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Chen notasyonunda \"Elmas\" (Diamond) sembolü neyi temsil eder?",
    "opts": [
     "İlişki (Relationship)",
     "Veri Akışı",
     "Öznitelik (Attribute)",
     "Varlık Kümesi"
    ],
    "a": 0,
    "exp": "Varlık dikdörtgen, öznitelik oval, ilişki elmas (eşkenar dörtgen).",
    "src": "Kahoot 6"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Filmler ve Oyuncular (bir filmde çok oyuncu, bir oyuncu çok filmde) arasındaki ilişki hangisidir?",
    "opts": [
     "1:N",
     "N:M",
     "N:1",
     "1:1"
    ],
    "a": 1,
    "exp": "İki taraf da çok: N:M (M:N), ara tablo gerekir.",
    "src": "Kahoot 6"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "ER diyagramlarının önemine dair hangisi **yanlıştır**?",
    "opts": [
     "Ekip içi iletişimi kolaylaştırır",
     "SQL sorgularının temelini oluşturur",
     "Tasarım hatalarının erken fark edilmesini sağlar",
     "Sadece küçük ölçekli veri tabanları için geçerlidir"
    ],
    "a": 3,
    "exp": "ER diyagramı her ölçekte kullanılır.",
    "src": "Kahoot 6"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Chen notasyonunda öznitelikler (Attributes) hangi sembolle gösterilir?",
    "opts": [
     "Oval (Elips)",
     "Üçgen",
     "Kare",
     "Daire"
    ],
    "a": 0,
    "exp": "Öznitelik: oval.",
    "src": "Kahoot 6"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "ER diyagramında \"Kardinalite\" (Cardinality) neyi ifade eder?",
    "opts": [
     "Varlıklar arasındaki sayısal ilişki miktarını",
     "Toplam tablo sayısını",
     "Sorguların çalışma hızını",
     "Verilerin disk üzerindeki boyutunu"
    ],
    "a": 0,
    "exp": "Kardinalite: 1:1, 1:N, M:N.",
    "src": "Kahoot 6"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Normalizasyonun temel amacı nedir?",
    "opts": [
     "Tekrarı azaltmak",
     "Tabloyu büyütmek",
     "Veri şifrelemek",
     "Index silmek"
    ],
    "a": 0,
    "exp": "Normalizasyon veri tekrarını ve tutarsızlığı azaltır.",
    "src": "Kahoot 7"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Doğal anahtar (natural key) kullanmanın riski nedir?",
    "opts": [
     "Çoğalır",
     "Değişebilir",
     "Yavaşlatır",
     "Anlamsızdır"
    ],
    "a": 1,
    "exp": "TC no, e-posta gibi gerçek dünya değerleri zamanla değişebilir.",
    "src": "Kahoot 7"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Vekil anahtarın (surrogate key) avantajı nedir?",
    "opts": [
     "Değişmez ve hızlı",
     "Karmaşıktır",
     "Güvensizdir",
     "Anlamlıdır"
    ],
    "a": 0,
    "exp": "AUTO_INCREMENT id gibi anlamı olmayan, değişmeyen kısa anahtar.",
    "src": "Kahoot 7"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Cümleyi tamamla: \"1:M en ...\"",
    "opts": [
     "yaygın ilişkidir",
     "karmaşık türdür",
     "seyrek görülür",
     "yavaş modeldir"
    ],
    "a": 0,
    "exp": "1:M (1:N) en yaygın ilişki türüdür.",
    "src": "Kahoot 7"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Departman – Çalışan hangi ilişkidir?",
    "opts": [
     "Zayıf ilişki",
     "M:N",
     "1:M",
     "1:1"
    ],
    "a": 2,
    "exp": "Bir departmanda çok çalışan, çalışan tek departmanda.",
    "src": "Kahoot 7"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Öğrenci – Ders hangi ilişkidir?",
    "opts": [
     "Bağsız",
     "M:N",
     "1:M",
     "1:1"
    ],
    "a": 1,
    "exp": "Öğrenci çok ders alır, derste çok öğrenci var.",
    "src": "Kahoot 7"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Öğrenci kimlik kartı tablosunda FK hangisidir?",
    "opts": [
     "gecerlilik",
     "ad",
     "kart_no",
     "ogrenci_id"
    ],
    "a": 3,
    "exp": "Kart, ogrenci_id ile öğrenciye bağlanır; kart_no kartın kendi PK'si.",
    "src": "Kahoot 7"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "(Doğru/Yanlış) FK her zaman ara tabloda bulunur.",
    "opts": [
     "Doğru",
     "Yanlış"
    ],
    "a": 1,
    "exp": "Yanlış: 1:N'de FK çok tarafındaki normal tabloda (ders.bolum_no).",
    "src": "Kahoot 7"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Öğretmen – Ders hangi ilişkidir?",
    "opts": [
     "1:M",
     "Zayıf bağ",
     "1:1",
     "M:N"
    ],
    "a": 0,
    "exp": "Kahoot'un cevabı: bir öğretmen çok ders verir, her dersin tek öğretmeni var.",
    "src": "Kahoot 7"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Kategori – Ürün hangi ilişkidir?",
    "opts": [
     "1:M",
     "1:1",
     "M:N",
     "Yok"
    ],
    "a": 0,
    "exp": "Kategoride çok ürün, ürün tek kategoride.",
    "src": "Kahoot 7"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Ara tabloda hangi anahtarlar vardır?",
    "opts": [
     "Tek PK",
     "Sadece indeks",
     "İki FK",
     "Sanal alan"
    ],
    "a": 2,
    "exp": "İki tarafın PK'lerini tutan iki FK (çoğu zaman birlikte PK).",
    "src": "Kahoot 7"
   },
   {
    "type": "mc",
    "topic": "giris",
    "q": "Veritabanı nedir?",
    "opts": [
     "Bir programlama dili",
     "İnternet tarayıcısı",
     "Grafik tasarım aracı",
     "Organize edilmiş veri koleksiyonu"
    ],
    "a": 3,
    "exp": "Düzenli saklanan, ilişkili veri topluluğu.",
    "src": "Kahoot 8"
   },
   {
    "type": "mc",
    "topic": "giris",
    "q": "Hangisi bir Veritabanı Yönetim Sistemi (DBMS) **değildir**?",
    "opts": [
     "Oracle",
     "Microsoft Access",
     "Microsoft Word",
     "MySQL"
    ],
    "a": 2,
    "exp": "Word kelime işlemcidir.",
    "src": "Kahoot 8"
   },
   {
    "type": "mc",
    "topic": "giris",
    "q": "SQL'in açılımı nedir?",
    "opts": [
     "Structured Query Language",
     "Simple Question Logic",
     "Software Quality Level",
     "System Query Loop"
    ],
    "a": 0,
    "exp": "Yapılandırılmış Sorgu Dili.",
    "src": "Kahoot 8"
   },
   {
    "type": "mc",
    "topic": "giris",
    "q": "Bir tabloda satırlar neyi temsil eder?",
    "opts": [
     "Kayıtları (records)",
     "Alanları (fields)",
     "Tabloların ilişkisini",
     "Veritabanı adını"
    ],
    "a": 0,
    "exp": "Satır = kayıt, sütun = alan.",
    "src": "Kahoot 8"
   },
   {
    "type": "mc",
    "topic": "giris",
    "q": "Aşağıdakilerden hangisi veritabanı **kullanmaz**?",
    "opts": [
     "Netflix",
     "Online bankacılık",
     "Hastane sistemi",
     "Hesap makinesi uygulaması"
    ],
    "a": 3,
    "exp": "Hesap makinesi kalıcı veri saklamaz.",
    "src": "Kahoot 8"
   },
   {
    "type": "mc",
    "topic": "giris",
    "q": "Dünyanın en çok kullanılan açık kaynak veritabanı hangisidir?",
    "opts": [
     "Microsoft SQL Server",
     "MongoDB",
     "MySQL",
     "Firebase"
    ],
    "a": 2,
    "exp": "MySQL açık kaynak ilişkisel VTYS.",
    "src": "Kahoot 8"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "GROUP BY hangi komuttan **önce** yazılır?",
    "opts": [
     "HAVING",
     "FROM",
     "WHERE",
     "SELECT"
    ],
    "a": 0,
    "exp": "… WHERE … GROUP BY … HAVING …",
    "src": "Kahoot 9"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "GROUP BY ile en sık hangi fonksiyon kullanılır?",
    "opts": [
     "LIMIT",
     "LIKE",
     "COUNT",
     "CONCAT"
    ],
    "a": 2,
    "exp": "COUNT, SUM, AVG gibi toplama fonksiyonları.",
    "src": "Kahoot 9"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "GROUP BY'da ID kolonu kullanılmasının nedeni nedir?",
    "opts": [
     "Daha kolay yazım",
     "Benzersiz gruplama",
     "Daha hızlı sorgulama",
     "Daha az bellek"
    ],
    "a": 1,
    "exp": "Aynı isimli farklı kayıtlar (iki \"Ahmet\") karışmaz.",
    "src": "Kahoot 9"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "HAVING hangi komuttan **sonra** yazılır?",
    "opts": [
     "GROUP BY",
     "SELECT",
     "FROM",
     "WHERE"
    ],
    "a": 0,
    "exp": "HAVING, GROUP BY'dan hemen sonra gelir.",
    "src": "Kahoot 9"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "JOIN kullanırken tabloları birleştiren (eşleşme koşulunu yazdığımız) anahtar kelime hangisidir?",
    "opts": [
     "ON",
     "FROM",
     "AS",
     "WHERE"
    ],
    "a": 0,
    "exp": "JOIN … ON a.id = b.a_id",
    "src": "Kahoot 10"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "3 tabloyu birleştirmek için kaç tane JOIN gerekir?",
    "opts": [
     "2",
     "1",
     "4",
     "3"
    ],
    "a": 0,
    "exp": "n tablo için n − 1 JOIN.",
    "src": "Kahoot 10"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "LEFT JOIN ile JOIN arasındaki temel fark nedir?",
    "opts": [
     "Hiçbir fark yoktur",
     "LEFT JOIN eşleşme olmasa da sol tablonun tüm satırlarını getirir",
     "JOIN her zaman daha fazla sonuç döndürür",
     "LEFT JOIN daha hızlıdır"
    ],
    "a": 1,
    "exp": "JOIN (INNER) sadece eşleşenleri getirir.",
    "src": "Kahoot 10"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`FROM bolge b JOIN iller i ON b.bolge_id = i.bolge_id` ifadesinde `b` ve `i` ne işe yarar?",
    "opts": [
     "Tablo takma adıdır (alias)",
     "Filtre uygular",
     "Kolon adı belirtir",
     "Sıralama belirtir"
    ],
    "a": 0,
    "exp": "Takma ad; AS yazmadan da verilebilir.",
    "src": "Kahoot 10"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "GROUP BY ile birlikte hangisi (aggregate olarak) kullanılamaz?",
    "opts": [
     "COUNT",
     "MAX",
     "LIKE",
     "SUM"
    ],
    "a": 2,
    "exp": "LIKE bir karşılaştırma operatörüdür, toplama fonksiyonu değil.",
    "src": "Kahoot 10"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Aşağıdakilerden hangisi HAVING içinde kullanılabilir?",
    "opts": [
     "COUNT(*)",
     "BETWEEN",
     "LIKE",
     "ORDER BY"
    ],
    "a": 0,
    "exp": "Kahoot'un cevabı: HAVING toplama fonksiyonlarıyla grupları süzer.",
    "src": "Kahoot 10"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "SQL'de veritabanının sorguyu işleme sırası hangisidir?",
    "opts": [
     "WHERE → FROM → GROUP BY → HAVING → SELECT",
     "FROM → SELECT → WHERE → HAVING → GROUP BY",
     "SELECT → FROM → WHERE → GROUP BY → HAVING",
     "FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT"
    ],
    "a": 3,
    "exp": "Mantıksal çalışma sırası; yazım sırasından farklı.",
    "src": "Kahoot 10"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Ankara'nın ilçe sayısından fazla ilçesi olan illeri bulmak için en uygun yöntem hangisidir?",
    "opts": [
     "ORDER BY ilce_sayisi DESC LIMIT 1",
     "WHERE il_ad != 'Ankara'",
     "HAVING ilce_sayisi > (SELECT COUNT(*) FROM ... WHERE il_ad = 'Ankara')",
     "HAVING ilce_sayisi > 25"
    ],
    "a": 2,
    "exp": "Karşılaştırılacak sayı sabit yazılmaz, alt sorguyla hesaplanır.",
    "src": "Kahoot 10"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Hem tarihi hem saati aynı anda döndüren MySQL fonksiyonu hangisidir?",
    "opts": [
     "CURTIME()",
     "CURRENT_TIMESTAMP",
     "CURDATE()",
     "SYSDATE_NOW()"
    ],
    "a": 1,
    "exp": "CURRENT_TIMESTAMP (NOW() ile aynı): 2024-11-15 14:05:30.",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`SELECT CURDATE();` ne döndürür?",
    "opts": [
     "11-15-2024",
     "14:05:30",
     "2024-11-15",
     "2024-11-15 14:05"
    ],
    "a": 2,
    "exp": "Sadece tarih, YYYY-MM-DD.",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "EXTRACT fonksiyonunun doğru sözdizimi hangisidir?",
    "opts": [
     "EXTRACT(YEAR FROM tarih)",
     "EXTRACT(YEAR OF tarih)",
     "EXTRACT(tarih FROM YEAR)",
     "EXTRACT(tarih, YEAR)"
    ],
    "a": 0,
    "exp": "EXTRACT(birim FROM tarih).",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`SELECT EXTRACT(MONTH FROM '2010-04-15');` ne döndürür?",
    "opts": [
     "4",
     "10",
     "2010",
     "15"
    ],
    "a": 0,
    "exp": "Ay: 4 (Kahoot'ta \"04\" yazıyordu).",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "EXTRACT'ta kullanılan bileşenlerden hangisi **yanlıştır**? (derste gösterilen listeye göre)",
    "opts": [
     "YEAR",
     "WEEK",
     "SECOND",
     "MINUTE"
    ],
    "a": 1,
    "exp": "Kahoot'un cevabı WEEK. Not: MySQL aslında WEEK'i de destekler; derste gösterilen listede yoktu.",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Bugünkü tarihe 10 gün ekleyen sorgu hangisidir?",
    "opts": [
     "NOW() + INTERVAL 10 DAY",
     "DATE_ADD(NOW(), INTERVAL 10 DAY)",
     "ADD_DATE(NOW(), INTERVAL 10)",
     "DATE_ADD(NOW(), 10 DAY)"
    ],
    "a": 1,
    "exp": "Kahoot'un cevabı DATE_ADD(…, INTERVAL 10 DAY). (a da MySQL'de çalışır ama derste DATE_ADD gösterildi.)",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Mevcut saate 90 dakika ekleyen sorgu hangisidir?",
    "opts": [
     "DATE_SUB(NOW(), INTERVAL 90 MINUTE)",
     "DATE_ADD(NOW(), INTERVAL 90 MINUTE)",
     "DATE_ADD(NOW(), INTERVAL 1.5 HOUR)",
     "DATE_ADD(NOW(), INTERVAL 90 SECOND)"
    ],
    "a": 1,
    "exp": "DATE_SUB çıkarır; INTERVAL ondalık saat almaz.",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Türkçe gün/ay adı almak için hangi komut çalıştırılmalıdır?",
    "opts": [
     "USE LANGUAGE 'tr_TR'",
     "SET NLS_LANGUAGE = 'TURKISH'",
     "SET lc_time_names = 'tr_TR'",
     "SET LANGUAGE = 'Turkish'"
    ],
    "a": 2,
    "exp": "lc_time_names MONTHNAME, DAYNAME, DATE_FORMAT adlarını değiştirir.",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`lc_time_names = 'tr_TR'` iken `MONTHNAME('1997-04-03')` ne döndürür?",
    "opts": [
     "Mart",
     "Mayıs",
     "Nisan",
     "04"
    ],
    "a": 2,
    "exp": "4. ay: Nisan.",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`SELECT DATEDIFF('2024-04-25', '2024-04-15');` ne döndürür?",
    "opts": [
     "10",
     "15",
     "-10",
     "25"
    ],
    "a": 0,
    "exp": "İlk tarih − ikinci tarih = 10 gün.",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "İki saat değeri arasındaki farkı HH:MM:SS formatında döndüren fonksiyon hangisidir?",
    "opts": [
     "TIMESTAMPDIFF()",
     "TIMEDIFF()",
     "DATEDIFF()",
     "TIME_BETWEEN()"
    ],
    "a": 1,
    "exp": "DATEDIFF gün sayısı verir, TIMEDIFF saat farkı.",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`DATE_FORMAT(tarih, '%d %M %Y %W')` hangi çıktıyı üretir? (Türkçe ayarda)",
    "opts": [
     "15 Kasım 2024 Cuma",
     "2024/11/15 Cuma",
     "Cuma, 15-11-2024",
     "15 Kas 2024 Cum"
    ],
    "a": 0,
    "exp": "%d gün, %M ay adı, %Y 4 haneli yıl, %W gün adı.",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "DATE_FORMAT içinde günü 2 haneli sayı olarak gösteren format kodu hangisidir?",
    "opts": [
     "%D",
     "%d",
     "%G",
     "%y"
    ],
    "a": 1,
    "exp": "%d: 01–31. %D: 1st, 2nd… %y: 2 haneli yıl.",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Tarih/saat fonksiyonları SQL'in hangi cümleleriyle kullanılabilir?",
    "opts": [
     "Yalnızca ORDER BY",
     "Yalnızca SELECT",
     "SELECT, WHERE ve ORDER BY",
     "Yalnızca WHERE"
    ],
    "a": 2,
    "exp": "Örn. WHERE YEAR(tarih) = 2024, ORDER BY MONTH(tarih).",
    "src": "Kahoot 11"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`UPPER('ankara')` sonucu nedir?",
    "opts": [
     "'ANkara'",
     "'ankara'",
     "'Ankara'",
     "'ANKARA'"
    ],
    "a": 3,
    "exp": "UPPER tamamını büyük harfe çevirir.",
    "src": "Kahoot 12"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Türkçe karakter içeren metindeki karakter sayısını doğru ölçen fonksiyon hangisidir?",
    "opts": [
     "SIZE()",
     "CHAR_LENGTH()",
     "COUNT()",
     "LENGTH()"
    ],
    "a": 1,
    "exp": "LENGTH byte sayar (ş, ğ 2 byte); CHAR_LENGTH karakter sayar.",
    "src": "Kahoot 12"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`SELECT LEFT('Bilgisayar', 4);` sonucu nedir?",
    "opts": [
     "'sara'",
     "'Bilg'",
     "'yar '",
     "'Bilgi'"
    ],
    "a": 1,
    "exp": "Soldan 4 karakter.",
    "src": "Kahoot 12"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`SELECT LPAD('42', 6, '0');` sonucu nedir?",
    "opts": [
     "'42 '",
     "'004200'",
     "'420000'",
     "'000042'"
    ],
    "a": 3,
    "exp": "Soldan 0 ile 6 karaktere tamamlar.",
    "src": "Kahoot 12"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`TRIM(' Merhaba ')` sonucu nedir?",
    "opts": [
     "'Merhaba '",
     "' Merhaba'",
     "'Merhaba'",
     "'merhaba'"
    ],
    "a": 2,
    "exp": "Baştaki ve sondaki boşlukları siler.",
    "src": "Kahoot 12"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`SELECT REPLACE('05-32-100', '-', '');` sonucu nedir?",
    "opts": [
     "'053 2100'",
     "'05-32-100'",
     "'0532100'",
     "'05 32 100'"
    ],
    "a": 2,
    "exp": "Bütün - karakterleri boş metinle değiştirilir.",
    "src": "Kahoot 12"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`INSTR('Ankara', 'kar')` ne döndürür?",
    "opts": [
     "2",
     "1",
     "4",
     "3"
    ],
    "a": 3,
    "exp": "A1 n2 k3: \"kar\" 3. karakterde başlar.",
    "src": "Kahoot 12"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`SELECT SUBSTRING('Programlama', 8, 4);` sonucu nedir?",
    "opts": [
     "'ama '",
     "'Prog'",
     "'gram'",
     "'lama'"
    ],
    "a": 3,
    "exp": "8. karakterden (l) başlayıp 4 karakter: lama.",
    "src": "Kahoot 12"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`FORMAT(1234567.5, 2)` sonucu nedir?",
    "opts": [
     "'1.234.567,50'",
     "'1234567.50'",
     "'12345.6750'",
     "'1,234,567.50'"
    ],
    "a": 3,
    "exp": "Varsayılan (en_US) biçim: binlik virgül, ondalık nokta.",
    "src": "Kahoot 12"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`ogrenci_no = '2021001003'` iken sağdan 4 karakteri almak için hangisi kullanılır?",
    "opts": [
     "LEFT(ogrenci_no, 4)",
     "TRIM(ogrenci_no, 4)",
     "INSTR(ogrenci_no, 4)",
     "RIGHT(ogrenci_no, 4)"
    ],
    "a": 3,
    "exp": "RIGHT → 1003.",
    "src": "Kahoot 12"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`SELECT CONCAT_WS(' ', 'Ahmet', NULL, 'Yilmaz');` sonucu nedir?",
    "opts": [
     "NULL",
     "'Ahmet Yilmaz'",
     "'Ahmet NULL Yilmaz'"
    ],
    "a": 1,
    "exp": "CONCAT_WS NULL'ları atlar. (CONCAT olsaydı sonuç NULL olurdu.)",
    "src": "Kahoot 12"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "SQL'de VIEW (Görünüm) nedir?",
    "opts": [
     "Verileri fiziksel olarak depolayan tablo",
     "Yalnızca sayısal veri tutan yapı",
     "Birden fazla veritabanını birleştiren araç",
     "SELECT sorgusuna dayalı sanal bir tablo"
    ],
    "a": 3,
    "exp": "VIEW veri saklamaz; kayıtlı bir SELECT'tir.",
    "src": "Kahoot 13"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Yeni bir VIEW oluşturmak için hangi komut kullanılır?",
    "opts": [
     "MAKE VIEW view_adi FROM SELECT",
     "CREATE VIEW view_adi AS SELECT",
     "BUILD VIEW view_adi USING SELECT",
     "INSERT INTO view_adi AS SELECT"
    ],
    "a": 1,
    "exp": "CREATE VIEW ad AS SELECT …;",
    "src": "Kahoot 13"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "VIEW yapısında hangisi **yapılamaz**? (derste anlatılana göre)",
    "opts": [
     "WHERE ile filtreleme",
     "Doğrudan INSERT / UPDATE / DELETE yapmak",
     "JOIN ile birden fazla tabloyu birleştirmek",
     "GROUP BY ile gruplama"
    ],
    "a": 1,
    "exp": "Derste anlatılan: VIEW üzerinden veri değiştirilmez (JOIN/GROUP BY'lı VIEW'larda MySQL de izin vermez).",
    "src": "Kahoot 13"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "`DROP VIEW view_adi;` ne işe yarar?",
    "opts": [
     "VIEW'ı kalıcı olarak siler",
     "Geçici olarak devre dışı bırakır",
     "Adını değiştirir",
     "İçindeki tüm satırları temizler"
    ],
    "a": 0,
    "exp": "Sadece VIEW tanımı silinir; temel tablolar etkilenmez.",
    "src": "Kahoot 13"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "`CREATE OR REPLACE VIEW` ne zaman kullanılır?",
    "opts": [
     "Mevcut VIEW'ı silmeden güncellemek için",
     "Başka veritabanına kopyalamak için",
     "İki VIEW'ı birleştirmek için",
     "Verileri yedeklemek için"
    ],
    "a": 0,
    "exp": "Varsa tanımı değiştirir, yoksa oluşturur.",
    "src": "Kahoot 13"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "VIEW içinde COUNT, SUM gibi aggregate fonksiyon kullanırken ne zorunludur?",
    "opts": [
     "Sonuçlara AS ile takma ad verilmesi",
     "Sütun adlarının tek tırnak içine alınması",
     "Fonksiyonların büyük harfle yazılması",
     "GROUP BY'ın VIEW öncesinde yazılması"
    ],
    "a": 0,
    "exp": "VIEW'ın sütun adı olacağı için COUNT(*) AS ders_sayisi gibi ad verilir.",
    "src": "Kahoot 13"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "VIEW her sorgulandığında ne olur?",
    "opts": [
     "Tanımı silinir",
     "Kalıcı tabloya dönüşür",
     "Yalnızca önbellekten okunur",
     "Veritabanı motoru VIEW'ı yeniden üretir"
    ],
    "a": 3,
    "exp": "SELECT her seferinde güncel veriyle yeniden çalışır.",
    "src": "Kahoot 13"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Bir VIEW'ın dayandığı tabloya ne ad verilir?",
    "opts": [
     "Source Table",
     "Root Table",
     "Master Table",
     "Base Table (Temel Tablo)"
    ],
    "a": 3,
    "exp": "Temel tablo (base table).",
    "src": "Kahoot 13"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Hangi JOIN türü iki tablonun kartezyen çarpımını üretir?",
    "opts": [
     "LEFT JOIN",
     "INNER JOIN",
     "RIGHT JOIN",
     "CROSS JOIN"
    ],
    "a": 3,
    "exp": "Her satır her satırla: m × n.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Birden fazla tabloyu birleştiren SQL anahtar kelimesi hangisidir?",
    "opts": [
     "LINK",
     "MERGE",
     "UNION",
     "JOIN"
    ],
    "a": 3,
    "exp": "UNION sonuçları alt alta ekler; tabloları sütun bazında birleştiren JOIN.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Doktor ve hasta tablolarını birleştirmek için hangisi doğrudur?",
    "opts": [
     "doktor JOIN hasta ON doktor.id = hasta.dok_id",
     "doktor MERGE hasta ON id",
     "doktor CONNECT hasta ON id",
     "doktor UNION hasta"
    ],
    "a": 0,
    "exp": "JOIN … ON PK = FK.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "RIGHT JOIN ile LEFT JOIN arasındaki temel fark nedir?",
    "opts": [
     "İkisi çıktı üretmez",
     "Sol tablo önceliklidir",
     "Sağ tablo önceliklidir",
     "Fark yoktur"
    ],
    "a": 2,
    "exp": "RIGHT JOIN'de sağ tablonun bütün satırları gelir.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "SELECT sorgusunda tablo takma adı (alias) hangi anahtar kelimeyle tanımlanır?",
    "opts": [
     "BY",
     "AS",
     "TO",
     "IS"
    ],
    "a": 1,
    "exp": "AS (isteğe bağlı, yazılmayabilir de).",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Her bölgedeki il sayısını bulmak için hangi fonksiyon kullanılır?",
    "opts": [
     "AVG(il_id)",
     "COUNT(il_id)",
     "SUM(il_id)",
     "MAX(il_id)"
    ],
    "a": 1,
    "exp": "Sayı → COUNT; id'leri toplamak anlamsız.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Bir gruptaki en büyük değeri döndüren aggregate fonksiyon hangisidir?",
    "opts": [
     "AVG()",
     "SUM()",
     "COUNT()",
     "MAX()"
    ],
    "a": 3,
    "exp": "MAX en büyük, MIN en küçük.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "GROUP BY sorgusunda ORDER BY nereye yazılır?",
    "opts": [
     "GROUP BY'dan önce",
     "GROUP BY'dan sonra",
     "FROM'dan önce",
     "WHERE'den önce"
    ],
    "a": 1,
    "exp": "… GROUP BY … HAVING … ORDER BY …",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "MySQL'de anlık tarih ve saati döndüren fonksiyon hangisidir?",
    "opts": [
     "TODAY()",
     "DATE()",
     "NOW()",
     "TIME()"
    ],
    "a": 2,
    "exp": "NOW(): 2024-11-15 14:05:30.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`YEAR('2024-06-15')` ne döndürür?",
    "opts": [
     "06",
     "2024",
     "15",
     "2024-06"
    ],
    "a": 1,
    "exp": "Yıl kısmı.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "İki tarih arasındaki gün farkını hesaplayan fonksiyon hangisidir?",
    "opts": [
     "DATEADD()",
     "DIFFDATE()",
     "TIMEDIFF()",
     "DATEDIFF()"
    ],
    "a": 3,
    "exp": "DATEDIFF(tarih1, tarih2) gün sayısı.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`DATE_FORMAT(tarih, '%d/%m/%Y')` tarihi nasıl biçimlendirir?",
    "opts": [
     "YYYY/DD/MM",
     "MM-DD-YYYY",
     "DD/MM/YYYY",
     "YYYY-MM-DD"
    ],
    "a": 2,
    "exp": "%d gün, %m ay, %Y yıl, araya /.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`DATE_ADD('2024-01-01', INTERVAL 30 DAY)` ne döndürür?",
    "opts": [
     "2024-02-01",
     "2024-01-31",
     "2024-12-31",
     "2024-01-30"
    ],
    "a": 1,
    "exp": "1 Ocak + 30 gün = 31 Ocak.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`MONTH('2024-08-20')` ne döndürür?",
    "opts": [
     "08-20",
     "20",
     "8",
     "2024"
    ],
    "a": 2,
    "exp": "Ay sayısı: 8.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Yalnızca tarihi (saat olmadan) döndüren fonksiyon hangisidir?",
    "opts": [
     "YEAR()",
     "DATE()",
     "NOW()",
     "TIME()"
    ],
    "a": 1,
    "exp": "DATE(NOW()) → 2024-11-15.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`CURDATE()` ve `CURTIME()` farkı nedir?",
    "opts": [
     "CURDATE() tarihi verir (saat yok), CURTIME() saati verir",
     "İkisi de tarih ve saati verir",
     "CURDATE() saati, CURTIME() tarihi verir",
     "Fark yoktur"
    ],
    "a": 0,
    "exp": "CURDATE: 2024-11-15, CURTIME: 14:05:30.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "2024 yılında yazılan reçeteleri filtrelemek için hangi koşul kullanılır?",
    "opts": [
     "WHERE DATE = '2024'",
     "WHERE tarih = 2024",
     "HAVING YEAR = 2024",
     "WHERE YEAR(tarih) = 2024"
    ],
    "a": 3,
    "exp": "Tarihin yıl kısmı alınıp karşılaştırılır.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`DATE_SUB()` ne işe yarar?",
    "opts": [
     "Tarih ekler",
     "Tarihi siler",
     "Tarihten süre çıkarır",
     "Tarihi sıralar"
    ],
    "a": 2,
    "exp": "DATE_SUB(tarih, INTERVAL 7 DAY).",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`DAYOFWEEK('2024-01-01')` ne döndürür?",
    "opts": [
     "Haftanın gün numarası",
     "Yılın kaçıncı günü",
     "Ayın kaçıncı günü",
     "Toplam gün sayısı"
    ],
    "a": 0,
    "exp": "1 = Pazar … 7 = Cumartesi.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Hastanın doğum tarihinden yaşını hesaplamak için hangisi kullanılır?",
    "opts": [
     "DAY(dogum_tar)",
     "YEAR(NOW()) - YEAR(dogum_tar)",
     "MONTH(dogum_tar)",
     "DATE(dogum_tar)"
    ],
    "a": 1,
    "exp": "Bu yıl − doğum yılı.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "MySQL'de saklı yordam (stored procedure) oluşturmak için hangisi kullanılır?",
    "opts": [
     "DEFINE PROCEDURE",
     "CREATE PROCEDURE",
     "MAKE PROCEDURE",
     "BUILD PROCEDURE"
    ],
    "a": 1,
    "exp": "CREATE PROCEDURE ad(…) BEGIN … END",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Saklı yordamı çalıştırmak için hangi anahtar kelime kullanılır?",
    "opts": [
     "START",
     "RUN",
     "CALL",
     "EXEC"
    ],
    "a": 2,
    "exp": "CALL yordam_adi(…); (EXEC SQL Server'da).",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Saklı yordamda IN parametresi ne anlama gelir?",
    "opts": [
     "İkisi aynıdır",
     "Hem alır hem verir",
     "Değer döndürür",
     "Değer alır (içeriye)"
    ],
    "a": 3,
    "exp": "Dışarıdan yordama değer gelir.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Saklı yordamda OUT parametresi ne işe yarar?",
    "opts": [
     "Sorguyu siler",
     "Hem alır hem verir",
     "Sonucu dışa aktarır",
     "Değer alır"
    ],
    "a": 2,
    "exp": "Yordamın sonucu dışarı verilir.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "DELIMITER komutunun saklı yordamdaki amacı nedir?",
    "opts": [
     "Satır sonunu kaldırır",
     "Ayraç (bitiş) karakterini değiştirir",
     "Yordamı siler",
     "Tabloları böler"
    ],
    "a": 1,
    "exp": "Yordamın içindeki ; komutu bitirmesin diye ayraç // yapılır.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Saklı yordam içinde yerel değişken tanımlamak için hangisi kullanılır?",
    "opts": [
     "SET",
     "DEFINE",
     "LET",
     "DECLARE"
    ],
    "a": 3,
    "exp": "DECLARE toplam INT; değer atamak için SET.",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Saklı yordamı silmek için hangisi kullanılır?",
    "opts": [
     "ERASE PROCEDURE",
     "DROP PROCEDURE",
     "REMOVE PROCEDURE",
     "DELETE PROCEDURE"
    ],
    "a": 1,
    "exp": "DROP PROCEDURE ad;",
    "src": "Kahoot 14"
   },
   {
    "type": "mc",
    "topic": "gorunum",
    "q": "Saklı yordamda INOUT parametresi ne anlama gelir?",
    "opts": [
     "Yalnızca değer alır",
     "Hem değer alır hem verir",
     "Yalnızca değer verir",
     "Parametre almaz"
    ],
    "a": 1,
    "exp": "IN + OUT birlikte.",
    "src": "Kahoot 14"
   }
  ]
 },
 {
  "id": "kahoot1",
  "title": "Kahoot 1 · İlişkiler ve ER diyagramı",
  "group": "kahoot",
  "mode": "practice",
  "desc": "3 soru, derste oynanan Kahoot'un kendisi. Şıkka tıklayınca anında doğru/yanlış.",
  "questions": [
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Aşağıdakilerden hangisi 1:1 (bire bir) ilişkiye örnektir?",
    "opts": [
     "Öğrenci – Öğrenci Kartı",
     "Bölüm – Ders",
     "Yazar – Kitap",
     "Öğrenci – Ders"
    ],
    "a": 0,
    "exp": "Her öğrencinin tek kartı, her kartın tek öğrencisi var. Bölüm–Ders ve Yazar–Kitap 1:N, Öğrenci–Ders M:N.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "`ogrenci_karti` tablosunda 1:1 ilişkiyi garanti eden kelime hangisidir?",
    "opts": [
     "UNIQUE",
     "PRIMARY",
     "AUTO_INCREMENT",
     "DEFAULT"
    ],
    "a": 0,
    "exp": "FK sütunu (ogrenci_no) UNIQUE olunca aynı öğrenciye ikinci kart eklenemez; ilişki 1:1 kalır.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "(Doğru/Yanlış) Ahmet'e ikinci bir kart eklemeye çalıştığımızda MySQL'in hata vermesi, veritabanının yanlış tasarlandığını gösterir.",
    "opts": [
     "Doğru",
     "Yanlış"
    ],
    "a": 1,
    "exp": "Yanlış: hata, UNIQUE kısıtının doğru çalıştığını gösterir. Tasarım tam olarak bunu engellemek için yapıldı.",
    "src": "Kahoot"
   }
  ]
 },
 {
  "id": "kahoot2",
  "title": "Kahoot 2 · İlişkiler ve temel SQL (yazarak cevap)",
  "group": "kahoot",
  "mode": "practice",
  "desc": "9 soru, derste oynanan Kahoot'un kendisi. Cevabı yazıp Enter'a bas; anında kontrol.",
  "questions": [
   {
    "type": "fill",
    "topic": "iliskisel",
    "q": "Tablodaki her satırı tekil olarak tanımlayan sütuna ne ad verilir?",
    "code": "____",
    "ans": [
     "PRIMARY KEY",
     "primary",
     "PK",
     "birincil anahtar",
     "birincil",
     "primary key (birincil anahtar)"
    ],
    "cs": false,
    "exp": "PRIMARY KEY (birincil anahtar, PK).",
    "src": "Kahoot"
   },
   {
    "type": "fill",
    "topic": "iliskisel",
    "q": "Başka bir tablonun birincil anahtarına bağlanan sütuna ne ad verilir?",
    "code": "____",
    "ans": [
     "FOREIGN KEY",
     "foreign",
     "FK",
     "yabancı anahtar",
     "yabanci anahtar",
     "yabancı",
     "yabanci",
     "ikincil anahtar"
    ],
    "cs": false,
    "exp": "FOREIGN KEY (yabancı anahtar, FK).",
    "src": "Kahoot"
   },
   {
    "type": "fill",
    "topic": "iliskisel",
    "q": "1:1 ilişkide, yabancı anahtar sütununa ilişkinin bozulmaması için hangi kısıt eklenir?",
    "code": "____",
    "ans": [
     "UNIQUE",
     "tekil",
     "benzersiz"
    ],
    "cs": false,
    "exp": "UNIQUE: aynı FK değeri ikinci kez girilemez.",
    "src": "Kahoot"
   },
   {
    "type": "fill",
    "topic": "sql-giris",
    "q": "Tabloya yeni bir kayıt eklemek için hangi SQL komutu kullanılır?",
    "code": "____",
    "ans": [
     "INSERT INTO",
     "INSERT",
     "INSERT INTO ... VALUES",
     "INSERT INTO VALUES"
    ],
    "cs": false,
    "exp": "INSERT INTO tablo (sütunlar) VALUES (...);",
    "src": "Kahoot"
   },
   {
    "type": "fill",
    "topic": "iliskisel",
    "q": "Bölüm–Ders (1:N) ilişkisinde yabancı anahtar hangi tabloya eklenir?",
    "code": "____",
    "ans": [
     "ders",
     "ders tablosu",
     "ders tablosuna",
     "ders tablosuna (çok tarafı)",
     "çok tarafı",
     "cok tarafi"
    ],
    "cs": false,
    "exp": "1:N'de FK her zaman çok tarafına, yani ders tablosuna eklenir (bolum_no).",
    "src": "Kahoot"
   },
   {
    "type": "fill",
    "topic": "iliskisel",
    "q": "Öğrenci–Ders (M:N) ilişkisini kurabilmek için veritabanımıza eklediğimiz ara tablonun adı nedir?",
    "code": "____",
    "ans": [
     "ders_kaydi",
     "ders_kaydı",
     "ders kaydi",
     "ders kaydı",
     "derskaydi"
    ],
    "cs": false,
    "exp": "ders_kaydi: ogrenci_no ve ders_kodu FK'lerini tutar.",
    "src": "Kahoot"
   },
   {
    "type": "fill",
    "topic": "sql-giris",
    "q": "`ders` tablosunda `ders_kodu` INT ise, `ders_kaydi` tablosundaki `ders_kodu` hangi veri tipinde olmalıdır?",
    "code": "____",
    "ans": [
     "INT",
     "integer",
     "tam sayı",
     "tam sayi",
     "tamsayı",
     "tamsayi"
    ],
    "cs": false,
    "exp": "FK ile başvurduğu sütun aynı tipte olmalı: INT.",
    "src": "Kahoot"
   },
   {
    "type": "fill",
    "topic": "sql-giris",
    "q": "Önce hangi tabloya INSERT yapılmalıdır: `bolum` mu, `ders` mi?",
    "code": "____",
    "ans": [
     "bolum",
     "bölüm",
     "bolum tablosu",
     "bölüm tablosu",
     "bolum tablosuna",
     "bölüm tablosuna"
    ],
    "cs": false,
    "exp": "Ders, bolum_no ile bölüme bağlı; bölüm yoksa FK hatası alınır. Önce bolum.",
    "src": "Kahoot"
   },
   {
    "type": "fill",
    "topic": "iliskisel",
    "q": "`ders_kaydi` tablosundaki `harf_notu` bilgisi öğrenciye mi, derse mi, yoksa kayda mı aittir?",
    "code": "____",
    "ans": [
     "kayda",
     "kayıt",
     "kayit",
     "kayda ait",
     "ders kaydına",
     "ders kaydina",
     "ders_kaydi",
     "ders_kaydına",
     "kayda aittir"
    ],
    "cs": false,
    "exp": "Not belli bir öğrencinin belli bir dersteki kaydına aittir; bu yüzden ara tabloda durur.",
    "src": "Kahoot"
   }
  ]
 },
 {
  "id": "kahoot3",
  "title": "Kahoot 3 · İlişkisel VT ve SQL temel kavramlar",
  "group": "kahoot",
  "mode": "practice",
  "desc": "20 soru, derste oynanan Kahoot'un kendisi. Şıkka tıklayınca anında doğru/yanlış.",
  "questions": [
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Bir kişinin yalnızca bir pasaportu olabiliyorsa kişi – pasaport ilişkisi hangisidir?",
    "opts": [
     "İlişki yoktur",
     "Çoka çok (M:N)",
     "Bire çok (1:N)",
     "Bire bir (1:1)"
    ],
    "a": 3,
    "exp": "Her iki taraf da en fazla bir: 1:1.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Bir müşterinin birden çok siparişi olabiliyorsa müşteri – sipariş ilişkisi hangisidir?",
    "opts": [
     "İlişki kurulamaz",
     "1:N",
     "M:N",
     "1:1"
    ],
    "a": 1,
    "exp": "Bir müşteri → çok sipariş, bir sipariş → tek müşteri: 1:N.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Çoka çok (M:N) ilişki ilişkisel veritabanında nasıl kurulur?",
    "opts": [
     "Bir tabloya liste olarak yazılır",
     "Tek tabloda birleştirilir",
     "Sadece FOREIGN KEY yeterlidir",
     "Ara (bağlantı) tablo oluşturulur"
    ],
    "a": 3,
    "exp": "İki tarafın PK'lerini FK olarak tutan ara tablo (ör. ders_kaydi).",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Bir tablodaki her satırı benzersiz olarak tanımlayan alana ne denir?",
    "opts": [
     "FOREIGN KEY",
     "INDEX",
     "DEFAULT",
     "PRIMARY KEY"
    ],
    "a": 3,
    "exp": "PRIMARY KEY: benzersiz ve NULL olamaz.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "FOREIGN KEY (yabancı anahtar) ne işe yarar?",
    "opts": [
     "Tekrarlı kayıtları siler",
     "Sorguları otomatik hızlandırır",
     "Sütunu otomatik artırır",
     "Tablolar arası bilgi bütünlüğünü korur"
    ],
    "a": 3,
    "exp": "Referans bütünlüğü: FK değeri başvurduğu tabloda olmalı.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Bir sütunda aynı değerin iki kez girilmesini engelleyen kısıt hangisidir?",
    "opts": [
     "CHECK",
     "UNIQUE",
     "NOT NULL",
     "DEFAULT"
    ],
    "a": 1,
    "exp": "UNIQUE tekrar eden değeri engeller.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "ER diyagramında varlıklar (entity) genellikle hangi şekille gösterilir?",
    "opts": [
     "Ok",
     "Eşkenar dörtgen",
     "Dikdörtgen",
     "Elips"
    ],
    "a": 2,
    "exp": "Varlık dikdörtgen, nitelik elips, ilişki eşkenar dörtgen.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Uzunluğu değişen metinler (ad, adres) için en uygun veri tipi hangisidir?",
    "opts": [
     "DATE",
     "INT",
     "CHAR(2)",
     "VARCHAR"
    ],
    "a": 3,
    "exp": "VARCHAR(n) değişken uzunluklu metin.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "NULL değer içeren kayıtları bulmak için doğru koşul hangisidir?",
    "opts": [
     "IS NULL",
     "= NULL",
     "= ''",
     "== NULL"
    ],
    "a": 0,
    "exp": "NULL = ile karşılaştırılamaz; IS NULL yazılır.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "`LIKE 'A%'` koşulu hangi değerleri getirir?",
    "opts": [
     "A ile başlayanları",
     "A ile bitenleri",
     "İçinde A geçenleri",
     "Sadece 'A' olanları"
    ],
    "a": 0,
    "exp": "% herhangi sayıda karakter: A ile başlayan her şey.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Sonuçta tekrar eden satırları tek göstermek için hangisi kullanılır?",
    "opts": [
     "DISTINCT",
     "DIFFERENT",
     "SINGLE",
     "UNIQUE"
    ],
    "a": 0,
    "exp": "SELECT DISTINCT tekrarları atar. UNIQUE bir kısıttır.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "`ORDER BY sütun DESC` ifadesi ne yapar?",
    "opts": [
     "Küçükten büyüğe sıralar",
     "Tekrarları siler",
     "İlk satırı getirir",
     "Büyükten küçüğe (azalan) sıralar"
    ],
    "a": 3,
    "exp": "DESC azalan, ASC (varsayılan) artan.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Sorgu sonucunu ilk 5 satırla sınırlamak için MySQL'de hangisi kullanılır?",
    "opts": [
     "LIMIT 5",
     "TOP 5",
     "ROWNUM 5",
     "FIRST 5"
    ],
    "a": 0,
    "exp": "MySQL: LIMIT. TOP SQL Server'da, ROWNUM Oracle'da.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`COUNT(*)` ile `COUNT(sütun)` arasındaki fark nedir?",
    "opts": [
     "COUNT(sütun) NULL'ları saymaz",
     "COUNT(sütun) tekrarları saymaz",
     "Fark yoktur",
     "COUNT(*) NULL'ları saymaz"
    ],
    "a": 0,
    "exp": "COUNT(*) bütün satırları sayar; COUNT(sütun) NULL olmayanları.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Bir sütunun ortalamasını hesaplayan fonksiyon hangisidir?",
    "opts": [
     "COUNT",
     "AVG",
     "SUM",
     "MEAN"
    ],
    "a": 1,
    "exp": "AVG ortalama. SQL'de MEAN yok.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Kayıtları gruplayıp her grup için toplam/sayı almak için hangisi kullanılır?",
    "opts": [
     "LIMIT",
     "GROUP BY",
     "DISTINCT",
     "ORDER BY"
    ],
    "a": 1,
    "exp": "GROUP BY + toplama fonksiyonu.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "WHERE ile HAVING arasındaki temel fark nedir?",
    "opts": [
     "HAVING gruplara, WHERE satırlara koşul koyar",
     "İkisi aynıdır",
     "WHERE gruplara, HAVING satırlara koşul koyar",
     "HAVING sadece JOIN'de kullanılır"
    ],
    "a": 0,
    "exp": "WHERE gruplamadan önce satırları, HAVING sonra grupları süzer.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Yalnızca iki tabloda da eşleşen kayıtları getiren JOIN türü hangisidir?",
    "opts": [
     "CROSS JOIN",
     "LEFT JOIN",
     "RIGHT JOIN",
     "INNER JOIN"
    ],
    "a": 3,
    "exp": "INNER JOIN sadece eşleşenleri getirir.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "LEFT JOIN'de sağ tabloda eşleşme yoksa o sütunlara ne gelir?",
    "opts": [
     "Boş metin",
     "0",
     "Satır listelenmez",
     "NULL"
    ],
    "a": 3,
    "exp": "Sol satır yine gelir; sağ sütunlar NULL olur.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "İki tabloyu JOIN ile birleştirirken ON kısmında genellikle hangi alanlar eşleştirilir?",
    "opts": [
     "PRIMARY KEY ile FOREIGN KEY",
     "İki tablonun PRIMARY KEY'leri",
     "İki tablonun ilk sütunları",
     "Aynı veri tipindeki tüm sütunlar"
    ],
    "a": 0,
    "exp": "ON k.ogrenci_no = o.ogrenci_no: FK ile başvurduğu PK.",
    "src": "Kahoot"
   }
  ]
 },
 {
  "id": "kahoot4",
  "title": "Kahoot 4 · SQL ve sorgulama (GROUP BY, HAVING)",
  "group": "kahoot",
  "mode": "practice",
  "desc": "20 soru, derste oynanan Kahoot'un kendisi. Şıkka tıklayınca anında doğru/yanlış.",
  "questions": [
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Öğrenci ile öğrenci kartı arasındaki ilişki türü hangisidir?",
    "opts": [
     "İlişki yoktur",
     "1:N",
     "1:1",
     "M:N"
    ],
    "a": 2,
    "exp": "Bir öğrenci → bir kart: 1:1.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Bölüm – Ders (bir bölümün çok dersi var) ilişkisinde FOREIGN KEY hangi tabloya eklenir?",
    "opts": [
     "Ara tabloya",
     "İki tabloya da",
     "Ders tablosuna",
     "Bölüm tablosuna"
    ],
    "a": 2,
    "exp": "FK çok tarafına: ders.bolum_no.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "M:N ilişkiyi tablolara dönüştürmek için ne gerekir?",
    "opts": [
     "AUTO_INCREMENT",
     "Ara (bağlantı) tablo",
     "UNIQUE kısıtı",
     "Tek bir FOREIGN KEY"
    ],
    "a": 1,
    "exp": "M:N → ara tablo.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "PRIMARY KEY için hangisi DOĞRUDUR?",
    "opts": [
     "Her tabloda birden çok olabilir",
     "Benzersiz ve NULL olamaz",
     "Tekrar edebilir",
     "NULL olabilir"
    ],
    "a": 1,
    "exp": "PK = UNIQUE + NOT NULL, tabloda bir tane.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "İki tabloda yalnızca eşleşen kayıtları getiren JOIN hangisidir?",
    "opts": [
     "CROSS JOIN",
     "INNER JOIN",
     "RIGHT JOIN",
     "LEFT JOIN"
    ],
    "a": 1,
    "exp": "INNER JOIN.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Hiç siparişi olmayan müşterileri de listelemek için hangisi kullanılır?",
    "opts": [
     "WHERE ile eşitlik",
     "LEFT JOIN (müşteriler solda)",
     "GROUP BY",
     "INNER JOIN"
    ],
    "a": 1,
    "exp": "Soldaki (müşteriler) bütün satırlar gelir; siparişi olmayanın sipariş sütunları NULL.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Bir sütundaki değerlerin ortalamasını veren fonksiyon hangisidir?",
    "opts": [
     "AVG()",
     "SUM()",
     "COUNT()",
     "MAX()"
    ],
    "a": 0,
    "exp": "AVG ortalama.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`COUNT(*)` ile `COUNT(sutun)` farkı nedir?",
    "opts": [
     "COUNT(sutun) NULL değerleri saymaz",
     "COUNT(*) NULL saymaz",
     "Fark yoktur",
     "COUNT(sutun) daha hızlıdır"
    ],
    "a": 0,
    "exp": "COUNT(sutun) NULL'ları atlar.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`SELECT MAX(fiyat) FROM urunler;` sorgusu kaç satır döndürür?",
    "opts": [
     "Kategori sayısı kadar",
     "Tablodaki satır sayısı kadar",
     "0",
     "1"
    ],
    "a": 3,
    "exp": "GROUP BY yoksa toplama fonksiyonu tek satır (tek değer) döndürür.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "GROUP BY ne işe yarar?",
    "opts": [
     "Tekrarları siler",
     "Aynı değere sahip satırları gruplar",
     "Satırları sıralar",
     "Tabloları birleştirir"
    ],
    "a": 1,
    "exp": "Aynı değerli satırları bir grup yapar.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`SELECT kategori_id, COUNT(*) FROM urunler GROUP BY kategori_id;` ne listeler?",
    "opts": [
     "Her kategorideki ürün sayısını",
     "Kategori adlarını",
     "En pahalı ürünü",
     "Toplam ürün sayısını"
    ],
    "a": 0,
    "exp": "Her kategori_id için bir satır ve o gruptaki ürün sayısı.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "GROUP BY kullanılan sorguda SELECT'e hangi sütunlar yazılabilir?",
    "opts": [
     "Tüm sütunlar",
     "Gruplanan sütunlar ve aggregate fonksiyonlar",
     "Sadece sayısal sütunlar",
     "Sadece PRIMARY KEY"
    ],
    "a": 1,
    "exp": "Gruplanmayan bir sütun yazılırsa hangi değerin geleceği belli olmaz (ONLY_FULL_GROUP_BY hatası).",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Birden fazla sütuna göre gruplama nasıl yazılır?",
    "opts": [
     "GROUP sehir BY yil",
     "GROUP BY sehir AND yil",
     "GROUP BY sehir, yil",
     "GROUP BY (sehir + yil)"
    ],
    "a": 2,
    "exp": "Sütunlar virgülle ayrılır.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "HAVING ne zaman kullanılır?",
    "opts": [
     "Tablo birleştirmek için",
     "Gruplamadan önce filtrelemek için",
     "Gruplanmış sonuçları filtrelemek için",
     "Sıralama yapmak için"
    ],
    "a": 2,
    "exp": "HAVING grupları süzer.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "WHERE içinde aggregate fonksiyon (ör. COUNT) kullanılabilir mi?",
    "opts": [
     "Sadece LIMIT ile birlikte",
     "Sadece SUM kullanılabilir",
     "Evet, her zaman",
     "Hayır, HAVING kullanılır"
    ],
    "a": 3,
    "exp": "WHERE'de COUNT → #1111 Invalid use of group function.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "5'ten fazla ürünü olan kategoriler için doğru koşul hangisidir?",
    "opts": [
     "ORDER BY COUNT(*) > 5",
     "HAVING COUNT(*) > 5",
     "WHERE COUNT(*) > 5",
     "GROUP BY COUNT(*) > 5"
    ],
    "a": 1,
    "exp": "Toplama fonksiyonlu koşul HAVING'e.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "İptal edilen siparişleri hesaba katmadan toplam almak için koşul nereye yazılır?",
    "opts": [
     "GROUP BY durum",
     "WHERE durum <> 'iptal'",
     "HAVING durum <> 'iptal'",
     "ORDER BY durum"
    ],
    "a": 1,
    "exp": "İptal tek tek satırların özelliği; gruplamadan önce WHERE ile atılır.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Doğru cümle sırası hangisidir?",
    "opts": [
     "SELECT-FROM-GROUP BY-WHERE-HAVING",
     "SELECT-GROUP BY-FROM-WHERE-ORDER BY",
     "SELECT-FROM-WHERE-HAVING-GROUP BY",
     "SELECT-FROM-WHERE-GROUP BY-HAVING-ORDER BY"
    ],
    "a": 3,
    "exp": "SELECT … FROM … WHERE … GROUP BY … HAVING … ORDER BY …",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Sorgu çalışırken hangisi önce işlenir?",
    "opts": [
     "SELECT",
     "HAVING",
     "ORDER BY",
     "WHERE"
    ],
    "a": 3,
    "exp": "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Toplam satışa göre en çok satan kategoriyi bulmak için GROUP BY'a hangi ikili eklenir?",
    "opts": [
     "WHERE + LIMIT",
     "ORDER BY ... DESC LIMIT",
     "JOIN + UNION",
     "HAVING + DISTINCT"
    ],
    "a": 1,
    "exp": "Toplama göre azalan sırala, ilk satırı al: ORDER BY SUM(...) DESC LIMIT 1.",
    "src": "Kahoot"
   }
  ]
 },
 {
  "id": "kahoot5",
  "title": "Kahoot 5 · Veritabanı ve SQL bilgi yarışması",
  "group": "kahoot",
  "mode": "practice",
  "desc": "20 soru, derste oynanan Kahoot'un kendisi. Şıkka tıklayınca anında doğru/yanlış.",
  "questions": [
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Bir yazarın birden çok kitabı olabilir, her kitabın tek yazarı vardır. İlişki türü nedir?",
    "opts": [
     "1:1",
     "M:N",
     "İlişki yoktur",
     "1:N"
    ],
    "a": 3,
    "exp": "Yazar → çok kitap, kitap → tek yazar: 1:N.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Her ülkenin tek başkenti vardır, her başkent tek ülkeye aittir. İlişki türü nedir?",
    "opts": [
     "1:1",
     "M:N",
     "1:N",
     "Mutlaka ara tablo gerekir"
    ],
    "a": 0,
    "exp": "İki taraf da tek: 1:1.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "Doktor–Hasta M:N ilişkisinde muayene tarihi gibi bilgiler nerede saklanır?",
    "opts": [
     "Saklanamaz",
     "Doktor tablosunda",
     "Ara (bağlantı) tabloda",
     "Hasta tablosunda"
    ],
    "a": 2,
    "exp": "Tarih belli bir doktor–hasta eşleşmesine ait; ara tabloda durur (harf_notu gibi).",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "Yeni bir veritabanı oluşturan komut hangisidir?",
    "opts": [
     "NEW DATABASE Kutuphane;",
     "MAKE DATABASE Kutuphane;",
     "CREATE DATABASE Kutuphane;",
     "CREATE TABLE Kutuphane;"
    ],
    "a": 2,
    "exp": "CREATE DATABASE; CREATE TABLE tablo oluşturur.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "PRIMARY KEY için **doğru olanların hepsi** hangi şıkta verilmiştir?",
    "opts": [
     "NULL değer alamaz + Her kaydı benzersiz tanımlar",
     "Değerleri tekrar edebilir + NULL değer alamaz",
     "Bir tabloda iki ayrı PRIMARY KEY olabilir + Her kaydı benzersiz tanımlar",
     "Sadece: Her kaydı benzersiz tanımlar"
    ],
    "a": 0,
    "exp": "Kahoot'ta birden çok doğrulu soruydu. PK tekrar edemez ve tabloda bir tanedir (birden çok sütundan oluşabilir ama yine tek PK).",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "iliskisel",
    "q": "FOREIGN KEY için **doğru olanların hepsi** hangi şıkta verilmiştir?",
    "opts": [
     "Bir tabloda birden çok FK olabilir + Referans bütünlüğünü sağlar + Başka tablonun PK'sini referans eder",
     "FK sütunu her zaman PK olmalıdır + Referans bütünlüğünü sağlar",
     "Referans bütünlüğünü sağlar + Başka tablonun PK'sini referans eder",
     "Bir tabloda birden çok FK olabilir + FK sütunu her zaman PK olmalıdır"
    ],
    "a": 0,
    "exp": "Kahoot'ta birden çok doğrulu soruydu. FK'nin PK olması gerekmez (ders.bolum_no FK ama PK değil). ders_kaydi'nde 2 FK var.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`Siparis` tablosunda `MusteriID` için doğru FOREIGN KEY tanımı hangisidir?",
    "opts": [
     "FOREIGN KEY (MusteriID) REFERENCES Musteri(MusteriID)",
     "FOREIGN KEY (MusteriID) LINKS Musteri(MusteriID)",
     "REFERENCES (MusteriID) FROM Musteri",
     "FOREIGN KEY Musteri JOINS MusteriID"
    ],
    "a": 0,
    "exp": "Kalıp: FOREIGN KEY (sütun) REFERENCES tablo(sütun).",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`Musteri` tablosunda olmayan `MusteriID=9` ile `Siparis` eklenirse ne olur?",
    "opts": [
     "Musteri otomatik eklenir",
     "Kayıt eklenir",
     "FOREIGN KEY hatası alınır",
     "MusteriID NULL olur"
    ],
    "a": 2,
    "exp": "Referans bütünlüğü: #1452 Cannot add or update a child row.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`Ogrenci(No PK, Ad NOT NULL, Bolum)`. Hangi INSERT **hatalıdır**?",
    "opts": [
     "INSERT INTO Ogrenci (No,Ad) VALUES (4,'Ece');",
     "INSERT INTO Ogrenci VALUES (2,NULL,'BP');",
     "INSERT INTO Ogrenci (Ad,No) VALUES ('Can',3);",
     "INSERT INTO Ogrenci VALUES (1,'Ali','BP');"
    ],
    "a": 1,
    "exp": "Ad NOT NULL; NULL verilemez. Sütun sırası belirtilirse (Ad,No) farklı sırada yazmak serbest.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sql-giris",
    "q": "`No=1` tabloda zaten varken `INSERT INTO Ogrenci VALUES (1,'Su','BP');` çalışırsa?",
    "opts": [
     "Kayıt eklenir",
     "Duplicate entry (PK) hatası",
     "Eski kayıt güncellenir",
     "No otomatik 2 olur"
    ],
    "a": 1,
    "exp": "PK tekrar edemez: #1062 Duplicate entry '1' for key 'PRIMARY'.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "`Musteri`: 1, 2, 3. `Siparis.MusteriID`: 1, 1, 2. INNER JOIN (MusteriID) kaç satır döner?",
    "opts": [
     "6",
     "2",
     "3",
     "4"
    ],
    "a": 2,
    "exp": "Her sipariş satırı bir müşteriyle eşleşir: 3 satır. Müşteri 3 gelmez.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri2",
    "q": "Aynı tablolarda `Musteri LEFT JOIN Siparis` kaç satır döner?",
    "opts": [
     "6",
     "4",
     "3",
     "2",
     "5"
    ],
    "a": 1,
    "exp": "3 eşleşen + siparişi olmayan müşteri 3 için NULL'lu 1 satır = 4.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`SELECT UrunID, SUM(Miktar) FROM Satis GROUP BY UrunID;` ne döndürür?",
    "opts": [
     "En çok satan ürün",
     "Her ürünün satış sayısı",
     "Her ürünün toplam satış miktarı",
     "Tüm satışların toplamı"
    ],
    "a": 2,
    "exp": "SUM(Miktar) miktarları toplar; satış sayısı COUNT(*) olurdu.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "GROUP BY için **doğru olanların hepsi** hangi şıkta verilmiştir?",
    "opts": [
     "Aggregate fonksiyonlarla kullanılır + Satırları gruplara ayırır + Her grup için özet satır üretir",
     "Sadece sayısal sütunlarda kullanılır + Satırları gruplara ayırır",
     "Satırları gruplara ayırır + Her grup için özet satır üretir",
     "Sadece sayısal sütunlarda kullanılır + Aggregate fonksiyonlarla kullanılır"
    ],
    "a": 0,
    "exp": "Kahoot'ta birden çok doğrulu soruydu. Metin sütunuyla (sehir) da gruplanır.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "COUNT için **doğru olanların hepsi** hangi şıkta verilmiştir?",
    "opts": [
     "COUNT(*) NULL içeren satırları da sayar + COUNT(DISTINCT sutun) benzersizleri sayar + COUNT(sutun) NULL değerleri saymaz",
     "COUNT(*) NULL içeren satırları da sayar + Sadece GROUP BY ile kullanılabilir",
     "COUNT(DISTINCT sutun) benzersizleri sayar + COUNT(sutun) NULL değerleri saymaz",
     "Sadece GROUP BY ile kullanılabilir + COUNT(sutun) NULL değerleri saymaz"
    ],
    "a": 0,
    "exp": "Kahoot'ta birden çok doğrulu soruydu. COUNT GROUP BY olmadan da kullanılır: SELECT COUNT(*) FROM musteriler;",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`SELECT m.Ad, ___(s.Tutar) FROM Musteri m JOIN Siparis s ON ...` Müşteri başına TOPLAM için boşluğa ne gelir?",
    "opts": [
     "COUNT",
     "SUM",
     "AVG",
     "MAX"
    ],
    "a": 1,
    "exp": "Toplam tutar: SUM.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "Müşteri başına toplam sorgusunun sonuna hangisi eklenmelidir?",
    "opts": [
     "ORDER BY m.Ad",
     "HAVING m.Ad",
     "GROUP BY m.Ad",
     "WHERE m.Ad"
    ],
    "a": 2,
    "exp": "Müşteri başına = müşteriye göre grupla.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "ileri1",
    "q": "`SELECT Sehir, COUNT(*) FROM Musteri GROUP BY Sehir WHERE COUNT(*) > 2;` sorgusundaki **hataların hepsi** hangi şıkta verilmiştir?",
    "opts": [
     "WHERE, GROUP BY'dan önce gelmeli + Aggregate koşul için HAVING kullanılmalı",
     "COUNT(*) yanlış yazılmış",
     "Hata yok",
     "Sadece: WHERE, GROUP BY'dan önce gelmeli"
    ],
    "a": 0,
    "exp": "Kahoot'ta birden çok doğrulu soruydu. Doğrusu: … GROUP BY Sehir HAVING COUNT(*) > 2;",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Fiyatlar: Kalem 10, Defter 25, Cetvel 40, Çanta 60. `WHERE Fiyat BETWEEN 25 AND 40` ne döndürür?",
    "opts": [
     "Defter ve Cetvel",
     "Cetvel ve Çanta",
     "Kalem, Defter, Cetvel",
     "Sadece Defter"
    ],
    "a": 0,
    "exp": "BETWEEN uç değerleri dahil eder: 25 ≤ fiyat ≤ 40.",
    "src": "Kahoot"
   },
   {
    "type": "mc",
    "topic": "sorgular",
    "q": "Soyadı 'K' ile başlayanları bulmak için doğru koşul hangisidir?",
    "opts": [
     "Soyad IN ('K')",
     "Soyad LIKE '%K'",
     "Soyad LIKE 'K%'",
     "Soyad = 'K%'"
    ],
    "a": 2,
    "exp": "'K%' K ile başlayan; '%K' K ile biten. = ile joker çalışmaz.",
    "src": "Kahoot"
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
   "q": "Sorgu kaç satır döndürür?",
   "opts": [
    "3",
    "2",
    "5",
    "1",
    "10"
   ],
   "a": 0,
   "exp": "Gruplar: İzmir 3, İstanbul 3, Ankara 2, Gaziantep 1, Bursa 1. HAVING COUNT(*) > 1 → İzmir, İstanbul, Ankara (uygulama soru 7).",
   "code": "SELECT sehir, COUNT(*) FROM musteriler GROUP BY sehir HAVING COUNT(*) > 1;",
   "tables": [
    {
     "name": "musteriler",
     "cols": [
      "musteri_id",
      "ad",
      "sehir"
     ],
     "rows": [
      [
       "1",
       "Ayşe",
       "İzmir"
      ],
      [
       "2",
       "Mehmet",
       "İstanbul"
      ],
      [
       "3",
       "Zeynep",
       "İzmir"
      ],
      [
       "4",
       "Ahmet",
       "Ankara"
      ],
      [
       "5",
       "Elif",
       "İstanbul"
      ],
      [
       "6",
       "Can",
       "Gaziantep"
      ],
      [
       "7",
       "Deniz",
       "İzmir"
      ],
      [
       "8",
       "Selin",
       "Ankara"
      ],
      [
       "9",
       "Emre",
       "Bursa"
      ],
      [
       "10",
       "Merve",
       "İstanbul"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Her şehirdeki müşteri sayısını veren sorgu kaç satır döndürür?",
   "opts": [
    "10",
    "6",
    "5",
    "3",
    "1"
   ],
   "a": 2,
   "exp": "GROUP BY her farklı şehir için bir satır üretir: İzmir, İstanbul, Ankara, Gaziantep, Bursa (uygulama soru 3).",
   "code": "SELECT sehir, COUNT(*) AS musteri_sayisi FROM musteriler GROUP BY sehir;",
   "tables": [
    {
     "name": "musteriler",
     "cols": [
      "musteri_id",
      "ad",
      "sehir"
     ],
     "rows": [
      [
       "1",
       "Ayşe",
       "İzmir"
      ],
      [
       "2",
       "Mehmet",
       "İstanbul"
      ],
      [
       "3",
       "Zeynep",
       "İzmir"
      ],
      [
       "4",
       "Ahmet",
       "Ankara"
      ],
      [
       "5",
       "Elif",
       "İstanbul"
      ],
      [
       "6",
       "Can",
       "Gaziantep"
      ],
      [
       "7",
       "Deniz",
       "İzmir"
      ],
      [
       "8",
       "Selin",
       "Ankara"
      ],
      [
       "9",
       "Emre",
       "Bursa"
      ],
      [
       "10",
       "Merve",
       "İstanbul"
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
    "1",
    "9",
    "3",
    "10",
    "5"
   ],
   "a": 3,
   "exp": "COUNT(*) tablodaki bütün satırları sayar (uygulama soru 1).",
   "code": "SELECT COUNT(*) FROM musteriler;",
   "tables": [
    {
     "name": "musteriler",
     "cols": [
      "musteri_id",
      "ad",
      "sehir"
     ],
     "rows": [
      [
       "1",
       "Ayşe",
       "İzmir"
      ],
      [
       "2",
       "Mehmet",
       "İstanbul"
      ],
      [
       "3",
       "Zeynep",
       "İzmir"
      ],
      [
       "4",
       "Ahmet",
       "Ankara"
      ],
      [
       "5",
       "Elif",
       "İstanbul"
      ],
      [
       "6",
       "Can",
       "Gaziantep"
      ],
      [
       "7",
       "Deniz",
       "İzmir"
      ],
      [
       "8",
       "Selin",
       "Ankara"
      ],
      [
       "9",
       "Emre",
       "Bursa"
      ],
      [
       "10",
       "Merve",
       "İstanbul"
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
    "10",
    "5",
    "3",
    "1",
    "4"
   ],
   "a": 1,
   "exp": "COUNT(DISTINCT sehir) farklı şehirleri sayar: İzmir, İstanbul, Ankara, Gaziantep, Bursa.",
   "code": "SELECT COUNT(DISTINCT sehir) FROM musteriler;",
   "tables": [
    {
     "name": "musteriler",
     "cols": [
      "musteri_id",
      "ad",
      "sehir"
     ],
     "rows": [
      [
       "1",
       "Ayşe",
       "İzmir"
      ],
      [
       "2",
       "Mehmet",
       "İstanbul"
      ],
      [
       "3",
       "Zeynep",
       "İzmir"
      ],
      [
       "4",
       "Ahmet",
       "Ankara"
      ],
      [
       "5",
       "Elif",
       "İstanbul"
      ],
      [
       "6",
       "Can",
       "Gaziantep"
      ],
      [
       "7",
       "Deniz",
       "İzmir"
      ],
      [
       "8",
       "Selin",
       "Ankara"
      ],
      [
       "9",
       "Emre",
       "Bursa"
      ],
      [
       "10",
       "Merve",
       "İstanbul"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucunda \"Teslim Edildi\" satırındaki sayı kaçtır?",
   "opts": [
    "3",
    "1",
    "6",
    "4",
    "2"
   ],
   "a": 0,
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
    "6",
    "3",
    "2",
    "1",
    "0"
   ],
   "a": 3,
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
    "3",
    "1",
    "2, 3",
    "1, 2, 3",
    "1, 2"
   ],
   "a": 4,
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
    "1570.00",
    "1250.00",
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
    "2",
    "8, 9",
    "8",
    "1, 2, 8",
    "1, 8"
   ],
   "a": 2,
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
    "3400.00",
    "1250.00",
    "410.00",
    "320.00",
    "5380.00"
   ],
   "a": 0,
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
    "ad sütunu GROUP BY'da yok ve toplama fonksiyonu içinde değil",
    "Sorun yoktur",
    "GROUP BY'dan sonra WHERE gelmeli",
    "sehir sütunu SELECT'te olamaz",
    "COUNT(*) GROUP BY ile kullanılamaz"
   ],
   "a": 0,
   "exp": "Bir şehirde birden çok ad var; hangisinin yazılacağı belli değil (ONLY_FULL_GROUP_BY hatası).",
   "code": "SELECT sehir, ad, COUNT(*) FROM musteriler GROUP BY sehir;"
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "İptal edilen siparişler hariç, cirosu 5000 TL'yi geçen şehirler listelenecek. \"İptal olmasın\" koşulu sorgunun hangi bölümüne yazılır?",
   "opts": [
    "ORDER BY",
    "HAVING",
    "GROUP BY",
    "WHERE",
    "SELECT"
   ],
   "a": 3,
   "exp": "İptal tek tek satırların özelliğidir, gruplamadan önce WHERE ile atılır; 5000 koşulu ise HAVING'dedir (uygulama soru 10)."
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu kaç satır döndürür?",
   "opts": [
    "1",
    "0",
    "4",
    "3",
    "2"
   ],
   "a": 4,
   "exp": "Önce WHERE iptalleri atar. Kalan cirolar: İstanbul 6500, Ankara 5500, İzmir 3000. HAVING > 5000: İstanbul ve Ankara (uygulama soru 10).",
   "code": "SELECT sehir, SUM(tutar) AS ciro\nFROM satislar\nWHERE durum <> 'İptal'\nGROUP BY sehir\nHAVING SUM(tutar) > 5000\nORDER BY ciro DESC;",
   "tables": [
    {
     "name": "satislar",
     "cols": [
      "sehir",
      "durum",
      "tutar"
     ],
     "rows": [
      [
       "İstanbul",
       "Teslim Edildi",
       "4000.00"
      ],
      [
       "İstanbul",
       "Kargoda",
       "2500.00"
      ],
      [
       "İzmir",
       "Teslim Edildi",
       "3000.00"
      ],
      [
       "İzmir",
       "İptal",
       "4000.00"
      ],
      [
       "Ankara",
       "Teslim Edildi",
       "3500.00"
      ],
      [
       "Ankara",
       "Teslim Edildi",
       "2000.00"
      ],
      [
       "Gaziantep",
       "İptal",
       "6000.00"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucunun ilk satırındaki şehir hangisidir?",
   "opts": [
    "İstanbul",
    "Boş sonuç",
    "Ankara",
    "İzmir",
    "Gaziantep"
   ],
   "a": 0,
   "exp": "ORDER BY ciro DESC: İstanbul 6500 > Ankara 5500 (uygulama soru 10).",
   "code": "SELECT sehir, SUM(tutar) AS ciro\nFROM satislar\nWHERE durum <> 'İptal'\nGROUP BY sehir\nHAVING SUM(tutar) > 5000\nORDER BY ciro DESC;",
   "tables": [
    {
     "name": "satislar",
     "cols": [
      "sehir",
      "durum",
      "tutar"
     ],
     "rows": [
      [
       "İstanbul",
       "Teslim Edildi",
       "4000.00"
      ],
      [
       "İstanbul",
       "Kargoda",
       "2500.00"
      ],
      [
       "İzmir",
       "Teslim Edildi",
       "3000.00"
      ],
      [
       "İzmir",
       "İptal",
       "4000.00"
      ],
      [
       "Ankara",
       "Teslim Edildi",
       "3500.00"
      ],
      [
       "Ankara",
       "Teslim Edildi",
       "2000.00"
      ],
      [
       "Gaziantep",
       "İptal",
       "6000.00"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Bu sorgudan `WHERE durum <> 'İptal'` satırı silinirse kaç satır döner?",
   "opts": [
    "2",
    "4",
    "0",
    "1",
    "3"
   ],
   "a": 1,
   "exp": "İptaller de toplanır: İzmir 7000, İstanbul 6500, Gaziantep 6000, Ankara 5500; hepsi 5000'i geçer (uygulama soru 10).",
   "code": "SELECT sehir, SUM(tutar) AS ciro\nFROM satislar\nWHERE durum <> 'İptal'\nGROUP BY sehir\nHAVING SUM(tutar) > 5000\nORDER BY ciro DESC;",
   "tables": [
    {
     "name": "satislar",
     "cols": [
      "sehir",
      "durum",
      "tutar"
     ],
     "rows": [
      [
       "İstanbul",
       "Teslim Edildi",
       "4000.00"
      ],
      [
       "İstanbul",
       "Kargoda",
       "2500.00"
      ],
      [
       "İzmir",
       "Teslim Edildi",
       "3000.00"
      ],
      [
       "İzmir",
       "İptal",
       "4000.00"
      ],
      [
       "Ankara",
       "Teslim Edildi",
       "3500.00"
      ],
      [
       "Ankara",
       "Teslim Edildi",
       "2000.00"
      ],
      [
       "Gaziantep",
       "İptal",
       "6000.00"
      ]
     ]
    }
   ]
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "En az 2 sipariş vermiş müşterileri listeleyen sorgu kaç satır döndürür?",
   "opts": [
    "6",
    "1",
    "2",
    "3",
    "0"
   ],
   "a": 2,
   "exp": "Müşteri bazında: 1 → 3, 2 → 2, 3 → 1 sipariş. HAVING COUNT(*) >= 2: müşteri 1 ve 2 (uygulama soru 8).",
   "code": "SELECT musteri_id, COUNT(*) AS siparis_sayisi\nFROM siparisler\nGROUP BY musteri_id\nHAVING COUNT(*) >= 2;",
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
   "q": "`AVG` fonksiyonu NULL değerleri nasıl ele alır?",
   "opts": [
    "Hata verir",
    "En büyük değer yapar",
    "Sonucu NULL yapar",
    "Hesaba katmaz; NULL olmayanların ortalamasını alır",
    "0 olarak sayar"
   ],
   "a": 3,
   "exp": "Not: 10, NULL, 20 → AVG = 15, (10+0+20)/3 değil."
  },
  {
   "type": "mc",
   "topic": "ileri1",
   "q": "Sorgu sonucu kaçtır?",
   "opts": [
    "NULL",
    "10.0000",
    "15.0000",
    "30",
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
    "2 | 3",
    "2 | 2",
    "3 | 3",
    "3 | 2",
    "3 | 0"
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
    "Ortalama",
    "Satır sayısı",
    "Toplam",
    "En büyük değer"
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
    "Gruplamadan önce satırları süzer",
    "Sonucu sıralar",
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
    "Eşleşmeyen satırları",
    "Sağdaki tablonun bütün satırlarını",
    "Her satırı her satırla",
    "Soldaki tablonun bütün satırlarını"
   ],
   "a": 0,
   "exp": "Eşleşme yoksa satır sonuçta yer almaz."
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "`LEFT JOIN` hangi satırları getirir?",
   "opts": [
    "Sadece eşleşen satırları",
    "Soldaki tablonun bütün satırlarını; sağda eşleşme yoksa sağ sütunlar NULL",
    "Kartezyen çarpımı",
    "Sadece eşleşmeyenleri",
    "Sağdaki tablonun bütün satırlarını"
   ],
   "a": 1,
   "exp": "Kartı olmayan öğrenciyi de listelemek için kullanıldı."
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorgu kaç satır döndürür?",
   "opts": [
    "4",
    "1",
    "30",
    "6",
    "5"
   ],
   "a": 4,
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
    "1",
    "6",
    "11",
    "5",
    "30"
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
    "Boş sonuç",
    "Kerem",
    "Deniz",
    "Kerem, Deniz",
    "Ahmet"
   ],
   "a": 1,
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
    "Bilgisayar Programcılığı",
    "Muhasebe ve Vergi Uygulamaları",
    "Turizm ve Otel İşletmeciliği",
    "Grafik Tasarımı",
    "Boş sonuç"
   ],
   "a": 2,
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
    "6",
    "10",
    "1",
    "4",
    "24"
   ],
   "a": 4,
   "exp": "CROSS JOIN kartezyen çarpım: 6 ders × 4 bölüm = 24.",
   "code": "SELECT * FROM ders CROSS JOIN bolum;",
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
   "topic": "ileri2",
   "q": "MySQL'de hangi JOIN türü **doğrudan desteklenmez**?",
   "opts": [
    "FULL OUTER JOIN",
    "LEFT JOIN",
    "INNER JOIN",
    "CROSS JOIN",
    "RIGHT JOIN"
   ],
   "a": 0,
   "exp": "LEFT JOIN … UNION … RIGHT JOIN ile yapılır."
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Aşağıdaki sorgu neden **hata verir**?",
   "opts": [
    "Takma ad kullanılamaz",
    "ogrenci_no iki tabloda da var; hangi tablonunki olduğu belirsiz",
    "ON yerine IN gelmeli",
    "JOIN yerine WHERE yazılmalıydı",
    "SELECT'te iki sütun olamaz"
   ],
   "a": 1,
   "exp": "#1052 Column 'ogrenci_no' in field list is ambiguous. Çözüm: `o.ogrenci_no`.",
   "code": "SELECT ogrenci_no, ders_kodu FROM ogrenci o JOIN ders_kaydi k ON k.ogrenci_no = o.ogrenci_no;"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Bölüm 2 (Grafik) derslerine kayıtları getiren 3 tablolu JOIN kaç satır döndürür?",
   "opts": [
    "11",
    "3",
    "5",
    "2",
    "4"
   ],
   "a": 4,
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
    "LEFT JOIN ders_kaydi ve COUNT(k.ders_kodu)",
    "RIGHT JOIN ve MAX",
    "CROSS JOIN ve SUM",
    "INNER JOIN ve COUNT(*)",
    "LEFT JOIN ve COUNT(*)"
   ],
   "a": 0,
   "exp": "COUNT(*) eşleşmeyen satırı 1 sayar; sağ tablonun sütunu sayılınca 0 olur."
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorguda Kerem'in satırında hangi sayı görünür?",
   "opts": [
    "NULL",
    "1",
    "0",
    "Satır görünmez",
    "6"
   ],
   "a": 2,
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
    "0",
    "1",
    "Hata verirdi",
    "6",
    "NULL"
   ],
   "a": 1,
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
   "q": "Sorgu hangi ürünleri döndürür?",
   "opts": [
    "Kablosuz Kulaklık, Akıllı Saat",
    "Boş sonuç",
    "Veri Bilimine Giriş, Kamp Sandalyesi",
    "Mekanik Klavye, Kamp Sandalyesi",
    "Mekanik Klavye"
   ],
   "a": 3,
   "exp": "LEFT JOIN bütün ürünleri getirir; siparis_detay'da hiç satırı olmayanların sayısı 0 olur. 16 ve 17 hiç satılmamış (uygulama bonus).",
   "code": "SELECT u.urun_adi\nFROM urunler u\nLEFT JOIN siparis_detay d ON d.urun_id = u.urun_id\nGROUP BY u.urun_id, u.urun_adi\nHAVING COUNT(d.urun_id) = 0\nORDER BY u.urun_id;",
   "tables": [
    {
     "name": "urunler",
     "cols": [
      "urun_id",
      "urun_adi"
     ],
     "rows": [
      [
       "1",
       "Kablosuz Kulaklık"
      ],
      [
       "2",
       "Akıllı Saat"
      ],
      [
       "8",
       "Python ile Programlama"
      ],
      [
       "9",
       "Veri Bilimine Giriş"
      ],
      [
       "16",
       "Mekanik Klavye"
      ],
      [
       "17",
       "Kamp Sandalyesi"
      ]
     ]
    },
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
   "q": "Bu sorguda `LEFT JOIN` yerine `JOIN` (INNER) yazılırsa kaç satır döner?",
   "opts": [
    "4 satır",
    "2 satır",
    "1 satır",
    "6 satır",
    "0 satır"
   ],
   "a": 4,
   "exp": "INNER JOIN satılmamış ürünleri hiç getirmez; kalan her ürünün sayısı en az 1 olur, HAVING = 0 kimseyi geçirmez (uygulama bonus).",
   "code": "SELECT u.urun_adi\nFROM urunler u\nLEFT JOIN siparis_detay d ON d.urun_id = u.urun_id\nGROUP BY u.urun_id, u.urun_adi\nHAVING COUNT(d.urun_id) = 0;",
   "tables": [
    {
     "name": "urunler",
     "cols": [
      "urun_id",
      "urun_adi"
     ],
     "rows": [
      [
       "1",
       "Kablosuz Kulaklık"
      ],
      [
       "2",
       "Akıllı Saat"
      ],
      [
       "8",
       "Python ile Programlama"
      ],
      [
       "9",
       "Veri Bilimine Giriş"
      ],
      [
       "16",
       "Mekanik Klavye"
      ],
      [
       "17",
       "Kamp Sandalyesi"
      ]
     ]
    },
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
   "q": "`kategoriler` ve `urunler` tablolarıyla her kategorinin ürün sayısı listelenecek; hiç ürünü olmayan kategori de 0 ile görünsün. Hangisi gerekir?",
   "opts": [
    "urunler CROSS JOIN kategoriler",
    "HAVING COUNT(*) > 0",
    "kategoriler INNER JOIN urunler",
    "kategoriler LEFT JOIN urunler",
    "Sadece WHERE"
   ],
   "a": 3,
   "exp": "INNER JOIN ürünü olmayan kategoriyi atar; LEFT JOIN soldaki tüm kategorileri tutar, COUNT(u.urun_id) 0 verir."
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorgu sonucu kaç satırdır?",
   "opts": [
    "5",
    "2",
    "6",
    "4",
    "3"
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
    "3",
    "6",
    "5",
    "2",
    "4"
   ],
   "a": 2,
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
    "Kara Ahmet",
    "Ahmet Kara",
    "Ahmet",
    "AhmetKara",
    "NULL"
   ],
   "a": 1,
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
    "Girilmedi",
    "0",
    "AA"
   ],
   "a": 2,
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
    "sql",
    "Hata",
    "SQL",
    "Sql",
    "3"
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
    "4",
    "5",
    "8",
    "3",
    "Mert"
   ],
   "a": 0,
   "exp": "Karakter sayısı.",
   "code": "SELECT CHAR_LENGTH('Mert');"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "`SELECT SUBSTRING('Veritabanı', 1, 4);` sonucu nedir?",
   "opts": [
    "Veri",
    "tabanı",
    "erit",
    "V",
    "Veritabanı"
   ],
   "a": 0,
   "exp": "1. karakterden başlayıp 4 karakter.",
   "code": "SELECT SUBSTRING('Veritabanı', 1, 4);"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "`SELECT DATEDIFF('2025-09-23', '2025-09-20');` sonucu nedir?",
   "opts": [
    "2025",
    "-3",
    "23",
    "0",
    "3"
   ],
   "a": 4,
   "exp": "İlk tarih eksi ikinci tarih, gün olarak.",
   "code": "SELECT DATEDIFF('2025-09-23', '2025-09-20');"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "`SELECT YEAR('2025-09-20');` sonucu nedir?",
   "opts": [
    "09",
    "2025",
    "20",
    "9",
    "2025-09-20"
   ],
   "a": 1,
   "exp": "YEAR tarihin yılını döndürür.",
   "code": "SELECT YEAR('2025-09-20');"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "`SELECT ROUND(989.6294, 2);` sonucu nedir?",
   "opts": [
    "990",
    "989.6",
    "989.63",
    "989.62",
    "989.6294"
   ],
   "a": 2,
   "exp": "İkinci basamaktan sonra 9 → yukarı yuvarlanır.",
   "code": "SELECT ROUND(989.6294, 2);"
  },
  {
   "type": "mc",
   "topic": "ileri2",
   "q": "Sorgu kaç satırda \"Ağır\" yazar?",
   "opts": [
    "1",
    "3",
    "0",
    "6",
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
    "FROM ALIAS ogrenci o",
    "FROM o = ogrenci",
    "FROM ogrenci AS o",
    "FROM ogrenci TO o",
    "FROM ogrenci(o)"
   ],
   "a": 2,
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
    "Sağdaki tablonun hepsi",
    "Her satır her satırla",
    "Sadece eşleşenler",
    "Soldaki tablonun hepsi"
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
    "Metinleri birleştirir",
    "İki tarih arasındaki gün",
    "Büyük harfe çevirir",
    "NULL ise yerine değer koyar"
   ]
  }
 ],
 "gorunum": [
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Görünüm (VIEW) için hangisi doğrudur?",
   "opts": [
    "Bir SELECT sorgusuna verilen addır; veriyi kendisi saklamaz (sanal tablo)",
    "Sadece bir kez çalışır",
    "Veri tabanı oluşturur",
    "Tablonun yedek kopyasıdır",
    "INSERT olunca kendiliğinden çalışır"
   ],
   "a": 0,
   "exp": "Her çağrıldığında içindeki sorgu yeniden çalışır.",
   "why": {
    "4": "Bu tetikleyicinin tanımı."
   }
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Görünüm oluşturan komut hangisidir?",
   "opts": [
    "CREATE VIEW ad AS SELECT …",
    "CREATE TABLE ad AS VIEW …",
    "CREATE VIEW ad ON tablo",
    "MAKE VIEW ad …",
    "NEW VIEW ad = SELECT …"
   ],
   "a": 0,
   "exp": "CREATE VIEW … AS SELECT."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Var olan bir görünümü yoksa oluşturan, varsa değiştiren komut hangisidir?",
   "opts": [
    "ALTER OR CREATE VIEW",
    "CREATE OR REPLACE VIEW",
    "UPDATE VIEW",
    "REPLACE TABLE",
    "MODIFY VIEW"
   ],
   "a": 1,
   "exp": "CREATE OR REPLACE VIEW (ALTER VIEW de tanımı değiştirir)."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "`DROP VIEW ogrenci_notlari;` çalıştırılırsa ne olur?",
   "opts": [
    "Hata verir; görünüm silinemez",
    "ogrenci tablosu da silinir",
    "Sadece görünüm tanımı silinir; tablolardaki veriler kalır",
    "Veri tabanı silinir",
    "Notlar silinir"
   ],
   "a": 2,
   "exp": "Görünüm verinin kopyası değildir."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Görünüm kullanmanın faydası **olmayan** hangisidir?",
   "opts": [
    "Kullanıcıya sadece belli sütunları göstermek (güvenlik)",
    "Karmaşık JOIN sorgusunu tek isimle kullanmak",
    "Uygulama kodunu sadeleştirmek",
    "Tablo yapısını kullanıcıdan gizlemek",
    "Verinin ikinci bir kopyasını diskte saklayıp yedek oluşturması"
   ],
   "a": 4,
   "exp": "Görünüm veri saklamaz, yedek değildir."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Görünüm oluşturulduktan sonra temel tabloya yeni satır eklenirse görünüm ne gösterir?",
   "opts": [
    "Görünüm silinir",
    "Sadece yeni satırı gösterir",
    "Yeni satırı da gösterir",
    "Hata verir",
    "Eski veriyi gösterir"
   ],
   "a": 2,
   "exp": "Görünüm her seferinde sorguyu yeniden çalıştırır.",
   "code": "CREATE VIEW ucuz AS SELECT ad FROM urun WHERE fiyat < 50;\nINSERT INTO urun VALUES (2, 'Silgi', 5);\nSELECT * FROM ucuz;"
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Sorgu kaç satır döndürür?",
   "opts": [
    "2",
    "1",
    "0",
    "3",
    "11"
   ],
   "a": 0,
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
    "Takma ad kullanan basit görünüm",
    "Tek tablonun tüm sütunlarını seçen görünüm",
    "Tek tablodan bazı sütunları seçen görünüm",
    "GROUP BY ve COUNT içeren görünüm",
    "Tek tablodan WHERE ile süzen görünüm"
   ],
   "a": 3,
   "exp": "Toplama fonksiyonu / GROUP BY / DISTINCT içeren görünüm güncellenemez."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Tetikleyici (TRIGGER) için hangisi doğrudur?",
   "opts": [
    "Sadece veri tabanı oluşturulurken çalışır",
    "CALL ile elle çağrılır",
    "SELECT sorgularında çalışır",
    "Tabloda INSERT, UPDATE veya DELETE olunca kendiliğinden çalışır",
    "Veriyi sanal tablo gibi gösterir"
   ],
   "a": 3,
   "exp": "Elle çağrılan saklı yordamdır (CALL); tetikleyici olayla çalışır."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Tetikleyici hangi olay için **tanımlanamaz**?",
   "opts": [
    "UPDATE",
    "Hepsi için tanımlanabilir",
    "DELETE",
    "SELECT",
    "INSERT"
   ],
   "a": 3,
   "exp": "Tetikleyici sadece veri değiştiren olaylarda (INSERT/UPDATE/DELETE) çalışır."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Tetikleyicide `NEW.adet` ifadesi neyi gösterir?",
   "opts": [
    "Eklenen / güncellenen satırın yeni adet değerini",
    "Yeni oluşturulan tabloyu",
    "Silinen satırın adet değerini",
    "Tablodaki toplam adedi",
    "Bir önceki tetikleyicinin sonucunu"
   ],
   "a": 0,
   "exp": "NEW yeni değer, OLD eski değer."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "`AFTER INSERT` tetikleyicisinde hangisi **kullanılamaz**?",
   "opts": [
    "OLD",
    "NEW",
    "UPDATE",
    "FOR EACH ROW",
    "BEGIN … END"
   ],
   "a": 0,
   "exp": "INSERT'te önceki satır olmadığı için OLD yoktur."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "`DELETE` tetikleyicisinde silinen satırın değerlerine nasıl erişilir?",
   "opts": [
    "DELETED.sutun",
    "OLD.sutun",
    "ROW.sutun",
    "THIS.sutun",
    "NEW.sutun"
   ],
   "a": 1,
   "exp": "DELETE'te NEW yoktur, OLD vardır."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "`FOR EACH ROW` ne anlama gelir?",
   "opts": [
    "Döngü kurar ve sonsuza kadar çalışır",
    "Bütün tablolara uygulanır",
    "Tabloyu satır satır kopyalar",
    "Tetikleyici tablo başına bir kez çalışır",
    "Tetikleyici etkilenen her satır için bir kez çalışır"
   ],
   "a": 4,
   "exp": "Üç satır eklenirse tetikleyici üç kez çalışır."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Tetikleyici gövdesindeki `;` işaretlerinin komutu erken bitirmemesi için ne kullanılır?",
   "opts": [
    "DELIMITER $$",
    "SET NAMES",
    "END IF",
    "GO",
    "COMMIT"
   ],
   "a": 0,
   "exp": "Geçici ayırıcı; sonra `DELIMITER ;` ile geri alınır."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Satış eklendiğinde stok düşen tetikleyici çalıştıktan sonra ürünün stoku kaç olur?",
   "opts": [
    "13",
    "3",
    "0",
    "10",
    "7"
   ],
   "a": 4,
   "exp": "AFTER INSERT: 10 - 3 = 7.",
   "code": "DELIMITER $$\nCREATE TRIGGER stok_dus AFTER INSERT ON satis\nFOR EACH ROW\nBEGIN\n  UPDATE urun SET stok = stok - NEW.adet WHERE id = NEW.urun_id;\nEND$$\nDELIMITER ;\n\nINSERT INTO urun VALUES (1, 'Kulaklık', 10);\nINSERT INTO satis (urun_id, adet) VALUES (1, 3);\nSELECT stok FROM urun WHERE id = 1;"
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Aynı tetikleyiciyle iki satış yapılırsa (adet 2 ve 4) stok 10'dan kaça düşer?",
   "opts": [
    "10",
    "6",
    "8",
    "4",
    "2"
   ],
   "a": 3,
   "exp": "Her satış için ayrı çalışır: 10 - 2 - 4 = 4.",
   "code": "INSERT INTO satis (urun_id, adet) VALUES (1, 2), (1, 4);\nSELECT stok FROM urun WHERE id = 1;"
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "`BEFORE INSERT` tetikleyicisi `IF NEW.stok < 0 THEN SET NEW.stok = 0; END IF;` içeriyor. `INSERT INTO urun VALUES (1, -5);` sonrası stok kaçtır?",
   "opts": [
    "Satır eklenmez",
    "-5",
    "5",
    "0",
    "NULL"
   ],
   "a": 3,
   "exp": "BEFORE tetikleyicisi eklenecek değeri değiştirebilir.",
   "code": "CREATE TABLE urun (id INT PRIMARY KEY, stok INT);\nDELIMITER $$\nCREATE TRIGGER stok_kontrol BEFORE INSERT ON urun\nFOR EACH ROW\nBEGIN\n  IF NEW.stok < 0 THEN\n    SET NEW.stok = 0;\n  END IF;\nEND$$\nDELIMITER ;\nINSERT INTO urun VALUES (1, -5);\nSELECT stok FROM urun;"
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Silinen müşterileri bir log tablosuna yazmak için hangi tetikleyici uygundur?",
   "opts": [
    "BEFORE SELECT ON musteri",
    "CREATE VIEW silinenler",
    "AFTER DELETE ON musteri … NEW.ad",
    "AFTER DELETE ON musteri … OLD.ad",
    "AFTER INSERT ON musteri … NEW.ad"
   ],
   "a": 3,
   "exp": "DELETE'te silinen satır OLD ile okunur."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Tetikleyiciyi silen komut hangisidir?",
   "opts": [
    "ALTER TRIGGER ad DROP;",
    "REMOVE TRIGGER ad;",
    "TRUNCATE TRIGGER ad;",
    "DROP TRIGGER ad;",
    "DELETE TRIGGER ad;"
   ],
   "a": 3,
   "exp": "DROP TRIGGER."
  },
  {
   "type": "mc",
   "topic": "gorunum",
   "q": "Saklı yordam (PROCEDURE) ile tetikleyici arasındaki temel fark nedir?",
   "opts": [
    "İkisi aynıdır",
    "Yordam CALL ile elle çağrılır, tetikleyici olayla kendiliğinden çalışır",
    "Tetikleyici CALL ile çağrılır",
    "Tetikleyici parametre alır, yordam almaz",
    "Yordam sadece SELECT içerir"
   ],
   "a": 1,
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
    "Her etkilenen satır için",
    "Olaydan önce mi sonra mı",
    "Eski değer (UPDATE, DELETE)",
    "Yeni değer (INSERT, UPDATE)"
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
    "Olayla kendiliğinden çalışan blok",
    "CALL ile çağrılan blok",
    "Veriyi saklayan yapı",
    "Adı verilmiş SELECT, sanal tablo"
   ]
  }
 ]
};
window.EXTRA_CODE = [];
