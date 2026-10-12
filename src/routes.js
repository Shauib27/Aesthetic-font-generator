import { LANDINGS } from './content/landings.jsx';
import { GUIDES } from './content/guides.jsx';

/* Every indexable route, used by the router, the prerenderer and the sitemap.
   All URLs use a trailing slash; that form is the canonical one. */
export const ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  ...LANDINGS.map((l) => ({ path: l.path, priority: l.kind === 'category' || l.kind === 'generator' ? '0.9' : '0.8', changefreq: 'monthly' })),
  { path: '/symbols/', priority: '0.7', changefreq: 'monthly' },
  { path: '/guides/', priority: '0.6', changefreq: 'monthly' },
  ...GUIDES.map((g) => ({ path: g.path, priority: '0.6', changefreq: 'monthly' })),
  { path: '/about/', priority: '0.4', changefreq: 'yearly' },
  { path: '/contact/', priority: '0.3', changefreq: 'yearly' },
  { path: '/privacy-policy/', priority: '0.2', changefreq: 'yearly' },
  { path: '/terms/', priority: '0.2', changefreq: 'yearly' },
];
