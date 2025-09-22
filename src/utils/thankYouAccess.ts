const THANK_YOU_ACCESS_STORAGE_KEY = 'big-quote-complete-at';
const THANK_YOU_ACCESS_TTL_MS = 30 * 60 * 1000; // 30 minutes

function getSessionStorage(): Storage | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

export function markThankYouAccess(timestamp: number = Date.now()): void {
  const storage = getSessionStorage();
  if (!storage) return;

  try {
    storage.setItem(THANK_YOU_ACCESS_STORAGE_KEY, String(timestamp));
  } catch {
    // Ignore storage errors (private mode, quota, etc.)
  }
}

export function hasValidThankYouAccess(now: number = Date.now()): boolean {
  const storage = getSessionStorage();
  if (!storage) return false;

  try {
    const raw = storage.getItem(THANK_YOU_ACCESS_STORAGE_KEY);
    if (!raw) return false;

    const timestamp = Number.parseInt(raw, 10);
    if (!Number.isFinite(timestamp)) {
      storage.removeItem(THANK_YOU_ACCESS_STORAGE_KEY);
      return false;
    }

    if (now - timestamp > THANK_YOU_ACCESS_TTL_MS) {
      storage.removeItem(THANK_YOU_ACCESS_STORAGE_KEY);
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

export function clearThankYouAccess(): void {
  const storage = getSessionStorage();
  if (!storage) return;

  try {
    storage.removeItem(THANK_YOU_ACCESS_STORAGE_KEY);
  } catch {
    // Ignore storage errors
  }
}

export { THANK_YOU_ACCESS_STORAGE_KEY, THANK_YOU_ACCESS_TTL_MS };
