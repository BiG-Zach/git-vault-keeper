import HeroForm from "../components/HeroForm";
import QuoteQuickstart from "../components/forms/QuoteQuickstart";
import LogoRail from "../components/marketing/LogoRail";
import TestimonialsGrid from "../components/social/TestimonialsGrid";
import USAvailability from "../components/marketing/USAvailability";
import StickyCTA from "../components/global/StickyCTA";
import SEO from "../components/SEO";
import { BRAND } from "../lib/brand";
import { organizationSchema, stateLocalBusinessSchema, websiteSchema, faqSchema, reviewSchema, comprehensiveLocalBusinessSchema } from "../utils/schema";
import MobileHome from "../mobile/Home";
import { ImageOptimizer, FontOptimizer, ResourceHints } from "../utils/coreWebVitals";
import { useEffect, lazy, Suspense } from "react";

// Lazy load heavy luxury components for better performance
const PremiumCarriers = lazy(() => import("../components/luxury/PremiumCarriers"));
const IndustryRecognitionSection = lazy(() => import("../components/luxury/IndustryRecognitionSection"));
const EnhancedMap = lazy(() => import("../components/luxury/EnhancedMap"));
const TestimonialsCarousel = lazy(() => import("../components/luxury/TestimonialsCarousel"));
const AuthoritySection = lazy(() => import("../components/luxury/AuthoritySection"));
const RiskReversalSection = lazy(() => import("../components/luxury/RiskReversalSection"));
const SocialProofTicker = lazy(() => import("../components/luxury/SocialProofTicker"));

// Luxury Desktop Components
import LuxuryHero from "../components/luxury/LuxuryHero";

const logos = [
  { src: "/logos/carriers/aetna.webp", alt: "Aetna health insurance carrier" },
  { src: "/logos/carriers/cigna.webp", alt: "Cigna health insurance carrier" },
  { src: "/logos/carriers/americo.webp", alt: "Americo life insurance carrier" },
  { src: "/logos/carriers/multiplan.webp", alt: "MultiPlan PPO network provider" },
  { src: "/logos/carriers/allstate.webp", alt: "Allstate Health Solutions insurance carrier" },
  { src: "/logos/carriers/unitedhealthcare.webp", alt: "UnitedHealthcare insurance carrier" },
  { src: "/logos/carriers/firsthealth.webp", alt: "First Health PPO network provider" },
  { src: "/logos/carriers/bluecrossblueshield.png", alt: "Blue Cross Blue Shield" },
  { src: "/logos/carriers/sgic.webp", alt: "Southern Guaranty Insurance Company (SGIC)" },
  { src: "/logos/carriers/mutualofomaha.webp", alt: "Mutual of Omaha life insurance" },
  { src: "/logos/carriers/pal.webp", alt: "Philadelphia American Life (PAL)" },
  { src: "/logos/carriers/aflac.webp", alt: "Aflac supplemental" }
];

export default function Home() {
  // Performance optimizations
  useEffect(() => {
    // Preload critical above-the-fold images
    ImageOptimizer.preloadCriticalImages([
      '/hero-family.webp',
      '/logos/carriers/aetna.webp',
      '/logos/carriers/cigna.webp'
    ]);

    // Enable font display swap for better performance
    FontOptimizer.enableFontDisplay();

    // Add resource hints for external domains
    ResourceHints.addPreconnect([
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ]);

    // Preload critical fonts
    FontOptimizer.preloadFonts([
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ]);
  }, []);

  const homePageFAQs = [
    {
      question: "What states are you licensed in?",
      answer: "I am licensed to sell health and life insurance in Florida, Michigan, and North Carolina. My license numbers are FL: W347851, MI: 0428156, NC: 18095186."
    },
    {
      question: "How quickly can I get coverage?",
      answer: "Most applications can be processed within 24-48 hours. For urgent needs, I can often secure same-day approval for qualified applicants."
    },
    {
      question: "Do you charge fees for your services?",
      answer: "No, my services are completely free to you. I'm compensated by the insurance carriers when you enroll in a plan, so there are no additional costs or fees."
    },
    {
      question: "What types of insurance do you offer?",
      answer: "I specialize in health insurance (individual, family, short-term), life insurance (term and permanent), and Indexed Universal Life (IUL) policies with access to major PPO networks."
    }
  ];

  return (
    <>
      <SEO
        title="Health & Life Insurance FL MI NC | Licensed Broker Zach Bradford"
        description="Licensed insurance broker FL, MI, NC. Get instant health & life insurance quotes from top carriers. Expert guidance since 2016. Call (689) 325-6570."
        path="/"
        meta={[
          { name: 'keywords', content: 'health insurance Florida Michigan North Carolina, life insurance broker FL MI NC, licensed insurance agent, PPO networks, individual health insurance, family health insurance, life insurance quotes' },
          { property: 'og:type', content: 'website' },
          { name: 'robots', content: 'index, follow' },
        ]}
        scripts={[
          { type: 'application/ld+json', innerHTML: organizationSchema() },
          { type: 'application/ld+json', innerHTML: websiteSchema() },
          { type: 'application/ld+json', innerHTML: comprehensiveLocalBusinessSchema('FL') },
          { type: 'application/ld+json', innerHTML: comprehensiveLocalBusinessSchema('MI') },
          { type: 'application/ld+json', innerHTML: comprehensiveLocalBusinessSchema('NC') },
          { type: 'application/ld+json', innerHTML: faqSchema(homePageFAQs) },
          { type: 'application/ld+json', innerHTML: reviewSchema(4.9, 127, 5) }
        ]}
      />
      {/* Desktop Luxury Experience (1024px+) */}
      <div className="hidden lg:block">
        <main className="relative">
          <LuxuryHero />

          <Suspense fallback={<div className="h-32 bg-gradient-to-r from-slate-100 to-slate-200 animate-pulse rounded-lg"></div>}>
            <PremiumCarriers />
          </Suspense>

          <Suspense fallback={<div className="h-24 bg-gradient-to-r from-slate-100 to-slate-200 animate-pulse rounded-lg"></div>}>
            <IndustryRecognitionSection />
          </Suspense>

          <Suspense fallback={<div className="h-96 bg-gradient-to-r from-slate-100 to-slate-200 animate-pulse rounded-lg"></div>}>
            <EnhancedMap />
          </Suspense>

          <Suspense fallback={<div className="h-64 bg-gradient-to-r from-slate-100 to-slate-200 animate-pulse rounded-lg"></div>}>
            <TestimonialsCarousel />
          </Suspense>

          <Suspense fallback={<div className="h-48 bg-gradient-to-r from-slate-100 to-slate-200 animate-pulse rounded-lg"></div>}>
            <AuthoritySection />
          </Suspense>

          <Suspense fallback={<div className="h-40 bg-gradient-to-r from-slate-100 to-slate-200 animate-pulse rounded-lg"></div>}>
            <RiskReversalSection />
          </Suspense>

          <StickyCTA/>

          {/* Social Proof Ticker */}
          <Suspense fallback={<div className="h-16 bg-gradient-to-r from-slate-100 to-slate-200 animate-pulse rounded-lg"></div>}>
            <SocialProofTicker />
          </Suspense>
        </main>
      </div>

      {/* Tablet Experience (768px-1023px) - Enhanced but simpler */}
      <div className="hidden md:block lg:hidden">
        <main className="relative">
          <section
            className="relative w-full min-h-[82vh] md:min-h-[84vh] overflow-hidden hero-bg-force pt-[calc(var(--header-h,56px)+env(safe-area-inset-top))]"
            aria-label="Hero"
          >
            {/* BACKGROUND IMAGE — ONLY LAYER */}
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/hero-family.webp 1x, /hero-family.webp 2x"
                type="image/webp"
              />
              <source
                media="(max-width: 767px)"
                srcSet="/hero-family-mobile.webp 1x, /hero-family-mobile.webp 2x"
                type="image/webp"
              />
              <img
                src="/hero-family.webp"
                alt=""
                aria-hidden="true"
                loading="eager"
                fetchPriority="high"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                style={{ objectPosition: "center center" }}
              />
            </picture>

            {/* CONTENT */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
                <div className="max-w-2xl">
                  <h1 className="text-[clamp(26px,5vw,34px)] md:text-5xl lg:text-6xl leading-[1.15] tracking-[-0.01em] mb-[10px] font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                    Private Health & Life Guidance. Clear. Fast. Year-Round.
                  </h1>
                  <p className="mt-3 text-white/90 text-lg">
                    Licensed in {BRAND.licensed} • NPN {BRAND.npn} • Medically underwritten options with PPO networks.
                  </p>
                  <div className="mt-5 flex gap-3">
                    <a href="/lead" className="btn-primary" data-gtm={`${BRAND.gtm.quote}_home`}>Get My Quote</a>
                    <a href={BRAND.phoneTel} className="btn-secondary" data-gtm={`${BRAND.gtm.call}_home`}>Call Now</a>
                  </div>
                  <div className="mt-5 text-white/85 text-sm">Avg first options in 45–90 mins • {BRAND.hours}</div>
                </div>

                <div className="hidden md:block">
                  <HeroForm/>
                </div>
              </div>
            </div>

            {/* Mobile: form anchored bottom */}
            <div id="mobileQuoteForm" className="absolute bottom-0 inset-x-0 pb-4 md:hidden px-4">
              <HeroForm/>
            </div>
          </section>
          {/* Hero sentinel for sticky CTA visibility */}
          <div data-hero-sentinel style={{ height: 1 }} />

          <section className="py-10 md:py-12 bg-band">
            <div className="container mx-auto px-4">
              <p className="text-sm mb-3 text-ink-1/70">Carriers & PPO networks we work with</p>
              <LogoRail logos={logos}/>
            </div>
          </section>

          <USAvailability />

          <TestimonialsGrid />

          <StickyCTA/>
        </main>
      </div>

      <div className="block md:hidden">
        <MobileHome />
      </div>
    </>
  );
}