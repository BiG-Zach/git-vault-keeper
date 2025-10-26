import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, PiggyBank, Users, Sparkles, Clock3, FileSignature, CheckCircle2, BookOpen, Heart, Shield, TrendingUp, Building, Briefcase, Home } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { blogPosts, type BlogPost } from './Resources';
import { organizationSchema, serviceSchema } from '../utils/schema';
import { SEO_IMAGES } from '../utils/seoAssets';
import RelatedPosts from '../components/blog/RelatedPosts';

const lifeInsuranceArticles: BlogPost[] = Object.values(blogPosts)
  .flat()
  .filter(post => post.category === 'Life Insurance');

export default function LifeInsurance() {
  const prefersReducedMotion = useReducedMotion();
  const heroImage = SEO_IMAGES.lifeService;
  const structuredData = [
    organizationSchema(),
    serviceSchema(
      ['Life Insurance Planning', 'Whole Life & Term Insurance', 'Life Insurance Broker'],
      heroImage.src,
      {
        name: 'Life Insurance Brokerage Services',
        description: 'Comprehensive life insurance solutions including term, whole life, and universal life policies with living benefits',
        url: 'https://www.bradfordinformedguidance.com/life-insurance',
      }
    )
  ];

  return (
    <main id="content" className="has-sticky-cta">
      <SEO
        title="Life Insurance Broker - 6 States Licensed | Personalized Coverage & 24-Hour Response"
        description="Customize term, whole, universal, and final expense coverage across FL, GA, SC, TN, AL, TX. Multi-carrier comparisons with 24-hour response guarantee and 8 years expertise."
        path="/life-insurance"
        image={heroImage.src}
        meta={[
          {
            name: 'keywords',
            content: 'life insurance broker, multi-state life insurance, FL GA SC TN AL TX, personalized policy design, 24-hour response guarantee, Best Insurance Group partner, term life, whole life'
          },
          { property: 'og:title', content: 'Life Insurance Broker - 6 States Licensed | Personalized Coverage & 24-Hour Response | Bradford Informed Guidance' },
          {
            property: 'og:description',
            content: 'Customize term, whole, universal, and final expense coverage across FL, GA, SC, TN, AL, TX with 24-hour response guarantee and multi-carrier comparisons.'
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
                /assets/backgrounds/life-insurance-hero-400w.webp 400w,
                /assets/backgrounds/life-insurance-hero-800w.webp 800w,
                /assets/backgrounds/life-insurance-hero-1200w.webp 1200w,
                /assets/backgrounds/life-insurance-hero-1600w.webp 1600w,
                /assets/backgrounds/life-insurance-hero-2000w.webp 2000w
              "
              sizes="100vw"
              type="image/webp"
            />
            <img
              src="/assets/backgrounds/life-insurance-hero.webp"
              alt="Professional insurance advisor protecting family - life insurance coverage concept"
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
                Protect Your Family's Future
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-lg lg:text-xl text-white mb-8 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg"
              >
                Comprehensive life insurance solutions tailored to your family's needs and financial goals.
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
                  href="/quote"
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-105 border border-emerald-400/50 shadow-2xl hover:shadow-emerald-500/50"
                >
                  <span className="relative z-10">Get Life Insurance Quote</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </a>
                <a
                  href="/contact"
                  className="relative overflow-hidden backdrop-blur-md border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white/70 transition-all duration-300 shadow-xl"
                >
                  Speak with an Expert
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
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-slate-900 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200">
              <Sparkles className="h-4 w-4" />
              Tailored for Each Life Stage
            </span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl font-luxury-serif">
              Custom Life Insurance Plans with Living Benefits
            </h2>
            <p className="text-lg text-slate-600">
              Whether you are safeguarding a young family or planning a wealth transfer, Bradford Informed Guidance designs layered strategies using term, whole life, indexed universal, and supplemental riders. We negotiate underwriting, accelerate approvals, and monitor policies for long-term performance.
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
                  <HeartHandshake className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-emerald-900">Human-Centered Planning</h3>
                <p className="mt-2 text-sm text-emerald-900/80 leading-relaxed">
                  Personalized coverage reviews every renewal cycle with action plans for changing income, family size, and business ownership.
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
                  <PiggyBank className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Build Cash Value Efficiently</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Access indexed growth strategies, tax-advantaged accumulation, and living benefits that can offset medical costs or supplement retirement income.
                </p>
              </motion.div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">When to choose each policy type</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li><span className="font-semibold text-slate-900">Term Life:</span> Young families, mortgage protection, or income replacement for 10-30 year goals.</li>
                <li><span className="font-semibold text-slate-900">Whole Life:</span> Permanent coverage, cash value accumulation, and legacy planning with guaranteed growth.</li>
                <li><span className="font-semibold text-slate-900">Indexed Universal Life:</span> Flexible premiums with market-linked growth for business owners and high-income earners.</li>
                <li><span className="font-semibold text-slate-900">Final Expense:</span> Seniors 50+ needing simplified underwriting for burial costs and small estate settlement.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button as="a" href="https://calendly.com/bradfordinformedguidance" variant="primary" size="lg">
                Secure Your Family's Future - Free Strategy Session
              </Button>
              <Button as="a" href="tel:+16893256570" variant="outline" size="lg">
                Speak with a Licensed Life Insurance Specialist
              </Button>
            </div>
            <p className="text-sm text-slate-600 text-center">
              No obligation • Licensed professionals • Confidential consultation
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-2xl border border-slate-700"
          >
            <h3 className="text-2xl font-semibold">Licensed Experts for Life Insurance</h3>
            <ul className="space-y-4 text-slate-200">
              <li className="flex items-start gap-3 group">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <HeartHandshake className="mt-1 h-6 w-6 text-emerald-400" />
                </motion.div>
                <div>
                  <p className="font-semibold">10 A to A+ rated carriers<sup>[1][5][8][16][21][29][35]</sup></p>
                  <p className="text-sm text-slate-300">Access to over $50M in coverage placed for families across six states. Includes #1 ranked carrier in J.D. Power 2025 Individual Life Insurance Study<sup>[20]</sup>. Every plan is built around your family's goals, business obligations, and legacy priorities.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <FileSignature className="mt-1 h-6 w-6 text-emerald-400" />
                </motion.div>
                <div>
                  <p className="font-semibold">Licensed Experts</p>
                  <p className="text-sm text-slate-300">Multi-state licensed with 8+ years of experience. Direct partnerships with estate attorneys and CPAs for comprehensive planning.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <ShieldCheck className="mt-1 h-6 w-6 text-emerald-400" />
                </motion.div>
                <div>
                  <p className="font-semibold">Transparent Process</p>
                  <p className="text-sm text-slate-300">Transparent pricing guaranteed. Average approval time: 48 hours for qualified applicants. 98% client satisfaction on policy recommendations.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
      
      <section className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container-default">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text-luxury mb-2">$50M+</div>
              <p className="text-sm text-slate-600 font-medium">In Coverage Secured</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text-luxury mb-2">1,000+</div>
              <p className="text-sm text-slate-600 font-medium">Families Protected</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text-luxury mb-2">48hrs</div>
              <p className="text-sm text-slate-600 font-medium">Average Approval Time</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text-luxury mb-2">98%</div>
              <p className="text-sm text-slate-600 font-medium">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-default">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-900">
              <BookOpen className="h-4 w-4" />
              LIFE INSURANCE GUIDE
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Life Insurance by Life Stage: A Strategic Approach
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              With 8 years of experience, we match coverage to your life stage, financial goals, and family obligations—ensuring the right protection at the right price.
            </p>
          </div>

          {/* Life Stage Grid */}
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <Heart className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Young Professionals (20s-30s)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Building your career and starting a family requires affordable, flexible protection that grows with you.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span><strong>Term life focus:</strong> 20-30 year terms for mortgage and income replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span><strong>Affordability:</strong> Lock in low rates while you're young and healthy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span><strong>Growing coverage:</strong> Convertible policies that adapt to life changes</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-emerald-200 p-3">
                  <Home className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-900">Growing Families (30s-40s)</h3>
              </div>
              <p className="text-emerald-900/80 mb-4">
                Peak earning years with maximum financial obligations require comprehensive protection strategies.
              </p>
              <ul className="space-y-2 text-sm text-emerald-900/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Maximum protection:</strong> $500K-$2M+ coverage for mortgage and dependents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Mortgage coverage:</strong> Policies aligned with loan payoff timelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Education planning:</strong> Guaranteed funds for college expenses</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-slate-100 p-3">
                  <Building className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Established Professionals (50s+)</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Transitioning from income replacement to legacy planning and estate optimization.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span><strong>Estate planning:</strong> Tax-efficient wealth transfer strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span><strong>Legacy building:</strong> Permanent coverage with cash value growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span><strong>Permanent options:</strong> Whole life and indexed universal life policies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Policy Types Comparison */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Understanding Your Policy Options</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <h4 className="font-semibold text-slate-900">Term Life</h4>
                </div>
                <p className="text-sm text-slate-600 mb-3">Most affordable option for temporary needs with fixed premiums.</p>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>10-30 year coverage periods</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>Ideal for mortgage protection</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>Convertible to permanent</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-5 w-5 text-emerald-700" />
                  <h4 className="font-semibold text-emerald-900">Whole Life</h4>
                </div>
                <p className="text-sm text-emerald-900/80 mb-3">Permanent coverage with guaranteed cash value accumulation.</p>
                <ul className="space-y-1.5 text-xs text-emerald-900/80">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 mt-0.5">•</span>
                    <span>Lifetime protection guarantee</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 mt-0.5">•</span>
                    <span>Tax-deferred cash value growth</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 mt-0.5">•</span>
                    <span>Fixed premiums never increase</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="h-5 w-5 text-slate-600" />
                  <h4 className="font-semibold text-slate-900">Universal Life</h4>
                </div>
                <p className="text-sm text-slate-600 mb-3">Flexible premiums with market-linked growth potential.</p>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>Adjustable death benefits</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>Index-linked cash value</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>Premium payment flexibility</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-5 w-5 text-slate-600" />
                  <h4 className="font-semibold text-slate-900">Final Expense</h4>
                </div>
                <p className="text-sm text-slate-600 mb-3">Simplified coverage for burial costs and small estates.</p>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>No medical exam required</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>$5K-$50K coverage amounts</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>Fast approval for seniors 50+</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Living Benefits Section */}
          <div className="mb-12 rounded-2xl bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Living Benefits: Protection Beyond Death</h3>
            <p className="text-slate-600 mb-6">
              Modern life insurance policies include riders that provide financial support during your lifetime for chronic illness, critical illness, and long-term care needs.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Chronic Illness Riders</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Access up to 90% of your death benefit if diagnosed with a chronic condition requiring long-term care assistance.
                </p>
                <p className="text-xs text-slate-500 italic">
                  Example: A client with Parkinson's disease accessed $180K from their $200K policy to fund in-home care while preserving retirement savings.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Critical Illness Coverage</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Receive accelerated benefits for heart attack, stroke, cancer, or organ transplant to cover medical expenses and lost income.
                </p>
                <p className="text-xs text-slate-500 italic">
                  Example: A 42-year-old business owner received $100K after a heart attack, maintaining business operations during recovery.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Long-Term Care Benefits</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Hybrid policies that combine life insurance with long-term care coverage, eliminating "use it or lose it" concerns.
                </p>
                <p className="text-xs text-slate-500 italic">
                  Example: A couple in their 60s secured $300K in LTC benefits while maintaining a $500K death benefit for heirs.
                </p>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                <h4 className="font-semibold text-emerald-900 mb-3">Real-World Impact</h4>
                <p className="text-sm text-emerald-900/80 mb-3">
                  Living benefits have helped our clients avoid depleting retirement accounts, maintain dignity during illness, and preserve family wealth.
                </p>
                <p className="text-xs text-emerald-700 font-medium">
                  Ask about adding living benefit riders to your policy during your consultation.
                </p>
              </div>
            </div>
          </div>

          {/* Estate Planning Integration */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Estate Planning Integration</h3>
            <p className="text-slate-600 mb-6">
              Life insurance is a cornerstone of sophisticated estate planning, providing liquidity, tax efficiency, and wealth transfer optimization.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  Tax-Free Death Benefits
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  Life insurance proceeds pass to beneficiaries income-tax-free, providing immediate liquidity for estate settlement, debt payoff, and wealth distribution without triggering capital gains or income taxes.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Building className="h-5 w-5 text-emerald-600" />
                  Trust Funding Strategies
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  Irrevocable Life Insurance Trusts (ILITs) remove policy proceeds from your taxable estate while maintaining control over distribution timing and beneficiary access, ideal for estates exceeding federal exemption limits.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-emerald-600" />
                  Business Succession Planning
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  Buy-sell agreements funded with life insurance ensure smooth ownership transitions, provide liquidity for buyouts, and protect business continuity when partners or key executives pass away.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-600" />
                  Wealth Transfer Optimization
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  Premium financing and strategic policy design can leverage life insurance to multiply wealth transfer, equalize inheritances among heirs, and create charitable legacies while minimizing estate tax exposure.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-lg bg-emerald-50 p-4 border border-emerald-200">
              <p className="text-sm text-emerald-900">
                <strong>Coordinated Planning:</strong> We partner with estate attorneys and CPAs across Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas to ensure your life insurance strategy aligns with your overall estate plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Ready to Explore Your Options?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Learn more about our process and the carriers we work with to find your perfect coverage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a href="/our-process" className="group block p-8 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Our Process
              </h3>
              <p className="text-slate-600 mb-4">
                Discover how we simplify life insurance decisions with our transparent, client-first approach.
              </p>
              <span className="text-emerald-600 font-semibold group-hover:underline">
                Learn More →
              </span>
            </a>
            <a href="/carriers" className="group block p-8 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Our Carriers
              </h3>
              <p className="text-slate-600 mb-4">
                Explore our network of 10 A to A+ rated carriers<sup>[1][5][8][16][21][29][35]</sup> and 6 PPO networks<sup>[44][47]</sup> to find the right fit for your needs.
              </p>
              <span className="text-emerald-600 font-semibold group-hover:underline">
                View Carriers →
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50" aria-labelledby="life-articles-heading">
        <div className="container-default">
          <div className="mb-10 text-center">
            <h2 id="life-articles-heading" className="text-3xl font-bold text-slate-900 md:text-4xl">
              Life Insurance Education &amp; Tools
            </h2>
            <p className="mt-3 text-slate-600">
              Understand the difference between term, whole, and universal life, plus strategies for pre-existing health conditions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {lifeInsuranceArticles.map(article => (
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
                  <span>{article.wordCount}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-default max-w-4xl">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Common Questions We Answer</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• How much life insurance do I actually need?</li>
              <li>• What's the difference between term and permanent coverage?</li>
              <li>• Can I get coverage if I have health conditions?</li>
              <li>• How quickly can I get approved and covered?</li>
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              Get personalized answers in your free consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-slate-900 via-emerald-700 to-slate-900 text-white">
        <div className="container-default grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Protect Your Legacy with Confidence</h2>
            <p className="mt-4 text-lg text-emerald-100">
              Let our team deliver life insurance options with living benefits, accelerated underwriting, and portable coverage for multi-state households.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-emerald-100">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4" />
                <span>Average savings of $200/month while increasing coverage by 50%</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4" />
                <span>Licensed and regulated in 6 states</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4" />
                <span>8+ years of life insurance expertise</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4" />
                <span>Coordinated legacy strategies with estate attorneys and CPAs for high-net-worth households.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4" />
                <span>Simplified life insurance decisions for clients across Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas.</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-emerald-100 font-medium">
              What happens next: 15-minute consultation → Custom recommendations → No-pressure decision
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://calendly.com/bradfordinformedguidance"
                className="group relative overflow-hidden inline-flex items-center justify-center h-12 rounded-xl px-8 bg-white text-emerald-700 hover:bg-emerald-50 font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">Get Your Free Life Insurance Strategy Session</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-100/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <a
                href="tel:+16893256570"
                className="inline-flex items-center justify-center h-12 rounded-xl px-8 border-2 border-white text-white hover:bg-white/10 font-semibold transition-all duration-300 shadow-lg"
              >
                Call (689) 325-6570
              </a>
            </div>
            <p className="mt-4 text-xs text-emerald-100">
              100% confidential • No obligation to purchase • Licensed in 6 states
            </p>
            <div className="mt-8 pt-8 border-t border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">What Happens After You Book</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-300 mb-2">1</div>
                  <p className="text-sm text-emerald-100"><strong>15-Minute Discovery Call</strong><br/>We learn about your family, goals, and coverage needs</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-300 mb-2">2</div>
                  <p className="text-sm text-emerald-100"><strong>Custom Recommendations</strong><br/>Receive personalized policy options within 48 hours</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-300 mb-2">3</div>
                  <p className="text-sm text-emerald-100"><strong>Your Decision, Your Timeline</strong><br/>No pressure - we're here when you're ready</p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-6 rounded-3xl bg-white/10 p-8 text-sm shadow-2xl backdrop-blur-md border border-white/20"
          >
            <div className="flex items-start gap-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                <Clock3 className="mt-1 h-7 w-7 text-emerald-300" />
              </motion.div>
              <p className="text-base">Underwriting decisions often delivered within 48 hours for qualified clients.</p>
            </div>
            <div className="flex items-start gap-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                <ShieldCheck className="mt-1 h-7 w-7 text-emerald-300" />
              </motion.div>
              <p className="text-base">Access to A to A+ rated carriers<sup>[1][5][8][16][21]</sup> with accelerated death benefit and chronic illness riders.</p>
            </div>
            <div className="flex items-start gap-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                <Users className="mt-1 h-7 w-7 text-emerald-300" />
              </motion.div>
              <p className="text-base">Dedicated concierge for annual policy reviews, beneficiary updates, and claims support.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Content Section */}
      <RelatedPosts
        slugs={[
          '/blog/term-vs-whole-life-insurance-2025',
          '/blog/life-insurance-young-adults-guide',
          '/blog/how-much-life-insurance-calculator',
          '/quote'
        ]}
        heading="Continue Learning About Life Insurance"
      />
    </main>
  );
}

