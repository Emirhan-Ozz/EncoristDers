"""MariaDB (MySQL uyumlu) ile sorgu çalıştırma. okul_db ve magaza her çağrıda temiz kurulabilir."""
import os, subprocess, pymysql, decimal, datetime
HERE = os.path.dirname(os.path.abspath(__file__))

def load(name):
    subprocess.run(['mysql', '-uroot'], stdin=open(os.path.join(HERE, name + '.sql')), check=True)

def fresh():
    load('okul'); load('magaza')
    c = conn(None)
    with c.cursor() as k:
        k.execute('DROP DATABASE IF EXISTS deneme_db')
        k.execute('CREATE DATABASE deneme_db CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci')
    c.close()

def conn(db):
    return pymysql.connect(user='root', unix_socket='/run/mysqld/mysqld.sock', database=db, charset='utf8mb4', autocommit=True)

def cell(v):
    if v is None: return None
    if isinstance(v, decimal.Decimal): return str(v)
    if isinstance(v, (datetime.date, datetime.datetime)): return str(v)
    if isinstance(v, bytes): return v.decode()
    return str(v)

def run(db, sql, setup=None, rollback=True):
    """sql birden çok ifade olabilir (';' ile). Son SELECT'in sonucunu döndürür: ('OK', cols, rows) ya da ('HATA', kod, mesaj).
    rollback=True ise değişiklikler (DML) geri alınır; DDL için deneme_db kullanılır."""
    c = conn(db); c.autocommit(False)
    try:
        with c.cursor() as k:
            stmts = split(setup or '') + split(sql)
            cols, rows = [], []
            for s in stmts:
                k.execute(s)
                if k.description:
                    cols = [d[0] for d in k.description]; rows = [[cell(v) for v in r] for r in k.fetchall()]
            return ('OK', cols, rows)
    except pymysql.MySQLError as e:
        return ('HATA', e.args[0], str(e.args[1]) if len(e.args) > 1 else '')
    finally:
        try:
            if rollback: c.rollback()
            else: c.commit()
        except Exception: pass
        c.close()

def split(sql):
    """';' ile böler; 'DELIMITER $$' satırından sonra '$$' ayırıcı olur (tetikleyici gövdeleri için)."""
    lines, chunks, delim, buf = sql.split('\n'), [], ';', []
    for l in lines:
        m = l.strip().upper()
        if m.startswith('DELIMITER '):
            if buf: chunks.append((delim, '\n'.join(buf))); buf = []
            delim = l.strip().split()[1]
            continue
        buf.append(l)
    if buf: chunks.append((delim, '\n'.join(buf)))
    out = []
    for d, body in chunks: out += _split(body, d)
    return out

def _split(sql, delim):
    out, cur, q = [], '', None
    i = 0
    while i < len(sql):
        ch = sql[i]
        if not q and sql.startswith(delim, i):
            if cur.strip(): out.append(cur.strip())
            cur = ''; i += len(delim); continue
        i += 1
        if q:
            cur += ch
            if ch == q: q = None
            continue
        if ch in "'\"`": q = ch; cur += ch; continue
        cur += ch
    if cur.strip(): out.append(cur.strip())
    res = []
    for s in out:
        s = '\n'.join(l for l in s.split('\n') if not l.strip().startswith('--')).strip()
        if s: res.append(s)
    return res

def _old_split(sql):
    out, cur, q = [], '', None
    for ch in sql:
        if q:
            cur += ch
            if ch == q: q = None
            continue
        if ch in "'\"`": q = ch; cur += ch; continue
        if ch == ';':
            if cur.strip(): out.append(cur.strip())
            cur = ''
            continue
        cur += ch
    if cur.strip(): out.append(cur.strip())
    # -- yorum satırlarını at
    res = []
    for s in out:
        s = '\n'.join(l for l in s.split('\n') if not l.strip().startswith('--')).strip()
        if s: res.append(s)
    return res

def scratch(sql, setup=None):
    """DDL denemeleri: deneme_db her seferinde sıfırdan kurulur."""
    c = conn(None)
    with c.cursor() as k:
        k.execute('DROP DATABASE IF EXISTS deneme_db')
        k.execute('CREATE DATABASE deneme_db CHARACTER SET utf8mb4 COLLATE utf8mb4_turkish_ci')
    c.close()
    return run('deneme_db', sql, setup, rollback=False)
