/* MBP207 · “Hazırsanız başlayalım”: sınav provası + kopya kağıdı.
   #prova · #prova/<denemeId> · #prova/kopya   (Python çalıştırıcı: kod.js içindeki Pyodide işçisi) */
(function () {
  'use strict';
  var KEY = 'mbp207-prova';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(k, v) { var d = load(); d[k] = v; try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* yok say */ } }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function md(s) { return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>'); }

  /* ---------- gizli test yargıcı: beklenenler sırayla, araya satır girebilir ---------- */
  function fold(s) { return String(s).replace(/İ/g, 'i').replace(/I/g, 'i').toLowerCase().replace(/ı/g, 'i'); }
  function matchIn(s, e) {
    if (e.n) {
      var re = /-?\d+(?:\.\d+)?/g, m, toks = [];
      while ((m = re.exec(s))) toks.push([parseFloat(m[0]), m.index + m[0].length]);
      for (var i = 0; i + e.n.length <= toks.length; i++) {
        var ok = true;
        for (var j = 0; j < e.n.length; j++) if (Math.abs(toks[i + j][0] - e.n[j]) > 0.011) { ok = false; break; }
        if (ok) return toks[i + e.n.length - 1][1];
      }
      return -1;
    }
    var t = e.t, k = t !== t.toLowerCase() ? s.indexOf(t) : fold(s).indexOf(fold(t));
    return k < 0 ? -1 : k + t.length;
  }
  function judge(r, test) {
    if (r.err || r.noinput) return false;
    var L = String(r.out || '').split('\n').map(function (x) { return x.trim(); }).filter(Boolean), li = 0, rest = L[0] || '';
    for (var a = 0; a < test.expect.length; a++) {
      var found = false;
      while (li < L.length) {
        var m = matchIn(rest, test.expect[a]);
        if (m >= 0) { rest = rest.slice(m); found = true; break; }
        li++; rest = L[li] || '';
      }
      if (!found) return false;
    }
    return true;
  }
  function clean(code) { return code.replace(/\t/g, '    ').replace(/\r\n?/g, '\n'); }

  /* ---------- kopya kağıdı (hocanın kodlarından kalıplar) ---------- */
  var KOPYA = [
    ['main() iskeleti', 'def main():\n    # bütün akış burada\n    ...\n\nmain()          # en altta çağır, yoksa hiçbir şey çalışmaz', 'Fonksiyonlar çağrılmadıkça çalışmaz. Hocanın bütün programları `main()` çağrısıyla biter (not hesabında `not_hesapla()`).'],
    ['int(input()) / float(input())', 'apg1 = int(input("APG1 değeri: "))\nsaat = float(input("Park süresi (saat): "))\nsecim = input("Seçiminiz: ").strip()   # menüde str bırak', '`input()` hep **str** döndürür. Hesaptan önce çevir. `int("2.5")` → ValueError, ondalık için `float`.'],
    ['while True menü + break', 'while True:\n    secim = input("Seçiminiz: ").strip()\n    if secim == "1":\n        aylikGelirler(gelirler)\n    elif secim == "0":\n        print("Programdan çıkılıyor")\n        break\n    else:\n        print("Geçersiz seçim")', 'Seçim **str** olduğu için `"1"` ile karşılaştır. `break` döngüyü bitirir. Diyabette çıkış: `if devam == "h": break`.'],
    ['Fonksiyon + return, iki değer', 'def aralikToplamOrtalama(liste):\n    ...\n    return toplam, ortalama\n\ntoplam, ortalama = aralikToplamOrtalama(gelirler)', '`return` değeri geri verir, ekrana yazmaz. Diyabet fonksiyonları sonucu `return "OGTT"` ile döndürür, `main` yazdırır.'],
    ['Liste: toplam, ortalama, sayaç', 'toplam = 0\nfor gelir in yeniListe:\n    toplam += gelir\nortalama = toplam / len(yeniListe)\n# ya da: sum(liste) / len(liste)\nsayac = 0\nfor g in liste:\n    if g > ortalama:\n        sayac += 1', 'Biriktirme kalıbı: döngüden **önce** `= 0`, içinde `+=`. En büyük: `max(l)`, konumu `l.index(max(l)) + 1`.'],
    ['enumerate ve slice', 'for ay, gelir in enumerate(liste, start=1):\n    print(f"{ay}. ay geliri {gelir}")\n\nyeniListe = liste[baslangic - 1:bitis]\nfor ay, gelir in enumerate(yeniListe, start=baslangic):', 'Kullanıcı 1’den sayar: başlangıçtan **1 çıkar**, bitiş aynı kalır (bitiş dahil değil). Gerçek ay numarası için `start=baslangic`.'],
    ['Sözlük', 'menu = {"çay": 15, "kahve": 45}\nfor urun in menu:\n    print(urun, menu[urun])\nif urun not in menu:\n    print("Menüde yok")\nnotlar["Burak"]["Final"]   # iç içe', '`for k in d` anahtarları gezer, değer `d[k]`. `in` sadece anahtarlarda arar. Olmayan anahtar → KeyError.'],
    ['Eşiklere göre if/elif (diyabet)', 'if apg2 >= 126 or pg >= 200:\n    return "Diyabet Hastasısınız"\nelif 100 <= apg2 <= 125 and 140 <= pg <= 199:\n    return "BAG ve BGT"\nelif 100 <= apg2 <= 125:\n    return "İzole BAG"\nelif 140 <= pg <= 199:\n    return "İzole BGT"\nelse:\n    return "Sonucunuz Normal"', 'İlk doğru dal çalışır: **en geniş/öncelikli koşul en üstte**. Harf notunda büyükten küçüğe (90, 85, 80…).'],
    ['Aralık kontrolü ve erken çıkış', 'if not (0 <= vize <= 100 and 0 <= final <= 100):\n    print("Notlar 0-100 arasında olmalıdır")\n    return\nif saat <= 0:\n    print("Geçersiz süre")\n    return', '`return` fonksiyondan hemen çıkar, alttaki satırlar çalışmaz.'],
    ['f-string biçimlendirme', 'print(f"Toplam: {toplam} Ortalama: {ortalama:.2f}")\nprint(f"Ortalama: {ortalama:.1f} | Harf notu: {harf}")\nprint(f"Ödenecek tutar: {ucret:.2f} TL")', '`:.2f` iki ondalık (85 → 85.00), `:.1f` bir ondalık.'],
    ['match / case (mevsim)', 'match ay:\n    case "12" | "1" | "2":\n        print("Kış")\n    case "3" | "4" | "5":\n        print("İlkbahar")\n    case _:\n        print("Geçersiz ay")', '`|` = veya, `case _` = hiçbiri. `ay` str ise case’ler de str olmalı.'],
    ['Sık hatalar', '2026 - input()        # TypeError → int() unutulmuş\nif secim == "1"       # SyntaxError → : unutulmuş\nif x = 5:             # = atama, == karşılaştırma\n    print(x)          # girinti 4 boşluk\ns.strip()             # s değişmez → s = s.strip()', 'Girinti bloğu belirler; `if`, `for`, `while`, `def` satırları `:` ile biter.']
  ];
  var CSS = '' +
    '.pv-sub{display:flex;gap:8px;margin:14px 0 16px;flex-wrap:wrap}.pv-sub a{text-decoration:none;color:var(--text);border:1px solid var(--border);background:var(--surface);border-radius:999px;padding:7px 15px;font-weight:600}' +
    '.pv-sub a.on{background:var(--accent);border-color:var(--accent);color:#fff}' +
    '.pv-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px}' +
    '.pv-card{display:block;text-decoration:none;color:var(--text);background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:16px 18px;box-shadow:var(--shadow)}' +
    '.pv-card:hover{border-color:var(--accent)}.pv-card h3{margin:0 0 6px;font-size:1.02rem}.pv-card ol{margin:6px 0;padding-left:18px;color:var(--muted);font-size:.9rem}.pv-card .m{font-size:.85rem;color:var(--muted)}.pv-card .m b{color:var(--ok)}' +
    '.pv-info{background:var(--accent-soft);border-radius:var(--radius);padding:12px 16px;margin:0 0 16px;line-height:1.55}' +
    '.pv-head{display:flex;flex-wrap:wrap;align-items:center;gap:10px;position:sticky;top:56px;z-index:5;background:var(--bg);padding:8px 0;margin-bottom:8px;border-bottom:1px solid var(--border)}' +
    '.pv-head h2{margin:0;font-size:1.1rem;flex:1;min-width:200px}.pv-timer{font:700 1.05rem var(--mono);padding:5px 12px;border-radius:8px;background:var(--surface);border:1px solid var(--border)}' +
    '.pv-timer.low{color:var(--bad);border-color:var(--bad)}.pv-head button,.pv-q .kd-bar button{font:inherit;font-weight:600;cursor:pointer;border-radius:8px;padding:7px 13px;border:1px solid var(--border);background:var(--surface);color:var(--text)}' +
    '.pv-q{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:16px 18px;margin:0 0 18px;line-height:1.55}' +
    '.pv-q h3{margin:0 0 4px}.pv-q .pt{font-size:.85rem;color:var(--muted);margin-bottom:8px}.pv-q p{margin:.35rem 0}.pv-q code{font:.86em var(--mono);background:var(--surface-2);border:1px solid var(--border);border-radius:4px;padding:0 4px}' +
    '.pv-ex{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);gap:8px;margin:8px 0}.pv-ex small{color:var(--muted);font-weight:600}.pv-ex pre{margin:2px 0 0;font:12.5px/1.5 var(--mono);background:var(--surface-2);border-radius:6px;padding:6px 9px;white-space:pre-wrap}' +
    '.pv-score{font-weight:700;padding:6px 12px;border-radius:8px;background:var(--surface-2)}.pv-score.ok{background:var(--ok-soft);color:var(--ok)}.pv-score.no{background:var(--bad-soft);color:var(--bad)}' +
    '.pv-out{margin:0;font:13px/1.5 var(--mono);background:var(--code-bg);color:var(--code-text);border-radius:8px;padding:8px 10px;white-space:pre-wrap;min-height:90px;max-height:340px;overflow:auto}.pv-out .e{color:#ff9b91}' +
    '.pv-side{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}.pv-side pre{margin:2px 0 0;font:12.5px/1.55 var(--mono);background:var(--code-bg);color:var(--code-text);border-radius:8px;padding:8px 10px;overflow:auto;max-height:520px}' +
    '.pv-side small{color:var(--muted);font-weight:600}@media (max-width:760px){.pv-side,.pv-ex{grid-template-columns:1fr}.pv-head{top:52px}}' +
    '.pv-sum table{border-collapse:collapse;width:100%}.pv-sum td,.pv-sum th{border:1px solid var(--border);padding:6px 10px;text-align:left}' +
    '.pv-kopya{columns:2 380px;column-gap:14px}.pv-k{break-inside:avoid;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:10px 12px;margin:0 0 12px}' +
    '.pv-k h4{margin:0 0 4px;font-size:.95rem;color:var(--accent)}.pv-k pre{margin:4px 0;font:12.5px/1.45 var(--mono);background:var(--code-bg);color:var(--code-text);border-radius:6px;padding:6px 9px;white-space:pre-wrap}' +
    '.pv-k p{margin:4px 0 0;font-size:.88rem;line-height:1.45}.pv-k code{font:.86em var(--mono);background:var(--surface-2);border-radius:4px;padding:0 3px}' +
    '@media print{.topbar,.pv-sub,.pv-info,.pv-noprint,.sk,.sk-fab{display:none!important}body{background:#fff}' +
    '@page{size:A4;margin:7mm}.pv-kopya{columns:2;column-gap:6px}.pv-k{border-color:#888;padding:3px 6px;margin:0 0 4px;break-inside:avoid}' +
    '.pv-k h4{font-size:8.5pt;color:#000;margin:0}.pv-k pre{font-size:7pt;line-height:1.3;background:#f2f2f2;color:#000;padding:2px 4px;margin:2px 0}.pv-k p{font-size:7pt;line-height:1.3;margin:1px 0 0}}';

  var timer = null;
  function css() { if (!document.getElementById('pv-css')) { var st = document.createElement('style'); st.id = 'pv-css'; st.textContent = CSS; document.head.appendChild(st); } }
  function sub(on) {
    return '<h1>Hazırsanız başlayalım</h1><div class="pv-sub"><a href="#prova"' + (on === 'prova' ? ' class="on"' : '') + '>Sınav provası</a><a href="#prova/kopya"' + (on === 'kopya' ? ' class="on"' : '') + '>Kopya kağıdı</a></div>';
  }

  function render(app, arg) {
    var K = window.KodAlistirma; K.css(); css();
    if (timer) { clearInterval(timer); timer = null; }
    if (arg === 'kopya') return kopya(app);
    var d = (window.PROVA || []).filter(function (x) { return x.id === arg; })[0];
    if (d) return deneme(app, d);
    document.title = 'Sınav provası · MBP207';
    var st = load();
    app.innerHTML = sub('prova') +
      '<div class="pv-info"><b>Gerçek sınav gibi:</b> hoca 2–3 soru soracak ve her biri için PyCharm’da bir .py dosyası yazacaksın; test sorusu yok, kopya kağıdı serbest. ' +
      'Her denemede 3 soru var. Kodunu buraya yaz ya da PyCharm’dan yapıştır. <b>Çalıştır</b> PyCharm konsolu gibi davranır. <b>Kontrol et</b> sadece kaç gizli testin geçtiğini söyler; beklenen çıktıyı ya da ipucunu göstermez.</div>' +
      '<div class="pv-list">' + window.PROVA.map(function (x) {
        var res = x.sorular.map(function (q, i) { var r = st['res:' + x.id + ':' + i]; return r ? r[0] + '/' + r[1] : '–'; });
        return '<a class="pv-card" href="#prova/' + x.id + '"><h3>' + esc(x.title) + '</h3><ol>' + x.sorular.map(function (q) { return '<li>' + esc(q.baslik) + '</li>'; }).join('') + '</ol>' +
          '<div class="m">Önerilen süre ' + x.sure + ' dk · Son sonuçlar: <b>' + res.join(' · ') + '</b></div></a>';
      }).join('') + '</div>';
    window.scrollTo(0, 0);
  }

  function deneme(app, d) {
    var K = window.KodAlistirma, st = load();
    document.title = d.title + ' · MBP207';
    app.innerHTML = sub('prova') +
      '<div class="pv-head"><h2>' + esc(d.title) + '</h2><span class="pv-timer" hidden></span><button type="button" class="pv-tbtn">⏱ ' + d.sure + ' dk süre başlat</button><button type="button" class="pv-sumbtn">Özet</button></div>' +
      d.sorular.map(function (q, i) {
        var k = d.id + ':' + i;
        return '<section class="pv-q" data-i="' + i + '"><h3>Soru ' + (i + 1) + ' · ' + esc(q.baslik) + '</h3><div class="pt">Puan dağılımı: ' + esc(q.puan) + '</div>' +
          q.metin.map(function (m) { return '<p>' + md(m) + '</p>'; }).join('') +
          q.ornekler.map(function (o, j) { return '<div class="pv-ex"><div><small>Örnek ' + (j + 1) + ' · girdiler</small><pre>' + esc(o.girdi.join('\n')) + '</pre></div><div><small>Beklenen çıktı (istem metinleri hariç)</small><pre>' + esc(o.cikti) + '</pre></div></div>'; }).join('') +
          K.editor(st['kod:' + k] || '', 'pv' + i) +
          '<div class="kd-bar"><button type="button" class="kd-runbtn">▶ Çalıştır</button><button type="button" class="kd-check">Kontrol et</button><span class="pv-score" hidden></span>' +
          '<button type="button" class="pv-dl">.py indir</button><button type="button" class="pv-model">Model çözümü göster</button></div>' +
          '<div class="kd-run"><div><small>Girdiler (her satıra bir input)</small><textarea>' + esc((st['inp:' + k] != null ? st['inp:' + k] : q.ornekler[0].girdi.join('\n'))) + '</textarea></div><div><small>Konsol</small><pre class="pv-out">▶ Çalıştır’a bas.</pre></div></div>' +
          '<div class="pv-mod"></div></section>';
      }).join('') +
      '<div class="pv-q pv-sum" hidden></div><div class="kd-bar"><span class="kd-py">Python: ilk çalıştırmada yüklenir</span></div>';
    var pyEl = app.querySelector('.kd-py');
    K.state(function (s) { pyEl.className = 'kd-py ' + s; pyEl.textContent = s === 'yukleniyor' ? 'Python yükleniyor… (ilk sefer ~10 sn)' : s === 'hazir' ? 'Python hazır' : 'Python yüklenemedi, internet bağlantını kontrol et'; });

    app.querySelectorAll('.pv-q[data-i]').forEach(function (box) {
      var i = +box.dataset.i, q = d.sorular[i], k = d.id + ':' + i;
      var ed = K.wire(box.querySelector('.kd-ed'), function (v) { save('kod:' + k, v); });
      ed.ta.placeholder = '# Çözümünü buraya yaz ya da PyCharm’dan yapıştır';
      ed.ta.style.minHeight = '16em';
      ed.ta.addEventListener('paste', function () { setTimeout(function () { if (/\t/.test(ed.ta.value)) { ed.ta.value = clean(ed.ta.value); ed.ta.dispatchEvent(new Event('input')); } }, 0); });
      var rin = box.querySelector('.kd-run textarea'), rout = box.querySelector('.pv-out'), score = box.querySelector('.pv-score');
      rin.addEventListener('input', function () { save('inp:' + k, rin.value); });
      var prev = load()['res:' + k];
      if (prev) { score.hidden = false; score.textContent = prev[1] + ' testten ' + prev[0] + ' tanesi geçti'; score.className = 'pv-score ' + (prev[0] === prev[1] ? 'ok' : 'no'); }
      box.querySelector('.kd-runbtn').addEventListener('click', function () {
        var b = this; b.disabled = true; rout.textContent = 'Çalışıyor…';
        var ls = rin.value.split('\n'); while (ls.length && ls[ls.length - 1] === '') ls.pop();
        K.run([{ code: clean(ed.ta.value), pre: ls, call: null, cin: [], echo: true }]).then(function (r) {
          var x = r[0], html = esc(x.out || '');
          if (x.err) html += '<span class="e">' + (html && !/\n$/.test(x.out) ? '\n' : '') + 'Traceback: ' + esc(x.err) + (x.line ? ' (satır ' + x.line + ')' : '') + '</span>';
          else if (x.noinput) html += '<span class="e">Program daha fazla input() bekliyor: girdiler kutusuna bir satır daha ekle.</span>';
          if (!x.noinput) html += '\n<span style="opacity:.6">Process finished with exit code ' + (x.err ? 1 : 0) + '</span>';
          rout.innerHTML = html;
          ed.mark(x.line ? [x.line] : []);
          b.disabled = false;
        });
      });
      box.querySelector('.kd-check').addEventListener('click', function () {
        var b = this; b.disabled = true; b.textContent = 'Çalışıyor…';
        var code = clean(ed.ta.value);
        K.run(q.tests.map(function (t) { return { code: code, pre: t.inp, call: null, cin: [] }; })).then(function (r) {
          var ok = r.filter(function (x, j) { return judge(x, q.tests[j]); }).length, n = q.tests.length;
          score.hidden = false; score.className = 'pv-score ' + (ok === n ? 'ok' : 'no');
          score.textContent = n + ' testten ' + ok + ' tanesi geçti' + (ok === n ? ' ✓' : '');
          save('res:' + k, [ok, n]);
          b.disabled = false; b.textContent = 'Kontrol et';
        });
      });
      box.querySelector('.pv-dl').addEventListener('click', function () {
        var a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([clean(ed.ta.value)], { type: 'text/x-python' }));
        a.download = 'soru' + (i + 1) + '_' + q.baslik.toLowerCase().replace(/[çğıöşü]/g, function (c) { return { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u' }[c]; }).replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') + '.py';
        document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      });
      var mb = box.querySelector('.pv-model'), mod = box.querySelector('.pv-mod'), armed = false;
      mb.addEventListener('click', function () {
        if (mod.innerHTML) { mod.innerHTML = ''; mb.textContent = 'Model çözümü göster'; armed = false; return; }
        if (!armed) { armed = true; mb.textContent = 'Emin misin? Tekrar bas'; setTimeout(function () { if (armed && !mod.innerHTML) { armed = false; mb.textContent = 'Model çözümü göster'; } }, 4000); return; }
        mod.innerHTML = '<div class="pv-side"><div><small>Senin kodun</small><pre>' + esc(clean(ed.ta.value) || '(boş)') + '</pre></div><div><small>Model çözüm</small><pre>' + esc(q.model.join('\n')) + '</pre></div></div>';
        mb.textContent = 'Model çözümü gizle';
      });
    });

    var tEl = app.querySelector('.pv-timer'), tb = app.querySelector('.pv-tbtn');
    tb.addEventListener('click', function () {
      if (timer) { clearInterval(timer); timer = null; tEl.hidden = true; tb.textContent = '⏱ ' + d.sure + ' dk süre başlat'; return; }
      var end = Date.now() + d.sure * 60000; tEl.hidden = false; tb.textContent = 'Süreyi durdur';
      function tick() {
        var s = Math.max(0, Math.round((end - Date.now()) / 1000));
        tEl.textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
        tEl.classList.toggle('low', s <= 300);
        if (!s) { clearInterval(timer); timer = null; tEl.textContent = 'Süre doldu'; tb.textContent = '⏱ Yeniden başlat'; }
        if (!document.body.contains(tEl)) { clearInterval(timer); timer = null; }
      }
      tick(); timer = setInterval(tick, 1000);
    });
    app.querySelector('.pv-sumbtn').addEventListener('click', function () {
      var s = app.querySelector('.pv-sum'), st2 = load(), tot = 0, all = 0;
      s.hidden = false;
      s.innerHTML = '<h3>Özet</h3><table><tr><th>Soru</th><th>Gizli testler</th></tr>' + d.sorular.map(function (q, i) {
        var r = st2['res:' + d.id + ':' + i]; if (r) { tot += r[0]; all += r[1]; }
        return '<tr><td>' + (i + 1) + '. ' + esc(q.baslik) + '</td><td>' + (r ? r[0] + ' / ' + r[1] : 'henüz kontrol edilmedi') + '</td></tr>';
      }).join('') + '</table><p>Toplam: <b>' + tot + ' / ' + (all || '–') + '</b> test. Kontrol etmediğin soruları sayfadaki <b>Kontrol et</b> ile dene.</p>';
      s.scrollIntoView({ behavior: 'smooth' });
    });
    window.scrollTo(0, 0);
  }

  function kopya(app) {
    document.title = 'Kopya kağıdı · MBP207';
    app.innerHTML = sub('kopya') +
      '<div class="pv-info">Hocanın vize hazırlık programlarında (Gelir Analizi, Diyabet) ve Lab 1 görevlerinde tekrar eden kalıplar. <b>Yazdır</b> ile A4’e iki sütun hâlinde sığar. Daha ayrıntılı, konu konu sürüm: <a href="#kopya">Kopya Kağıdı Fikirleri</a>.</div>' +
      '<div class="kd-bar pv-noprint"><button type="button" class="pv-print" style="font:inherit;font-weight:600;cursor:pointer;border-radius:8px;padding:7px 13px;border:1px solid var(--border);background:var(--surface);color:var(--text)">Yazdır / PDF</button></div>' +
      '<div class="pv-kopya">' + KOPYA.map(function (k, i) { return '<div class="pv-k"><h4>' + (i + 1) + '. ' + esc(k[0]) + '</h4><pre>' + esc(k[1]) + '</pre><p>' + md(k[2]) + '</p></div>'; }).join('') + '</div>';
    app.querySelector('.pv-print').addEventListener('click', function () { window.print(); });
    window.scrollTo(0, 0);
  }

  window.Prova = { render: render, judge: judge, kopya: KOPYA };
})();
