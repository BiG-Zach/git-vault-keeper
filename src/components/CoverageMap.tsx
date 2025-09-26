import states from '../data/states.json';

type State = (typeof states)[number];

const LICENSED_CODES = ['FL', 'MI', 'NC', 'AZ', 'GA', 'TX'] as const;
const ESTABLISHED_CODES = ['FL', 'MI', 'NC'] as const;
const NEW_CODES = ['AZ', 'GA', 'TX'] as const;

type LicensedCode = (typeof LICENSED_CODES)[number];
type EstablishedCode = (typeof ESTABLISHED_CODES)[number];
type NewCode = (typeof NEW_CODES)[number];

const badgeClass = 'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white';

export default function CoverageMap() {
  const licensedStates: State[] = states.filter((state) => LICENSED_CODES.includes(state.code as LicensedCode));
  const establishedStates = licensedStates.filter((state) => ESTABLISHED_CODES.includes(state.code as EstablishedCode));
  const newStates = licensedStates.filter((state) => NEW_CODES.includes(state.code as NewCode));

  return (
    <section className="section bg-brand-light" aria-label="Coverage states">
      <div className="container-default">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-brand-dark">Licensed to Serve You in 6 States</h2>
            <p className="mt-4 text-brand-gray">
              We provide expert, personalized insurance guidance in our core markets and are excited to bring our concierge service to new locations.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-brand-dark">Established Markets</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {establishedStates.map((state) => (
                    <span key={state.code} className={`${badgeClass} bg-brand-primary`}>
                      {state.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark">Newly Licensed &amp; Accepting Clients!</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {newStates.map((state) => (
                    <span key={state.code} className={`${badgeClass} bg-brand-secondary`}>
                      {state.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md">
            <svg
              viewBox="0 0 960 600"
              role="img"
              aria-label="Map highlighting licensed states"
              className="h-auto w-full"
            >
              <title>Licensed states map</title>
              {licensedStates.map((state) => (
                <a key={state.code} href={`/states/${state.slug}`} aria-label={state.name}>
                  <path
                    d={state.svgPath}
                    className="cursor-pointer fill-brand-primary/20 stroke-brand-primary transition-colors hover:fill-brand-primary/40"
                  />
                </a>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
