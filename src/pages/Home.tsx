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

      {/* UNIFIED MOBILE EXPERIENCE - MATCHES DESKTOP CONTENT */}
      <div className="block md:hidden">
        <main className="relative">
          {/* MOBILE HERO SECTION - RESPONSIVE VERSION OF DESKTOP */}
          <section
            className="relative w-full min-h-[90vh] overflow-hidden pt-[calc(var(--header-h,56px)+env(safe-area-inset-top))] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            aria-label="Mobile Hero Section"
          >
            {/* BACKGROUND IMAGE - SAME AS DESKTOP */}
            <img
              src="/assets/backgrounds/happy-family-beach-hero.webp"
              alt="Family relaxing outdoors together representing personalized insurance guidance"
              loading="eager"
              fetchPriority="high"
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
              style={{ objectPosition: "center center" }}
            />

            {/* MOBILE HERO CONTENT - CONSISTENT MESSAGING */}
            <div className="relative z-10 h-full flex flex-col justify-center px-4 py-8">
              <div className="max-w-lg mx-auto text-center">
                {/* MAIN HEADLINE - MOBILE OPTIMIZED BUT SAME MESSAGE */}
                <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4 drop-shadow-2xl">
                  Independent Insurance Broker with Enterprise Resources
                </h1>
                
                {/* TRUST SIGNALS - CONSISTENT WITH DESKTOP */}
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  Partnering with Best Insurance Group since 2020 • Licensed in FL, GA, SC, TN, AL, TX • NPN 19337279
                </p>
                
                {/* MOBILE CTA BUTTONS - THUMB FRIENDLY */}
                <div className="space-y-3 mb-8">
                  <a 
                    href="/lead" 
                    className="block w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center min-h-[44px] active:scale-95"
                    data-gtm="mobile_quote_home"
                  >
                    Start Your Free Consultation
                  </a>
                  
                  <a 
                    href="tel:+19047621775" 
                    className="block w-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/20 transition-all duration-300 text-center min-h-[44px] active:scale-95"
                    data-gtm="mobile_call_home"
                  >
                    📞 Call (904) 762-1775
                  </a>
                </div>
                
                {/* TRUST INDICATORS - MOBILE FORMATTED */}
                <div className="text-white/80 text-sm space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Licensed Professionals • 24-Hour Response</span>
                  </div>
                </div>
              </div>
              
              {/* MOBILE QUOTE FORM - BOTTOM POSITIONED */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 shadow-2xl border border-white/20">
                  <HeroForm />
                </div>
              </div>
            </div>
          </section>

          {/* MOBILE CARRIERS SECTION - SAME CONTENT AS DESKTOP */}
          <section className="py-8 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <p className="text-sm text-slate-600 mb-4">Carriers & PPO networks we work with</p>
              </div>
              
              {/* MOBILE-OPTIMIZED CARRIER LOGOS */}
              <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                {logos.slice(0, 6).map((logo, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-center h-16">
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className="max-h-8 max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              
              {/* VIEW ALL CARRIERS LINK */}
              <div className="text-center mt-6">
                <a 
                  href="/carriers" 
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                >
                  View All Carriers
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* MOBILE US AVAILABILITY - RESPONSIVE VERSION */}
          <section className="py-8 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Licensed Across Multiple States</h2>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                We're licensed and ready to serve you in Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas.
              </p>
              
              {/* STATES GRID */}
              <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                {['Florida', 'Georgia', 'South Carolina', 'Tennessee', 'Alabama', 'Texas'].map((state) => (
                  <div key={state} className="bg-emerald-50 border border-emerald-200 rounded-lg py-3 px-2">
                    <div className="text-sm font-medium text-emerald-800">{state}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* MOBILE TESTIMONIALS - SIMPLIFIED VERSION */}
          <section className="py-8 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-center text-slate-900 mb-6">What Our Clients Say</h2>
              
              {/* MOBILE TESTIMONIAL CARD */}
              <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                  "Bradford made the complex world of insurance simple. His expertise and personalized approach saved us both time and money while getting us better coverage."
                </p>
                <div className="border-t pt-4">
                  <div className="font-medium text-slate-900">Sarah Johnson</div>
                  <div className="text-sm text-slate-500">Small Business Owner, FL</div>
                </div>
              </div>
              
              {/* VIEW MORE TESTIMONIALS */}
              <div className="text-center mt-6">
                <a 
                  href="#testimonials" 
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                >
                  Read More Reviews
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
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




