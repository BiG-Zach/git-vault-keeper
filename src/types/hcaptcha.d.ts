declare global {
  interface HCaptchaModule {
    render(
      container: string | HTMLElement,
      params: {
        sitekey: string;
        size?: 'normal' | 'compact' | 'invisible';
        theme?: 'light' | 'dark';
        callback?: (token: string) => void;
        'error-callback'?: () => void;
        'expired-callback'?: () => void;
      },
    ): string | number;
    reset(widgetId?: string | number): void;
    remove(widgetId: string | number): void;
  }

  interface Window {
    hcaptcha?: HCaptchaModule;
  }
}

export {};
