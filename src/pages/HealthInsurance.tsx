import { Link } from 'react-router-dom';
import { HeartPulse, ShieldCheck, Users, Clock3, Stethoscope, CheckCircle2, BookOpen, Shield, DollarSign, Heart, Zap, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/headers/PageHero';
import Button from '../components/Button';
import { blogPosts, type BlogPost } from './Resources';
import { organizationSchema, serviceSchema } from '../utils/schema';
import { SEO_IMAGES } from '../utils/seoAssets';

const healthArticles: BlogPost[] = Object.values(blogPosts)
  .flat()
  .filter(post => post.category === 'Health Insurance');

export default function HealthInsurance() {
  const heroImage = SEO_IMAGES.healthService;
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
        description="Compare affordable health insurance across FL, GA, SC, TN, AL, TX. Licensed broker with 15+ A-rated carriers, no enrollment fees, 24-hour response guarantee."
        path="/health-insurance"
        image={heroImage.src}
        meta={[
          {
            name: 'keywords',
            content: 'affordable health insurance, health insurance broker, 6 states licensed, no enrollment fees, FL GA SC TN AL TX, Best Insurance Group partner, A-rated carriers'
          },
          { property: 'og:title', content: 'Affordable Health Insurance Broker - 6 States Licensed | No Enrollment Fees | Bradford Informed Guidance' },
          {
            property: 'og:description',
            content: 'Compare affordable health insurance across FL, GA, SC, TN, AL, TX with no enrollment fees and 24-hour response guarantee.'
          },
          { property: 'og:type', content: 'website' },
          { property: 'og:image:alt', content: heroImage.alt },
          { name: 'twitter:image:alt', content: heroImage.alt }
        ]}
        scripts={structuredData.map(innerHTML => ({ innerHTML }))}
      />

      <PageHero
        title="Affordable Health Insurance Guidance"
        subtitle="Licensed experts helping families, entrepreneurs, and early retirees secure comprehensive health coverage in Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas."
        bgUrl={heroImage.src}
      >
        <div className="hidden md:block">
          <div className="rounded-2xl bg-white/90 p-6 shadow-lg ring-1 ring-black/5">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">What we deliver</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                PPO networks with next-day effective dates
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                Concierge support for claims and renewals
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                Cost control strategies for self-employed households
              </li>
            </ul>
          </div>
        </div>
      </PageHero>

      <section className="section bg-white">
        <div className="container-default grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              Licensed in 6 States
            </span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Personalized Health Plans with Rapid Turnaround
            </h2>
            <p className="text-lg text-slate-600">
              We compare underwritten PPO, HMO, and hybrid options from trusted carriers to ensure you receive the strongest coverage for your needs. Our team handles underwriting paperwork, provider matching, and renewal strategies so you stay focused on your family or business.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 shadow-sm">
                <HeartPulse className="h-10 w-10 text-emerald-500" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-emerald-900">Clinical Confidence</h3>
                <p className="mt-2 text-sm text-emerald-900/80">
                  Nationwide PPO networks and supplemental plans built for major medical events, preventive care, and everyday visits.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Clock3 className="h-10 w-10 text-slate-600" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Quotes in 45â€“90 Minutes</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Receive tailored health plan comparisons the same day, complete with cost projections and concierge enrollment support.
                </p>
              </div>
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
          </div>
          <div className="space-y-6 rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold">Why households trust Bradford</h3>
            <ul className="space-y-4 text-slate-200">
              <li className="flex items-start gap-3">
                <Users className="mt-1 h-6 w-6 text-emerald-300" />
                <div>
                  <p className="font-semibold">1,000+ families guided across six states</p>
                  <p className="text-sm text-slate-300">Personalized recommendations for individuals, families, and small employers in every market we serve.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-6 w-6 text-emerald-300" />
                <div>
                  <p className="font-semibold">Transparent pricing guaranteed</p>
                  <p className="text-sm text-slate-300">No enrollment fees, free plan comparisons, and carrier-direct pricing with zero hidden costs.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Stethoscope className="mt-1 h-6 w-6 text-emerald-300" />
                <div>
                  <p className="font-semibold">15+ A-rated carriers</p>
                  <p className="text-sm text-slate-300">Best Insurance Group partnership unlocks multi-state PPO networks and exclusive programs.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-6 w-6 text-emerald-300" />
                <div>
                  <p className="font-semibold">Year-round advocacy</p>
                  <p className="text-sm text-slate-300">Renewals, claims, and provider escalations handled by a dedicated advisor.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What to Look for in Health Insurance - Educational Enhancement */}
      <section className="section bg-slate-50">
        <div className="container-default">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-6 py-3 mb-8">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-bold text-sm">EDUCATIONAL GUIDE</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What to Look for in Health Insurance: A Professional Guide
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              After 8 years of helping families choose health insurance across 6 states, here are the key factors I evaluate for every client to ensure you get the best coverage for your situation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Coverage Essentials */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Coverage Essentials</h3>
              
              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Essential Health Benefits</p>
                  <p>All ACA-compliant plans must cover 10 essential categories. I verify each plan meets requirements and explain what's included.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Preventive Care Coverage</p>
                  <p>100% covered services include annual checkups, screenings, and immunizations. I ensure you understand what's covered.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Prescription Drug Coverage</p>
                  <p>I check that your medications are covered and help you understand formulary tiers and copay structures.</p>
                </div>
              </div>
            </div>

            {/* Cost Considerations */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Cost Structure Analysis</h3>
              
              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Total Cost of Ownership</p>
                  <p>I calculate premiums + estimated out-of-pocket costs based on your health usage patterns, not just the monthly premium.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Subsidy Optimization</p>
                  <p>For FL, GA, SC, TN, AL, TX residents, I verify subsidy eligibility and ensure you're getting maximum savings available.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Hidden Costs Identification</p>
                  <p>I identify potential surprise costs like separate deductibles for prescription drugs or higher emergency room fees.</p>
                </div>
              </div>
            </div>

            {/* Network & Access */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Network Adequacy</h3>
              
              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Provider Network Size</p>
                  <p>I verify that networks have adequate provider density in your area, especially for specialists you may need.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Hospital Quality & Access</p>
                  <p>I check that high-quality hospitals are in-network and accessible for both routine and emergency care.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Multi-State Coverage</p>
                  <p>If you travel or have family across our licensed states, I ensure network coverage follows you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Type Guide */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
              Health Insurance Plan Types: Real-World Use Cases
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">HMO Plans</h4>
                <p className="text-sm text-slate-600 mb-3">Best for families who want lower costs and don't mind using a primary care physician for referrals.</p>
                <p className="text-xs text-emerald-600 font-semibold">Ideal: Predictable healthcare needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">PPO Plans</h4>
                <p className="text-sm text-slate-600 mb-3">Perfect for those who want flexibility to see specialists without referrals and travel frequently.</p>
                <p className="text-xs text-blue-600 font-semibold">Ideal: Flexibility & choice</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">HDHP/HSA</h4>
                <p className="text-sm text-slate-600 mb-3">Excellent for healthy individuals who want to save for future healthcare costs with tax advantages.</p>
                <p className="text-xs text-purple-600 font-semibold">Ideal: Long-term savers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Short-Term</h4>
                <p className="text-sm text-slate-600 mb-3">Temporary coverage for gaps between jobs, COBRA alternatives, or waiting for open enrollment.</p>
                <p className="text-xs text-orange-600 font-semibold">Ideal: Temporary needs</p>
              </div>
            </div>
          </div>
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
                  <span>{article.wordCount}</span>
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
              State-specific compliance expertise
            </span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Multi-state regulation guidance before you enroll</h2>
            <p className="text-lg text-slate-600">Every consultation includes ACA compliance checks, carrier availability, and subsidy optimization tailored to Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas.</p>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-emerald-500" />
                <span>State-specific underwriting and documentation handled for you with no guesswork or re-submissions.</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 className="mt-1 h-5 w-5 text-emerald-500" />
                <span>Enrollment deadlines and special enrollment windows monitored across all six states.</span>
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

      <section className="section bg-gradient-to-r from-emerald-600 to-sky-600 text-white">
        <div className="container-default grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Ready for coverage clarity?</h2>
            <p className="mt-4 text-lg text-emerald-50">
              Connect with a licensed health insurance broker who will guide you through underwriting, provider selection, and long-term savings across all six licensed states.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a 
                href="https://calendly.com/bradfordinformedguidance" 
                className="inline-flex items-center justify-center h-11 rounded-md px-8 bg-white text-emerald-700 hover:bg-emerald-100 font-medium transition-colors"
              >
                Get Your Free Health Plan Analysis
              </a>
              <a 
                href="tel:+16893256570" 
                className="inline-flex items-center justify-center h-11 rounded-md px-8 border border-white text-white hover:bg-white/10 font-medium transition-colors"
              >
                Call (689) 325-6570
              </a>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl bg-white/10 p-6 text-sm shadow-xl backdrop-blur">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-6 w-6 text-white" />
              <p>Licensed in Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas.</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 h-6 w-6 text-white" />
              <p>Most households receive plan recommendations within 90 minutes of consultation.</p>
            </div>
            <div className="flex items-start gap-3">
              <Users className="mt-1 h-6 w-6 text-white" />
              <p>Dedicated concierge for renewals, claims follow-up, and provider escalations.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}












