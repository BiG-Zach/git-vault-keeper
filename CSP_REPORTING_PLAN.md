# CSP Reporting Plan (Visibility Only)

Goal: Add visibility into CSP violations without weakening the existing policy. No deployment changes are made in this commit; this is a ready-to-roll plan.

Proposed reporting endpoint
- Path: /api/csp-report
- Method: POST
- Content-Type: application/csp-report or application/reports+json
- Behavior: Accept JSON payload, log minimal fields, return 204. No PII retention beyond what’s included in the report.

Sample minimal receiver (Node.js/Express-style pseudo-code)
```
app.post('/api/csp-report', (req, res) => {
  try {
    const report = req.body; // handle both application/csp-report and application/reports+json
    // Normalize shape
    const entries = Array.isArray(report) ? report : (report?."csp-report" ? [report["csp-report"]] : [report]);
    entries.slice(0, 10).forEach(e => {
      console.log('[CSP]', {
        violated: e['violated-directive'] || e['effective-directive'],
        blocked: e['blocked-uri'] || e['destination'],
        source: e['source-file'] || e['document-uri'],
        ref: e['referrer'],
        ts: new Date().toISOString()
      });
    });
  } catch (err) {
    console.error('[CSP][error]', err.message);
  }
  res.status(204).end();
});
```

Report-To / Reporting-Endpoints header configuration (when infra allows)
- Prefer modern Reporting-Endpoints (Chromium) and backward-compatible report-uri for legacy:
```
Reporting-Endpoints: csp="https://bradfordinformedguidance.com/api/csp-report"
Report-To: { "group": "csp", "max_age": 10886400, "endpoints": [{"url": "https://bradfordinformedguidance.com/api/csp-report"}] }
Content-Security-Policy: ...; report-to csp; report-uri https://bradfordinformedguidance.com/api/csp-report
```
Note: We will not add these headers until the receiver is deployed and verified. Do not weaken any directives.

Example payloads
- Legacy (application/csp-report)
```
{ "csp-report": {
  "document-uri": "https://bradfordinformedguidance.com/",
  "referrer": "",
  "violated-directive": "script-src-elem",
  "effective-directive": "script-src-elem",
  "blocked-uri": "https://evil.example",
  "source-file": "https://bradfordinformedguidance.com/app.js",
  "line-number": 42,
  "column-number": 13,
  "disposition": "enforce"
}}
```
- Reporting API (application/reports+json)
```
[{
  "age": 42,
  "type": "csp-violation",
  "url": "https://bradfordinformedguidance.com/",
  "body": {
    "disposition": "enforce",
    "blockedURL": "https://evil.example",
    "effectiveDirective": "script-src-elem",
    "originalPolicy": "default-src 'self'; script-src 'self'; ...",
    "documentURL": "https://bradfordinformedguidance.com/"
  }
}]
```

Privacy, retention, and operations
- Data collected: only violation metadata (blocked URI, directive, page URL, referrer, timestamp). No user identifiers are required or stored.
- Retention: 7–14 days in logs for triage; aggregate summaries may be retained longer without raw URLs if preferred.
- Access: limited to site operators with least-privilege.
- Rollout plan: deploy the /api/csp-report endpoint, test in staging, then add Reporting-Endpoints/Report-To headers. Monitor and adjust. No CSP directive loosening is permitted.
