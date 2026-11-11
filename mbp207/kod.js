/* MBP207 · Kod alıştırmaları (Pyodide): boşluk doldurma, eksik blok, sıfırdan yazma.  #kod/<mod>/<program> */
(function () {
  'use strict';
  var PYO = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/';
  var MAXTRY = 5;

  /* ---------- programlar ----------
     ⟦a‖b⟧ = boşluk (ilk cevap asıl); "##BLOK: ipucu" … "##SON" = eksik blok */
  var PROGS = [
    { id: 'gelir', soru: { giris: 'Bir işletmenin 12 aylık gelirleri aşağıdaki `gelirler` listesinde verilmiştir. Ay numaraları 1’den başlamaktadır. Aşağıdaki işlemleri fonksiyonlar kullanarak yapan Python programını yazınız.', liste: 'gelirler = [30000, 40000, 50000, 42000, 55000, 25000, 36000, 30000, 52000, 45000, 28000, 48000]',
        maddeler: [
          '**a)** Her gelirin kaçıncı aya ait olduğunu ve o ayın gelirini “1. ay geliri 30000” biçiminde yan yana yazan `aylikGelirler(liste)` fonksiyonunu `enumerate` kullanarak yazınız.',
          '**b)** Kullanıcıdan başlangıç ve bitiş ay numarasını alarak bu aylar arasındaki gelirlerden yeni bir liste oluşturan, bu gelirleri gerçek ay numaralarıyla ekrana yazan ve yeni listeyi döndüren `aralikListele(liste)` fonksiyonunu yazınız.',
          '**c)** Kullanıcının girdiği ay aralığındaki gelirlerin toplamını ve ortalamasını hesaplayıp döndüren `aralikToplamOrtalama(liste)` fonksiyonunu yazınız.',
          '**d)** Yıllık ortalama gelirden fazla gelir elde edilen ayları ve gelirlerini ekrana yazan `ortalamaUstuAylar(liste)` fonksiyonunu yazınız.',
          '**e)** Bu fonksiyonları 1–4 seçenekleriyle çağıran, 0 girilince “Programdan çıkılıyor” yazıp sonlanan ve geçersiz seçimde uyarı veren bir menüyü `main()` fonksiyonu içinde `while True` ile oluşturunuz. 3. seçenekte sonuç “Toplam: … Ortalama: …” biçiminde, ortalama iki ondalıkla yazılmalıdır.'] },
      title: 'Gelir analizi (vize hazırlık)', names: '`gelirler` listesi, `aylikGelirler(liste)`, `aralikListele(liste)`, `aralikToplamOrtalama(liste)`, `ortalamaUstuAylar(liste)`, `main()`',
      task: [
        '`gelirler = [30000, 40000, 50000, 42000, 55000, 25000, 36000, 30000, 52000, 45000, 28000, 48000]` listesini tanımla.',
        '`aylikGelirler(liste)`: `enumerate` ile her ayı `1. ay geliri 30000` biçiminde yazsın (ay 1’den başlar).',
        '`aralikListele(liste)`: kullanıcıdan başlangıç ve bitiş ayını alsın, aradaki gelirleri aynı biçimde (gerçek ay numarasıyla) yazsın ve yeni listeyi döndürsün.',
        '`aralikToplamOrtalama(liste)`: başlangıç ve bitiş ayını alsın, aradaki gelirlerin toplamını ve ortalamasını `return toplam, ortalama` ile döndürsün.',
        '`ortalamaUstuAylar(liste)`: yıllık ortalamanın üstündeki ayları `3. ay geliri 50000` biçiminde yazsın.',
        '`main()`: `while True` menü; 1–4 fonksiyonları çağırsın (3’te `Toplam: … Ortalama: …` yazsın), 0 çıkış (`break`), diğerlerinde “Geçersiz seçim”.'],
      code: [
        'gelirler = [30000, 40000, 50000, 42000, 55000, 25000,',
        '            36000, 30000, 52000, 45000, 28000, 48000]',
        '',
        'def aylikGelirler(liste):',
        '##BLOK: enumerate ile her ayı "1. ay geliri 30000" biçiminde yaz',
        '    for ay, gelir in ⟦enumerate⟧(liste, start=⟦1⟧):',
        '        print(f"{ay}. ay geliri {gelir}")',
        '##SON',
        '',
        'def aralikListele(liste):',
        '    baslangic = ⟦int⟧(input("Başlangıç ayı: "))',
        '    bitis = int(input("Bitiş ayı: "))',
        '##BLOK: yeni listeyi dilimle, gerçek ay numarasıyla yaz ve döndür',
        '    yeniListe = liste[⟦baslangic - 1‖baslangic-1⟧:bitis]',
        '    for ay, gelir in enumerate(yeniListe, start=⟦baslangic⟧):',
        '        print(f"{ay}. ay geliri {gelir}")',
        '    ⟦return⟧ yeniListe',
        '##SON',
        '',
        'def aralikToplamOrtalama(liste):',
        '    baslangic = int(input("Başlangıç ayı: "))',
        '    bitis = int(input("Bitiş ayı: "))',
        '    yeniListe = liste[baslangic - 1:bitis]',
        '##BLOK: döngüyle toplamı bul, ortalamayı hesapla, ikisini döndür',
        '    toplam = 0',
        '    for gelir in yeniListe:',
        '        toplam ⟦+=⟧ gelir',
        '    ortalama = toplam / ⟦len⟧(yeniListe)',
        '    return toplam, ortalama',
        '##SON',
        '',
        'def ortalamaUstuAylar(liste):',
        '##BLOK: yıllık ortalamayı bul, üstündeki ayları yaz',
        '    ortalama = ⟦sum⟧(liste) / len(liste)',
        '    for ay, gelir in enumerate(liste, start=1):',
        '        if gelir ⟦>⟧ ortalama:',
        '            print(f"{ay}. ay geliri {gelir}")',
        '##SON',
        '',
        'def main():',
        '    ⟦while⟧ True:',
        '        print("1- Aylık gelirler  2- Aralık listele  3- Aralık toplam/ortalama  4- Ortalama üstü aylar  0- Çıkış")',
        '        secim = input("Seçiminiz: ").strip()',
        '##BLOK: seçime göre fonksiyonları çağır; 0 çıkış, diğerleri geçersiz',
        '        if secim == "1":',
        '            aylikGelirler(gelirler)',
        '        elif secim == "2":',
        '            aralikListele(gelirler)',
        '        elif secim == "3":',
        '            toplam, ortalama = aralikToplamOrtalama(gelirler)',
        '            print(f"Toplam: {toplam} Ortalama: {ortalama:⟦.2f⟧}")',
        '        elif secim == "4":',
        '            ortalamaUstuAylar(gelirler)',
        '        elif secim == "0":',
        '            print("Programdan çıkılıyor")',
        '            ⟦break⟧',
        '        ⟦else⟧:',
        '            print("Geçersiz seçim")',
        '##SON',
        '',
        'main()'],
      tests: [
        { ad: 'aylikGelirler(gelirler)', pre: ['0'], call: 'aylikGelirler(gelirler)', cin: [] },
        { ad: 'aralikListele, 3–5. aylar', pre: ['0'], call: 'aralikListele(gelirler)', cin: ['3', '5'] },
        { ad: 'aralikToplamOrtalama, 2–4. aylar', pre: ['0'], call: 'aralikToplamOrtalama(gelirler)', cin: ['2', '4'] },
        { ad: 'ortalamaUstuAylar(gelirler)', pre: ['0'], call: 'ortalamaUstuAylar(gelirler)', cin: [] },
        { ad: 'Menü: 3 (1–12), 9, 0', pre: ['3', '1', '12', '9', '0'], call: null, cin: [], menu: true }],
      sample: '1\n0' },

    { id: 'diyabet', soru: { giris: 'Bir sağlık kuruluşu, açlık plazma glukozu (APG) ve oral glukoz tolerans testi (OGTT) değerlerine göre hastalara ön tanı koyan bir program istemektedir. Aşağıdaki kurallara göre programı fonksiyonlar kullanarak yazınız. Fonksiyonlar sonucu ekrana yazmamalı, `return` ile döndürmelidir.',
        maddeler: [
          '**a)** APG1 değerini parametre alan `apg1_kontrol(apg1)` fonksiyonunu yazınız: APG1 < 100 ise “Sonucunuz Normal”, 100–125 arası ise “OGTT”, 126 ve üzeri ise “Diyabet Hastasısınız” döndürülmelidir.',
          '**b)** OGTT yapılan hastanın APG2 ve PG değerlerini parametre alan `ogtt_kontrol(apg2, pg)` fonksiyonunu yazınız. **Önce** APG2 ≥ 126 veya PG ≥ 200 ise “Diyabet Hastasısınız”; APG2 100–125 ve PG 140–199 ise “BAG ve BGT”; yalnız APG2 100–125 ise “İzole BAG”; yalnız PG 140–199 ise “İzole BGT”; hiçbiri değilse “Sonucunuz Normal” döndürülmelidir.',
          '**c)** `main()` fonksiyonunda kullanıcıdan APG1 değerini alıp sonucu yazdırınız. Sonuç “OGTT” ise APG2 ve PG değerlerini de alıp OGTT sonucunu yazdırınız. Her hastadan sonra “Yeni hasta? (e/h)” sorusu sorulmalı, “h” girilirse program sonlanmalıdır (`while True`, `break`).'] },
      title: 'Diyabet tanı programı (vize hazırlık)', names: '`apg1_kontrol(apg1)`, `ogtt_kontrol(apg2, pg)`, `main()`',
      task: [
        '`apg1_kontrol(apg1)`: < 100 → `"Sonucunuz Normal"`, 100–125 → `"OGTT"`, ≥ 126 → `"Diyabet Hastasısınız"` döndürsün.',
        '`ogtt_kontrol(apg2, pg)`: önce APG2 ≥ 126 veya PG ≥ 200 → `"Diyabet Hastasısınız"`; APG2 100–125 ve PG 140–199 → `"BAG ve BGT"`; APG2 100–125 → `"İzole BAG"`; PG 140–199 → `"İzole BGT"`; değilse `"Sonucunuz Normal"`.',
        '`main()`: `while True` içinde APG1 al, sonucu yaz; sonuç OGTT ise APG2 ve PG alıp OGTT sonucunu yaz. Sonra “Yeni hasta? (e/h)” sor; `h` ise `break`.'],
      code: [
        'def apg1_kontrol(apg1):',
        '##BLOK: APG1 eşiklerine göre sonucu döndür',
        '    if apg1 < ⟦100⟧:',
        '        return "Sonucunuz Normal"',
        '    ⟦elif⟧ apg1 < 126:',
        '        return "OGTT"',
        '    ⟦else⟧:',
        '        return "Diyabet Hastasısınız"',
        '##SON',
        '',
        'def ogtt_kontrol(apg2, pg):',
        '##BLOK: önce diyabet, sonra BAG ve BGT, İzole BAG, İzole BGT, yoksa normal',
        '    if apg2 >= 126 ⟦or⟧ pg >= 200:',
        '        return "Diyabet Hastasısınız"',
        '    elif 100 <= apg2 <= 125 ⟦and⟧ 140 <= pg <= 199:',
        '        return "BAG ve BGT"',
        '    elif 100 <= apg2 <= 125:',
        '        return "İzole BAG"',
        '    elif ⟦140⟧ <= pg <= 199:',
        '        return "İzole BGT"',
        '    else:',
        '        return "Sonucunuz Normal"',
        '##SON',
        '',
        'def main():',
        '    while ⟦True⟧:',
        '        apg1 = int(input("APG1 değeri: "))',
        '        sonuc = apg1_kontrol(apg1)',
        '        print(sonuc)',
        '##BLOK: sonuç OGTT ise APG2 ve PG al, OGTT sonucunu yaz',
        '        if sonuc ⟦==⟧ "OGTT":',
        '            apg2 = int(input("APG2 değeri: "))',
        '            pg = int(input("PG değeri: "))',
        '            print(⟦ogtt_kontrol⟧(apg2, pg))',
        '##SON',
        '        devam = input("Yeni hasta? (e/h): ")',
        '##BLOK: h girilirse döngüden çık',
        '        if devam == "h":',
        '            ⟦break⟧',
        '##SON',
        '',
        '⟦main⟧()'],
      tests: [
        { ad: 'apg1_kontrol: 90, 110, 126', pre: ['90', 'h'], call: '[apg1_kontrol(90), apg1_kontrol(110), apg1_kontrol(126)]', cin: [] },
        { ad: 'ogtt_kontrol: 5 farklı hasta', pre: ['90', 'h'], call: '[ogtt_kontrol(130, 100), ogtt_kontrol(95, 200), ogtt_kontrol(110, 160), ogtt_kontrol(110, 120), ogtt_kontrol(95, 160), ogtt_kontrol(95, 120)]', cin: [] },
        { ad: 'Program: 110 → OGTT (110, 160), sonra 85, h', pre: ['110', '110', '160', 'e', '85', 'h'], call: null, cin: [], menu: true }],
      sample: '110\n110\n160\nh' },

    { id: 'not', soru: { giris: 'Lab 1 Görev 4: Bir öğrencinin vize ve final notlarından ortalamasını ve harf notunu hesaplayan programı fonksiyonlar kullanarak yazınız.',
        maddeler: [
          '**a)** Ortalamayı parametre alıp harf notunu döndüren `harf_notu(ortalama)` fonksiyonunu yazınız. Harf aralıkları: 90 ve üzeri AA, 85 BA, 80 BB, 75 CB, 70 CC, 65 DC, 60 DD, 50 FD, 50’nin altı FF.',
          '**b)** Kullanıcıdan vize ve final notunu alan `not_hesapla()` fonksiyonunu yazınız. Notlardan biri 0–100 aralığı dışındaysa “Notlar 0-100 arasında olmalıdır” yazıp fonksiyondan çıkılmalıdır.',
          '**c)** Ortalama, vizenin %40’ı ve finalin %60’ı alınarak hesaplanmalıdır. Final notu 50’nin altındaysa harf notu ortalamaya bakılmaksızın FF olmalıdır. Sonuç “Ortalama: 76.0 | Harf notu: CB” biçiminde, ortalama bir ondalıkla yazdırılmalıdır.'] },
      title: 'Not hesaplama (Lab 1 Görev 4)', names: '`harf_notu(ortalama)`, `not_hesapla()`',
      task: [
        '`harf_notu(ortalama)`: 90+ AA · 85+ BA · 80+ BB · 75+ CB · 70+ CC · 65+ DC · 60+ DD · 50+ FD · altı FF döndürsün.',
        '`not_hesapla()`: vize ve finali al; ikisi 0–100 dışındaysa “Notlar 0-100 arasında olmalıdır” yazıp `return` ile çık. Ortalama = vize × 0.4 + final × 0.6; final < 50 ise harf FF, değilse `harf_notu`. `Ortalama: 76.0 | Harf notu: CB` biçiminde yaz.',
        'Dosyanın sonunda `not_hesapla()` çağrılsın.'],
      code: [
        'def harf_notu(ortalama):',
        '##BLOK: büyükten küçüğe harf notu eşikleri',
        '    if ortalama >= 90:',
        '        return "AA"',
        '    elif ortalama >= ⟦85⟧:',
        '        return "BA"',
        '    elif ortalama >= 80:',
        '        return "BB"',
        '    elif ortalama >= 75:',
        '        return "CB"',
        '    elif ortalama >= 70:',
        '        return "CC"',
        '    elif ortalama >= 65:',
        '        return "DC"',
        '    elif ortalama >= 60:',
        '        return "DD"',
        '    elif ortalama >= ⟦50⟧:',
        '        return "FD"',
        '    else:',
        '        ⟦return⟧ "FF"',
        '##SON',
        '',
        'def not_hesapla():',
        '    vize = int(input("Vize: "))',
        '    final = int(input("Final: "))',
        '##BLOK: 0–100 dışındaysa uyar ve çık',
        '    if ⟦not⟧ (0 <= vize <= 100 ⟦and⟧ 0 <= final <= 100):',
        '        print("Notlar 0-100 arasında olmalıdır")',
        '        ⟦return⟧',
        '##SON',
        '##BLOK: ortalamayı hesapla, final < 50 ise FF, değilse harf_notu',
        '    ortalama = vize * ⟦0.4⟧ + final * 0.6',
        '    if final ⟦<⟧ 50:',
        '        harf = "FF"',
        '    else:',
        '        harf = ⟦harf_notu⟧(ortalama)',
        '##SON',
        '    print(f"Ortalama: {ortalama:⟦.1f⟧} | Harf notu: {harf}")',
        '',
        'not_hesapla()'],
      tests: [
        { ad: 'harf_notu: 95, 86, 77, 61, 52, 30', pre: ['50', '50'], call: '[harf_notu(95), harf_notu(86), harf_notu(77), harf_notu(61), harf_notu(52), harf_notu(30)]', cin: [] },
        { ad: 'Vize 70, final 80', pre: ['70', '80'], call: null, cin: [], menu: true },
        { ad: 'Vize 100, final 40 (final < 50)', pre: ['100', '40'], call: null, cin: [], menu: true },
        { ad: 'Vize 120, final 50 (geçersiz)', pre: ['120', '50'], call: null, cin: [], menu: true }],
      sample: '70\n80' }
  ];

  /* ---------- kaynak çözümleme ---------- */
  var BL = /⟦([^⟧]*)⟧/g;
  function alts(s) { return s.split('‖'); }
  function refCode(p) { return p.code.filter(function (l) { return !/^##(BLOK|SON)/.test(l); }).join('\n').replace(BL, function (m, a) { return alts(a)[0]; }); }
  function parseBlocks(p) {           // [{type:'code', text} | {type:'blok', hint, lines, indent}]
    var out = [], cur = null, buf = [];
    p.code.forEach(function (l) {
      var c = l.replace(BL, function (m, a) { return alts(a)[0]; });
      if (/^##BLOK:/.test(l)) { if (buf.length) out.push({ type: 'code', text: buf.join('\n') }); buf = []; cur = { type: 'blok', hint: l.replace(/^##BLOK:\s*/, ''), lines: [] }; }
      else if (/^##SON/.test(l)) { cur.indent = Math.min.apply(null, cur.lines.filter(function (x) { return x.trim(); }).map(function (x) { return x.match(/^ */)[0].length; })); out.push(cur); cur = null; }
      else if (cur) cur.lines.push(c); else buf.push(c);
    });
    if (buf.length) out.push({ type: 'code', text: buf.join('\n') });
    return out;
  }
  function dedent(t) {
    var ls = t.replace(/\t/g, '    ').split('\n'), m = Math.min.apply(null, ls.filter(function (x) { return x.trim(); }).map(function (x) { return x.match(/^ */)[0].length; }).concat([999]));
    return ls.map(function (x) { return x.slice(Math.min(m, x.match(/^ */)[0].length)); });
  }
  function blokCode(parts, vals) {
    var bi = 0;
    return parts.map(function (pt) {
      if (pt.type === 'code') return pt.text;
      var v = vals[bi++], pad = new Array(pt.indent + 1).join(' ');
      if (v == null) return pt.lines.join('\n');
      var ls = dedent(v); if (!ls.some(function (x) { return x.trim(); })) ls = ['pass'];
      return ls.map(function (x) { return x.trim() ? pad + x : ''; }).join('\n');
    }).join('\n');
  }
  function blankList(p) { var a = [], m, s = p.code.join('\n'); BL.lastIndex = 0; while ((m = BL.exec(s))) a.push(alts(m[1])); return a; }
  function blankCode(p, vals) {
    var i = 0;
    return p.code.filter(function (l) { return !/^##(BLOK|SON)/.test(l); }).join('\n').replace(BL, function (m, a) { var v = vals[i++]; return v == null ? alts(a)[0] : v; });
  }

  /* ---------- Pyodide işçisi ---------- */
  var HARNESS = [
    'import sys, io, builtins, traceback, json',
    'class _Bitti(Exception): pass',
    'def __run(code, pre, call, cin, echo=False):',
    '    out = io.StringIO(); q = list(pre)',
    '    st = {"noinput": False}',
    '    def _inp(p=""):',
    '        if echo: out.write(str(p))',
    '        if not q:',
    '            st["noinput"] = True',
    '            if echo: out.write("\\n")',
    '            raise _Bitti()',
    '        v = str(q.pop(0))',
    '        if echo: out.write(v + "\\n")',
    '        return v',
    '    builtins.input = _inp',
    '    ns = {"__name__": "__main__"}',
    '    old = sys.stdout; sys.stdout = out; err = None; line = None; ret = None',
    '    try:',
    '        try:',
    '            exec(compile(code, "kod.py", "exec"), ns)',
    '        except (_Bitti, SystemExit):',
    '            pass',
    '        if call is not None:',
    '            out.seek(0); out.truncate(0); q[:] = list(cin)',
    '            try:',
    '                ret = eval(call, ns)',
    '            except _Bitti:',
    '                pass',
    '    except Exception as e:',
    '        line = getattr(e, "lineno", None) if isinstance(e, SyntaxError) else None',
    '        if line is None:',
    '            fr = [f for f in traceback.extract_tb(e.__traceback__) if f.filename == "kod.py"]',
    '            line = fr[-1].lineno if fr else None',
    '        err = type(e).__name__ + ": " + str(e)',
    '    finally:',
    '        sys.stdout = old',
    '    err = err and __import__("re").sub(r" \\(kod\\.py, line \\d+\\)", "", err)',
    '    return json.dumps({"out": out.getvalue(), "ret": None if call is None else repr(ret), "err": err, "line": line, "noinput": st["noinput"]})'].join('\n');
  var WSRC = 'importScripts("' + PYO + 'pyodide.js");var py,ready=loadPyodide({indexURL:"' + PYO + '"}).then(function(p){py=p;py.runPython(' + JSON.stringify(HARNESS) + ');postMessage({ready:true});});' +
    'onmessage=function(e){ready.then(function(){var f=py.globals.get("__run");var r=e.data.jobs.map(function(j){return JSON.parse(f(j.code,j.pre,j.call,j.cin,!!j.echo));});postMessage({id:e.data.id,res:r});});};';
  var W = null, wReady = false, wq = {}, wid = 0, onState = function () {};
  function worker() {
    if (W) return W;
    W = new Worker(URL.createObjectURL(new Blob([WSRC], { type: 'text/javascript' })));
    wReady = false; onState('yukleniyor');
    W.onmessage = function (e) {
      if (e.data.ready) { wReady = true; onState('hazir'); Object.keys(wq).forEach(function (k) { wq[k].arm(); }); return; }
      var h = wq[e.data.id]; if (h) { clearTimeout(h.t); delete wq[e.data.id]; h.ok(e.data.res); }
    };
    W.onerror = function () { onState('hata'); };
    return W;
  }
  function run(jobs) {
    return new Promise(function (ok) {
      var id = ++wid, w = worker();
      var h = { ok: ok, arm: function () {
        h.t = setTimeout(function () {
          W.terminate(); W = null; delete wq[id];
          ok(jobs.map(function () { return { out: '', ret: null, err: 'Zaman aşımı: program 6 saniyede bitmedi (sonsuz döngü olabilir).', line: null }; }));
        }, 6000);
      } };
      wq[id] = h; if (wReady) h.arm();
      w.postMessage({ id: id, jobs: jobs });
    });
  }

  /* ---------- karşılaştırma ---------- */
  function lines(s) { return String(s || '').split('\n').map(function (x) { return x.replace(/\s+/g, ' ').trim(); }).filter(Boolean); }
  function nums(s) { return (String(s || '').match(/-?\d+(?:\.\d+)?/g) || []).map(Number); }
  function sameNums(a, b) { var x = nums(a), y = nums(b); return x.length === y.length && x.every(function (v, i) { return Math.abs(v - y[i]) < 1e-6; }); }
  function same(got, exp, loose) {
    if (exp.err) return !got.err;
    if (got.err) return false;
    var lo = lines(got.out).join('\n') === lines(exp.out).join('\n');
    if (!lo && loose) lo = nums(exp.out).length > 0 && lines(got.out).length === lines(exp.out).length && sameNums(got.out, exp.out);
    var ro = exp.ret == null || got.ret === exp.ret || (loose && sameNums(got.ret, exp.ret) && String(got.ret).replace(/[\d.\s-]/g, '') === String(exp.ret).replace(/[\d.\s-]/g, ''));
    if (!ro && exp.ret != null) ro = sameNums(got.ret, exp.ret) && String(got.ret).replace(/[\d.\s,()-]/g, '') === String(exp.ret).replace(/[\d.\s,()-]/g, '');
    return lo && ro;
  }
  var REF = {};
  function refOut(p) {
    if (REF[p.id]) return Promise.resolve(REF[p.id]);
    var c = refCode(p);
    return run(p.tests.map(function (t) { return { code: c, pre: t.pre, call: t.call, cin: t.cin }; })).then(function (r) { REF[p.id] = r; return r; });
  }
  function testAll(p, code, loose) {
    return refOut(p).then(function (ref) {
      return run(p.tests.map(function (t) { return { code: code, pre: t.pre, call: t.call, cin: t.cin }; })).then(function (got) {
        return p.tests.map(function (t, i) {
          var ok = same(got[i], ref[i], loose && !t.menu);
          if (!ok && loose && t.menu && !got[i].err && !ref[i].err) {
            var gl = got[i].out.toLowerCase(), gn = ' ' + nums(got[i].out).join(' ') + ' ';
            ok = lines(ref[i].out).filter(function (l) { return !/\d\s*-\s*[^\d\s]/.test(l) && nums(l).length > 0; }).every(function (l) {
              return gl.indexOf(l.toLowerCase()) >= 0 || (nums(l).length > 0 && gn.indexOf(' ' + nums(l).join(' ') + ' ') >= 0);
            });
          }
          return { t: t, ok: ok, got: got[i], exp: ref[i] };
        });
      });
    });
  }

  /* ---------- durum ---------- */
  var KEY = 'mbp207-kod';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(k, v) { var d = load(); d[k] = v; try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* yok say */ } }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function md(s) { return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>'); }

  var MODES = [
    { id: 'bosluk', title: '1 · Boşluk doldurma', desc: 'Hocanın hazırlık kodu; boş kutuları doldur.' },
    { id: 'blok', title: '2 · Eksik kod blokları', desc: 'Bazı fonksiyon gövdeleri ve döngüler eksik; blokları yaz.' },
    { id: 'bos', title: '3 · Sıfırdan yaz', desc: 'Kod bomboş; programın tamamını kendin yaz.' }];

  var CSS = '' +
    '.kd-modes{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0 6px}.kd-modes a,.kd-progs a{text-decoration:none;color:var(--text);border:1px solid var(--border);background:var(--surface);border-radius:999px;padding:7px 14px;font-weight:600;font-size:.92rem}' +
    '.kd-modes a.on,.kd-progs a.on{background:var(--accent);border-color:var(--accent);color:#fff}.kd-progs{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0 14px}.kd-progs a{font-weight:500;font-size:.86rem;padding:5px 12px}' +
    '.kd-progs a .d{color:var(--ok);margin-left:4px}.kd-progs a.on .d{color:#fff}' +
    '.kd-py{font-size:.85rem;color:var(--muted);margin-left:auto}.kd-py.hazir{color:var(--ok)}.kd-py.hata{color:var(--bad)}' +
    '.kd-task{background:var(--accent-soft);border-radius:var(--radius);padding:12px 16px;margin:0 0 14px}.kd-task ol{margin:6px 0 0;padding-left:20px}.kd-task li{margin:3px 0}' +
    '.kd-task code,.kd-res code{font:.86em var(--mono);background:var(--surface);border:1px solid var(--border);border-radius:4px;padding:0 4px}' +
    '.kd-code{background:var(--code-bg);color:var(--code-text);border-radius:var(--radius);padding:14px 16px;font:14px/1.6 var(--mono);white-space:pre;overflow-x:auto;tab-size:4}' +
    '.kd-code input{font:inherit;color:#fff;background:#2b3550;border:1px solid #4b5a80;border-radius:4px;padding:0 4px;margin:0 1px;min-width:2.5ch;outline:none}' +
    '.kd-code input:focus{border-color:#7fa2ff}.kd-code input.ok{border-color:#4cc27f;background:#163323}.kd-code input.no{border-color:#f07167;background:#3a1b1b;box-shadow:0 0 0 2px rgba(240,113,103,.35)}' +
    '.kd-blok{margin:4px 0;border-left:3px solid #7fa2ff;background:#18203a;border-radius:6px;padding:6px 8px;white-space:normal}' +
    '.kd-blok.ok{border-left-color:#4cc27f}.kd-blok.no{border-left-color:#f07167;background:#2c1717;box-shadow:0 0 0 1px rgba(240,113,103,.4)}' +
    '.kd-blok .h{font:600 12px/1.4 system-ui,sans-serif;color:#9fb4ff;margin-bottom:4px}.kd-blok.no .h{color:#ffb0a8}' +
    '.kd-ed{display:flex;background:var(--code-bg);border-radius:6px;overflow:hidden}.kd-ed .g{padding:8px 6px 8px 10px;color:#6b7590;text-align:right;user-select:none;font:14px/1.6 var(--mono);white-space:pre;min-width:2.2em}' +
    '.kd-ed .g b{color:#fff;background:#b3392f;border-radius:3px;font-weight:600;padding:0 2px}' +
    '.kd-ed textarea{flex:1;border:0;outline:0;resize:vertical;background:transparent;color:var(--code-text);font:14px/1.6 var(--mono);padding:8px 10px;white-space:pre;overflow-x:auto;tab-size:4;min-height:3.4em}' +
    '.kd-bar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:12px 0}.kd-bar button{font:inherit;font-weight:600;cursor:pointer;border-radius:8px;padding:8px 14px;border:1px solid var(--border);background:var(--surface);color:var(--text)}' +
    '.kd-bar .kd-check{background:var(--accent);border-color:var(--accent);color:#fff}.kd-bar .kd-give{border-color:var(--bad);color:var(--bad)}.kd-bar button:disabled{opacity:.6;cursor:wait}' +
    '.kd-try{color:var(--muted);font-size:.88rem}' +
    '.kd-res{margin:6px 0 10px}.kd-t{border:1px solid var(--border);border-left:4px solid var(--ok);border-radius:8px;padding:8px 12px;margin:6px 0;background:var(--surface)}' +
    '.kd-t.no{border-left-color:var(--bad);background:var(--bad-soft)}.kd-t .tt{font-weight:600}.kd-t pre{margin:6px 0 0;font:12.5px/1.5 var(--mono);white-space:pre-wrap;background:var(--surface-2);border-radius:6px;padding:6px 8px}' +
    '.kd-t .cols{display:grid;grid-template-columns:1fr 1fr;gap:8px}.kd-t .cols small{color:var(--muted);font-weight:600}.kd-t mark{background:rgba(240,113,103,.35);color:inherit}' +
    '@media (max-width:640px){.kd-t .cols{grid-template-columns:1fr}}' +
    '.kd-run{display:grid;grid-template-columns:minmax(0,220px) minmax(0,1fr);gap:10px;margin-top:6px}.kd-run textarea{font:13px/1.5 var(--mono);border:1px solid var(--border);border-radius:8px;padding:6px 8px;background:var(--surface);color:var(--text);min-height:90px}' +
    '.kd-run pre{margin:0;font:13px/1.5 var(--mono);background:var(--code-bg);color:var(--code-text);border-radius:8px;padding:8px 10px;white-space:pre-wrap;min-height:90px}' +
    '.kd-runbox{border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);padding:10px 12px;margin-top:10px}.kd-runh{font-size:.9rem;margin-bottom:6px}.kd-runh span{color:var(--muted)}.kd-run small{display:block;color:var(--muted);font-weight:600;margin-bottom:3px}.kd-run pre.err{color:#ffb0a8}' +
    '.kd-bar .kd-runbtn{background:var(--ok);border-color:var(--ok);color:#fff}.kd-code .errl{background:rgba(240,113,103,.25);display:inline-block;width:100%}' +
    '.kd-soru{border:1px solid var(--border);border-left:4px solid var(--accent);background:var(--surface);border-radius:var(--radius);padding:12px 16px;margin:0 0 12px;line-height:1.55}' +
    '.kd-soru p{margin:.35rem 0}.kd-sh{font-size:.75rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--accent)}.kd-soru pre{font:13px/1.5 var(--mono);background:var(--surface-2);border-radius:6px;padding:6px 10px;white-space:pre-wrap;margin:6px 0}' +
    '.kd-soru code{font:.86em var(--mono);background:var(--surface-2);border:1px solid var(--border);border-radius:4px;padding:0 4px}' +
    '.kd-sol{margin-top:10px}.kd-sol pre{background:var(--code-bg);color:var(--code-text);border-radius:var(--radius);padding:12px 14px;font:13.5px/1.6 var(--mono);overflow-x:auto}' +
    '.kd-win{background:var(--ok-soft);color:var(--ok);font-weight:700;border-radius:8px;padding:10px 14px;margin:8px 0}';

  function editor(val, id) {
    return '<div class="kd-ed" data-ed="' + id + '"><div class="g"></div><textarea spellcheck="false" autocapitalize="off" autocomplete="off">' + esc(val || '') + '</textarea></div>';
  }
  function wireEditor(box, onChange) {
    var ta = box.querySelector('textarea'), g = box.querySelector('.g');
    function gut(bad) {
      var n = ta.value.split('\n').length, s = '';
      for (var i = 1; i <= n; i++) s += (bad && bad.indexOf(i) >= 0 ? '<b>' + i + '</b>' : i) + '\n';
      g.innerHTML = s;
    }
    function fit() { ta.style.height = 'auto'; ta.style.height = (ta.scrollHeight + 4) + 'px'; }
    ta.addEventListener('input', function () { gut(); fit(); onChange && onChange(ta.value); });
    ta.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') { e.preventDefault(); var s = ta.selectionStart; ta.setRangeText('    ', s, ta.selectionEnd, 'end'); ta.dispatchEvent(new Event('input')); }
      else if (e.key === 'Enter') {
        var s2 = ta.selectionStart, ln = ta.value.slice(0, s2).split('\n').pop(), ind = ln.match(/^ */)[0] + (/:\s*$/.test(ln) ? '    ' : '');
        e.preventDefault(); ta.setRangeText('\n' + ind, s2, ta.selectionEnd, 'end'); ta.dispatchEvent(new Event('input'));
      }
    });
    gut(); setTimeout(fit, 0);
    return { ta: ta, mark: function (lines) { gut(lines); } };
  }

  function diffHtml(got, exp) {
    var g = lines(got), e = lines(exp), out = [];
    for (var i = 0; i < Math.max(g.length, e.length); i++) {
      var a = g[i] == null ? '' : g[i];
      out.push(a === e[i] ? esc(a) : '<mark>' + (esc(a) || '(boş)') + '</mark>');
    }
    return out.join('\n');
  }
  function results(res, lineMap) {
    return res.map(function (r) {
      var ex = r.exp, g = r.got, body = '';
      if (!r.ok) {
        if (g.err) body = '<pre>' + esc(g.err) + (g.line && lineMap ? '  (satır ' + g.line + ')' : '') + '</pre>';
        else {
          var gs = g.out + (g.ret != null && g.ret !== 'None' ? '\n→ döndürdü: ' + g.ret : '') , es = ex.out + (ex.ret != null && ex.ret !== 'None' ? '\n→ döndürdü: ' + ex.ret : '');
          body = '<div class="cols"><div><small>Senin çıktın</small><pre>' + diffHtml(gs, es) + '</pre></div><div><small>Beklenen</small><pre>' + esc(lines(es).join('\n')) + '</pre></div></div>';
        }
      }
      return '<div class="kd-t' + (r.ok ? '' : ' no') + '"><span class="tt">' + (r.ok ? '✓ ' : '✗ ') + esc(r.t.ad) + '</span>' +
        (r.t.pre.length && r.t.menu ? ' <small>(girdiler: ' + esc(r.t.pre.join(', ')) + ')</small>' : r.t.cin.length ? ' <small>(girdiler: ' + esc(r.t.cin.join(', ')) + ')</small>' : '') + body + '</div>';
    }).join('');
  }

  var app, mode, prog;
  function render(a, m, pid) {
    app = a;
    if (!document.getElementById('kd-css')) { var st = document.createElement('style'); st.id = 'kd-css'; st.textContent = CSS; document.head.appendChild(st); }
    mode = MODES.filter(function (x) { return x.id === m; })[0] || MODES[0];
    prog = PROGS.filter(function (x) { return x.id === pid; })[0] || PROGS[0];
    document.title = 'Kod alıştırmaları · MBP207';
    var st0 = load(), k = mode.id + ':' + prog.id;
    app.innerHTML =
      '<h1>Kod alıştırmaları</h1><p style="color:var(--muted);margin:.3rem 0 0">Vize hazırlık programları tarayıcıda gerçek Python (Pyodide) ile çalışır. Kontrol, senin kodunu hocanın çözümüyle aynı girdilerle çalıştırıp çıktıları karşılaştırır. ' + MAXTRY + ' yanlış denemeden sonra <b>Pes et</b> çıkar.</p>' +
      '<div class="kd-modes">' + MODES.map(function (x) { return '<a href="#kod/' + x.id + '/' + prog.id + '"' + (x === mode ? ' class="on"' : '') + '>' + x.title + '</a>'; }).join('') + '</div>' +
      '<div class="kd-progs">' + PROGS.map(function (x) { return '<a href="#kod/' + mode.id + '/' + x.id + '"' + (x === prog ? ' class="on"' : '') + '>' + esc(x.title) + (st0['done:' + mode.id + ':' + x.id] ? '<span class="d">✓</span>' : '') + '</a>'; }).join('') + '</div>' +
      '<div class="kd-soru"><div class="kd-sh">Sınav sorusu</div><p>' + md(prog.soru.giris) + '</p>' + (prog.soru.liste ? '<pre>' + esc(prog.soru.liste) + '</pre>' : '') +
        prog.soru.maddeler.map(function (t) { return '<p>' + md(t) + '</p>'; }).join('') + '</div>' +
      '<div class="kd-task"><b>' + esc(mode.desc) + '</b>' + (mode.id === 'bos' ? '<div style="margin-top:6px">Testlerin bulabilmesi için şu adları kullan: ' + md(prog.names) + '</div>' : '') + '</div>' +
      '<div class="kd-work"></div>' +
      '<div class="kd-bar"><button type="button" class="kd-runbtn">▶ Çalıştır</button><button type="button" class="kd-check">Kontrol et</button><button type="button" class="kd-reset">Sıfırla</button><span class="kd-try"></span><button type="button" class="kd-give" hidden>Pes et, çözümü göster</button><span class="kd-py">Python: ilk kontrolde yüklenir</span></div>' +
      '<div class="kd-res"></div><div class="kd-sol"></div>' +
      '<div class="kd-runbox"><div class="kd-runh"><b>Çalıştır</b> <span>Kodu olduğu gibi çalıştırır. Sol kutuya programın soracağı <code>input()</code> değerlerini her satıra bir tane yaz.</span></div>' +
      '<div class="kd-run"><div><small>Girdiler</small><textarea placeholder="Her satıra bir input() değeri">' + esc(prog.sample) + '</textarea></div><div><small>Çıktı</small><pre>▶ Çalıştır’a bas, çıktı burada görünür.</pre></div></div></div>';
    var work = app.querySelector('.kd-work'), getCode, getRunCode = null, markWrong, giveSol, ed = null;
    var pyEl = app.querySelector('.kd-py');
    onState = function (s) { pyEl.className = 'kd-py ' + s; pyEl.textContent = s === 'yukleniyor' ? 'Python yükleniyor… (ilk sefer ~10 sn)' : s === 'hazir' ? 'Python hazır' : 'Python yüklenemedi, internet bağlantını kontrol et'; };
    if (W) onState(wReady ? 'hazir' : 'yukleniyor');

    if (mode.id === 'bosluk') {
      var bl = blankList(prog), saved = st0[k] || [], i = 0, lineOf = [];
      var srcLines = prog.code.filter(function (l) { return !/^##(BLOK|SON)/.test(l); });
      work.innerHTML = '<div class="kd-code">' + srcLines.map(function (l, li) {
        return esc(l.replace(BL, '\u0000')).split('\u0000').map(function (part, pi, arr) {
          if (pi === arr.length - 1) return part;
          var n = i++, w = Math.max(3, bl[n][0].length + 1); lineOf[n] = li + 1;
          return part + '<input data-i="' + n + '" style="width:' + w + 'ch" value="' + esc(saved[n] || '') + '" spellcheck="false" autocapitalize="off" autocomplete="off">';
        }).join('');
      }).join('\n') + '</div>';
      var ins = work.querySelectorAll('input');
      ins.forEach(function (x) {
        x.addEventListener('input', function () { x.className = ''; x.style.width = Math.max(parseInt(x.style.width), x.value.length + 1) + 'ch'; save(k, [].map.call(ins, function (y) { return y.value; })); });
        x.addEventListener('keydown', function (e) { if (e.key === 'Enter') app.querySelector('.kd-check').click(); });
      });
      var vals = function () { return [].map.call(ins, function (y) { return y.value.trim(); }); };
      getCode = function () { return blankCode(prog, vals()); };
      getRunCode = function () { var v = vals(), n = 0; var c = blankCode(prog, v.map(function (x) { if (!x) { n++; return null; } return x; })); return { code: c, filled: n }; };
      markWrong = function (allOk) {
        var v = vals(), norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };
        if (allOk) { ins.forEach(function (x) { x.className = 'ok'; }); return Promise.resolve(); }
        var jobs = [], idx = [];
        v.forEach(function (val, n) {
          if (!val) { ins[n].className = 'no'; return; }
          if (bl[n].map(norm).indexOf(norm(val)) >= 0) { ins[n].className = 'ok'; return; }
          var only = bl.map(function (a, j) { return j === n ? val : null; }); idx.push(n); jobs.push(blankCode(prog, only));
        });
        return Promise.all(jobs.map(function (c) { return testAll(prog, c, false); })).then(function (rs) {
          rs.forEach(function (r, j) { ins[idx[j]].className = r.every(function (x) { return x.ok; }) ? 'ok' : 'no'; });
        });
      };
      giveSol = function () { ins.forEach(function (x, n) { x.value = bl[n][0]; x.className = 'ok'; x.style.width = Math.max(3, bl[n][0].length + 1) + 'ch'; }); save(k, bl.map(function (a) { return a[0]; })); };
    } else if (mode.id === 'blok') {
      var parts = parseBlocks(prog), sv = st0[k] || [], bi = 0;
      work.innerHTML = '<div class="kd-code">' + parts.map(function (pt) {
        if (pt.type === 'code') return esc(pt.text);
        var n = bi++;
        return '<div class="kd-blok" data-b="' + n + '" style="margin-left:' + pt.indent + 'ch"><div class="h">Eksik blok ' + (n + 1) + ' · ' + esc(pt.hint) + ' (' + pt.lines.filter(function (x) { return x.trim(); }).length + ' satır)</div>' + editor(sv[n] || '', n) + '</div>';
      }).join('') + '</div>';
      var eds = [].map.call(work.querySelectorAll('.kd-ed'), function (b, n) { return wireEditor(b, function () { b.closest('.kd-blok').classList.remove('ok', 'no'); save(k, eds.map(function (e) { return e.ta.value; })); }); });
      var bv = function () { return eds.map(function (e) { return e.ta.value; }); };
      getCode = function () { return blokCode(parts, bv()); };
      getRunCode = function () { var n = 0; var c = blokCode(parts, bv().map(function (x) { if (!x.trim()) { n++; return null; } return x; })); return { code: c, filled: n }; };
      var boxes = work.querySelectorAll('.kd-blok');
      markWrong = function (allOk) {
        if (allOk) { boxes.forEach(function (b) { b.classList.add('ok'); }); return Promise.resolve(); }
        var v = bv();
        return Promise.all(v.map(function (val, n) { return testAll(prog, blokCode(parts, v.map(function (x, j) { return j === n ? val : null; })), false); })).then(function (rs) {
          rs.forEach(function (r, n) { var ok = r.every(function (x) { return x.ok; }); boxes[n].classList.toggle('ok', ok); boxes[n].classList.toggle('no', !ok); });
        });
      };
      giveSol = function () {
        var bj = 0; parts.forEach(function (pt) { if (pt.type !== 'blok') return; var e = eds[bj++]; e.ta.value = dedent(pt.lines.join('\n')).join('\n'); e.ta.dispatchEvent(new Event('input')); });
        boxes.forEach(function (b) { b.classList.remove('no'); b.classList.add('ok'); });
      };
    } else {
      work.innerHTML = editor(st0[k] || '', 'full');
      ed = wireEditor(work.querySelector('.kd-ed'), function (v) { save(k, v); });
      ed.ta.placeholder = '# Programın tamamını buraya yaz';
      getCode = function () { return ed.ta.value; };
      markWrong = function () { return Promise.resolve(); };
      giveSol = function () {
        app.querySelector('.kd-sol').innerHTML = '<h3>Örnek çözüm</h3><pre>' + esc(refCode(prog)) + '</pre>';
      };
    }

    var tries = st0['try:' + k] || 0, tryEl = app.querySelector('.kd-try'), give = app.querySelector('.kd-give');
    function showTry() { tryEl.textContent = tries ? 'Yanlış deneme: ' + tries + ' / ' + MAXTRY : ''; give.hidden = tries < MAXTRY; }
    showTry();
    var chk = app.querySelector('.kd-check'), resEl = app.querySelector('.kd-res');
    chk.addEventListener('click', function () {
      chk.disabled = true; chk.textContent = 'Çalışıyor…'; resEl.innerHTML = '';
      var code = getCode();
      testAll(prog, code, mode.id === 'bos').then(function (res) {
        var allOk = res.every(function (r) { return r.ok; });
        if (ed) { var bad = res.filter(function (r) { return r.got.line; }).map(function (r) { return r.got.line; }); ed.mark(bad); }
        resEl.innerHTML = (allOk ? '<div class="kd-win">Tebrikler, bütün testler geçti! ✓</div>' : '') + results(res, mode.id !== 'blok');
        if (allOk) { save('done:' + k, 1); app.querySelectorAll('.kd-progs a.on').forEach(function (a) { if (!a.querySelector('.d')) a.insertAdjacentHTML('beforeend', '<span class="d">✓</span>'); }); }
        else { tries++; save('try:' + k, tries); showTry(); }
        return markWrong(allOk);
      }).then(function () { chk.disabled = false; chk.textContent = 'Kontrol et'; });
    });
    give.addEventListener('click', function () { giveSol(); resEl.innerHTML = '<div class="kd-t">Çözüm gösterildi. Kontrol et ile çalıştığını görebilirsin; sonra Sıfırla ile kendin yeniden dene.</div>'; });
    app.querySelector('.kd-reset').addEventListener('click', function () {
      var d = load(); delete d[k]; delete d['try:' + k]; try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* yok say */ }
      render(app, mode.id, prog.id);
    });
    var runBtn = app.querySelector('.kd-runbtn'), runIn = app.querySelector('.kd-run textarea'), runOut = app.querySelector('.kd-run pre');
    runBtn.addEventListener('click', function () {
      runBtn.disabled = true; runOut.className = ''; runOut.textContent = W && wReady ? 'Çalışıyor…' : 'Python yükleniyor… (ilk sefer ~10 sn)';
      var lines0 = runIn.value.split('\n'); while (lines0.length && lines0[lines0.length - 1] === '') lines0.pop();
      var rc = getRunCode ? getRunCode() : { code: getCode(), filled: 0 };
      run([{ code: rc.code, pre: lines0, call: null, cin: [] }]).then(function (r) {
        var x = r[0], txt = x.out || '';
        if (rc.filled) txt = '(' + rc.filled + (mode.id === 'blok' ? ' boş blok' : ' boş kutu') + ' çalıştırırken hocanın koduyla dolduruldu)\n' + txt;
        if (x.err) {
          var where = x.line ? (mode.id === 'blok' ? '' : ' (satır ' + x.line + ')') : '';
          txt += (txt ? '\n' : '') + '⚠ ' + x.err + where;
          if (/^_?Bitti|EOF/.test(x.err)) txt += '\nGirdiler bitti: program daha fazla input() bekliyor.';
          runOut.className = 'err';
        }
        runOut.textContent = txt || '(çıktı yok)';
        if (ed && x.line) ed.mark([x.line]);
        if (mode.id === 'bosluk' && x.line) {
          var codeBox = work.querySelector('.kd-code'); codeBox.querySelectorAll('.errl').forEach(function (el) { el.outerHTML = el.innerHTML; });
        }
        runBtn.disabled = false;
        runOut.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      });
    });
    window.scrollTo(0, 0);
  }
  window.KodAlistirma = { render: render, progs: PROGS, _ref: refCode, run: run, check: testAll, editor: editor, wire: wireEditor, results: results,
    css: function () { if (!document.getElementById('kd-css')) { var st = document.createElement('style'); st.id = 'kd-css'; st.textContent = CSS; document.head.appendChild(st); } },
    state: function (f) { onState = f; if (W) f(wReady ? 'hazir' : 'yukleniyor'); } };
})();
