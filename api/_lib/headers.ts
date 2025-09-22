import { VercelResponse } from '@vercel/node';

// Default security headers to apply to API responses
const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; script-src 'none'; frame-ancestors 'none';",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

export function applySecurityHeaders(res: VercelResponse): VercelResponse {
  for (const [key, value] of Object.entries(securityHeaders)) {
    res.setHeader(key, value);
  }
  return res;
}
