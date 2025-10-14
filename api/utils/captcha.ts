// Multiple forms serialize the hCaptcha response under slightly different names. Centralize the list so API
// routes can normalize the payload before validating the token.
const CAPTCHA_KEYS = ['hcaptchaToken', 'hCaptchaToken', 'captchaToken', 'captcha', 'token'] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object';
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

  return null;
}

export function stripCaptchaFields(payload: unknown): Record<string, unknown> {
  if (!isRecord(payload)) return {};

  const result: Record<string, unknown> = {};

  Object.entries(payload).forEach(([key, value]) => {
    if ((CAPTCHA_KEYS as readonly string[]).includes(key)) {
      return;
    }
    if (key === 'formData' && isRecord(value)) {
      result[key] = stripCaptchaFields(value);
      return;
    }
    result[key] = value;
  });

  return result;
}
