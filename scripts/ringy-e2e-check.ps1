param(
  [string]$Host = "https://bradfordinformedguidance.com",
  [string]$Label = "TEST LEAD"
)

$ErrorActionPreference = 'Stop'

# Note: Do not change API contract. This mirrors the form submission.
$now = Get-Date -Format "yyyy-MM-dd HH:mm"
$payload = [pscustomobject]@{
  name    = "$Label – $now"
  email   = "qa+testlead@example.com"
  phone   = "555-0100"
  message = "TEST submission for monitoring. Please ignore."
}

$uri = "$Host/api/lead"
Write-Output "[RingyE2E] Posting to $uri"

try {
  $json = $payload | ConvertTo-Json -Depth 4
  $resp = Invoke-WebRequest -Method Post -Uri $uri -Body $json -ContentType 'application/json' -TimeoutSec 30
  $status = $resp.StatusCode
  Write-Output ("[RingyE2E] Status: " + $status)
  if ($resp.Content) { Write-Output ("[RingyE2E] Body: " + ($resp.Content.Substring(0, [Math]::Min(400, $resp.Content.Length)))) }
  if ($status -ge 200 -and $status -lt 300) { exit 0 } else { exit 2 }
}
catch {
  Write-Output ("[RingyE2E] Error: " + $_.Exception.Message)
  exit 1
}
