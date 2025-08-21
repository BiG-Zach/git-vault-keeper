import { BRAND } from "../lib/brand";
import TestimonialReel from "../components/social/TestimonialReel";
import { Shield, Award, Users, TrendingUp, Phone, Mail, Calendar, Star, CheckCircle, Heart, Target, Zap } from "lucide-react";
import Reveal from "../components/Reveal";
import CalendlyInline from "../components/CalendlyInline";
import AboutHero from "../components/about/AboutHero";
import TrustBadges from "../components/about/TrustBadges";
import GeographicCoverage from "../components/about/GeographicCoverage";
import CareerTimeline from "../components/about/CareerTimeline";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* LUXURY HERO SECTION */}
      <AboutHero />

      {/* PROFESSIONAL HEADSHOT SECTION - WORLD-CLASS LUXURY */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-surface-base to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center max-w-7xl mx-auto">
            <Reveal>
              <div className="relative group">
                <div className="absolute -inset-4 bg-aurora-sweep rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src="/about/portrait.jpg" 
                  alt="Zachary Bradford - Licensed Insurance Expert" 
                  width="600" 
                  height="700" 
                  className="relative w-full h-auto rounded-2xl shadow-luxury" 
                  loading="eager"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-brand-jade-500 to-brand-sky-500 text-white px-6 py-3 rounded-2xl shadow-premium">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6" />
                    <div>
                      <div className="font-bold text-lg">Licensed Expert</div>
                      <div className="text-white/90 text-sm">FL License W347851</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-ink-900">
                    Your Insurance Advocate & 
                    <span className="block bg-aurora-sweep bg-clip-text text-transparent">Family Protection Expert</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-medium text-slate-600 leading-relaxed">
                    Turning insurance confusion into family confidence across three states with personalized expertise.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-6 p-8 bg-white rounded-2xl border border-surface-glassLine shadow-premium">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-brand-jade-500 mb-2">8+</div>
                    <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-brand-jade-500 mb-2">1,000+</div>
                    <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Families Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-brand-jade-500 mb-2">3</div>
                    <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">States Licensed</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={BRAND.phoneTel} 
                    className="inline-flex items-center justify-center gap-3 bg-aurora-sweep text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-premium hover:scale-105"
                  >
                    <Phone className="w-6 h-6" />
                    Call Now: {BRAND.phoneHuman}
                  </a>
                  <a 
                    href={`mailto:${BRAND.email}`}
                    className="inline-flex items-center justify-center gap-3 border-2 border-brand-jade-500 text-brand-jade-500 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-jade-500 hover:text-white transition-all duration-300 hover:shadow-premium"
                  >
                    <Mail className="w-6 h-6" />
                    Email Expert
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PERSONAL STORY SECTION - LUXURY TRANSFORMATION */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-ink-900">Why I Became Your Insurance Guide</h2>
              <p className="text-xl md:text-2xl font-medium text-slate-600">From confused consumer to trusted expert</p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="max-w-4xl mx-auto space-y-8 mb-16">
              <p className="text-xl leading-relaxed text-slate-700">
                Like most people, I once thought insurance was just another monthly bill—confusing, expensive, and something to avoid thinking about. That changed when a friend's family faced a medical crisis without adequate coverage.
              </p>
              <p className="text-xl leading-relaxed text-slate-700">
                Watching them struggle with mountains of debt that proper insurance could have prevented was my wake-up call. I realized that insurance isn't about policies and premiums—it's about protecting the people and dreams that matter most.
              </p>
              <p className="text-xl leading-relaxed text-slate-700">
                That experience led me to become the insurance advocate I wish every family had: someone who explains options clearly, does the math honestly, and always puts your family's needs first. Because your peace of mind is worth more than any commission.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="bg-gradient-to-r from-brand-jade-500/10 to-brand-sky-500/10 p-12 rounded-2xl border border-brand-jade-500/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-center text-brand-jade-500">My Family Protection Philosophy</h3>
              <p className="text-2xl italic text-center text-slate-700 leading-relaxed">
                "Every family deserves to sleep soundly knowing they're protected. My job is to make that protection affordable, understandable, and absolutely reliable."
              </p>
            </div>
          </Reveal>
          
          {/* Career Timeline Component */}
          <Reveal delay={0.6}>
            <div className="mt-20">
              <h3 className="text-3xl font-bold text-center mb-12 text-ink-900">Professional Journey & Milestones</h3>
              <CareerTimeline />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST BADGES - PREMIUM COMPONENT */}
      <TrustBadges />

      {/* EXPERTISE SHOWCASE - LUXURY DESIGN */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-surface-base to-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-ink-900">Service Specializations</h2>
              <p className="text-xl md:text-2xl font-medium text-slate-600">Comprehensive insurance solutions for every need</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Individual Health Insurance", desc: "Comprehensive individual and family health plans tailored to your needs" },
              { icon: Users, title: "Family Coverage Plans", desc: "Protective coverage designed for growing families and changing needs" },
              { icon: Shield, title: "Life Insurance Solutions", desc: "Term and permanent life insurance options for long-term security" },
              { icon: Award, title: "Medicare Guidance", desc: "Expert Medicare and supplement planning for retirement peace of mind" },
              { icon: TrendingUp, title: "Small Business Plans", desc: "Group health and business insurance solutions for entrepreneurs" },
              { icon: Target, title: "PPO Network Access", desc: "Extensive provider networks offering maximum flexibility and choice" }
            ].map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="group p-8 bg-white rounded-2xl border border-surface-glassLine shadow-premium hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-aurora-sweep flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - LUXURY SHOWCASE */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-ink-900">Families I've Protected</h2>
              <p className="text-xl md:text-2xl font-medium text-slate-600">Real results for real families</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                quote: "Bradford saved us $2,520 per year while keeping our pediatrician and improving our coverage. We couldn't believe the difference!",
                name: "The Johnson Family",
                location: "Tampa, FL",
                savings: "$210/month",
                color: "jade"
              },
              {
                quote: "As a contractor, I thought good insurance was impossible to afford. Bradford found me comprehensive coverage for half what I was quoted elsewhere.",
                name: "Self-Employed Contractor", 
                location: "Detroit, MI",
                savings: "$180/month",
                color: "sky"
              },
              {
                quote: "Bradford helped us navigate Medicare options and supplemental coverage. His patience and expertise gave us complete peace of mind.",
                name: "Retiree Couple",
                location: "Sarasota, FL", 
                savings: "$150/month",
                color: "jade"
              }
            ].map((testimonial, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group bg-white p-8 rounded-2xl border border-surface-glassLine shadow-premium hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
                  <div className={`text-6xl leading-none mb-6 ${testimonial.color === 'jade' ? 'text-brand-jade-500/20' : 'text-brand-sky-500/20'}`}>"</div>
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="border-t border-surface-glassLine pt-6">
                    <h3 className="font-bold text-ink-900 mb-2">{testimonial.name}</h3>
                    <div className="text-slate-500 mb-3">{testimonial.location}</div>
                    <div className={`font-bold ${testimonial.color === 'jade' ? 'text-brand-jade-500' : 'text-brand-sky-500'}`}>
                      Saved: {testimonial.savings}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={0.4}>
            <div className="grid md:grid-cols-3 gap-8 p-12 bg-gradient-to-r from-brand-jade-500/5 to-brand-sky-500/5 rounded-2xl border border-brand-jade-500/10">
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-jade-500 mb-3">$2,500+</div>
                <div className="text-lg font-semibold text-slate-600">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-sky-500 mb-3">98%</div>
                <div className="text-lg font-semibold text-slate-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-jade-500 mb-3">24hrs</div>
                <div className="text-lg font-semibold text-slate-600">Average Response Time</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GEOGRAPHIC COVERAGE - PREMIUM COMPONENT */}
      <GeographicCoverage />

      {/* WHY FAMILIES CHOOSE BRADFORD - LUXURY REDESIGN */}
      <section className="py-24 lg:py-32 bg-surface-base">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-ink-900">Why Families Choose Bradford</h2>
              <p className="text-xl md:text-2xl font-medium text-slate-600">Personal service with professional expertise</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Deep Community Roots",
                description: "Born and raised in the communities I serve. I understand the unique challenges families face in Florida, Michigan, and North Carolina because I live them too.",
                color: "jade",
                icon: Heart
              },
              {
                title: "Family-First Approach", 
                description: "Every recommendation I make, I consider: 'Would I recommend this to my own family?' Your protection is personal to me.",
                color: "sky",
                icon: Users
              },
              {
                title: "Local Commitment",
                description: "While insurance companies come and go, I'm here for the long haul. Your agent today, your advocate for years to come.",
                color: "jade", 
                icon: Shield
              },
              {
                title: "Always Available",
                description: "Real person, real phone number, real responses. When you call, you get me—not a call center or voicemail system.",
                color: "sky",
                icon: Phone
              }
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="group p-8 bg-white rounded-2xl border border-surface-glassLine shadow-premium hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl ${item.color === 'jade' ? 'bg-brand-jade-500' : 'bg-brand-sky-500'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-4 ${item.color === 'jade' ? 'text-brand-jade-500' : 'text-brand-sky-500'}`}>
                        {item.title}
                      </h3>
                      <p className="text-lg text-slate-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION - LUXURY TRANSFORMATION */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-brand-sky-500 via-ink-900 to-brand-jade-500 text-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to Secure Your Family's Future?
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-12 opacity-95 leading-relaxed max-w-4xl mx-auto">
              Let's start with a conversation. No pressure, no sales pitch—just honest guidance you can trust.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center mb-16">
              <a 
                href={BRAND.phoneTel}
                className="group inline-flex items-center justify-center gap-4 bg-white text-ink-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/95 transition-all duration-300 shadow-premium hover:shadow-luxury hover:scale-105"
              >
                <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
                Call {BRAND.phoneHuman}
              </a>
              <a 
                href={`mailto:${BRAND.email}`}
                className="group inline-flex items-center justify-center gap-4 border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                Email Bradford
              </a>
              <a 
                href="/lead"
                className="group inline-flex items-center justify-center gap-4 border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-7 h-7 group-hover:bounce transition-transform duration-300" />
                Schedule Consultation
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-12 rounded-2xl border border-white/20 max-w-3xl mx-auto">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
              <p className="text-2xl font-bold mb-4">100% Risk-Free Consultation Guarantee</p>
              <p className="text-xl opacity-90 leading-relaxed">
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