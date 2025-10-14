// Multiple forms serialize the hCaptcha response under slightly different names. Centralize the list so API
// routes can normalize the payload before validating the token.
const CAPTCHA_KEYS = [
  'hcaptchaToken',
  'hCaptchaToken',
  'hcaptcha_response',
  'h-captcha-response',
  'h_captcha_response',
  'hcaptchaResponse',
  'captchaToken',
  'captcha_token',
  'captchaResponse',
  'captcha_response',
  'captcha-response',
  'captcha',
  'token',
  'response',
] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
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
    if (isRecord(candidate)) {
      const nested = extractCaptchaToken(candidate);
      if (nested) return nested;
    }
    if (Array.isArray(candidate)) {
      const nested = findInIterable(candidate);
      if (nested) return nested;
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
      result[key] = value.map(item => {
        if (isRecord(item)) return stripCaptchaFields(item);
        if (Array.isArray(item)) return item.map(entry => (isRecord(entry) ? stripCaptchaFields(entry) : entry));
        return item;
      });
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
