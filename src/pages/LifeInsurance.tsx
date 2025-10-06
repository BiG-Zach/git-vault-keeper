import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, PiggyBank, Users, Sparkles, Clock3, FileSignature, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/headers/PageHero';
import Button from '../components/Button';
import { blogPosts, type BlogPost } from './Resources';
import { organizationSchema, serviceSchema } from '../utils/schema';

const lifeInsuranceArticles: BlogPost[] = Object.values(blogPosts)
  .flat()
  .filter(post => post.category === 'Life Insurance');

export default function LifeInsurance() {
  const structuredData = [
    organizationSchema(),
    serviceSchema(['Life Insurance Planning', 'Whole Life & Term Insurance', 'Life Insurance Broker'])
  ];

  return (
    <main id="content" className="has-sticky-cta">
      <SEO
        title="Life Insurance Broker Across Six States | Bradford Informed Guidance"
        description="Licensed life insurance broker delivering custom term, whole, and final expense coverage in Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas."
        path="/life-insurance"
        meta={[
          {
            name: 'keywords',
            content: 'life insurance broker Florida, Georgia life insurance advisor, South Carolina life insurance, Tennessee legacy planning, Alabama life insurance specialist, Texas life insurance broker, whole life insurance, term life insurance'
          },
          { property: 'og:title', content: 'Life Insurance Broker Across Six States | Bradford Informed Guidance' },
          {
            property: 'og:description',
            content: 'Compare term, whole, and universal life insurance with a licensed broker serving Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas.'
          },
          { property: 'og:type', content: 'website' }
        ]}
        scripts={structuredData.map(innerHTML => ({ innerHTML }))}
      />

      <PageHero
        title="Life Insurance for Generational Security"
        subtitle="From income replacement to legacy planning, our concierge team builds life insurance strategies for growing families, entrepreneurs, and retirees across six licensed states."
      >
        <div className="hidden md:block">
          <div className="rounded-2xl bg-white/90 p-6 shadow-lg ring-1 ring-black/5">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Coverage priorities we solve</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                Mortgage protection and income replacement
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                Business succession &amp; key person policies
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                Final expense coverage with living benefits
              </li>
            </ul>
          </div>
        </div>
      </PageHero>

      <section className="section bg-white">
        <div className="container-default grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/10 px-4 py-1.5 text-sm font-semibold text-slate-900">
              <Sparkles className="h-4 w-4" />
              Tailored for Each Life Stage
            </span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Custom Life Insurance Plans with Living Benefits
            </h2>
            <p className="text-lg text-slate-600">
              Whether you are safeguarding a young family or planning a wealth transfer, Bradford Informed Guidance designs layered strategies using term, whole life, indexed universal, and supplemental riders. We negotiate underwriting, accelerate approvals, and monitor policies for long-term performance.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 shadow-sm">
                <HeartHandshake className="h-10 w-10 text-emerald-500" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-emerald-900">Human-Centered Planning</h3>
                <p className="mt-2 text-sm text-emerald-900/80">
                  Personalized coverage reviews every renewal cycle with action plans for changing income, family size, and business ownership.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <PiggyBank className="h-10 w-10 text-slate-600" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Build Cash Value Efficiently</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Access indexed growth strategies, tax-advantaged accumulation, and living benefits that can offset medical costs or supplement retirement income.
                </p>
              </div>
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
                Get Your Personalized Life Insurance Analysis
              </Button>
              <Button as="a" href="tel:+16893256570" variant="outline" size="lg">
                Speak with an Advisor
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold">Licensed Experts for Life Insurance</h3>
            <ul className="space-y-4 text-slate-200">
              <li className="flex items-start gap-3">
                <HeartHandshake className="mt-1 h-6 w-6 text-emerald-300" />
                <div>
                  <p className="font-semibold">Personalized policy design</p>
                  <p className="text-sm text-slate-300">Every plan is built around your family's goals, business obligations, and legacy priorities.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FileSignature className="mt-1 h-6 w-6 text-emerald-300" />
                <div>
                  <p className="font-semibold">Multi-carrier comparisons</p>
                  <p className="text-sm text-slate-300">Best Insurance Group partnership unlocks 15+ A-rated carriers for optimal coverage, riders, and pricing.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-6 w-6 text-emerald-300" />
                <div>
                  <p className="font-semibold">Estate planning coordination</p>
                  <p className="text-sm text-slate-300">Licensed across Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas with attorney and CPA partnerships.</p>
                </div>
              </li>
            </ul>
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
                <span>Helped families save an average of $200 per month while increasing coverage safeguards.</span>
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
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a 
                href="https://calendly.com/bradfordinformedguidance" 
                className="inline-flex items-center justify-center h-11 rounded-md px-8 bg-white text-emerald-700 hover:bg-emerald-100 font-medium transition-colors"
              >
                Get Your Personalized Life Insurance Analysis
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
              <Clock3 className="mt-1 h-6 w-6 text-white" />
              <p>Underwriting decisions often delivered within 48 hours for qualified clients.</p>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-6 w-6 text-white" />
              <p>Access to A+ rated carriers with accelerated death benefit and chronic illness riders.</p>
            </div>
            <div className="flex items-start gap-3">
              <Users className="mt-1 h-6 w-6 text-white" />
              <p>Dedicated concierge for annual policy reviews, beneficiary updates, and claims support.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


