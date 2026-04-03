
import { ShieldCheck, FileSignature, PlayCircle, X, Search, HeartHandshake } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import PremiumCarriers from '../components/luxury/PremiumCarriers';
import AuthoritySection from '../components/luxury/AuthoritySection';

export default function HowItWorksPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <main className="bg-slate-950 selection:bg-emerald-500/30 min-h-screen">
      <SEO
        title="The Concierge Protocol - 4 Step Process | 7 States Licensed"
        description="Experience our elite 4-step Concierge Protocol. From discovery to enrollment, we handle the complexities of health and life insurance."
        path="/our-process"
        image="/images/hero/our-process-hero-retina.webp"
      />

      {/* LUXURY SPLIT HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/our-process-hero-desktop.webp"
            alt="Insurance consultation process"
            className="w-full h-full object-cover object-center opacity-60 mix-blend-overlay grayscale-[50%]"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20 z-10" />
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="container relative z-20 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                The Concierge Protocol
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight drop-shadow-lg">
              White-Glove Service. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Frictionless Results.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-lg leading-relaxed font-light">
              We've engineered a 4-step process to eliminate the confusion of insurance. We do the research, handle the underwriting, and secure your coverage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://calendly.com/bradfordinformedguidance"
                className="group relative overflow-hidden bg-emerald-500 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] text-center"
              >
                <span className="relative z-10">Initiate Protocol</span>
              </a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/5 transition-colors duration-300 backdrop-blur-md"
              >
                <PlayCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Watch Briefing</span>
              </button>
            </div>
          </div>

          {/* Right Column - Glass Panel */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
               <div className="space-y-6">
                 <div className="pb-6 border-b border-white/10 flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Step 01</p>
                     <p className="text-2xl font-light text-white">Discovery</p>
                   </div>
                   <Search className="w-8 h-8 text-emerald-400/50" />
                 </div>
                 <div className="pb-6 border-b border-white/10 flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Step 02</p>
                     <p className="text-2xl font-light text-white">Strategy</p>
                   </div>
                   <ShieldCheck className="w-8 h-8 text-emerald-400/50" />
                 </div>
                 <div className="pb-6 border-b border-white/10 flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Step 03</p>
                     <p className="text-2xl font-light text-white">Execution</p>
                   </div>
                   <FileSignature className="w-8 h-8 text-emerald-400/50" />
                 </div>
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Step 04</p>
                     <p className="text-2xl font-light text-emerald-400 font-bold">Advocacy</p>
                   </div>
                   <HeartHandshake className="w-8 h-8 text-emerald-400" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED PROCESS STEPS - BENTO GRID */}
      <section className="py-24 bg-slate-950 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Operate</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              No call centers. No jargon. Just a clear path to total coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 backdrop-blur-md">
              <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-8xl font-bold text-white">01</div>
              <Search className="w-12 h-12 text-emerald-400 mb-6 relative z-10" />
              <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Discovery Call</h3>
              <p className="text-slate-400 text-lg relative z-10">
                A 15-minute diagnostic. We assess your current coverage, identify gaps, check your preferred doctors, and calculate your exact subsidy eligibility across our 7 licensed states.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 backdrop-blur-md">
              <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-8xl font-bold text-white">02</div>
              <ShieldCheck className="w-12 h-12 text-teal-400 mb-6 relative z-10" />
              <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Strategy Design</h3>
              <p className="text-slate-400 text-lg relative z-10">
                We pull quotes from 10+ A-rated carriers. You receive a customized "Coverage Blueprint" comparing PPO networks, premiums, and out-of-pocket maximums.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 backdrop-blur-md">
              <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-8xl font-bold text-white">03</div>
              <FileSignature className="w-12 h-12 text-blue-400 mb-6 relative z-10" />
              <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Frictionless Execution</h3>
              <p className="text-slate-400 text-lg relative z-10">
                Select your plan and we handle the rest. We navigate the underwriting, submit the compliance paperwork, and confirm your approval—often within 24 hours.
              </p>
            </div>

            {/* Step 4 */}
            <div className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 backdrop-blur-md">
              <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-8xl font-bold text-white">04</div>
              <HeartHandshake className="w-12 h-12 text-emerald-400 mb-6 relative z-10" />
              <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Lifetime Advocacy</h3>
              <p className="text-slate-400 text-lg relative z-10">
                Our relationship starts when the policy is issued. We handle your annual renewals, assist with complex claims, and ensure your coverage scales as your life changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PremiumCarriers />
      <AuthoritySection />

      {/* VIDEO MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 md:p-10 animate-fadeIn">
          <div className="relative w-full max-w-5xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(16,185,129,0.15)] ring-1 ring-white/10">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 hover:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video bg-black relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-0" />
              <div className="relative z-10 text-center space-y-4">
                <PlayCircle className="w-20 h-20 text-emerald-500 mx-auto opacity-80" />
                <h3 className="text-2xl font-serif text-white tracking-widest uppercase">The Concierge Protocol</h3>
                <p className="text-emerald-400 tracking-widest text-sm uppercase">MasterClass Overview</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
