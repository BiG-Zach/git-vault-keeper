param(
  [Parameter(Mandatory=$true)][string]$Url,
  [string]$Note = ""
)
$when = Get-Date -Format "yyyy-MM-ddTHH:mm:ssK"
Add-Content -Path "INDEXING_TARGETS.md" -Value ("- [" + $when + "] " + $Url + " " + $Note)
Write-Output ("Recorded: " + $when + " " + $Url)
