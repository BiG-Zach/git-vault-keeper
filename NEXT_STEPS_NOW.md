# What To Do Now — Google Search Console Action Plan

Property: https://bradfordinformedguidance.com
Date: 2025-09-08

Executive Summary
- Canonical, robots, sitemaps, redirects, 404s, and CSP have been fixed and aligned to HTTPS apex without trailing slash.
- Next actions: submit sitemaps, batch URL Inspection requests for priority pages, validate live signals, and monitor daily.
- Expect first indexing improvements within 24–48 hours if actions below are followed.

Preferred Policies (Canonical One‑Pager)
- Preferred domain: https://bradfordinformedguidance.com (HTTPS apex)
- Redirects: 301 www→apex; 301 HTTP→HTTPS; 301 trailing slash → no slash
- Canonical: one absolute rel=canonical per page to the preferred URL; canonical must 200 and be self‑canonical
- Noindex cohort (intentional): /thank-you, /success, /admin/, /private/, /test/
- Parameters: utm_*, ref, source are non‑canonical; disallowed in robots; link internally only to clean URLs
- Sitemaps: /sitemap_index.xml referencing /sitemap-pages.xml and /sitemap-images.xml (canonical URLs only)

Immediate Actions (Today, 30–45 minutes)
1) Submit Sitemaps in GSC (Indexing → Sitemaps)
   - Add and submit:
     - sitemap_index.xml
     - sitemap-pages.xml
     - sitemap-images.xml
   - Confirm status = Success

2) Manual URL Inspection — Batch 1 (4 URLs)
   - Submit and Request Indexing for:
     - https://bradfordinformedguidance.com/
     - https://bradfordinformedguidance.com/services/health-insurance
     - https://bradfordinformedguidance.com/services/life-insurance
     - https://bradfordinformedguidance.com/about
   - For each: Test Live URL first; verify Google-selected canonical equals declared; then Request Indexing

3) Purge Caches (if applicable)
   - If CDN/edge caching is enabled, purge after deploy to ensure fresh canonicals and sitemaps are visible

Validation Checklist (Run Now)
Use curl/PowerShell from your workstation. Replace $HOST if testing elsewhere.
- Canonical present in HTML
  - curl -s https://bradfordinformedguidance.com/ | grep -i 'rel="canonical"'
- 404 behavior for unknown path
  - curl -s -o /dev/null -w "%{http_code}\n" https://bradfordinformedguidance.com/this-path-should-404  → expect 404
- robots.txt content type and rules
  - curl -sI https://bradfordinformedguidance.com/robots.txt | grep -i content-type  → text/plain
  - Confirm it includes: Sitemap: https://bradfordinformedguidance.com/sitemap_index.xml
- Sitemap content types
  - curl -sI https://bradfordinformedguidance.com/sitemap_index.xml | grep -i content-type  → application/xml
- Redirects
  - https://www.bradfordinformedguidance.com/ → 301 to apex
  - https://bradfordinformedguidance.com/about/ → 301 to /about

Re-Request Indexing Playbook
- Batch 1 (Today): 4 URLs listed above
- Batch 2 (In 24–48 hours, after Batch 1 shows progress):
  - https://bradfordinformedguidance.com/states/florida
  - https://bradfordinformedguidance.com/blog/term-vs-whole-life-insurance-2024
  - https://bradfordinformedguidance.com/blog/florida-health-insurance-guide-2024
- For each batch:
  - Test Live URL → Confirm canonical and indexability → Request Indexing → Note confirmation

Monitoring Plan and Acceptance Criteria
- Cadence
  - First 6 hours: Check URL Inspection status every 2–3 hours for Batch 1
  - 24–48 hours: Expect at least 2–4 pages to move to “URL is on Google”
  - Daily for 7 days: Review Indexing → Pages report and Coverage reasons
- Acceptance
  - 0 unintentional noindex signals on priority pages
  - "Duplicate without user-selected canonical" declines for fixed URLs
  - Google-selected canonical equals declared for duplicates/variants
  - Priority pages appear as Indexed within 24–72 hours for initial batch

Issue Matrix (Starter — copy to CSV/Sheet)
URL,Reason,Root Cause,Fix,Status,Last Checked,Notes
https://bradfordinformedguidance.com/,Re-request post-fix,Canonical missing in initial HTML,Static canonical added; resubmitted,Pending,,
https://bradfordinformedguidance.com/services/health-insurance,Re-request post-fix,SPA-only tags before,Static route HTML + sitemap,Pending,,
https://bradfordinformedguidance.com/services/life-insurance,Re-request post-fix,SPA-only tags before,Static route HTML + sitemap,Pending,,
https://bradfordinformedguidance.com/about,Re-request post-fix,H1/metadata cleanup needed,Adjusted + resubmit,Pending,,

Quick Commands (Windows PowerShell)
- pwsh -File scripts/verify-seo.ps1
- pwsh -File scripts/sitemap-audit.ps1  # optional helper from SITEMAP_AUDIT.md

Notes
- Keep canonical domain policy consistent in internal links and future content
- Do not include intentional noindex pages in sitemaps
- If adding new templates, ensure the canonical tag is present in static HTML
