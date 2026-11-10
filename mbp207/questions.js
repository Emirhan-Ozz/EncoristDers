/* MBP 207 Python soru bankası.
   Hoca test sorusu vermedi. Sorular PythonSunumlar'daki ders kodlarından, Lab 1'den ve
   vize hazırlık sorularından (Gelir Analizi, Diyabet) üretildi.
   type: mc (test), fill (tek boşluk ____), code (4 boşluk {{1}}..{{4}}), open (yazma, model çözüm).
   chk: 'out' → kod çalıştırılınca çıktı (satırlar ", " ile) doğru şıkla aynı olmalı; inp: girdi.
   Bunlar python/check.py ile doğrulanır; sitede kullanılmaz. */
(function () {
  function rng(seed) {
    return function () {
      seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  var R = rng(207);

  // Doğru şık ilk yazılır; şıklar sabit tohumla karıştırılır
  function m(topic, q, code, opts, exp, extra) {
    var idx = opts.map(function (_, i) { return i; });
    for (var i = idx.length - 1; i > 0; i--) { var j = Math.floor(R() * (i + 1)); var x = idx[i]; idx[i] = idx[j]; idx[j] = x; }
    var o = { type: 'mc', topic: topic, q: q, code: code || undefined, opts: idx.map(function (k) { return opts[k]; }), a: idx.indexOf(0), exp: exp };
    return Object.assign(o, extra || {});
  }
  var OUT = { chk: 'out' };
  function out(inp) { return { chk: 'out', inp: inp }; }

  var MC = [
    /* ---------- Temeller ---------- */
    m('temel', 'Kullanıcı `5` yazarsa ekranda ne görünür?', `x = input("Sayı: ")
print(type(x))`, ["`<class 'str'>`", "`<class 'int'>`", "`<class 'float'>`", '`5`'],
      '`input()` her zaman **metin (str)** döndürür; kullanıcı rakam yazsa bile. Sayı için `int(input())`.', out('5')),
    m('temel', 'Bu kod çalışınca ne olur?', `year = input("Doğum yılı: ")
age = 2026 - year
print(age)`, ['`TypeError` hatası verir', '`20` yazar', '`2026` yazar', '`-2006` yazar'],
      '`year` metindir; sayıdan metin çıkarılamaz → **TypeError**. Doğrusu `year = int(input(...))`.'),
    m('temel', 'Hangisi hata verir?', null, ['`int("3.5")`', '`int("35")`', '`float("3.5")`', '`int(3.5)`'],
      '`int()` ondalıklı **metni** çeviremez → ValueError. `int(3.5)` sayıyı keser (3), `float("3.5")` çalışır.'),
    m('temel', 'Ekranda ne görünür?', `print("Hoş geldin", "Ali", "Yaşın:", 20)`, ['`Hoş geldin Ali Yaşın: 20`', '`Hoş geldinAliYaşın:20`', '`Hoş geldin,Ali,Yaşın:,20`', '`Hata verir`'],
      'Virgülle ayrılan değerler arasına `print` **birer boşluk** koyar; sayı ile metin karışık yazılabilir.', OUT),
    m('temel', 'Ekranda ne görünür?', `a = "5"
b = "3"
print(a + b)`, ['`53`', '`8`', '`5 3`', '`Hata verir`'],
      'İkisi de metin: `+` metinleri **yan yana ekler** → `53`. Toplamak için `int(a) + int(b)`.', OUT),
    m('temel', 'Python’da birden çok satırlık açıklama (yorum) nasıl yazılır?', null, ['`"""` ile başlayıp `"""` ile biten blok', '`/* ... */`', '`<!-- ... -->`', '`// ...`'],
      'Tek satır yorum `#`, çok satır için üç tırnak `"""..."""` kullanılır (derste "Çoklu yorum").'),
    m('temel', 'Ekranda ne görünür?', `print(""" Atatürk "Türk, Öğün, Çalış, Güven" demiştir """)`, ['` Atatürk "Türk, Öğün, Çalış, Güven" demiştir `', 'Hata verir; çift tırnak içinde çift tırnak olmaz', '`Atatürk Türk, Öğün, Çalış, Güven demiştir`', '`""" Atatürk ... """` aynen yazılır'],
      'Üç tırnaklı metnin içinde çift tırnak **serbestçe** kullanılabilir; tırnaklar da yazdırılır.'),
    m('temel', 'Ekranda ne görünür?', `print("Hoş geldin 'kanka' ")`, ["`Hoş geldin 'kanka' `", '`Hoş geldin kanka`', 'Hata verir', "`\"Hoş geldin 'kanka' \"`"],
      'Çift tırnaklı metnin içinde **tek tırnak** normal karakterdir, aynen yazılır.', OUT),
    m('temel', 'Kullanıcı sırayla `7` ve `2` girerse ne yazılır?', `x = int(input("1. Sayı: "))
y = int(input("2. Sayı: "))
print(x / y)`, ['`3.5`', '`3`', '`3.0`', '`1`'],
      '`/` her zaman **ondalıklı (float)** bölme yapar: 7 / 2 = 3.5.', out('7\n2')),
    m('temel', 'Hangisi **geçersiz** bir değişken adıdır?', null, ['`2isim`', '`isim2`', '`_sayi`', '`ad_soyad`'],
      'Değişken adı **rakamla başlayamaz**; harf veya `_` ile başlar, boşluk içermez.'),
    m('temel', 'Kullanıcı `42.5` girerse ne yazılır?', `fiyat = float(input("Fiyat: "))
print(fiyat * 2)`, ['`85.0`', '`85`', '`42.542.5`', 'Hata verir'],
      '`float` ondalıklı sayıdır; float ile çarpımın sonucu da float: `85.0`.', out('42.5')),
    m('temel', 'Ekranda ne görünür?', `print(type(6 / 3))`, ["`<class 'float'>`", "`<class 'int'>`", '`2`', '`2.0`'],
      '`/` sonucu tam çıksa bile **float** olur (6 / 3 = 2.0).', OUT),
    m('temel', 'Kullanıcı `2006` girerse ne yazılır?', `year = int(input("Doğum yılınızı giriniz: "))
age = 2026 - year
print("Senin yaşın:", age)`, ['`Senin yaşın: 20`', '`Senin yaşın:20`', '`Senin yaşın: 2026-2006`', 'Hata verir'],
      '`int(...)` ile sayıya çevrildiği için çıkarma çalışır; `print` virgülde boşluk bırakır.', out('2006')),
    m('temel', 'Kullanıcı `abc` yazarsa ne olur?', `sayi = int(input("Sayı: "))`, ['`ValueError` hatası verir, program durur', '`sayi` 0 olur', '`sayi` "abc" olur', 'Python soruyu tekrar sorar'],
      'Harf sayıya çevrilemez → **ValueError**. (Diyabet sorusundaki bonus: çökmemesi için `try / except` gerekir.)'),
    m('temel', 'Ekranda ne görünür?', `x = 5
x = "beş"
print(x)`, ['`beş`', '`5`', '`5 beş`', 'Hata verir; tür değiştirilemez'],
      'Python’da değişkenin türü sabit değildir; son atanan değer geçerlidir.', OUT),

    /* ---------- Metin ve f-string ---------- */
    m('metin', 'Ekranda ne görünür?', `name = "  aHmet kAYA  "
print(name.strip().title())`, ['`Ahmet Kaya`', '`AHMET KAYA`', '`  Ahmet Kaya  `', '`Ahmet kaya`'],
      '`strip()` baş/son boşlukları siler, `title()` **her kelimenin** ilk harfini büyük, kalanını küçük yapar.', OUT),
    m('metin', 'Ekranda ne görünür?', `zorluk = " zor mu "
print(zorluk.strip().capitalize())`, ['`Zor mu`', '`Zor Mu`', '`ZOR MU`', '` Zor mu `'],
      '`capitalize()` sadece **ilk harfi** büyütür. `title()` olsaydı `Zor Mu` olurdu.', OUT),
    m('metin', 'Ekranda ne görünür?', `s = " çay "
s.strip()
print(len(s))`, ['`5`', '`3`', '`4`', '`6`'],
      'Metin metotları değişkeni **değiştirmez**, yeni metin döndürür. Sonuç saklanmadığı için `s` hâlâ 5 karakter. Doğrusu `s = s.strip()`.', OUT),
    m('metin', 'Ekranda ne görünür?', `sehir = "ANKARA"
print(sehir.lower())`, ['`ankara`', '`Ankara`', '`ANKARA`', '`aNKARA`'],
      '`lower()` bütün harfleri küçültür.', OUT),
    m('metin', 'Kullanıcı `1` ve `3` girerse ne yazılır?', `x = int(input())
y = int(input())
z = x / y
print(f"{z:.2f}")`, ['`0.33`', '`0.3333333333333333`', '`0.3`', '`0`'],
      '`:.2f` virgülden sonra **2 basamak** gösterir ve yuvarlar.', out('1\n3')),
    m('metin', 'Ekranda ne görünür?', `print(f"{2.5:.0f}")`, ['`2`', '`3`', '`2.5`', '`2.0`'],
      '`:.0f` yuvarlarken tam ortadaki (.5) değeri **en yakın çift** sayıya çeker (ders notu). 2.5 → 2, 3.5 → 4.', OUT),
    m('metin', 'Ekranda ne görünür?', `print(f"{3.5:.0f}")`, ['`4`', '`3`', '`3.5`', '`4.0`'],
      '.5 durumunda en yakın **çift** sayı: 3.5 → 4.', OUT),
    m('metin', 'Ekranda ne görünür?', `ad = "Ali"
eposta = "ali@mail.com"
print(f"Hoş geldin {ad}"
      f"E-posta: {eposta}")`, ['`Hoş geldin AliE-posta: ali@mail.com`', '`Hoş geldin Ali E-posta: ali@mail.com`', 'İki ayrı satır', 'Hata verir'],
      'Yan yana yazılan f-string’ler **boşluksuz** birleşir; araya boşluk ya da `\\n` konmadıkça bitişik çıkar.', OUT),
    m('metin', 'Kullanıcı `  yilmaz` girerse ne yazılır?', `soyad = input("Soyad: ").strip().upper()
print(soyad)`, ['`YILMAZ`', '`Yilmaz`', '`  YILMAZ`', '`yilmaz`'],
      'Metotlar zincirlenebilir: önce boşluk silinir, sonra hepsi büyük harf.', out('  yilmaz')),
    m('metin', 'Ekranda ne görünür?', `fiyat = 85
print(f"{fiyat:.2f} TL")`, ['`85.00 TL`', '`85 TL`', '`85.0 TL`', '`85,00 TL`'],
      'Tam sayı da `:.2f` ile iki ondalıklı yazılır.', OUT),
    m('metin', 'Ekranda ne görünür?', `ara_toplam = 255
kdv = ara_toplam * 0.10
print(f"KDV (%10)  : {kdv:.2f} TL")`, ['`KDV (%10)  : 25.50 TL`', '`KDV (%10)  : 25.5 TL`', '`KDV (%10)  : 25 TL`', '`KDV (%10)  : 2550 TL`'],
      '255 × 0.10 = 25.5 → `:.2f` ile `25.50`. (Lab 1 Görev 2)', OUT),
    m('metin', 'Ekranda ne görünür?', `print(f"{3 + 4}")`, ['`7`', '`3 + 4`', '`{3 + 4}`', '`34`'],
      'f-string’de `{}` içindeki ifade **hesaplanır**.', OUT),
    m('metin', 'Kullanıcı ` Ali@Mail.COM ` girerse ne yazılır?', `eposta = input("Eposta: ").strip().lower()
print(eposta)`, ['`ali@mail.com`', '`Ali@Mail.COM`', '` ali@mail.com `', '`ALI@MAIL.COM`'],
      'strip boşlukları, lower büyük harfleri temizler.', out(' Ali@Mail.COM ')),
    m('metin', 'Ekranda ne görünür?', `print(round(7 / 3, 2))`, ['`2.33`', '`2.3333`', '`2`', '`2.34`'],
      '`round(sayı, 2)` 2 basamağa yuvarlar (derste `round(x/y, 2)`).', OUT),
    m('metin', 'Ekranda ne görünür?', `urun = "latte"
adet = 3
print(f"{adet} x {urun.title()}")`, ['`3 x Latte`', '`3 x latte`', '`{adet} x {urun.title()}`', '`3 x LATTE`'],
      'f-string içinde metot da çağrılabilir. (Lab 1 Görev 2 çıktısı)', OUT),
    m('metin', 'Hangisi `print("Toplam:", toplam)` ile **aynı** çıktıyı verir?', null, ['`print(f"Toplam: {toplam}")`', '`print("Toplam:" + toplam)`', '`print(f"Toplam:{toplam}")`', '`print("Toplam: {toplam}")`'],
      'Virgül araya boşluk koyar → f-string’de de boşluk yazılmalı. `f` harfi olmadan `{toplam}` aynen yazılır; sayı ile `+` hata verir.'),

    /* ---------- Operatörler ---------- */
    m('operator', 'Ekranda ne görünür?', `print(17 // 5, 17 % 5)`, ['`3 2`', '`3.4 2`', '`2 3`', '`3 0.4`'],
      '`//` tam bölme (3), `%` kalan (2).', OUT),
    m('operator', 'Ekranda ne görünür?', `print(2 ** 3)`, ['`8`', '`6`', '`5`', '`23`'],
      '`**` üs alma: 2³ = 8.', OUT),
    m('operator', 'Ekranda ne görünür?', `x = 10
x += 5
x -= 3
print(x)`, ['`12`', '`10`', '`15`', '`7`'],
      '`+=` ekleyip saklar (15), `-=` çıkarıp saklar (12).', OUT),
    m('operator', 'Ekranda ne görünür?', `score = 85
print(80 <= score < 90)`, ['`True`', '`False`', '`85`', 'Hata verir'],
      'Python zincir karşılaştırmayı destekler: `80 <= 85` ve `85 < 90` → True.', OUT),
    m('operator', 'Ekranda ne görünür?', `a = 5
print(a > 3 and a < 5)`, ['`False`', '`True`', '`5`', '`None`'],
      '`and` için ikisi de doğru olmalı; `5 < 5` yanlış.', OUT),
    m('operator', 'Ekranda ne görünür?', `print(not (3 > 2 or 1 > 2))`, ['`False`', '`True`', '`None`', 'Hata verir'],
      'Parantez: `True or False` → True; `not` tersine çevirir → False.', OUT),
    m('operator', '`x = 5` ile `x == 5` arasındaki fark nedir?', null, ['`=` değer atar, `==` iki değeri karşılaştırır', 'İkisi aynıdır', '`==` atar, `=` karşılaştırır', '`==` sadece metinler için kullanılır'],
      '`=` atama, `==` eşit mi diye sorar ve True/False döner. `if x = 5:` **hata** verir.'),
    m('operator', 'Ekranda ne görünür?', `print(3 + 4 * 2)`, ['`11`', '`14`', '`10`', '`24`'],
      'Çarpma önce yapılır: 4 × 2 = 8, 3 + 8 = 11.', OUT),
    m('operator', 'Ekranda ne görünür?', `print(10 - 4 / 2)`, ['`8.0`', '`3.0`', '`8`', '`3`'],
      'Önce bölme: 4 / 2 = 2.0 (float), 10 − 2.0 = 8.0.', OUT),
    m('operator', 'Ekranda ne görünür?', `fiyat = 6000
oran = 18
print(fiyat * oran / 100)`, ['`1080.0`', '`1080`', '`108.0`', '`6018`'],
      '6000 × 18 = 108000, / 100 = 1080.0 (bölme float verir). (Derste `kdvHesapla(6000, 18)`)', OUT),
    m('operator', 'Ekranda ne görünür?', `print(7 % 2 == 1)`, ['`True`', '`False`', '`1`', '`3`'],
      '7 % 2 = 1 → `1 == 1` True. Tek sayı kontrolü böyle yapılır.', OUT),
    m('operator', 'Ekranda ne görünür?', `toplam = 0
toplam = toplam + 4
toplam += 6
print(toplam)`, ['`10`', '`6`', '`4`', '`0`'],
      '`toplam += 6` ile `toplam = toplam + 6` aynıdır: 0 → 4 → 10.', OUT),

    /* ---------- Koşullar ---------- */
    m('kosul', 'Kullanıcı `5` ve `5` girerse ne yazılır?', `x = int(input("x: "))
y = int(input("y: "))
if x > y:
    print("X Y'den büyüktür")
elif x < y:
    print("Y X'den büyüktür")
else:
    print("X ve Y birbirine eşittir")`, ['`X ve Y birbirine eşittir`', "`X Y'den büyüktür`", "`Y X'den büyüktür`", 'Hiçbir şey yazmaz'],
      'İlk iki koşul yanlış olduğu için `else` çalışır.', out('5\n5')),
    m('kosul', '`score = 80` ise ne yazılır?', `if score >= 90 and score <= 100:
    print("Grade : AA")
elif score >= 80 and score < 90:
    print("Grade : BA")
elif score >= 70 and score < 80:
    print("Grade : BB")
else:
    print("Grade FF")`, ['`Grade : BA`', '`Grade : AA`', '`Grade : BB`', '`Grade : BA` ve `Grade : BB`'],
      '80, `>= 80 and < 90` aralığında. Zincirde sadece **ilk doğru dal** çalışır.', { chk: 'out', pre: 'score = 80' }),
    m('kosul', '`score = 95` ise ne yazılır?', `if score >= 70:
    print("BB")
elif score >= 90:
    print("AA")
else:
    print("FF")`, ['`BB`', '`AA`', '`BB` ve `AA`', '`FF`'],
      'Tuzak: ilk koşul (95 ≥ 70) zaten doğru → `BB` yazılır, `elif` hiç denenmez. Büyük sınır **önce** kontrol edilmeli.', { chk: 'out', pre: 'score = 95' }),
    m('kosul', '`90 <= score <= 100` ifadesi hangisine eşittir?', null, ['`score >= 90 and score <= 100`', '`score >= 90 or score <= 100`', '`score > 90 and score < 100`', '`90 <= score or score <= 100`'],
      'Derste "2. yol": zincir karşılaştırma `and` ile yazılan iki koşulun kısaltmasıdır. Sınırlar dahil (`<=`).'),
    m('kosul', 'Kullanıcı `35.5` girerse ne yazılır?', `plaka = input("Plakanızı Giriniz: ")
match plaka:
    case "35" | "35.5":
        print("İzmir")
    case "06":
        print("Ankara")
    case _:
        print("listede Yok")`, ['`İzmir`', '`listede Yok`', '`Ankara`', 'Hata verir'],
      '`|` aynı case’de birden çok değeri birleştirir ("veya"). `35.5` ikinci değer.', out('35.5')),
    m('kosul', 'Aynı kodda kullanıcı `34` girerse ne yazılır?', `plaka = input("Plakanızı Giriniz: ")
match plaka:
    case "35" | "35.5":
        print("İzmir")
    case "06":
        print("Ankara")
    case _:
        print("listede Yok")`, ['`listede Yok`', '`İzmir`', 'Hiçbir şey yazmaz', 'Hata verir'],
      '`case _:` hiçbir case tutmazsa çalışır (varsayılan / default).', out('34')),
    m('kosul', '`match` yapısında `case _:` ne işe yarar?', null, ['Hiçbir case eşleşmezse çalışır', 'Boş metin girildiğinde çalışır', 'Her durumda en son çalışır', 'Alt çizgi karakteri girilince çalışır'],
      '`_` joker karakterdir; diğer dillerdeki `default` gibi.'),
    m('kosul', '`ay = int(input())` ile kullanıcı `12` girerse ne yazılır?', `ay = int(input("Ay: "))
match ay:
    case "12" | "1" | "2":
        print("Kış")
    case _:
        print("Geçersiz ay")`, ['`Geçersiz ay`', '`Kış`', 'Hata verir', 'Hiçbir şey yazmaz'],
      'Tuzak: `ay` **int** (12) ama case’ler **metin** ("12"). 12 ile "12" eşit değil → `case _`. Lab 1’de bu yüzden `int()` kullanılmadan `.strip()` yapılır.', out('12')),
    m('kosul', 'Kullanıcı `7` girerse ne yazılır?', `def tekMiCiftMi(sayi):
    if sayi % 2 == 0:
        return f"{sayi} Çifttir"
    elif sayi % 2 == 1:
        return f"{sayi} Tektir"

x = int(input("Sayınızı giriniz: "))
print(tekMiCiftMi(x))`, ['`7 Tektir`', '`7 Çifttir`', '`None`', '`1`'],
      '7 % 2 = 1 → ikinci dal; fonksiyon metni **return** eder, `print` yazdırır.', out('7')),
    m('kosul', '`zorluk = "Orta"` ise ne yazılır?', `if not (zorluk == "Zor" or zorluk == "Kolay"):
    print("Geçerli bir zorluk giriniz")
else:
    print("Tamam")`, ['`Geçerli bir zorluk giriniz`', '`Tamam`', 'Hiçbir şey', 'Hata verir'],
      '"Orta" ne "Zor" ne "Kolay" → parantez False → `not` ile True. Geçersiz girişi yakalama kalıbı.', { chk: 'out', pre: 'zorluk = "Orta"' }),
    m('kosul', 'Oyun öneri programında kullanıcı `kolay` ve `çok` girerse hangi oyun önerilir?', `zorluk = input("Zor mu kolay mı? ").strip().capitalize()
oyuncu = input("Çok mu tek mi? ").strip().capitalize()
if zorluk == "Zor" and oyuncu == "Çok":
    print("Briç")
elif zorluk == "Zor" and oyuncu == "Tek":
    print("Sims")
elif zorluk == "Kolay" and oyuncu == "Çok":
    print("Pişti")
else:
    print("Fal Oyunu")`, ['`Pişti`', '`Fal Oyunu`', '`Briç`', '`Sims`'],
      '`capitalize()` küçük girişi "Kolay" / "Çok" yapar; üçüncü koşul doğru.', out('kolay\nçok')),
    m('kosul', '`x = 10` ise ne yazılır?', `if x > 5:
    print("A")
if x > 8:
    print("B")`, ['`A, B` (iki satır)', '`A`', '`B`', 'Hiçbir şey'],
      'İki **ayrı** `if` vardır (elif değil); ikisi de bağımsız kontrol edilir ve ikisi de doğru.', { chk: 'out', pre: 'x = 10', outAs: '`A, B` (iki satır)' }),
    m('kosul', 'Bu kod neden hata verir?', `x = 3
if x > 2
    print("Büyük")`, ['`if` satırının sonunda `:` yok', '`print` girintili yazılmış', '`x` tanımlanmamış', '`>` yerine `=>` yazılmalı'],
      'Python’da `if`, `elif`, `else`, `for`, `while`, `def` satırları **iki nokta (`:`)** ile biter; blok girintiyle başlar.'),
    m('kosul', 'Python’da bir `if` bloğunun hangi satırları kapsadığı nasıl belirlenir?', null, ['Girinti (satır başındaki boşluk) ile', 'Süslü parantez `{ }` ile', '`end if` yazarak', 'Noktalı virgül ile'],
      'Python’da blok **girinti** ile belirlenir; süslü parantez kullanılmaz.'),
    m('kosul', 'Kullanıcı `2` girerse ne yazılır?', `ay = input("Ay numarası (1-12): ").strip()
match ay:
    case "12" | "1" | "2":
        print("Kış")
    case "3" | "4" | "5":
        print("İlkbahar")
    case "6" | "7" | "8":
        print("Yaz")
    case "9" | "10" | "11":
        print("Sonbahar")
    case _:
        print("Geçersiz ay")`, ['`Kış`', '`İlkbahar`', '`Geçersiz ay`', '`Yaz`'],
      '"2" ilk case’in değerlerinden biri. (Lab 1 Görev 6)', out('2')),
    m('kosul', '`sayi = 0` ise ne yazılır?', `if sayi > 0:
    print("Pozitif")
elif sayi < 0:
    print("Negatif")
else:
    print("Sıfır")`, ['`Sıfır`', '`Pozitif`', '`Negatif`', 'Hiçbir şey'],
      '0 ne büyük ne küçük → else.', { chk: 'out', pre: 'sayi = 0' }),

    /* ---------- Fonksiyonlar ---------- */
    m('fonksiyon', 'Ekranda ne görünür?', `def selamla3(isim="Kullanıcı"):
    print(f"Merhaba {isim}")

selamla3()`, ['`Merhaba Kullanıcı`', '`Merhaba`', '`Merhaba isim`', 'Hata verir; parametre eksik'],
      'Parametre verilmezse **varsayılan değer** kullanılır.', OUT),
    m('fonksiyon', 'Ekranda ne görünür?', `def kdvHesapla2(fiyat, oran=20):
    kdv = fiyat * oran / 100
    toplam = fiyat + kdv
    return toplam

print(kdvHesapla2(7000, 10))`, ['`7700.0`', '`700.0`', '`8400.0`', '`7700`'],
      'oran = 10 verildi: kdv = 700.0, toplam = 7700.0 (bölme float).', OUT),
    m('fonksiyon', 'Ekranda ne görünür?', `def kdvHesapla2(fiyat, oran=20):
    return fiyat + fiyat * oran / 100

print(kdvHesapla2(5000))`, ['`6000.0`', '`5000`', '`5100.0`', 'Hata verir'],
      'Oran verilmedi → varsayılan 20: 5000 + 1000.0 = 6000.0.', OUT),
    m('fonksiyon', 'Ekranda ne görünür?', `def f():
    print("A")

x = f()
print(x)`, ['`A, None` (iki satır)', '`A, A`', '`None`', '`A`'],
      '`f()` çağrılınca "A" yazılır. `return` olmadığı için fonksiyon **None** döndürür, `x = None`.', { chk: 'out', outAs: '`A, None` (iki satır)' }),
    m('fonksiyon', '`tekveCiftToplam(5)` ne döndürür?', `def tekveCiftToplam(sayi):
    ciftToplam = 0
    tekToplam = 0
    for i in range(sayi + 1):
        if i % 2 == 0:
            ciftToplam += i
        else:
            tekToplam += i
    return ciftToplam, tekToplam`, ['`(6, 9)`', '`(9, 6)`', '`(4, 9)`', '`15`'],
      '0..5 arası: çiftler 0+2+4 = 6, tekler 1+3+5 = 9. Önce `ciftToplam` döner.', { chk: 'out', post: 'print(tekveCiftToplam(5))' }),
    m('fonksiyon', 'Ekranda ne görünür?', `def main():
    print("Program başladı")`, ['Hiçbir şey', '`Program başladı`', '`main`', 'Hata verir'],
      'Fonksiyon sadece **tanımlandı**, çağrılmadı. Bu yüzden dosyanın sonunda `main()` yazılır.', { chk: 'out', outAs: 'Hiçbir şey' }),
    m('fonksiyon', 'Ekranda ne görünür?', `def test():
    return "Bitti"
    print("Çalıştı")

print(test())`, ['`Bitti`', '`Çalıştı`', '`Çalıştı, Bitti`', '`None`'],
      '`return` fonksiyonu **hemen bitirir**; sonraki satır hiç çalışmaz.', OUT),
    m('fonksiyon', 'Ekranda ne görünür?', `print(isinstance("5", int))`, ['`False`', '`True`', '`5`', 'Hata verir'],
      '`"5"` tırnaklı → str. `isinstance(değer, tür)` türü kontrol eder.', OUT),
    m('fonksiyon', '`toplamaYap("5")` çağrılırsa ne olur?', `def toplamaYap(sayi):
    if not isinstance(sayi, int):
        raise Exception("Sayı değeriniz int olmalı")
    return sayi`, ['"Sayı değeriniz int olmalı" hatasıyla program durur', '`5` döner', '`None` döner', 'Ekrana uyarı yazar, program devam eder'],
      '`raise Exception(...)` hata **fırlatır**; yakalanmazsa program durur ve mesaj görünür.'),
    m('fonksiyon', 'Ekranda ne görünür?', `def toplamaYap(sayi):
    deger = 0
    toplam = 0
    while deger <= sayi:
        toplam += deger
        deger = deger + 1
    return toplam

print(toplamaYap(4))`, ['`10`', '`6`', '`4`', '`15`'],
      '0+1+2+3+4 = 10. `<=` olduğu için 4 de dahil.', OUT),
    m('fonksiyon', 'Ekranda ne görünür?', `def oner(oyun):
    print(f"{oyun} aradığın oyun olabilir")

oner("Briç")`, ['`Briç aradığın oyun olabilir`', '`{oyun} aradığın oyun olabilir`', '`oyun aradığın oyun olabilir`', 'Hiçbir şey'],
      'Parametre `oyun` = "Briç"; f-string değeri yerine koyar.', OUT),
    m('fonksiyon', 'Ekranda ne görünür?', `def kdv_hesapla(fiyat):
    return fiyat * 0.20

kdv_hesapla(100)`, ['Hiçbir şey', '`20.0`', '`20`', '`None`'],
      'Fonksiyon değeri **döndürür** ama sonuç ne yazdırılıyor ne saklanıyor. Görmek için `print(kdv_hesapla(100))`.', { chk: 'out', outAs: 'Hiçbir şey' }),
    m('fonksiyon', '`return` ile `print` arasındaki fark nedir?', null, ['`return` değeri çağıran koda geri verir; `print` sadece ekrana yazar', 'İkisi de aynıdır', '`print` değeri saklar, `return` ekrana yazar', '`return` sadece main() içinde kullanılır'],
      'Diyabet sorusunda "fonksiyon sonucu ekrana yazdırmamalı, **return** etmelidir" deniyor: sonucu `main()` yazdırır.'),
    m('fonksiyon', 'Ekranda ne görünür?', `def hesapla(a, b):
    return a + b, a * b

x, y = hesapla(2, 5)
print(y)`, ['`10`', '`7`', '`(7, 10)`', '`2`'],
      'İki değer döner: (7, 10). Sırayla `x = 7`, `y = 10`.', OUT),
    m('fonksiyon', 'Ekranda ne görünür?', `def bol(a, b):
    return a / b

print(bol(9, 3))`, ['`3.0`', '`3`', '`27`', '`0.333`'],
      '`/` float verir.', OUT),
    m('fonksiyon', 'Dosyanın sonundaki `main()` satırının görevi nedir?', null, ['Tanımlanan main fonksiyonunu çalıştırmak', 'main fonksiyonunu tanımlamak', 'Programı bitirmek', 'Hiçbir görevi yok, alışkanlık'],
      '`def main():` sadece tanımlar; en alttaki `main()` **çağırır**. Ödevlerde "Programınız main() ile başlamalıdır".'),

    /* ---------- Döngüler ---------- */
    m('dongu', 'Bu döngü ekrana kaç sayı yazar?', `for i in range(0, 10, 1):
    print(i)`, ['`10` (0’dan 9’a)', '`11` (0’dan 10’a)', '`9` (1’den 9’a)', '`10` (1’den 10’a)'],
      '`range(bas, bit, adım)`: bitiş **dahil değil** → 0..9 = 10 sayı. `range(10)` ile aynı.'),
    m('dongu', 'Ekranda ne görünür?', `for i in range(10, 0, -1):
    print(i, end=" ")`, ['`10 9 8 7 6 5 4 3 2 1`', '`10 9 8 7 6 5 4 3 2 1 0`', '`9 8 7 6 5 4 3 2 1 0`', 'Hiçbir şey'],
      'Adım −1 geriye sayar; bitiş (0) dahil değil.', OUT),
    m('dongu', 'Ekranda ne görünür?', `for sira in range(1, 4):
    print(sira, end=" ")`, ['`1 2 3`', '`1 2 3 4`', '`0 1 2 3`', '`1, 2, 3`'],
      '`end=" "` alt satıra geçmeden boşluk bırakır; 4 dahil değil.', OUT),
    m('dongu', 'Döngüden sonra `toplam` kaçtır?', `toplam = 0
for i in range(10):
    toplam = toplam + i
print(toplam)`, ['`45`', '`55`', '`10`', '`9`'],
      '0+1+…+9 = 45. (10 dahil değil, yoksa 55 olurdu.)', OUT),
    m('dongu', 'Döngü kaç kez döner?', `a = 1
while a < 10:
    print(a)
    a = a + 1`, ['`9`', '`10`', '`1`', 'Sonsuz döner'],
      'a = 1..9 için döner (9 kez); a = 10 olunca `a < 10` yanlış.'),
    m('dongu', 'Bu kodun sorunu nedir?', `a = 1
while a < 10:
    print(a)`, ['`a` hiç artmadığı için sonsuz döngü olur', 'Hiç çalışmaz', 'Sadece 1 kez yazar', 'Hata verir'],
      'Koşuldaki değişken döngüde değişmezse koşul hep doğru kalır → **sonsuz döngü**. `a += 1` unutulmamalı.'),
    m('dongu', '`while True:` ile yazılan menüden nasıl çıkılır?', null, ['`break` ile', '`continue` ile', '`return False` yazmadan çıkılamaz', '`exit` değişkenine True atayarak'],
      '`while True` kendiliğinden bitmez; menüde 0 seçilince `break` döngüyü kırar.'),
    m('dongu', 'Ekranda ne görünür?', `for i in range(5):
    if i == 3:
        break
    print(i, end=" ")`, ['`0 1 2`', '`0 1 2 3`', '`0 1 2 4`', '`3`'],
      'i = 3 olunca döngü **tamamen** biter, 3 yazılmaz.', OUT),
    m('dongu', 'Ekranda ne görünür?', `for i in range(5):
    if i % 2 == 0:
        continue
    print(i, end=" ")`, ['`1 3`', '`0 2 4`', '`0 1 2 3 4`', '`1 3 5`'],
      '`continue` turun **kalanını atlar**, döngü devam eder: çiftler yazılmaz.', OUT),
    m('dongu', 'Ekranda ne görünür?', `for i in range(2, 11, 3):
    print(i, end=" ")`, ['`2 5 8`', '`2 5 8 11`', '`3 6 9`', '`2 4 6 8 10`'],
      '2’den başla, 3’er artır, 11’e ulaşmadan dur: 2, 5, 8.', OUT),
    m('dongu', 'İç içe döngüde `koltuk` numarası toplam kaç kez yazılır?', `for sira in range(1, 4):
    print(sira, end=" ")
    for koltuk in range(1, 31):
        print(koltuk, end=" ")
    print()`, ['`90`', '`30`', '`93`', '`120`'],
      'Dış döngü 3 tur (1, 2, 3), her turda iç döngü 30 koltuk → 3 × 30 = 90.'),
    m('dongu', 'Döngüden sonra `toplam` kaçtır?', `sayi = 3
deger = 0
toplam = 0
while deger <= sayi:
    toplam += deger
    deger += 1
print(toplam)`, ['`6`', '`3`', '`10`', '`0`'],
      '0+1+2+3 = 6.', OUT),
    m('dongu', '`tekveCiftToplam` fonksiyonunda neden `range(sayi + 1)` yazılmıştır?', null, ['`sayi`nın kendisi de toplama girsin diye', 'Döngü 1’den başlasın diye', 'Sonsuz döngü olmasın diye', 'Çift sayıları atlamak için'],
      '`range(n)` n’yi dahil etmez; `n + 1` yazınca son değer n olur.'),
    m('dongu', 'Hesap makinesi menüsünde `0` seçilince ne olur?', `while True:
    islem = int(input("İşlem Seçiniz: "))
    if islem == 1:
        print("toplama")
    elif islem == 0:
        print("İşlem sonlandı")
        break`, ['"İşlem sonlandı" yazılır ve döngü biter', 'Döngü başa döner', 'Program hata verir', 'Hiçbir şey olmaz, tekrar sorulur'],
      '`break` en içteki döngüyü sonlandırır.', { chk: 'out', inp: '0', outAs: '"İşlem sonlandı" yazılır ve döngü biter', expOut: 'İşlem Seçiniz: İşlem sonlandı' }),
    m('dongu', 'Döngüden sonra `sayac` kaçtır?', `sayac = 0
for i in range(3, 8):
    sayac += 1
print(sayac)`, ['`5`', '`8`', '`3`', '`6`'],
      '3, 4, 5, 6, 7 → 5 tur. Kural: `range(a, b)` → b − a tur.', OUT),
    m('dongu', 'Ekranda ne görünür?', `i = 10
while i > 0:
    print(i, end=" ")
    i -= 3`, ['`10 7 4 1`', '`10 7 4 1 -2`', '`10 7 4`', '`7 4 1`'],
      '10, 7, 4, 1 yazılır; sonra i = −2, koşul yanlış.', OUT),

    /* ---------- Listeler ---------- */
    m('liste', 'Ekranda ne görünür?', `gunler2 = [12, 32, 45, 98, 36, 45, 103]
print(gunler2[3])`, ['`98`', '`45`', '`36`', '`32`'],
      'İndeks 0’dan başlar: [0]=12, [1]=32, [2]=45, [3]=98.', OUT),
    m('liste', 'Ekranda ne görünür?', `gunler2 = [12, 32, 45, 98, 36, 45, 103]
print(gunler2[-1])`, ['`103`', '`12`', '`45`', 'Hata verir'],
      '`-1` **son** eleman; `-2` sondan ikinci.', OUT),
    m('liste', 'Ekranda ne görünür?', `gunler2 = [12, 32, 45, 98, 36, 45, 103]
print(gunler2[-len(gunler2)])`, ['`12`', '`103`', '`7`', 'Hata verir'],
      '`len` = 7 → `gunler2[-7]` = ilk eleman (12).', OUT),
    m('liste', 'Ekranda ne görünür?', `ogrenciler = ["Burak", 3602514, 15.4]
print(len(ogrenciler))`, ['`3`', '`5`', '`14`', 'Hata verir; farklı türler karışamaz'],
      'Liste farklı türleri tutabilir; 3 eleman var.', OUT),
    m('liste', 'İlk satırda ne görünür?', `icecekler = ["Kahve", "Kola", "Çay", "Ayran"]
for index, deger in enumerate(icecekler):
    print(f"{index+1} .içecek {deger}")`, ['`1 .içecek Kahve`', '`0 .içecek Kahve`', '`1 .içecek Kola`', '`Kahve .içecek 1`'],
      '`enumerate` (sıra, değer) çiftleri verir, sıra 0’dan başlar; `index+1` ile 1 yazılır.', { chk: 'first' }),
    m('liste', 'Ekranda ne görünür?', `urunler = ["Çay", "Kahve", "Boyoz", "Gevrek", "Çay"]
print(urunler.count("Çay"))`, ['`2`', '`1`', '`0`', '`5`'],
      '`count` değerin kaç kez geçtiğini sayar.', OUT),
    m('liste', 'Ekranda ne görünür?', `urunler = ["Çay", "Kahve", "Boyoz", "Gevrek", "Çay"]
print(urunler.index("Kahve"))`, ['`1`', '`2`', '`0`', '`Kahve`'],
      '`index` değerin **ilk** bulunduğu konumu verir.', OUT),
    m('liste', 'Ekranda ne görünür?', `urunler = ["Çay", "Kahve", "Boyoz", "Gevrek", "Çay"]
urunler.pop()
urunler.pop(2)
print(urunler)`, ["`['Çay', 'Kahve', 'Gevrek']`", "`['Çay', 'Kahve', 'Boyoz']`", "`['Kahve', 'Boyoz', 'Gevrek']`", "`['Çay', 'Boyoz', 'Gevrek']`"],
      '`pop()` sondaki "Çay"ı siler. Sonra `pop(2)` 2. indeksi ("Boyoz") siler.', OUT),
    m('liste', 'Ekranda ne görünür?', `sayilar = [12, 25, 36, 85, 62]
sirali = sorted(sayilar)
print(sayilar[3], sirali[3])`, ['`85 62`', '`62 85`', '`85 85`', '`62 62`'],
      '`sorted` **yeni** sıralı liste döndürür, orijinal değişmez: sayilar[3] = 85, sirali = [12, 25, 36, 62, 85].', OUT),
    m('liste', 'Ekranda ne görünür?', `sayilar = [12, 25, 36, 85, 62]
print(sum(sayilar) / len(sayilar))`, ['`44.0`', '`44`', '`220`', '`36`'],
      'Toplam 220, eleman 5 → 44.0.', OUT),
    m('liste', 'Ekranda ne görünür?', `siparisler = []
siparisler.append("Çay")
siparisler.append("Kahve")
print(len(siparisler), siparisler)`, ["`2 ['Çay', 'Kahve']`", "`2 ['Kahve', 'Çay']`", "`1 ['Çay', 'Kahve']`", "`2 Çay Kahve`"],
      '`append` **sona** ekler.', OUT),
    m('liste', 'Ekranda ne görünür?', `menu = ["Çay", "Kahve"]
print("Tost" in menu, "Tost" not in menu)`, ['`False True`', '`True False`', '`False False`', 'Hata verir'],
      '`in` eleman var mı diye bakar.', OUT),
    m('liste', 'Bu kod ne olur?', `gunler = [12, 32, 45, 98, 36, 45, 103]
print(gunler[7])`, ['`IndexError` hatası verir', '`103` yazar', '`None` yazar', '`12` yazar (başa döner)'],
      '7 eleman → son indeks 6. Liste dışı indeks → **IndexError** (slice’ta hata yok, indekste var).'),
    m('liste', 'İlk satırda ne görünür?', `gelirler = [30000, 40000, 50000]
for ay, gelir in enumerate(gelirler, start=5):
    print(ay, gelir)`, ['`5 30000`', '`0 30000`', '`5 50000`', '`1 30000`'],
      '`start=5` sayacı 5’ten başlatır; liste yine baştan gezilir.', { chk: 'first' }),
    m('liste', '`siparisler2 = list()` ne oluşturur?', null, ['Boş bir liste (`[]` ile aynı)', 'İçinde 0 olan bir liste', 'Boş bir sözlük', 'Hata verir'],
      'Derste: `siparisler = []` ile `siparisler2 = list()` aynıdır.'),
    m('liste', 'Ekranda ne görünür?', `notlar = [80, 90, 70]
notlar[2] = notlar[2] + 10
print(notlar)`, ['`[80, 90, 80]`', '`[80, 90, 70, 10]`', '`[80, 100, 70]`', '`[80, 90, 70]`'],
      'İndeksle eleman **değiştirilebilir**. (Derste "10 puan eksik girilen notu düzelttik")', OUT),
    m('liste', 'Son satırda ne görünür?', `icecekler = ["Kahve", "Kola", "Çay", "Ayran"]
for index in range(0, len(icecekler)):
    print(f"{index+1} .içecek {icecekler[index]}")`, ['`4 .içecek Ayran`', '`3 .içecek Ayran`', '`4 .içecek Çay`', 'IndexError'],
      '`range(0, 4)` → 0..3; son tur index = 3 → "4 .içecek Ayran".', { chk: 'last' }),
    m('liste', 'Hangisi listenin **son** elemanını vermez?', `sayilar = [5, 8, 13]`, ['`sayilar[len(sayilar)]`', '`sayilar[-1]`', '`sayilar[len(sayilar)-1]`', '`sayilar[2]`'],
      '`len` = 3 → `sayilar[3]` liste dışı (IndexError). Son eleman `len - 1`.'),
    m('liste', 'Ekranda ne görünür?', `sayilar = [4, 7, 1]
toplam = 0
for i in sayilar:
    toplam = toplam + i
print("Toplam", toplam)`, ['`Toplam 12`', '`Toplam 3`', '`Toplam 471`', '`Toplam 7`'],
      '`for i in liste` **değerleri** gezer: 4 + 7 + 1 = 12. (`sum(sayilar)` ile aynı)', OUT),

    /* ---------- Slice ---------- */
    m('slice', 'Ekranda ne görünür?', `sicaklik = [18, 21, 19, 24, 26, 23, 20]
print(sicaklik[0:3])`, ['`[18, 21, 19]`', '`[18, 21, 19, 24]`', '`[21, 19, 24]`', '`[18, 19]`'],
      '`[0:3]` → 0, 1, 2 indeksleri (3 **dahil değil**) = ilk üç gün.', OUT),
    m('slice', 'Ekranda ne görünür?', `sicaklik = [18, 21, 19, 24, 26, 23, 20]
print(sicaklik[5:7])`, ['`[23, 20]`', '`[26, 23, 20]`', '`[23]`', 'Hata verir'],
      '5 ve 6. indeks = hafta sonu. `sicaklik[5:]` ile aynı.', OUT),
    m('slice', 'Ekranda ne görünür?', `sicaklik = [18, 21, 19, 24, 26, 23, 20]
print(sicaklik[1::2])`, ['`[21, 24, 23]`', '`[18, 19, 26, 20]`', '`[21, 19]`', '`[21, 24, 23, 20]`'],
      '1’den başla, sona kadar, **ikişer** atla: indeks 1, 3, 5.', OUT),
    m('slice', 'Ekranda ne görünür?', `sicaklik = [18, 21, 19, 24, 26, 23, 20]
print(sicaklik[2:100])`, ['`[19, 24, 26, 23, 20]`', '`IndexError` hatası', '`[]`', '`[21, 19, 24, 26, 23, 20]`'],
      'Slice’ta sınırı aşan bitiş **hata vermez**, listenin sonunda durur.', OUT),
    m('slice', 'Ekranda ne görünür?', `sicaklik = [18, 21, 19, 24, 26, 23, 20]
print(sicaklik[-3:])`, ['`[26, 23, 20]`', '`[18, 21, 19]`', '`[23, 20]`', '`[24, 26, 23]`'],
      '`[-3:]` son üç eleman.', OUT),
    m('slice', 'Ekranda ne görünür?', `notlar = [80, 90, 80, 46, 95, 32, 76, 98, 12]
MBP203 = notlar[3:6]
print(MBP203)`, ['`[46, 95, 32]`', '`[80, 46, 95]`', '`[46, 95, 32, 76]`', '`[95, 32, 76]`'],
      'İndeks 3, 4, 5. Dokuz not üçerli gruplara bölünür: [0:3], [3:6], [6:9].', OUT),
    m('slice', 'Kullanıcı başlangıç `3`, bitiş `5` girerse liste ne olur?', `gelirler = [30000, 40000, 50000, 42000, 55000, 25000]
baslangic = int(input("Başlangıç: "))
bitis = int(input("Bitiş: "))
print(gelirler[baslangic-1:bitis])`, ['`[50000, 42000, 55000]`', '`[42000, 55000]`', '`[50000, 42000]`', '`[42000, 55000, 25000]`'],
      'Ay numarası 1’den, indeks 0’dan başlar: 3. ay = indeks 2 → `[2:5]` = 3, 4, 5. aylar. (Gelir analizi 2.2)', out('3\n5')),
    m('slice', '`sicaklik[:3]` neye eşittir?', null, ['`sicaklik[0:3]`', '`sicaklik[3:]`', '`sicaklik[1:3]`', '`sicaklik[0:4]`'],
      'Başlangıç yazılmazsa 0 kabul edilir.'),
    m('slice', 'Ekranda ne görünür?', `sicaklik = [18, 21, 19, 24, 26, 23, 20]
print(sicaklik[4:2])`, ['`[]`', '`[26, 24]`', '`[24, 26]`', 'Hata verir'],
      'Başlangıç bitişten büyükse (adım pozitifken) **boş liste** döner.', OUT),
    m('slice', 'Ekranda ne görünür?', `notlar = [80, 90, 80]
ort = sum(notlar) / len(notlar)
print(f"{ort:.2f}")`, ['`83.33`', '`83.3`', '`83`', '`250`'],
      '250 / 3 = 83.333… → `:.2f` = 83.33.', OUT),
    m('slice', 'Ekranda ne görünür?', `harfler = ["a", "b", "c", "d", "e"]
print(harfler[1:4])`, ["`['b', 'c', 'd']`", "`['a', 'b', 'c', 'd']`", "`['b', 'c', 'd', 'e']`", "`['b', 'c']`"],
      'Bitiş (4) dahil değil: indeks 1, 2, 3.', OUT),

    /* ---------- Sözlükler ---------- */
    m('sozluk', 'Ekranda ne görünür?', `urunler = {"çay": 15, "kahve": 45, "tost": 70}
print(urunler["çay"])`, ['`15`', '`çay`', '`0`', "`{'çay': 15}`"],
      'Sözlükte değer **anahtarla** okunur.', OUT),
    m('sozluk', 'Ekranda ne görünür?', `urunler = {"çay": 15, "kahve": 45, "tost": 70}
urunler["kek"] = 120
print(len(urunler))`, ['`4`', '`3`', '`120`', 'Hata verir; kek yok'],
      'Olmayan anahtara atama **yeni eleman ekler**.', OUT),
    m('sozluk', 'Ekranda ilk satırda ne görünür?', `urunler = {"çay": 15, "kahve": 45, "tost": 70}
for urun in urunler:
    print(urun)`, ['`çay`', '`15`', "`('çay', 15)`", "`çay 15`"],
      '`for` sözlükte **anahtarları** gezer. Değer için `urunler[urun]`.', { chk: 'first' }),
    m('sozluk', 'Ne olur?', `urunler = {"çay": 15, "kahve": 45}
print(urunler["su"])`, ['`KeyError` hatası verir', '`None` yazar', '`0` yazar', '"su menüde yok" yazar'],
      'Olmayan anahtar okunursa **KeyError**. Önce `if secim in urunler:` ile kontrol edilir.'),
    m('sozluk', 'Ekranda ne görünür?', `urunler = {"çay": 15, "kahve": 45, "tost": 70}
print("tost" in urunler, 70 in urunler)`, ['`True False`', '`True True`', '`False True`', '`False False`'],
      '`in` sözlükte **anahtarlara** bakar; 70 bir değer, anahtar değil.', OUT),
    m('sozluk', 'Ekranda ne görünür?', `notlar = {"Burak": [35, 12, 9], "Arda": [95, 35, 45]}
notlar["Arda"][1] = 50
print(notlar["Arda"])`, ['`[95, 50, 45]`', '`[50, 35, 45]`', '`[95, 35, 50]`', '`50`'],
      'Önce anahtar ("Arda") listeyi verir, sonra `[1]` listenin 2. elemanı.', OUT),
    m('sozluk', 'Ekranda ne görünür?', `notlar = {"Burak": [35, 12, 9]}
print(notlar["Burak"][0])`, ['`35`', '`[35, 12, 9]`', '`9`', '`Burak`'],
      'Listenin ilk elemanı.', OUT),
    m('sozluk', 'Ekranda ne görünür?', `notlar = {"Burak": {"Vize": 50, "Final": 95, "Pro": 100},
          "Güliz": {"Vize": 100, "Final": 95, "Pro": 1}}
print(notlar["Burak"]["Final"])`, ['`95`', '`50`', '`100`', "`{'Final': 95}`"],
      'İç içe sözlük: önce öğrenci, sonra ders anahtarı.', OUT),
    m('sozluk', 'Ekranda ne görünür?', `urunler = {"çay": 15, "kahve": 45}
urunler["çay"] = 20
print(urunler)`, ["`{'çay': 20, 'kahve': 45}`", "`{'çay': 15, 'kahve': 45, 'çay': 20}`", "`{'çay': 35, 'kahve': 45}`", 'Hata verir'],
      'Var olan anahtara atama değeri **günceller**; anahtarlar tekrar etmez.', OUT),
    m('sozluk', 'İlk satırda ne görünür?', `urunler = {"çay": 15, "kahve": 45, "tost": 70}
for urun in urunler:
    print(f"{urun} fiyatı {urunler[urun]}")`, ['`çay fiyatı 15`', '`15 fiyatı çay`', '`urun fiyatı 15`', '`çay fiyatı urunler[urun]`'],
      '`urun` anahtar, `urunler[urun]` değer.', { chk: 'first' }),
    m('sozluk', 'Kullanıcı `tost` girerse ne yazılır?', `urunler = {"çay": 15, "kahve": 45, "tost": 70}
secim = input("Ürün: ")
if secim in urunler:
    print(f"{secim}: {urunler[secim]}")
else:
    print(f"{secim} menüde yok")`, ['`tost: 70`', '`tost menüde yok`', '`70`', 'KeyError'],
      'Anahtar var → değeri yazılır.', out('tost')),
    m('sozluk', 'Ekranda ne görünür?', `notlar = {"Ali": [60, 80, 100]}
print(sum(notlar["Ali"]) / len(notlar["Ali"]))`, ['`80.0`', '`80`', '`240`', '`3`'],
      'Listenin ortalaması: 240 / 3 = 80.0.', OUT),

    /* ---------- Vize hazırlık ve Lab 1 ---------- */
    m('uygulama', 'Gelir listesinde ortalamanın üstündeki ayları yazan fonksiyon kaç ay yazar?', `gelirler = [30000, 40000, 50000, 42000, 55000, 25000,
            36000, 30000, 52000, 45000, 28000, 48000]
ortalama = sum(gelirler) / len(gelirler)
for ay, gelir in enumerate(gelirler, start=1):
    if gelir >= ortalama:
        print(f"{ay} ay geliri {gelir}")`, ['`6`', '`5`', '`7`', '`12`'],
      'Ortalama 481000 / 12 ≈ 40083. Üstündekiler: 3, 4, 5, 9, 10, 12. aylar → 6 ay. 2. ay (40000) ortalamanın **altında**.', { chk: 'count', outAs: '`6`' }),
    m('uygulama', 'İlk satırda ne görünür?', `gelirler = [30000, 40000, 50000]
for ay, gelir in enumerate(gelirler):
    print(f"{ay+1} ay geliri {gelir}")`, ['`1 ay geliri 30000`', '`0 ay geliri 30000`', '`1 ay geliri 40000`', '`ay+1 ay geliri 30000`'],
      'Gelir analizi 2.1: ay numarası 0’dan değil 1’den görünsün diye `ay+1` (ya da `start=1`).', { chk: 'first' }),
    m('uygulama', 'Kullanıcı 2. aydan 4. aya kadar istiyor. Doğru dilim hangisi?', `gelirler = [30000, 40000, 50000, 42000, 55000]`, ['`gelirler[1:4]`', '`gelirler[2:4]`', '`gelirler[2:5]`', '`gelirler[1:3]`'],
      'Ay → indeks için bir eksiği: 2. ay = indeks 1. Bitiş dahil olmadığı için 4 yazılır: `[bas-1:bit]`.'),
    m('uygulama', 'Başlangıç `1`, bitiş `3` girilirse ne yazılır?', `gelirler = [30000, 40000, 50000, 42000]
bas = int(input())
bit = int(input())
yeni = gelirler[bas-1:bit]
print(sum(yeni), sum(yeni) / len(yeni))`, ['`120000 40000.0`', '`120000 40000`', '`70000 35000.0`', '`162000 40500.0`'],
      'İlk üç ay: 30000 + 40000 + 50000 = 120000, ortalama 40000.0. (Gelir analizi 2.3)', out('1\n3')),
    m('uygulama', '`apg1_kontrol(110)` ne döndürür?', `def apg1_kontrol(apg1):
    if apg1 < 100:
        return "Sonucunuz Normal"
    elif apg1 >= 100 and apg1 < 126:
        return "OGTT"
    else:
        return "Diyabet hastasısınız"`, ['`"OGTT"`', '`"Sonucunuz Normal"`', '`"Diyabet hastasısınız"`', '`None`'],
      '100 ≤ 110 < 126 → OGTT testine yönlendirilir.', { chk: 'out', post: 'print(repr(apg1_kontrol(110)).replace(chr(39), chr(34)))' }),
    m('uygulama', 'Diyabet programında APG1 = `126` girilirse sonuç nedir?', null, ['Diyabet hastası', 'Normal', 'OGTT’ye yönlendirilir', 'Hata'],
      '“126 ve üstü” diyabet. 100–125 arası OGTT, 100’ün altı normal.'),
    m('uygulama', '`ogtt_kontrol(95, 160)` ne döndürür?', `def ogtt_kontrol(apg2, pg):
    if apg2 >= 126 or pg >= 200:
        return "Diyabet Hastasısınız"
    elif (apg2 >= 100 and apg2 <= 125) and (pg >= 140 and pg <= 199):
        return "BAG ve BGT"
    elif (apg2 >= 100 and apg2 <= 125) and pg < 140:
        return "İzole BAG"
    elif apg2 < 100 and (pg >= 140 and pg <= 199):
        return "İzole BGT"
    else:
        return "Sonucunuz Normal"`, ['`"İzole BGT"`', '`"İzole BAG"`', '`"BAG ve BGT"`', '`"Sonucunuz Normal"`'],
      'APG2 normal (< 100), PG 140–199 arası → yalnız tokluk bozuk: **İzole BGT**.', { chk: 'out', post: 'print(repr(ogtt_kontrol(95, 160)).replace(chr(39), chr(34)))' }),
    m('uygulama', 'APG2 = `110`, PG = `120` ise sonuç nedir?', null, ['İzole BAG', 'İzole BGT', 'BAG ve BGT', 'Normal'],
      'APG2 100–125 (açlık bozuk), PG < 140 (tokluk normal) → **İzole BAG**.'),
    m('uygulama', 'APG2 = `110`, PG = `160` ise sonuç nedir?', null, ['BAG ve BGT', 'İzole BAG', 'İzole BGT', 'Diyabet'],
      'İkisi de bozuk aralıkta → **BAG ve BGT**.'),
    m('uygulama', 'APG2 = `95`, PG = `200` ise sonuç nedir?', null, ['Diyabet', 'İzole BGT', 'Normal', 'BAG ve BGT'],
      'PG ≥ 200 → APG2’ye bakılmadan **diyabet**. OGTT’de önce diyabet koşulu kontrol edilir.'),
    m('uygulama', '`ogtt_kontrol` içinde diyabet koşulu neden **ilk** kontrol edilir?', null, ['APG2 ≥ 126 veya PG ≥ 200 ise diğer değere bakılmadan sonuç diyabet olduğu için', 'Alfabetik sıra gereği', 'Python’da `or` ilk yazılmak zorunda olduğu için', 'Sıranın önemi yoktur'],
      'Ödev metni: “APG2 ≥ 126 veya PG ≥ 200 ise diğer değere bakılmaz.” if–elif’te ilk doğru dal çalıştığı için bu kontrol en başta olmalı.'),
    m('uygulama', 'Vize `70`, final `80` girilirse ne yazılır? (Lab 1 Görev 4)', `vize = 70
final = 80
ortalama = vize * 0.4 + final * 0.6
print(f"Ortalama: {ortalama:.1f}")`, ['`Ortalama: 76.0`', '`Ortalama: 75.0`', '`Ortalama: 76`', '`Ortalama: 74.0`'],
      '70 × 0.4 = 28, 80 × 0.6 = 48 → 76.0 (harf notu CB).', OUT),
    m('uygulama', 'Lab 1 not hesaplamada vize `100`, final `40` olan öğrencinin harf notu nedir?', null, ['FF', 'DD', 'DC', 'CC'],
      'Ortalama 64 (DC aralığı) ama kural: **final 50’nin altındaysa harf notu her zaman FF**.'),
    m('uygulama', '`harf_notu(85)` ne döndürür?', `def harf_notu(ortalama):
    if ortalama >= 90:
        return "AA"
    elif ortalama >= 85:
        return "BA"
    elif ortalama >= 80:
        return "BB"
    else:
        return "CB"`, ['`"BA"`', '`"BB"`', '`"AA"`', '`"CB"`'],
      '85 ≥ 85 → BA. Sınır `>=` olduğu için 85 dahil.', { chk: 'out', post: 'print(repr(harf_notu(85)).replace(chr(39), chr(34)))' }),
    m('uygulama', 'Otopark: `2.5` saat, öğrenci kartı `e`. Ödenecek tutar nedir?', `saat = float(input("Park süresi (saat): "))
kart = input("Öğrenci kartı var mı? (e/h): ").strip().lower()
if saat <= 1:
    ucret = 50
elif saat <= 3:
    ucret = 100
else:
    ucret = 150
if kart == "e" and saat <= 3:
    ucret = ucret * 0.8
print(f"Ödenecek tutar: {ucret:.2f} TL")`, ['`Ödenecek tutar: 80.00 TL`', '`Ödenecek tutar: 100.00 TL`', '`Ödenecek tutar: 120.00 TL`', '`Ödenecek tutar: 40.00 TL`'],
      '2.5 saat → 100 TL; kart var ve ≤ 3 saat → %20 indirim: 100 × 0.8 = 80.00.', out('2.5\ne')),
    m('uygulama', 'Aynı programda `4` saat, kart `e` girilirse tutar nedir?', null, ['150.00 TL', '120.00 TL', '100.00 TL', '80.00 TL'],
      '3 saatten fazla → 150 TL. İndirim sadece **3 saati geçmiyorsa** uygulanır.'),
    m('uygulama', 'Kafe fatura: `85` TL’lik üründen `3` adet. Genel toplam (KDV %10) nedir?', `fiyat = 85
adet = 3
ara_toplam = fiyat * adet
kdv = ara_toplam * 0.10
print(f"Genel top. : {ara_toplam + kdv:.2f} TL")`, ['`Genel top. : 280.50 TL`', '`Genel top. : 255.00 TL`', '`Genel top. : 306.00 TL`', '`Genel top. : 280.5 TL`'],
      'Ara toplam 255, KDV 25.50, genel 280.50. (Lab 1 Görev 2)', OUT),
    m('uygulama', '`is_even(n)` fonksiyonunun tek satırlık doğru hali hangisi?', null, ['`return n % 2 == 0`', '`print(n % 2 == 0)`', '`return n / 2 == 0`', '`return n % 2`'],
      'Lab 1 Görev 3: “tek satırda True / False döndürsün.” `n % 2` sadece kalanı (0/1) verir; `/` bölmedir.'),
    m('uygulama', 'Lab 1 menüsünde `7` girilirse ne olur?', `secim = input("Görev numarası: ").strip()
match secim:
    case "1":
        print("kimlik")
    case "6":
        print("mevsim")
    case _:
        print("Geçersiz seçim")`, ['`Geçersiz seçim`', 'Hiçbir şey', 'Hata verir', '`mevsim`'],
      'Eşleşen case yok → `case _`.', { chk: 'out', inp: '7', outAs: '`Geçersiz seçim`', expOut: 'Görev numarası: Geçersiz seçim' }),
    m('uygulama', 'Kimlik kartında ad `ayşe`, soyad `yilmaz` girilirse ilk bilgi satırı nasıl olur?', `ad = input("Ad: ").strip().title()
soyad = input("Soyad: ").strip().upper()
print(f"Ad Soyad   : {ad} {soyad}")`, ['`Ad Soyad   : Ayşe YILMAZ`', '`Ad Soyad   : Ayşe Yilmaz`', '`Ad Soyad   : AYŞE YILMAZ`', '`Ad Soyad   : ayşe yilmaz`'],
      'Ad `title()` (ilk harf büyük), soyad `upper()` (tamamı büyük). (Lab 1 Görev 1)', { chk: 'last', inp: 'ayşe\nyilmaz' }),
    m('uygulama', 'Diyabet programında "Yeni hasta? (e/h)" sorusuna `h` girilince ne yapılmalı?', null, ['`break` ile while True döngüsünden çıkılmalı', '`continue` ile başa dönülmeli', '`return "h"` yazılmalı', 'Program yeniden başlatılmalı'],
      'Ödev: “h girilirse döngüden **break** ile çıkınız.”'),
    m('uygulama', 'Kullanıcı sayı yerine harf girince programın çökmemesi için ne kullanılır?', null, ['`try / except` bloğu', '`if / else`', '`match / case`', '`while True`'],
      'Diyabet bonus sorusu: `int("abc")` ValueError verir; `try:` içinde deneyip `except ValueError:` ile yakalanır.'),
    m('uygulama', 'Gelir analizi sorusunda 2.1–2.4 neden `enumerate` ile yapılmalı?', null, ['Hem ay sırasını hem geliri aynı anda verdiği için (hoca farklı yönteme yarım puan veriyor)', 'Listeyi sıraladığı için', 'Toplamı hesapladığı için', 'Döngüyü hızlandırdığı için'],
      'Soru metni: “enumerate fonksiyonunu kullanarak yapınız. Farklı yöntemlerle sonuca ulaşanlara soru değerinin yarısı kadar puan verilecektir.”')
  ];

  /* ---------- Boşluk doldurma ---------- */
  function f(topic, q, code, ans, exp, extra) {
    return Object.assign({ type: 'fill', topic: topic, q: q, code: code, ans: ans, cs: true, exp: exp }, extra || {});
  }
  var FILL = [
    f('metin', 'Adın başındaki ve sonundaki boşlukları sil.', `name = input("Ad: ").____()`, ['strip'], '`strip()` baştaki ve sondaki boşlukları siler.'),
    f('metin', 'Soyadı tamamen büyük harf yap.', `soyad = soyad.____()`, ['upper'], '`upper()` hepsini büyütür; `title()` sadece baş harfleri.'),
    f('metin', 'Her kelimenin ilk harfini büyük yap.', `urun = input("Ürün: ").strip().____()`, ['title'], '`title()` → "latte" → "Latte".'),
    f('metin', 'Toplamı iki ondalık basamakla yaz.', `print(f"Toplam: {toplam:____} TL")`, ['.2f'], '`:.2f` → 280.50.'),
    f('dongu', '10’dan 1’e geriye say.', `for i in range(10, 0, ____):`, ['-1'], 'Adım −1. Bitiş 0 dahil değil, son değer 1.'),
    f('liste', 'Ürünü sipariş listesinin sonuna ekle.', `siparisler.____(urun)`, ['append'], '`append` sona ekler.'),
    f('liste', 'Ay numarasını 1’den başlatarak gelirleri gez.', `for ay, gelir in ____(gelirler, start=1):`, ['enumerate'], '`enumerate` (sıra, değer) verir.'),
    f('liste', 'Gelirlerin ortalamasını hesapla.', `ortalama = sum(gelirler) / ____(gelirler)`, ['len'], 'Ortalama = toplam / eleman sayısı.'),
    f('kosul', 'Aralık, Ocak ve Şubat’ı tek case’de birleştir.', `case "12" ____ "1" | "2":`, ['|'], '`|` “veya” anlamında değerleri birleştirir.'),
    f('kosul', 'Hiçbir ay tutmazsa çalışacak case’i yaz.', `case ____:`, ['_'], '`case _:` varsayılan dal.'),
    f('kosul', 'Sayının çift olup olmadığını kontrol et.', `if sayi % 2 ____ 0:`, ['=='], 'Karşılaştırma `==`; tek `=` atamadır ve hata verir.'),
    f('dongu', 'Kullanıcı 0 seçene kadar sürekli dönen menü döngüsü.', `while ____:`, ['True'], '`while True:` + içerde `break`. Büyük T ile `True`.'),
    f('dongu', '0 seçildiğinde döngüden çık.', `if secim == "0":
    print("Programdan çıkıldı")
    ____`, ['break'], '`break` döngüyü bitirir.'),
    f('dongu', 'Menüde olmayan ürünü listeye eklemeden döngünün başına dön.', `if urun not in urunler:
    print(f"{urun} menüde bulunmamaktadır")
    ____`, ['continue'], '`continue` turun kalanını atlar.'),
    f('fonksiyon', 'Oran verilmezse 20 kullanılsın.', `def kdvHesapla(fiyat, oran____):`, ['=20'], 'Varsayılan parametre: `oran=20`.', { whyFill: { '20': '`=` işareti gerekli: `oran=20`.' } }),
    f('fonksiyon', 'Sonucu ekrana yazmadan çağıran koda geri ver.', `def toplam_hesapla(fiyat, adet):
    ____ fiyat * adet`, ['return'], 'Ödevlerde istenen: sonucu **return** et, main yazdırsın.'),
    f('slice', 'İlk üç günü al.', `ilkuc = sicaklik[____]`, [':3', '0:3'], '`[0:3]` ya da kısaca `[:3]`.'),
    f('slice', 'Son üç günü al.', `son_uc = sicaklik[____]`, ['-3:', '4:', '4:7'], '`[-3:]` sondan üç eleman (7 elemanlı listede `[4:]` ile aynı).'),
    f('slice', 'Kullanıcının girdiği ay aralığını al (ay numaraları 1’den başlıyor).', `yeniListe = liste[____:bitis]`, ['baslangic-1', 'baslangic - 1'], 'Ay 1’den, indeks 0’dan başlar → `baslangic-1`. Bitiş dahil olmadığı için `bitis` aynen kalır.'),
    f('sozluk', 'Menüye 120 TL’lik kek ekle.', `urunler["kek"] ____ 120`, ['='], 'Yeni anahtara atama ekler.'),
    f('sozluk', 'Seçilen ürün menüde var mı kontrol et.', `if secim ____ urunler:`, ['in'], '`in` anahtar var mı diye bakar.'),
    f('temel', 'Doğum yılını sayıya çevir.', `yas = 2026 - ____(input("Doğum yılı: "))`, ['int'], '`input` metin döndürür; yıl tam sayı → `int`.'),
    f('temel', 'Ondalıklı fiyat (42.5) girilebilsin.', `fiyat = ____(input("Birim fiyat (TL): "))`, ['float'], '`int("42.5")` hata verir; ondalıklı için `float`.'),
    f('fonksiyon', 'Parametrenin int olup olmadığını kontrol et.', `if not ____(sayi, int):`, ['isinstance'], '`isinstance(değer, tür)` True/False verir.'),
    f('fonksiyon', 'Hatalı türde program hata fırlatsın.', `____ Exception("Lütfen int giriniz")`, ['raise'], '`raise` hata fırlatır.'),
    f('dongu', 'Koltuk numaralarını alt satıra geçmeden yan yana yaz.', `print(koltuk, ____=" ")`, ['end'], '`end=" "` satır sonu yerine boşluk koyar.'),
    f('kosul', '90 ile 100 arası (ikisi de dahil).', `if 90 <= score ____ 100:`, ['<='], 'Dahil → `<=`.'),
    f('liste', 'Listedeki "Çay" sayısını bul.', `print(urunler.____("Çay"))`, ['count'], '`count` kaç kez geçtiğini sayar.'),
    f('liste', 'Listenin son elemanını yaz.', `print(gunler[____])`, ['-1', 'len(gunler)-1', 'len(gunler) - 1'], '`-1` son eleman.'),
    f('liste', 'Sondaki ürünü listeden sil.', `urunler.____()`, ['pop'], '`pop()` parametresiz sondakini siler; `pop(2)` 2. indeksi.'),
    f('kosul', 'Öğrenci kartı varsa VE süre 3 saati geçmiyorsa indirim yap.', `if kart == "e" ____ saat <= 3:`, ['and'], 'İki koşul birden → `and`.'),
    f('kosul', 'APG2 126 ve üstü YA DA PG 200 ve üstüyse diyabet.', `if apg2 >= 126 ____ pg >= 200:`, ['or'], 'Biri yeterli → `or`.'),
    f('kosul', 'Plakaya göre şehir bulmak için çok dallı yapıyı başlat.', `____ plaka:
    case "35":
        print("İzmir")`, ['match'], '`match değişken:` ile başlar, altında `case` dalları.'),
    f('fonksiyon', 'main adlı fonksiyonu tanımla.', `____ main():`, ['def'], 'Fonksiyon `def` ile tanımlanır.')
  ];

  /* ---------- Kod tamamlama (20 puan, 4 boşluk) ---------- */
  function c(topic, title, q, code, blanks, exps, note, v) {
    return { type: 'code', topic: topic, title: title, q: q, code: code, blanks: blanks, exps: exps, note: note, v: v };
  }
  var A = function () { return { ans: [].slice.call(arguments), cs: true }; };
  var CODE = [
    c('uygulama', 'Gelir analizi 2.4: ortalamanın üstündeki aylar',
      'Ortalama gelirden fazla olan ayları ve gelirlerini yazdır. Ay numarası 1’den başlasın.',
      `def ortalamaUstuAylar(liste):
    ortalama = {{1}}(liste) / {{2}}(liste)
    for ay, gelir in {{3}}(liste, start=1):
        if gelir {{4}} ortalama:
            print(f"{ay}. ay geliri {gelir}")`,
      [A('sum'), A('len'), A('enumerate'), A('>', '>=')],
      ['`sum`: listenin toplamı.', '`len`: eleman sayısı; ortalama = toplam / sayı.', '`enumerate`: ay sırası + gelir birlikte (soruda zorunlu).', '`>` (“fazla”); hocanın çözümünde `>=`, ikisi de kabul.'],
      'Bu listede 6 ay yazılır: 3, 4, 5, 9, 10, 12.',
      { post: 'ortalamaUstuAylar([30000, 40000, 50000, 42000, 55000, 25000, 36000, 30000, 52000, 45000, 28000, 48000])', expect: '3. ay geliri 50000\n4. ay geliri 42000\n5. ay geliri 55000\n9. ay geliri 52000\n10. ay geliri 45000\n12. ay geliri 48000' }),
    c('uygulama', 'Gelir analizi 2.3: aralık toplamı ve ortalaması',
      'Kullanıcının girdiği başlangıç ve bitiş ayları arasındaki gelirlerin toplamını ve ortalamasını döndür.',
      `def aralikToplamOrtalama(liste):
    baslangic = int(input("Başlangıç: "))
    bitis = int(input("Bitiş: "))
    yeniListe = liste[{{1}}:bitis]
    toplam = 0
    for ay, gelir in enumerate(yeniListe, start=baslangic):
        toplam {{2}} gelir
    ortalama = toplam / {{3}}(yeniListe)
    {{4}} toplam, ortalama`,
      [A('baslangic-1', 'baslangic - 1'), A('+='), A('len'), A('return')],
      ['`baslangic-1`: ay numarası 1’den, indeks 0’dan başlar.', '`+=`: her geliri toplama ekle (yalnız `=` son geliri bırakır).', '`len`: aralıktaki ay sayısı.', '`return`: iki değer birlikte döner; çağıran `toplam, ortalama = ...` ile alır.'],
      '1–3 girilirse: [30000, 40000, 50000] → 120000 ve 40000.0.',
      { inp: '1\n3', post: 'print(aralikToplamOrtalama([30000, 40000, 50000, 42000]))', expect: 'Başlangıç: Bitiş: (120000, 40000.0)' }),
    c('uygulama', 'Diyabet: APG1 kontrolü ve ana döngü',
      'APG1 < 100 normal, 100–125 OGTT, 126 ve üstü diyabet. Program “Yeni hasta? (e/h)” sorusuna h girilince bitsin.',
      `def apg1_kontrol(apg1):
    if apg1 < 100:
        return "Sonucunuz Normal"
    {{1}} apg1 < 126:
        return "OGTT"
    {{2}}:
        return "Diyabet Hastasısınız"

def main():
    {{3}} True:
        apg1 = int(input("APG1 değeri: "))
        print(apg1_kontrol(apg1))
        devam = input("Yeni hasta? (e/h): ")
        if devam == "h":
            {{4}}

main()`,
      [A('elif'), A('else'), A('while'), A('break')],
      ['`elif`: ilk koşul yanlışsa ikinci kontrol (100 ≤ apg1 < 126).', '`else`: kalan durum, 126 ve üstü.', '`while True`: her hasta için tekrar.', '`break`: h girilince döngüden çık.'],
      'Ödev: fonksiyonlar sonucu **return** eder, yazdırmayı main yapar.',
      { inp: '130\nh', expect: 'APG1 değeri: Diyabet Hastasısınız\nYeni hasta? (e/h): ' }),
    c('uygulama', 'Diyabet: OGTT kontrolü',
      'OGTT sonucu: önce diyabet (APG2 ≥ 126 veya PG ≥ 200), sonra BAG ve BGT, İzole BAG, İzole BGT, yoksa normal.',
      `def ogtt_kontrol(apg2, pg):
    if apg2 >= 126 {{1}} pg >= 200:
        return "Diyabet Hastasısınız"
    elif 100 <= apg2 <= 125 {{2}} 140 <= pg <= 199:
        return "BAG ve BGT"
    elif 100 <= apg2 <= 125:
        return "İzole BAG"
    elif {{3}} <= pg <= 199:
        return "İzole BGT"
    {{4}}:
        return "Sonucunuz Normal"`,
      [A('or'), A('and'), A('140'), A('else')],
      ['`or`: ikisinden biri yeterli → diyabet.', '`and`: açlık **ve** tokluk ikisi de bozuk.', '`140`: tokluk bozukluğunun alt sınırı.', '`else`: hiçbiri değilse normal.'],
      'Test tablosu: (95, 160) İzole BGT · (110, 120) İzole BAG · (110, 160) BAG ve BGT · (95, 200) Diyabet · (95, 120) Normal.',
      { post: 'for a, b in [(95, 160), (110, 120), (110, 160), (95, 200), (95, 120)]:\n    print(ogtt_kontrol(a, b))', expect: 'İzole BGT\nİzole BAG\nBAG ve BGT\nDiyabet Hastasısınız\nSonucunuz Normal' }),
    c('uygulama', 'Lab 1 Görev 4: not hesaplama',
      'Notlar 0–100 dışındaysa uyarıp çık. Ortalama = vize × 0.4 + final × 0.6, bir ondalıkla yazılsın.',
      `def not_hesapla():
    vize = int(input("Vize: "))
    final = int(input("Final: "))
    if {{1}} (0 <= vize <= 100 and 0 <= final <= 100):
        print("Notlar 0-100 arasında olmalıdır")
        {{2}}
    ortalama = vize * 0.4 + final * {{3}}
    if final < 50:
        harf = "FF"
    else:
        harf = harf_notu(ortalama)
    print(f"Ortalama: {ortalama:{{4}}} | Harf notu: {harf}")`,
      [A('not'), A('return'), A('0.6', '.6'), A('.1f')],
      ['`not`: aralıkta **değilse**.', '`return`: fonksiyondan çık (devam etmesin).', '`0.6`: finalin ağırlığı.', '`.1f`: bir ondalık (76.0).'],
      'Vize 70, final 80 → `Ortalama: 76.0 | Harf notu: CB`.',
      { inp: '70\n80', pre: 'def harf_notu(o):\n    return "CB"', post: 'not_hesapla()', expect: 'Vize: Final: Ortalama: 76.0 | Harf notu: CB' }),
    c('uygulama', 'Lab 1 Görev 5: otopark ücreti',
      '1 saate kadar 50, 3 saate kadar 100, fazlası 150 TL. Öğrenci kartı varsa ve süre 3 saati geçmiyorsa %20 indirim.',
      `def otopark(saat, kart):
    if saat <= 1:
        ucret = 50
    {{1}} saat <= 3:
        ucret = 100
    else:
        ucret = 150
    if kart == "e" {{2}} saat <= 3:
        ucret = ucret * {{3}}
    print(f"Ödenecek tutar: {ucret{{4}}} TL")`,
      [A('elif'), A('and'), A('0.8', '.8'), A(':.2f')],
      ['`elif`: 1 saatten fazla ama 3’e kadar.', '`and`: iki şart birlikte.', '`0.8`: %20 indirim = fiyatın %80’i.', '`:.2f`: 80.00 gibi iki ondalık.'],
      '2.5 saat + kart → 100 × 0.8 = 80.00 TL. 4 saat + kart → 150.00 (indirim yok).',
      { post: 'otopark(2.5, "e")\notopark(4, "e")', expect: 'Ödenecek tutar: 80.00 TL\nÖdenecek tutar: 150.00 TL' }),
    c('kosul', 'Lab 1 Görev 6: mevsim bulucu',
      'Ay numarasından mevsimi bul; her mevsim tek case olsun, geçersiz girişte “Geçersiz ay”.',
      `ay = input("Ay numarası (1-12): ").strip()
{{1}} ay:
    case "12" | "1" | "2":
        print("Kış")
    {{2}} "3" {{3}} "4" | "5":
        print("İlkbahar")
    case "6" | "7" | "8":
        print("Yaz")
    case "9" | "10" | "11":
        print("Sonbahar")
    case {{4}}:
        print("Geçersiz ay")`,
      [A('match'), A('case'), A('|'), A('_')],
      ['`match`: değişkene göre dallanma.', '`case`: her dal case ile başlar.', '`|`: aynı case’de birden çok değer.', '`_`: hiçbiri tutmazsa.'],
      '`10` → Sonbahar, `13` → Geçersiz ay.',
      { inp: '10', expect: 'Ay numarası (1-12): Sonbahar' }),
    c('fonksiyon', 'Lab 1 Görev 2 ve 3: yardımcı fonksiyonlar',
      'Ara toplamı döndüren fonksiyonu, tek satırlık çift kontrolünü ve ürün adını düzelten satırı tamamla.',
      `def toplam_hesapla(fiyat, adet):
    {{1}} fiyat * adet

def is_even(n):
    return n {{2}} 2 == 0

urun = input("Ürün: ").strip().{{3}}()
fiyat = {{4}}(input("Birim fiyat (TL): "))
print(urun, toplam_hesapla(fiyat, 3), is_even(30))`,
      [A('return'), A('%'), A('title'), A('float')],
      ['`return`: değeri geri ver.', '`%`: kalan; kalan 0 ise çift.', '`title`: latte → Latte.', '`float`: 42.5 gibi ondalıklı fiyat.'],
      '`latte`, `85` → `Latte 255.0 True`.',
      { inp: 'latte\n85', expect: 'Ürün: Birim fiyat (TL): Latte 255.0 True' }),
    c('dongu', 'Sipariş programı (Listeler)',
      'Kullanıcı 0 girene kadar ürün sor; menüde olmayanı ekleme, olanı siparişe ekle.',
      `urunler = ["Çay", "Kahve", "Boyoz", "Gevrek"]
siparis = []
while True:
    urun = input("Ürün: ").strip().title()
    if urun == "0":
        {{1}}
    if urun {{2}} urunler:
        print(f"{urun} menüde bulunmamaktadır")
        {{3}}
    siparis.{{4}}(urun)
print(siparis)`,
      [A('break'), A('not in'), A('continue'), A('append')],
      ['`break`: 0 girilince bitir.', '`not in`: listede yoksa.', '`continue`: eklemeden başa dön.', '`append`: siparişin sonuna ekle.'],
      '`çay`, `tost`, `boyoz`, `0` → `tost menüde bulunmamaktadır`, sonra `[\'Çay\', \'Boyoz\']`.',
      { inp: 'çay\ntost\nboyoz\n0', expect: "Ürün: Ürün: Tost menüde bulunmamaktadır\nÜrün: Ürün: ['Çay', 'Boyoz']" }),
    c('sozluk', 'Menü sözlüğü',
      'Seçilen ürün menüdeyse fiyatını yaz, sonra tüm menüyü “ürün fiyatı X” şeklinde listele.',
      `urunler = {"çay": 15, "kahve": 45, "tost": 70}
secim = input("Ürün: ")
if secim {{1}} urunler:
    print(f"{secim}: {urunler[{{2}}]}")
else:
    print(f"{secim} menüde yok")
{{3}} urun in urunler:
    print(f"{urun} fiyatı {urunler[{{4}}]}")`,
      [A('in'), A('secim'), A('for'), A('urun')],
      ['`in`: anahtar var mı.', '`secim`: değeri anahtarla oku.', '`for`: sözlüğü gez (anahtarlar gelir).', '`urun`: o anki anahtar.'],
      '`kahve` → `kahve: 45`, ardından üç satır menü.',
      { inp: 'kahve', expect: 'Ürün: kahve: 45\nçay fiyatı 15\nkahve fiyatı 45\ntost fiyatı 70' })
  ];

  /* ---------- Yazma (model çözüm) ---------- */
  function o(topic, q, model, modelCode, code) {
    return { type: 'open', topic: topic, q: q, model: model, modelCode: modelCode, code: code };
  }
  var GEL = 'gelirler = [30000, 40000, 50000, 42000, 55000, 25000, 36000, 30000, 52000, 45000, 28000, 48000]';
  var OPEN = [
    o('uygulama', '**Gelir analizi 2.1:** Gelirin kaçıncı aya ait olduğunu ve o ayın gelirini yan yana yazan fonksiyonu `enumerate` ile yazınız.',
      'Hocanın çözümü:\n- `enumerate` (sıra, gelir) verir; sıra 0’dan başladığı için `ay+1` (ya da `start=1`).\n- Liste dışı tür gelirse hata fırlatılıyor (isteğe bağlı).',
      `def aylikGelirleriYazdir(liste):
    if not isinstance(liste, list):
        raise Exception("Liste türünde parametre giriniz")
    for ay, gelir in enumerate(liste):
        print(f"{ay+1} ay geliri {gelir}")`, GEL),
    o('uygulama', '**Gelir analizi 2.2:** Kullanıcıdan başlangıç ve bitiş ay numarası alarak bu aylar arasındaki gelirleri yeni bir liste oluşturup ekrana yazınız (`enumerate` ile).',
      'Hocanın çözümü:\n- Yeni liste: `liste[baslangic-1:bitis]` (ay 1’den, indeks 0’dan başlar; bitiş dahil değil).\n- `enumerate(yeniListe, start=baslangic)` ile gerçek ay numarası yazılır.',
      `def aralikListele(liste):
    baslangic = int(input("Başlangıç giriniz: "))
    bitis = int(input("Bitiş giriniz: "))
    yeniListe = liste[baslangic-1:bitis]
    for ay, gelir in enumerate(yeniListe, start=baslangic):
        print(f"{ay}. ay değeri {gelir}")`, GEL),
    o('uygulama', '**Gelir analizi 2.3:** Kullanıcının girdiği ay aralığındaki gelirlerin toplamını ve ortalamasını hesaplayınız.',
      'Hocanın çözümü:\n- Aralık yine `liste[baslangic-1:bitis]`.\n- Toplam döngüde `+=` ile, ortalama `sum / len`.\n- İki değer `return toplam, ortalama` ile döner; menüde `toplam, ortalama = ...` ile alınır.',
      `def aralikToplamOrtalama(liste):
    baslangic = int(input("Başlangıç giriniz: "))
    bitis = int(input("Bitiş giriniz: "))
    yeniListe = liste[baslangic-1:bitis]
    toplam = 0
    for ay, gelir in enumerate(yeniListe, start=baslangic):
        toplam = toplam + gelir
    ortalama = sum(yeniListe) / len(yeniListe)
    return toplam, ortalama`, GEL),
    o('uygulama', '**Gelir analizi 2.4:** Ortalama gelirden fazla gelir olan ayları ve gelirleri ekrana yazınız. Ardından 1–4 seçenekli, 0 ile çıkılan bir menü (`while True`) kurunuz.',
      'Hocanın çözümü:\n- Ortalama tüm yıl üzerinden: `sum(liste) / len(liste)` ≈ 40083.33.\n- `enumerate(liste, start=1)` + `if gelir >= ortalama`.\n- Menü: `while True`, `0` → `break`, geçersizde uyarı.',
      `def ortalamaUstuAylar(liste):
    ortalama = sum(liste) / len(liste)
    print(f"yıllık ortalama {ortalama:.2f}")
    for ay, gelir in enumerate(liste, start=1):
        if gelir >= ortalama:
            print(f"{ay} ay geliri {gelir}")

def main():
    gelirler = [30000, 40000, 50000, 42000, 55000, 25000,
                36000, 30000, 52000, 45000, 28000, 48000]
    while True:
        secim = input("Seçiminiz: ").strip()
        if secim == "1":
            aylikGelirleriYazdir(gelirler)
        elif secim == "2":
            aralikListele(gelirler)
        elif secim == "3":
            toplam, ortalama = aralikToplamOrtalama(gelirler)
            print("Toplam", toplam)
            print("Ortalama", ortalama)
        elif secim == "4":
            ortalamaUstuAylar(gelirler)
        elif secim == "0":
            print("Programdan çıkıldı")
            break
        else:
            print("Lütfen 0-4 arası seçim yapınız")

main()`),
    o('uygulama', '**Diyabet tanı programı:** `main()`, `apg1_kontrol(apg1)` ve `ogtt_kontrol(apg2, pg)` fonksiyonlarını yazınız. Fonksiyonlar sonucu return etsin; `while True` içinde her hastadan sonra “Yeni hasta? (e/h)” sorulsun, h girilirse `break`.',
      'Kurallar:\n- APG1 < 100 normal · 100–125 OGTT · ≥ 126 diyabet.\n- OGTT: **önce** APG2 ≥ 126 veya PG ≥ 200 → diyabet. Sonra BAG ve BGT (ikisi de bozuk), İzole BAG (APG2 100–125, PG < 140), İzole BGT (APG2 < 100, PG 140–199), değilse normal.\n- Bonus: harf girilirse `int()` ValueError verir; `try / except ValueError` ile yakalanır.',
      `def main():
    while True:
        apg1 = int(input("APG1 değeri: "))
        sonuc = apg1_kontrol(apg1)
        if sonuc == "OGTT":
            print("Sizi OGTT testine yönlendiriyorum")
            apg2 = int(input("APG2 değeri: "))
            pg = int(input("PG değeri: "))
            sonuc = ogtt_kontrol(apg2, pg)
        print(sonuc)
        devam = input("Yeni hasta? (e/h): ").strip().lower()
        if devam == "h":
            break

def apg1_kontrol(apg1):
    if apg1 < 100:
        return "Sonucunuz Normal"
    elif apg1 < 126:
        return "OGTT"
    else:
        return "Diyabet Hastasısınız"

def ogtt_kontrol(apg2, pg):
    if apg2 >= 126 or pg >= 200:
        return "Diyabet Hastasısınız"
    elif 100 <= apg2 <= 125 and 140 <= pg <= 199:
        return "Sonucunuz: BAG ve BGT"
    elif 100 <= apg2 <= 125 and pg < 140:
        return "Sonucunuz: İzole BAG"
    elif apg2 < 100 and 140 <= pg <= 199:
        return "Sonucunuz: İzole BGT"
    else:
        return "Sonucunuz Normal"

main()`),
    o('uygulama', '**Lab 1 Görev 4:** Vize ve finalden ortalamayı (vize × 0.4 + final × 0.6) ve harf notunu hesaplayan `not_hesapla()` ile `harf_notu(ortalama)` fonksiyonlarını yazınız. Final 50’nin altındaysa FF; not 0–100 dışındaysa uyarıp çıkın.',
      'Harf tablosu: 90+ AA · 85+ BA · 80+ BB · 75+ CB · 70+ CC · 65+ DC · 60+ DD · 50+ FD · altı FF.\n- Sıralama büyükten küçüğe: ilk doğru dal çalışır.',
      `def not_hesapla():
    vize = int(input("Vize: "))
    final = int(input("Final: "))
    if not (0 <= vize <= 100 and 0 <= final <= 100):
        print("Notlar 0-100 arasında olmalıdır")
        return
    ortalama = vize * 0.4 + final * 0.6
    if final < 50:
        harf = "FF"
    else:
        harf = harf_notu(ortalama)
    print(f"Ortalama: {ortalama:.1f} | Harf notu: {harf}")

def harf_notu(ortalama):
    if ortalama >= 90:
        return "AA"
    elif ortalama >= 85:
        return "BA"
    elif ortalama >= 80:
        return "BB"
    elif ortalama >= 75:
        return "CB"
    elif ortalama >= 70:
        return "CC"
    elif ortalama >= 65:
        return "DC"
    elif ortalama >= 60:
        return "DD"
    elif ortalama >= 50:
        return "FD"
    else:
        return "FF"`),
    o('uygulama', '**Lab 1 Görev 5:** Park süresi ve öğrenci kartına göre otopark ücretini hesaplayan `otopark()` fonksiyonunu yazınız. (1 saate kadar 50, 3 saate kadar 100, fazlası 150 TL; kart varsa ve ≤ 3 saat %20 indirim; süre ≤ 0 ise “Geçersiz süre”.)',
      'Dikkat:\n- Önce geçersiz süre kontrolü ve `return`.\n- İndirim şartı `kart == "e" and saat <= 3`.\n- Tutar `:.2f`.',
      `def otopark():
    saat = float(input("Park süresi (saat): "))
    kart = input("Öğrenci kartı var mı? (e/h): ").strip().lower()
    if saat <= 0:
        print("Geçersiz süre")
        return
    if saat <= 1:
        ucret = 50
    elif saat <= 3:
        ucret = 100
    else:
        ucret = 150
    if kart == "e" and saat <= 3:
        ucret = ucret * 0.8
        print("Öğrenci indirimi uygulandı (%20)")
    print(f"Ödenecek tutar: {ucret:.2f} TL")`),
    o('kosul', '**Lab 1 Görev 1 ve 6:** Kimlik kartı (ad `title`, soyad `upper`, yaş 2026’ya göre) ve `match` ile mevsim bulucu fonksiyonlarını yazınız.',
      'Kimlik kartında `strip()` + `title()` / `upper()`; mevsimde her mevsim tek `case`, aylar `|` ile, geçersizde `case _`.',
      `def kimlik_karti():
    ad = input("Ad: ").strip().title()
    soyad = input("Soyad: ").strip().upper()
    yil = int(input("Doğum yılı: "))
    yas = 2026 - yil
    print("------------------------------")
    print(f"Ad Soyad   : {ad} {soyad}")
    print(f"Doğum yılı : {yil}")
    print(f"Yaş        : {yas}")
    print("------------------------------")

def mevsim():
    ay = input("Ay numarası (1-12): ").strip()
    match ay:
        case "12" | "1" | "2":
            print("Kış")
        case "3" | "4" | "5":
            print("İlkbahar")
        case "6" | "7" | "8":
            print("Yaz")
        case "9" | "10" | "11":
            print("Sonbahar")
        case _:
            print("Geçersiz ay")`),
    o('dongu', '**Döngüler:** Kullanıcıdan bir sayı alıp 0’dan o sayıya kadar (dahil) çift sayıların ve tek sayıların toplamını ayrı ayrı döndüren `tekveCiftToplam(sayi)` fonksiyonunu ve onu kullanan `main()` fonksiyonunu yazınız.',
      'Ders kodu (Döngüler 3):\n- `range(sayi + 1)` ile sayı dahil.\n- `i % 2 == 0` → çift.\n- İki değer döner: `return ciftToplam, tekToplam`.',
      `def main():
    sayi = int(input("Sayı giriniz: "))
    ciftT, tekT = tekveCiftToplam(sayi)
    print(f"Tekler Toplamı {tekT}")
    print(f"Çiftler Toplamı {ciftT}")

def tekveCiftToplam(sayi):
    if not isinstance(sayi, int):
        raise Exception("Lütfen int değer giriniz")
    ciftToplam = 0
    tekToplam = 0
    for i in range(sayi + 1):
        if i % 2 == 0:
            ciftToplam += i
        else:
            tekToplam += i
    return ciftToplam, tekToplam

main()`),
    o('liste', '**Listeler:** Kullanıcı 0 girene kadar ürün soran, menüde (`["Çay", "Kahve", "Boyoz", "Gevrek"]`) olmayan ürün için uyarı verip eklemeyen, sonunda sipariş sayısını ve siparişleri yazan programı yazınız.',
      'Kalıp: `while True` + `break` (0) + `continue` (menüde yok) + `append`. Girdi `.strip().title()` ile düzeltilir.',
      `urunler = ["Çay", "Kahve", "Boyoz", "Gevrek"]
siparis = []
while True:
    urun = input("Hangi ürünü istersiniz: ").strip().title()
    if urun == "0":
        print("Sipariş Tamamlandı")
        break
    if urun not in urunler:
        print(f"{urun} menüde bulunmamaktadır")
        continue
    siparis.append(urun)
print(f"{len(siparis)} kadar ürün sipariş ettiniz")
print(f"Siparişler: {siparis}")`),
    o('fonksiyon', '**Fonksiyon + while True:** 1 toplama, 2 çıkarma, 3 çarpma, 4 bölme, 0 çıkış seçenekli hesap makinesi yazınız. Her işlem ayrı fonksiyon olsun ve sonucu return etsin.',
      'Ders kodu (Döngüler 2): her fonksiyon iki sayıyı `float(input())` ile alır ve sonucu döndürür; menü `while True`, 0’da `break`.',
      `def toplamaYap():
    a = float(input("Sayı 1: "))
    b = float(input("Sayı 2: "))
    return a + b

def cikarmaYap():
    a = float(input("Sayı 1: "))
    b = float(input("Sayı 2: "))
    return a - b

def carpmaYap():
    a = float(input("Sayı 1: "))
    b = float(input("Sayı 2: "))
    return a * b

def bolmeYap():
    a = float(input("Sayı 1: "))
    b = float(input("Sayı 2: "))
    return a / b

while True:
    islem = int(input("İşlem seçiniz: "))
    if islem == 1:
        print(toplamaYap())
    elif islem == 2:
        print(cikarmaYap())
    elif islem == 3:
        print(carpmaYap())
    elif islem == 4:
        print(bolmeYap())
    elif islem == 0:
        print("İşlem sonlandı")
        break`)
  ];

  /* ---------- Konu testleri ---------- */
  var TQ = {};
  window.TOPICS.forEach(function (t) { TQ[t.id] = []; });
  MC.concat(FILL).forEach(function (q) { TQ[q.topic].push(q); });

  /* ---------- Deneme vizeleri: 10 test + 6 boşluk + 1 kod + 1 yazma, birbiriyle çakışmaz ---------- */
  var R2 = rng(2071);
  function shuf(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(R2() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  var order = window.TOPICS.map(function (t) { return t.id; });
  function byTopic(a, b) { return order.indexOf(a.topic) - order.indexOf(b.topic); }
  var mcP = shuf(MC), fiP = shuf(FILL), coP = shuf(CODE), opP = shuf(OPEN);
  function demo(k) {
    return mcP.slice(k * 10, k * 10 + 10).sort(byTopic)
      .concat(fiP.slice(k * 6, k * 6 + 6).sort(byTopic), [coP[k]], [opP[k]]);
  }

  window.TOPIC_QUESTIONS = TQ;
  window.EXTRA_CODE = [];
  window.EXAMS = [
    { id: 'hoca', group: 'hoca', mode: 'practice', featured: true, title: 'Vize hazırlık + Lab 1',
      desc: 'Gelir Analizi, Diyabet Tanı ve Lab 1’in 6 görevi: ' + CODE.length + ' kod tamamlama + ' + OPEN.length + ' yazma.',
      questions: CODE.concat(OPEN) },
    { id: 'demo1', title: 'Deneme vizesi 1', desc: '10 test + 6 boşluk + 1 kod + 1 yazma (100 puan).', questions: demo(0) },
    { id: 'demo2', title: 'Deneme vizesi 2', desc: 'Aynı format, deneme 1 ile çakışmaz.', questions: demo(1) },
    { id: 'demo3', title: 'Deneme vizesi 3', desc: 'Aynı format, öncekilerle çakışmaz.', questions: demo(2) },
    { id: 'tum', group: 'ek', mode: 'practice', title: 'Bütün test soruları (' + MC.length + ')', desc: 'Konu sırasıyla, anında kontrol.', questions: MC.slice() },
    { id: 'tumbosluk', group: 'ek', mode: 'practice', title: 'Bütün boşluk soruları (' + FILL.length + ')', desc: 'Tek kelimelik boşluklar, Enter ile kontrol.', questions: FILL.slice() }
  ];
  window.PY_RAW = { MC: MC, FILL: FILL, CODE: CODE, OPEN: OPEN };
})();
