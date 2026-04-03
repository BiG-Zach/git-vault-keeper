
import { Shield, TrendingUp, Building, PlayCircle, X } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

import { organizationSchema, serviceSchema, breadcrumbSchema } from '../utils/schema';
import { SEO_IMAGES } from '../utils/seoAssets';

import PremiumCarriers from '../components/luxury/PremiumCarriers';
import RiskReversalSection from '../components/luxury/RiskReversalSection';
import AuthoritySection from '../components/luxury/AuthoritySection';


export default function LifeInsurance() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(500000); // 500k default
  
  const heroImage = SEO_IMAGES.lifeService;
  
  const structuredData = [
    organizationSchema(),
    serviceSchema(
      ['Life Insurance Planning', 'Whole Life & Term Insurance', 'Life Insurance Broker'],
      heroImage.src,
      {
        name: 'Life Insurance Brokerage Services',
        description: 'Comprehensive life insurance solutions including term, whole life, and universal life policies with living benefits',
        url: 'https://bradfordinformedguidance.com/life-insurance',
      }
    ),
    breadcrumbSchema([
      { name: 'Home', item: 'https://bradfordinformedguidance.com/' },
      { name: 'Life Insurance', item: 'https://bradfordinformedguidance.com/life-insurance' },
    ]),
  ];

  return (
    <main id="content" className="has-sticky-cta bg-surface-luxury selection:bg-emerald-500/30">
      <SEO
        title="Premium Life Insurance & Wealth Protection"
        description="Elite life insurance strategies including Term, IUL, and Whole Life to build generational wealth and protect your family."
        path="/life-insurance"
        image={heroImage.src}
        meta={[
          {
            name: 'keywords',
            content: 'life insurance broker, term life insurance, whole life, IUL, wealth protection'
          },
          { property: 'og:title', content: 'Premium Life Insurance & Wealth Protection | Bradford Informed Guidance' },
          { property: 'og:description', content: 'Elite life insurance strategies including Term, IUL, and Whole Life to build generational wealth.' },
          { property: 'og:type', content: 'website' }
        ]}
        scripts={structuredData.map(innerHTML => ({ innerHTML }))}
      />

      {/* LUXURY SPLIT HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/backgrounds/life-insurance-hero.webp"
            alt="Family wealth protection"
            className="w-full h-full object-cover object-center opacity-60 mix-blend-overlay grayscale-[50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20 z-10" />
          <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="container relative z-20 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Generational Wealth Protection
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight drop-shadow-lg">
              Secure Their Future. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-300">
                Solidify Your Legacy.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-lg leading-relaxed font-light">
              Expert-crafted term, whole, and IUL policies designed to protect your family's assets and transfer wealth with absolute tax efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://calendly.com/bradfordinformedguidance"
                className="group relative overflow-hidden bg-teal-500 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_-5px_rgba(20,184,166,0.4)]"
              >
                <span className="relative z-10">Design Your Strategy</span>
              </a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/5 transition-colors duration-300 backdrop-blur-md"
              >
                <PlayCircle className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                <span>Watch Briefing</span>
              </button>
            </div>
          </div>

          {/* Right Column - Glass Panel */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent rounded-3xl blur-2xl" />
             <div className="relative w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="space-y-6">
                  <div className="pb-6 border-b border-white/10">
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Term Policies</p>
                    <p className="text-4xl font-light text-white">10-30 <span className="text-teal-400 text-2xl font-bold">Years</span></p>
                  </div>
                  <div className="pb-6 border-b border-white/10">
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Wealth Transfer</p>
                    <p className="text-4xl font-light text-white">Tax-Free <span className="text-teal-400 text-2xl font-bold">Benefits</span></p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Living Benefits</p>
                    <p className="text-4xl font-light text-white">Included</p>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* 2. THE "GENERATIONAL WEALTH" GLASS SLIDER (11/10 Feature) */}
      <section className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
        {/* Abstract background grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Visualize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-300">Coverage Power</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Adjust the slider to see how different coverage tiers translate to real-world protection for your heirs.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl">
            {/* The Slider UI */}
            <div className="mb-12">
              <div className="flex justify-between text-teal-400 font-bold mb-4 text-xl md:text-3xl font-serif tracking-wide">
                <span>Coverage:</span>
                <span>${(sliderValue).toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="100000" 
                max="3000000" 
                step="50000" 
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />
              <div className="flex justify-between text-slate-500 text-xs mt-2 uppercase tracking-widest font-bold">
                <span>$100k</span>
                <span>$3M+</span>
              </div>
            </div>

            {/* The Dynamic Data Output */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="p-6 rounded-2xl bg-slate-900 border border-white/5">
                 <Shield className="w-8 h-8 text-teal-400 mb-4" />
                 <h4 className="text-slate-400 text-sm uppercase tracking-wider mb-2">Mortgage Payoff</h4>
                 <p className="text-white text-xl font-light">
                   {sliderValue >= 500000 ? "Fully Covered" : "Partial Coverage"}
                 </p>
               </div>
               <div className="p-6 rounded-2xl bg-slate-900 border border-white/5">
                 <Building className="w-8 h-8 text-sky-400 mb-4" />
                 <h4 className="text-slate-400 text-sm uppercase tracking-wider mb-2">Income Replacement</h4>
                 <p className="text-white text-xl font-light">
                   {Math.floor(sliderValue / 60000)} Years <span className="text-slate-500 text-sm">(@ $60k/yr)</span>
                 </p>
               </div>
               <div className="p-6 rounded-2xl bg-slate-900 border border-white/5">
                 <TrendingUp className="w-8 h-8 text-emerald-400 mb-4" />
                 <h4 className="text-slate-400 text-sm uppercase tracking-wider mb-2">Est. Cash Value (IUL)</h4>
                 <p className="text-white text-xl font-light">
                   ${(sliderValue * 0.15).toLocaleString()} <span className="text-slate-500 text-sm">in 20 yrs</span>
                 </p>
               </div>
            </div>
            
            <p className="text-center text-slate-500 text-xs mt-8">
              * Figures are illustrative. Actual premiums, cash values, and death benefits depend on underwriting and policy type.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Trust Components */}
      <PremiumCarriers />
      <RiskReversalSection />
      <AuthoritySection />

      {/* 4. CINEMATIC "MASTERCLASS" MODAL (11/10 Feature) */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 md:p-10 animate-fadeIn">
          <div className="relative w-full max-w-5xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(20,184,166,0.15)] ring-1 ring-white/10">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 hover:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video bg-black relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-0" />
              <img src="/assets/backgrounds/life-insurance-hero-desktop.webp" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Video Placeholder" />
              <div className="relative z-10 text-center space-y-4">
                <PlayCircle className="w-20 h-20 text-teal-500 mx-auto opacity-80" />
                <h3 className="text-2xl font-serif text-white tracking-widest uppercase">Wealth Protection Protocol</h3>
                <p className="text-teal-400 tracking-widest text-sm uppercase">MasterClass</p>
              </div>
            </div>
            <div className="p-8 bg-slate-950/50">
              <h4 className="text-xl font-bold text-white mb-2">How We Structure Generational Wealth</h4>
              <p className="text-slate-400 text-sm">A brief overview of Term vs. IUL and our tax-advantaged strategy.</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
