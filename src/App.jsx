import { Routes, Route } from 'react-router-dom';
import { CopyProvider } from './copy.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import LandingPage from './pages/LandingPage.jsx';
import GuidePage from './pages/GuidePage.jsx';
import GuidesIndex from './pages/GuidesIndex.jsx';
import Symbols from './pages/Symbols.jsx';
import { About, Contact, Privacy, Terms } from './pages/StaticPages.jsx';
import NotFound from './pages/NotFound.jsx';
import AdminSettings from './pages/AdminSettings.jsx';
import ConsentBanner from './components/ConsentBanner.jsx';
import { LANDINGS } from './content/landings.jsx';
import { GUIDES } from './content/guides.jsx';

/* Router-agnostic app shell: wrapped in BrowserRouter (main.jsx) or StaticRouter (entry-server.jsx).
   React Router matches '/about' and '/about/' alike; links always use the trailing-slash form. */
export default function App() {
  return (
    <CopyProvider>
      <ScrollToTop />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          {LANDINGS.map((l) => (
            <Route key={l.path} path={l.path} element={<LandingPage path={l.path} />} />
          ))}
          <Route path="/symbols/" element={<Symbols />} />
          <Route path="/guides/" element={<GuidesIndex />} />
          {GUIDES.map((g) => (
            <Route key={g.path} path={g.path} element={<GuidePage path={g.path} />} />
          ))}
          <Route path="/about/" element={<About />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/privacy-policy/" element={<Privacy />} />
          <Route path="/terms/" element={<Terms />} />
          <Route path="/admin/settings/" element={<AdminSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ConsentBanner />
    </CopyProvider>
  );
}
