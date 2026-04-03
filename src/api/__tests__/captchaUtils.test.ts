import { describe, it, expect } from 'vitest';
import { extractCaptchaToken, stripCaptchaFields } from '../../../api/utils/captcha';

describe('captcha utils', () => {
  it('extracts tokens from alternate key names', () => {
    const payload = {
      'h-captcha-response': 'token-one',
    };

    expect(extractCaptchaToken(payload)).toBe('token-one');
  });

  it('extracts tokens when nested inside objects', () => {
    const payload = {
      meta: {
        security: {
          response: 'token-two',
        },
      },
    };

    expect(extractCaptchaToken(payload)).toBe('token-two');
  });

  it('extracts tokens when nested inside arrays', () => {
    const payload = {
      steps: [
        { name: 'first', value: 'skip' },
        { data: [{ captcha_token: 'token-three' }] },
      ],
    };

    expect(extractCaptchaToken(payload)).toBe('token-three');
  });

  it('removes all captcha fields when stripping', () => {
    const payload = {
      hcaptchaToken: 'token',
      formData: {
        nested: {
          captchaResponse: 'token',
        },
      },
      steps: [
        { response: 'token' },
        ['token', { captcha_token: 'token' }],
      ],
    };

    const stripped = stripCaptchaFields(payload);

    expect(stripped).toEqual({
      formData: {
        nested: {},
      },
      steps: [
        {},
        ['token', {}],
      ],
    });
  });
});
