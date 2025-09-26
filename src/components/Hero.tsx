import { Phone } from 'lucide-react';
import HeroForm from './HeroForm';

const metrics = [
  { value: '500+', label: 'Families Protected' },
  { value: '7+', label: 'Years Experience' },
  { value: '6', label: 'States Licensed' },
];

const TrustBar = () => (
  <dl className="mt-8 flex flex-wrap gap-8 text-white" aria-label="Key accomplishments">
    {metrics.map((metric) => (
      <div key={metric.label} className="text-center">
        <dt className="text-sm text-white/70">{metric.label}</dt>
        <dd className="text-3xl font-bold">{metric.value}</dd>
      </div>
    ))}
  </dl>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white py-20 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/hero-family.webp')" }}
        role="presentation"
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" aria-hidden="true" />

      <div className="relative container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-secondary">
              Concierge Health &amp; Life Insurance
            </span>
            <h1 className="mt-4 text-4xl font-display font-bold leading-tight md:text-5xl">
              Smarter coverage, personal guidance, lifetime support
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Custom-built PPO health and life insurance strategies for self-employed professionals, families, and early retirees across Florida, Michigan, North Carolina, Arizona, Georgia, and Texas.
            </p>
            <TrustBar />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#hero-form" className="btn-primary text-center">
                Get Free Quote
              </a>
              <a href="tel:6893256570" className="btn-secondary">
                <Phone className="mr-2 inline-block h-4 w-4" aria-hidden="true" />
                Call (689) 325-6570
              </a>
            </div>
          </div>
          <div id="hero-form" className="relative">
            <div className="relative z-10 mx-auto w-full max-w-md rounded-xl bg-white p-6 shadow-2xl sm:p-8">
              <HeroForm />
            </div>
            <div className="absolute -inset-2 -z-0 rounded-2xl bg-gradient-to-br from-brand-secondary/30 to-brand-primary/30 blur-xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
