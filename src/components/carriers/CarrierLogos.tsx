import { Link } from 'react-router-dom';
import carriersData from '../../data/carriers.json';

type Carrier = {
  name: string;
  logoUrl: string;
};

const carriers = carriersData as Carrier[];

export default function CarrierLogos() {
  return (
    <section className="bg-slate-900 py-14 sm:py-16" aria-labelledby="homepage-carriers-heading">
      <div className="container-default">
        <Link
          to="/carriers"
          className="group block rounded-3xl border border-slate-700/70 bg-slate-900/60 p-8 text-center shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 hover:border-emerald-500/70 hover:bg-slate-900/80"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400/80">Our carrier partners</p>
          <h2 id="homepage-carriers-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Access to A+ rated national networks
          </h2>
          <p className="mt-2 text-base text-slate-300">
            Explore our roster of healthcare and life insurance carriers committed to concierge-level service and coverage.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            {carriers.map((carrier) => (
              <div
                key={carrier.name}
                className="flex h-20 items-center justify-center rounded-2xl border border-slate-700/60 bg-slate-800/60 px-4 py-3 shadow-inner transition group-hover:border-emerald-500/60"
              >
                <img
                  src={carrier.logoUrl}
                  alt={carrier.name}
                  className="max-h-10 w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm font-semibold text-emerald-400 transition group-hover:text-emerald-300">
            Discover every carrier →
          </p>
        </Link>
      </div>
    </section>
  );
}
