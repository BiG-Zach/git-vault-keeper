import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { HeartPulse, ShieldCheck, Users, Clock3, Stethoscope, CheckCircle2, BookOpen, Shield, DollarSign, Heart, Zap, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { blogPosts, type BlogPost } from './Resources';
import { organizationSchema, serviceSchema } from '../utils/schema';
import { SEO_IMAGES } from '../utils/seoAssets';
import RelatedPosts from '../components/blog/RelatedPosts';

const healthArticles: BlogPost[] = Object.values(blogPosts)
  .flat()
  .filter(post => post.category === 'Health Insurance');

export default function HealthInsurance() {
  const prefersReducedMotion = useReducedMotion();
  const heroImage = SEO_IMAGES.healthService;
  const structuredData = [
    organizationSchema(),
    serviceSchema(
      ['Affordable Health Insurance', 'PPO Health Coverage', 'Health Insurance Broker Services'],
      heroImage.src,
      {
        name: 'Health Insurance Brokerage Services',
        description: 'Expert health insurance guidance and carrier comparison across 6 states with 10 carriers and 6 PPO networks',
        url: 'https://www.bradfordinformedguidance.com/health-insurance',
      }
    )
  ];

  return (
    <main id="content" className="has-sticky-cta">
      <link
        rel="preload"
        as="image"
        href="/assets/backgrounds/health-insurance-hero.webp"
        type="image/webp"
      />
      <SEO
        title="Affordable Health Insurance Broker - 6 States Licensed | No Enrollment Fees"
        description="Compare affordable health insurance plans with licensed broker. 10 carriers and 6 PPO networks, no enrollment fees, 24-hour response guarantee."
        path="/health-insurance"
        image={heroImage.src}
        meta={[
          {
            name: 'keywords',
            content: 'affordable health insurance, health insurance broker, 6 states licensed, no enrollment fees, Best Insurance Group partner, A-rated carriers'
          },
          { property: 'og:title', content: 'Affordable Health Insurance Broker - 6 States Licensed | No Enrollment Fees | Bradford Informed Guidance' },
          {
            property: 'og:description',
            content: 'Compare affordable health insurance plans with no enrollment fees and 24-hour response guarantee.'
          },
          { property: 'og:type', content: 'website' },
          { property: 'og:image:alt', content: heroImage.alt },
          { name: 'twitter:image:alt', content: heroImage.alt }
        ]}
        scripts={structuredData.map(innerHTML => ({ innerHTML }))}
      />

      <section className="relative min-h-[70vh] lg:min-h-[75vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <picture>
            <source
              srcSet="
                /assets/backgrounds/health-insurance-hero-400w.webp 400w,
                /assets/backgrounds/health-insurance-hero-800w.webp 800w,
                /assets/backgrounds/health-insurance-hero-1200w.webp 1200w,
                /assets/backgrounds/health-insurance-hero-1600w.webp 1600w,
                /assets/backgrounds/health-insurance-hero-2000w.webp 2000w
              "
              sizes="100vw"
              type="image/webp"
            />
            <img
              src="/assets/backgrounds/health-insurance-hero.webp"
              alt="Healthcare professional using digital technology - modern health insurance solutions"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              width={1600}
              height={900}
            />
          </picture>
          
          {/* Enhanced Triple Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/70" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/20 to-slate-900/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[70vh] lg:min-h-[75vh]">
          <div className="container mx-auto px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-3xl p-8 lg:p-12 border border-white/30 backdrop-blur-md bg-white/5 shadow-2xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl lg:text-6xl xl:text-7xl font-luxury-serif font-bold mb-6 leading-tight drop-shadow-2xl"
              >
                Affordable Health Insurance Guidance
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-lg lg:text-xl text-white mb-8 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg"
              >
                Licensed experts helping families, entrepreneurs, and early retirees secure comprehensive health coverage in Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              >
                <a
                  href="https://calendly.com/bradfordinformedguidance"
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-105 border border-emerald-400/50 shadow-2xl hover:shadow-emerald-500/50"
                >
                  <span className="relative z-10">Get Your Free Health Plan Analysis</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </a>
                <a
                  href="tel:(689) 325-6570"
                  className="relative overflow-hidden backdrop-blur-md border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white/70 transition-all duration-300 shadow-xl"
                >
                  Call (689) 325-6570
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-default grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-emerald-700 bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200">
              <ShieldCheck className="h-4 w-4" />
              Licensed in 6 States
            </span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl font-luxury-serif">
              Personalized Health Plans with Rapid Turnaround
            </h2>
            <p className="text-lg text-slate-600">
              We compare underwritten PPO, HMO, and hybrid options from trusted carriers to ensure you receive the strongest coverage for your needs. Our team handles underwriting paperwork, provider matching, and renewal strategies so you stay focused on your family or business.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4 shadow-lg">
                  <HeartPulse className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-emerald-900">Clinical Confidence</h3>
                <p className="mt-2 text-sm text-emerald-900/80 leading-relaxed">
                  Nationwide PPO networks and supplemental plans built for major medical events, preventive care, and everyday visits.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center mb-4 shadow-lg">
                  <Clock3 className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Quotes in 45–90 Minutes</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Receive tailored health plan comparisons the same day, complete with cost projections and concierge enrollment support.
                </p>
              </motion.div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Plan types we navigate</h3>
              <p className="mt-2 text-sm text-slate-600">Individual, family, group, and short-term coverage options with ACA compliance and subsidy optimization across every state we serve.</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li><span className="font-semibold text-slate-900">Individual plans:</span> Tailored benefits with subsidy checks and statewide carrier access.</li>
                <li><span className="font-semibold text-slate-900">Family plans:</span> Coordinated networks that keep pediatric and specialist care in-network.</li>
                <li><span className="font-semibold text-slate-900">Group coverage:</span> Solutions for entrepreneurs and small teams needing multi-state portability.</li>
                <li><span className="font-semibold text-slate-900">Short-term and bridge options:</span> Gap coverage with clear renewal and conversion timelines.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button as="a" href="https://calendly.com/bradfordinformedguidance" variant="primary" size="lg">
                Get Your Free Health Plan Analysis
              </Button>
              <Button as="a" href="tel:+16893256570" variant="outline" size="lg">
                Call (689) 325-6570
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-2xl border border-slate-700"
          >
            <h3 className="text-2xl font-semibold">Why households trust Bradford</h3>
            <ul className="space-y-4 text-slate-200">
              <li className="flex items-start gap-3 group">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <Users className="mt-1 h-6 w-6 text-emerald-400" />
                </motion.div>
                <div>
                  <p className="font-semibold">1,000+ families guided across six states</p>
                  <p className="text-sm text-slate-300">Personalized recommendations for individuals, families, and small employers in every market we serve.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <CheckCircle2 className="mt-1 h-6 w-6 text-emerald-400" />
                </motion.div>
                <div>
                  <p className="font-semibold">Transparent pricing guaranteed</p>
                  <p className="text-sm text-slate-300">No enrollment fees, free plan comparisons, and carrier-direct pricing with zero hidden costs.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <Stethoscope className="mt-1 h-6 w-6 text-emerald-400" />
                </motion.div>
                <div>
                  <p className="font-semibold">10 A to A+ rated carriers and 6 PPO networks<sup>[1][5][8][16][21][29][35]</sup></p>
                  <p className="text-sm text-slate-300">Best Insurance Group partnership unlocks multi-state PPO networks and exclusive programs with combined assets exceeding $500 billion<sup>[3][6][10][14][22]</sup>.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <ShieldCheck className="mt-1 h-6 w-6 text-emerald-400" />
                </motion.div>
                <div>
                  <p className="font-semibold">Year-round advocacy</p>
                  <p className="text-sm text-slate-300">Renewals, claims, and provider escalations handled by a dedicated advisor.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* What to Look for in Health Insurance - Educational Enhancement */}
      <section className="section bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(16,185,129,0.3)_1px,_transparent_1px)] bg-[length:32px_32px]" />
        </div>
        
        <div className="container-default relative z-10">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-full px-6 py-3 mb-6 border border-emerald-200 shadow-sm">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-bold text-sm tracking-wider">EDUCATIONAL GUIDE</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-luxury-serif">
              What to Look for in <span className="gradient-text-luxury">Health Insurance</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Key factors I evaluate to ensure you get optimal coverage for your situation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Coverage Essentials */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-slate-200 hover:border-emerald-200 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Coverage Essentials</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Essential Health Benefits</p>
                  <p>Verify all ACA-required categories are covered with clear explanations.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Preventive Care</p>
                  <p>100% covered checkups, screenings, and immunizations.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Prescription Coverage</p>
                  <p>Medication formulary analysis and copay structure guidance.</p>
                </div>
              </div>
            </motion.div>

            {/* Cost Considerations */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-slate-200 hover:border-blue-200 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Cost Analysis</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Total Cost Calculation</p>
                  <p>Premiums plus projected out-of-pocket based on usage patterns.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Subsidy Optimization</p>
                  <p>For FL, GA, SC, TN, AL, TX residents—maximize available savings.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Hidden Cost Detection</p>
                  <p>Identify surprise costs like separate drug deductibles or ER fees.</p>
                </div>
              </div>
            </motion.div>

            {/* Network & Access */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-slate-200 hover:border-purple-200 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Network Quality</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Provider Density</p>
                  <p>Adequate network size in your area, especially for specialists.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Hospital Access</p>
                  <p>Quality facilities in-network for routine and emergency care.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Multi-State Coverage</p>
                  <p>Network portability across our licensed states for travelers.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Plan Type Guide */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-200"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-8 text-center font-luxury-serif">
              Plan Types: Real-World Use Cases
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">HMO Plans</h4>
                <p className="text-sm text-slate-600 mb-2">Lower costs with primary care coordination.</p>
                <p className="text-xs text-emerald-600 font-semibold">Best: Predictable needs</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">PPO Plans</h4>
                <p className="text-sm text-slate-600 mb-2">Specialist access without referrals, travel flexibility.</p>
                <p className="text-xs text-blue-600 font-semibold">Best: Flexibility</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">HDHP/HSA</h4>
                <p className="text-sm text-slate-600 mb-2">Tax-advantaged savings for future healthcare costs.</p>
                <p className="text-xs text-purple-600 font-semibold">Best: Long-term savers</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Short-Term</h4>
                <p className="text-sm text-slate-600 mb-2">Gap coverage between jobs or enrollment periods.</p>
                <p className="text-xs text-orange-600 font-semibold">Best: Temporary needs</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-default">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-slate-900 mb-3">Learn More</h4>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <Link to="/carriers" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                View PPO Networks & Carriers
              </Link>
              <Link to="/process" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                How My Process Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="py-12 bg-white">
        <div className="container-default">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
      </div>

      <section className="section bg-gradient-to-b from-slate-50 to-white" aria-labelledby="health-articles-heading">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <h2 id="health-articles-heading" className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl font-luxury-serif mb-4">
              Health Insurance <span className="gradient-text-luxury">Insights &amp; Guides</span>
            </h2>
            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Stay current with the latest strategies on PPO plans, deductibles, and open enrollment timing.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2">
            {healthArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-sm text-emerald-600">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  {article.category}
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900 group-hover:text-emerald-600">
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="mt-3 text-slate-600">{article.preview}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span>{article.readTime}</span>
                  <span>{article.updated}</span>
                  <span>{article.wordCount}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="py-12 bg-gradient-to-b from-white to-slate-50">
        <div className="container-default">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-default grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              Multi-state compliance expertise
            </span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Regulation guidance across our licensed states</h2>
            <p className="text-lg text-slate-600">Every consultation includes ACA compliance checks, carrier availability, and subsidy optimization tailored to your state's requirements.</p>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-emerald-500" />
                <span>State-specific underwriting and documentation handled for you with no guesswork or re-submissions.</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 className="mt-1 h-5 w-5 text-emerald-500" />
                <span>Enrollment deadlines and special enrollment windows monitored across our licensed states.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="mt-1 h-5 w-5 text-emerald-500" />
                <span>Regional carrier relationships ensure your physicians, specialists, and hospitals stay in-network.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-semibold text-emerald-900">What to expect after you book</h3>
            <ul className="space-y-3 text-sm text-emerald-900/80">
              <li><span className="font-semibold text-emerald-900">Pre-call briefing:</span> Summary of available carriers, subsidy estimates, and doctor network checks.</li>
              <li><span className="font-semibold text-emerald-900">Compliance packet:</span> Personalized documentation checklist for your state delivered within 24 hours.</li>
              <li><span className="font-semibold text-emerald-900">Virtual or in-person:</span> Flexible consultations that fit your schedule across all licensed markets.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="py-12 bg-white">
        <div className="container-default">
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
        </div>
      </div>

      <section className="section relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-700 to-slate-900 text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container-default relative z-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl font-luxury-serif mb-6">Ready for coverage clarity?</h2>
              <p className="mt-4 text-lg md:text-xl text-emerald-50 leading-relaxed">
                Connect with a licensed health insurance broker who will guide you through underwriting, provider selection, and long-term savings across all six licensed states.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a 
                  href="https://calendly.com/bradfordinformedguidance" 
                  className="group relative overflow-hidden inline-flex items-center justify-center h-12 rounded-xl px-8 bg-white text-emerald-700 hover:bg-emerald-50 font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span className="relative z-10">Get Your Free Health Plan Analysis</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-100/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </a>
                <a 
                  href="tel:+16893256570" 
                  className="inline-flex items-center justify-center h-12 rounded-xl px-8 border-2 border-white text-white hover:bg-white/10 font-semibold transition-all duration-300 shadow-lg"
                >
                  Call (689) 325-6570
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid gap-6 rounded-3xl bg-white/10 p-8 text-sm shadow-2xl backdrop-blur-md border border-white/20"
            >
              <div className="flex items-start gap-4">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <ShieldCheck className="mt-1 h-7 w-7 text-emerald-300" />
                </motion.div>
                <p className="text-base">Licensed in Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas.</p>
              </div>
              <div className="flex items-start gap-4">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <Clock3 className="mt-1 h-7 w-7 text-emerald-300" />
                </motion.div>
                <p className="text-base">Most households receive plan recommendations within 90 minutes of consultation.</p>
              </div>
              <div className="flex items-start gap-4">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <Users className="mt-1 h-7 w-7 text-emerald-300" />
                </motion.div>
                <p className="text-base">Dedicated concierge for renewals, claims follow-up, and provider escalations.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Content Section */}
      <RelatedPosts
        slugs={[
          '/blog/ppo-hmo-epo-plan-comparison',
          '/blog/health-insurance-deductibles-guide',
          '/blog/health-insurance-open-enrollment-checklist',
          '/quote'
        ]}
        heading="Continue Learning About Health Insurance"
      />
    </main>
  );
}
