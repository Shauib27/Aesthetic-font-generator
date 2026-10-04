import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import SEO from './components/SEO';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <SEO />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
