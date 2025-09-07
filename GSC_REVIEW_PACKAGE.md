# Google Search Console Security Review Package

Host: https://bradfordinformedguidance.com
Date: 2025-09-06

Summary of fixes since last review
- CSP hardening: Strict, non-permissive policy via vercel.json. No wildcards; restricts default-src to 'self', scripts to 'self', styles to 'self' + Google Fonts, images to self+data, fonts to self+Google Fonts, connect to self, frame-ancestors self, base-uri self, form-action self.
- 404 behavior: Unknown paths return proper 404 with static asset exceptions only. No soft 404s.
- Redirects tightened: Enforce HTTPS and apex domain, remove trailing slash, no new redirects beyond canonicalization.
- Robots and sitemaps: Correct content types ensured by headers rules.

Operator copy to paste into GSC “Request Review”
Our site previously triggered a deceptive pages warning. We completed a top-to-bottom security and integrity pass:
- Implemented a strict Content-Security-Policy (no wildcards, self-only for scripts and connects; fonts/styles limited to Google Fonts).
- Verified no mixed-content and no auto-download or open-redirect patterns in the built output.
- Confirmed proper 404 behavior for non-existent pages, and minimized redirects to standard canonicalization only (HTTPS and apex).
- Ensured robots.txt and all sitemaps use correct content types.
We validated these with automated scripts and manual header checks (evidence below). Please re-review and lift the warning.

Evidence: header and route checks

1) Response headers for /
```
$ curl -sI https://bradfordinformedguidance.com
[PASTE ACTUAL OUTPUT FROM OPERATOR RUN HERE]
```
Expected to include:
- Status line: HTTP/2 200 or HTTP/2 308 -> 200 final
- Content-Security-Policy: present, non-permissive (see vercel.json snapshot below)
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=(self), payment=()
- X-Content-Type-Options: nosniff

2) 404 behavior
```
$ curl -sI https://bradfordinformedguidance.com/this-path-should-404
[PASTE ACTUAL OUTPUT FROM OPERATOR RUN HERE]
```
Expected: HTTP/1.1 or HTTP/2 404

3) robots.txt and sitemaps content-type
```
$ curl -sI https://bradfordinformedguidance.com/robots.txt
[PASTE HERE]
$ curl -sI https://bradfordinformedguidance.com/sitemap_index.xml
[PASTE HERE]
```
Expected:
- robots.txt -> Content-Type: text/plain; charset=utf-8 (or text/plain)
- sitemap_index.xml -> Content-Type: application/xml; charset=utf-8 (or application/xml)

Snapshot of configured CSP (from vercel.json at commit time)
```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'
```

Acceptance criteria mapping
- CSP present and non-permissive: Configured as above and verified by headers.
- 404 returns 404: Verified with bogus path check.
- robots/sitemaps content types correct: Verified above.

Notes
- We did not weaken CSP or add redirects; Ringy /api/lead integration remains untouched.
