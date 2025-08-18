import { BRAND } from "../lib/brand";
import TestimonialReel from "../components/social/TestimonialReel";
import { Shield, Award, Users, TrendingUp, Phone, Mail, Calendar, Star, CheckCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import CalendlyInline from "../components/CalendlyInline";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION - AUTHORITY ESTABLISHMENT */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center max-w-6xl mx-auto">
            <Reveal>
              <div className="relative">
                <img 
                  src="/about/portrait.webp" 
                  alt="Zachary Bradford - Insurance Expert" 
                  width="500" 
                  height="600" 
                  className="w-full h-auto rounded-2xl shadow-2xl" 
                  loading="eager"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">Licensed Expert</span>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Your Insurance Advocate & 
                  <span className="block text-primary">Family Protection Expert</span>
                </h1>
                
                <div className="grid grid-cols-3 gap-6 mb-6 p-6 bg-background/80 rounded-2xl border shadow-sm">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">8+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Families Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">States Licensed</div>
                  </div>
                </div>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Turning insurance confusion into family confidence across Florida, Michigan, and North Carolina.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={BRAND.phoneTel} 
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now: {BRAND.phoneHuman}
                  </a>
                  <a 
                    href={`mailto:${BRAND.email}`}
                    className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary/5 transition-colors"
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

      {/* PERSONAL STORY SECTION */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why I Became Your Insurance Guide</h2>
              <p className="text-xl text-muted-foreground">From confused consumer to trusted expert</p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg leading-relaxed mb-6">
                Like most people, I once thought insurance was just another monthly bill—confusing, expensive, and something to avoid thinking about. That changed when a friend's family faced a medical crisis without adequate coverage.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Watching them struggle with mountains of debt that proper insurance could have prevented was my wake-up call. I realized that insurance isn't about policies and premiums—it's about protecting the people and dreams that matter most.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                That experience led me to become the insurance advocate I wish every family had: someone who explains options clearly, does the math honestly, and always puts your family's needs first. Because your peace of mind is worth more than any commission.
              </p>
              
              <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Family Protection Philosophy</h3>
                <p className="text-lg italic">
                  "Every family deserves to sleep soundly knowing they're protected. My job is to make that protection affordable, understandable, and absolutely reliable."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERTISE & CREDENTIALS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Expertise You Can Trust</h2>
              <p className="text-xl text-muted-foreground">Always learning to serve you better</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Reveal delay={0.1}>
              <div className="text-center p-6 bg-background rounded-2xl border shadow-sm">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Licensed Professional</h3>
                <p className="text-sm text-muted-foreground">NPN {BRAND.npn}</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="text-center p-6 bg-background rounded-2xl border shadow-sm">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Multi-State Authority</h3>
                <p className="text-sm text-muted-foreground">FL, MI, NC Licensed</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="text-center p-6 bg-background rounded-2xl border shadow-sm">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Direct Appointments</h3>
                <p className="text-sm text-muted-foreground">Major carrier relationships</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="text-center p-6 bg-background rounded-2xl border shadow-sm">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Proven Results</h3>
                <p className="text-sm text-muted-foreground">$2,500+ avg savings</p>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={0.5}>
            <div className="bg-muted/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Continuing Education Commitment</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Annual Training</h4>
                    <p className="text-sm text-muted-foreground">40+ hours yearly to stay current on regulations and products</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Industry Certifications</h4>
                    <p className="text-sm text-muted-foreground">Specialized training in health, life, and Medicare</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Market Research</h4>
                    <p className="text-sm text-muted-foreground">Daily monitoring of plan changes and new options</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENT SUCCESS STORIES */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Families I've Protected</h2>
              <p className="text-xl text-muted-foreground">Real results for real families</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Reveal delay={0.1}>
              <div className="bg-background p-6 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="font-semibold mb-2">The Johnson Family - Tampa</h3>
                <p className="text-muted-foreground mb-4">"Bradford saved us $2,520 per year while keeping our pediatrician and improving our coverage. We couldn't believe the difference!"</p>
                <div className="text-sm font-medium text-primary">Saved: $210/month</div>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="bg-background p-6 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="font-semibold mb-2">Self-Employed Contractor - Detroit</h3>
                <p className="text-muted-foreground mb-4">"As a contractor, I thought good insurance was impossible to afford. Bradford found me comprehensive coverage for half what I was quoted elsewhere."</p>
                <div className="text-sm font-medium text-primary">Saved: $180/month</div>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="bg-background p-6 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="font-semibold mb-2">Retiree Couple - Sarasota</h3>
                <p className="text-muted-foreground mb-4">"Bradford helped us navigate Medicare options and supplemental coverage. His patience and expertise gave us complete peace of mind."</p>
                <div className="text-sm font-medium text-primary">Saved: $150/month</div>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={0.4}>
            <div className="text-center bg-background p-8 rounded-2xl border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">$2,500</div>
                  <div className="text-sm text-muted-foreground">Average Family Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24hr</div>
                  <div className="text-sm text-muted-foreground">Average Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Families Protected</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PERSONAL CONNECTION */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond Insurance</h2>
              <p className="text-xl text-muted-foreground">Getting to know the person behind the expertise</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Community Roots</h3>
                  <p className="text-muted-foreground">
                    Born and raised in the Southeast, I understand the unique insurance challenges families face in our communities. From hurricane seasons in Florida to winter storms in Michigan, I help families prepare for what life throws their way.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Family First</h3>
                  <p className="text-muted-foreground">
                    As a devoted family man, I know firsthand how important it is to protect the people you love. Every recommendation I make is filtered through the lens of "What would I want for my own family?"
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Local Commitment</h3>
                  <p className="text-muted-foreground">
                    I'm not just licensed in Florida, Michigan, and North Carolina—I'm invested in these communities. When you work with me, you're getting someone who understands your local healthcare networks, regulations, and specific regional needs.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Always Available</h3>
                  <p className="text-muted-foreground">
                    Insurance questions don't stick to business hours. Whether it's a claim question at 8 PM or urgent coverage need on the weekend, I'm here for my clients. {BRAND.hours}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your Family?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert guidance, honest answers, and peace of mind—all with no obligation.
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-foreground/10 p-6 rounded-xl">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Now</h3>
                <p className="text-sm opacity-90 mb-3">Speak directly with Bradford</p>
                <a href={BRAND.phoneTel} className="font-bold hover:underline">{BRAND.phoneHuman}</a>
              </div>
              
              <div className="bg-primary-foreground/10 p-6 rounded-xl">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Expert</h3>
                <p className="text-sm opacity-90 mb-3">Get detailed answers</p>
                <a href={`mailto:${BRAND.email}`} className="font-bold hover:underline">{BRAND.email}</a>
              </div>
              
              <div className="bg-primary-foreground/10 p-6 rounded-xl">
                <Calendar className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Schedule Consultation</h3>
                <p className="text-sm opacity-90 mb-3">Pick your perfect time</p>
                <button className="font-bold hover:underline">Book Online</button>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="bg-primary-foreground/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Risk-Free Guarantee</h3>
              <p className="opacity-90">
                No pressure, no obligation—just expert guidance. If I can't save you money or improve your coverage, our consultation costs you nothing but time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL REEL */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <TestimonialReel />
        </div>
      </section>
    </main>
  );
}