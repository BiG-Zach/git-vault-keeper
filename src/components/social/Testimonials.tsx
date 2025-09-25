import { useMemo } from 'react';
import testimonialsData from '../../data/testimonials.json';

type Testimonial = {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
};

const testimonials = testimonialsData as Testimonial[];

function renderStars(count: number) {
  return Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={`h-4 w-4 ${index < count ? 'text-amber-400' : 'text-slate-300'}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));
}

export default function Testimonials() {
  const items = useMemo(() => testimonials, []);

  return (
    <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="homepage-testimonials-heading">
      <div className="container-default">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Client Praise</p>
          <h2 id="homepage-testimonials-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by families across the southeast
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Hear how Bradford Informed Guidance makes insurance decisions simple, personal, and transparent.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12">
          {items.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center gap-1" aria-hidden="true">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-slate-700">
                  “{testimonial.quote}”
                </blockquote>
              </div>
              <footer className="mt-6 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-900">
                {testimonial.name}
                <span className="ml-2 text-xs font-medium uppercase tracking-wide text-emerald-600">
                  {testimonial.location}
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
