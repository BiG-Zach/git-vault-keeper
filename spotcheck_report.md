# Production Spot-Check: bradfordinformedguidance.com
Date: 2025-09-07 21:34 local

This document contains raw command outputs and a concise pass/fail summary for security headers, error handling (404), and content types for robots/sitemap. Evidence is suitable for Google Search Console Security Review request.

## 1) Homepage headers (HEAD)
Command:

```
curl.exe -I https://bradfordinformedguidance.com/
```

Raw output:

```
HTTP/1.1 200 OK
Accept-Ranges: bytes
Access-Control-Allow-Origin: *
Age: 1176
Cache-Control: public, max-age=0, must-revalidate
Content-Disposition: inline
Content-Length: 2894
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'
Content-Type: text/html; charset=utf-8
Date: Mon, 08 Sep 2025 04:38:30 GMT
Etag: "a113111431e936dfd72dcfebc16896e6"
Last-Modified: Mon, 08 Sep 2025 04:18:53 GMT
Permissions-Policy: camera=(), microphone=(), geolocation=(self), payment=()
Referrer-Policy: strict-origin-when-cross-origin
Server: Vercel
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-Vercel-Cache: HIT
X-Vercel-Id: sfo1::xtbf9-1757306310469-36ed841e2dd2
X-Xss-Protection: 1; mode=block
```

Key header values observed:
- Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=(self), payment=()
- X-Content-Type-Options: nosniff

## 2) 404 check (HEAD)
Command:

```
curl.exe -I https://bradfordinformedguidance.com/this-path-should-404
```

Raw output:

```
HTTP/1.1 404 Not Found
Accept-Ranges: bytes
Access-Control-Allow-Origin: *
Age: 1144
Cache-Control: public, max-age=0, must-revalidate
Content-Disposition: inline; filename="404.html"
Content-Length: 1209
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'
Content-Type: text/html; charset=utf-8
Date: Mon, 08 Sep 2025 04:37:58 GMT
Etag: "70540b6c53bb86c97935e5fb6236b2ea"
Last-Modified: Mon, 08 Sep 2025 04:18:53 GMT
Permissions-Policy: camera=(), microphone=(), geolocation=(self), payment=()
Referrer-Policy: strict-origin-when-cross-origin
Server: Vercel
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-Vercel-Cache: HIT
X-Vercel-Id: sfo1::7plvt-1757306278572-da7086b5edb1
X-Xss-Protection: 1; mode=block
```

Observed: StatusCode = 404

## 3) robots.txt headers (GET)
Command:

```
Invoke-WebRequest -Uri 'https://bradfordinformedguidance.com/robots.txt' -Method Get | Select-Object -ExpandProperty Headers | Format-List
```

Raw output (excerpt):

```
Key   : Content-Type
Value : text/plain; charset=utf-8
```

Observed: Content-Type = text/plain; charset=utf-8

## 4) sitemap_index.xml headers (GET)
Command:

```
Invoke-WebRequest -Uri 'https://bradfordinformedguidance.com/sitemap_index.xml' -Method Get | Select-Object -ExpandProperty Headers | Format-List
```

Raw output (excerpt):

```
Key   : Content-Type
Value : application/xml
```

Observed: Content-Type = application/xml

---

## Verification Summary (Pass/Fail)
- CSP header present and non-permissive: PASS
- 404 endpoint returns 404: PASS
- robots.txt Content-Type is text/plain (or text/plain; charset=utf-8): PASS
- sitemap_index.xml Content-Type is application/xml (or application/xml; charset=utf-8): PASS
- Referrer-Policy present: PASS
- Permissions-Policy present: PASS
- X-Content-Type-Options = nosniff present: PASS

## Guidance for Google Search Console Request Review
Based on these spot-checks, the site is sending modern security headers (CSP, Referrer-Policy, Permissions-Policy, HSTS, X-Content-Type-Options, X-Frame-Options), properly returns 404 for unknown paths, and serves correct MIME types for robots.txt and sitemap. This evidence aligns with GSC Security Review expectations. Include this report in your Request Review, along with any recent remediation notes.

Recommended note to reviewers:
- "We have verified security headers and content types across key endpoints. CSP is restrictive (no wildcards), 404s are handled correctly, and robots/sitemap are served with correct MIME types. Please see attached raw header outputs."

Spot-check completed. Evidence ready for GSC submission.
