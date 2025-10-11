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

export default async function ringyProxy(req: VercelRequest, res: VercelResponse) {
  allowOrigin(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
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
      metadata = {},
      custom = {},
    } = body;

    if (!email || !phone) {
      return res.status(400).json({ error: 'Missing required email or phone' });
    }

    const payload: Record<string, unknown> = {
      sid,
      authToken,
      phone_number: phone,
      first_name: firstName,
      last_name: lastName,
      email,
      zip_code: String(zipCode ?? ''),
      lead_source: leadSource || defaultLeadSource,
      notes,
      vendor_reference_id: vendorReferenceId || crypto.randomUUID(),
      proof_of_sms_opt_in_link: proofOfSmsOptInLink || (typeof metadata.proofOfSmsOptInLink === 'string' ? metadata.proofOfSmsOptInLink : '') || '',
      ...custom,
    };

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

