import { useState, useMemo, useEffect, useCallback } from 'react';
import { FONTS } from '../data/fontEngine.js';
import { FONT_META } from '../data/fontMeta.js';
import { useCopy } from '../copy.jsx';

const CATS = [
  ['all', '✨ All'],
  ['favorites', '⭐ Favorites'],
  ['recent', '🕘 Recent'],
  ['classic', '🔤 Classic'],
  ['cute', '🌸 Cute'],
  ['gothic', '🖤 Gothic'],
  ['gaming', '🎮 Gaming'],
  ['retro', '🌆 Retro'],
  ['glitch', '👾 Glitch'],
  ['frames', '🖼️ Frames'],
  ['emoji', '😎 Emoji'],
  ['effects', '✨ Effects'],
  ['minimal', '⌨️ Minimal'],
];
const CAT_LABEL = Object.fromEntries(CATS);

function load(key, fb) {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return Array.isArray(v) ? v : fb;
  } catch (e) {
    return fb;
  }
}

function styleOut(i, text) {
  try { return FONTS[i].f(text); } catch (e) { return text; }
}

export default function FontGenerator() {
  const { copy, show } = useCopy();
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('all');
  const [size, setSize] = useState(1.35);
  const [favs, setFavs] = useState(() => load('ag_favs', []));
  const [recents, setRecents] = useState(() => load('ag_recent', []));
  const [debounced, setDebounced] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setDebounced(text), 140);
    return () => clearTimeout(t);
  }, [text]);

  useEffect(() => {
    try { localStorage.setItem('ag_favs', JSON.stringify(favs)); } catch (e) { /* noop */ }
  }, [favs]);

  useEffect(() => {
    try { localStorage.setItem('ag_recent', JSON.stringify(recents)); } catch (e) { /* noop */ }
  }, [recents]);

  const display = debounced.trim() === '' ? 'Aesthetic Font' : debounced.trim();

  const list = useMemo(() => {
    let idx;
    if (cat === 'all') idx = FONTS.map((_, i) => i);
    else if (cat === 'favorites') idx = favs.slice();
    else if (cat === 'recent') idx = recents.slice();
    else idx = FONTS.map((_, i) => i).filter((i) => FONT_META[i] && FONT_META[i].cat === cat);
    const q = query.trim().toLowerCase();
    if (q) idx = idx.filter((i) => FONT_META[i] && FONT_META[i].name.toLowerCase().includes(q));
    return idx;
  }, [cat, query, favs, recents]);

  const outs = useMemo(() => list.map((i) => styleOut(i, display)), [list, display]);

  const handleCopy = useCallback((i, out) => {
    copy(out, 'Copied!');
    setRecents((r) => [i, ...r.filter((x) => x !== i)].slice(0, 24));
  }, [copy]);

  const toggleFav = (e, i) => {
    e.stopPropagation();
    if (favs.includes(i)) {
      setFavs(favs.filter((x) => x !== i));
      show('Removed from favorites');
    } else {
      setFavs([...favs, i]);
      show('⭐ Added to favorites');
    }
  };

  const emptyMsg =
    cat === 'favorites'
      ? '⭐ No favorites yet — tap the star on any style to pin it here.'
      : cat === 'recent'
        ? '🕘 Nothing copied yet — click any style and it will appear here.'
        : 'No styles match your search.';

  return (
    <section id="generator" className="tool" aria-label="Aesthetic font generator tool">
      <div className="input-row">
        <textarea
          id="textInput"
          rows={3}
          maxLength={300}
          placeholder="✎ Type or Paste your text here :)"
          autoComplete="off"
          aria-label="Text to stylize"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="tool-meta">
        <span className="badge">{list.length} styles</span>
        <label className="slider-wrap">
          Preview size
          <input
            type="range"
            min="0.9"
            max="2.2"
            step="0.05"
            value={size}
            aria-label="Preview text size"
            onChange={(e) => setSize(parseFloat(e.target.value))}
          />
          <span>{Math.round(size * 20)}px</span>
        </label>
        <input
          type="search"
          placeholder="🔍 Search styles…"
          aria-label="Search font styles"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="tabs" role="tablist" aria-label="Font style categories">
        {CATS.map(([key, label]) => (
          <button
            key={key}
            className={'tab' + (cat === key ? ' active' : '')}
            onClick={() => setCat(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <div id="styles" aria-live="polite">
        {list.length === 0 ? (
          <div className="empty">{emptyMsg}</div>
        ) : (
          list.map((i, k) => {
            return (
              <div key={i} className="style-row" onClick={() => handleCopy(i, outs[k])}>
                <div className="out" style={{ fontSize: size + 'rem' }}>{outs[k]}</div>
                <button
                  className={'fav-btn' + (favs.includes(i) ? ' on' : '')}
                  title="Add to favorites"
                  aria-label="Add to favorites"
                  onClick={(e) => toggleFav(e, i)}
                >
                  ★
                </button>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
