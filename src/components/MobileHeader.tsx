import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS: Array<{ label: string; to: string; external?: boolean }> = [
  { label: 'Health Insurance', to: '/services/health-insurance' },
  { label: 'Life Insurance', to: '/services/life-insurance' },
  { label: 'About', to: '/about' },
  { label: 'Carriers', to: '/carriers' },
  { label: 'Our Process', to: '/our-process' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
  { label: 'Schedule Consultation', to: 'https://calendly.com/bradfordinformedguidance', external: true },
];

export default function MobileHeader() {
  const [open, setOpen] = React.useState(false);
  const menuId = 'mobile-navigation-menu';

  React.useEffect(() => {
    if (typeof document === 'undefined') return;

    document.body.classList.toggle('overflow-hidden', open);

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 mobile-header animate-fade-in">
        <div className="mobile-header-overlay"></div>
        <div className="mobile-header-container">
          <div className="mobile-header-content">
            <div className="mobile-logo-section">
              <div className="mobile-monogram">BIG</div>
            </div>
            <div className="mobile-branding">
              <div className="mobile-logo">Bradford Informed Guidance</div>
              <div className="mobile-tagline">Your Insurance Success Partner</div>
              <div className="mobile-credentials">
                <span className="mobile-trust-pill">Licensed Independent Agent • NPN: 18181266</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800/80 text-white shadow-lg backdrop-blur-sm ring-1 ring-white/20 transition hover:bg-slate-700/80"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls={menuId}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      <div
        id={menuId}
        className={`fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-lg transition-opacity duration-300 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <nav
          className={`mx-auto mt-28 flex w-[min(22rem,90%)] flex-col gap-3 rounded-3xl bg-white/95 p-6 text-center text-slate-900 shadow-2xl transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-3'}`}
          onClick={(event) => event.stopPropagation()}
        >
          {NAV_ITEMS.map((item) => {
            const commonClass = 'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold transition-colors duration-200';

            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.to}
                  className={`${commonClass} bg-emerald-500 text-white hover:bg-emerald-600`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.to}
                className={`${commonClass} bg-slate-100 text-slate-900 hover:bg-slate-200`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
