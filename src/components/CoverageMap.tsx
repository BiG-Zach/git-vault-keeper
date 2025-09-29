type StateKey = 'FL' | 'MI' | 'NC' | 'AZ' | 'TX' | 'GA';

const STATES: Record<StateKey, { name: string; path: string; href: string; aria: string }> = {
  FL: { name: 'Florida', path: '/states/florida', href: '/states/florida', aria: 'Florida' },
  MI: { name: 'Michigan', path: '/states/michigan', href: '/states/michigan', aria: 'Michigan' },
  NC: { name: 'North Carolina', path: '/states/north-carolina', href: '/states/north-carolina', aria: 'North Carolina' },
  AZ: { name: 'Arizona', path: '/states/arizona', href: '/states/arizona', aria: 'Arizona' },
  TX: { name: 'Texas', path: '/states/texas', href: '/states/texas', aria: 'Texas' },
  GA: { name: 'Georgia', path: '/states/georgia', href: '/states/georgia', aria: 'Georgia' },
};

export default function CoverageMap() {
  return (
    <section className="section bg-white" aria-label="Coverage states">
      <div className="container-default">
        <h2 className="h2 mb-4">Coverage Areas</h2>
        <p className="lead mb-2">Currently licensed in Florida, Michigan, North Carolina, Arizona, Texas, and Georgia.</p>
        <p className="text-sm text-slate-500 mb-6">Active Now (6 states) • Additional markets launching soon.</p>

        <div className="rounded-lg border border-slate-200 p-4 overflow-x-auto">
          <svg
            viewBox="0 0 960 600"
            role="img"
            aria-label="Map highlighting six active coverage states"
            className="w-full h-auto"
          >
            {/* Simplified shapes (not geographically precise). Replace with precise SVG later if desired */}
            <a href={STATES.AZ.href} aria-label={STATES.AZ.aria}>
              <path d="M140,320 l 80,-10 l 20,90 l -90,20 z" className="fill-emerald-200 stroke-emerald-600 hover:fill-emerald-300" />
            </a>
            <a href={STATES.TX.href} aria-label={STATES.TX.aria}>
              <path d="M260,360 l 150,0 l 30,60 l -80,40 l -70,-20 z" className="fill-emerald-200 stroke-emerald-600 hover:fill-emerald-300" />
            </a>
            <a href={STATES.FL.href} aria-label={STATES.FL.aria}>
              <path d="M770,420 l 130,0 l 0,40 l -120,0 l -10,-40 z" className="fill-emerald-200 stroke-emerald-600 hover:fill-emerald-300" />
            </a>
            <a href={STATES.MI.href} aria-label={STATES.MI.aria}>
              <path d="M520,120 l 60,0 l 40,40 l -20,60 l -80,0 l 0,-100 z" className="fill-emerald-200 stroke-emerald-600 hover:fill-emerald-300" />
            </a>
            <a href={STATES.NC.href} aria-label={STATES.NC.aria}>
              <path d="M620,320 l 200,0 l 60,20 l -40,20 l -220,0 l 0,-40 z" className="fill-emerald-200 stroke-emerald-600 hover:fill-emerald-300" />
            </a>
            <a href={STATES.GA.href} aria-label={STATES.GA.aria}>
              <path d="M660,360 l 60,0 l 30,60 l -20,40 l -70,-10 z" className="fill-emerald-200 stroke-emerald-600 hover:fill-emerald-300" />
            </a>
          </svg>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            {Object.entries(STATES).map(([code, s]) => (
              <a
                key={code}
                href={s.href}
                className="rounded-lg border border-slate-200 p-3 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>{s.name}</span>
                <span aria-hidden="true" className="text-slate-400">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}