import { BRAND } from "../lib/brand";
import TestimonialReel from "../components/social/TestimonialReel";
import { Shield, Award, Users, TrendingUp, Phone, Mail, Calendar, Star, CheckCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import CalendlyInline from "../components/CalendlyInline";
import AboutHero from "../components/about/AboutHero";
import Magnetic from "../components/ui/Magnetic";

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

      {/* PARTNERSHIP SECTION - WORLD CLASS LUXURY */}
      <section id="big-partnership" role="region" aria-labelledby="big-partnership-title" className="relative py-24 md:py-32 overflow-hidden bg-[hsl(220,26%,14%)]">
        {/* Premium Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,26%,14%)] via-[hsl(220,20%,10%)] to-[hsl(220,26%,14%)]"></div>
        
        {/* Ambient Light Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[hsl(157,72%,43%)]/15 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[hsl(224,100%,32%)]/15 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[hsl(157,72%,43%)]/5 via-transparent to-[hsl(224,100%,32%)]/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Geometric Accents */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 border border-white/10 rotate-12 translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 border border-white/5 rotate-45 -translate-x-40 translate-y-40"></div>
        </div>
        
        <div className="relative container mx-auto px-6 max-w-7xl z-10">
          <Reveal>
            {/* Luxury Glass Card Container */}
            <div className="bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-3xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] relative overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-[hsl(157,72%,43%)]/5 rounded-3xl opacity-60"></div>
              
              <div className="relative z-10">
                {/* Luxury Header Section */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[hsl(157,72%,43%)]/20 to-[hsl(224,100%,32%)]/20 rounded-full border border-white/20 mb-8 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-[hsl(157,72%,43%)] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-white/90">Strategic Partnership</span>
                  </div>
                  
                  <h2 id="big-partnership-title" className="font-luxury-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-[hsl(157,72%,43%)] via-[hsl(157,72%,53%)] to-[hsl(224,100%,32%)] bg-clip-text text-transparent">
                      Proudly Partnered with
                    </span>
                    <br />
                    <span className="text-white font-luxury-serif">Best Insurance Group</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                    5 years of trusted collaboration serving families nationwide with 
                    <span className="text-white font-medium"> enterprise-level resources.</span>
                  </p>
                </div>
                
                {/* Premium Logo Section */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="w-28 h-28 bg-gradient-to-br from-[hsl(157,72%,43%)] to-[hsl(224,100%,32%)] rounded-3xl flex items-center justify-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <span className="relative text-white font-bold text-3xl font-luxury-serif">BiG</span>
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-[hsl(157,72%,43%)] rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">Best Insurance Group</div>
                      <div className="text-[hsl(157,72%,53%)] font-semibold text-lg">Industry Leader Since 2005</div>
                    </div>
                  </div>
                  
                  <Magnetic strength={10}>
                    <div className="px-10 py-5 bg-gradient-to-r from-[hsl(157,72%,43%)] to-[hsl(224,100%,32%)] text-white rounded-2xl font-bold text-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative">5-Year Partnership</span>
                    </div>
                  </Magnetic>
                </div>
                
                {/* Premium Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="group p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/15 transition-all duration-500 shadow-lg">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-[hsl(157,72%,43%)] to-[hsl(157,72%,38%)] rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">Exclusive Carrier Networks</h4>
                        <p className="text-white/70 leading-relaxed">Access to premium insurance carriers and specialized networks unavailable to independent agents.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/15 transition-all duration-500 shadow-lg">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-[hsl(224,100%,32%)] to-[hsl(215,88%,39%)] rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">Industry Leadership</h4>
                        <p className="text-white/70 leading-relaxed">Backed by an established industry leader with nationwide presence and proven track record.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/15 transition-all duration-500 shadow-lg">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-[hsl(157,72%,43%)] to-[hsl(224,100%,32%)] rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">Shared Values</h4>
                        <p className="text-white/70 leading-relaxed">United commitment to affordable, personal, transparent, and simple insurance solutions.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/15 transition-all duration-500 shadow-lg">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-[hsl(224,100%,32%)] to-[hsl(157,72%,43%)] rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">Enhanced Buying Power</h4>
                        <p className="text-white/70 leading-relaxed">Group purchasing power delivers better rates and enhanced coverage options for clients.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Luxury Value Proposition */}
                <div className="p-10 bg-gradient-to-r from-[hsl(157,72%,43%)]/10 to-[hsl(224,100%,32%)]/10 rounded-3xl border border-white/15 mb-16 backdrop-blur-sm">
                  <div className="text-center space-y-6">
                    <h3 className="font-luxury-serif text-3xl font-bold text-white mb-6">The Perfect Partnership</h3>
                    <p className="text-lg text-white/80 leading-relaxed max-w-4xl mx-auto">
                      Bradford Informed Guidance combines <span className="font-semibold text-[hsl(157,72%,53%)]">local expertise and personal touch</span> with 
                      <span className="font-semibold text-[hsl(224,100%,50%)]"> Best Insurance Group's enterprise-level resources</span> and carrier relationships.
                    </p>
                    <p className="text-xl font-semibold text-[hsl(157,72%,53%)]">
                      Your local agent with national group strength.
                    </p>
                  </div>
                </div>
                
                {/* Premium Timeline */}
                <div className="mb-16">
                  <h3 className="font-luxury-serif text-3xl font-bold text-center text-white mb-12">Partnership Milestones</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-8 bg-gradient-to-br from-[hsl(157,72%,43%)]/15 to-[hsl(157,72%,43%)]/5 rounded-3xl border border-white/10 hover:bg-gradient-to-br hover:from-[hsl(157,72%,43%)]/20 hover:to-[hsl(157,72%,43%)]/10 transition-all duration-500 backdrop-blur-sm">
                      <div className="text-4xl font-bold text-[hsl(157,72%,53%)] mb-3">2019</div>
                      <div className="text-sm font-semibold text-white/80">Partnership Begins</div>
                    </div>
                    <div className="text-center p-8 bg-gradient-to-br from-[hsl(224,100%,32%)]/15 to-[hsl(224,100%,32%)]/5 rounded-3xl border border-white/10 hover:bg-gradient-to-br hover:from-[hsl(224,100%,32%)]/20 hover:to-[hsl(224,100%,32%)]/10 transition-all duration-500 backdrop-blur-sm">
                      <div className="text-4xl font-bold text-[hsl(224,100%,50%)] mb-3">2021</div>
                      <div className="text-sm font-semibold text-white/80">Expanded Access</div>
                    </div>
                    <div className="text-center p-8 bg-gradient-to-br from-[hsl(157,72%,43%)]/15 to-[hsl(157,72%,43%)]/5 rounded-3xl border border-white/10 hover:bg-gradient-to-br hover:from-[hsl(157,72%,43%)]/20 hover:to-[hsl(157,72%,43%)]/10 transition-all duration-500 backdrop-blur-sm">
                      <div className="text-4xl font-bold text-[hsl(157,72%,53%)] mb-3">2023</div>
                      <div className="text-sm font-semibold text-white/80">Multi-State Growth</div>
                    </div>
                    <div className="text-center p-8 bg-gradient-to-br from-[hsl(224,100%,32%)]/15 to-[hsl(224,100%,32%)]/5 rounded-3xl border border-white/10 hover:bg-gradient-to-br hover:from-[hsl(224,100%,32%)]/20 hover:to-[hsl(224,100%,32%)]/10 transition-all duration-500 backdrop-blur-sm">
                      <div className="text-4xl font-bold text-[hsl(224,100%,50%)] mb-3">2025</div>
                      <div className="text-sm font-semibold text-white/80">5-Year Mark</div>
                    </div>
                  </div>
                </div>
                
                {/* Luxury Verification Link */}
                <div className="text-center">
                  <Magnetic strength={15}>
                    <a 
                      href="https://bestinsurancegroup.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Open Best Insurance Group website"
                      className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[hsl(157,72%,43%)] to-[hsl(224,100%,32%)] text-white font-bold text-xl rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative">Verify Partnership</span>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center relative">
                        <span className="text-lg">→</span>
                      </div>
                    </a>
                  </Magnetic>
                  <p className="text-sm text-white/60 mt-4 font-medium">bestinsurancegroup.net</p>
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-white/15 rounded-tl-2xl"></div>
              <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-white/15 rounded-tr-2xl"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-white/15 rounded-bl-2xl"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-white/15 rounded-br-2xl"></div>
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

      {/* LUXURY CTA SECTION - WORLD CLASS DESIGN */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[hsl(220,26%,14%)]">
        {/* Premium Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,26%,14%)] via-[hsl(220,20%,10%)] to-[hsl(220,26%,14%)]"></div>
        
        {/* Ambient Light Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[hsl(157,72%,43%)]/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[hsl(224,100%,32%)]/20 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        {/* Geometric Accents */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 border border-white/10 rotate-45 translate-x-36 -translate-y-36"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 border border-white/5 rotate-12 -translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="relative container mx-auto px-6 max-w-6xl z-10">
          <div className="text-center">
            <Reveal>
              {/* Luxury Typography */}
              <div className="mb-16">
                <h2 className="font-luxury-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                  Ready to Secure Your 
                  <span className="block bg-gradient-to-r from-[hsl(157,72%,43%)] via-[hsl(157,72%,53%)] to-[hsl(224,100%,32%)] bg-clip-text text-transparent font-bold">
                    Family&apos;s Future?
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
                  Let's start with a conversation. No pressure, no sales pitch—just honest guidance 
                  <span className="text-white font-medium"> you can trust.</span>
                </p>
              </div>
              
              {/* Premium CTA Buttons */}
              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-20">
                <Magnetic strength={15}>
                  <a 
                    href={BRAND.phoneTel}
                    className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[hsl(157,72%,43%)] to-[hsl(157,72%,38%)] text-white px-12 py-6 rounded-2xl font-semibold text-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden min-w-[280px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Phone className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">Call {BRAND.phoneHuman}</span>
                  </a>
                </Magnetic>
                
                <Magnetic strength={12}>
                  <a 
                    href={`mailto:${BRAND.email}`}
                    className="group relative inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] min-w-[280px]"
                  >
                    <Mail className="w-6 h-6" />
                    <span>Email Bradford</span>
                  </a>
                </Magnetic>
                
                <Magnetic strength={12}>
                  <a 
                    href="/lead"
                    className="group relative inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/15 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:bg-white/15 hover:border-white/25 transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] min-w-[280px]"
                  >
                    <Calendar className="w-6 h-6" />
                    <span>Schedule Consultation</span>
                  </a>
                </Magnetic>
              </div>
              
              {/* Luxury Guarantee Box */}
              <div className="relative max-w-4xl mx-auto">
                {/* Glass Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-[hsl(157,72%,43%)]/5 opacity-60"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[hsl(157,72%,43%)] to-[hsl(224,100%,32%)] flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-luxury-serif text-2xl md:text-3xl font-bold text-white">
                        100% Risk-Free Consultation
                      </h3>
                    </div>
                    
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                      No cost, no obligation, no pressure. Just expert guidance to help you make 
                      <span className="text-[hsl(157,72%,53%)] font-medium"> the best decision for your family.</span>
                    </p>
                    
                    {/* Premium Accent Line */}
                    <div className="mt-8 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[hsl(157,72%,43%)] to-transparent"></div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/20 rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/20 rounded-bl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  );
}