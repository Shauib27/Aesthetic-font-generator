/* Validation for analytics / verification settings. Plain JS so it can run in the
   browser, in the prerenderer and in the Vite dev-server settings API. */

export const FIELDS = ['gscVerification', 'ga4MeasurementId', 'clarityProjectId', 'gtmContainerId', 'requireConsent', 'contactEmail', 'contactFormEndpoint'];

/** Accepts either the token or the full <meta name="google-site-verification" ...> tag. */
export function normalizeGsc(v) {
  const s = String(v || '').trim();
  const m = s.match(/content=["']([^"']+)["']/i);
  return (m ? m[1] : s).trim();
}

export const RULES = {
  gscVerification: { re: /^[A-Za-z0-9_-]{10,100}$/, example: 'abc123XYZ_-… (the content value of the meta tag)' },
  ga4MeasurementId: { re: /^G-[A-Z0-9]{4,16}$/, example: 'G-XXXXXXXXXX' },
  clarityProjectId: { re: /^[a-z0-9]{6,16}$/, example: 'abcd1234ef' },
  gtmContainerId: { re: /^GTM-[A-Z0-9]{4,12}$/, example: 'GTM-XXXXXXX' },
  contactEmail: { re: /^[^\s@<>"']+@[^\s@<>"']+\.[a-z]{2,}$/i, example: 'hello@example.com' },
  contactFormEndpoint: { re: /^https:\/\/[^\s<>"']+$/, example: 'https://formspree.io/f/xxxxxxx' },
};

/** Returns { value, errors } with empty strings for unset fields. Invalid values are dropped. */
export function validateSettings(input = {}) {
  const value = {};
  const errors = {};
  for (const key of FIELDS) {
    if (key === 'requireConsent') {
      value.requireConsent = input.requireConsent !== false && input.requireConsent !== 'false';
      continue;
    }
    let v = key === 'gscVerification' ? normalizeGsc(input[key]) : String(input[key] || '').trim();
    if (key === 'ga4MeasurementId' || key === 'gtmContainerId') v = v.toUpperCase();
    if (key === 'clarityProjectId') v = v.toLowerCase();
    if (v && !RULES[key].re.test(v)) {
      errors[key] = 'Invalid format. Expected something like ' + RULES[key].example;
      v = '';
    }
    value[key] = v;
  }
  return { value, errors };
}
