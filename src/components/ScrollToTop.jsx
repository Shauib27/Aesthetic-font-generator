import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        // wait a tick so the route has rendered
        requestAnimationFrame(() => el.scrollIntoView());
        return;
      }
    }
    // 'instant' overrides the CSS smooth scrolling so a new page starts at the top immediately.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}
