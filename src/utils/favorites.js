const FAVORITES_KEY = 'aesthetic-font-generator-favorites';

export function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

export function saveFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
  } catch {
    // ignore storage errors
  }
}

export function toggleFavorite(favorites, id) {
  const next = new Set(favorites);
  if (next.has(id)) {
    next.delete(id);
  } else {
    next.add(id);
  }
  saveFavorites(next);
  return next;
}
