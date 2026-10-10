import { createContext, useContext, useState, useCallback, useRef } from 'react';

const CopyCtx = createContext(null);

export function CopyProvider({ children }) {
  const [toast, setToast] = useState('');
  const timer = useRef(null);

  const show = useCallback((msg) => {
    setToast(msg);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(''), 1600);
  }, []);

  const copy = useCallback(async (text, msg) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error('no-clipboard');
      }
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (err) { /* noop */ }
      document.body.removeChild(ta);
    }
    show(msg || 'Copied! ✅ Paste it anywhere');
  }, [show]);

  return (
    <CopyCtx.Provider value={{ copy, show }}>
      {children}
      <div id="toast" role="status" aria-live="polite" className={toast ? 'show' : ''}>{toast}</div>
    </CopyCtx.Provider>
  );
}

export function useCopy() {
  return useContext(CopyCtx);
}
