import type { StateMetadata } from "../utils/stateMetadata";
import Button from "./Button";

interface StatePageProps {
  metadata: StateMetadata;
}

export default function StatePage({ metadata }: StatePageProps) {
  const { name, hero, intro, services } = metadata;

  return (
    <div className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <img
          src={hero.imageUrl}
          alt={`${name} insurance coverage`}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/70 to-slate-900/30" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 text-center sm:px-8 lg:px-10">
          <span className="mx-auto inline-flex items-center justify-center rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-emerald-200">
            Serving {name}
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {hero.title}
          </h1>
          <p className="text-lg text-slate-100 sm:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as="a" href="/quote" size="lg" variant="primary">
              Start Your Quote
            </Button>
            <Button as="a" href="tel:+16893256570" size="lg" variant="outline">
              Call (689) 325-6570
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{intro.title}</h2>
          {intro.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">How I Support {name} Clients</h2>
            <p className="mt-3 text-lg text-slate-600">
              Tailored insurance strategies that combine nationwide PPO access with concierge-level service.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
                <div className="mt-auto pt-2">
                  <Button as="a" href="/quote" variant="accent">
                    Talk with Bradford
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl bg-slate-900 px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-semibold sm:text-4xl">Let&apos;s Build Your Perfect Coverage</h2>
          <p className="text-lg text-slate-200">
            I partner with A+ rated carriers and leverage medically underwritten PPO plans to deliver premium benefits at an affordable price for {name} residents.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button as="a" href="/quote" size="lg" variant="primary">
              Schedule a Consultation
            </Button>
            <Button
              as="a"
              href="mailto:hello@bradfordinformedguidance.com"
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              Email Me Directly
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
