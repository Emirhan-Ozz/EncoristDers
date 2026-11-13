"""MBP205 test soruları. java= tam program: çalıştırılır, çıktı (satırlar ' / ' ile) doğru şıkla aynı olmalı;
'DERLEME' beklenirse program derlenmemeli. Şıklar build sırasında karıştırılır (a = doğru şıkkın ilk konumu)."""
import random, textwrap
Q, TAHTA = [], []
CUR = {'t': None}
def topic(t): CUR['t'] = t
def dd(s): return textwrap.dedent(s).strip('\n')

def mc(q, opts, a, exp, code=None, java=None, why=None, fixed=False, to=None, kind=None):
    d = {'type': 'mc', 'topic': CUR['t'], 'q': q, 'opts': list(opts), 'a': a, 'exp': exp}
    if code: d['code'] = dd(code)
    if why: d['why'] = why
    d['chk'] = {'java': dd(java) if java else None, 'fixed': fixed, 'kind': kind}
    (to if to is not None else Q).append(d if to is not None else (CUR['t'], d))
    return d

def fill(q, code, ans, exp, java=None, whyFill=None, cs=True):
    d = {'type': 'fill', 'topic': CUR['t'], 'q': q, 'code': dd(code), 'ans': list(ans), 'cs': cs, 'exp': exp}
    if whyFill: d['whyFill'] = whyFill
    d['chk'] = {'java': dd(java) if java else None}
    Q.append((CUR['t'], d))

def code(title, q, src, blanks, exps, expect=None, java_tail='', note=None):
    d = {'type': 'code', 'topic': CUR['t'], 'title': title, 'q': q, 'code': dd(src), 'blanks': [list(b) for b in blanks], 'exps': exps}
    if expect: d['expect'] = expect
    if note: d['note'] = note
    d['chk'] = {'tail': dd(java_tail)}
    Q.append((CUR['t'], d))

def tahta(q, opts, a, exp, topic, code=None, java=None, fixed=False, kind='nocompile'):
    d = {'type': 'mc', 'topic': topic, 'q': q, 'opts': list(opts), 'a': a, 'exp': exp, 'src': 'Tahta'}
    if code: d['code'] = dd(code)
    d['chk'] = {'java': dd(java) if java else None, 'fixed': fixed, 'kind': kind}
    TAHTA.append(d)

def verify(d, run):
    e, c = [], d['chk']
    if d['type'] == 'mc':
        if len(set(d['opts'])) != len(d['opts']): e.append('tekrarlı şık')
        if c.get('java'):
            st, out = run(c['java'])
            want = d['opts'][d['a']]
            kind = c.get('kind') or ('nocompile' if want.startswith('Derleme hatası') else None)
            if kind == 'compile':
                if st != 'OK': e.append('derlenmeli ama %s %s' % (st, out))
            elif kind == 'nocompile':
                if st != 'DERLEME': e.append('derlenmemeli ama %s: %r' % (st, out))
            elif st != 'OK': e.append('%s %s' % (st, out))
            else:
                got = out.replace('\n', ' / ')
                if got != want: e.append('çıktı %r, doğru şık %r' % (got, want))
                if any(o == got for i, o in enumerate(d['opts']) if i != d['a']): e.append('yanlış şık da doğru')
    elif d['type'] == 'fill' and c.get('java'):
        st, out = run(c['java'].replace('____', d['ans'][0]))
        if st != 'OK': e.append('boşluk dolunca %s %s' % (st, out))
    elif d['type'] == 'code':
        src = d['code']
        for i, b in enumerate(d['blanks']): src = src.replace('{{%d}}' % (i + 1), b[0])
        st, out = run(src + ('\n' + c['tail'] if c['tail'] else ''))
        if st != 'OK': e.append('kod %s %s' % (st, out))
        elif d.get('expect') and out.replace('\n', ' / ') != d['expect']: e.append('kod çıktısı %r ≠ %r' % (out, d['expect']))
    return e

def shuffled(d, seed):
    if d['type'] != 'mc' or d['chk'].get('fixed'): return d
    r = random.Random(seed); idx = list(range(len(d['opts']))); r.shuffle(idx)
    d = dict(d); d['opts'] = [d['opts'][i] for i in idx]
    if 'why' in d: d['why'] = {str(idx.index(int(k))): v for k, v in d['why'].items()}
    d['a'] = idx.index(d['a'])
    return d

M = lambda body: 'public class Main {\n    public static void main(String[] args) {\n' + textwrap.indent(dd(body), '        ') + '\n    }\n}'

# =================================================================== TAHTA (birebir maddeler)
tahta('Soyut sınıftan (`abstract class`) `new` ile nesne üretilebilir mi?', ['Hayır, nesne üretilmez', 'Evet, her sınıf gibi', 'Sadece parametresiz yapıcıyla', 'Sadece aynı paketten'], 0,
      'Tahta: "Nesne üretilmez." `new Hayvan()` derleme hatası verir.', 'soyut',
      java='abstract class Hayvan { }\n' + M('Hayvan h = new Hayvan();'))
tahta('Soyut sınıf tipinde bir **referans** tanımlanabilir mi? `Hayvan h = new Kedi();`', ['Evet, referans olabilir', 'Hayır, soyut sınıf tip olarak kullanılamaz', 'Sadece arayüzlerde olur', 'Sadece static ise'], 0,
      'Tahta: "Referans olabilir." Referans soyut sınıf tipinde, nesne alt sınıftan.', 'soyut')
tahta('Soyut sınıf hangi anahtar kelimeyle kullanılır?', ['extends', 'implements', 'abstract new', 'uses'], 0, 'Tahta: "extends ile kullanılır."', 'soyut')
tahta('`extends`\'e bağlı olarak bir sınıfın en fazla kaç üst sınıfı olabilir?', ['Bir', 'İki', 'Sınırsız', 'Sıfır'], 0, 'Tahta: "max bir tane üst sınıfı olabilir." Java tek kalıtımı destekler.', 'soyut',
      java='class A { } class B { }\nclass C extends A, B { }\n' + M(''))
tahta('Soyut sınıf soyut metot içerebilir mi?', ['Evet', 'Hayır, sadece arayüzler içerir', 'Sadece static olarak', 'Sadece private olarak'], 0, 'Tahta: "Soyut metot içerebilir." Normal metot da içerebilir.', 'soyut')
tahta('Soyut sınıfta kapsülleme (private alanlar) kullanılabilir mi?', ['Evet', 'Hayır, her şey public olmalı', 'Sadece protected kullanılabilir', 'Sadece final alanlar olabilir'], 0,
      'Tahta: "Kapsülleme kullanılabilir." Her şeyin public olması arayüzün kuralıdır.', 'soyut')
tahta('Soyut sınıfın constructor\'ı (yapıcısı) var mıdır?', ['Vardır', 'Yoktur', 'Sadece arayüz uygularsa', 'Sadece static olursa'], 0,
      'Tahta: "Constructor var." Alt sınıf `super(...)` ile çağırır.', 'soyut',
      java='abstract class Hayvan { String isim; Hayvan(String i) { isim = i; } }\nclass Kedi extends Hayvan { Kedi() { super("Tekir"); } }\n' + M('System.out.println(new Kedi().isim);'), kind='compile')
tahta('Arayüzden (`interface`) nesne üretilebilir mi?', ['Hayır, nesne yok', 'Evet', 'Sadece default metot varsa', 'Sadece constructor yazılırsa'], 0, 'Tahta: "Nesne yok."', 'arayuz',
      java='interface Kosabilir { void kos(); }\n' + M('Kosabilir k = new Kosabilir();'))
tahta('Arayüz tipinde referans tanımlanabilir mi? `YemekYiyebilir y = new Kedi();`', ['Evet, referans var', 'Hayır', 'Sadece soyut sınıflarda olur', 'Sadece static metotlarda'], 0, 'Tahta: "Referans var."', 'arayuz')
tahta('Arayüz bir sınıfa hangi anahtar kelimeyle eklenir?', ['implements', 'extends', 'interface', 'abstract'], 0, 'Tahta: "implements ile kullanılır."', 'arayuz')
tahta('Bir sınıf kaç arayüz uygulayabilir?', ['Sınırsız', 'Bir', 'İki', 'Sadece üst sınıfı yoksa bir'], 0, 'Tahta: "Bir sınıfın sınırsız arayüzü olabilir." Virgülle yazılır.', 'arayuz')
tahta('Arayüzdeki metotlar için tahtadaki kural hangisidir?', ['Tüm metotlar soyuttur; private ve default metotlar gövdeli yazılabilir', 'Hepsi gövdeli olmak zorundadır', 'Hepsi private\'tır', 'Metot yazılamaz, sadece alan olur'], 0,
      'Tahta: "Tüm metotları soyuttur → private ve default normal metot yazılabilir."', 'arayuz')
tahta('Arayüzdeki üyelerin erişim düzeyi nedir?', ['Her şey public', 'Her şey private', 'Her şey protected', 'Paket düzeyi (default)'], 0, 'Tahta: "Herşey public."', 'arayuz')
tahta('Arayüzde tanımlanan özellikler (alanlar) nasıldır?', ['Sabittir (final), değiştirilemez', 'Her nesnede ayrı değer alır', 'Private\'tır', 'Sadece constructor\'da atanır'], 0,
      'Tahta: "Özellikler SABİT (final)." Otomatik public static final.', 'arayuz',
      java='interface A { int YAS = 5; }\n' + M('A.YAS = 10;'))
tahta('Arayüzün constructor\'ı var mıdır?', ['Yoktur', 'Vardır', 'Sadece default olarak', 'Sadece bir tane olabilir'], 0, 'Tahta: "Constructor yok."', 'arayuz',
      java='interface A { A() { } }\n' + M(''))
tahta('Tahtadaki `Kedi (extends Hayvan) implements Kosabilir, SesCikarabilir, Surunebilir` satırı neyi gösterir?',
      ['Kedi tek bir sınıftan kalıtım alıp üç arayüzü uygular', 'Kedi dört sınıftan kalıtım alır', 'Kedi bir arayüzdür', 'Hayvan, Kedi\'den kalıtım alır'], 0,
      'Önce extends (tek üst sınıf), sonra implements (birden çok arayüz, virgülle).', 'arayuz')
tahta('NTP\'nin dört temel kavramı hangileridir?', ['Kalıtım, kapsülleme, soyutlama, çok biçimlilik', 'Sınıf, nesne, metot, değişken', 'Kalıtım, arayüz, döngü, dizi', 'Public, private, protected, default'], 0,
      'Tahta: Kalıtım (Inheritance), Kapsülleme (Encapsulation), Soyutlama (Abstraction), Çok Biçimlilik (Polymorphism).', 'kalitim')
tahta('Tahtada kalıtımın altına yazılan kavram ve ok neyi anlatır?', ['override; UML\'de düz çizgi + içi boş üçgen', 'overload; kesikli çizgi', 'private; dolu elmas', 'interface; açık ok'], 0,
      'Kalıtımla gelen metot alt sınıfta override edilir; UML\'de kalıtım ▷ (boş üçgen) ile çizilir.', 'kalitim')
tahta('Tahtada kapsüllemenin altındaki `+ − #` simgeleri sırasıyla hangi erişim belirleyicileridir?', ['public, private, protected', 'private, public, protected', 'protected, private, public', 'public, protected, private'], 0,
      'UML: + public, − private, # protected.', 'kapsulleme', fixed=True)
tahta('Tahtadaki `Hayvan h = new Kedi();` ve `ArrayList<Hayvan> liste;` hangi kavramın örneğidir?', ['Çok biçimlilik (polymorphism)', 'Kapsülleme', 'Aşırı yükleme', 'Composition'], 0,
      'Üst sınıf referansı alt sınıf nesnesini tutar; listeye farklı alt sınıflar eklenir.', 'polimorfizm')
tahta('Tahtadaki kutuda bir sınıftan Random\'a çizilen ok ve altındaki `Random r = new Random();` neyi gösterir?', ['Association: sınıf bir Random nesnesine sahiptir (has-a)', 'Kalıtım: sınıf Random\'dan türer', 'Realization: Random bir arayüzdür', 'Composition: Random silinince sınıf da silinir'], 0,
      'Sınıfın içinde başka sınıf tipinde bir alan varsa bu bağlantıdır (has-a); ok sahip olandan sahip olunana çizilir.', 'uml')
tahta('Tahtada arayüz başlığının yanındaki `- - - -▷` oku UML\'de neyi gösterir?', ['Gerçekleşme (realization): sınıf arayüzü uygular', 'Kalıtım', 'Aggregation', 'Bağımlılık yok'], 0,
      'Kesikli çizgi + boş üçgen = implements.', 'uml')

# =================================================================== sinif
topic('sinif')
mc('Yapıcı (constructor) için hangisi doğrudur?', ['Sınıfla aynı adı taşır ve dönüş tipi yoktur', 'Her zaman void döndürür', 'Sadece static olabilir', 'Bir sınıfta en fazla bir tane olabilir', 'Elle çağrılması zorunludur'], 0,
   'Nesne oluşturulurken (new) çalışır; aşırı yüklenerek birden fazla yazılabilir.')
mc('Ekrana ne yazılır?', ['6 20', '0 20', '20 20', '6 6', 'Derleme hatası'], 0, 'Parametresiz yapıcı konumu 6 yapar, diğeri gelen değeri atar.',
   code='''class Hayvan {
    public int konum;
    public Hayvan() { konum = 6; }
    public Hayvan(int konum) { this.konum = konum; }
}
// main:
Hayvan a = new Hayvan();
Hayvan b = new Hayvan(20);
System.out.println(a.konum + " " + b.konum);''',
   java='class Hayvan { public int konum; public Hayvan() { konum = 6; } public Hayvan(int konum) { this.konum = konum; } }\n' + M('Hayvan a = new Hayvan();\nHayvan b = new Hayvan(20);\nSystem.out.println(a.konum + " " + b.konum);'))
mc('`this.konum = konum;` satırında `this` ne işe yarar?', ['Nesnenin alanını parametreden ayırır', 'Üst sınıfa erişir', 'Yeni nesne oluşturur', 'Metodu static yapar', 'Alanı sabit yapar'], 0,
   'Alan ve parametre aynı adlı olduğunda `this.konum` alanı gösterir.', why={1: 'Üst sınıfa erişen super\'dir.'})
mc('Aynı sınıfta aynı adlı ama parametre listesi farklı metotlar yazmaya ne denir?', ['Aşırı yükleme (overloading)', 'Ezme (overriding)', 'Kapsülleme', 'Kalıtım', 'Soyutlama'], 0,
   'Overloading: aynı ad, farklı parametre sayısı ya da tipi.', why={1: 'Overriding alt sınıfta aynı imzayla yeniden yazmaktır.'})
mc('Hiç yapıcı yazılmayan bir sınıf için hangisi doğrudur?', ['Java parametresiz varsayılan yapıcıyı kendisi ekler', 'Nesne oluşturulamaz', 'Derleme hatası verir', 'Sınıf otomatik abstract olur', 'Sadece static metotları çalışır'], 0, 'Varsayılan (default) yapıcı.')
mc('`public void Hayvan() { }` satırı `Hayvan` sınıfında ne olur?', ['Yapıcı değil, adı sınıfla aynı olan sıradan bir metot olur', 'Parametresiz yapıcı olur', 'Derleme hatası verir', 'Soyut metot olur', 'Statik yapıcı olur'], 0,
   'Yapıcının dönüş tipi yoktur; void yazılınca sıradan metot olur.')
mc('Hocanın yarış örneğindeki `public final int PIST_UZUNLUGU = 100;` için hangisi doğrudur?', ['final olduğu için değeri sonradan değiştirilemez', 'Her nesnede farklı değer alır', 'Private\'tır', 'Metot olduğu için çağrılır', 'Yapıcıdır'], 0, 'final = sabit.')
fill('Boşluğu doldurun: Tavsan sınıfından nesne oluşturulsun.', 'Tavsan t = ____ Tavsan();', ['new'], 'Nesne new ile üretilir.',
     java='class Tavsan { }\n' + M('Tavsan t = ____ Tavsan();'))
fill('Boşluğu doldurun: alan, aynı adlı parametreden ayrılsın.', 'public Hayvan(int konum) {\n    ____.konum = konum;\n}', ['this'], 'this o anki nesneyi gösterir.',
     java='class Hayvan { int konum; public Hayvan(int konum) { ____.konum = konum; } }\n' + M('System.out.println(new Hayvan(3).konum);'))

# =================================================================== kalitim
topic('kalitim')
mc('Ekrana ne yazılır?', ['Tavsan kosuyor / Tavsan zipladi!', 'Tavsan zipladi!', 'Hayvan kosuyor / Tavsan zipladi!', 'Tavsan zipladi! / Tavsan kosuyor', 'Derleme hatası'], 0,
   '`super.kos()` önce üst sınıfın metodunu çalıştırır; getClass().getName() nesnenin gerçek sınıf adını verir: Tavsan.',
   code='''class Hayvan {
    public void kos() {
        System.out.println(getClass().getName() + " kosuyor");
    }
}
class Tavsan extends Hayvan {
    @Override
    public void kos() {
        super.kos();
        System.out.println("Tavsan zipladi!");
    }
}
// main: new Tavsan().kos();''',
   java='class Hayvan { public void kos() { System.out.println(getClass().getName() + " kosuyor"); } }\nclass Tavsan extends Hayvan { @Override public void kos() { super.kos(); System.out.println("Tavsan zipladi!"); } }\n' + M('new Tavsan().kos();'),
   why={2: 'getClass().getName() nesnenin gerçek sınıfını verir; nesne Tavsan.'})
mc('`class Kaplumbaga extends Hayvan { }` için hangisi doğrudur? (Hayvan\'da `public int konum = 6;` ve `kos()` var)', ['Kaplumbaga, konum ve kos()\'u hiç yazmadan kullanabilir', 'Kaplumbaga\'nın hiç üyesi yoktur', 'Derleme hatası verir', 'Kaplumbaga, Hayvan\'ın yapıcısını miras alır', 'Kaplumbaga soyut sınıf olur'], 0,
   'Kalıtımla public üyeler gelir. Yapıcılar miras alınmaz.', why={3: 'Yapıcılar miras alınmaz; super(...) ile çağrılır.'})
mc('Java\'da bir sınıf kaç sınıfı `extends` edebilir?', ['En fazla bir', 'İki', 'Sınırsız', 'Hiç', 'Arayüz sayısı kadar'], 0, 'Tek kalıtım. Birden fazla yetenek arayüzlerle.')
mc('`super(100, 60, 20, 20);` satırı nerede ve ne için yazılır?', ['Alt sınıf yapıcısının ilk satırında, üst sınıfın yapıcısını çağırmak için', 'main içinde, nesne oluşturmak için', 'Üst sınıfta, alt sınıfı çağırmak için', 'Herhangi bir metodun son satırında', 'Arayüzde, sabit tanımlamak için'], 0,
   'Hocanın Vampir yapıcısı: Karakter\'in can, saldırı, savunma, kritik değerlerini verir.')
mc('`@Override` etiketinin görevi nedir?', ['Metodun üst sınıftaki bir metodu ezdiğini belirtir; imza yanlışsa derleyici hata verir', 'Metodu static yapar', 'Metodu private yapar', 'Yeni bir metot oluşturur', 'Kalıtımı engeller'], 0, '@Override yazım hatalarını derleme anında yakalar.')
mc('"is-a" ilişkisi hangi kavramı anlatır?', ['Kalıtım', 'Kapsülleme', 'Association (has-a)', 'Aşırı yükleme', 'Composition'], 0, '"Tavşan bir Hayvandır."', why={2: 'has-a sahiplik ilişkisidir.'})
mc('Üst sınıftaki `private int bakiye;` alanına alt sınıftan nasıl erişilir?', ['Üst sınıfın public getter/setter metotlarıyla', 'this.bakiye ile doğrudan', 'super.bakiye ile doğrudan', 'Erişilemez ve değeri kullanılamaz', 'static yaparak'], 0,
   'Hocanın Musteri sınıfı `this.bakiye += miktar` yerine getBakiye/setBakiye kullanıyor.')
mc('Kod derlenir mi?', ['Derleme hatası', 'Evet, 100 yazar', 'Evet, 0 yazar', 'Çalışma zamanında hata'], 0, 'private alan alt sınıftan doğrudan kullanılamaz.',
   code='class Insan { private int bakiye = 100; }\nclass Musteri extends Insan {\n    void yaz() { System.out.println(bakiye); }\n}',
   java='class Insan { private int bakiye = 100; }\nclass Musteri extends Insan { void yaz() { System.out.println(bakiye); } }\n' + M('new Musteri().yaz();'), fixed=True)
fill('Boşluğu doldurun: Vampir, Karakter\'den kalıtım alsın.', 'public class Vampir ____ Karakter { }', ['extends'], 'Kalıtım extends ile.',
     java='class Karakter { }\nclass Vampir ____ Karakter { }\n' + M(''), whyFill={'implements': 'implements arayüz içindir.'})
fill('Boşluğu doldurun: üst sınıftaki bilgiGoster() çalıştırılsın.', '@Override\npublic void bilgiGoster() {\n    System.out.println("( o  o )");\n    ____.bilgiGoster();\n}', ['super'], 'super üst sınıfa erişir.',
     java='class K { public void bilgiGoster() { System.out.println("Can"); } }\nclass V extends K { @Override public void bilgiGoster() { System.out.println("x"); ____.bilgiGoster(); } }\n' + M('new V().bilgiGoster();'))
code('Kalıtım ve override', 'Kaplumbaga, Hayvan\'dan kalıtım alsın ve kos() metodunu ezsin.',
     '''class Hayvan {
    public void kos() { System.out.println("Hayvan kosuyor"); }
}
class Kaplumbaga {{1}} Hayvan {
    {{2}}
    public void {{3}}() {
        {{4}}.kos();
        System.out.println("Kaplumbaga yavas yuruyor");
    }
}''', [['extends'], ['@Override'], ['kos'], ['super']],
     ['Kalıtım extends ile.', 'Ezme etiketi.', 'Aynı imza: kos().', 'Üst sınıfın sürümü super ile çağrılır.'],
     expect='Hayvan kosuyor / Kaplumbaga yavas yuruyor', java_tail=M('new Kaplumbaga().kos();'))

# =================================================================== kapsulleme
topic('kapsulleme')
mc('Kapsüllemenin temel fikri hangisidir?', ['Alanları private yapıp erişimi getter/setter ile kontrol etmek', 'Her şeyi public yapmak', 'Bir sınıfı birden fazla sınıftan türetmek', 'Aynı adlı metotlar yazmak', 'Nesne üretmeyi engellemek'], 0, 'Veri gizlenir, kontrollü erişim verilir.')
mc('Ekrana ne yazılır?', ['100 / 250', '-500 / 250', '100 / 100', '0 / 250', 'Derleme hatası'], 0, 'Setter negatif değeri reddediyor; bakiye 100 kalıyor, sonra 250.',
   code='''class Insan {
    private int bakiye = 100;
    public int getBakiye() { return bakiye; }
    public void setBakiye(int b) { if (b >= 0) bakiye = b; }
}
// main:
Insan m = new Insan();
m.setBakiye(-500);
System.out.println(m.getBakiye());
m.setBakiye(250);
System.out.println(m.getBakiye());''',
   java='class Insan { private int bakiye = 100; public int getBakiye() { return bakiye; } public void setBakiye(int b) { if (b >= 0) bakiye = b; } }\n' + M('Insan m = new Insan();\nm.setBakiye(-500);\nSystem.out.println(m.getBakiye());\nm.setBakiye(250);\nSystem.out.println(m.getBakiye());'))
mc('`m.bakiye = -500;` satırı (bakiye private) ne olur?', ['Derleme hatası', 'Bakiye -500 olur', 'Bakiye 0 olur', 'Çalışma zamanında uyarı'], 0, 'private alana sınıf dışından erişilemez.',
   java='class Insan { private int bakiye = 100; }\n' + M('Insan m = new Insan();\nm.bakiye = -500;'), fixed=True)
mc('`protected` üyeye kimler erişebilir?', ['Sınıfın kendisi, aynı paket ve alt sınıflar', 'Sadece sınıfın kendisi', 'Herkes', 'Sadece aynı paket', 'Sadece main metodu'], 0, 'UML\'de #.', why={1: 'Bu private.', 2: 'Bu public.', 3: 'Bu default (paket).'})
mc('UML\'de `- musteriNo : String` satırı ne anlatır?', ['private, String tipinde musteriNo alanı', 'public musteriNo metodu', 'protected alan', 'Silinmiş alan', 'Sabit alan'], 0, '− private, ardından ad ve tip.')
mc('Hocanın banka örneğinde `musteriNoOlustur()` metodunun private olmasının sebebi nedir?', ['Numarayı sadece sınıf kendi üretsin, dışarıdan çağrılıp değiştirilemesin', 'Alt sınıflar ezebilsin', 'Her yerden çağrılabilsin', 'static olsun', 'Soyut olsun'], 0, 'Müşteri numarası dışarıdan sadece getMusteriNo() ile okunur.')
mc('Setter\'ı olmayan ama getter\'ı olan bir private alan nasıldır?', ['Dışarıdan sadece okunabilir (salt okunur)', 'Dışarıdan sadece yazılabilir', 'Hiç kullanılamaz', 'public olur', 'Sabit (final) olur'], 0, 'musteriNo: getMusteriNo() var, setter yok.')
mc('Erişim belirleyici yazılmayan (default) bir alan nereden erişilir?', ['Aynı paketteki sınıflardan', 'Her yerden', 'Sadece sınıfın içinden', 'Sadece alt sınıflardan', 'Hiçbir yerden'], 0, 'Paket düzeyi erişim, UML\'de ~.')
fill('Boşluğu doldurun: bakiye dışarıdan doğrudan erişilemesin.', '____ int bakiye;', ['private'], 'Kapsülleme için private.',
     java='class Insan { ____ int bakiye; }\n' + M(''))
fill('Boşluğu doldurun: getter bakiyeyi döndürsün.', 'public int getBakiye() {\n    ____ bakiye;\n}', ['return'], 'Getter değeri return ile döndürür.',
     java='class Insan { private int bakiye = 5; public int getBakiye() { ____ bakiye; } }\n' + M('System.out.println(new Insan().getBakiye());'))
code('Getter ve setter', 'Banka hesabını kapsülleyin: alan private, setter negatif değeri reddetsin.',
     '''class Hesap {
    {{1}} int bakiye = 100;
    public int getBakiye() {
        {{2}} bakiye;
    }
    public void setBakiye(int bakiye) {
        if (bakiye >= 0) {
            {{3}}.bakiye = bakiye;
        }
    }
}''', [['private'], ['return'], ['this']],
     ['Alan dışarıya kapalı.', 'Getter değeri döndürür.', 'Alan ile parametre aynı adlı: this.'],
     expect='100 / 40', java_tail=M('Hesap h = new Hesap();\nh.setBakiye(-1);\nSystem.out.println(h.getBakiye());\nh.setBakiye(40);\nSystem.out.println(h.getBakiye());'))

# =================================================================== soyutlama
topic('soyutlama')
mc('Soyutlamanın tanımı hangisidir?', ['Nesnenin ne yaptığını gösterip nasıl yaptığını gizlemek', 'Alanları private yapmak', 'Aynı adlı metotlar yazmak', 'Bir sınıftan başka sınıf türetmek', 'Nesneleri listede tutmak'], 0,
   'Gereksiz ayrıntı gizlenir, sadece gerekli olan gösterilir.', why={1: 'Bu kapsüllemedir.'})
mc('Java\'da soyutlama hangi araçlarla yapılır?', ['abstract class ve interface', 'private ve public', 'for ve while', 'ArrayList ve Random', 'static ve final'], 0, 'Soyut sınıf kısmi, arayüz tam soyutlama sağlar.')
mc('Araba sürerken motorun nasıl çalıştığını bilmeden direksiyon, gaz ve frenle arabayı kullanmak hangi kavrama örnektir?', ['Soyutlama', 'Kalıtım', 'Aşırı yükleme', 'Composition', 'Çok biçimlilik'], 0, 'Klasik soyutlama örneği.')
mc('Hocanın banka örneğinde `Main` sadece `m.paraCek(50)` çağırıyor; bakiye kontrolü sınıfın içinde. Bu durum hangi kavramı gösterir?', ['Soyutlama', 'Kalıtım', 'Overloading', 'Realization', 'Reflexive association'], 0, 'Kullanıcı ne yapılacağını bilir, nasıl yapıldığını görmez.')
mc('Soyutlama ile kapsülleme için hangisi doğrudur?', ['Soyutlama karmaşıklığı gizler, kapsülleme veriyi korur', 'İkisi tamamen aynı şeydir', 'Kapsülleme abstract ile yapılır', 'Soyutlama sadece private ile yapılır', 'İkisi birlikte kullanılamaz'], 0, 'Banka örneğinde ikisi birlikte kullanılıyor.')
mc('Ekrana ne yazılır?', ['Yetersiz Bakiye! / 1050', '1050', '1100 / Yetersiz Bakiye!', '-3950', 'Yetersiz Bakiye! / 100'], 0, '100 − 50 + 1000 = 1050; 5000 çekilemez.',
   code='''// Musteri: bakiye 100'den başlar
m.paraCek(50);
m.paraEkle(1000);
m.paraCek(5000);
System.out.println(m.getBakiye());''',
   java='class Musteri { private int bakiye = 100; public void paraEkle(int m) { if (m > 0) bakiye += m; } public void paraCek(int m) { if (m <= bakiye) bakiye -= m; else System.out.println("Yetersiz Bakiye!"); } public int getBakiye() { return bakiye; } }\n' + M('Musteri m = new Musteri();\nm.paraCek(50);\nm.paraEkle(1000);\nm.paraCek(5000);\nSystem.out.println(m.getBakiye());'))
mc('`public abstract void kos();` satırı soyutlamayı nasıl sağlar?', ['"Her hayvan koşar" der, nasıl koşacağını alt sınıfa bırakır', 'kos() metodunu gizler', 'kos()\'u private yapar', 'kos()\'u çağırmayı yasaklar', 'kos()\'a varsayılan gövde verir'], 0, 'Ne: imza. Nasıl: alt sınıfın gövdesi.')
fill('Boşluğu doldurun: gövdesiz soyut metot.', 'public ____ void kos();', ['abstract'], 'Soyut metot abstract ile, gövdesiz.',
     java='abstract class Hayvan { public ____ void kos(); }\n' + M(''))

# =================================================================== polimorfizm
topic('polimorfizm')
mc('Hangisi geçerli bir atamadır? (Kedi extends Hayvan)', ['Hayvan h = new Kedi();', 'Kedi k = new Hayvan();', 'Kedi k = (Hayvan) new Kedi();', 'Hayvan h = Kedi;', 'new Kedi() = Hayvan h;'], 0,
   'Üst tip referans alt tip nesneyi tutar; tersi olmaz.', why={1: 'Her hayvan kedi değildir: derleme hatası.'})
mc('Ekrana ne yazılır?', ['Calisan / Musteri', 'Insan / Insan', 'Calisan / Calisan', 'Musteri / Calisan', 'Derleme hatası'], 0, 'Her nesne kendi override ettiği sürümü çalıştırır.',
   code='''ArrayList<Insan> insanlar = new ArrayList<>();
insanlar.add(new Calisan());
insanlar.add(new Musteri());
for (Insan i : insanlar) System.out.println(i.tur());
// Insan.tur() "Insan", Calisan "Calisan", Musteri "Musteri" döndürür''',
   java='import java.util.ArrayList;\nclass Insan { public String tur() { return "Insan"; } }\nclass Calisan extends Insan { @Override public String tur() { return "Calisan"; } }\nclass Musteri extends Insan { @Override public String tur() { return "Musteri"; } }\n' + M('ArrayList<Insan> insanlar = new ArrayList<>();\ninsanlar.add(new Calisan());\ninsanlar.add(new Musteri());\nfor (Insan i : insanlar) System.out.println(i.tur());'))
mc('`Insan insan2 = new Musteri("Veli"); insan2.bakiyeGoster();` (bakiyeGoster sadece Musteri\'de) ne olur?', ['Derleme hatası', 'Bakiye yazdırılır', 'null yazdırılır', 'Çalışma zamanında hata'], 0,
   'Çağrılabilecek metotlar referans tipine (Insan) göre belirlenir.',
   java='class Insan { }\nclass Musteri extends Insan { void bakiyeGoster() { System.out.println("x"); } }\n' + M('Insan insan2 = new Musteri();\ninsan2.bakiyeGoster();'), fixed=True)
mc('Çok biçimlilikte hangi metodun **sürümünün** çalışacağı neye göre belirlenir?', ['Nesnenin gerçek tipine (çalışma zamanında)', 'Referansın tipine', 'Metodun adının uzunluğuna', 'Sınıfın paketine', 'Değişkenin adına'], 0,
   'Dinamik bağlama: override edilmişse alt sınıfın sürümü çalışır.', why={1: 'Referans tipi hangi metotların çağrılabileceğini belirler, hangi sürümün çalışacağını değil.'})
mc('Ekrana ne yazılır?', ['Miyav / Hav / Miyav', 'Ses / Ses / Ses', 'Miyav / Miyav / Hav', 'Hav / Miyav / Miyav', 'Derleme hatası'], 0, 'Her nesne kendi sesCikar() sürümünü çalıştırır.',
   code='''Hayvan h = new Kedi();
h.sesCikar();
ArrayList<Hayvan> liste = new ArrayList<>();
liste.add(new Kopek());
liste.add(new Kedi());
for (Hayvan x : liste) x.sesCikar();''',
   java='import java.util.ArrayList;\nabstract class Hayvan { abstract void sesCikar(); }\nclass Kedi extends Hayvan { void sesCikar() { System.out.println("Miyav"); } }\nclass Kopek extends Hayvan { void sesCikar() { System.out.println("Hav"); } }\n' + M('Hayvan h = new Kedi();\nh.sesCikar();\nArrayList<Hayvan> liste = new ArrayList<>();\nliste.add(new Kopek());\nliste.add(new Kedi());\nfor (Hayvan x : liste) x.sesCikar();'))
mc('Overloading çok biçimliliğin hangi türüdür?', ['Derleme zamanı (statik)', 'Çalışma zamanı (dinamik)', 'Hiçbiri', 'Kapsülleme türü'], 0, 'Hangi metodun çağrılacağı derleyici tarafından parametrelere bakılarak seçilir.')
mc('Hocanın oyununda `saldir(Karakter dusman)` metoduna Vampir, Elf, Ejderha nesneleri gönderilebilmesi neyi gösterir?', ['Çok biçimliliği: parametre üst sınıf tipinde', 'Aşırı yüklemeyi', 'Kapsüllemeyi', 'Composition\'ı', 'Arayüz zorunluluğunu'], 0, 'Karakter tipi her alt sınıf nesnesini kabul eder.')
mc('`Object o = new String("Ali");` neden geçerlidir?', ['Bütün sınıflar Object\'ten türediği için', 'String bir arayüz olduğu için', 'Object soyut olduğu için', 'Geçerli değildir', 'new String kullanıldığı için'], 0, 'Hocanın H4_1 örneği: Object her sınıfın en üst sınıfı.')
fill('Boşluğu doldurun: farklı karakterleri tutacak liste.', 'ArrayList<____> dusmanlar = new ArrayList<>();', ['Karakter'], 'Üst sınıf tipinde liste her alt sınıfı kabul eder.',
     java='import java.util.ArrayList;\nclass Karakter { }\nclass Vampir extends Karakter { }\n' + M('ArrayList<____> dusmanlar = new ArrayList<>();\ndusmanlar.add(new Vampir());\nSystem.out.println(dusmanlar.size());'))
code('Çok biçimli liste', 'Farklı hayvanları tek listede tutup döngüyle ses çıkartın.',
     '''import java.util.ArrayList;

abstract class Hayvan { public abstract void sesCikar(); }
class Kedi extends Hayvan { public void sesCikar() { System.out.println("Miyav"); } }
class Kopek extends Hayvan { public void sesCikar() { System.out.println("Hav"); } }
public class Main {
    public static void main(String[] args) {
        {{1}}<Hayvan> liste = new ArrayList<>();
        liste.add({{2}} Kedi());
        liste.add(new Kopek());
        for ({{3}} h : liste) {
            h.{{4}}();
        }
    }
}''', [['ArrayList'], ['new'], ['Hayvan'], ['sesCikar']],
     ['Liste tipi.', 'Nesne new ile.', 'Döngü değişkeni üst sınıf tipinde.', 'Her nesne kendi sürümünü çalıştırır.'], expect='Miyav / Hav')

# =================================================================== soyut
topic('soyut')
mc('Kod derlenir mi?', ['Derleme hatası', 'Evet, Tekir yazar', 'Evet, boş satır yazar', 'Çalışma zamanında hata'], 0, 'Soyut sınıftan nesne üretilmez.',
   code='abstract class Hayvan { }\n// main:\nHayvan h = new Hayvan();', java='abstract class Hayvan { }\n' + M('Hayvan h = new Hayvan();'), fixed=True)
mc('Ekrana ne yazılır?', ['Isim : Tekir / Kedi kosuyor!', 'Kedi kosuyor! / Isim : Tekir', 'Isim : Tekir', 'Derleme hatası', 'Isim : null / Kedi kosuyor!'], 0,
   'Soyut sınıfın yapıcısı super(isim) ile çalışır; bilgiGoster normal metot, kos override.',
   code='''abstract class Hayvan {
    private String isim;
    public Hayvan(String isim) { this.isim = isim; }
    public void bilgiGoster() { System.out.println("Isim : " + isim); }
    public abstract void kos();
}
class Kedi extends Hayvan {
    public Kedi(String isim) { super(isim); }
    public void kos() { System.out.println("Kedi kosuyor!"); }
}
// main:
Hayvan h = new Kedi("Tekir");
h.bilgiGoster();
h.kos();''',
   java='abstract class Hayvan { private String isim; public Hayvan(String isim) { this.isim = isim; } public void bilgiGoster() { System.out.println("Isim : " + isim); } public abstract void kos(); }\nclass Kedi extends Hayvan { public Kedi(String isim) { super(isim); } public void kos() { System.out.println("Kedi kosuyor!"); } }\n' + M('Hayvan h = new Kedi("Tekir");\nh.bilgiGoster();\nh.kos();'))
mc('Soyut metot için hangisi doğrudur?', ['Gövdesi yoktur, noktalı virgülle biter', 'Gövdesi zorunludur', 'Sadece arayüzde yazılır', 'Sadece private olabilir', 'Alt sınıf yazmak zorunda değildir'], 0, '`public abstract void kos();`')
mc('Soyut sınıftan türeyen ve soyut metodu yazmayan sınıf için ne olur?', ['Derleme hatası (ya da o sınıf da abstract olmalı)', 'Metot otomatik boş gövdeyle eklenir', 'Çalışma zamanında hata', 'Hiçbir şey olmaz', 'Metot private olur'], 0, 'Soyut metotların hepsi yazılmalıdır.',
   java='abstract class Hayvan { abstract void kos(); }\nclass Kaplumbaga extends Hayvan { }\n' + M(''), kind='nocompile')
mc('Bir sınıfta tek bir soyut metot varsa sınıf için ne söylenebilir?', ['Sınıf abstract olmak zorundadır', 'Sınıf interface olur', 'Sınıf final olmalıdır', 'Hiçbir şart yok', 'Sınıfın yapıcısı olamaz'], 0, 'Soyut metot içeren sınıf abstract tanımlanmalı.',
   java='class Hayvan { abstract void kos(); }\n' + M(''), kind='nocompile')
mc('Soyut sınıfta hangisi **olamaz**?', ['new ile nesnesinin üretilmesi', 'Yapıcı', 'private alan', 'Normal (gövdeli) metot', 'Soyut metot'], 0, 'Diğerlerinin hepsi olabilir.')
mc('UML\'de soyut sınıf nasıl gösterilir?', ['Adı italik ya da üstünde «abstract»', 'Adı altı çizili', 'Kesikli kutu', '«interface» yazılır', 'Dolu elmasla'], 0, 'Sunum: abstract sınıf italik ya da <<abstract>> ile.')
mc('Hangi durumda soyut sınıf seçilir?', ['Alt sınıflar ortak alan ve kod paylaşıyor ama bazı davranışlar farklıysa', 'Farklı türden sınıflara sadece ortak yetenek kazandırılacaksa', 'Bir sınıf birden çok yerden kalıtım alacaksa', 'Hiç alan olmayacaksa', 'Sadece sabit tanımlanacaksa'], 0, 'Ortak kod → soyut sınıf; ortak yetenek → arayüz.')
fill('Boşluğu doldurun: soyut sınıf tanımı.', 'public ____ class Hayvan { }', ['abstract'], 'abstract class.',
     java='____ class Hayvan { }\n' + M(''))
code('Soyut sınıf', 'Soyut Hayvan sınıfını ve onu kullanan Kedi sınıfını tamamlayın.',
     '''{{1}} class Hayvan {
    public abstract void kos();
}
class Kedi {{2}} Hayvan {
    @Override
    public void kos() { System.out.println("Kedi kosuyor!"); }
}
public class Main {
    public static void main(String[] args) {
        {{3}} h = new {{4}}();
        h.kos();
    }
}''', [['abstract'], ['extends'], ['Hayvan'], ['Kedi']],
     ['Soyut sınıf.', 'Soyut sınıf extends ile.', 'Referans soyut sınıf tipinde olabilir.', 'Nesne alt sınıftan üretilir.'], expect='Kedi kosuyor!')

# =================================================================== arayuz
topic('arayuz')
mc('Ekrana ne yazılır?', ['Kedi cigniyor / Bu bir default metot / Private metot kullanildi / 5', 'Kedi cigniyor / 5', 'Bu bir default metot / 5', 'Derleme hatası', 'Kedi cigniyor / Bu bir default metot / 5'], 0,
   'default metot gövdeli, private yardımcıyı çağırıyor; YAS sabit 5.',
   code='''interface YemekYiyebilir {
    int YAS = 5;
    void cigneme();
    private void yardimci() { System.out.println("Private metot kullanildi"); }
    default void istisna() {
        System.out.println("Bu bir default metot");
        yardimci();
    }
}
class Kedi implements YemekYiyebilir {
    public void cigneme() { System.out.println("Kedi cigniyor"); }
}
// main:
YemekYiyebilir y = new Kedi();
y.cigneme();
y.istisna();
System.out.println(YemekYiyebilir.YAS);''',
   java='interface YemekYiyebilir { int YAS = 5; void cigneme(); private void yardimci() { System.out.println("Private metot kullanildi"); } default void istisna() { System.out.println("Bu bir default metot"); yardimci(); } }\nclass Kedi implements YemekYiyebilir { public void cigneme() { System.out.println("Kedi cigniyor"); } }\n' + M('YemekYiyebilir y = new Kedi();\ny.cigneme();\ny.istisna();\nSystem.out.println(YemekYiyebilir.YAS);'))
mc('`YemekYiyebilir.YAS = 10;` satırı ne olur? (arayüzde `int YAS = 5;`)', ['Derleme hatası', 'YAS 10 olur', 'Sadece o nesnede 10 olur', 'Çalışma zamanında uyarı'], 0, 'Arayüz alanları public static final.',
   java='interface YemekYiyebilir { int YAS = 5; }\n' + M('YemekYiyebilir.YAS = 10;'), fixed=True)
mc('Arayüzde `void yutma();` yazılınca derleyici bunu nasıl yorumlar?', ['public abstract void yutma();', 'private void yutma() {}', 'default void yutma() {}', 'static void yutma();', 'protected void yutma();'], 0, 'Arayüz metotları varsayılan olarak public abstract.')
mc('Hangisi doğru sıradır?', ['class Kedi extends Hayvan implements A, B', 'class Kedi implements A, B extends Hayvan', 'class Kedi extends Hayvan, A, B', 'class Kedi implements Hayvan extends A', 'class Kedi extends A implements Hayvan, B (Hayvan sınıf)'], 0,
   'Önce extends (tek sınıf), sonra implements (arayüzler, virgülle).',
   java='interface A { } interface B { }\nabstract class Hayvan { }\nclass Kedi extends Hayvan implements A, B { }\n' + M('System.out.println("ok");'), kind='compile')
mc('Arayüzü uygulayan sınıf, arayüzdeki soyut metotları yazmazsa ne olur?', ['Derleme hatası (sınıf abstract değilse)', 'Metotlar otomatik eklenir', 'Hiçbir şey olmaz', 'Çalışma zamanında hata'], 0, 'Sözleşme: bütün soyut metotlar yazılmalı.',
   java='interface Kosabilir { void kos(); }\nclass Kedi implements Kosabilir { }\n' + M(''), kind='nocompile')
mc('Arayüzde hangi metot türleri gövdeli yazılabilir?', ['default ve private', 'Sadece public', 'Sadece abstract', 'protected ve final', 'Hiçbiri'], 0, 'Tahta: "private ve default normal metot yazılabilir."')
mc('Arayüzde constructor (yapıcı) yazılırsa ne olur?', ['Derleme hatası', 'Nesne üretilebilir hâle gelir', 'Uyarı verir ama çalışır', 'Sadece default olarak çalışır'], 0, 'Arayüzün yapıcısı olmaz.',
   java='interface A { public A() { } }\n' + M(''), fixed=True)
mc('Java\'da çoklu kalıtımın yerine ne kullanılır?', ['Birden çok arayüz uygulamak', 'Birden çok extends', 'static sınıflar', 'final sınıflar', 'Paketler'], 0, 'implements A, B, C.')
mc('Kedi bir Hayvan, Robot ise Hayvan değil; ama ikisi de koşabiliyor. Ortak koşma yeteneği için en uygun yapı hangisi?', ['Kosabilir arayüzü', 'Hayvan soyut sınıfı', 'Robot extends Kedi', 'Kosabilir soyut sınıfı ve iki extends', 'static bir kos() metodu'], 0, 'Farklı türden sınıflara ortak yetenek → arayüz ("can-do").')
fill('Boşluğu doldurun: Kedi iki arayüzü uygulasın.', 'class Kedi extends Hayvan ____ YemekYiyebilir, Uyuyabilir { }', ['implements'], 'Arayüz implements ile.',
     java='interface YemekYiyebilir { } interface Uyuyabilir { }\nabstract class Hayvan { }\nclass Kedi extends Hayvan ____ YemekYiyebilir, Uyuyabilir { }\n' + M(''), whyFill={'extends': 'extends sınıf içindir; arayüz implements ile.'})
fill('Boşluğu doldurun: arayüz tanımı.', 'public ____ Uyuyabilir {\n    void uyu();\n}', ['interface'], 'Arayüz interface ile tanımlanır.',
     java='____ Uyuyabilir { void uyu(); }\n' + M(''))
fill('Boşluğu doldurun: arayüzde gövdeli metot.', '____ void istisna() {\n    System.out.println("Bu bir default metot");\n}', ['default'], 'Arayüzde gövdeli public metot default ile.',
     java='interface A { ____ void istisna() { System.out.println("x"); } }\n' + M(''))
code('Arayüz uygulama', 'Kedi, Hayvan\'dan kalıtım alsın ve iki arayüzü uygulasın.',
     '''{{1}} Kosabilir { void kos(); }
interface SesCikarabilir { void sesCikar(); }
abstract class Hayvan { }
class Kedi {{2}} Hayvan {{3}} Kosabilir, SesCikarabilir {
    public void kos() { System.out.println("Kedi kosuyor"); }
    public void {{4}}() { System.out.println("Miyav"); }
}
public class Main {
    public static void main(String[] args) {
        Kedi k = new Kedi();
        k.kos();
        k.sesCikar();
    }
}''', [['interface'], ['extends'], ['implements'], ['sesCikar']],
     ['Arayüz tanımı.', 'Önce sınıftan kalıtım.', 'Sonra arayüzler.', 'Arayüzün soyut metodu yazılmalı.'], expect='Kedi kosuyor / Miyav')

# =================================================================== karsilastirma
topic('karsilastirma')
mc('Soyut sınıf ile arayüzün **ortak** özelliği hangisidir?', ['İkisinden de nesne üretilmez ama referans olabilir', 'İkisinin de constructor\'ı vardır', 'İkisi de implements ile kullanılır', 'İkisinde de alanlar sabittir', 'İkisinde de her şey public\'tir'], 0, 'Tahtada iki sütunda da: nesne yok, referans var.')
mc('Hangisi **sadece arayüz** için doğrudur?', ['Alanlar sabittir (final)', 'Constructor vardır', 'extends ile kullanılır', 'private alan olabilir', 'Bir sınıfın en fazla bir tane olabilir'], 0, 'Diğerleri soyut sınıfa ait.')
mc('Hangisi **sadece soyut sınıf** için doğrudur?', ['Constructor vardır', 'Bir sınıf sınırsız sayıda uygulayabilir', 'Her şey public\'tir', 'implements ile kullanılır', 'Alanlar otomatik static final\'dır'], 0, 'Arayüzün constructor\'ı yoktur.')
mc('"is-a" ve "can-do" ilişkileri sırasıyla hangi yapılara uygundur?', ['Soyut sınıf (kalıtım), arayüz', 'Arayüz, soyut sınıf', 'Composition, aggregation', 'Overloading, overriding', 'Private, public'], 0, 'Kedi bir Hayvandır; Kedi koşabilir.', fixed=False)
mc('Bir sınıf hem soyut sınıftan kalıtım alıp hem arayüz uygulayabilir mi?', ['Evet: extends tek sınıf, implements birden çok arayüz', 'Hayır, ikisinden biri seçilmeli', 'Sadece arayüz soyut sınıfı extends ederse', 'Sadece iki arayüze kadar'], 0, 'Kedi extends Hayvan implements YemekYiyebilir, Uyuyabilir.')
fill('Boşluğu doldurun: arayüzün yapıcısı ____ .', '// arayüzde constructor: ____', ['yok', 'yoktur'], 'Tahta: "Constructor yok." Soyut sınıfta ise var.', cs=False)

# =================================================================== uml
topic('uml')
mc('UML nedir?', ['Sistem tasarımını görselleştiren genel amaçlı modelleme dili', 'Bir programlama dili', 'Bir veritabanı', 'Java\'nın bir kütüphanesi', 'Bir test aracı'], 0, 'Yazılı (programlama) bir dil değildir.')
mc('UML sınıf kutusunun üç bölümü yukarıdan aşağı hangileridir?', ['Sınıf adı, özellikler, metotlar', 'Metotlar, özellikler, ad', 'Ad, metotlar, yapıcılar', 'Paket, sınıf, nesne', 'Özellikler, ad, metotlar'], 0, 'Ad / özellikler / metotlar.', fixed=True)
mc('UML\'de `+ eat() : int` neyi ifade eder?', ['int döndüren public eat metodu', 'private eat alanı', 'protected int alanı', 'eat adlı sınıf', 'Statik sabit'], 0, '+ public, ardından ad, : sonrası dönüş tipi.')
mc('Kalıtım (generalization) UML\'de nasıl çizilir?', ['Alt sınıftan üst sınıfa düz çizgi + içi boş üçgen', 'Kesikli çizgi + boş üçgen', 'Düz çizgi + dolu elmas', 'Düz çizgi + açık ok', 'Çizgi çizilmez'], 0, '"Kaplumbağa bir Hayvandır".', why={1: 'Bu realization (implements).'})
mc('Realization (gerçekleşme) ilişkisi UML\'de hangi ilişkiyi modeller ve nasıl çizilir?', ['Sınıf–arayüz ilişkisi; kesikli çizgi + boş üçgen', 'Sınıf–sınıf kalıtımı; düz çizgi', 'Parça–bütün; dolu elmas', 'Sahiplik; açık ok', 'Nesne–nesne; noktalı daire'], 0, 'Sunum: "Kesikli çizgi kullanılır."')
mc('Association (bağlantı) hangi ilişkiyi gösterir?', ['Sahiplik (has-a)', 'is-a', 'Arayüz uygulama', 'Aşırı yükleme', 'Soyutlama'], 0, 'En çok kullanılan ilişki türü.')
mc('"Tekerlek arabanın parçasıdır ama araba yok olduğunda tekerlek varlığını sürdürebilir." Bu hangi ilişkidir?', ['Aggregation (boş elmas)', 'Composition (dolu elmas)', 'Generalization', 'Realization', 'Reflexive'], 0, 'Zayıf parça ilişkisi.', why={1: 'Composition\'da parça bütünle birlikte yok olur.'})
mc('"Kalp insanın parçasıdır, insan yok olduğunda kalp de yok olur." Bu hangi ilişkidir?', ['Composition (dolu elmas)', 'Aggregation (boş elmas)', 'Association', 'Realization', 'Dependency yok'], 0, 'Güçlü parça ilişkisi.')
mc('Çokluk gösteriminde `1..*` ne anlama gelir?', ['Bir ya da daha fazla', 'Sıfır ya da daha fazla', 'Tam olarak bir', 'Sıfır ya da bir', 'Hiç'], 0, '0..* sıfır ya da daha fazla.')
mc('"Öğrenci 0 ya da sonsuz derse kaydolabilir" ilişkisinde ders tarafına ne yazılır?', ['0..*', '1', '0..1', '1..1', '1..*'], 0, 'Sıfır ya da daha fazla.')
mc('Bir `Dizin`in alt dizinleri yine `Dizin` ise bu ilişki hangisidir?', ['Reflexive (dönüşlü) association', 'Composition', 'Realization', 'Generalization', 'Aggregation'], 0, 'Sınıfın kendisiyle ilişkisi.')
mc('Kodda `class Karakter { private Random r = new Random(); }` varsa UML\'de Karakter ile Random arasında hangi ilişki çizilir?', ['Association: Karakter → Random (has-a)', 'Generalization: Karakter ▷ Random', 'Realization', 'Hiç ilişki çizilmez', 'Random → Karakter kalıtım'], 0, 'Tahtadaki kutu: sınıfın içinde Random tipinde alan.')
mc('UML\'de arayüz nasıl gösterilir?', ['Adın üstünde «interface»', 'Adı altı çizili', 'Adı kalın ve kırmızı', 'Kutu kesikli çizilir', 'Adın önüne # konur'], 0, 'Soyut sınıf italik/«abstract», arayüz «interface».')
fill('UML\'de private erişim hangi simgeyle gösterilir?', '____ isim : String', ['-', '−'], '+ public, − private, # protected.', cs=False)
fill('UML\'de protected erişim hangi simgeyle gösterilir?', '____ noOlustur() : String', ['#'], '# protected.', cs=False)

# =================================================================== oyun
topic('oyun')
mc('Oyundaki `Vampir()` yapıcısında `super(100, 60, 20, 20);` neyi yapar?', ['Karakter\'in yapıcısına can, saldırı, savunma ve kritik oranını gönderir', 'Yeni bir Karakter nesnesi oluşturup listeye ekler', 'Vampir\'i soyut yapar', 'bilgiGoster()\'i çağırır', 'Ejderha\'yı çağırır'], 0, 'super(...) üst sınıf yapıcısı.')
mc('Oyunda karakterlerin `can` alanı private, ama savaş sonunda `mc.getCan()` ile okunuyor. Bu hangi kavram?', ['Kapsülleme', 'Çok biçimlilik', 'Kalıtım', 'Aşırı yükleme', 'Realization'], 0, 'private alan + getter.')
mc('Her karakter `bilgiGoster()`\'i ezip kendi ASCII resmini çiziyor, sonra `super.bilgiGoster()` çağırıyor. Bu hangi kavramlar?', ['Kalıtım ve override', 'Overloading ve kapsülleme', 'Aggregation', 'Interface ve default', 'Soyut metot zorunluluğu'], 0, 'Override + super.')
mc('`ArrayList<Karakter> dusmanlar` listesine Vampir, Elf, Ork eklenebilmesi hangi kavramdır?', ['Çok biçimlilik', 'Kapsülleme', 'Soyutlama', 'Composition', 'Aşırı yükleme'], 0, 'Üst sınıf tipinde liste.')
mc('`Main` sadece `new Oyun().baslat();` yazıyor; düşman seçimi ve savaş döngüsü Oyun sınıfında. Bu hangi kavram?', ['Soyutlama', 'Kalıtım', 'Override', 'Realization', 'Reflexive association'], 0, 'Kullanıcı nasılını görmez.')
mc('Karakter sınıfındaki `savun()` metodu private. Başka bir karakterin `dusman.savun()` metodu `saldir()` içinde nasıl çağrılabiliyor?', ['private erişim sınıf düzeyindedir; aynı sınıfın kodu başka nesnenin private üyesine erişebilir', 'Çağrılamaz, kod hatalıdır', 'savun() aslında public\'tir', 'super ile çağrıldığı için', 'Arayüz sayesinde'], 0, 'saldir() de Karakter sınıfının içinde.')
