import { Link } from 'react-router-dom';
import styles from '../mobile/MobileHeader.module.css';
import headerMobile from './Header.mobile.module.css';

export default function Header() {
  return (
    <header className={`desktop-header sticky top-0 z-40 bg-white/95 supports-[backdrop-filter]:bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg lg:shadow-xl ${styles.header} ${headerMobile.mobileHeader}`}>
      <div className="container-default flex h-16 lg:h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className={`font-luxury-serif lg:text-2xl font-bold text-xl tracking-tight text-slate-900 whitespace-nowrap overflow-hidden text-ellipsis max-w-[60%] md:max-w-none rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005ea2] hover:text-emerald-600 transition-colors ${headerMobile.mobileLogo}`}
          >
            Bradford Informed Guidance
          </a>
        </div>
        {/* Desktop nav */}
        <nav className={`hidden md:flex items-center gap-8 text-sm ${styles.nav} ${headerMobile.mobileNav}`}>
          <Link to="/about" className={`font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${styles.navItem}`}>About</Link>
          <Link to="/carriers" className={`font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${styles.navItem}`}>Carriers</Link>
          <Link to="/our-process" className={`font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${styles.navItem}`}>Our Process</Link>
          <Link to="/resources" className={`font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${styles.navItem}`}>Resources</Link>
          <Link to="/contact" className={`font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${styles.navItem}`}>Contact</Link>
          <a
            href="https://calendly.com/bradfordinformedguidance"
            className={`inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 active:scale-[0.98] px-6 py-3 text-sm bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 shadow-lg hover:shadow-xl transform hover:scale-105 ${styles.navItem}`}
          >
            Schedule Consultation
          </a>
        </nav>
        {/* Mobile CTA only (keeps header compact) */}
        <a
          id="headerMobileCTA"
          href="https://calendly.com/bradfordinformedguidance"
          className="md:hidden inline-flex items-center justify-center rounded-2xl font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005ea2] active:scale-[0.98] px-4 py-3 text-base bg-[#005ea2] text-white shadow-sm min-h-[44px] min-w-[44px] data-[hidden-by-sticky=true]:opacity-0 data-[hidden-by-sticky=true]:pointer-events-none data-[hidden-by-sticky=true]:invisible"
          aria-label="Schedule"
        >
          Schedule
        </a>
      </div>
      {/* Premium brand bar accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500" />
    </header>
  );
}