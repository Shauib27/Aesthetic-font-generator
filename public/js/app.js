/* Generator UI: live render, copy, favorites, recents, search/filter, preview size */
(function () {
  'use strict';

  var FONTS = window.AG_FONTS || [];
  var META = window.AG_META || [];
  var CATS = [
    ['all', '✨ All'], ['favorites', '⭐ Favorites'], ['recent', '🕘 Recent'],
    ['classic', '🔤 Classic'], ['cute', '🌸 Cute'], ['gothic', '🖤 Gothic'],
    ['gaming', '🎮 Gaming'], ['retro', '🌆 Retro'], ['glitch', '👾 Glitch'],
    ['frames', '🖼️ Frames'], ['emoji', '😎 Emoji'], ['effects', '✨ Effects'], ['minimal', '⌨️ Minimal']
  ];
  var CAT_LABEL = {};
  CATS.forEach(function (c) { CAT_LABEL[c[0]] = c[1]; });

  var input = document.getElementById('textInput');
  var sizeSlider = document.getElementById('sizeSlider');
  var sizeVal = document.getElementById('sizeVal');
  var searchInput = document.getElementById('searchInput');
  var grid = document.getElementById('styles');
  var tabsEl = document.getElementById('tabs');
  var badge = document.getElementById('styleCount');
  var toast = document.getElementById('toast');

  var activeCat = 'all';
  var query = '';
  var previewSize = 1.35;

  function load(key, fb) {
    try { var v = JSON.parse(localStorage.getItem(key)); return Array.isArray(v) ? v : fb; }
    catch (e) { return fb; }
  }
  function save(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {} }
  var favs = load('ag_favs', []);
  var recents = load('ag_recent', []);

  function toastMsg(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastMsg._t);
    toastMsg._t = setTimeout(function () { toast.classList.remove('show'); }, 1600);
  }

  function copyText(text, idx) {
    function done() {
      toastMsg('Copied! ✅ Paste it anywhere');
      if (typeof idx === 'number') {
        recents = [idx].concat(recents.filter(function (r) { return r !== idx; })).slice(0, 24);
        save('ag_recent', recents);
        if (activeCat === 'recent') render();
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallback(); });
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); }
      catch (e) { toastMsg('Copy failed — select manually'); }
      document.body.removeChild(ta);
    }
  }

  function toggleFav(idx, ev) {
    ev.stopPropagation();
    var i = favs.indexOf(idx);
    if (i >= 0) { favs.splice(i, 1); toastMsg('Removed from favorites'); }
    else { favs.push(idx); toastMsg('⭐ Added to favorites'); }
    save('ag_favs', favs);
    render();
  }

  function indicesFor(cat) {
    if (cat === 'all') return FONTS.map(function (_, i) { return i; });
    if (cat === 'favorites') return favs.slice();
    if (cat === 'recent') return recents.slice();
    return FONTS.map(function (_, i) { return i; }).filter(function (i) {
      return META[i] && META[i].cat === cat;
    });
  }

  function currentText() {
    var t = (input.value || '').trim();
    return t === '' ? 'Aesthetic Font' : t;
  }

  function render() {
    var text = currentText();
    var list = indicesFor(activeCat);
    if (query) {
      var q = query.toLowerCase();
      list = list.filter(function (i) {
        return META[i] && META[i].name.toLowerCase().indexOf(q) >= 0;
      });
    }
    badge.textContent = list.length + ' styles';
    var html = '';
    if (!list.length) {
      html = '<div class="empty">' +
        (activeCat === 'favorites' ? '⭐ No favorites yet — tap the star on any style to pin it here.' :
         activeCat === 'recent' ? '🕘 Nothing copied yet — click any style and it will appear here.' :
         'No styles match your search.') + '</div>';
    } else {
      html = list.map(function (i) {
        var out;
        try { out = FONTS[i].f(text); } catch (e) { out = text; }
        var name = META[i] ? META[i].name : ('Style ' + (i + 1));
        var cat = META[i] ? META[i].cat : 'classic';
        var favOn = favs.indexOf(i) >= 0 ? ' on' : '';
        return '<div class="style-card" data-i="' + i + '">' +
          '<button class="fav-btn' + favOn + '" data-fav="' + i + '" title="Add to favorites">★</button>' +
          '<div class="out" style="font-size:' + previewSize + 'rem">' + escapeHtml(out) + '</div>' +
          '<div class="nm"><span>' + escapeHtml(name) + '</span>' +
          '<span class="cat">' + escapeHtml(CAT_LABEL[cat] || cat) + '</span></div>' +
          '<div class="copy-hint">click to copy</div></div>';
      }).join('');
    }
    grid.innerHTML = html;
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Tabs
  tabsEl.innerHTML = CATS.map(function (c) {
    return '<button class="tab' + (c[0] === 'all' ? ' active' : '') + '" data-cat="' + c[0] + '">' + c[1] + '</button>';
  }).join('');
  tabsEl.addEventListener('click', function (e) {
    var b = e.target.closest('[data-cat]');
    if (!b) return;
    activeCat = b.getAttribute('data-cat');
    tabsEl.querySelectorAll('.tab').forEach(function (t) {
      t.classList.toggle('active', t === b);
    });
    render();
  });

  // Events (delegated)
  grid.addEventListener('click', function (e) {
    var favBtn = e.target.closest('[data-fav]');
    if (favBtn) { toggleFav(parseInt(favBtn.getAttribute('data-fav'), 10), e); return; }
    var card = e.target.closest('.style-card');
    if (card) {
      var i = parseInt(card.getAttribute('data-i'), 10);
      var text = currentText();
      var out;
      try { out = FONTS[i].f(text); } catch (err) { out = text; }
      copyText(out, i);
    }
  });

  var debounce;
  input.addEventListener('input', function () {
    clearTimeout(debounce);
    debounce = setTimeout(render, 140);
  });
  searchInput.addEventListener('input', function () {
    query = searchInput.value.trim();
    clearTimeout(debounce);
    debounce = setTimeout(render, 140);
  });
  sizeSlider.addEventListener('input', function () {
    previewSize = parseFloat(sizeSlider.value);
    sizeVal.textContent = Math.round(previewSize * 20) + 'px';
    grid.querySelectorAll('.out').forEach(function (el) {
      el.style.fontSize = previewSize + 'rem';
    });
  });

  // Static copy buttons inside content examples
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-copy]');
    if (!b) return;
    copyText(b.getAttribute('data-copy'));
  });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.parentElement;
      var ans = item.querySelector('.faq-a');
      var open = item.classList.toggle('open');
      ans.style.maxHeight = open ? ans.scrollHeight + 'px' : '0';
    });
  });

  // A-Z preview table (client-side via the engine)
  var azBody = document.getElementById('azBody');
  if (azBody && FONTS.length) {
    var styles = [0, 1, 3, 5, 7]; // bold, italic, script, gothic, double-struck
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var rows = '';
    for (var li = 0; li < letters.length; li++) {
      var L = letters[li];
      rows += '<tr><td><strong>' + L + '</strong></td>' + styles.map(function (si) {
        var o; try { o = FONTS[si].f(L); } catch (e) { o = L; }
        return '<td>' + escapeHtml(o) + '</td>';
      }).join('') + '</tr>';
    }
    azBody.innerHTML = rows;
  }

  render();
})();
