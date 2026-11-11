/* MBP207 · Konu anlatımı: her konu için ayrıntılı anlatım + çözümlü örnek + 3 alıştırma (Pyodide ile kontrol).  #ders/<konu> */
(function () {
  'use strict';
  var T = [
    { id: 'temel', title: 'Temeller: input, tipler, dönüşüm',
      anlat: [
        ['h', 'input() her zaman metin (str) döndürür'],
        ['p', 'Kullanıcı `5` yazsa bile `input()` bunu `"5"` metni olarak verir. Bu yüzden hesap yapmadan önce sayıya çevirmek gerekir: tam sayı için `int()`, ondalıklı sayı için `float()`.'],
        ['code', 'yas = input("Yaşın: ")      # "20" (str)\nyas = int(yas)               # 20 (int)\nfiyat = float(input("Fiyat: "))  # "42.5" → 42.5'],
        ['h', 'Tipler'],
        ['ul', ['`int` tam sayı: `5`, `-3`', '`float` ondalıklı: `2.5`, `6 / 3` → `2.0` (bölme hep float verir)', '`str` metin: `"Ali"`, `"5"`', '`bool` mantıksal: `True`, `False`', '`type(x)` bir değerin tipini söyler: `type("5")` → `<class \'str\'>`']],
        ['h', 'Sık yapılan hatalar'],
        ['ul', ['`2026 - input()` → **TypeError**: sayıdan metin çıkarılamaz.', '`"5" + "3"` → `"53"`: metinler toplanmaz, yan yana eklenir.', '`int("42.5")` ve `int("abc")` → **ValueError**. Ondalıklı girdi için `float()` kullan.', 'Değişken adı rakamla başlamaz, boşluk içermez, `for`, `if` gibi anahtar kelime olamaz.']],
        ['h', 'print()'],
        ['p', '`print("a", "b", 20)` değerlerin arasına boşluk koyar → `a b 20`. `end=" "` verirsen alt satıra geçmez. f-string ile değişkenleri metnin içine gömebilirsin: `print(f"Yaşın {yas}")`.']],
      ornek: { soru: 'Kullanıcıdan doğum yılını alıp 2026’ya göre yaşını “Senin yaşın: 20” biçiminde yazan program.',
        kod: 'yil = int(input("Doğum yılınızı giriniz: "))\nyas = 2026 - yil\nprint("Senin yaşın:", yas)',
        girdi: '2006', cikti: 'Senin yaşın: 20',
        not: '`int()` olmasaydı `2026 - "2006"` satırı TypeError verirdi. `print` virgülle ayrılan değerlerin arasına kendiliğinden boşluk koyar.' },
      sorular: [
        { soru: 'Kullanıcıdan iki tam sayı al, toplamlarını “Toplam: 12” biçiminde yaz.',
          ref: ['a = int(input("1. sayı: "))', 'b = int(input("2. sayı: "))', 'print("Toplam:", a + b)'],
          tests: [{ ad: '5 ve 7', pre: ['5', '7'] }, { ad: '-3 ve 10', pre: ['-3', '10'] }] },
        { soru: 'Kullanıcıdan ürünün birim fiyatını (ondalıklı olabilir, ör. 42.5) ve adedini (tam sayı) al. Toplam tutarı “Tutar: 85.0” biçiminde yaz.',
          ref: ['fiyat = float(input("Birim fiyat: "))', 'adet = int(input("Adet: "))', 'print("Tutar:", fiyat * adet)'],
          tests: [{ ad: '42.5 × 2', pre: ['42.5', '2'] }, { ad: '10 × 3', pre: ['10', '3'] }] },
        { soru: 'Kullanıcıdan bir sayı al ve önce girdinin tipini, sonra `int`’e çevrilmiş hâlinin tipini yaz. (İki satır: `<class \'str\'>` ve `<class \'int\'>`)',
          ref: ['x = input("Sayı: ")', 'print(type(x))', 'print(type(int(x)))'],
          tests: [{ ad: 'girdi 5', pre: ['5'] }] }] },

    { id: 'operator', title: 'Operatörler ve işlem önceliği',
      anlat: [
        ['h', 'Aritmetik operatörler'],
        ['table', ['Operatör', 'Anlamı', 'Örnek → sonuç'], [['`+ - *`', 'toplama, çıkarma, çarpma', '`3 + 4 * 2` → 11'], ['`/`', 'bölme (her zaman float)', '`7 / 2` → 3.5, `6 / 3` → 2.0'], ['`//`', 'tam bölme', '`17 // 5` → 3'], ['`%`', 'mod: bölümden kalan', '`17 % 5` → 2'], ['`**`', 'üs alma', '`2 ** 3` → 8']]],
        ['p', '`%` en çok **tek/çift** kontrolünde kullanılır: `n % 2 == 0` ise çift, `== 1` ise tek.'],
        ['h', 'Atama ve karşılaştırma'],
        ['ul', ['`x += 5` → `x = x + 5` ile aynı (`-=`, `*=`, `/=` de var).', '`=` atama yapar, `==` eşit mi diye sorar, `!=` farklı mı diye sorar.', 'Karşılaştırmalar `True`/`False` döndürür: `7 % 2 == 1` → True.', 'Zincir karşılaştırma: `80 <= puan < 90` → `puan >= 80 and puan < 90`.']],
        ['h', 'Mantıksal operatörler'],
        ['ul', ['`and`: ikisi de True olmalı.', '`or`: biri True olması yeter.', '`not`: sonucu tersine çevirir. `not (3 > 2 or 1 > 2)` → False']],
        ['h', 'İşlem önceliği'],
        ['p', '`**` → `* / // %` → `+ -` → karşılaştırmalar → `not` → `and` → `or`. Emin değilsen parantez kullan: `10 - 4 / 2` → 8.0 ama `(10 - 4) / 2` → 3.0']],
      ornek: { soru: 'Kullanıcının girdiği dakikayı saat ve dakikaya çeviren program (ör. 135 → “2 saat 15 dakika”).',
        kod: 'dk = int(input("Dakika: "))\nsaat = dk // 60\nkalan = dk % 60\nprint(f"{saat} saat {kalan} dakika")',
        girdi: '135', cikti: '2 saat 15 dakika',
        not: '`//` kaç tam saat olduğunu, `%` geriye kalan dakikayı verir. Bu ikisi birlikte “bölme + kalan” sorularının klasik kalıbıdır.' },
      sorular: [
        { soru: 'Kullanıcıdan bir tam sayı al; çiftse “Çift”, tekse “Tek” yaz.',
          ref: ['n = int(input("Sayı: "))', 'if n % 2 == 0:', '    print("Çift")', 'else:', '    print("Tek")'],
          tests: [{ ad: '8', pre: ['8'] }, { ad: '7', pre: ['7'] }, { ad: '0', pre: ['0'] }] },
        { soru: 'Kullanıcıdan saniye cinsinden süre al; “3 dakika 25 saniye” biçiminde yaz (`//` ve `%` kullan).',
          ref: ['sn = int(input("Saniye: "))', 'print(f"{sn // 60} dakika {sn % 60} saniye")'],
          tests: [{ ad: '205', pre: ['205'] }, { ad: '60', pre: ['60'] }, { ad: '59', pre: ['59'] }] },
        { soru: 'Kullanıcıdan fiyat ve KDV oranını (%) al; KDV tutarını ve KDV dahil fiyatı iki satırda “KDV: 18.0” ve “Toplam: 118.0” biçiminde yaz. (KDV = fiyat × oran / 100)',
          ref: ['fiyat = float(input("Fiyat: "))', 'oran = float(input("Oran: "))', 'kdv = fiyat * oran / 100', 'print("KDV:", kdv)', 'print("Toplam:", fiyat + kdv)'],
          tests: [{ ad: '100, %18', pre: ['100', '18'] }, { ad: '6000, %20', pre: ['6000', '20'] }] }] },

    { id: 'metin', title: 'Metin metotları ve f-string',
      anlat: [
        ['h', 'En sık kullanılan metin metotları'],
        ['table', ['Metot', 'Ne yapar?', 'Örnek → sonuç'], [['`.strip()`', 'baştaki ve sondaki boşlukları siler', '`"  çay ".strip()` → `"çay"`'], ['`.lower()`', 'hepsini küçük harf yapar', '`"ANKARA".lower()` → `"ankara"`'], ['`.upper()`', 'hepsini büyük harf yapar', '`"yilmaz".upper()` → `"YILMAZ"`'], ['`.title()`', 'her kelimenin ilk harfi büyük', '`"aHmet kAYA".title()` → `"Ahmet Kaya"`'], ['`.capitalize()`', 'sadece ilk harf büyük, gerisi küçük', '`"zor MU".capitalize()` → `"Zor mu"`']]],
        ['p', 'Metotlar **zincirlenebilir** ve soldan sağa uygulanır: `input().strip().title()` önce boşlukları siler, sonra baş harfleri büyütür.'],
        ['p', '**Dikkat:** metinler değiştirilemez. `s.strip()` tek başına yazılırsa `s` değişmez; sonucu saklamak için `s = s.strip()` yazmalısın.'],
        ['h', 'f-string ve biçimlendirme'],
        ['ul', ['`f"Merhaba {ad}"`: süslü parantez içindeki değişken metne yerleşir.', '`f"{x:.2f}"`: virgülden sonra 2 basamak → `85` → `85.00`.', '`f"{x:.1f}"`: 1 basamak; `f"{2.5:.0f}"` → `2`, `f"{3.5:.0f}"` → `4` (çifte yuvarlar).', '`round(7 / 3, 2)` → `2.33` (sayı döndürür, f-string metin döndürür).']]],
      ornek: { soru: 'Kullanıcının adını ve soyadını alıp kimlik kartı satırını yazan program: ad “Ayşe” (title), soyad “YILMAZ” (upper).',
        kod: 'ad = input("Ad: ").strip().title()\nsoyad = input("Soyad: ").strip().upper()\nprint(f"Ad Soyad: {ad} {soyad}")',
        girdi: '  ayşe\nyilmaz ', cikti: 'Ad Soyad: Ayşe YILMAZ',
        not: 'Kullanıcının yanlışlıkla bıraktığı boşluklar `strip()` ile temizlenir; `title()` ve `upper()` istenen yazımı garanti eder.' },
      sorular: [
        { soru: 'Kullanıcıdan e-posta al; baş/son boşlukları silip tamamen küçük harfle “E-posta: ali@mail.com” biçiminde yaz.',
          ref: ['e = input("E-posta: ").strip().lower()', 'print(f"E-posta: {e}")'],
          tests: [{ ad: '" Ali@Mail.COM "', pre: [' Ali@Mail.COM '] }, { ad: '"veli@x.com"', pre: ['veli@x.com'] }] },
        { soru: 'Kullanıcıdan şehir adı al; her kelimesinin baş harfi büyük olacak şekilde ve harf sayısıyla birlikte “Şehir: Yeni Delhi (10 karakter)” biçiminde yaz. (Karakter sayısına boşluk dahil; baş/son boşlukları önce sil.)',
          ref: ['s = input("Şehir: ").strip().title()', 'print(f"Şehir: {s} ({len(s)} karakter)")'],
          tests: [{ ad: '"  yeni delhi "', pre: ['  yeni delhi '] }, { ad: '"izmir"', pre: ['izmir'] }] },
        { soru: 'Kullanıcıdan iki sayı al, bölümlerini virgülden sonra 2 basamakla “Sonuç: 0.33” biçiminde yaz.',
          ref: ['x = int(input())', 'y = int(input())', 'print(f"Sonuç: {x / y:.2f}")'],
          tests: [{ ad: '1 / 3', pre: ['1', '3'] }, { ad: '10 / 4', pre: ['10', '4'] }] }] },

    { id: 'kosul', title: 'if / elif / else ve match',
      anlat: [
        ['h', 'if – elif – else'],
        ['code', 'if kosul1:\n    ...        # kosul1 doğruysa\nelif kosul2:\n    ...        # değilse ve kosul2 doğruysa\nelse:\n    ...        # hiçbiri değilse'],
        ['ul', ['Her satırın sonunda `:` ve altında **4 boşluk girinti** zorunlu; `:` unutulursa SyntaxError.', 'Zincirde **ilk doğru olan** dal çalışır, gerisine bakılmaz. Bu yüzden aralıkları **büyükten küçüğe** sırala: önce `>= 90`, sonra `>= 85`…', 'Ayrı ayrı yazılan `if`’lerin hepsi tek tek kontrol edilir; `elif` ise sadece öncekiler yanlışsa bakılır.']],
        ['h', 'match – case (Python 3.10+)'],
        ['code', 'match secim:\n    case "1":\n        print("Bir")\n    case "2" | "3":       # | = veya\n        print("İki ya da üç")\n    case _:               # hiçbiri (else gibi)\n        print("Geçersiz")'],
        ['p', '**Tip tuzağı:** `secim = int(input())` yapıp `case "1":` yazarsan int 1 ile metin "1" eşleşmez, her şey `case _`’e düşer. Girdiyi metin bırakıyorsan case’ler de metin olmalı.']],
      ornek: { soru: 'Puanı alıp harf notunu yazan program: 90+ AA, 85+ BA, 80+ BB, değilse CB.',
        kod: 'puan = int(input("Puan: "))\nif puan >= 90:\n    print("AA")\nelif puan >= 85:\n    print("BA")\nelif puan >= 80:\n    print("BB")\nelse:\n    print("CB")',
        girdi: '87', cikti: 'BA',
        not: '87 için ilk koşul (>= 90) yanlış, ikinci (>= 85) doğru → BA yazılır ve zincir biter. Sıralamayı ters yazsaydık (önce >= 80) 95 bile BB çıkardı.' },
      sorular: [
        { soru: 'Kullanıcıdan iki sayı al; büyük olanı “Büyük: 7” biçiminde yaz, eşitse “Eşit” yaz.',
          ref: ['x = int(input())', 'y = int(input())', 'if x > y:', '    print("Büyük:", x)', 'elif y > x:', '    print("Büyük:", y)', 'else:', '    print("Eşit")'],
          tests: [{ ad: '7, 3', pre: ['7', '3'] }, { ad: '2, 9', pre: ['2', '9'] }, { ad: '5, 5', pre: ['5', '5'] }] },
        { soru: '`match` kullanarak ay numarasından (metin olarak al) mevsimi yaz: 12, 1, 2 “Kış”; 3, 4, 5 “İlkbahar”; 6, 7, 8 “Yaz”; 9, 10, 11 “Sonbahar”; diğerleri “Geçersiz ay”.',
          ref: ['ay = input("Ay: ").strip()', 'match ay:', '    case "12" | "1" | "2":', '        print("Kış")', '    case "3" | "4" | "5":', '        print("İlkbahar")', '    case "6" | "7" | "8":', '        print("Yaz")', '    case "9" | "10" | "11":', '        print("Sonbahar")', '    case _:', '        print("Geçersiz ay")'],
          tests: [{ ad: '1', pre: ['1'] }, { ad: '4', pre: ['4'] }, { ad: '8', pre: ['8'] }, { ad: '10', pre: ['10'] }, { ad: '13', pre: ['13'] }] },
        { soru: 'Otopark ücreti: süre (saat, ondalıklı olabilir) 1’e kadar 50, 3’e kadar 100, fazlası 150 TL. Öğrenci kartı “e” ise ve süre 3 saati geçmiyorsa %20 indirim. Tutarı “Tutar: 80.00 TL” biçiminde yaz.',
          ref: ['saat = float(input("Saat: "))', 'kart = input("Kart (e/h): ").strip().lower()', 'if saat <= 1:', '    ucret = 50', 'elif saat <= 3:', '    ucret = 100', 'else:', '    ucret = 150', 'if kart == "e" and saat <= 3:', '    ucret = ucret * 0.8', 'print(f"Tutar: {ucret:.2f} TL")'],
          tests: [{ ad: '2.5 saat, e', pre: ['2.5', 'e'] }, { ad: '4 saat, e', pre: ['4', 'e'] }, { ad: '1 saat, h', pre: ['1', 'h'] }] }] },

    { id: 'dongu', title: 'Döngüler: for, range, while',
      anlat: [
        ['h', 'range()'],
        ['table', ['Yazım', 'Ürettiği sayılar'], [['`range(5)`', '0 1 2 3 4 (bitiş **dahil değil**)'], ['`range(1, 4)`', '1 2 3'], ['`range(2, 11, 3)`', '2 5 8'], ['`range(10, 0, -1)`', '10 9 … 1'], ['`range(n + 1)`', '0’dan n’ye kadar, n dahil']]],
        ['h', 'for döngüsü'],
        ['code', 'toplam = 0\nfor i in range(1, 6):\n    toplam += i      # 1+2+3+4+5\nprint(toplam)        # 15'],
        ['p', 'Biriktirme kalıbı: döngüden **önce** değişkeni sıfırla (`toplam = 0`), döngü içinde `+=` ile ekle, sonucu döngüden **sonra** yaz.'],
        ['h', 'while döngüsü'],
        ['ul', ['`while kosul:` koşul doğru oldukça döner. Sayacı artırmayı (`i += 1`) unutursan **sonsuz döngü** olur.', '`while True:` + `break`: menü kalıbı. Çıkış seçeneğinde `break` döngüyü bitirir.', '`continue`: o turun geri kalanını atlayıp döngünün başına döner.', '`print(x, end=" ")` alt satıra geçmeden yan yana yazar.']]],
      ornek: { soru: '0’dan kullanıcının girdiği sayıya kadar (dahil) çift ve tek sayıların toplamını ayrı ayrı bulan program.',
        kod: 'sayi = int(input("Sayı: "))\ncift = 0\ntek = 0\nfor i in range(sayi + 1):\n    if i % 2 == 0:\n        cift += i\n    else:\n        tek += i\nprint("Çift:", cift, "Tek:", tek)',
        girdi: '5', cikti: 'Çift: 6 Tek: 9',
        not: '`range(sayi + 1)` sayıyı da dahil eder (0…5). Çiftler 0+2+4 = 6, tekler 1+3+5 = 9.' },
      sorular: [
        { soru: 'Kullanıcıdan n al; 1’den n’ye kadar sayıların toplamını “Toplam: 15” biçiminde yaz (`for` ve `range` kullan).',
          ref: ['n = int(input("n: "))', 'toplam = 0', 'for i in range(1, n + 1):', '    toplam += i', 'print("Toplam:", toplam)'],
          tests: [{ ad: 'n = 5', pre: ['5'] }, { ad: 'n = 10', pre: ['10'] }, { ad: 'n = 1', pre: ['1'] }] },
        { soru: 'Kullanıcıdan n al; n’den 1’e geriye doğru sayıları aralarında boşlukla tek satırda yaz (ör. “5 4 3 2 1”).',
          ref: ['n = int(input("n: "))', 'for i in range(n, 0, -1):', '    print(i, end=" ")', 'print()'],
          tests: [{ ad: 'n = 5', pre: ['5'] }, { ad: 'n = 3', pre: ['3'] }] },
        { soru: '`while True` ile sürekli sayı iste; kullanıcı 0 girince döngüden çık ve girilen sayıların toplamını “Toplam: 12” biçiminde yaz. Negatif sayıları toplama katma (`continue`).',
          ref: ['toplam = 0', 'while True:', '    x = int(input("Sayı (0 = çıkış): "))', '    if x == 0:', '        break', '    if x < 0:', '        continue', '    toplam += x', 'print("Toplam:", toplam)'],
          tests: [{ ad: '5, 7, 0', pre: ['5', '7', '0'] }, { ad: '4, -3, 8, 0', pre: ['4', '-3', '8', '0'] }, { ad: 'hemen 0', pre: ['0'] }] }] },

    { id: 'fonksiyon', title: 'Fonksiyonlar',
      anlat: [
        ['h', 'Tanımlama ve çağırma'],
        ['code', 'def kdv_hesapla(fiyat, oran=20):   # oran verilmezse 20\n    return fiyat * oran / 100\n\nprint(kdv_hesapla(100))       # 20.0\nprint(kdv_hesapla(100, 10))   # 10.0'],
        ['ul', ['Fonksiyon **çağrılmadıkça çalışmaz**. Programın sonunda `main()` yazmak bu yüzden gereklidir.', 'Varsayılan parametre (`oran=20`): değer verilmezse o kullanılır.', '`return` değeri **çağırana geri verir**, ekrana yazmaz. `print` ise sadece ekrana yazar.', '`return` olmayan fonksiyon `None` döndürür. `return`’den sonraki satırlar çalışmaz.', 'Birden çok değer döndürülebilir: `return a + b, a * b` → `x, y = hesapla(2, 5)`.']],
        ['h', 'Tip kontrolü ve hata'],
        ['code', 'def topla(sayi):\n    if not isinstance(sayi, int):\n        raise Exception("Sayı int olmalı")\n    return sayi'],
        ['p', '`isinstance(x, int)` x’in tipini kontrol eder. `raise` bilerek hata fırlatır; kullanıcının harf girmesine karşı `try: … except ValueError:` kullanılır.']],
      ornek: { soru: 'Fiyat ve adet alıp ara toplamı döndüren `toplam_hesapla(fiyat, adet)` fonksiyonu ve KDV’li (%10) genel toplamı yazan ana program.',
        kod: 'def toplam_hesapla(fiyat, adet):\n    return fiyat * adet\n\nara = toplam_hesapla(85, 3)\nkdv = ara * 0.10\nprint(f"Genel toplam: {ara + kdv:.2f} TL")',
        girdi: '', cikti: 'Genel toplam: 280.50 TL',
        not: 'Fonksiyon sonucu ekrana yazmaz, `return` ile verir; ana program bu değeri `ara` değişkeninde kullanır. 255 + 25.50 = 280.50.' },
      sorular: [
        { soru: '`kare(n)` fonksiyonunu yaz: n’nin karesini **döndürsün** (ekrana yazmasın).', fn: true,
          ref: ['def kare(n):', '    return n ** 2'],
          tests: [{ ad: 'kare(4), kare(-3), kare(0)', call: '[kare(4), kare(-3), kare(0)]' }] },
        { soru: '`is_even(n)` fonksiyonunu yaz: n çiftse True, tekse False döndürsün (tek satırlık `return` yeterli).', fn: true,
          ref: ['def is_even(n):', '    return n % 2 == 0'],
          tests: [{ ad: 'is_even(30), is_even(7), is_even(0)', call: '[is_even(30), is_even(7), is_even(0)]' }] },
        { soru: '`hesapla(a, b)` fonksiyonunu yaz: toplamı ve çarpımı **iki değer olarak** döndürsün (`return toplam, carpim`).', fn: true,
          ref: ['def hesapla(a, b):', '    return a + b, a * b'],
          tests: [{ ad: 'hesapla(2, 5)', call: 'hesapla(2, 5)' }, { ad: 'hesapla(3, 3)', call: 'hesapla(3, 3)' }] }] },

    { id: 'liste', title: 'Listeler ve enumerate',
      anlat: [
        ['h', 'İndeksleme'],
        ['code', 'l = [12, 32, 45, 98]\nl[0]     # 12 (ilk)\nl[-1]    # 98 (son)\nl[len(l) - 1]  # 98\nl[7]     # IndexError'],
        ['h', 'Metotlar ve fonksiyonlar'],
        ['table', ['Yazım', 'Ne yapar?'], [['`len(l)`', 'eleman sayısı'], ['`sum(l) / len(l)`', 'ortalama'], ['`l.append(x)`', 'sona ekler'], ['`l.pop()` / `l.pop(2)`', 'sondakini / 2. indeksi siler'], ['`l.count(x)`', 'x kaç tane'], ['`l.index(x)`', 'x’in ilk bulunduğu indeks'], ['`sorted(l)`', 'sıralı **yeni** liste (l değişmez)'], ['`x in l` / `x not in l`', 'var mı / yok mu']]],
        ['h', 'Liste üzerinde döngü'],
        ['code', 'icecekler = ["Kahve", "Kola", "Çay"]\nfor i, d in enumerate(icecekler, start=1):\n    print(f"{i}. içecek {d}")   # 1. içecek Kahve …'],
        ['p', '`enumerate` indeks ve değeri birlikte verir; `start=1` ile sayma 1’den başlar. Ay numarası gibi “insan sayımı” gereken yerlerde kullanılır.']],
      ornek: { soru: 'Notlar listesinin ortalamasını bulup ortalamanın üstündeki notları sırasıyla yazan program.',
        kod: 'notlar = [80, 45, 90, 60, 75]\nort = sum(notlar) / len(notlar)\nprint("Ortalama:", ort)\nfor i, n in enumerate(notlar, start=1):\n    if n > ort:\n        print(f"{i}. öğrenci {n}")',
        girdi: '', cikti: 'Ortalama: 70.0\n1. öğrenci 80\n3. öğrenci 90\n5. öğrenci 75',
        not: 'Önce ortalama bir kez hesaplanır, sonra `enumerate` ile hem sıra numarası hem not alınır.' },
      sorular: [
        { soru: 'Boş bir `siparis` listesi oluştur. Kullanıcı “0” girene kadar ürün adı iste ve listeye ekle (`append`). Sonunda “3 sipariş: [\'Çay\', \'Kahve\', \'Su\']” biçiminde sayıyı ve listeyi yaz.',
          ref: ['siparis = []', 'while True:', '    u = input("Ürün: ")', '    if u == "0":', '        break', '    siparis.append(u)', 'print(f"{len(siparis)} sipariş: {siparis}")'],
          tests: [{ ad: 'Çay, Kahve, Su, 0', pre: ['Çay', 'Kahve', 'Su', '0'] }, { ad: 'hemen 0', pre: ['0'] }] },
        { soru: '`sayilar = [12, 25, 36, 85, 62]` listesinin en büyüğünü, en küçüğünü ve ortalamasını üç satırda “En büyük: 85”, “En küçük: 12”, “Ortalama: 44.0” biçiminde yaz.',
          ref: ['sayilar = [12, 25, 36, 85, 62]', 'print("En büyük:", max(sayilar))', 'print("En küçük:", min(sayilar))', 'print("Ortalama:", sum(sayilar) / len(sayilar))'],
          tests: [{ ad: 'çıktı', pre: [] }] },
        { soru: '`gelirler = [30000, 40000, 50000]` listesini `enumerate(…, start=1)` ile “1. ay geliri 30000” biçiminde satır satır yaz.',
          ref: ['gelirler = [30000, 40000, 50000]', 'for ay, g in enumerate(gelirler, start=1):', '    print(f"{ay}. ay geliri {g}")'],
          tests: [{ ad: 'çıktı', pre: [] }] }] },

    { id: 'slice', title: 'List slice (dilimleme)',
      anlat: [
        ['h', 'Yazım: liste[başlangıç : bitiş : adım]'],
        ['p', 'Başlangıç **dahil**, bitiş **dahil değil**. Boş bırakılan başlangıç baştan, boş bırakılan bitiş sona kadar demektir.'],
        ['code', 's = [18, 21, 19, 24, 26, 23, 20]\ns[0:3]    # [18, 21, 19]  ilk 3\ns[:3]     # aynı\ns[-3:]    # [26, 23, 20]  son 3\ns[1::2]   # [21, 24, 23]  1’den ikişer\ns[::-1]   # ters çevrilmiş liste\ns[2:100]  # hata vermez, sona kadar\ns[4:2]    # []  boş liste'],
        ['h', '1’den sayan kullanıcı için dilim'],
        ['p', 'Kullanıcı “2. aydan 4. aya” derse indeksler 1, 2, 3’tür: `l[bas - 1:bit]`. Başlangıçtan 1 çıkarılır, bitiş olduğu gibi kalır (çünkü bitiş zaten dahil değil).']],
      ornek: { soru: 'Kullanıcının girdiği ay aralığındaki gelirleri alıp toplamını yazan program.',
        kod: 'gelirler = [30000, 40000, 50000, 42000, 55000]\nbas = int(input("Başlangıç: "))\nbit = int(input("Bitiş: "))\nyeni = gelirler[bas - 1:bit]\nprint(yeni, sum(yeni))',
        girdi: '2\n4', cikti: '[40000, 50000, 42000] 132000',
        not: '2–4. aylar indeks 1–3’tür; `[1:4]` dilimi 4. indeksi almaz, yani tam istenen üç ay gelir.' },
      sorular: [
        { soru: '`sicaklik = [18, 21, 19, 24, 26, 23, 20]` listesinden ilk üç günü ve son üç günü iki satırda yaz (slice kullan).',
          ref: ['sicaklik = [18, 21, 19, 24, 26, 23, 20]', 'print(sicaklik[:3])', 'print(sicaklik[-3:])'],
          tests: [{ ad: 'çıktı', pre: [] }] },
        { soru: 'Kullanıcıdan bir kelime al ve tersini yaz (`[::-1]`).',
          ref: ['k = input("Kelime: ")', 'print(k[::-1])'],
          tests: [{ ad: 'python', pre: ['python'] }, { ad: 'kayak', pre: ['kayak'] }] },
        { soru: '`notlar = [80, 90, 80, 46, 95, 32, 76, 98, 12]` listesinden kullanıcının 1’den saydığı başlangıç–bitiş aralığını al; dilimi ve ortalamasını “[46, 95, 32] 57.67” biçiminde (ortalama 2 basamak) yaz.',
          ref: ['notlar = [80, 90, 80, 46, 95, 32, 76, 98, 12]', 'bas = int(input())', 'bit = int(input())', 'd = notlar[bas - 1:bit]', 'print(d, f"{sum(d) / len(d):.2f}")'],
          tests: [{ ad: '4–6', pre: ['4', '6'] }, { ad: '1–2', pre: ['1', '2'] }] }] },

    { id: 'sozluk', title: 'Sözlükler',
      anlat: [
        ['h', 'Anahtar → değer'],
        ['code', 'urunler = {"çay": 15, "kahve": 45}\nurunler["çay"]          # 15\nurunler["kek"] = 120    # yoksa ekler\nurunler["çay"] = 20     # varsa günceller\nlen(urunler)            # 3'],
        ['ul', ['`for k in d:` döngüsü **anahtarları** gezer; değere `d[k]` ile ulaşılır.', '`"tost" in d` sadece **anahtarlarda** arar: `70 in d` → False.', 'Olmayan anahtar → **KeyError**. Hata vermeden okumak için `d.get("su", 0)`.', '`d.items()` anahtar ve değeri birlikte verir: `for k, v in d.items():`', 'Değer liste ya da sözlük olabilir: `notlar["Ali"][1]`, `notlar["Burak"]["Final"]`.']]],
      ornek: { soru: 'Seçilen ürün menüdeyse fiyatını, değilse “menüde yok” yazan; sonra bütün menüyü listeleyen program.',
        kod: 'urunler = {"çay": 15, "kahve": 45, "tost": 70}\nsecim = input("Ürün: ")\nif secim in urunler:\n    print(f"{secim}: {urunler[secim]}")\nelse:\n    print(f"{secim} menüde yok")\nfor urun in urunler:\n    print(f"{urun} fiyatı {urunler[urun]}")',
        girdi: 'tost', cikti: 'tost: 70\nçay fiyatı 15\nkahve fiyatı 45\ntost fiyatı 70',
        not: '`in` ile önce var mı diye bakmak KeyError’u önler.' },
      sorular: [
        { soru: '`urunler = {"çay": 15, "kahve": 45, "tost": 70}` sözlüğüne kullanıcıdan alınan ürünü ve fiyatını (tam sayı) ekle; sonra ürün sayısını “4 ürün” biçiminde yaz.',
          ref: ['urunler = {"çay": 15, "kahve": 45, "tost": 70}', 'ad = input("Ürün: ")', 'fiyat = int(input("Fiyat: "))', 'urunler[ad] = fiyat', 'print(f"{len(urunler)} ürün")'],
          tests: [{ ad: 'kek 120', pre: ['kek', '120'] }, { ad: 'çay 20 (güncelleme)', pre: ['çay', '20'] }] },
        { soru: '`notlar = {"Ali": [60, 80, 100], "Ayşe": [90, 70, 80]}` sözlüğündeki her öğrencinin ortalamasını “Ali 80.0” biçiminde satır satır yaz.',
          ref: ['notlar = {"Ali": [60, 80, 100], "Ayşe": [90, 70, 80]}', 'for ad in notlar:', '    print(ad, sum(notlar[ad]) / len(notlar[ad]))'],
          tests: [{ ad: 'çıktı', pre: [] }] },
        { soru: '`stok = {"elma": 5, "armut": 0, "muz": 12}` sözlüğünde stoğu 0’dan büyük olan ürünleri “elma: 5” biçiminde yaz.',
          ref: ['stok = {"elma": 5, "armut": 0, "muz": 12}', 'for k, v in stok.items():', '    if v > 0:', '        print(f"{k}: {v}")'],
          tests: [{ ad: 'çıktı', pre: [] }] }] }
  ];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function md(s) { return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>'); }
  var KEY = 'mbp207-ders';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(k, v) { var d = load(); d[k] = v; try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* yok say */ } }
  var CSS = '' +
    '.ds-top{display:flex;flex-wrap:wrap;gap:6px;margin:14px 0 18px}.ds-top a{text-decoration:none;color:var(--text);border:1px solid var(--border);background:var(--surface);border-radius:999px;padding:6px 13px;font-size:.88rem;font-weight:600}' +
    '.ds-top a.on{background:var(--accent);border-color:var(--accent);color:#fff}.ds-top a .d{color:var(--ok);margin-left:4px}.ds-top a.on .d{color:#fff}' +
    '.ds-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:16px 20px;margin:0 0 16px;line-height:1.6}' +
    '.ds-card h3{margin:16px 0 6px;font-size:1.05rem;color:var(--accent)}.ds-card h3:first-child{margin-top:0}.ds-card p{margin:.4rem 0}.ds-card ul{margin:.3rem 0;padding-left:20px}' +
    '.ds-card code{font:.86em var(--mono);background:var(--surface-2);border:1px solid var(--border);border-radius:4px;padding:0 4px}' +
    '.ds-card pre{background:var(--code-bg);color:var(--code-text);border-radius:8px;padding:10px 14px;font:13.5px/1.6 var(--mono);overflow-x:auto;margin:8px 0}' +
    '.ds-card table{border-collapse:collapse;width:100%;margin:8px 0;font-size:.93rem}.ds-card th,.ds-card td{border:1px solid var(--border);padding:6px 9px;text-align:left;vertical-align:top}.ds-card th{background:var(--surface-2)}' +
    '.ds-lbl{font-size:.75rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);margin-bottom:6px}' +
    '.ds-ex .io{display:grid;grid-template-columns:1fr 1fr;gap:10px}.ds-ex .io small{color:var(--muted);font-weight:600}@media (max-width:640px){.ds-ex .io{grid-template-columns:1fr}}' +
    '.ds-note{background:var(--accent-soft);border-radius:8px;padding:8px 12px;margin-top:8px}' +
    '.ds-q{border-left:4px solid var(--accent)}.ds-q.ok{border-left-color:var(--ok)}.ds-q .qh{display:flex;gap:10px;align-items:baseline}.ds-q .qn{font-weight:800;color:var(--accent)}.ds-q.ok .qn{color:var(--ok)}';

  function render(app, tid) {
    var K = window.KodAlistirma; K.css();
    if (!document.getElementById('ds-css')) { var st = document.createElement('style'); st.id = 'ds-css'; st.textContent = CSS; document.head.appendChild(st); }
    var t = T.filter(function (x) { return x.id === tid; })[0] || T[0], d = load();
    document.title = t.title + ' · Konu anlatımı · MBP207';
    var html = '<h1>Konu anlatımı</h1><p style="color:var(--muted);margin:.3rem 0 0">Her konuda önce anlatım, sonra çözümlü örnek, en sonda senin çözeceğin 3 soru. Sorular tarayıcıda Python ile kontrol edilir; ' +
      '5 yanlış denemeden sonra çözüm açılır.</p>' +
      '<div class="ds-top">' + T.map(function (x, i) {
        var n = x.sorular.filter(function (q, j) { return d['ok:' + x.id + ':' + j]; }).length;
        return '<a href="#ders/' + x.id + '"' + (x === t ? ' class="on"' : '') + '>' + (i + 1) + '. ' + esc(x.title.split(':')[0]) + (n ? '<span class="d">' + n + '/3</span>' : '') + '</a>';
      }).join('') + '</div>';
    html += '<div class="ds-card"><div class="ds-lbl">Konu anlatımı</div><h2 style="margin:.1rem 0 .6rem">' + esc(t.title) + '</h2>' + t.anlat.map(function (b) {
      if (b[0] === 'h') return '<h3>' + md(b[1]) + '</h3>';
      if (b[0] === 'p') return '<p>' + md(b[1]) + '</p>';
      if (b[0] === 'code') return '<pre>' + esc(b[1]) + '</pre>';
      if (b[0] === 'ul') return '<ul>' + b[1].map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>';
      if (b[0] === 'table') return '<table><tr>' + b[1].map(function (h) { return '<th>' + md(h) + '</th>'; }).join('') + '</tr>' + b[2].map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + md(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</table>';
      return '';
    }).join('') + '</div>';
    var o = t.ornek;
    html += '<div class="ds-card ds-ex"><div class="ds-lbl">Çözümlü örnek</div><p><b>' + md(o.soru) + '</b></p><pre>' + esc(o.kod) + '</pre>' +
      '<div class="io"><div><small>Girdi</small><pre>' + esc(o.girdi || '(girdi yok)') + '</pre></div><div><small>Çıktı</small><pre>' + esc(o.cikti) + '</pre></div></div>' +
      '<div class="ds-note">' + md(o.not) + '</div></div>';
    t.sorular.forEach(function (q, j) {
      var k = t.id + ':' + j;
      html += '<div class="ds-card ds-q' + (d['ok:' + k] ? ' ok' : '') + '" data-j="' + j + '"><div class="qh"><span class="qn">Soru ' + (j + 1) + '</span><span>' + md(q.soru) + '</span></div>' +
        K.editor(d['kod:' + k] || '', 'q' + j) +
        '<div class="kd-bar"><button type="button" class="kd-runbtn">▶ Çalıştır</button><button type="button" class="kd-check">Kontrol et</button><span class="kd-try"></span><button type="button" class="kd-give" hidden>Pes et, çözümü göster</button></div>' +
        (q.fn ? '' : '<div class="kd-run" style="margin-bottom:8px"><div><small>Girdiler (her satıra bir input)</small><textarea>' + esc((q.tests[0].pre || []).join('\n')) + '</textarea></div><div><small>Çıktı</small><pre>▶ Çalıştır’a bas.</pre></div></div>') +
        '<div class="kd-res"></div><div class="kd-sol"></div></div>';
    });
    html += '<div class="kd-bar"><span class="kd-py">Python: ilk çalıştırmada yüklenir</span></div>';
    app.innerHTML = html;
    var pyEl = app.querySelector('.kd-py');
    K.state(function (s) { pyEl.className = 'kd-py ' + s; pyEl.textContent = s === 'yukleniyor' ? 'Python yükleniyor… (ilk sefer ~10 sn)' : s === 'hazir' ? 'Python hazır' : 'Python yüklenemedi, internet bağlantını kontrol et'; });

    app.querySelectorAll('.ds-q').forEach(function (box) {
      var j = +box.dataset.j, q = t.sorular[j], k = t.id + ':' + j;
      var prog = { id: 'ders-' + k, code: q.ref, tests: q.tests.map(function (x) { return { ad: x.ad, pre: x.pre || [], call: x.call || null, cin: [] }; }) };
      var ed = K.wire(box.querySelector('.kd-ed'), function (v) { save('kod:' + k, v); });
      ed.ta.placeholder = q.fn ? '# def ile fonksiyonu yaz' : '# kodunu buraya yaz';
      var tries = load()['try:' + k] || 0, tryEl = box.querySelector('.kd-try'), give = box.querySelector('.kd-give'), chk = box.querySelector('.kd-check'), res = box.querySelector('.kd-res');
      function showTry() { tryEl.textContent = tries ? 'Yanlış deneme: ' + tries + ' / 5' : ''; give.hidden = tries < 5; }
      showTry();
      chk.addEventListener('click', function () {
        chk.disabled = true; chk.textContent = 'Çalışıyor…';
        K.check(prog, ed.ta.value, true).then(function (r) {
          var ok = r.every(function (x) { return x.ok; });
          ed.mark(r.filter(function (x) { return x.got.line; }).map(function (x) { return x.got.line; }));
          res.innerHTML = (ok ? '<div class="kd-win">Doğru! ✓</div>' : '') + K.results(r, true);
          if (ok) { save('ok:' + k, 1); box.classList.add('ok'); } else { tries++; save('try:' + k, tries); showTry(); }
          chk.disabled = false; chk.textContent = 'Kontrol et';
        });
      });
      give.addEventListener('click', function () { box.querySelector('.kd-sol').innerHTML = '<div class="ds-lbl" style="margin-top:8px">Örnek çözüm</div><pre style="background:var(--code-bg);color:var(--code-text);border-radius:8px;padding:10px 14px;font:13.5px/1.6 var(--mono)">' + esc(q.ref.join('\n')) + '</pre>'; });
      var rb = box.querySelector('.kd-runbtn'), rin = box.querySelector('.kd-run textarea'), rout = box.querySelector('.kd-run pre');
      rb.addEventListener('click', function () {
        if (q.fn) { chk.click(); return; }
        rb.disabled = true; rout.className = ''; rout.textContent = 'Çalışıyor…';
        var ls = rin.value.split('\n'); while (ls.length && ls[ls.length - 1] === '') ls.pop();
        K.run([{ code: ed.ta.value, pre: ls, call: null, cin: [] }]).then(function (r) {
          var x = r[0], txt = x.out || '';
          if (x.err) { txt += (txt ? '\n' : '') + '⚠ ' + x.err + (x.line ? ' (satır ' + x.line + ')' : ''); rout.className = 'err'; if (x.line) ed.mark([x.line]); }
          rout.textContent = txt || '(çıktı yok)'; rb.disabled = false;
        });
      });
    });
    window.scrollTo(0, 0);
  }
  window.KonuDers = { render: render, topics: T };
})();
