# Indexing Re-Request Targets and Operator Checklist

Host: https://bradfordinformedguidance.com
Date: 2025-09-06

Priority URLs
1. https://bradfordinformedguidance.com/
2. https://bradfordinformedguidance.com/about
3. https://bradfordinformedguidance.com/contact

Operator steps in GSC URL Inspection (repeat for each URL)
- Open URL Inspection, paste target URL.
- Click “Test Live URL”.
  - Capture results (paste screenshot or notes below):
    - Page is available to Google: [ ]
    - Indexing allowed: [ ]
    - User-declared canonical shown: [ ] (no canonical errors)
- Click “Request Indexing”.
  - Confirmation received (“Indexing requested”): [ ]
- Record timestamp using the script snippet below.

Per-URL capture
- / :
  - Test Live URL notes: 
  - Indexing requested confirmation: 
  - Timestamp: 
- /about :
  - Test Live URL notes: 
  - Indexing requested confirmation: 
  - Timestamp: 
- /contact :
  - Test Live URL notes: 
  - Indexing requested confirmation: 
  - Timestamp: 

Helper: simple timestamp recorder (PowerShell)
```
# Usage: pwsh -File scripts\record-indexing.ps1 "<URL>" "<note>"
$when = Get-Date -Format "yyyy-MM-ddTHH:mm:ssK"
$u = $args[0]
$note = if ($args.Count -gt 1) { $args[1] } else { '' }
Add-Content -Path "INDEXING_TARGETS.md" -Value ("- [" + $when + "] " + $u + " " + $note)
Write-Output ("Recorded: " + $when + " " + $u)
```

Notes
- Do not automate GSC UI; this document is a checklist only.
- If any URL shows canonicalization issues or noindex, please pause and file a follow-up.
