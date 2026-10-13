import { useState, useMemo, useEffect, useCallback, useRef, useDeferredValue, memo } from 'react';
import {
  CATEGORIES, CATEGORY_IDS, STYLE_COUNT, COMPAT, COMPAT_NOTE,
  matchesQuery, styleName, styleOut, styleCategory,
} from '../data/styleIndex.js';
import { track, safeSearchTerm } from '../analytics.js';
import { useCopy } from '../copy.jsx';
import { IconCopy, IconCheck, IconStar, IconX, IconSearch, IconSpark } from './Icons.jsx';

const MAX_LEN = 300;
// Results are shown in pages so the content below the tool is easy to reach.
const PAGE_SIZE = 24;
const EXAMPLES = ['Aesthetic Vibes', 'Luna', 'soft girl era', 'Shadow Hunter', 'Good Vibes Only', 'Daydreamer', 'Midnight Muse', 'GG EZ'];

function load(key, fb) {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return Array.isArray(v) ? v.filter((x) => Number.isInteger(x) && x >= 0 && x < STYLE_COUNT) : fb;
  } catch (e) {
    return fb;
  }
}

function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
}

const StyleCard = memo(function StyleCard({ i, out, size, fav, copied, onCopy, onFav }) {
  const name = styleName(i);
  const compat = COMPAT[i];
  return (
    <article className="style-card">
      <div className="sc-head">
        <span className="sc-name">{name}</span>
        {compat !== 'ok' && (
          <span className={'sc-chip ' + compat} title={COMPAT_NOTE[compat]}>
            {compat === 'marks' ? 'May not work in usernames' : 'Check on older devices'}
          </span>
        )}
      </div>
      <p
        className="sc-out"
        style={{ fontSize: size + 'rem' }}
        onClick={() => onCopy(i, out)}
        suppressHydrationWarning
      >
        {out}
      </p>
      <div className="sc-actions">
        <button
          type="button"
          className={'icon-btn fav' + (fav ? ' on' : '')}
          aria-pressed={fav}
          aria-label={(fav ? 'Remove ' : 'Add ') + name + (fav ? ' from favorites' : ' to favorites')}
          title={fav ? 'Remove from favorites' : 'Add to favorites'}
          onClick={() => onFav(i)}
        >
          <IconStar filled={fav} />
        </button>
        <button
          type="button"
          className={'copy-btn' + (copied ? ' done' : '')}
          aria-label={copied ? 'Copied' : 'Copy ' + name + ' text'}
          onClick={() => onCopy(i, out)}
        >
          {copied ? <IconCheck /> : <IconCopy />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    </article>
  );
});

/**
 * @param recommended optional { label, ids } — adds a first "picks" tab used by landing pages
 * @param sample default preview text when the input is empty
 */
export default function FontGenerator({ recommended, sample = 'Aesthetic Font', inputLabel = 'Type your text' }) {
  const { copy, show } = useCopy();
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState(recommended ? 'picks' : 'all');
  const [size, setSize] = useState(1.35);
  const [favs, setFavs] = useState([]);
  const [recents, setRecents] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [copiedId, setCopiedId] = useState(-1);
  const exampleIdx = useRef(0);
  const copiedTimer = useRef(null);
  const inputRef = useRef(null);

  // Favorites/recents are read after mount so the prerendered HTML hydrates cleanly.
  useEffect(() => {
    setFavs(load('ag_favs', []));
    setRecents(load('ag_recent', []));
    setLoaded(true);
  }, []);
  useEffect(() => { if (loaded) save('ag_favs', favs); }, [favs, loaded]);
  useEffect(() => { if (loaded) save('ag_recent', recents); }, [recents, loaded]);
  useEffect(() => () => clearTimeout(copiedTimer.current), []);

  const deferredText = useDeferredValue(text);
  const deferredQuery = useDeferredValue(query);
  const display = deferredText.trim() === '' ? sample : deferredText;

  const tabs = useMemo(() => {
    const base = [];
    if (recommended) base.push({ key: 'picks', label: recommended.label, ids: recommended.ids });
    base.push(CATEGORIES[0]);
    base.push({ key: 'favorites', label: 'Favorites', ids: favs, count: favs.length });
    base.push({ key: 'recent', label: 'Recent', ids: recents, count: recents.length });
    return base.concat(CATEGORIES.slice(1));
  }, [recommended, favs, recents]);

  const list = useMemo(() => {
    const tab = tabs.find((t) => t.key === cat) || tabs[0];
    let idx = tab.ids;
    const q = deferredQuery.trim();
    if (q) {
      // A search always looks through every style, so nothing is hidden by the active tab.
      idx = CATEGORY_IDS.all.filter((i) => matchesQuery(i, q));
    }
    return idx;
  }, [tabs, cat, deferredQuery]);

  const listLen = useRef(0);
  listLen.current = list.length;
  // Report searches once typing pauses; unknown terms are sent as "other".
  useEffect(() => {
    const q = query.trim();
    if (!q) return undefined;
    const t = setTimeout(() => track('font_search', { search_term: safeSearchTerm(q), results_count: listLen.current }), 1200);
    return () => clearTimeout(t);
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  // How many cards are visible. Resets to one page whenever the tab or search changes.
  const viewKey = cat + '|' + deferredQuery.trim();
  const [paging, setPaging] = useState({ key: viewKey, limit: PAGE_SIZE });
  const limit = paging.key === viewKey ? paging.limit : PAGE_SIZE;
  const remaining = Math.max(0, list.length - limit);
  const showMore = (all) => {
    const next = all ? list.length : limit + PAGE_SIZE;
    setPaging({ key: viewKey, limit: next });
    track('font_show_more', { results_count: Math.min(next, list.length) });
  };
  const shown = useMemo(() => list.slice(0, limit), [list, limit]);
  const outs = useMemo(() => shown.map((i) => styleOut(i, display)), [shown, display]);

  const handleCopy = useCallback((i, out) => {
    copy(out, 'Copied to clipboard');
    setRecents((r) => [i, ...r.filter((x) => x !== i)].slice(0, 24));
    setCopiedId(i);
    // Only the style's name/category is reported — never the text itself.
    track('font_copy', { style_name: styleName(i), category: styleCategory(i) });
    clearTimeout(copiedTimer.current);
    copiedTimer.current = setTimeout(() => setCopiedId(-1), 1500);
  }, [copy]);

  const favsRef = useRef(favs);
  favsRef.current = favs;
  const toggleFav = useCallback((i) => {
    const has = favsRef.current.includes(i);
    setFavs((f) => (has ? f.filter((x) => x !== i) : [...f.filter((x) => x !== i), i]));
    show(has ? 'Removed from favorites' : 'Added to favorites');
    track('font_favorite', { style_name: styleName(i), action: has ? 'remove' : 'add' });
  }, [show]);

  const favSet = useMemo(() => new Set(favs), [favs]);

  const tryExample = () => {
    const ex = EXAMPLES[exampleIdx.current % EXAMPLES.length];
    exampleIdx.current += 1;
    setText(ex);
    inputRef.current && inputRef.current.focus();
  };

  const clearText = () => {
    setText('');
    inputRef.current && inputRef.current.focus();
  };

  const searching = query.trim() !== '';
  const emptyMsg = searching
    ? `No styles match “${query.trim()}”. Try “cursive”, “bold”, “gothic” or “bubble”.`
    : cat === 'favorites'
      ? 'No favorites yet. Tap the star on any style to keep it here.'
      : cat === 'recent'
        ? 'Nothing copied yet. Styles you copy will appear here.'
        : 'No styles in this category.';

  return (
    <section id="generator" className="gen" aria-label="Font generator" data-clarity-mask="true">
      <ol className="gen-steps" aria-label="How it works">
        <li><span>1</span>Type your text</li>
        <li><span>2</span>Choose a style</li>
        <li><span>3</span>Copy &amp; paste</li>
      </ol>
      <div className="gen-input">
        <label htmlFor="textInput" className="sr-only">{inputLabel}</label>
        <div className="field">
          <textarea
            id="textInput"
            ref={inputRef}
            rows={2}
            maxLength={MAX_LEN}
            placeholder="Type or paste your text here…"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Escape' && text) { e.preventDefault(); setText(''); } }}
          />
          {text && (
            <button type="button" className="field-clear" onClick={clearText} aria-label="Clear text">
              <IconX />
            </button>
          )}
        </div>
        <div className="field-foot">
          <button type="button" className="link-btn" onClick={tryExample}>
            <IconSpark /> Try an example
          </button>
          <span className="counter" aria-live="off">{[...text].length} / {MAX_LEN}</span>
        </div>
      </div>

      <div className="gen-toolbar">
        <div className="search">
          <IconSearch />
          <label htmlFor="styleSearch" className="sr-only">Search font styles</label>
          <input
            id="styleSearch"
            type="search"
            placeholder="Search styles: cursive, bubble, gothic…"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Escape') setQuery(''); }}
          />
        </div>
        <label className="size-ctl">
          <span>Size</span>
          <input
            type="range"
            min="0.9"
            max="2.2"
            step="0.05"
            value={size}
            aria-label="Preview text size"
            onChange={(e) => setSize(parseFloat(e.target.value))}
          />
        </label>
      </div>

      <div className="tabs" role="group" aria-label="Filter styles by category">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            className={'tab' + (cat === t.key && !searching ? ' active' : '') + (t.key === 'picks' ? ' picks' : '')}
            aria-pressed={cat === t.key && !searching}
            onClick={() => { setCat(t.key); setQuery(''); track('category_select', { category: t.key }); }}
          >
            {t.key === 'favorites' && <IconStar filled={false} />}
            {t.label}
            {t.count > 0 && <span className="tab-count">{t.count}</span>}
          </button>
        ))}
      </div>

      <p className="gen-status" role="status">
        {searching ? `${list.length} styles match “${query.trim()}”` : `${list.length} styles`}
        {remaining > 0 && ` · showing ${shown.length}`}
        <span className="gen-hint"> · Tap a style or its Copy button</span>
      </p>

      <div className="results">
        {list.length === 0 ? (
          <div className="empty">{emptyMsg}</div>
        ) : (
          shown.map((i, k) => (
            <StyleCard
              key={i}
              i={i}
              out={outs[k]}
              size={size}
              fav={favSet.has(i)}
              copied={copiedId === i}
              onCopy={handleCopy}
              onFav={toggleFav}
            />
          ))
        )}
      </div>

      {remaining > 0 && (
        <div className="more">
          <button type="button" className="more-btn" onClick={() => showMore(false)}>
            Show {Math.min(PAGE_SIZE, remaining)} more fonts
          </button>
          <button type="button" className="link-btn" onClick={() => showMore(true)}>
            Show all {list.length}
          </button>
          <p className="more-note">Showing {shown.length} of {list.length} styles</p>
        </div>
      )}
    </section>
  );
}
