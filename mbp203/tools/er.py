"""ER diyagramı (Chen gösterimi): görsel sembol anlatımı ve görselli test.
Tüm şekiller theme.css'teki figure.erd sınıflarıyla çizilir (.ent, .att, .rel, .card)."""
from html import escape as E

EW, EH = 120, 40          # varlık kutusu
DW, DH = 104, 52          # ilişki baklavası


def ent(cx, cy, label, weak=False):
    s = '<g class="ent"><rect x="%g" y="%g" width="%d" height="%d"/>' % (cx - EW / 2, cy - EH / 2, EW, EH)
    if weak: s += '<rect class="in" x="%g" y="%g" width="%d" height="%d"/>' % (cx - EW / 2 + 5, cy - EH / 2 + 5, EW - 10, EH - 10)
    return s + '<text x="%g" y="%g">%s</text></g>' % (cx, cy + 1, E(label))


def att(cx, cy, label, kind=''):
    rx = max(46, len(label) * 4.3 + 16)
    s = '<g class="att%s"><ellipse cx="%g" cy="%g" rx="%g" ry="17"/>' % (' ' + kind if kind else '', cx, cy, rx)
    if kind == 'multi': s += '<ellipse class="in" cx="%g" cy="%g" rx="%g" ry="12"/>' % (cx, cy, rx - 5)
    return s + '<text x="%g" y="%g">%s</text></g>' % (cx, cy + 1, E(label))


def rel(cx, cy, label, ident=False):
    p = lambda w, h: '%g,%g %g,%g %g,%g %g,%g' % (cx - w / 2, cy, cx, cy - h / 2, cx + w / 2, cy, cx, cy + h / 2)
    s = '<g class="rel"><polygon points="%s"/>' % p(DW, DH)
    if ident: s += '<polygon class="in" points="%s"/>' % p(DW - 16, DH - 12)
    return s + '<text x="%g" y="%g">%s</text></g>' % (cx, cy + 1, E(label))


def ln(x1, y1, x2, y2, double=False):
    if not double: return '<line x1="%g" y1="%g" x2="%g" y2="%g"/>' % (x1, y1, x2, y2)
    return '<line x1="%g" y1="%g" x2="%g" y2="%g"/><line x1="%g" y1="%g" x2="%g" y2="%g"/>' % (x1, y1 - 3, x2, y2 - 3, x1, y1 + 3, x2, y2 + 3)


def card(x, y, t): return '<text class="card" x="%g" y="%g">%s</text>' % (x, y, E(t))
def svg(w, h, body, small=False):
    st = ' style="max-width:%dpx;min-width:0"' % w if small else ''
    return '<svg viewBox="0 0 %d %d" xmlns="http://www.w3.org/2000/svg" role="img"%s>%s</svg>' % (w, h, st, ''.join(body))


# ---------------------------------------------------------------- tek tek semboller (soru görselleri)
def sym(kind):
    W, H, cx, cy = 320, 120, 160, 60
    if kind == 'ent': b = [ent(cx, cy, 'Ogrenci')]
    elif kind == 'weak': b = [ent(cx, cy, 'Bagimli', weak=True)]
    elif kind == 'att': b = [att(cx, cy, 'ad')]
    elif kind == 'pk': b = [att(cx, cy, 'ogrenci_no', 'pk')]
    elif kind == 'multi': b = [att(cx, cy, 'telefon', 'multi')]
    elif kind == 'derived': b = [att(cx, cy, 'yas', 'derived')]
    elif kind == 'comp':
        cy = 34; H = 130
        b = [ln(cx, cy, cx - 80, 100), ln(cx, cy, cx + 80, 100), att(cx, cy, 'ad_soyad'), att(cx - 80, 100, 'ad'), att(cx + 80, 100, 'soyad')]
    elif kind == 'rel': b = [rel(cx, cy, 'Kayit')]
    elif kind == 'ident': b = [rel(cx, cy, 'Bagli', ident=True)]
    elif kind == 'total':
        W = 520; b = [ln(80, cy, 260, cy, double=True), ln(260, cy, 440, cy), ent(80, cy, 'Ders'), rel(260, cy, 'Acar'), ent(440, cy, 'Bolum')]
    else: raise ValueError(kind)
    return svg(W, H, b, small=True)


# ---------------------------------------------------------------- lejant (konu anlatımı)
LEG = [
    ('ent', 'Dikdörtgen', 'Varlık (entity). Tabloya dönüşür: Ogrenci, Ders, Bolum.'),
    ('weak', 'Çift dikdörtgen', 'Zayıf varlık. Kendi başına anahtarı yok, başka varlığa bağlı yaşar.'),
    ('att', 'Elips (oval)', 'Nitelik (attribute). Tablonun sütunu olur: ad, kredi.'),
    ('pk', 'Altı çizili elips', 'Anahtar nitelik: birincil anahtar (PK).'),
    ('multi', 'Çift elips', 'Çok değerli nitelik: bir kişinin birden çok telefonu. Ayrı tabloya ayrılır.'),
    ('derived', 'Kesikli elips', 'Türetilmiş nitelik: saklanmaz, hesaplanır (yaş ← doğum tarihi).'),
    ('comp', 'Elipse bağlı elipsler', 'Birleşik nitelik: parçalara ayrılır (ad_soyad → ad + soyad).'),
    ('rel', 'Eşkenar dörtgen (baklava)', 'İlişki (relationship). İçine fiil yazılır: Kayit, Acar, Verir.'),
    ('ident', 'Çift eşkenar dörtgen', 'Tanımlayıcı ilişki: zayıf varlığı sahibine bağlar.'),
    ('line', 'Çizgi + 1 / N / M', 'Bağlantı ve kardinalite: 1:1, 1:N, M:N. Sayılar çizginin üstüne yazılır.'),
    ('total', 'Çift çizgi', 'Tam katılım: o taraftaki her kayıt ilişkiye katılmak zorunda.'),
]


def legend():
    RH, W = 78, 760
    b = []
    for i, (k, name, mean) in enumerate(LEG):
        y = 44 + i * RH
        if i: b.append('<line class="sep" x1="10" y1="%g" x2="%g" y2="%g"/>' % (y - RH / 2, W - 10, y - RH / 2))
        x = 130
        if k == 'ent': b.append(ent(x, y, 'Ogrenci'))
        elif k == 'weak': b.append(ent(x, y, 'Bagimli', weak=True))
        elif k == 'att': b.append(att(x, y, 'ad'))
        elif k == 'pk': b.append(att(x, y, 'ogrenci_no', 'pk'))
        elif k == 'multi': b.append(att(x, y, 'telefon', 'multi'))
        elif k == 'derived': b.append(att(x, y, 'yas', 'derived'))
        elif k == 'comp': b += [ln(x, y - 16, x - 62, y + 16), ln(x, y - 16, x + 62, y + 16), att(x, y - 16, 'ad_soyad'), att(x - 62, y + 18, 'ad'), att(x + 62, y + 18, 'soyad')]
        elif k == 'rel': b.append(rel(x, y, 'Kayit'))
        elif k == 'ident': b.append(rel(x, y, 'Bagli', ident=True))
        elif k == 'line': b += [ln(30, y, 230, y), card(70, y - 12, '1'), card(190, y - 12, 'N')]
        elif k == 'total': b += [ln(30, y, 230, y, double=True)]
        b.append('<text class="lg lg-b" x="270" y="%g">%s</text>' % (y - 11, E(name)))
        b.append('<text class="lg" x="270" y="%g">%s</text>' % (y + 12, E(mean)))
    return svg(W, 44 + len(LEG) * RH - 34, b)


# ---------------------------------------------------------------- örnek diyagram: Musteri 1—N Siparis M—N Urun
def ornek():
    W, H, y = 820, 290, 145
    mx, r1, sx, r2, ux = 80, 225, 400, 580, 740
    b = [ln(mx + EW / 2, y, r1 - DW / 2, y), ln(r1 + DW / 2, y, sx - EW / 2, y, double=True),
         ln(sx + EW / 2, y, r2 - DW / 2, y), ln(r2 + DW / 2, y, ux - EW / 2, y),
         card((mx + EW / 2 + r1 - DW / 2) / 2, y - 13, '1'), card((r1 + DW / 2 + sx - EW / 2) / 2, y - 14, 'N'),
         card((sx + EW / 2 + r2 - DW / 2) / 2, y - 13, 'M'), card((r2 + DW / 2 + ux - EW / 2) / 2, y - 13, 'N')]
    atts = [(mx, 'musteri_no', 'pk', -10, -88), (mx, 'ad', '', 75, -70), (mx, 'telefon', 'multi', -15, 88), (mx, 'yas', 'derived', 85, 75),
            (sx, 'siparis_no', 'pk', -50, -88), (sx, 'tarih', '', 60, -88),
            (ux, 'urun_no', 'pk', -40, -95), (ux, 'urun_adi', '', 20, 88), (ux, 'fiyat', '', 52, -55)]
    for x, _n, _k, dx, dy in atts: b.append(ln(x, y, x + dx, y + dy))
    b += [rel(r1, y, 'Verir'), rel(r2, y, 'Icerir')]
    for x, n, k, dx, dy in atts: b.append(att(x + dx, y + dy, n, k))
    b += [ent(mx, y, 'Musteri'), ent(sx, y, 'Siparis'), ent(ux, y, 'Urun')]
    return svg(W, H, b)


ORNEK = ornek()

# ---------------------------------------------------------------- test soruları (ilk şık doğru; build karıştırır)
def q(text, opts, exp, svg_=None):
    d = {'type': 'mc', 'topic': 'iliskisel', 'q': text, 'opts': opts, 'a': 0, 'exp': exp, 'src': 'ER görsel'}
    if svg_: d['svg'] = svg_
    return d

SEKIL = ['Varlık (entity)', 'Nitelik (attribute)', 'İlişki (relationship)', 'Birincil anahtar (PK)', 'Zayıf varlık', 'Çok değerli nitelik', 'Türetilmiş nitelik', 'Birleşik nitelik', 'Tanımlayıcı ilişki']

def sekil_q(kind, dogru, exp, digerleri):
    return q('Chen gösterimindeki bu şekil neyi temsil eder?', [dogru] + digerleri, exp, sym(kind))

TEST = [
    sekil_q('ent', 'Varlık (entity)', 'Dikdörtgen = varlık. Veri tabanında tabloya dönüşür.', ['Nitelik (attribute)', 'İlişki (relationship)', 'Birincil anahtar (PK)']),
    sekil_q('att', 'Nitelik (attribute)', 'Elips (oval) = nitelik; tablonun sütunu olur.', ['Varlık (entity)', 'İlişki (relationship)', 'Kardinalite']),
    sekil_q('rel', 'İlişki (relationship)', 'Eşkenar dörtgen (baklava, elmas) = ilişki. Kahoot\'ta "Elmas neyi temsil eder?" diye soruldu.', ['Varlık (entity)', 'Nitelik (attribute)', 'Veri akışı']),
    sekil_q('pk', 'Birincil anahtar (PK)', 'Niteliğin altı çizili = anahtar nitelik (PK). Kahoot\'ta soruldu.', ['Yabancı anahtar (FK)', 'Çok değerli nitelik', 'Türetilmiş nitelik']),
    sekil_q('multi', 'Çok değerli nitelik', 'Çift elips: bir kaydın bu nitelikte birden çok değeri olabilir (birden çok telefon).', ['Birincil anahtar (PK)', 'Türetilmiş nitelik', 'Zayıf varlık']),
    sekil_q('derived', 'Türetilmiş nitelik', 'Kesikli elips: değeri başka nitelikten hesaplanır (yaş ← doğum tarihi); saklanmaz.', ['Çok değerli nitelik', 'Yabancı anahtar (FK)', 'Birleşik nitelik']),
    sekil_q('weak', 'Zayıf varlık', 'Çift dikdörtgen: kendi anahtarı olmayan, başka varlığa bağlı varlık.', ['Varlık (entity)', 'Tanımlayıcı ilişki', 'Çok değerli nitelik']),
    sekil_q('ident', 'Tanımlayıcı ilişki', 'Çift eşkenar dörtgen: zayıf varlığı sahibi olan varlığa bağlayan ilişki.', ['İlişki (relationship)', 'Zayıf varlık', 'Varlık (entity)']),
    sekil_q('comp', 'Birleşik nitelik', 'Bir nitelik alt niteliklere ayrılıyor: ad_soyad → ad + soyad.', ['Çok değerli nitelik', 'Türetilmiş nitelik', 'İlişki (relationship)']),
    q('Bu diyagramda Ders tarafındaki **çift çizgi** ne anlama gelir?', ['Tam katılım: her ders bir bölüme bağlı olmak zorunda', 'Ders tablosunda iki FK var', 'İlişki M:N\'dir', 'Ders zayıf varlıktır'],
      'Çift çizgi = tam (zorunlu) katılım. Tek çizgi = kısmi katılım (bölümün dersi olmayabilir).', sym('total')),
    q('ER diyagramında varlıklar (entity) genellikle hangi şekille gösterilir?', ['Dikdörtgen', 'Elips', 'Eşkenar dörtgen', 'Ok', 'Daire'], 'Kahoot sorusu: varlık dikdörtgen.'),
    q('Chen gösteriminde nitelikler hangi şekille gösterilir?', ['Oval (elips)', 'Dikdörtgen', 'Eşkenar dörtgen', 'Üçgen', 'Kare'], 'Kahoot sorusu: nitelik oval.'),
    q('ER diyagramında çizgilerin üstüne yazılan **1, N, M** neyi gösterir?', ['Kardinaliteyi (ilişki türünü)', 'Sütun sayısını', 'Tablo sayısını', 'Satır numarasını', 'Veri tipini'], '1:1, 1:N, M:N.'),
    q('Örnek diyagramda kaç **varlık** vardır?', ['3', '2', '4', '5', '9'], 'Dikdörtgenler: Musteri, Siparis, Urun.', ORNEK),
    q('Örnek diyagramda kaç **ilişki** vardır?', ['2', '1', '3', '4', '9'], 'Baklavalar: Verir, Icerir.', ORNEK),
    q('Örnek diyagramda **Musteri – Siparis** ilişkisinin türü nedir?', ['1:N', '1:1', 'M:N', 'N:1 ama ara tablo gerekir', 'İlişki yoktur'], 'Musteri tarafında 1, Siparis tarafında N: bir müşteri çok sipariş verir.', ORNEK),
    q('Örnek diyagramda **Siparis – Urun** ilişkisinin türü nedir?', ['M:N', '1:N', '1:1', 'N:1', 'İlişki yoktur'], 'Bir siparişte çok ürün, bir ürün çok siparişte: M:N.', ORNEK),
    q('Örnek diyagram tablolara dönüştürülürse en az kaç tablo oluşur?', ['4', '3', '5', '2', '6'], '3 varlık + M:N ilişki (Icerir) için 1 ara tablo (siparis_detay gibi) = 4. 1:N ilişki tablo istemez.', ORNEK),
    q('Örnek diyagramda `musteri_no` hangi tabloya **yabancı anahtar** olarak eklenir?', ['siparis', 'urun', 'musteri', 'Ara tabloya', 'Hiçbirine'], '1:N ilişkide FK çok tarafına: siparis.musteri_no.', ORNEK),
    q('Örnek diyagramda **Musteri** varlığının birincil anahtarı hangisidir?', ['musteri_no', 'ad', 'telefon', 'yas', 'siparis_no'], 'Altı çizili nitelik PK\'dir.', ORNEK),
    q('Örnek diyagramda `telefon` neden **çift elips** ile çizilmiştir?', ['Bir müşterinin birden çok telefonu olabilir (çok değerli nitelik)', 'Telefon birincil anahtardır', 'Telefon hesaplanarak bulunur', 'Telefon zorunlu alandır', 'Telefon başka tabloya FK\'dir'],
      'Çok değerli nitelik; tabloya dönüşürken genelde ayrı bir tabloya (musteri_telefon) ayrılır.', ORNEK),
    q('Örnek diyagramda `yas` niteliği için hangisi doğrudur?', ['Kesikli çizildiği için türetilmiştir; doğum tarihinden hesaplanır, saklanmaz', 'Birincil anahtardır', 'Çok değerlidir', 'Yabancı anahtardır', 'Zayıf varlıktır'],
      'Kesikli elips = türetilmiş nitelik.', ORNEK),
    q('Örnek diyagramda Verir ile Siparis arasındaki **çift çizgi** ne anlatır?', ['Her sipariş mutlaka bir müşteriye ait olmalı (tam katılım)', 'Her müşteri mutlaka sipariş vermeli', 'İlişki M:N\'dir', 'Siparis zayıf varlıktır', 'Siparişte iki FK vardır'],
      'Çift çizgi hangi taraftaysa o tarafın katılımı zorunludur: siparişsiz müşteri olabilir, müşterisiz sipariş olamaz.', ORNEK),
]
