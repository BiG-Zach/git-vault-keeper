import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Unified Responsive Header */}
      <header className="sticky top-0 z-50 bg-white/95 supports-[backdrop-filter]:bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg lg:shadow-xl">
        
        {/* Mobile Trust Signal Bar - Phase 1 Implementation */}
        <div className="md:hidden bg-gradient-to-r from-emerald-50 to-emerald-100 border-b border-emerald-200/30">
          <div className="container-default py-1.5 px-4">
            <div className="flex items-center justify-center text-xs font-medium text-emerald-800">
              <span className="inline-flex items-center gap-1">
                <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed 6 States • FL, GA, SC, TN, AL, TX
              </span>
            </div>
          </div>
        </div>

        {/* Main Header Content */}
        <div className="container-default flex h-14 md:h-16 lg:h-20 items-center justify-between px-4">
          
          {/* Logo Section - Mobile Optimized */}
          <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
            {/* Mobile Monogram */}
            <div className="md:hidden flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm tracking-wider">BIG</span>
            </div>
            
            {/* Company Name - Responsive */}
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <a
                href="/"
                className="font-luxury-serif text-lg md:text-xl lg:text-2xl font-bold text-slate-900 hover:text-emerald-600 transition-colors duration-300 leading-tight truncate focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 rounded-md"
              >
                Bradford Informed Guidance
              </a>
              
              {/* Mobile Tagline */}
              <div className="md:hidden text-xs font-medium text-slate-600 leading-tight truncate">
                24-Hour Response • Best Insurance Group Partner
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            <Link to="/about" className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</Link>
            <Link to="/carriers" className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Carriers</Link>
            <Link to="/our-process" className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Our Process</Link>
            <Link to="/resources" className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Resources</Link>
            <Link to="/health-insurance" className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Health Insurance</Link>
            <Link to="/life-insurance" className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Life Insurance</Link>
            <Link to="/contact" className="font-medium hover:text-emerald-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</Link>
            
            {/* Desktop CTA */}
            <a
              href="https://calendly.com/bradfordinformedguidance"
              className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 active:scale-[0.98] px-6 py-3 text-sm bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Schedule Consultation
            </a>
          </nav>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile CTA - Thumb Friendly */}
            <a
              href="https://calendly.com/bradfordinformedguidance"
              className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 active:scale-95 px-4 py-2.5 text-sm bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg min-h-[44px] hover:shadow-xl"
              aria-label="Schedule consultation"
            >
              Schedule
            </a>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors min-h-[44px] min-w-[44px]"
              aria-label="Toggle mobile menu"
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

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <nav className="container-default py-4 space-y-1">
              <Link 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                About
              </Link>
              <Link 
                to="/carriers" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Carriers
              </Link>
              <Link 
                to="/our-process" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Our Process
              </Link>
              <Link 
                to="/resources" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Resources
              </Link>
              <Link 
                to="/health-insurance" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Health Insurance
              </Link>
              <Link 
                to="/life-insurance" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Life Insurance
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}

        {/* Premium Brand Accent */}
        <div className="h-1 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500" />
      </header>
    </>
  );
}