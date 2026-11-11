/* Ortak motor: yönlendirme, porte/klavye çizimi, ses, alıştırma oturumu. */
(function () {
  'use strict';
  var M = window.MUSIC, C = window.COURSE;
  var LEVELS = window.LEVELS, TOPICS = window.TOPICS, TRAPS = window.TRAPS, RULES = window.RULES, RANGES = window.RANGES;

  /* ---------- depolama ---------- */
  function load(k, d) { try { var v = localStorage.getItem(C.storePrefix + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(C.storePrefix + k, JSON.stringify(v)); } catch (e) { /* gizli mod */ } }

  var prefs = Object.assign({
    theme: null, sound: true, naming: 'tr', answer: 'isim', mode: 'pratik', timer: 0, keyLabels: false,
    ozel: { treble: true, bass: false, range: 'dar', acc: false }
  }, load('prefs', {}));
  var stats = load('stats', {});   // anahtar: 'treble:E4' → { s: görülme, c: doğru, w: hata ağırlığı, t: son hata zamanı }
  var best = load('best', {});     // 'seviye|cevap|mod' → skor
  function savePrefs() { save('prefs', prefs); }

  /* ---------- yardımcılar ---------- */
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fmt(s) { return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>'); }
  function style() { return prefs.naming === 'letter' ? 'letter' : 'tr'; }
  function nm(n) { return M.name(n, style()); }
  function nmOct(n) { return esc(nm(n)) + '<sub>' + n.o + '</sub>'; }
  function alt(n) { return M.name(n, style() === 'letter' ? 'tr' : 'letter'); }
  function mmss(sec) { sec = Math.max(0, Math.round(sec)); return Math.floor(sec / 60) + ':' + ('0' + (sec % 60)).slice(-2); }

  /* ---------- tema ve ses düğmeleri ---------- */
  function currentTheme() { return prefs.theme || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
  function applyTheme() {
    var t = currentTheme();
    document.documentElement.setAttribute('data-theme', t);
    $('#themeBtn').textContent = t === 'dark' ? '☀' : '☾';
    $('#themeBtn').title = t === 'dark' ? 'Açık tema' : 'Koyu tema';
    var mc = document.querySelector('meta[name=theme-color]');
    if (mc) mc.setAttribute('content', t === 'dark' ? '#17130f' : '#efe6d4');
  }
  function applySound() {
    $('#soundBtn').innerHTML = prefs.sound ? '<span class="mus">♪</span>' : '<span class="mus off">♪</span>';
    $('#soundBtn').title = prefs.sound ? 'Sesi kapat' : 'Sesi aç';
    $('#soundBtn').setAttribute('aria-pressed', prefs.sound ? 'true' : 'false');
  }

  /* ---------- ses (Web Audio, piyanoya yakın sentez) ---------- */
  var actx = null, master = null;
  function audio() {
    if (!actx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      actx = new AC();
      master = actx.createGain(); master.gain.value = 0.32;
      var comp = actx.createDynamicsCompressor();
      master.connect(comp); comp.connect(actx.destination);
    }
    if (actx.state === 'suspended') actx.resume();
    return actx;
  }
  function playMidi(m, delay) {
    if (!prefs.sound) return;
    var c = audio(); if (!c) return;
    var f = M.freqMidi(m), t = c.currentTime + 0.01 + (delay || 0);
    var dur = Math.max(0.9, 2.4 - (m - 48) * 0.025);
    var out = c.createGain();
    out.gain.setValueAtTime(0.0001, t);
    out.gain.exponentialRampToValueAtTime(1, t + 0.006);
    out.gain.exponentialRampToValueAtTime(0.3, t + 0.22);
    out.gain.exponentialRampToValueAtTime(0.0005, t + dur);
    var lp = c.createBiquadFilter(); lp.type = 'lowpass';
    lp.frequency.setValueAtTime(Math.min(9000, f * 9), t);
    lp.frequency.exponentialRampToValueAtTime(Math.max(500, f * 2.2), t + dur);
    out.connect(lp); lp.connect(master);
    [[1, 1], [2, 0.42], [3, 0.2], [4, 0.1], [5, 0.05], [6, 0.03]].forEach(function (h) {
      var o = c.createOscillator(); o.type = h[0] === 1 ? 'triangle' : 'sine';
      o.frequency.value = f * h[0] * (1 + 0.00035 * h[0] * h[0]);
      var g = c.createGain(); g.gain.value = h[1];
      o.connect(g); g.connect(out); o.start(t); o.stop(t + dur + 0.05);
    });
  }

  /* ---------- porte çizimi (SVG) ---------- */
  var HS = 5;                 // yarım aralık (adım) yüksekliği
  var B1 = 90, B2 = 185;      // 1. ve 2. portenin 1. çizgi y'si
  var G_TREBLE = '𝄞', G_BASS = '𝄢';

  function staffLines(clef, base, W) {
    var s = '<g class="st-lines">';
    for (var p = 0; p <= 8; p += 2) s += '<line x1="4" x2="' + (W - 4) + '" y1="' + (base - p * HS) + '" y2="' + (base - p * HS) + '"/>';
    s += '</g>';
    if (clef === 'treble') s += '<text class="clef" x="9" y="' + (base - 2 * HS) + '">' + G_TREBLE + '</text>';
    else s += '<text class="clef" x="9" y="' + (base - 1 * HS) + '">' + G_BASS + '</text>';
    return s;
  }
  function noteSVG(n, clef, base, cx, cls) {
    var p = M.pos(n, clef), cy = base - p * HS;
    var s = '<g class="note ' + (cls || '') + '" data-midi="' + M.midi(n) + '">';
    M.ledgers(p).forEach(function (q) {
      var y = base - q * HS;
      s += '<line class="ledger" x1="' + (cx - 11) + '" x2="' + (cx + 11) + '" y1="' + y + '" y2="' + y + '"/>';
    });
    if (n.a) s += '<text class="acc" x="' + (cx - 10) + '" y="' + (cy + 3) + '">' + (n.a > 0 ? '♯' : '♭') + '</text>';
    s += '<ellipse class="head" cx="' + cx + '" cy="' + cy + '" rx="6.2" ry="4.3" transform="rotate(-22 ' + cx + ' ' + cy + ')"/>';
    if (p < 4) s += '<line class="stem" x1="' + (cx + 5.5) + '" x2="' + (cx + 5.5) + '" y1="' + (cy - 1) + '" y2="' + (cy - 34) + '"/>';
    else s += '<line class="stem" x1="' + (cx - 5.5) + '" x2="' + (cx - 5.5) + '" y1="' + (cy + 1) + '" y2="' + (cy + 34) + '"/>';
    s += '<rect class="hit" x="' + (cx - 13) + '" y="' + (cy - 11) + '" width="26" height="22"/>';
    return s + '</g>';
  }
  function toNote(x) {
    if (typeof x === 'string') return { n: M.parse(x) };
    var o = {}; for (var k in x) o[k] = x[k];
    if (typeof o.n === 'string') o.n = M.parse(o.n);
    return o;
  }
  function staffSVG(o) {
    var notes = (o.notes || []).map(toNote);
    var grand = o.clef === 'grand';
    var x0 = grand ? 56 : 50, sp = o.spacing || 40;
    var W = o.width || Math.max(150, x0 + notes.length * sp + 12);
    // dikey sınırlar: soru portesi sabit (yerleşim zıplamasın), örnek porteler içeriğe göre kırpılır
    var y0, y1;
    if (o.yr) { y0 = o.yr[0]; y1 = o.yr[1]; }
    else {
      var ext = function (clef, base) { return clef === 'treble' ? [base - 66, base + 8] : [base - 46, base + 4]; };
      var e = grand ? [ext('treble', B1)[0], ext('bass', B2)[1]] : ext(o.clef, B1);
      y0 = e[0]; y1 = e[1];
      notes.forEach(function (x) {
        var clef = grand ? x.st : o.clef, base = grand && x.st === 'bass' ? B2 : B1;
        var p = M.pos(x.n, clef), cy = base - p * HS;
        y0 = Math.min(y0, p < 4 ? cy - 36 : cy - 12);
        y1 = Math.max(y1, p < 4 ? cy + 12 : cy + 36);
      });
      y0 -= 4; y1 += 2;
    }
    var hasLabels = notes.some(function (x) { return x.label !== ''; }) || !!o.yr;
    var labelY = y1 + 16, H = y1 - y0 + (hasLabels ? 24 : 4);
    var s = '<svg class="staff' + (o.cls ? ' ' + o.cls : '') + '" viewBox="0 ' + y0 + ' ' + W + ' ' + H + '" style="max-width:' + Math.round(W * (o.scale || 2)) + 'px" role="img" aria-label="' + esc(o.aria || 'Porte') + '">';
    if (grand) {
      s += staffLines('treble', B1, W) + staffLines('bass', B2, W);
      s += '<line class="sysline" x1="4" x2="4" y1="' + (B1 - 40) + '" y2="' + B2 + '"/>';
    } else s += staffLines(o.clef, B1, W);
    notes.forEach(function (x, i) {
      var clef = grand ? x.st : o.clef;
      var base = grand && x.st === 'bass' ? B2 : B1;
      var cx = x.x != null ? x.x : x0 + i * sp + sp / 2;
      s += noteSVG(x.n, clef, base, cx, x.cls);
      var label = x.label != null ? x.label : nm(x.n);
      if (label) s += '<text class="st-label ' + (x.cls || '') + '" x="' + cx + '" y="' + labelY + '">' + esc(label) + '</text>';
    });
    if (o.extra) s += o.extra;
    return s + '</svg>';
  }

  /* ---------- klavye (HTML) ---------- */
  function keyboardHTML(o) {
    var a = M.dia(M.parse(o.from)), b = M.dia(M.parse(o.to)), whites = [];
    for (var d = a; d <= b; d++) whites.push(M.fromDia(d));
    var n = whites.length, w = 100 / n, bw = w * 0.6;
    var tag = o.interactive ? 'button' : 'div';
    var s = '<div class="kb' + (o.cls ? ' ' + o.cls : '') + '">';
    whites.forEach(function (wn) {
      var m = M.midi(wn);
      s += '<' + tag + ' class="wk' + (m === o.hi ? ' hi' : '') + '" data-midi="' + m + '"' + (o.interactive ? ' type="button" aria-label="' + esc(M.spoken(wn)) + '"' : '') + '>';
      if (o.mark && M.str(wn) === o.mark) s += '<i class="mark" title="Orta Do"></i>';
      if (o.labels === 'white' || o.labels === 'all') s += '<span>' + esc(nm(wn)) + '</span>';
      s += '</' + tag + '>';
    });
    whites.forEach(function (wn, i) {
      if ([0, 1, 3, 4, 5].indexOf(wn.s) < 0 || i === n - 1) return;
      var bn = { s: wn.s, a: 1, o: wn.o }, m = M.midi(bn);
      s += '<' + tag + ' class="bk' + (m === o.hi ? ' hi' : '') + '" style="left:' + ((i + 1) * w - bw / 2).toFixed(3) + '%;width:' + bw.toFixed(3) + '%" data-midi="' + m + '"' +
        (o.interactive ? ' type="button" aria-label="' + esc(M.spoken(bn)) + '"' : '') + '>';
      if (o.labels === 'all') s += '<span>' + esc(nm(bn)) + '<br>' + esc(nm({ s: wn.s + 1, a: -1, o: wn.o })) + '</span>';
      s += '</' + tag + '>';
    });
    return s + '</div>';
  }

  /* ---------- yönlendirme ---------- */
  function route() {
    stopSession();
    var h = (location.hash || '#tekrar').slice(1).split('/');
    var tab = h[0] === 'test' ? 'test' : 'tekrar';
    $$('.tabs a').forEach(function (a) { a.classList.toggle('on', a.getAttribute('data-tab') === tab); });
    if (tab === 'test') { if (h[1]) renderLevel(h[1]); else renderTestHome(); }
    else renderReview(h[1]);
    window.scrollTo(0, 0);
  }

  /* ---------- Genel Tekrar ---------- */
  function block(b) {
    switch (b.t) {
      case 'p': return '<p>' + fmt(b.text) + '</p>';
      case 'ul': return '<ul class="list">' + b.items.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul>';
      case 'table':
        return '<div class="tbl-wrap"><table class="tbl"><thead><tr>' + b.head.map(function (x) { return '<th>' + fmt(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          b.rows.map(function (r) { return '<tr>' + r.map(function (x) { return '<td>' + fmt(x) + '</td>'; }).join('') + '</tr>'; }).join('') +
          '</tbody></table>' + (b.caption ? '<p class="cap">' + fmt(b.caption) + '</p>' : '') + '</div>';
      case 'staff':
        return '<figure class="fig">' + staffSVG({ clef: b.clef, notes: b.notes, scale: 1.9, cls: 'demo' }) + (b.caption ? '<figcaption>' + fmt(b.caption) + '</figcaption>' : '') + '</figure>';
      case 'keys':
        return '<figure class="fig">' + keyboardHTML({ from: b.from, to: b.to, labels: b.labels, mark: b.mark, cls: 'demo' }) + (b.caption ? '<figcaption>' + fmt(b.caption) + '</figcaption>' : '') + '</figure>';
      case 'trap': return '<div class="box trap"><b>Tuzak</b>' + fmt(b.text) + '</div>';
      case 'tip': return '<div class="box tip"><b>İpucu</b>' + fmt(b.text) + '</div>';
      case 'low': return '<div class="box low"><b>Not</b>' + fmt(b.text) + '</div>';
    }
    return '';
  }
  function renderReview(id) {
    var main = $('#main');
    var t = id && TOPICS.filter(function (x) { return x.id === id; })[0];
    if (t) {
      var i = TOPICS.indexOf(t), prev = TOPICS[i - 1], next = TOPICS[i + 1];
      var s = '<nav class="crumb"><a href="#tekrar">← Konular</a><span>' + (i + 1) + ' / ' + TOPICS.length + '</span></nav>';
      s += '<article class="topic card"><h1>' + esc(t.title) + '</h1>' + t.blocks.map(block).join('');
      s += '<p class="go"><a class="btn primary" href="#test/' + t.level + '">Bu konuyu çalış →</a></p></article>';
      s += '<nav class="pager">' + (prev ? '<a href="#tekrar/' + prev.id + '">← ' + esc(prev.title) + '</a>' : '<span></span>') +
        (next ? '<a href="#tekrar/' + next.id + '">' + esc(next.title) + ' →</a>' : '<span></span>') + '</nav>';
      main.innerHTML = s;
      return;
    }
    var h = '<section class="hero"><p class="lead">' + fmt(C.reviewLead) + '</p>' +
      '<div class="hero-staff">' + staffSVG({ clef: 'treble', notes: ['E4', 'G4', 'B4', 'D5', 'F5', 'F4', 'A4', 'C5', 'E5'], scale: 1.7, cls: 'demo', spacing: 34 }) + '</div></section>';
    h += '<section class="card traps"><h2>Sık yapılan hatalar</h2><ul>' + TRAPS.map(function (x) {
      return '<li><a href="#tekrar/' + x.topic + '">' + fmt(x.t) + '</a></li>';
    }).join('') + '</ul></section>';
    h += '<h2 class="sec">Konular</h2><ol class="topics">' + TOPICS.map(function (x, i) {
      return '<li><a class="topic-card" href="#tekrar/' + x.id + '"><span class="num">' + (i + 1) + '</span><span class="tt">' + esc(x.title) + '</span><span class="arr">→</span></a></li>';
    }).join('') + '</ol>';
    main.innerHTML = h;
  }

  /* ---------- Alıştırma: ana sayfa ---------- */
  function weakItems() {
    var out = [];
    Object.keys(stats).forEach(function (k) {
      var st = stats[k];
      if (st.w >= 0.5) {
        var parts = k.split(':');
        try { out.push({ clef: parts[0], n: M.parse(parts[1]), key: k, w: st.w }); } catch (e) { /* eski kayıt */ }
      }
    });
    return out.sort(function (a, b) { return b.w - a.w; });
  }
  function bestSummary(id) {
    var ex = null, sp = null;
    Object.keys(best).forEach(function (k) {
      var p = k.split('|');
      if (p[0] !== id) return;
      if (p[2] === 'sinav') ex = Math.max(ex || 0, best[k]);
      if (p[2] === 'hiz') sp = Math.max(sp || 0, best[k]);
    });
    var r = [];
    if (ex != null) r.push('Sınav ' + ex);
    if (sp != null) r.push('Hız ' + sp);
    return r.join(' · ');
  }
  function levelCard(L) {
    var b = bestSummary(L.id);
    return '<a class="lvl" href="#test/' + L.id + '"><span class="no">' + L.no + '</span><span class="lt">' + esc(L.title) + '</span>' +
      '<span class="ld">' + esc(L.desc) + '</span>' + (b ? '<span class="best">' + esc(b) + '</span>' : '') + '</a>';
  }
  function renderTestHome() {
    var weak = weakItems();
    var s = '<section class="hero"><p class="lead">' + fmt(C.testLead) + '</p></section>';
    s += '<h2 class="sec">Seviyeler <small>önerilen sırayla</small></h2><div class="levels">' + LEVELS.map(levelCard).join('') + '</div>';
    s += '<h2 class="sec">Kendine göre</h2><div class="levels">';
    s += '<a class="lvl special" href="#test/hatalar"><span class="no">✎</span><span class="lt">Yanlışlarım</span><span class="ld">' +
      (weak.length ? 'Sık karıştırdığın ' + weak.length + ' nota üzerinden çalış.' : 'Henüz biriken hata yok. Birkaç seviye çözünce burası dolar.') + '</span></a>';
    s += '<a class="lvl special" href="#test/ozel"><span class="no">⚙</span><span class="lt">Özel çalışma</span><span class="ld">Anahtarı, aralığı ve işaretleri kendin seç.</span>' +
      (bestSummary('ozel') ? '<span class="best">' + esc(bestSummary('ozel')) + '</span>' : '') + '</a>';
    s += '</div>';
    s += '<h2 class="sec">İlerleme</h2>' + progressHTML();
    $('#main').innerHTML = s;
  }
  function progressHTML() {
    var total = 0, totalC = 0;
    Object.keys(stats).forEach(function (k) { total += stats[k].s || 0; totalC += stats[k].c || 0; });
    if (!total) return '<div class="card prog empty"><p>Soru çözdükçe her notadaki başarın burada renklenir.</p></div>';
    var s = '<div class="card prog"><p class="prog-sum"><b>' + total + '</b> cevap · <b>%' + Math.round(totalC / total * 100) + '</b> doğru</p>';
    [['treble', 'A3', 'C6'], ['bass', 'C2', 'E4']].forEach(function (r) {
      s += '<h3>' + M.CLEFS[r[0]].name + '</h3><div class="heat">';
      M.rangeNotes(r[1], r[2], false).forEach(function (n) {
        var st = stats[r[0] + ':' + M.str(n)], cls = 'none', pct = '—';
        if (st && st.s) { var a = st.c / st.s; cls = a >= 0.9 ? 'good' : a >= 0.7 ? 'mid' : 'bad'; pct = '%' + Math.round(a * 100); }
        s += '<div class="hc ' + cls + '" title="' + esc(M.CLEFS[r[0]].name + ', ' + M.posDesc(M.pos(n, r[0])) + (st ? ' · ' + st.c + '/' + st.s : '')) + '"><b>' + nmOct(n) + '</b><small>' + pct + '</small></div>';
      });
      s += '</div>';
    });
    var as = 0, ac = 0;
    Object.keys(stats).forEach(function (k) { if (/[#b]\d$/.test(k)) { as += stats[k].s; ac += stats[k].c; } });
    if (as) s += '<p class="prog-acc">Diyez ve bemollü notalar: <b>%' + Math.round(ac / as * 100) + '</b> doğru (' + as + ' cevap)</p>';
    s += '<div class="legend"><span class="hc good"></span>%90+ <span class="hc mid"></span>%70+ <span class="hc bad"></span>daha az <span class="hc none"></span>henüz yok</div>';
    s += '<button type="button" class="btn ghost small" id="resetStats">İlerlemeyi sıfırla</button></div>';
    return s;
  }

  /* ---------- Alıştırma: seviye sayfası ---------- */
  function getLevel(id) {
    if (id === 'hatalar') {
      var items = weakItems();
      return { id: 'hatalar', title: 'Hatalarım', desc: 'En çok karıştırdığın notalar. Doğru bildikçe listeden düşerler.', items: items, empty: items.length < 2 };
    }
    if (id === 'ozel') {
      var o = prefs.ozel, clefs = {};
      if (o.treble) clefs.treble = RANGES.treble[o.range];
      if (o.bass) clefs.bass = RANGES.bass[o.range];
      return { id: 'ozel', title: 'Özel çalışma', desc: 'Ayarları aşağıdan seç.', clefs: clefs, acc: !!o.acc };
    }
    return LEVELS.filter(function (L) { return L.id === id; })[0] || null;
  }
  function seg(pref, label, opts, cur) {
    return '<div class="field"><span class="lab">' + label + '</span><div class="seg" data-pref="' + pref + '">' + opts.map(function (o) {
      return '<button type="button" data-v="' + o[0] + '" class="' + (String(cur) === String(o[0]) ? 'on' : '') + '">' + o[1] + '</button>';
    }).join('') + '</div></div>';
  }
  var HELP = {
    isim: 'Notayı gör, adını seç. Bilgisayarda 1–7 ya da C D E F G A B tuşları da çalışır; ♯ için +, ♭ için −.',
    klavye: 'Notayı gör, klavyede tuşuna bas. Hangi oktavdaki tuşa bastığın önemli değil.',
    porte: 'Adı ve klavyedeki yeri verilen notayı porteye yerleştir. Fareyle tıklayınca yerleşir; dokunmatikte konumu seç, ▲▼ ile ayarla, Yerleştir\'e bas.'
  };
  function setupHTML(L) {
    var s = '';
    if (L.id === 'ozel') {
      var o = prefs.ozel;
      s += '<div class="field"><span class="lab">Anahtar</span><div class="seg multi" data-pref="ozel.clef">' +
        '<button type="button" data-v="treble" class="' + (o.treble ? 'on' : '') + '">Sol anahtarı</button>' +
        '<button type="button" data-v="bass" class="' + (o.bass ? 'on' : '') + '">Fa anahtarı</button></div></div>';
      s += seg('ozel.range', 'Aralık', [['dar', 'Porte içi'], ['genis', 'Ek çizgiler dahil']], o.range);
      s += seg('ozel.acc', 'İşaretler', [['false', 'Yok'], ['true', '♯ ve ♭ var']], o.acc);
    }
    s += seg('answer', 'Cevap yolu', [['isim', 'Nota adı'], ['klavye', 'Klavye'], ['porte', 'Porteye yerleştir']], prefs.answer);
    s += '<p class="help">' + esc(HELP[prefs.answer]) + '</p>';
    s += seg('mode', 'Mod', [['pratik', 'Pratik'], ['sinav', 'Sınav · 20 soru'], ['hiz', 'Hız · 60 sn']], prefs.mode);
    if (prefs.mode === 'pratik') s += seg('timer', 'Soru süresi', [[0, 'Kapalı'], [8, '8 sn'], [5, '5 sn'], [3, '3 sn']], prefs.timer);
    s += seg('naming', 'Adlandırma', [['tr', 'Do Re Mi'], ['letter', 'C D E']], prefs.naming);
    var b = best[L.id + '|' + prefs.answer + '|' + prefs.mode];
    if (b != null && prefs.mode !== 'pratik') s += '<p class="help best-line">Bu ayarlarla en iyin: <b>' + b + (prefs.mode === 'hiz' ? ' doğru' : ' puan') + '</b></p>';
    if (L.empty) s += '<p class="warn">Henüz yeterli hata birikmedi. Önce birkaç seviye çöz; yanlış yaptığın notalar buraya gelir.</p>';
    s += '<button type="button" class="btn primary big" id="startBtn"' + (L.empty ? ' disabled' : '') + '>Başla</button>';
    return s;
  }
  var curLevel = null;
  function renderLevel(id) {
    var L = getLevel(id);
    if (!L) { location.hash = '#test'; return; }
    curLevel = L;
    var s = '<nav class="crumb"><a href="#test">← Seviyeler</a>' + (L.no ? '<span>Seviye ' + L.no + '</span>' : '') + '</nav>';
    s += '<header class="lvl-head"><h1>' + esc(L.title) + '</h1><p>' + esc(L.desc) + '</p>' +
      (L.topic ? '<a class="small-link" href="#tekrar/' + L.topic + '">Konuyu tekrar et</a>' : '') + '</header>';
    s += '<div id="setup" class="card setup">' + setupHTML(L) + '</div><div id="session"></div>';
    $('#main').innerHTML = s;
  }
  function onSetupClick(btn) {
    var segEl = btn.closest('.seg'), pref = segEl.getAttribute('data-pref'), v = btn.getAttribute('data-v');
    if (pref === 'ozel.clef') {
      var other = v === 'treble' ? 'bass' : 'treble';
      if (prefs.ozel[v] && !prefs.ozel[other]) return; // en az biri seçili kalmalı
      prefs.ozel[v] = !prefs.ozel[v];
    } else if (pref === 'ozel.range') prefs.ozel.range = v;
    else if (pref === 'ozel.acc') prefs.ozel.acc = v === 'true';
    else if (pref === 'timer') prefs.timer = +v;
    else prefs[pref] = v;
    savePrefs();
    if (curLevel && curLevel.id === 'ozel') curLevel = getLevel('ozel');
    $('#setup').innerHTML = setupHTML(curLevel);
  }

  /* ---------- oturum ---------- */
  var S = null;
  function poolFor(L) {
    if (L.items) return L.items.map(function (x) { return { clef: x.clef, n: x.n, key: x.key }; });
    var out = [];
    Object.keys(L.clefs).forEach(function (c) {
      M.rangeNotes(L.clefs[c][0], L.clefs[c][1], L.acc).forEach(function (n) { out.push({ clef: c, n: n, key: c + ':' + M.str(n) }); });
    });
    return out;
  }
  function startSession() {
    var L = curLevel, pool = poolFor(L);
    if (pool.length < 2) return;
    stopSession();
    S = {
      L: L, pool: pool, mode: prefs.mode, answer: prefs.answer, timer: prefs.mode === 'pratik' ? prefs.timer : 0,
      hasAcc: pool.some(function (it) { return it.n.a !== 0; }),
      asked: 0, correct: 0, streak: 0, bestStreak: 0, recent: [], queue: [], mistakes: [],
      t0: Date.now(), total: prefs.mode === 'sinav' ? 20 : 0, endAt: prefs.mode === 'hiz' ? Date.now() + 60000 : 0,
      timers: [], accSel: 0, ghost: null, locked: false, waiting: false, done: false
    };
    // her anahtar için sabit dikey aralık (oturum boyunca porte zıplamasın) ve yerleştirme sınırları
    S.yr = {}; S.pr = {};
    ['treble', 'bass'].forEach(function (c) {
      var ps = pool.filter(function (it) { return it.clef === c; }).map(function (it) { return M.pos(it.n, c); });
      if (!ps.length) return;
      var lo = Math.max(-6, Math.min.apply(null, ps) - 2), hi = Math.min(14, Math.max.apply(null, ps) + 2);
      S.pr[c] = [lo, hi];
      S.yr[c] = [Math.min(c === 'treble' ? B1 - 66 : B1 - 46, B1 - hi * HS - 12, B1 - Math.min(hi, 3) * HS - 36) - 4,
                 Math.max(B1 + 8, B1 - lo * HS + 12, B1 - Math.max(lo, 4) * HS + 36) + 2];
    });
    $('#setup').hidden = true;
    $('#session').innerHTML =
      '<div class="sess card">' +
      '<div class="sess-top">' +
      '<div class="stat"><b id="sCorrect">0</b><span>doğru</span></div>' +
      '<div class="stat"><b id="sAsked">0</b><span>' + (S.mode === 'sinav' ? '/ 20' : 'soru') + '</span></div>' +
      '<div class="stat"><b id="sStreak">0</b><span>seri</span></div>' +
      '<div class="stat"><b id="sClock">0:00</b><span>' + (S.mode === 'hiz' ? 'kalan' : 'süre') + '</span></div>' +
      '<button type="button" class="btn ghost small" id="stopBtn">Bitir</button></div>' +
      '<div class="progress"><i id="sProg"></i></div>' +
      '<div class="qbar' + (S.timer ? '' : ' off') + '"><i id="qBar"></i></div>' +
      '<div id="qPrompt" class="qprompt"></div>' +
      '<div id="qStaff" class="qstaff"></div>' +
      '<div id="qAnswer" class="qanswer"></div>' +
      '<div id="qFeed" class="feed" aria-live="polite"></div>' +
      '</div>';
    S.iv = setInterval(tick, 250);
    next();
    var sess = $('#session'); if (sess.scrollIntoView) sess.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  function stopSession() {
    if (!S) return;
    S.timers.forEach(clearTimeout); clearTimeout(S.qto); clearInterval(S.iv);
    S.done = true; S = null;
  }
  function later(fn, ms) { var id = S; S.timers.push(setTimeout(function () { if (S === id) fn(); }, ms)); }
  function tick() {
    if (!S || S.done) return;
    var now = Date.now();
    if (S.mode === 'hiz') {
      var left = (S.endAt - now) / 1000;
      $('#sClock').textContent = mmss(Math.ceil(left));
      $('#sProg').style.width = Math.max(0, Math.min(100, (1 - left / 60) * 100)) + '%';
      if (left <= 0 && !S.locked) finish();
    } else $('#sClock').textContent = mmss((now - S.t0) / 1000);
  }
  function updateTop() {
    $('#sCorrect').textContent = S.correct;
    $('#sAsked').textContent = S.asked;
    $('#sStreak').textContent = S.streak;
    if (S.mode === 'sinav') $('#sProg').style.width = (S.asked / S.total * 100) + '%';
    if (S.mode === 'pratik') $('#sProg').style.width = (S.asked ? S.correct / S.asked * 100 : 0) + '%';
  }
  function pick() {
    if (S.queue.length && S.queue[0].due <= S.asked) return S.queue.shift().item;
    var cands = S.pool.filter(function (it) { return S.recent.indexOf(it.key) < 0; });
    if (!cands.length) cands = S.pool;
    var now = Date.now(), tot = 0;
    var ws = cands.map(function (it) {
      var st = stats[it.key] || { s: 0, w: 0, t: 0 };
      var w = 1 + 1.6 * (st.w || 0) + (st.s < 2 ? 0.6 : 0) + (now - (st.t || 0) < 15 * 60000 ? 1 : 0);
      if (it.n.a && S.L.acc) w *= 0.5; // işaretli/işaretsiz dengesi ~ yarı yarıya
      tot += w; return w;
    });
    var r = Math.random() * tot;
    for (var i = 0; i < cands.length; i++) { r -= ws[i]; if (r <= 0) return cands[i]; }
    return cands[cands.length - 1];
  }
  function next() {
    if (!S || S.done) return;
    clearTimeout(S.qto);
    if (S.mode === 'sinav' && S.asked >= S.total) return finish();
    if (S.mode === 'hiz' && Date.now() >= S.endAt) return finish();
    var it = pick();
    S.cur = it;
    S.recent.push(it.key);
    while (S.recent.length > Math.min(2, S.pool.length - 1)) S.recent.shift();
    S.locked = false; S.waiting = false; S.accSel = 0; S.ghost = null;
    renderQuestion();
    updateTop();
    startQTimer();
  }
  function startQTimer() {
    var bar = $('#qBar');
    if (!S.timer || !bar) return;
    bar.style.transition = 'none'; bar.style.width = '100%';
    void bar.offsetWidth;
    bar.style.transition = 'width ' + S.timer + 's linear'; bar.style.width = '0%';
    S.qto = setTimeout(function () { if (S && !S.locked) submit(null); }, S.timer * 1000);
  }
  function stopQTimer() {
    clearTimeout(S.qto);
    var bar = $('#qBar');
    if (bar) { var w = getComputedStyle(bar).width; bar.style.transition = 'none'; bar.style.width = w; }
  }

  var QX = 98, QW = 150;
  function questionStaff(extraNotes, cls) {
    return staffSVG({ clef: S.cur.clef, notes: extraNotes, width: QW, scale: 2.7, yr: S.yr[S.cur.clef], cls: 'q ' + (cls || ''), aria: M.CLEFS[S.cur.clef].name + ' porte' });
  }
  function accRow() {
    if (!S.hasAcc) return '';
    return '<div class="seg accseg" id="accSeg">' + [[-1, '♭', 'bemol'], [0, '♮', 'işaretsiz'], [1, '♯', 'diyez']].map(function (a) {
      return '<button type="button" data-acc="' + a[0] + '" class="' + (S.accSel === a[0] ? 'on' : '') + '" aria-label="' + a[2] + '">' + a[1] + '</button>';
    }).join('') + '</div>';
  }
  function renderQuestion() {
    var it = S.cur, clefName = M.CLEFS[it.clef].name;
    $('#qFeed').innerHTML = '';
    if (S.answer === 'porte') {
      var ns = S.pool.filter(function (x) { return x.clef === it.clef; }).map(function (x) { return M.dia(x.n); });
      var lo = Math.floor(Math.min.apply(null, ns) / 7), hi = Math.floor(Math.max.apply(null, ns) / 7);
      $('#qPrompt').innerHTML = '<div class="target"><span class="tname">' + nmOct(it.n) + '</span>' +
        '<span class="tsub">' + esc(clefName) + 'nda yerleştir</span></div>' +
        keyboardHTML({ from: 'C' + lo, to: 'B' + hi, hi: M.midi(it.n), mark: 'C4', labels: 'none', cls: 'mini' });
      $('#qStaff').innerHTML = questionStaff([], 'place').replace('</svg>', '<g id="ghost"></g><rect class="catch" x="0" y="' + S.yr[it.clef][0] + '" width="' + QW + '" height="' + (S.yr[it.clef][1] - S.yr[it.clef][0] + 24) + '"/></svg>');
      $('#qAnswer').innerHTML = accRow() +
        '<div class="place-ctl"><button type="button" class="btn" id="gDown" aria-label="Aşağı">▼</button>' +
        '<button type="button" class="btn primary" id="gOk" disabled>Yerleştir</button>' +
        '<button type="button" class="btn" id="gUp" aria-label="Yukarı">▲</button></div>';
      bindPlace();
      return;
    }
    $('#qPrompt').innerHTML = '<p class="ask">' + (S.answer === 'klavye' ? 'Bu notanın tuşu hangisi?' : 'Bu nota hangisi?') + ' <span class="cl">' + esc(clefName) + '</span></p>';
    $('#qStaff').innerHTML = questionStaff([{ n: it.n, x: QX, label: '' }]);
    if (S.answer === 'isim') {
      var b = '<div class="names">';
      for (var s = 0; s < 7; s++) {
        var n = { s: s, a: 0, o: 4 };
        b += '<button type="button" class="nbtn" data-s="' + s + '"><b>' + esc(nm(n)) + '</b><small>' + esc(alt(n)) + '</small></button>';
      }
      $('#qAnswer').innerHTML = accRow() + b + '</div>';
    } else {
      $('#qAnswer').innerHTML = keyboardHTML({ from: 'C4', to: 'B4', interactive: true, labels: prefs.keyLabels ? 'white' : 'none', cls: 'answer' }) +
        '<label class="chk"><input type="checkbox" id="keyLabels"' + (prefs.keyLabels ? ' checked' : '') + '> Tuş adlarını göster</label>';
    }
  }
  function setAcc(a) {
    if (!S || !S.hasAcc || S.locked) return;
    S.accSel = a;
    $$('#accSeg button').forEach(function (b) { b.classList.toggle('on', +b.getAttribute('data-acc') === a); });
    if (S.answer === 'porte' && S.ghost != null) drawGhost(S.ghost);
  }

  /* porteye yerleştirme */
  var PMIN = -6, PMAX = 14;
  function drawGhost(p) {
    var pr = S.pr[S.cur.clef] || [PMIN, PMAX];
    p = Math.max(pr[0], Math.min(pr[1], p));
    S.ghost = p;
    var g = $('#ghost'); if (!g) return;
    g.innerHTML = noteSVG(M.atPos(p, S.cur.clef, S.accSel), S.cur.clef, B1, QX, 'ghost');
    var ok = $('#gOk'); if (ok) ok.disabled = false;
  }
  function svgPos(svg, e) {
    var pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
    var loc = pt.matrixTransform(svg.getScreenCTM().inverse());
    return Math.round((B1 - loc.y) / HS);
  }
  function bindPlace() {
    var svg = $('#qStaff svg');
    svg.addEventListener('pointermove', function (e) { if (e.pointerType === 'mouse' && !S.locked) drawGhost(svgPos(svg, e)); });
    svg.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse' && !S.locked) { $('#ghost').innerHTML = ''; S.ghost = null; $('#gOk').disabled = true; } });
    svg.addEventListener('pointerdown', function (e) {
      if (S.locked) return;
      drawGhost(svgPos(svg, e));
      if (e.pointerType === 'mouse') commitPlace();
    });
  }
  function commitPlace() { if (S && !S.locked && S.ghost != null) submit({ p: S.ghost, a: S.accSel }); }

  /* cevap kontrolü */
  function isRight(it, ans) {
    if (!ans) return false;
    if (S.answer === 'isim') return ans.s === it.n.s && ans.a === it.n.a;
    if (S.answer === 'klavye') return ((ans.midi % 12) + 12) % 12 === M.pc(it.n);
    return ans.p === M.pos(it.n, it.clef) && ans.a === it.n.a;
  }
  function nearestStep(n, s, a) {
    var bestN = null;
    for (var o = n.o - 1; o <= n.o + 1; o++) {
      var c = { s: s, a: a, o: o };
      if (!bestN || Math.abs(M.dia(c) - M.dia(n)) < Math.abs(M.dia(bestN) - M.dia(n))) bestN = c;
    }
    return bestN;
  }
  // Yanlış cevabın açıklaması: { correct, yours, rules[], ghost }
  function diagnose(it, ans, mode) {
    var n = it.n, clef = it.clef, other = M.otherClef(clef), p = M.pos(n, clef);
    var cName = M.CLEFS[clef].name, oName = M.CLEFS[other].name;
    var r = { ghost: null, rules: [clef + '-' + M.region(p)] };
    r.correct = '<b>' + esc(nm(n)) + '</b> <small>' + esc(cName + ', ' + M.posDesc(p)) + '</small>';
    var dir = function (d) { return d > 0 ? 'yukarıda' : 'aşağıda'; };
    if (!ans) {
      r.yours = 'Süre doldu. Önce en yakın referans notayı bul, sonra adım say.';
    } else if (mode === 'klavye') {
      var cp = ((ans.midi % 12) + 12) % 12;
      r.yours = 'Bastığın tuş <b>' + esc(M.pcName(cp, style())) + '</b>, doğrusu <b>' + esc(M.pcName(M.pc(n), style())) + '</b>.';
      var white = [0, 2, 4, 5, 7, 9, 11].indexOf(cp);
      if (white >= 0 && white !== n.s) {
        var g0 = nearestStep(n, white, 0), d0 = M.dia(g0) - M.dia(n);
        if (M.atPos(p, other).s === white) r.yours += ' Notayı ' + esc(oName) + ' gibi okumuş olabilirsin.';
        else if (Math.abs(d0) <= 2) r.yours += ' Bu tuş, notadan ' + Math.abs(d0) + ' adım ' + dir(d0) + 'ki notaya ait.';
      } else if (white === n.s && n.a) r.yours += ' Nota adı doğru; işaret yüzünden ' + (n.a > 0 ? 'sağdaki' : 'soldaki') + ' siyah tuş gerekiyordu.';
      r.rules.push('klavye');
    } else {
      var g = mode === 'porte' ? M.atPos(ans.p, clef, ans.a) : nearestStep(n, ans.s, ans.a);
      var d = M.dia(g) - M.dia(n), gp = M.pos(g, clef);
      r.ghost = g;
      if (d === 0) {
        r.yours = 'Konum doğru, işarete bak: bu nota ' + (n.a ? (n.a > 0 ? '♯ (diyez)' : '♭ (bemol)') + ' işaretli' : 'işaretsiz') + '. ' +
          (mode === 'porte' ? 'Yerleştirmeden önce işareti seç.' : 'Önce işareti, sonra adı seç.');
      } else if (mode === 'porte') {
        r.yours = 'Yerleştirdiğin konum <b>' + esc(M.posDesc(gp)) + '</b>; orada <b>' + esc(nm(g)) + '</b> var. Doğru yer ' + Math.abs(d) + ' adım ' + (d > 0 ? 'aşağıda' : 'yukarıda') + '.';
        if (ans.p === M.pos(n, other)) r.yours += ' Bu, notanın ' + esc(oName) + 'ndaki yeri; burada ' + esc(cName) + ' var.';
      } else {
        r.yours = 'Seçtiğin <b>' + esc(nm(g)) + '</b> bu anahtarda ' + esc(M.posDesc(gp)) + ' konumunda olurdu; doğru notadan ' + Math.abs(d) + ' adım ' + dir(d) + '.';
        if (M.atPos(p, other).s === g.s) r.yours += ' Bu konumu ' + esc(oName) + ' gibi okumuş olabilirsin: orada gerçekten ' + esc(M.TR[g.s]) + ' olurdu.';
        else if (Math.abs(d) === 2) r.yours += ' Çizgiden çizgiye ya da aradan araya geçmek iki adımdır.';
      }
    }
    if (n.a || (ans && ans.a)) r.rules.push('isaret');
    return r;
  }
  function feedbackHTML(dg) {
    return '<div class="box yours"><b>Senin cevabın</b>' + dg.yours + '</div>' +
      dg.rules.map(function (k) { return RULES[k] ? '<div class="box rule"><b>Kural</b>' + fmt(RULES[k]) + '</div>' : ''; }).join('');
  }
  function markAnswerUI(it, ans, ok) {
    if (S.answer === 'isim') {
      $$('.nbtn').forEach(function (b) {
        var s = +b.getAttribute('data-s');
        if (s === it.n.s) b.classList.add('ok');
        if (ans && s === ans.s && !ok) b.classList.add('bad');
        b.disabled = true;
      });
    } else if (S.answer === 'klavye') {
      $$('.kb.answer [data-midi]').forEach(function (k) {
        var pc = +k.getAttribute('data-midi') % 12;
        if (pc === M.pc(it.n)) k.classList.add('ok');
        if (ans && pc === ((ans.midi % 12) + 12) % 12 && !ok) k.classList.add('bad');
        k.disabled = true;
      });
    } else {
      $$('#qAnswer button').forEach(function (b) { b.disabled = true; });
    }
    $$('#accSeg button').forEach(function (b) { b.disabled = true; });
  }
  function submit(ans) {
    if (!S || S.locked || S.done) return;
    S.locked = true;
    stopQTimer();
    var it = S.cur, ok = isRight(it, ans);
    S.asked++;
    var st = stats[it.key] || (stats[it.key] = { s: 0, c: 0, w: 0, t: 0 });
    st.s++;
    if (ok) {
      st.c++; st.w = Math.max(0, (st.w || 0) - 0.4);
      S.correct++; S.streak++; S.bestStreak = Math.max(S.bestStreak, S.streak);
    } else {
      st.w = (st.w || 0) + 1; st.t = Date.now();
      S.streak = 0;
      if (!S.queue.some(function (q) { return q.item.key === it.key; })) S.queue.push({ item: it, due: S.asked + 3 });
      S.mistakes.push({ it: it, ans: ans, mode: S.answer });
    }
    save('stats', stats);
    updateTop();
    markAnswerUI(it, ans, ok);
    playMidi(M.midi(it.n));

    var dg = ok ? null : diagnose(it, ans, S.answer);
    var shown = [{ n: it.n, x: ok || !dg.ghost ? QX : 76, cls: 'ok', label: nm(it.n) }];
    if (dg && dg.ghost) shown.push({ n: dg.ghost, x: 122, cls: 'bad', label: nm(dg.ghost) });
    $('#qStaff').innerHTML = questionStaff(shown, ok ? 'right' : 'wrong');
    var feed = $('#qFeed');
    if (ok) {
      feed.innerHTML = '<div class="fb ok">✓ ' + esc(nm(it.n)) + ' <small>' + esc(M.posDesc(M.pos(it.n, it.clef))) + '</small></div>';
      later(next, S.mode === 'hiz' ? 260 : S.mode === 'sinav' ? 520 : 760);
      return;
    }
    if (S.mode === 'pratik') {
      feed.innerHTML = '<div class="fb bad">✗ Doğrusu: ' + dg.correct + '</div>' + feedbackHTML(dg) +
        '<button type="button" class="btn primary" id="contBtn">Devam <kbd>Enter</kbd></button>';
      S.waiting = true;
      var cb = $('#contBtn'); if (cb) cb.focus({ preventScroll: true });
    } else {
      feed.innerHTML = '<div class="fb bad">✗ Doğrusu: ' + dg.correct + '</div>';
      later(next, S.mode === 'hiz' ? 900 : 1300);
    }
  }

  function finish() {
    if (!S || S.done) return;
    S.timers.forEach(clearTimeout); clearTimeout(S.qto); clearInterval(S.iv);
    S.done = true;
    var sec = (Date.now() - S.t0) / 1000;
    var key = S.L.id + '|' + S.answer + '|' + S.mode, score, unit, isBest = false;
    if (S.mode === 'sinav') { score = Math.round(S.correct / S.total * 100); unit = 'puan'; }
    else if (S.mode === 'hiz') { score = S.correct; unit = 'doğru / 60 sn'; }
    else { score = S.asked ? Math.round(S.correct / S.asked * 100) : 0; unit = '% doğru'; }
    if (S.mode !== 'pratik' && S.asked) {
      if (best[key] == null || score > best[key]) { isBest = true; best[key] = score; save('best', best); }
    }
    var s = '<div class="result">';
    s += '<p class="r-score"><b>' + score + '</b><span>' + unit + '</span></p>';
    if (isBest) s += '<p class="r-best">Bu ayarlarla yeni en iyin</p>';
    else if (best[key] != null && S.mode !== 'pratik') s += '<p class="r-sub">En iyin: ' + best[key] + '</p>';
    s += '<p class="r-sub">' + S.correct + ' / ' + S.asked + ' doğru · ' + mmss(sec) + ' · en uzun seri ' + S.bestStreak + '</p>';
    var seen = {}, list = S.mistakes.filter(function (m) { if (seen[m.it.key]) return false; seen[m.it.key] = 1; return true; }).slice(0, 12);
    if (list.length) {
      s += '<h3>Yanlışların</h3><div class="mlist">';
      list.forEach(function (m) {
        var dg = diagnose(m.it, m.ans, m.mode);
        var notes = [{ n: m.it.n, x: dg.ghost ? 76 : QX, cls: 'ok', label: nm(m.it.n) }];
        if (dg.ghost) notes.push({ n: dg.ghost, x: 122, cls: 'bad', label: nm(dg.ghost) });
        s += '<div class="mitem">' + staffSVG({ clef: m.it.clef, notes: notes, width: QW, scale: 1.3, cls: 'mini-staff' }) +
          '<div class="mtext"><p>' + dg.correct + '</p><p class="why">' + dg.yours + '</p></div></div>';
      });
      s += '</div>';
    } else if (S.asked) s += '<p class="r-clean">Hiç yanlış yok.</p>';
    s += '<div class="r-btns"><button type="button" class="btn primary" id="againBtn">Tekrar</button>' +
      '<button type="button" class="btn" id="setupBtn">Ayarları değiştir</button>' +
      '<a class="btn ghost" href="#test">Seviyeler</a></div></div>';
    $('#session').innerHTML = '<div class="sess card">' + s + '</div>';
  }

  /* ---------- olaylar ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target;
    var el;
    if ((el = t.closest('#themeBtn'))) { prefs.theme = currentTheme() === 'dark' ? 'light' : 'dark'; savePrefs(); applyTheme(); return; }
    if ((el = t.closest('#soundBtn'))) { prefs.sound = !prefs.sound; savePrefs(); applySound(); if (prefs.sound) playMidi(60); return; }
    if ((el = t.closest('#setup .seg button'))) { onSetupClick(el); return; }
    if ((el = t.closest('#startBtn'))) { startSession(); return; }
    if ((el = t.closest('#stopBtn'))) { if (S && S.asked) finish(); else { stopSession(); $('#session').innerHTML = ''; $('#setup').hidden = false; } return; }
    if ((el = t.closest('#againBtn'))) { startSession(); return; }
    if ((el = t.closest('#setupBtn'))) { stopSession(); $('#session').innerHTML = ''; $('#setup').hidden = false; $('#setup').innerHTML = setupHTML(curLevel); return; }
    if ((el = t.closest('#contBtn'))) { next(); return; }
    if ((el = t.closest('#resetStats'))) {
      if (window.confirm('Tüm ilerleme ve en iyi skorlar silinsin mi?')) { stats = {}; best = {}; save('stats', stats); save('best', best); renderTestHome(); }
      return;
    }
    if (S && !S.done) {
      if ((el = t.closest('#accSeg button'))) { setAcc(+el.getAttribute('data-acc')); return; }
      if ((el = t.closest('.nbtn'))) { submit({ s: +el.getAttribute('data-s'), a: S.accSel }); return; }
      if ((el = t.closest('.kb.answer [data-midi]'))) {
        var m = +el.getAttribute('data-midi');
        if (S.locked) { playMidi(m); return; }
        submit({ midi: m });
        return;
      }
      if ((el = t.closest('#gUp'))) { drawGhost((S.ghost == null ? 4 : S.ghost) + 1); return; }
      if ((el = t.closest('#gDown'))) { drawGhost((S.ghost == null ? 4 : S.ghost) - 1); return; }
      if ((el = t.closest('#gOk'))) { commitPlace(); return; }
    }
    // tekrar sayfasında notalara/tuşlara dokununca ses
    if ((el = t.closest('.staff.demo .note, .kb.demo [data-midi], .kb.mini [data-midi], .mini-staff .note'))) {
      playMidi(+el.getAttribute('data-midi'));
      el.classList.add('ping'); setTimeout(function () { el.classList.remove('ping'); }, 300);
    }
  });
  document.addEventListener('change', function (e) {
    if (e.target.id === 'keyLabels') {
      prefs.keyLabels = e.target.checked; savePrefs();
      if (S && !S.locked) renderQuestion();
    }
  });
  document.addEventListener('keydown', function (e) {
    if (!S || S.done || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target && e.target.matches && e.target.matches('input, textarea, select')) return;
    var k = e.key;
    if (S.waiting) {
      if (k === 'Enter' || k === ' ') { e.preventDefault(); next(); }
      return;
    }
    if (S.locked) return;
    if (k === '+' || k === '#') { setAcc(1); return; }
    if (k === '-') { setAcc(-1); return; }
    if (k === '0') { setAcc(0); return; }
    var i = k.length === 1 ? '1234567'.indexOf(k) : -1;
    if (i < 0 && k.length === 1) i = 'cdefgab'.indexOf(k.toLowerCase());
    if (S.answer === 'isim' && i >= 0) { e.preventDefault(); submit({ s: i, a: S.accSel }); return; }
    if (S.answer === 'klavye' && i >= 0) { e.preventDefault(); submit({ midi: 60 + [0, 2, 4, 5, 7, 9, 11][i] + S.accSel }); return; }
    if (S.answer === 'porte') {
      if (k === 'ArrowUp') { e.preventDefault(); drawGhost((S.ghost == null ? 4 : S.ghost) + 1); }
      else if (k === 'ArrowDown') { e.preventDefault(); drawGhost((S.ghost == null ? 4 : S.ghost) - 1); }
      else if (k === 'Enter') { e.preventDefault(); commitPlace(); }
    }
  });
  window.addEventListener('hashchange', route);
  if (window.matchMedia) {
    var mq = matchMedia('(prefers-color-scheme: dark)');
    if (mq.addEventListener) mq.addEventListener('change', function () { if (!prefs.theme) applyTheme(); });
  }

  applyTheme(); applySound(); route();

  // test ve doğrulama için
  window.__piano = { diagnose: function (it, ans, mode) { return diagnose(it, ans, mode); }, state: function () { return S; } };
})();
