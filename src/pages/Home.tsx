import HeroForm from "../components/HeroForm";
import LogoRail from "../components/marketing/LogoRail";
import TestimonialsGrid from "../components/social/TestimonialsGrid";
import USAvailability from "../components/marketing/USAvailability";
import StickyCTA from "../components/global/StickyCTA";
import { BRAND } from "../lib/brand";
import MobileHome from "../mobile";
import MobileTrust from "../mobile/MobileTrust";
import MobileCarriers from "../mobile/MobileCarriers";
import MobileHowItWorks from "../mobile/MobileHowItWorks";
import MobileTestimonials from "../mobile/MobileTestimonials";
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

      <div className="block md:hidden">
        <MobileHome />
        <MobileTrust />
        <MobileCarriers />
        <MobileHowItWorks />
        <MobileTestimonials />
      </div>
    </>
  );
}




