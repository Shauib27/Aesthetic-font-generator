import { useEffect, useRef } from 'react';
import { FONTS } from '../data/fontEngine.js';
import { useCopy } from '../copy.jsx';
import { ARTICLE_HTML } from '../data/article.js';

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export default function ArticleContent() {
  const ref = useRef(null);
  const { copy } = useCopy();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onClick = (e) => {
      const b = e.target.closest('[data-copy]');
      if (b) copy(b.getAttribute('data-copy'));
    };
    el.addEventListener('click', onClick);

    // Fill the A–Z preview table using the font engine
    const az = el.querySelector('#azBody');
    if (az && FONTS.length) {
      const cols = [0, 1, 3, 5, 7]; // bold, italic, script, gothic, double-struck
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let rows = '';
      for (const L of letters) {
        rows += '<tr><td><strong>' + L + '</strong></td>' + cols.map((si) => {
          let o;
          try { o = FONTS[si].f(L); } catch (err) { o = L; }
          return '<td>' + esc(o) + '</td>';
        }).join('') + '</tr>';
      }
      az.innerHTML = rows;
    }

    return () => el.removeEventListener('click', onClick);
  }, [copy]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: ARTICLE_HTML }} />;
}
