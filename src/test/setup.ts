import { expect, afterEach, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

const TEST_HCAPTCHA_TOKEN = 'test-hcaptcha-token';

beforeAll(() => {
  if (typeof window === 'undefined') {
    return;
  }

  const win = window as typeof window & {
    hcaptcha?: {
      render: (container: HTMLElement, params: Record<string, unknown>) => number | string;
      remove: (id: number | string) => void;
      reset: (id?: number | string) => void;
      getResponse: (id?: number | string) => string;
    };
  };

  if (win.hcaptcha) {
    return;
  }

  let currentToken = '';
  let widgetIdCounter = 0;

  win.hcaptcha = {
    render: (_container: HTMLElement, params: Record<string, unknown>) => {
      widgetIdCounter += 1;
      currentToken = TEST_HCAPTCHA_TOKEN;
      const callbacks = params as {
        callback?: (token: string) => void;
        'expired-callback'?: () => void;
        'error-callback'?: () => void;
      };

      try {
        callbacks.callback?.(TEST_HCAPTCHA_TOKEN);
      } catch {
        callbacks['error-callback']?.();
      }

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
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});
