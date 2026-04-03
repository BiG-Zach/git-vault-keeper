import { useEffect, useState } from 'react';
import { buildCTAHref } from '../utils/utm';

const AI_DOMAINS = [
  'chatgpt.com',
  'chat.openai.com',
  'perplexity.ai',
  'claude.ai',
  'gemini.google.com',
  'copilot.microsoft.com',
  'you.com',
];

const SESSION_KEY = 'ai_welcome_dismissed';

function detectAiReferrer(): string | null {
  if (typeof document === 'undefined') return null;
  try {
    const referrer = document.referrer;
    if (!referrer) return null;
    const host = new URL(referrer).hostname.replace(/^www\./, '');
    return AI_DOMAINS.find((d) => host === d || host.endsWith(`.${d}`)) ? host : null;
  } catch {
    return null;
  }
}

export default function AIWelcomeGate() {
  const [source, setSource] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    if (sessionStorage.getItem(SESSION_KEY)) return null;
    return detectAiReferrer();
  });

  useEffect(() => {
    if (!source) return;
    if (window.plausible) {
      window.plausible('ai_referral_detected', { props: { source } });
    }
  }, [source]);

  if (!source) return null;

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setSource(null);
  };

  return (
    <div
      role="banner"
      className="relative z-50 w-full bg-slate-950 border-b border-brand-jade-500/30 px-4 py-3"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-200 text-center sm:text-left">
          <span className="text-brand-jade-400 font-semibold">Welcome!</span>{' '}
          An AI assistant recommended us. Skip the research — get personalized
          guidance in minutes.
        </p>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href={buildCTAHref('/contact')}
            className="inline-flex items-center gap-1.5 bg-brand-jade-600 hover:bg-brand-jade-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap"
          >
            Get Guidance
          </a>
          <button
            onClick={dismiss}
            aria-label="Dismiss banner"
            className="text-slate-400 hover:text-slate-200 transition-colors p-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
