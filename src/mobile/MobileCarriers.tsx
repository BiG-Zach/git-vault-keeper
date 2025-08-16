import React from 'react';
import styles from './MobileCarriersPolish.module.css';

const logos = [
  { src: "/logos/carriers/aetna.webp", alt: "Aetna" },
  { src: "/logos/carriers/cigna.webp", alt: "Cigna" },
  { src: "/logos/carriers/americo.webp", alt: "Americo" },
  { src: "/logos/carriers/multiplan.webp", alt: "MultiPlan" },
  { src: "/logos/carriers/allstate.webp", alt: "Allstate" },
  { src: "/logos/carriers/unitedhealthcare.webp", alt: "UnitedHealthcare" },
  { src: "/logos/carriers/firsthealth.webp", alt: "First Health" },
  { src: "/logos/carriers/bluecrossblueshield.png", alt: "Blue Cross Blue Shield" },
  { src: "/logos/carriers/sgic.webp", alt: "SGIC" },
  { src: "/logos/carriers/mutualofomaha.webp", alt: "Mutual of Omaha" },
  { src: "/logos/carriers/pal.webp", alt: "Philadelphia American" },
  { src: "/logos/carriers/aflac.webp", alt: "Aflac" }
];

export default function MobileCarriers() {
  return (
    <section className={styles.carriersSection} aria-label="Insurance carriers we work with">
      <h2 className={styles.carriersHeading}>
        Carriers & PPO networks we work with
      </h2>
      <div className={styles.carriersGrid}>
        {logos.slice(0, 12).map((logo, index) => (
          <div key={index} className={styles.carrierItem}>
            <img
              src={logo.src}
              alt={logo.alt}
              className={styles.carrierLogo}
              loading="lazy"
              width="120"
              height="42"
            />
          </div>
        ))}
      </div>
    </section>
  );
}