import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import {
  PastelFonts,
  CuteFonts,
  InstagramFonts,
  BioFonts,
  About,
  Contact,
  PrivacyPolicy,
  Terms,
  Disclaimer,
} from './pages/PlaceholderPages';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pastel-fonts" element={<PastelFonts />} />
          <Route path="/cute-fonts" element={<CuteFonts />} />
          <Route path="/instagram-fonts" element={<InstagramFonts />} />
          <Route path="/bio-fonts" element={<BioFonts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
