import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CopyProvider } from './copy.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import ToolPage from './pages/ToolPage.jsx';
import { About, Contact, Privacy, Terms } from './pages/StaticPages.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <CopyProvider>
        <ScrollToTop />
        <Header />
        <main className="wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cool-fonts" element={<ToolPage pageKey="cool-fonts" />} />
            <Route path="/fancy-fonts" element={<ToolPage pageKey="fancy-fonts" />} />
            <Route path="/instagram-fonts" element={<ToolPage pageKey="instagram-fonts" />} />
            <Route path="/facebook-fonts" element={<ToolPage pageKey="facebook-fonts" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </CopyProvider>
    </BrowserRouter>
  );
}
