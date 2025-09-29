import { Link } from 'react-router-dom';
import { HeartPulse, ShieldCheck, Users, Clock3, Stethoscope, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/headers/PageHero';
import Button from '../components/Button';
import { blogPosts, type BlogPost } from './Resources';
import { organizationSchema, serviceSchema } from '../utils/schema';

const healthArticles: BlogPost[] = Object.values(blogPosts)
  .flat()
  .filter(post => post.category === 'Health Insurance');

export default function HealthInsurance() {
  const structuredData = [
    organizationSchema(),
    serviceSchema(['Affordable Health Insurance', 'PPO Health Coverage', 'Health Insurance Broker Services'])
  ];

  return (
    <main id="content" className="has-sticky-cta">
      <SEO
        title="Affordable Health Insurance Broker | Bradford Informed Guidance"
        description="Compare affordable health insurance with PPO and nationwide coverage options. Work with a licensed broker for self-employed, families, and early retirees across FL, AZ, TX, GA, MI, and NC."
        path="/health-insurance"
        meta={[
          {
            name: 'keywords',
            content: 'affordable health insurance, health insurance broker, PPO plans, family health coverage, Florida health insurance, Arizona health insurance, Texas health insurance, Georgia health insurance'
          },
          { property: 'og:title', content: 'Affordable Health Insurance Broker | Bradford Informed Guidance' },
          {
            property: 'og:description',
            content: 'Explore affordable PPO and custom health insurance options with a licensed broker serving FL, AZ, TX, GA, MI, and NC.'
          },
          { property: 'og:type', content: 'website' }
        ]}
        scripts={structuredData.map(innerHTML => ({ innerHTML }))}
      />

      <PageHero
        title="Affordable Health Insurance Guidance"
        subtitle="Licensed experts helping families, entrepreneurs, and early retirees secure comprehensive health coverage in FL, AZ, TX, GA, MI, and NC."
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
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Quotes in 45–90 Minutes</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Receive tailored health plan comparisons the same day, complete with cost projections and concierge enrollment support.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button as="a" href="https://calendly.com/bradfordinformedguidance" variant="primary" size="lg">
                Schedule a Consultation
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
                  <p className="font-semibold">1,000+ families guided</p>
                  <p className="text-sm text-slate-300">Individual, family, and small business plans customized for real budgets.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Stethoscope className="mt-1 h-6 w-6 text-emerald-300" />
                <div>
                  <p className="font-semibold">Carrier-neutral advice</p>
                  <p className="text-sm text-slate-300">Access 15+ A-rated health carriers with unbiased recommendations.</p>
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

      <section className="section bg-gradient-to-r from-emerald-600 to-sky-600 text-white">
        <div className="container-default grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Ready for coverage clarity?</h2>
            <p className="mt-4 text-lg text-emerald-50">
              Connect with a licensed health insurance broker who will guide you through underwriting, provider selection, and long-term savings across all six licensed states.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button as="a" href="/contact" variant="secondary" size="lg" className="bg-white text-emerald-700 hover:bg-emerald-100">
                Contact Our Team
              </Button>
              <Button as="a" href="https://calendly.com/bradfordinformedguidance" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Book a 15-Minute Call
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl bg-white/10 p-6 text-sm shadow-xl backdrop-blur">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-6 w-6 text-white" />
              <p>Licensed in Florida, Michigan, North Carolina, Arizona, Texas, and Georgia.</p>
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

