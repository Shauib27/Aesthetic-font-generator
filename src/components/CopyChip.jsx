import { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyChip({ text, multiline = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      try {
        const el = document.createElement('textarea');
        el.value = text;
        el.style.position = 'fixed';
        el.style.opacity = '0';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // clipboard unavailable
      }
    }
  }, [text]);

  return (
    <button
      type="button"
      className={`copy-chip${multiline ? ' copy-chip--multiline' : ''}${copied ? ' copy-chip--copied' : ''}`}
      onClick={handleCopy}
      aria-label={copied ? 'Copied to clipboard' : `Copy: ${text}`}
    >
      <span className="copy-chip__text">{text}</span>
      <span className="copy-chip__icon" aria-hidden="true">
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </span>
    </button>
  );
}
