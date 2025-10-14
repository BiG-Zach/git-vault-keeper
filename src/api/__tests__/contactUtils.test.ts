import { describe, it, expect } from 'vitest';
import { normalizeContactMethod } from '../../../api/utils/contact';

describe('contact method normalization', () => {
  const cases: Array<[unknown, string]> = [
    ['Text Message', 'text'],
    ['text', 'text'],
    ['SMS', 'text'],
    ['Phone Call', 'phone'],
    ['phone', 'phone'],
    ['Call-Me', 'phone'],
    ['Email', 'email'],
    ['email me', 'email'],
    [undefined, ''],
    ['unknown', ''],
  ];

  cases.forEach(([input, expected]) => {
    it(`normalizes ${String(input)} to ${expected || 'empty string'}`, () => {
      expect(normalizeContactMethod(input)).toBe(expected);
    });
  });
});
