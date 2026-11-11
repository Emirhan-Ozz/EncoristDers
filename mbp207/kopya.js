/* MBP207 · Kopya kağıdı fikirleri: A4 ön + arka yüze elle yazılacak özet.
   Her satır: [kod/sözdizimi, ne işe yarar + mini örnek]. Yönlendirme: #kopya */
(function () {
  'use strict';
  var SECS = [
    { no: 1, side: 'on', title: 'Temeller, tipler, dönüşüm', items: [
      ['input("Soru: ")', 'Kullanıcıdan okur, **her zaman str** döndürür. `"5"` girilse bile `type(x)` → `<class \'str\'>`.'],
      ['int(x)  float(x)  str(x)', 'Tür çevirir. `int("42.5")` ve `int("abc")` → **ValueError**; `float("42.5")` → `42.5`.'],
      ['yas = 2026 - int(input())', 'Hesaptan önce çevir! `2026 - "2006"` → **TypeError**. `"5" + "3"` → `"53"` (yan yana ekler).'],
      ['print("a", "b", 20)', 'Araya boşluk koyar → `a b 20`. `print(x, end=" ")` alt satıra geçmez.'],
      ['# yorum    """çok satır"""', '`"""` içinde `"` kullanılabilir; çift tırnak içinde `\'tek\'` olur.'],
      ['değişken adı', 'Rakamla başlamaz, boşluk/tire olmaz, `for` gibi anahtar kelime olmaz: `2sayi` ✗ `ad soyad` ✗ `sayi2` ✓. Büyük/küçük harf farklıdır.'],
      ['try: … except ValueError:', 'Harf girilince `int()` hatasını yakalar, program çökmez.']
    ] },
    { no: 2, side: 'on', title: 'Operatörler', items: [
      ['/   //   %   **', '`7/2`=3.5 · `17//5`=3 (tam bölüm) · `17%5`=2 (kalan) · `2**3`=8. `6/3` = **2.0** (bölme hep float).'],
      ['n % 2 == 0', 'Çift mi? Tekse `n % 2 == 1`.'],
      ['öncelik', '`**` → `* / // %` → `+ -` → karşılaştırma → `not` → `and` → `or`. `3+4*2`=11 · `10-4/2`=8.0'],
      ['x += 5', '`x = x + 5` ile aynı (`-=`, `*=`, `/=`). `x=10; x+=5; x-=3` → 12'],
      ['=   ==   !=', '`=` atama, `==` eşit mi, `!=` farklı mı.'],
      ['80 <= score < 90', 'Zincir karşılaştırma = `score >= 80 and score < 90`.'],
      ['and  or  not', '`and` ikisi de True · `or` biri yeter · `not` tersine çevirir. `not (3>2 or 1>2)` → False'],
      ['round(x, 2)', '`round(7/3, 2)` → 2.33 · `round(2.5)` → 2, `round(3.5)` → 4 (çifte yuvarlar)']
    ] },
    { no: 3, side: 'on', title: 'Metin metotları ve f-string', items: [
      ['.strip()', 'Baştaki/sondaki boşlukları siler. `" çay ".strip()` → `"çay"`'],
      ['.lower()  .upper()', 'Hepsi küçük / hepsi büyük. `"ANKARA".lower()` → `ankara`'],
      ['.title()', 'Her Kelimenin İlk Harfi Büyük. `"  aHmet kAYA  ".strip().title()` → `Ahmet Kaya`'],
      ['.capitalize()', 'Sadece **ilk** harf büyük, **gerisi küçük**. `" zor mu ".strip().capitalize()` → `Zor mu`'],
      ['s = s.strip()', 'Metotlar yeni metin döndürür, s **değişmez**! `s.strip()` tek başına yazılırsa `len(s)` aynı kalır.'],
      ['input().strip().lower()', 'Zincir: soldan sağa uygulanır (ad için `.title()`, soyad için `.upper()`).'],
      ['f"{ad} {yas}"', 'Değişkeni metne gömer. `f"{3 + 4}"` → 7'],
      ['f"{x:.2f}"', 'Virgülden sonra 2 basamak: `85` → `85.00`, `1/3` → `0.33`. `:.1f` tek basamak. `f"{2.5:.0f}"` → 2, `f"{3.5:.0f}"` → 4'],
      ['len(s)   "a" in s', 'Uzunluk (boşluklar dahil) / içinde var mı.']
    ] },
    { no: 4, side: 'on', title: 'if / elif / else ve match', items: [
      ['if x > y:\n    …\nelif x < y:\n    …\nelse:\n    …', 'Sonda `:` ve altında **4 boşluk girinti** şart. `:` unutulursa **SyntaxError**. Bloğu girinti belirler.'],
      ['ilk doğru kazanır', 'Zincirde ilk True olan çalışır, gerisi atlanır. **Büyükten küçüğe** yaz: `if s>=70: BB elif s>=90: AA` → 95 için **BB** çıkar (hata).'],
      ['ayrı if’ler', 'Ayrı `if`’lerin hepsi kontrol edilir: `x=10`, `if x>5: A` `if x>8: B` → A ve B'],
      ['match secim:\n    case "1":\n    case "3" | "4":\n    case _:', '`|` = veya · `case _:` = hiçbiri tutmazsa (else gibi). Yazılmazsa eşleşmeyen girişte hiçbir şey olmaz.'],
      ['tür tuzağı', '`ay = int(input())` sonra `case "12":` → int 12 ile str "12" eşleşmez → `case _`'],
      ['return n % 2 == 0', 'Koşulun kendisi True/False’tur; `if` yazmadan döndürülebilir (`is_even`).']
    ] },
    { no: 5, side: 'on', title: 'Döngüler ve range', items: [
      ['range(bitiş)', '0’dan bitiş−1’e: `range(5)` → 0 1 2 3 4. **Bitiş dahil değil.**'],
      ['range(baş, bitiş, adım)', '`range(1,4)` → 1 2 3 · `range(2,11,3)` → 2 5 8 · `range(10,0,-1)` → 10…1 · `range(3,8)` → 5 tur'],
      ['range(n + 1)', 'n’yi de dahil etmek için. `range(len(l))` → listenin indeksleri'],
      ['for i in range(10):\n    toplam += i', 'Önce `toplam = 0`. Sonuç 0+…+9 = **45**'],
      ['while koşul:', 'Koşul True oldukça döner. Sayacı artırmazsan (`a = a + 1`) **sonsuz döngü**. `i=10; while i>0: print(i); i-=3` → 10 7 4 1'],
      ['while True: … break', 'Menü kalıbı: `if secim == "0": break` ile çıkılır.'],
      ['break   continue', '`break` döngüyü bitirir: `i==3` → 0 1 2 · `continue` o turu atlar, başa döner: çiftleri atla → 1 3'],
      ['iç içe döngü', 'Dış 3 tur × iç 30 tur = iç gövde **90** kez çalışır. `print()` boş satır atar.']
    ] },
    { no: 6, side: 'arka', title: 'Fonksiyonlar', items: [
      ['def kdv(fiyat, oran=20):\n    return fiyat + fiyat*oran/100', 'Varsayılan parametre: `kdv(5000)` → 6000.0 · `kdv(7000, 10)` → 7700.0'],
      ['return  ↔  print', '`return` değeri çağırana **geri verir** (ekrana yazmaz); `print` sadece ekrana yazar. `kdv_hesapla(100)` tek başına ekrana **hiçbir şey** yazmaz.'],
      ['return yoksa → None', '`def f(): print("A")` · `x = f(); print(x)` → `A` sonra `None`'],
      ['return sonrası', '`return`’den sonraki satır **çalışmaz**.'],
      ['return a + b, a * b', 'İki değer döner: `x, y = hesapla(2, 5)` → y = 10'],
      ['def main(): …\nmain()', 'Fonksiyon çağrılmadan çalışmaz; dosya sonundaki `main()` programı başlatır.'],
      ['isinstance(x, int)', 'Tür kontrolü: `isinstance("5", int)` → False'],
      ['raise Exception("…")', 'Bilerek hata fırlatır: `if not isinstance(sayi, int): raise Exception("int olmalı")`']
    ] },
    { no: 7, side: 'arka', title: 'Listeler ve enumerate', items: [
      ['l = [12, 32, 45, 98]', 'İndeks 0’dan başlar: `l[0]`=12 · `l[-1]` son · `l[len(l)-1]` son · `l[-len(l)]` ilk · `l[7]` → **IndexError**'],
      ['len(l)  sum(l)/len(l)', 'Eleman sayısı / ortalama. Liste farklı türleri tutabilir: `["Burak", 3602514, 15.4]` → len 3'],
      ['.append(x)', 'Sona ekler. Boş liste: `[]` ya da `list()`'],
      ['.pop()   .pop(2)', 'Sondakini siler / 2. indeksi siler. `["Çay","Kahve","Boyoz","Gevrek","Çay"]` pop() sonra pop(2) → `[\'Çay\', \'Kahve\', \'Gevrek\']`'],
      ['.count(x)   .index(x)', 'Kaç tane / **ilk** bulunduğu indeks.'],
      ['sorted(l)   l.sort()', '`sorted` yeni sıralı liste döndürür, l değişmez. `sort` l’nin kendisini sıralar.'],
      ['x in l   x not in l', 'Listede var mı → True/False'],
      ['l[2] = l[2] + 10', 'Elemanı günceller.'],
      ['for i, d in enumerate(l):', 'İndeks + değer birlikte (0’dan). `enumerate(l, start=1)` → 1’den. `print(f"{i+1}. {d}")`']
    ] },
    { no: 8, side: 'arka', title: 'Slice (dilimleme)', items: [
      ['l[baş:bitiş]', '**Bitiş dahil değil.** `s=[18,21,19,24,26,23,20]`: `s[0:3]` → [18,21,19] · `s[5:7]` → [23,20]'],
      ['l[:3]   l[-3:]', 'İlk 3 / son 3: `s[-3:]` → [26,23,20]'],
      ['l[1::2]   l[::-1]', 'Birden itibaren ikişer: [21,24,23] / ters çevir.'],
      ['taşma', '`s[2:100]` hata **vermez** (sona kadar alır). `s[4:2]` → `[]` boş.'],
      ['l[bas-1:bit]', 'Kullanıcı ayları 1’den sayıyorsa: 2–4. ay → `l[1:4]`']
    ] },
    { no: 9, side: 'arka', title: 'Sözlükler', items: [
      ['d = {"çay": 15, "kahve": 45}', 'Anahtar → değer. `d["çay"]` → 15 · `len(d)` → 2'],
      ['d["kek"] = 120', 'Anahtar yoksa **ekler**, varsa **günceller** (`d["çay"] = 20`).'],
      ['for k in d:', 'Döngü **anahtarları** gezer; değer `d[k]`: `print(f"{k} fiyatı {d[k]}")`'],
      ['"tost" in d', 'Sadece **anahtarlarda** arar: `70 in d` → False'],
      ['d["su"]', 'Olmayan anahtar → **KeyError**. (Ekstra: `d.get("su", 0)` hata vermez, `d.items()` → anahtar+değer)'],
      ['d["Burak"]["Final"]', 'İç içe sözlük. Liste değer: `notlar["Arda"][1] = 50` · ortalama `sum(d["Ali"]) / len(d["Ali"])`']
    ] },
    { no: 10, side: 'arka', title: 'Hocanın programları: kalıplar ve eşikler', items: [
      ['Not hesabı', '`ort = vize*0.4 + final*0.6` · `f"{ort:.1f}"` · `final < 50` → FF · harf: ≥90 AA, ≥85 BA, ≥80 BB, değilse CB · `if not (0<=vize<=100 and 0<=final<=100): print(…); return`'],
      ['Diyabet APG1', '< 100 Normal · 100–125 OGTT · ≥ 126 Diyabet'],
      ['ogtt_kontrol(apg2, pg)', 'Sıra önemli: **önce** `apg2>=126 or pg>=200` Diyabet → `100<=apg2<=125 and 140<=pg<=199` BAG ve BGT → `100<=apg2<=125` İzole BAG → `140<=pg<=199` İzole BGT → `else` Normal'],
      ['Otopark', '≤1 saat 50 · ≤3 saat 100 · fazlası 150 · `if kart == "e" and saat <= 3: ucret *= 0.8` · `f"{ucret:.2f} TL"`'],
      ['Kafe / KDV', '`ara = fiyat*adet` · `kdv = ara*0.10` · `ara + kdv`. 85 TL × 3 → 255 + 25.50 = **280.50**'],
      ['Gelir analizi', '`ort = sum(l)/len(l)` · `for ay, gelir in enumerate(l, start=1): if gelir >= ort: print(…)` · aralık: `yeni = l[bas-1:bit]`, `toplam += gelir`, `return toplam, toplam/len(yeni)`'],
      ['Menü kalıbı', '`while True:` → `secim = input().strip()` → `if secim == "0": break` → `match secim: case "1": … case _: print("Geçersiz seçim")`'],
      ['Sipariş kalıbı', '`if urun not in urunler: print(…); continue` → `siparis.append(urun)`']
    ] },
    { no: 11, side: 'arka', title: 'Son kontrol: en sık tuzaklar', items: [
      ['input', 'str gelir → hesaptan önce `int()` / `float()`'],
      ['strip', '`s.strip()` tek başına s’yi değiştirmez → `s = s.strip()`'],
      ['elif sırası', 'Geniş koşul üstte olursa alttakiler hiç çalışmaz'],
      ['bitiş', '`range` ve slice’ta bitiş **dahil değil**'],
      ['print ≠ return', 'return yoksa fonksiyon `None` döndürür'],
      ['/ ve //', '`6/3` = 2.0 (float) · `7//2` = 3 · `7%2` = 1']
    ] }
  ];

  var KEY = 'mbp207-kopya';
  function done() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function setDone(no, v) { var d = done(); if (v) d[no] = 1; else delete d[no]; try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* yok say */ } }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function fmt(s) { return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>'); }

  var CSS = '' +
    '.ky-head p{color:var(--muted);margin:.3rem 0 0}' +
    '.ky-tips{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin:18px 0 8px}' +
    '.ky-tip{background:var(--accent-soft);border-radius:var(--radius);padding:12px 14px;font-size:.92rem}' +
    '.ky-tip b{display:block;color:var(--accent);margin-bottom:2px}' +
    '.ky-bar{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin:14px 0 6px}' +
    '.ky-bar .ky-prog{font-weight:700;color:var(--muted)}.ky-bar button{font:inherit;cursor:pointer;border:1px solid var(--border);background:var(--surface);color:var(--text);border-radius:999px;padding:6px 14px}' +
    '.ky-bar button:hover{border-color:var(--accent)}' +
    '.ky-side{margin:26px 0 10px;display:flex;align-items:baseline;gap:10px}.ky-side h2{margin:0}.ky-side span{color:var(--muted);font-size:.9rem}' +
    '.ky-grid{columns:2 430px;column-gap:16px}' +
    '.ky-sec{break-inside:avoid;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);margin:0 0 16px;overflow:hidden;box-shadow:var(--shadow)}' +
    '.ky-sec.ok{border-color:var(--ok)}' +
    '.ky-sh{display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--surface-2);border-bottom:1px solid var(--border)}' +
    '.ky-sh .n{display:grid;place-items:center;width:26px;height:26px;border-radius:7px;background:var(--accent);color:#fff;font-weight:700;font-size:.85rem;flex:none}' +
    '.ky-sh h3{margin:0;font-size:1rem;flex:1}.ky-sh label{font-size:.8rem;color:var(--muted);display:flex;gap:5px;align-items:center;cursor:pointer;white-space:nowrap}' +
    '.ky-sec.ok .ky-sh label{color:var(--ok);font-weight:700}' +
    '.ky-row{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.4fr);gap:10px;padding:8px 14px;border-bottom:1px dashed var(--border);font-size:.9rem;line-height:1.45}' +
    '.ky-row:last-child{border-bottom:0}' +
    '.ky-row pre{margin:0;font:600 .82rem/1.45 var(--mono);white-space:pre-wrap;color:var(--accent)}' +
    '.ky-row code{font:.84em var(--mono);background:var(--surface-2);border:1px solid var(--border);border-radius:4px;padding:0 4px}' +
    '@media (max-width:620px){.ky-row{grid-template-columns:1fr;gap:3px}}' +
    '@media print{@page{size:A4;margin:7mm}.ky-head,.ky-sec{break-inside:auto!important}.topbar,.ky-tips,.ky-bar,.ky-head,.sk,.sk-fab,.ky-sh label,.back{display:none!important}' +
    'body{background:#fff;color:#000}.ky-grid{columns:2;column-gap:8px}.ky-sec{box-shadow:none;margin:0 0 6px;border-color:#999}' +
    '.ky-row{padding:2px 6px;font-size:7.5pt;gap:4px}.ky-row pre{font-size:7pt;color:#000}.ky-sh{padding:3px 6px}.ky-sh h3{font-size:8.5pt}' +
    '.ky-sh .n{width:16px;height:16px;font-size:7pt;background:#000}.ky-side{margin:0 0 4px}.ky-side h2{font-size:10pt}' +
    '.ky-arka{break-before:page}}';

  function sec(s, d) {
    return '<section class="ky-sec' + (d[s.no] ? ' ok' : '') + '" data-no="' + s.no + '"><div class="ky-sh"><span class="n">' + s.no + '</span><h3>' + esc(s.title) + '</h3>' +
      '<label><input type="checkbox"' + (d[s.no] ? ' checked' : '') + '> kağıda yazdım</label></div>' +
      s.items.map(function (it) { return '<div class="ky-row"><pre>' + esc(it[0]) + '</pre><div>' + fmt(it[1]) + '</div></div>'; }).join('') + '</section>';
  }

  function render(app) {
    if (!document.getElementById('ky-css')) { var st = document.createElement('style'); st.id = 'ky-css'; st.textContent = CSS; document.head.appendChild(st); }
    document.title = 'Kopya kağıdı fikirleri · MBP207';
    var d = done();
    var on = SECS.filter(function (s) { return s.side === 'on'; }), arka = SECS.filter(function (s) { return s.side === 'arka'; });
    app.innerHTML =
      '<div class="ky-head"><h1>Kopya kağıdı fikirleri</h1>' +
      '<p>A4 kağıdın ön ve arka yüzüne elle yazmak için bütün konuların sıkıştırılmış hâli. Sol sütunda sözdizimi, sağda ne işe yaradığı ve mini örnek. ' +
      'Sınavda izin verilen kağıt içindir; sorular sitedeki testlerden derlendi.</p></div>' +
      '<div class="ky-tips">' +
        '<div class="ky-tip"><b>Yerleşim</b>Her yüzü dikey çizgiyle 2 sütuna böl. Ön yüz 1–5, arka yüz 6–11. Başlıkları kutu içine al, aradığını hızlı bul.</div>' +
        '<div class="ky-tip"><b>Ne yazmalı?</b>Kodun tamamını değil, kalıbı ve çıktıyı yaz. Örnekte sadece “kod → çıktı” yeter: <code>range(2,11,3) → 2 5 8</code></div>' +
        '<div class="ky-tip"><b>Ne yazmamalı?</b>Zaten bildiğin <code>print</code>, değişken atama gibi şeyler yer kaplar. Emin olmadığın kurallara ve hocanın eşik sayılarına öncelik ver.</div>' +
        '<div class="ky-tip"><b>Okunurluk</b>Tuzakları (⚠) ve çıktıları başka renk kalemle yaz. Yazarken kendi kendine tekrar etmiş olursun; asıl kazanç bu.</div>' +
      '</div>' +
      '<div class="ky-bar"><span class="ky-prog"></span><button type="button" class="ky-print">Yazdır / PDF</button><button type="button" class="ky-reset">İşaretleri sıfırla</button></div>' +
      '<div class="ky-side"><h2>Ön yüz</h2><span>Temeller → döngüler</span></div><div class="ky-grid">' + on.map(function (s) { return sec(s, d); }).join('') + '</div>' +
      '<div class="ky-side ky-arka"><h2>Arka yüz</h2><span>Fonksiyonlar → hocanın programları</span></div><div class="ky-grid">' + arka.map(function (s) { return sec(s, d); }).join('') + '</div>';
    function prog() { var n = Object.keys(done()).length; app.querySelector('.ky-prog').textContent = n + ' / ' + SECS.length + ' bölüm kağıda yazıldı'; }
    prog();
    app.querySelectorAll('.ky-sec input').forEach(function (cb) {
      cb.addEventListener('change', function () { var s = cb.closest('.ky-sec'); setDone(s.dataset.no, cb.checked); s.classList.toggle('ok', cb.checked); prog(); });
    });
    app.querySelector('.ky-print').addEventListener('click', function () { window.print(); });
    app.querySelector('.ky-reset').addEventListener('click', function () {
      try { localStorage.removeItem(KEY); } catch (e) { /* yok say */ }
      app.querySelectorAll('.ky-sec').forEach(function (s) { s.classList.remove('ok'); s.querySelector('input').checked = false; }); prog();
    });
    window.scrollTo(0, 0);
  }
  window.Kopya = { render: render, sections: SECS };
})();
