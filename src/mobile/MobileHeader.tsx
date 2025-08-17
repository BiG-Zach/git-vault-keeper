import * as React from 'react';
import styles from './MobileHeaderLuxury.module.css';
import '../mobile/tokens.module.css';

export default function MobileHeader() {
  const ref = React.useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    const isMobile = () => (window.innerWidth || 0) < 768;

    const setVar = () => {
      if (!isMobile()) return;
      const h = (ref.current?.offsetHeight ?? 64);
      root.style.setProperty('--header-h', `${h}px`);
    };

    const handleScroll = () => {
      if (!isMobile()) return;
      setScrolled(window.scrollY > 10);
    };

    setVar();
    handleScroll();
    window.addEventListener('resize', setVar);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', setVar);
      window.removeEventListener('scroll', handleScroll);
      root.style.removeProperty('--header-h');
    };
  }, []);

  return (
    <header
      ref={ref}
      className={`${styles.luxuryHeader} ${scrolled ? styles.scrolled : ''} md:hidden`}
      aria-label="Mobile site header"
    >
      <div className={styles.headerContent}>
        <a
          href="/"
          className={styles.brandName}
        >
          Bradford Informed Guidance
        </a>
        <a
          id="headerMobileCTA"
          href="https://calendly.com/bradfordinformedguidance"
          className={styles.scheduleButton}
          aria-label="Schedule consultation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule
        </a>
      </div>
      <div className={styles.accentStripe} />
    </header>
  );
}