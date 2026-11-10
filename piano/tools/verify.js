// Doğrulama: node tools/verify.js
// Nota matematiğini ve içerikteki her iddiayı (çizgi/ara adları, ek çizgiler, kurallar, seviye aralıkları) hesapla karşılaştırır.
'use strict';
const path = require('path');
const fs = require('fs');
const M = require(path.join(__dirname, '../assets/music.js'));

global.window = {};
eval(fs.readFileSync(path.join(__dirname, '../assets/content.js'), 'utf8'));
const { LEVELS, TOPICS, RULES, RANGES, TRAPS } = window;

let fails = 0, checks = 0;
function eq(a, b, msg) { checks++; if (JSON.stringify(a) !== JSON.stringify(b)) { fails++; console.log('HATA:', msg, '\n  beklenen:', b, '\n  bulunan: ', a); } }
function ok(c, msg) { checks++; if (!c) { fails++; console.log('HATA:', msg); } }
const name = (n) => M.name(n, 'tr');
const at = (p, clef) => name(M.atPos(p, clef));

// 1) Temel akustik ve gösterim
eq(M.midi(M.parse('C4')), 60, 'Orta Do = MIDI 60');
eq(Math.round(M.freq(M.parse('A4'))), 440, 'La4 = 440 Hz');
eq(Math.round(M.freq(M.parse('C4')) * 100) / 100, 261.63, 'Do4 = 261.63 Hz');
eq(M.midi(M.parse('C#4')), M.midi(M.parse('Db4')), 'Do♯ = Re♭ (enarmonik)');
eq(M.midi(M.parse('B3')) + 1, M.midi(M.parse('C4')), 'Si3 → Do4 yarım ses');
eq(M.midi(M.parse('E4')) + 1, M.midi(M.parse('F4')), 'Mi → Fa yarım ses');
['C2', 'F#3', 'Bb4', 'E5', 'Ab2'].forEach(s => eq(M.str(M.parse(s)), s, 'parse/str gidiş-dönüş ' + s));

// 2) Porte konumları
const lines = (clef) => [0, 2, 4, 6, 8].map(p => at(p, clef));
const spaces = (clef) => [1, 3, 5, 7].map(p => at(p, clef));
eq(lines('treble'), ['Mi', 'Sol', 'Si', 'Re', 'Fa'], 'Sol anahtarı çizgileri');
eq(spaces('treble'), ['Fa', 'La', 'Do', 'Mi'], 'Sol anahtarı araları');
eq(lines('bass'), ['Sol', 'Si', 'Re', 'Fa', 'La'], 'Fa anahtarı çizgileri');
eq(spaces('bass'), ['La', 'Do', 'Mi', 'Sol'], 'Fa anahtarı araları');
eq(M.str(M.atPos(2, 'treble')), 'G4', 'Sol anahtarı 2. çizgi = Sol4');
eq(M.str(M.atPos(6, 'bass')), 'F3', 'Fa anahtarı 4. çizgi = Fa3');
eq(M.pos(M.parse('C4'), 'treble'), -2, 'Orta Do sol anahtarında alttaki 1. ek çizgi');
eq(M.pos(M.parse('C4'), 'bass'), 10, 'Orta Do fa anahtarında üstteki 1. ek çizgi');
eq(M.posDesc(-2), 'alttaki 1. ek çizgi', 'konum adı -2');
eq(M.posDesc(10), 'üstteki 1. ek çizgi', 'konum adı 10');
eq(M.posDesc(3), '2. ara', 'konum adı 3');
eq(M.posDesc(-3), 'alttaki 1. ek çizginin altı', 'konum adı -3');
eq(M.ledgers(-4), [-2, -4], 'ek çizgi sayısı -4');
eq(M.ledgers(13), [10, 12], 'ek çizgi sayısı 13');
eq(M.ledgers(9), [], 'ek çizgi yok 9');
// fa anahtarı = sol anahtarındaki adın iki adım üstü
for (let p = -6; p <= 14; p++) eq(M.atPos(p, 'bass').s, (M.atPos(p, 'treble').s + 2) % 7, 'iki adım kuralı p=' + p);

// 3) Ek çizgi tablosu (konu: ek)
const ekTable = TOPICS.find(t => t.id === 'ek').blocks.find(b => b.t === 'table');
const posOf = { 'Üstteki 2. ek çizgi': 12, 'Üstteki 1. ek çizgi': 10, '5. çizginin hemen üstü': 9, '1. çizginin hemen altı': -1, 'Alttaki 1. ek çizgi': -2, 'Alttaki 2. ek çizgi': -4 };
ekTable.rows.forEach(r => {
  const p = posOf[r[0]];
  ok(p !== undefined, 'tablo satırı tanınmadı: ' + r[0]);
  eq(r[1].split(' ')[0], at(p, 'treble'), 'ek tablo sol: ' + r[0]);
  eq(r[2].split(' ')[0], at(p, 'bass'), 'ek tablo fa: ' + r[0]);
  if (/Orta Do/.test(r[1])) eq(M.str(M.atPos(p, 'treble')), 'C4', 'Orta Do iddiası (sol) ' + r[0]);
  if (/Orta Do/.test(r[2])) eq(M.str(M.atPos(p, 'bass')), 'C4', 'Orta Do iddiası (fa) ' + r[0]);
});

// 4) Kural metinleri
const seq = (txt) => (txt.match(/\*\*([^*]+)\*\*/) || [])[1];
eq(seq(RULES['treble-cizgi']).split(' – '), lines('treble'), 'kural treble-cizgi');
eq(seq(RULES['treble-ara']).split(' – '), spaces('treble'), 'kural treble-ara');
eq(seq(RULES['bass-cizgi']).split(' – '), lines('bass'), 'kural bass-cizgi');
eq(seq(RULES['bass-ara']).split(' – '), spaces('bass'), 'kural bass-ara');
function boldList(txt) { return [...txt.matchAll(/\*\*([^*]+)\*\*/g)].map(m => m[1]); }
eq(boldList(RULES['treble-alt']), [-1, -2, -3, -4].map(p => at(p, 'treble')), 'kural treble-alt');
eq(boldList(RULES['treble-ust']), [9, 10, 11, 12].map(p => at(p, 'treble')), 'kural treble-ust');
eq(boldList(RULES['bass-alt']), [-1, -2, -3, -4].map(p => at(p, 'bass')), 'kural bass-alt');
eq(boldList(RULES['bass-ust']), [9, 10, 11, 12].map(p => at(p, 'bass')), 'kural bass-ust');
ok(/Sol'ü sarar/.test(RULES['treble-cizgi']) && at(2, 'treble') === 'Sol', 'kıvrım 2. çizgi Sol');
ok(/Fa'yı çevreler/.test(RULES['bass-cizgi']) && at(6, 'bass') === 'Fa', 'noktalar 4. çizgi Fa');

// 5) Porte örneklerinin başlıkları, çizilen notalarla aynı mı
TOPICS.forEach(t => t.blocks.filter(b => b.t === 'staff' && b.clef !== 'grand').forEach(b => {
  const names = b.notes.map(s => name(M.parse(s)));
  const m = /(?:Çizgiler|Aralar): (.+)$/.exec(b.caption || '');
  if (m) eq(m[1].split(' – '), names, 'başlık ' + t.id + ': ' + b.caption);
  const m2 = /^(?:Sol anahtarı|Fa anahtarı): altta (.+); üstte (.+)$/.exec(b.caption || '');
  if (m2) eq(m2[1].split(', ').concat(m2[2].split(', ')).map(x => x.replace(/^ve /, '')), names, 'başlık ' + t.id);
  if (/^Fa♯, Si♭/.test(b.caption || '')) eq(b.caption.split(', '), names, 'işaret başlığı');
  b.notes.forEach(s => { const p = M.pos(M.parse(s), b.clef); ok(p >= -6 && p <= 14, 'çizim aralığı ' + s); });
}));
// referans nota başlıkları
const solRef = TOPICS.find(t => t.id === 'sol').blocks.find(b => /Referans/.test(b.caption || ''));
eq(solRef.notes.map(s => M.posDesc(M.pos(M.parse(s), 'treble'))), ['alttaki 1. ek çizgi', '2. çizgi', '3. ara', '5. çizgi'], 'sol referans konumları');
const faRef = TOPICS.find(t => t.id === 'fa').blocks.find(b => /Referans/.test(b.caption || ''));
eq(faRef.notes.map(s => M.posDesc(M.pos(M.parse(s), 'bass'))), ['1. çizgi', '2. ara', '4. çizgi', 'üstteki 1. ek çizgi'], 'fa referans konumları');
eq(faRef.notes.map(s => name(M.parse(s))), ['Sol', 'Do', 'Fa', 'Do'], 'fa referans adları');

// 6) Seviyeler: açıklamadaki uçlar ve çizilebilirlik
const levelEnds = { 'sol-1': ['1. çizgi', '5. çizgi'], 'fa-1': ['1. çizgi', '5. çizgi'], 'sol-2': ['alttaki 2. ek çizgi', 'üstteki 2. ek çizgi'], 'fa-2': ['alttaki 2. ek çizgi', 'üstteki 2. ek çizgi'] };
LEVELS.forEach(L => {
  ok(TOPICS.some(t => t.id === L.topic), 'seviye konusu yok: ' + L.id);
  Object.keys(L.clefs).forEach(c => {
    const [a, b] = L.clefs[c].map(M.parse);
    ok(M.dia(a) < M.dia(b), 'aralık sırası ' + L.id);
    [a, b].forEach(n => { const p = M.pos(n, c); ok(p >= -6 && p <= 14, 'seviye çizim aralığı ' + L.id); });
    if (levelEnds[L.id]) {
      eq([M.posDesc(M.pos(a, c)), M.posDesc(M.pos(b, c))], levelEnds[L.id], 'seviye uçları ' + L.id);
      const ends = [name(a), name(b)];
      ends.forEach(e => ok(L.desc.indexOf(e) >= 0, 'seviye açıklamasında ' + e + ' yok: ' + L.id));
    }
    const pool = M.rangeNotes(L.clefs[c][0], L.clefs[c][1], L.acc);
    pool.forEach(n => ok(M.accAllowed(n.s, n.a), 'yasak işaret ' + M.str(n)));
    if (L.acc) ok(pool.some(n => n.a === 1) && pool.some(n => n.a === -1), 'işaret seviyesinde ♯ ve ♭ var');
  });
});
eq(LEVELS.find(l => l.id === 'sol-1').desc.match(/(\d+) nota/)[1], String(M.rangeNotes('E4', 'F5').length), 'sol-1 nota sayısı');
eq(LEVELS.find(l => l.id === 'fa-1').desc.match(/(\d+) nota/)[1], String(M.rangeNotes('G2', 'A3').length), 'fa-1 nota sayısı');
Object.keys(RANGES).forEach(c => Object.keys(RANGES[c]).forEach(k => RANGES[c][k].forEach(s => { const p = M.pos(M.parse(s), c); ok(p >= -6 && p <= 14, 'özel aralık ' + c + k); })));

// 7) Klavye yardımcıları
eq(M.pcName(1, 'tr'), 'Do♯ / Re♭', 'siyah tuş adı');
eq(M.nearestPc(0, 67), 72, 'Sol4\'e en yakın Do = Do5');
eq([60, 61, 62, 63, 64, 65, 66].map(M.isBlack), [false, true, false, true, false, false, true], 'siyah tuşlar');

// 8) Tuzaklar
ok(TRAPS.every(t => TOPICS.some(x => x.id === t.topic)), 'tuzak konuları');
eq(at(0, 'treble'), 'Mi', 'tuzak: 1. çizgi Mi');
eq(at(1, 'bass'), 'La', 'tuzak: fa 1. ara La');

console.log(`${checks} kontrol, ${fails} hata`);
process.exit(fails ? 1 : 0);
