# Nota okuma sitesi: brief

Bu dosya sitenin nasıl kurulduğunu anlatır. Yeni özellik eklerken ya da aynı yapıda başka bir çalışma sitesi kurarken Claude'a bu dosyayı ver. İstersen projede `CLAUDE.md` adıyla da kaydedebilirsin; Claude Code onu otomatik okur.

---

## 1. Amaç

- Piyanoya dönen biri için **amaç odaklı** nota okuma defteri. Sade, hızlı, telefonda da rahat.
- İki sekme:
  - **Genel Tekrar**: porte, sol anahtarı, fa anahtarı, ek çizgiler, büyük porte ve Orta Do, diyez/bemol, klavye, çalışma yöntemi. Her notaya ve tuşa dokununca sesi çalar.
  - **Alıştırma**: 7 seviye, "Hatalarım", "Özel çalışma" ve ilerleme haritası.
- Açık/koyu tema. Ses açılıp kapatılabilir.

## 2. İçerik kuralları

1. Sol ve fa anahtarı, ek çizgiler (porte dışında en fazla 2 ek çizgi), diyez ve bemoller.
2. Mi♯, Si♯, Fa♭, Do♭ sorulmaz (başlangıç seviyesi için kafa karıştırıcı).
3. Oktav bilimsel gösterimle yazılır: Orta Do = Do4.
4. **Her iddia doğrulanır.** `tools/verify.js`, nota matematiğini ve içerikteki her metni (çizgi/ara adları, ek çizgi tablosu, kurallar, seviye açıklamaları, porte başlıkları) hesapla karşılaştırır. 0 hata olmadan yayınlanmaz.
5. Yazım dili Türkçe, kısa ve net.

## 3. Alıştırma

- **Cevap yolları**
  - *Nota adı*: porteyi gör, adı seç (Do…Si; işaretli seviyelerde önce ♭/♮/♯). Klavyeden 1–7 veya C D E F G A B, ♯ için `+`, ♭ için `-`.
  - *Klavye*: porteyi gör, tuşa bas. Oktav fark etmez; enarmonikler (Do♯ = Re♭) aynı tuş.
  - *Porteye yerleştir*: adı ve küçük klavyedeki yeri verilen notayı porteye koy. Fareyle tıklayınca yerleşir; dokunmatikte konum seç, ▲▼ ile ayarla, Yerleştir.
- **Modlar**: Pratik (anında kontrol, isteğe bağlı 8/5/3 sn soru süresi), Sınav (20 soru, 100 üzerinden), Hız (60 saniyede kaç doğru). Sınav ve Hız'da en iyi skor kaydedilir.
- **Uyarlanır seçim**: yanlış yapılan nota 3 soru sonra tekrar gelir; her nota için hata ağırlığı `localStorage`'da tutulur, ağır olanlar daha sık sorulur, doğru bildikçe ağırlık düşer. "Hatalarım" bu ağırlıktan beslenir.
- **Yanlış cevapta** üç şey: doğru cevap ve konumu, "Senin cevabın" (ör. "bu konumu sol anahtarı gibi okumuş olabilirsin", "iki adım kaydın"), "Kural" (o anahtarın o bölgesi için kısa kural). Portede doğru nota yeşil, senin cevabın kırmızı gösterilir.

## 4. Teknik yapı

Saf HTML + CSS + JavaScript. Framework yok, derleme yok, harici istek yok (yazı tipleri yerelde). GitHub Pages'te doğrudan çalışır.

```
index.html
.nojekyll
assets/
  music.js     ← nota matematiği (tarayıcıda window.MUSIC, Node'da require)
  content.js   ← COURSE, LEVELS, RANGES, TRAPS, TOPICS, RULES
  app.js       ← yönlendirme, porte (SVG) ve klavye çizimi, ses (Web Audio), oturum
  style.css
  fonts/       ← Noto Music (anahtar ve işaret glifleri), Cormorant Garamond, Lora (OFL)
tools/verify.js
```

- Yönlendirme hash ile: `#tekrar`, `#tekrar/<konu>`, `#test`, `#test/<seviye>` (`hatalar`, `ozel` dahil).
- Nota: `{ s: adım 0–6 (Do–Si), a: işaret -1/0/1, o: oktav }`. Konum `pos = oktav*7 + adım − anahtarın 1. çizgisi` (sol: Mi4, fa: Sol2). Çift `pos` çizgi, tek `pos` ara; 0–8 porte içi.
- Ses: sentez (üçgen + harmonikler, zarf, alçak geçiren filtre); örnek dosya yok.

## 5. Veri formatı (content.js)

```js
window.LEVELS = [{ id: 'sol-1', no: 1, title: '...', desc: '...', clefs: { treble: ['E4', 'F5'] }, acc: false, topic: 'sol' }];
window.TOPICS = [{ id: 'sol', title: '...', level: 'sol-1', blocks: [
  { t: 'p', text: '...' }, { t: 'ul', items: [] }, { t: 'table', head: [], rows: [[]] },
  { t: 'staff', clef: 'treble' | 'bass' | 'grand', notes: ['E4', ...] | [{ n: 'C4', st: 'treble' }], caption: '...' },
  { t: 'keys', from: 'C4', to: 'B4', labels: 'white' | 'all', mark: 'C4', caption: '...' },
  { t: 'trap' | 'tip' | 'low', text: '...' }
] }];
window.RULES = { 'treble-cizgi': '...', 'treble-ara': '...', 'treble-alt': '...', 'treble-ust': '...', 'bass-…': '...', isaret: '...', klavye: '...' };
```

Satır içi biçim: `` `kod` `` ve `**kalın**`.

## 6. Çalışma akışı

1. İçeriği `content.js`'e yaz.
2. `node tools/verify.js` → 0 hata.
3. Yerel önizleme: `python -m http.server 8765` → `http://localhost:8765`.
4. Kontrol: sınav modunda hepsi doğru = 100; yanlış açıklamaları görünüyor mu; telefonda yatay taşma var mı; koyu tema.
5. Yayın: repo → Settings → Pages → `main`, `/ (root)`.
