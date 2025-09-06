#!/bin/bash
# Security verification script for Bradford Informed Guidance
# Scans built output for risky patterns and CSP compliance hints

BUILD_DIR="dist"
ALLOWED_SCRIPT_HOSTS=(
  "https://bradfordinformedguidance.com"
  "https://www.googletagmanager.com"
  "https://www.google-analytics.com"
)

pass=0
fail=0
warn=0

print_pass(){ echo "✅ PASS: $1"; pass=$((pass+1)); }
print_fail(){ echo "❌ FAIL: $1"; fail=$((fail+1)); }
print_warn(){ echo "⚠️  WARN: $1"; warn=$((warn+1)); }

if [ ! -d "$BUILD_DIR" ]; then
  print_fail "Build directory '$BUILD_DIR' not found. Run npm run build first."
  echo "Summary: PASS=$pass FAIL=$fail WARN=$warn"; exit 1
fi

# 1) Look for external scripts
external_scripts=$(grep -Rho "<script[^>]*src=\"http[s]://[^\"]\+\"" "$BUILD_DIR" 2>/dev/null | sed -E 's/^.*src=\"([^\"]+)\".*/\1/' | sort -u)
if [ -n "$external_scripts" ]; then
  echo "Found external scripts:"; echo "$external_scripts"
  while IFS= read -r url; do
    allowed=false
    for host in "${ALLOWED_SCRIPT_HOSTS[@]}"; do
      if [[ "$url" == $host* ]]; then allowed=true; break; fi
    done
    if [ "$allowed" = false ]; then
      print_fail "External script not in allowed list: $url"
    else
      print_pass "External script allowed by policy: $url"
    fi
  done <<< "$external_scripts"
else
  print_pass "No external <script src> tags found in $BUILD_DIR (good)."
fi

# 2) Check for inline JavaScript URLs that trigger downloads or off-domain redirects
if grep -RqiE "window\.location|document\.location|open\(|download" "$BUILD_DIR"; then
  print_warn "Potential redirect/download patterns found; review above matches."
else
  print_pass "No suspicious redirect/download patterns detected in built JS/HTML."
fi

# 3) Look for iframes
if grep -Rqi "<iframe" "$BUILD_DIR"; then
  print_warn "iframes present; ensure they are needed and allowed by CSP frame-ancestors/self."
else
  print_pass "No iframes detected."
fi

# 4) Mixed content (http://) in built HTML/JS/CSS
if grep -Rqi "http://" "$BUILD_DIR"; then
  print_fail "Mixed-content reference (http://) detected in build. Replace with https:// or protocol-relative if safe."
else
  print_pass "No http:// references in built output."
fi

# 5) CSP header present in vercel.json
if grep -qi "Content-Security-Policy" vercel.json; then
  print_pass "CSP header configured in vercel.json"
else
  print_fail "CSP header missing in vercel.json"
fi

# Summary
echo ""; echo "Security Verification Summary"; echo "============================="
echo "PASS=$pass FAIL=$fail WARN=$warn"
[ $fail -eq 0 ] && exit 0 || exit 1
