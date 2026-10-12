/* Site-wide constants. Set VITE_SITE_URL at build time if the production domain changes. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://aesthetictextgenerator.com').replace(/\/+$/, '');
export const SITE_NAME = 'Aesthetic Text Generator';
export const OG_IMAGE = '/og-image.png';
export const LAST_UPDATED = '2026-10-12';

/** Absolute canonical URL for a route path ('/' or '/x/'). */
export function absUrl(path = '/') {
  return SITE_URL + path;
}

/* Navigation groups used by the header and footer. Labels are descriptive anchor text. */
export const NAV = {
  fonts: [
    { to: '/cursive-fonts/', label: 'Cursive Fonts' },
    { to: '/cute-fonts/', label: 'Cute Fonts' },
    { to: '/gothic-fonts/', label: 'Gothic Fonts' },
    { to: '/bold-fonts/', label: 'Bold Fonts' },
    { to: '/bubble-fonts/', label: 'Bubble Fonts' },
    { to: '/small-caps-fonts/', label: 'Small Caps' },
    { to: '/glitch-text/', label: 'Glitch Text' },
  ],
  generators: [
    { to: '/', label: 'Aesthetic Font Generator' },
    { to: '/fancy-fonts/', label: 'Fancy Text Generator' },
    { to: '/cool-fonts/', label: 'Cool Fonts' },
    { to: '/stylish-text/', label: 'Stylish Text' },
    { to: '/symbols/', label: 'Aesthetic Symbols' },
  ],
  social: [
    { to: '/instagram-fonts/', label: 'Instagram Fonts' },
    { to: '/tiktok-fonts/', label: 'TikTok Fonts' },
    { to: '/discord-fonts/', label: 'Discord Fonts' },
    { to: '/whatsapp-fonts/', label: 'WhatsApp Fonts' },
    { to: '/facebook-fonts/', label: 'Facebook Fonts' },
    { to: '/gaming-fonts/', label: 'Gaming Fonts' },
  ],
  guides: [
    { to: '/guides/unicode-fonts-explained/', label: 'Unicode fonts explained' },
    { to: '/guides/how-to-copy-and-paste-fonts/', label: 'How to copy and paste fonts' },
    { to: '/guides/why-fonts-show-as-boxes/', label: 'Why fonts show as boxes' },
    { to: '/guides/are-fancy-fonts-safe/', label: 'Are fancy fonts safe?' },
    { to: '/guides/aesthetic-bio-ideas/', label: 'Aesthetic bio ideas' },
  ],
  company: [
    { to: '/about/', label: 'About' },
    { to: '/contact/', label: 'Contact' },
  ],
  legal: [
    { to: '/privacy-policy/', label: 'Privacy Policy' },
    { to: '/terms/', label: 'Terms of Use' },
  ],
};
