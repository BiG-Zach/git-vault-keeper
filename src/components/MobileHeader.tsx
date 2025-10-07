import React from 'react';

export default function MobileHeader() {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 mobile-header animate-fade-in">
      <div className="mobile-header-overlay"></div>
      <div className="mobile-header-container">
        <div className="mobile-header-content">
          <div className="mobile-logo-section">
            <div className="mobile-monogram">BIG</div>
          </div>
          <div className="mobile-branding">
            <div className="mobile-logo">Bradford Informed Guidance</div>
            <div className="mobile-tagline">Licensed 6 States • 24-Hour Response</div>
            <div className="mobile-credentials">
              <span className="mobile-trust-pill">FL, GA, SC, TN, AL, TX • Best Insurance Group Partner</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}