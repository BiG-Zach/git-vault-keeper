import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { HeartPulse, ShieldCheck, Users, Clock3, Stethoscope, CheckCircle2, BookOpen, Shield, DollarSign, Heart, Zap, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import LuxuryHealthHero from '../components/health/LuxuryHealthHero';
import { blogPosts, type BlogPost } from './Resources';
import { organizationSchema, serviceSchema } from '../utils/schema';
import { SEO_IMAGES } from '../utils/seoAssets';

const healthArticles: BlogPost[] = Object.values(blogPosts)
  .flat()
  .filter(post => post.category === 'Health Insurance');

export default function HealthInsurance() {
  const heroImage = SEO_IMAGES.healthService;
  const prefersReducedMotion = useReducedMotion();
  const structuredData = [
    organizationSchema(),
    serviceSchema(
      ['Affordable Health Insurance', 'PPO Health Coverage', 'Health Insurance Broker Services'],
      heroImage.src
    )
  ];

  return (
    <main id="content" className="has-sticky-cta">
      <SEO
        title="Affordable Health Insurance Broker - 6 States Licensed | No Enrollment Fees"
        description="Compare affordable health insurance plans with licensed broker. 15+ A-rated carriers, no enrollment fees, 24-hour response guarantee."
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

      <LuxuryHealthHero />

      {/* Premium Value Proposition Section */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(15, 23, 42, 0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
          aria-hidden="true"
        />
        
        <div className="container-default relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              Licensed in 6 States
            </span>
            <h2 className="font-luxury-serif text-4xl font-bold text-slate-900 md:text-5xl leading-tight">
              Personalized Health Plans with <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Rapid Turnaround</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We compare underwritten PPO, HMO, and hybrid options from trusted carriers to ensure you receive the strongest coverage for your needs. Our team handles underwriting paperwork, provider matching, and renewal strategies so you stay focused on your family or business.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div 
                className="group rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-6 shadow-sm hover:shadow-premium hover:border-emerald-300 transition-all duration-300"
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <HeartPulse className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-900">Clinical Confidence</h3>
                <p className="mt-2 text-sm text-emerald-900/80 leading-relaxed">
                  Nationwide PPO networks and supplemental plans built for major medical events, preventive care, and everyday visits.
                </p>
              </motion.div>
              <motion.div 
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-premium hover:border-slate-300 transition-all duration-300"
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <Clock3 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Quotes in 45–90 Minutes</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Receive tailored health plan comparisons the same day, complete with cost projections and concierge enrollment support.
                </p>
              </motion.div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Plan types we navigate</h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">Individual, family, group, and short-term coverage options with ACA compliance and subsidy optimization across every state we serve.</p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <div><span className="font-semibold text-slate-900">Individual plans:</span> Tailored benefits with subsidy checks and statewide carrier access.</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <div><span className="font-semibold text-slate-900">Family plans:</span> Coordinated networks that keep pediatric and specialist care in-network.</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <div><span className="font-semibold text-slate-900">Group coverage:</span> Solutions for entrepreneurs and small teams needing multi-state portability.</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <div><span className="font-semibold text-slate-900">Short-term and bridge options:</span> Gap coverage with clear renewal and conversion timelines.</div>
                </li>
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

          {/* Premium Trust Card with Gradient Background */}
          <motion.div 
            className="space-y-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 lg:p-10 text-white shadow-luxury relative overflow-hidden"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Premium Background Gradient Orb */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true" />
            
            <div className="relative z-10">
              <h3 className="font-luxury-sans text-2xl lg:text-3xl font-semibold mb-6">Why households trust Bradford</h3>
              <ul className="space-y-5 text-white/90">
                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">1,000+ families guided across six states</p>
                    <p className="text-sm text-white/70 leading-relaxed">Personalized recommendations for individuals, families, and small employers in every market we serve.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Transparent pricing guaranteed</p>
                    <p className="text-sm text-white/70 leading-relaxed">No enrollment fees, free plan comparisons, and carrier-direct pricing with zero hidden costs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">15+ A-rated carriers</p>
                    <p className="text-sm text-white/70 leading-relaxed">Best Insurance Group partnership unlocks multi-state PPO networks and exclusive programs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Year-round advocacy</p>
                    <p className="text-sm text-white/70 leading-relaxed">Renewals, claims, and provider escalations handled by a dedicated advisor.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Educational Section - What to Look for in Health Insurance */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Premium Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(15, 23, 42, 0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
          aria-hidden="true"
        />
        
        <div className="container-default relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-full px-6 py-3 mb-6 shadow-sm">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-bold text-sm tracking-wide">EDUCATIONAL GUIDE</span>
            </div>
            <h2 className="font-luxury-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What to Look for in <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Health Insurance</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Key factors I evaluate to ensure you get optimal coverage for your situation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Coverage Essentials - Premium Card with Gradient Background */}
            <motion.div 
              className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-luxury hover:border-emerald-200 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" aria-hidden="true" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Coverage Essentials</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Essential Health Benefits</p>
                      <p className="leading-relaxed">Verify all ACA-required categories are covered with clear explanations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Preventive Care</p>
                      <p className="leading-relaxed">100% covered checkups, screenings, and immunizations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Prescription Coverage</p>
                      <p className="leading-relaxed">Medication formulary analysis and copay structure guidance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cost Considerations - Premium Blue Card */}
            <motion.div 
              className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-luxury hover:border-blue-200 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" aria-hidden="true" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Cost Analysis</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Total Cost Calculation</p>
                      <p className="leading-relaxed">Premiums plus projected out-of-pocket based on usage patterns.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Subsidy Optimization</p>
                      <p className="leading-relaxed">For FL, GA, SC, TN, AL, TX residents—maximize available savings.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Hidden Cost Detection</p>
                      <p className="leading-relaxed">Identify surprise costs like separate drug deductibles or ER fees.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Network & Access - Premium Purple Card */}
            <motion.div 
              className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-luxury hover:border-purple-200 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" aria-hidden="true" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Network Quality</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Provider Density</p>
                      <p className="leading-relaxed">Adequate network size in your area, especially for specialists.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Hospital Access</p>
                      <p className="leading-relaxed">Quality facilities in-network for routine and emergency care.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Multi-State Coverage</p>
                      <p className="leading-relaxed">Network portability across our licensed states for travelers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Premium Plan Type Guide */}
          <motion.div 
            className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 lg:p-10 shadow-premium border border-slate-200"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-luxury-sans text-3xl font-semibold text-slate-900 mb-8 text-center">
              Plan Types: <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Real-World Use Cases</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: 'HMO Plans', desc: 'Lower costs with primary care coordination.', best: 'Predictable needs', color: 'emerald' },
                { icon: Zap, title: 'PPO Plans', desc: 'Specialist access without referrals, travel flexibility.', best: 'Flexibility', color: 'blue' },
                { icon: TrendingUp, title: 'HDHP/HSA', desc: 'Tax-advantaged savings for future healthcare costs.', best: 'Long-term savers', color: 'purple' },
                { icon: Clock, title: 'Short-Term', desc: 'Gap coverage between jobs or enrollment periods.', best: 'Temporary needs', color: 'orange' }
              ].map((plan, idx) => (
                <motion.div 
                  key={idx} 
                  className="group text-center p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-premium hover:border-slate-300 transition-all duration-300"
                  whileHover={prefersReducedMotion ? {} : { y: -4 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br from-${plan.color}-500 to-${plan.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 text-lg mb-2">{plan.title}</h4>
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">{plan.desc}</p>
                  <p className={`text-xs text-${plan.color}-600 font-semibold px-3 py-1 bg-${plan.color}-50 rounded-full inline-block`}>Best: {plan.best}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mt-8 p-6 bg-slate-100 rounded-xl">
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

      <section className="section bg-slate-50" aria-labelledby="health-articles-heading">
        <div className="container-default">
          <div className="mb-10 text-center">
            <h2 id="health-articles-heading" className="text-3xl font-bold text-slate-900 md:text-4xl">
              Health Insurance Insights &amp; Guides
            </h2>
            <p className="mt-3 text-slate-600">
              Stay current with the latest strategies on PPO plans, deductibles, and open enrollment timing.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {healthArticles.map(article => (
              <article
                key={article.slug}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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

      {/* Premium Final CTA Section with Animated Gradient */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-blue-600 text-white">
        {/* Premium Animated Background Orbs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-blue-600/20 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          aria-hidden="true"
        />

        <div className="container-default relative z-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-luxury-serif text-4xl font-bold md:text-5xl lg:text-6xl mb-6" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}>
              Ready for coverage clarity?
            </h2>
            <p className="text-xl lg:text-2xl text-white/95 leading-relaxed font-luxury-sans mb-8">
              Connect with a licensed health insurance broker who will guide you through underwriting, provider selection, and long-term savings across all six licensed states.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.a 
                href="https://calendly.com/bradfordinformedguidance" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 hover:bg-slate-50 font-semibold text-lg rounded-2xl shadow-luxury transition-all duration-300"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                Get Your Free Health Plan Analysis
              </motion.a>
              <motion.a 
                href="tel:+16893256570" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg rounded-2xl transition-all duration-300"
                whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              >
                Call (689) 325-6570
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="grid gap-6 rounded-3xl bg-white/10 backdrop-blur-md p-8 border border-white/20 shadow-luxury"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: ShieldCheck, text: 'Licensed in Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas.' },
              { icon: Clock3, text: 'Most households receive plan recommendations within 90 minutes of consultation.' },
              { icon: Users, text: 'Dedicated concierge for renewals, claims follow-up, and provider escalations.' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-white/90 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
