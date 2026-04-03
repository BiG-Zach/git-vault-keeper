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
      <header className="sticky top-0 z-50 shadow-[0_8px_40px_rgba(0,0,0,0.08),0_2px_12px_rgba(0,0,0,0.04)] lg:shadow-[0_12px_50px_rgba(0,0,0,0.12),0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 relative border-b border-white/20 before:absolute before:inset-0 before:bg-[url('/textures/wood-grain.jpg')] before:bg-cover before:bg-center before:pointer-events-none">


        {/* MAIN HEADER CONTENT - RESPONSIVE DESIGN */}
        <div className="container mx-auto max-w-7xl flex h-20 md:h-24 lg:h-28 items-center justify-between px-4 lg:px-6">

          {/* CLEAN BIG MONOGRAM HOMEPAGE BUTTON */}
          <div className="flex items-center">

            {/* BIG MONOGRAM - PREMIUM LOGO WITH PERFECT CIRCULAR RING */}
            <Link
              to="/"
              className="group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-emerald-500 rounded-full block"
              aria-label="Bradford Informed Guidance - Home"
            >
              {/* PERFECT CIRCULAR WRAPPER WITH THICK BORDER */}
              <div className="relative h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full bg-white">
                {/* UNIFIED MONOGRAM - ALL DEVICES */}
                <img
                  src="/logos/big-monogram-masterpiece.png"
                  alt="Bradford Informed Guidance monogram"
                  className="absolute inset-0 h-full w-full rounded-full object-contain transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:rotate-[2deg] group-hover:drop-shadow-[0_12px_30px_rgba(16,185,129,0.5)] group-hover:brightness-105 group-hover:contrast-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* MULTI-LAYER PREMIUM GLOW EFFECTS */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 scale-150 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300/20 via-transparent to-teal-300/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-200/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* SHIMMER EFFECT OVERLAY */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 skew-x-12"></div>
              </div>
            </Link>

            {/* COMPANY NAME - DESKTOP ONLY */}
            <div className="hidden lg:block ml-5">
              <Link
                to="/"
                className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 rounded-md"
              >
                <div className="font-serif text-2xl xl:text-3xl font-bold text-white group-hover:text-emerald-200 transition-all duration-700 tracking-normal" style={{
                  textShadow: '0 0 50px rgba(255,255,255,0.75), 0 0 35px rgba(255,255,255,0.65), 0 0 18px rgba(255,255,255,0.5), 0 2px 10px rgba(0,0,0,1), 0 4px 20px rgba(0,0,0,0.9), 0 6px 30px rgba(0,0,0,0.8)',
                  WebkitTextStroke: '0.9px rgba(255,255,255,0.25)',
                  filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.4))'
                }}>
                  Bradford Informed Guidance
                </div>
              </Link>
            </div>
          </div>

          {/* DESKTOP NAVIGATION - FULL FEATURE SET */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            <Link
              to="/about"
              className="font-semibold text-white text-shadow-strong hover:text-emerald-200 transition-all duration-400 relative px-2 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-300 after:via-teal-300 after:to-emerald-300 after:origin-bottom-right after:transition-all after:duration-500 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left after:rounded-full after:shadow-[0_2px_8px_rgba(16,185,129,0.8)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-white/0 before:rounded-xl before:opacity-0 before:transition-all before:duration-400 hover:before:opacity-100 before:-z-10 font-medium"
            >
              <span className="relative z-10 tracking-wide">About</span>
            </Link>
            <Link
              to="/carriers"
              className="font-semibold text-white text-shadow-strong hover:text-emerald-200 transition-all duration-400 relative px-2 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-300 after:via-teal-300 after:to-emerald-300 after:origin-bottom-right after:transition-all after:duration-500 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left after:rounded-full after:shadow-[0_2px_8px_rgba(16,185,129,0.8)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-white/0 before:rounded-xl before:opacity-0 before:transition-all before:duration-400 hover:before:opacity-100 before:-z-10 font-medium"
            >
              <span className="relative z-10 tracking-wide">Carriers</span>
            </Link>
            <Link
              to="/our-process"
              className="font-semibold text-white text-shadow-strong hover:text-emerald-200 transition-all duration-400 relative px-2 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-300 after:via-teal-300 after:to-emerald-300 after:origin-bottom-right after:transition-all after:duration-500 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left after:rounded-full after:shadow-[0_2px_8px_rgba(16,185,129,0.8)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-white/0 before:rounded-xl before:opacity-0 before:transition-all before:duration-400 hover:before:opacity-100 before:-z-10 font-medium"
            >
              <span className="relative z-10 tracking-wide">Our Process</span>
            </Link>
            <Link
              to="/resources"
              className="font-semibold text-white text-shadow-strong hover:text-emerald-200 transition-all duration-400 relative px-2 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-300 after:via-teal-300 after:to-emerald-300 after:origin-bottom-right after:transition-all after:duration-500 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left after:rounded-full after:shadow-[0_2px_8px_rgba(16,185,129,0.8)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-white/0 before:rounded-xl before:opacity-0 before:transition-all before:duration-400 hover:before:opacity-100 before:-z-10 font-medium"
            >
              <span className="relative z-10 tracking-wide">Resources</span>
            </Link>
            <Link
              to="/health-insurance"
              className="font-semibold text-white text-shadow-strong hover:text-emerald-200 transition-all duration-400 relative px-2 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-300 after:via-teal-300 after:to-emerald-300 after:origin-bottom-right after:transition-all after:duration-500 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left after:rounded-full after:shadow-[0_2px_8px_rgba(16,185,129,0.8)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-white/0 before:rounded-xl before:opacity-0 before:transition-all before:duration-400 hover:before:opacity-100 before:-z-10 font-medium"
            >
              <span className="relative z-10 tracking-wide">Health Insurance</span>
            </Link>
            <Link
              to="/life-insurance"
              className="font-semibold text-white text-shadow-strong hover:text-emerald-200 transition-all duration-400 relative px-2 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-300 after:via-teal-300 after:to-emerald-300 after:origin-bottom-right after:transition-all after:duration-500 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left after:rounded-full after:shadow-[0_2px_8px_rgba(16,185,129,0.8)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-white/0 before:rounded-xl before:opacity-0 before:transition-all before:duration-400 hover:before:opacity-100 before:-z-10 font-medium"
            >
              <span className="relative z-10 tracking-wide">Life Insurance</span>
            </Link>
            <Link
              to="/contact"
              className="font-semibold text-white text-shadow-strong hover:text-emerald-200 transition-all duration-400 relative px-2 py-2 group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-emerald-300 after:via-teal-300 after:to-emerald-300 after:origin-bottom-right after:transition-all after:duration-500 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left after:rounded-full after:shadow-[0_2px_8px_rgba(16,185,129,0.8)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-white/0 before:rounded-xl before:opacity-0 before:transition-all before:duration-400 hover:before:opacity-100 before:-z-10 font-medium"
            >
              <span className="relative z-10 tracking-wide">Contact</span>
            </Link>

            {/* DESKTOP CTA - CONVERSION OPTIMIZED */}
            <a
              href="https://calendly.com/bradfordinformedguidance"
              className="group relative inline-flex items-center justify-center rounded-xl font-bold transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-emerald-500 active:scale-[0.97] px-7 py-3.5 text-sm bg-gradient-to-r from-emerald-600 via-emerald-700 via-teal-600 to-teal-700 text-white hover:from-emerald-700 hover:via-emerald-800 hover:via-teal-700 hover:to-teal-800 shadow-[0_4px_20px_rgba(16,185,129,0.4),0_2px_8px_rgba(16,185,129,0.2),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_8px_40px_rgba(16,185,129,0.6),0_4px_16px_rgba(16,185,129,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] transform hover:scale-[1.05] hover:-translate-y-1 overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center gap-2 tracking-wide">
                Schedule Consultation
                <svg className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1.5 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 skew-x-12"></div>
            </a>
          </nav>

          {/* MOBILE ACTION BUTTONS - THUMB FRIENDLY DESIGN */}
          <div className="md:hidden flex items-center gap-2">

            {/* HAMBURGER MENU TOGGLE - ACCESSIBILITY OPTIMIZED */}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-xl p-3 text-white text-shadow-strong bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 transition-all duration-300 min-h-[44px] min-w-[44px] shadow-sm hover:shadow-md active:scale-95 border border-white/30"
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
        <div className="h-1 bg-gradient-to-r from-emerald-400 via-emerald-600 via-teal-500 via-emerald-600 to-emerald-400 shadow-[0_2px_12px_rgba(16,185,129,0.4),0_1px_4px_rgba(16,185,129,0.2)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-[shimmer_3s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}></div>
        </div>
      </header >
    </>
  );
}
