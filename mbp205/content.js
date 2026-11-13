/* MBP205 Nesne Tabanlı Programlama II · konu özetleri. tools/build.py ile üretildi. */
window.COURSE = {
 "id": "mbp205",
 "lang": "java",
 "storeKey": "mbp205-best",
 "themeKey": "mbp205-theme",
 "points": {
  "mc": 5,
  "fill": 5,
  "code": 20
 },
 "randomMix": [
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "fill",
  "fill",
  "fill",
  "fill",
  "code"
 ],
 "randomTitle": "Rastgele test (20 soru)",
 "randomDesc": "Bütün konulardan 15 test, 4 boşluk, 1 kod tamamlama. Az gördüğün sorular önce gelir.",
 "reviewTitle": "Nesne Tabanlı Programlama II",
 "reviewLead": "Vize **7 açık uçlu soru**: hoca tahtadaki başlıkları **açıklamanızı ve örnek vermenizi** isteyecek, kod yazdırmayacak. Konular tahtadaki sırayla; örnekler derste yazdığımız kodlardan (Yarış, Banka, Çalışan/Müşteri, Karakter oyunu, Kedi). Bütün Java örnekleri derlenip çalıştırılarak kontrol edildi. Çalıştıktan sonra **Yazılı prova** sekmesinde cevap yazmayı dene.",
 "testLead": "Sınav açık uçlu; bu testler kavramları pekiştirmek için. Önce **tahtadaki maddeler** testini çöz (121 soru toplam). Çıktı soran soruların cevabı gerçek Java ile çalıştırılarak doğrulandı.",
 "formatTitle": "Vize formatı",
 "formatNote": "Hocanın söylediği: kod fazla sorulmayacak; tahtadaki başlıkları açıklayıp örnek vermenizi isteyen **7 soru**. Puan dağılımı belirtilmedi; Yazılı prova her soruyu 10 puan sayar.",
 "hocaLink": {
  "href": "#yazili",
  "text": "Yazılı provaya geç →"
 },
 "hocaTitle": "Hocanın tahtası",
 "hocaNote": "Tahtadaki her madde birebir soruya çevrildi.",
 "codeDesc": "extends, implements, super, abstract ve @Override kalıplarını boşluk doldurarak tekrar et.",
 "trapsLead": "Açık uçlu cevaplarda en çok karıştırılan noktalar."
};
window.EXAM_FORMAT = [
 {
  "range": "7 soru",
  "what": "Açık uçlu: kavramı açıkla + örnek ver",
  "big": "7",
  "small": "soru"
 }
];
window.TRAPS = [
 {
  "t": "Overloading = **aynı sınıfta** aynı ad, farklı parametre. Overriding = **alt sınıfta** aynı imza, `@Override`.",
  "topic": "sinif"
 },
 {
  "t": "Yapıcının dönüş tipi yoktur, adı sınıfla aynıdır. `void` yazılırsa yapıcı olmaz.",
  "topic": "sinif"
 },
 {
  "t": "Java'da tek kalıtım: `extends` sonrası **bir** sınıf. Birden çok yetenek için arayüz.",
  "topic": "kalitim"
 },
 {
  "t": "`super(...)` yapıcının ilk satırında; `super.metot()` üst sınıfın sürümünü çağırır.",
  "topic": "kalitim"
 },
 {
  "t": "private alan alt sınıftan doğrudan erişilemez; getter/setter ya da protected gerekir.",
  "topic": "kapsulleme"
 },
 {
  "t": "UML erişim simgeleri: `+` public, `-` private, `#` protected.",
  "topic": "kapsulleme"
 },
 {
  "t": "Soyutlama = **ne** yaptığını göster, nasılını gizle. Kapsülleme = veriyi koru.",
  "topic": "soyutlama"
 },
 {
  "t": "Çağrılabilecek metotlar **referans tipine**, çalışacak sürüm **nesnenin tipine** göre.",
  "topic": "polimorfizm"
 },
 {
  "t": "`Hayvan h = new Kedi();` geçerli, `Kedi k = new Hayvan();` geçersiz.",
  "topic": "polimorfizm"
 },
 {
  "t": "Soyut sınıf: nesne yok, referans var, constructor **var**, normal + soyut metot karışık.",
  "topic": "soyut"
 },
 {
  "t": "Arayüz: nesne yok, referans var, constructor **yok**, alanlar sabit (final), her şey public.",
  "topic": "arayuz"
 },
 {
  "t": "Arayüzde gövdeli metot sadece `default` ve `private` olabilir.",
  "topic": "arayuz"
 },
 {
  "t": "Sıra: `class Kedi extends Hayvan implements A, B` (önce extends).",
  "topic": "arayuz"
 },
 {
  "t": "Kalıtım oku düz + boş üçgen, gerçekleşme oku kesikli + boş üçgen; elmas bütün tarafında.",
  "topic": "uml"
 },
 {
  "t": "Aggregation boş elmas (araba–tekerlek), composition dolu elmas (insan–kalp).",
  "topic": "uml"
 }
];
window.TOPICS = [
 {
  "id": "sinif",
  "title": "Sınıf, nesne, yapıcı ve aşırı yükleme",
  "src": "Hafta 1–3 · H2 Yarış, H3_1 Hayvan",
  "blocks": [
   {
    "t": "p",
    "text": "**Sınıf (class)** nesnelerin kalıbıdır: hangi **özellikleri** (alan, değişken) ve **metotları** (davranış) olacağını tanımlar. **Nesne (object)** bu kalıptan `new` ile üretilen somut örnektir."
   },
   {
    "t": "tip",
    "text": "Benzetme: sınıf kurabiye kalıbı, nesneler o kalıpla basılan kurabiyeler. `Tavsan` bir sınıf, `Tavsan t = new Tavsan();` ile oluşan `t` bir nesnedir."
   },
   {
    "t": "p",
    "text": "**Yapıcı (constructor):** nesne oluşturulurken bir kez çalışan, sınıfla **aynı adı taşıyan** ve **dönüş tipi olmayan** özel metot. Alanlara başlangıç değeri verir. Hiç yazılmazsa Java parametresiz varsayılan yapıcıyı kendisi ekler."
   },
   {
    "t": "p",
    "text": "**`this`** o anki nesneyi gösterir; parametre ile alan aynı adlıysa ayırır: `this.konum = konum;`"
   },
   {
    "t": "p",
    "text": "**Aşırı yükleme (overloading):** aynı sınıfta **aynı adlı** ama **parametre listesi farklı** (sayı ya da tip) metotlar/yapıcılar. Hangisinin çalışacağı derleme anında argümanlara bakılarak seçilir."
   },
   {
    "t": "code",
    "code": "class Hayvan {\n    public int konum;\n    public Hayvan() {            // parametresiz yapıcı\n        konum = 6;\n    }\n    public Hayvan(int konum) {   // aşırı yüklenmiş yapıcı\n        this.konum = konum;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Hayvan a = new Hayvan();\n        Hayvan b = new Hayvan(20);\n        System.out.println(a.konum + \" \" + b.konum);\n    }\n}",
    "out": "6 20"
   },
   {
    "t": "p",
    "text": "Hocanın **Tavşan–Kaplumbağa yarışı** (H2): her sınıfın `konum` alanı ve `kos()` metodu var; `Yaris` sınıfı iki nesneyi oluşturup `while (true)` ile 100'e ulaşana kadar koşturuyor. Sabit: `public final int PIST_UZUNLUGU = 100;`"
   },
   {
    "t": "trap",
    "text": "Yapıcının **dönüş tipi yoktur**, `void` bile yazılmaz. `public void Hayvan()` yazarsan yapıcı değil sıradan bir metot olur."
   },
   {
    "t": "trap",
    "text": "Aşırı yükleme (overloading) ≠ ezme (overriding). Overloading **aynı sınıfta farklı parametre**, overriding **alt sınıfta aynı imza**."
   }
  ]
 },
 {
  "id": "kalitim",
  "title": "Kalıtım (Inheritance)",
  "src": "Tahta: NTP'nin temelleri 1 · H3_1, H4_2",
  "blocks": [
   {
    "t": "p",
    "text": "**Kalıtım:** bir sınıfın (alt sınıf / child) başka bir sınıfın (üst sınıf / parent) özelliklerini ve metotlarını **miras alması**. Java'da `extends` ile yapılır. Ortak kod üst sınıfa yazılır, tekrar önlenir."
   },
   {
    "t": "p",
    "text": "İlişki **\"is-a\" (bir ... dır)** ilişkisidir: \"Tavşan **bir** Hayvandır\", \"Vampir **bir** Karakterdir\"."
   },
   {
    "t": "code",
    "code": "class Hayvan {\n    public int konum = 6;\n    public void kos() {\n        System.out.println(getClass().getName() + \" kosuyor\");\n    }\n}\nclass Kaplumbaga extends Hayvan { }      // hiçbir şey yazmadan kos() ve konum gelir\nclass Tavsan extends Hayvan {\n    @Override\n    public void kos() {\n        super.kos();                    // üst sınıftaki kos() çalışır\n        System.out.println(\"Tavsan zipladi!\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Kaplumbaga().kos();\n        Tavsan t = new Tavsan();\n        t.kos();\n        System.out.println(t.konum);\n    }\n}",
    "out": "Kaplumbaga kosuyor\nTavsan kosuyor\nTavsan zipladi!\n6"
   },
   {
    "t": "p",
    "text": "**Override (ezme):** alt sınıf, üst sınıftan gelen metodu **aynı imzayla** yeniden yazar. `@Override` etiketi derleyiciye \"bu bir ezme\" der; imza yanlışsa hata verir."
   },
   {
    "t": "p",
    "text": "**`super`** üst sınıfa erişir: `super.kos()` üst sınıfın metodunu çağırır, `super(isim)` üst sınıfın yapıcısını çağırır (yapıcının **ilk satırında** olmalı)."
   },
   {
    "t": "code",
    "code": "public class Vampir extends Karakter {\n    public Vampir() {\n        super(100, 60, 20, 20);   // can, saldırı, savunma, kritik\n    }\n}"
   },
   {
    "t": "svg",
    "svg": "<svg viewBox=\"0 0 560 285\" role=\"img\" aria-label=\"Tavsan ve Kaplumbaga Hayvan sınıfından kalıtım alır\"><g class=\"edge gen\"><polyline points=\"145,190 145,151 280,151 280,112\" fill=\"none\"/><polygon class=\"tri\" points=\"280,112 273.91,124.606 286.09,124.606\"/></g><g class=\"edge gen\"><polyline points=\"415,190 415,151 280,151 280,112\" fill=\"none\"/><polygon class=\"tri\" points=\"280,112 273.91,124.606 286.09,124.606\"/></g><g class=\"cls\"><rect x=\"195\" y=\"8\" width=\"170\" height=\"104\"/><text class=\"nm\" x=\"280\" y=\"25\">Hayvan</text><line x1=\"195\" y1=\"32\" x2=\"365\" y2=\"32\"/><text class=\"mb\" x=\"203\" y=\"50\">+ konum : int</text><line x1=\"195\" y1=\"55\" x2=\"365\" y2=\"55\"/><text class=\"mb\" x=\"203\" y=\"73\">+ Hayvan()</text><text class=\"mb\" x=\"203\" y=\"90\">+ Hayvan(konum : int)</text><text class=\"mb\" x=\"203\" y=\"107\">+ kos() : void</text></g><g class=\"cls\"><rect x=\"60\" y=\"190\" width=\"170\" height=\"70\"/><text class=\"nm\" x=\"145\" y=\"207\">Tavsan</text><line x1=\"60\" y1=\"214\" x2=\"230\" y2=\"214\"/><text class=\"mb\" x=\"68\" y=\"232\"></text><line x1=\"60\" y1=\"237\" x2=\"230\" y2=\"237\"/><text class=\"mb\" x=\"68\" y=\"255\">+ kos() : void</text></g><g class=\"cls\"><rect x=\"330\" y=\"190\" width=\"170\" height=\"70\"/><text class=\"nm\" x=\"415\" y=\"207\">Kaplumbaga</text><line x1=\"330\" y1=\"214\" x2=\"500\" y2=\"214\"/><text class=\"mb\" x=\"338\" y=\"232\"></text><line x1=\"330\" y1=\"237\" x2=\"500\" y2=\"237\"/><text class=\"mb\" x=\"338\" y=\"255\"></text></g></svg>",
    "cap": "UML'de kalıtım: alt sınıftan üst sınıfa **düz çizgi + içi boş üçgen** (tahtadaki ▷)."
   },
   {
    "t": "table",
    "head": [
     "Kural",
     "Açıklama"
    ],
    "rows": [
     [
      "Tek kalıtım",
      "Java'da bir sınıf **en fazla bir** sınıfı extends edebilir"
     ],
     [
      "Ne miras alınır?",
      "public ve protected üyeler; private alanlar alt sınıftan **doğrudan** erişilemez (getter/setter ile)"
     ],
     [
      "Yapıcılar",
      "Miras alınmaz; alt sınıf `super(...)` ile üst yapıcıyı çağırır"
     ],
     [
      "Object",
      "Her sınıf dolaylı olarak `Object` sınıfından türer"
     ]
    ]
   },
   {
    "t": "trap",
    "text": "Hocanın `Insan`/`Musteri` örneğinde `bakiye` private olduğu için `Musteri` içinde `this.bakiye += miktar` **yazılamaz**; `getBakiye()` ve `setBakiye()` kullanılır."
   },
   {
    "t": "tip",
    "text": "Sınavda örnek: `class Kedi extends Hayvan` + üst sınıftaki `kos()` metodunu `@Override` ile ezen kısa bir kod. \"is-a\" ilişkisini ve `super` kullanımını söyle."
   }
  ]
 },
 {
  "id": "kapsulleme",
  "title": "Kapsülleme (Encapsulation)",
  "src": "Tahta: NTP'nin temelleri 2 · H3_2 Banka",
  "blocks": [
   {
    "t": "p",
    "text": "**Kapsülleme:** bir sınıfın verisini (alanlarını) **dışarıdan doğrudan erişime kapatıp** (`private`), sadece kontrollü metotlarla (**getter / setter**) erişim vermek. Böylece veri yanlış değer almaz, iç yapı değişse dışarıdaki kod etkilenmez."
   },
   {
    "t": "table",
    "head": [
     "Erişim belirleyici",
     "UML",
     "Nereden erişilir?"
    ],
    "rows": [
     [
      "public",
      "+",
      "Her yerden"
     ],
     [
      "protected",
      "#",
      "Aynı paket + alt sınıflar"
     ],
     [
      "(default, yazılmazsa)",
      "~",
      "Sadece aynı paket"
     ],
     [
      "private",
      "−",
      "Sadece sınıfın kendi içinden"
     ]
    ]
   },
   {
    "t": "code",
    "code": "class Insan {\n    private int bakiye = 100;               // dışarıdan doğrudan erişilemez\n    public int getBakiye() {                // getter: okuma\n        return bakiye;\n    }\n    public void setBakiye(int bakiye) {     // setter: kontrollü yazma\n        if (bakiye >= 0) {\n            this.bakiye = bakiye;\n        }\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Insan m = new Insan();\n        m.setBakiye(-500);                  // reddedilir, bakiye negatif olamaz\n        System.out.println(m.getBakiye());\n        m.setBakiye(250);\n        System.out.println(m.getBakiye());\n        // m.bakiye = -500;  → derleme hatası: bakiye has private access\n    }\n}",
    "out": "100\n250"
   },
   {
    "t": "p",
    "text": "Hocanın banka örneğinde `musteriNoOlustur()` da **private**: müşteri numarasını sadece sınıf kendi üretir, dışarıdan değiştirilemez; sadece `getMusteriNo()` ile okunur (setter yok → salt okunur)."
   },
   {
    "t": "p",
    "text": "`protected` örneği (H4_1): `Insan` içindeki `protected String noOlustur()` metodunu alt sınıflar `Calisan` (\"C\" + 4 rakam) ve `Musteri` (\"M\" + 6 rakam) override ediyor."
   },
   {
    "t": "trap",
    "text": "Kapsülleme sadece \"private yazmak\" değildir: **private alan + public getter/setter + setter içinde kontrol** (ör. `if (bakiye >= 0)`) birlikte anlatılmalı."
   },
   {
    "t": "tip",
    "text": "Sınavda örnek: banka hesabı. `private int bakiye`, `getBakiye()`, negatif değeri reddeden `setBakiye()`, `paraCek()` içinde \"Yetersiz Bakiye!\" kontrolü."
   }
  ]
 },
 {
  "id": "soyutlama",
  "title": "Soyutlama (Abstraction)",
  "src": "Tahta: NTP'nin temelleri 3 · H3_2, H6",
  "blocks": [
   {
    "t": "p",
    "text": "**Soyutlama:** bir nesnenin **ne yaptığını** gösterip **nasıl yaptığını** gizlemek. Kullanıcı sadece gerekli işlemleri görür, gereksiz ayrıntılarla uğraşmaz."
   },
   {
    "t": "tip",
    "text": "Benzetme: arabayı sürerken direksiyon, gaz ve frenle ilgilenirsin; motorun içinde ne olduğunu bilmen gerekmez. ATM'de \"para çek\" düğmesine basarsın, bankanın bakiyeyi nasıl güncellediğini görmezsin."
   },
   {
    "t": "p",
    "text": "Hocanın banka örneği (H3_2): `Main` sadece `m.paraCek(50)` ve `m.paraEkle(1000)` çağırır. Bakiyenin kontrol edilmesi, `getBakiye()`/`setBakiye()` çağrıları `Musteri` sınıfının içinde gizlidir."
   },
   {
    "t": "code",
    "code": "class Musteri {\n    private int bakiye = 100;\n    public void paraEkle(int miktar) {\n        if (miktar > 0) bakiye += miktar;\n    }\n    public void paraCek(int miktar) {\n        if (miktar <= bakiye) bakiye -= miktar;\n        else System.out.println(\"Yetersiz Bakiye!\");\n    }\n    public int getBakiye() { return bakiye; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Musteri m = new Musteri();\n        m.paraCek(50);\n        m.paraEkle(1000);\n        m.paraCek(5000);\n        System.out.println(m.getBakiye());\n    }\n}",
    "out": "Yetersiz Bakiye!\n1050"
   },
   {
    "t": "p",
    "text": "Java'da soyutlama iki araçla yapılır: **soyut sınıf** (`abstract class`, kısmi soyutlama) ve **arayüz** (`interface`, tam soyutlama). İkisinde de \"ne yapılacağı\" (metot imzası) verilir, \"nasıl\" alt sınıfa bırakılır."
   },
   {
    "t": "code",
    "code": "abstract class Hayvan {\n    public abstract void kos();       // NE: her hayvan koşar\n}\nclass Kedi extends Hayvan {\n    @Override\n    public void kos() {               // NASIL: kediye özel\n        System.out.println(\"Kedi kosuyor!\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Hayvan h = new Kedi();\n        h.kos();\n    }\n}",
    "out": "Kedi kosuyor!"
   },
   {
    "t": "table",
    "head": [
     "Soyutlama",
     "Kapsülleme"
    ],
    "rows": [
     [
      "Tasarım düzeyi: **ne** yapılacağını öne çıkarır",
      "Uygulama düzeyi: veriyi **korur**"
     ],
     [
      "abstract class ve interface ile",
      "private + getter/setter ile"
     ],
     [
      "Karmaşıklığı gizler",
      "Veriye erişimi kontrol eder"
     ]
    ]
   },
   {
    "t": "trap",
    "text": "Soyutlama ile kapsülleme sık karıştırılır: soyutlama \"gereksiz ayrıntıyı **gösterme**\", kapsülleme \"veriye **dokundurma**\". Hoca ikisini aynı banka örneğinde anlattı; cevapta farkı söyle."
   }
  ]
 },
 {
  "id": "polimorfizm",
  "title": "Çok biçimlilik (Polymorphism)",
  "src": "Tahta: NTP'nin temelleri 4 · H4_1, H5",
  "blocks": [
   {
    "t": "p",
    "text": "**Çok biçimlilik:** aynı türden bir referansın (ya da aynı metot çağrısının) **farklı nesnelerde farklı davranması**. Üst sınıf tipindeki değişken, alt sınıf nesnesini tutabilir."
   },
   {
    "t": "code",
    "code": "Hayvan h = new Kedi();                 // tahtadaki örnek: üst tip referans, alt tip nesne\nArrayList<Hayvan> liste = new ArrayList<>();\nliste.add(new Kedi());\nliste.add(new Kopek());"
   },
   {
    "t": "p",
    "text": "Hocanın örneği (H4_1): `Insan` tipindeki değişkenler hem `Calisan` hem `Musteri` tutar. `bilgiGoster()` aynı çağrı, ama `noOlustur()` her alt sınıfta farklı override edildiği için numara biri \"C…\", diğeri \"M…\" ile başlar."
   },
   {
    "t": "code",
    "code": "import java.util.ArrayList;\n\nclass Insan {\n    public String tur() { return \"Insan\"; }\n}\nclass Calisan extends Insan {\n    @Override public String tur() { return \"Calisan\"; }\n}\nclass Musteri extends Insan {\n    @Override public String tur() { return \"Musteri\"; }\n    public void bakiyeGoster() { System.out.println(\"Bakiye: 500 TL\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Insan> insanlar = new ArrayList<>();\n        insanlar.add(new Calisan());\n        insanlar.add(new Musteri());\n        for (Insan i : insanlar) {\n            System.out.println(i.tur());     // her nesne kendi sürümünü çalıştırır\n        }\n        Insan insan2 = new Musteri();\n        // insan2.bakiyeGoster();  → derleme hatası: Insan tipinde bu metot yok\n    }\n}",
    "out": "Calisan\nMusteri"
   },
   {
    "t": "table",
    "head": [
     "Kural",
     "Açıklama"
    ],
    "rows": [
     [
      "Hangi metotlar çağrılabilir?",
      "**Referansın tipine** bakılır: `Insan insan2 = new Musteri();` ile `bakiyeGoster()` çağrılamaz (hocanın notu: \"çağıramazsınız!\")"
     ],
     [
      "Hangi sürüm çalışır?",
      "**Nesnenin gerçek tipine** bakılır: override edilmişse alt sınıfın metodu çalışır (çalışma zamanı, dinamik bağlama)"
     ],
     [
      "Tersi olmaz",
      "`Kedi k = new Hayvan();` derleme hatası: her hayvan kedi değildir"
     ]
    ]
   },
   {
    "t": "p",
    "text": "Oyun projesinde (H5): `ArrayList<Karakter>` içine Vampir, Elf, Ejderha... konuyor; `liste.get(i).bilgiGoster()` her karakterin kendi ASCII resmini çiziyor, sonra `super.bilgiGoster()` ile ortak bilgileri yazıyor. `saldir(Karakter dusman)` parametresi de çok biçimli: her karakter tipini kabul eder."
   },
   {
    "t": "table",
    "head": [
     "Tür",
     "Ne zaman?",
     "Örnek"
    ],
    "rows": [
     [
      "Derleme zamanı (statik)",
      "Aşırı yükleme (overloading)",
      "`Hayvan()` ve `Hayvan(int konum)`"
     ],
     [
      "Çalışma zamanı (dinamik)",
      "Ezme (overriding) + üst tip referans",
      "`Hayvan h = new Kedi(); h.kos();`"
     ]
    ]
   },
   {
    "t": "tip",
    "text": "Sınavda örnek: `Hayvan h = new Kedi();` ve `ArrayList<Hayvan>` içine farklı hayvanlar koyup döngüde `ses()` çağırmak. Her biri farklı ses çıkarır → çok biçimlilik."
   }
  ]
 },
 {
  "id": "soyut",
  "title": "Soyut sınıf (Abstract Class)",
  "src": "Tahta: Sınıf çeşitleri 1 · H6",
  "blocks": [
   {
    "t": "p",
    "text": "**Soyut sınıf:** kendisinden **nesne üretilmeyen**, sadece başka sınıflara **üst sınıf (şablon)** olmak için yazılan sınıf. `public abstract class ...` ile tanımlanır."
   },
   {
    "t": "table",
    "head": [
     "Tahtadaki madde",
     "Anlamı"
    ],
    "rows": [
     [
      "Nesne üretilmez",
      "`new Hayvan(\"x\")` derleme hatası verir"
     ],
     [
      "Referans olabilir",
      "`Hayvan h = new Kedi(\"Tekir\");` geçerli"
     ],
     [
      "extends ile kullanılır",
      "`class Kedi extends Hayvan`"
     ],
     [
      "Bir sınıfın max bir üst sınıfı olabilir",
      "extends tek: bir sınıf iki soyut sınıftan türeyemez"
     ],
     [
      "Soyut metot içerebilir",
      "gövdesiz `public abstract void kos();` alt sınıf **zorunlu** olarak yazar"
     ],
     [
      "Normal metot da içerebilir",
      "`bilgiGoster()` gibi gövdeli metotlar olabilir"
     ],
     [
      "Kapsülleme kullanılabilir",
      "`private String isim;` gibi private alanlar olabilir"
     ],
     [
      "Constructor var",
      "`public Hayvan(String isim)`; alt sınıf `super(isim)` ile çağırır"
     ]
    ]
   },
   {
    "t": "code",
    "code": "abstract class Hayvan {\n    private String isim;                       // kapsülleme\n    public Hayvan(String isim) {               // yapıcı var\n        this.isim = isim;\n    }\n    public void bilgiGoster() {                // normal metot\n        System.out.println(\"Isim : \" + isim);\n    }\n    public abstract void kos();                // soyut metot: gövdesi yok\n}\nclass Kedi extends Hayvan {\n    public Kedi(String isim) { super(isim); }\n    @Override\n    public void kos() { System.out.println(\"Kedi kosuyor!\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Hayvan h = new Kedi(\"Tekir\");          // referans olabilir\n        // Hayvan x = new Hayvan(\"Pamuk\");     → hata: Hayvan is abstract\n        h.bilgiGoster();\n        h.kos();\n    }\n}",
    "out": "Isim : Tekir\nKedi kosuyor!"
   },
   {
    "t": "trap",
    "text": "Bir sınıfta **tek bir** soyut metot bile varsa sınıf `abstract` olmak zorundadır. Soyut sınıftan türeyen sınıf, soyut metotların **hepsini** yazmazsa o da abstract olmalıdır."
   },
   {
    "t": "trap",
    "text": "Soyut metodun **gövdesi yoktur**, noktalı virgülle biter: `public abstract void kos();` Süslü parantez açılırsa hata."
   },
   {
    "t": "p",
    "text": "UML'de soyut sınıfın adı **italik** yazılır ya da üstüne `«abstract»` konur; soyut metotlar da italiktir."
   },
   {
    "t": "tip",
    "text": "Ne zaman? Alt sınıflar arasında **ortak kod ve ortak alan** varsa (isim, yaş, bilgiGoster) ama bazı davranışlar her alt sınıfta farklıysa (kos, sesCikar)."
   }
  ]
 },
 {
  "id": "arayuz",
  "title": "Arayüz (Interface)",
  "src": "Tahta: Sınıf çeşitleri 2 · H6",
  "blocks": [
   {
    "t": "p",
    "text": "**Arayüz:** bir sınıfın **ne yapabileceğini** söyleyen sözleşme (yetenek listesi). `public interface ...` ile tanımlanır, sınıflar `implements` ile uygular. Adları genelde yetenek bildirir: `YemekYiyebilir`, `Uyuyabilir`, `Kosabilir`."
   },
   {
    "t": "table",
    "head": [
     "Tahtadaki madde",
     "Anlamı"
    ],
    "rows": [
     [
      "Nesne yok",
      "`new YemekYiyebilir()` yazılamaz"
     ],
     [
      "Referans var",
      "`YemekYiyebilir y = new Kedi(\"Pamuk\");` geçerli"
     ],
     [
      "implements ile kullanılır",
      "`class Kedi implements YemekYiyebilir`"
     ],
     [
      "Bir sınıfın sınırsız arayüzü olabilir",
      "`implements Kosabilir, SesCikarabilir, Surunebilir` (virgülle)"
     ],
     [
      "Tüm metotları soyuttur",
      "Gövdesiz metotlar; `public abstract` yazılmasa da öyledir"
     ],
     [
      "↳ private ve default normal metot yazılabilir",
      "Java 8+ `default`, Java 9+ `private` gövdeli metotlar"
     ],
     [
      "Her şey public",
      "Metotlar ve alanlar otomatik public"
     ],
     [
      "Özellikler SABİT (final)",
      "Alanlar otomatik `public static final`: `int YAS = 5;` değiştirilemez"
     ],
     [
      "Constructor yok",
      "Nesne üretilmediği için yapıcı da yok"
     ]
    ]
   },
   {
    "t": "code",
    "code": "interface YemekYiyebilir {\n    int YAS = 5;                   // = public static final int YAS = 5;\n    String RENK = \"Beyaz\";\n    void cigneme();                // = public abstract void cigneme();\n    void yutma();\n    private void yardimci() {      // sadece default metotlar içinde kullanılır\n        System.out.println(\"Private metot kullanildi\");\n    }\n    default void istisna() {       // gövdeli default metot\n        System.out.println(\"Bu bir default metot\");\n        yardimci();\n    }\n}\ninterface Uyuyabilir {\n    void uyu();\n}\nabstract class Hayvan {\n    public abstract void kos();\n}\nclass Kedi extends Hayvan implements YemekYiyebilir, Uyuyabilir {\n    @Override public void kos()     { System.out.println(\"Kedi kosuyor!\"); }\n    @Override public void cigneme() { System.out.println(\"Kedi cigniyor\"); }\n    @Override public void yutma()   { System.out.println(\"Kedi yutuyor\"); }\n    @Override public void uyu()     { System.out.println(\"Kedi uyuyor\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        YemekYiyebilir y = new Kedi();   // arayüz tipinde referans\n        y.cigneme();\n        y.istisna();\n        System.out.println(YemekYiyebilir.YAS);\n    }\n}",
    "out": "Kedi cigniyor\nBu bir default metot\nPrivate metot kullanildi\n5"
   },
   {
    "t": "svg",
    "svg": "<svg viewBox=\"0 0 560 375\" role=\"img\" aria-label=\"Kedi Hayvan soyut sınıfından kalıtım alır, YemekYiyebilir ve Uyuyabilir arayüzlerini uygular\"><g class=\"edge gen\"><polyline points=\"240,245 240,194 103,194 103,143\" fill=\"none\"/><polygon class=\"tri\" points=\"103,143 96.9105,155.606 109.09,155.606\"/></g><g class=\"edge real\"><polyline class=\"dash\" points=\"295,245 295,126\" fill=\"none\"/><polygon class=\"tri\" points=\"295,126 288.91,138.606 301.09,138.606\"/></g><g class=\"edge real\"><polyline class=\"dash\" points=\"350,245 350,168.5 468,168.5 468,92\" fill=\"none\"/><polygon class=\"tri\" points=\"468,92 461.91,104.606 474.09,104.606\"/></g><g class=\"cls\"><rect x=\"18\" y=\"8\" width=\"170\" height=\"135\"/><text class=\"st\" x=\"103\" y=\"21\">«abstract»</text><text class=\"nm it\" x=\"103\" y=\"38\">Hayvan</text><line x1=\"18\" y1=\"46\" x2=\"188\" y2=\"46\"/><text class=\"mb\" x=\"26\" y=\"64\">+ yas : int</text><text class=\"mb\" x=\"26\" y=\"81\">- isim : String</text><line x1=\"18\" y1=\"86\" x2=\"188\" y2=\"86\"/><text class=\"mb\" x=\"26\" y=\"104\">+ Hayvan(isim : String)</text><text class=\"mb\" x=\"26\" y=\"121\">+ bilgiGoster() : void</text><text class=\"mb it\" x=\"26\" y=\"138\">+ kos() : void</text></g><g class=\"cls\"><rect x=\"210\" y=\"8\" width=\"170\" height=\"118\"/><text class=\"st\" x=\"295\" y=\"21\">«interface»</text><text class=\"nm\" x=\"295\" y=\"38\">YemekYiyebilir</text><line x1=\"210\" y1=\"46\" x2=\"380\" y2=\"46\"/><text class=\"mb\" x=\"218\" y=\"64\">+ YAS : int = 5</text><text class=\"mb\" x=\"218\" y=\"81\">+ RENK : String</text><line x1=\"210\" y1=\"86\" x2=\"380\" y2=\"86\"/><text class=\"mb it\" x=\"218\" y=\"104\">+ cigneme() : void</text><text class=\"mb it\" x=\"218\" y=\"121\">+ yutma() : void</text></g><g class=\"cls\"><rect x=\"398\" y=\"8\" width=\"140\" height=\"84\"/><text class=\"st\" x=\"468\" y=\"21\">«interface»</text><text class=\"nm\" x=\"468\" y=\"38\">Uyuyabilir</text><line x1=\"398\" y1=\"46\" x2=\"538\" y2=\"46\"/><text class=\"mb\" x=\"406\" y=\"64\"></text><line x1=\"398\" y1=\"69\" x2=\"538\" y2=\"69\"/><text class=\"mb\" x=\"406\" y=\"87\"></text></g><g class=\"cls\"><rect x=\"210\" y=\"245\" width=\"170\" height=\"121\"/><text class=\"nm\" x=\"295\" y=\"262\">Kedi</text><line x1=\"210\" y1=\"269\" x2=\"380\" y2=\"269\"/><text class=\"mb\" x=\"218\" y=\"287\"></text><line x1=\"210\" y1=\"292\" x2=\"380\" y2=\"292\"/><text class=\"mb\" x=\"218\" y=\"310\">+ Kedi(isim : String)</text><text class=\"mb\" x=\"218\" y=\"327\">+ kos() : void</text><text class=\"mb\" x=\"218\" y=\"344\">+ cigneme() : void</text><text class=\"mb\" x=\"218\" y=\"361\">+ yutma() : void</text></g></svg>",
    "cap": "Kedi: soyut Hayvan'dan **kalıtım** (düz çizgi), iki arayüzü **gerçekleştirme** (kesikli çizgi). Arayüz `«interface»`, soyut sınıf italik."
   },
   {
    "t": "p",
    "text": "Tahtanın en üstündeki satır tam bunu anlatır: **`Kedi extends Hayvan implements Kosabilir, SesCikarabilir, Surunebilir`**: tek üst sınıf, birden çok arayüz."
   },
   {
    "t": "trap",
    "text": "Arayüzdeki alan **sabittir**: `YemekYiyebilir.YAS = 10;` derleme hatası verir (final)."
   },
   {
    "t": "trap",
    "text": "Sıra önemli: önce `extends`, sonra `implements`. `class Kedi implements A extends Hayvan` hatalıdır."
   }
  ]
 },
 {
  "id": "karsilastirma",
  "title": "Soyut sınıf mı, arayüz mü?",
  "src": "Tahta: Sınıf çeşitleri (iki sütun)",
  "blocks": [
   {
    "t": "table",
    "head": [
     "",
     "Soyut sınıf",
     "Arayüz"
    ],
    "rows": [
     [
      "Tanım",
      "`abstract class`",
      "`interface`"
     ],
     [
      "Kullanım",
      "`extends`",
      "`implements`"
     ],
     [
      "Nesne üretilir mi?",
      "Hayır",
      "Hayır"
     ],
     [
      "Referans olur mu?",
      "Evet",
      "Evet"
     ],
     [
      "Kaç tane?",
      "Bir sınıfın **en fazla bir** üst sınıfı",
      "Bir sınıf **sınırsız** arayüz uygular"
     ],
     [
      "Metotlar",
      "Soyut + normal metot karışık",
      "Hepsi soyut (istisna: private ve default)"
     ],
     [
      "Alanlar",
      "Her türlü alan, private olabilir",
      "Sadece sabit (`public static final`)"
     ],
     [
      "Erişim",
      "public / private / protected",
      "Her şey public"
     ],
     [
      "Constructor",
      "Var",
      "Yok"
     ],
     [
      "İlişki",
      "\"is-a\": Kedi **bir** Hayvandır",
      "\"can-do\": Kedi yemek **yiyebilir**"
     ],
     [
      "UML",
      "İtalik ad / «abstract», düz çizgi + boş üçgen",
      "«interface», kesikli çizgi + boş üçgen"
     ]
    ]
   },
   {
    "t": "tip",
    "text": "Karar: alt sınıflar **ortak alan ve kod** paylaşıyorsa soyut sınıf; farklı türden sınıflara **ortak bir yetenek** kazandırılacaksa arayüz. Örn. hem `Kedi` hem `Robot` `Kosabilir` olabilir ama Robot bir Hayvan değildir."
   },
   {
    "t": "p",
    "text": "Java'da çoklu kalıtım sınıflarla yapılamaz, **arayüzlerle** sağlanır."
   }
  ]
 },
 {
  "id": "uml",
  "title": "UML sınıf diyagramları",
  "src": "UML_Diagram_1 sunumu · tahtadaki kutu",
  "blocks": [
   {
    "t": "p",
    "text": "**UML (Unified Modeling Language):** bir sistemin tasarımını görselleştirmek için kullanılan genel amaçlı **modelleme dili**. Yazılı (programlama) dili değildir; 1995'te standart yaklaşım için geliştirildi. **Sınıf diyagramı** yazılımdaki sınıfları ve aralarındaki ilişkileri, programlama dilinden bağımsız gösterir."
   },
   {
    "t": "svg",
    "svg": "<svg viewBox=\"0 0 560 150\" role=\"img\" aria-label=\"Hayvan sınıf kutusu\"><g class=\"cls\"><rect x=\"150\" y=\"8\" width=\"260\" height=\"121\"/><text class=\"nm\" x=\"280\" y=\"25\">Hayvan</text><line x1=\"150\" y1=\"32\" x2=\"410\" y2=\"32\"/><text class=\"mb\" x=\"158\" y=\"50\">- isim : String</text><text class=\"mb\" x=\"158\" y=\"67\">- id : int</text><text class=\"mb\" x=\"158\" y=\"84\">- yas : int</text><line x1=\"150\" y1=\"89\" x2=\"410\" y2=\"89\"/><text class=\"mb\" x=\"158\" y=\"107\">+ setIsim(isim : String) : void</text><text class=\"mb\" x=\"158\" y=\"124\">+ ye() : int</text></g></svg>",
    "cap": "Kutu üç bölüm: **ad** · **özellikler** · **metotlar**. Önce erişim (+ − #), sonra ad, `:` ve tip."
   },
   {
    "t": "ul",
    "items": [
     "En üstte sınıf adı. Soyut sınıfsa **italik** ya da `«abstract»`, arayüzse `«interface»`.",
     "Her özellik/metodun önünde erişim: `+` public, `-` private, `#` protected.",
     "Ardından `:` ile tip: `-name : string`, `+eat() : int`."
    ]
   },
   {
    "t": "p",
    "text": "**İlişkiler:** sınıflar tek başına anlam taşımaz, önemli olan aralarındaki ilişki."
   },
   {
    "t": "svg",
    "svg": "<svg viewBox=\"0 0 560 196\" role=\"img\" aria-label=\"UML ilişki okları\"><g class=\"edge\"><polyline points=\"16,20 130,20\" fill=\"none\"/><polygon class=\"tri\" points=\"144,20 130,13 130,27\"/><polyline class=\"dash\" points=\"16,58 130,58\" fill=\"none\"/><polygon class=\"tri\" points=\"144,58 130,51 130,65\"/><polyline points=\"16,96 142,96\" fill=\"none\"/><polyline points=\"132,90 144,96 132,102\" fill=\"none\"/><polyline points=\"16,134 124,134\" fill=\"none\"/><polygon class=\"dia\" points=\"144,134 134,128 124,134 134,140\"/><polyline points=\"16,172 124,172\" fill=\"none\"/><polygon class=\"diaf\" points=\"144,172 134,166 124,172 134,178\"/></g><text class=\"lgl\" x=\"160\" y=\"24\"><tspan font-weight=\"700\">Kalıtım</tspan> · düz çizgi + içi boş üçgen · extends</text><text class=\"lgl\" x=\"160\" y=\"62\"><tspan font-weight=\"700\">Gerçekleşme</tspan> · kesikli çizgi + boş üçgen · implements</text><text class=\"lgl\" x=\"160\" y=\"100\"><tspan font-weight=\"700\">Bağlantı</tspan> · düz çizgi + açık ok · has-a</text><text class=\"lgl\" x=\"160\" y=\"138\"><tspan font-weight=\"700\">Aggregation</tspan> · içi boş elmas · zayıf parça</text><text class=\"lgl\" x=\"160\" y=\"176\"><tspan font-weight=\"700\">Composition</tspan> · içi dolu elmas · güçlü parça</text></svg>",
    "cap": "İlişki türleri ve okları."
   },
   {
    "t": "table",
    "head": [
     "İlişki",
     "Okunuş",
     "Java",
     "Örnek"
    ],
    "rows": [
     [
      "Generalization / Inheritance (kalıtım)",
      "\"is-a\": Kaplumbağa **bir** Hayvandır",
      "`extends`",
      "Tavsan → Hayvan"
     ],
     [
      "Realization / Implementation (gerçekleşme)",
      "Sınıf arayüzü uygular; **kesikli** çizgi",
      "`implements`",
      "Kedi ⇢ YemekYiyebilir"
     ],
     [
      "Association (bağlantı)",
      "\"has-a\": sahiplik; en çok kullanılan",
      "Sınıf içinde başka sınıf tipinde alan",
      "Karakter → Random"
     ],
     [
      "Aggregation (zayıf parça)",
      "Parça bütün olmadan yaşayabilir",
      "Alan dışarıdan verilir",
      "Araba ◇ Tekerlek"
     ],
     [
      "Composition (güçlü parça)",
      "Bütün yok olunca parça da yok olur",
      "Alan sınıf içinde oluşturulur",
      "İnsan ◆ Kalp"
     ]
    ]
   },
   {
    "t": "svg",
    "svg": "<svg viewBox=\"0 0 560 150\" role=\"img\" aria-label=\"Karakter bir Random nesnesine sahiptir\"><g class=\"edge assoc\"><polyline points=\"260,68.5 375,68\" fill=\"none\"/><polyline points=\"365.324,62.7683 375,68 365.37,73.3156\" fill=\"none\"/><text class=\"mul\" x=\"359\" y=\"62\">1</text><text class=\"rl\" x=\"317.5\" y=\"68.25\">has-a</text></g><g class=\"cls\"><rect x=\"10\" y=\"8\" width=\"250\" height=\"121\"/><text class=\"nm\" x=\"135\" y=\"25\">Karakter</text><line x1=\"10\" y1=\"32\" x2=\"260\" y2=\"32\"/><text class=\"mb\" x=\"18\" y=\"50\">- can : int</text><text class=\"mb\" x=\"18\" y=\"67\">- saldiriGucu : int</text><text class=\"mb\" x=\"18\" y=\"84\">- r : Random</text><line x1=\"10\" y1=\"89\" x2=\"260\" y2=\"89\"/><text class=\"mb\" x=\"18\" y=\"107\">+ saldir(dusman : Karakter) : void</text><text class=\"mb\" x=\"18\" y=\"124\">- savun() : int</text></g><g class=\"cls\"><rect x=\"375\" y=\"33\" width=\"180\" height=\"70\"/><text class=\"nm\" x=\"465\" y=\"50\">Random</text><line x1=\"375\" y1=\"57\" x2=\"555\" y2=\"57\"/><text class=\"mb\" x=\"383\" y=\"75\"></text><line x1=\"375\" y1=\"80\" x2=\"555\" y2=\"80\"/><text class=\"mb\" x=\"383\" y=\"98\">+ nextInt(a, b) : int</text></g></svg>",
    "cap": "Tahtadaki kutu: bir sınıfın içinde `Random r = new Random();` varsa o sınıf Random'a **sahiptir**; ok sahip olandan Random'a çizilir, uca çokluk yazılır."
   },
   {
    "t": "table",
    "head": [
     "Çokluk",
     "Anlamı"
    ],
    "rows": [
     [
      "0",
      "hiç"
     ],
     [
      "0..1",
      "sıfır ya da bir"
     ],
     [
      "1 (1..1)",
      "tam olarak bir"
     ],
     [
      "0..* / *",
      "sıfır ya da daha fazla"
     ],
     [
      "1..*",
      "bir ya da daha fazla"
     ]
    ]
   },
   {
    "t": "svg",
    "svg": "<svg viewBox=\"0 0 560 215\" role=\"img\" aria-label=\"Öğrenci–Ders çoka çok, İnsan–Adres bire bir bağlantı\"><g class=\"edge assoc\"><polyline points=\"160,45 400,45\" fill=\"none\"/><polyline points=\"390.347,39.7263 400,45 390.347,50.2737\" fill=\"none\"/><text class=\"mul\" x=\"174\" y=\"39\">0..*</text><text class=\"mul\" x=\"384\" y=\"39\">0..*</text><text class=\"rl\" x=\"280\" y=\"37\">kaydolur</text></g><g class=\"edge assoc\"><polyline points=\"160,155 400,155\" fill=\"none\"/><polyline points=\"390.347,149.726 400,155 390.347,160.274\" fill=\"none\"/><text class=\"mul\" x=\"384\" y=\"149\">1</text><text class=\"rl\" x=\"280\" y=\"147\">sahiptir</text></g><g class=\"cls\"><rect x=\"10\" y=\"10\" width=\"150\" height=\"70\"/><text class=\"nm\" x=\"85\" y=\"27\">Ogrenci</text><line x1=\"10\" y1=\"34\" x2=\"160\" y2=\"34\"/><text class=\"mb\" x=\"18\" y=\"52\">- ad : String</text><line x1=\"10\" y1=\"57\" x2=\"160\" y2=\"57\"/><text class=\"mb\" x=\"18\" y=\"75\"></text></g><g class=\"cls\"><rect x=\"400\" y=\"10\" width=\"150\" height=\"70\"/><text class=\"nm\" x=\"475\" y=\"27\">Ders</text><line x1=\"400\" y1=\"34\" x2=\"550\" y2=\"34\"/><text class=\"mb\" x=\"408\" y=\"52\">- kod : String</text><line x1=\"400\" y1=\"57\" x2=\"550\" y2=\"57\"/><text class=\"mb\" x=\"408\" y=\"75\"></text></g><g class=\"cls\"><rect x=\"10\" y=\"120\" width=\"150\" height=\"70\"/><text class=\"nm\" x=\"85\" y=\"137\">Insan</text><line x1=\"10\" y1=\"144\" x2=\"160\" y2=\"144\"/><text class=\"mb\" x=\"18\" y=\"162\">- adres : Adres</text><line x1=\"10\" y1=\"167\" x2=\"160\" y2=\"167\"/><text class=\"mb\" x=\"18\" y=\"185\"></text></g><g class=\"cls\"><rect x=\"400\" y=\"120\" width=\"150\" height=\"70\"/><text class=\"nm\" x=\"475\" y=\"137\">Adres</text><line x1=\"400\" y1=\"144\" x2=\"550\" y2=\"144\"/><text class=\"mb\" x=\"408\" y=\"162\">- sehir : String</text><line x1=\"400\" y1=\"167\" x2=\"550\" y2=\"167\"/><text class=\"mb\" x=\"408\" y=\"185\"></text></g></svg>",
    "cap": "\"Öğrenci 0 ya da sonsuz derse kaydolabilir, derste 0 ya da sonsuz öğrenci olabilir.\" Her derste en az bir öğrenci olacaksa öğrenci tarafı 1..* olur. İnsan bir adrese sahiptir (Person içinde Adres tipinde alan)."
   },
   {
    "t": "svg",
    "svg": "<svg viewBox=\"0 0 560 200\" role=\"img\" aria-label=\"Aggregation: Araba–Tekerlek, Composition: İnsan–Kalp\"><g class=\"edge agg\"><polyline points=\"400,45 160,45\" fill=\"none\"/><polygon class=\"dia\" points=\"160,45 168.776,49.7943 179,45 168.776,40.2057\"/><text class=\"mul\" x=\"386\" y=\"39\">4</text><text class=\"rl\" x=\"280\" y=\"37\">aggregation (zayıf)</text></g><g class=\"edge comp\"><polyline points=\"400,150 160,150\" fill=\"none\"/><polygon class=\"diaf\" points=\"160,150 168.776,154.794 179,150 168.776,145.206\"/><text class=\"mul\" x=\"386\" y=\"144\">1</text><text class=\"rl\" x=\"280\" y=\"142\">composition (güçlü)</text></g><g class=\"cls\"><rect x=\"10\" y=\"10\" width=\"150\" height=\"70\"/><text class=\"nm\" x=\"85\" y=\"27\">Araba</text><line x1=\"10\" y1=\"34\" x2=\"160\" y2=\"34\"/><text class=\"mb\" x=\"18\" y=\"52\"></text><line x1=\"10\" y1=\"57\" x2=\"160\" y2=\"57\"/><text class=\"mb\" x=\"18\" y=\"75\"></text></g><g class=\"cls\"><rect x=\"400\" y=\"10\" width=\"150\" height=\"70\"/><text class=\"nm\" x=\"475\" y=\"27\">Tekerlek</text><line x1=\"400\" y1=\"34\" x2=\"550\" y2=\"34\"/><text class=\"mb\" x=\"408\" y=\"52\"></text><line x1=\"400\" y1=\"57\" x2=\"550\" y2=\"57\"/><text class=\"mb\" x=\"408\" y=\"75\"></text></g><g class=\"cls\"><rect x=\"10\" y=\"115\" width=\"150\" height=\"70\"/><text class=\"nm\" x=\"85\" y=\"132\">Insan</text><line x1=\"10\" y1=\"139\" x2=\"160\" y2=\"139\"/><text class=\"mb\" x=\"18\" y=\"157\"></text><line x1=\"10\" y1=\"162\" x2=\"160\" y2=\"162\"/><text class=\"mb\" x=\"18\" y=\"180\"></text></g><g class=\"cls\"><rect x=\"400\" y=\"115\" width=\"150\" height=\"70\"/><text class=\"nm\" x=\"475\" y=\"132\">Kalp</text><line x1=\"400\" y1=\"139\" x2=\"550\" y2=\"139\"/><text class=\"mb\" x=\"408\" y=\"157\"></text><line x1=\"400\" y1=\"162\" x2=\"550\" y2=\"162\"/><text class=\"mb\" x=\"408\" y=\"180\"></text></g></svg>",
    "cap": "Aggregation: tekerlek arabanın parçası ama araba yok olunca tekerlek yaşar. Composition: kalp insanın parçası, insan yok olunca kalp de yok olur. Elmas **bütün** tarafındadır."
   },
   {
    "t": "p",
    "text": "**Reflexive (dönüşlü) bağlantı:** sınıfın kendisiyle ilişkisi. Bir `Dizin` 0..* alt dizine ve 0..1 üst dizine sahip olabilir."
   },
   {
    "t": "trap",
    "text": "Sunumda başlıklar ters yazılmış: tek yönlü (uni-directional) ok **tek uçta**, çift yönlü (bi-directional) ilişkide iki sınıf birbirini bilir. Sınavda kavramı doğru açıkla."
   },
   {
    "t": "tip",
    "text": "Hocanın ödevi: Hayvan, Tavsan ve Kaplumbaga sınıflarının ilişkilerini gösteren UML diyagramı (Kalıtım konusundaki çizim). Araç: app.diagrams.net"
   },
   {
    "t": "svg",
    "svg": "<svg viewBox=\"0 0 560 330\" role=\"img\" aria-label=\"Hocanın oyun projesi: AnaKarakter, Vampir, Ejderha Karakter sınıfından kalıtım alır\"><g class=\"edge assoc\"><polyline points=\"196,77.5 296,77\" fill=\"none\"/><polyline points=\"286.32,71.7747 296,77 286.373,82.3219\" fill=\"none\"/><text class=\"mul\" x=\"210\" y=\"71.5\">1</text><text class=\"mul\" x=\"280\" y=\"71\">1..*</text><text class=\"rl\" x=\"246\" y=\"77.25\">kullanır</text></g><g class=\"edge gen\"><polyline points=\"215,240 215,193 425,193 425,146\" fill=\"none\"/><polygon class=\"tri\" points=\"425,146 418.91,158.606 431.09,158.606\"/></g><g class=\"edge gen\"><polyline points=\"354.5,240 354.5,193 425,193 425,146\" fill=\"none\"/><polygon class=\"tri\" points=\"425,146 418.91,158.606 431.09,158.606\"/></g><g class=\"edge gen\"><polyline points=\"491.5,240 491.5,193 425,193 425,146\" fill=\"none\"/><polygon class=\"tri\" points=\"425,146 418.91,158.606 431.09,158.606\"/></g><g class=\"cls\"><rect x=\"6\" y=\"34\" width=\"190\" height=\"87\"/><text class=\"nm\" x=\"101\" y=\"51\">Oyun</text><line x1=\"6\" y1=\"58\" x2=\"196\" y2=\"58\"/><text class=\"mb\" x=\"14\" y=\"76\"></text><line x1=\"6\" y1=\"81\" x2=\"196\" y2=\"81\"/><text class=\"mb\" x=\"14\" y=\"99\">+ baslat() : void</text><text class=\"mb\" x=\"14\" y=\"116\">- savas(mc, dusman) : boolean</text></g><g class=\"cls\"><rect x=\"296\" y=\"8\" width=\"258\" height=\"138\"/><text class=\"nm\" x=\"425\" y=\"25\">Karakter</text><line x1=\"296\" y1=\"32\" x2=\"554\" y2=\"32\"/><text class=\"mb\" x=\"304\" y=\"50\">- can : int</text><text class=\"mb\" x=\"304\" y=\"67\">- saldiriGucu : int</text><text class=\"mb\" x=\"304\" y=\"84\">- r : Random</text><line x1=\"296\" y1=\"89\" x2=\"554\" y2=\"89\"/><text class=\"mb\" x=\"304\" y=\"107\">+ saldir(dusman : Karakter) : void</text><text class=\"mb\" x=\"304\" y=\"124\">+ bilgiGoster() : void</text><text class=\"mb\" x=\"304\" y=\"141\">+ seviyeAtla() : void</text></g><g class=\"cls\"><rect x=\"150\" y=\"240\" width=\"130\" height=\"70\"/><text class=\"nm\" x=\"215\" y=\"257\">AnaKarakter</text><line x1=\"150\" y1=\"264\" x2=\"280\" y2=\"264\"/><text class=\"mb\" x=\"158\" y=\"282\"></text><line x1=\"150\" y1=\"287\" x2=\"280\" y2=\"287\"/><text class=\"mb\" x=\"158\" y=\"305\">+ bilgiGoster()</text></g><g class=\"cls\"><rect x=\"292\" y=\"240\" width=\"125\" height=\"70\"/><text class=\"nm\" x=\"354\" y=\"257\">Vampir</text><line x1=\"292\" y1=\"264\" x2=\"417\" y2=\"264\"/><text class=\"mb\" x=\"300\" y=\"282\"></text><line x1=\"292\" y1=\"287\" x2=\"417\" y2=\"287\"/><text class=\"mb\" x=\"300\" y=\"305\">+ bilgiGoster()</text></g><g class=\"cls\"><rect x=\"429\" y=\"240\" width=\"125\" height=\"70\"/><text class=\"nm\" x=\"491\" y=\"257\">Ejderha</text><line x1=\"429\" y1=\"264\" x2=\"554\" y2=\"264\"/><text class=\"mb\" x=\"437\" y=\"282\"></text><line x1=\"429\" y1=\"287\" x2=\"554\" y2=\"287\"/><text class=\"mb\" x=\"437\" y=\"305\">+ bilgiGoster()</text></g></svg>",
    "cap": "Hocanın oyun projesinin UML'i: bütün karakterler Karakter'den kalıtım alır, Oyun sınıfı Karakter listesi kullanır."
   }
  ]
 },
 {
  "id": "oyun",
  "title": "Derste yazdığımız oyun: hepsi bir arada",
  "src": "H4_2, H5_1, H5_2 (karakter seçmeli)",
  "blocks": [
   {
    "t": "p",
    "text": "Senaryo: menüyle oynanan bir oyun. 10 farklı düşman var, oyun boyunca 5 tanesi gelir; hepsi yenilirse son boss **Ejderha** gelir. Her yenilen düşmanda seviye atlanır."
   },
   {
    "t": "table",
    "head": [
     "Kavram",
     "Oyunda nerede?"
    ],
    "rows": [
     [
      "Sınıf + yapıcı",
      "`Karakter(int can, int saldiriGucu, int savunmaGucu, int kritikOrani)`"
     ],
     [
      "Kalıtım",
      "`Vampir extends Karakter`, `super(100, 60, 20, 20)`; 12 karakter aynı üst sınıftan"
     ],
     [
      "Kapsülleme",
      "can, saldiriGucu... **private**; `getCan()` ile okunur; `savun()` private, sadece `saldir()` içinden çağrılır"
     ],
     [
      "Override",
      "Her karakter `bilgiGoster()`'i ezip kendi ASCII resmini çizer, sonra `super.bilgiGoster()`"
     ],
     [
      "Çok biçimlilik",
      "`ArrayList<Karakter> dusmanlar`; `Karakter mc = new AnaKarakter();`; `saldir(Karakter dusman)`"
     ],
     [
      "Soyutlama",
      "`Main` sadece `new Oyun().baslat();` der; savaş, seviye, rastgele düşman seçimi gizli"
     ],
     [
      "Association",
      "`Karakter` içinde `private Random r = new Random();`; `Oyun` Karakter listesi tutar"
     ]
    ]
   },
   {
    "t": "code",
    "code": "public class Karakter {\n    private int can;\n    private int saldiriGucu;\n    private Random r = new Random();\n    public void saldir(Karakter dusman) {          // her Karakter alt tipini kabul eder\n        int saldiriPuani = r.nextInt(saldiriGucu - 15, saldiriGucu + 16);\n        int savunmaPuani = dusman.savun();          // private ama aynı sınıf içinde\n        if (saldiriPuani > savunmaPuani) {\n            dusman.can -= saldiriPuani - savunmaPuani;\n        }\n    }\n    public void bilgiGoster() {\n        System.out.println(\"Isim : \" + this.getClass().getName());\n        System.out.println(\"Can : \" + can);\n    }\n}"
   },
   {
    "t": "tip",
    "text": "Açık uçlu sorulara örnek vermekte zorlanırsan bu oyunu anlat: her kavramın somut karşılığı var ve hoca bu projeyi kendisi yazdırdı."
   },
   {
    "t": "low",
    "text": "`Collections.shuffle`, `System.exit`, `Scanner` ve hile kodu gibi ayrıntılar kavram sorusu değil; sadece oyunun nasıl çalıştığını anlamak için."
   }
  ]
 }
];
window.TOPIC_RULES = {
 "sinif": "Sınıf kalıp, nesne new ile üretilen örnek. Yapıcı sınıfla aynı adlı, dönüş tipsiz, nesne oluşurken çalışır. Aşırı yükleme: aynı ad, farklı parametre listesi.",
 "kalitim": "Kalıtım extends ile, \"is-a\" ilişkisi. Alt sınıf üstün public/protected üyelerini alır, metotları @Override ile ezebilir, super ile üst sınıfa erişir. Java'da tek kalıtım vardır.",
 "kapsulleme": "Kapsülleme: alanlar private, erişim public getter/setter ile ve setter içinde kontrol (bakiye >= 0). public +, private -, protected #, default ~.",
 "soyutlama": "Soyutlama: ne yapıldığını gösterip nasıl yapıldığını gizlemek. Java'da abstract class ve interface ile. Kapsülleme veriyi korur, soyutlama karmaşıklığı gizler.",
 "polimorfizm": "Çok biçimlilik: üst tip referans alt tip nesneyi tutar (Hayvan h = new Kedi()), aynı çağrı nesneye göre farklı çalışır. Çağrılabilir metotlar referans tipine, çalışan sürüm nesnenin tipine bağlı.",
 "soyut": "Soyut sınıf: abstract class, nesne üretilmez ama referans olur, extends ile kullanılır, soyut ve normal metot, private alan ve constructor içerebilir. Soyut metotları alt sınıf yazmak zorunda.",
 "arayuz": "Arayüz: interface, implements ile, nesne ve constructor yok, sınıf birden çok arayüz uygulayabilir. Metotlar soyut (default/private hariç), her şey public, alanlar sabit (final).",
 "karsilastirma": "Soyut sınıf: tek extends, constructor var, her türlü alan. Arayüz: çok implements, constructor yok, sadece sabit. İkisinden de nesne üretilmez, ikisi de referans olur.",
 "uml": "UML sınıf kutusu: ad / özellikler / metotlar, + - # erişim. Kalıtım düz çizgi + boş üçgen, gerçekleşme kesikli + boş üçgen, bağlantı düz ok (has-a), aggregation boş elmas, composition dolu elmas.",
 "oyun": "Oyunda kalıtım (Vampir extends Karakter), kapsülleme (private can + getCan), override (bilgiGoster), çok biçimlilik (ArrayList<Karakter>), soyutlama (new Oyun().baslat()) birlikte kullanılır."
};
