# Google Search Console — Security Issue Review Request

This document provides the exact steps and wording to request a review for the "Deceptive pages" issue in GSC after remediation.

## What was wrong
- No evidence of malware or deceptive content was found in source or build. However, the absence of a restrictive Content Security Policy (CSP) could allow abuse if any third-party script or injection occurred via misconfiguration. We hardened the app and verified the build to prevent such risks.

## What we changed
1. Implemented strict security headers in vercel.json:
   - Content-Security-Policy limiting scripts, styles, images, fonts, connections, frame-ancestors, base-uri, and form-action.
   - Referrer-Policy and Permissions-Policy.
   - Retained X-Content-Type-Options, X-Frame-Options, X-XSS-Protection.
2. Verified sitemaps and robots to ensure proper indexing and transparency.
3. Added a security verification script (scripts/verify-security.sh) to automatically scan built output and flag any risky patterns.

## Evidence and links
- Live site: https://bradfordinformedguidance.com/
- Robots: https://bradfordinformedguidance.com/robots.txt
- Sitemap Index: https://bradfordinformedguidance.com/sitemap_index.xml
- Security Report: SECURITY_REPORT.md in repo (details on policy and scans)

## How to verify before requesting review
1. Build locally: npm ci && npm run build
2. Run security verify: bash scripts/verify-security.sh
3. Run SEO verify (optional but recommended): bash scripts/verify-seo.sh
4. Deploy to a preview and re-run both scripts against the preview URL.

## PASTE-THIS-INTO-GSC-REVIEW
We investigated the "Deceptive pages" flag and completed security hardening. We found no deceptive content or malware. We implemented a restrictive Content Security Policy (CSP) and additional security headers on all routes to block unauthorized scripts and framing. We also audited the codebase and built output to confirm there are no off-domain redirects, hidden iframes, or download prompts. Our automated security check (scripts/verify-security.sh) verifies no mixed content or unauthorized external scripts in the build. Please review and lift the warning. Thank you.

## After approval
- Monitor in GSC for 2–4 weeks.
- Keep CSP in place; if integrating GTM/GA later, scope sources and use nonces/hashes.
