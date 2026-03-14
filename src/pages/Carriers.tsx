import { CheckCircle, Shield, Award, MapPin, Search, Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SEO from "../components/SEO";
import { organizationSchema, itemListSchema } from "../utils/schema";
import PremiumNetworkCard from "../components/carriers/PremiumNetworkCard";
import LuxuryCarrierCard from "../components/carriers/LuxuryCarrierCard";
import AuthoritySection from '../components/luxury/AuthoritySection';
import RiskReversalSection from '../components/luxury/RiskReversalSection';

import { CARRIERS } from "../data/carriersData";
import { NETWORKS } from "../data/networksData";

const PremiumCarriersFAQ = lazy(() => import("../components/carriers/PremiumCarriersFAQ"));

export default function CarriersPage() {
  const structuredData = [
    organizationSchema(),
    itemListSchema({
      name: 'Insurance Carriers',
      description: 'A-rated insurance carriers available through Bradford Informed Guidance',
      items: CARRIERS.map(c => ({ name: c.name, url: '/carriers', description: c.specialty }))
    })
  ];

  return (
    <main className="bg-slate-950 selection:bg-emerald-500/30 min-h-screen">
      <SEO
        title="Compare 10 A to A+ Rated Carriers & PPO Networks - 7 States"
        description="Expert independent broker serving 7 licensed states. Access elite PPO networks and A-rated carriers. No enrollment fees."
        path="/carriers"
        scripts={structuredData.map(data => ({ type: 'application/ld+json', innerHTML: data }))}
      />

      {/* LUXURY SPLIT HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/carriers-hero-desktop.webp"
            alt="Premium healthcare networks and carriers"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
            onError={(e) => { e.currentTarget.src = '/assets/backgrounds/happy-family-beach-hero.webp'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40 z-10" />
          <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
        </div>

        <div className="container relative z-20 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Enterprise Carrier Access
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg">
              10+ A-Rated <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Carrier Networks.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-lg leading-relaxed font-light">
              Through our strategic partnership with Best Insurance Group, we unlock elite PPO networks and A-rated carriers usually reserved for massive corporations—tailored directly for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#networks"
                className="group relative overflow-hidden bg-emerald-500 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] text-center"
              >
                <span className="relative z-10">Explore Networks</span>
              </a>
              <a
                href="#carriers"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/5 transition-colors duration-300 backdrop-blur-md"
              >
                <span>View Carriers</span>
              </a>
            </div>
          </div>

          {/* Right Column - Glass Stat Panel */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
               <div className="space-y-6">
                 <div className="pb-6 border-b border-white/10 flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Provider Access</p>
                     <p className="text-3xl font-light text-white">1.3+ Million</p>
                   </div>
                   <Search className="w-8 h-8 text-emerald-400/50" />
                 </div>
                 <div className="pb-6 border-b border-white/10 flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Financial Rating</p>
                     <p className="text-3xl font-light text-white">A to A+</p>
                   </div>
                   <Shield className="w-8 h-8 text-emerald-400/50" />
                 </div>
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Coverage Area</p>
                     <p className="text-3xl font-light text-emerald-400 font-bold">Nationwide</p>
                   </div>
                   <MapPin className="w-8 h-8 text-emerald-400" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* PPO NETWORKS BENTO */}
      <section id="networks" className="py-24 bg-slate-950 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Nationwide Access</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">PPO Networks</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Keep your doctors. We broker access to the nation's largest and most respected provider networks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NETWORKS.map((network, index) => (
              <PremiumNetworkCard key={network.name} network={network} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* A-RATED CARRIERS */}
      <section id="carriers" className="py-24 bg-slate-900 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              A-Rated <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Partners</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We only place our clients with carriers that have proven financial strength and flawless claims history.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARRIERS.map((carrier, index) => (
              <div key={carrier.name} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white mb-2">{carrier.name}</h3>
                <div className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">{carrier.rating} Rated</div>
                <p className="text-slate-400 mb-6 line-clamp-2">{carrier.specialty}</p>
                <div className="flex flex-wrap gap-2">
                  {carrier.tags?.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 rounded-md text-xs text-slate-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RiskReversalSection />
      
      <section className="py-24 bg-slate-950 border-t border-white/5">
         <div className="container mx-auto px-6 max-w-4xl text-white">
           <Suspense fallback={<div className="h-40 bg-white/5 animate-pulse rounded-2xl"></div>}>
             <PremiumCarriersFAQ />
           </Suspense>
         </div>
      </section>

      <AuthoritySection />
    </main>
  );
}
