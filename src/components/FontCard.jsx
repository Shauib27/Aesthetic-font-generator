import { useState, useCallback } from 'react';
import { Copy, Heart } from 'lucide-react';

export default function FontCard({ style, output, isFavorite, onToggleFavorite }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = output;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // clipboard unavailable
      }
    }
  }, [output]);

  return (
    <div className="font-card">
      <div className="font-card__content">
        <div className="font-card__name">{style.name}</div>
        <div className="font-card__text" aria-label={`${style.name} style`}>
          {output || ' '}
        </div>
      </div>
      <div className="font-card__actions">
        <button
          type="button"
          className={`font-card__btn font-card__btn--copy${copied ? ' font-card__btn--copied' : ''}`}
          onClick={handleCopy}
          aria-label={copied ? 'Copied' : `Copy ${style.name} text`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button
          type="button"
          className={`font-card__btn font-card__btn--favorite${isFavorite ? ' font-card__btn--favorite-active' : ''}`}
          onClick={() => onToggleFavorite(style.id)}
          aria-label={isFavorite ? `Remove ${style.name} from favorites` : `Add ${style.name} to favorites`}
          aria-pressed={isFavorite}
        >
          <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
    </div>
  );
}
