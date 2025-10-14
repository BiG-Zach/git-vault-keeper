import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';
import crypto from 'node:crypto';
import { extractCaptchaToken, stripCaptchaFields } from '../../api/utils/captcha';

const DEFAULT_ENDPOINT = 'https://app.ringy.com/api/public/leads/new-lead';
const DEFAULT_ALLOWED = [
  'https://bradfordinformedguidance.com',
  'https://www.bradfordinformedguidance.com',
  'http://localhost:8080',
  'http://localhost:5173',
];

function allowOrigin(req: VercelRequest, res: VercelResponse) {
  const allowedEnv = process.env.RINGY_PROXY_ALLOW_ORIGINS;
  const allowList = allowedEnv
    ? allowedEnv.split(',').map(origin => origin.trim()).filter(Boolean)
    : DEFAULT_ALLOWED;

  const origin = req.headers.origin || '';
  const allowedOrigin = origin && allowList.includes(origin) ? origin : allowList[0] || '*';

  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,HEAD');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('Vary', 'Origin');
}

const sanitizePhone = (value: string | undefined) => {
  if (!value) return '';
  return String(value).replace(/\D/g, '');
};

const toPlainObject = (value: unknown): Record<string, unknown> => {
  if (!value || typeof value !== 'object') return {};
  return value as Record<string, unknown>;
};

const toStringRecord = (input: Record<string, unknown>) => {
  const result: Record<string, string> = {};

  Object.entries(input).forEach(([key, rawValue]) => {
    if (rawValue === undefined || rawValue === null) return;

    if (typeof rawValue === 'string') {
      if (rawValue.trim()) result[key] = rawValue.trim();
      return;
    }

    if (typeof rawValue === 'number' || typeof rawValue === 'boolean') {
      result[key] = String(rawValue);
      return;
    }

    if (Array.isArray(rawValue)) {
      const flattened = rawValue
        .map(item => (item === undefined || item === null ? '' : String(item)))
        .filter(Boolean)
        .join(', ');
      if (flattened) result[key] = flattened;
      return;
    }

    if (rawValue instanceof Date) {
      result[key] = rawValue.toISOString();
      return;
    }

    try {
      const serialized = JSON.stringify(rawValue);
      if (serialized && serialized !== '{}') {
        result[key] = serialized;
      }
    } catch {
      // fallback to generic string representation
      result[key] = String(rawValue);
    }
  });

  return result;
};

const prefixRecord = (record: Record<string, string>, prefix: string) => {
  const result: Record<string, string> = {};
  Object.entries(record).forEach(([key, value]) => {
    if (!value) return;
    result[`${prefix}${key}`] = value;
  });
  return result;
};

const buildSupplementalNotes = (metadata: Record<string, string>, custom: Record<string, string>) => {
  const sections: string[] = [];

  const metadataLines = Object.entries(metadata).map(([key, value]) => `${key}: ${value}`);
  if (metadataLines.length) {
    sections.push(['Metadata', ...metadataLines].join('\n'));
  }

  const customLines = Object.entries(custom).map(([key, value]) => `${key}: ${value}`);
  if (customLines.length) {
    sections.push(['Custom', ...customLines].join('\n'));
  }

  return sections.join('\n\n');
};

const composeNotes = (base: string, metadata: Record<string, string>, custom: Record<string, string>) => {
  const segments: string[] = [];
  if (base && base.trim()) {
    segments.push(base.trim());
  }

  const supplemental = buildSupplementalNotes(metadata, custom);
  if (supplemental) {
    segments.push(supplemental);
  }

  return segments.join('\n\n');
};

const getClientIp = (req: VercelRequest) => {
  const header = String(req.headers['x-forwarded-for'] || '').split(',')[0]?.trim();
  return header || req.socket?.remoteAddress || '';
};

const normalizeBoolean = (value: unknown): boolean | undefined => {
  if (typeof value === 'boolean') {
    return value;
  }
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (!normalized) return undefined;
    if (normalized === 'true' || normalized === '1' || normalized === 'yes') return true;
    if (normalized === 'false' || normalized === '0' || normalized === 'no') return false;
    return undefined;
  }
  if (typeof value === 'number') {
    if (Number.isNaN(value)) return undefined;
    return value !== 0;
  }
  return undefined;
};

export default async function ringyProxy(req: VercelRequest, res: VercelResponse) {
  allowOrigin(req, res);

  const method = (req.method || 'GET').toUpperCase();

  if (method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (method === 'HEAD') {
    return res.status(204).end();
  }

  if (method === 'GET') {
    return res.status(200).json({ message: 'Ringy proxy ready' });
  }

  if (method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const endpoint = process.env.RINGY_ENDPOINT || DEFAULT_ENDPOINT;
    const sid = process.env.RINGY_SID;
    const authToken = process.env.RINGY_AUTH_TOKEN;
    const defaultLeadSource = process.env.LEAD_SOURCE || 'Website – Bradford Informed Guidance';
    const HCAPTCHA_SECRET = process.env.HCAPTCHA_SECRET;
    const HCAPTCHA_VERIFY_ENDPOINT =
      process.env.HCAPTCHA_VERIFY_ENDPOINT || 'https://hcaptcha.com/siteverify';

    if (!sid || !authToken) {
      return res.status(500).json({ error: 'Ringy credentials missing' });
    }

    interface RingyProxyRequestBody {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      zipCode?: string;
      leadSource?: string;
      notes?: string;
      proofOfSmsOptInLink?: string;
      vendorReferenceId?: string;
      metadata?: Record<string, unknown>;
      custom?: Record<string, unknown>;
      contactMethod?: string;
      consentToText?: boolean | string | number;
    }

    const rawBody = (req.body || {}) as Record<string, unknown>;
    // Normalize captcha regardless of contact preference before any campaign-specific logic runs.
    const hcaptchaToken = extractCaptchaToken(rawBody);
    const body = stripCaptchaFields(rawBody) as RingyProxyRequestBody;
    const contactMethod =
      typeof body.contactMethod === 'string' ? body.contactMethod.toLowerCase() : '';
    const consentToText =
      normalizeBoolean(body.consentToText) ?? (contactMethod === 'text' ? true : undefined);
    const {
      firstName = '',
      lastName = '',
      email,
      phone,
      zipCode = '',
      leadSource,
      notes = '',
      proofOfSmsOptInLink,
      vendorReferenceId,
      metadata: incomingMetadata = {},
      custom: incomingCustom = {},
    } = body;

    if (HCAPTCHA_SECRET) {
      if (!hcaptchaToken || typeof hcaptchaToken !== 'string') {
        return res.status(400).json({ error: 'Captcha verification required' });
      }

      const verifyResponse = await fetch(HCAPTCHA_VERIFY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: HCAPTCHA_SECRET,
          response: hcaptchaToken,
          remoteip: getClientIp(req),
        }),
      });

      let verification: { success?: boolean; ['error-codes']?: unknown } = {};
      try {
        verification = (await verifyResponse.json()) as typeof verification;
      } catch {
        verification = {};
      }

      if (!verification.success) {
        return res.status(400).json({
          error: 'Captcha verification failed',
          detail: verification['error-codes'] ?? null,
        });
      }
    }

    const normalizedPhone = sanitizePhone(phone);

    if (!email || !normalizedPhone) {
      return res.status(400).json({ error: 'Missing required email or phone' });
    }

    const metadataObject = toPlainObject(incomingMetadata);
    if (contactMethod && metadataObject.preferredContactMethod === undefined) {
      metadataObject.preferredContactMethod = contactMethod;
    }

    const customObject = toPlainObject(incomingCustom);
    if (typeof consentToText === 'boolean' && customObject.consentToText === undefined) {
      customObject.consentToText = consentToText ? 'Yes' : 'No';
    }
    const metadata = toStringRecord(metadataObject);
    const custom = toStringRecord(customObject);
    const prefixedCustom = prefixRecord(custom, 'custom_');

    const payloadNotes = composeNotes(notes, metadata, custom);

    const payload: Record<string, unknown> = {
      sid,
      authToken,
      phone_number: normalizedPhone,
      first_name: firstName,
      last_name: lastName,
      email,
      zip_code: String(zipCode ?? ''),
      lead_source: leadSource || defaultLeadSource,
      notes: payloadNotes,
      vendor_reference_id: vendorReferenceId || crypto.randomUUID(),
      proof_of_sms_opt_in_link:
        proofOfSmsOptInLink || (typeof metadataObject['proofOfSmsOptInLink'] === 'string' ? metadataObject['proofOfSmsOptInLink'] : '') || '',
      ...prefixedCustom,
    };

    if (Object.keys(metadata).length > 0) {
      payload.metadata_summary = JSON.stringify(metadata);
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Ringy error', detail: text });
    }

    try {
      const data = JSON.parse(text);
      return res.status(200).json(data);
    } catch {
      return res.status(200).json({ ok: true, raw: text });
    }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ error: 'Ringy proxy failure', detail: errorMessage });
  }
}
