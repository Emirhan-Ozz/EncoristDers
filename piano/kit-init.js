(function () {
  var B = StudyKit.blocks;
  StudyKit.init({
    index: function () {
      var out = [];
      (window.TOPICS || []).forEach(function (t, i) { out.push({ k: 'Konu', t: (i + 1) + '. ' + t.title, s: B(t.blocks), h: '#tekrar/' + t.id, w: -2 }); });
      (window.TRAPS || []).forEach(function (x) { out.push({ k: 'Hata', t: x.t, h: '#tekrar' }); });
      (window.LEVELS || []).forEach(function (l) { out.push({ k: 'Seviye', t: l.no + '. ' + l.title, s: l.desc, h: '#test/' + l.id, w: -1 }); });
      out.push({ k: 'Test', t: 'Yanlışlarım', s: 'Sık karıştırdığın notalar', h: '#test/hatalar' });
      return out;
    }
  });
})();
