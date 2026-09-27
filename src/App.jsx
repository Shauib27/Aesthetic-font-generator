import { useMemo, useState, useRef, useEffect } from "react";
import { CATEGORIES, STYLE_DEFS, WRAP_DEFS } from "./data/styleDefs.js";

const FEATURED_IDS = ["bold", "italic", "script", "fraktur", "circled", "smallcaps"];

function useCopy() {
  const [copiedId, setCopiedId] = useState(null);
  const timer = useRef(null);

  const copy = (id, text) => {
    navigator.clipboard?.writeText(text).catch(() => {
      // Fallback for older browsers / non-secure contexts
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    });
    setCopiedId(id);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopiedId(null), 1400);
  };

  useEffect(() => () => clearTimeout(timer.current), []);
  return { copiedId, copy };
}

function StyleCard({ id, label, output, onCopy, isCopied }) {
  return (
    <button
      className={`style-card${isCopied ? " is-copied" : ""}`}
      onClick={() => onCopy(id, output)}
      type="button"
    >
      <span className="style-card__label">{label}</span>
      <span className="style-card__output">{output}</span>
      <span className="style-card__action">{isCopied ? "Copied" : "Copy"}</span>
    </button>
  );
}

export default function App() {
  const [text, setText] = useState("aesthetic");
  const [activeCategory, setActiveCategory] = useState("classic");
  const [query, setQuery] = useState("");
  const { copiedId, copy } = useCopy();

  const safeText = text.trim().length ? text : "your text";

  const featured = useMemo(
    () =>
      FEATURED_IDS.map((id) => STYLE_DEFS.find((s) => s.id === id)).filter(Boolean),
    []
  );

  const visibleStyles = useMemo(() => {
    const pool =
      activeCategory === "wraps"
        ? WRAP_DEFS.map((w) => ({ ...w, category: "wraps" }))
        : STYLE_DEFS.filter((s) => s.category === activeCategory);
    if (!query.trim()) return pool;
    const q = query.trim().toLowerCase();
    return pool.filter((s) => s.label.toLowerCase().includes(q));
  }, [activeCategory, query]);

  const totalCount = STYLE_DEFS.length + WRAP_DEFS.length;

  return (
    <div className="page">
      <header className="hero">
        <p className="hero__eyebrow">Unicode Font Generator</p>
        <h1 className="hero__title">
          Type it once.
          <br />
          Paste it <em>everywhere</em>, styled.
        </h1>
        <div className="hero__inputRow">
          <input
            className="hero__input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your name, bio, or username…"
            maxLength={120}
            aria-label="Text to convert"
          />
        </div>
        <p className="hero__sub">
          {totalCount}+ copy-paste fonts for Instagram, TikTok, Discord and gaming
          usernames — no app, no login.
        </p>
      </header>

      <section className="featured" aria-label="Popular styles">
        {featured.map((s) => {
          const output = s.fn(safeText);
          return (
            <StyleCard
              key={s.id}
              id={s.id}
              label={s.label}
              output={output}
              onCopy={copy}
              isCopied={copiedId === s.id}
            />
          );
        })}
      </section>

      <section className="browse">
        <div className="browse__controls">
          <div className="tabs" role="tablist">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={activeCategory === c.id}
                className={`tabs__item${activeCategory === c.id ? " is-active" : ""}`}
                onClick={() => setActiveCategory(c.id)}
                type="button"
              >
                {c.label}
              </button>
            ))}
          </div>
          <input
            className="browse__search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter styles…"
            aria-label="Filter styles by name"
          />
        </div>

        <div className="style-grid">
          {visibleStyles.map((s) => {
            const output = s.fn(safeText);
            return (
              <StyleCard
                key={s.id}
                id={s.id}
                label={s.label}
                output={output}
                onCopy={copy}
                isCopied={copiedId === s.id}
              />
            );
          })}
          {visibleStyles.length === 0 && (
            <p className="style-grid__empty">No styles match “{query}”.</p>
          )}
        </div>
      </section>

      <footer className="footer">
        <p>
          Aesthetic fonts use standard Unicode characters, so they render
          identically on iOS, Android, and desktop — anywhere Unicode text is
          accepted.
        </p>
      </footer>
    </div>
  );
}
