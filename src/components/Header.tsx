import { Link } from 'react-router-dom';
import styles from '../mobile/MobileHeader.module.css';
import headerMobile from './Header.mobile.module.css';

export default function Header() {
  return (
    <header className={`sticky top-0 z-40 supports-[backdrop-filter]:backdrop-blur-[12px] border-b border-white/15 ${styles.header} ${headerMobile.mobileHeader}`}
      style={{
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <div className="container-default flex h-20 items-center justify-between">
        <div className="flex flex-col">
          <a
            href="/"
            className={`font-bold text-xl tracking-tight text-slate-900 whitespace-nowrap overflow-hidden text-ellipsis max-w-[60%] md:max-w-none rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005ea2] ${headerMobile.mobileLogo}`}
          >
            Bradford Insurance Solutions
          </a>
          <div className="text-xs text-slate-600 font-medium">
            Licensed Independent Agent • Your Trusted Insurance Partner
          </div>
          <div className="text-xs text-slate-500 font-normal">
            NPN: 18181266
          </div>
        </div>
        {/* Desktop nav */}
        <nav className={`hidden md:flex items-center gap-6 text-sm ${styles.nav} ${headerMobile.mobileNav}`}>
          <Link to="/about" className={`hover:text-[#0078c8] transition-colors ${styles.navItem}`}>About</Link>
          <Link to="/carriers" className={`hover:text-[#0078c8] transition-colors ${styles.navItem}`}>Carriers</Link>
          <Link to="/how-it-works" className={`hover:text-[#0078c8] transition-colors ${styles.navItem}`}>How it works</Link>
          <Link to="/contact" className={`hover:text-[#0078c8] transition-colors ${styles.navItem}`}>Contact</Link>
          <a
            href="https://calendly.com/bradfordinformedguidance"
            className={`inline-flex items-center justify-center rounded-2xl font-semibold transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005ea2] active:scale-[0.98] px-5 py-2.5 text-sm bg-[#005ea2] text-white hover:bg-[#0078c8] active:bg-[#065f9a] shadow-sm hover:shadow-md ${styles.navItem}`}
          >
            Schedule
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
      {/* Thin brand bar accent */}
      <div className="h-1 bg-[#1DD3B0]" />
    </header>
  );
}