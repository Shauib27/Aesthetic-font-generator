import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Shuffle } from 'lucide-react';
import FontCard from './FontCard';
import FontFilters from './FontFilters';
import { fontStyles, filterStyles, FONT_STYLE_COUNT } from '../data/fontStyles';
import { loadFavorites, toggleFavorite } from '../utils/favorites';

const INITIAL_COUNT = 35;
const LOAD_MORE_COUNT = 35;

export default function FontGenerator() {
  const [inputText, setInputText] = useState('');
  const [category, setCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [favorites, setFavorites] = useState(() => loadFavorites());
  const [randomPreview, setRandomPreview] = useState(null);
  const textareaRef = useRef(null);

  // Until the user types something, the style previews below show a demo
  // word ("aesthetic") instead of an empty box, so visitors instantly
  // see every style in action without having to type first.
  const displayText = inputText.trim() ? inputText : 'aesthetic';

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [category]);

  // Auto-grow the textarea to fit its content so the user never has to
  // manually drag-resize it.
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }
  }, [inputText]);

  const filteredStyles = useMemo(
    () => filterStyles(fontStyles, { category, favorites }),
    [category, favorites],
  );

  const visibleStyles = useMemo(
    () => filteredStyles.slice(0, visibleCount),
    [filteredStyles, visibleCount],
  );

  const outputs = useMemo(() => {
    const map = new Map();
    visibleStyles.forEach((style) => {
      map.set(style.id, style.transform(displayText));
    });
    return map;
  }, [visibleStyles, displayText]);

  const handleToggleFavorite = useCallback((id) => {
    setFavorites((prev) => toggleFavorite(prev, id));
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  const handleRandom = () => {
    const pool = filteredStyles.length ? filteredStyles : fontStyles;
    const style = pool[Math.floor(Math.random() * pool.length)];
    const output = style.transform(displayText);
    setRandomPreview({ name: style.name, output });
  };

  const hasMore = visibleCount < filteredStyles.length;

  return (
    <section className="generator" aria-label="Aesthetic Font Generator tool">
      <div className="container">
        <div className="generator__input-wrap">
          <textarea
            id="font-input"
            ref={textareaRef}
            className="generator__textarea"
            placeholder="Enter your text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={1}
            aria-label="Enter your text"
          />
        </div>

        <div className="generator__controls">
          <button type="button" className="generator__random-btn" onClick={handleRandom}>
            <Shuffle size={16} aria-hidden="true" />
            Random Font
          </button>
        </div>

        {randomPreview && (
          <div className="random-preview" role="status">
            <div className="random-preview__label">{randomPreview.name}</div>
            <div className="random-preview__text">{randomPreview.output}</div>
          </div>
        )}

        <FontFilters activeCategory={category} onCategoryChange={setCategory} />

        <p className="generator__count">
          Showing {visibleStyles.length} of {filteredStyles.length} styles
          {FONT_STYLE_COUNT >= 250 ? ` (${FONT_STYLE_COUNT}+ total)` : ''}
        </p>

        <div className="results">
          {visibleStyles.length === 0 ? (
            <div className="no-results">
              No font styles match this category yet. Try a different category above.
            </div>
          ) : (
            visibleStyles.map((style) => (
              <FontCard
                key={style.id}
                style={style}
                output={outputs.get(style.id)}
                isFavorite={favorites.has(style.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))
          )}
        </div>

        {hasMore && (
          <div className="load-more-wrap">
            <button type="button" className="load-more-btn" onClick={handleLoadMore}>
              Load More Fonts
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
