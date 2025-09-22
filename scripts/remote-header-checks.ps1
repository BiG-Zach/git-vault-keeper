param(
  [string]$BaseUrl = "http://localhost:8080"
)

$ErrorActionPreference = 'Stop'

function Fail($m){ Write-Output "❌ FAIL: $m"; exit 2 }
function Warn($m){ Write-Output "⚠️  WARN: $m" }
function Pass($m){ Write-Output "✅ PASS: $m" }

$isProductionHost = $false
try {
  $isProductionHost = ([Uri]($BaseUrl + '/')).Host -eq 'bradfordinformedguidance.com'
} catch {
  $isProductionHost = $false
}

$vercelHeaderMap = @{}
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$configDir = Join-Path $scriptRoot '..'
$configPath = Join-Path $configDir 'vercel.json'
if (Test-Path $configPath) {
  try {
    $config = Get-Content -Raw -Path $configPath | ConvertFrom-Json
    if ($config.headers) {
      foreach ($entry in $config.headers) {
        if ($entry.headers) {
          foreach ($header in $entry.headers) {
            if (-not $vercelHeaderMap.ContainsKey($header.key)) {
              $vercelHeaderMap[$header.key] = $header.value
            }
          }
        }
      }
    }
  } catch {
    Warn "Unable to parse vercel.json for header fallbacks: $($_.Exception.Message)"
  }
}

function Ensure-Header($key, $value) {
  if ($value) {
    Pass "$key present: $value"
    return
  }

  if (-not $isProductionHost -and $vercelHeaderMap.ContainsKey($key)) {
    Pass "$key enforced via vercel.json (not served locally)"
  } elseif ($isProductionHost) {
    Fail "$key header missing"
  } else {
    Warn "$key header missing locally and not found in vercel.json"
  }
}

# 1) HEAD /
try {
  $resp = Invoke-WebRequest -Method Head -Uri $BaseUrl -TimeoutSec 30 -MaximumRedirection 5
} catch {
  Fail "HEAD $BaseUrl failed: $($_.Exception.Message)"
}

$status = $resp.StatusCode
Write-Output ("Status: " + $status)
$csp = $resp.Headers['Content-Security-Policy']
$rp = $resp.Headers['Referrer-Policy']
$pp = $resp.Headers['Permissions-Policy']
$xcto = $resp.Headers['X-Content-Type-Options']

if ($csp -and $csp -match "\*") {
  Fail "CSP contains wildcard (*)"
}
Ensure-Header 'Content-Security-Policy' $csp
Ensure-Header 'Referrer-Policy' $rp
Ensure-Header 'Permissions-Policy' $pp
Ensure-Header 'X-Content-Type-Options' $xcto

# 2) 404 bogus path
$bogus = "$BaseUrl/this-path-should-404"
try { $r404 = Invoke-WebRequest -Method Head -Uri $bogus -TimeoutSec 30 -MaximumRedirection 0 } catch { $r404 = $_.Exception.Response }
if ($r404 -and $r404.StatusCode -eq 404) { Pass "Bogus path returns 404" } else { Fail "Bogus path did not return 404 (got: $($r404.StatusCode))" }

# 3) Content types
function Check-CT($url, $expected){
  try { $r = Invoke-WebRequest -Method Head -Uri $url -TimeoutSec 30 -MaximumRedirection 5 } catch { Fail "HEAD $url failed: $($_.Exception.Message)" }
  $ct = $r.Headers['Content-Type']
  if (-not $ct) { Fail "Content-Type missing for $url" }
  if ($ct -notmatch $expected) { $msg = ("Unexpected Content-Type for {0}: {1} (expected like {2})" -f $url, $ct, $expected); Fail $msg }
  Pass "$url Content-Type OK ($ct)"
}

Check-CT "$BaseUrl/robots.txt" "text/plain"
Check-CT "$BaseUrl/sitemap_index.xml" "application/xml|text/xml"

Pass "Remote header checks completed"
exit 0
