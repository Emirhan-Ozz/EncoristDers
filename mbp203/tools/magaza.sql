-- =====================================================================
--  MAĞAZA VERİTABANI  —  GROUP BY & HAVING dersi için örnek veri
--  MySQL (MAMP / phpMyAdmin) uyumlu
--
--  İlişkiler:
--    kategoriler 1 ── N urunler
--    musteriler  1 ── N siparisler
--    siparisler  N ── M urunler   (ara tablo: siparis_detay)
-- =====================================================================

DROP DATABASE IF EXISTS magaza;
CREATE DATABASE magaza CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci;
USE magaza;

-- ---------------------------------------------------------------------
-- 1) KATEGORİLER
-- ---------------------------------------------------------------------
CREATE TABLE kategoriler (
    kategori_id   INT AUTO_INCREMENT PRIMARY KEY,
    kategori_adi  VARCHAR(50) NOT NULL
);

INSERT INTO kategoriler (kategori_id, kategori_adi) VALUES
(1, 'Elektronik'),
(2, 'Giyim'),
(3, 'Kitap'),
(4, 'Ev & Yaşam'),
(5, 'Spor'),
(6, 'Oyuncak');          -- bilerek ürünsüz bırakıldı (LEFT JOIN + COUNT örneği için)

-- ---------------------------------------------------------------------
-- 2) ÜRÜNLER
-- ---------------------------------------------------------------------
CREATE TABLE urunler (
    urun_id      INT AUTO_INCREMENT PRIMARY KEY,
    urun_adi     VARCHAR(100) NOT NULL,
    kategori_id  INT NOT NULL,
    fiyat        DECIMAL(10,2) NOT NULL,
    stok         INT NOT NULL DEFAULT 0,
    FOREIGN KEY (kategori_id) REFERENCES kategoriler(kategori_id)
);

INSERT INTO urunler (urun_id, urun_adi, kategori_id, fiyat, stok) VALUES
(1,  'Kablosuz Kulaklık',      1, 1250.00, 40),
(2,  'Akıllı Saat',            1, 3400.00, 15),
(3,  'Bluetooth Hoparlör',     1,  950.00, 25),
(4,  'Powerbank 20000 mAh',    1,  780.00, 60),
(5,  'Kot Pantolon',           2,  899.90, 35),
(6,  'Kapüşonlu Sweatshirt',   2,  649.90, 50),
(7,  'Spor Ayakkabı',          5, 1899.00, 20),
(8,  'Python ile Programlama', 3,  320.00, 100),
(9,  'Veri Bilimine Giriş',    3,  410.00, 70),
(10, 'Yapay Zekâ Temelleri',   3,  385.00, 45),
(11, 'Filtre Kahve Makinesi',  4, 1650.00, 12),
(12, 'Masa Lambası',           4,  420.00, 30),
(13, 'Yoga Matı',              5,  350.00, 55),
(14, 'Dambıl Seti',            5, 1150.00, 18),
(15, 'Termos',                 4,  299.90, 80),
(16, 'Mekanik Klavye',         1, 1450.00, 22),   -- hiç satılmadı
(17, 'Kamp Sandalyesi',        5,  560.00, 14);   -- hiç satılmadı

-- ---------------------------------------------------------------------
-- 3) MÜŞTERİLER
-- ---------------------------------------------------------------------
CREATE TABLE musteriler (
    musteri_id    INT AUTO_INCREMENT PRIMARY KEY,
    ad            VARCHAR(50) NOT NULL,
    soyad         VARCHAR(50) NOT NULL,
    sehir         VARCHAR(50) NOT NULL,
    kayit_tarihi  DATE NOT NULL
);

INSERT INTO musteriler (musteri_id, ad, soyad, sehir, kayit_tarihi) VALUES
(1,  'Ayşe',   'Yılmaz',  'İzmir',     '2025-11-02'),
(2,  'Mehmet', 'Kaya',    'İstanbul',  '2025-12-15'),
(3,  'Zeynep', 'Demir',   'İzmir',     '2026-01-08'),
(4,  'Ahmet',  'Çelik',   'Ankara',    '2026-02-20'),
(5,  'Elif',   'Şahin',   'İstanbul',  '2026-03-03'),
(6,  'Can',    'Öztürk',  'Gaziantep', '2026-03-17'),
(7,  'Deniz',  'Arslan',  'İzmir',     '2026-04-11'),
(8,  'Selin',  'Koç',     'Ankara',    '2026-05-05'),
(9,  'Emre',   'Aydın',   'Bursa',     '2026-06-01'),   -- hiç sipariş vermedi
(10, 'Merve',  'Polat',   'İstanbul',  '2026-06-22');

-- ---------------------------------------------------------------------
-- 4) SİPARİŞLER
-- ---------------------------------------------------------------------
CREATE TABLE siparisler (
    siparis_id      INT AUTO_INCREMENT PRIMARY KEY,
    musteri_id      INT NOT NULL,
    siparis_tarihi  DATE NOT NULL,
    durum           VARCHAR(20) NOT NULL,     -- 'Teslim Edildi', 'Kargoda', 'İptal'
    FOREIGN KEY (musteri_id) REFERENCES musteriler(musteri_id)
);

INSERT INTO siparisler (siparis_id, musteri_id, siparis_tarihi, durum) VALUES
(1,  1,  '2026-07-03', 'Teslim Edildi'),
(2,  2,  '2026-07-10', 'Teslim Edildi'),
(3,  3,  '2026-07-15', 'Teslim Edildi'),
(4,  1,  '2026-07-28', 'Teslim Edildi'),
(5,  4,  '2026-08-02', 'Teslim Edildi'),
(6,  5,  '2026-08-05', 'İptal'),
(7,  2,  '2026-08-11', 'Teslim Edildi'),
(8,  6,  '2026-08-19', 'Teslim Edildi'),
(9,  7,  '2026-08-25', 'Teslim Edildi'),
(10, 3,  '2026-09-01', 'Teslim Edildi'),
(11, 8,  '2026-09-07', 'Teslim Edildi'),
(12, 1,  '2026-09-14', 'Teslim Edildi'),
(13, 2,  '2026-09-22', 'Teslim Edildi'),
(14, 10, '2026-10-03', 'Kargoda'),
(15, 5,  '2026-10-09', 'Teslim Edildi'),
(16, 7,  '2026-10-15', 'Kargoda'),
(17, 3,  '2026-10-20', 'Kargoda'),
(18, 6,  '2026-10-22', 'İptal');

-- ---------------------------------------------------------------------
-- 5) SİPARİŞ DETAY  (siparisler N:M urunler ara tablosu)
--    birim_fiyat: sipariş anındaki fiyat
-- ---------------------------------------------------------------------
CREATE TABLE siparis_detay (
    detay_id     INT AUTO_INCREMENT PRIMARY KEY,
    siparis_id   INT NOT NULL,
    urun_id      INT NOT NULL,
    adet         INT NOT NULL,
    birim_fiyat  DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (siparis_id) REFERENCES siparisler(siparis_id),
    FOREIGN KEY (urun_id)    REFERENCES urunler(urun_id)
);

INSERT INTO siparis_detay (siparis_id, urun_id, adet, birim_fiyat) VALUES
(1,  1,  1, 1250.00), (1,  8,  2,  320.00),
(2,  2,  1, 3400.00),
(3,  5,  1,  899.90), (3,  6,  2,  649.90),
(4,  9,  1,  410.00), (4,  10, 1,  385.00), (4, 13, 1, 350.00),
(5,  11, 1, 1650.00),
(6,  2,  1, 3400.00),
(7,  4,  2,  780.00), (7,  3,  1,  950.00),
(8,  7,  1, 1899.00), (8,  13, 1,  350.00),
(9,  12, 2,  420.00), (9,  15, 3,  299.90),
(10, 1,  1, 1250.00),
(11, 14, 1, 1150.00), (11, 13, 2,  350.00),
(12, 5,  2,  899.90),
(13, 8,  3,  320.00), (13, 9,  1,  410.00),
(14, 2,  1, 3400.00), (14, 1,  1, 1250.00),
(15, 6,  1,  649.90), (15, 15, 2,  299.90),
(16, 3,  2,  950.00),
(17, 10, 2,  385.00), (17, 8,  1,  320.00),
(18, 11, 1, 1650.00);
