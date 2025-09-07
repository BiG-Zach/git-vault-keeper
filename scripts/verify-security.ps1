# Security Verification Script (PowerShell) for Bradford Informed Guidance
# Usage: pwsh -File scripts/verify-security.ps1

$ErrorActionPreference = 'Stop'

$BuildDir = Join-Path (Split-Path $PSScriptRoot -Parent) 'dist'
$AllowedScriptHosts = @(
  'https://bradfordinformedguidance.com',
  'https://www.googletagmanager.com',
  'https://www.google-analytics.com'
)

$pass = 0; $fail = 0; $warn = 0
function Print-Pass($m){ $script:pass++; Write-Output "✅ PASS: $m" }
function Print-Fail($m){ $script:fail++; Write-Output "❌ FAIL: $m" }
function Print-Warn($m){ $script:warn++; Write-Output "⚠️  WARN: $m" }

if (-not (Test-Path $BuildDir)) {
  Print-Fail "Build directory '$BuildDir' not found. Run: npm run build"
  Write-Output "\n## Security Verification Summary"; Write-Output "PASS=$pass FAIL=$fail WARN=$warn"
  exit 1
}

# 1) External <script src> not in allowlist
$scriptTagPattern = '<script[^>]*src="https?://[^"]+"'
$externalScripts = Get-ChildItem -Path $BuildDir -Recurse -Include *.html,*.js,*.css | ForEach-Object {
  (Get-Content $_.FullName -Raw) | Select-String -AllMatches -Pattern $scriptTagPattern | ForEach-Object { $_.Matches.Value }
} | Sort-Object -Unique

if ($externalScripts -and $externalScripts.Count -gt 0) {
  Write-Output "Found external scripts:"
  $externalScripts | ForEach-Object { Write-Output $_ }
  foreach ($match in $externalScripts) {
    if ($match -match 'src="([^"]+)"') { $url = $Matches[1] } else { continue }
    $allowed = $false
    foreach ($host in $AllowedScriptHosts) { if ($url.StartsWith($host)) { $allowed = $true; break } }
    if (-not $allowed) { Print-Fail "External script not in allowed list: $url" } else { Print-Pass "External script allowed: $url" }
  }
} else {
  Print-Pass "No external <script src> tags found in $BuildDir (good)."
}

# 2) Inline redirect/download patterns (refined)
$SiteHost = 'bradfordinformedguidance.com'
$dangerSchemes = @('javascript:', 'data:', 'vbscript:', 'file:', 'blob:')
$fileExtPattern = '\\.(pdf|docx?|zip|exe|dmg|apk|ipa)(\\?|$)'
$redirectFindings = @()

Get-ChildItem -Path $BuildDir -Recurse -Include *.html,*.js,*.css | ForEach-Object {
  $path = $_.FullName
  $text = Get-Content $path -Raw

  # Narrow allowlist: ignore framework vendor bundles known safe for navigation (react-vendor)
  if ($path -match 'react-vendor') { return }

  # Find common redirect assignments
  $assignPatterns = @(
    'window\.location\.(href|assign|replace)\s*=\s*([^;]+);',
    'document\.location\.(href|assign|replace)\s*=\s*([^;]+);',
    'location\.(href|assign|replace)\s*=\s*([^;]+);',
    'window\.open\(([^)]+)\)'
  )

  foreach ($ap in $assignPatterns) {
    $matches = [regex]::Matches($text, $ap)
    foreach ($m in $matches) {
      $targetRaw = $m.Groups[$m.Groups.Count-1].Value.Trim()
      # Try to extract string literal if present
      $target = $targetRaw
      if ($targetRaw -match '^(["\''])((?s).+?)\1') { $target = $Matches[2] }

      $reason = $null
      $severity = 'pass'

      # Normalize
      $t = $target.Trim()

      # Skip obviously same-document anchors
      if ($t.StartsWith('#')) { $severity = 'pass' }
      elseif ($dangerSchemes | Where-Object { $t.ToLower().StartsWith($_) }) { $severity = 'fail'; $reason = 'Dangerous scheme' }
      elseif ($t -match '^\./|^\.\./|^/($|[^/])') { $severity = 'pass' } # relative or root-relative
      elseif ($t -match '^(https?:)?//') {
        # Absolute URL
        if ($t -match '^https?://(www\.)?'+[regex]::Escape($SiteHost)) { $severity = 'pass' }
        elseif ($t -match '^http://') { $severity = 'fail'; $reason = 'Mixed-content external redirect (http)' }
        else { $severity = 'fail'; $reason = 'External redirect' }
      } else {
        # Likely variable/computed. Treat as warn unless clearly internal var name contains "/" start.
        $severity = 'warn'; $reason = 'Computed redirect target; verify allowlist and same-origin enforcement'
      }

      # Download heuristics
      if ($severity -ne 'fail' -and $t -match $fileExtPattern) {
        if ($severity -eq 'pass') { $severity = 'warn' }
        if (-not $reason) { $reason = 'Redirect/navigate to a file extension; ensure user-initiated and no auto-download' }
      }

      $redirectFindings += [pscustomobject]@{ File=$path; Snippet=$m.Value.Trim(); Target=$t; Severity=$severity; Reason=$reason }
    }
  }
}

$warnDetails = @()
$failDetails = @()
$passCount = 0
foreach ($f in $redirectFindings) {
  switch ($f.Severity) {
    'fail' { $failDetails += $f }
    'warn' { $warnDetails += $f }
    default { $passCount++ }
  }
}

if ($failDetails.Count -gt 0) {
  Print-Fail ("Open-redirect/auto-download risks detected: {0}" -f $failDetails.Count)
  $failDetails | ForEach-Object { Write-Output ("  [FAIL] {0} -> {1} :: {2}" -f $_.File, $_.Target, $_.Reason) }
} else {
  Print-Pass "No failing redirect/download patterns detected."
}

if ($warnDetails.Count -gt 0) {
  Print-Warn ("Potential redirect/download patterns that need review: {0}" -f $warnDetails.Count)
  $warnDetails | ForEach-Object { Write-Output ("  [WARN] {0} -> {1} :: {2}" -f $_.File, $_.Target, $_.Reason) }
} else {
  Print-Pass "No redirect/download warnings (same-origin navigations considered safe)."
}

# 3) iframes
$ifr = Get-ChildItem -Path $BuildDir -Recurse -Include *.html | ForEach-Object { (Get-Content $_.FullName -Raw) } | Select-String -Quiet -Pattern '<iframe'
if ($ifr) { Print-Warn 'iframes present; ensure CSP frame-ancestors/self is enforced.' } else { Print-Pass 'No iframes detected.' }

# 4) Mixed content (http://) — ignore XML namespace and SVG xmlns/xlink
$mcHits = @()
Get-ChildItem -Path $BuildDir -Recurse -Include *.html,*.js,*.css | ForEach-Object {
  $text = Get-Content $_.FullName -Raw
  $lines = $text -split "`n"
  for ($i=0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    if ($line -match 'http://') {
      # ignore common safe namespaces
      if ($line -match 'xmlns(:|=)"http://|xsi:schemaLocation="http://|xmlns:xlink="http://|http://www\.w3\.org/|http://www\.sitemaps\.org/|http://www\.google\.com/schemas/sitemap-image/1\.1') { continue }
      $mcHits += "${($_.FullName)}:`$($i+1): $line"
    }
  }
}
if ($mcHits.Count -gt 0) {
  Print-Fail "Mixed-content reference (http://) detected in build:" 
  $mcHits | ForEach-Object { Write-Output "  $_" }
} else { Print-Pass 'No http:// references in built output (excluding XML namespace declarations).' }

# 5) CSP header present in vercel.json
$vercelPath = Join-Path (Split-Path $PSScriptRoot -Parent) 'vercel.json'
if (Test-Path $vercelPath) {
  $v = Get-Content $vercelPath -Raw
  if ($v -match 'Content-Security-Policy') { Print-Pass 'CSP header configured in vercel.json' } else { Print-Fail 'CSP header missing in vercel.json' }
} else { Print-Fail 'vercel.json not found' }

# Warning Details section
Write-Output "\n## Warning Details"
if ($warnDetails.Count -gt 0 -or $failDetails.Count -gt 0) {
  if ($failDetails.Count -gt 0) {
    Write-Output "Open-redirect/auto-download risks:"
    $failDetails | ForEach-Object { Write-Output ("  [FAIL] {0} -> {1} :: {2}" -f $_.File, $_.Target, $_.Reason) }
  }
  if ($warnDetails.Count -gt 0) {
    Write-Output "Potential patterns (review):"
    $warnDetails | ForEach-Object { Write-Output ("  [WARN] {0} -> {1} :: {2}" -f $_.File, $_.Target, $_.Reason) }
  }
} else {
  Write-Output "None"
}

Write-Output "\n## Security Verification Summary"
Write-Output "PASS=$pass FAIL=$fail WARN=$warn"
if ($fail -eq 0) { exit 0 } else { exit 1 }
