# SEO Verification Script (PowerShell) for Bradford Informed Guidance
# Usage: pwsh -File scripts/verify-seo.ps1 [-BaseUrl http://localhost:8080]

param(
  [string]$BaseUrl = 'http://localhost:8080'
)

$ErrorActionPreference = 'Stop'

$UA   = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
$Base = $BaseUrl.TrimEnd('/')
$Routes = @(
  '/', '/about', '/contact', '/quote', '/carriers', '/our-process', '/resources',
  '/services/health-insurance', '/services/life-insurance', '/services/iul-insurance', '/services/ppo-networks',
  '/states/florida', '/states/michigan', '/states/north-carolina', '/florida', '/michigan', '/north-carolina',
  '/referral', '/checklist', '/thank-you', '/privacy-policy', '/terms'
)

$pass = 0; $fail = 0; $warn = 0; $tests = 0
function Print-Pass($m){ $script:pass++; $script:tests++; Write-Output "PASS: $m" }
function Print-Fail($m){ $script:fail++; $script:tests++; Write-Output "FAIL: $m" }
function Print-Warn($m){ $script:warn++; $script:tests++; Write-Output "WARN: $m" }

Write-Output "Starting SEO verification"
Write-Output "Base URL: $Base"
Write-Output "User Agent: $UA"

# Helpers
function Test-Head200Html($url){
  try {
    $resp = iwr -Method Head -Headers @{ 'User-Agent' = $UA } -Uri $url -MaximumRedirection 5 -TimeoutSec 30
    if ($resp.StatusCode -eq 200) { Print-Pass "HEAD 200 for ${url}" } else { Print-Fail "HEAD $($resp.StatusCode) for ${url}" }
    $ctype = ($resp.Headers['Content-Type'] | Select-Object -First 1)
    $ctypeNorm = ($ctype | ForEach-Object { $_.ToString().ToLowerInvariant().Trim() })
    $isHtml = ($ctypeNorm -like 'text/html*')
    $isRobotsPlain = ($ctypeNorm -like 'text/plain*' -and $url -match 'robots\.txt$')
    if ($ctype -and ($isHtml -or $isRobotsPlain)) {
      Print-Pass "Content-Type ok ($ctype) for ${url}"
    } else {
      Print-Fail "Unexpected Content-Type ($ctype) for ${url}"
    }
  } catch { Print-Fail "HEAD failed for ${url}: $($_.Exception.Message)" }
}

function Assert-HtmlElements($url){
  try {
    $resp = iwr -Headers @{ 'User-Agent' = $UA } -Uri $url -MaximumRedirection 5 -TimeoutSec 60
    $html = $resp.Content
    if ($html | Select-String -SimpleMatch '<title>') { Print-Pass "`<title`> present ${url}" } else { Print-Fail "`<title`> missing ${url}" }
    if ($html | Select-String 'name="description"') { Print-Pass "meta description present ${url}" } else { Print-Fail "meta description missing ${url}" }
    if ($html | Select-String -SimpleMatch '<h1') { Print-Pass "`<h1`> present ${url}" } else { Print-Fail "`<h1`> missing ${url}" }
    if ($html | Select-String 'rel="canonical"') { Print-Pass "canonical present ${url}" } else { Print-Fail "canonical missing ${url}" }
    if ($html | Select-String 'application/ld\+json') { Print-Pass "JSON-LD present ${url}" } else { Print-Warn "JSON-LD not found ${url}" }
  } catch { Print-Fail "GET failed for ${url}: $($_.Exception.Message)" }
}

# robots.txt
Write-Output ""; Write-Output "Checking robots.txt"
try {
  Test-Head200Html "$Base/robots.txt"
  $robots = iwr -Headers @{ 'User-Agent' = $UA } -Uri "$Base/robots.txt" -TimeoutSec 30
  $content = $robots.Content
  if ($content | Select-String -SimpleMatch 'Sitemap: https://bradfordinformedguidance.com/sitemap_index.xml') { Print-Pass 'robots.txt includes sitemap index' } else { Print-Fail 'robots.txt missing sitemap index line' }
} catch { Print-Fail "robots.txt fetch failed: $($_.Exception.Message)" }

# Sitemaps
function Check-Sitemap($url, $name){
  Write-Output ""; Write-Output "Checking $name"
  try {
    $head = iwr -Method Head -Headers @{ 'User-Agent' = $UA } -Uri $url -TimeoutSec 30
    if ($head.StatusCode -eq 200) { Print-Pass "$name returns 200" } else { Print-Fail "$name returned $($head.StatusCode)" }
    $ctype = ($head.Headers['Content-Type'] | Select-Object -First 1)
    if ($ctype -match 'application/xml') { Print-Pass "$name Content-Type XML" } else { Print-Fail "$name Content-Type not xml ($ctype)" }
    $body = (iwr -Headers @{ 'User-Agent' = $UA } -Uri $url -TimeoutSec 30).Content
    if ($body -match '<urlset' -or $body -match '<sitemapindex') { Print-Pass "$name has valid XML structure" } else { Print-Fail "$name missing XML root" }
    if ($body -match [regex]::Escape($Base)) { Print-Pass "$name contains base URL" } else { Print-Fail "$name missing base URL" }
  } catch { Print-Fail "$name check failed: $($_.Exception.Message)" }
}

Check-Sitemap "$Base/sitemap_index.xml" 'sitemap_index.xml'
Check-Sitemap "$Base/sitemap-pages.xml" 'sitemap-pages.xml'
Check-Sitemap "$Base/sitemap-images.xml" 'sitemap-images.xml'

# Redirect checks
Write-Output ""; Write-Output "Checking redirects"
$baseHost = $null
try {
  $baseHost = ([Uri]($Base + '/')).Host
} catch {
  $baseHost = $null
}

if ($baseHost -and $baseHost -eq 'bradfordinformedguidance.com') {
  try {
    $wwwResp = iwr -Uri 'https://www.bradfordinformedguidance.com/' -MaximumRedirection 0 -ErrorAction SilentlyContinue
    if ($wwwResp.StatusCode -ge 300 -and $wwwResp.StatusCode -lt 400) {
      $loc = $wwwResp.Headers['Location']
      if ($loc -and $loc -like 'https://bradfordinformedguidance.com/*') { Print-Pass 'www redirects to apex' } else { Print-Fail 'www redirect Location not apex' }
    } else { Print-Warn "www response not a redirect (status $($wwwResp.StatusCode))" }
  } catch { Print-Warn "www redirect check: $($_.Exception.Message)" }

  try {
    $trail = iwr -Uri "$Base/about/" -MaximumRedirection 0 -ErrorAction SilentlyContinue
    if ($trail.StatusCode -ge 300 -and $trail.StatusCode -lt 400) {
      $loc = $trail.Headers['Location']
      if ($loc -eq 'https://bradfordinformedguidance.com/about') { Print-Pass 'trailing slash normalized' } else { Print-Warn "Trailing slash Location: $loc" }
    } else { Print-Warn "Trailing slash not redirected (status $($trail.StatusCode))" }
  } catch { Print-Warn "Trailing slash check: $($_.Exception.Message)" }
} else {
  Print-Warn "Skipping production redirect checks for base $Base"
}

# Routes
Write-Output ""; Write-Output "Checking prerendered routes"
foreach ($route in $Routes) {
  $url = "$Base$route"
  Write-Output ""; Write-Output "📄 Testing $route"
  Test-Head200Html $url
  Assert-HtmlElements $url
}

# Summary (Markdown)
Write-Output ""
Write-Output "## SEO Verification Summary"
Write-Output "- Total checks: $tests"
Write-Output "- Passed: $pass"
Write-Output "- Failed: $fail"
Write-Output "- Warnings: $warn"
if ($fail -eq 0) { Write-Output "All SEO checks passed."; exit 0 } else { Write-Output "$fail SEO checks failed."; exit 1 }
