import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { HeartPulse, ShieldCheck, Users, Clock3, Stethoscope, CheckCircle2, BookOpen, Shield, DollarSign, Heart, Zap, TrendingUp, Clock, ArrowRight, PlayCircle, X } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { blogPosts, type BlogPost } from './Resources';
import { organizationSchema, serviceSchema } from '../utils/schema';
import { SEO_IMAGES } from '../utils/seoAssets';
import RelatedPosts from '../components/blog/RelatedPosts';
import CitationLinks from '../components/CitationLinks';

import PremiumCarriers from '../components/luxury/PremiumCarriers';
import RiskReversalSection from '../components/luxury/RiskReversalSection';
import AuthoritySection from '../components/luxury/AuthoritySection';

const healthArticles: BlogPost[] = Object.values(blogPosts)
  .flat()
  .filter(post => post.category === 'Health Insurance');

export default function HealthInsurance() {
  const prefersReducedMotion = useReducedMotion();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const heroImage = SEO_IMAGES.healthService;
  
  const structuredData = [
    organizationSchema(),
    serviceSchema(
      ['Affordable Health Insurance', 'PPO Health Coverage', 'Health Insurance Broker Services'],
      heroImage.src,
      {
        name: 'Health Insurance Brokerage Services',
        description: 'Expert health insurance guidance and carrier comparison across 7 states with 10 carriers and 6 PPO networks',
        url: 'https://bradfordinformedguidance.com/health-insurance',
      }
    )
  ];

  return (
    <main id="content" className="has-sticky-cta bg-surface-luxury selection:bg-emerald-500/30">
      <SEO
        title="Health Insurance & PPO Network Guidance - 7 States Licensed"
        description="Elite health insurance strategies, exclusive PPO networks, and personalized guidance with zero enrollment fees."
        path="/health-insurance"
        image={heroImage.src}
        meta={[
          {
            name: 'keywords',
            content: 'affordable health insurance, health insurance broker, 7 states licensed, no enrollment fees, Best Insurance Group partner, A-rated carriers'
          },
          { property: 'og:title', content: 'Health Insurance & PPO Network Guidance | Bradford Informed Guidance' },
          { property: 'og:description', content: 'Compare elite health insurance plans with no enrollment fees and 24-hour response guarantee.' },
          { property: 'og:type', content: 'website' }
        ]}
        scripts={structuredData.map(innerHTML => ({ innerHTML }))}
      />

      {/* LUXURY SPLIT HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/backgrounds/health-insurance-hero.webp"
            alt="Healthcare professional using digital technology"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40 z-10" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="container relative z-20 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                PPO Networks & Health Navigation
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight drop-shadow-lg">
              Elite Health Coverage. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                Zero Compromise.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-lg leading-relaxed font-light">
              We secure top-tier PPO networks and comprehensive health plans for families and entrepreneurs across FL, MI, NC, AZ, TX, GA, and IN.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://calendly.com/bradfordinformedguidance"
                className="group relative overflow-hidden bg-emerald-500 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]"
              >
                <span className="relative z-10">Schedule Free Analysis</span>
              </a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/5 transition-colors duration-300 backdrop-blur-md"
              >
                <PlayCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>See The Protocol</span>
              </button>
            </div>
          </div>

          {/* Right Column - Luxury Stats Glass Panel */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
               <div className="space-y-6">
                 <div className="pb-6 border-b border-white/10">
                   <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Carrier Network</p>
                   <p className="text-4xl font-light text-white">10+ <span className="text-emerald-400 text-2xl font-bold">A-Rated</span></p>
                 </div>
                 <div className="pb-6 border-b border-white/10">
                   <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">PPO Access</p>
                   <p className="text-4xl font-light text-white">Nationwide</p>
                 </div>
                 <div>
                   <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Turnaround Time</p>
                   <p className="text-4xl font-light text-white">Same-Day <span className="text-emerald-400 text-2xl font-bold">Quotes</span></p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 1. THE "BENTO BOX" COMMAND CENTER (11/10 Feature) */}
      <section className="py-24 bg-slate-950 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              The Health Insurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Command Center</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Everything you need to secure your medical future, organized into a seamless interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Box 1 (Wide) */}
            <div className="group md:col-span-2 relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-colors backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Shield className="w-10 h-10 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">PPO Network Dominance</h3>
              <p className="text-slate-400 max-w-md">Gain unrestricted access to nationwide specialists. Travel out of state without losing your coverage.</p>
            </div>

            {/* Box 2 (Square) */}
            <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-teal-500/30 transition-colors backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <HeartPulse className="w-10 h-10 text-teal-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">HSA & HDHP</h3>
              <p className="text-slate-400">Tax-advantaged wealth building tied directly to your health plan.</p>
            </div>

            {/* Box 3 (Square) */}
            <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/30 transition-colors backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <DollarSign className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Subsidy Optimization</h3>
              <p className="text-slate-400">We recalculate your MAGI to ensure you extract maximum federal credits.</p>
            </div>

            {/* Box 4 (Wide) */}
            <div className="group md:col-span-2 relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-colors backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Clock3 className="w-10 h-10 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Concierge Renewals</h3>
              <p className="text-slate-400 max-w-md">Never worry about Open Enrollment again. We automatically audit and upgrade your plan every November.</p>
            </div>
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
          <div className="relative w-full max-w-5xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(16,185,129,0.15)] ring-1 ring-white/10">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 hover:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video bg-black relative flex items-center justify-center">
              {/* Fallback for the demo - normally an iframe/video element goes here */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-0" />
              <img src="/assets/backgrounds/our-process-hero-desktop.webp" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Video Placeholder" />
              <div className="relative z-10 text-center space-y-4">
                <PlayCircle className="w-20 h-20 text-emerald-500 mx-auto opacity-80" />
                <h3 className="text-2xl font-serif text-white tracking-widest uppercase">The Concierge Protocol</h3>
                <p className="text-emerald-400 tracking-widest text-sm uppercase">MasterClass</p>
              </div>
            </div>
            <div className="p-8 bg-slate-950/50">
              <h4 className="text-xl font-bold text-white mb-2">How We Build Your Coverage</h4>
              <p className="text-slate-400 text-sm">A 2-minute overview of our high-end health insurance audit process.</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
