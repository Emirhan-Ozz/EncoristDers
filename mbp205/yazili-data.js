/* MBP205 yazılı prova: açık uçlu sorular, anahtar kavramlar, model cevaplar. tools/build.py ile üretildi. */
window.YAZILI = {
 "slots": {
  "1": "Kalıtım",
  "2": "Kapsülleme",
  "3": "Soyutlama",
  "4": "Çok biçimlilik",
  "5": "Soyut sınıf",
  "6": "Arayüz",
  "7": "Karşılaştırma ve UML"
 },
 "sorular": [
  {
   "slot": 1,
   "id": "kal1",
   "q": "Kalıtım (inheritance) nedir? Java'da nasıl yapılır? Override kavramıyla birlikte bir örnekle açıklayınız.",
   "keys": [
    {
     "k": "Miras alma: alt sınıf üst sınıfın özellik ve metotlarını alır",
     "any": [
      "miras",
      "devral",
      "ozelliklerini al",
      "metotlarini al",
      "ust sinif",
      "alt sinif",
      "parent",
      "child"
     ],
     "w": 2
    },
    {
     "k": "extends anahtar kelimesi",
     "any": [
      "extends"
     ],
     "w": 2
    },
    {
     "k": "Override: alt sınıf metodu aynı imzayla yeniden yazar",
     "any": [
      "override",
      "ezme",
      "ezer",
      "yeniden yaz",
      "ustune yaz"
     ],
     "w": 2
    },
    {
     "k": "Kod tekrarını azaltır / yeniden kullanım",
     "any": [
      "tekrar",
      "yeniden kullan",
      "ortak kod",
      "tekrar kullan"
     ],
     "w": 1
    },
    {
     "k": "super ile üst sınıfa erişim",
     "any": [
      "super"
     ],
     "w": 1
    },
    {
     "k": "Örnek: sınıf adlarıyla (Hayvan–Tavsan, Karakter–Vampir...)",
     "any": [
      "class",
      "hayvan",
      "karakter",
      "insan",
      "tavsan",
      "kedi",
      "vampir"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "**Kalıtım**, bir sınıfın (alt sınıf / child) başka bir sınıfın (üst sınıf / parent) özelliklerini ve metotlarını **miras almasıdır**. Ortak kod üst sınıfa bir kez yazılır, alt sınıflar tekrar yazmadan kullanır; bu kod tekrarını azaltır. İlişki \"is-a\" ilişkisidir: Tavşan **bir** Hayvandır.",
    "Java'da `extends` anahtar kelimesiyle yapılır ve bir sınıf **sadece bir** sınıftan kalıtım alabilir.",
    "**Override (ezme):** alt sınıf, üst sınıftan gelen bir metodu **aynı ad ve parametrelerle** yeniden yazarak kendine özel davranış verir. `@Override` etiketi kullanılır. `super.kos()` ile üst sınıfın sürümü de çağrılabilir.",
    "Örnekte `Tavsan` hiçbir alan yazmadan `konum` alanını alır ve `kos()` metodunu ezer."
   ],
   "kod": "class Hayvan {\n    public int konum = 6;\n    public void kos() {\n        System.out.println(\"Hayvan kosuyor\");\n    }\n}\nclass Tavsan extends Hayvan {\n    @Override\n    public void kos() {\n        super.kos();\n        System.out.println(\"Tavsan zipladi!\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Tavsan t = new Tavsan();\n        t.kos();\n        System.out.println(t.konum);\n    }\n}",
   "out": "Hayvan kosuyor\nTavsan zipladi!\n6"
  },
  {
   "slot": 1,
   "id": "kal2",
   "q": "\"Is-a\" ilişkisi ne demektir? Kalıtımda `super` anahtar kelimesinin iki kullanımını örnek vererek açıklayınız.",
   "keys": [
    {
     "k": "is-a: alt sınıf bir üst sınıf türüdür (\"Vampir bir Karakterdir\")",
     "any": [
      "is a",
      "bir hayvandir",
      "bir karakterdir",
      "bir insandir",
      "turudur",
      "bir turu"
     ],
     "w": 2
    },
    {
     "k": "Kalıtım / extends",
     "any": [
      "extends",
      "kalitim",
      "miras",
      "inheritance"
     ],
     "w": 2
    },
    {
     "k": "super(...): üst sınıfın yapıcısını çağırır",
     "any": [
      "super(",
      "ust sinifin yapici",
      "ust sinifin constructor",
      "yapiciyi cagir",
      "constructor cagir"
     ],
     "w": 2
    },
    {
     "k": "super.metot(): üst sınıfın metodunu çağırır",
     "any": [
      "super.",
      "ust sinifin metod",
      "ust sinifin kos",
      "super kos",
      "super bilgigoster"
     ],
     "w": 2
    },
    {
     "k": "super yapıcının ilk satırında olmalı",
     "any": [
      "ilk satir",
      "en basta",
      "ilk sirada",
      "ilk komut"
     ],
     "w": 1
    },
    {
     "k": "Örnek kod",
     "any": [
      "class",
      "public"
     ],
     "w": 1
    }
   ],
   "cevap": [
    "**Is-a** ilişkisi kalıtımı anlatır: alt sınıf, üst sınıfın bir türüdür. \"Vampir **bir** Karakterdir\", \"Tavşan **bir** Hayvandır\". Java'da `extends` ile kurulur.",
    "`super` üst sınıfa erişmek için kullanılır: **1)** `super(...)` üst sınıfın **yapıcısını** çağırır ve alt sınıf yapıcısının **ilk satırında** olmalıdır. Hocanın oyununda `Vampir()` yapıcısı `super(100, 60, 20, 20)` ile Karakter'in can, saldırı, savunma, kritik değerlerini verir. **2)** `super.metot()` üst sınıftaki metodun **ezilmeden önceki** sürümünü çağırır: `AnaKarakter`, `bilgiGoster()`'i ezip önce ASCII resmini çizer, sonra `super.bilgiGoster()` ile ortak bilgileri yazar."
   ],
   "kod": "class Karakter {\n    private int can;\n    public Karakter(int can) {\n        this.can = can;\n    }\n    public void bilgiGoster() {\n        System.out.println(\"Can : \" + can);\n    }\n}\nclass Vampir extends Karakter {\n    public Vampir() {\n        super(100);                    // 1) üst sınıfın yapıcısı\n    }\n    @Override\n    public void bilgiGoster() {\n        System.out.println(\"( o  o )\");\n        super.bilgiGoster();           // 2) üst sınıfın metodu\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Vampir().bilgiGoster();\n    }\n}",
   "out": "( o  o )\nCan : 100"
  },
  {
   "slot": 1,
   "id": "kal3",
   "q": "Overloading (aşırı yükleme) ile overriding (ezme) arasındaki farkı örnekle açıklayınız.",
   "keys": [
    {
     "k": "Overloading: aynı ad, farklı parametre",
     "any": [
      "farkli parametre",
      "parametre sayisi",
      "parametre tipi",
      "parametreleri farkli",
      "parametre listesi"
     ],
     "w": 2
    },
    {
     "k": "Overloading aynı sınıf içinde",
     "any": [
      "ayni sinif",
      "ayni sinifta",
      "sinif icinde"
     ],
     "w": 1
    },
    {
     "k": "Overriding: alt sınıfta aynı imza ile yeniden yazma",
     "any": [
      "alt sinif",
      "ayni imza",
      "ayni parametre",
      "yeniden yaz",
      "ust sinif"
     ],
     "w": 2
    },
    {
     "k": "Overriding kalıtım gerektirir / @Override",
     "any": [
      "override",
      "kalitim",
      "extends"
     ],
     "w": 2
    },
    {
     "k": "Derleme zamanı – çalışma zamanı farkı",
     "any": [
      "derleme",
      "calisma zaman",
      "compile",
      "runtime"
     ],
     "w": 1
    },
    {
     "k": "Örnek (yapıcılar ya da kos())",
     "any": [
      "hayvan(",
      "kos",
      "class",
      "public"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "**Overloading (aşırı yükleme):** **aynı sınıf içinde** aynı adı taşıyan ama **parametre sayısı ya da tipi farklı** metot veya yapıcılar yazmaktır. Hangisinin çalışacağı derleme zamanında argümanlara bakılarak seçilir. Örnek: `Hayvan()` ve `Hayvan(int konum)` yapıcıları.",
    "**Overriding (ezme):** **kalıtım** varken alt sınıfın, üst sınıftaki metodu **aynı ad ve aynı parametrelerle** yeniden yazmasıdır; `@Override` ile işaretlenir. Hangisinin çalışacağı çalışma zamanında nesnenin tipine bakılarak belirlenir. Örnek: `Tavsan`'ın `kos()` metodunu ezmesi."
   ],
   "kod": "class Hayvan {\n    public int konum;\n    public Hayvan() { konum = 6; }                     // overloading\n    public Hayvan(int konum) { this.konum = konum; }   // overloading\n    public void kos() { System.out.println(\"Hayvan kosuyor\"); }\n}\nclass Tavsan extends Hayvan {\n    @Override\n    public void kos() { System.out.println(\"Tavsan zipliyor\"); }   // overriding\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(new Hayvan().konum + \" \" + new Hayvan(20).konum);\n        Hayvan h = new Tavsan();\n        h.kos();\n    }\n}",
   "out": "6 20\nTavsan zipliyor"
  },
  {
   "slot": 2,
   "id": "kap1",
   "q": "Kapsülleme (encapsulation) nedir? Erişim belirleyicileri (public, private, protected) ve UML'deki simgeleriyle birlikte bir örnek veriniz.",
   "keys": [
    {
     "k": "Veriyi gizleme / dışarıdan doğrudan erişimi engelleme",
     "any": [
      "gizle",
      "erisimi engel",
      "disaridan eris",
      "dogrudan eris",
      "koru",
      "kisitla"
     ],
     "w": 2
    },
    {
     "k": "Alanlar private",
     "any": [
      "private"
     ],
     "w": 2
    },
    {
     "k": "Getter / setter metotları",
     "any": [
      "getter",
      "setter",
      "get",
      "set",
      "getbakiye",
      "setbakiye"
     ],
     "w": 2
    },
    {
     "k": "public / protected açıklaması",
     "any": [
      "public",
      "protected",
      "alt sinif",
      "her yerden"
     ],
     "w": 1
    },
    {
     "k": "UML simgeleri + − #",
     "any": [
      "arti",
      "eksi",
      "diyez",
      "simge",
      "uml"
     ],
     "w": 1
    },
    {
     "k": "Örnek: setter içinde kontrol (bakiye >= 0 vb.)",
     "any": [
      "bakiye",
      "if",
      "kontrol",
      "negatif"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "**Kapsülleme**, bir sınıfın verilerini dışarıdan **doğrudan erişime kapatıp** sadece sınıfın izin verdiği metotlarla erişilmesini sağlamaktır. Alanlar `private` yapılır, okumak için **getter**, değiştirmek için **setter** yazılır. Setter içinde kontrol konarak verinin yanlış değer alması engellenir.",
    "**Erişim belirleyiciler:** `public` (UML'de **+**) her yerden erişilir; `private` (**−**) sadece sınıfın içinden; `protected` (**#**) aynı paket ve alt sınıflardan; hiçbir şey yazılmazsa (default, **~**) aynı paketten.",
    "Örnek: banka müşterisinin `bakiye` alanı private; `setBakiye()` negatif değeri reddediyor, bu yüzden bakiye hiçbir zaman eksiye düşmüyor."
   ],
   "kod": "class Insan {\n    private int bakiye = 100;            // - bakiye : int\n    public int getBakiye() {             // + getBakiye() : int\n        return bakiye;\n    }\n    public void setBakiye(int bakiye) {  // + setBakiye(bakiye : int) : void\n        if (bakiye >= 0) {\n            this.bakiye = bakiye;\n        }\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Insan m = new Insan();\n        m.setBakiye(-50);\n        System.out.println(m.getBakiye());\n        m.setBakiye(300);\n        System.out.println(m.getBakiye());\n    }\n}",
   "out": "100\n300"
  },
  {
   "slot": 2,
   "id": "kap2",
   "q": "Bir alanı `private` yapmak neden önemlidir? Getter ve setter metotlarını banka hesabı örneğiyle açıklayınız.",
   "keys": [
    {
     "k": "Yanlış / geçersiz değer atanmasını engeller",
     "any": [
      "yanlis deger",
      "gecersiz",
      "negatif",
      "hatali",
      "istenmeyen"
     ],
     "w": 2
    },
    {
     "k": "Dışarıdan doğrudan değiştirilemez",
     "any": [
      "dogrudan",
      "disaridan",
      "erisilemez",
      "degistirilemez"
     ],
     "w": 2
    },
    {
     "k": "Getter: değeri okur / döndürür",
     "any": [
      "getter",
      "get",
      "okur",
      "dondurur",
      "return"
     ],
     "w": 2
    },
    {
     "k": "Setter: kontrollü değiştirir",
     "any": [
      "setter",
      "set",
      "kontrol",
      "if"
     ],
     "w": 2
    },
    {
     "k": "Örnek: bakiye / paraCek",
     "any": [
      "bakiye",
      "paracek",
      "para cek",
      "paraekle",
      "hesap"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "Alan `public` olsaydı herkes `m.bakiye = -500;` yazabilirdi. `private` yapınca alan **dışarıdan doğrudan değiştirilemez**, sadece sınıfın metotlarıyla erişilir. Böylece veri **geçersiz değer** alamaz.",
    "**Getter** (`getBakiye()`) alanın değerini **döndürür**, **setter** (`setBakiye()`) değeri **kontrol ederek** değiştirir. Hocanın örneğinde `paraCek()` önce bakiyenin yetip yetmediğine bakar, yetmezse \"Yetersiz Bakiye!\" yazar. Müşteri numarasının setter'ı yoktur: dışarıdan sadece okunur."
   ],
   "kod": "class Musteri {\n    private int bakiye = 100;\n    public int getBakiye() { return bakiye; }\n    private void setBakiye(int b) { if (b >= 0) bakiye = b; }\n    public void paraCek(int miktar) {\n        if (miktar <= getBakiye()) setBakiye(getBakiye() - miktar);\n        else System.out.println(\"Yetersiz Bakiye!\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Musteri m = new Musteri();\n        m.paraCek(30);\n        m.paraCek(500);\n        System.out.println(m.getBakiye());\n        // m.bakiye = -500;   derleme hatası\n    }\n}",
   "out": "Yetersiz Bakiye!\n70"
  },
  {
   "slot": 2,
   "id": "kap3",
   "q": "`protected` erişim belirleyicisi ne işe yarar? Kalıtımla ilişkisini bir örnekle açıklayınız.",
   "keys": [
    {
     "k": "protected: aynı paket + alt sınıflardan erişilir",
     "any": [
      "alt sinif",
      "ayni paket",
      "miras alan",
      "tureyen"
     ],
     "w": 3
    },
    {
     "k": "private'tan farkı: alt sınıf erişebilir",
     "any": [
      "private",
      "erisemez",
      "erisebilir"
     ],
     "w": 2
    },
    {
     "k": "Kalıtım / extends ile kullanım",
     "any": [
      "extends",
      "kalitim",
      "miras"
     ],
     "w": 2
    },
    {
     "k": "UML'de # (diyez)",
     "any": [
      "diyez",
      "uml",
      "simge"
     ],
     "w": 1
    },
    {
     "k": "Örnek (noOlustur, Calisan/Musteri)",
     "any": [
      "nooluştur",
      "noolustur",
      "calisan",
      "musteri",
      "class",
      "override"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "`protected` üyeler sınıfın kendisi, **aynı paketteki** sınıflar ve **alt sınıflar** tarafından erişilebilir; dışarıdaki diğer sınıflardan gizlidir. `private`'tan farkı alt sınıfın da erişebilmesidir. UML'de **#** ile gösterilir.",
    "Hocanın örneğinde (H4_1) `Insan` sınıfında `protected String noOlustur()` var. `Calisan` ve `Musteri` bu sınıftan **extends** ile türeyip metodu override ediyor: çalışan numarası \"C\" ile, müşteri numarası \"M\" ile başlıyor."
   ],
   "kod": "class Insan {\n    protected String noOlustur() { return \"?\"; }\n    public void bilgiGoster() { System.out.println(noOlustur()); }\n}\nclass Calisan extends Insan {\n    @Override\n    protected String noOlustur() { return \"C1234\"; }\n}\nclass Musteri extends Insan {\n    @Override\n    protected String noOlustur() { return \"M123456\"; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Calisan().bilgiGoster();\n        new Musteri().bilgiGoster();\n    }\n}",
   "out": "C1234\nM123456"
  },
  {
   "slot": 3,
   "id": "soy1",
   "q": "Soyutlama (abstraction) nedir? Günlük hayattan ve Java'dan birer örnekle açıklayınız.",
   "keys": [
    {
     "k": "Ne yaptığını gösterip nasıl yaptığını gizlemek",
     "any": [
      "nasil yapt",
      "ne yapt",
      "ayrinti",
      "detay",
      "gizle",
      "karmasik"
     ],
     "w": 3
    },
    {
     "k": "Sadece gerekli olanı göstermek",
     "any": [
      "gerekli",
      "onemli",
      "sadece"
     ],
     "w": 1
    },
    {
     "k": "Günlük hayat örneği (araba, ATM, kumanda...)",
     "any": [
      "araba",
      "atm",
      "kumanda",
      "telefon",
      "direksiyon",
      "banka"
     ],
     "w": 2
    },
    {
     "k": "abstract class / interface ile yapılır",
     "any": [
      "abstract",
      "soyut sinif",
      "interface",
      "arayuz"
     ],
     "w": 2
    },
    {
     "k": "Java örneği",
     "any": [
      "class",
      "paracek",
      "kos",
      "public",
      "void"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "**Soyutlama**, bir nesnenin **ne yaptığını** gösterip **nasıl yaptığını** gizlemektir. Kullanıcı sadece gerekli olanı görür, karmaşık ayrıntılarla uğraşmaz.",
    "**Günlük hayat:** araba sürerken direksiyon, gaz ve frenle ilgileniriz; motorun içinde ne olduğunu bilmemiz gerekmez. ATM'de \"para çek\" düğmesine basarız, banka sisteminin bakiyeyi nasıl güncellediğini görmeyiz.",
    "**Java:** hocanın banka örneğinde `Main` sadece `m.paraCek(50)` çağırır; bakiye kontrolü sınıfın içinde gizlidir. Java'da soyutlama **abstract class** ve **interface** ile yapılır: `abstract void kos();` \"her hayvan koşar\" der, nasıl koşacağını alt sınıf belirler."
   ],
   "kod": "abstract class Hayvan {\n    public abstract void kos();          // ne yapılacağı\n}\nclass Kedi extends Hayvan {\n    @Override\n    public void kos() {                  // nasıl yapılacağı\n        System.out.println(\"Kedi kosuyor!\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Hayvan h = new Kedi();\n        h.kos();\n    }\n}",
   "out": "Kedi kosuyor!"
  },
  {
   "slot": 3,
   "id": "soy2",
   "q": "Soyutlama ile kapsülleme arasındaki farkı açıklayınız. İkisini aynı örnek üzerinde gösteriniz.",
   "keys": [
    {
     "k": "Soyutlama: karmaşıklığı / ayrıntıyı gizler, ne yaptığını gösterir",
     "any": [
      "ayrinti",
      "detay",
      "karmasik",
      "nasil",
      "ne yapt"
     ],
     "w": 3
    },
    {
     "k": "Kapsülleme: veriyi korur, erişimi kısıtlar",
     "any": [
      "veriyi koru",
      "erisim",
      "private",
      "koru"
     ],
     "w": 3
    },
    {
     "k": "Soyutlama abstract/interface ile",
     "any": [
      "abstract",
      "interface",
      "arayuz",
      "soyut sinif"
     ],
     "w": 1
    },
    {
     "k": "Kapsülleme getter/setter ile",
     "any": [
      "getter",
      "setter",
      "get",
      "set"
     ],
     "w": 1
    },
    {
     "k": "Ortak örnek (banka, karakter...)",
     "any": [
      "bakiye",
      "banka",
      "paracek",
      "karakter",
      "class"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "**Soyutlama** tasarım düzeyindedir: nesnenin **ne yaptığını** gösterir, **nasıl** yaptığını gizler. Abstract class ve interface ile yapılır.",
    "**Kapsülleme** uygulama düzeyindedir: nesnenin **verisini korur**, alanları `private` yapıp **getter/setter** ile kontrollü erişim verir.",
    "Banka örneğinde ikisi birlikte: kullanıcı sadece `paraCek()` çağırır, içeride ne olduğunu görmez (**soyutlama**); `bakiye` alanı private olduğu için kimse `m.bakiye = -500` yazamaz (**kapsülleme**)."
   ],
   "kod": "class Musteri {\n    private int bakiye = 100;                 // kapsülleme: veri korunuyor\n    public void paraCek(int miktar) {         // soyutlama: kullanıcı sadece bunu bilir\n        if (miktar <= bakiye) bakiye -= miktar;\n        else System.out.println(\"Yetersiz Bakiye!\");\n    }\n    public int getBakiye() { return bakiye; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Musteri m = new Musteri();\n        m.paraCek(40);\n        System.out.println(m.getBakiye());\n    }\n}",
   "out": "60"
  },
  {
   "slot": 3,
   "id": "soy3",
   "q": "Hocanın derste yazdırdığı oyun projesinde (Karakter, Vampir, Oyun) soyutlama nasıl kullanılmıştır? Örnekle açıklayınız.",
   "keys": [
    {
     "k": "Main sadece Oyun'u başlatır, ayrıntılar gizli",
     "any": [
      "main",
      "baslat",
      "gizli",
      "bilmez",
      "gormez"
     ],
     "w": 3
    },
    {
     "k": "saldir() çağrılır, hesap içerde",
     "any": [
      "saldir",
      "savun",
      "hesap",
      "hasar"
     ],
     "w": 2
    },
    {
     "k": "Soyutlama tanımı: ne / nasıl",
     "any": [
      "ne yapt",
      "nasil",
      "ayrinti",
      "detay",
      "karmasik"
     ],
     "w": 3
    },
    {
     "k": "Örnek kod",
     "any": [
      "class",
      "new oyun",
      "oyun",
      "public"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "Soyutlama, ne yapıldığını gösterip **nasıl** yapıldığını gizlemektir. Oyunda `Main` sadece `new Oyun().baslat();` yazar; düşmanların rastgele seçilmesi, savaş döngüsü, seviye atlama `Oyun` sınıfının içinde gizlidir.",
    "Aynı şekilde `mc.saldir(dusman)` çağrısı yapan kod, saldırı puanının rastgele hesaplanmasını, kritik vuruşu ve düşmanın `savun()` ile savunmasını bilmez; bunlar `Karakter` sınıfının içinde kalır."
   ],
   "kod": "class Karakter {\n    private int can = 100;\n    private int savun() { return 20; }               // ayrıntı gizli\n    public void saldir(Karakter dusman) {            // kullanıcı sadece bunu bilir\n        int hasar = 50 - dusman.savun();\n        dusman.can -= hasar;\n        System.out.println(hasar + \" hasar verildi\");\n    }\n    public int getCan() { return can; }\n}\nclass Oyun {\n    public void baslat() {\n        Karakter mc = new Karakter(), dusman = new Karakter();\n        mc.saldir(dusman);\n        System.out.println(\"Dusman can: \" + dusman.getCan());\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Oyun().baslat();\n    }\n}",
   "out": "30 hasar verildi\nDusman can: 70"
  },
  {
   "slot": 4,
   "id": "pol1",
   "q": "Çok biçimlilik (polymorphism) nedir? `Hayvan h = new Kedi();` ifadesini ve `ArrayList<Hayvan>` kullanımını açıklayarak örnek veriniz.",
   "keys": [
    {
     "k": "Aynı referans/çağrının farklı nesnelerde farklı davranması",
     "any": [
      "farkli davran",
      "farkli bicim",
      "cok bicim",
      "farkli sekil",
      "farkli calis"
     ],
     "w": 3
    },
    {
     "k": "Üst sınıf referansı alt sınıf nesnesini tutar",
     "any": [
      "ust sinif",
      "ust tip",
      "referans",
      "alt sinif nesne"
     ],
     "w": 2
    },
    {
     "k": "Override ile birlikte çalışır",
     "any": [
      "override",
      "ezme",
      "ezer"
     ],
     "w": 2
    },
    {
     "k": "ArrayList ile farklı alt sınıflar tek listede",
     "any": [
      "arraylist",
      "liste",
      "list"
     ],
     "w": 1
    },
    {
     "k": "Örnek kod",
     "any": [
      "new kedi",
      "hayvan h",
      "for",
      "class"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "**Çok biçimlilik**, aynı tipteki bir referansın ya da aynı metot çağrısının **farklı nesnelerde farklı davranmasıdır**.",
    "`Hayvan h = new Kedi();` ifadesinde referans **üst sınıf** (Hayvan) tipinde, nesne **alt sınıf** (Kedi) tipindedir. `h.kos()` çağrılınca Kedi'nin **override** ettiği metot çalışır. Tersi (`Kedi k = new Hayvan();`) olmaz.",
    "`ArrayList<Hayvan>` içine Kedi, Köpek gibi farklı alt sınıflar konabilir; döngüde hepsine aynı `sesCikar()` çağrılır, her biri kendi sesini çıkarır. Hocanın oyununda `ArrayList<Karakter>` içine Vampir, Elf, Ejderha konup `bilgiGoster()` çağrılıyordu."
   ],
   "kod": "import java.util.ArrayList;\n\nabstract class Hayvan {\n    public abstract void sesCikar();\n}\nclass Kedi extends Hayvan {\n    @Override public void sesCikar() { System.out.println(\"Miyav\"); }\n}\nclass Kopek extends Hayvan {\n    @Override public void sesCikar() { System.out.println(\"Hav\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Hayvan h = new Kedi();\n        h.sesCikar();\n        ArrayList<Hayvan> liste = new ArrayList<>();\n        liste.add(new Kopek());\n        liste.add(new Kedi());\n        for (Hayvan x : liste) x.sesCikar();\n    }\n}",
   "out": "Miyav\nHav\nMiyav"
  },
  {
   "slot": 4,
   "id": "pol2",
   "q": "`Insan insan2 = new Musteri(\"Veli\");` satırından sonra `insan2.bakiyeGoster();` neden çağrılamaz? Çok biçimlilikte referans tipi ile nesne tipinin rolünü açıklayınız.",
   "keys": [
    {
     "k": "Çağrılabilecek metotlar referans tipine göre belirlenir",
     "any": [
      "referans tip",
      "referansin tip",
      "degiskenin tip",
      "insan tipinde",
      "insan sinifinda yok"
     ],
     "w": 3
    },
    {
     "k": "Çalışacak sürüm nesnenin gerçek tipine göre",
     "any": [
      "nesnenin tip",
      "gercek tip",
      "calisma zaman",
      "musteri nesne"
     ],
     "w": 3
    },
    {
     "k": "bakiyeGoster Insan sınıfında yok",
     "any": [
      "bakiyegoster",
      "insanda yok",
      "insan sinifinda",
      "tanimli degil"
     ],
     "w": 2
    },
    {
     "k": "Çözüm: Musteri tipinde referans (ya da cast)",
     "any": [
      "musteri m",
      "cast",
      "donustur",
      "musteri tipinde"
     ],
     "w": 1
    },
    {
     "k": "Örnek",
     "any": [
      "class",
      "new musteri",
      "bilgigoster"
     ],
     "w": 1
    }
   ],
   "cevap": [
    "Çok biçimlilikte **hangi metotların çağrılabileceğine referansın tipi** karar verir (derleme zamanı). `insan2`'nin tipi `Insan`'dır ve `Insan` sınıfında `bakiyeGoster()` **tanımlı değildir**; bu yüzden derleyici hata verir (hocanın notu: \"çağıramazsınız!\").",
    "**Hangi sürümün çalışacağına ise nesnenin gerçek tipi** karar verir (çalışma zamanı). `insan2.bilgiGoster()` çağrılabilir ve Musteri'nin override ettiği sürüm çalışır.",
    "Çözüm: `Musteri m = new Musteri(\"Ayse\"); m.bakiyeGoster();` ya da `((Musteri) insan2).bakiyeGoster();` (tip dönüşümü)."
   ],
   "kod": "class Insan {\n    public void bilgiGoster() { System.out.println(\"Insan\"); }\n}\nclass Musteri extends Insan {\n    @Override public void bilgiGoster() { System.out.println(\"Musteri\"); }\n    public void bakiyeGoster() { System.out.println(\"500 TL\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Insan insan2 = new Musteri();\n        insan2.bilgiGoster();             // Musteri sürümü çalışır\n        // insan2.bakiyeGoster();         derleme hatası\n        Musteri m = new Musteri();\n        m.bakiyeGoster();\n    }\n}",
   "out": "Musteri\n500 TL"
  },
  {
   "slot": 4,
   "id": "pol3",
   "q": "Çok biçimliliğin iki türünü (derleme zamanı ve çalışma zamanı) birer örnekle açıklayınız.",
   "keys": [
    {
     "k": "Derleme zamanı = overloading (aşırı yükleme)",
     "any": [
      "overload",
      "asiri yukle",
      "farkli parametre"
     ],
     "w": 3
    },
    {
     "k": "Çalışma zamanı = overriding (ezme)",
     "any": [
      "override",
      "ezme",
      "ezer"
     ],
     "w": 3
    },
    {
     "k": "statik / dinamik bağlama",
     "any": [
      "statik",
      "dinamik",
      "derleme",
      "calisma zaman",
      "compile",
      "runtime"
     ],
     "w": 2
    },
    {
     "k": "Örnekler",
     "any": [
      "hayvan(",
      "kos",
      "class",
      "new"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "**Derleme zamanı (statik) çok biçimlilik:** **aşırı yükleme (overloading)**. Aynı adlı metotlardan hangisinin çağrılacağı derleyici tarafından **parametrelere** bakılarak seçilir. Örnek: `topla(int, int)` ve `topla(double, double)` ya da `Hayvan()` / `Hayvan(int konum)`.",
    "**Çalışma zamanı (dinamik) çok biçimlilik:** **ezme (overriding)** + üst sınıf referansı. `Hayvan h = new Tavsan(); h.kos();` satırında hangi `kos()`'un çalışacağı program çalışırken **nesnenin tipine** bakılarak belirlenir."
   ],
   "kod": "class Hesap {\n    int topla(int a, int b) { return a + b; }              // overloading\n    double topla(double a, double b) { return a + b; }\n}\nclass Hayvan { void kos() { System.out.println(\"Hayvan kosuyor\"); } }\nclass Tavsan extends Hayvan {\n    @Override void kos() { System.out.println(\"Tavsan zipliyor\"); }   // overriding\n}\npublic class Main {\n    public static void main(String[] args) {\n        Hesap h = new Hesap();\n        System.out.println(h.topla(2, 3) + \" \" + h.topla(2.5, 1.5));\n        Hayvan x = new Tavsan();\n        x.kos();\n    }\n}",
   "out": "5 4.0\nTavsan zipliyor"
  },
  {
   "slot": 5,
   "id": "abs1",
   "q": "Soyut sınıf (abstract class) nedir? Özelliklerini maddeler hâlinde yazıp bir örnek veriniz.",
   "keys": [
    {
     "k": "Nesne üretilemez",
     "any": [
      "nesne uretil",
      "new ile olusturul",
      "nesnesi olusturul",
      "orneklen",
      "nesne yok"
     ],
     "w": 2
    },
    {
     "k": "Referans olabilir",
     "any": [
      "referans"
     ],
     "w": 1
    },
    {
     "k": "extends ile kullanılır, tek üst sınıf",
     "any": [
      "extends",
      "bir tane",
      "tek ",
      "en fazla bir"
     ],
     "w": 1.5
    },
    {
     "k": "Soyut (gövdesiz) metot içerebilir, alt sınıf yazmak zorunda",
     "any": [
      "soyut metot",
      "abstract void",
      "govdesiz",
      "zorunda",
      "zorunlu"
     ],
     "w": 2
    },
    {
     "k": "Normal metot / private alan (kapsülleme) olabilir",
     "any": [
      "normal metot",
      "private",
      "kapsulleme",
      "govdeli"
     ],
     "w": 1
    },
    {
     "k": "Constructor (yapıcı) vardır",
     "any": [
      "constructor",
      "yapici"
     ],
     "w": 1
    },
    {
     "k": "Örnek kod",
     "any": [
      "abstract class",
      "class",
      "extends"
     ],
     "w": 1.5
    }
   ],
   "cevap": [
    "**Soyut sınıf**, kendisinden **nesne üretilmeyen**, başka sınıflara üst sınıf (şablon) olmak için yazılan sınıftır: `public abstract class Hayvan`.",
    "• Nesne üretilmez (`new Hayvan()` hata) ama **referans olabilir** (`Hayvan h = new Kedi()`). • `extends` ile kullanılır; bir sınıfın **en fazla bir** üst sınıfı olur. • **Soyut metot** (gövdesiz, `public abstract void kos();`) içerebilir; alt sınıf bunu yazmak **zorundadır**. • Normal (gövdeli) metotlar da olabilir. • **Kapsülleme** kullanılabilir (private alanlar). • **Constructor vardır**, alt sınıf `super(...)` ile çağırır."
   ],
   "kod": "abstract class Hayvan {\n    private String isim;\n    public Hayvan(String isim) { this.isim = isim; }\n    public void bilgiGoster() { System.out.println(\"Isim : \" + isim); }\n    public abstract void kos();\n}\nclass Kedi extends Hayvan {\n    public Kedi(String isim) { super(isim); }\n    @Override public void kos() { System.out.println(\"Kedi kosuyor!\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Hayvan h = new Kedi(\"Tekir\");\n        h.bilgiGoster();\n        h.kos();\n    }\n}",
   "out": "Isim : Tekir\nKedi kosuyor!"
  },
  {
   "slot": 5,
   "id": "abs2",
   "q": "Bir sınıfı neden `abstract` yaparız? Soyut metot nedir, alt sınıf soyut metodu yazmazsa ne olur? Örnekle açıklayınız.",
   "keys": [
    {
     "k": "Sadece şablon/üst sınıf olsun, kendisinden nesne üretilmesin diye",
     "any": [
      "nesne uretil",
      "sablon",
      "ust sinif",
      "genel",
      "anlamsiz"
     ],
     "w": 2
    },
    {
     "k": "Ortak kodu/alanı tek yerde toplamak",
     "any": [
      "ortak",
      "tekrar"
     ],
     "w": 1
    },
    {
     "k": "Soyut metot: gövdesiz, sadece imza",
     "any": [
      "govdesiz",
      "govdesi yok",
      "imza",
      "noktali virgul",
      "suslu parantez"
     ],
     "w": 2
    },
    {
     "k": "Alt sınıf yazmazsa derleme hatası (ya da o da abstract olmalı)",
     "any": [
      "derleme hata",
      "hata ver",
      "abstract olmali",
      "abstract olmak zorunda",
      "zorunda"
     ],
     "w": 3
    },
    {
     "k": "Örnek",
     "any": [
      "abstract",
      "class",
      "kos",
      "extends"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "\"Hayvan\" genel bir kavramdır; tek başına bir hayvan nesnesi anlamsızdır, her zaman bir Kedi ya da Tavşan vardır. Bu yüzden `Hayvan` **abstract** yapılır: kendisinden nesne üretilmez, alt sınıflara **ortak alan ve kodu** (isim, `bilgiGoster()`) sağlayan bir şablon olur.",
    "**Soyut metot**, gövdesi olmayan, sadece imzası yazılan metottur: `public abstract void kos();` (süslü parantez yok, noktalı virgülle biter). \"Her hayvan koşar ama nasıl koşacağı türüne göre değişir\" demektir.",
    "Alt sınıf soyut metodu **yazmazsa derleme hatası** alınır; ya metodu yazmalı ya da kendisi de `abstract` olmalıdır."
   ],
   "kod": "abstract class Hayvan {\n    public abstract void kos();\n    public void uyu() { System.out.println(\"Zzz\"); }\n}\nclass Tavsan extends Hayvan {\n    @Override public void kos() { System.out.println(\"Tavsan zipliyor\"); }\n}\n// class Kaplumbaga extends Hayvan { }   → hata: kos() yazılmadı\npublic class Main {\n    public static void main(String[] args) {\n        Hayvan h = new Tavsan();\n        h.kos();\n        h.uyu();\n    }\n}",
   "out": "Tavsan zipliyor\nZzz"
  },
  {
   "slot": 5,
   "id": "abs3",
   "q": "Hocanın oyun projesindeki `Karakter` sınıfı soyut sınıf olarak tasarlansaydı neler değişirdi? Soyut sınıfın özelliklerini bu örnek üzerinden anlatınız.",
   "keys": [
    {
     "k": "new Karakter() yazılamaz, sadece alt sınıflar",
     "any": [
      "nesne uretil",
      "new karakter",
      "olusturul"
     ],
     "w": 2
    },
    {
     "k": "Karakter referansı / ArrayList<Karakter> yine kullanılır",
     "any": [
      "referans",
      "arraylist",
      "liste"
     ],
     "w": 2
    },
    {
     "k": "Ortak alanlar ve saldir() gibi metotlar kalır",
     "any": [
      "ortak",
      "saldir",
      "can",
      "normal metot"
     ],
     "w": 2
    },
    {
     "k": "bilgiGoster gibi bir metot abstract olup her karakter kendi yazar",
     "any": [
      "abstract",
      "soyut metot",
      "zorunda"
     ],
     "w": 2
    },
    {
     "k": "Yapıcı kalır, super(...) ile çağrılır",
     "any": [
      "super",
      "constructor",
      "yapici"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "`public abstract class Karakter` yazılsaydı **`new Karakter(...)` yazılamazdı**; oyunda zaten hep Vampir, Elf gibi alt sınıflar kullanılıyor, bu yüzden mantıklı bir tasarım olurdu.",
    "`Karakter mc = new AnaKarakter();` ve `ArrayList<Karakter>` **referans** olarak aynen kullanılmaya devam ederdi.",
    "Ortak alanlar (private can, saldiriGucu) ve `saldir()` gibi **normal metotlar** kalırdı. Her karakterin ASCII resmi farklı olduğu için örneğin `public abstract void resimCiz();` soyut metodu eklenip her alt sınıf **yazmak zorunda** kalırdı.",
    "Yapıcı kalır: `Vampir()` yine `super(100, 60, 20, 20)` ile Karakter'in yapıcısını çağırır."
   ],
   "kod": "abstract class Karakter {\n    private int can;\n    public Karakter(int can) { this.can = can; }\n    public abstract void resimCiz();\n    public void bilgiGoster() {\n        resimCiz();\n        System.out.println(\"Can : \" + can);\n    }\n}\nclass Vampir extends Karakter {\n    public Vampir() { super(100); }\n    @Override public void resimCiz() { System.out.println(\"( o  o )\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Karakter mc = new Vampir();\n        mc.bilgiGoster();\n    }\n}",
   "out": "( o  o )\nCan : 100"
  },
  {
   "slot": 6,
   "id": "ara1",
   "q": "Arayüz (interface) nedir? Özelliklerini maddeler hâlinde yazıp `Kedi extends Hayvan implements ...` biçiminde bir örnek veriniz.",
   "keys": [
    {
     "k": "Sınıfın ne yapabileceğini belirten sözleşme / yetenek",
     "any": [
      "sozlesme",
      "yetenek",
      "ne yapabilece",
      "davranis"
     ],
     "w": 1.5
    },
    {
     "k": "implements ile kullanılır",
     "any": [
      "implements"
     ],
     "w": 1.5
    },
    {
     "k": "Bir sınıf birden çok arayüz uygulayabilir",
     "any": [
      "birden fazla",
      "birden cok",
      "sinirsiz",
      "coklu"
     ],
     "w": 1.5
    },
    {
     "k": "Nesne üretilmez, constructor yok",
     "any": [
      "nesne",
      "constructor",
      "yapici"
     ],
     "w": 1
    },
    {
     "k": "Metotlar soyut (default/private hariç)",
     "any": [
      "soyut",
      "govdesiz",
      "abstract",
      "default"
     ],
     "w": 1.5
    },
    {
     "k": "Alanlar sabit (final), her şey public",
     "any": [
      "sabit",
      "final",
      "public"
     ],
     "w": 1
    },
    {
     "k": "Örnek: extends + implements",
     "any": [
      "extends",
      "interface",
      "class kedi"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "**Arayüz**, bir sınıfın **ne yapabileceğini** belirten bir sözleşmedir (yetenek listesi): `public interface YemekYiyebilir`. Sınıflar arayüzü `implements` ile uygular ve içindeki metotları yazmak zorundadır.",
    "• Nesne üretilmez, ama **referans olabilir**. • `implements` ile kullanılır; bir sınıf **sınırsız sayıda** arayüz uygulayabilir. • Tüm metotları **soyuttur**; Java 8'den sonra `default`, Java 9'dan sonra `private` gövdeli metot yazılabilir. • Her şey **public**. • Özellikler **sabittir** (`public static final`). • **Constructor yoktur**.",
    "Tahtadaki örnek: `class Kedi extends Hayvan implements Kosabilir, SesCikarabilir, Surunebilir`: tek üst sınıf, üç arayüz."
   ],
   "kod": "interface Kosabilir { void kos(); }\ninterface SesCikarabilir { void sesCikar(); }\nabstract class Hayvan {\n    public void uyu() { System.out.println(\"Zzz\"); }\n}\nclass Kedi extends Hayvan implements Kosabilir, SesCikarabilir {\n    @Override public void kos() { System.out.println(\"Kedi kosuyor\"); }\n    @Override public void sesCikar() { System.out.println(\"Miyav\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Kedi k = new Kedi();\n        k.kos();\n        k.sesCikar();\n        k.uyu();\n        SesCikarabilir s = k;                 // arayüz tipinde referans\n        s.sesCikar();\n    }\n}",
   "out": "Kedi kosuyor\nMiyav\nZzz\nMiyav"
  },
  {
   "slot": 6,
   "id": "ara2",
   "q": "Java'da bir sınıf neden birden fazla sınıftan kalıtım alamaz, birden fazla yeteneği nasıl kazanır? Arayüzlerle açıklayıp örnek veriniz.",
   "keys": [
    {
     "k": "Java tek kalıtımı destekler (extends bir sınıf)",
     "any": [
      "tek kalitim",
      "bir sinif",
      "tek bir",
      "en fazla bir",
      "tek ust"
     ],
     "w": 3
    },
    {
     "k": "Çoklu yetenek arayüzlerle (implements A, B)",
     "any": [
      "implements",
      "arayuz",
      "interface"
     ],
     "w": 3
    },
    {
     "k": "Virgülle birden çok arayüz",
     "any": [
      "virgul",
      "birden fazla",
      "birden cok",
      "sinirsiz"
     ],
     "w": 2
    },
    {
     "k": "Örnek",
     "any": [
      "class",
      "kedi",
      "robot",
      "kosabilir",
      "yemekyiyebilir"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "Java'da `extends` ile **sadece bir** sınıftan kalıtım alınır (tek kalıtım). İki üst sınıfta aynı adlı metot olsaydı hangisinin kullanılacağı belirsiz olurdu.",
    "Birden fazla yetenek **arayüzlerle** kazanılır: `implements` sonrasına **virgülle** istenen sayıda arayüz yazılır. `Kedi extends Hayvan implements YemekYiyebilir, Uyuyabilir`. Farklı türden sınıflar da aynı arayüzü uygulayabilir: hem `Kedi` hem `Robot` `Kosabilir` olabilir."
   ],
   "kod": "interface Kosabilir { void kos(); }\ninterface Uyuyabilir { void uyu(); }\nclass Kedi implements Kosabilir, Uyuyabilir {\n    public void kos() { System.out.println(\"Kedi kosuyor\"); }\n    public void uyu() { System.out.println(\"Kedi uyuyor\"); }\n}\nclass Robot implements Kosabilir {\n    public void kos() { System.out.println(\"Robot kosuyor\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Kosabilir[] liste = { new Kedi(), new Robot() };\n        for (Kosabilir k : liste) k.kos();\n    }\n}",
   "out": "Kedi kosuyor\nRobot kosuyor"
  },
  {
   "slot": 6,
   "id": "ara3",
   "q": "Arayüzde tanımlanan bir değişkenin ve `default` metodun özelliklerini açıklayınız. `YemekYiyebilir` arayüzü üzerinden örnek veriniz.",
   "keys": [
    {
     "k": "Değişkenler sabittir: public static final, değiştirilemez",
     "any": [
      "sabit",
      "final",
      "degistirilemez",
      "static"
     ],
     "w": 3
    },
    {
     "k": "Arayüz metotları varsayılan olarak public abstract",
     "any": [
      "public abstract",
      "soyut",
      "govdesiz"
     ],
     "w": 2
    },
    {
     "k": "default metot gövdelidir, sınıf yazmak zorunda değildir",
     "any": [
      "default",
      "govdeli",
      "zorunda degil"
     ],
     "w": 2
    },
    {
     "k": "private metot sadece default metotlar içinde kullanılır",
     "any": [
      "private"
     ],
     "w": 1
    },
    {
     "k": "Örnek",
     "any": [
      "yemekyiyebilir",
      "interface",
      "yas",
      "renk"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "Arayüzdeki değişkenler otomatik olarak `public static final`'dır, yani **sabittir**: `int YAS = 5;` yazılınca sonradan değiştirilemez (`YemekYiyebilir.YAS = 10;` hata). Sınıf adıyla erişilir.",
    "Metotlar yazılmasa da `public abstract`'tır. **`default` metot** ise gövdelidir; uygulayan sınıf isterse ezer, istemezse hazır sürümü kullanır. **`private` metot** sadece arayüzün içindeki default metotlarda yardımcı olarak kullanılır."
   ],
   "kod": "interface YemekYiyebilir {\n    int YAS = 5;                  // public static final\n    String RENK = \"Beyaz\";\n    void cigneme();               // public abstract\n    private void yardimci() { System.out.println(\"Private metot kullanildi\"); }\n    default void istisna() {\n        System.out.println(\"Bu bir default metot\");\n        yardimci();\n    }\n}\nclass Kedi implements YemekYiyebilir {\n    public void cigneme() { System.out.println(\"Kedi cigniyor\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        YemekYiyebilir y = new Kedi();\n        y.cigneme();\n        y.istisna();\n        System.out.println(YemekYiyebilir.YAS + \" \" + YemekYiyebilir.RENK);\n    }\n}",
   "out": "Kedi cigniyor\nBu bir default metot\nPrivate metot kullanildi\n5 Beyaz"
  },
  {
   "slot": 7,
   "id": "kar1",
   "q": "Soyut sınıf ile arayüz arasındaki farkları en az beş madde hâlinde yazınız. Hangi durumda hangisini seçersiniz?",
   "keys": [
    {
     "k": "extends – implements",
     "any": [
      "extends",
      "implements"
     ],
     "w": 2
    },
    {
     "k": "Tek üst sınıf – sınırsız arayüz",
     "any": [
      "bir tane",
      "tek",
      "birden fazla",
      "sinirsiz",
      "birden cok"
     ],
     "w": 2
    },
    {
     "k": "Constructor var – yok",
     "any": [
      "constructor",
      "yapici"
     ],
     "w": 1.5
    },
    {
     "k": "Normal metot/alan serbest – alanlar sabit, metotlar soyut",
     "any": [
      "sabit",
      "final",
      "normal metot",
      "soyut"
     ],
     "w": 1.5
    },
    {
     "k": "Erişim: arayüzde her şey public; soyut sınıfta private/protected olabilir",
     "any": [
      "public",
      "private",
      "protected",
      "kapsulleme"
     ],
     "w": 1
    },
    {
     "k": "Seçim: ortak kod/alan → soyut sınıf, ortak yetenek → arayüz",
     "any": [
      "ortak",
      "yetenek",
      "is a",
      "can do"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "• Soyut sınıf `extends`, arayüz `implements` ile kullanılır. • Bir sınıfın **en fazla bir** üst sınıfı olur ama **sınırsız** arayüz uygulayabilir. • Soyut sınıfta **constructor vardır**, arayüzde **yoktur**. • Soyut sınıf soyut ve normal metot ile her türlü alanı içerebilir; arayüzde metotlar soyuttur (default/private hariç), alanlar **sabittir** (final). • Arayüzde **her şey public**tir; soyut sınıfta private/protected kullanılır (kapsülleme). • Ortak nokta: ikisinden de **nesne üretilmez**, ikisi de **referans** olabilir.",
    "**Seçim:** alt sınıflar **ortak alan ve kod** paylaşıyorsa (\"is-a\": Kedi bir Hayvandır) soyut sınıf; farklı türden sınıflara **ortak bir yetenek** kazandırılacaksa (\"can-do\": Kedi de Robot da koşabilir) arayüz."
   ],
   "kod": "interface Kosabilir { void kos(); }\nabstract class Hayvan {\n    private String isim;\n    public Hayvan(String isim) { this.isim = isim; }\n    public String getIsim() { return isim; }\n}\nclass Kedi extends Hayvan implements Kosabilir {\n    public Kedi(String isim) { super(isim); }\n    public void kos() { System.out.println(getIsim() + \" kosuyor\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Kosabilir k = new Kedi(\"Tekir\");\n        k.kos();\n    }\n}",
   "out": "Tekir kosuyor"
  },
  {
   "slot": 7,
   "id": "uml1",
   "q": "UML sınıf diyagramı nedir? Bir sınıf kutusunun bölümlerini ve sınıflar arası ilişki türlerini (kalıtım, gerçekleşme, bağlantı, aggregation, composition) örnekle açıklayınız.",
   "keys": [
    {
     "k": "UML: tasarımı görselleştiren modelleme dili",
     "any": [
      "modelleme",
      "gorsellestir",
      "tasarim",
      "diyagram"
     ],
     "w": 1.5
    },
    {
     "k": "Kutu: ad / özellikler / metotlar; + − #",
     "any": [
      "ozellik",
      "metot",
      "erisim",
      "arti",
      "eksi"
     ],
     "w": 1.5
    },
    {
     "k": "Kalıtım: düz çizgi + boş üçgen",
     "any": [
      "ucgen",
      "duz cizgi",
      "kalitim",
      "generalization"
     ],
     "w": 2
    },
    {
     "k": "Gerçekleşme: kesikli çizgi (implements)",
     "any": [
      "kesikli",
      "realization",
      "gerceklesme",
      "implements"
     ],
     "w": 1.5
    },
    {
     "k": "Bağlantı (has-a) ve çokluk",
     "any": [
      "has a",
      "association",
      "baglanti",
      "sahip",
      "0..*",
      "1..*",
      "cokluk"
     ],
     "w": 1.5
    },
    {
     "k": "Aggregation (boş elmas) / composition (dolu elmas)",
     "any": [
      "aggregation",
      "composition",
      "elmas",
      "tekerlek",
      "kalp"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "**UML**, yazılım tasarımını görselleştiren genel amaçlı bir **modelleme dilidir** (programlama dili değildir). **Sınıf diyagramı** sınıfları ve aralarındaki ilişkileri gösterir.",
    "**Sınıf kutusu** üç bölümdür: en üstte **ad** (soyutsa italik ya da «abstract», arayüzse «interface»), ortada **özellikler** (`- isim : String`), altta **metotlar** (`+ kos() : void`). `+` public, `-` private, `#` protected.",
    "**İlişkiler:** • **Kalıtım (generalization):** alt sınıftan üst sınıfa **düz çizgi + içi boş üçgen**, \"is-a\" (Tavsan → Hayvan). • **Gerçekleşme (realization):** sınıftan arayüze **kesikli çizgi + boş üçgen** (Kedi ⇢ YemekYiyebilir). • **Bağlantı (association):** \"has-a\", düz ok, uçlarda çokluk (1, 0..*, 1..*): Karakter → Random. • **Aggregation:** zayıf parça, **boş elmas**: araba–tekerlek (araba yok olsa tekerlek kalır). • **Composition:** güçlü parça, **dolu elmas**: insan–kalp (insan yok olunca kalp de yok olur)."
   ],
   "kod": "import java.util.Random;\n\nclass Karakter {                      // Karakter ──> Random  (association, has-a)\n    private Random r = new Random();\n    public int zar() { return r.nextInt(1, 7); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        int z = new Karakter().zar();\n        System.out.println(z >= 1 && z <= 6);\n    }\n}",
   "out": "true"
  },
  {
   "slot": 7,
   "id": "kedi1",
   "q": "Tahtadaki `Kedi extends Hayvan implements Kosabilir, SesCikarabilir, Surunebilir` tanımını açıklayınız. Bu satırda hangi nesne tabanlı kavramlar kullanılmıştır? Java kodu ve UML ilişkileriyle gösteriniz.",
   "keys": [
    {
     "k": "extends: Hayvan'dan kalıtım (tek üst sınıf)",
     "any": [
      "extends",
      "kalitim",
      "miras",
      "ust sinif"
     ],
     "w": 2
    },
    {
     "k": "implements: üç arayüz, birden çok olabilir",
     "any": [
      "implements",
      "arayuz",
      "interface",
      "birden"
     ],
     "w": 2
    },
    {
     "k": "Kedi arayüz metotlarını yazmak zorunda (override)",
     "any": [
      "zorunda",
      "override",
      "yazmak",
      "metotlarini"
     ],
     "w": 2
    },
    {
     "k": "Çok biçimlilik: Hayvan / Kosabilir referansı Kedi tutar",
     "any": [
      "cok bicim",
      "polymorph",
      "referans",
      "hayvan h"
     ],
     "w": 2
    },
    {
     "k": "UML: düz çizgi + boş üçgen ve kesikli çizgi",
     "any": [
      "kesikli",
      "ucgen",
      "uml"
     ],
     "w": 2
    }
   ],
   "cevap": [
    "`Kedi extends Hayvan`: Kedi, Hayvan sınıfından **kalıtım** alır (tek üst sınıf; Hayvan soyut sınıf da olabilir). `implements Kosabilir, SesCikarabilir, Surunebilir`: Kedi bu **üç arayüzü** uygular; bir sınıf birden çok arayüz uygulayabildiği için virgülle yazılır. Önce `extends`, sonra `implements` gelir.",
    "Kedi, arayüzlerdeki soyut metotları (`kos()`, `sesCikar()`, `surun()`) **yazmak zorundadır** (`@Override`). **Çok biçimlilik:** `Hayvan h = new Kedi();` ve `SesCikarabilir s = new Kedi();` geçerlidir.",
    "**UML:** Kedi'den Hayvan'a **düz çizgi + boş üçgen** (kalıtım), Kedi'den her arayüze **kesikli çizgi + boş üçgen** (gerçekleşme). Arayüz kutularının üstünde «interface» yazar."
   ],
   "kod": "interface Kosabilir { void kos(); }\ninterface SesCikarabilir { void sesCikar(); }\ninterface Surunebilir { void surun(); }\nabstract class Hayvan {\n    public abstract void ye();\n}\nclass Kedi extends Hayvan implements Kosabilir, SesCikarabilir, Surunebilir {\n    public void ye() { System.out.println(\"Kedi mama yiyor\"); }\n    public void kos() { System.out.println(\"Kedi kosuyor\"); }\n    public void sesCikar() { System.out.println(\"Miyav\"); }\n    public void surun() { System.out.println(\"Kedi sürünüyor\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Hayvan h = new Kedi();\n        h.ye();\n        SesCikarabilir s = new Kedi();\n        s.sesCikar();\n    }\n}",
   "out": "Kedi mama yiyor\nMiyav"
  }
 ],
 "denemeler": [
  {
   "id": "y1",
   "title": "Yazılı deneme 1",
   "ids": [
    "kal1",
    "kap1",
    "soy1",
    "pol1",
    "abs1",
    "ara1",
    "kar1"
   ]
  },
  {
   "id": "y2",
   "title": "Yazılı deneme 2",
   "ids": [
    "kal2",
    "kap2",
    "soy2",
    "pol2",
    "abs2",
    "ara2",
    "uml1"
   ]
  },
  {
   "id": "y3",
   "title": "Yazılı deneme 3",
   "ids": [
    "kal3",
    "kap3",
    "soy3",
    "pol3",
    "abs3",
    "ara3",
    "kedi1"
   ]
  }
 ]
};
