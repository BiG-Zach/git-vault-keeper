import React from 'react';

export default function MobileHeader() {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 mobile-header">
      <div className="mobile-header-container">
        <div className="mobile-header-content">
          <div className="mobile-branding">
            <div className="mobile-logo">Bradford Informed Guidance</div>
            <div className="mobile-trust">Licensed Independent Agent • NPN: 18181266</div>
          </div>
        </div>
      </div>
    </header>
  );
}