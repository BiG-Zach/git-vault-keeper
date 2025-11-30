import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* UNIFIED RESPONSIVE HEADER - SEO COMPLIANT */}
      <header className="sticky top-0 z-50 bg-white/98 supports-[backdrop-filter]:bg-white/95 backdrop-blur-2xl border-b border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-all duration-300">


        {/* MAIN HEADER CONTENT - RESPONSIVE DESIGN */}
        <div className="container mx-auto max-w-7xl flex h-20 md:h-24 lg:h-28 items-center justify-between px-4 lg:px-6">

          {/* CLEAN BIG MONOGRAM HOMEPAGE BUTTON */}
          <div className="flex items-center">

            {/* BIG MONOGRAM - ENLARGED TRANSPARENT BUTTON */}
            <Link
              to="/"
              className="group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 rounded-lg"
              aria-label="Bradford Informed Guidance - Home"
            >
              {/* UNIFIED MONOGRAM - ALL DEVICES */}
              <img
                src="/logos/big-monogram.svg"
                alt="Bradford Informed Guidance monogram"
                className="h-14 md:h-16 lg:h-20 w-auto transition-all duration-500 ease-out group-hover:scale-[1.12] group-hover:drop-shadow-[0_10px_25px_rgba(16,185,129,0.4)] group-hover:brightness-110"
                loading="lazy"
                decoding="async"
              />

              {/* ENHANCED PREMIUM GLOW EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-emerald-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 scale-150"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* COMPANY NAME - DESKTOP ONLY */}
            <div className="hidden lg:block ml-4">
              <Link
                to="/"
                className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 rounded-md"
              >
                <div className="font-serif text-xl xl:text-2xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:via-emerald-700 group-hover:to-emerald-600 transition-all duration-500 leading-tight drop-shadow-sm">
                  Bradford Informed Guidance
                </div>
                <div className="text-sm font-semibold text-slate-600 group-hover:text-emerald-700 transition-all duration-500 mt-1">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-slate-600 to-slate-700 group-hover:from-emerald-600 group-hover:to-teal-600 bg-clip-text text-transparent">
                    <svg className="w-3.5 h-3.5 text-emerald-500 group-hover:text-emerald-600 transition-colors duration-300 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Independent Broker • Enterprise Resources
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* DESKTOP NAVIGATION - FULL FEATURE SET */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            <Link
              to="/about"
              className="font-semibold text-slate-700 hover:text-emerald-600 transition-all duration-300 relative px-1 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-500 after:to-teal-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left before:content-[''] before:absolute before:inset-0 before:bg-emerald-50 before:rounded-lg before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:-z-10"
            >
              <span className="relative z-10">About</span>
            </Link>
            <Link
              to="/carriers"
              className="font-semibold text-slate-700 hover:text-emerald-600 transition-all duration-300 relative px-1 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-500 after:to-teal-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left before:content-[''] before:absolute before:inset-0 before:bg-emerald-50 before:rounded-lg before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:-z-10"
            >
              <span className="relative z-10">Carriers</span>
            </Link>
            <Link
              to="/our-process"
              className="font-semibold text-slate-700 hover:text-emerald-600 transition-all duration-300 relative px-1 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-500 after:to-teal-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left before:content-[''] before:absolute before:inset-0 before:bg-emerald-50 before:rounded-lg before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:-z-10"
            >
              <span className="relative z-10">Our Process</span>
            </Link>
            <Link
              to="/resources"
              className="font-semibold text-slate-700 hover:text-emerald-600 transition-all duration-300 relative px-1 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-500 after:to-teal-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left before:content-[''] before:absolute before:inset-0 before:bg-emerald-50 before:rounded-lg before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:-z-10"
            >
              <span className="relative z-10">Resources</span>
            </Link>
            <Link
              to="/health-insurance"
              className="font-semibold text-slate-700 hover:text-emerald-600 transition-all duration-300 relative px-1 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-500 after:to-teal-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left before:content-[''] before:absolute before:inset-0 before:bg-emerald-50 before:rounded-lg before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:-z-10"
            >
              <span className="relative z-10">Health Insurance</span>
            </Link>
            <Link
              to="/life-insurance"
              className="font-semibold text-slate-700 hover:text-emerald-600 transition-all duration-300 relative px-1 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-500 after:to-teal-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left before:content-[''] before:absolute before:inset-0 before:bg-emerald-50 before:rounded-lg before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:-z-10"
            >
              <span className="relative z-10">Life Insurance</span>
            </Link>
            <Link
              to="/contact"
              className="font-semibold text-slate-700 hover:text-emerald-600 transition-all duration-300 relative px-1 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-500 after:to-teal-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left before:content-[''] before:absolute before:inset-0 before:bg-emerald-50 before:rounded-lg before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:-z-10"
            >
              <span className="relative z-10">Contact</span>
            </Link>

            {/* DESKTOP CTA - CONVERSION OPTIMIZED */}
            <a
              href="https://calendly.com/bradfordinformedguidance"
              className="group relative inline-flex items-center justify-center rounded-xl font-bold transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 active:scale-[0.96] px-7 py-3.5 text-sm bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 text-white hover:from-emerald-700 hover:via-emerald-800 hover:to-teal-700 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.6)] transform hover:scale-[1.08] hover:-translate-y-0.5 overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule Consultation
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </a>
          </nav>

          {/* MOBILE ACTION BUTTONS - THUMB FRIENDLY DESIGN */}
          <div className="md:hidden flex items-center gap-2">

            {/* HAMBURGER MENU TOGGLE - ACCESSIBILITY OPTIMIZED */}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-xl p-3 text-slate-700 bg-slate-50 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 min-h-[44px] min-w-[44px] shadow-sm hover:shadow-md active:scale-95"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION PANEL - SLIDE-OUT MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-white to-slate-50/50 border-t border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.15)] animate-in slide-in-from-top-2 duration-300 backdrop-blur-xl">
            <nav className="container mx-auto max-w-7xl py-4 px-4 space-y-1">
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group block px-5 py-3.5 text-base font-semibold text-slate-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 rounded-xl transition-all duration-300 min-h-[44px] flex items-center shadow-sm hover:shadow-md active:scale-[0.98] border border-transparent hover:border-emerald-100"
              >
                <span className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors duration-300"></span>
                  About Us
                </span>
              </Link>
              <Link
                to="/carriers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group block px-5 py-3.5 text-base font-semibold text-slate-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 rounded-xl transition-all duration-300 min-h-[44px] flex items-center shadow-sm hover:shadow-md active:scale-[0.98] border border-transparent hover:border-emerald-100"
              >
                <span className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors duration-300"></span>
                  Insurance Carriers
                </span>
              </Link>
              <Link
                to="/our-process"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group block px-5 py-3.5 text-base font-semibold text-slate-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 rounded-xl transition-all duration-300 min-h-[44px] flex items-center shadow-sm hover:shadow-md active:scale-[0.98] border border-transparent hover:border-emerald-100"
              >
                <span className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors duration-300"></span>
                  Our Process
                </span>
              </Link>
              <Link
                to="/resources"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group block px-5 py-3.5 text-base font-semibold text-slate-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 rounded-xl transition-all duration-300 min-h-[44px] flex items-center shadow-sm hover:shadow-md active:scale-[0.98] border border-transparent hover:border-emerald-100"
              >
                <span className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors duration-300"></span>
                  Resources
                </span>
              </Link>
              <Link
                to="/health-insurance"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group block px-5 py-3.5 text-base font-semibold text-slate-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 rounded-xl transition-all duration-300 min-h-[44px] flex items-center shadow-sm hover:shadow-md active:scale-[0.98] border border-transparent hover:border-emerald-100"
              >
                <span className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors duration-300"></span>
                  Health Insurance
                </span>
              </Link>
              <Link
                to="/life-insurance"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group block px-5 py-3.5 text-base font-semibold text-slate-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 rounded-xl transition-all duration-300 min-h-[44px] flex items-center shadow-sm hover:shadow-md active:scale-[0.98] border border-transparent hover:border-emerald-100"
              >
                <span className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors duration-300"></span>
                  Life Insurance
                </span>
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group block px-5 py-3.5 text-base font-semibold text-slate-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 rounded-xl transition-all duration-300 min-h-[44px] flex items-center shadow-sm hover:shadow-md active:scale-[0.98] border border-transparent hover:border-emerald-100"
              >
                <span className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors duration-300"></span>
                  Contact Us
                </span>
              </Link>

              {/* MOBILE MENU CTA */}
              <div className="pt-4 border-t border-slate-200/60">
                <a
                  href="https://calendly.com/bradfordinformedguidance"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative block w-full text-center px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 rounded-xl hover:from-emerald-700 hover:via-emerald-800 hover:to-teal-700 transition-all duration-500 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.6)] min-h-[52px] flex items-center justify-center active:scale-[0.98] overflow-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Schedule Free Consultation
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </a>
              </div>
            </nav>
          </div>
        )}

        {/* PREMIUM BRAND ACCENT - VISUAL HIERARCHY */}
        <div className="h-1 bg-gradient-to-r from-emerald-400 via-emerald-600 via-teal-500 to-emerald-400 shadow-[0_2px_10px_rgba(16,185,129,0.3)]" />
      </header>
    </>
  );
}
