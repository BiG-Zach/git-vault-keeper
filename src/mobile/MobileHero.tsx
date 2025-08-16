import React from "react";
import HeroForm from "../components/HeroForm";
import styles from "./MobileHeroPolish.module.css";

export default function MobileHero() {
  return (
    <section className={styles.heroContainer} aria-label="Mobile hero">
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeadline}>
          Private Health & Life Guidance
        </h1>
        <p className={styles.heroSubheadline}>
          Clear. Fast. Year-round.
        </p>

        <div className={styles.heroCTAs}>
          <button className={styles.heroPrimaryCTA}>
            Get My Custom Quote
          </button>
          <a href="tel:+16893256570" className={styles.heroSecondaryCTA}>
            Call Now — (689) 325-6570
          </a>
        </div>

        <div className={styles.heroTrust}>
          <div className={styles.heroTrustItem}>
            <svg className={styles.heroIcon} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            First options in 45–90 minutes
          </div>
          <div className={styles.heroTrustItem}>
            <svg className={styles.heroIcon} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Licensed FL • MI • NC
          </div>
        </div>

        {/* Render the existing desktop form (no logic changes) for quote form functionality */}
        <div style={{ opacity: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <HeroForm />
        </div>
      </div>

      {/* Sentinel for sticky CTA */}
      <div data-hero-sentinel style={{ height: 1 }} />
    </section>
  );
}