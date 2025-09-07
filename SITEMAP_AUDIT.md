# Sitemap Integrity Audit

Host: https://bradfordinformedguidance.com
Date: 2025-09-06

Method
- Fetch sitemap_index.xml, enumerate linked sitemaps, fetch each, and extract URLs.
- For each URL, perform HEAD and verify:
  - HTTP 200 (no 3xx, 4xx, 5xx)
  - Content-Type HTML (text/html or application/xhtml+xml)
  - Not a file download (skip .pdf, .zip, etc.)
- Flag any problematic entries.

Results
- Summary:
  - Total URLs checked: 
  - 200 HTML pages: 
  - Problematic entries: 

Problematic entries (if any)
- URL: 
  - Status: 
  - Content-Type: 
  - Notes: 

Recommendations
- Remove listed problematic URLs from the next sitemap build.
- Ensure only canonical, indexable HTML pages are included.

Helper script (PowerShell, optional)
File: scripts/sitemap-audit.ps1
```
param(
  [string]$Host = "https://bradfordinformedguidance.com"
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Xml.Linq

function Get-Xml($url){
  (Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 60).Content
}

function Parse-Urls($xml){
  $doc = [System.Xml.Linq.XDocument]::Parse($xml)
  if ($doc.Root.Name.LocalName -eq 'sitemapindex'){
    return $doc.Root.Elements() | Where-Object { $_.Name.LocalName -eq 'sitemap' } | ForEach-Object { $_.Element('{*}loc').Value }
  } else {
    return $doc.Root.Elements() | Where-Object { $_.Name.LocalName -eq 'url' } | ForEach-Object { $_.Element('{*}loc').Value }
  }
}

$indexUrl = "$Host/sitemap_index.xml"
Write-Output "Fetching $indexUrl"
$xml = Get-Xml $indexUrl
$targets = Parse-Urls $xml

$urls = @()
foreach ($t in $targets){
  if ($t -match 'sitemap.*\.xml$'){
    $sx = Get-Xml $t
    $urls += Parse-Urls $sx
  } else {
    $urls += $t
  }
}

$problems = @()
foreach ($u in $urls){
  try {
    $r = Invoke-WebRequest -Method Head -Uri $u -MaximumRedirection 0 -TimeoutSec 30
    $ct = $r.Headers['Content-Type']
    $isHtml = ($ct -match 'text/html|application/xhtml\+xml')
    $isFile = ($u -match '\\.(pdf|zip|exe|docx?)($|\?)')
    if ($r.StatusCode -ne 200 -or -not $isHtml -or $isFile){
      $problems += [pscustomobject]@{ Url=$u; Status=$r.StatusCode; ContentType=$ct }
    }
  } catch {
    $problems += [pscustomobject]@{ Url=$u; Status='ERR'; ContentType='-' }
  }
}

Write-Output "Checked $($urls.Count) URLs"
if ($problems.Count -gt 0){
  Write-Output "Problems: $($problems.Count)"
  $problems | ForEach-Object { Write-Output (" - " + $_.Url + " :: " + $_.Status + " :: " + $_.ContentType) }
  exit 1
} else {
  Write-Output "No problems found"
  exit 0
}
```
