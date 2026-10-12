/* Build step 3: render every route to static HTML (title, meta, canonical, Open Graph,
   JSON-LD and page content), then write sitemap.xml, robots.txt and 404.html. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');
// The SSR bundle is usually dist-ssr/entry-server.js, but build plugins (e.g. Cloudflare's)
// can move it to dist-ssr/assets/entry-server-<hash>.js, so search for it.
function findEntry(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      const hit = findEntry(p);
      if (hit) return hit;
    } else if (/^entry-server(-[\w-]+)?\.m?js$/.test(e.name)) {
      return p;
    }
  }
  return null;
}
const entry = findEntry(ssrDir);
if (!entry) throw new Error('Prerender: no entry-server bundle found in ' + ssrDir);
const { render, ROUTES, SITE_URL } = await import(pathToFileURL(entry).href);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const build = (url) => {
  const { html, head } = render(url);
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
};

for (const r of ROUTES) {
  const out = path.join(dist, r.path, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, build(r.path));
}
fs.writeFileSync(path.join(dist, '404.html'), build('/404/'));

const today = new Date().toISOString().slice(0, 10);
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  ROUTES.filter((r) => r.sitemap !== false).map((r) => `  <url><loc>${SITE_URL}${r.path}</loc><lastmod>${r.lastmod || today}</lastmod><changefreq>${r.changefreq}</changefreq><priority>${r.priority}</priority></url>`).join('\n') +
  '\n</urlset>\n';
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

// Permanent (301) redirects from slashless URLs to the canonical trailing-slash URLs.
// Without these, hosts use their own default (Cloudflare: a temporary 307).
const redirects = ROUTES.filter((r) => r.path !== '/').map((r) => `${r.path.slice(0, -1)} ${r.path} 301`);
fs.writeFileSync(path.join(dist, '_redirects'), redirects.join('\n') + '\n');

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${ROUTES.length} routes + 404.html for ${SITE_URL}`);
