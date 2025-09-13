import { useEffect } from 'react';

const APEX = 'https://bradfordinformedguidance.com';

/**
 * Canonical + Robots injector for critical routes.
 * Ensures at most one self-referencing canonical and a robots meta exist.
 * Never removes a canonical that was prerendered statically.
 */
export default function Canonical({ pathname }: { pathname: string }) {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const head = document.head;

    // If a canonical already exists (from static prerender), do nothing.
    const existingCanonical = head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!existingCanonical) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      const href = `${APEX}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
      link.setAttribute('href', href);
      head.appendChild(link);
    }

    // Ensure a robots meta exists with index,follow (don't override custom content)
    let robots = head.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      robots.setAttribute('content', 'index,follow');
      head.appendChild(robots);
    }
  }, [pathname]);

  return null;
}
