/* Nota matematiği. Tarayıcıda window.MUSIC, Node'da module.exports. */
(function (root) {
  'use strict';
  var LET = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  var TR = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'];
  var SEMI = [0, 2, 4, 5, 7, 9, 11];
  var ACC = { '-1': '♭', '0': '', '1': '♯' };
  var ACC_WORD = { '-1': ' bemol', '0': '', '1': ' diyez' };

  // bottom: portenin 1. çizgisindeki notanın diyatonik indeksi (oktav*7 + adım)
  var CLEFS = {
    treble: { id: 'treble', name: 'Sol anahtarı', bottom: 4 * 7 + 2 /* Mi4 */ },
    bass: { id: 'bass', name: 'Fa anahtarı', bottom: 2 * 7 + 4 /* Sol2 */ }
  };

  function parse(s) {
    var m = /^([A-G])([#b]?)(-?\d)$/.exec(s);
    if (!m) throw new Error('Geçersiz nota: ' + s);
    return { s: LET.indexOf(m[1]), a: m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0, o: +m[3] };
  }
  function str(n) { return LET[n.s] + (n.a === 1 ? '#' : n.a === -1 ? 'b' : '') + n.o; }
  function dia(n) { return n.o * 7 + n.s; }
  function fromDia(d, a) { var o = Math.floor(d / 7); return { s: d - o * 7, o: o, a: a || 0 }; }
  function midi(n) { return 12 * (n.o + 1) + SEMI[n.s] + n.a; }
  function pc(n) { return ((midi(n) % 12) + 12) % 12; }
  function freqMidi(m) { return 440 * Math.pow(2, (m - 69) / 12); }
  function freq(n) { return freqMidi(midi(n)); }

  function name(n, style) {
    return (style === 'letter' ? LET[n.s] : TR[n.s]) + ACC[n.a];
  }
  function spoken(n) { return TR[n.s] + ACC_WORD[n.a]; }

  function pos(n, clef) { return dia(n) - CLEFS[clef].bottom; }
  function atPos(p, clef, a) { return fromDia(p + CLEFS[clef].bottom, a); }

  function posDesc(p) {
    if (p >= 0 && p <= 8) return p % 2 === 0 ? (p / 2 + 1) + '. çizgi' : ((p + 1) / 2) + '. ara';
    if (p === -1) return '1. çizginin hemen altı';
    if (p === 9) return '5. çizginin hemen üstü';
    if (p < 0) return p % 2 === 0 ? 'alttaki ' + (-p / 2) + '. ek çizgi' : 'alttaki ' + ((-p - 1) / 2) + '. ek çizginin altı';
    return p % 2 === 0 ? 'üstteki ' + ((p - 8) / 2) + '. ek çizgi' : 'üstteki ' + ((p - 9) / 2) + '. ek çizginin üstü';
  }
  function region(p) {
    if (p < 0) return 'alt';
    if (p > 8) return 'ust';
    return p % 2 === 0 ? 'cizgi' : 'ara';
  }
  function ledgers(p) {
    var r = [], q;
    if (p <= -2) for (q = -2; q >= p; q -= 2) r.push(q);
    if (p >= 10) for (q = 10; q <= p; q += 2) r.push(q);
    return r;
  }
  function otherClef(c) { return c === 'treble' ? 'bass' : 'treble'; }

  // Mi♯, Si♯, Fa♭, Do♭ başlangıç seviyesinde sorulmaz.
  function accAllowed(s, a) {
    if (a === 1) return s !== 2 && s !== 6;
    if (a === -1) return s !== 0 && s !== 3;
    return true;
  }
  function rangeNotes(from, to, withAcc) {
    var a = dia(parse(from)), b = dia(parse(to)), out = [];
    for (var d = a; d <= b; d++) {
      var n = fromDia(d);
      out.push(n);
      if (withAcc) {
        if (accAllowed(n.s, 1)) out.push(fromDia(d, 1));
        if (accAllowed(n.s, -1)) out.push(fromDia(d, -1));
      }
    }
    return out;
  }

  // Klavyedeki 12 perde sınıfı: [adım, işaret] (diyezle)
  var PC_SHARP = [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [3, 0], [3, 1], [4, 0], [4, 1], [5, 0], [5, 1], [6, 0]];
  function pcName(p, style) {
    var e = PC_SHARP[p], t = name({ s: e[0], a: e[1], o: 4 }, style);
    if (e[1] === 1) t += ' / ' + name({ s: e[0] + 1, a: -1, o: 4 }, style);
    return t;
  }
  function isBlack(m) { return [1, 3, 6, 8, 10].indexOf(((m % 12) + 12) % 12) >= 0; }
  // ref notaya en yakın, perde sınıfı p olan midi
  function nearestPc(p, refMidi) {
    var best = null;
    for (var m = refMidi - 12; m <= refMidi + 12; m++) {
      if (((m % 12) + 12) % 12 === p && (best === null || Math.abs(m - refMidi) < Math.abs(best - refMidi))) best = m;
    }
    return best;
  }

  var api = {
    LET: LET, TR: TR, CLEFS: CLEFS,
    parse: parse, str: str, dia: dia, fromDia: fromDia, midi: midi, pc: pc,
    freq: freq, freqMidi: freqMidi, name: name, spoken: spoken,
    pos: pos, atPos: atPos, posDesc: posDesc, region: region, ledgers: ledgers,
    otherClef: otherClef, accAllowed: accAllowed, rangeNotes: rangeNotes,
    pcName: pcName, isBlack: isBlack, nearestPc: nearestPc
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.MUSIC = api;
})(this);
