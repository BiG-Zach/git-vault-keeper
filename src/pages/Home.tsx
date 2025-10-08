import HeroForm from "../components/HeroForm";
import LogoRail from "../components/marketing/LogoRail";
import TestimonialsGrid from "../components/social/TestimonialsGrid";
import USAvailability from "../components/marketing/USAvailability";
import StickyCTA from "../components/global/StickyCTA";
import { BRAND } from "../lib/brand";
// Removed separate mobile components - now using unified responsive design
import SEO from "../components/SEO";
import { organizationSchema, serviceSchema, websiteSchema } from "../utils/schema";

// Luxury Desktop Components
import LuxuryHero from "../components/luxury/LuxuryHero";
import PremiumCarriers from "../components/luxury/PremiumCarriers";
import IndustryRecognitionSection from "../components/luxury/IndustryRecognitionSection";
import EnhancedMap from "../components/luxury/EnhancedMap";
import TestimonialsCarousel from "../components/luxury/TestimonialsCarousel";
import RiskReversalSection from "../components/luxury/RiskReversalSection";
import AuthoritySection from "../components/luxury/AuthoritySection";
import SocialProofTicker from "../components/luxury/SocialProofTicker";

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
  const structuredData = [
    organizationSchema(),
    websiteSchema(),
    serviceSchema(['Health Insurance', 'Life Insurance', 'Insurance Broker Services'])
  ];

  return (
    <>
      <SEO
        title="Health & Life Insurance Broker | Bradford Informed Guidance"
        description="Private health and life insurance guidance for families, entrepreneurs, and retirees. Licensed in FL, MI, NC, AZ, TX, and GA with concierge support and instant quotes."
        path="/"
        meta={[
          {
            name: 'keywords',
            content: 'health insurance broker, life insurance broker, PPO plans, private health insurance, Florida insurance broker, Texas insurance broker, Arizona health insurance, Georgia life insurance'
          },
          { property: 'og:title', content: 'Health & Life Insurance Broker | Bradford Informed Guidance' },
          {
            property: 'og:description',
            content: 'Concierge health and life insurance guidance with PPO networks, custom life insurance layering, and rapid quotes across FL, MI, NC, AZ, TX, and GA.'
          },
          { property: 'og:type', content: 'website' }
        ]}
        scripts={structuredData.map(innerHTML => ({ innerHTML }))}
      />

      {/* Desktop Luxury Experience (1024px+) */}
      <div className="hidden lg:block">
        <main className="relative">
          <LuxuryHero />
          
          {/* Subtle Verification Badge - Desktop Only */}
          <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-8">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
                  {/* Verification Heading */}
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Independently Verified:</span>
                  </div>
                  
                  {/* Verification Links */}
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={BRAND.verification.trustMyProducer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/30 rounded-full transition-all duration-300 group"
                      data-gtm="home-verify-trustmyproducer"
                    >
                      <svg className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-medium text-white/90 group-hover:text-white transition-colors">TrustMyProducer</span>
                    </a>
                    
                    <a
                      href={BRAND.verification.nipr}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 rounded-full transition-all duration-300 group"
                      data-gtm="home-verify-nipr"
                    >
                      <svg className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-medium text-white/90 group-hover:text-white transition-colors">NIPR Registry</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <PremiumCarriers />
          
          <IndustryRecognitionSection />
          
          <EnhancedMap />
          
          <TestimonialsCarousel />
          
          <AuthoritySection />
          
          <RiskReversalSection />

          <StickyCTA/>
          
          {/* Social Proof Ticker */}
          <SocialProofTicker />
        </main>
      </div>

      {/* Tablet Experience (768px-1023px) - Enhanced but simpler */}
      <div className="hidden md:block lg:hidden">
        <main className="relative">
          <section
            className="relative w-full min-h-[82vh] md:min-h-[84vh] overflow-hidden hero-bg-force pt-[calc(var(--header-h,56px)+env(safe-area-inset-top))]"
            aria-label="Hero"
          >
            {/* BACKGROUND IMAGE - ONLY LAYER */}
            <img
              src="/assets/backgrounds/happy-family-beach-hero.webp"
              alt="Family relaxing outdoors together representing personalized insurance guidance"
              loading="eager"
              fetchPriority="high"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
              style={{ objectPosition: "center center" }}
            />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
                <div className="max-w-2xl">
                  <h1 className="text-[clamp(26px,5vw,34px)] md:text-5xl lg:text-6xl leading-[1.15] tracking-[-0.01em] mb-[10px] font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                    Independent Insurance Broker with Enterprise Resources
                  </h1>
                  <p className="mt-3 text-white/90 text-lg">
                    Partnering with Best Insurance Group since 2020 • Licensed in {BRAND.licensed} • NPN {BRAND.npn}
                  </p>
                  <div className="mt-5 flex gap-3">
                    <a href="/lead" className="btn-primary" data-gtm={`${BRAND.gtm.quote}_home`}>Start Your Consultation</a>
                    <a href={BRAND.phoneTel} className="btn-secondary" data-gtm={`${BRAND.gtm.call}_home`}>Contact</a>
                  </div>
                  <div className="mt-5 text-white/85 text-sm">Licensed professionals • {BRAND.hours}</div>
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

      {/* PREMIUM MOBILE EXPERIENCE - DESKTOP QUALITY */}
      <div className="block md:hidden">
        <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          
          {/* PREMIUM MOBILE HERO - DESKTOP-QUALITY VISUAL HIERARCHY */}
          <section className="relative min-h-screen overflow-hidden">
            
            {/* PREMIUM BACKGROUND WITH OVERLAY */}
            <div className="absolute inset-0">
              <img
                src="/assets/backgrounds/happy-family-beach-hero.webp"
                alt="Family relaxing outdoors together representing personalized insurance guidance"
                loading="eager"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-slate-900/80"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
            </div>

            {/* PREMIUM MOBILE HERO CONTENT */}
            <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 py-20">
              <div className="mx-auto max-w-sm text-center">
                
                {/* PREMIUM HEADLINE - DESKTOP CONSISTENCY */}
                <div className="mb-8">
                  <h1 className="mb-4 text-4xl font-bold leading-tight text-white drop-shadow-2xl">
                    Independent Insurance Broker with 
                    <span className="block text-emerald-400">Enterprise Resources</span>
                  </h1>
                  
                  {/* PREMIUM TRUST SIGNALS */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-emerald-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Licensed in 6 States</span>
                    </div>
                    
                    <p className="text-lg leading-relaxed text-white/90">
                      <span className="font-semibold text-emerald-300">Best Insurance Group Partner</span> since 2020
                      <br />
                      FL • GA • SC • TN • AL • TX
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-emerald-200">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>24-Hour Response Guarantee</span>
                    </div>
                  </div>
                </div>

                {/* PREMIUM CTA BUTTONS - PROFESSIONAL HIERARCHY */}
                <div className="mb-12 space-y-4">
                  <a 
                    href="/lead" 
                    className="group relative block w-full overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-5 text-center font-bold text-white shadow-2xl transition-all duration-300 hover:from-emerald-700 hover:to-emerald-800 hover:shadow-emerald-500/25 active:scale-[0.98]"
                    data-gtm="premium_mobile_quote"
                  >
                    <div className="relative z-10">
                      <div className="text-lg font-bold">Start Your Free Consultation</div>
                      <div className="text-sm opacity-90">Expert guidance in 24 hours</div>
                    </div>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-white/20 transition-transform duration-700 group-hover:translate-x-full"></div>
                  </a>
                  
                  <a 
                    href="tel:+16893256570" 
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-500/20 active:scale-[0.98]"
                    data-gtm="premium_mobile_call"
                  >
                    <svg className="h-6 w-6 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div className="text-center">
                      <div className="text-base font-bold">(689) 325-6570</div>
                      <div className="text-sm opacity-90">Call Now - Licensed Professional</div>
                    </div>
                  </a>
                </div>

                {/* PREMIUM CREDENTIALS BAR */}
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/50 p-4 backdrop-blur-md">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Independently Verified Credentials
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="{BRAND.verification.trustMyProducer}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-3 text-xs font-medium text-white transition-all hover:bg-white/20"
                    >
                      <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      TrustMyProducer
                    </a>
                    
                    <a
                      href="{BRAND.verification.nipr}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-3 text-xs font-medium text-white transition-all hover:bg-white/20"
                    >
                      <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      NIPR Registry
                    </a>
                  </div>
                </div>
              </div>


            </div>
          </section>

          {/* PREMIUM MOBILE QUOTE FORM SECTION */}
          <section className="relative bg-gradient-to-b from-white to-slate-50 py-16">
            <div className="container mx-auto px-6">
              <div className="mx-auto max-w-md">
                
                {/* FORM INTRODUCTION */}
                <div className="mb-8 text-center">
                  <h2 className="mb-3 text-2xl font-bold text-slate-900">
                    Get Your Personalized Quote
                  </h2>
                  <p className="text-slate-600">
                    Licensed professionals will review your needs and provide custom recommendations within 24 hours.
                  </p>
                </div>

                {/* PREMIUM FORM CARD */}
                <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-200">
                  <HeroForm />
                </div>

                {/* TRUST INDICATORS BELOW FORM */}
                <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No Obligation</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>24hr Response</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PREMIUM MOBILE CARRIERS SECTION */}
          <section className="bg-slate-50 py-16">
            <div className="container mx-auto px-6">
              <div className="mx-auto max-w-md text-center">
                
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Trusted Insurance Partners
                </h2>
                <p className="mb-8 text-slate-600">
                  We work with top-rated carriers and PPO networks to find you the best coverage at competitive rates.
                </p>
                
                {/* PREMIUM CARRIER GRID */}
                <div className="mb-8 grid grid-cols-3 gap-4">
                  {logos.slice(0, 6).map((logo, index) => (
                    <div key={index} className="group aspect-square rounded-2xl bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                      <img 
                        src={logo.src} 
                        alt={logo.alt}
                        className="h-full w-full object-contain opacity-80 transition-opacity group-hover:opacity-100"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                
                <a 
                  href="/carriers" 
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl active:scale-95"
                >
                  View All Carriers
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* PREMIUM STATE LICENSING SECTION */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-6">
              <div className="mx-auto max-w-md text-center">
                
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Licensed Across the Southeast
                </h2>
                <p className="mb-8 text-slate-600">
                  Fully licensed and ready to serve you across six states with comprehensive insurance solutions.
                </p>
                
                {/* PREMIUM STATE GRID */}
                <div className="mb-8 grid grid-cols-2 gap-3">
                  {[
                    { name: 'Florida', abbr: 'FL' },
                    { name: 'Georgia', abbr: 'GA' },
                    { name: 'South Carolina', abbr: 'SC' },
                    { name: 'Tennessee', abbr: 'TN' },
                    { name: 'Alabama', abbr: 'AL' },
                    { name: 'Texas', abbr: 'TX' }
                  ].map((state) => (
                    <div key={state.abbr} className="group rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-4 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-100">
                      <div className="text-lg font-bold text-emerald-800">{state.name}</div>
                      <div className="text-sm font-medium text-emerald-600">Licensed in {state.abbr}</div>
                    </div>
                  ))}
                </div>
                
                <div className="rounded-2xl bg-emerald-950 p-6 text-white">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Licensed Professional</span>
                  </div>
                  <div className="text-sm text-emerald-200">
                    NPN 18181266 • Best Insurance Group Partner since 2020
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PREMIUM TESTIMONIALS SECTION */}
          <section className="bg-slate-900 py-16">
            <div className="container mx-auto px-6">
              <div className="mx-auto max-w-md text-center">
                
                <h2 className="mb-4 text-2xl font-bold text-white">
                  What Our Clients Say
                </h2>
                <p className="mb-8 text-slate-300">
                  Real stories from families and businesses we've helped secure better insurance coverage.
                </p>
                
                {/* PREMIUM TESTIMONIAL CARD */}
                <div className="rounded-3xl bg-white p-8 shadow-2xl">
                  <div className="mb-6 flex justify-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="mb-6 text-lg leading-relaxed text-slate-700">
                    "Bradford made the complex world of insurance simple. His expertise and personalized approach saved us both time and money while getting us better coverage."
                  </blockquote>
                  
                  <div className="border-t border-slate-200 pt-6">
                    <div className="font-bold text-slate-900">Sarah Johnson</div>
                    <div className="text-sm text-slate-500">Small Business Owner • Florida</div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="#testimonials" 
                    className="inline-flex items-center gap-2 text-emerald-400 font-semibold transition-colors hover:text-emerald-300"
                  >
                    Read More Success Stories
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* MOBILE VERIFICATION SECTION - SAME AS DESKTOP */}
          <section className="py-6 bg-gradient-to-r from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-white/80 mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Independently Verified</span>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <a
                    href="https://www.trustmyproducer.com/agent/21078/bradford-j-bradford"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 hover:bg-white/20 transition-all duration-300 text-sm"
                  >
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    TrustMyProducer
                  </a>
                  
                  <a
                    href="https://www.nipr.com/verify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 hover:bg-white/20 transition-all duration-300 text-sm"
                  >
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    NIPR Registry
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* MOBILE STICKY CTA */}
          <StickyCTA />
        </main>
      </div>
    </>
  );
}




