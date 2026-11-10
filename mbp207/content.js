/* MBP 207 Python vizesi.
   Kaynak: PythonSunumlar klasöründeki ders kodları, Lab 1 föyü ve vize hazırlık soruları
   (Gelir Analizi, Diyabet Tanı Programı). Hoca test sorusu vermedi; sorular bu kodlardan üretildi.
   Genel tekrar yok, sadece testler. Satır içi biçim: `kod`, **kalın**. */

window.COURSE = {
  id: 'python',
  lang: 'py',
  storeKey: 'pythonvize-best',
  noReview: true,
  testLead: 'Hoca test sorusu vermedi; sorular derste yazılan kodlardan, Lab 1’den ve vize hazırlık sorularından üretildi. Bütün çıktılar Python ile çalıştırılarak kontrol edildi. Deneme vizeleri 100 puan: 10 test + 6 boşluk + 1 kod tamamlama + 1 yazma.',
  hocaNote: 'Hocanın vize hazırlık soruları (Gelir Analizi, Diyabet) ve Lab 1’in 6 görevi: hocanın çözüm koduna göre boşluk tamamlama ve model çözümler.',
  codeDesc: 'Hocanın vize hazırlık programları ve Lab 1 görevleri, boşluklu.',
  points: { mc: 4, fill: 5, code: 20, open: 10 },
  randomExam: { mc: 10, fill: 6, code: 1, open: 1 },
  randomTitle: 'Rastgele vize',
  randomDesc: 'Her açılışta farklı: 10 test + 6 boşluk + 1 kod tamamlama + 1 yazma; az gördüğün sorular önce.'
};

window.EXAM_FORMAT = [];
window.TRAPS = [];

window.TOPICS = [
  { id: 'temel', title: 'Temeller: input, tipler, dönüşüm', blocks: [] },
  { id: 'metin', title: 'Metin metotları ve f-string', blocks: [] },
  { id: 'operator', title: 'Operatörler', blocks: [] },
  { id: 'kosul', title: 'if / elif / else ve match', blocks: [] },
  { id: 'fonksiyon', title: 'Fonksiyonlar', blocks: [] },
  { id: 'dongu', title: 'Döngüler: while, for, range', blocks: [] },
  { id: 'liste', title: 'Listeler ve enumerate', blocks: [] },
  { id: 'slice', title: 'List slice (dilimleme)', blocks: [] },
  { id: 'sozluk', title: 'Sözlükler', blocks: [] },
  { id: 'uygulama', title: 'Vize hazırlık ve Lab 1 programları', blocks: [] }
];

window.TOPIC_RULES = {
  temel: '`input()` her zaman **str** döndürür; sayı için `int(input())` / `float(input())`. `int("3.5")` **hata** verir. `type(x)` → `<class \'str\'>`. Yorum `#`, çok satırlı metin/yorum `"""..."""`. `print(a, b)` araya **boşluk** koyar.',
  metin: '`strip()` baş/son boşlukları siler · `title()` her kelimenin ilk harfi büyük · `capitalize()` sadece ilk harf · `upper()` / `lower()`. Metotlar **yeni metin döndürür**, değişkeni değiştirmez: `name = name.strip()`. f-string: `f"{x:.2f}"` 2 basamak, `:.0f` yuvarlar (**.5 en yakın çifte**: 2.5 → 2). Yan yana f-string’ler **boşluksuz** birleşir.',
  operator: '`/` her zaman **float** (6/3 = 2.0) · `//` tam bölme · `%` kalan · `**` üs. `x += 1` ⇔ `x = x + 1`. `and` ikisi de, `or` biri yeter, `not` tersi. Zincir karşılaştırma: `90 <= score <= 100`. `=` atama, `==` karşılaştırma.',
  kosul: 'if–elif zincirinde **ilk doğru dal** çalışır, gerisi atlanır. Blok **girinti** ile belirlenir, `:` unutulmaz. `match x:` → `case "1" | "2":` birden çok değer, `case _:` hiçbiri tutmazsa (default). input metin olduğu için `case "35"` tırnaklı.',
  fonksiyon: '`def ad(param):` · `return` değeri **geri verir** ve fonksiyonu bitirir; `print` sadece yazar (dönüş `None`). Varsayılan parametre: `def f(oran=20)`. `return a, b` → çağıran `x, y = f()`. `main()` tanımlanır ve dosyanın sonunda **çağrılır**. `raise Exception("...")` hata fırlatır; `isinstance(x, int)` tür kontrolü.',
  dongu: '`range(10)` → 0..9 · `range(1, 4)` → 1, 2, 3 (**bitiş dahil değil**) · `range(10, 0, -1)` → 10..1. `while koşul:` koşul doğru oldukça döner, sayacı artırmayı unutma. `while True:` + `break` menü kalıbı. `continue` turun kalanını atlar. `print(x, end=" ")` alt satıra geçmez.',
  liste: 'İndeks **0**’dan başlar, `-1` son eleman. `len()` eleman sayısı. `append(x)` sona ekler · `pop()` sondakini, `pop(i)` i. indeksi siler · `count(x)` kaç tane · `index(x)` ilk konumu. `x in liste`. `sum()`, `sorted()` (yeni liste). `enumerate(liste, start=1)` → `(sıra, değer)`.',
  slice: '`liste[bas:bit]` → bas dahil, **bit dahil değil**. `[:3]` ilk üç · `[5:]` 5’ten sona · `[-3:]` son üç · `[1::2]` 1’den başlayıp ikişer atla. Sınırı aşan bitiş **hata vermez**. Ay numarası → `liste[bas-1:bit]`.',
  sozluk: '`{"çay": 15, "kahve": 45}` anahtar: değer. Okuma `d["çay"]`; olmayan anahtar **KeyError**. Ekleme/güncelleme `d["kek"] = 120`. `for k in d:` **anahtarları** gezer, değer `d[k]`. `"çay" in d` anahtar kontrolü. İç içe: `notlar["Burak"]["Final"]`, `notlar["Arda"][1]`.',
  uygulama: 'Gelir analizi: `enumerate(gelirler, start=1)` → ay no + gelir; aralık `gelirler[bas-1:bit]`; ortalama `sum(l)/len(l)`. Diyabet: APG1 < 100 normal · 100–125 OGTT · ≥126 diyabet; OGTT’de **önce** `apg2 >= 126 or pg >= 200`. Lab 1: ortalama = vize×0.4 + final×0.6, final < 50 → FF; otopark 1 saat 50, 3 saat 100, üstü 150, öğrenci + ≤3 saat %20 indirim.'
};
