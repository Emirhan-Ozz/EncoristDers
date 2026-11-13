-- okul_db: derste kurulan 1:1, 1:N ve M:N örneği (1-1_kod, 1-2_kod ve INSERT dosyalarından)
DROP DATABASE IF EXISTS okul_db;
CREATE DATABASE okul_db CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci;
USE okul_db;

CREATE TABLE ogrenci (
  ogrenci_no INT PRIMARY KEY,
  ad         VARCHAR(50)  NOT NULL,
  soyad      VARCHAR(50)  NOT NULL,
  eposta     VARCHAR(100)
);

CREATE TABLE ogrenci_karti (
  kart_no           INT PRIMARY KEY,
  ogrenci_no        INT NOT NULL UNIQUE,
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
  bolum_no  INT NOT NULL,
  FOREIGN KEY (bolum_no) REFERENCES bolum(bolum_no)
);

CREATE TABLE ders_kaydi (
  ogrenci_no   INT NOT NULL,
  ders_kodu    INT NOT NULL,
  kayit_tarihi DATE,
  harf_notu    CHAR(2),
  PRIMARY KEY (ogrenci_no, ders_kodu),
  FOREIGN KEY (ogrenci_no) REFERENCES ogrenci(ogrenci_no),
  FOREIGN KEY (ders_kodu)  REFERENCES ders(ders_kodu)
);

INSERT INTO ogrenci (ogrenci_no, ad, soyad, eposta) VALUES
(20250101, 'Ahmet', 'Kara',   'ahmet.kara@ogr.edu.tr'),
(20250102, 'Zehra', 'Aksoy',  'zehra.aksoy@ogr.edu.tr'),
(20250103, 'Mert',  'Güneş',  'mert.gunes@ogr.edu.tr'),
(20250104, 'İrem',  'Toprak', 'irem.toprak@ogr.edu.tr'),
(20250105, 'Deniz', 'Uçar',   'deniz.ucar@ogr.edu.tr'),
(20250106, 'Kerem', 'Yalçın', 'kerem.yalcin@ogr.edu.tr');

INSERT INTO ogrenci_karti (kart_no, ogrenci_no, verilis_tarihi, gecerlilik_tarihi) VALUES
(5001, 20250101, '2025-09-15', '2027-09-15'),
(5002, 20250102, '2025-09-15', '2027-09-15'),
(5003, 20250103, '2025-09-16', '2027-09-16'),
(5004, 20250104, '2025-09-16', '2027-09-16'),
(5005, 20250105, '2025-09-17', '2027-09-17');

INSERT INTO bolum (bolum_no, bolum_adi) VALUES
(1, 'Bilgisayar Programcılığı'),
(2, 'Grafik Tasarımı'),
(3, 'Muhasebe ve Vergi Uygulamaları'),
(4, 'Turizm ve Otel İşletmeciliği');

INSERT INTO ders (ders_kodu, ders_adi, kredi, bolum_no) VALUES
(101, 'Veritabanı Yönetim Sistemleri', 4, 1),
(102, 'Web Programlama',               4, 1),
(103, 'Nesne Tabanlı Programlama',     3, 1),
(201, 'Tipografi',                     3, 2),
(202, 'Dijital Fotoğrafçılık',         3, 2),
(301, 'Genel Muhasebe',                4, 3);

INSERT INTO ders_kaydi (ogrenci_no, ders_kodu, kayit_tarihi, harf_notu) VALUES
(20250101, 101, '2025-09-20', 'AA'),
(20250101, 102, '2025-09-20', 'BA'),
(20250101, 201, '2025-09-21', NULL),
(20250102, 101, '2025-09-20', 'BB'),
(20250102, 103, '2025-09-20', NULL),
(20250103, 101, '2025-09-22', 'CB'),
(20250103, 202, '2025-09-22', 'AA'),
(20250104, 201, '2025-09-21', 'BA'),
(20250104, 202, '2025-09-21', NULL),
(20250105, 301, '2025-09-23', 'CC'),
(20250105, 101, '2025-09-23', 'DC');
