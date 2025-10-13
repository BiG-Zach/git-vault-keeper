import { useEffect, useRef, useState } from 'react';

const SCRIPT_SRC = 'https://js.hcaptcha.com/1/api.js?render=explicit';
const CALLBACK_NAME = '__hcaptchaOnLoadCallback';
const TEST_HCAPTCHA_TOKEN = 'test-hcaptcha-token';

declare const process:
  | undefined
  | {
      env?: Record<string, string | undefined>;
    };

type VitestGlobal = typeof globalThis & {
  __vitest_worker__?: unknown;
};

function isVitestGlobal(): boolean {
  if (typeof globalThis === 'undefined') {
    return false;
  }
  const candidate = globalThis as VitestGlobal;
  return typeof candidate.__vitest_worker__ !== 'undefined';
}

function isHappyDomEnvironment(): boolean {
  if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
    return false;
  }
  const userAgent = window.navigator.userAgent ?? '';
  return /happy[-\s]?dom/i.test(userAgent);
}

function isTestEnvironment(): boolean {
  if (typeof import.meta !== 'undefined' && import.meta.env?.MODE === 'test') {
    return true;
  }

  if (typeof process !== 'undefined' && process.env) {
    const { VITEST, NODE_ENV } = process.env;
    if (VITEST === 'true' || VITEST === '1' || NODE_ENV === 'test') {
      return true;
    }
  }

  return isVitestGlobal() || isHappyDomEnvironment();
}

function installTestHCaptcha() {
  if (typeof window === 'undefined' || window.hcaptcha) {
    return;
  }

  let currentToken = '';
  let widgetIdCounter = 0;

  window.hcaptcha = {
    render: (_container: HTMLElement, params: Record<string, unknown>) => {
      widgetIdCounter += 1;
      currentToken = TEST_HCAPTCHA_TOKEN;
      const callbacks = params as {
        callback?: (token: string) => void;
        'error-callback'?: () => void;
      };

      const schedule =
        typeof queueMicrotask === 'function'
          ? queueMicrotask
          : (fn: () => void) => {
              setTimeout(fn, 0);
            };

      schedule(() => {
        try {
          callbacks.callback?.(TEST_HCAPTCHA_TOKEN);
        } catch {
          callbacks['error-callback']?.();
        }
      });

      return widgetIdCounter;
    },
    remove: () => {
      currentToken = '';
    },
    reset: () => {
      currentToken = '';
    },
    getResponse: () => currentToken,
  };
}

let hcaptchaScriptPromise: Promise<void> | null = null;

function waitForHCaptchaReady(resolve: () => void, reject: (reason?: unknown) => void, attempt = 0) {
  if (typeof window === 'undefined') {
    resolve();
    return;
  }

  if (window.hcaptcha && typeof window.hcaptcha.render === 'function') {
    resolve();
    return;
  }

  if (attempt >= 200) {
    reject(new Error('Timed out waiting for hCaptcha to load'));
    return;
  }

  setTimeout(() => waitForHCaptchaReady(resolve, reject, attempt + 1), 50);
}

declare global {
  interface Window {
    hcaptcha?: {
      render: (container: HTMLElement, params: Record<string, unknown>) => number | string;
      remove: (id: number | string) => void;
      reset: (id?: number | string) => void;
      getResponse: (id?: number | string) => string;
    };
    [CALLBACK_NAME]?: () => void;
  }
}

function ensureHCaptchaScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (isTestEnvironment()) {
    installTestHCaptcha();
    return Promise.resolve();
  }

  if (window.hcaptcha) {
    return Promise.resolve();
  }

  if (!hcaptchaScriptPromise) {
    hcaptchaScriptPromise = new Promise((resolve, reject) => {
      const scriptSelector = `script[src^="${SCRIPT_SRC}"]`;
      const existing = document.querySelector<HTMLScriptElement>(scriptSelector);
      if (existing) {
        if (existing.dataset.hcaptchaLoader === 'loaded' || existing.getAttribute('data-hcaptcha-loaded') === 'true') {
          waitForHCaptchaReady(resolve, reject);
        } else {
          const handleLoad = () => {
            existing.dataset.hcaptchaLoader = 'loaded';
            waitForHCaptchaReady(resolve, reject);
          };
          existing.addEventListener('load', handleLoad, { once: true });
          existing.addEventListener(
            'error',
            (event) => {
              hcaptchaScriptPromise = null;
              reject(event);
            },
            { once: true },
          );
        }
        return;
      }

      const script = document.createElement('script');
      script.src = `${SCRIPT_SRC}&onload=${CALLBACK_NAME}`;
      script.async = true;
      script.defer = true;
      window[CALLBACK_NAME] = () => {
        script.dataset.hcaptchaLoader = 'loaded';
        waitForHCaptchaReady(resolve, reject);
      };
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
