# Indexing Status Log

Purpose: Track URL Inspection → Live Test checks over 48–72h for priority URLs. Update timestamps and statuses at T+0, +6h, +24h, +48h.

Priority URLs
- https://bradfordinformedguidance.com/
- https://bradfordinformedguidance.com/services/health-insurance
- https://bradfordinformedguidance.com/services/life-insurance
- https://bradfordinformedguidance.com/about

Fields per check
- Timestamp (local):
- URL:
- Live Test result: Page can be indexed | Issues
- Canonical detected: Self | Different (specify)
- GSC status: URL is on Google | Not yet | Indexing requested
- Notes: (messages, warnings)

Log Entries
- [T+0h]
  - URL:
  - Live Test:
  - Canonical:
  - GSC status:
  - Notes:
- [T+6h]
- [T+24h]
- [T+48h]

Acceptance Target
- All priority URLs show “URL is on Google” within 24–48h, or a retry plan is filled in the Re-request Note.