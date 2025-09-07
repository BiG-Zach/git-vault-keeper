param(
  [string]$Host = "https://bradfordinformedguidance.com"
)

$ErrorActionPreference = 'Stop'

function Fail($m){ Write-Output "❌ FAIL: $m"; exit 2 }
function Warn($m){ Write-Output "⚠️  WARN: $m" }
function Pass($m){ Write-Output "✅ PASS: $m" }

# 1) HEAD /
try {
  $resp = Invoke-WebRequest -Method Head -Uri $Host -TimeoutSec 30 -MaximumRedirection 5
} catch {
  Fail "HEAD $Host failed: $($_.Exception.Message)"
}

$status = $resp.StatusCode
Write-Output ("Status: " + $status)
$csp = $resp.Headers['Content-Security-Policy']
$rp = $resp.Headers['Referrer-Policy']
$pp = $resp.Headers['Permissions-Policy']
$xcto = $resp.Headers['X-Content-Type-Options']

if (-not $csp) { Fail "CSP header missing" }
if ($csp -match "\*") { Fail "CSP contains wildcard (*)" }
Pass "CSP present and non-permissive"

if ($rp) { Pass "Referrer-Policy present: $rp" } else { Warn "Referrer-Policy missing" }
if ($pp) { Pass "Permissions-Policy present: $pp" } else { Warn "Permissions-Policy missing" }
if ($xcto) { Pass "X-Content-Type-Options present: $xcto" } else { Warn "X-Content-Type-Options missing" }

# 2) 404 bogus path
$bogus = "$Host/this-path-should-404"
try { $r404 = Invoke-WebRequest -Method Head -Uri $bogus -TimeoutSec 30 -MaximumRedirection 0 } catch { $r404 = $_.Exception.Response }
if ($r404 -and $r404.StatusCode -eq 404) { Pass "Bogus path returns 404" } else { Fail "Bogus path did not return 404 (got: $($r404.StatusCode))" }

# 3) Content types
function Check-CT($url, $expected){
  try { $r = Invoke-WebRequest -Method Head -Uri $url -TimeoutSec 30 -MaximumRedirection 5 } catch { Fail "HEAD $url failed: $($_.Exception.Message)" }
  $ct = $r.Headers['Content-Type']
  if (-not $ct) { Fail "Content-Type missing for $url" }
  if ($ct -notmatch $expected) { Fail "Unexpected Content-Type for $url: $ct (expected like $expected)" }
  Pass "$url Content-Type OK ($ct)"
}

Check-CT "$Host/robots.txt" "text/plain"
Check-CT "$Host/sitemap_index.xml" "application/xml|text/xml"

Pass "Remote header checks completed"
exit 0
