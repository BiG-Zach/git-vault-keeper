import { useEffect } from 'react';

const APEX = 'https://bradfordinformedguidance.com';

/**
 * Canonical + Robots injector for critical routes.
 * Ensures exactly one self-referencing canonical and an index,follow robots tag
 * appears in the head early so prerendered HTML includes them.
 */
export default function Canonical({ pathname }: { pathname: string }) {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const head = document.head;

    // Remove any existing canonical links to prevent duplicates
    const existingCanonicals = head.querySelectorAll('link[rel="canonical"]');
    existingCanonicals.forEach((el) => el.parentElement?.removeChild(el));

    // Insert one canonical for this pathname
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', `${APEX}${pathname.startsWith('/') ? pathname : `/${pathname}`}`);
    head.appendChild(link);

    // Ensure a robots meta exists with index,follow
    let robots = head.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      head.appendChild(robots);
    }
    robots.setAttribute('content', 'index,follow');
  }, [pathname]);

  return null;
}
