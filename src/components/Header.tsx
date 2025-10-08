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
      <header className="sticky top-0 z-50 bg-white/95 supports-[backdrop-filter]:bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg lg:shadow-xl">
        
        {/* MOBILE TRUST SIGNAL BAR - CONVERSION OPTIMIZED */}
        <div className="md:hidden bg-gradient-to-r from-emerald-50 to-emerald-100 border-b border-emerald-200/30">
          <div className="container mx-auto max-w-7xl py-1.5 px-4">
            <div className="flex items-center justify-center text-xs font-medium text-emerald-800">
              <span className="inline-flex items-center gap-1">
                <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed 6 States • FL, GA, SC, TN, AL, TX • 24-Hour Response
              </span>
            </div>
          </div>
        </div>

        {/* MAIN HEADER CONTENT - RESPONSIVE DESIGN */}
        <div className="container mx-auto max-w-7xl flex h-14 md:h-16 lg:h-20 items-center justify-between px-4 lg:px-6">
          
          {/* LOGO SECTION - MOBILE OPTIMIZED */}
          <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
            
            {/* MOBILE MONOGRAM - BIG BRANDING */}
            <div className="md:hidden flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-sm tracking-wider">BIG</span>
            </div>
            
            {/* COMPANY NAME - RESPONSIVE TYPOGRAPHY */}
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <Link
                to="/"
                className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-slate-900 hover:text-emerald-600 transition-colors duration-300 leading-tight truncate focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 rounded-md"
              >
                Bradford Informed Guidance
              </Link>
              
              {/* MOBILE TAGLINE - TRUST BUILDING */}
              <div className="md:hidden text-xs font-medium text-slate-600 leading-tight truncate">
                Best Insurance Group Partner • Expert Guidance
              </div>
            </div>
          </div>

          {/* DESKTOP NAVIGATION - FULL FEATURE SET */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            <Link 
              to="/about" 
              className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              About
            </Link>
            <Link 
              to="/carriers" 
              className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Carriers
            </Link>
            <Link 
              to="/our-process" 
              className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Our Process
            </Link>
            <Link 
              to="/resources" 
              className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Resources
            </Link>
            <Link 
              to="/health-insurance" 
              className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Health Insurance
            </Link>
            <Link 
              to="/life-insurance" 
              className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Life Insurance
            </Link>
            <Link 
              to="/contact" 
              className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Contact
            </Link>
            
            {/* DESKTOP CTA - CONVERSION OPTIMIZED */}
            <a
              href="https://calendly.com/bradfordinformedguidance"
              className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 active:scale-[0.98] px-6 py-3 text-sm bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 shadow-lg hover:shadow-xl transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Consultation
            </a>
          </nav>

          {/* MOBILE ACTION BUTTONS - THUMB FRIENDLY DESIGN */}
          <div className="md:hidden flex items-center gap-2">
            
            {/* MOBILE CTA - 44PX MINIMUM TOUCH TARGET */}
            <a
              href="https://calendly.com/bradfordinformedguidance"
              className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 active:scale-95 px-4 py-2.5 text-sm bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg min-h-[44px] hover:shadow-xl"
              aria-label="Schedule consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule
            </a>
            
            {/* HAMBURGER MENU TOGGLE - ACCESSIBILITY OPTIMIZED */}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors min-h-[44px] min-w-[44px]"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION PANEL - SLIDE-OUT MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="container mx-auto max-w-7xl py-4 px-4 space-y-1">
              <Link 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors min-h-[44px] flex items-center"
              >
                About Us
              </Link>
              <Link 
                to="/carriers" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors min-h-[44px] flex items-center"
              >
                Insurance Carriers
              </Link>
              <Link 
                to="/our-process" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors min-h-[44px] flex items-center"
              >
                Our Process
              </Link>
              <Link 
                to="/resources" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors min-h-[44px] flex items-center"
              >
                Resources
              </Link>
              <Link 
                to="/health-insurance" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors min-h-[44px] flex items-center"
              >
                Health Insurance
              </Link>
              <Link 
                to="/life-insurance" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors min-h-[44px] flex items-center"
              >
                Life Insurance
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors min-h-[44px] flex items-center"
              >
                Contact Us
              </Link>
              
              {/* MOBILE MENU CTA */}
              <div className="pt-4 border-t border-slate-200">
                <a
                  href="https://calendly.com/bradfordinformedguidance"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg min-h-[44px] flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Free Consultation
                </a>
              </div>
            </nav>
          </div>
        )}

        {/* PREMIUM BRAND ACCENT - VISUAL HIERARCHY */}
        <div className="h-1 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500" />
      </header>
    </>
  );
}