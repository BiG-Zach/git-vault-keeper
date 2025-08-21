import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Award, Clock, Users, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Calendar } from 'lucide-react';
import { BRAND } from '../lib/brand';
import portraitImg from '/about/portrait.jpg';
import bgImage from '/images/hero/about-hero-desktop.webp';
import TrustBadges from '../components/about/TrustBadges';
import GeographicCoverage from '../components/about/GeographicCoverage';
import CareerTimeline from '../components/about/CareerTimeline';
import TestimonialsGrid from '../components/social/TestimonialsGrid';

export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion();

  const credentials = [
    { icon: Shield, title: "Licensed Professional", desc: "Florida, Michigan, North Carolina", number: "15+" },
    { icon: Award, title: "Years Experience", desc: "Protecting families nationwide", number: "15+" },
    { icon: Users, title: "Families Protected", desc: "Trusted guidance since 2009", number: "1,000+" },
    { icon: TrendingUp, title: "Average Savings", desc: "Better coverage, lower costs", number: "30%" }
  ];

  const services = [
    "Health Insurance (ACA & Private)",
    "Life Insurance (Term & Whole Life)", 
    "Disability Insurance",
    "Medicare Supplements",
    "Small Group Benefits",
    "Individual & Family Plans"
  ];

  const testimonials = [
    {
      quote: "Zach saved our family $4,200 annually while getting us better coverage. His expertise is unmatched.",
      author: "Sarah & Mike Johnson",
      location: "Tampa, FL",
      savings: "$4,200/year"
    },
    {
      quote: "Professional, knowledgeable, and always available. Best insurance experience we've ever had.",
      author: "Jennifer Martinez",
      location: "Charlotte, NC", 
      rating: 5
    },
    {
      quote: "He found us a plan that covers all our doctors for less than we were paying before. Incredible service.",
      author: "Robert Chen",
      location: "Detroit, MI",
      savings: "$2,800/year"
    }
  ];

  return (
    <div className="min-h-screen bg-surface-base">
      {/* LUXURY HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-ink-900/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            
            {/* Left: Premium Content */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                  <div className="w-2 h-2 bg-brand-jade-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Licensed in {BRAND.licensed}</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                  <span className="block font-luxury-serif">Meet Your</span>
                  <span className="block bg-aurora-sweep bg-clip-text text-transparent font-luxury-serif">Insurance Expert.</span>
                  <span className="block text-2xl lg:text-3xl xl:text-4xl font-normal mt-4 text-white/90">
                    Zachary Bradford, Licensed Professional
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl"
              >
                Founded on integrity and driven by results, I help families across the country secure protection they can count on—while delivering the personal service they deserve.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="/lead"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-jade-600 hover:bg-brand-jade-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-luxury"
                  data-gtm={`${BRAND.gtm.quote}_about_hero`}
                >
                  Get Free Quote
                </a>
                <a
                  href={BRAND.phoneTel}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 backdrop-blur-md transition-all duration-300"
                  data-gtm={`${BRAND.gtm.call}_about_hero`}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BRAND.phoneHuman}
                </a>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {credentials.map((cred, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <cred.icon className="w-8 h-8 text-brand-jade-500 mx-auto lg:mx-0 mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{cred.number}</div>
                    <div className="text-sm text-white/80">{cred.desc}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Professional Photo */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-aurora-sweep rounded-2xl transform rotate-3" />
                <img
                  src={portraitImg}
                  alt="Zachary Bradford - Licensed Insurance Expert"
                  className="relative w-full max-w-md rounded-2xl shadow-luxury object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-luxury">
                  <div className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-brand-jade-600" />
                    <div>
                      <div className="font-semibold text-ink-900">Licensed</div>
                      <div className="text-sm text-ink-900/70">3 States</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL STORY SECTION */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-luxury-serif text-ink-900 mb-8">
                Why I Chose Insurance
              </h2>
              <div className="space-y-6 text-lg text-ink-900/80 leading-relaxed">
                <p>
                  After watching my own family struggle with confusing insurance options and unexpected medical bills, I realized how broken the system was for everyday people.
                </p>
                <p>
                  In 2009, I got my license with one mission: to be the advocate families wish they had when navigating insurance decisions. No sales pressure, no confusing jargon—just honest guidance from someone who genuinely cares about your family's protection.
                </p>
                <p>
                  Today, I've helped over 1,000 families find better coverage while typically saving them 30% or more on premiums. But the real reward? The peace of mind my clients feel knowing they have an expert in their corner.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-luxury">
              <h3 className="text-2xl font-bold text-ink-900 mb-6">What I Specialize In</h3>
              <div className="grid gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-jade-600 flex-shrink-0" />
                    <span className="text-ink-900">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-ink-900/10">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-brand-jade-600" />
                    <a href={BRAND.phoneTel} className="text-brand-jade-600 font-semibold hover:text-brand-jade-500 transition-colors">
                      {BRAND.phoneHuman}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-brand-jade-600" />
                    <a href={`mailto:${BRAND.email}`} className="text-brand-jade-600 font-semibold hover:text-brand-jade-500 transition-colors">
                      {BRAND.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-surface-base to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-luxury-serif text-ink-900 mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-ink-900/70 max-w-2xl mx-auto">
              15+ years of dedicated service, continuous learning, and client advocacy
            </p>
          </div>
          <CareerTimeline />
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* CLIENT TESTIMONIALS */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-luxury-serif text-ink-900 mb-6">
              What Families Say
            </h2>
            <p className="text-xl text-ink-900/70 max-w-2xl mx-auto">
              Real stories from real families who found better coverage and savings
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-luxury">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-ink-900 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-ink-900">{testimonial.author}</div>
                    <div className="text-sm text-ink-900/60">{testimonial.location}</div>
                  </div>
                  {testimonial.savings && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-brand-jade-600">{testimonial.savings}</div>
                      <div className="text-sm text-ink-900/60">Saved</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <TestimonialsGrid />
        </div>
      </section>

      {/* GEOGRAPHIC COVERAGE */}
      <GeographicCoverage />

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 lg:py-32 bg-ink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora-sweep opacity-10" />
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold font-luxury-serif mb-8">
              Ready to Find Better Coverage?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join over 1,000 families who trust Bradford Informed Guidance for their insurance needs. 
              Get a free, no-obligation quote and discover how much you could save.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="/lead"
                className="inline-flex items-center justify-center px-10 py-5 bg-brand-jade-600 hover:bg-brand-jade-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-luxury text-lg"
                data-gtm={`${BRAND.gtm.quote}_about_final`}
              >
                Get Your Free Quote
              </a>
              <a
                href={BRAND.phoneTel}
                className="inline-flex items-center justify-center px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 backdrop-blur-md transition-all duration-300 text-lg"
                data-gtm={`${BRAND.gtm.call}_about_final`}
              >
                <Phone className="w-5 h-5 mr-3" />
                Call {BRAND.phoneHuman}
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Quick 15-min consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Licensed professional</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};