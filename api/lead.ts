import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';

// Ringy CRM dual-vendor integration - Production ready

function getClientIP(req: VercelRequest) {
  const xf = (req.headers['x-forwarded-for'] as string) || '';
  return xf.split(',')[0].trim() || (req.socket?.remoteAddress ?? 'unknown');
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
  ip: string;
  vendorType: string;
}) {
  const utmStr = params.utm ? JSON.stringify(params.utm) : '{}';
  return [
    `Ages: ${params.ages || 'n/a'}`,
    `Landing: ${params.landingUrl || 'n/a'}`,
    `UTM: ${utmStr}`,
    `Vendor: ${params.vendorType}`,
    `Consent: ${params.consentTimestamp} • ${params.ip}`,
  ].join(' | ');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Add cache-busting headers
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // Debug: Log environment variables (without revealing sensitive data)
    console.log('Environment check:', {
      hasAutoEndpoint: !!process.env.RINGY_AUTO_ENDPOINT,
      hasAutoSid: !!process.env.RINGY_AUTO_SID,
      hasAutoToken: !!process.env.RINGY_AUTO_AUTH_TOKEN,
      hasManualEndpoint: !!process.env.RINGY_MANUAL_ENDPOINT,
      hasManualSid: !!process.env.RINGY_MANUAL_SID,
      hasManualToken: !!process.env.RINGY_MANUAL_AUTH_TOKEN,
      hasJwtSecret: !!process.env.JWT_SECRET
    });
    
    // Environment variables for both vendors
    const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-for-development';
    const LEAD_SOURCE = process.env.LEAD_SOURCE || 'Website – Mobile Hero';
    
    const autoConfig: VendorConfig = {
      endpoint: process.env.RINGY_AUTO_ENDPOINT || 'https://app.ringy.com/api/public/leads/new-lead',
      sid: process.env.RINGY_AUTO_SID || 'iSn1i8zzvctb9s5s59twszulgbvajgnf',
      authToken: process.env.RINGY_AUTO_AUTH_TOKEN || 'm0birq3b6wmrn2k4f40plwxtngspqabr',
      type: 'auto-text'
    };
    
    const manualConfig: VendorConfig = {
      endpoint: process.env.RINGY_MANUAL_ENDPOINT || 'https://app.ringy.com/api/public/leads/new-lead',
      sid: process.env.RINGY_MANUAL_SID || 'iSaynato1vqs8mydydrula3rlw5varda',
      authToken: process.env.RINGY_MANUAL_AUTH_TOKEN || '2v8wz98saqx2nvl7ckuoe2vz0k75s6eh',
      type: 'manual'
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
      utm = {}
    } = (req.body || {}) as Record<string, any>;

    console.log('Received lead data:', {
      zipCode,
      email: email ? '***@***' : 'missing',
      phone: phone ? '***-***-****' : 'missing',
      firstName,
      lastName,
      preferredContact,
      consentChecked
    });

    if (!zipCode || !email || !phone || !consentChecked || !consentText) {
      return res.status(400).json({ error: 'Missing required fields or consent' });
    }

    const ip = getClientIP(req);
    const consentTimestamp = new Date().toISOString();
    const vendorRefId = crypto.randomUUID();
    
    // Determine which vendor to use based on preferred contact method
    const vendorChoice = determineVendor(preferredContact);
    const vendorConfig = vendorChoice === 'auto' ? autoConfig : manualConfig;

    // Stateless consent receipt (JWT) valid ~10 years
    const token = jwt.sign(
      { consentText, method: 'checkbox', consentTimestamp, ip, landingUrl, utm },
      JWT_SECRET,
      { expiresIn: '3650d' }
    );

    const proto = (req.headers['x-forwarded-proto'] as string) || 'https';
    const host = req.headers.host;
    const proofLink = `${proto}://${host}/api/consent/${token}`;

    const notes = buildNotes({ 
      ages, 
      landingUrl, 
      utm, 
      consentTimestamp, 
      ip, 
      vendorType: `${vendorConfig.type} (${preferredContact} preference)` 
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
      proof_of_sms_opt_in_link: proofLink
    };

    console.log(`Routing lead to ${vendorConfig.type} vendor for ${preferredContact} preference`);
    
    const resp = await fetch(vendorConfig.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const text = await resp.text();

    if (!resp.ok) {
      return res.status(resp.status).json({ error: 'Ringy error', detail: text });
    }

    let vendorResponse: any;
    try { vendorResponse = JSON.parse(text); } catch { vendorResponse = { raw: text }; }

    return res.status(200).json({ 
      ok: true, 
      vendorResponse, 
      vendorUsed: vendorConfig.type,
      vendorChoice 
    });
  } catch (err: any) {
    return res.status(500).json({ error: 'Server error', detail: err?.message || String(err) });
  }
}
