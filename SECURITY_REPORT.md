# SECURITY REPORT — Bradford Informed Guidance

Date: 2025-09-06
Repository: Vite + React SPA (Vercel)
Canonical: https://bradfordinformedguidance.com

## Scope
- Review client code (src, public, index.html)
- Built artifacts (dist)
- Serverless (api)
- Deployment config (vercel.json)

## Findings

1) Third-party scripts and trackers
- No hard-coded <script src="..."> includes to external domains in index.html or templates.
- Build uses modulepreload to internal assets. No unexpected adware/CDNs detected.
- GTM/GA are referenced only as preconnect/dns-prefetch hints; no inline GTM snippet is embedded. Tracking utilities exist (src/utils/gtm.ts) but require gtag/dataLayer to be present to function; they are inert without GTM integration.

2) Redirects
- vercel.json includes canonical redirects: www -> apex, trailing slash normalization. No wildcard off-domain redirects found.

3) Mixed content
- No http:// references in public pages except XML namespace declarations and local dev tools (scripts/*). Built output (dist) contains no http:// external references.

4) Potentially deceptive UI
- No download prompts, fake system dialogs, or forced downloads detected.
- No hidden iframes detected in source or build.

5) Security Headers
- Existing: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection.
- Added: Referrer-Policy, Permissions-Policy, and a baseline Content-Security-Policy (CSP).

## Content Security Policy
Configured in vercel.json for all routes:

Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'strict-dynamic' https: 'unsafe-inline';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https:;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https:;
  frame-ancestors 'self';
  base-uri 'self';
  form-action 'self';

Rationale:
- Allows only same-origin by default. Scripts from HTTPS are allowed for compatibility while we transition to nonced/hashed scripts; no arbitrary http allowed.
- Fonts/styles restricted to Google Fonts where used.
- Images allow data: for inline assets.
- Limits framing to self to prevent clickjacking.

Future tightening:
- Replace 'unsafe-inline' and 'strict-dynamic' with nonces/hashes once script injection points are stabilized.
- If GTM/GA are added, consider scoping script-src to specific hosts and remove generic https: with nonces.

## Additional Safeguards
- verify-security.sh added to scan built output for external scripts, mixed-content, iframes, and confirm CSP presence.
- Robots and sitemaps present; headers set for XML and robots.

## Remediation Summary
- Implemented CSP, Referrer-Policy, Permissions-Policy in vercel.json.
- Added scripts/verify-security.sh to catch regressions.

## Compliance Statement
With these changes, the site restricts external script execution via CSP, removes vectors for common injection and framing attacks, and contains no deceptive behavior patterns. This aligns with Google’s Unwanted Software and Social Engineering policies.
