import { createContext, useContext, useEffect } from 'react';
import { SITE_NAME, OG_IMAGE, absUrl } from '../data/site.js';
import { SETTINGS } from '../config/settings.js';

/* During prerendering a collector object is provided through context and Seo
   writes its data into it; in the browser Seo updates document.head on navigation. */
export const HeadContext = createContext(null);

function build({ title, description, path = '/', type = 'website', noindex = false, jsonLd, image }) {
  const url = absUrl(path);
  return {
    title,
    description,
    url,
    type,
    robots: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    image: absUrl(image || OG_IMAGE),
    jsonLd: jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [],
    noindex,
  };
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Serialise head tags for the prerendered HTML. */
export function renderHead(d) {
  if (!d) return '';
  const tags = [
    `<title>${esc(d.title)}</title>`,
    // Search Console HTML-tag verification: only when a valid code is configured (src/config/settings.js).
    SETTINGS.gscVerification ? `<meta name="google-site-verification" content="${esc(SETTINGS.gscVerification)}">` : '',
    `<meta name="description" content="${esc(d.description)}">`,
    `<meta name="robots" content="${d.robots}">`,
    d.noindex ? '' : `<link rel="canonical" href="${esc(d.url)}">`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}">`,
    `<meta property="og:locale" content="en_US">`,
    `<meta property="og:type" content="${d.type}">`,
    `<meta property="og:title" content="${esc(d.title)}">`,
    `<meta property="og:description" content="${esc(d.description)}">`,
    `<meta property="og:url" content="${esc(d.url)}">`,
    `<meta property="og:image" content="${esc(d.image)}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${esc(SITE_NAME)} — copy and paste Unicode text styles">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(d.title)}">`,
    `<meta name="twitter:description" content="${esc(d.description)}">`,
    `<meta name="twitter:image" content="${esc(d.image)}">`,
    ...d.jsonLd.map(
      (j) => `<script type="application/ld+json" data-seo>${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`
    ),
  ];
  return tags.filter(Boolean).join('\n');
}

function setMeta(attr, key, value) {
  let m = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!m) {
    m = document.createElement('meta');
    m.setAttribute(attr, key);
    document.head.appendChild(m);
  }
  m.setAttribute('content', value);
}

function applyHead(d) {
  document.title = d.title;
  setMeta('name', 'description', d.description);
  setMeta('name', 'robots', d.robots);
  setMeta('property', 'og:type', d.type);
  setMeta('property', 'og:title', d.title);
  setMeta('property', 'og:description', d.description);
  setMeta('property', 'og:url', d.url);
  setMeta('property', 'og:image', d.image);
  setMeta('name', 'twitter:title', d.title);
  setMeta('name', 'twitter:description', d.description);
  setMeta('name', 'twitter:image', d.image);

  let link = document.head.querySelector('link[rel="canonical"]');
  if (d.noindex) {
    if (link) link.remove();
  } else {
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = d.url;
  }

  document.head.querySelectorAll('script[data-seo]').forEach((s) => s.remove());
  d.jsonLd.forEach((j) => {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.setAttribute('data-seo', '');
    s.textContent = JSON.stringify(j);
    document.head.appendChild(s);
  });
}

export default function Seo(props) {
  const collector = useContext(HeadContext);
  const d = build(props);
  if (collector) collector.head = d;
  const key = JSON.stringify(d);
  useEffect(() => {
    applyHead(JSON.parse(key));
  }, [key]);
  return null;
}

/* ---------- JSON-LD helpers ---------- */
export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

export function faqLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
