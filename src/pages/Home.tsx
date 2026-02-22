import { BRAND } from "../lib/brand";
import SEO from "../components/SEO";
import { organizationSchema, serviceSchema, websiteSchema } from "../utils/schema";
import HeroForm from "../components/HeroForm"; // RESTORED FORM
import PremiumCarriers from "../components/luxury/PremiumCarriers";
import IndustryRecognitionSection from "../components/luxury/IndustryRecognitionSection";
import EnhancedMap from "../components/luxury/EnhancedMap";
import LuxuryTestimonialsCarousel from "../components/luxury/TestimonialsCarousel";
import RiskReversalSection from "../components/luxury/RiskReversalSection";
import AuthoritySection from "../components/luxury/AuthoritySection";

const licensedStates = ["FL", "MI", "NC", "AZ", "TX", "GA", "IN"];
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
        description="Independent insurance broker partnering with Best Insurance Group to deliver enterprise-level carrier access and personal advocacy across FL, MI, NC, AZ, TX, GA, and IN."
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
              "Independent insurance broker partnered with Best Insurance Group for exclusive carrier access and personalized guidance in FL, MI, NC, AZ, TX, GA, and IN.",
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
        
        {/* NEW Split Hero Layout (Text Left, Form Right) */}
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
          
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/backgrounds/happy-family-beach-hero.webp"
              alt="Family enjoying financial security on the beach"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40 z-10" />
          </div>

          <div className="container relative z-20 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Copy & Value Prop */}
            <div className="text-white space-y-8 animate-fadeIn">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Accepting New Clients: {licensedStatesDisplay}
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight drop-shadow-lg">
                Elite Health & Life <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  Coverage Without Compromise.
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-light">
                Secure nationwide PPO networks and A+ rated protection. The power of a corporate plan, 
                <strong className="text-white font-medium block mt-2">
                  tailored for individuals and families.
                </strong>
              </p>

              {/* Trust Icons (Shield, Clock, etc.) */}
              <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-300 border-t border-white/10 mt-6">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>A+ Rated Carriers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Same-Day Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Transparent Pricing</span>
                </div>
              </div>
            </div>

            {/* Right Column: The Lead Form (Ringy Trigger) */}
            <div className="w-full max-w-md mx-auto lg:ml-auto bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-white mb-1">Get Your Free Strategy</h3>
                <p className="text-sm text-slate-400">See your PPO & Life options in minutes.</p>
              </div>
              <HeroForm />
              <p className="text-xs text-center text-slate-500 mt-4">
                Secure & Confidential. No spam, ever.
              </p>
            </div>

          </div>
        </section>

        {/* Verification Band */}
        <div className="hidden md:block relative z-20 bg-slate-900/90 backdrop-blur-md border-t border-white/10 py-4">
          <div className="container mx-auto px-6 flex justify-between items-center text-xs text-slate-400">
             <span>Official Partner Status: <strong>Active</strong></span>
             <div className="flex gap-6">
                <a href={BRAND.verification.trustMyProducer} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  TrustMyProducer Verified
                </a>
                <a href={BRAND.verification.nipr} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0c0 .884-.956 2.99-3 3.5M13 6c0 .884.956 2.99 3 3.5" /></svg>
                  NIPR: {BRAND.npn}
                </a>
             </div>
          </div>
        </div>

        {/* Luxury Sections Below Fold */}
        <div className="relative z-10 bg-surface-luxury">
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
