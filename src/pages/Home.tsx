import HeroForm from "../components/HeroForm";
import { BRAND } from "../lib/brand";
import SEO from "../components/SEO";
import { organizationSchema, serviceSchema, websiteSchema } from "../utils/schema";
import LuxuryHero from "../components/luxury/LuxuryHero";
import PremiumCarriers from "../components/luxury/PremiumCarriers";
import IndustryRecognitionSection from "../components/luxury/IndustryRecognitionSection";
import EnhancedMap from "../components/luxury/EnhancedMap";
import LuxuryTestimonialsCarousel from "../components/luxury/TestimonialsCarousel";
import RiskReversalSection from "../components/luxury/RiskReversalSection";
import AuthoritySection from "../components/luxury/AuthoritySection";

const licensedStates = BRAND.licensed.split(",").map((state) => state.trim());
const licensedStatesDisplay = licensedStates.join(" • ");

export default function Home() {
  const structuredData = [
    organizationSchema(),
    websiteSchema(),
    serviceSchema(["Health Insurance", "Life Insurance", "Insurance Broker Services"], '/assets/backgrounds/happy-family-beach-hero.webp'),
  ];

  return (
    <>
      <SEO
        title="Independent Insurance Broker with Enterprise Resources"
        description="Independent insurance broker partnering with Best Insurance Group to deliver enterprise-level carrier access and personal advocacy across FL, MI, NC, AZ, TX, and GA."
        path="/"
        image="/assets/backgrounds/happy-family-beach-hero.webp"
        meta={[
          {
            name: "keywords",
            content:
              "independent insurance broker, Best Insurance Group partner, enterprise insurance resources, concierge insurance guidance, multi-state insurance broker",
          },
          { property: "og:title", content: "Independent Insurance Broker with Enterprise Resources" },
          {
            property: "og:description",
            content:
              "Independent insurance broker partnered with Best Insurance Group for exclusive carrier access and personalized guidance in FL, MI, NC, AZ, TX, and GA.",
          },
          { property: "og:type", content: "website" },
          {
            property: "og:image:alt",
            content: "Family relaxing outdoors with guidance from Bradford Informed Guidance"
          },
          {
            name: "twitter:image:alt",
            content: "Family relaxing outdoors with guidance from Bradford Informed Guidance"
          },
        ]}
        links={[
          {
            rel: "preload",
            href: "/assets/backgrounds/happy-family-beach-hero.webp",
            as: "image"
          }
        ]}
        scripts={structuredData.map((innerHTML) => ({ innerHTML }))}
      />

      <main className="relative bg-surface-luxury">
        <h1 className="sr-only">Independent Insurance Broker with Enterprise Resources</h1>
        <section className="relative">
          <div className="hidden lg:block">
            <DesktopHeroExperience licensedStatesDisplay={licensedStatesDisplay} />
          </div>

          <div className="hidden md:block lg:hidden">
            <TabletHeroExperience licensedStatesDisplay={licensedStatesDisplay} />
          </div>

          <div className="block md:hidden">
            <MobileHeroExperience licensedStatesDisplay={licensedStatesDisplay} />
          </div>
        </section>

        <div className="hidden md:block relative z-10 bg-surface-luxury">
          <PremiumCarriers />
          <IndustryRecognitionSection />
          <EnhancedMap />
          <LuxuryTestimonialsCarousel />
          <AuthoritySection />
          <RiskReversalSection />
        </div>
      </main>
    </>
  );
}

function DesktopHeroExperience({ licensedStatesDisplay }: { licensedStatesDisplay: string }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/backgrounds/happy-family-beach-hero.webp"
          alt="Family relaxing outdoors"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-surface-luxury" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 flex-grow flex items-center">
        <div className="grid grid-cols-12 gap-12 w-full items-center">
          <div className="col-span-7 text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-emerald-300 animate-fadeIn">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Accepting New Clients for 2025
            </div>

            <h2 className="text-6xl font-luxury-serif font-bold leading-tight tracking-tight drop-shadow-lg animate-slideUp">
              Independent Broker. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Enterprise Resources.</span>
            </h2>

            <p className="text-xl text-slate-200 max-w-2xl leading-relaxed font-light animate-slideUp" style={{ animationDelay: "0.1s" }}>
              Partnering with Best Insurance Group since 2020 to deliver exclusive carrier access and personalized advocacy across {licensedStatesDisplay}.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-slate-200">Licensed & Bonded</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm font-medium text-slate-200">Bank-Grade Security</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-slate-200">24h Response Time</span>
              </div>
            </div>
          </div>

          <div className="col-span-5 animate-slideUp" style={{ animationDelay: "0.3s" }}>
            <HeroForm />
          </div>
        </div>
      </div>

      <DesktopVerificationBand licensedStatesDisplay={licensedStatesDisplay} />
    </div>
  );
}

function DesktopVerificationBand({ licensedStatesDisplay }: { licensedStatesDisplay: string }) {
  return (
    <div className="relative z-20 bg-slate-900/80 backdrop-blur-md border-t border-white/10 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            <span className="font-medium tracking-wide uppercase text-xs text-slate-400">Official Partner Status Active</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={BRAND.verification.trustMyProducer}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4 text-emerald-500 group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              TrustMyProducer Verified
            </a>
            <div className="h-4 w-px bg-white/10"></div>
            <a
              href={BRAND.verification.nipr}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4 text-blue-500 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0c0 .884-.956 2.99-3 3.5M13 6c0 .884.956 2.99 3 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              NIPR Registry: {BRAND.npn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabletHeroExperience({ licensedStatesDisplay }: { licensedStatesDisplay: string }) {
  return (
    <main className="relative bg-surface-luxury">
      <section
        className="relative w-full overflow-hidden pt-[calc(var(--header-h,56px)+env(safe-area-inset-top))] min-h-[90vh] flex items-center"
        aria-label="Hero"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/backgrounds/happy-family-beach-hero.webp"
            alt="Family relaxing outdoors"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Trusted Since 2020
            </div>
            <h2 className="text-4xl md:text-5xl font-luxury-serif font-bold leading-tight mb-6">
              Independent Broker. <br />
              <span className="text-emerald-400">Enterprise Power.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Partnering with Best Insurance Group to deliver exclusive carrier access and personal advocacy across {licensedStatesDisplay}.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Licensed & Bonded Professional</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span>Concierge Response &lt; 24 Hours</span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto">
            <HeroForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function MobileHeroExperience({ licensedStatesDisplay }: { licensedStatesDisplay: string }) {
  return (
    <main className="relative min-h-screen bg-surface-luxury">
      <section className="relative min-h-screen overflow-hidden pb-12">
        <div className="absolute inset-0 h-[60vh]">
          <img
            src="/assets/backgrounds/happy-family-beach-hero.webp"
            alt="Family relaxing outdoors"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-surface-luxury" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-luxury via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col px-6 pt-24">
          <div className="mx-auto max-w-sm text-center text-white mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-emerald-300 mb-6 mx-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Official Partner
            </div>

            <h2 className="text-4xl font-luxury-serif font-bold leading-tight mb-4 drop-shadow-xl">
              Independent Broker
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 mt-1">Enterprise Resources</span>
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Exclusive carrier access & personalized guidance. <br />
              <span className="text-emerald-400/80 font-medium mt-2 block">Licensed in {licensedStatesDisplay}</span>
            </p>
          </div>

          <div className="w-full max-w-sm mx-auto -mt-2">
            <HeroForm />
          </div>

          <div className="mt-12 grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
              <ShieldIcon />
              <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wide">Secure</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
              <CheckIcon />
              <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wide">No Spam</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
              <ClockIcon />
              <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wide">Fast</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M9.998 2.003a.75.75 0 01.473.165l6.5 5.25A.75.75 0 0117 8v4.75a6.75 6.75 0 01-5.904 6.693l-.097.007h-.998A6.75 6.75 0 014 12.75V8a.75.75 0 01.029-.2l.037-.099a.75.75 0 01.183-.234l6.5-5.25a.75.75 0 01.249-.164z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.704 5.296a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414L8.75 11.836l6.543-6.54a1 1 0 011.411 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 5a1 1 0 112 0v4.586l2.293 2.293a1 1 0 01-1.414 1.414L9.293 11.12a1 1 0 01-.293-.707V5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
