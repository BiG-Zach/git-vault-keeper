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
import SocialProofTicker from "../components/luxury/SocialProofTicker";

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
            as: "image",
            crossOrigin: "anonymous"
          }
        ]}
        scripts={structuredData.map((innerHTML) => ({ innerHTML }))}
      />

      <main className="relative">
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

        <div className="hidden md:block">
          <PremiumCarriers />
          <IndustryRecognitionSection />
          <EnhancedMap />
          <LuxuryTestimonialsCarousel />
          <AuthoritySection />
          <RiskReversalSection />
        </div>

        <SocialProofTicker />
      </main>
    </>
  );
}

function DesktopHeroExperience({ licensedStatesDisplay }: { licensedStatesDisplay: string }) {
  return (
    <div className="relative">
      <LuxuryHero />
      <DesktopVerificationBand licensedStatesDisplay={licensedStatesDisplay} />
    </div>
  );
}

function DesktopVerificationBand({ licensedStatesDisplay }: { licensedStatesDisplay: string }) {
  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-8 text-white/80">
      <div className="container mx-auto px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <svg className="h-6 w-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">Independent Broker — Best Insurance Group Partner • {licensedStatesDisplay}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={BRAND.verification.trustMyProducer}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
              data-gtm="home-verify-trustmyproducer"
            >
              TrustMyProducer Verification
            </a>
            <a
              href={BRAND.verification.nipr}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium transition-all duration-300 hover:border-blue-400/40 hover:bg-white/10"
              data-gtm="home-verify-nipr"
            >
              NIPR Registry Lookup
            </a>
            <span className="text-xs text-white/70">NPN {BRAND.npn}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabletHeroExperience({ licensedStatesDisplay }: { licensedStatesDisplay: string }) {
  return (
    <main className="relative">
      <section
        className="hero-bg-force relative w-full overflow-hidden pt-[calc(var(--header-h,56px)+env(safe-area-inset-top))] md:min-h-[84vh]"
        aria-label="Hero"
      >
        <img
          src="/assets/backgrounds/happy-family-beach-hero.webp"
          alt="Family relaxing outdoors together representing personalized insurance guidance"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          style={{ objectPosition: "center center" }}
          width={2400}
          height={1600}
        />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto grid items-center gap-6 px-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl text-white">
              <h2 className="mb-3 text-[clamp(26px,5vw,34px)] leading-[1.15] tracking-[-0.01em] md:text-5xl lg:text-6xl">
                Independent Insurance Broker with Enterprise Resources
              </h2>
              <p className="text-lg text-white/90">
                Partnering with Best Insurance Group since 2020 • Licensed in {licensedStatesDisplay} • NPN {BRAND.npn}
              </p>
              <div className="mt-5 flex gap-3">
                <a href="/lead" className="btn-primary" data-gtm={`${BRAND.gtm.quote}_home_tablet`}>
                  Start Your Consultation
                </a>
                <a href={BRAND.phoneTel} className="btn-secondary" data-gtm={`${BRAND.gtm.call}_home_tablet`}>
                  Call {BRAND.phoneHuman}
                </a>
              </div>
              <p className="mt-5 text-sm text-white/85">Independent broker team • {BRAND.hours}</p>
            </div>

            <div className="hidden md:block">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>
      <div data-hero-sentinel style={{ height: 1 }} />
    </main>
  );
}

function MobileHeroExperience({ licensedStatesDisplay }: { licensedStatesDisplay: string }) {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/backgrounds/happy-family-beach-hero.webp"
            alt="Family relaxing outdoors together representing personalized insurance guidance"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center center" }}
            decoding="async"
            width={2400}
            height={1600}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-slate-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 py-20">
          <div className="mx-auto max-w-sm text-center text-white">
            <h2 className="mb-4 text-4xl font-bold leading-tight">
              Independent Insurance Broker with
              <span className="block text-emerald-400">Enterprise Resources</span>
            </h2>

            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-emerald-300">
                <svg className="h-5 w-5" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">Licensed in {licensedStatesDisplay}</span>
              </div>

              <p className="text-lg text-white/90">
                Best Insurance Group partner since 2020 • NPN {BRAND.npn}
              </p>

              <div className="flex items-center justify-center gap-2 text-sm font-medium text-emerald-200">
                <svg className="h-4 w-4" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Concierge response within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <a
              href="/lead"
              className="group relative block w-full overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-5 text-center font-bold text-white shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
              data-gtm="premium_mobile_quote"
            >
              <div className="relative z-10">
                <div className="text-lg font-bold">Start Your Free Consultation</div>
                <div className="text-sm opacity-90">Expert guidance within one business day</div>
              </div>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-white/20 transition-transform duration-700 group-hover:translate-x-full" />
            </a>

            <a
              href={BRAND.phoneTel}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-500/20"
              data-gtm="premium_mobile_call"
            >
              <svg className="h-6 w-6 text-emerald-300" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2c-6.075 0-11-4.925-11-11V4a1 1 0 011-1z" />
              </svg>
              {BRAND.phoneHuman}
            </a>
          </div>

          <div className="mt-14 rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-200">
            <HeroForm />
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-200">
            <div className="flex items-center gap-1">
              <ShieldIcon />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckIcon />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon />
              <span>24-Hour Response</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
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
    <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
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
    <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 5a1 1 0 112 0v4.586l2.293 2.293a1 1 0 01-1.414 1.414L9.293 11.12a1 1 0 01-.293-.707V5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
