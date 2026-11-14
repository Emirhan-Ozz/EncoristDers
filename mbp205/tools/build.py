"""python3 build.py → ../content.js, ../questions.js, ../yazili-data.js
Doğrulama: özet kodları (run) ve yazılı model kodları javac ile derlenip çalıştırılır, çıktılar karşılaştırılır;
test sorularında 'java' alanı olanların çıktısı doğru şıkla eşleşmeli; model cevaplar kendi anahtarlarından ≥ 8/10 almalı."""
import json, os, re, subprocess, sys, tempfile, random, shutil
from collections import Counter
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from content import T as TOPICS, TRAPS, TOPIC_RULES
import yazili, qs

bad = 0
def err(*a):
    global bad
    bad += 1
    print('✗', *a)

_cache = {}
def run_java(src):
    if src in _cache: return _cache[src]
    d = tempfile.mkdtemp(prefix='j205')
    try:
        open(os.path.join(d, 'Main.java'), 'w').write(src)
        c = subprocess.run(['javac', '-encoding', 'UTF-8', '-nowarn', 'Main.java'], cwd=d, capture_output=True, text=True)
        if c.returncode: r = ('DERLEME', c.stderr.strip().splitlines()[0] if c.stderr.strip() else '?')
        else:
            x = subprocess.run(['java', '-Dfile.encoding=UTF-8', '-cp', d, 'Main'], cwd=d, capture_output=True, text=True, timeout=20)
            r = ('OK', x.stdout.rstrip('\n')) if x.returncode == 0 else ('HATA', x.stderr.strip().splitlines()[0])
    finally:
        shutil.rmtree(d, ignore_errors=True)
    _cache[src] = r
    return r

# ---------------- özet kodları
for t in TOPICS:
    for b in t['blocks']:
        if b['t'] == 'code' and b.pop('run', False):
            st, out = run_java(b['code'])
            if st != 'OK': err('özet', t['id'], st, out)
            elif 'out' in b and out != b['out']: err('özet çıktı', t['id'], repr(out), '≠', repr(b['out']))

# ---------------- yazılı: kod + puanlama anahtarı
MAP = str.maketrans('çğıöşüâîû', 'cgiosuaiu')
def tokens(s): return [w for w in re.sub(r'[^a-z0-9]+', ' ', str(s).replace('İ', 'i').replace('I', 'ı').lower().translate(MAP)).split()]
def lev(a, b):
    d = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        p, d[0] = d[0], i
        for j, cb in enumerate(b, 1): p, d[j] = d[j], min(d[j] + 1, d[j - 1] + 1, p + (ca != cb))
    return d[-1]
def wmatch(t, p, multi):
    if p.isdigit(): return t == p
    if len(p) <= 3 and not multi: return t == p
    if t.startswith(p): return True
    return len(p) >= 6 and any(lev(t[:L], p) <= 1 for L in range(len(p) - 1, len(p) + 2))
def phrase_in(toks, ph):
    return bool(ph) and any(all(wmatch(toks[i + j], ph[j], len(ph) > 1) for j in range(len(ph))) for i in range(len(toks) - len(ph) + 1))
def grade(q, text):
    toks = tokens(text)
    return sum(k['w'] for k in q['keys'] if any(phrase_in(toks, tokens(a)) for a in k['any'])), [k['k'] for k in q['keys'] if not any(phrase_in(toks, tokens(a)) for a in k['any'])]

for q in yazili.S:
    st, out = run_java(q['kod'])
    if st != 'OK': err('yazılı kod', q['id'], st, out)
    elif q['out'] is not None and out != q['out']: err('yazılı çıktı', q['id'], repr(out), '≠', repr(q['out']))
    for k in q['keys']:
        for a in k['any']:
            if not tokens(a): err('boş anahtar ifadesi', q['id'], repr(a))
    sc, miss = grade(q, ' '.join(q['cevap']) + '\n' + q['kod'])
    if sc < 8: err('model cevap düşük puan', q['id'], sc, miss)
    # alakasız cevap düşük almalı
    sc2, _ = grade(q, 'Bu konu çok önemlidir ve sınavda sorulabilir. Ben bu konuyu çalıştım ve iyi biliyorum diye düşünüyorum.')
    if sc2 > 2: err('alakasız cevap yüksek puan', q['id'], sc2)
ids = {q['id'] for q in yazili.S}
for d in yazili.DENEMELER:
    assert all(i in ids for i in d['ids']) and [next(q for q in yazili.S if q['id'] == i)['slot'] for i in d['ids']] == list(range(1, 8)), d

# ---------------- test soruları
tids = [t['id'] for t in TOPICS]
TQ = {t: [] for t in tids}
for n, (tid, d) in enumerate(qs.Q):
    e = qs.verify(d, run_java)
    for x in e: err('soru', tid, (d.get('q') or d.get('title'))[:60], x)
    d = qs.shuffled(d, n * 7919 + 13)
    out = {k: v for k, v in d.items() if k not in ('chk',)}
    if out['type'] == 'code': out['blanks'] = [{'ans': b, 'cs': True} for b in out['blanks']]
    TQ[tid].append(out)
assert {tid for tid, _ in qs.Q} <= set(tids)
TAHTA = [qs.shuffled(dict(d, topic=d['topic']), 991 + i) for i, d in enumerate(qs.TAHTA)]
for d in qs.TAHTA:
    for x in qs.verify(d, run_java): err('tahta', d['q'][:60], x)
TAHTA = [{k: v for k, v in d.items() if k != 'chk'} for d in TAHTA]

def deneme(seed, used):
    r = random.Random(seed); sel = []
    ana = ['kalitim', 'kapsulleme', 'soyutlama', 'polimorfizm', 'soyut', 'arayuz', 'karsilastirma', 'uml', 'sinif', 'oyun']
    pools = {t: [q for q in TQ.get(t, []) if q['type'] == 'mc' and id(q) not in used] for t in ana}
    k = 0
    while len(sel) < 16:
        t = ana[k % len(ana)]; k += 1
        if pools[t]:
            q = pools[t].pop(r.randrange(len(pools[t]))); sel.append(q); used.add(id(q))
    fills = [q for t in ana for q in TQ.get(t, []) if q['type'] == 'fill' and id(q) not in used]
    for q in r.sample(fills, 4): sel.append(q); used.add(id(q))
    return sel
used = set()
EXAMS = [
    {'id': 'tahta', 'title': 'Tahtadaki maddeler', 'group': 'hoca', 'mode': 'practice', 'featured': True,
     'desc': 'Hocanın tahtaya yazdığı her madde bir soru: soyut sınıf ve arayüz kuralları, dört temel kavram, UML okları. Anında kontrol.', 'questions': TAHTA},
    {'id': 'deneme1', 'title': 'Karma test 1', 'desc': '16 test + 4 boşluk; bütün konulardan.', 'questions': deneme(1, used)},
    {'id': 'deneme2', 'title': 'Karma test 2', 'desc': '16 test + 4 boşluk; bütün konulardan.', 'questions': deneme(2, used)},
]
total = sum(len(v) for v in TQ.values()) + len(TAHTA)
course = {
    'id': 'mbp205', 'lang': 'java', 'storeKey': 'mbp205-best', 'themeKey': 'mbp205-theme',
    'points': {'mc': 5, 'fill': 5, 'code': 20},
    'randomMix': ['mc'] * 15 + ['fill'] * 4 + ['code'],
    'randomTitle': 'Rastgele test (20 soru)',
    'randomDesc': 'Bütün konulardan 15 test, 4 boşluk, 1 kod tamamlama. Az gördüğün sorular önce gelir.',
    'reviewTitle': 'Nesne Tabanlı Programlama II',
    'reviewLead': 'Vize **7 açık uçlu soru**: hoca tahtadaki başlıkları **açıklamanızı ve örnek vermenizi** isteyecek, kod yazdırmayacak. Konular tahtadaki sırayla; örnekler derste yazdığımız kodlardan (Yarış, Banka, Çalışan/Müşteri, Karakter oyunu, Kedi). Bütün Java örnekleri derlenip çalıştırılarak kontrol edildi. Çalıştıktan sonra **Yazılı prova** sekmesinde cevap yazmayı dene.',
    'testLead': 'Sınav açık uçlu; bu testler kavramları pekiştirmek için. Önce **tahtadaki maddeler** testini çöz (%d soru toplam). Çıktı soran soruların cevabı gerçek Java ile çalıştırılarak doğrulandı.' % total,
    'formatTitle': 'Vize formatı',
    'formatNote': 'Hocanın söylediği: kod fazla sorulmayacak; tahtadaki başlıkları açıklayıp örnek vermenizi isteyen **7 soru**. Puan dağılımı belirtilmedi; Yazılı prova 7 soruyu toplam 100 puan sayar (soru başı ≈14,3).',
    'hocaLink': {'href': '#yazili', 'text': 'Yazılı provaya geç →'},
    'hocaTitle': 'Hocanın tahtası',
    'hocaNote': 'Tahtadaki her madde birebir soruya çevrildi.',
    'codeDesc': 'extends, implements, super, abstract ve @Override kalıplarını boşluk doldurarak tekrar et.',
    'trapsLead': 'Açık uçlu cevaplarda en çok karıştırılan noktalar.',
}
EXAM_FORMAT = [{'range': '7 soru', 'what': 'Açık uçlu: kavramı açıkla + örnek ver', 'big': '7', 'small': 'soru'}]
J = lambda x: json.dumps(x, ensure_ascii=False, indent=1)
dest = os.path.join(HERE, '..')
open(os.path.join(dest, 'content.js'), 'w', encoding='utf8').write(
    '/* MBP205 Nesne Tabanlı Programlama II · konu özetleri. tools/build.py ile üretildi. */\n'
    'window.COURSE = ' + J(course) + ';\nwindow.EXAM_FORMAT = ' + J(EXAM_FORMAT) + ';\nwindow.TRAPS = ' + J(TRAPS) +
    ';\nwindow.TOPICS = ' + J(TOPICS) + ';\nwindow.TOPIC_RULES = ' + J(TOPIC_RULES) + ';\n')
open(os.path.join(dest, 'questions.js'), 'w', encoding='utf8').write(
    '/* MBP205 test soruları. tools/build.py ile üretildi. */\nwindow.EXAMS = ' + J(EXAMS) + ';\nwindow.TOPIC_QUESTIONS = ' + J(TQ) + ';\nwindow.EXTRA_CODE = [];\n')
open(os.path.join(dest, 'yazili-data.js'), 'w', encoding='utf8').write(
    '/* MBP205 yazılı prova: açık uçlu sorular, anahtar kavramlar, model cevaplar. tools/build.py ile üretildi. */\nwindow.YAZILI = ' +
    J({'slots': yazili.SLOTS, 'sorular': yazili.S, 'denemeler': yazili.DENEMELER}) + ';\n')
print('hata', bad, '| konu soruları', {t: len(TQ[t]) for t in tids}, '| tahta', len(TAHTA), '| yazılı', len(yazili.S),
      '| tür', Counter(q['type'] for v in TQ.values() for q in v), '| doğru şık', Counter(q['a'] for v in TQ.values() for q in v if q['type'] == 'mc'))
sys.exit(1 if bad else 0)
