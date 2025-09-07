# Google Search Console — Security Issue Review Request

This document provides the exact steps and wording to request a review for the "Deceptive pages" issue in GSC after remediation.

## What was wrong
- GSC flagged potential deceptive behavior risks typical for SPAs: over‑permissive CSP and soft‑404 behavior (200 on unknown routes). We hardened CSP and fixed routing to return 404 for unknown paths.

## What we changed
1. Hardened security headers in vercel.json:
   - Content-Security-Policy now uses least privilege: no 'unsafe-inline', no generic https wildcards; strict frame-ancestors, base-uri, and form-action.
   - Referrer-Policy, Permissions-Policy, X-Content-Type-Options retained.
2. SPA 404 handling:
   - Unknown non-asset routes now return HTTP 404 with a minimal 404.html while keeping the SPA for valid routes.
3. Redirects:
   - Kept host canonicalization (www→apex) and HTTPS enforcement; no open redirects.
4. Robots/Sitemaps headers verified for correct content types.
5. Added validation commands and a one‑shot script in this doc.

## Evidence and links
- Live site: https://bradfordinformedguidance.com/
- Robots: https://bradfordinformedguidance.com/robots.txt
- Sitemap Index: https://bradfordinformedguidance.com/sitemap_index.xml
- Security Report: SECURITY_REPORT.md in repo (details on policy and scans)

## How to verify before requesting review
- Replace $HOST with your production hostname.

```bash
# Headers and CSP
curl -sI https://$HOST | sed -n '1p;/^content-security-policy:/Ip;/^referrer-policy:/Ip;/^permissions-policy:/Ip;/^x-content-type-options:/Ip;'

# 404 check for bogus path
curl -s -o /dev/null -w "%{http_code}\\n" https://$HOST/this-path-should-404

# robots and sitemap types
curl -sI https://$HOST/robots.txt | grep -i "content-type"
curl -sI https://$HOST/sitemap_index.xml | grep -i "content-type"
```

## PASTE-THIS-INTO-GSC-REVIEW
"We investigated the 'Deceptive pages' flag and identified two potential risk factors common to modern SPAs: (1) an over‑permissive Content Security Policy and (2) soft‑404 behavior where unknown routes returned HTTP 200 with a generic SPA shell. We remediated as follows:

- Implemented a strict CSP (no 'unsafe-inline' or generic https wildcards), tight frame-ancestors/base-uri/form-action, and least‑privilege source allowlists.
- Corrected routing so unknown non-asset paths now return HTTP 404 with a dedicated 404.html, avoiding soft‑404s.
- Retained safe canonical redirects (www→apex, HTTP→HTTPS) and verified there are no off‑domain or ambiguous redirects.
- Verified robots.txt and sitemap XML return correct content types and are not served by the SPA.
- Re-tested headers and routes using curl commands; CSP is present and compliant, and the bogus path returns 404.

Based on these changes, our site complies with Google’s policies on deceptive content and social engineering. Please re‑evaluate the property."

## After approval
- Keep CSP in place and extend only with explicit allowlists or nonces/hashes if new third‑party tools are added.
- Re-run the validation checklist on each deployment.
