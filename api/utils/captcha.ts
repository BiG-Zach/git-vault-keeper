// Multiple forms serialize the hCaptcha response under slightly different names. Centralize the list so API
// routes can normalize the payload before validating the token.
const CAPTCHA_KEYS = ['hcaptchaToken', 'hCaptchaToken', 'captchaToken', 'captcha', 'token'] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object';
}

function findInIterable(iterable: Iterable<unknown>): string | null {
  for (const item of iterable) {
    const candidate = extractCaptchaToken(item);
    if (candidate) {
      return candidate;
    }
  }
  return null;
}

export function extractCaptchaToken(payload: unknown): string | null {
  if (!isRecord(payload)) return null;

  for (const key of CAPTCHA_KEYS) {
    const candidate = payload[key];
    if (typeof candidate === 'string' && candidate.trim()) {
      return candidate.trim();
    }
  }

  if (isRecord(payload.formData)) {
    const nested = extractCaptchaToken(payload.formData);
    if (nested) return nested;
  }

  for (const value of Object.values(payload)) {
    if (Array.isArray(value)) {
      const nested = findInIterable(value);
      if (nested) return nested;
    } else if (isRecord(value)) {
      const nested = extractCaptchaToken(value);
      if (nested) return nested;
    }
  }

  return null;
}

export function stripCaptchaFields(payload: unknown): Record<string, unknown> {
  if (!isRecord(payload)) return {};

  const result: Record<string, unknown> = {};

  Object.entries(payload).forEach(([key, value]) => {
    if ((CAPTCHA_KEYS as readonly string[]).includes(key)) {
      return;
    }

    if (Array.isArray(value)) {
      result[key] = value.map(item => (isRecord(item) ? stripCaptchaFields(item) : item));
      return;
    }

    if (isRecord(value)) {
      result[key] = stripCaptchaFields(value);
      return;
    }

    result[key] = value;
  });

  return result;
}
