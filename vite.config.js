import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { validateSettings } from './src/config/validate.js';

/* Dev-only endpoint used by /admin/settings/ to write src/config/site-settings.json.
   It exists only in `npm run dev` (configureServer) and is never part of the production build. */
function siteSettingsDevApi() {
  return {
    name: 'site-settings-dev-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/__site-settings', (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; return res.end(); }
        let body = '';
        req.on('data', (c) => { body += c; if (body.length > 10000) req.destroy(); });
        req.on('end', () => {
          try {
            const { value, errors } = validateSettings(JSON.parse(body));
            if (Object.keys(errors).length) { res.statusCode = 400; return res.end(JSON.stringify(errors)); }
            fs.writeFileSync(path.resolve('src/config/site-settings.json'), JSON.stringify(value, null, 2) + '\n');
            res.setHeader('Content-Type', 'application/json');
            res.end('{"ok":true}');
          } catch (e) {
            res.statusCode = 400;
            res.end('{"ok":false}');
          }
        });
      });
    },
  };
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), siteSettingsDevApi()],
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          output: {
            // React + router change rarely: keep them in a separately cached chunk.
            manualChunks(id) {
              if (id.includes('node_modules')) return 'vendor';
            },
          },
        },
      },
}));
