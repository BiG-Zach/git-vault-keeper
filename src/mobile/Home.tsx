import React from 'react';
import MobileHero from './MobileHero';
import MobileStickyCTA from './MobileStickyCTA';
import MobileCarriers from './MobileCarriers';
import styles from './home.module.css';

export default function MobileHome() {
  return (
    <main className={styles.mobileRoot}>
      <MobileHero />
      <MobileCarriers />
      <MobileStickyCTA />
    </main>
  );
}