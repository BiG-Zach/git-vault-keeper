import SEO from '../components/SEO';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { SEO_IMAGES } from '../utils/seoAssets';

export default function Checklist() {
  const heroImage = SEO_IMAGES.checklist;
  return (
    <main id="content" className="has-sticky-cta">
      <SEO
        title="Checklist"
        path="/checklist"
        description="Download our pre-enrollment checklist to prepare for a smooth plan selection process."
        image={heroImage.src}
        meta={[
          { property: 'og:image:alt', content: heroImage.alt },
          { name: 'twitter:image:alt', content: heroImage.alt }
        ]}
      />

      <Section bg="gradient">
        <Reveal>
          <h1 className="h1 mb-4">Pre‑Enrollment Checklist</h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="lead max-w-3xl">
            Preparing for your health insurance consultation ensures we can find the perfect plan for your needs and budget.
            Use this guide to gather the necessary information before we connect.
          </p>
        </Reveal>
      </Section>

      <Section className="py-12 bg-slate-50">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Preparation Matters</h2>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                Health insurance options can be complex, with hundreds of plan variations available in Florida, Michigan,
                North Carolina, Arizona, Texas, and Georgia. By gathering your information ahead of time, you allow us to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Accurately calculate your potential subsidies and tax credits</li>
                <li>Verify that your preferred doctors and hospitals are in-network</li>
                <li>Ensure your prescription medications are covered at the lowest tier</li>
                <li>Identify specific plan benefits that match your lifestyle</li>
              </ul>
              <p>
                Our goal is to make your enrollment process as smooth and efficient as possible. A little preparation
                goes a long way in securing the best coverage for your family.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What You'll Need</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <strong className="block text-slate-900">Household Information</strong>
                    <span className="text-slate-600 text-sm">Dates of birth and SSNs for all family members applying for coverage.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <strong className="block text-slate-900">Income Estimates</strong>
                    <span className="text-slate-600 text-sm">Projected household income for the coverage year (pay stubs, W-2s, or tax returns).</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <strong className="block text-slate-900">Provider Preferences</strong>
                    <span className="text-slate-600 text-sm">Names of primary care doctors, specialists, and preferred hospitals.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <strong className="block text-slate-900">Medication List</strong>
                    <span className="text-slate-600 text-sm">Names, dosages, and frequency of any current prescription medications.</span>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="rounded-lg border border-slate-200 p-6 bg-white">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input className="mt-1 block w-full rounded-md border-slate-300 focus:ring-sky-500 focus:border-sky-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="mt-1 block w-full rounded-md border-slate-300 focus:ring-sky-500 focus:border-sky-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input className="mt-1 block w-full rounded-md border-slate-300 focus:ring-sky-500 focus:border-sky-500" placeholder="(555) 555-5555" />
            </div>
            <div className="sm:col-span-2">
              <label className="inline-flex items-start gap-2 text-sm text-slate-700">
                <input type="checkbox" className="mt-1 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
                <span>I consent to be contacted about insurance options. Message/data rates may apply.</span>
              </label>
            </div>
          </div>
          <div className="mt-4">
            <Button>Get the Checklist</Button>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            We’ll email your checklist link and may follow up to ensure you received it.
          </p>
        </div>
      </Section>
    </main>
  );
}
