import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  return res.status(200).json({
    message: 'Test API endpoint working',
    method: req.method,
    timestamp: new Date().toISOString(),
    environment: {
      hasAutoEndpoint: !!process.env.RINGY_AUTO_ENDPOINT,
      hasAutoSid: !!process.env.RINGY_AUTO_SID,
      hasAutoToken: !!process.env.RINGY_AUTO_AUTH_TOKEN,
      hasManualEndpoint: !!process.env.RINGY_MANUAL_ENDPOINT,
      hasManualSid: !!process.env.RINGY_MANUAL_SID,
      hasManualToken: !!process.env.RINGY_MANUAL_AUTH_TOKEN,
      hasJwtSecret: !!process.env.JWT_SECRET,
    }
  });
}