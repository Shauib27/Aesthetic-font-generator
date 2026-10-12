import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* On phones, comparison tables with 3+ columns are shown as stacked cards instead of
   scrolling sideways. This labels each cell with its column header (data-label) after
   each route renders; the CSS in styles.css (table.cmp.stack) does the layout. */
export default function ResponsiveTables() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.querySelectorAll('main table.cmp').forEach((t) => {
      const heads = [...t.querySelectorAll('thead th')].map((th) => th.textContent.trim());
      if (heads.length < 3) return;
      t.querySelectorAll('tbody tr').forEach((tr) => {
        [...tr.children].forEach((td, i) => td.setAttribute('data-label', heads[i] || ''));
      });
      t.classList.add('stack');
    });
  }, [pathname]);
  return null;
}
