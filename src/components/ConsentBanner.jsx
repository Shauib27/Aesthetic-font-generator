import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { needsConsentPrompt, setConsent } from '../analytics.js';

/* Shown only when analytics IDs are configured, requireConsent is on and the visitor hasn't
   chosen yet. Rendered after mount (never in prerendered HTML) and positioned as a fixed
   overlay, so it causes no layout shift. The footer "Privacy choices" button reopens it. */
export default function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(needsConsentPrompt());
    const reopen = () => setOpen(true);
    window.addEventListener('ag:privacy-choices', reopen);
    return () => window.removeEventListener('ag:privacy-choices', reopen);
  }, []);

  if (!open) return null;
  const choose = (granted) => {
    setConsent(granted);
    setOpen(false);
  };
  return (
    <div className="consent" role="dialog" aria-live="polite" aria-label="Analytics consent">
      <p>
        We use privacy-friendly analytics to see which styles and pages are useful. The text you type is never
        sent anywhere. <Link to="/privacy-policy/">Privacy policy</Link>
      </p>
      <div className="consent-btns">
        <button type="button" className="share-btn" onClick={() => choose(false)}>Decline</button>
        <button type="button" className="btn sm" onClick={() => choose(true)}>Accept</button>
      </div>
    </div>
  );
}
