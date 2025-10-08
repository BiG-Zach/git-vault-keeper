import React from 'react';
import MobileHero from './MobileHero';
import MobileTrust from './MobileTrust';
import MobileCarriers from './MobileCarriers';
import MobileHowItWorks from './MobileHowItWorks';
import MobileTestimonials from './MobileTestimonials';
import MobileFooter from './MobileFooter';
import styles from './home.module.css';

export default function MobileHome() {
  return (
    <main className={styles.mobileRoot}>
      <MobileHero />
      <MobileTrust />
      <MobileCarriers />
      <MobileHowItWorks />
      <MobileTestimonials />
      <MobileFooter />
    </main>
  );
}