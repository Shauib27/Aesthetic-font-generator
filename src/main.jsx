import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';
import { initAnalytics } from './analytics.js';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Pages are prerendered at build time; hydrate them. Fall back to a fresh render in dev.
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);

// Loads GA4 / GTM / Clarity once, after the page has loaded (and after consent if required).
initAnalytics();
