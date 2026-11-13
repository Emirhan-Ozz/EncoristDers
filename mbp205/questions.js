/* MBP205 test soruları. tools/build.py ile üretildi. */
window.EXAMS = [
 {
  "id": "tahta",
  "title": "Tahtadaki maddeler",
  "group": "hoca",
  "mode": "practice",
  "featured": true,
  "desc": "Hocanın tahtaya yazdığı her madde bir soru: soyut sınıf ve arayüz kuralları, dört temel kavram, UML okları. Anında kontrol.",
  "questions": [
   {
    "type": "mc",
    "topic": "soyut",
    "q": "Soyut sınıftan (`abstract class`) `new` ile nesne üretilebilir mi?",
    "opts": [
     "Sadece parametresiz yapıcıyla",
     "Hayır, nesne üretilmez",
     "Sadece aynı paketten",
     "Evet, her sınıf gibi"
    ],
    "a": 1,
    "exp": "Tahta: \"Nesne üretilmez.\" `new Hayvan()` derleme hatası verir.",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "soyut",
    "q": "Soyut sınıf tipinde bir **referans** tanımlanabilir mi? `Hayvan h = new Kedi();`",
    "opts": [
     "Sadece arayüzlerde olur",
     "Evet, referans olabilir",
     "Sadece static ise",
     "Hayır, soyut sınıf tip olarak kullanılamaz"
    ],
    "a": 1,
    "exp": "Tahta: \"Referans olabilir.\" Referans soyut sınıf tipinde, nesne alt sınıftan.",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "soyut",
    "q": "Soyut sınıf hangi anahtar kelimeyle kullanılır?",
    "opts": [
     "implements",
     "abstract new",
     "uses",
     "extends"
    ],
    "a": 3,
    "exp": "Tahta: \"extends ile kullanılır.\"",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "soyut",
    "q": "`extends`'e bağlı olarak bir sınıfın en fazla kaç üst sınıfı olabilir?",
    "opts": [
     "Bir",
     "Sıfır",
     "Sınırsız",
     "İki"
    ],
    "a": 0,
    "exp": "Tahta: \"max bir tane üst sınıfı olabilir.\" Java tek kalıtımı destekler.",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "soyut",
    "q": "Soyut sınıf soyut metot içerebilir mi?",
    "opts": [
     "Sadece static olarak",
     "Evet",
     "Sadece private olarak",
     "Hayır, sadece arayüzler içerir"
    ],
    "a": 1,
    "exp": "Tahta: \"Soyut metot içerebilir.\" Normal metot da içerebilir.",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "soyut",
    "q": "Soyut sınıfta kapsülleme (private alanlar) kullanılabilir mi?",
    "opts": [
     "Sadece protected kullanılabilir",
     "Evet",
     "Hayır, her şey public olmalı",
     "Sadece final alanlar olabilir"
    ],
    "a": 1,
    "exp": "Tahta: \"Kapsülleme kullanılabilir.\" Her şeyin public olması arayüzün kuralıdır.",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "soyut",
    "q": "Soyut sınıfın constructor'ı (yapıcısı) var mıdır?",
    "opts": [
     "Vardır",
     "Sadece arayüz uygularsa",
     "Yoktur",
     "Sadece static olursa"
    ],
    "a": 0,
    "exp": "Tahta: \"Constructor var.\" Alt sınıf `super(...)` ile çağırır.",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "arayuz",
    "q": "Arayüzden (`interface`) nesne üretilebilir mi?",
    "opts": [
     "Hayır, nesne yok",
     "Sadece default metot varsa",
     "Sadece constructor yazılırsa",
     "Evet"
    ],
    "a": 0,
    "exp": "Tahta: \"Nesne yok.\"",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "arayuz",
    "q": "Arayüz tipinde referans tanımlanabilir mi? `YemekYiyebilir y = new Kedi();`",
    "opts": [
     "Sadece static metotlarda",
     "Hayır",
     "Sadece soyut sınıflarda olur",
     "Evet, referans var"
    ],
    "a": 3,
    "exp": "Tahta: \"Referans var.\"",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "arayuz",
    "q": "Arayüz bir sınıfa hangi anahtar kelimeyle eklenir?",
    "opts": [
     "extends",
     "implements",
     "interface",
     "abstract"
    ],
    "a": 1,
    "exp": "Tahta: \"implements ile kullanılır.\"",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "arayuz",
    "q": "Bir sınıf kaç arayüz uygulayabilir?",
    "opts": [
     "Bir",
     "İki",
     "Sadece üst sınıfı yoksa bir",
     "Sınırsız"
    ],
    "a": 3,
    "exp": "Tahta: \"Bir sınıfın sınırsız arayüzü olabilir.\" Virgülle yazılır.",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "arayuz",
    "q": "Arayüzdeki metotlar için tahtadaki kural hangisidir?",
    "opts": [
     "Hepsi gövdeli olmak zorundadır",
     "Hepsi private'tır",
     "Tüm metotlar soyuttur; private ve default metotlar gövdeli yazılabilir",
     "Metot yazılamaz, sadece alan olur"
    ],
    "a": 2,
    "exp": "Tahta: \"Tüm metotları soyuttur → private ve default normal metot yazılabilir.\"",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "arayuz",
    "q": "Arayüzdeki üyelerin erişim düzeyi nedir?",
    "opts": [
     "Her şey public",
     "Her şey private",
     "Her şey protected",
     "Paket düzeyi (default)"
    ],
    "a": 0,
    "exp": "Tahta: \"Herşey public.\"",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "arayuz",
    "q": "Arayüzde tanımlanan özellikler (alanlar) nasıldır?",
    "opts": [
     "Her nesnede ayrı değer alır",
     "Private'tır",
     "Sabittir (final), değiştirilemez",
     "Sadece constructor'da atanır"
    ],
    "a": 2,
    "exp": "Tahta: \"Özellikler SABİT (final).\" Otomatik public static final.",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "arayuz",
    "q": "Arayüzün constructor'ı var mıdır?",
    "opts": [
     "Yoktur",
     "Sadece default olarak",
     "Vardır",
     "Sadece bir tane olabilir"
    ],
    "a": 0,
    "exp": "Tahta: \"Constructor yok.\"",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "arayuz",
    "q": "Tahtadaki `Kedi (extends Hayvan) implements Kosabilir, SesCikarabilir, Surunebilir` satırı neyi gösterir?",
    "opts": [
     "Kedi dört sınıftan kalıtım alır",
     "Hayvan, Kedi'den kalıtım alır",
     "Kedi tek bir sınıftan kalıtım alıp üç arayüzü uygular",
     "Kedi bir arayüzdür"
    ],
    "a": 2,
    "exp": "Önce extends (tek üst sınıf), sonra implements (birden çok arayüz, virgülle).",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "kalitim",
    "q": "NTP'nin dört temel kavramı hangileridir?",
    "opts": [
     "Sınıf, nesne, metot, değişken",
     "Public, private, protected, default",
     "Kalıtım, arayüz, döngü, dizi",
     "Kalıtım, kapsülleme, soyutlama, çok biçimlilik"
    ],
    "a": 3,
    "exp": "Tahta: Kalıtım (Inheritance), Kapsülleme (Encapsulation), Soyutlama (Abstraction), Çok Biçimlilik (Polymorphism).",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "kalitim",
    "q": "Tahtada kalıtımın altına yazılan kavram ve ok neyi anlatır?",
    "opts": [
     "private; dolu elmas",
     "override; UML'de düz çizgi + içi boş üçgen",
     "overload; kesikli çizgi",
     "interface; açık ok"
    ],
    "a": 1,
    "exp": "Kalıtımla gelen metot alt sınıfta override edilir; UML'de kalıtım ▷ (boş üçgen) ile çizilir.",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "kapsulleme",
    "q": "Tahtada kapsüllemenin altındaki `+ − #` simgeleri sırasıyla hangi erişim belirleyicileridir?",
    "opts": [
     "public, private, protected",
     "private, public, protected",
     "protected, private, public",
     "public, protected, private"
    ],
    "a": 0,
    "exp": "UML: + public, − private, # protected.",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "polimorfizm",
    "q": "Tahtadaki `Hayvan h = new Kedi();` ve `ArrayList<Hayvan> liste;` hangi kavramın örneğidir?",
    "opts": [
     "Composition",
     "Çok biçimlilik (polymorphism)",
     "Aşırı yükleme",
     "Kapsülleme"
    ],
    "a": 1,
    "exp": "Üst sınıf referansı alt sınıf nesnesini tutar; listeye farklı alt sınıflar eklenir.",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "uml",
    "q": "Tahtadaki kutuda bir sınıftan Random'a çizilen ok ve altındaki `Random r = new Random();` neyi gösterir?",
    "opts": [
     "Composition: Random silinince sınıf da silinir",
     "Association: sınıf bir Random nesnesine sahiptir (has-a)",
     "Kalıtım: sınıf Random'dan türer",
     "Realization: Random bir arayüzdür"
    ],
    "a": 1,
    "exp": "Sınıfın içinde başka sınıf tipinde bir alan varsa bu bağlantıdır (has-a); ok sahip olandan sahip olunana çizilir.",
    "src": "Tahta"
   },
   {
    "type": "mc",
    "topic": "uml",
    "q": "Tahtada arayüz başlığının yanındaki `- - - -▷` oku UML'de neyi gösterir?",
    "opts": [
     "Kalıtım",
     "Bağımlılık yok",
     "Gerçekleşme (realization): sınıf arayüzü uygular",
     "Aggregation"
    ],
    "a": 2,
    "exp": "Kesikli çizgi + boş üçgen = implements.",
    "src": "Tahta"
   }
  ]
 },
 {
  "id": "deneme1",
  "title": "Karma test 1",
  "desc": "16 test + 4 boşluk; bütün konulardan.",
  "questions": [
   {
    "type": "mc",
    "topic": "kalitim",
    "q": "Java'da bir sınıf kaç sınıfı `extends` edebilir?",
    "opts": [
     "Arayüz sayısı kadar",
     "Sınırsız",
     "Hiç",
     "İki",
     "En fazla bir"
    ],
    "a": 4,
    "exp": "Tek kalıtım. Birden fazla yetenek arayüzlerle."
   },
   {
    "type": "mc",
    "topic": "kapsulleme",
    "q": "Ekrana ne yazılır?",
    "opts": [
     "100 / 250",
     "100 / 100",
     "Derleme hatası",
     "0 / 250",
     "-500 / 250"
    ],
    "a": 0,
    "exp": "Setter negatif değeri reddediyor; bakiye 100 kalıyor, sonra 250.",
    "code": "class Insan {\n    private int bakiye = 100;\n    public int getBakiye() { return bakiye; }\n    public void setBakiye(int b) { if (b >= 0) bakiye = b; }\n}\n// main:\nInsan m = new Insan();\nm.setBakiye(-500);\nSystem.out.println(m.getBakiye());\nm.setBakiye(250);\nSystem.out.println(m.getBakiye());"
   },
   {
    "type": "mc",
    "topic": "soyutlama",
    "q": "Araba sürerken motorun nasıl çalıştığını bilmeden direksiyon, gaz ve frenle arabayı kullanmak hangi kavrama örnektir?",
    "opts": [
     "Çok biçimlilik",
     "Kalıtım",
     "Composition",
     "Soyutlama",
     "Aşırı yükleme"
    ],
    "a": 3,
    "exp": "Klasik soyutlama örneği."
   },
   {
    "type": "mc",
    "topic": "polimorfizm",
    "q": "Ekrana ne yazılır?",
    "opts": [
     "Calisan / Musteri",
     "Calisan / Calisan",
     "Insan / Insan",
     "Musteri / Calisan",
     "Derleme hatası"
    ],
    "a": 0,
    "exp": "Her nesne kendi override ettiği sürümü çalıştırır.",
    "code": "ArrayList<Insan> insanlar = new ArrayList<>();\ninsanlar.add(new Calisan());\ninsanlar.add(new Musteri());\nfor (Insan i : insanlar) System.out.println(i.tur());\n// Insan.tur() \"Insan\", Calisan \"Calisan\", Musteri \"Musteri\" döndürür"
   },
   {
    "type": "mc",
    "topic": "soyut",
    "q": "Hangi durumda soyut sınıf seçilir?",
    "opts": [
     "Sadece sabit tanımlanacaksa",
     "Alt sınıflar ortak alan ve kod paylaşıyor ama bazı davranışlar farklıysa",
     "Bir sınıf birden çok yerden kalıtım alacaksa",
     "Farklı türden sınıflara sadece ortak yetenek kazandırılacaksa",
     "Hiç alan olmayacaksa"
    ],
    "a": 1,
    "exp": "Ortak kod → soyut sınıf; ortak yetenek → arayüz."
   },
   {
    "type": "mc",
    "topic": "arayuz",
    "q": "Java'da çoklu kalıtımın yerine ne kullanılır?",
    "opts": [
     "static sınıflar",
     "final sınıflar",
     "Paketler",
     "Birden çok arayüz uygulamak",
     "Birden çok extends"
    ],
    "a": 3,
    "exp": "implements A, B, C."
   },
   {
    "type": "mc",
    "topic": "karsilastirma",
    "q": "\"is-a\" ve \"can-do\" ilişkileri sırasıyla hangi yapılara uygundur?",
    "opts": [
     "Arayüz, soyut sınıf",
     "Composition, aggregation",
     "Soyut sınıf (kalıtım), arayüz",
     "Private, public",
     "Overloading, overriding"
    ],
    "a": 2,
    "exp": "Kedi bir Hayvandır; Kedi koşabilir."
   },
   {
    "type": "mc",
    "topic": "uml",
    "q": "Bir `Dizin`in alt dizinleri yine `Dizin` ise bu ilişki hangisidir?",
    "opts": [
     "Generalization",
     "Aggregation",
     "Reflexive (dönüşlü) association",
     "Realization",
     "Composition"
    ],
    "a": 2,
    "exp": "Sınıfın kendisiyle ilişkisi."
   },
   {
    "type": "mc",
    "topic": "sinif",
    "q": "Aynı sınıfta aynı adlı ama parametre listesi farklı metotlar yazmaya ne denir?",
    "opts": [
     "Ezme (overriding)",
     "Aşırı yükleme (overloading)",
     "Kapsülleme",
     "Soyutlama",
     "Kalıtım"
    ],
    "a": 1,
    "exp": "Overloading: aynı ad, farklı parametre sayısı ya da tipi.",
    "why": {
     "0": "Overriding alt sınıfta aynı imzayla yeniden yazmaktır."
    }
   },
   {
    "type": "mc",
    "topic": "oyun",
    "q": "Oyunda karakterlerin `can` alanı private, ama savaş sonunda `mc.getCan()` ile okunuyor. Bu hangi kavram?",
    "opts": [
     "Aşırı yükleme",
     "Realization",
     "Kalıtım",
     "Çok biçimlilik",
     "Kapsülleme"
    ],
    "a": 4,
    "exp": "private alan + getter."
   },
   {
    "type": "mc",
    "topic": "kalitim",
    "q": "Ekrana ne yazılır?",
    "opts": [
     "Tavsan kosuyor / Tavsan zipladi!",
     "Hayvan kosuyor / Tavsan zipladi!",
     "Derleme hatası",
     "Tavsan zipladi! / Tavsan kosuyor",
     "Tavsan zipladi!"
    ],
    "a": 0,
    "exp": "`super.kos()` önce üst sınıfın metodunu çalıştırır; getClass().getName() nesnenin gerçek sınıf adını verir: Tavsan.",
    "code": "class Hayvan {\n    public void kos() {\n        System.out.println(getClass().getName() + \" kosuyor\");\n    }\n}\nclass Tavsan extends Hayvan {\n    @Override\n    public void kos() {\n        super.kos();\n        System.out.println(\"Tavsan zipladi!\");\n    }\n}\n// main: new Tavsan().kos();",
    "why": {
     "1": "getClass().getName() nesnenin gerçek sınıfını verir; nesne Tavsan."
    }
   },
   {
    "type": "mc",
    "topic": "kapsulleme",
    "q": "UML'de `- musteriNo : String` satırı ne anlatır?",
    "opts": [
     "Sabit alan",
     "public musteriNo metodu",
     "private, String tipinde musteriNo alanı",
     "Silinmiş alan",
     "protected alan"
    ],
    "a": 2,
    "exp": "− private, ardından ad ve tip."
   },
   {
    "type": "mc",
    "topic": "soyutlama",
    "q": "Soyutlamanın tanımı hangisidir?",
    "opts": [
     "Nesneleri listede tutmak",
     "Nesnenin ne yaptığını gösterip nasıl yaptığını gizlemek",
     "Aynı adlı metotlar yazmak",
     "Alanları private yapmak",
     "Bir sınıftan başka sınıf türetmek"
    ],
    "a": 1,
    "exp": "Gereksiz ayrıntı gizlenir, sadece gerekli olan gösterilir.",
    "why": {
     "3": "Bu kapsüllemedir."
    }
   },
   {
    "type": "mc",
    "topic": "polimorfizm",
    "q": "`Object o = new String(\"Ali\");` neden geçerlidir?",
    "opts": [
     "new String kullanıldığı için",
     "Bütün sınıflar Object'ten türediği için",
     "Object soyut olduğu için",
     "Geçerli değildir",
     "String bir arayüz olduğu için"
    ],
    "a": 1,
    "exp": "Hocanın H4_1 örneği: Object her sınıfın en üst sınıfı."
   },
   {
    "type": "mc",
    "topic": "soyut",
    "q": "Soyut sınıftan türeyen ve soyut metodu yazmayan sınıf için ne olur?",
    "opts": [
     "Çalışma zamanında hata",
     "Metot private olur",
     "Metot otomatik boş gövdeyle eklenir",
     "Hiçbir şey olmaz",
     "Derleme hatası (ya da o sınıf da abstract olmalı)"
    ],
    "a": 4,
    "exp": "Soyut metotların hepsi yazılmalıdır."
   },
   {
    "type": "mc",
    "topic": "arayuz",
    "q": "Arayüzde constructor (yapıcı) yazılırsa ne olur?",
    "opts": [
     "Derleme hatası",
     "Nesne üretilebilir hâle gelir",
     "Uyarı verir ama çalışır",
     "Sadece default olarak çalışır"
    ],
    "a": 0,
    "exp": "Arayüzün yapıcısı olmaz."
   },
   {
    "type": "fill",
    "topic": "arayuz",
    "q": "Boşluğu doldurun: arayüzde gövdeli metot.",
    "code": "____ void istisna() {\n    System.out.println(\"Bu bir default metot\");\n}",
    "ans": [
     "default"
    ],
    "cs": true,
    "exp": "Arayüzde gövdeli public metot default ile."
   },
   {
    "type": "fill",
    "topic": "uml",
    "q": "UML'de protected erişim hangi simgeyle gösterilir?",
    "code": "____ noOlustur() : String",
    "ans": [
     "#"
    ],
    "cs": false,
    "exp": "# protected."
   },
   {
    "type": "fill",
    "topic": "sinif",
    "q": "Boşluğu doldurun: Tavsan sınıfından nesne oluşturulsun.",
    "code": "Tavsan t = ____ Tavsan();",
    "ans": [
     "new"
    ],
    "cs": true,
    "exp": "Nesne new ile üretilir."
   },
   {
    "type": "fill",
    "topic": "kalitim",
    "q": "Boşluğu doldurun: Vampir, Karakter'den kalıtım alsın.",
    "code": "public class Vampir ____ Karakter { }",
    "ans": [
     "extends"
    ],
    "cs": true,
    "exp": "Kalıtım extends ile.",
    "whyFill": {
     "implements": "implements arayüz içindir."
    }
   }
  ]
 },
 {
  "id": "deneme2",
  "title": "Karma test 2",
  "desc": "16 test + 4 boşluk; bütün konulardan.",
  "questions": [
   {
    "type": "mc",
    "topic": "kalitim",
    "q": "`class Kaplumbaga extends Hayvan { }` için hangisi doğrudur? (Hayvan'da `public int konum = 6;` ve `kos()` var)",
    "opts": [
     "Kaplumbaga soyut sınıf olur",
     "Kaplumbaga, konum ve kos()'u hiç yazmadan kullanabilir",
     "Kaplumbaga'nın hiç üyesi yoktur",
     "Derleme hatası verir",
     "Kaplumbaga, Hayvan'ın yapıcısını miras alır"
    ],
    "a": 1,
    "exp": "Kalıtımla public üyeler gelir. Yapıcılar miras alınmaz.",
    "why": {
     "4": "Yapıcılar miras alınmaz; super(...) ile çağrılır."
    }
   },
   {
    "type": "mc",
    "topic": "kapsulleme",
    "q": "Kapsüllemenin temel fikri hangisidir?",
    "opts": [
     "Nesne üretmeyi engellemek",
     "Aynı adlı metotlar yazmak",
     "Alanları private yapıp erişimi getter/setter ile kontrol etmek",
     "Her şeyi public yapmak",
     "Bir sınıfı birden fazla sınıftan türetmek"
    ],
    "a": 2,
    "exp": "Veri gizlenir, kontrollü erişim verilir."
   },
   {
    "type": "mc",
    "topic": "soyutlama",
    "q": "Java'da soyutlama hangi araçlarla yapılır?",
    "opts": [
     "ArrayList ve Random",
     "static ve final",
     "for ve while",
     "private ve public",
     "abstract class ve interface"
    ],
    "a": 4,
    "exp": "Soyut sınıf kısmi, arayüz tam soyutlama sağlar."
   },
   {
    "type": "mc",
    "topic": "polimorfizm",
    "q": "Çok biçimlilikte hangi metodun **sürümünün** çalışacağı neye göre belirlenir?",
    "opts": [
     "Nesnenin gerçek tipine (çalışma zamanında)",
     "Sınıfın paketine",
     "Değişkenin adına",
     "Metodun adının uzunluğuna",
     "Referansın tipine"
    ],
    "a": 0,
    "exp": "Dinamik bağlama: override edilmişse alt sınıfın sürümü çalışır.",
    "why": {
     "4": "Referans tipi hangi metotların çağrılabileceğini belirler, hangi sürümün çalışacağını değil."
    }
   },
   {
    "type": "mc",
    "topic": "soyut",
    "q": "Ekrana ne yazılır?",
    "opts": [
     "Isim : Tekir",
     "Derleme hatası",
     "Kedi kosuyor! / Isim : Tekir",
     "Isim : Tekir / Kedi kosuyor!",
     "Isim : null / Kedi kosuyor!"
    ],
    "a": 3,
    "exp": "Soyut sınıfın yapıcısı super(isim) ile çalışır; bilgiGoster normal metot, kos override.",
    "code": "abstract class Hayvan {\n    private String isim;\n    public Hayvan(String isim) { this.isim = isim; }\n    public void bilgiGoster() { System.out.println(\"Isim : \" + isim); }\n    public abstract void kos();\n}\nclass Kedi extends Hayvan {\n    public Kedi(String isim) { super(isim); }\n    public void kos() { System.out.println(\"Kedi kosuyor!\"); }\n}\n// main:\nHayvan h = new Kedi(\"Tekir\");\nh.bilgiGoster();\nh.kos();"
   },
   {
    "type": "mc",
    "topic": "arayuz",
    "q": "Arayüzde hangi metot türleri gövdeli yazılabilir?",
    "opts": [
     "default ve private",
     "Sadece public",
     "Sadece abstract",
     "Hiçbiri",
     "protected ve final"
    ],
    "a": 0,
    "exp": "Tahta: \"private ve default normal metot yazılabilir.\""
   },
   {
    "type": "mc",
    "topic": "karsilastirma",
    "q": "Hangisi **sadece soyut sınıf** için doğrudur?",
    "opts": [
     "Bir sınıf sınırsız sayıda uygulayabilir",
     "Her şey public'tir",
     "Alanlar otomatik static final'dır",
     "implements ile kullanılır",
     "Constructor vardır"
    ],
    "a": 4,
    "exp": "Arayüzün constructor'ı yoktur."
   },
   {
    "type": "mc",
    "topic": "uml",
    "q": "Realization (gerçekleşme) ilişkisi UML'de hangi ilişkiyi modeller ve nasıl çizilir?",
    "opts": [
     "Parça–bütün; dolu elmas",
     "Sınıf–arayüz ilişkisi; kesikli çizgi + boş üçgen",
     "Sınıf–sınıf kalıtımı; düz çizgi",
     "Nesne–nesne; noktalı daire",
     "Sahiplik; açık ok"
    ],
    "a": 1,
    "exp": "Sunum: \"Kesikli çizgi kullanılır.\""
   },
   {
    "type": "mc",
    "topic": "sinif",
    "q": "`public void Hayvan() { }` satırı `Hayvan` sınıfında ne olur?",
    "opts": [
     "Derleme hatası verir",
     "Soyut metot olur",
     "Statik yapıcı olur",
     "Parametresiz yapıcı olur",
     "Yapıcı değil, adı sınıfla aynı olan sıradan bir metot olur"
    ],
    "a": 4,
    "exp": "Yapıcının dönüş tipi yoktur; void yazılınca sıradan metot olur."
   },
   {
    "type": "mc",
    "topic": "oyun",
    "q": "Her karakter `bilgiGoster()`'i ezip kendi ASCII resmini çiziyor, sonra `super.bilgiGoster()` çağırıyor. Bu hangi kavramlar?",
    "opts": [
     "Soyut metot zorunluluğu",
     "Kalıtım ve override",
     "Overloading ve kapsülleme",
     "Interface ve default",
     "Aggregation"
    ],
    "a": 1,
    "exp": "Override + super."
   },
   {
    "type": "mc",
    "topic": "kalitim",
    "q": "Kod derlenir mi?",
    "opts": [
     "Derleme hatası",
     "Evet, 100 yazar",
     "Evet, 0 yazar",
     "Çalışma zamanında hata"
    ],
    "a": 0,
    "exp": "private alan alt sınıftan doğrudan kullanılamaz.",
    "code": "class Insan { private int bakiye = 100; }\nclass Musteri extends Insan {\n    void yaz() { System.out.println(bakiye); }\n}"
   },
   {
    "type": "mc",
    "topic": "kapsulleme",
    "q": "`m.bakiye = -500;` satırı (bakiye private) ne olur?",
    "opts": [
     "Derleme hatası",
     "Bakiye -500 olur",
     "Bakiye 0 olur",
     "Çalışma zamanında uyarı"
    ],
    "a": 0,
    "exp": "private alana sınıf dışından erişilemez."
   },
   {
    "type": "mc",
    "topic": "soyutlama",
    "q": "Soyutlama ile kapsülleme için hangisi doğrudur?",
    "opts": [
     "İkisi tamamen aynı şeydir",
     "Soyutlama sadece private ile yapılır",
     "İkisi birlikte kullanılamaz",
     "Kapsülleme abstract ile yapılır",
     "Soyutlama karmaşıklığı gizler, kapsülleme veriyi korur"
    ],
    "a": 4,
    "exp": "Banka örneğinde ikisi birlikte kullanılıyor."
   },
   {
    "type": "mc",
    "topic": "polimorfizm",
    "q": "Overloading çok biçimliliğin hangi türüdür?",
    "opts": [
     "Çalışma zamanı (dinamik)",
     "Hiçbiri",
     "Derleme zamanı (statik)",
     "Kapsülleme türü"
    ],
    "a": 2,
    "exp": "Hangi metodun çağrılacağı derleyici tarafından parametrelere bakılarak seçilir."
   },
   {
    "type": "mc",
    "topic": "soyut",
    "q": "Soyut sınıfta hangisi **olamaz**?",
    "opts": [
     "private alan",
     "Soyut metot",
     "new ile nesnesinin üretilmesi",
     "Yapıcı",
     "Normal (gövdeli) metot"
    ],
    "a": 2,
    "exp": "Diğerlerinin hepsi olabilir."
   },
   {
    "type": "mc",
    "topic": "arayuz",
    "q": "Kedi bir Hayvan, Robot ise Hayvan değil; ama ikisi de koşabiliyor. Ortak koşma yeteneği için en uygun yapı hangisi?",
    "opts": [
     "Robot extends Kedi",
     "Kosabilir soyut sınıfı ve iki extends",
     "Kosabilir arayüzü",
     "Hayvan soyut sınıfı",
     "static bir kos() metodu"
    ],
    "a": 2,
    "exp": "Farklı türden sınıflara ortak yetenek → arayüz (\"can-do\")."
   },
   {
    "type": "fill",
    "topic": "karsilastirma",
    "q": "Boşluğu doldurun: arayüzün yapıcısı ____ .",
    "code": "// arayüzde constructor: ____",
    "ans": [
     "yok",
     "yoktur"
    ],
    "cs": false,
    "exp": "Tahta: \"Constructor yok.\" Soyut sınıfta ise var."
   },
   {
    "type": "fill",
    "topic": "soyut",
    "q": "Boşluğu doldurun: soyut sınıf tanımı.",
    "code": "public ____ class Hayvan { }",
    "ans": [
     "abstract"
    ],
    "cs": true,
    "exp": "abstract class."
   },
   {
    "type": "fill",
    "topic": "sinif",
    "q": "Boşluğu doldurun: alan, aynı adlı parametreden ayrılsın.",
    "code": "public Hayvan(int konum) {\n    ____.konum = konum;\n}",
    "ans": [
     "this"
    ],
    "cs": true,
    "exp": "this o anki nesneyi gösterir."
   },
   {
    "type": "fill",
    "topic": "arayuz",
    "q": "Boşluğu doldurun: arayüz tanımı.",
    "code": "public ____ Uyuyabilir {\n    void uyu();\n}",
    "ans": [
     "interface"
    ],
    "cs": true,
    "exp": "Arayüz interface ile tanımlanır."
   }
  ]
 }
];
window.TOPIC_QUESTIONS = {
 "sinif": [
  {
   "type": "mc",
   "topic": "sinif",
   "q": "Yapıcı (constructor) için hangisi doğrudur?",
   "opts": [
    "Her zaman void döndürür",
    "Sınıfla aynı adı taşır ve dönüş tipi yoktur",
    "Bir sınıfta en fazla bir tane olabilir",
    "Elle çağrılması zorunludur",
    "Sadece static olabilir"
   ],
   "a": 1,
   "exp": "Nesne oluşturulurken (new) çalışır; aşırı yüklenerek birden fazla yazılabilir."
  },
  {
   "type": "mc",
   "topic": "sinif",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "6 6",
    "20 20",
    "Derleme hatası",
    "6 20",
    "0 20"
   ],
   "a": 3,
   "exp": "Parametresiz yapıcı konumu 6 yapar, diğeri gelen değeri atar.",
   "code": "class Hayvan {\n    public int konum;\n    public Hayvan() { konum = 6; }\n    public Hayvan(int konum) { this.konum = konum; }\n}\n// main:\nHayvan a = new Hayvan();\nHayvan b = new Hayvan(20);\nSystem.out.println(a.konum + \" \" + b.konum);"
  },
  {
   "type": "mc",
   "topic": "sinif",
   "q": "`this.konum = konum;` satırında `this` ne işe yarar?",
   "opts": [
    "Alanı sabit yapar",
    "Üst sınıfa erişir",
    "Nesnenin alanını parametreden ayırır",
    "Yeni nesne oluşturur",
    "Metodu static yapar"
   ],
   "a": 2,
   "exp": "Alan ve parametre aynı adlı olduğunda `this.konum` alanı gösterir.",
   "why": {
    "1": "Üst sınıfa erişen super'dir."
   }
  },
  {
   "type": "mc",
   "topic": "sinif",
   "q": "Aynı sınıfta aynı adlı ama parametre listesi farklı metotlar yazmaya ne denir?",
   "opts": [
    "Ezme (overriding)",
    "Aşırı yükleme (overloading)",
    "Kapsülleme",
    "Soyutlama",
    "Kalıtım"
   ],
   "a": 1,
   "exp": "Overloading: aynı ad, farklı parametre sayısı ya da tipi.",
   "why": {
    "0": "Overriding alt sınıfta aynı imzayla yeniden yazmaktır."
   }
  },
  {
   "type": "mc",
   "topic": "sinif",
   "q": "Hiç yapıcı yazılmayan bir sınıf için hangisi doğrudur?",
   "opts": [
    "Java parametresiz varsayılan yapıcıyı kendisi ekler",
    "Derleme hatası verir",
    "Nesne oluşturulamaz",
    "Sınıf otomatik abstract olur",
    "Sadece static metotları çalışır"
   ],
   "a": 0,
   "exp": "Varsayılan (default) yapıcı."
  },
  {
   "type": "mc",
   "topic": "sinif",
   "q": "`public void Hayvan() { }` satırı `Hayvan` sınıfında ne olur?",
   "opts": [
    "Derleme hatası verir",
    "Soyut metot olur",
    "Statik yapıcı olur",
    "Parametresiz yapıcı olur",
    "Yapıcı değil, adı sınıfla aynı olan sıradan bir metot olur"
   ],
   "a": 4,
   "exp": "Yapıcının dönüş tipi yoktur; void yazılınca sıradan metot olur."
  },
  {
   "type": "mc",
   "topic": "sinif",
   "q": "Hocanın yarış örneğindeki `public final int PIST_UZUNLUGU = 100;` için hangisi doğrudur?",
   "opts": [
    "Metot olduğu için çağrılır",
    "Private'tır",
    "final olduğu için değeri sonradan değiştirilemez",
    "Her nesnede farklı değer alır",
    "Yapıcıdır"
   ],
   "a": 2,
   "exp": "final = sabit."
  },
  {
   "type": "fill",
   "topic": "sinif",
   "q": "Boşluğu doldurun: Tavsan sınıfından nesne oluşturulsun.",
   "code": "Tavsan t = ____ Tavsan();",
   "ans": [
    "new"
   ],
   "cs": true,
   "exp": "Nesne new ile üretilir."
  },
  {
   "type": "fill",
   "topic": "sinif",
   "q": "Boşluğu doldurun: alan, aynı adlı parametreden ayrılsın.",
   "code": "public Hayvan(int konum) {\n    ____.konum = konum;\n}",
   "ans": [
    "this"
   ],
   "cs": true,
   "exp": "this o anki nesneyi gösterir."
  }
 ],
 "kalitim": [
  {
   "type": "mc",
   "topic": "kalitim",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Tavsan kosuyor / Tavsan zipladi!",
    "Hayvan kosuyor / Tavsan zipladi!",
    "Derleme hatası",
    "Tavsan zipladi! / Tavsan kosuyor",
    "Tavsan zipladi!"
   ],
   "a": 0,
   "exp": "`super.kos()` önce üst sınıfın metodunu çalıştırır; getClass().getName() nesnenin gerçek sınıf adını verir: Tavsan.",
   "code": "class Hayvan {\n    public void kos() {\n        System.out.println(getClass().getName() + \" kosuyor\");\n    }\n}\nclass Tavsan extends Hayvan {\n    @Override\n    public void kos() {\n        super.kos();\n        System.out.println(\"Tavsan zipladi!\");\n    }\n}\n// main: new Tavsan().kos();",
   "why": {
    "1": "getClass().getName() nesnenin gerçek sınıfını verir; nesne Tavsan."
   }
  },
  {
   "type": "mc",
   "topic": "kalitim",
   "q": "`class Kaplumbaga extends Hayvan { }` için hangisi doğrudur? (Hayvan'da `public int konum = 6;` ve `kos()` var)",
   "opts": [
    "Kaplumbaga soyut sınıf olur",
    "Kaplumbaga, konum ve kos()'u hiç yazmadan kullanabilir",
    "Kaplumbaga'nın hiç üyesi yoktur",
    "Derleme hatası verir",
    "Kaplumbaga, Hayvan'ın yapıcısını miras alır"
   ],
   "a": 1,
   "exp": "Kalıtımla public üyeler gelir. Yapıcılar miras alınmaz.",
   "why": {
    "4": "Yapıcılar miras alınmaz; super(...) ile çağrılır."
   }
  },
  {
   "type": "mc",
   "topic": "kalitim",
   "q": "Java'da bir sınıf kaç sınıfı `extends` edebilir?",
   "opts": [
    "Arayüz sayısı kadar",
    "Sınırsız",
    "Hiç",
    "İki",
    "En fazla bir"
   ],
   "a": 4,
   "exp": "Tek kalıtım. Birden fazla yetenek arayüzlerle."
  },
  {
   "type": "mc",
   "topic": "kalitim",
   "q": "`super(100, 60, 20, 20);` satırı nerede ve ne için yazılır?",
   "opts": [
    "Alt sınıf yapıcısının ilk satırında, üst sınıfın yapıcısını çağırmak için",
    "Üst sınıfta, alt sınıfı çağırmak için",
    "Arayüzde, sabit tanımlamak için",
    "main içinde, nesne oluşturmak için",
    "Herhangi bir metodun son satırında"
   ],
   "a": 0,
   "exp": "Hocanın Vampir yapıcısı: Karakter'in can, saldırı, savunma, kritik değerlerini verir."
  },
  {
   "type": "mc",
   "topic": "kalitim",
   "q": "`@Override` etiketinin görevi nedir?",
   "opts": [
    "Kalıtımı engeller",
    "Metodu private yapar",
    "Metodun üst sınıftaki bir metodu ezdiğini belirtir; imza yanlışsa derleyici hata verir",
    "Yeni bir metot oluşturur",
    "Metodu static yapar"
   ],
   "a": 2,
   "exp": "@Override yazım hatalarını derleme anında yakalar."
  },
  {
   "type": "mc",
   "topic": "kalitim",
   "q": "\"is-a\" ilişkisi hangi kavramı anlatır?",
   "opts": [
    "Kapsülleme",
    "Kalıtım",
    "Association (has-a)",
    "Aşırı yükleme",
    "Composition"
   ],
   "a": 1,
   "exp": "\"Tavşan bir Hayvandır.\"",
   "why": {
    "2": "has-a sahiplik ilişkisidir."
   }
  },
  {
   "type": "mc",
   "topic": "kalitim",
   "q": "Üst sınıftaki `private int bakiye;` alanına alt sınıftan nasıl erişilir?",
   "opts": [
    "static yaparak",
    "Üst sınıfın public getter/setter metotlarıyla",
    "this.bakiye ile doğrudan",
    "Erişilemez ve değeri kullanılamaz",
    "super.bakiye ile doğrudan"
   ],
   "a": 1,
   "exp": "Hocanın Musteri sınıfı `this.bakiye += miktar` yerine getBakiye/setBakiye kullanıyor."
  },
  {
   "type": "mc",
   "topic": "kalitim",
   "q": "Kod derlenir mi?",
   "opts": [
    "Derleme hatası",
    "Evet, 100 yazar",
    "Evet, 0 yazar",
    "Çalışma zamanında hata"
   ],
   "a": 0,
   "exp": "private alan alt sınıftan doğrudan kullanılamaz.",
   "code": "class Insan { private int bakiye = 100; }\nclass Musteri extends Insan {\n    void yaz() { System.out.println(bakiye); }\n}"
  },
  {
   "type": "fill",
   "topic": "kalitim",
   "q": "Boşluğu doldurun: Vampir, Karakter'den kalıtım alsın.",
   "code": "public class Vampir ____ Karakter { }",
   "ans": [
    "extends"
   ],
   "cs": true,
   "exp": "Kalıtım extends ile.",
   "whyFill": {
    "implements": "implements arayüz içindir."
   }
  },
  {
   "type": "fill",
   "topic": "kalitim",
   "q": "Boşluğu doldurun: üst sınıftaki bilgiGoster() çalıştırılsın.",
   "code": "@Override\npublic void bilgiGoster() {\n    System.out.println(\"( o  o )\");\n    ____.bilgiGoster();\n}",
   "ans": [
    "super"
   ],
   "cs": true,
   "exp": "super üst sınıfa erişir."
  },
  {
   "type": "code",
   "topic": "kalitim",
   "title": "Kalıtım ve override",
   "q": "Kaplumbaga, Hayvan'dan kalıtım alsın ve kos() metodunu ezsin.",
   "code": "class Hayvan {\n    public void kos() { System.out.println(\"Hayvan kosuyor\"); }\n}\nclass Kaplumbaga {{1}} Hayvan {\n    {{2}}\n    public void {{3}}() {\n        {{4}}.kos();\n        System.out.println(\"Kaplumbaga yavas yuruyor\");\n    }\n}",
   "blanks": [
    {
     "ans": [
      "extends"
     ],
     "cs": true
    },
    {
     "ans": [
      "@Override"
     ],
     "cs": true
    },
    {
     "ans": [
      "kos"
     ],
     "cs": true
    },
    {
     "ans": [
      "super"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Kalıtım extends ile.",
    "Ezme etiketi.",
    "Aynı imza: kos().",
    "Üst sınıfın sürümü super ile çağrılır."
   ],
   "expect": "Hayvan kosuyor / Kaplumbaga yavas yuruyor"
  }
 ],
 "kapsulleme": [
  {
   "type": "mc",
   "topic": "kapsulleme",
   "q": "Kapsüllemenin temel fikri hangisidir?",
   "opts": [
    "Nesne üretmeyi engellemek",
    "Aynı adlı metotlar yazmak",
    "Alanları private yapıp erişimi getter/setter ile kontrol etmek",
    "Her şeyi public yapmak",
    "Bir sınıfı birden fazla sınıftan türetmek"
   ],
   "a": 2,
   "exp": "Veri gizlenir, kontrollü erişim verilir."
  },
  {
   "type": "mc",
   "topic": "kapsulleme",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "100 / 250",
    "100 / 100",
    "Derleme hatası",
    "0 / 250",
    "-500 / 250"
   ],
   "a": 0,
   "exp": "Setter negatif değeri reddediyor; bakiye 100 kalıyor, sonra 250.",
   "code": "class Insan {\n    private int bakiye = 100;\n    public int getBakiye() { return bakiye; }\n    public void setBakiye(int b) { if (b >= 0) bakiye = b; }\n}\n// main:\nInsan m = new Insan();\nm.setBakiye(-500);\nSystem.out.println(m.getBakiye());\nm.setBakiye(250);\nSystem.out.println(m.getBakiye());"
  },
  {
   "type": "mc",
   "topic": "kapsulleme",
   "q": "`m.bakiye = -500;` satırı (bakiye private) ne olur?",
   "opts": [
    "Derleme hatası",
    "Bakiye -500 olur",
    "Bakiye 0 olur",
    "Çalışma zamanında uyarı"
   ],
   "a": 0,
   "exp": "private alana sınıf dışından erişilemez."
  },
  {
   "type": "mc",
   "topic": "kapsulleme",
   "q": "`protected` üyeye kimler erişebilir?",
   "opts": [
    "Sadece main metodu",
    "Sadece aynı paket",
    "Sadece sınıfın kendisi",
    "Sınıfın kendisi, aynı paket ve alt sınıflar",
    "Herkes"
   ],
   "a": 3,
   "exp": "UML'de #.",
   "why": {
    "2": "Bu private.",
    "4": "Bu public.",
    "1": "Bu default (paket)."
   }
  },
  {
   "type": "mc",
   "topic": "kapsulleme",
   "q": "UML'de `- musteriNo : String` satırı ne anlatır?",
   "opts": [
    "Sabit alan",
    "public musteriNo metodu",
    "private, String tipinde musteriNo alanı",
    "Silinmiş alan",
    "protected alan"
   ],
   "a": 2,
   "exp": "− private, ardından ad ve tip."
  },
  {
   "type": "mc",
   "topic": "kapsulleme",
   "q": "Hocanın banka örneğinde `musteriNoOlustur()` metodunun private olmasının sebebi nedir?",
   "opts": [
    "Her yerden çağrılabilsin",
    "Soyut olsun",
    "static olsun",
    "Numarayı sadece sınıf kendi üretsin, dışarıdan çağrılıp değiştirilemesin",
    "Alt sınıflar ezebilsin"
   ],
   "a": 3,
   "exp": "Müşteri numarası dışarıdan sadece getMusteriNo() ile okunur."
  },
  {
   "type": "mc",
   "topic": "kapsulleme",
   "q": "Setter'ı olmayan ama getter'ı olan bir private alan nasıldır?",
   "opts": [
    "Sabit (final) olur",
    "Dışarıdan sadece yazılabilir",
    "Dışarıdan sadece okunabilir (salt okunur)",
    "public olur",
    "Hiç kullanılamaz"
   ],
   "a": 2,
   "exp": "musteriNo: getMusteriNo() var, setter yok."
  },
  {
   "type": "mc",
   "topic": "kapsulleme",
   "q": "Erişim belirleyici yazılmayan (default) bir alan nereden erişilir?",
   "opts": [
    "Hiçbir yerden",
    "Sadece alt sınıflardan",
    "Sadece sınıfın içinden",
    "Her yerden",
    "Aynı paketteki sınıflardan"
   ],
   "a": 4,
   "exp": "Paket düzeyi erişim, UML'de ~."
  },
  {
   "type": "fill",
   "topic": "kapsulleme",
   "q": "Boşluğu doldurun: bakiye dışarıdan doğrudan erişilemesin.",
   "code": "____ int bakiye;",
   "ans": [
    "private"
   ],
   "cs": true,
   "exp": "Kapsülleme için private."
  },
  {
   "type": "fill",
   "topic": "kapsulleme",
   "q": "Boşluğu doldurun: getter bakiyeyi döndürsün.",
   "code": "public int getBakiye() {\n    ____ bakiye;\n}",
   "ans": [
    "return"
   ],
   "cs": true,
   "exp": "Getter değeri return ile döndürür."
  },
  {
   "type": "code",
   "topic": "kapsulleme",
   "title": "Getter ve setter",
   "q": "Banka hesabını kapsülleyin: alan private, setter negatif değeri reddetsin.",
   "code": "class Hesap {\n    {{1}} int bakiye = 100;\n    public int getBakiye() {\n        {{2}} bakiye;\n    }\n    public void setBakiye(int bakiye) {\n        if (bakiye >= 0) {\n            {{3}}.bakiye = bakiye;\n        }\n    }\n}",
   "blanks": [
    {
     "ans": [
      "private"
     ],
     "cs": true
    },
    {
     "ans": [
      "return"
     ],
     "cs": true
    },
    {
     "ans": [
      "this"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Alan dışarıya kapalı.",
    "Getter değeri döndürür.",
    "Alan ile parametre aynı adlı: this."
   ],
   "expect": "100 / 40"
  }
 ],
 "soyutlama": [
  {
   "type": "mc",
   "topic": "soyutlama",
   "q": "Soyutlamanın tanımı hangisidir?",
   "opts": [
    "Nesneleri listede tutmak",
    "Nesnenin ne yaptığını gösterip nasıl yaptığını gizlemek",
    "Aynı adlı metotlar yazmak",
    "Alanları private yapmak",
    "Bir sınıftan başka sınıf türetmek"
   ],
   "a": 1,
   "exp": "Gereksiz ayrıntı gizlenir, sadece gerekli olan gösterilir.",
   "why": {
    "3": "Bu kapsüllemedir."
   }
  },
  {
   "type": "mc",
   "topic": "soyutlama",
   "q": "Java'da soyutlama hangi araçlarla yapılır?",
   "opts": [
    "ArrayList ve Random",
    "static ve final",
    "for ve while",
    "private ve public",
    "abstract class ve interface"
   ],
   "a": 4,
   "exp": "Soyut sınıf kısmi, arayüz tam soyutlama sağlar."
  },
  {
   "type": "mc",
   "topic": "soyutlama",
   "q": "Araba sürerken motorun nasıl çalıştığını bilmeden direksiyon, gaz ve frenle arabayı kullanmak hangi kavrama örnektir?",
   "opts": [
    "Çok biçimlilik",
    "Kalıtım",
    "Composition",
    "Soyutlama",
    "Aşırı yükleme"
   ],
   "a": 3,
   "exp": "Klasik soyutlama örneği."
  },
  {
   "type": "mc",
   "topic": "soyutlama",
   "q": "Hocanın banka örneğinde `Main` sadece `m.paraCek(50)` çağırıyor; bakiye kontrolü sınıfın içinde. Bu durum hangi kavramı gösterir?",
   "opts": [
    "Reflexive association",
    "Kalıtım",
    "Soyutlama",
    "Overloading",
    "Realization"
   ],
   "a": 2,
   "exp": "Kullanıcı ne yapılacağını bilir, nasıl yapıldığını görmez."
  },
  {
   "type": "mc",
   "topic": "soyutlama",
   "q": "Soyutlama ile kapsülleme için hangisi doğrudur?",
   "opts": [
    "İkisi tamamen aynı şeydir",
    "Soyutlama sadece private ile yapılır",
    "İkisi birlikte kullanılamaz",
    "Kapsülleme abstract ile yapılır",
    "Soyutlama karmaşıklığı gizler, kapsülleme veriyi korur"
   ],
   "a": 4,
   "exp": "Banka örneğinde ikisi birlikte kullanılıyor."
  },
  {
   "type": "mc",
   "topic": "soyutlama",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Yetersiz Bakiye! / 100",
    "1100 / Yetersiz Bakiye!",
    "-3950",
    "Yetersiz Bakiye! / 1050",
    "1050"
   ],
   "a": 3,
   "exp": "100 − 50 + 1000 = 1050; 5000 çekilemez.",
   "code": "// Musteri: bakiye 100'den başlar\nm.paraCek(50);\nm.paraEkle(1000);\nm.paraCek(5000);\nSystem.out.println(m.getBakiye());"
  },
  {
   "type": "mc",
   "topic": "soyutlama",
   "q": "`public abstract void kos();` satırı soyutlamayı nasıl sağlar?",
   "opts": [
    "\"Her hayvan koşar\" der, nasıl koşacağını alt sınıfa bırakır",
    "kos() metodunu gizler",
    "kos()'u çağırmayı yasaklar",
    "kos()'u private yapar",
    "kos()'a varsayılan gövde verir"
   ],
   "a": 0,
   "exp": "Ne: imza. Nasıl: alt sınıfın gövdesi."
  },
  {
   "type": "fill",
   "topic": "soyutlama",
   "q": "Boşluğu doldurun: gövdesiz soyut metot.",
   "code": "public ____ void kos();",
   "ans": [
    "abstract"
   ],
   "cs": true,
   "exp": "Soyut metot abstract ile, gövdesiz."
  }
 ],
 "polimorfizm": [
  {
   "type": "mc",
   "topic": "polimorfizm",
   "q": "Hangisi geçerli bir atamadır? (Kedi extends Hayvan)",
   "opts": [
    "new Kedi() = Hayvan h;",
    "Hayvan h = Kedi;",
    "Kedi k = (Hayvan) new Kedi();",
    "Kedi k = new Hayvan();",
    "Hayvan h = new Kedi();"
   ],
   "a": 4,
   "exp": "Üst tip referans alt tip nesneyi tutar; tersi olmaz.",
   "why": {
    "3": "Her hayvan kedi değildir: derleme hatası."
   }
  },
  {
   "type": "mc",
   "topic": "polimorfizm",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Calisan / Musteri",
    "Calisan / Calisan",
    "Insan / Insan",
    "Musteri / Calisan",
    "Derleme hatası"
   ],
   "a": 0,
   "exp": "Her nesne kendi override ettiği sürümü çalıştırır.",
   "code": "ArrayList<Insan> insanlar = new ArrayList<>();\ninsanlar.add(new Calisan());\ninsanlar.add(new Musteri());\nfor (Insan i : insanlar) System.out.println(i.tur());\n// Insan.tur() \"Insan\", Calisan \"Calisan\", Musteri \"Musteri\" döndürür"
  },
  {
   "type": "mc",
   "topic": "polimorfizm",
   "q": "`Insan insan2 = new Musteri(\"Veli\"); insan2.bakiyeGoster();` (bakiyeGoster sadece Musteri'de) ne olur?",
   "opts": [
    "Derleme hatası",
    "Bakiye yazdırılır",
    "null yazdırılır",
    "Çalışma zamanında hata"
   ],
   "a": 0,
   "exp": "Çağrılabilecek metotlar referans tipine (Insan) göre belirlenir."
  },
  {
   "type": "mc",
   "topic": "polimorfizm",
   "q": "Çok biçimlilikte hangi metodun **sürümünün** çalışacağı neye göre belirlenir?",
   "opts": [
    "Nesnenin gerçek tipine (çalışma zamanında)",
    "Sınıfın paketine",
    "Değişkenin adına",
    "Metodun adının uzunluğuna",
    "Referansın tipine"
   ],
   "a": 0,
   "exp": "Dinamik bağlama: override edilmişse alt sınıfın sürümü çalışır.",
   "why": {
    "4": "Referans tipi hangi metotların çağrılabileceğini belirler, hangi sürümün çalışacağını değil."
   }
  },
  {
   "type": "mc",
   "topic": "polimorfizm",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Miyav / Hav / Miyav",
    "Derleme hatası",
    "Miyav / Miyav / Hav",
    "Ses / Ses / Ses",
    "Hav / Miyav / Miyav"
   ],
   "a": 0,
   "exp": "Her nesne kendi sesCikar() sürümünü çalıştırır.",
   "code": "Hayvan h = new Kedi();\nh.sesCikar();\nArrayList<Hayvan> liste = new ArrayList<>();\nliste.add(new Kopek());\nliste.add(new Kedi());\nfor (Hayvan x : liste) x.sesCikar();"
  },
  {
   "type": "mc",
   "topic": "polimorfizm",
   "q": "Overloading çok biçimliliğin hangi türüdür?",
   "opts": [
    "Çalışma zamanı (dinamik)",
    "Hiçbiri",
    "Derleme zamanı (statik)",
    "Kapsülleme türü"
   ],
   "a": 2,
   "exp": "Hangi metodun çağrılacağı derleyici tarafından parametrelere bakılarak seçilir."
  },
  {
   "type": "mc",
   "topic": "polimorfizm",
   "q": "Hocanın oyununda `saldir(Karakter dusman)` metoduna Vampir, Elf, Ejderha nesneleri gönderilebilmesi neyi gösterir?",
   "opts": [
    "Arayüz zorunluluğunu",
    "Aşırı yüklemeyi",
    "Çok biçimliliği: parametre üst sınıf tipinde",
    "Composition'ı",
    "Kapsüllemeyi"
   ],
   "a": 2,
   "exp": "Karakter tipi her alt sınıf nesnesini kabul eder."
  },
  {
   "type": "mc",
   "topic": "polimorfizm",
   "q": "`Object o = new String(\"Ali\");` neden geçerlidir?",
   "opts": [
    "new String kullanıldığı için",
    "Bütün sınıflar Object'ten türediği için",
    "Object soyut olduğu için",
    "Geçerli değildir",
    "String bir arayüz olduğu için"
   ],
   "a": 1,
   "exp": "Hocanın H4_1 örneği: Object her sınıfın en üst sınıfı."
  },
  {
   "type": "fill",
   "topic": "polimorfizm",
   "q": "Boşluğu doldurun: farklı karakterleri tutacak liste.",
   "code": "ArrayList<____> dusmanlar = new ArrayList<>();",
   "ans": [
    "Karakter"
   ],
   "cs": true,
   "exp": "Üst sınıf tipinde liste her alt sınıfı kabul eder."
  },
  {
   "type": "code",
   "topic": "polimorfizm",
   "title": "Çok biçimli liste",
   "q": "Farklı hayvanları tek listede tutup döngüyle ses çıkartın.",
   "code": "import java.util.ArrayList;\n\nabstract class Hayvan { public abstract void sesCikar(); }\nclass Kedi extends Hayvan { public void sesCikar() { System.out.println(\"Miyav\"); } }\nclass Kopek extends Hayvan { public void sesCikar() { System.out.println(\"Hav\"); } }\npublic class Main {\n    public static void main(String[] args) {\n        {{1}}<Hayvan> liste = new ArrayList<>();\n        liste.add({{2}} Kedi());\n        liste.add(new Kopek());\n        for ({{3}} h : liste) {\n            h.{{4}}();\n        }\n    }\n}",
   "blanks": [
    {
     "ans": [
      "ArrayList"
     ],
     "cs": true
    },
    {
     "ans": [
      "new"
     ],
     "cs": true
    },
    {
     "ans": [
      "Hayvan"
     ],
     "cs": true
    },
    {
     "ans": [
      "sesCikar"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Liste tipi.",
    "Nesne new ile.",
    "Döngü değişkeni üst sınıf tipinde.",
    "Her nesne kendi sürümünü çalıştırır."
   ],
   "expect": "Miyav / Hav"
  }
 ],
 "soyut": [
  {
   "type": "mc",
   "topic": "soyut",
   "q": "Kod derlenir mi?",
   "opts": [
    "Derleme hatası",
    "Evet, Tekir yazar",
    "Evet, boş satır yazar",
    "Çalışma zamanında hata"
   ],
   "a": 0,
   "exp": "Soyut sınıftan nesne üretilmez.",
   "code": "abstract class Hayvan { }\n// main:\nHayvan h = new Hayvan();"
  },
  {
   "type": "mc",
   "topic": "soyut",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Isim : Tekir",
    "Derleme hatası",
    "Kedi kosuyor! / Isim : Tekir",
    "Isim : Tekir / Kedi kosuyor!",
    "Isim : null / Kedi kosuyor!"
   ],
   "a": 3,
   "exp": "Soyut sınıfın yapıcısı super(isim) ile çalışır; bilgiGoster normal metot, kos override.",
   "code": "abstract class Hayvan {\n    private String isim;\n    public Hayvan(String isim) { this.isim = isim; }\n    public void bilgiGoster() { System.out.println(\"Isim : \" + isim); }\n    public abstract void kos();\n}\nclass Kedi extends Hayvan {\n    public Kedi(String isim) { super(isim); }\n    public void kos() { System.out.println(\"Kedi kosuyor!\"); }\n}\n// main:\nHayvan h = new Kedi(\"Tekir\");\nh.bilgiGoster();\nh.kos();"
  },
  {
   "type": "mc",
   "topic": "soyut",
   "q": "Soyut metot için hangisi doğrudur?",
   "opts": [
    "Gövdesi zorunludur",
    "Sadece arayüzde yazılır",
    "Sadece private olabilir",
    "Alt sınıf yazmak zorunda değildir",
    "Gövdesi yoktur, noktalı virgülle biter"
   ],
   "a": 4,
   "exp": "`public abstract void kos();`"
  },
  {
   "type": "mc",
   "topic": "soyut",
   "q": "Soyut sınıftan türeyen ve soyut metodu yazmayan sınıf için ne olur?",
   "opts": [
    "Çalışma zamanında hata",
    "Metot private olur",
    "Metot otomatik boş gövdeyle eklenir",
    "Hiçbir şey olmaz",
    "Derleme hatası (ya da o sınıf da abstract olmalı)"
   ],
   "a": 4,
   "exp": "Soyut metotların hepsi yazılmalıdır."
  },
  {
   "type": "mc",
   "topic": "soyut",
   "q": "Bir sınıfta tek bir soyut metot varsa sınıf için ne söylenebilir?",
   "opts": [
    "Sınıf abstract olmak zorundadır",
    "Hiçbir şart yok",
    "Sınıf interface olur",
    "Sınıfın yapıcısı olamaz",
    "Sınıf final olmalıdır"
   ],
   "a": 0,
   "exp": "Soyut metot içeren sınıf abstract tanımlanmalı."
  },
  {
   "type": "mc",
   "topic": "soyut",
   "q": "Soyut sınıfta hangisi **olamaz**?",
   "opts": [
    "private alan",
    "Soyut metot",
    "new ile nesnesinin üretilmesi",
    "Yapıcı",
    "Normal (gövdeli) metot"
   ],
   "a": 2,
   "exp": "Diğerlerinin hepsi olabilir."
  },
  {
   "type": "mc",
   "topic": "soyut",
   "q": "UML'de soyut sınıf nasıl gösterilir?",
   "opts": [
    "Kesikli kutu",
    "Adı altı çizili",
    "Dolu elmasla",
    "Adı italik ya da üstünde «abstract»",
    "«interface» yazılır"
   ],
   "a": 3,
   "exp": "Sunum: abstract sınıf italik ya da <<abstract>> ile."
  },
  {
   "type": "mc",
   "topic": "soyut",
   "q": "Hangi durumda soyut sınıf seçilir?",
   "opts": [
    "Sadece sabit tanımlanacaksa",
    "Alt sınıflar ortak alan ve kod paylaşıyor ama bazı davranışlar farklıysa",
    "Bir sınıf birden çok yerden kalıtım alacaksa",
    "Farklı türden sınıflara sadece ortak yetenek kazandırılacaksa",
    "Hiç alan olmayacaksa"
   ],
   "a": 1,
   "exp": "Ortak kod → soyut sınıf; ortak yetenek → arayüz."
  },
  {
   "type": "fill",
   "topic": "soyut",
   "q": "Boşluğu doldurun: soyut sınıf tanımı.",
   "code": "public ____ class Hayvan { }",
   "ans": [
    "abstract"
   ],
   "cs": true,
   "exp": "abstract class."
  },
  {
   "type": "code",
   "topic": "soyut",
   "title": "Soyut sınıf",
   "q": "Soyut Hayvan sınıfını ve onu kullanan Kedi sınıfını tamamlayın.",
   "code": "{{1}} class Hayvan {\n    public abstract void kos();\n}\nclass Kedi {{2}} Hayvan {\n    @Override\n    public void kos() { System.out.println(\"Kedi kosuyor!\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        {{3}} h = new {{4}}();\n        h.kos();\n    }\n}",
   "blanks": [
    {
     "ans": [
      "abstract"
     ],
     "cs": true
    },
    {
     "ans": [
      "extends"
     ],
     "cs": true
    },
    {
     "ans": [
      "Hayvan"
     ],
     "cs": true
    },
    {
     "ans": [
      "Kedi"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Soyut sınıf.",
    "Soyut sınıf extends ile.",
    "Referans soyut sınıf tipinde olabilir.",
    "Nesne alt sınıftan üretilir."
   ],
   "expect": "Kedi kosuyor!"
  }
 ],
 "arayuz": [
  {
   "type": "mc",
   "topic": "arayuz",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Derleme hatası",
    "Kedi cigniyor / Bu bir default metot / 5",
    "Kedi cigniyor / Bu bir default metot / Private metot kullanildi / 5",
    "Kedi cigniyor / 5",
    "Bu bir default metot / 5"
   ],
   "a": 2,
   "exp": "default metot gövdeli, private yardımcıyı çağırıyor; YAS sabit 5.",
   "code": "interface YemekYiyebilir {\n    int YAS = 5;\n    void cigneme();\n    private void yardimci() { System.out.println(\"Private metot kullanildi\"); }\n    default void istisna() {\n        System.out.println(\"Bu bir default metot\");\n        yardimci();\n    }\n}\nclass Kedi implements YemekYiyebilir {\n    public void cigneme() { System.out.println(\"Kedi cigniyor\"); }\n}\n// main:\nYemekYiyebilir y = new Kedi();\ny.cigneme();\ny.istisna();\nSystem.out.println(YemekYiyebilir.YAS);"
  },
  {
   "type": "mc",
   "topic": "arayuz",
   "q": "`YemekYiyebilir.YAS = 10;` satırı ne olur? (arayüzde `int YAS = 5;`)",
   "opts": [
    "Derleme hatası",
    "YAS 10 olur",
    "Sadece o nesnede 10 olur",
    "Çalışma zamanında uyarı"
   ],
   "a": 0,
   "exp": "Arayüz alanları public static final."
  },
  {
   "type": "mc",
   "topic": "arayuz",
   "q": "Arayüzde `void yutma();` yazılınca derleyici bunu nasıl yorumlar?",
   "opts": [
    "protected void yutma();",
    "default void yutma() {}",
    "static void yutma();",
    "public abstract void yutma();",
    "private void yutma() {}"
   ],
   "a": 3,
   "exp": "Arayüz metotları varsayılan olarak public abstract."
  },
  {
   "type": "mc",
   "topic": "arayuz",
   "q": "Hangisi doğru sıradır?",
   "opts": [
    "class Kedi implements A, B extends Hayvan",
    "class Kedi extends Hayvan, A, B",
    "class Kedi extends A implements Hayvan, B (Hayvan sınıf)",
    "class Kedi extends Hayvan implements A, B",
    "class Kedi implements Hayvan extends A"
   ],
   "a": 3,
   "exp": "Önce extends (tek sınıf), sonra implements (arayüzler, virgülle)."
  },
  {
   "type": "mc",
   "topic": "arayuz",
   "q": "Arayüzü uygulayan sınıf, arayüzdeki soyut metotları yazmazsa ne olur?",
   "opts": [
    "Hiçbir şey olmaz",
    "Metotlar otomatik eklenir",
    "Çalışma zamanında hata",
    "Derleme hatası (sınıf abstract değilse)"
   ],
   "a": 3,
   "exp": "Sözleşme: bütün soyut metotlar yazılmalı."
  },
  {
   "type": "mc",
   "topic": "arayuz",
   "q": "Arayüzde hangi metot türleri gövdeli yazılabilir?",
   "opts": [
    "default ve private",
    "Sadece public",
    "Sadece abstract",
    "Hiçbiri",
    "protected ve final"
   ],
   "a": 0,
   "exp": "Tahta: \"private ve default normal metot yazılabilir.\""
  },
  {
   "type": "mc",
   "topic": "arayuz",
   "q": "Arayüzde constructor (yapıcı) yazılırsa ne olur?",
   "opts": [
    "Derleme hatası",
    "Nesne üretilebilir hâle gelir",
    "Uyarı verir ama çalışır",
    "Sadece default olarak çalışır"
   ],
   "a": 0,
   "exp": "Arayüzün yapıcısı olmaz."
  },
  {
   "type": "mc",
   "topic": "arayuz",
   "q": "Java'da çoklu kalıtımın yerine ne kullanılır?",
   "opts": [
    "static sınıflar",
    "final sınıflar",
    "Paketler",
    "Birden çok arayüz uygulamak",
    "Birden çok extends"
   ],
   "a": 3,
   "exp": "implements A, B, C."
  },
  {
   "type": "mc",
   "topic": "arayuz",
   "q": "Kedi bir Hayvan, Robot ise Hayvan değil; ama ikisi de koşabiliyor. Ortak koşma yeteneği için en uygun yapı hangisi?",
   "opts": [
    "Robot extends Kedi",
    "Kosabilir soyut sınıfı ve iki extends",
    "Kosabilir arayüzü",
    "Hayvan soyut sınıfı",
    "static bir kos() metodu"
   ],
   "a": 2,
   "exp": "Farklı türden sınıflara ortak yetenek → arayüz (\"can-do\")."
  },
  {
   "type": "fill",
   "topic": "arayuz",
   "q": "Boşluğu doldurun: Kedi iki arayüzü uygulasın.",
   "code": "class Kedi extends Hayvan ____ YemekYiyebilir, Uyuyabilir { }",
   "ans": [
    "implements"
   ],
   "cs": true,
   "exp": "Arayüz implements ile.",
   "whyFill": {
    "extends": "extends sınıf içindir; arayüz implements ile."
   }
  },
  {
   "type": "fill",
   "topic": "arayuz",
   "q": "Boşluğu doldurun: arayüz tanımı.",
   "code": "public ____ Uyuyabilir {\n    void uyu();\n}",
   "ans": [
    "interface"
   ],
   "cs": true,
   "exp": "Arayüz interface ile tanımlanır."
  },
  {
   "type": "fill",
   "topic": "arayuz",
   "q": "Boşluğu doldurun: arayüzde gövdeli metot.",
   "code": "____ void istisna() {\n    System.out.println(\"Bu bir default metot\");\n}",
   "ans": [
    "default"
   ],
   "cs": true,
   "exp": "Arayüzde gövdeli public metot default ile."
  },
  {
   "type": "code",
   "topic": "arayuz",
   "title": "Arayüz uygulama",
   "q": "Kedi, Hayvan'dan kalıtım alsın ve iki arayüzü uygulasın.",
   "code": "{{1}} Kosabilir { void kos(); }\ninterface SesCikarabilir { void sesCikar(); }\nabstract class Hayvan { }\nclass Kedi {{2}} Hayvan {{3}} Kosabilir, SesCikarabilir {\n    public void kos() { System.out.println(\"Kedi kosuyor\"); }\n    public void {{4}}() { System.out.println(\"Miyav\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Kedi k = new Kedi();\n        k.kos();\n        k.sesCikar();\n    }\n}",
   "blanks": [
    {
     "ans": [
      "interface"
     ],
     "cs": true
    },
    {
     "ans": [
      "extends"
     ],
     "cs": true
    },
    {
     "ans": [
      "implements"
     ],
     "cs": true
    },
    {
     "ans": [
      "sesCikar"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Arayüz tanımı.",
    "Önce sınıftan kalıtım.",
    "Sonra arayüzler.",
    "Arayüzün soyut metodu yazılmalı."
   ],
   "expect": "Kedi kosuyor / Miyav"
  }
 ],
 "karsilastirma": [
  {
   "type": "mc",
   "topic": "karsilastirma",
   "q": "Soyut sınıf ile arayüzün **ortak** özelliği hangisidir?",
   "opts": [
    "İkisi de implements ile kullanılır",
    "İkisinde de her şey public'tir",
    "İkisinin de constructor'ı vardır",
    "İkisinden de nesne üretilmez ama referans olabilir",
    "İkisinde de alanlar sabittir"
   ],
   "a": 3,
   "exp": "Tahtada iki sütunda da: nesne yok, referans var."
  },
  {
   "type": "mc",
   "topic": "karsilastirma",
   "q": "Hangisi **sadece arayüz** için doğrudur?",
   "opts": [
    "extends ile kullanılır",
    "private alan olabilir",
    "Bir sınıfın en fazla bir tane olabilir",
    "Constructor vardır",
    "Alanlar sabittir (final)"
   ],
   "a": 4,
   "exp": "Diğerleri soyut sınıfa ait."
  },
  {
   "type": "mc",
   "topic": "karsilastirma",
   "q": "Hangisi **sadece soyut sınıf** için doğrudur?",
   "opts": [
    "Bir sınıf sınırsız sayıda uygulayabilir",
    "Her şey public'tir",
    "Alanlar otomatik static final'dır",
    "implements ile kullanılır",
    "Constructor vardır"
   ],
   "a": 4,
   "exp": "Arayüzün constructor'ı yoktur."
  },
  {
   "type": "mc",
   "topic": "karsilastirma",
   "q": "\"is-a\" ve \"can-do\" ilişkileri sırasıyla hangi yapılara uygundur?",
   "opts": [
    "Arayüz, soyut sınıf",
    "Composition, aggregation",
    "Soyut sınıf (kalıtım), arayüz",
    "Private, public",
    "Overloading, overriding"
   ],
   "a": 2,
   "exp": "Kedi bir Hayvandır; Kedi koşabilir."
  },
  {
   "type": "mc",
   "topic": "karsilastirma",
   "q": "Bir sınıf hem soyut sınıftan kalıtım alıp hem arayüz uygulayabilir mi?",
   "opts": [
    "Evet: extends tek sınıf, implements birden çok arayüz",
    "Sadece iki arayüze kadar",
    "Hayır, ikisinden biri seçilmeli",
    "Sadece arayüz soyut sınıfı extends ederse"
   ],
   "a": 0,
   "exp": "Kedi extends Hayvan implements YemekYiyebilir, Uyuyabilir."
  },
  {
   "type": "fill",
   "topic": "karsilastirma",
   "q": "Boşluğu doldurun: arayüzün yapıcısı ____ .",
   "code": "// arayüzde constructor: ____",
   "ans": [
    "yok",
    "yoktur"
   ],
   "cs": false,
   "exp": "Tahta: \"Constructor yok.\" Soyut sınıfta ise var."
  }
 ],
 "uml": [
  {
   "type": "mc",
   "topic": "uml",
   "q": "UML nedir?",
   "opts": [
    "Bir test aracı",
    "Java'nın bir kütüphanesi",
    "Bir programlama dili",
    "Sistem tasarımını görselleştiren genel amaçlı modelleme dili",
    "Bir veritabanı"
   ],
   "a": 3,
   "exp": "Yazılı (programlama) bir dil değildir."
  },
  {
   "type": "mc",
   "topic": "uml",
   "q": "UML sınıf kutusunun üç bölümü yukarıdan aşağı hangileridir?",
   "opts": [
    "Sınıf adı, özellikler, metotlar",
    "Metotlar, özellikler, ad",
    "Ad, metotlar, yapıcılar",
    "Paket, sınıf, nesne",
    "Özellikler, ad, metotlar"
   ],
   "a": 0,
   "exp": "Ad / özellikler / metotlar."
  },
  {
   "type": "mc",
   "topic": "uml",
   "q": "UML'de `+ eat() : int` neyi ifade eder?",
   "opts": [
    "Statik sabit",
    "protected int alanı",
    "private eat alanı",
    "eat adlı sınıf",
    "int döndüren public eat metodu"
   ],
   "a": 4,
   "exp": "+ public, ardından ad, : sonrası dönüş tipi."
  },
  {
   "type": "mc",
   "topic": "uml",
   "q": "Kalıtım (generalization) UML'de nasıl çizilir?",
   "opts": [
    "Alt sınıftan üst sınıfa düz çizgi + içi boş üçgen",
    "Düz çizgi + açık ok",
    "Kesikli çizgi + boş üçgen",
    "Düz çizgi + dolu elmas",
    "Çizgi çizilmez"
   ],
   "a": 0,
   "exp": "\"Kaplumbağa bir Hayvandır\".",
   "why": {
    "2": "Bu realization (implements)."
   }
  },
  {
   "type": "mc",
   "topic": "uml",
   "q": "Realization (gerçekleşme) ilişkisi UML'de hangi ilişkiyi modeller ve nasıl çizilir?",
   "opts": [
    "Parça–bütün; dolu elmas",
    "Sınıf–arayüz ilişkisi; kesikli çizgi + boş üçgen",
    "Sınıf–sınıf kalıtımı; düz çizgi",
    "Nesne–nesne; noktalı daire",
    "Sahiplik; açık ok"
   ],
   "a": 1,
   "exp": "Sunum: \"Kesikli çizgi kullanılır.\""
  },
  {
   "type": "mc",
   "topic": "uml",
   "q": "Association (bağlantı) hangi ilişkiyi gösterir?",
   "opts": [
    "Sahiplik (has-a)",
    "Soyutlama",
    "Aşırı yükleme",
    "is-a",
    "Arayüz uygulama"
   ],
   "a": 0,
   "exp": "En çok kullanılan ilişki türü."
  },
  {
   "type": "mc",
   "topic": "uml",
   "q": "\"Tekerlek arabanın parçasıdır ama araba yok olduğunda tekerlek varlığını sürdürebilir.\" Bu hangi ilişkidir?",
   "opts": [
    "Reflexive",
    "Aggregation (boş elmas)",
    "Composition (dolu elmas)",
    "Generalization",
    "Realization"
   ],
   "a": 1,
   "exp": "Zayıf parça ilişkisi.",
   "why": {
    "2": "Composition'da parça bütünle birlikte yok olur."
   }
  },
  {
   "type": "mc",
   "topic": "uml",
   "q": "\"Kalp insanın parçasıdır, insan yok olduğunda kalp de yok olur.\" Bu hangi ilişkidir?",
   "opts": [
    "Aggregation (boş elmas)",
    "Dependency yok",
    "Realization",
    "Composition (dolu elmas)",
    "Association"
   ],
   "a": 3,
   "exp": "Güçlü parça ilişkisi."
  },
  {
   "type": "mc",
   "topic": "uml",
   "q": "Çokluk gösteriminde `1..*` ne anlama gelir?",
   "opts": [
    "Sıfır ya da bir",
    "Hiç",
    "Tam olarak bir",
    "Sıfır ya da daha fazla",
    "Bir ya da daha fazla"
   ],
   "a": 4,
   "exp": "0..* sıfır ya da daha fazla."
  },
  {
   "type": "mc",
   "topic": "uml",
   "q": "\"Öğrenci 0 ya da sonsuz derse kaydolabilir\" ilişkisinde ders tarafına ne yazılır?",
   "opts": [
    "0..1",
    "1",
    "0..*",
    "1..*",
    "1..1"
   ],
   "a": 2,
   "exp": "Sıfır ya da daha fazla."
  },
  {
   "type": "mc",
   "topic": "uml",
   "q": "Bir `Dizin`in alt dizinleri yine `Dizin` ise bu ilişki hangisidir?",
   "opts": [
    "Generalization",
    "Aggregation",
    "Reflexive (dönüşlü) association",
    "Realization",
    "Composition"
   ],
   "a": 2,
   "exp": "Sınıfın kendisiyle ilişkisi."
  },
  {
   "type": "mc",
   "topic": "uml",
   "q": "Kodda `class Karakter { private Random r = new Random(); }` varsa UML'de Karakter ile Random arasında hangi ilişki çizilir?",
   "opts": [
    "Realization",
    "Association: Karakter → Random (has-a)",
    "Hiç ilişki çizilmez",
    "Random → Karakter kalıtım",
    "Generalization: Karakter ▷ Random"
   ],
   "a": 1,
   "exp": "Tahtadaki kutu: sınıfın içinde Random tipinde alan."
  },
  {
   "type": "mc",
   "topic": "uml",
   "q": "UML'de arayüz nasıl gösterilir?",
   "opts": [
    "Adın üstünde «interface»",
    "Adı altı çizili",
    "Adın önüne # konur",
    "Kutu kesikli çizilir",
    "Adı kalın ve kırmızı"
   ],
   "a": 0,
   "exp": "Soyut sınıf italik/«abstract», arayüz «interface»."
  },
  {
   "type": "fill",
   "topic": "uml",
   "q": "UML'de private erişim hangi simgeyle gösterilir?",
   "code": "____ isim : String",
   "ans": [
    "-",
    "−"
   ],
   "cs": false,
   "exp": "+ public, − private, # protected."
  },
  {
   "type": "fill",
   "topic": "uml",
   "q": "UML'de protected erişim hangi simgeyle gösterilir?",
   "code": "____ noOlustur() : String",
   "ans": [
    "#"
   ],
   "cs": false,
   "exp": "# protected."
  }
 ],
 "oyun": [
  {
   "type": "mc",
   "topic": "oyun",
   "q": "Oyundaki `Vampir()` yapıcısında `super(100, 60, 20, 20);` neyi yapar?",
   "opts": [
    "bilgiGoster()'i çağırır",
    "Karakter'in yapıcısına can, saldırı, savunma ve kritik oranını gönderir",
    "Vampir'i soyut yapar",
    "Ejderha'yı çağırır",
    "Yeni bir Karakter nesnesi oluşturup listeye ekler"
   ],
   "a": 1,
   "exp": "super(...) üst sınıf yapıcısı."
  },
  {
   "type": "mc",
   "topic": "oyun",
   "q": "Oyunda karakterlerin `can` alanı private, ama savaş sonunda `mc.getCan()` ile okunuyor. Bu hangi kavram?",
   "opts": [
    "Aşırı yükleme",
    "Realization",
    "Kalıtım",
    "Çok biçimlilik",
    "Kapsülleme"
   ],
   "a": 4,
   "exp": "private alan + getter."
  },
  {
   "type": "mc",
   "topic": "oyun",
   "q": "Her karakter `bilgiGoster()`'i ezip kendi ASCII resmini çiziyor, sonra `super.bilgiGoster()` çağırıyor. Bu hangi kavramlar?",
   "opts": [
    "Soyut metot zorunluluğu",
    "Kalıtım ve override",
    "Overloading ve kapsülleme",
    "Interface ve default",
    "Aggregation"
   ],
   "a": 1,
   "exp": "Override + super."
  },
  {
   "type": "mc",
   "topic": "oyun",
   "q": "`ArrayList<Karakter> dusmanlar` listesine Vampir, Elf, Ork eklenebilmesi hangi kavramdır?",
   "opts": [
    "Composition",
    "Kapsülleme",
    "Soyutlama",
    "Aşırı yükleme",
    "Çok biçimlilik"
   ],
   "a": 4,
   "exp": "Üst sınıf tipinde liste."
  },
  {
   "type": "mc",
   "topic": "oyun",
   "q": "`Main` sadece `new Oyun().baslat();` yazıyor; düşman seçimi ve savaş döngüsü Oyun sınıfında. Bu hangi kavram?",
   "opts": [
    "Realization",
    "Reflexive association",
    "Override",
    "Kalıtım",
    "Soyutlama"
   ],
   "a": 4,
   "exp": "Kullanıcı nasılını görmez."
  },
  {
   "type": "mc",
   "topic": "oyun",
   "q": "Karakter sınıfındaki `savun()` metodu private. Başka bir karakterin `dusman.savun()` metodu `saldir()` içinde nasıl çağrılabiliyor?",
   "opts": [
    "Arayüz sayesinde",
    "Çağrılamaz, kod hatalıdır",
    "private erişim sınıf düzeyindedir; aynı sınıfın kodu başka nesnenin private üyesine erişebilir",
    "super ile çağrıldığı için",
    "savun() aslında public'tir"
   ],
   "a": 2,
   "exp": "saldir() de Karakter sınıfının içinde."
  }
 ]
};
window.EXTRA_CODE = [];
