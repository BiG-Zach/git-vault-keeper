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
          
          {/* Career Timeline */}
          <Reveal delay={0.4}>
            <div className="mt-16">
              <h3 className="text-[1.75rem] font-[700] text-center mb-8 text-ink-900">Professional Journey & Milestones</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-lg font-[700] text-brand-jade-500 mb-2">2016</div>
                  <h4 className="text-[1rem] font-[600] text-ink-900 mb-2 leading-tight">Licensed Florida Broker</h4>
                  <p className="text-[0.875rem] text-slate-600 leading-relaxed">License W347851 obtained</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-lg font-[700] text-brand-sky-500 mb-2">2017-2024</div>
                  <h4 className="text-[1rem] font-[600] text-ink-900 mb-2 leading-tight">8+ Years Experience</h4>
                  <p className="text-[0.875rem] text-slate-600 leading-relaxed">Continuous service excellence</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-lg font-[700] text-brand-jade-500 mb-2">Present</div>
                  <h4 className="text-[1rem] font-[600] text-ink-900 mb-2 leading-tight">1,000+ Policies Placed</h4>
                  <p className="text-[0.875rem] text-slate-600 leading-relaxed">Trusted family advisor</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg border border-surface-glassLine" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-lg font-[700] text-brand-sky-500 mb-2">Achievement</div>
                  <h4 className="text-[1rem] font-[600] text-ink-900 mb-2 leading-tight">$50M+ Coverage</h4>
                  <p className="text-[0.875rem] text-slate-600 leading-relaxed">Comprehensive protection</p>
                </div>
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

      {/* PARTNERSHIP SECTION */}
      <section id="big-partnership" role="region" aria-labelledby="big-partnership-title" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <div className="bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
              <div className="text-center mb-8">
                <h2 id="big-partnership-title" className="text-3xl md:text-4xl font-bold mb-4">
                  Proudly Partnered with Best Insurance Group
                </h2>
                <p className="text-xl text-muted-foreground">
                  5 years of trusted collaboration serving families nationwide.
                </p>
              </div>
              
              {/* Logo + Badge Row */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">BiG</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Best Insurance Group</div>
                    <div className="text-sm text-muted-foreground">Industry Leader</div>
                  </div>
                </div>
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                  5-Year Partnership
                </div>
              </div>
              
              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Access to exclusive carrier networks</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Backed by an established industry leader</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Shared commitment to: Affordable • Personal • Transparent • Simple</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Enhanced buying power for better client rates</span>
                </div>
              </div>
              
              {/* Positioning Statements */}
              <div className="bg-muted/50 p-6 rounded-xl mb-6">
                <div className="space-y-3 text-center">
                  <p className="text-muted-foreground">
                    Bradford Informed Guidance reflects Best Insurance Group's commitment to personalized service.
                  </p>
                  <p className="text-muted-foreground">
                    Combining local expertise with national group strength.
                  </p>
                  <p className="text-muted-foreground font-semibold">
                    Your local agent with enterprise-level resources.
                  </p>
                </div>
              </div>
              
              {/* Timeline */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <div className="font-semibold text-primary">2019</div>
                  <div className="text-xs text-muted-foreground">Partnership begins</div>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <div className="font-semibold text-primary">2021</div>
                  <div className="text-xs text-muted-foreground">Expanded carrier access</div>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <div className="font-semibold text-primary">2023</div>
                  <div className="text-xs text-muted-foreground">Multi-state milestones</div>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <div className="font-semibold text-primary">2025</div>
                  <div className="text-xs text-muted-foreground">5-year mark</div>
                </div>
              </div>
              
              {/* Verification Link */}
              <div className="text-center">
                <a 
                  href="https://bestinsurancegroup.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Open Best Insurance Group website"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  Verify partnership at bestinsurancegroup.net →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - LUXURY UPGRADE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 max-w-6xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-[2.25rem] md:text-[2.25rem] font-[700] mb-4 text-ink-900">Families I've Protected</h2>
              <p className="text-[1.25rem] font-[400] text-slate-600">Real results for real families</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-lg border border-surface-glassLine hover:shadow-luxury transition-all duration-300"
                   style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <div className="text-6xl text-brand-jade-500/20 leading-none mb-4">"</div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[1rem] text-slate-700 mb-4 leading-[1.7]">Bradford saved us $2,520 per year while keeping our pediatrician and improving our coverage. We couldn't believe the difference!</p>
                <div className="border-t border-surface-glassLine pt-4">
                  <h3 className="font-[600] text-ink-900 mb-1">The Johnson Family</h3>
                  <div className="text-[0.875rem] text-slate-500 mb-2">Tampa, FL</div>
                  <div className="text-[0.875rem] font-[600] text-brand-jade-500">Saved: $210/month</div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="bg-white p-8 rounded-lg border border-surface-glassLine hover:shadow-luxury transition-all duration-300"
                   style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <div className="text-6xl text-brand-sky-500/20 leading-none mb-4">"</div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[1rem] text-slate-700 mb-4 leading-[1.7]">As a contractor, I thought good insurance was impossible to afford. Bradford found me comprehensive coverage for half what I was quoted elsewhere.</p>
                <div className="border-t border-surface-glassLine pt-4">
                  <h3 className="font-[600] text-ink-900 mb-1">Self-Employed Contractor</h3>
                  <div className="text-[0.875rem] text-slate-500 mb-2">Detroit, MI</div>
                  <div className="text-[0.875rem] font-[600] text-brand-sky-500">Saved: $180/month</div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="bg-white p-8 rounded-lg border border-surface-glassLine hover:shadow-luxury transition-all duration-300"
                   style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <div className="text-6xl text-brand-jade-500/20 leading-none mb-4">"</div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[1rem] text-slate-700 mb-4 leading-[1.7]">Bradford helped us navigate Medicare options and supplemental coverage. His patience and expertise gave us complete peace of mind.</p>
                <div className="border-t border-surface-glassLine pt-4">
                  <h3 className="font-[600] text-ink-900 mb-1">Retiree Couple</h3>
                  <div className="text-[0.875rem] text-slate-500 mb-2">Sarasota, FL</div>
                  <div className="text-[0.875rem] font-[600] text-brand-jade-500">Saved: $150/month</div>
                </div>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={0.4}>
            <div className="grid md:grid-cols-3 gap-8 p-12 bg-gradient-to-r from-brand-jade-500/5 to-brand-sky-500/5 rounded-lg border border-brand-jade-500/10">
              <div className="text-center">
                <div className="text-[2.5rem] md:text-[3rem] font-[700] text-brand-jade-500 mb-2">$2,500+</div>
                <div className="text-[1rem] font-[500] text-slate-600">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-[2.5rem] md:text-[3rem] font-[700] text-brand-sky-500 mb-2">98%</div>
                <div className="text-[1rem] font-[500] text-slate-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-[2.5rem] md:text-[3rem] font-[700] text-brand-jade-500 mb-2">24hrs</div>
                <div className="text-[1rem] font-[500] text-slate-600">Average Response Time</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GEOGRAPHIC SERVICE AREA */}
      <section className="py-20 bg-ink-900 text-white">
        <div className="container mx-auto px-5 max-w-6xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-[2.25rem] md:text-[2.25rem] font-[700] mb-4 text-white">Geographic Service Excellence</h2>
              <p className="text-[1.25rem] font-[400] text-white/90">Licensed expertise across three key markets</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-brand-jade-500 text-white text-[0.75rem] font-[600] rounded-full mb-4">
                    Home Market
                  </div>
                  <h3 className="text-[1.5rem] font-[700] text-white mb-2">Florida</h3>
                  <p className="text-[1.125rem] font-[500] text-brand-jade-300 mb-4">Primary Market - Tampa Bay Focus</p>
                </div>
                <p className="text-[1rem] text-white/80 leading-[1.7]">Comprehensive statewide coverage with specialized Tampa Bay area expertise</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-brand-sky-500 text-white text-[0.75rem] font-[600] rounded-full mb-4">
                    Full Coverage
                  </div>
                  <h3 className="text-[1.5rem] font-[700] text-white mb-2">Michigan</h3>
                  <p className="text-[1.125rem] font-[500] text-brand-sky-300 mb-4">Comprehensive Statewide Coverage</p>
                </div>
                <p className="text-[1rem] text-white/80 leading-[1.7]">Full state licensed service with deep understanding of Michigan healthcare needs</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-brand-jade-500 text-white text-[0.75rem] font-[600] rounded-full mb-4">
                    Statewide
                  </div>
                  <h3 className="text-[1.5rem] font-[700] text-white mb-2">North Carolina</h3>
                  <p className="text-[1.125rem] font-[500] text-brand-jade-300 mb-4">Full State Licensed Service</p>
                </div>
                <p className="text-[1rem] text-white/80 leading-[1.7]">Complete North Carolina market access with personalized local service</p>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={0.4}>
            <div className="text-center mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <h3 className="text-[1.5rem] font-[700] text-white mb-4">Expanding Nationwide</h3>
              <p className="text-[1.125rem] text-white/90 leading-[1.7]">
                Currently pursuing additional state licenses to serve families across America. 
                Contact us to learn about coverage options in your state.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY FAMILIES CHOOSE BRADFORD */}
      <section className="py-20 bg-surface-base">
        <div className="container mx-auto px-5 max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-[2.25rem] md:text-[2.25rem] font-[700] mb-4 text-ink-900">Why Families Choose Bradford</h2>
              <p className="text-[1.25rem] font-[400] text-slate-600">Personal service with professional expertise</p>
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
      <section className="py-20 bg-gradient-to-r from-brand-sky-500 to-ink-900 text-white">
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

      {/* TESTIMONIAL REEL */}
      <section className="py-16">
        <TestimonialReel />
      </section>
    </main>
  );
}