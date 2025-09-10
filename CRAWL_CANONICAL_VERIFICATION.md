# Crawl & Canonical Verification Note

Checklist
- robots.txt accessible: https://bradfordinformedguidance.com/robots.txt (200, text/plain)
- API robots endpoint: /api/robots (200, text/plain) → disallow preview domains only
- Priority URLs allowed by robots: Yes/No (list any disallows)
- Sitemap index: https://bradfordinformedguidance.com/sitemap_index.xml (200, application/xml)
- Child sitemaps include priority URLs: pages.xml includes /, /services/health-insurance, /services/life-insurance, /about
- Unknown non-asset path 404s: request /nonexistent-123 → 404 (no soft-404 copy or redirect)
- Canonical tag per page matches visible URL (self-canonical): Home | Health | Life | About

Findings
- robots.txt: 
- Sitemaps:
- 404 behavior:
- Canonicals:

Discrepancies & Proposed Fixes
- [ ] 
- [ ] 

Notes
- Guardrails respected: no loosening of security headers or crawl rules.
