import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import { SETTINGS } from '../config/settings.js';
import { validateSettings, RULES } from '../config/validate.js';
import { useCopy } from '../copy.jsx';

/* Analytics & verification settings editor (noindex, not linked from navigation).
   This is a static site, so the browser cannot change the live build by itself:
   - In `npm run dev`, "Save settings" writes src/config/site-settings.json through a
     dev-only endpoint (see vite.config.js). Commit the file and redeploy.
   - On the live site, download the file (or use the build environment variables). */
const LABELS = {
  gscVerification: ['Google Search Console', 'Verification code (HTML tag method). Paste the code or the whole meta tag.'],
  ga4MeasurementId: ['Google Analytics 4', 'Measurement ID. Ignored when a GTM container is set — add GA4 inside GTM instead.'],
  clarityProjectId: ['Microsoft Clarity', 'Project ID from Clarity → Settings → Overview.'],
  gtmContainerId: ['Google Tag Manager (optional)', 'Container ID.'],
  contactEmail: ['Contact email (optional)', 'Shown on the contact page.'],
  contactFormEndpoint: ['Contact form endpoint (optional)', 'HTTPS form service URL (e.g. Formspree) that accepts JSON POSTs.'],
};
const ENV = {
  gscVerification: 'VITE_GSC_VERIFICATION', ga4MeasurementId: 'VITE_GA4_ID', clarityProjectId: 'VITE_CLARITY_ID',
  gtmContainerId: 'VITE_GTM_ID', requireConsent: 'VITE_REQUIRE_CONSENT', contactEmail: 'VITE_CONTACT_EMAIL',
  contactFormEndpoint: 'VITE_CONTACT_FORM_ENDPOINT',
};

export default function AdminSettings() {
  const { copy } = useCopy();
  const [form, setForm] = useState({ ...SETTINGS });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const check = () => {
    const r = validateSettings(form);
    setErrors(r.errors);
    return Object.keys(r.errors).length ? null : r.value;
  };

  const json = (v) => JSON.stringify(v, null, 2) + '\n';

  const save = async (e) => {
    e.preventDefault();
    const v = check();
    if (!v) { setStatus('Fix the highlighted fields first.'); return; }
    try {
      const res = await fetch('/__site-settings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(v) });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('Saved to src/config/site-settings.json. Commit the file and redeploy to apply it on the live site.');
    } catch (err) {
      setStatus('This is the live (static) site, so it can’t save files. Download the settings file below, replace src/config/site-settings.json, then commit and redeploy — or set the environment variables listed below in your hosting dashboard.');
    }
  };

  const download = () => {
    const v = check();
    if (!v) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([json(v)], { type: 'application/json' }));
    a.download = 'site-settings.json';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <>
      <Seo title="Site Settings — Aesthetic Text Generator" description="Analytics and verification settings." path="/admin/settings/" noindex />
      <div className="hero left"><h1>Site settings</h1></div>
      <section className="content prose narrow">
        <h2>Analytics &amp; verification</h2>
        <p className="small">
          Values are public once deployed (they appear in page source), so never paste passwords or API secrets here.
          Scripts load only for valid IDs, once per visit, after the page loads
          {form.requireConsent ? ' and after the visitor accepts the consent banner' : ''}.
        </p>
        <form className="contact-form settings-form" onSubmit={save} noValidate>
          {Object.keys(LABELS).map((k) => (
            <div key={k} className="field-group">
              <label htmlFor={'s-' + k}>{LABELS[k][0]}</label>
              <input
                id={'s-' + k}
                value={form[k] || ''}
                placeholder={RULES[k].example}
                aria-describedby={'s-' + k + '-help'}
                aria-invalid={!!errors[k]}
                onChange={(e) => set(k, e.target.value)}
                autoComplete="off"
                spellCheck={false}
              />
              <span id={'s-' + k + '-help'} className={errors[k] ? 'form-error' : 'hint'}>{errors[k] || LABELS[k][1]}</span>
            </div>
          ))}
          <label className="check">
            <input type="checkbox" checked={form.requireConsent} onChange={(e) => set('requireConsent', e.target.checked)} />
            Ask visitors for consent before loading analytics (recommended for EU/UK visitors)
          </label>
          <div className="settings-actions">
            <button type="submit" className="btn">Save settings</button>
            <button type="button" className="share-btn" onClick={download}>Download settings file</button>
            <button type="button" className="share-btn" onClick={() => { const v = check(); if (v) copy(json(v), 'Settings JSON copied'); }}>Copy JSON</button>
          </div>
          {status && <p className="tip" role="status">{status}</p>}
        </form>

        <h2>Alternative: environment variables</h2>
        <p>Set these in Cloudflare (Workers &amp; Pages → Settings → Variables, for the build) to override the file without a code change:</p>
        <table className="cmp">
          <thead><tr><th>Setting</th><th>Variable</th></tr></thead>
          <tbody>
            {Object.keys(ENV).map((k) => <tr key={k}><td>{(LABELS[k] || ['Require consent'])[0]}</td><td><code>{ENV[k]}</code></td></tr>)}
          </tbody>
        </table>

        <h2>What is never tracked</h2>
        <ul>
          <li>The text typed into the generator and the generated results (the generator is masked in Clarity recordings).</li>
          <li>Free-text search terms — only known style words (e.g. “cursive”) are reported, anything else is sent as “other”.</li>
        </ul>
        <p>Events sent: <code>font_copy</code>, <code>font_favorite</code>, <code>font_search</code>, <code>category_select</code>, <code>share_click</code> — with style name, category, platform or result count only.</p>
      </section>
    </>
  );
}
