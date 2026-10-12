/* Tiny inline SVG icons (no icon library). All are decorative: aria-hidden. */
const base = {
  width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false',
};

export const IconCopy = () => (
  <svg {...base}><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" /></svg>
);
export const IconCheck = () => (
  <svg {...base}><path d="M20 6 9 17l-5-5" /></svg>
);
export const IconStar = ({ filled }) => (
  <svg {...base} fill={filled ? 'currentColor' : 'none'}><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" /></svg>
);
export const IconX = () => (
  <svg {...base}><path d="M18 6 6 18M6 6l12 12" /></svg>
);
export const IconSearch = () => (
  <svg {...base}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const IconSpark = () => (
  <svg {...base}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>
);
export const IconShare = () => (
  <svg {...base}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></svg>
);
export const IconLink = () => (
  <svg {...base}><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /></svg>
);
export const IconMenu = () => (
  <svg {...base} width={22} height={22}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const IconChevron = () => (
  <svg {...base} width={14} height={14}><path d="m6 9 6 6 6-6" /></svg>
);
export const IconArrow = () => (
  <svg {...base} width={14} height={14}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
