/* Lightweight, privacy-first analytics.
   - Scripts load once per page load (never again on React route changes), after the page
     has loaded and, if requireConsent is on, only after the visitor accepts.
   - GA4's enhanced measurement records SPA page views from history changes, so no
     manual page_view events are sent (avoids double counting).
   - track() only forwards whitelisted metadata. Text typed into the generator is never
     sent; the generator area is also masked from Microsoft Clarity recordings. */
import { SETTINGS, USE_GA4, USE_GTM, USE_CLARITY, ANALYTICS_ENABLED } from './config/settings.js';
import { CATEGORIES } from './data/styleIndex.js';

const CONSENT_KEY = 'ag_consent';
let loaded = false;

export function getConsent() {
  try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
}

export function needsConsentPrompt() {
  return ANALYTICS_ENABLED && SETTINGS.requireConsent && !getConsent();
}

export function setConsent(granted) {
  try { localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied'); } catch (e) { /* storage unavailable */ }
  if (granted) loadAnalytics();
}

function canLoad() {
  if (!ANALYTICS_ENABLED || typeof window === 'undefined') return false;
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1') return false;
  return !SETTINGS.requireConsent || getConsent() === 'granted';
}

function addScript(src) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

export function loadAnalytics() {
  if (loaded || window.__agAnalyticsLoaded || !canLoad()) return;
  loaded = true;
  window.__agAnalyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];

  if (USE_GTM) {
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    addScript('https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(SETTINGS.gtmContainerId));
  } else if (USE_GA4) {
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', SETTINGS.ga4MeasurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    addScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(SETTINGS.ga4MeasurementId));
  }

  if (USE_CLARITY) {
    window.clarity = window.clarity || function clarity() { (window.clarity.q = window.clarity.q || []).push(arguments); };
    addScript('https://www.clarity.ms/tag/' + encodeURIComponent(SETTINGS.clarityProjectId));
  }
}

/** Call once from main.jsx: loads analytics after the page has finished loading. */
export function initAnalytics() {
  if (!ANALYTICS_ENABLED || typeof window === 'undefined') return;
  const start = () => (window.requestIdleCallback ? window.requestIdleCallback(loadAnalytics, { timeout: 4000 }) : setTimeout(loadAnalytics, 1500));
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });
}

/* ---------- Events (safe metadata only) ---------- */
const ALLOWED_PARAMS = ['style_name', 'category', 'platform', 'action', 'results_count', 'search_term', 'page_type'];
// Search terms are only reported when they are known style vocabulary; anything else becomes "other".
const KNOWN_TERMS = new Set(
  CATEGORIES.flatMap((c) => [c.key, c.label.toLowerCase()]).concat([
    'cursive', 'script', 'bold', 'italic', 'gothic', 'old english', 'fraktur', 'bubble', 'circle', 'square', 'small', 'tiny',
    'small caps', 'superscript', 'subscript', 'glitch', 'zalgo', 'cute', 'kawaii', 'heart', 'star', 'frame', 'border', 'emoji',
    'aesthetic', 'fancy', 'cool', 'vaporwave', 'wide', 'upside down', 'mirror', 'strikethrough', 'underline', 'monospace',
    'double struck', 'instagram', 'tiktok', 'discord', 'whatsapp', 'facebook', 'gaming', 'twitter',
  ])
);

export function safeSearchTerm(q) {
  const t = String(q || '').trim().toLowerCase();
  return KNOWN_TERMS.has(t) ? t : 'other';
}

export function track(name, params = {}) {
  if (!loaded || typeof window === 'undefined') return;
  const clean = {};
  for (const k of ALLOWED_PARAMS) {
    if (params[k] !== undefined) clean[k] = typeof params[k] === 'string' ? params[k].slice(0, 60) : params[k];
  }
  try {
    if (USE_GTM) window.dataLayer.push({ event: name, ...clean });
    else if (USE_GA4 && window.gtag) window.gtag('event', name, clean);
    if (USE_CLARITY && window.clarity) window.clarity('event', name);
  } catch (e) { /* never break the UI because of analytics */ }
}
