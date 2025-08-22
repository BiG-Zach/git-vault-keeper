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
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-[hsl(157,72%,43%)]/10 rounded-full border border-[hsl(157,72%,43%)]/20 mb-8">
                    <div className="w-2 h-2 bg-[hsl(157,72%,43%)] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-slate-700">Your Insurance Expert</span>
                  </div>
                  
                  <h1 className="font-luxury-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-900">
                    Meet Your Insurance Advocate & 
                    <span className="block bg-gradient-to-r from-[hsl(157,72%,43%)] via-[hsl(157,72%,53%)] to-[hsl(224,100%,32%)] bg-clip-text text-transparent">
                      Family Protection Expert
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
                  Turning insurance confusion into family confidence across 
                  <span className="text-slate-900 font-medium"> Florida, Michigan, and North Carolina.</span>
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
                      <span>Email Expert</span>
                    </a>
                  </Magnetic>
                </div>
              </div>
            </Reveal>
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
          </div>
          
          {/* HOW I HELP YOU - STEP-BY-STEP PROCESS */}
          <Reveal delay={0.7}>
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

      {/* BiG PARTNERSHIP SECTION - VISUAL MASTERPIECE */}
      <section id="big-partnership" role="region" aria-labelledby="big-partnership-title" className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-[#1a365d] via-[#0f172a] to-[#1e293b]">
        
        {/* BiG Brand Ambient Light Effects */}
        <div className="absolute inset-0">
          {/* Primary Blue Glow */}
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#2aa8ff]/20 rounded-full blur-[100px] opacity-70 animate-pulse"></div>
          {/* Orange Energy Burst */}
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-[#ff6b35]/25 rounded-full blur-[80px] opacity-60"></div>
          {/* Green Success Accent */}
          <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-[#22c98d]/15 rounded-full blur-[60px] opacity-50"></div>
          {/* Central BiG Gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#2aa8ff]/8 via-[#ff6b35]/5 to-[#22c98d]/8 rounded-full blur-[120px]"></div>
        </div>
        
        {/* Dynamic BiG Geometric Elements */}
        <div className="absolute inset-0">
          {/* Floating BiG Logo Elements */}
          <div className="absolute top-1/4 left-1/6 w-32 h-32 border-2 border-[#2aa8ff]/20 rounded-3xl rotate-12 opacity-30 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/6 w-24 h-24 border border-[#ff6b35]/25 rounded-full opacity-25"></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-[#22c98d]/10 rounded-2xl rotate-45 opacity-40"></div>
          
          {/* Dynamic Light Rays */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#2aa8ff]/30 via-transparent to-[#ff6b35]/20 opacity-50"></div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#22c98d]/20 to-transparent opacity-40"></div>
          
          {/* BiG Brand Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #2aa8ff 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #ff6b35 1px, transparent 1px)`,
            backgroundSize: '60px 60px, 40px 40px'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-6 max-w-7xl z-10">
          <Reveal>
            {/* BiG Masterpiece Glass Container */}
            <div className="group bg-white/8 backdrop-blur-2xl p-16 md:p-20 rounded-[2rem] border border-white/20 shadow-[0_40px_100px_-20px_rgba(42,168,255,0.3)] relative overflow-hidden transform hover:scale-[1.02] transition-all duration-700">
              
              {/* BiG Brand Inner Glow System */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2aa8ff]/10 via-[#ff6b35]/5 to-[#22c98d]/8 rounded-[2rem] opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-[#2aa8ff]/10 rounded-[2rem] group-hover:opacity-100 opacity-60 transition-opacity duration-500"></div>
              
              {/* Animated BiG Energy Lines */}
              <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#2aa8ff]/40 via-transparent to-[#ff6b35]/30 opacity-60 animate-pulse"></div>
              <div className="absolute top-1/4 right-0 w-full h-px bg-gradient-to-l from-[#22c98d]/30 via-transparent to-transparent opacity-50"></div>
              
              <div className="relative z-10">
                {/* BiG Brand Masterpiece Header */}
                <div className="text-center mb-20">
                  <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#2aa8ff]/30 via-[#ff6b35]/20 to-[#22c98d]/25 rounded-full border-2 border-white/30 mb-12 backdrop-blur-xl shadow-[0_0_40px_rgba(42,168,255,0.4)] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2aa8ff]/20 to-[#ff6b35]/15 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-3 h-3 bg-[#22c98d] rounded-full animate-pulse shadow-[0_0_10px_#22c98d] relative z-10"></div>
                    <span className="text-base font-bold text-white relative z-10 tracking-wider">STRATEGIC PARTNERSHIP</span>
                    <div className="w-3 h-3 bg-[#2aa8ff] rounded-full animate-pulse shadow-[0_0_10px_#2aa8ff] relative z-10"></div>
                  </div>
                  
                  <h2 id="big-partnership-title" className="font-luxury-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                    <span className="bg-gradient-to-r from-[#2aa8ff] via-[#ff6b35] to-[#22c98d] bg-clip-text text-transparent animate-gradient bg-300% drop-shadow-[0_0_30px_rgba(42,168,255,0.5)]">
                      Proudly Partnered with
                    </span>
                    <br />
                    <div className="relative inline-block">
                      <span className="text-white font-luxury-serif drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">Best Insurance Group</span>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#2aa8ff] via-[#ff6b35] to-[#22c98d] rounded-full shadow-[0_0_15px_rgba(42,168,255,0.6)]"></div>
                    </div>
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
                    <span className="text-[#2aa8ff] font-bold">5 years</span> of trusted collaboration serving families nationwide with 
                    <span className="text-[#ff6b35] font-bold drop-shadow-[0_0_10px_rgba(255,107,53,0.5)]"> enterprise-level resources</span> and 
                    <span className="text-[#22c98d] font-bold">unmatched expertise</span>.
                  </p>
                </div>
                
                {/* BiG Brand Showcase - Logo Masterpiece */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-20">
                  <div className="group flex items-center gap-8 p-8 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-[0_0_60px_rgba(42,168,255,0.3)] hover:shadow-[0_0_80px_rgba(42,168,255,0.5)] transition-all duration-500">
                    <div className="relative">
                      {/* Animated BiG Logo Container */}
                      <div className="w-36 h-36 bg-gradient-to-br from-[#2aa8ff] via-[#ff6b35] to-[#22c98d] rounded-[2rem] flex items-center justify-center shadow-[0_0_40px_rgba(42,168,255,0.6)] relative overflow-hidden group-hover:rotate-3 transition-transform duration-500 animate-gradient bg-300%">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-[2rem]"></div>
                        <div className="absolute inset-2 bg-gradient-to-br from-[#1a365d]/90 to-[#0f172a]/90 rounded-[1.5rem] flex items-center justify-center">
                          <span className="relative text-white font-bold text-4xl font-luxury-serif tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">BiG</span>
                        </div>
                      </div>
                      
                      {/* Verification Badge with Animation */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#22c98d] to-[#16a085] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,201,141,0.6)] animate-pulse">
                        <CheckCircle className="w-7 h-7 text-white drop-shadow-sm" />
                      </div>
                      
                      {/* Floating Particles */}
                      <div className="absolute -inset-8 opacity-60">
                        <div className="absolute top-0 left-4 w-2 h-2 bg-[#2aa8ff] rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                        <div className="absolute top-8 right-0 w-1.5 h-1.5 bg-[#ff6b35] rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                        <div className="absolute bottom-4 left-0 w-1 h-1 bg-[#22c98d] rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                    
                    <div className="text-left">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2aa8ff] to-[#ff6b35] bg-clip-text text-transparent mb-2 drop-shadow-sm">Best Insurance Group</div>
                      <div className="text-[#22c98d] font-bold text-xl mb-1 drop-shadow-[0_0_10px_rgba(34,201,141,0.4)]">Industry Leader Since 2005</div>
                      <div className="text-white/80 text-sm font-medium">Trusted by thousands nationwide</div>
                    </div>
                  </div>
                  
                  <Magnetic strength={15}>
                    <div className="group px-12 py-6 bg-gradient-to-r from-[#2aa8ff] via-[#ff6b35] to-[#22c98d] text-white rounded-[2rem] font-bold text-2xl shadow-[0_0_40px_rgba(42,168,255,0.4)] relative overflow-hidden transform hover:scale-110 transition-all duration-500 cursor-pointer animate-gradient bg-300%">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2rem]"></div>
                      <div className="absolute inset-0 animate-pulse opacity-30">
                        <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full"></div>
                        <div className="absolute bottom-2 right-4 w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="relative drop-shadow-sm">5-Year Partnership</span>
                    </div>
                  </Magnetic>
                </div>
                
                {/* BiG Benefits Masterpiece Grid */}
                <div className="grid md:grid-cols-2 gap-10 mb-20">
                  <div className="group p-10 bg-gradient-to-br from-[#2aa8ff]/15 via-white/5 to-[#ff6b35]/10 backdrop-blur-xl rounded-[2rem] border border-white/20 hover:bg-gradient-to-br hover:from-[#2aa8ff]/20 hover:via-white/8 hover:to-[#ff6b35]/15 hover:border-[#2aa8ff]/40 transition-all duration-700 shadow-[0_0_40px_rgba(42,168,255,0.2)] hover:shadow-[0_0_60px_rgba(42,168,255,0.4)] transform hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2aa8ff]/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#2aa8ff] to-[#1e40af] rounded-[1.5rem] flex items-center justify-center shadow-[0_0_30px_rgba(42,168,255,0.5)] shrink-0 group-hover:rotate-6 transition-transform duration-500">
                        <CheckCircle className="w-8 h-8 text-white drop-shadow-sm" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-[#2aa8ff] to-[#1e40af] bg-clip-text text-transparent mb-4 drop-shadow-sm">Exclusive Carrier Networks</h4>
                        <p className="text-white/90 leading-relaxed text-lg font-medium">Access to premium insurance carriers and specialized networks unavailable to independent agents.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-10 bg-gradient-to-br from-[#ff6b35]/15 via-white/5 to-[#22c98d]/10 backdrop-blur-xl rounded-[2rem] border border-white/20 hover:bg-gradient-to-br hover:from-[#ff6b35]/20 hover:via-white/8 hover:to-[#22c98d]/15 hover:border-[#ff6b35]/40 transition-all duration-700 shadow-[0_0_40px_rgba(255,107,53,0.2)] hover:shadow-[0_0_60px_rgba(255,107,53,0.4)] transform hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#dc2626] rounded-[1.5rem] flex items-center justify-center shadow-[0_0_30px_rgba(255,107,53,0.5)] shrink-0 group-hover:rotate-6 transition-transform duration-500">
                        <CheckCircle className="w-8 h-8 text-white drop-shadow-sm" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#dc2626] bg-clip-text text-transparent mb-4 drop-shadow-sm">Industry Leadership</h4>
                        <p className="text-white/90 leading-relaxed text-lg font-medium">Backed by an established industry leader with nationwide presence and proven track record.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-10 bg-gradient-to-br from-[#22c98d]/15 via-white/5 to-[#2aa8ff]/10 backdrop-blur-xl rounded-[2rem] border border-white/20 hover:bg-gradient-to-br hover:from-[#22c98d]/20 hover:via-white/8 hover:to-[#2aa8ff]/15 hover:border-[#22c98d]/40 transition-all duration-700 shadow-[0_0_40px_rgba(34,201,141,0.2)] hover:shadow-[0_0_60px_rgba(34,201,141,0.4)] transform hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#22c98d]/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#22c98d] to-[#059669] rounded-[1.5rem] flex items-center justify-center shadow-[0_0_30px_rgba(34,201,141,0.5)] shrink-0 group-hover:rotate-6 transition-transform duration-500">
                        <CheckCircle className="w-8 h-8 text-white drop-shadow-sm" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-[#22c98d] to-[#059669] bg-clip-text text-transparent mb-4 drop-shadow-sm">Shared Values</h4>
                        <p className="text-white/90 leading-relaxed text-lg font-medium">United commitment to affordable, personal, transparent, and simple insurance solutions.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-10 bg-gradient-to-br from-[#2aa8ff]/15 via-[#ff6b35]/5 to-[#22c98d]/10 backdrop-blur-xl rounded-[2rem] border border-white/20 hover:bg-gradient-to-br hover:from-[#2aa8ff]/20 hover:via-[#ff6b35]/8 hover:to-[#22c98d]/15 hover:border-white/40 transition-all duration-700 shadow-[0_0_40px_rgba(42,168,255,0.2)] hover:shadow-[0_0_60px_rgba(42,168,255,0.4)] transform hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2aa8ff]/5 via-[#ff6b35]/3 to-[#22c98d]/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#2aa8ff] via-[#ff6b35] to-[#22c98d] rounded-[1.5rem] flex items-center justify-center shadow-[0_0_30px_rgba(42,168,255,0.5)] shrink-0 group-hover:rotate-6 transition-transform duration-500 animate-gradient bg-300%">
                        <CheckCircle className="w-8 h-8 text-white drop-shadow-sm" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-[#2aa8ff] via-[#ff6b35] to-[#22c98d] bg-clip-text text-transparent mb-4 drop-shadow-sm animate-gradient bg-300%">Enhanced Buying Power</h4>
                        <p className="text-white/90 leading-relaxed text-lg font-medium">Group purchasing power delivers better rates and enhanced coverage options for clients.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* BiG Value Proposition Masterpiece */}
                <div className="group p-16 bg-gradient-to-br from-[#2aa8ff]/20 via-[#ff6b35]/10 to-[#22c98d]/15 rounded-[2.5rem] border-2 border-white/25 mb-20 backdrop-blur-2xl shadow-[0_0_80px_rgba(42,168,255,0.3)] hover:shadow-[0_0_120px_rgba(42,168,255,0.5)] transition-all duration-700 relative overflow-hidden transform hover:scale-[1.02]">
                  
                  {/* Animated BiG Brand Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-8 w-16 h-16 border-2 border-[#2aa8ff] rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                    <div className="absolute bottom-8 left-12 w-12 h-12 border border-[#ff6b35] rounded-2xl rotate-45 animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-[#22c98d]/30 rounded-full animate-bounce"></div>
                  </div>
                  
                  <div className="text-center space-y-8 relative z-10">
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#2aa8ff]/30 to-[#22c98d]/30 rounded-full border border-white/30 backdrop-blur-xl">
                      <div className="w-4 h-4 bg-[#ff6b35] rounded-full animate-pulse shadow-[0_0_10px_#ff6b35]"></div>
                      <span className="font-bold text-white text-lg tracking-wide">THE PERFECT PARTNERSHIP</span>
                      <div className="w-4 h-4 bg-[#22c98d] rounded-full animate-pulse shadow-[0_0_10px_#22c98d]"></div>
                    </div>
                    
                    <h3 className="font-luxury-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2aa8ff] via-[#ff6b35] to-[#22c98d] bg-clip-text text-transparent mb-8 drop-shadow-[0_0_20px_rgba(42,168,255,0.4)] animate-gradient bg-300%">The Perfect Partnership</h3>
                    
                    <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-5xl mx-auto font-medium">
                      Bradford Informed Guidance combines 
                      <span className="font-bold bg-gradient-to-r from-[#22c98d] to-[#16a085] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,201,141,0.5)]"> local expertise and personal touch</span> with 
                      <span className="font-bold bg-gradient-to-r from-[#2aa8ff] to-[#1e40af] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(42,168,255,0.5)]"> Best Insurance Group's enterprise-level resources</span> and carrier relationships.
                    </p>
                    
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#ff6b35] via-[#2aa8ff] to-[#22c98d] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,107,53,0.4)] animate-gradient bg-300%">
                      Your local agent with national group strength.
                    </div>
                  </div>
                </div>
                
                {/* BiG Partnership Timeline Masterpiece */}
                <div className="mb-20">
                  <div className="text-center mb-16">
                    <h3 className="font-luxury-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2aa8ff] via-[#ff6b35] to-[#22c98d] bg-clip-text text-transparent mb-4 drop-shadow-[0_0_20px_rgba(42,168,255,0.4)] animate-gradient bg-300%">Partnership Milestones</h3>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-[#2aa8ff] via-[#ff6b35] to-[#22c98d] rounded-full mx-auto shadow-[0_0_20px_rgba(42,168,255,0.5)]"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="group text-center p-10 bg-gradient-to-br from-[#2aa8ff]/20 via-[#2aa8ff]/10 to-[#2aa8ff]/5 rounded-[2rem] border-2 border-[#2aa8ff]/30 hover:border-[#2aa8ff]/50 transition-all duration-700 backdrop-blur-xl shadow-[0_0_40px_rgba(42,168,255,0.2)] hover:shadow-[0_0_60px_rgba(42,168,255,0.4)] transform hover:scale-110 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2aa8ff]/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-5xl md:text-6xl font-bold text-[#2aa8ff] mb-4 drop-shadow-[0_0_15px_rgba(42,168,255,0.6)] group-hover:animate-pulse">2019</div>
                        <div className="text-lg font-bold text-white mb-2">Partnership Begins</div>
                        <div className="w-16 h-1 bg-[#2aa8ff] rounded-full mx-auto shadow-[0_0_10px_rgba(42,168,255,0.5)]"></div>
                      </div>
                    </div>
                    
                    <div className="group text-center p-10 bg-gradient-to-br from-[#ff6b35]/20 via-[#ff6b35]/10 to-[#ff6b35]/5 rounded-[2rem] border-2 border-[#ff6b35]/30 hover:border-[#ff6b35]/50 transition-all duration-700 backdrop-blur-xl shadow-[0_0_40px_rgba(255,107,53,0.2)] hover:shadow-[0_0_60px_rgba(255,107,53,0.4)] transform hover:scale-110 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-5xl md:text-6xl font-bold text-[#ff6b35] mb-4 drop-shadow-[0_0_15px_rgba(255,107,53,0.6)] group-hover:animate-pulse">2021</div>
                        <div className="text-lg font-bold text-white mb-2">Expanded Access</div>
                        <div className="w-16 h-1 bg-[#ff6b35] rounded-full mx-auto shadow-[0_0_10px_rgba(255,107,53,0.5)]"></div>
                      </div>
                    </div>
                    
                    <div className="group text-center p-10 bg-gradient-to-br from-[#22c98d]/20 via-[#22c98d]/10 to-[#22c98d]/5 rounded-[2rem] border-2 border-[#22c98d]/30 hover:border-[#22c98d]/50 transition-all duration-700 backdrop-blur-xl shadow-[0_0_40px_rgba(34,201,141,0.2)] hover:shadow-[0_0_60px_rgba(34,201,141,0.4)] transform hover:scale-110 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#22c98d]/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-5xl md:text-6xl font-bold text-[#22c98d] mb-4 drop-shadow-[0_0_15px_rgba(34,201,141,0.6)] group-hover:animate-pulse">2023</div>
                        <div className="text-lg font-bold text-white mb-2">Multi-State Growth</div>
                        <div className="w-16 h-1 bg-[#22c98d] rounded-full mx-auto shadow-[0_0_10px_rgba(34,201,141,0.5)]"></div>
                      </div>
                    </div>
                    
                    <div className="group text-center p-10 bg-gradient-to-br from-[#2aa8ff]/15 via-[#ff6b35]/10 to-[#22c98d]/15 rounded-[2rem] border-2 border-white/40 hover:border-white/60 transition-all duration-700 backdrop-blur-xl shadow-[0_0_40px_rgba(42,168,255,0.2)] hover:shadow-[0_0_60px_rgba(42,168,255,0.4)] transform hover:scale-110 relative overflow-hidden animate-gradient bg-300%">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2aa8ff]/5 via-[#ff6b35]/3 to-[#22c98d]/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#2aa8ff] via-[#ff6b35] to-[#22c98d] bg-clip-text text-transparent mb-4 drop-shadow-[0_0_15px_rgba(42,168,255,0.6)] group-hover:animate-pulse animate-gradient bg-300%">2025</div>
                        <div className="text-lg font-bold text-white mb-2">5-Year Milestone</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#2aa8ff] via-[#ff6b35] to-[#22c98d] rounded-full mx-auto shadow-[0_0_10px_rgba(42,168,255,0.5)]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* BiG Verification Masterpiece */}
                <div className="text-center">
                  <Magnetic strength={20}>
                    <a 
                      href="https://bestinsurancegroup.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Open Best Insurance Group website"
                      className="group inline-flex items-center gap-6 px-16 py-8 bg-gradient-to-r from-[#2aa8ff] via-[#ff6b35] to-[#22c98d] text-white font-bold text-2xl rounded-[2rem] shadow-[0_0_60px_rgba(42,168,255,0.4)] hover:shadow-[0_0_100px_rgba(42,168,255,0.6)] transition-all duration-700 transform hover:scale-110 relative overflow-hidden animate-gradient bg-300%"
                    >
                      {/* Dynamic Background Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                      
                      {/* Floating Particles */}
                      <div className="absolute inset-0 opacity-60">
                        <div className="absolute top-3 left-8 w-2 h-2 bg-white/80 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                        <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                        <div className="absolute bottom-4 left-16 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
                      </div>
                      
                      {/* Content */}
                      <span className="relative drop-shadow-[0_0_10px_rgba(0,0,0,0.3)] tracking-wide">Verify Partnership</span>
                      
                      {/* Animated Icon */}
                      <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center relative transform group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                        <span className="text-2xl relative font-bold">→</span>
                      </div>
                    </a>
                  </Magnetic>
                  
                  <div className="mt-8 space-y-3">
                    <p className="text-lg font-bold bg-gradient-to-r from-[#2aa8ff] to-[#22c98d] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(42,168,255,0.3)]">bestinsurancegroup.net</p>
                    <p className="text-white/70 text-sm font-medium">Verified Partnership Since 2019</p>
                  </div>
                </div>
              </div>
              
              {/* BiG Brand Corner Accents - Enhanced */}
              <div className="absolute top-6 left-6 w-16 h-16 border-l-4 border-t-4 border-[#2aa8ff]/40 rounded-tl-3xl opacity-60"></div>
              <div className="absolute top-6 right-6 w-16 h-16 border-r-4 border-t-4 border-[#ff6b35]/40 rounded-tr-3xl opacity-60"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 border-l-4 border-b-4 border-[#22c98d]/40 rounded-bl-3xl opacity-60"></div>
              <div className="absolute bottom-6 right-6 w-16 h-16 border-r-4 border-b-4 border-[#2aa8ff]/40 rounded-br-3xl opacity-60"></div>
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