import SEO from '../components/SEO';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { SEO_IMAGES } from '../utils/seoAssets';

export default function Referral() {
  const heroImage = SEO_IMAGES.referral;
  return (
    <main id="content" className="has-sticky-cta">
      <SEO
        title="Referral"
        path="/referral"
        description="Refer a friend or client. Provide basic details and we’ll reach out to help them compare options."
        image={heroImage.src}
        meta={[
          { property: 'og:image:alt', content: heroImage.alt },
          { name: 'twitter:image:alt', content: heroImage.alt }
        ]}
      />

      <Section bg="gradient">
        <Reveal>
          <h1 className="h1 mb-4">Refer a Friend or Family Member</h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="lead max-w-3xl">
            Do you know someone who needs help navigating their health or life insurance options?
            Connect them with trusted, licensed guidance. We promise to treat them with the same care and professionalism we show you.
          </p>
        </Reveal>
      </Section>

      <Section className="py-12 bg-slate-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Refer to Bradford Informed Guidance?</h2>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                Insurance is personal, and finding a trustworthy advisor can be difficult. When you refer someone to us,
                you're giving them access to:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sky-600 font-bold">✓</span>
                  </div>
                  <span><strong>Unbiased Comparisons:</strong> We check 10+ carriers to find the best value, not just one company's products.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sky-600 font-bold">✓</span>
                  </div>
                  <span><strong>No Pressure:</strong> Our goal is education and guidance, never high-pressure sales tactics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sky-600 font-bold">✓</span>
                  </div>
                  <span><strong>Ongoing Support:</strong> We don't just enroll and disappear; we're here for claims, renewals, and questions all year long.</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Referral Promise</h3>
              <p className="text-slate-600 mb-6">
                We understand that referring a friend is an act of trust. Here is our commitment to you and your referral:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                  <span className="text-2xl">🛡️</span>
                  <span className="text-emerald-900 font-medium">We will never spam them</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                  <span className="text-2xl">🔒</span>
                  <span className="text-emerald-900 font-medium">Their data is secure & private</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                  <span className="text-2xl">🤝</span>
                  <span className="text-emerald-900 font-medium">Honest advice, always</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="rounded-lg border border-slate-200 p-6 bg-white">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">Your Name</label>
              <input className="mt-1 block w-full rounded-md border-slate-300 focus:ring-sky-500 focus:border-sky-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Your Email</label>
              <input type="email" className="mt-1 block w-full rounded-md border-slate-300 focus:ring-sky-500 focus:border-sky-500" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Referral Name</label>
              <input className="mt-1 block w-full rounded-md border-slate-300 focus:ring-sky-500 focus:border-sky-500" placeholder="John Smith" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Referral Contact</label>
              <input className="mt-1 block w-full rounded-md border-slate-300 focus:ring-sky-500 focus:border-sky-500" placeholder="email or phone" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Notes</label>
              <textarea rows={4} className="mt-1 block w-full rounded-md border-slate-300 focus:ring-sky-500 focus:border-sky-500" placeholder="Anything we should know?" />
            </div>
          </div>
          <div className="mt-4">
            <Button>Submit Referral</Button>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            By submitting, you confirm you have permission to share these details. We will only use them to follow up about coverage options.
          </p>
        </div>
      </Section>
    </main>
  );
}
