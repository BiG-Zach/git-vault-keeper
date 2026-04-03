const SESSION_KEY = 'utm_params';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

// Capture UTMs from the URL on module load and persist them for the session.
// Only overwrites if the current URL actually has UTM params.
if (typeof window !== 'undefined') {
  const params = new URLSearchParams(window.location.search);
  const found: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) found[key] = val;
  }
  if (Object.keys(found).length > 0) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(found));
  }
}

/** Returns the UTM params stored for this session, or an empty object. */
export function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

/**
 * Appends any stored UTM params to `basePath` as query-string params.
 * If no UTMs are stored the path is returned unchanged.
 */
export function buildCTAHref(basePath: string): string {
  const utms = getUtmParams();
  const entries = Object.entries(utms);
  if (entries.length === 0) return basePath;

  const [base, existing] = basePath.split('?');
  const qs = new URLSearchParams(existing ?? '');
  for (const [k, v] of entries) {
    if (!qs.has(k)) qs.set(k, v);
  }
  return `${base}?${qs.toString()}`;
}
