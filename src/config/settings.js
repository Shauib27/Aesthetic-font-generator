/* The ONE place analytics, verification and contact settings are read from.
   Sources (later wins):
     1. src/config/site-settings.json  — edit by hand or via /admin/settings/ in `npm run dev`
     2. Build-time environment variables (e.g. in the Cloudflare dashboard):
        VITE_GSC_VERIFICATION, VITE_GA4_ID, VITE_CLARITY_ID, VITE_GTM_ID,
        VITE_REQUIRE_CONSENT, VITE_CONTACT_EMAIL, VITE_CONTACT_FORM_ENDPOINT
   Every value is validated; invalid values are ignored so nothing broken is ever output. */
import fileSettings from './site-settings.json';
import { validateSettings } from './validate.js';

const env = import.meta.env || {};
const pick = (envKey, fallback) => (env[envKey] !== undefined && env[envKey] !== '' ? env[envKey] : fallback);

const merged = {
  gscVerification: pick('VITE_GSC_VERIFICATION', fileSettings.gscVerification),
  ga4MeasurementId: pick('VITE_GA4_ID', fileSettings.ga4MeasurementId),
  clarityProjectId: pick('VITE_CLARITY_ID', fileSettings.clarityProjectId),
  gtmContainerId: pick('VITE_GTM_ID', fileSettings.gtmContainerId),
  requireConsent: pick('VITE_REQUIRE_CONSENT', fileSettings.requireConsent),
  contactEmail: pick('VITE_CONTACT_EMAIL', fileSettings.contactEmail),
  contactFormEndpoint: pick('VITE_CONTACT_FORM_ENDPOINT', fileSettings.contactFormEndpoint),
};

export const SETTINGS = validateSettings(merged).value;
export const SETTINGS_ERRORS = validateSettings(merged).errors;

/** GA4 is loaded directly only when no GTM container is set (configure GA4 inside GTM instead). */
export const USE_GA4 = !!SETTINGS.ga4MeasurementId && !SETTINGS.gtmContainerId;
export const USE_GTM = !!SETTINGS.gtmContainerId;
export const USE_CLARITY = !!SETTINGS.clarityProjectId;
export const ANALYTICS_ENABLED = USE_GA4 || USE_GTM || USE_CLARITY;
