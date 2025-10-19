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
let scriptLoadAttempts = 0;
const MAX_SCRIPT_LOAD_ATTEMPTS = 3;

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
    reject(new Error('Timed out waiting for hCaptcha to load. Please check your internet connection and refresh the page.'));
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
    scriptLoadAttempts = 0; // Reset on success
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
            scriptLoadAttempts = 0; // Reset on success
            console.log('[hCaptcha] Script loaded successfully');
            waitForHCaptchaReady(resolve, reject);
          };
          existing.addEventListener('load', handleLoad, { once: true });
          existing.addEventListener(
            'error',
            (event) => {
              console.error('[hCaptcha] Script load error:', event);
              hcaptchaScriptPromise = null;
              scriptLoadAttempts++;
              
              if (scriptLoadAttempts < MAX_SCRIPT_LOAD_ATTEMPTS) {
                console.warn(`[hCaptcha] Retrying script load (attempt ${scriptLoadAttempts + 1}/${MAX_SCRIPT_LOAD_ATTEMPTS})...`);
                // Retry after a delay
                setTimeout(() => {
                  existing.remove();
                  ensureHCaptchaScript().then(resolve).catch(reject);
                }, 2000);
              } else {
                reject(new Error('Failed to load hCaptcha script after multiple attempts. Please check your internet connection and refresh the page.'));
              }
            },
            { once: true },
          );
        }
        return;
      }

      console.log('[hCaptcha] Loading script...');
      const script = document.createElement('script');
      script.src = `${SCRIPT_SRC}&onload=${CALLBACK_NAME}`;
      script.async = true;
      script.defer = true;
      window[CALLBACK_NAME] = () => {
        script.dataset.hcaptchaLoader = 'loaded';
        scriptLoadAttempts = 0; // Reset on success
        console.log('[hCaptcha] Script loaded and callback executed');
        waitForHCaptchaReady(resolve, reject);
      };
      script.onerror = (event) => {
        console.error('[hCaptcha] Script load error:', event);
        hcaptchaScriptPromise = null;
        scriptLoadAttempts++;
        
        if (scriptLoadAttempts < MAX_SCRIPT_LOAD_ATTEMPTS) {
          console.warn(`[hCaptcha] Retrying script load (attempt ${scriptLoadAttempts + 1}/${MAX_SCRIPT_LOAD_ATTEMPTS})...`);
          // Retry after a delay
          setTimeout(() => {
            script.remove();
            ensureHCaptchaScript().then(resolve).catch(reject);
          }, 2000);
        } else {
          reject(new Error('Failed to load hCaptcha script after multiple attempts. Please check your internet connection and refresh the page.'));
        }
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
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);
  const onErrorRef = useRef(onError);

  // Keep the latest callbacks without forcing the widget to re-render. Previously the widget would
  // be torn down and re-created on every parent render, which prevented the challenge from opening.
  useEffect(() => {
    onVerifyRef.current = onVerify;
  }, [onVerify]);

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);

  useEffect(() => {
    let cancelled = false;

    if (typeof window === 'undefined') {
      return () => undefined;
    }

    // Validate site key
    if (!siteKey || siteKey.trim() === '') {
      console.error('[hCaptcha] No site key provided');
      // Use queueMicrotask to avoid setState during render
      queueMicrotask(() => {
        setLoadError('Verification service is not configured. Please contact support.');
      });
      return () => undefined;
    }

    console.log('[hCaptcha] Initializing widget with site key:', siteKey.substring(0, 8) + '...');

    ensureHCaptchaScript()
      .then(() => {
        if (cancelled) return;
        if (!containerRef.current) {
          console.warn('[hCaptcha] Container ref is null');
          return;
        }

        if (!window.hcaptcha) {
          console.error('[hCaptcha] window.hcaptcha is not available after script load');
          setLoadError('Unable to load verification service. Please refresh and try again.');
          return;
        }

        console.log('[hCaptcha] Rendering widget...');
        try {
          widgetIdRef.current = window.hcaptcha.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              console.log('[hCaptcha] Verification successful');
              onVerifyRef.current?.(token);
            },
            'expired-callback': () => {
              console.warn('[hCaptcha] Token expired');
              onExpireRef.current?.();
            },
            'error-callback': () => {
              console.error('[hCaptcha] Verification error');
              onErrorRef.current?.();
            },
          });
          console.log('[hCaptcha] Widget rendered successfully with ID:', widgetIdRef.current);
          setLoadError(null); // Clear any previous errors
        } catch (error) {
          console.error('[hCaptcha] Error rendering widget:', error);
          setLoadError('Failed to initialize verification widget. Please refresh and try again.');
        }
      })
      .catch((error) => {
        if (cancelled) return;
        console.error('[hCaptcha] Script loading failed:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unable to load verification service. Please refresh and try again.';
        setLoadError(errorMessage);
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current !== null && window.hcaptcha) {
        try {
          console.log('[hCaptcha] Cleaning up widget:', widgetIdRef.current);
          window.hcaptcha.remove(widgetIdRef.current);
        } catch (error) {
          console.warn('[hCaptcha] Error during cleanup:', error);
        }
      }
    };
  }, [siteKey]);

  if (typeof window === 'undefined') {
    return null;
  }

  const wrapperClassName = className ? `${className} pointer-events-auto` : 'pointer-events-auto';

  return (
    <div className={wrapperClassName}>
      <div ref={containerRef} />
      {loadError && <p className="mt-2 text-sm text-red-600 text-center">{loadError}</p>}
    </div>
  );
}
