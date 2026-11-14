/* MBP205 · Yazılı prova: hocanın sınavı gibi 7 açık uçlu soru (kavramı açıkla + örnek ver).
   #yazili · #yazili/<denemeId> · #yazili/rastgele
   Puanlama: cevaptaki anahtar kavramlara bakan otomatik tahmin; 7 soru toplam 100 (soru başına ≈14,3). Anahtar ağırlıkları 10 üzerinden yazılı, gösterimde PT/10 ile ölçeklenir. Gerçek notu hoca verir; amaç eksik noktayı görmek. */
(function () {
  'use strict';
  var KEY = 'mbp205-yazili';
  var PT = 100 / 7;   // soru başına puan (7 soru = 100)
  function sc100(raw) { return raw * PT / 10; }
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(k, v) { var d = load(); d[k] = v; try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* yok say */ } }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function md(s) { return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>'); }

  /* ---------- metin normalleştirme ve anahtar kavram puanlaması (Sudis motoru) ---------- */
  var MAP = { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u', 'â': 'a', 'î': 'i', 'û': 'u' };
  function tokens(s) {
    s = String(s || '').replace(/İ/g, 'i').replace(/I/g, 'ı').toLowerCase();
    s = s.replace(/[çğıöşüâîû]/g, function (c) { return MAP[c]; });
    return s.replace(/[^a-z0-9]+/g, ' ').trim().split(' ').filter(Boolean);
  }
  function lev(a, b) {
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) d[i] = [i];
    for (j = 0; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  function wmatch(t, p, multi) {
    if (/^\d+$/.test(p)) return t === p;
    if (p.length <= 3 && !multi) return t === p;
    if (t.indexOf(p) === 0) return true;
    if (p.length >= 6) for (var L = p.length - 1; L <= p.length + 1; L++) if (lev(t.slice(0, L), p) <= 1) return true;
    return false;
  }
  function phraseIn(toks, ph) {
    if (!ph.length) return false;
    for (var i = 0; i + ph.length <= toks.length; i++) {
      var ok = true;
      for (var j = 0; j < ph.length; j++) if (!wmatch(toks[i + j], ph[j], ph.length > 1)) { ok = false; break; }
      if (ok) return true;
    }
    return false;
  }
  function grade(q, text) {
    var toks = tokens(text), res = { score: 0, hits: [], miss: [] };
    if (toks.length < 8) { res.miss = q.keys.slice(); res.short = true; return res; }
    q.keys.forEach(function (k) {
      var hit = k.any.some(function (ph) { return phraseIn(toks, tokens(ph)); });
      (hit ? res.hits : res.miss).push(k);
      if (hit) res.score += k.w;
    });
    res.score = Math.round(res.score * 2) / 2;
    return res;
  }
  function fmt(n) { return (Math.round(n * 10) / 10).toString().replace('.', ','); }

  var CSS = '' +
    '.yz-info{background:var(--accent-soft);border-radius:var(--radius);padding:12px 16px;margin:0 0 18px;line-height:1.55}' +
    '.yz-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:14px;margin-bottom:22px}' +
    '.yz-card{display:block;text-decoration:none;color:var(--text);background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:16px 18px;box-shadow:var(--shadow);transition:transform .15s,border-color .15s}' +
    '.yz-card:hover{border-color:var(--accent);transform:translateY(-2px)}.yz-card h3{margin:0 0 6px;font-size:1.02rem}.yz-card ol{margin:6px 0;padding-left:18px;color:var(--muted);font-size:.88rem}' +
    '.yz-card .m{font-size:.85rem;color:var(--muted)}.yz-card .m b{color:var(--ok)}' +
    '.yz-q{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:16px 18px;margin:0 0 18px;line-height:1.6;box-shadow:var(--shadow)}' +
    '.yz-q h3{margin:0 0 4px;font-size:1rem}.yz-q .tag{font-size:.78rem;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.04em}' +
    '.yz-q .soru{margin:6px 0 10px;font-size:1.02rem}.yz-q code,.yz-sum code{font:.86em var(--mono);background:var(--surface-2);border:1px solid var(--border);border-radius:4px;padding:0 4px}' +
    '.yz-q textarea{width:100%;min-height:11em;resize:vertical;font:17px/1.55 inherit;font-family:inherit;padding:10px 12px;border-radius:10px;border:1px solid var(--border);background:var(--bg);color:var(--text)}' +
    '.yz-q textarea:focus{outline:2px solid var(--accent);outline-offset:1px}' +
    '.yz-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:10px 0 0}' +
    '.yz-bar button{font:inherit;font-weight:600;cursor:pointer;border-radius:8px;padding:7px 14px;border:1px solid var(--border);background:var(--surface);color:var(--text)}' +
    '.yz-bar button.pri{background:var(--accent);border-color:var(--accent);color:#fff}.yz-bar .n{font-size:.85rem;color:var(--muted)}' +
    '.yz-score{font-weight:800;padding:5px 12px;border-radius:8px}.yz-score.hi{background:var(--ok-soft);color:var(--ok)}.yz-score.mid{background:var(--warn-soft);color:var(--warn)}.yz-score.lo{background:var(--bad-soft);color:var(--bad)}' +
    '.yz-res{margin-top:10px;display:grid;gap:4px}.yz-res div{font-size:.92rem;padding:4px 10px;border-radius:6px}.yz-res .h{background:var(--ok-soft)}.yz-res .x{background:var(--bad-soft)}' +
    '.yz-res .h::before{content:"✓ ";color:var(--ok);font-weight:800}.yz-res .x::before{content:"✗ ";color:var(--bad);font-weight:800}.yz-res small{color:var(--muted)}' +
    '.yz-model{margin-top:12px;border-top:1px dashed var(--border);padding-top:10px}.yz-model h4{margin:0 0 6px;font-size:.95rem;color:var(--accent)}.yz-model p{margin:.35rem 0}' +
    '.yz-model ul{margin:.3rem 0;padding-left:1.2rem}.yz-model li{margin:.15rem 0}.yz-model pre{margin:8px 0 0;font:15px/1.5 var(--mono);background:var(--code-bg);color:var(--code-text);border-radius:8px;padding:10px 12px;overflow:auto}' +
    '.yz-model pre.out{background:var(--code-out, var(--surface-2));color:var(--code-text);margin-top:4px}.yz-model small{color:var(--muted)}' +
    '.yz-sum{position:sticky;bottom:12px;z-index:4;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:10px 16px;box-shadow:0 6px 20px rgba(0,0,0,.12);display:flex;flex-wrap:wrap;gap:10px;align-items:center}' +
    '.yz-sum b{font-size:1.05rem}';

  function css() { if (!document.getElementById('yz-css')) { var s = document.createElement('style'); s.id = 'yz-css'; s.textContent = CSS; document.head.appendChild(s); } }
  function byId(id) { return window.YAZILI.sorular.filter(function (q) { return q.id === id; })[0]; }
  function pick() {   // her başlıktan bir soru, en az çalışılan öne
    var st = load(), out = [];
    for (var s = 1; s <= 7; s++) {
      var c = window.YAZILI.sorular.filter(function (q) { return q.slot === s; });
      c.sort(function (a, b) { return ((st['n:' + a.id] || 0) - (st['n:' + b.id] || 0)) || (Math.random() - .5); });
      out.push(c[0].id);
    }
    return out;
  }

  function render(app, arg) {
    css();
    var Y = window.YAZILI;
    if (arg === 'rastgele') { var ids = pick(); try { sessionStorage.setItem('mbp205-rastgele', JSON.stringify(ids)); } catch (e) { /* yok */ } return deneme(app, { id: 'rastgele', title: 'Rastgele yazılı (her başlıktan 1 soru)', ids: ids }); }
    var d = Y.denemeler.filter(function (x) { return x.id === arg; })[0];
    if (d) return deneme(app, d);
    var st = load();
    document.title = 'Yazılı prova · MBP205';
    app.innerHTML = '<h1>Yazılı prova</h1>' +
      '<div class="yz-info"><b>Sınav böyle olacak:</b> hoca kod yazdırmayacak; tahtadaki başlıkları <b>açıklamanızı</b> ve <b>örnek vermenizi</b> isteyen 7 soru soracak. ' +
      'Her denemede tahtadaki 7 başlıktan birer soru var: kalıtım, kapsülleme, soyutlama, çok biçimlilik, soyut sınıf, arayüz ve karşılaştırma/UML. ' +
      'Cevabını kâğıda yazar gibi yaz, <b>Puanla</b>\'ya bas: cevabında geçen ve eksik kalan kavramları görürsün, sonra model cevapla karşılaştır.</div>' +
      '<div class="yz-list">' + Y.denemeler.concat([{ id: 'rastgele', title: 'Rastgele yazılı', ids: null }]).map(function (x) {
        var sc = st['best100:' + x.id];
        return '<a class="yz-card" href="#yazili/' + x.id + '"><h3>' + esc(x.title) + '</h3>' +
          (x.ids ? '<ol>' + x.ids.map(function (i) { return '<li>' + esc(Y.slots[byId(i).slot]) + '</li>'; }).join('') + '</ol>' : '<ol><li>Her başlıktan bir soru</li><li>Az çalıştığın sorular önce gelir</li></ol>') +
          '<div class="m">7 soru · 100 puan' + (sc != null ? ' · En iyi: <b>' + fmt(sc) + '/100</b>' : '') + '</div></a>';
      }).join('') + '</div>' +
      '<p class="yz-info" style="background:var(--surface-2)">Otomatik puan bir tahmindir: cevabında anahtar kavramların geçip geçmediğine bakar, anlamını değerlendiremez. Asıl amaç <b>hangi noktayı unuttuğunu</b> görmek. Hoca örnek istediği için her soruda bir puan örneğe ayrıldı.</p>';
    window.scrollTo(0, 0);
  }

  function deneme(app, d) {
    var Y = window.YAZILI, st = load(), qs = d.ids.map(byId);
    document.title = d.title + ' · MBP205';
    app.innerHTML = '<p><a href="#yazili">← Yazılı prova</a></p><h1>' + esc(d.title) + '</h1>' +
      qs.map(function (q, i) {
        return '<section class="yz-q" data-i="' + i + '"><span class="tag">' + (i + 1) + '. soru · ' + esc(Y.slots[q.slot]) + ' · ' + fmt(PT) + ' puan</span>' +
          '<div class="soru">' + md(q.q) + '</div>' +
          '<textarea placeholder="Cevabını buraya yaz: tanım, maddeler ve kısa bir Java örneği">' + esc(st['c:' + q.id] || '') + '</textarea>' +
          '<div class="yz-bar"><button type="button" class="pri yz-grade">Puanla</button><button type="button" class="yz-show">Model cevabı göster</button><span class="n"></span><span class="yz-score" hidden></span></div>' +
          '<div class="yz-res"></div><div class="yz-model" hidden></div></section>';
      }).join('') +
      '<div class="yz-sum"><span>Toplam: <b class="yz-tot">–</b> / 100</span>' +
      '<span style="flex:1"></span><button type="button" class="yz-all" style="font:inherit;font-weight:600;cursor:pointer;border-radius:8px;padding:7px 14px;border:1px solid var(--accent);background:var(--accent);color:#fff">Hepsini puanla</button></div>';
    var scores = {};
    function total() {
      var t = 0, n = 0; Object.keys(scores).forEach(function (k) { t += scores[k]; n++; });
      app.querySelector('.yz-tot').textContent = n ? fmt(t) : '–';
      if (n === 7) { var b = load()['best100:' + d.id]; if (b == null || t > b) save('best100:' + d.id, t); }
    }
    app.querySelectorAll('.yz-q').forEach(function (box) {
      var q = qs[+box.dataset.i], ta = box.querySelector('textarea'), cnt = box.querySelector('.n'),
        res = box.querySelector('.yz-res'), sc = box.querySelector('.yz-score'), mod = box.querySelector('.yz-model');
      function words() { cnt.textContent = tokens(ta.value).length + ' kelime'; }
      ta.addEventListener('input', function () { save('c:' + q.id, ta.value); words(); });
      words();
      function doGrade() {
        var r = grade(q, ta.value);
        scores[q.id] = sc100(r.score);
        sc.hidden = false; sc.textContent = fmt(sc100(r.score)) + ' / ' + fmt(PT);
        sc.className = 'yz-score ' + (r.score >= 7 ? 'hi' : r.score >= 4 ? 'mid' : 'lo');
        res.innerHTML = (r.short ? '<div class="x">Cevap çok kısa: en az birkaç cümle ve bir örnek yaz.</div>' : '') +
          r.hits.map(function (k) { return '<div class="h">' + md(k.k) + ' <small>(' + fmt(sc100(k.w)) + ')</small></div>'; }).join('') +
          r.miss.map(function (k) { return '<div class="x">' + md(k.k) + ' <small>(' + fmt(sc100(k.w)) + ')</small></div>'; }).join('');
        save('n:' + q.id, (load()['n:' + q.id] || 0) + 1);
        total();
      }
      box.querySelector('.yz-grade').addEventListener('click', doGrade);
      box.yzGrade = doGrade;
      box.querySelector('.yz-show').addEventListener('click', function () {
        if (!mod.hidden) { mod.hidden = true; this.textContent = 'Model cevabı göster'; return; }
        mod.hidden = false; this.textContent = 'Model cevabı gizle';
        mod.innerHTML = '<h4>Model cevap</h4>' + q.cevap.map(function (p) {
            var parts = p.split(/\s*•\s+/).filter(Boolean);
            return p.indexOf('• ') === -1 ? '<p>' + md(p) + '</p>' : (p.trim().indexOf('•') === 0 ? '' : '<p>' + md(parts.shift()) + '</p>') + '<ul>' + parts.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>';
          }).join('') +
          '<pre class="code">' + (window.VizeHL ? window.VizeHL(q.kod) : esc(q.kod)) + '</pre>' +
          (q.out ? '<small>Çıktı:</small><pre class="out">' + esc(q.out) + '</pre>' : '');
      });
    });
    app.querySelector('.yz-all').addEventListener('click', function () { app.querySelectorAll('.yz-q').forEach(function (b) { b.yzGrade(); }); });
    window.scrollTo(0, 0);
  }

  window.Yazili = { render: render, grade: grade, tokens: tokens };
})();
