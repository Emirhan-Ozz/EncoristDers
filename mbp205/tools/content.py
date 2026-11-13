"""MBP205 Nesne Tabanlı Programlama II · konu özetleri.
Kaynak: hocanın tahtası (önemli.jpg), ders kodları H2–H6, UML_Diagram_1.pptx.
'run': True olan kod blokları build.py'de gerçek Java ile derlenip çalıştırılır; 'out' varsa çıktı birebir karşılaştırılır."""
from html import escape as E

# ======================================================================= UML çizici (SVG)
LH, HEAD, PAD = 17, 24, 6


def box_h(b):
    n = len(b.get('f', [])) + len(b.get('m', []))
    return HEAD + (len(b.get('st', [])) and 14) + PAD * 2 + max(1, len(b.get('f', []))) * LH + max(1, len(b.get('m', []))) * LH


def draw_box(name, b):
    x, y, w = b['x'], b['y'], b.get('w', 170)
    h = box_h(b)
    b['h'] = h
    s = ['<g class="cls"><rect x="%d" y="%d" width="%d" height="%d"/>' % (x, y, w, h)]
    ty = y + 17
    if b.get('st'):
        s.append('<text class="st" x="%d" y="%d">«%s»</text>' % (x + w / 2, y + 13, E(b['st'])))
        ty += 13
    s.append('<text class="nm%s" x="%d" y="%d">%s</text>' % (' it' if b.get('abs') else '', x + w / 2, ty, E(name)))
    y1 = y + HEAD + (14 if b.get('st') else 0)
    s.append('<line x1="%d" y1="%d" x2="%d" y2="%d"/>' % (x, y1, x + w, y1))
    yy = y1 + PAD + 12
    for f in b.get('f', []) or ['']:
        s.append('<text class="mb" x="%d" y="%d">%s</text>' % (x + 8, yy, E(f)))
        yy += LH
    y2 = y1 + PAD * 2 + max(1, len(b.get('f', []))) * LH - PAD
    s.append('<line x1="%d" y1="%d" x2="%d" y2="%d"/>' % (x, y2, x + w, y2))
    yy = y2 + PAD + 12
    for m in b.get('m', []) or ['']:
        it = m.startswith('/')
        s.append('<text class="mb%s" x="%d" y="%d">%s</text>' % (' it' if it else '', x + 8, yy, E(m.lstrip('/'))))
        yy += LH
    s.append('</g>')
    return ''.join(s)


def anchor(b, side):
    off = 0
    if '@' in side:
        side, off = side.split('@'); off = float(off)
    x, y, w, h = b['x'] + off, b['y'], b.get('w', 170), b['h']
    return {'top': (x + w / 2, y), 'bottom': (x + w / 2, y + h), 'left': (x, y + h / 2), 'right': (x + w, y + h / 2)}[side]


def edge(B, e):
    """e = (kaynak, hedef, tür, kaynakKenar, hedefKenar, etiket1, etiket2, ad)"""
    src, dst, kind = e[0], e[1], e[2]
    s1, s2 = e[3], e[4]
    (x1, y1), (x2, y2) = anchor(B[src], s1), anchor(B[dst], s2)
    s1, s2 = s1.split('@')[0], s2.split('@')[0]
    out = []
    dash = ' class="dash"' if kind in ('real', 'dep') else ''
    # dik açılı yol: önce dikey sonra yatay (gen/real), yatay ilişkilerde düz
    if s1 in ('top', 'bottom') and s2 in ('top', 'bottom') and x1 != x2:
        my = (y1 + y2) / 2
        pts = [(x1, y1), (x1, my), (x2, my), (x2, y2)]
    else:
        pts = [(x1, y1), (x2, y2)]
    out.append('<polyline%s points="%s" fill="none"/>' % (dash, ' '.join('%g,%g' % p for p in pts)))
    (ax, ay), (bx, by) = pts[-2], pts[-1]
    import math
    ang = math.atan2(by - ay, bx - ax)
    def pt(d, a): return (bx - d * math.cos(ang + a), by - d * math.sin(ang + a))
    if kind in ('gen', 'real'):
        p1, p2 = pt(14, .45), pt(14, -.45)
        out.append('<polygon class="tri" points="%g,%g %g,%g %g,%g"/>' % (bx, by, p1[0], p1[1], p2[0], p2[1]))
    elif kind in ('assoc', 'dep'):
        p1, p2 = pt(11, .5), pt(11, -.5)
        out.append('<polyline points="%g,%g %g,%g %g,%g" fill="none"/>' % (p1[0], p1[1], bx, by, p2[0], p2[1]))
    elif kind in ('agg', 'comp'):
        q1, q2, q3 = pt(10, .5), pt(19, 0), pt(10, -.5)
        out.append('<polygon class="%s" points="%g,%g %g,%g %g,%g %g,%g"/>' % ('dia' if kind == 'agg' else 'diaf', bx, by, q1[0], q1[1], q2[0], q2[1], q3[0], q3[1]))
    lab = list(e[5:]) + [None, None, None]
    if lab[0]:  # kaynak tarafı çokluk
        out.append('<text class="mul" x="%g" y="%g">%s</text>' % (x1 + (14 if s1 == 'right' else -14 if s1 == 'left' else 12), y1 + (-6 if s1 in ('left', 'right') else -6 if s1 == 'top' else 16), E(lab[0])))
    if lab[1]:
        out.append('<text class="mul" x="%g" y="%g">%s</text>' % (x2 + (-16 if s2 == 'left' else 16 if s2 == 'right' else 12), y2 + (-6 if s2 in ('left', 'right') else 16 if s2 == 'bottom' else -6), E(lab[1])))
    if lab[2]:
        out.append('<text class="rl" x="%g" y="%g">%s</text>' % ((x1 + x2) / 2, (y1 + y2) / 2 + (-8 if y1 == y2 else 0), E(lab[2])))
    return '<g class="edge %s">%s</g>' % (kind, ''.join(out))


def uml(boxes, edges, w, h, label):
    B = {k: dict(v) for k, v in boxes.items()}
    parts = [draw_box(k, v) for k, v in B.items()]
    es = [edge(B, e) for e in edges]
    return '<svg viewBox="0 0 %d %d" role="img" aria-label="%s">%s%s</svg>' % (w, h, E(label), ''.join(es), ''.join(parts))


# --------------------------------------------------------------- diyagramlar
U_SINIF = uml({'Hayvan': {'x': 150, 'y': 8, 'w': 260, 'f': ['- isim : String', '- id : int', '- yas : int'], 'm': ['+ setIsim(isim : String) : void', '+ ye() : int']}},
              [], 560, 150, 'Hayvan sınıf kutusu')
U_KALITIM = uml({'Hayvan': {'x': 195, 'y': 8, 'f': ['+ konum : int'], 'm': ['+ Hayvan()', '+ Hayvan(konum : int)', '+ kos() : void']},
                 'Tavsan': {'x': 60, 'y': 190, 'f': [], 'm': ['+ kos() : void']},
                 'Kaplumbaga': {'x': 330, 'y': 190, 'f': [], 'm': []}},
                [('Tavsan', 'Hayvan', 'gen', 'top', 'bottom'), ('Kaplumbaga', 'Hayvan', 'gen', 'top', 'bottom')], 560, 285,
                'Tavsan ve Kaplumbaga Hayvan sınıfından kalıtım alır')
U_ARAYUZ = uml({'Hayvan': {'x': 18, 'y': 8, 'abs': True, 'st': 'abstract', 'f': ['+ yas : int', '- isim : String'], 'm': ['+ Hayvan(isim : String)', '+ bilgiGoster() : void', '/+ kos() : void']},
                'YemekYiyebilir': {'x': 210, 'y': 8, 'w': 170, 'st': 'interface', 'f': ['+ YAS : int = 5', '+ RENK : String'], 'm': ['/+ cigneme() : void', '/+ yutma() : void']},
                'Uyuyabilir': {'x': 398, 'y': 8, 'w': 140, 'st': 'interface', 'f': [], 'm': []},
                'Kedi': {'x': 210, 'y': 245, 'f': [], 'm': ['+ Kedi(isim : String)', '+ kos() : void', '+ cigneme() : void', '+ yutma() : void']}},
               [('Kedi', 'Hayvan', 'gen', 'top@-55', 'bottom'), ('Kedi', 'YemekYiyebilir', 'real', 'top', 'bottom'), ('Kedi', 'Uyuyabilir', 'real', 'top@55', 'bottom')],
               560, 375, 'Kedi Hayvan soyut sınıfından kalıtım alır, YemekYiyebilir ve Uyuyabilir arayüzlerini uygular')
U_ASSOC = uml({'Karakter': {'x': 10, 'y': 8, 'w': 250, 'f': ['- can : int', '- saldiriGucu : int', '- r : Random'], 'm': ['+ saldir(dusman : Karakter) : void', '- savun() : int']},
               'Random': {'x': 375, 'y': 33, 'w': 180, 'f': [], 'm': ['+ nextInt(a, b) : int']}},
              [('Karakter', 'Random', 'assoc', 'right', 'left', '', '1', 'has-a')], 560, 150, 'Karakter bir Random nesnesine sahiptir')
U_COKLUK = uml({'Ogrenci': {'x': 10, 'y': 10, 'w': 150, 'f': ['- ad : String'], 'm': []},
                'Ders': {'x': 400, 'y': 10, 'w': 150, 'f': ['- kod : String'], 'm': []},
                'Insan': {'x': 10, 'y': 120, 'w': 150, 'f': ['- adres : Adres'], 'm': []},
                'Adres': {'x': 400, 'y': 120, 'w': 150, 'f': ['- sehir : String'], 'm': []}},
               [('Ogrenci', 'Ders', 'assoc', 'right', 'left', '0..*', '0..*', 'kaydolur'), ('Insan', 'Adres', 'assoc', 'right', 'left', '', '1', 'sahiptir')],
               560, 215, 'Öğrenci–Ders çoka çok, İnsan–Adres bire bir bağlantı')
U_PARCA = uml({'Araba': {'x': 10, 'y': 10, 'w': 150, 'f': [], 'm': []},
               'Tekerlek': {'x': 400, 'y': 10, 'w': 150, 'f': [], 'm': []},
               'Insan': {'x': 10, 'y': 115, 'w': 150, 'f': [], 'm': []},
               'Kalp': {'x': 400, 'y': 115, 'w': 150, 'f': [], 'm': []}},
              [('Tekerlek', 'Araba', 'agg', 'left', 'right', '4', '', 'aggregation (zayıf)'), ('Kalp', 'Insan', 'comp', 'left', 'right', '1', '', 'composition (güçlü)')],
              560, 200, 'Aggregation: Araba–Tekerlek, Composition: İnsan–Kalp')
U_OYUN = uml({'Oyun': {'x': 6, 'y': 34, 'w': 190, 'f': [], 'm': ['+ baslat() : void', '- savas(mc, dusman) : boolean']},
              'Karakter': {'x': 296, 'y': 8, 'w': 258, 'f': ['- can : int', '- saldiriGucu : int', '- r : Random'], 'm': ['+ saldir(dusman : Karakter) : void', '+ bilgiGoster() : void', '+ seviyeAtla() : void']},
              'AnaKarakter': {'x': 150, 'y': 240, 'w': 130, 'f': [], 'm': ['+ bilgiGoster()']},
              'Vampir': {'x': 292, 'y': 240, 'w': 125, 'f': [], 'm': ['+ bilgiGoster()']},
              'Ejderha': {'x': 429, 'y': 240, 'w': 125, 'f': [], 'm': ['+ bilgiGoster()']}},
             [('Oyun', 'Karakter', 'assoc', 'right', 'left', '1', '1..*', 'kullanır'), ('AnaKarakter', 'Karakter', 'gen', 'top', 'bottom'),
              ('Vampir', 'Karakter', 'gen', 'top', 'bottom'), ('Ejderha', 'Karakter', 'gen', 'top', 'bottom')], 560, 330,
             'Hocanın oyun projesi: AnaKarakter, Vampir, Ejderha Karakter sınıfından kalıtım alır')

LEGEND = ('<svg viewBox="0 0 560 196" role="img" aria-label="UML ilişki okları"><g class="edge">'
          '<polyline points="16,20 130,20" fill="none"/><polygon class="tri" points="144,20 130,13 130,27"/>'
          '<polyline class="dash" points="16,58 130,58" fill="none"/><polygon class="tri" points="144,58 130,51 130,65"/>'
          '<polyline points="16,96 142,96" fill="none"/><polyline points="132,90 144,96 132,102" fill="none"/>'
          '<polyline points="16,134 124,134" fill="none"/><polygon class="dia" points="144,134 134,128 124,134 134,140"/>'
          '<polyline points="16,172 124,172" fill="none"/><polygon class="diaf" points="144,172 134,166 124,172 134,178"/></g>'
          '<text class="lgl" x="160" y="24"><tspan font-weight="700">Kalıtım</tspan> · düz çizgi + içi boş üçgen · extends</text>'
          '<text class="lgl" x="160" y="62"><tspan font-weight="700">Gerçekleşme</tspan> · kesikli çizgi + boş üçgen · implements</text>'
          '<text class="lgl" x="160" y="100"><tspan font-weight="700">Bağlantı</tspan> · düz çizgi + açık ok · has-a</text>'
          '<text class="lgl" x="160" y="138"><tspan font-weight="700">Aggregation</tspan> · içi boş elmas · zayıf parça</text>'
          '<text class="lgl" x="160" y="176"><tspan font-weight="700">Composition</tspan> · içi dolu elmas · güçlü parça</text></svg>')

# ======================================================================= konular
T = []
def add(id, title, src, *blocks): T.append({'id': id, 'title': title, 'src': src, 'blocks': list(blocks)})
def p(s): return {'t': 'p', 'text': s}
def ul(*a): return {'t': 'ul', 'items': list(a)}
def code(s, out=None, run=False):
    d = {'t': 'code', 'code': s.strip('\n')}
    if out is not None: d['out'] = out
    if run: d['run'] = True
    return d
def table(head, *rows): return {'t': 'table', 'head': list(head), 'rows': [list(r) for r in rows]}
def trap(s): return {'t': 'trap', 'text': s}
def tip(s): return {'t': 'tip', 'text': s}
def low(s): return {'t': 'low', 'text': s}
def fig(svg, cap): return {'t': 'svg', 'svg': svg, 'cap': cap}


add('sinif', 'Sınıf, nesne, yapıcı ve aşırı yükleme', 'Hafta 1–3 · H2 Yarış, H3_1 Hayvan',
    p('**Sınıf (class)** nesnelerin kalıbıdır: hangi **özellikleri** (alan, değişken) ve **metotları** (davranış) olacağını tanımlar. **Nesne (object)** bu kalıptan `new` ile üretilen somut örnektir.'),
    tip('Benzetme: sınıf kurabiye kalıbı, nesneler o kalıpla basılan kurabiyeler. `Tavsan` bir sınıf, `Tavsan t = new Tavsan();` ile oluşan `t` bir nesnedir.'),
    p('**Yapıcı (constructor):** nesne oluşturulurken bir kez çalışan, sınıfla **aynı adı taşıyan** ve **dönüş tipi olmayan** özel metot. Alanlara başlangıç değeri verir. Hiç yazılmazsa Java parametresiz varsayılan yapıcıyı kendisi ekler.'),
    p('**`this`** o anki nesneyi gösterir; parametre ile alan aynı adlıysa ayırır: `this.konum = konum;`'),
    p('**Aşırı yükleme (overloading):** aynı sınıfta **aynı adlı** ama **parametre listesi farklı** (sayı ya da tip) metotlar/yapıcılar. Hangisinin çalışacağı derleme anında argümanlara bakılarak seçilir.'),
    code('''class Hayvan {
    public int konum;
    public Hayvan() {            // parametresiz yapıcı
        konum = 6;
    }
    public Hayvan(int konum) {   // aşırı yüklenmiş yapıcı
        this.konum = konum;
    }
}
public class Main {
    public static void main(String[] args) {
        Hayvan a = new Hayvan();
        Hayvan b = new Hayvan(20);
        System.out.println(a.konum + " " + b.konum);
    }
}''', '6 20', run=True),
    p('Hocanın **Tavşan–Kaplumbağa yarışı** (H2): her sınıfın `konum` alanı ve `kos()` metodu var; `Yaris` sınıfı iki nesneyi oluşturup `while (true)` ile 100\'e ulaşana kadar koşturuyor. Sabit: `public final int PIST_UZUNLUGU = 100;`'),
    trap('Yapıcının **dönüş tipi yoktur**, `void` bile yazılmaz. `public void Hayvan()` yazarsan yapıcı değil sıradan bir metot olur.'),
    trap('Aşırı yükleme (overloading) ≠ ezme (overriding). Overloading **aynı sınıfta farklı parametre**, overriding **alt sınıfta aynı imza**.'))

add('kalitim', 'Kalıtım (Inheritance)', 'Tahta: NTP\'nin temelleri 1 · H3_1, H4_2',
    p('**Kalıtım:** bir sınıfın (alt sınıf / child) başka bir sınıfın (üst sınıf / parent) özelliklerini ve metotlarını **miras alması**. Java\'da `extends` ile yapılır. Ortak kod üst sınıfa yazılır, tekrar önlenir.'),
    p('İlişki **"is-a" (bir ... dır)** ilişkisidir: "Tavşan **bir** Hayvandır", "Vampir **bir** Karakterdir".'),
    code('''class Hayvan {
    public int konum = 6;
    public void kos() {
        System.out.println(getClass().getName() + " kosuyor");
    }
}
class Kaplumbaga extends Hayvan { }      // hiçbir şey yazmadan kos() ve konum gelir
class Tavsan extends Hayvan {
    @Override
    public void kos() {
        super.kos();                    // üst sınıftaki kos() çalışır
        System.out.println("Tavsan zipladi!");
    }
}
public class Main {
    public static void main(String[] args) {
        new Kaplumbaga().kos();
        Tavsan t = new Tavsan();
        t.kos();
        System.out.println(t.konum);
    }
}''', 'Kaplumbaga kosuyor\nTavsan kosuyor\nTavsan zipladi!\n6', run=True),
    p('**Override (ezme):** alt sınıf, üst sınıftan gelen metodu **aynı imzayla** yeniden yazar. `@Override` etiketi derleyiciye "bu bir ezme" der; imza yanlışsa hata verir.'),
    p('**`super`** üst sınıfa erişir: `super.kos()` üst sınıfın metodunu çağırır, `super(isim)` üst sınıfın yapıcısını çağırır (yapıcının **ilk satırında** olmalı).'),
    code('''public class Vampir extends Karakter {
    public Vampir() {
        super(100, 60, 20, 20);   // can, saldırı, savunma, kritik
    }
}'''),
    fig(U_KALITIM, 'UML\'de kalıtım: alt sınıftan üst sınıfa **düz çizgi + içi boş üçgen** (tahtadaki ▷).'),
    table(['Kural', 'Açıklama'],
          ['Tek kalıtım', 'Java\'da bir sınıf **en fazla bir** sınıfı extends edebilir'],
          ['Ne miras alınır?', 'public ve protected üyeler; private alanlar alt sınıftan **doğrudan** erişilemez (getter/setter ile)'],
          ['Yapıcılar', 'Miras alınmaz; alt sınıf `super(...)` ile üst yapıcıyı çağırır'],
          ['Object', 'Her sınıf dolaylı olarak `Object` sınıfından türer']),
    trap('Hocanın `Insan`/`Musteri` örneğinde `bakiye` private olduğu için `Musteri` içinde `this.bakiye += miktar` **yazılamaz**; `getBakiye()` ve `setBakiye()` kullanılır.'),
    tip('Sınavda örnek: `class Kedi extends Hayvan` + üst sınıftaki `kos()` metodunu `@Override` ile ezen kısa bir kod. "is-a" ilişkisini ve `super` kullanımını söyle.'))

add('kapsulleme', 'Kapsülleme (Encapsulation)', 'Tahta: NTP\'nin temelleri 2 · H3_2 Banka',
    p('**Kapsülleme:** bir sınıfın verisini (alanlarını) **dışarıdan doğrudan erişime kapatıp** (`private`), sadece kontrollü metotlarla (**getter / setter**) erişim vermek. Böylece veri yanlış değer almaz, iç yapı değişse dışarıdaki kod etkilenmez.'),
    table(['Erişim belirleyici', 'UML', 'Nereden erişilir?'],
          ['public', '+', 'Her yerden'],
          ['protected', '#', 'Aynı paket + alt sınıflar'],
          ['(default, yazılmazsa)', '~', 'Sadece aynı paket'],
          ['private', '−', 'Sadece sınıfın kendi içinden']),
    code('''class Insan {
    private int bakiye = 100;               // dışarıdan doğrudan erişilemez
    public int getBakiye() {                // getter: okuma
        return bakiye;
    }
    public void setBakiye(int bakiye) {     // setter: kontrollü yazma
        if (bakiye >= 0) {
            this.bakiye = bakiye;
        }
    }
}
public class Main {
    public static void main(String[] args) {
        Insan m = new Insan();
        m.setBakiye(-500);                  // reddedilir, bakiye negatif olamaz
        System.out.println(m.getBakiye());
        m.setBakiye(250);
        System.out.println(m.getBakiye());
        // m.bakiye = -500;  → derleme hatası: bakiye has private access
    }
}''', '100\n250', run=True),
    p('Hocanın banka örneğinde `musteriNoOlustur()` da **private**: müşteri numarasını sadece sınıf kendi üretir, dışarıdan değiştirilemez; sadece `getMusteriNo()` ile okunur (setter yok → salt okunur).'),
    p('`protected` örneği (H4_1): `Insan` içindeki `protected String noOlustur()` metodunu alt sınıflar `Calisan` ("C" + 4 rakam) ve `Musteri` ("M" + 6 rakam) override ediyor.'),
    trap('Kapsülleme sadece "private yazmak" değildir: **private alan + public getter/setter + setter içinde kontrol** (ör. `if (bakiye >= 0)`) birlikte anlatılmalı.'),
    tip('Sınavda örnek: banka hesabı. `private int bakiye`, `getBakiye()`, negatif değeri reddeden `setBakiye()`, `paraCek()` içinde "Yetersiz Bakiye!" kontrolü.'))

add('soyutlama', 'Soyutlama (Abstraction)', 'Tahta: NTP\'nin temelleri 3 · H3_2, H6',
    p('**Soyutlama:** bir nesnenin **ne yaptığını** gösterip **nasıl yaptığını** gizlemek. Kullanıcı sadece gerekli işlemleri görür, gereksiz ayrıntılarla uğraşmaz.'),
    tip('Benzetme: arabayı sürerken direksiyon, gaz ve frenle ilgilenirsin; motorun içinde ne olduğunu bilmen gerekmez. ATM\'de "para çek" düğmesine basarsın, bankanın bakiyeyi nasıl güncellediğini görmezsin.'),
    p('Hocanın banka örneği (H3_2): `Main` sadece `m.paraCek(50)` ve `m.paraEkle(1000)` çağırır. Bakiyenin kontrol edilmesi, `getBakiye()`/`setBakiye()` çağrıları `Musteri` sınıfının içinde gizlidir.'),
    code('''class Musteri {
    private int bakiye = 100;
    public void paraEkle(int miktar) {
        if (miktar > 0) bakiye += miktar;
    }
    public void paraCek(int miktar) {
        if (miktar <= bakiye) bakiye -= miktar;
        else System.out.println("Yetersiz Bakiye!");
    }
    public int getBakiye() { return bakiye; }
}
public class Main {
    public static void main(String[] args) {
        Musteri m = new Musteri();
        m.paraCek(50);
        m.paraEkle(1000);
        m.paraCek(5000);
        System.out.println(m.getBakiye());
    }
}''', 'Yetersiz Bakiye!\n1050', run=True),
    p('Java\'da soyutlama iki araçla yapılır: **soyut sınıf** (`abstract class`, kısmi soyutlama) ve **arayüz** (`interface`, tam soyutlama). İkisinde de "ne yapılacağı" (metot imzası) verilir, "nasıl" alt sınıfa bırakılır.'),
    code('''abstract class Hayvan {
    public abstract void kos();       // NE: her hayvan koşar
}
class Kedi extends Hayvan {
    @Override
    public void kos() {               // NASIL: kediye özel
        System.out.println("Kedi kosuyor!");
    }
}
public class Main {
    public static void main(String[] args) {
        Hayvan h = new Kedi("Tekir".length() > 0 ? null : null) {}.getClass() == null ? null : new Kedi();
        h.kos();
    }
}'''.replace('        Hayvan h = new Kedi("Tekir".length() > 0 ? null : null) {}.getClass() == null ? null : new Kedi();\n', '        Hayvan h = new Kedi();\n'), 'Kedi kosuyor!', run=True),
    table(['Soyutlama', 'Kapsülleme'],
          ['Tasarım düzeyi: **ne** yapılacağını öne çıkarır', 'Uygulama düzeyi: veriyi **korur**'],
          ['abstract class ve interface ile', 'private + getter/setter ile'],
          ['Karmaşıklığı gizler', 'Veriye erişimi kontrol eder']),
    trap('Soyutlama ile kapsülleme sık karıştırılır: soyutlama "gereksiz ayrıntıyı **gösterme**", kapsülleme "veriye **dokundurma**". Hoca ikisini aynı banka örneğinde anlattı; cevapta farkı söyle.'))

add('polimorfizm', 'Çok biçimlilik (Polymorphism)', 'Tahta: NTP\'nin temelleri 4 · H4_1, H5',
    p('**Çok biçimlilik:** aynı türden bir referansın (ya da aynı metot çağrısının) **farklı nesnelerde farklı davranması**. Üst sınıf tipindeki değişken, alt sınıf nesnesini tutabilir.'),
    code('''Hayvan h = new Kedi();                 // tahtadaki örnek: üst tip referans, alt tip nesne
ArrayList<Hayvan> liste = new ArrayList<>();
liste.add(new Kedi());
liste.add(new Kopek());'''),
    p('Hocanın örneği (H4_1): `Insan` tipindeki değişkenler hem `Calisan` hem `Musteri` tutar. `bilgiGoster()` aynı çağrı, ama `noOlustur()` her alt sınıfta farklı override edildiği için numara biri "C…", diğeri "M…" ile başlar.'),
    code('''import java.util.ArrayList;

class Insan {
    public String tur() { return "Insan"; }
}
class Calisan extends Insan {
    @Override public String tur() { return "Calisan"; }
}
class Musteri extends Insan {
    @Override public String tur() { return "Musteri"; }
    public void bakiyeGoster() { System.out.println("Bakiye: 500 TL"); }
}
public class Main {
    public static void main(String[] args) {
        ArrayList<Insan> insanlar = new ArrayList<>();
        insanlar.add(new Calisan());
        insanlar.add(new Musteri());
        for (Insan i : insanlar) {
            System.out.println(i.tur());     // her nesne kendi sürümünü çalıştırır
        }
        Insan insan2 = new Musteri();
        // insan2.bakiyeGoster();  → derleme hatası: Insan tipinde bu metot yok
    }
}''', 'Calisan\nMusteri', run=True),
    table(['Kural', 'Açıklama'],
          ['Hangi metotlar çağrılabilir?', '**Referansın tipine** bakılır: `Insan insan2 = new Musteri();` ile `bakiyeGoster()` çağrılamaz (hocanın notu: "çağıramazsınız!")'],
          ['Hangi sürüm çalışır?', '**Nesnenin gerçek tipine** bakılır: override edilmişse alt sınıfın metodu çalışır (çalışma zamanı, dinamik bağlama)'],
          ['Tersi olmaz', '`Kedi k = new Hayvan();` derleme hatası: her hayvan kedi değildir']),
    p('Oyun projesinde (H5): `ArrayList<Karakter>` içine Vampir, Elf, Ejderha... konuyor; `liste.get(i).bilgiGoster()` her karakterin kendi ASCII resmini çiziyor, sonra `super.bilgiGoster()` ile ortak bilgileri yazıyor. `saldir(Karakter dusman)` parametresi de çok biçimli: her karakter tipini kabul eder.'),
    table(['Tür', 'Ne zaman?', 'Örnek'],
          ['Derleme zamanı (statik)', 'Aşırı yükleme (overloading)', '`Hayvan()` ve `Hayvan(int konum)`'],
          ['Çalışma zamanı (dinamik)', 'Ezme (overriding) + üst tip referans', '`Hayvan h = new Kedi(); h.kos();`']),
    tip('Sınavda örnek: `Hayvan h = new Kedi();` ve `ArrayList<Hayvan>` içine farklı hayvanlar koyup döngüde `ses()` çağırmak. Her biri farklı ses çıkarır → çok biçimlilik.'))

add('soyut', 'Soyut sınıf (Abstract Class)', 'Tahta: Sınıf çeşitleri 1 · H6',
    p('**Soyut sınıf:** kendisinden **nesne üretilmeyen**, sadece başka sınıflara **üst sınıf (şablon)** olmak için yazılan sınıf. `public abstract class ...` ile tanımlanır.'),
    table(['Tahtadaki madde', 'Anlamı'],
          ['Nesne üretilmez', '`new Hayvan("x")` derleme hatası verir'],
          ['Referans olabilir', '`Hayvan h = new Kedi("Tekir");` geçerli'],
          ['extends ile kullanılır', '`class Kedi extends Hayvan`'],
          ['Bir sınıfın max bir üst sınıfı olabilir', 'extends tek: bir sınıf iki soyut sınıftan türeyemez'],
          ['Soyut metot içerebilir', 'gövdesiz `public abstract void kos();` alt sınıf **zorunlu** olarak yazar'],
          ['Normal metot da içerebilir', '`bilgiGoster()` gibi gövdeli metotlar olabilir'],
          ['Kapsülleme kullanılabilir', '`private String isim;` gibi private alanlar olabilir'],
          ['Constructor var', '`public Hayvan(String isim)`; alt sınıf `super(isim)` ile çağırır']),
    code('''abstract class Hayvan {
    private String isim;                       // kapsülleme
    public Hayvan(String isim) {               // yapıcı var
        this.isim = isim;
    }
    public void bilgiGoster() {                // normal metot
        System.out.println("Isim : " + isim);
    }
    public abstract void kos();                // soyut metot: gövdesi yok
}
class Kedi extends Hayvan {
    public Kedi(String isim) { super(isim); }
    @Override
    public void kos() { System.out.println("Kedi kosuyor!"); }
}
public class Main {
    public static void main(String[] args) {
        Hayvan h = new Kedi("Tekir");          // referans olabilir
        // Hayvan x = new Hayvan("Pamuk");     → hata: Hayvan is abstract
        h.bilgiGoster();
        h.kos();
    }
}''', 'Isim : Tekir\nKedi kosuyor!', run=True),
    trap('Bir sınıfta **tek bir** soyut metot bile varsa sınıf `abstract` olmak zorundadır. Soyut sınıftan türeyen sınıf, soyut metotların **hepsini** yazmazsa o da abstract olmalıdır.'),
    trap('Soyut metodun **gövdesi yoktur**, noktalı virgülle biter: `public abstract void kos();` Süslü parantez açılırsa hata.'),
    p('UML\'de soyut sınıfın adı **italik** yazılır ya da üstüne `«abstract»` konur; soyut metotlar da italiktir.'),
    tip('Ne zaman? Alt sınıflar arasında **ortak kod ve ortak alan** varsa (isim, yaş, bilgiGoster) ama bazı davranışlar her alt sınıfta farklıysa (kos, sesCikar).'))

add('arayuz', 'Arayüz (Interface)', 'Tahta: Sınıf çeşitleri 2 · H6',
    p('**Arayüz:** bir sınıfın **ne yapabileceğini** söyleyen sözleşme (yetenek listesi). `public interface ...` ile tanımlanır, sınıflar `implements` ile uygular. Adları genelde yetenek bildirir: `YemekYiyebilir`, `Uyuyabilir`, `Kosabilir`.'),
    table(['Tahtadaki madde', 'Anlamı'],
          ['Nesne yok', '`new YemekYiyebilir()` yazılamaz'],
          ['Referans var', '`YemekYiyebilir y = new Kedi("Pamuk");` geçerli'],
          ['implements ile kullanılır', '`class Kedi implements YemekYiyebilir`'],
          ['Bir sınıfın sınırsız arayüzü olabilir', '`implements Kosabilir, SesCikarabilir, Surunebilir` (virgülle)'],
          ['Tüm metotları soyuttur', 'Gövdesiz metotlar; `public abstract` yazılmasa da öyledir'],
          ['↳ private ve default normal metot yazılabilir', 'Java 8+ `default`, Java 9+ `private` gövdeli metotlar'],
          ['Her şey public', 'Metotlar ve alanlar otomatik public'],
          ['Özellikler SABİT (final)', 'Alanlar otomatik `public static final`: `int YAS = 5;` değiştirilemez'],
          ['Constructor yok', 'Nesne üretilmediği için yapıcı da yok']),
    code('''interface YemekYiyebilir {
    int YAS = 5;                   // = public static final int YAS = 5;
    String RENK = "Beyaz";
    void cigneme();                // = public abstract void cigneme();
    void yutma();
    private void yardimci() {      // sadece default metotlar içinde kullanılır
        System.out.println("Private metot kullanildi");
    }
    default void istisna() {       // gövdeli default metot
        System.out.println("Bu bir default metot");
        yardimci();
    }
}
interface Uyuyabilir {
    void uyu();
}
abstract class Hayvan {
    public abstract void kos();
}
class Kedi extends Hayvan implements YemekYiyebilir, Uyuyabilir {
    @Override public void kos()     { System.out.println("Kedi kosuyor!"); }
    @Override public void cigneme() { System.out.println("Kedi cigniyor"); }
    @Override public void yutma()   { System.out.println("Kedi yutuyor"); }
    @Override public void uyu()     { System.out.println("Kedi uyuyor"); }
}
public class Main {
    public static void main(String[] args) {
        YemekYiyebilir y = new Kedi();   // arayüz tipinde referans
        y.cigneme();
        y.istisna();
        System.out.println(YemekYiyebilir.YAS);
    }
}''', 'Kedi cigniyor\nBu bir default metot\nPrivate metot kullanildi\n5', run=True),
    fig(U_ARAYUZ, 'Kedi: soyut Hayvan\'dan **kalıtım** (düz çizgi), iki arayüzü **gerçekleştirme** (kesikli çizgi). Arayüz `«interface»`, soyut sınıf italik.'),
    p('Tahtanın en üstündeki satır tam bunu anlatır: **`Kedi extends Hayvan implements Kosabilir, SesCikarabilir, Surunebilir`**: tek üst sınıf, birden çok arayüz.'),
    trap('Arayüzdeki alan **sabittir**: `YemekYiyebilir.YAS = 10;` derleme hatası verir (final).'),
    trap('Sıra önemli: önce `extends`, sonra `implements`. `class Kedi implements A extends Hayvan` hatalıdır.'))

add('karsilastirma', 'Soyut sınıf mı, arayüz mü?', 'Tahta: Sınıf çeşitleri (iki sütun)',
    table(['', 'Soyut sınıf', 'Arayüz'],
          ['Tanım', '`abstract class`', '`interface`'],
          ['Kullanım', '`extends`', '`implements`'],
          ['Nesne üretilir mi?', 'Hayır', 'Hayır'],
          ['Referans olur mu?', 'Evet', 'Evet'],
          ['Kaç tane?', 'Bir sınıfın **en fazla bir** üst sınıfı', 'Bir sınıf **sınırsız** arayüz uygular'],
          ['Metotlar', 'Soyut + normal metot karışık', 'Hepsi soyut (istisna: private ve default)'],
          ['Alanlar', 'Her türlü alan, private olabilir', 'Sadece sabit (`public static final`)'],
          ['Erişim', 'public / private / protected', 'Her şey public'],
          ['Constructor', 'Var', 'Yok'],
          ['İlişki', '"is-a": Kedi **bir** Hayvandır', '"can-do": Kedi yemek **yiyebilir**'],
          ['UML', 'İtalik ad / «abstract», düz çizgi + boş üçgen', '«interface», kesikli çizgi + boş üçgen']),
    tip('Karar: alt sınıflar **ortak alan ve kod** paylaşıyorsa soyut sınıf; farklı türden sınıflara **ortak bir yetenek** kazandırılacaksa arayüz. Örn. hem `Kedi` hem `Robot` `Kosabilir` olabilir ama Robot bir Hayvan değildir.'),
    p('Java\'da çoklu kalıtım sınıflarla yapılamaz, **arayüzlerle** sağlanır.'))

add('uml', 'UML sınıf diyagramları', 'UML_Diagram_1 sunumu · tahtadaki kutu',
    p('**UML (Unified Modeling Language):** bir sistemin tasarımını görselleştirmek için kullanılan genel amaçlı **modelleme dili**. Yazılı (programlama) dili değildir; 1995\'te standart yaklaşım için geliştirildi. **Sınıf diyagramı** yazılımdaki sınıfları ve aralarındaki ilişkileri, programlama dilinden bağımsız gösterir.'),
    fig(U_SINIF, 'Kutu üç bölüm: **ad** · **özellikler** · **metotlar**. Önce erişim (+ − #), sonra ad, `:` ve tip.'),
    ul('En üstte sınıf adı. Soyut sınıfsa **italik** ya da `«abstract»`, arayüzse `«interface»`.',
       'Her özellik/metodun önünde erişim: `+` public, `-` private, `#` protected.',
       'Ardından `:` ile tip: `-name : string`, `+eat() : int`.'),
    p('**İlişkiler:** sınıflar tek başına anlam taşımaz, önemli olan aralarındaki ilişki.'),
    fig(LEGEND, 'İlişki türleri ve okları.'),
    table(['İlişki', 'Okunuş', 'Java', 'Örnek'],
          ['Generalization / Inheritance (kalıtım)', '"is-a": Kaplumbağa **bir** Hayvandır', '`extends`', 'Tavsan → Hayvan'],
          ['Realization / Implementation (gerçekleşme)', 'Sınıf arayüzü uygular; **kesikli** çizgi', '`implements`', 'Kedi ⇢ YemekYiyebilir'],
          ['Association (bağlantı)', '"has-a": sahiplik; en çok kullanılan', 'Sınıf içinde başka sınıf tipinde alan', 'Karakter → Random'],
          ['Aggregation (zayıf parça)', 'Parça bütün olmadan yaşayabilir', 'Alan dışarıdan verilir', 'Araba ◇ Tekerlek'],
          ['Composition (güçlü parça)', 'Bütün yok olunca parça da yok olur', 'Alan sınıf içinde oluşturulur', 'İnsan ◆ Kalp']),
    fig(U_ASSOC, 'Tahtadaki kutu: bir sınıfın içinde `Random r = new Random();` varsa o sınıf Random\'a **sahiptir**; ok sahip olandan Random\'a çizilir, uca çokluk yazılır.'),
    table(['Çokluk', 'Anlamı'], ['0', 'hiç'], ['0..1', 'sıfır ya da bir'], ['1 (1..1)', 'tam olarak bir'], ['0..* / *', 'sıfır ya da daha fazla'], ['1..*', 'bir ya da daha fazla']),
    fig(U_COKLUK, '"Öğrenci 0 ya da sonsuz derse kaydolabilir, derste 0 ya da sonsuz öğrenci olabilir." Her derste en az bir öğrenci olacaksa öğrenci tarafı 1..* olur. İnsan bir adrese sahiptir (Person içinde Adres tipinde alan).'),
    fig(U_PARCA, 'Aggregation: tekerlek arabanın parçası ama araba yok olunca tekerlek yaşar. Composition: kalp insanın parçası, insan yok olunca kalp de yok olur. Elmas **bütün** tarafındadır.'),
    p('**Reflexive (dönüşlü) bağlantı:** sınıfın kendisiyle ilişkisi. Bir `Dizin` 0..* alt dizine ve 0..1 üst dizine sahip olabilir.'),
    trap('Sunumda başlıklar ters yazılmış: tek yönlü (uni-directional) ok **tek uçta**, çift yönlü (bi-directional) ilişkide iki sınıf birbirini bilir. Sınavda kavramı doğru açıkla.'),
    tip('Hocanın ödevi: Hayvan, Tavsan ve Kaplumbaga sınıflarının ilişkilerini gösteren UML diyagramı (Kalıtım konusundaki çizim). Araç: app.diagrams.net'),
    fig(U_OYUN, 'Hocanın oyun projesinin UML\'i: bütün karakterler Karakter\'den kalıtım alır, Oyun sınıfı Karakter listesi kullanır.'))

add('oyun', 'Derste yazdığımız oyun: hepsi bir arada', 'H4_2, H5_1, H5_2 (karakter seçmeli)',
    p('Senaryo: menüyle oynanan bir oyun. 10 farklı düşman var, oyun boyunca 5 tanesi gelir; hepsi yenilirse son boss **Ejderha** gelir. Her yenilen düşmanda seviye atlanır.'),
    table(['Kavram', 'Oyunda nerede?'],
          ['Sınıf + yapıcı', '`Karakter(int can, int saldiriGucu, int savunmaGucu, int kritikOrani)`'],
          ['Kalıtım', '`Vampir extends Karakter`, `super(100, 60, 20, 20)`; 12 karakter aynı üst sınıftan'],
          ['Kapsülleme', 'can, saldiriGucu... **private**; `getCan()` ile okunur; `savun()` private, sadece `saldir()` içinden çağrılır'],
          ['Override', 'Her karakter `bilgiGoster()`\'i ezip kendi ASCII resmini çizer, sonra `super.bilgiGoster()`'],
          ['Çok biçimlilik', '`ArrayList<Karakter> dusmanlar`; `Karakter mc = new AnaKarakter();`; `saldir(Karakter dusman)`'],
          ['Soyutlama', '`Main` sadece `new Oyun().baslat();` der; savaş, seviye, rastgele düşman seçimi gizli'],
          ['Association', '`Karakter` içinde `private Random r = new Random();`; `Oyun` Karakter listesi tutar']),
    code('''public class Karakter {
    private int can;
    private int saldiriGucu;
    private Random r = new Random();
    public void saldir(Karakter dusman) {          // her Karakter alt tipini kabul eder
        int saldiriPuani = r.nextInt(saldiriGucu - 15, saldiriGucu + 16);
        int savunmaPuani = dusman.savun();          // private ama aynı sınıf içinde
        if (saldiriPuani > savunmaPuani) {
            dusman.can -= saldiriPuani - savunmaPuani;
        }
    }
    public void bilgiGoster() {
        System.out.println("Isim : " + this.getClass().getName());
        System.out.println("Can : " + can);
    }
}'''),
    tip('Açık uçlu sorulara örnek vermekte zorlanırsan bu oyunu anlat: her kavramın somut karşılığı var ve hoca bu projeyi kendisi yazdırdı.'),
    low('`Collections.shuffle`, `System.exit`, `Scanner` ve hile kodu gibi ayrıntılar kavram sorusu değil; sadece oyunun nasıl çalıştığını anlamak için.'))

TRAPS = [
    {'t': 'Overloading = **aynı sınıfta** aynı ad, farklı parametre. Overriding = **alt sınıfta** aynı imza, `@Override`.', 'topic': 'sinif'},
    {'t': 'Yapıcının dönüş tipi yoktur, adı sınıfla aynıdır. `void` yazılırsa yapıcı olmaz.', 'topic': 'sinif'},
    {'t': 'Java\'da tek kalıtım: `extends` sonrası **bir** sınıf. Birden çok yetenek için arayüz.', 'topic': 'kalitim'},
    {'t': '`super(...)` yapıcının ilk satırında; `super.metot()` üst sınıfın sürümünü çağırır.', 'topic': 'kalitim'},
    {'t': 'private alan alt sınıftan doğrudan erişilemez; getter/setter ya da protected gerekir.', 'topic': 'kapsulleme'},
    {'t': 'UML erişim simgeleri: `+` public, `-` private, `#` protected.', 'topic': 'kapsulleme'},
    {'t': 'Soyutlama = **ne** yaptığını göster, nasılını gizle. Kapsülleme = veriyi koru.', 'topic': 'soyutlama'},
    {'t': 'Çağrılabilecek metotlar **referans tipine**, çalışacak sürüm **nesnenin tipine** göre.', 'topic': 'polimorfizm'},
    {'t': '`Hayvan h = new Kedi();` geçerli, `Kedi k = new Hayvan();` geçersiz.', 'topic': 'polimorfizm'},
    {'t': 'Soyut sınıf: nesne yok, referans var, constructor **var**, normal + soyut metot karışık.', 'topic': 'soyut'},
    {'t': 'Arayüz: nesne yok, referans var, constructor **yok**, alanlar sabit (final), her şey public.', 'topic': 'arayuz'},
    {'t': 'Arayüzde gövdeli metot sadece `default` ve `private` olabilir.', 'topic': 'arayuz'},
    {'t': 'Sıra: `class Kedi extends Hayvan implements A, B` (önce extends).', 'topic': 'arayuz'},
    {'t': 'Kalıtım oku düz + boş üçgen, gerçekleşme oku kesikli + boş üçgen; elmas bütün tarafında.', 'topic': 'uml'},
    {'t': 'Aggregation boş elmas (araba–tekerlek), composition dolu elmas (insan–kalp).', 'topic': 'uml'},
]

TOPIC_RULES = {
    'sinif': 'Sınıf kalıp, nesne new ile üretilen örnek. Yapıcı sınıfla aynı adlı, dönüş tipsiz, nesne oluşurken çalışır. Aşırı yükleme: aynı ad, farklı parametre listesi.',
    'kalitim': 'Kalıtım extends ile, "is-a" ilişkisi. Alt sınıf üstün public/protected üyelerini alır, metotları @Override ile ezebilir, super ile üst sınıfa erişir. Java\'da tek kalıtım vardır.',
    'kapsulleme': 'Kapsülleme: alanlar private, erişim public getter/setter ile ve setter içinde kontrol (bakiye >= 0). public +, private -, protected #, default ~.',
    'soyutlama': 'Soyutlama: ne yapıldığını gösterip nasıl yapıldığını gizlemek. Java\'da abstract class ve interface ile. Kapsülleme veriyi korur, soyutlama karmaşıklığı gizler.',
    'polimorfizm': 'Çok biçimlilik: üst tip referans alt tip nesneyi tutar (Hayvan h = new Kedi()), aynı çağrı nesneye göre farklı çalışır. Çağrılabilir metotlar referans tipine, çalışan sürüm nesnenin tipine bağlı.',
    'soyut': 'Soyut sınıf: abstract class, nesne üretilmez ama referans olur, extends ile kullanılır, soyut ve normal metot, private alan ve constructor içerebilir. Soyut metotları alt sınıf yazmak zorunda.',
    'arayuz': 'Arayüz: interface, implements ile, nesne ve constructor yok, sınıf birden çok arayüz uygulayabilir. Metotlar soyut (default/private hariç), her şey public, alanlar sabit (final).',
    'karsilastirma': 'Soyut sınıf: tek extends, constructor var, her türlü alan. Arayüz: çok implements, constructor yok, sadece sabit. İkisinden de nesne üretilmez, ikisi de referans olur.',
    'uml': 'UML sınıf kutusu: ad / özellikler / metotlar, + - # erişim. Kalıtım düz çizgi + boş üçgen, gerçekleşme kesikli + boş üçgen, bağlantı düz ok (has-a), aggregation boş elmas, composition dolu elmas.',
    'oyun': 'Oyunda kalıtım (Vampir extends Karakter), kapsülleme (private can + getCan), override (bilgiGoster), çok biçimlilik (ArrayList<Karakter>), soyutlama (new Oyun().baslat()) birlikte kullanılır.',
}
