import { useEffect, useRef } from 'react';
import { FONTS } from '../data/fontEngine.js';
import { FONT_META } from '../data/fontMeta.js';
import { useCopy } from '../copy.jsx';
import { ARTICLE_HTML } from '../data/article.js';

export default function ArticleContent() {
  const ref = useRef(null);
  const { copy } = useCopy();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onClick = (e) => {
      const b = e.target.closest('[data-copybtn]');
      if (!b) return;
      const scope = b.closest('.example');
      const t = scope ? scope.querySelector('.ex-text') : null;
      const text = t ? t.innerText : '';
      if (text) copy(text, 'Copied!');
    };
    el.addEventListener('click', onClick);

    // Fill the A–Z rows from the real font engine (regenerated, not pasted)
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    el.querySelectorAll('.az-slot').forEach((slot) => {
      const name = slot.getAttribute('data-az');
      const idx = FONT_META.findIndex((m) => m && m.name === name);
      if (idx >= 0 && FONTS[idx]) {
        try {
          slot.textContent = FONTS[idx].f(letters);
        } catch (err) {
          slot.textContent = letters;
        }
      }
    });

    return () => el.removeEventListener('click', onClick);
  }, [copy]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: ARTICLE_HTML }} />;
}
