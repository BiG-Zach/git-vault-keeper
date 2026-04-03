import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const siteKey = process.env.VITE_HCAPTCHA_SITEKEY || process.env.HCAPTCHA_SITEKEY || '';

  if (!siteKey) {
    return res.status(200).json({ siteKey: null });
  }

  return res.status(200).json({ siteKey });
}
