import { BRAND } from "../lib/brand";
import { Shield, Award, Users, TrendingUp, Phone, Mail, Calendar, Star, CheckCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import AboutHero from "../components/about/AboutHero";
import Magnetic from "../components/ui/Magnetic";
import VerificationBadge from "../components/trust/VerificationBadge";
import SEO from "../components/SEO";
import { organizationSchema, serviceSchema } from "../utils/schema";

export default function AboutPage() {
  const structuredData = [
    organizationSchema(),
    serviceSchema(['Health Insurance Advisory', 'Life Insurance Planning', 'Insurance Broker Services'])
  ];

  return (
    <main className="min-h-screen">
      <SEO
        title="About Bradford Informed Guidance | Licensed Health & Life Insurance Broker"
        description="Meet Zach Bradford, licensed health and life insurance broker guiding 1,000+ families with PPO health plans, life insurance layering, and concierge support across FL, MI, NC, AZ, TX, and GA."
        path="/about"
        meta={[
          {
            name: 'keywords',
            content: 'about bradford informed guidance, licensed insurance broker, Zach Bradford, health insurance expert, life insurance advisor, PPO broker'
          },
          { property: 'og:title', content: 'About Bradford Informed Guidance | Licensed Health & Life Insurance Broker' },
          {
            property: 'og:description',
            content: 'Learn about Zach Bradford and his concierge approach to health & life insurance planning across FL, MI, NC, AZ, TX, and GA.'
          }
        ]}
        scripts={structuredData.map(innerHTML => ({ innerHTML }))}
      />

      {/* ENHANCED HERO SECTION WITH PROFESSIONAL BACKGROUND */}
      <AboutHero />

      {/* PROFESSIONAL CREDENTIALS & BIO - LIGHT SECTION */}
      <section className="relative py-24 md:py-32 bg-slate-50/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
            {/* Strategic Portrait Positioning - Left Side for Maximum Impact */}
            <Reveal>
              <div className="relative group">
                {/* Portrait Frame with Clean Light Design */}
                <div className="relative">
                  {/* Professional Frame */}
                  <div className="relative bg-white p-4 rounded-3xl border border-slate-200 shadow-xl">
                    <img 
                      src="/about/portrait.jpg" 
                      alt="Zachary Bradford - Insurance Expert" 
                      width="500" 
                      height="600" 
                      className="w-full h-auto rounded-2xl" 
                      loading="eager"
                    />
                    
                    {/* Professional Badge */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[hsl(157,72%,43%)] to-[hsl(224,100%,32%)] text-white px-6 py-3 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6" />
                        <span className="font-bold text-lg">Licensed Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            
            {/* Content Section with Professional Typography */}
            <Reveal delay={0.2}>
              <div className="space-y-8">
                {/* Professional Header */}
                <div>
                  
                  <h1 className="font-luxury-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-900">
                    Independent Insurance Broker & 
                    <span className="block bg-gradient-to-r from-[hsl(157,72%,43%)] via-[hsl(157,72%,53%)] to-[hsl(224,100%,32%)] bg-clip-text text-transparent">
                      Trusted Family Advocate
                    </span>
                  </h1>
                </div>
                
                {/* Professional Stats Cards */}
                <div className="grid grid-cols-3 gap-4 p-8 bg-white rounded-2xl border border-slate-200 shadow-lg">
                  <div className="text-center group">
                    <div className="text-2xl md:text-3xl font-bold text-[hsl(157,72%,43%)] mb-2 group-hover:scale-110 transition-transform duration-300">8+</div>
                    <div className="text-xs md:text-sm font-semibold text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl md:text-3xl font-bold text-[hsl(224,100%,45%)] mb-2 group-hover:scale-110 transition-transform duration-300">1,000+</div>
                    <div className="text-xs md:text-sm font-semibold text-slate-600">Clients Protected</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl md:text-3xl font-bold text-[hsl(157,72%,43%)] mb-2 group-hover:scale-110 transition-transform duration-300">3</div>
                    <div className="text-xs md:text-sm font-semibold text-slate-600">States Licensed</div>
                  </div>
                </div>
                
                {/* Professional Description */}
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                  Simplifying health and life insurance with Best Insurance Group's resources and 
                  <span className="text-slate-900 font-medium">8 years of personal, transparent guidance.</span>
                </p>
                
                {/* Professional CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Magnetic strength={12}>
                    <a 
                      href={BRAND.phoneTel} 
                      className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[hsl(157,72%,43%)] to-[hsl(157,72%,38%)] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Phone className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">Call {BRAND.phoneHuman}</span>
                    </a>
                  </Magnetic>
                  
                  <Magnetic strength={10}>
                    <a 
                      href={`mailto:${BRAND.email}`}
                      className="inline-flex items-center gap-3 bg-white border border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </a>
                  </Magnetic>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-emerald-200/70 bg-emerald-50/40 p-8 md:p-12 text-center shadow-sm">
            <h2 className="font-luxury-serif text-3xl md:text-4xl font-semibold text-slate-900">
              Independently Verified Credentials
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600">
              Bradford Informed Guidance is independently listed on TrustMyProducer so you can confirm licensing and standing before we speak.
            </p>
            <div className="mt-6 flex justify-center">
              <VerificationBadge variant="full" />
            </div>
          </div>
        </div>
      </section>
      {/* PERSONAL STORY SECTION - LUXURY WORLD CLASS */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[hsl(220,26%,14%)]">
        {/* Premium Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,26%,14%)] via-[hsl(220,20%,10%)] to-[hsl(220,26%,14%)]"></div>
        
        {/* Ambient Light Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[hsl(157,72%,43%)]/12 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[hsl(224,100%,32%)]/12 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[hsl(157,72%,43%)]/5 via-transparent to-[hsl(224,100%,32%)]/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Geometric Accents */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-80 h-80 border border-white/10 rotate-12 translate-x-40 -translate-y-40"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 border border-white/5 rotate-45 -translate-x-32 translate-y-32"></div>
        </div>
        
        <div className="relative container mx-auto px-6 max-w-5xl z-10">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[hsl(157,72%,43%)]/20 to-[hsl(224,100%,32%)]/20 rounded-full border border-white/20 mb-8 backdrop-blur-sm">
                <div className="w-2 h-2 bg-[hsl(157,72%,43%)] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-white/90">Personal Journey</span>
              </div>
              
              <h2 className="font-luxury-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[hsl(157,72%,43%)] via-[hsl(157,72%,53%)] to-[hsl(224,100%,32%)] bg-clip-text text-transparent">
                  Why I Became Your<br />Insurance Guide
                </span>
              </h2>
              <p className="text-xl font-luxury-sans text-white/80 leading-relaxed max-w-2xl mx-auto">
                From confused consumer to trusted expert
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-white/90 font-luxury-sans">
                  Like most people, I once thought insurance was just another monthly bill—confusing, expensive, and something to avoid thinking about. That changed when a friend's family faced a medical crisis without adequate coverage.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-white/90 font-luxury-sans">
                  Watching them struggle with mountains of debt that proper insurance could have prevented was my wake-up call. I realized that insurance isn't about policies and premiums—it's about protecting the people and dreams that matter most.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-white/90 font-luxury-sans">
                  That experience led me to become the insurance advocate I wish every family had: someone who explains options clearly, does the math honestly, and always puts your family's needs first. Because your peace of mind is worth more than any commission.
                </p>
              </div>
              
              {/* Luxury Philosophy Card */}
              <div className="group relative mt-12">
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl backdrop-blur-xl border border-white/20"></div>
                
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(157,72%,43%)]/20 via-transparent to-[hsl(224,100%,32%)]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Card content */}
                <div className="relative p-8 md:p-12 rounded-2xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-1 bg-gradient-to-r from-[hsl(157,72%,43%)] to-[hsl(224,100%,32%)] rounded-full"></div>
                  </div>
                  
                  <h3 className="font-luxury-serif text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[hsl(157,72%,43%)] to-[hsl(224,100%,32%)] bg-clip-text text-transparent">
                    My Family Protection Philosophy
                  </h3>
                  
                  <blockquote className="text-xl md:text-2xl font-luxury-serif italic text-white/95 leading-relaxed">
                    "Every family deserves to sleep soundly knowing they're protected. My job is to make that protection affordable, understandable, and absolutely reliable."
                  </blockquote>
                  
                  <div className="flex items-center justify-center mt-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-[hsl(157,72%,43%)] to-[hsl(224,100%,32%)] rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROFESSIONAL PROCESS & APPROACH - LIGHT SECTION */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <Reveal>
            {/* Professional Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[hsl(157,72%,43%)]/10 rounded-full border border-[hsl(157,72%,43%)]/20 mb-8">
                <div className="w-2 h-2 bg-[hsl(157,72%,43%)] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-slate-700">Professional Excellence</span>
              </div>
              
              <h2 className="font-luxury-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
                Professional Credentials
                <br />
                <span className="bg-gradient-to-r from-[hsl(157,72%,43%)] via-[hsl(157,72%,53%)] to-[hsl(224,100%,32%)] bg-clip-text text-transparent">
                  & Service Process
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Verified expertise and <span className="text-slate-900 font-medium">proven methodology</span> you can rely on
              </p>
            </div>
          </Reveal>
          
          {/* Professional Credentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Reveal delay={0.1}>
              <Magnetic strength={8}>
                <div className="group p-10 bg-white rounded-3xl border border-slate-200 hover:border-[hsl(157,72%,43%)]/30 hover:shadow-xl transition-all duration-500 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(157,72%,43%)]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(157,72%,43%)] to-[hsl(157,72%,38%)] flex items-center justify-center shadow-lg shrink-0">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[hsl(157,72%,43%)] mb-2">Licensed Florida Broker</h3>
                        <div className="text-sm font-semibold text-slate-500 mb-3">W347851</div>
                        <p className="text-slate-600 leading-relaxed">State verified insurance professional</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Magnetic>
            </Reveal>
            
            <Reveal delay={0.2}>
              <Magnetic strength={8}>
                <div className="group p-10 bg-white rounded-3xl border border-slate-200 hover:border-[hsl(224,100%,32%)]/30 hover:shadow-xl transition-all duration-500 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(224,100%,32%)]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(224,100%,32%)] to-[hsl(215,88%,39%)] flex items-center justify-center shadow-lg shrink-0">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[hsl(224,100%,45%)] mb-2">8+ Years Experience</h3>
                        <div className="text-sm font-semibold text-slate-500 mb-3">Since 2016</div>
                        <p className="text-slate-600 leading-relaxed">Proven track record of excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Magnetic>
            </Reveal>
            
            <Reveal delay={0.3}>
              <Magnetic strength={8}>
                <div className="group p-10 bg-white rounded-3xl border border-slate-200 hover:border-[hsl(157,72%,43%)]/30 hover:shadow-xl transition-all duration-500 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(157,72%,43%)]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(157,72%,43%)] to-[hsl(224,100%,32%)] flex items-center justify-center shadow-lg shrink-0">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[hsl(157,72%,43%)] mb-2">1,000+ Families Served</h3>
                        <div className="text-sm font-semibold text-slate-500 mb-3">Growing Daily</div>
                        <p className="text-slate-600 leading-relaxed">Trusted by families across 3 states</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Magnetic>
            </Reveal>
            
            <Reveal delay={0.4}>
              <Magnetic strength={8}>
                <div className="group p-10 bg-white rounded-3xl border border-slate-200 hover:border-[hsl(224,100%,32%)]/30 hover:shadow-xl transition-all duration-500 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(224,100%,32%)]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(224,100%,32%)] to-[hsl(157,72%,43%)] flex items-center justify-center shadow-lg shrink-0">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[hsl(224,100%,45%)] mb-2">A+ Rated Carrier Partners</h3>
                        <div className="text-sm font-semibold text-slate-500 mb-3">Top Tier Networks</div>
                        <p className="text-slate-600 leading-relaxed">Exclusive access to premium carriers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Magnetic>
            </Reveal>
            
            <Reveal delay={0.5}>
              <Magnetic strength={8}>
                <div className="group p-10 bg-white rounded-3xl border border-slate-200 hover:border-[hsl(157,72%,43%)]/30 hover:shadow-xl transition-all duration-500 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(157,72%,43%)]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(157,72%,43%)] to-[hsl(157,72%,38%)] flex items-center justify-center shadow-lg shrink-0">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[hsl(157,72%,43%)] mb-2">Licensed & Bonded</h3>
                        <div className="text-sm font-semibold text-slate-500 mb-3">Full Protection</div>
                        <p className="text-slate-600 leading-relaxed">Complete regulatory compliance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Magnetic>
            </Reveal>
            
            <Reveal delay={0.6}>
              <Magnetic strength={8}>
                <div className="group p-10 bg-white rounded-3xl border border-slate-200 hover:border-[hsl(224,100%,32%)]/30 hover:shadow-xl transition-all duration-500 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(224,100%,32%)]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(224,100%,32%)] to-[hsl(224,100%,38%)] flex items-center justify-center shadow-lg shrink-0">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[hsl(224,100%,45%)] mb-2">$50M+ Coverage Placed</h3>
                        <div className="text-sm font-semibold text-slate-500 mb-3">Industry Leading</div>
                        <p className="text-slate-600 leading-relaxed">Comprehensive protection delivered</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Magnetic>
            </Reveal>
            
            <Reveal delay={0.7}>
              <Magnetic strength={8}>
                <div className="group p-10 bg-white rounded-3xl border border-slate-200 hover:border-[hsl(157,72%,43%)]/30 hover:shadow-xl transition-all duration-500 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(157,72%,43%)]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(157,72%,43%)] to-[hsl(157,72%,38%)] flex items-center justify-center shadow-lg shrink-0">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1 w-full">
                        <h3 className="text-xl font-bold text-[hsl(157,72%,43%)] mb-2">Dual Third-Party Verification</h3>
                        <div className="text-sm font-semibold text-slate-500 mb-3">Independently Verified by Two Sources</div>
                        <p className="text-slate-600 leading-relaxed mb-4">All licenses verified and monitored by TrustMyProducer plus searchable on NIPR (National Insurance Producer Registry)</p>

                        {/* Verification Links - Mobile Optimized */}
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                          <a 
                            href={BRAND.verification.trustMyProducer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(157,72%,43%)] hover:text-[hsl(157,72%,38%)] transition-colors group"
                            data-gtm="about-verify-trustmyproducer"
                          >
                            <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>View Real-Time License Status</span>
                            <svg className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          
                          <a 
                            href={BRAND.verification.nipr}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                            data-gtm="about-verify-nipr"
                          >
                            <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                            </svg>
                            <span>Look Up NPN on NIPR</span>
                            <svg className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Magnetic>
            </Reveal>
          </div>
          
          {/* HOW I HELP YOU - STEP-BY-STEP PROCESS */}
          <Reveal delay={0.9}>
            <div className="bg-slate-50 p-16 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-luxury-serif text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">How I Help You</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-[hsl(157,72%,43%)]/30 hover:shadow-lg transition-all duration-500 group">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[hsl(157,72%,43%)] to-[hsl(157,72%,38%)] flex items-center justify-center shadow-lg">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[hsl(157,72%,43%)] transition-colors duration-300">Individual Health Insurance</h4>
                    <p className="text-slate-600 leading-relaxed">Comprehensive individual and family health plans tailored to your needs</p>
                  </div>
                  
                  <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-[hsl(224,100%,32%)]/30 hover:shadow-lg transition-all duration-500 group">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[hsl(224,100%,32%)] to-[hsl(215,88%,39%)] flex items-center justify-center shadow-lg">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[hsl(224,100%,45%)] transition-colors duration-300">Family Coverage Plans</h4>
                    <p className="text-slate-600 leading-relaxed">Tailored protection strategies for growing families</p>
                  </div>
                  
                  <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-[hsl(157,72%,43%)]/30 hover:shadow-lg transition-all duration-500 group">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[hsl(157,72%,43%)] to-[hsl(224,100%,32%)] flex items-center justify-center shadow-lg">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[hsl(157,72%,43%)] transition-colors duration-300">Life Insurance Solutions</h4>
                    <p className="text-slate-600 leading-relaxed">Term and permanent life insurance options for every budget</p>
                  </div>
                  
                  <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-[hsl(224,100%,32%)]/30 hover:shadow-lg transition-all duration-500 group">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[hsl(224,100%,32%)] to-[hsl(157,72%,43%)] flex items-center justify-center shadow-lg">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[hsl(224,100%,45%)] transition-colors duration-300">Medicare Guidance</h4>
                    <p className="text-slate-600 leading-relaxed">Expert Medicare and supplement planning for seniors</p>
                  </div>
                  
                  <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-[hsl(157,72%,43%)]/30 hover:shadow-lg transition-all duration-500 group">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[hsl(157,72%,43%)] to-[hsl(157,72%,38%)] flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[hsl(157,72%,43%)] transition-colors duration-300">Small Business Plans</h4>
                    <p className="text-slate-600 leading-relaxed">Group health and business insurance solutions</p>
                  </div>
                  
                  <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-[hsl(224,100%,32%)]/30 hover:shadow-lg transition-all duration-500 group">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[hsl(224,100%,32%)] to-[hsl(224,100%,38%)] flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[hsl(224,100%,45%)] transition-colors duration-300">PPO Network Access</h4>
                    <p className="text-slate-600 leading-relaxed">Extensive provider networks and maximum flexibility</p>
                  </div>
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
                      Trusted Health & Life Insurance Solutions
                    </span>
                  </h2>
                  <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                    5 years of trusted collaboration delivering 
                    <span className="text-white font-medium"> affordable, personal, transparent, and simple</span> insurance solutions with enterprise resources.
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
                      Bradford Informed Guidance delivers <span className="font-semibold text-[hsl(224,100%,50%)]">Best Insurance Group's affordability, simplicity, and exclusive carrier access</span> with 
                      <span className="font-semibold text-[hsl(157,72%,53%)]"> personalized local guidance you won't find at a call center.</span>
                    </p>
                    <p className="text-xl font-semibold text-[hsl(157,72%,53%)]">
                      Enterprise resources. Personal relationships.
                    </p>
                  </div>
                </div>
                
                {/* Premium Timeline */}
                <div className="mb-16">
                  <h3 className="font-luxury-serif text-3xl font-bold text-center text-white mb-12">Partnership Milestones</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-8 bg-gradient-to-br from-[hsl(157,72%,43%)]/15 to-[hsl(157,72%,43%)]/5 rounded-3xl border border-white/10 hover:bg-gradient-to-br hover:from-[hsl(157,72%,43%)]/20 hover:to-[hsl(157,72%,43%)]/10 transition-all duration-500 backdrop-blur-sm">
                      <div className="text-4xl font-bold text-[hsl(157,72%,53%)] mb-3">2020</div>
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



      {/* WHY FAMILIES CHOOSE BRADFORD - LIGHT SECTION */}
      <section className="relative py-24 md:py-32 bg-slate-50/40">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal>
            {/* Professional Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[hsl(157,72%,43%)]/10 rounded-full border border-[hsl(157,72%,43%)]/20 mb-8">
                <div className="w-2 h-2 bg-[hsl(157,72%,43%)] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-slate-700">Client Experience</span>
              </div>
              
              <h2 className="font-luxury-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
                Why Families Choose
                <br />
                <span className="bg-gradient-to-r from-[hsl(157,72%,43%)] via-[hsl(157,72%,53%)] to-[hsl(224,100%,32%)] bg-clip-text text-transparent">
                  Bradford
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Personal service with <span className="text-slate-900 font-medium">professional expertise</span>
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            {/* Professional Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <Magnetic strength={8}>
                <div className="group p-10 bg-white rounded-3xl border border-slate-200 hover:border-[hsl(157,72%,43%)]/30 hover:shadow-xl transition-all duration-500 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(157,72%,43%)]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(157,72%,43%)] to-[hsl(157,72%,38%)] flex items-center justify-center shadow-lg shrink-0">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[hsl(157,72%,43%)] mb-4 group-hover:text-slate-900 transition-colors duration-300">Deep Community Roots</h3>
                        <p className="text-slate-600 leading-relaxed">
                          Born and raised in the communities I serve. I understand the unique challenges families face in Florida, Michigan, and North Carolina because I live them too.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Magnetic>
              
              <Magnetic strength={8}>
                <div className="group p-10 bg-white rounded-3xl border border-slate-200 hover:border-[hsl(224,100%,32%)]/30 hover:shadow-xl transition-all duration-500 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(224,100%,32%)]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(224,100%,32%)] to-[hsl(215,88%,39%)] flex items-center justify-center shadow-lg shrink-0">
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[hsl(224,100%,45%)] mb-4 group-hover:text-slate-900 transition-colors duration-300">Family-First Approach</h3>
                        <p className="text-slate-600 leading-relaxed">
                          Every recommendation I make, I consider: "Would I recommend this to my own family?" Your protection is personal to me.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Magnetic>
              
              <Magnetic strength={8}>
                <div className="group p-10 bg-white rounded-3xl border border-slate-200 hover:border-[hsl(157,72%,43%)]/30 hover:shadow-xl transition-all duration-500 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(157,72%,43%)]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(157,72%,43%)] to-[hsl(224,100%,32%)] flex items-center justify-center shadow-lg shrink-0">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[hsl(157,72%,43%)] mb-4 group-hover:text-slate-900 transition-colors duration-300">Local Commitment</h3>
                        <p className="text-slate-600 leading-relaxed">
                          While insurance companies come and go, I'm here for the long haul. Your agent today, your advocate for years to come.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Magnetic>
              
              <Magnetic strength={8}>
                <div className="group p-10 bg-white rounded-3xl border border-slate-200 hover:border-[hsl(224,100%,32%)]/30 hover:shadow-xl transition-all duration-500 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(224,100%,32%)]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(224,100%,32%)] to-[hsl(157,72%,43%)] flex items-center justify-center shadow-lg shrink-0">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[hsl(224,100%,45%)] mb-4 group-hover:text-slate-900 transition-colors duration-300">Always Available</h3>
                        <p className="text-slate-600 leading-relaxed">
                          Real person, real phone number, real responses. When you call, you get me—not a call center or voicemail system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Magnetic>
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