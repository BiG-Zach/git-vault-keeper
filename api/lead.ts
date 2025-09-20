import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';

// Ringy CRM dual-vendor integration - Production ready

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

function getClientIP(req: VercelRequest) {
  const xf = (req.headers['x-forwarded-for'] as string) || '';
  return xf.split(',')[0].trim() || (req.socket?.remoteAddress ?? 'unknown');
}

function maskIp(ip: string) {
  if (!ip || ip === 'unknown') return 'unknown';
  if (ip.includes(':')) {
    const segments = ip.split(':');
    return `${segments.slice(0, 3).join(':')}::`;
  }
  const parts = ip.split('.');
  if (parts.length !== 4) return 'unknown';
  return `${parts.slice(0, 3).join('.')}.0`;
}

interface VendorConfig {
  endpoint: string;
  sid: string;
  authToken: string;
  type: 'auto-text' | 'manual';
}

function determineVendor(preferredContact: string): 'auto' | 'manual' {
  // Route based on preferred contact method
  if (preferredContact === 'text') {
    return 'auto'; // Auto-text vendor for immediate SMS
  }

  // Default to manual follow-up for email and phone
  return 'manual';
}

function buildNotes(params: {
  ages?: string;
  landingUrl?: string;
  utm?: Record<string, string>;
  consentTimestamp: string;
  vendorType: string;
  consentHash?: string;
}) {
  const utmStr = params.utm ? JSON.stringify(params.utm) : '{}';
  return [
    `Ages: ${params.ages || 'n/a'}`,
    `Landing: ${params.landingUrl || 'n/a'}`,
    `UTM: ${utmStr}`,
    `Vendor: ${params.vendorType}`,
    `Consent: ${params.consentTimestamp}`,
    `ConsentHash: ${params.consentHash || 'n/a'}`,
  ].join(' | ');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS: restrict to configured allowlist
  const origin = (req.headers.origin as string) ?? '';
  if (allowedOrigins.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Cache-busting headers
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // Environment variables for both vendors
    const JWT_SECRET = requireEnv('JWT_SECRET');
    const LEAD_SOURCE = process.env.LEAD_SOURCE || 'Website - Mobile Hero';

    const autoConfig: VendorConfig = {
      endpoint: requireEnv('RINGY_AUTO_ENDPOINT'),
      sid: requireEnv('RINGY_AUTO_SID'),
      authToken: requireEnv('RINGY_AUTO_AUTH_TOKEN'),
      type: 'auto-text',
    };

    const manualConfig: VendorConfig = {
      endpoint: requireEnv('RINGY_MANUAL_ENDPOINT'),
      sid: requireEnv('RINGY_MANUAL_SID'),
      authToken: requireEnv('RINGY_MANUAL_AUTH_TOKEN'),
      type: 'manual',
    };

    const {
      zipCode,
      ages,
      email,
      phone,
      firstName = '',
      lastName = '',
      preferredContact = 'email',
      consentChecked,
      consentText,
      landingUrl,
      utm = {},
    } = (req.body || {}) as Record<string, any>;

    if (!zipCode || !email || !phone || !consentChecked || !consentText) {
      return res.status(400).json({ error: 'Missing required fields or consent' });
    }

    const ip = getClientIP(req);
    const maskedIp = maskIp(ip);
    const ipHash = ip === 'unknown'
      ? undefined
      : crypto.createHash('sha256').update(`${JWT_SECRET}:${ip}`).digest('hex');
    const consentTimestamp = new Date().toISOString();
    const vendorRefId = crypto.randomUUID();

    // Determine which vendor to use based on preferred contact method
    const vendorChoice = determineVendor(preferredContact);
    const vendorConfig = vendorChoice === 'auto' ? autoConfig : manualConfig;

    // Stateless consent receipt (JWT) with minimal, non-PII payload and short TTL
    const tokenPayload: Record<string, string | number> = {
      method: 'checkbox',
      consentTimestamp,
      vendorRefId,
      v: 1,
    };

    if (ipHash) {
      tokenPayload.ipHash = ipHash;
    }

    const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: '24h' });

    const proto = (req.headers['x-forwarded-proto'] as string) || 'https';
    const host = req.headers.host;
    const proofLink = `${proto}://${host}/api/consent/${token}`;

    const notes = buildNotes({
      ages,
      landingUrl,
      utm,
      consentTimestamp,
      consentHash: ipHash,
      vendorType: `${vendorConfig.type} (${preferredContact} preference)`,
    });

    console.log('lead:audit', {
      vendorRefId,
      consentTimestamp,
      ipHash,
      maskedIp,
      origin,
    });

    const payload = {
      sid: vendorConfig.sid,
      authToken: vendorConfig.authToken,
      phone_number: phone,
      first_name: firstName,
      last_name: lastName,
      email,
      zip_code: String(zipCode),
      lead_source: `${LEAD_SOURCE} (${vendorConfig.type})`,
      notes,
      vendor_reference_id: vendorRefId,
      proof_of_sms_opt_in_link: proofLink,
    };

    console.log(`Routing lead to ${vendorConfig.type} vendor for ${preferredContact} preference`);

    const resp = await fetch(vendorConfig.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();

    if (!resp.ok) {
      return res.status(resp.status).json({ error: 'Ringy error', detail: text });
    }

    let vendorResponse: any;
    try {
      vendorResponse = JSON.parse(text);
    } catch {
      vendorResponse = { raw: text };
    }

    return res.status(200).json({
      ok: true,
      vendorResponse,
      vendorUsed: vendorConfig.type,
      vendorChoice,
    });
  } catch (err: any) {
    return res.status(500).json({ error: 'Server error', detail: err?.message || String(err) });
  }
}
