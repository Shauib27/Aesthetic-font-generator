import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FONTS } from '../data/fontEngine.js';
import { FONT_META } from '../data/fontMeta.js';
import { useCopy } from '../copy.jsx';
import { ARTICLE_HTML } from '../data/article.js';

// Fill the A–Z rows from the real font engine once, so they are part of the prerendered HTML.
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const HTML = ARTICLE_HTML.replace(
  /<span class="ex-text az-slot" data-az="([^"]+)"><\/span>/g,
  (m, name) => {
    const idx = FONT_META.findIndex((x) => x && x.name === name);
    let out = LETTERS;
    if (idx >= 0 && FONTS[idx]) {
      try { out = FONTS[idx].f(LETTERS); } catch (e) { /* keep plain letters */ }
    }
    return `<span class="ex-text az-slot" data-az="${name}">${out}</span>`;
  }
).replace(/<button class="cp" data-copybtn>/g, '<button type="button" class="cp" data-copybtn>');

export default function ArticleContent() {
  const ref = useRef(null);
  const { copy } = useCopy();
  const navigate = useNavigate();

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const onClick = (e) => {
      const b = e.target.closest('[data-copybtn]');
      if (b) {
        const scope = b.closest('.example');
        const t = scope ? scope.querySelector('.ex-text') : null;
        const text = t ? t.innerText : '';
        if (text) copy(text, 'Copied to clipboard');
        return;
      }
      // Internal links inside the article HTML use client-side navigation.
      const a = e.target.closest('a[href^="/"]');
      if (a && !e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) {
        e.preventDefault();
        navigate(a.getAttribute('href'));
      }
    };
    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, [copy, navigate]);

  return <div className="article" ref={ref} dangerouslySetInnerHTML={{ __html: HTML }} />;
}
