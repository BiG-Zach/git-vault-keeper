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

# 2) Inline redirect/download patterns
$patterns = @('window\.location','document\.location','open\(','download')
$found = Get-ChildItem -Path $BuildDir -Recurse -Include *.html,*.js,*.css | ForEach-Object {
  $text = Get-Content $_.FullName -Raw
  foreach ($p in $patterns) { if ($text -match $p) { return $true } }
  return $false
} | Where-Object { $_ } | Measure-Object | Select-Object -ExpandProperty Count
if ($found -gt 0) { Print-Warn "Potential redirect/download patterns found; review build." } else { Print-Pass "No suspicious redirect/download patterns detected." }

# 3) iframes
$ifr = Get-ChildItem -Path $BuildDir -Recurse -Include *.html | ForEach-Object { (Get-Content $_.FullName -Raw) } | Select-String -Quiet -Pattern '<iframe'
if ($ifr) { Print-Warn 'iframes present; ensure CSP frame-ancestors/self is enforced.' } else { Print-Pass 'No iframes detected.' }

# 4) Mixed content (http://)
$mc = Get-ChildItem -Path $BuildDir -Recurse -Include *.html,*.js,*.css | ForEach-Object { (Get-Content $_.FullName -Raw) } | Select-String -Quiet -Pattern 'http://'
if ($mc) { Print-Fail 'Mixed-content reference (http://) detected in build.' } else { Print-Pass 'No http:// references in built output.' }

# 5) CSP header present in vercel.json
$vercelPath = Join-Path (Split-Path $PSScriptRoot -Parent) 'vercel.json'
if (Test-Path $vercelPath) {
  $v = Get-Content $vercelPath -Raw
  if ($v -match 'Content-Security-Policy') { Print-Pass 'CSP header configured in vercel.json' } else { Print-Fail 'CSP header missing in vercel.json' }
} else { Print-Fail 'vercel.json not found' }

Write-Output "\n## Security Verification Summary"
Write-Output "PASS=$pass FAIL=$fail WARN=$warn"
if ($fail -eq 0) { exit 0 } else { exit 1 }
