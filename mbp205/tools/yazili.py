"""Yazılı prova: hocanın söylediği gibi tahtadaki başlıkları açıklayıp örnek vermeyi isteyen açık uçlu sorular.
Her soru: slot (1–7), soru, anahtar kavramlar (keys: etiket, any: eşanlamlı ifadeler, w: puan; toplam 10), model cevap (paragraflar) ve örnek Java kodu.
Model kodlar build.py'de javac ile derlenip çalıştırılır."""

S = []
def q(slot, id, soru, keys, cevap, kod, out=None):
    tot = sum(k[2] for k in keys)
    assert abs(tot - 10) < 1e-9, (id, tot)
    S.append({'slot': slot, 'id': id, 'q': soru, 'keys': [{'k': k[0], 'any': k[1], 'w': k[2]} for k in keys],
              'cevap': cevap, 'kod': kod.strip('\n'), 'out': out})

SLOTS = {1: 'Kalıtım', 2: 'Kapsülleme', 3: 'Soyutlama', 4: 'Çok biçimlilik', 5: 'Soyut sınıf', 6: 'Arayüz', 7: 'Karşılaştırma ve UML'}

# ---------------------------------------------------------------- 1 Kalıtım
q(1, 'kal1', 'Kalıtım (inheritance) nedir? Java\'da nasıl yapılır? Override kavramıyla birlikte bir örnekle açıklayınız.',
  [('Miras alma: alt sınıf üst sınıfın özellik ve metotlarını alır', ['miras', 'devral', 'ozelliklerini al', 'metotlarini al', 'ust sinif', 'alt sinif', 'parent', 'child'], 2),
   ('extends anahtar kelimesi', ['extends'], 2),
   ('Override: alt sınıf metodu aynı imzayla yeniden yazar', ['override', 'ezme', 'ezer', 'yeniden yaz', 'ustune yaz'], 2),
   ('Kod tekrarını azaltır / yeniden kullanım', ['tekrar', 'yeniden kullan', 'ortak kod', 'tekrar kullan'], 1),
   ('super ile üst sınıfa erişim', ['super'], 1),
   ('Örnek: sınıf adlarıyla (Hayvan–Tavsan, Karakter–Vampir...)', ['class', 'hayvan', 'karakter', 'insan', 'tavsan', 'kedi', 'vampir'], 2)],
  ['**Kalıtım**, bir sınıfın (alt sınıf / child) başka bir sınıfın (üst sınıf / parent) özelliklerini ve metotlarını **miras almasıdır**. Ortak kod üst sınıfa bir kez yazılır, alt sınıflar tekrar yazmadan kullanır; bu kod tekrarını azaltır. İlişki "is-a" ilişkisidir: Tavşan **bir** Hayvandır.',
   'Java\'da `extends` anahtar kelimesiyle yapılır ve bir sınıf **sadece bir** sınıftan kalıtım alabilir.',
   '**Override (ezme):** alt sınıf, üst sınıftan gelen bir metodu **aynı ad ve parametrelerle** yeniden yazarak kendine özel davranış verir. `@Override` etiketi kullanılır. `super.kos()` ile üst sınıfın sürümü de çağrılabilir.',
   'Örnekte `Tavsan` hiçbir alan yazmadan `konum` alanını alır ve `kos()` metodunu ezer.'],
  '''class Hayvan {
    public int konum = 6;
    public void kos() {
        System.out.println("Hayvan kosuyor");
    }
}
class Tavsan extends Hayvan {
    @Override
    public void kos() {
        super.kos();
        System.out.println("Tavsan zipladi!");
    }
}
public class Main {
    public static void main(String[] args) {
        Tavsan t = new Tavsan();
        t.kos();
        System.out.println(t.konum);
    }
}''', 'Hayvan kosuyor\nTavsan zipladi!\n6')

q(1, 'kal2', '"Is-a" ilişkisi ne demektir? Kalıtımda `super` anahtar kelimesinin iki kullanımını örnek vererek açıklayınız.',
  [('is-a: alt sınıf bir üst sınıf türüdür ("Vampir bir Karakterdir")', ['is a', 'bir hayvandir', 'bir karakterdir', 'bir insandir', 'turudur', 'bir turu'], 2),
   ('Kalıtım / extends', ['extends', 'kalitim', 'miras', 'inheritance'], 2),
   ('super(...): üst sınıfın yapıcısını çağırır', ['super(', 'ust sinifin yapici', 'ust sinifin constructor', 'yapiciyi cagir', 'constructor cagir'], 2),
   ('super.metot(): üst sınıfın metodunu çağırır', ['super.', 'ust sinifin metod', 'ust sinifin kos', 'super kos', 'super bilgigoster'], 2),
   ('super yapıcının ilk satırında olmalı', ['ilk satir', 'en basta', 'ilk sirada', 'ilk komut'], 1),
   ('Örnek kod', ['class', 'public'], 1)],
  ['**Is-a** ilişkisi kalıtımı anlatır: alt sınıf, üst sınıfın bir türüdür. "Vampir **bir** Karakterdir", "Tavşan **bir** Hayvandır". Java\'da `extends` ile kurulur.',
   '`super` üst sınıfa erişmek için kullanılır: **1)** `super(...)` üst sınıfın **yapıcısını** çağırır ve alt sınıf yapıcısının **ilk satırında** olmalıdır. Hocanın oyununda `Vampir()` yapıcısı `super(100, 60, 20, 20)` ile Karakter\'in can, saldırı, savunma, kritik değerlerini verir. **2)** `super.metot()` üst sınıftaki metodun **ezilmeden önceki** sürümünü çağırır: `AnaKarakter`, `bilgiGoster()`\'i ezip önce ASCII resmini çizer, sonra `super.bilgiGoster()` ile ortak bilgileri yazar.'],
  '''class Karakter {
    private int can;
    public Karakter(int can) {
        this.can = can;
    }
    public void bilgiGoster() {
        System.out.println("Can : " + can);
    }
}
class Vampir extends Karakter {
    public Vampir() {
        super(100);                    // 1) üst sınıfın yapıcısı
    }
    @Override
    public void bilgiGoster() {
        System.out.println("( o  o )");
        super.bilgiGoster();           // 2) üst sınıfın metodu
    }
}
public class Main {
    public static void main(String[] args) {
        new Vampir().bilgiGoster();
    }
}''', '( o  o )\nCan : 100')

q(1, 'kal3', 'Overloading (aşırı yükleme) ile overriding (ezme) arasındaki farkı örnekle açıklayınız.',
  [('Overloading: aynı ad, farklı parametre', ['farkli parametre', 'parametre sayisi', 'parametre tipi', 'parametreleri farkli', 'parametre listesi'], 2),
   ('Overloading aynı sınıf içinde', ['ayni sinif', 'ayni sinifta', 'sinif icinde'], 1),
   ('Overriding: alt sınıfta aynı imza ile yeniden yazma', ['alt sinif', 'ayni imza', 'ayni parametre', 'yeniden yaz', 'ust sinif'], 2),
   ('Overriding kalıtım gerektirir / @Override', ['override', 'kalitim', 'extends'], 2),
   ('Derleme zamanı – çalışma zamanı farkı', ['derleme', 'calisma zaman', 'compile', 'runtime'], 1),
   ('Örnek (yapıcılar ya da kos())', ['hayvan(', 'kos', 'class', 'public'], 2)],
  ['**Overloading (aşırı yükleme):** **aynı sınıf içinde** aynı adı taşıyan ama **parametre sayısı ya da tipi farklı** metot veya yapıcılar yazmaktır. Hangisinin çalışacağı derleme zamanında argümanlara bakılarak seçilir. Örnek: `Hayvan()` ve `Hayvan(int konum)` yapıcıları.',
   '**Overriding (ezme):** **kalıtım** varken alt sınıfın, üst sınıftaki metodu **aynı ad ve aynı parametrelerle** yeniden yazmasıdır; `@Override` ile işaretlenir. Hangisinin çalışacağı çalışma zamanında nesnenin tipine bakılarak belirlenir. Örnek: `Tavsan`\'ın `kos()` metodunu ezmesi.'],
  '''class Hayvan {
    public int konum;
    public Hayvan() { konum = 6; }                     // overloading
    public Hayvan(int konum) { this.konum = konum; }   // overloading
    public void kos() { System.out.println("Hayvan kosuyor"); }
}
class Tavsan extends Hayvan {
    @Override
    public void kos() { System.out.println("Tavsan zipliyor"); }   // overriding
}
public class Main {
    public static void main(String[] args) {
        System.out.println(new Hayvan().konum + " " + new Hayvan(20).konum);
        Hayvan h = new Tavsan();
        h.kos();
    }
}''', '6 20\nTavsan zipliyor')

# ---------------------------------------------------------------- 2 Kapsülleme
q(2, 'kap1', 'Kapsülleme (encapsulation) nedir? Erişim belirleyicileri (public, private, protected) ve UML\'deki simgeleriyle birlikte bir örnek veriniz.',
  [('Veriyi gizleme / dışarıdan doğrudan erişimi engelleme', ['gizle', 'erisimi engel', 'disaridan eris', 'dogrudan eris', 'koru', 'kisitla'], 2),
   ('Alanlar private', ['private'], 2),
   ('Getter / setter metotları', ['getter', 'setter', 'get', 'set', 'getbakiye', 'setbakiye'], 2),
   ('public / protected açıklaması', ['public', 'protected', 'alt sinif', 'her yerden'], 1),
   ('UML simgeleri + − #', ['arti', 'eksi', 'diyez', 'simge', 'uml'], 1),
   ('Örnek: setter içinde kontrol (bakiye >= 0 vb.)', ['bakiye', 'if', 'kontrol', 'negatif'], 2)],
  ['**Kapsülleme**, bir sınıfın verilerini dışarıdan **doğrudan erişime kapatıp** sadece sınıfın izin verdiği metotlarla erişilmesini sağlamaktır. Alanlar `private` yapılır, okumak için **getter**, değiştirmek için **setter** yazılır. Setter içinde kontrol konarak verinin yanlış değer alması engellenir.',
   '**Erişim belirleyiciler:** `public` (UML\'de **+**) her yerden erişilir; `private` (**−**) sadece sınıfın içinden; `protected` (**#**) aynı paket ve alt sınıflardan; hiçbir şey yazılmazsa (default, **~**) aynı paketten.',
   'Örnek: banka müşterisinin `bakiye` alanı private; `setBakiye()` negatif değeri reddediyor, bu yüzden bakiye hiçbir zaman eksiye düşmüyor.'],
  '''class Insan {
    private int bakiye = 100;            // - bakiye : int
    public int getBakiye() {             // + getBakiye() : int
        return bakiye;
    }
    public void setBakiye(int bakiye) {  // + setBakiye(bakiye : int) : void
        if (bakiye >= 0) {
            this.bakiye = bakiye;
        }
    }
}
public class Main {
    public static void main(String[] args) {
        Insan m = new Insan();
        m.setBakiye(-50);
        System.out.println(m.getBakiye());
        m.setBakiye(300);
        System.out.println(m.getBakiye());
    }
}''', '100\n300')

q(2, 'kap2', 'Bir alanı `private` yapmak neden önemlidir? Getter ve setter metotlarını banka hesabı örneğiyle açıklayınız.',
  [('Yanlış / geçersiz değer atanmasını engeller', ['yanlis deger', 'gecersiz', 'negatif', 'hatali', 'istenmeyen'], 2),
   ('Dışarıdan doğrudan değiştirilemez', ['dogrudan', 'disaridan', 'erisilemez', 'degistirilemez'], 2),
   ('Getter: değeri okur / döndürür', ['getter', 'get', 'okur', 'dondurur', 'return'], 2),
   ('Setter: kontrollü değiştirir', ['setter', 'set', 'kontrol', 'if'], 2),
   ('Örnek: bakiye / paraCek', ['bakiye', 'paracek', 'para cek', 'paraekle', 'hesap'], 2)],
  ['Alan `public` olsaydı herkes `m.bakiye = -500;` yazabilirdi. `private` yapınca alan **dışarıdan doğrudan değiştirilemez**, sadece sınıfın metotlarıyla erişilir. Böylece veri **geçersiz değer** alamaz.',
   '**Getter** (`getBakiye()`) alanın değerini **döndürür**, **setter** (`setBakiye()`) değeri **kontrol ederek** değiştirir. Hocanın örneğinde `paraCek()` önce bakiyenin yetip yetmediğine bakar, yetmezse "Yetersiz Bakiye!" yazar. Müşteri numarasının setter\'ı yoktur: dışarıdan sadece okunur.'],
  '''class Musteri {
    private int bakiye = 100;
    public int getBakiye() { return bakiye; }
    private void setBakiye(int b) { if (b >= 0) bakiye = b; }
    public void paraCek(int miktar) {
        if (miktar <= getBakiye()) setBakiye(getBakiye() - miktar);
        else System.out.println("Yetersiz Bakiye!");
    }
}
public class Main {
    public static void main(String[] args) {
        Musteri m = new Musteri();
        m.paraCek(30);
        m.paraCek(500);
        System.out.println(m.getBakiye());
        // m.bakiye = -500;   derleme hatası
    }
}''', 'Yetersiz Bakiye!\n70')

q(2, 'kap3', '`protected` erişim belirleyicisi ne işe yarar? Kalıtımla ilişkisini bir örnekle açıklayınız.',
  [('protected: aynı paket + alt sınıflardan erişilir', ['alt sinif', 'ayni paket', 'miras alan', 'tureyen'], 3),
   ('private\'tan farkı: alt sınıf erişebilir', ['private', 'erisemez', 'erisebilir'], 2),
   ('Kalıtım / extends ile kullanım', ['extends', 'kalitim', 'miras'], 2),
   ('UML\'de # (diyez)', ['diyez', 'uml', 'simge'], 1),
   ('Örnek (noOlustur, Calisan/Musteri)', ['nooluştur', 'noolustur', 'calisan', 'musteri', 'class', 'override'], 2)],
  ['`protected` üyeler sınıfın kendisi, **aynı paketteki** sınıflar ve **alt sınıflar** tarafından erişilebilir; dışarıdaki diğer sınıflardan gizlidir. `private`\'tan farkı alt sınıfın da erişebilmesidir. UML\'de **#** ile gösterilir.',
   'Hocanın örneğinde (H4_1) `Insan` sınıfında `protected String noOlustur()` var. `Calisan` ve `Musteri` bu sınıftan **extends** ile türeyip metodu override ediyor: çalışan numarası "C" ile, müşteri numarası "M" ile başlıyor.'],
  '''class Insan {
    protected String noOlustur() { return "?"; }
    public void bilgiGoster() { System.out.println(noOlustur()); }
}
class Calisan extends Insan {
    @Override
    protected String noOlustur() { return "C1234"; }
}
class Musteri extends Insan {
    @Override
    protected String noOlustur() { return "M123456"; }
}
public class Main {
    public static void main(String[] args) {
        new Calisan().bilgiGoster();
        new Musteri().bilgiGoster();
    }
}''', 'C1234\nM123456')

# ---------------------------------------------------------------- 3 Soyutlama
q(3, 'soy1', 'Soyutlama (abstraction) nedir? Günlük hayattan ve Java\'dan birer örnekle açıklayınız.',
  [('Ne yaptığını gösterip nasıl yaptığını gizlemek', ['nasil yapt', 'ne yapt', 'ayrinti', 'detay', 'gizle', 'karmasik'], 3),
   ('Sadece gerekli olanı göstermek', ['gerekli', 'onemli', 'sadece'], 1),
   ('Günlük hayat örneği (araba, ATM, kumanda...)', ['araba', 'atm', 'kumanda', 'telefon', 'direksiyon', 'banka'], 2),
   ('abstract class / interface ile yapılır', ['abstract', 'soyut sinif', 'interface', 'arayuz'], 2),
   ('Java örneği', ['class', 'paracek', 'kos', 'public', 'void'], 2)],
  ['**Soyutlama**, bir nesnenin **ne yaptığını** gösterip **nasıl yaptığını** gizlemektir. Kullanıcı sadece gerekli olanı görür, karmaşık ayrıntılarla uğraşmaz.',
   '**Günlük hayat:** araba sürerken direksiyon, gaz ve frenle ilgileniriz; motorun içinde ne olduğunu bilmemiz gerekmez. ATM\'de "para çek" düğmesine basarız, banka sisteminin bakiyeyi nasıl güncellediğini görmeyiz.',
   '**Java:** hocanın banka örneğinde `Main` sadece `m.paraCek(50)` çağırır; bakiye kontrolü sınıfın içinde gizlidir. Java\'da soyutlama **abstract class** ve **interface** ile yapılır: `abstract void kos();` "her hayvan koşar" der, nasıl koşacağını alt sınıf belirler.'],
  '''abstract class Hayvan {
    public abstract void kos();          // ne yapılacağı
}
class Kedi extends Hayvan {
    @Override
    public void kos() {                  // nasıl yapılacağı
        System.out.println("Kedi kosuyor!");
    }
}
public class Main {
    public static void main(String[] args) {
        Hayvan h = new Kedi();
        h.kos();
    }
}''', 'Kedi kosuyor!')

q(3, 'soy2', 'Soyutlama ile kapsülleme arasındaki farkı açıklayınız. İkisini aynı örnek üzerinde gösteriniz.',
  [('Soyutlama: karmaşıklığı / ayrıntıyı gizler, ne yaptığını gösterir', ['ayrinti', 'detay', 'karmasik', 'nasil', 'ne yapt'], 3),
   ('Kapsülleme: veriyi korur, erişimi kısıtlar', ['veriyi koru', 'erisim', 'private', 'koru'], 3),
   ('Soyutlama abstract/interface ile', ['abstract', 'interface', 'arayuz', 'soyut sinif'], 1),
   ('Kapsülleme getter/setter ile', ['getter', 'setter', 'get', 'set'], 1),
   ('Ortak örnek (banka, karakter...)', ['bakiye', 'banka', 'paracek', 'karakter', 'class'], 2)],
  ['**Soyutlama** tasarım düzeyindedir: nesnenin **ne yaptığını** gösterir, **nasıl** yaptığını gizler. Abstract class ve interface ile yapılır.',
   '**Kapsülleme** uygulama düzeyindedir: nesnenin **verisini korur**, alanları `private` yapıp **getter/setter** ile kontrollü erişim verir.',
   'Banka örneğinde ikisi birlikte: kullanıcı sadece `paraCek()` çağırır, içeride ne olduğunu görmez (**soyutlama**); `bakiye` alanı private olduğu için kimse `m.bakiye = -500` yazamaz (**kapsülleme**).'],
  '''class Musteri {
    private int bakiye = 100;                 // kapsülleme: veri korunuyor
    public void paraCek(int miktar) {         // soyutlama: kullanıcı sadece bunu bilir
        if (miktar <= bakiye) bakiye -= miktar;
        else System.out.println("Yetersiz Bakiye!");
    }
    public int getBakiye() { return bakiye; }
}
public class Main {
    public static void main(String[] args) {
        Musteri m = new Musteri();
        m.paraCek(40);
        System.out.println(m.getBakiye());
    }
}''', '60')

q(3, 'soy3', 'Hocanın derste yazdırdığı oyun projesinde (Karakter, Vampir, Oyun) soyutlama nasıl kullanılmıştır? Örnekle açıklayınız.',
  [('Main sadece Oyun\'u başlatır, ayrıntılar gizli', ['main', 'baslat', 'gizli', 'bilmez', 'gormez'], 3),
   ('saldir() çağrılır, hesap içerde', ['saldir', 'savun', 'hesap', 'hasar'], 2),
   ('Soyutlama tanımı: ne / nasıl', ['ne yapt', 'nasil', 'ayrinti', 'detay', 'karmasik'], 3),
   ('Örnek kod', ['class', 'new oyun', 'oyun', 'public'], 2)],
  ['Soyutlama, ne yapıldığını gösterip **nasıl** yapıldığını gizlemektir. Oyunda `Main` sadece `new Oyun().baslat();` yazar; düşmanların rastgele seçilmesi, savaş döngüsü, seviye atlama `Oyun` sınıfının içinde gizlidir.',
   'Aynı şekilde `mc.saldir(dusman)` çağrısı yapan kod, saldırı puanının rastgele hesaplanmasını, kritik vuruşu ve düşmanın `savun()` ile savunmasını bilmez; bunlar `Karakter` sınıfının içinde kalır.'],
  '''class Karakter {
    private int can = 100;
    private int savun() { return 20; }               // ayrıntı gizli
    public void saldir(Karakter dusman) {            // kullanıcı sadece bunu bilir
        int hasar = 50 - dusman.savun();
        dusman.can -= hasar;
        System.out.println(hasar + " hasar verildi");
    }
    public int getCan() { return can; }
}
class Oyun {
    public void baslat() {
        Karakter mc = new Karakter(), dusman = new Karakter();
        mc.saldir(dusman);
        System.out.println("Dusman can: " + dusman.getCan());
    }
}
public class Main {
    public static void main(String[] args) {
        new Oyun().baslat();
    }
}''', '30 hasar verildi\nDusman can: 70')

# ---------------------------------------------------------------- 4 Çok biçimlilik
q(4, 'pol1', 'Çok biçimlilik (polymorphism) nedir? `Hayvan h = new Kedi();` ifadesini ve `ArrayList<Hayvan>` kullanımını açıklayarak örnek veriniz.',
  [('Aynı referans/çağrının farklı nesnelerde farklı davranması', ['farkli davran', 'farkli bicim', 'cok bicim', 'farkli sekil', 'farkli calis'], 3),
   ('Üst sınıf referansı alt sınıf nesnesini tutar', ['ust sinif', 'ust tip', 'referans', 'alt sinif nesne'], 2),
   ('Override ile birlikte çalışır', ['override', 'ezme', 'ezer'], 2),
   ('ArrayList ile farklı alt sınıflar tek listede', ['arraylist', 'liste', 'list'], 1),
   ('Örnek kod', ['new kedi', 'hayvan h', 'for', 'class'], 2)],
  ['**Çok biçimlilik**, aynı tipteki bir referansın ya da aynı metot çağrısının **farklı nesnelerde farklı davranmasıdır**.',
   '`Hayvan h = new Kedi();` ifadesinde referans **üst sınıf** (Hayvan) tipinde, nesne **alt sınıf** (Kedi) tipindedir. `h.kos()` çağrılınca Kedi\'nin **override** ettiği metot çalışır. Tersi (`Kedi k = new Hayvan();`) olmaz.',
   '`ArrayList<Hayvan>` içine Kedi, Köpek gibi farklı alt sınıflar konabilir; döngüde hepsine aynı `sesCikar()` çağrılır, her biri kendi sesini çıkarır. Hocanın oyununda `ArrayList<Karakter>` içine Vampir, Elf, Ejderha konup `bilgiGoster()` çağrılıyordu.'],
  '''import java.util.ArrayList;

abstract class Hayvan {
    public abstract void sesCikar();
}
class Kedi extends Hayvan {
    @Override public void sesCikar() { System.out.println("Miyav"); }
}
class Kopek extends Hayvan {
    @Override public void sesCikar() { System.out.println("Hav"); }
}
public class Main {
    public static void main(String[] args) {
        Hayvan h = new Kedi();
        h.sesCikar();
        ArrayList<Hayvan> liste = new ArrayList<>();
        liste.add(new Kopek());
        liste.add(new Kedi());
        for (Hayvan x : liste) x.sesCikar();
    }
}''', 'Miyav\nHav\nMiyav')

q(4, 'pol2', '`Insan insan2 = new Musteri("Veli");` satırından sonra `insan2.bakiyeGoster();` neden çağrılamaz? Çok biçimlilikte referans tipi ile nesne tipinin rolünü açıklayınız.',
  [('Çağrılabilecek metotlar referans tipine göre belirlenir', ['referans tip', 'referansin tip', 'degiskenin tip', 'insan tipinde', 'insan sinifinda yok'], 3),
   ('Çalışacak sürüm nesnenin gerçek tipine göre', ['nesnenin tip', 'gercek tip', 'calisma zaman', 'musteri nesne'], 3),
   ('bakiyeGoster Insan sınıfında yok', ['bakiyegoster', 'insanda yok', 'insan sinifinda', 'tanimli degil'], 2),
   ('Çözüm: Musteri tipinde referans (ya da cast)', ['musteri m', 'cast', 'donustur', 'musteri tipinde'], 1),
   ('Örnek', ['class', 'new musteri', 'bilgigoster'], 1)],
  ['Çok biçimlilikte **hangi metotların çağrılabileceğine referansın tipi** karar verir (derleme zamanı). `insan2`\'nin tipi `Insan`\'dır ve `Insan` sınıfında `bakiyeGoster()` **tanımlı değildir**; bu yüzden derleyici hata verir (hocanın notu: "çağıramazsınız!").',
   '**Hangi sürümün çalışacağına ise nesnenin gerçek tipi** karar verir (çalışma zamanı). `insan2.bilgiGoster()` çağrılabilir ve Musteri\'nin override ettiği sürüm çalışır.',
   'Çözüm: `Musteri m = new Musteri("Ayse"); m.bakiyeGoster();` ya da `((Musteri) insan2).bakiyeGoster();` (tip dönüşümü).'],
  '''class Insan {
    public void bilgiGoster() { System.out.println("Insan"); }
}
class Musteri extends Insan {
    @Override public void bilgiGoster() { System.out.println("Musteri"); }
    public void bakiyeGoster() { System.out.println("500 TL"); }
}
public class Main {
    public static void main(String[] args) {
        Insan insan2 = new Musteri();
        insan2.bilgiGoster();             // Musteri sürümü çalışır
        // insan2.bakiyeGoster();         derleme hatası
        Musteri m = new Musteri();
        m.bakiyeGoster();
    }
}''', 'Musteri\n500 TL')

q(4, 'pol3', 'Çok biçimliliğin iki türünü (derleme zamanı ve çalışma zamanı) birer örnekle açıklayınız.',
  [('Derleme zamanı = overloading (aşırı yükleme)', ['overload', 'asiri yukle', 'farkli parametre'], 3),
   ('Çalışma zamanı = overriding (ezme)', ['override', 'ezme', 'ezer'], 3),
   ('statik / dinamik bağlama', ['statik', 'dinamik', 'derleme', 'calisma zaman', 'compile', 'runtime'], 2),
   ('Örnekler', ['hayvan(', 'kos', 'class', 'new'], 2)],
  ['**Derleme zamanı (statik) çok biçimlilik:** **aşırı yükleme (overloading)**. Aynı adlı metotlardan hangisinin çağrılacağı derleyici tarafından **parametrelere** bakılarak seçilir. Örnek: `topla(int, int)` ve `topla(double, double)` ya da `Hayvan()` / `Hayvan(int konum)`.',
   '**Çalışma zamanı (dinamik) çok biçimlilik:** **ezme (overriding)** + üst sınıf referansı. `Hayvan h = new Tavsan(); h.kos();` satırında hangi `kos()`\'un çalışacağı program çalışırken **nesnenin tipine** bakılarak belirlenir.'],
  '''class Hesap {
    int topla(int a, int b) { return a + b; }              // overloading
    double topla(double a, double b) { return a + b; }
}
class Hayvan { void kos() { System.out.println("Hayvan kosuyor"); } }
class Tavsan extends Hayvan {
    @Override void kos() { System.out.println("Tavsan zipliyor"); }   // overriding
}
public class Main {
    public static void main(String[] args) {
        Hesap h = new Hesap();
        System.out.println(h.topla(2, 3) + " " + h.topla(2.5, 1.5));
        Hayvan x = new Tavsan();
        x.kos();
    }
}''', '5 4.0\nTavsan zipliyor')

# ---------------------------------------------------------------- 5 Soyut sınıf
q(5, 'abs1', 'Soyut sınıf (abstract class) nedir? Özelliklerini maddeler hâlinde yazıp bir örnek veriniz.',
  [('Nesne üretilemez', ['nesne uretil', 'new ile olusturul', 'nesnesi olusturul', 'orneklen', 'nesne yok'], 2),
   ('Referans olabilir', ['referans'], 1),
   ('extends ile kullanılır, tek üst sınıf', ['extends', 'bir tane', 'tek ', 'en fazla bir'], 1.5),
   ('Soyut (gövdesiz) metot içerebilir, alt sınıf yazmak zorunda', ['soyut metot', 'abstract void', 'govdesiz', 'zorunda', 'zorunlu'], 2),
   ('Normal metot / private alan (kapsülleme) olabilir', ['normal metot', 'private', 'kapsulleme', 'govdeli'], 1),
   ('Constructor (yapıcı) vardır', ['constructor', 'yapici'], 1),
   ('Örnek kod', ['abstract class', 'class', 'extends'], 1.5)],
  ['**Soyut sınıf**, kendisinden **nesne üretilmeyen**, başka sınıflara üst sınıf (şablon) olmak için yazılan sınıftır: `public abstract class Hayvan`.',
   '• Nesne üretilmez (`new Hayvan()` hata) ama **referans olabilir** (`Hayvan h = new Kedi()`). • `extends` ile kullanılır; bir sınıfın **en fazla bir** üst sınıfı olur. • **Soyut metot** (gövdesiz, `public abstract void kos();`) içerebilir; alt sınıf bunu yazmak **zorundadır**. • Normal (gövdeli) metotlar da olabilir. • **Kapsülleme** kullanılabilir (private alanlar). • **Constructor vardır**, alt sınıf `super(...)` ile çağırır.'],
  '''abstract class Hayvan {
    private String isim;
    public Hayvan(String isim) { this.isim = isim; }
    public void bilgiGoster() { System.out.println("Isim : " + isim); }
    public abstract void kos();
}
class Kedi extends Hayvan {
    public Kedi(String isim) { super(isim); }
    @Override public void kos() { System.out.println("Kedi kosuyor!"); }
}
public class Main {
    public static void main(String[] args) {
        Hayvan h = new Kedi("Tekir");
        h.bilgiGoster();
        h.kos();
    }
}''', 'Isim : Tekir\nKedi kosuyor!')

q(5, 'abs2', 'Bir sınıfı neden `abstract` yaparız? Soyut metot nedir, alt sınıf soyut metodu yazmazsa ne olur? Örnekle açıklayınız.',
  [('Sadece şablon/üst sınıf olsun, kendisinden nesne üretilmesin diye', ['nesne uretil', 'sablon', 'ust sinif', 'genel', 'anlamsiz'], 2),
   ('Ortak kodu/alanı tek yerde toplamak', ['ortak', 'tekrar'], 1),
   ('Soyut metot: gövdesiz, sadece imza', ['govdesiz', 'govdesi yok', 'imza', 'noktali virgul', 'suslu parantez'], 2),
   ('Alt sınıf yazmazsa derleme hatası (ya da o da abstract olmalı)', ['derleme hata', 'hata ver', 'abstract olmali', 'abstract olmak zorunda', 'zorunda'], 3),
   ('Örnek', ['abstract', 'class', 'kos', 'extends'], 2)],
  ['"Hayvan" genel bir kavramdır; tek başına bir hayvan nesnesi anlamsızdır, her zaman bir Kedi ya da Tavşan vardır. Bu yüzden `Hayvan` **abstract** yapılır: kendisinden nesne üretilmez, alt sınıflara **ortak alan ve kodu** (isim, `bilgiGoster()`) sağlayan bir şablon olur.',
   '**Soyut metot**, gövdesi olmayan, sadece imzası yazılan metottur: `public abstract void kos();` (süslü parantez yok, noktalı virgülle biter). "Her hayvan koşar ama nasıl koşacağı türüne göre değişir" demektir.',
   'Alt sınıf soyut metodu **yazmazsa derleme hatası** alınır; ya metodu yazmalı ya da kendisi de `abstract` olmalıdır.'],
  '''abstract class Hayvan {
    public abstract void kos();
    public void uyu() { System.out.println("Zzz"); }
}
class Tavsan extends Hayvan {
    @Override public void kos() { System.out.println("Tavsan zipliyor"); }
}
// class Kaplumbaga extends Hayvan { }   → hata: kos() yazılmadı
public class Main {
    public static void main(String[] args) {
        Hayvan h = new Tavsan();
        h.kos();
        h.uyu();
    }
}''', 'Tavsan zipliyor\nZzz')

q(5, 'abs3', 'Hocanın oyun projesindeki `Karakter` sınıfı soyut sınıf olarak tasarlansaydı neler değişirdi? Soyut sınıfın özelliklerini bu örnek üzerinden anlatınız.',
  [('new Karakter() yazılamaz, sadece alt sınıflar', ['nesne uretil', 'new karakter', 'olusturul'], 2),
   ('Karakter referansı / ArrayList<Karakter> yine kullanılır', ['referans', 'arraylist', 'liste'], 2),
   ('Ortak alanlar ve saldir() gibi metotlar kalır', ['ortak', 'saldir', 'can', 'normal metot'], 2),
   ('bilgiGoster gibi bir metot abstract olup her karakter kendi yazar', ['abstract', 'soyut metot', 'zorunda'], 2),
   ('Yapıcı kalır, super(...) ile çağrılır', ['super', 'constructor', 'yapici'], 2)],
  ['`public abstract class Karakter` yazılsaydı **`new Karakter(...)` yazılamazdı**; oyunda zaten hep Vampir, Elf gibi alt sınıflar kullanılıyor, bu yüzden mantıklı bir tasarım olurdu.',
   '`Karakter mc = new AnaKarakter();` ve `ArrayList<Karakter>` **referans** olarak aynen kullanılmaya devam ederdi.',
   'Ortak alanlar (private can, saldiriGucu) ve `saldir()` gibi **normal metotlar** kalırdı. Her karakterin ASCII resmi farklı olduğu için örneğin `public abstract void resimCiz();` soyut metodu eklenip her alt sınıf **yazmak zorunda** kalırdı.',
   'Yapıcı kalır: `Vampir()` yine `super(100, 60, 20, 20)` ile Karakter\'in yapıcısını çağırır.'],
  '''abstract class Karakter {
    private int can;
    public Karakter(int can) { this.can = can; }
    public abstract void resimCiz();
    public void bilgiGoster() {
        resimCiz();
        System.out.println("Can : " + can);
    }
}
class Vampir extends Karakter {
    public Vampir() { super(100); }
    @Override public void resimCiz() { System.out.println("( o  o )"); }
}
public class Main {
    public static void main(String[] args) {
        Karakter mc = new Vampir();
        mc.bilgiGoster();
    }
}''', '( o  o )\nCan : 100')

# ---------------------------------------------------------------- 6 Arayüz
q(6, 'ara1', 'Arayüz (interface) nedir? Özelliklerini maddeler hâlinde yazıp `Kedi extends Hayvan implements ...` biçiminde bir örnek veriniz.',
  [('Sınıfın ne yapabileceğini belirten sözleşme / yetenek', ['sozlesme', 'yetenek', 'ne yapabilece', 'davranis'], 1.5),
   ('implements ile kullanılır', ['implements'], 1.5),
   ('Bir sınıf birden çok arayüz uygulayabilir', ['birden fazla', 'birden cok', 'sinirsiz', 'coklu'], 1.5),
   ('Nesne üretilmez, constructor yok', ['nesne', 'constructor', 'yapici'], 1),
   ('Metotlar soyut (default/private hariç)', ['soyut', 'govdesiz', 'abstract', 'default'], 1.5),
   ('Alanlar sabit (final), her şey public', ['sabit', 'final', 'public'], 1),
   ('Örnek: extends + implements', ['extends', 'interface', 'class kedi'], 2)],
  ['**Arayüz**, bir sınıfın **ne yapabileceğini** belirten bir sözleşmedir (yetenek listesi): `public interface YemekYiyebilir`. Sınıflar arayüzü `implements` ile uygular ve içindeki metotları yazmak zorundadır.',
   '• Nesne üretilmez, ama **referans olabilir**. • `implements` ile kullanılır; bir sınıf **sınırsız sayıda** arayüz uygulayabilir. • Tüm metotları **soyuttur**; Java 8\'den sonra `default`, Java 9\'dan sonra `private` gövdeli metot yazılabilir. • Her şey **public**. • Özellikler **sabittir** (`public static final`). • **Constructor yoktur**.',
   'Tahtadaki örnek: `class Kedi extends Hayvan implements Kosabilir, SesCikarabilir, Surunebilir`: tek üst sınıf, üç arayüz.'],
  '''interface Kosabilir { void kos(); }
interface SesCikarabilir { void sesCikar(); }
abstract class Hayvan {
    public void uyu() { System.out.println("Zzz"); }
}
class Kedi extends Hayvan implements Kosabilir, SesCikarabilir {
    @Override public void kos() { System.out.println("Kedi kosuyor"); }
    @Override public void sesCikar() { System.out.println("Miyav"); }
}
public class Main {
    public static void main(String[] args) {
        Kedi k = new Kedi();
        k.kos();
        k.sesCikar();
        k.uyu();
        SesCikarabilir s = k;                 // arayüz tipinde referans
        s.sesCikar();
    }
}''', 'Kedi kosuyor\nMiyav\nZzz\nMiyav')

q(6, 'ara2', 'Java\'da bir sınıf neden birden fazla sınıftan kalıtım alamaz, birden fazla yeteneği nasıl kazanır? Arayüzlerle açıklayıp örnek veriniz.',
  [('Java tek kalıtımı destekler (extends bir sınıf)', ['tek kalitim', 'bir sinif', 'tek bir', 'en fazla bir', 'tek ust'], 3),
   ('Çoklu yetenek arayüzlerle (implements A, B)', ['implements', 'arayuz', 'interface'], 3),
   ('Virgülle birden çok arayüz', ['virgul', 'birden fazla', 'birden cok', 'sinirsiz'], 2),
   ('Örnek', ['class', 'kedi', 'robot', 'kosabilir', 'yemekyiyebilir'], 2)],
  ['Java\'da `extends` ile **sadece bir** sınıftan kalıtım alınır (tek kalıtım). İki üst sınıfta aynı adlı metot olsaydı hangisinin kullanılacağı belirsiz olurdu.',
   'Birden fazla yetenek **arayüzlerle** kazanılır: `implements` sonrasına **virgülle** istenen sayıda arayüz yazılır. `Kedi extends Hayvan implements YemekYiyebilir, Uyuyabilir`. Farklı türden sınıflar da aynı arayüzü uygulayabilir: hem `Kedi` hem `Robot` `Kosabilir` olabilir.'],
  '''interface Kosabilir { void kos(); }
interface Uyuyabilir { void uyu(); }
class Kedi implements Kosabilir, Uyuyabilir {
    public void kos() { System.out.println("Kedi kosuyor"); }
    public void uyu() { System.out.println("Kedi uyuyor"); }
}
class Robot implements Kosabilir {
    public void kos() { System.out.println("Robot kosuyor"); }
}
public class Main {
    public static void main(String[] args) {
        Kosabilir[] liste = { new Kedi(), new Robot() };
        for (Kosabilir k : liste) k.kos();
    }
}''', 'Kedi kosuyor\nRobot kosuyor')

q(6, 'ara3', 'Arayüzde tanımlanan bir değişkenin ve `default` metodun özelliklerini açıklayınız. `YemekYiyebilir` arayüzü üzerinden örnek veriniz.',
  [('Değişkenler sabittir: public static final, değiştirilemez', ['sabit', 'final', 'degistirilemez', 'static'], 3),
   ('Arayüz metotları varsayılan olarak public abstract', ['public abstract', 'soyut', 'govdesiz'], 2),
   ('default metot gövdelidir, sınıf yazmak zorunda değildir', ['default', 'govdeli', 'zorunda degil'], 2),
   ('private metot sadece default metotlar içinde kullanılır', ['private'], 1),
   ('Örnek', ['yemekyiyebilir', 'interface', 'yas', 'renk'], 2)],
  ['Arayüzdeki değişkenler otomatik olarak `public static final`\'dır, yani **sabittir**: `int YAS = 5;` yazılınca sonradan değiştirilemez (`YemekYiyebilir.YAS = 10;` hata). Sınıf adıyla erişilir.',
   'Metotlar yazılmasa da `public abstract`\'tır. **`default` metot** ise gövdelidir; uygulayan sınıf isterse ezer, istemezse hazır sürümü kullanır. **`private` metot** sadece arayüzün içindeki default metotlarda yardımcı olarak kullanılır.'],
  '''interface YemekYiyebilir {
    int YAS = 5;                  // public static final
    String RENK = "Beyaz";
    void cigneme();               // public abstract
    private void yardimci() { System.out.println("Private metot kullanildi"); }
    default void istisna() {
        System.out.println("Bu bir default metot");
        yardimci();
    }
}
class Kedi implements YemekYiyebilir {
    public void cigneme() { System.out.println("Kedi cigniyor"); }
}
public class Main {
    public static void main(String[] args) {
        YemekYiyebilir y = new Kedi();
        y.cigneme();
        y.istisna();
        System.out.println(YemekYiyebilir.YAS + " " + YemekYiyebilir.RENK);
    }
}''', 'Kedi cigniyor\nBu bir default metot\nPrivate metot kullanildi\n5 Beyaz')

# ---------------------------------------------------------------- 7 Karşılaştırma ve UML
q(7, 'kar1', 'Soyut sınıf ile arayüz arasındaki farkları en az beş madde hâlinde yazınız. Hangi durumda hangisini seçersiniz?',
  [('extends – implements', ['extends', 'implements'], 2),
   ('Tek üst sınıf – sınırsız arayüz', ['bir tane', 'tek', 'birden fazla', 'sinirsiz', 'birden cok'], 2),
   ('Constructor var – yok', ['constructor', 'yapici'], 1.5),
   ('Normal metot/alan serbest – alanlar sabit, metotlar soyut', ['sabit', 'final', 'normal metot', 'soyut'], 1.5),
   ('Erişim: arayüzde her şey public; soyut sınıfta private/protected olabilir', ['public', 'private', 'protected', 'kapsulleme'], 1),
   ('Seçim: ortak kod/alan → soyut sınıf, ortak yetenek → arayüz', ['ortak', 'yetenek', 'is a', 'can do'], 2)],
  ['• Soyut sınıf `extends`, arayüz `implements` ile kullanılır. • Bir sınıfın **en fazla bir** üst sınıfı olur ama **sınırsız** arayüz uygulayabilir. • Soyut sınıfta **constructor vardır**, arayüzde **yoktur**. • Soyut sınıf soyut ve normal metot ile her türlü alanı içerebilir; arayüzde metotlar soyuttur (default/private hariç), alanlar **sabittir** (final). • Arayüzde **her şey public**tir; soyut sınıfta private/protected kullanılır (kapsülleme). • Ortak nokta: ikisinden de **nesne üretilmez**, ikisi de **referans** olabilir.',
   '**Seçim:** alt sınıflar **ortak alan ve kod** paylaşıyorsa ("is-a": Kedi bir Hayvandır) soyut sınıf; farklı türden sınıflara **ortak bir yetenek** kazandırılacaksa ("can-do": Kedi de Robot da koşabilir) arayüz.'],
  '''interface Kosabilir { void kos(); }
abstract class Hayvan {
    private String isim;
    public Hayvan(String isim) { this.isim = isim; }
    public String getIsim() { return isim; }
}
class Kedi extends Hayvan implements Kosabilir {
    public Kedi(String isim) { super(isim); }
    public void kos() { System.out.println(getIsim() + " kosuyor"); }
}
public class Main {
    public static void main(String[] args) {
        Kosabilir k = new Kedi("Tekir");
        k.kos();
    }
}''', 'Tekir kosuyor')

q(7, 'uml1', 'UML sınıf diyagramı nedir? Bir sınıf kutusunun bölümlerini ve sınıflar arası ilişki türlerini (kalıtım, gerçekleşme, bağlantı, aggregation, composition) örnekle açıklayınız.',
  [('UML: tasarımı görselleştiren modelleme dili', ['modelleme', 'gorsellestir', 'tasarim', 'diyagram'], 1.5),
   ('Kutu: ad / özellikler / metotlar; + − #', ['ozellik', 'metot', 'erisim', 'arti', 'eksi'], 1.5),
   ('Kalıtım: düz çizgi + boş üçgen', ['ucgen', 'duz cizgi', 'kalitim', 'generalization'], 2),
   ('Gerçekleşme: kesikli çizgi (implements)', ['kesikli', 'realization', 'gerceklesme', 'implements'], 1.5),
   ('Bağlantı (has-a) ve çokluk', ['has a', 'association', 'baglanti', 'sahip', '0..*', '1..*', 'cokluk'], 1.5),
   ('Aggregation (boş elmas) / composition (dolu elmas)', ['aggregation', 'composition', 'elmas', 'tekerlek', 'kalp'], 2)],
  ['**UML**, yazılım tasarımını görselleştiren genel amaçlı bir **modelleme dilidir** (programlama dili değildir). **Sınıf diyagramı** sınıfları ve aralarındaki ilişkileri gösterir.',
   '**Sınıf kutusu** üç bölümdür: en üstte **ad** (soyutsa italik ya da «abstract», arayüzse «interface»), ortada **özellikler** (`- isim : String`), altta **metotlar** (`+ kos() : void`). `+` public, `-` private, `#` protected.',
   '**İlişkiler:** • **Kalıtım (generalization):** alt sınıftan üst sınıfa **düz çizgi + içi boş üçgen**, "is-a" (Tavsan → Hayvan). • **Gerçekleşme (realization):** sınıftan arayüze **kesikli çizgi + boş üçgen** (Kedi ⇢ YemekYiyebilir). • **Bağlantı (association):** "has-a", düz ok, uçlarda çokluk (1, 0..*, 1..*): Karakter → Random. • **Aggregation:** zayıf parça, **boş elmas**: araba–tekerlek (araba yok olsa tekerlek kalır). • **Composition:** güçlü parça, **dolu elmas**: insan–kalp (insan yok olunca kalp de yok olur).'],
  '''import java.util.Random;

class Karakter {                      // Karakter ──> Random  (association, has-a)
    private Random r = new Random();
    public int zar() { return r.nextInt(1, 7); }
}
public class Main {
    public static void main(String[] args) {
        int z = new Karakter().zar();
        System.out.println(z >= 1 && z <= 6);
    }
}''', 'true')

q(7, 'kedi1', 'Tahtadaki `Kedi extends Hayvan implements Kosabilir, SesCikarabilir, Surunebilir` tanımını açıklayınız. Bu satırda hangi nesne tabanlı kavramlar kullanılmıştır? Java kodu ve UML ilişkileriyle gösteriniz.',
  [('extends: Hayvan\'dan kalıtım (tek üst sınıf)', ['extends', 'kalitim', 'miras', 'ust sinif'], 2),
   ('implements: üç arayüz, birden çok olabilir', ['implements', 'arayuz', 'interface', 'birden'], 2),
   ('Kedi arayüz metotlarını yazmak zorunda (override)', ['zorunda', 'override', 'yazmak', 'metotlarini'], 2),
   ('Çok biçimlilik: Hayvan / Kosabilir referansı Kedi tutar', ['cok bicim', 'polymorph', 'referans', 'hayvan h'], 2),
   ('UML: düz çizgi + boş üçgen ve kesikli çizgi', ['kesikli', 'ucgen', 'uml'], 2)],
  ['`Kedi extends Hayvan`: Kedi, Hayvan sınıfından **kalıtım** alır (tek üst sınıf; Hayvan soyut sınıf da olabilir). `implements Kosabilir, SesCikarabilir, Surunebilir`: Kedi bu **üç arayüzü** uygular; bir sınıf birden çok arayüz uygulayabildiği için virgülle yazılır. Önce `extends`, sonra `implements` gelir.',
   'Kedi, arayüzlerdeki soyut metotları (`kos()`, `sesCikar()`, `surun()`) **yazmak zorundadır** (`@Override`). **Çok biçimlilik:** `Hayvan h = new Kedi();` ve `SesCikarabilir s = new Kedi();` geçerlidir.',
   '**UML:** Kedi\'den Hayvan\'a **düz çizgi + boş üçgen** (kalıtım), Kedi\'den her arayüze **kesikli çizgi + boş üçgen** (gerçekleşme). Arayüz kutularının üstünde «interface» yazar.'],
  '''interface Kosabilir { void kos(); }
interface SesCikarabilir { void sesCikar(); }
interface Surunebilir { void surun(); }
abstract class Hayvan {
    public abstract void ye();
}
class Kedi extends Hayvan implements Kosabilir, SesCikarabilir, Surunebilir {
    public void ye() { System.out.println("Kedi mama yiyor"); }
    public void kos() { System.out.println("Kedi kosuyor"); }
    public void sesCikar() { System.out.println("Miyav"); }
    public void surun() { System.out.println("Kedi sürünüyor"); }
}
public class Main {
    public static void main(String[] args) {
        Hayvan h = new Kedi();
        h.ye();
        SesCikarabilir s = new Kedi();
        s.sesCikar();
    }
}''', 'Kedi mama yiyor\nMiyav')

DENEMELER = [
    {'id': 'y1', 'title': 'Yazılı deneme 1', 'ids': ['kal1', 'kap1', 'soy1', 'pol1', 'abs1', 'ara1', 'kar1']},
    {'id': 'y2', 'title': 'Yazılı deneme 2', 'ids': ['kal2', 'kap2', 'soy2', 'pol2', 'abs2', 'ara2', 'uml1']},
    {'id': 'y3', 'title': 'Yazılı deneme 3', 'ids': ['kal3', 'kap3', 'soy3', 'pol3', 'abs3', 'ara3', 'kedi1']},
]
