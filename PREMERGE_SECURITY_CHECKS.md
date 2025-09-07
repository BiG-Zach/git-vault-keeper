# Pre-Merge Security Checks

Purpose: Provide a local/CI preflight to prevent regressions in security posture without weakening CSP.

How to run locally
- Build the project: `npm run build`
- Run security verifier: `npm run verify:security`
- Run remote header checks (PowerShell): `pwsh -File scripts\remote-header-checks.ps1 -Host https://bradfordinformedguidance.com`

CI setup (example)
- Add a CI step (GitHub Actions/Azure Pipelines/other) that executes the same commands above on pull requests.
- Fail the job if the header checker exits non-zero or verify-security.ps1 exits non-zero.

What the checks do
- verify-security.ps1:
  - Scans built output for external scripts not on allowlist
  - Detects open-redirect and auto-download patterns
  - Flags mixed content
  - Ensures CSP is configured in vercel.json
- remote-header-checks.ps1:
  - HEAD request to /
    - Ensures Content-Security-Policy is present and not permissive
    - Checks Referrer-Policy, Permissions-Policy, X-Content-Type-Options
  - 404 check for a bogus path
  - robots.txt and sitemap_index.xml Content-Type checks

Failure conditions
- Missing CSP header
- CSP containing wildcards (*) in script-src, default-src, or connect-src
- Bogus path not returning HTTP 404
- verify-security.ps1 reports FAIL

Example GitHub Actions step
```
- name: Build
  run: npm ci && npm run build
- name: Security Checks
  run: |
    npm run verify:security
    pwsh -File scripts/remote-header-checks.ps1 -Host https://bradfordinformedguidance.com
```
