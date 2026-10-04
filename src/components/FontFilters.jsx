import { CATEGORIES } from '../data/fontStyles';

export default function FontFilters({ activeCategory, onCategoryChange }) {
  return (
    <div className="filters" role="tablist" aria-label="Font category filters">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          role="tab"
          aria-selected={activeCategory === cat}
          className={`filters__btn${activeCategory === cat ? ' filters__btn--active' : ''}`}
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
