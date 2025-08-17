import React from "react";
import styles from './MobileStickyPolish.module.css';

type CallAttrs = {
  href: string;
  data: Record<string, string>;
};

/**
 * MobileStickyCTA - Ultra-luxury dual CTA strategy
 * - Shows only on mobile (<768px) and only when the observed sentinel/form is < 25% visible.
 * - Observes: [data-hero-sentinel]
 * - Fail-closed: if neither target exists, component renders null (no sticky shown).
 * - Strategic CTA positioning:
 *    - Get Quote: Opens premium modal for immediate intent prospects
 *    - NO CALL NOW: Replaced with floating consultation button to avoid decision paralysis
 * - Sets <html data-sticky-cta-visible="true|false"> based on visibility
 */
export default function MobileStickyCTA() {
  const [visible, setVisible] = React.useState(false);
  const [ready, setReady] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });
  const callAttrs = React.useRef<CallAttrs>({ href: "tel:+16893256570", data: {} });

  // Clone header call link attributes at runtime
  React.useEffect(() => {
    if (typeof document === "undefined") return;

    // Priority: any header a[href^="tel:"], else fallback to default
    const headerCall = document.querySelector("header a[href^='tel:']") as HTMLAnchorElement | null;

    if (headerCall) {
      const data: Record<string, string> = {};
      // Copy ALL data-* attributes exactly
      for (const attr of Array.from(headerCall.attributes)) {
        if (attr.name.startsWith("data-")) data[attr.name] = attr.value;
      }
      callAttrs.current = {
        href: headerCall.getAttribute("href") ?? "tel:+16893256570",
        data,
      };
    } else {
      callAttrs.current = { href: "tel:+16893256570", data: {} };
    }
    setReady(true);
  }, []);

  // Observe sentinel to decide visibility
  React.useEffect(() => {
    if (!ready || typeof window === "undefined" || typeof document === "undefined") return;

    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    const sentinelEl = document.querySelector("[data-hero-sentinel]") as HTMLElement | null;

    if (!sentinelEl) {
      // Fail-closed: no sentinel exists, do not show sticky
      setVisible(false);
      document.documentElement.dataset.stickyCtaVisible = "false";
      window.removeEventListener("resize", updateIsMobile);
      return;
    }

    // IntersectionObserver: show when < 25% visible (i.e., hero has left viewport)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target !== sentinelEl) continue;
          const ratio = entry.intersectionRatio;
          const shouldShow = isMobile && ratio < 0.25;
          setVisible(shouldShow);
          document.documentElement.dataset.stickyCtaVisible = shouldShow ? "true" : "false";

          // Also hide header's mobile CTA while sticky is visible (if present)
          const headerMobileCTA = document.getElementById("headerMobileCTA");
          if (headerMobileCTA) {
            if (shouldShow) {
              headerMobileCTA.setAttribute("data-hidden-by-sticky", "true");
            } else {
              headerMobileCTA.removeAttribute("data-hidden-by-sticky");
            }
          }
        }
      },
      { threshold: [0, 0.25, 1] }
    );

    observer.observe(sentinelEl);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateIsMobile);
      document.documentElement.dataset.stickyCtaVisible = "false";

      const headerMobileCTA = document.getElementById("headerMobileCTA");
      if (headerMobileCTA) headerMobileCTA.removeAttribute("data-hidden-by-sticky");
    };
  }, [ready, isMobile]);

  // If not mobile or no targets to observe, do not render the sticky
  if (!ready || !isMobile) return null;

  const onGetQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    // Trigger modal opening
    window.dispatchEvent(new CustomEvent('openHeroModal'));
  };

  const callHref = callAttrs.current.href;
  const callData = callAttrs.current.data;

  return (
    <div className={`${styles.stickyContainer} ${visible ? styles.stickyVisible : ''}`}>
      <div className={styles.stickyContent}>
        <a
          href="https://calendly.com/bradfordinformedguidance"
          className={styles.stickyConsultationButton}
          aria-label="Schedule consultation with licensed agent"
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="sticky-consultation"
        >
          <svg className={styles.stickyIcon} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          Schedule
        </a>
        <button
          type="button"
          onClick={onGetQuote}
          className={styles.stickyQuoteButton}
          aria-label="Get instant quote - same-day decisions"
          data-gtm="sticky-quote-premium"
        >
          <svg className={styles.stickyIcon} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>
          Get Quote
        </button>
      </div>
    </div>
  );
}