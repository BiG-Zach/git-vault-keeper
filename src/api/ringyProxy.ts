import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';
import crypto from 'node:crypto';

const DEFAULT_ENDPOINT = 'https://app.ringy.com/api/public/leads/new-lead';
const DEFAULT_ALLOWED = ['https://www.bradfordinformedguidance.com', 'http://localhost:8080'];

function allowOrigin(req: VercelRequest, res: VercelResponse) {
  const allowedEnv = process.env.RINGY_PROXY_ALLOW_ORIGINS;
  const allowList = allowedEnv
    ? allowedEnv.split(',').map(origin => origin.trim()).filter(Boolean)
    : DEFAULT_ALLOWED;

  const origin = req.headers.origin || '';
  const allowedOrigin = origin && allowList.includes(origin) ? origin : allowList[0] || '*';

  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
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

export default async function ringyProxy(req: VercelRequest, res: VercelResponse) {
  allowOrigin(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({ message: 'Ringy proxy ready' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const endpoint = process.env.RINGY_ENDPOINT || DEFAULT_ENDPOINT;
    const sid = process.env.RINGY_SID;
    const authToken = process.env.RINGY_AUTH_TOKEN;
    const defaultLeadSource = process.env.LEAD_SOURCE || 'Website – Bradford Informed Guidance';

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
    }

    const body = (req.body || {}) as RingyProxyRequestBody;
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

    const normalizedPhone = sanitizePhone(phone);

    if (!email || !normalizedPhone) {
      return res.status(400).json({ error: 'Missing required email or phone' });
    }

    const metadataObject = toPlainObject(incomingMetadata);
    const customObject = toPlainObject(incomingCustom);
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
