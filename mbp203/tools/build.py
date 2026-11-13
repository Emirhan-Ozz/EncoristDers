"""python3 build.py → ../content.js, ../questions.js
Doğrulama (MariaDB, MySQL uyumlu):
 - özet kod blokları: db'li olanlar okul_db / magaza'da çalıştırılır, sonuç tablosu eklenir; ddl'li olanlar boş veri tabanında hatasız çalışmalı
 - test soruları: sql alanı olanlar çalıştırılır, sonuç doğru şıkla aynı olmalı, başka şık doğru olmamalı
 - boşluk soruları: boşluğa cevap konunca kod hatasız çalışmalı
Hata varsa çıkış kodu 1."""
import json, os, re, random, sys
from collections import Counter
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import db
from content import T as TOPICS, TRAPS, TOPIC_RULES
import qs

bad = 0
def err(*a):
    global bad
    bad += 1
    print('✗', *a)

db.fresh()

def make_tables(tables):
    """Küçük gösterim tablolarını boş veri tabanında kuran SQL."""
    out = []
    for t in tables:
        cols = []
        for i, c in enumerate(t['cols']):
            vals = [r[i] for r in t['rows'] if r[i] is not None]
            if vals and all(re.fullmatch(r'-?\d+', v) for v in vals): ty = 'INT'
            elif vals and all(re.fullmatch(r'-?\d+\.\d+', v) for v in vals): ty = 'DECIMAL(10,2)'
            else: ty = 'VARCHAR(100)'
            cols.append((c, ty))
        out.append('CREATE TABLE %s (%s);' % (t['name'], ', '.join('%s %s' % c for c in cols)))
        if t['rows']:
            def lit(v, ty):
                if v is None: return 'NULL'
                return v if ty != 'VARCHAR(100)' else "'" + v.replace("'", "''") + "'"
            out.append('INSERT INTO %s VALUES %s;' % (t['name'], ', '.join('(' + ', '.join(lit(v, cols[i][1]) for i, v in enumerate(r)) + ')' for r in t['rows'])))
    return '\n'.join(out)

def execute(chk, tables=None):
    setup = chk.get('setup') or ''
    if chk.get('db'):
        return db.run(chk['db'], chk['sql'], setup or None)
    if tables: setup = make_tables(tables) + '\n' + setup
    return db.scratch(chk['sql'], setup or None)

# ---------------- özet kodları
for t in TOPICS:
    for b in t['blocks']:
        if b['t'] != 'code': continue
        d = b.pop('db', None); ddl = b.pop('ddl', False); pre = b.pop('pre', None)
        if d:
            r = db.run(d, b['code'])
            if r[0] != 'OK': err('özet', t['id'], r, b['code'][:60])
            else: b['res'] = {'cols': r[1], 'rows': r[2]}
        elif ddl:
            r = db.scratch(b['code'], pre)
            if r[0] != 'OK': err('özet ddl', t['id'], r, b['code'][:60])
            elif r[1]: b['res'] = {'cols': r[1], 'rows': r[2]}

# ---------------- sorular
def fmt(r, mode):
    st, cols, rows = r
    if mode == 'val': return rows[0][0] if rows and rows[0] else None
    if mode == 'n': return str(len(rows))
    if mode == 'col': return ', '.join('NULL' if x[0] is None else x[0] for x in rows)
    if mode == 'set': return ', '.join(sorted('NULL' if x[0] is None else x[0] for x in rows))
    return None

def verify(d):
    e, c = [], d['chk']
    if d['type'] == 'mc':
        if len(set(d['opts'])) != len(d['opts']): e.append('tekrarlı şık')
        if c.get('sql'):
            r = execute(c, d.get('tables'))
            m = c['mode']
            want = d['opts'][d['a']]
            if m == 'err':
                if r[0] != 'HATA': e.append('hata vermeliydi, sonuç: %r' % (r,))
            elif m == 'ok':
                if r[0] != 'OK': e.append('çalışmalıydı: %r' % (r,))
            elif r[0] != 'OK': e.append('sorgu hatası %r' % (r,))
            else:
                got = fmt(r, m)
                norm = lambda s: re.sub(r' satır$', '', s)
                if m == 'set': want_n = ', '.join(sorted(want.split(', ')))
                else: want_n = norm(want)
                if got != want_n: e.append('sonuç %r, doğru şık %r' % (got, want))
                for i, o in enumerate(d['opts']):
                    if i != d['a'] and norm(o) == got: e.append('yanlış şık da doğru: %r' % o)
    elif d['type'] == 'fill':
        if c.get('run', True):
            code = d['code'].replace('____', d['ans'][0])
            r = execute({'sql': code, 'db': c.get('db'), 'setup': c.get('setup')}, d.get('tables'))
            if r[0] != 'OK': e.append('boşluk dolunca hata %r' % (r,))
    elif d['type'] == 'match':
        rs = [p[1] for p in d['pairs']]
        if len(set(rs)) != len(rs): e.append('eşleştirmede tekrarlı sağ taraf')
    return e

def shuffled(d, seed):
    d = dict(d)
    r = random.Random(seed)
    if d['type'] == 'mc':
        idx = list(range(len(d['opts'])))
        r.shuffle(idx)
        d['why'] = {str(idx.index(int(k))): v for k, v in d.get('why', {}).items()} if d.get('why') else None
        if not d['why']: d.pop('why')
        d['opts'] = [d['opts'][i] for i in idx]
        d['a'] = idx.index(0)
    elif d['type'] == 'match':
        ch = [p[1] for p in d['pairs']]
        while True:
            r.shuffle(ch)
            if len(ch) < 2 or any(ch[i] != d['pairs'][i][1] for i in range(len(ch))) and sum(ch[i] == d['pairs'][i][1] for i in range(len(ch))) <= 1: break
        d['choices'] = ch
    return d

tids = [t['id'] for t in TOPICS]
TQ = {t: [] for t in tids}
for n, d in enumerate(qs.Q):
    for x in verify(d): err('soru', d['topic'], (d.get('q') or '')[:70], x)
    s = shuffled(d, n * 7919 + 13)
    out = {k: v for k, v in s.items() if k != 'chk'}
    TQ[d['topic']].append(out)
assert set(TQ) == set(tids)

# ---------------- denemeler: 17 test + 2 boşluk + 1 eşleştirme (test %85)
DIST = {'giris': 2, 'iliskisel': 2, 'sql-giris': 3, 'sorgular': 3, 'ileri1': 3, 'ileri2': 2, 'gorunum': 2}
assert sum(DIST.values()) == 17
rng = random.Random(203)
pools = {t: [q for q in TQ[t] if q['type'] == 'mc'] for t in tids}
for t in tids: rng.shuffle(pools[t])
fills = [q for t in tids for q in TQ[t] if q['type'] == 'fill']; rng.shuffle(fills)
matches = [q for t in tids for q in TQ[t] if q['type'] == 'match']; rng.shuffle(matches)
DENEMELER = []
for k in range(5):
    sel = []
    for t in tids:
        for _ in range(DIST[t]): sel.append(pools[t].pop())
    # boşluklar farklı konulardan
    fs = []
    for q in fills:
        if len(fs) == 2: break
        if all(q['topic'] != f['topic'] for f in fs): fs.append(q)
    for q in fs: fills.remove(q)
    m = matches.pop()
    DENEMELER.append({'id': 'deneme%d' % (k + 1), 'title': 'Deneme sınavı %d' % (k + 1),
                      'desc': '20 soru: 17 test, 2 boşluk doldurma, 1 eşleştirme. 7 konudan, diğer denemelerle ortak soru yok.',
                      'featured': k == 0, 'questions': sel + fs + [m]})

UYG = [q for q in TQ['ileri1'] + TQ['ileri2'] if re.search(r'[Uu]ygulama', q['q'] + ' ' + q.get('exp', ''))]
EXAMS = [{'id': 'uygulama', 'title': 'GROUP BY / HAVING uygulaması', 'group': 'hoca', 'mode': 'practice',
          'desc': 'Derste yapılan magaza uygulamasının (10 soru + bonus) sonuçlarını soran sorular. Anında kontrol.', 'questions': UYG}] + DENEMELER

total = sum(len(v) for v in TQ.values())
course = {
    'id': 'mbp203', 'lang': 'sql', 'storeKey': 'mbp203-best', 'themeKey': 'mbp203-theme',
    'points': {'mc': 5, 'fill': 5, 'match': 5},
    'randomMix': ['mc'] * 17 + ['fill'] * 2 + ['match'],
    'randomTitle': 'Rastgele deneme (20 soru)',
    'randomDesc': '17 test, 2 boşluk, 1 eşleştirme; 7 konuya yayılır. Az gördüğün sorular önce gelir.',
    'reviewTitle': 'Veri Tabanı ve Yönetimi',
    'reviewLead': 'MySQL ile 7 konu: giriş, ilişkisel model, SQL\'e giriş (DDL/DML), sorgular ve alt sorgular, toplama fonksiyonları ve GROUP BY/HAVING, JOIN ve fonksiyonlar, görünüm ve tetikleyiciler. Örnekler derste kurulan **okul_db** ve **magaza** veri tabanlarıyla; sonuç tabloları sorgular gerçekten çalıştırılarak alındı.',
    'testLead': 'Sınav sistem üzerinden 20 soru, yaklaşık %%85\'i test; birkaç boşluk doldurma ya da eşleştirme olabilir. Önce **deneme sınavlarını** çöz (5 deneme, ortak soru yok). Toplam %d soru; SQL sonucu soranlar MySQL uyumlu veri tabanında çalıştırılarak doğrulandı.' % total,
    'formatTitle': 'Sınav formatı (varsayım)',
    'formatNote': 'Hocanın söylediği: sınav sistem üzerinden, 20 soru, yaklaşık %85 test; eşleştirme veya boşluk doldurma olabilir. Puan dağılımı açıklanmadı; burada her soru 5 puan sayıldı.',
    'hocaLink': {'href': '#test/deneme1', 'text': 'Deneme sınavı 1\'i çöz →'},
    'hocaTitle': 'Ders uygulaması',
    'hocaNote': 'Derste phpMyAdmin\'de yapılan GROUP BY ve HAVING uygulaması.',
    'trapsLead': 'Testlerde en çok karıştırılan noktalar.',
}
EXAM_FORMAT = [
    {'range': '≈17 soru', 'what': 'Çoktan seçmeli test', 'big': '85', 'small': 'puan'},
    {'range': '≈3 soru', 'what': 'Boşluk doldurma / eşleştirme', 'big': '15', 'small': 'puan'},
    {'range': 'Toplam', 'what': '20 soru, sistem üzerinden', 'big': '20', 'small': 'soru'},
]
J = lambda x: json.dumps(x, ensure_ascii=False, indent=1)
dest = os.path.join(HERE, '..')
open(os.path.join(dest, 'content.js'), 'w', encoding='utf8').write(
    '/* MBP203 Veri Tabanı ve Yönetimi · konu özetleri. tools/build.py ile üretildi. */\n'
    'window.COURSE = ' + J(course) + ';\nwindow.EXAM_FORMAT = ' + J(EXAM_FORMAT) + ';\nwindow.TRAPS = ' + J(TRAPS) +
    ';\nwindow.TOPICS = ' + J(TOPICS) + ';\nwindow.TOPIC_RULES = ' + J(TOPIC_RULES) + ';\n')
open(os.path.join(dest, 'questions.js'), 'w', encoding='utf8').write(
    '/* MBP203 test soruları. tools/build.py ile üretildi. */\nwindow.EXAMS = ' + J(EXAMS) + ';\nwindow.TOPIC_QUESTIONS = ' + J(TQ) + ';\nwindow.EXTRA_CODE = [];\n')
print('hata', bad, '| konu', {t: len(TQ[t]) for t in tids}, '| uygulama', len(UYG), '| tür', Counter(q['type'] for v in TQ.values() for q in v),
      '| doğru şık', Counter(q['a'] for v in TQ.values() for q in v if q['type'] == 'mc'))
sys.exit(1 if bad else 0)
