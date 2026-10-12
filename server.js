// Optional Node host for the production build (requires `npm i express`).
// Netlify / Cloudflare Pages serve dist/ directly and don't need this file.
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const dist = path.join(__dirname, 'dist');

// Canonical URLs end with a slash: /about -> /about/ (files and the root are left alone).
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.endsWith('/') && !path.extname(req.path)) {
    const q = req.url.slice(req.path.length);
    return res.redirect(301, req.path + '/' + q);
  }
  next();
});

app.use(express.static(dist, { maxAge: '1h', etag: true }));

app.use((req, res) => {
  res.status(404).sendFile(path.join(dist, '404.html'));
});

app.listen(PORT, () => {
  console.log(`Aesthetic Text Generator running at http://localhost:${PORT}`);
});
