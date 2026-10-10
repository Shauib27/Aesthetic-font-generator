import { useEffect } from 'react';

export default function Seo({ title, description, jsonLd }) {
  useEffect(() => {
    document.title = title;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement('meta');
      m.setAttribute('name', 'description');
      document.head.appendChild(m);
    }
    m.setAttribute('content', description);

    const existing = document.getElementById('page-jsonld');
    if (jsonLd) {
      let s = existing;
      if (!s) {
        s = document.createElement('script');
        s.id = 'page-jsonld';
        s.type = 'application/ld+json';
        document.head.appendChild(s);
      }
      s.textContent = JSON.stringify(jsonLd);
    } else if (existing) {
      existing.remove();
    }
  }, [title, description, jsonLd]);
  return null;
}
