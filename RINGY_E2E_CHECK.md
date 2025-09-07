# Ringy Hero Form E2E Verification

Host: https://bradfordinformedguidance.com
Date: 2025-09-06

Important: Do not change the /api/lead route, payload, or environment variables.

Manual E2E test steps
1) Open the homepage and locate the hero form.
2) Submit with a clearly marked test lead:
   - name: TEST LEAD – <YYYY-MM-DD HH:mm local>
   - email: qa+testlead@example.com
   - phone: 555-0100
   - message: “TEST submission for monitoring. Please ignore.”
3) Observe network response for POST /api/lead:
   - Expected HTTP status: 200
   - Capture response body (paste below)
4) Operator confirms the test lead appears in Ringy dashboard with the same timestamp and fields.
5) During the test, check the browser console for CSP violations (none expected). Paste any console output if present.

Payload example (for documentation only)
```
POST https://bradfordinformedguidance.com/api/lead
Content-Type: application/json
{
  "name": "TEST LEAD – 2025-09-06 19:56",
  "email": "qa+testlead@example.com",
  "phone": "555-0100",
  "message": "TEST submission for monitoring. Please ignore."
}
```

Synthetic monitor (optional, no scheduling yet)
- File: scripts/ringy-e2e-check.ps1
- Behavior: Sends a test-marked payload to /api/lead. This does not change the API contract; it simply posts like the form would. If staging is available, point to staging host; otherwise, ensure operators coordinate before running in prod.
- Exit codes: 0 on success (HTTP 200), non-zero otherwise.

Run example:
```
pwsh -File scripts\ringy-e2e-check.ps1 -Host https://bradfordinformedguidance.com -Label "TEST LEAD"
```

Result log (paste most recent run)
- Timestamp: 
- HTTP status: 
- Response snippet: 
- Ringy dashboard confirmation: 
- CSP violations (if any): 
