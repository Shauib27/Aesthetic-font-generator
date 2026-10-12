import { LANDINGS } from './content/landings.jsx';
import { GUIDES } from './content/guides.jsx';
import { LAST_UPDATED } from './data/site.js';

/* Every indexable route, used by the router, the prerenderer and the sitemap.
   All URLs use a trailing slash; that form is the canonical one. */
const ROUTE_LIST = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  ...LANDINGS.map((l) => ({ path: l.path, priority: l.kind === 'category' || l.kind === 'generator' ? '0.9' : '0.8', changefreq: 'monthly' })),
  { path: '/symbols/', priority: '0.7', changefreq: 'monthly' },
  { path: '/guides/', priority: '0.6', changefreq: 'monthly' },
  ...GUIDES.map((g) => ({ path: g.path, priority: '0.6', changefreq: 'monthly', lastmod: g.updated || g.published })),
  { path: '/about/', priority: '0.4', changefreq: 'yearly' },
  { path: '/contact/', priority: '0.3', changefreq: 'yearly' },
  { path: '/privacy-policy/', priority: '0.2', changefreq: 'yearly' },
  { path: '/terms/', priority: '0.2', changefreq: 'yearly' },
  // Utility route: prerendered so deep links work, but noindex and kept out of the sitemap.
  { path: '/admin/settings/', sitemap: false },
];

// lastmod reflects when content was last reviewed, not the build date.
export const ROUTES = ROUTE_LIST.map((r) => ({ lastmod: LAST_UPDATED, ...r }));
