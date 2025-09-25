import RingyLeadCaptureForm from './forms/RingyLeadCaptureForm';
import { GTM_EVENTS, trackEvent } from '../utils/gtm';

export default function Hero() {
  const handleScheduleClick = () => {
    trackEvent(GTM_EVENTS.HERO_SCHEDULE_CLICK);
    window.location.href = '/contact';
  };

  const handleSeeOptionsClick = () => {
    trackEvent(GTM_EVENTS.HERO_SEE_OPTIONS_CLICK);
  };

  return (
    <header className="relative isolate overflow-hidden bg-slate-900 text-white">
      <div
        className="absolute inset-0 bg-[url('/images/hero/mobile-hero.webp')] bg-cover bg-center sm:bg-[url('/images/hero/family-beach-california-sunset.webp')]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/55 to-slate-950/35" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.35),_transparent_60%)]" aria-hidden="true" />

      <div className="relative z-10">
        <div className="container-default flex flex-col gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:flex-row lg:items-start">
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300/90">
              Concierge Health & Life Insurance
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Smarter coverage, personal guidance, lifetime support
            </h1>
            <p className="text-base text-white/90 sm:text-lg">
              Custom-built PPO health and life insurance strategies for self-employed professionals, families, and early retirees
              across FL, MI, NC — with new markets launching soon.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleScheduleClick}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/25 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:w-auto"
                data-gtm="hero-cta-schedule"
              >
                Schedule Free Consultation
              </button>
              <a
                href="/services"
                onClick={handleSeeOptionsClick}
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:w-auto"
                data-gtm="hero-cta-options"
              >
                See Your Options
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80 lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Licensed in FL, MI, NC — expanding to AZ, GA, TX
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Concierge service with 24-hour response time
              </span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:mx-0">
            <RingyLeadCaptureForm />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 to-transparent" aria-hidden="true" />
    </header>
  );
}

export default Hero;
