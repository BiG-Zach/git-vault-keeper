import { BRAND } from "../lib/brand";
import { Shield, Award, Users, TrendingUp, Phone, Mail, Calendar, Star, CheckCircle, PlayCircle, X } from "lucide-react";
import { useState } from 'react';
import SEO from "../components/SEO";
import { organizationSchema, serviceSchema, personSchema, breadcrumbSchema } from "../utils/schema";
import AuthoritySection from '../components/luxury/AuthoritySection';

export default function AboutPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const structuredData = [
    organizationSchema(),
    serviceSchema(['Health Insurance Advisory', 'Life Insurance Planning'], '/images/hero/about-hero-retina.webp'),
    personSchema('Zachary Bradford', 'Licensed Insurance Broker', 'Licensed health and life insurance broker with 8+ years of experience helping 1,000+ families across 7 states.', 'https://bradfordinformedguidance.com/about/portrait.jpg'),
    breadcrumbSchema([{ name: 'Home', item: 'https://bradfordinformedguidance.com/' }, { name: 'About', item: 'https://bradfordinformedguidance.com/about' }])
  ];

  return (
    <main className="bg-slate-950 selection:bg-emerald-500/30 min-h-screen scroll-smooth">
      <SEO
        title="About Bradford Informed Guidance | Licensed Health & Life Insurance Broker"
        description="Meet Zach Bradford, licensed health and life insurance broker guiding 1,000+ families with PPO health plans, life insurance layering, and concierge support across FL, MI, NC, AZ, TX, GA, and IN."
        path="/about"
        scripts={structuredData.map(innerHTML => ({ innerHTML }))}
      />

      {/* LUXURY SPLIT HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          {/* Subtle grid pattern */}
          <img src="/images/hero/about-hero-desktop.webp" alt="Professional insurance broker consultation environment" className="w-full h-full object-cover object-center opacity-60 mix-blend-overlay grayscale-[50%] absolute inset-0 z-0" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20 z-10" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
        </div>

        <div className="container relative z-20 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1 relative">
            {/* Portrait Frame with Luxury Glass Design */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-sky-500/20 rounded-[40px] blur-2xl transform scale-105" />
              <div className="relative bg-white/5 backdrop-blur-xl p-4 rounded-[40px] border border-white/10 shadow-2xl">
                <img
                  src="/about/portrait.jpg"
                  alt="Zachary Bradford, Licensed Insurance Broker"
                  className="w-full h-auto rounded-[24px] shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">NIPR Verified</p>
                    <p className="text-lg font-serif">18181266</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Independent Broker & Advocate
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-lg">
              Zach <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Bradford
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              I don't work for the insurance companies. I work for you. With 8+ years of experience, I secure enterprise-level coverage for families across 7 states.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <div className="text-3xl font-bold text-emerald-400 mb-1">8+</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Years Exp.</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <div className="text-3xl font-bold text-teal-400 mb-1">1k+</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Families</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <div className="text-3xl font-bold text-sky-400 mb-1">7</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">States</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="py-24 bg-slate-900 relative border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Why I Became <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Your Guide</span>
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
            <div className="relative z-10 space-y-8 text-lg text-slate-300 leading-relaxed font-light">
              <p>
                Like most people, I once thought health insurance was just a monthly bill you paid and hoped to never use. That changed in 2016 when a close friend's wife was diagnosed with aggressive cancer at 32.
              </p>
              <p>
                Their "affordable" plan became a nightmare: $8,000 deductibles, denied specialists, and mounting debt. Watching them choose between their home and her care changed me forever.
              </p>
              <blockquote className="border-l-4 border-emerald-500 pl-8 py-4 my-8 text-2xl font-serif italic text-white bg-white/5 rounded-r-2xl">
                "Every family deserves to sleep soundly. My job is to make protection affordable, understandable, and absolutely reliable."
              </blockquote>
              <p>
                I realized insurance isn't about premiums—it's about sleep. It's knowing that if the worst happens, the money is there. I became the advocate I wish they'd had: someone who reads the fine print so you don't have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEST INSURANCE GROUP PARTNERSHIP */}
      <section className="py-24 bg-slate-950 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Strategic Partnership</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Best Insurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-300">Group</span>
              </h2>
              <p className="text-xl text-slate-400 mb-8 font-light">
                Enterprise resources. Personal relationships.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <CheckCircle className="w-8 h-8 text-teal-400 shrink-0" />
                  <div>
                    <h3 className="text-white font-bold mb-2">Exclusive Carrier Networks</h3>
                    <p className="text-slate-400 text-sm">Access to premium insurance carriers and specialized networks unavailable to standard independent agents.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Shield className="w-8 h-8 text-teal-400 shrink-0" />
                  <div>
                    <h3 className="text-white font-bold mb-2">Enhanced Buying Power</h3>
                    <p className="text-slate-400 text-sm">Group purchasing power delivers better rates and enhanced coverage options for my clients.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-sky-500/20 blur-[100px] rounded-full" />
              <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[40px] flex flex-col items-center justify-center p-12 text-center shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-sky-600 rounded-3xl flex items-center justify-center shadow-2xl mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  <span className="text-white font-bold text-4xl font-serif">BiG</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Best Insurance Group</h3>
                <p className="text-teal-400 font-medium mb-8">Industry Leader Since 2005</p>
                <a href="https://bestinsurancegroup.net" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-semibold transition-colors">
                  Verify Partnership →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthoritySection />
    </main>
  );
}
