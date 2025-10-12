import { useEffect, useRef, useState } from 'react';

const SCRIPT_SRC = 'https://js.hcaptcha.com/1/api.js?render=explicit';

let hcaptchaScriptPromise: Promise<void> | null = null;

function ensureHCaptchaScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (window.hcaptcha) {
    return Promise.resolve();
  }

  if (!hcaptchaScriptPromise) {
    hcaptchaScriptPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
      if (existing) {
        existing.addEventListener('load', () => resolve(), { once: true });
        existing.addEventListener(
          'error',
          (event) => {
            hcaptchaScriptPromise = null;
            reject(event);
          },
          { once: true },
        );
        return;
      }

      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = (event) => {
        hcaptchaScriptPromise = null;
        reject(event);
      };
      document.head.appendChild(script);
    });
  }

  return hcaptchaScriptPromise;
}

type HCaptchaProps = {
  siteKey: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  className?: string;
};

export default function HCaptcha({ siteKey, onVerify, onExpire, onError, className }: HCaptchaProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | number | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (typeof window === 'undefined') {
      return () => undefined;
    }

    ensureHCaptchaScript()
      .then(() => {
        if (cancelled) return;
        if (!containerRef.current) return;

        if (!window.hcaptcha) {
          setLoadError('Unable to load verification service. Please refresh and try again.');
          return;
        }

        widgetIdRef.current = window.hcaptcha.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            onVerify(token);
          },
          'expired-callback': () => {
            onExpire?.();
          },
          'error-callback': () => {
            onError?.();
          },
        });
      })
      .catch(() => {
        if (cancelled) return;
        setLoadError('Unable to load verification service. Please refresh and try again.');
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current !== null && window.hcaptcha) {
        try {
          window.hcaptcha.remove(widgetIdRef.current);
        } catch {
          // noop
        }
      }
    };
  }, [siteKey, onVerify, onExpire, onError]);

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className={className}>
      <div ref={containerRef} />
      {loadError && <p className="mt-2 text-sm text-red-600 text-center">{loadError}</p>}
    </div>
  );
}
