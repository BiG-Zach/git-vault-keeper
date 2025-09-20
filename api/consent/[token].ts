import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';

interface ConsentPayload {
  method: string;
  consentTimestamp: string;
  vendorRefId: string;
  v?: number;
  ipHash?: string;
}

const requireEnv = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`${key} must be configured`);
  return value;
};

const DEFAULT_ALLOWED_ORIGINS = ['https://bradfordinformedguidance.com'];

function getAllowedOrigins(): Set<string> {
  const raw = process.env.LEAD_ALLOWED_ORIGINS || process.env.CORS_ALLOWED_ORIGINS;
  if (!raw) return new Set(DEFAULT_ALLOWED_ORIGINS);
  const origins = raw
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  return new Set<string>(origins.length ? origins : DEFAULT_ALLOWED_ORIGINS);
}

const allowedOrigins: Set<string> = getAllowedOrigins();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS: restrict to allowed origins
  const origin = (req.headers.origin as string) ?? '';
  if (allowedOrigins.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const { token } = req.query as { token: string };

  // Validate required environment variable
  let JWT_SECRET: string;
  try {
    JWT_SECRET = requireEnv('JWT_SECRET');
  } catch {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // Validate token parameter
  if (!token || typeof token !== 'string') {
    return res.status(400).json({ error: 'Token parameter is required' });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET) as ConsentPayload;
    return res.status(200).json({ ok: true, ...data });
  } catch (error) {
    const errorMessage = error instanceof jwt.JsonWebTokenError
      ? 'Invalid token format'
      : error instanceof jwt.TokenExpiredError
      ? 'Token has expired'
      : 'Invalid or expired token';
    return res.status(400).json({ error: errorMessage });
  }
}
