import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';

function getClientIP(req: VercelRequest) {
  const xf = String(req.headers['x-forwarded-for'] || '');
  return xf.split(',')[0].trim() || (req.socket?.remoteAddress ?? 'unknown');
}

function buildNotes(params: {
  ages?: string;
  landingUrl?: string;
  utm?: Record<string, string>;
  consentTimestamp: string;
  ip: string;
}) {
  const utmStr = params.utm ? JSON.stringify(params.utm) : '{}';
  return [
    `Ages: ${params.ages || 'n/a'}`,
    `Landing: ${params.landingUrl || 'n/a'}`,
    `UTM: ${utmStr}`,
    `Consent: ${params.consentTimestamp} • ${params.ip}`,
  ].join(' | ');
}

function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const RINGY_ENDPOINT = getRequiredEnv('RINGY_ENDPOINT');
    const RINGY_SID = getRequiredEnv('RINGY_SID');
    const RINGY_AUTH_TOKEN = getRequiredEnv('RINGY_AUTH_TOKEN');
    const JWT_SECRET = getRequiredEnv('JWT_SECRET');
    const LEAD_SOURCE = process.env.LEAD_SOURCE || 'Website – Mobile Hero';
    const HCAPTCHA_SECRET = process.env.HCAPTCHA_SECRET;
    const HCAPTCHA_VERIFY_ENDPOINT =
      process.env.HCAPTCHA_VERIFY_ENDPOINT || 'https://hcaptcha.com/siteverify';

    interface LeadRequestBody {
      zipCode?: string;
      ages?: string;
      email?: string;
      phone?: string;
      firstName?: string;
      lastName?: string;
      consentChecked?: boolean;
      consentText?: string;
      landingUrl?: string;
      utm?: Record<string, string>;
      hcaptchaToken?: string;
    }

    const {
      zipCode,
      ages,
      email,
      phone,
      firstName = '',
      lastName = '',
      consentChecked,
      consentText,
      landingUrl,
      utm = {},
      hcaptchaToken,
    } = (req.body || {}) as LeadRequestBody;

    const ip = getClientIP(req);

    if (!zipCode || !email || !phone || !consentChecked || !consentText) {
      return res.status(400).json({ error: 'Missing required fields or consent' });
    }

    if (HCAPTCHA_SECRET) {
      if (!hcaptchaToken) {
        return res.status(400).json({ error: 'Captcha verification required' });
      }

      const verifyResponse = await fetch(HCAPTCHA_VERIFY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: HCAPTCHA_SECRET,
          response: hcaptchaToken,
          remoteip: ip,
        }),
      });

      const verification = await verifyResponse.json();
      if (!verification.success) {
        return res.status(400).json({
          error: 'Captcha verification failed',
          detail: verification['error-codes'],
        });
      }
    }

    const consentTimestamp = new Date().toISOString();
    const vendorRefId = crypto.randomUUID();

    // Stateless consent receipt (JWT) valid ~10 years
    const token = jwt.sign(
      { consentText, method: 'checkbox', consentTimestamp, ip, landingUrl, utm },
      JWT_SECRET,
      { expiresIn: '3650d' }
    );

    const proto = String(req.headers['x-forwarded-proto'] || 'https');
    const host = req.headers.host;
    const proofLink = `${proto}://${host}/api/consent/${token}`;

    const notes = buildNotes({ ages, landingUrl, utm, consentTimestamp, ip });

    const payload = {
      sid: RINGY_SID,
      authToken: RINGY_AUTH_TOKEN,
      phone_number: phone,
      first_name: firstName,
      last_name: lastName,
      email,
      zip_code: String(zipCode),
      lead_source: LEAD_SOURCE,
      notes,
      vendor_reference_id: vendorRefId,
      proof_of_sms_opt_in_link: proofLink
    };

    const resp = await fetch(RINGY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const text = await resp.text();

    if (!resp.ok) {
      return res.status(resp.status).json({ error: 'Ringy error', detail: text });
    }

    let vendorResponse: unknown;
    try { vendorResponse = JSON.parse(text); } catch { vendorResponse = { raw: text }; }

    return res.status(200).json({ ok: true, vendorResponse });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ error: 'Server error', detail: errorMessage });
  }
}
