import { BRAND } from "../lib/brand";
import TestimonialReel from "../components/social/TestimonialReel";
import { Shield, Award, Users, TrendingUp, Phone, Mail, Calendar, Star, CheckCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import CalendlyInline from "../components/CalendlyInline";
import AboutHero from "../components/about/AboutHero";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* ENHANCED HERO SECTION WITH PROFESSIONAL BACKGROUND */}
      <AboutHero />

      {/* PROFESSIONAL HEADSHOT SECTION - LUXURY ENHANCED */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center max-w-6xl mx-auto">
            <Reveal>
              <div className="relative">
                <img 
                  src="/about/portrait.jpg" 
                  alt="Zachary Bradford - Insurance Expert" 
                  width="500" 
                  height="600" 
                  className="w-full h-auto rounded-lg" 
                  style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)' }}
                  loading="eager"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 text-white px-4 py-2 rounded-lg shadow-luxury">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">Licensed Expert</span>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div>
                <h1 className="text-[2rem] md:text-[2.25rem] lg:text-[3rem] font-[700] tracking-[-0.02em] leading-tight mb-6 text-ink-900">
                  Your Insurance Advocate & 
                  <span className="block text-brand-jade-500">Family Protection Expert</span>
                </h1>
                
                <div className="grid grid-cols-3 gap-6 mb-6 p-8 bg-white rounded-lg border border-surface-glassLine" 
                     style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-[700] text-brand-jade-500">8+</div>
                    <div className="text-sm font-[500] text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-[700] text-brand-jade-500">1,000+</div>
                    <div className="text-sm font-[500] text-slate-600">Families Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-[700] text-brand-jade-500">3</div>
                    <div className="text-sm font-[500] text-slate-600">States Licensed</div>
                  </div>
                </div>
                
                <p className="text-[1.125rem] md:text-[1.25rem] font-[400] text-slate-600 mb-8 leading-[1.7]">
                  Turning insurance confusion into family confidence across Florida, Michigan, and North Carolina.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={BRAND.phoneTel} 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 text-white px-8 py-4 rounded-xl font-[600] transition-all duration-300"
                    style={{ boxShadow: '0 4px 12px rgba(18, 191, 174, 0.3)' }}
                  >
                    <Phone className="w-5 h-5" />
                    Call Now: {BRAND.phoneHuman}
                  </a>
                  <a 
                    href={`mailto:${BRAND.email}`}
                    className="inline-flex items-center gap-2 border-2 border-brand-jade-500 text-brand-jade-500 px-8 py-4 rounded-xl font-[600] hover:bg-brand-jade-500 hover:text-white transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    Email Expert
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PERSONAL STORY SECTION - LUXURY UPGRADE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-[2.25rem] md:text-[2.25rem] font-[700] mb-4 text-ink-900">Why I Became Your Insurance Guide</h2>
              <p className="text-[1.25rem] font-[400] text-slate-600">From confused consumer to trusted expert</p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="max-w-none text-center">
              <p className="text-[1.125rem] leading-[1.7] mb-6 text-slate-700">
                Like most people, I once thought insurance was just another monthly bill—confusing, expensive, and something to avoid thinking about. That changed when a friend's family faced a medical crisis without adequate coverage.
              </p>
              <p className="text-[1.125rem] leading-[1.7] mb-6 text-slate-700">
                Watching them struggle with mountains of debt that proper insurance could have prevented was my wake-up call. I realized that insurance isn't about policies and premiums—it's about protecting the people and dreams that matter most.
              </p>
              <p className="text-[1.125rem] leading-[1.7] mb-8 text-slate-700">
                That experience led me to become the insurance advocate I wish every family had: someone who explains options clearly, does the math honestly, and always puts your family's needs first. Because your peace of mind is worth more than any commission.
              </p>
              
              <div className="bg-gradient-to-r from-brand-jade-500/10 to-brand-sky-500/10 p-8 rounded-lg border border-brand-jade-500/20">
                <h3 className="text-[1.75rem] font-[700] mb-4 text-brand-jade-500">My Family Protection Philosophy</h3>
                <p className="text-[1.125rem] italic text-slate-700">
                  "Every family deserves to sleep soundly knowing they're protected. My job is to make that protection affordable, understandable, and absolutely reliable."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST BADGES & CREDENTIALS */}
      <section className="py-20 bg-surface-base">
        <div className="container mx-auto px-5 max-w-6xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-[2.25rem] md:text-[2.25rem] font-[700] mb-4 text-ink-900">Professional Credentials & Trust Signals</h2>
              <p className="text-[1.25rem] font-[400] text-slate-600">Verified expertise you can rely on</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Reveal delay={0.1}>
              <div className="p-8 bg-white rounded-lg border border-surface-glassLine hover:shadow-luxury transition-all duration-300"
                   style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[1.125rem] font-[700] text-brand-jade-500 mb-1">Licensed Florida Broker</h3>
                    <div className="text-[0.875rem] font-[600] text-slate-500 mb-2">W347851</div>
                    <p className="text-[0.875rem] text-slate-600 leading-relaxed">State verified insurance professional</p>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="p-8 bg-white rounded-lg border border-surface-glassLine hover:shadow-luxury transition-all duration-300"
                   style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[1.125rem] font-[700] text-brand-sky-500 mb-1">8+ Years Experience</h3>
                    <div className="text-[0.875rem] font-[600] text-slate-500 mb-2">Since 2016</div>
                    <p className="text-[0.875rem] text-slate-600 leading-relaxed">Proven track record of excellence</p>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="p-8 bg-white rounded-lg border border-surface-glassLine hover:shadow-luxury transition-all duration-300"
                   style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[1.125rem] font-[700] text-brand-jade-500 mb-1">1,000+ Families Served</h3>
                    <div className="text-[0.875rem] font-[600] text-slate-500 mb-2">Growing Daily</div>
                    <p className="text-[0.875rem] text-slate-600 leading-relaxed">Trusted by families across 3 states</p>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="p-8 bg-white rounded-lg border border-surface-glassLine hover:shadow-luxury transition-all duration-300"
                   style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[1.125rem] font-[700] text-brand-sky-500 mb-1">A+ Rated Carrier Partners</h3>
                    <div className="text-[0.875rem] font-[600] text-slate-500 mb-2">Top Tier Networks</div>
                    <p className="text-[0.875rem] text-slate-600 leading-relaxed">Exclusive access to premium carriers</p>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.5}>
              <div className="p-8 bg-white rounded-lg border border-surface-glassLine hover:shadow-luxury transition-all duration-300"
                   style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[1.125rem] font-[700] text-brand-jade-500 mb-1">Licensed & Bonded</h3>
                    <div className="text-[0.875rem] font-[600] text-slate-500 mb-2">Full Protection</div>
                    <p className="text-[0.875rem] text-slate-600 leading-relaxed">Complete regulatory compliance</p>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.6}>
              <div className="p-8 bg-white rounded-lg border border-surface-glassLine hover:shadow-luxury transition-all duration-300"
                   style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[1.125rem] font-[700] text-brand-sky-500 mb-1">$50M+ Coverage Placed</h3>
                    <div className="text-[0.875rem] font-[600] text-slate-500 mb-2">Industry Leading</div>
                    <p className="text-[0.875rem] text-slate-600 leading-relaxed">Comprehensive protection delivered</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          
          {/* EXPERTISE & SPECIALIZATION SHOWCASE */}
          <Reveal delay={0.7}>
            <div className="bg-gradient-to-b from-surface-base to-white p-12 rounded-lg">
              <h3 className="text-[1.75rem] font-[700] mb-8 text-center text-ink-900">Service Specializations</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-[1.125rem] font-[600] text-ink-900 mb-2">Individual Health Insurance</h4>
                  <p className="text-[0.875rem] text-slate-600 leading-relaxed">Comprehensive individual and family health plans</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-[1.125rem] font-[600] text-ink-900 mb-2">Family Coverage Plans</h4>
                  <p className="text-[0.875rem] text-slate-600 leading-relaxed">Tailored protection for growing families</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-[1.125rem] font-[600] text-ink-900 mb-2">Life Insurance Solutions</h4>
                  <p className="text-[0.875rem] text-slate-600 leading-relaxed">Term and permanent life insurance options</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-[1.125rem] font-[600] text-ink-900 mb-2">Medicare Guidance</h4>
                  <p className="text-[0.875rem] text-slate-600 leading-relaxed">Expert Medicare and supplement planning</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-[1.125rem] font-[600] text-ink-900 mb-2">Small Business Plans</h4>
                  <p className="text-[0.875rem] text-slate-600 leading-relaxed">Group health and business insurance solutions</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-[1.125rem] font-[600] text-ink-900 mb-2">PPO Network Access</h4>
                  <p className="text-[0.875rem] text-slate-600 leading-relaxed">Extensive provider networks and flexibility</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNERSHIP SECTION - WORLD CLASS */}
      <section id="big-partnership" role="region" aria-labelledby="big-partnership-title" className="relative py-24 md:py-32 overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-jade-500/10 via-brand-sky-500/15 to-brand-jade-600/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-jade-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-sky-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 max-w-7xl">
          <Reveal>
            {/* Premium Card Container */}
            <div className="bg-white/80 backdrop-blur-xl p-12 md:p-16 rounded-3xl border border-white/30 shadow-luxury relative overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-jade-500/3 to-brand-sky-500/3 rounded-3xl"></div>
              
              <div className="relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-jade-500/10 to-brand-sky-500/10 rounded-full border border-brand-jade-500/20 mb-8">
                    <div className="w-2 h-2 bg-brand-jade-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-brand-jade-600">Strategic Partnership</span>
                  </div>
                  
                  <h2 id="big-partnership-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-brand-jade-500 via-brand-sky-500 to-brand-jade-600 bg-clip-text text-transparent">
                      Proudly Partnered with
                    </span>
                    <br />
                    <span className="text-ink-900 font-luxury-serif">Best Insurance Group</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    5 years of trusted collaboration serving families nationwide with enterprise-level resources.
                  </p>
                </div>
                
                {/* Premium Logo Section */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-brand-jade-500 to-brand-sky-500 rounded-2xl flex items-center justify-center shadow-luxury relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <span className="relative text-white font-bold text-2xl font-luxury-serif">BiG</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-jade-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-ink-900 mb-1">Best Insurance Group</div>
                      <div className="text-brand-sky-500 font-semibold">Industry Leader Since 2005</div>
                    </div>
                  </div>
                  
                  <div className="px-8 py-4 bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 text-white rounded-2xl font-bold text-lg shadow-glow relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                    <span className="relative">5-Year Partnership</span>
                  </div>
                </div>
                
                {/* Premium Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="group p-6 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-2xl border border-white/40 hover:shadow-premium transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-jade-500 to-brand-jade-600 rounded-xl flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-ink-900 mb-2">Exclusive Carrier Networks</h4>
                        <p className="text-slate-600 leading-relaxed">Access to premium insurance carriers and specialized networks unavailable to independent agents.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-6 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-2xl border border-white/40 hover:shadow-premium transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-sky-500 to-brand-sky-600 rounded-xl flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-ink-900 mb-2">Industry Leadership</h4>
                        <p className="text-slate-600 leading-relaxed">Backed by an established industry leader with nationwide presence and proven track record.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-6 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-2xl border border-white/40 hover:shadow-premium transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-jade-500 to-brand-sky-500 rounded-xl flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-ink-900 mb-2">Shared Values</h4>
                        <p className="text-slate-600 leading-relaxed">United commitment to affordable, personal, transparent, and simple insurance solutions.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-6 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-2xl border border-white/40 hover:shadow-premium transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-sky-500 to-brand-jade-500 rounded-xl flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-ink-900 mb-2">Enhanced Buying Power</h4>
                        <p className="text-slate-600 leading-relaxed">Group purchasing power delivers better rates and enhanced coverage options for clients.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Value Proposition */}
                <div className="p-8 bg-gradient-to-r from-brand-jade-500/5 to-brand-sky-500/5 rounded-2xl border border-brand-jade-500/20 mb-12">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-ink-900 mb-4">The Perfect Partnership</h3>
                    <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
                      Bradford Informed Guidance combines <span className="font-semibold text-brand-jade-600">local expertise and personal touch</span> with 
                      <span className="font-semibold text-brand-sky-600"> Best Insurance Group's enterprise-level resources</span> and carrier relationships.
                    </p>
                    <p className="text-xl font-semibold text-brand-jade-600">
                      Your local agent with national group strength.
                    </p>
                  </div>
                </div>
                
                {/* Premium Timeline */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-center text-ink-900 mb-8">Partnership Milestones</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-brand-jade-500/10 to-brand-jade-600/5 rounded-2xl border border-brand-jade-500/20 hover:shadow-premium transition-all duration-300">
                      <div className="text-3xl font-bold text-brand-jade-500 mb-2">2019</div>
                      <div className="text-sm font-semibold text-slate-600">Partnership Begins</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-brand-sky-500/10 to-brand-sky-600/5 rounded-2xl border border-brand-sky-500/20 hover:shadow-premium transition-all duration-300">
                      <div className="text-3xl font-bold text-brand-sky-500 mb-2">2021</div>
                      <div className="text-sm font-semibold text-slate-600">Expanded Access</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-brand-jade-500/10 to-brand-jade-600/5 rounded-2xl border border-brand-jade-500/20 hover:shadow-premium transition-all duration-300">
                      <div className="text-3xl font-bold text-brand-jade-500 mb-2">2023</div>
                      <div className="text-sm font-semibold text-slate-600">Multi-State Growth</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-brand-sky-500/10 to-brand-sky-600/5 rounded-2xl border border-brand-sky-500/20 hover:shadow-premium transition-all duration-300">
                      <div className="text-3xl font-bold text-brand-sky-500 mb-2">2025</div>
                      <div className="text-sm font-semibold text-slate-600">5-Year Mark</div>
                    </div>
                  </div>
                </div>
                
                {/* Verification Link */}
                <div className="text-center">
                  <a 
                    href="https://bestinsurancegroup.net" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Open Best Insurance Group website"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 text-white font-bold text-lg rounded-2xl shadow-glow hover:shadow-luxury transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Verify Partnership</span>
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">→</span>
                    </div>
                  </a>
                  <p className="text-sm text-slate-500 mt-3">bestinsurancegroup.net</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>



      {/* WHY FAMILIES CHOOSE BRADFORD */}
      <section className="py-20 bg-surface-base">
        <div className="container mx-auto px-5 max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                Why Families Choose Bradford
              </h2>
              <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Personal service with professional expertise
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <h3 className="text-[1.25rem] font-[600] mb-4 text-brand-jade-500">Deep Community Roots</h3>
                <p className="text-[1rem] text-slate-700 leading-[1.7]">
                  Born and raised in the communities I serve. I understand the unique challenges families face in Florida, Michigan, and North Carolina because I live them too.
                </p>
              </div>
              
              <div className="p-8 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <h3 className="text-[1.25rem] font-[600] mb-4 text-brand-sky-500">Family-First Approach</h3>
                <p className="text-[1rem] text-slate-700 leading-[1.7]">
                  Every recommendation I make, I consider: "Would I recommend this to my own family?" Your protection is personal to me.
                </p>
              </div>
              
              <div className="p-8 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <h3 className="text-[1.25rem] font-[600] mb-4 text-brand-jade-500">Local Commitment</h3>
                <p className="text-[1rem] text-slate-700 leading-[1.7]">
                  While insurance companies come and go, I'm here for the long haul. Your agent today, your advocate for years to come.
                </p>
              </div>
              
              <div className="p-8 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <h3 className="text-[1.25rem] font-[600] mb-4 text-brand-sky-500">Always Available</h3>
                <p className="text-[1rem] text-slate-700 leading-[1.7]">
                  Real person, real phone number, real responses. When you call, you get me—not a call center or voicemail system.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA SECTION - LUXURY TRANSFORMATION */}
      <section className="py-20 bg-gradient-to-br from-brand-sky-500 via-brand-jade-500 to-brand-sky-600 text-white relative overflow-hidden">
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-slate-900/40 to-black/60 backdrop-blur-[0.5px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="container mx-auto px-5 max-w-5xl text-center">
          <Reveal>
            <h2 className="text-[2.5rem] md:text-[3rem] font-[700] mb-6 leading-tight">
              Ready to Secure Your Family's Future?
            </h2>
            <p className="text-[1.25rem] font-[400] mb-12 opacity-95 leading-[1.7] max-w-3xl mx-auto">
              Let's start with a conversation. No pressure, no sales pitch—just honest guidance you can trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a 
                href={BRAND.phoneTel}
                className="inline-flex items-center gap-3 bg-white text-ink-900 px-10 py-5 rounded-lg font-[600] text-[1.125rem] hover:bg-white/95 transition-all duration-300"
                style={{ boxShadow: '0 8px 20px rgba(255, 255, 255, 0.4)' }}
              >
                <Phone className="w-6 h-6" />
                Call {BRAND.phoneHuman}
              </a>
              <a 
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-5 rounded-lg font-[600] text-[1.125rem] hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
                Email Bradford
              </a>
              <a 
                href="/lead"
                className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-5 rounded-lg font-[600] text-[1.125rem] hover:bg-white/10 transition-all duration-300"
              >
                <Calendar className="w-6 h-6" />
                Schedule Consultation
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 max-w-2xl mx-auto">
              <p className="text-[1.25rem] font-[700] mb-3">100% Risk-Free Consultation Guarantee</p>
              <p className="text-[1.125rem] opacity-90 leading-[1.7]">
                No cost, no obligation, no pressure. Just expert guidance to help you make the best decision for your family.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}