#!/bin/bash

# SEO Verification Script for Bradford Informed Guidance
# Tests prerendered routes, sitemaps, and SEO elements

BASE_URL="https://bradfordinformedguidance.com"
USER_AGENT="Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"

# Routes to test
ROUTES=(
  "/"
  "/about"
  "/contact"
  "/quote"
  "/carriers"
  "/our-process"
  "/resources"
  "/services/health-insurance"
  "/services/life-insurance"
  "/services/iul-insurance"
  "/services/ppo-networks"
  "/states/florida"
  "/states/michigan"
  "/states/north-carolina"
  "/florida"
  "/michigan"
  "/north-carolina"
  "/referral"
  "/checklist"
  "/thank-you"
  "/privacy-policy"
  "/terms"
)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counters
total_tests=0
passed_tests=0
failed_tests=0

# Function to print status
print_status() {
  local status=$1
  local message=$2
  if [ "$status" = "PASS" ]; then
    echo -e "${GREEN}✅ PASS${NC}: $message"
    ((passed_tests++))
  elif [ "$status" = "FAIL" ]; then
    echo -e "${RED}❌ FAIL${NC}: $message"
    ((failed_tests++))
  else
    echo -e "${YELLOW}⚠️  WARN${NC}: $message"
  fi
  ((total_tests++))
}

# Function to check HTTP status
check_http_status() {
  local url=$1
  local expected_status=${2:-200}

  response=$(curl -s -o /dev/null -w "%{http_code}" -H "User-Agent: $USER_AGENT" "$url")

  if [ "$response" = "$expected_status" ]; then
    print_status "PASS" "HTTP $response for $url"
    return 0
  else
    print_status "FAIL" "Expected HTTP $expected_status, got $response for $url"
    return 1
  fi
}

# Function to check content type
check_content_type() {
  local url=$1
  local expected_type=$2

  content_type=$(curl -s -I -H "User-Agent: $USER_AGENT" "$url" | grep -i "content-type" | cut -d: -f2 | tr -d '[:space:]')

  if [[ "$content_type" == *"$expected_type"* ]]; then
    print_status "PASS" "Content-Type $content_type for $url"
    return 0
  else
    print_status "FAIL" "Expected Content-Type $expected_type, got $content_type for $url"
    return 1
  fi
}

# Function to check HTML elements
check_html_elements() {
  local url=$1

  html=$(curl -s -H "User-Agent: $USER_AGENT" "$url")

  # Check for title
  if echo "$html" | grep -q "<title>"; then
    print_status "PASS" "Title tag found in $url"
  else
    print_status "FAIL" "Title tag missing in $url"
  fi

  # Check for meta description
  if echo "$html" | grep -q 'name="description"'; then
    print_status "PASS" "Meta description found in $url"
  else
    print_status "FAIL" "Meta description missing in $url"
  fi

  # Check for h1
  if echo "$html" | grep -q "<h1"; then
    print_status "PASS" "H1 tag found in $url"
  else
    print_status "FAIL" "H1 tag missing in $url"
  fi

  # Check for canonical link
  if echo "$html" | grep -q 'rel="canonical"'; then
    print_status "PASS" "Canonical link found in $url"
  else
    print_status "FAIL" "Canonical link missing in $url"
  fi

  # Check for JSON-LD
  if echo "$html" | grep -q "application/ld+json"; then
    print_status "PASS" "JSON-LD schema found in $url"
  else
    print_status "WARN" "JSON-LD schema not found in $url"
  fi
}

# Function to check sitemap
check_sitemap() {
  local sitemap_url=$1
  local sitemap_name=$2

  echo ""
  echo "🔍 Checking $sitemap_name..."

  # Check HTTP status
  check_http_status "$sitemap_url" 200

  # Check content type
  check_content_type "$sitemap_url" "application/xml"

  # Check if sitemap contains expected content
  sitemap_content=$(curl -s "$sitemap_url")

  if echo "$sitemap_content" | grep -q "<urlset" || echo "$sitemap_content" | grep -q "<sitemapindex"; then
    print_status "PASS" "$sitemap_name contains valid XML structure"
  else
    print_status "FAIL" "$sitemap_name does not contain valid XML structure"
  fi

  # Check if sitemap contains the base URL
  if echo "$sitemap_content" | grep -q "$BASE_URL"; then
    print_status "PASS" "$sitemap_name contains correct base URL"
  else
    print_status "FAIL" "$sitemap_name missing correct base URL"
  fi
}

# Function to check robots.txt
check_robots_txt() {
  local robots_url="$BASE_URL/robots.txt"

  echo ""
  echo "🔍 Checking robots.txt..."

  # Check HTTP status
  check_http_status "$robots_url" 200

  # Check content type
  check_content_type "$robots_url" "text/plain"

  # Check if robots.txt contains sitemap reference
  robots_content=$(curl -s "$robots_url")

  if echo "$robots_content" | grep -q "sitemap_index.xml"; then
    print_status "PASS" "robots.txt contains sitemap reference"
  else
    print_status "FAIL" "robots.txt missing sitemap reference"
  fi
}

# Function to check redirects
check_redirects() {
  echo ""
  echo "🔍 Checking redirects..."

  # Check www to apex redirect
  www_response=$(curl -s -o /dev/null -w "%{http_code}" -L "https://www.bradfordinformedguidance.com/")
  if [ "$www_response" = "200" ]; then
    print_status "PASS" "www.bradfordinformedguidance.com redirects to apex domain"
  else
    print_status "FAIL" "www.bradfordinformedguidance.com redirect failed (status: $www_response)"
  fi

  # Check trailing slash normalization
  trailing_response=$(curl -s -o /dev/null -w "%{http_code}" -L "$BASE_URL/about/")
  if [ "$trailing_response" = "200" ]; then
    print_status "PASS" "Trailing slash URLs redirect properly"
  else
    print_status "FAIL" "Trailing slash redirect failed (status: $trailing_response)"
  fi
}

# Main execution
echo "🚀 Starting SEO verification for Bradford Informed Guidance"
echo "📊 Base URL: $BASE_URL"
echo "🤖 User Agent: $USER_AGENT"
echo ""

# Check robots.txt
check_robots_txt

# Check sitemaps
check_sitemap "$BASE_URL/sitemap_index.xml" "sitemap_index.xml"
check_sitemap "$BASE_URL/sitemap-pages.xml" "sitemap-pages.xml"
check_sitemap "$BASE_URL/sitemap-images.xml" "sitemap-images.xml"

# Check redirects
check_redirects

# Check routes
echo ""
echo "🔍 Checking prerendered routes..."
for route in "${ROUTES[@]}"; do
  url="$BASE_URL$route"
  echo ""
  echo "📄 Testing $route..."

  # Check HTTP status
  if check_http_status "$url" 200; then
    # Check content type
    check_content_type "$url" "text/html"

    # Check HTML elements
    check_html_elements "$url"
  fi
done

# Summary
echo ""
echo "📊 SEO Verification Summary"
echo "=========================="
echo "Total tests: $total_tests"
echo -e "Passed: ${GREEN}$passed_tests${NC}"
echo -e "Failed: ${RED}$failed_tests${NC}"

success_rate=$((passed_tests * 100 / total_tests))
if [ $success_rate -ge 90 ]; then
  echo -e "${GREEN}🎉 Success rate: $success_rate%${NC}"
elif [ $success_rate -ge 75 ]; then
  echo -e "${YELLOW}⚠️  Success rate: $success_rate%${NC}"
else
  echo -e "${RED}💥 Success rate: $success_rate%${NC}"
fi

echo ""
if [ $failed_tests -eq 0 ]; then
  echo -e "${GREEN}✅ All SEO checks passed!${NC}"
  exit 0
else
  echo -e "${RED}❌ $failed_tests SEO checks failed${NC}"
  exit 1
fi