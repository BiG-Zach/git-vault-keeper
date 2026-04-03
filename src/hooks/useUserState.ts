import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getUtmParams } from '../utils/utm';

const SESSION_KEY = 'detected_state';
const STATE_ROUTE_RE = /^\/states\/([a-z]{2})(?:\/|$)/i;
const STATE_CODE_RE = /^[A-Z]{2}$/;

/**
 * Detects the user's state of interest from:
 *   1. The current URL path  (/states/fl  →  "FL")
 *   2. UTM params            (utm_content=FL or utm_state=FL)
 *   3. sessionStorage cache  (persists across SPA navigation)
 *
 * Returns the uppercase two-letter state code, or null if unknown.
 */
export function useUserState(): string | null {
  const location = useLocation();

  useEffect(() => {
    // 1. Try the /states/:code route
    const routeMatch = location.pathname.match(STATE_ROUTE_RE);
    if (routeMatch) {
      const code = routeMatch[1].toUpperCase();
      sessionStorage.setItem(SESSION_KEY, code);
      return;
    }

    // 2. Try UTM params (utm_content or utm_state as a 2-letter state code)
    const utms = getUtmParams();
    const hint = (utms['utm_content'] ?? utms['utm_state'] ?? '').toUpperCase();
    if (STATE_CODE_RE.test(hint)) {
      // Only set if we don't already have a route-based detection
      if (!sessionStorage.getItem(SESSION_KEY)) {
        sessionStorage.setItem(SESSION_KEY, hint);
      }
    }
  }, [location.pathname]);

  // Return the currently stored value (updated synchronously above)
  if (typeof window === 'undefined') return null;

  const routeMatch = location.pathname.match(STATE_ROUTE_RE);
  if (routeMatch) return routeMatch[1].toUpperCase();

  return sessionStorage.getItem(SESSION_KEY) ?? null;
}
