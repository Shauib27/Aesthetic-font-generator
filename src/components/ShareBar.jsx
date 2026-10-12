import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { absUrl } from '../data/site.js';
import { useCopy } from '../copy.jsx';
import { IconShare, IconLink } from './Icons.jsx';

/* Lightweight sharing: native share sheet where supported, plain share URLs otherwise.
   No third-party widgets or scripts are loaded. */
export default function ShareBar({ title = 'Free aesthetic font generator — copy & paste Unicode text styles', heading = 'Share this tool', compact = false }) {
  const { pathname } = useLocation();
  const { copy } = useCopy();
  const [canNative, setCanNative] = useState(false);
  const url = absUrl(pathname.endsWith('/') ? pathname : pathname + '/');

  useEffect(() => {
    setCanNative(typeof navigator !== 'undefined' && typeof navigator.share === 'function');
  }, []);

  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { name: 'X', label: 'X (Twitter)', href: `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
    { name: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}` },
    { name: 'Telegram', href: `https://t.me/share/url?url=${u}&text=${t}` },
    { name: 'Reddit', href: `https://www.reddit.com/submit?url=${u}&title=${t}` },
  ];

  const nativeShare = async () => {
    try {
      await navigator.share({ title, url });
    } catch (e) {
      /* user closed the share sheet */
    }
  };

  return (
    <div className={'share' + (compact ? ' compact' : '')}>
      <span className="share-label">{heading}</span>
      <div className="share-btns">
        {canNative && (
          <button type="button" className="share-btn primary" onClick={nativeShare}>
            <IconShare /> Share
          </button>
        )}
        {links.map((l) => (
          <a
            key={l.name}
            className="share-btn"
            href={l.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={`Share on ${l.label || l.name} (opens in a new tab)`}
          >
            {l.name}
          </a>
        ))}
        <button type="button" className="share-btn" onClick={() => copy(url, 'Link copied')}>
          <IconLink /> Copy link
        </button>
      </div>
    </div>
  );
}
