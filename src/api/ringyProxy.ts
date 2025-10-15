import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';
import crypto from 'node:crypto';
import { extractCaptchaToken, stripCaptchaFields } from '../../api/utils/captcha';
import { normalizeContactMethod } from '../../api/utils/contact';
import {
  getCoverageLabel,
  getInsuranceStatusLabel,
  getContactMethodLabel,
  getContactTimeLabel,
  formatChildAges,
  summarizeDemographics,
} from '../../shared/demographics';

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
      fullName?: string;
      email?: string;
      phone?: string;
      phoneNumber?: string;
      zipCode?: string;
      leadSource?: string;
      notes?: string;
      proofOfSmsOptInLink?: string;
      vendorReferenceId?: string;
      metadata?: Record<string, unknown>;
      custom?: Record<string, unknown>;
      contactMethod?: string;
      contactMethodLabel?: string;
      bestTime?: string;
      bestTimeLabel?: string;
      coverageType?: string;
      coverageTypeLabel?: string;
      yourAge?: string;
      spouseAge?: string;
      numChildren?: string;
      childAges?: string[] | string;
      childAgesLabel?: string;
      currentInsurance?: string;
      currentInsuranceLabel?: string;
      demographicSnapshot?: string;
      bestTimeToContact?: string;
      consentToText?: boolean | string | number;
    }

    const rawBody = (req.body || {}) as Record<string, unknown>;
    // Normalize captcha regardless of contact preference before any campaign-specific logic runs.
    const hcaptchaToken = extractCaptchaToken(rawBody);
    const body = stripCaptchaFields(rawBody) as RingyProxyRequestBody;
    const contactMethod = normalizeContactMethod(body.contactMethod);
    const consentToText =
      normalizeBoolean(body.consentToText) ?? (contactMethod === 'text' ? true : undefined);
    const {
      firstName = '',
      lastName = '',
      fullName: fullNameRaw,
      email,
      phone,
      phoneNumber,
      zipCode = '',
      leadSource,
      notes = '',
      proofOfSmsOptInLink,
      vendorReferenceId,
      metadata: incomingMetadata = {},
      custom: incomingCustom = {},
      contactMethodLabel: contactMethodLabelRaw,
      bestTime: bestTimeValueRaw,
      bestTimeLabel: bestTimeLabelRaw,
      coverageType: coverageTypeValueRaw,
      coverageTypeLabel: coverageTypeLabelRaw,
      yourAge: primaryAgeValueRaw,
      spouseAge: spouseAgeValueRaw,
      numChildren: numberOfChildrenValueRaw,
      childAges: childAgesRaw,
      childAgesLabel: childAgesLabelRaw,
      currentInsurance: currentInsuranceValueRaw,
      currentInsuranceLabel: currentInsuranceLabelRaw,
      demographicSnapshot: demographicSnapshotRaw,
      bestTimeToContact: bestTimeToContactRaw,
      ...additionalFields
    } = body as RingyProxyRequestBody & Record<string, unknown>;

    delete additionalFields.firstName;
    delete additionalFields.lastName;
    delete additionalFields.fullName;
    delete additionalFields.email;
    delete additionalFields.phone;
    delete additionalFields.phoneNumber;
    delete additionalFields.zipCode;
    delete additionalFields.leadSource;
    delete additionalFields.notes;
    delete additionalFields.proofOfSmsOptInLink;
    delete additionalFields.vendorReferenceId;
    delete additionalFields.metadata;
    delete additionalFields.custom;
    delete additionalFields.contactMethod;
    delete additionalFields.contactMethodLabel;
    delete additionalFields.bestTime;
    delete additionalFields.bestTimeLabel;
    delete additionalFields.coverageType;
    delete additionalFields.coverageTypeLabel;
    delete additionalFields.yourAge;
    delete additionalFields.spouseAge;
    delete additionalFields.numChildren;
    delete additionalFields.childAges;
    delete additionalFields.childAgesLabel;
    delete additionalFields.currentInsurance;
    delete additionalFields.currentInsuranceLabel;
    delete additionalFields.demographicSnapshot;
    delete additionalFields.bestTimeToContact;
    delete additionalFields.consentToText;
    delete additionalFields.hcaptchaToken;

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

    const emailAddress = typeof email === 'string' ? email.trim() : '';
    const phoneCandidate = typeof phoneNumber === 'string' && phoneNumber.trim()
      ? phoneNumber
      : typeof phone === 'string'
        ? phone
        : '';
    const normalizedPhone = sanitizePhone(phoneCandidate);

    if (!emailAddress || !normalizedPhone) {
      return res.status(400).json({ error: 'Missing required email or phone' });
    }

    const firstNameValue = firstName.trim();
    const lastNameValue = lastName.trim();
    const fullName = typeof fullNameRaw === 'string' && fullNameRaw.trim()
      ? fullNameRaw.trim()
      : [firstNameValue, lastNameValue].filter(Boolean).join(' ');
    const zipCodeValue = zipCode ? String(zipCode).trim() : '';
    const baseNotes = typeof notes === 'string' ? notes : '';

    const metadataObject = toPlainObject(incomingMetadata);
    const customObject = toPlainObject(incomingCustom);

    if (typeof consentToText === 'boolean' && customObject.consentToText === undefined) {
      customObject.consentToText = consentToText ? 'Yes' : 'No';
    }

    const coverageTypeValue = typeof coverageTypeValueRaw === 'string' ? coverageTypeValueRaw : '';
    const coverageTypeLabel = typeof coverageTypeLabelRaw === 'string' && coverageTypeLabelRaw.trim()
      ? coverageTypeLabelRaw.trim()
      : getCoverageLabel(coverageTypeValue);
    if (coverageTypeLabel && metadataObject.coverage_type_label === undefined) metadataObject.coverage_type_label = coverageTypeLabel;
    if (coverageTypeValue && metadataObject.coverage_type_value === undefined) metadataObject.coverage_type_value = coverageTypeValue;
    if (coverageTypeLabel && customObject.coverage_type_label === undefined) customObject.coverage_type_label = coverageTypeLabel;
    if (coverageTypeValue && customObject.coverage_type_value === undefined) customObject.coverage_type_value = coverageTypeValue;

    const primaryAgeValue = typeof primaryAgeValueRaw === 'string' ? primaryAgeValueRaw : '';
    if (primaryAgeValue) {
      if (metadataObject.primary_age === undefined) metadataObject.primary_age = primaryAgeValue;
      if (customObject.primary_age === undefined) customObject.primary_age = primaryAgeValue;
    }

    const spouseAgeValue = typeof spouseAgeValueRaw === 'string' ? spouseAgeValueRaw : '';
    if (spouseAgeValue) {
      if (metadataObject.spouse_age === undefined) metadataObject.spouse_age = spouseAgeValue;
      if (customObject.spouse_age === undefined) customObject.spouse_age = spouseAgeValue;
    }

    const numberOfChildrenValue = typeof numberOfChildrenValueRaw === 'string' ? numberOfChildrenValueRaw : '';
    if (numberOfChildrenValue) {
      if (metadataObject.number_of_children === undefined) metadataObject.number_of_children = numberOfChildrenValue;
      if (customObject.number_of_children === undefined) customObject.number_of_children = numberOfChildrenValue;
    }

    const childAgesLabel = typeof childAgesLabelRaw === 'string' && childAgesLabelRaw.trim()
      ? childAgesLabelRaw.trim()
      : formatChildAges(childAgesRaw);
    if (childAgesLabel) {
      if (metadataObject.child_ages === undefined) metadataObject.child_ages = childAgesLabel;
      if (customObject.child_ages === undefined) customObject.child_ages = childAgesLabel;
    }

    const currentInsuranceValue = typeof currentInsuranceValueRaw === 'string' ? currentInsuranceValueRaw : '';
    const insuranceLabel = typeof currentInsuranceLabelRaw === 'string' && currentInsuranceLabelRaw.trim()
      ? currentInsuranceLabelRaw.trim()
      : getInsuranceStatusLabel(currentInsuranceValue);
    if (insuranceLabel && metadataObject.current_insurance_status_label === undefined) metadataObject.current_insurance_status_label = insuranceLabel;
    if (currentInsuranceValue && metadataObject.current_insurance_status_value === undefined) metadataObject.current_insurance_status_value = currentInsuranceValue;
    if (insuranceLabel && customObject.current_insurance_status_label === undefined) customObject.current_insurance_status_label = insuranceLabel;
    if (currentInsuranceValue && customObject.current_insurance_status_value === undefined) customObject.current_insurance_status_value = currentInsuranceValue;

    const bestTimeValue = typeof bestTimeToContactRaw === 'string' && bestTimeToContactRaw.trim()
      ? bestTimeToContactRaw.trim()
      : typeof bestTimeValueRaw === 'string'
        ? bestTimeValueRaw.trim()
        : '';
    const bestTimeLabel = typeof bestTimeLabelRaw === 'string' && bestTimeLabelRaw.trim()
      ? bestTimeLabelRaw.trim()
      : getContactTimeLabel(bestTimeValue);
    if (bestTimeLabel && metadataObject.best_time_to_contact_label === undefined) metadataObject.best_time_to_contact_label = bestTimeLabel;
    if (bestTimeValue && metadataObject.best_time_to_contact_value === undefined) metadataObject.best_time_to_contact_value = bestTimeValue;
    if (bestTimeLabel && customObject.best_time_to_contact_label === undefined) customObject.best_time_to_contact_label = bestTimeLabel;
    if (bestTimeValue && customObject.best_time_to_contact_value === undefined) customObject.best_time_to_contact_value = bestTimeValue;

    const contactMethodLabel = typeof contactMethodLabelRaw === 'string' && contactMethodLabelRaw.trim()
      ? contactMethodLabelRaw.trim()
      : getContactMethodLabel(contactMethod);
    if (contactMethodLabel && metadataObject.preferred_contact_method_label === undefined) metadataObject.preferred_contact_method_label = contactMethodLabel;
    if (contactMethod && metadataObject.preferred_contact_method_value === undefined) metadataObject.preferred_contact_method_value = contactMethod;
    if (contactMethodLabel && customObject.preferred_contact_method_label === undefined) customObject.preferred_contact_method_label = contactMethodLabel;
    if (contactMethod && customObject.preferred_contact_method_value === undefined) customObject.preferred_contact_method_value = contactMethod;

    const demographicSnapshot =
      typeof demographicSnapshotRaw === 'string' && demographicSnapshotRaw.trim()
        ? demographicSnapshotRaw.trim()
        : summarizeDemographics({
            coverageLabel: coverageTypeLabel,
            primaryAge: primaryAgeValue,
            spouseAge: spouseAgeValue,
            childrenCount: numberOfChildrenValue,
            childAges: childAgesLabel,
            insuranceLabel,
            preferredContactLabel: contactMethodLabel,
            contactTimeLabel: bestTimeLabel,
          });

    if (demographicSnapshot && metadataObject.demographic_snapshot === undefined) {
      metadataObject.demographic_snapshot = demographicSnapshot;
    }
    if (demographicSnapshot && customObject.demographic_snapshot === undefined) {
      customObject.demographic_snapshot = demographicSnapshot;
    }

    if (fullName && metadataObject.full_name === undefined) {
      metadataObject.full_name = fullName;
    }

    Object.entries(additionalFields).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      if (metadataObject[key] !== undefined) return;
      if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed) metadataObject[key] = trimmed;
        return;
      }
      if (typeof value === 'number' || typeof value === 'boolean') {
        metadataObject[key] = value;
      }
    });

    const metadata = toStringRecord(metadataObject);
    const custom = toStringRecord(customObject);
    const prefixedCustom = prefixRecord(custom, 'custom_');

    const payloadNotes = composeNotes(baseNotes, metadata, custom);

    const shouldLog = process.env.NODE_ENV !== 'production';
    if (shouldLog) {
      console.log('[ringyProxy] preparing payload', {
        contactMethod,
        metadataKeys: Object.keys(metadata),
        customKeys: Object.keys(custom),
      });
    }

    const vendorRef =
      typeof vendorReferenceId === 'string' && vendorReferenceId.trim()
        ? vendorReferenceId.trim()
        : crypto.randomUUID();

    const proofLink =
      typeof proofOfSmsOptInLink === 'string' && proofOfSmsOptInLink.trim()
        ? proofOfSmsOptInLink.trim()
        : typeof metadataObject.proof_of_sms_opt_in_link === 'string'
          ? metadataObject.proof_of_sms_opt_in_link
          : typeof metadataObject.proofOfSmsOptInLink === 'string'
            ? metadataObject.proofOfSmsOptInLink
            : '';

    const leadSourceValue = typeof leadSource === 'string' && leadSource.trim()
      ? leadSource.trim()
      : defaultLeadSource;

    const payload: Record<string, unknown> = {
      // Auth credentials FIRST (required by Ringy)
      sid,
      authToken,

      // Core contact fields (exact field names from working api/lead.ts)
      phone_number: normalizedPhone,
      first_name: firstNameValue,
      last_name: lastNameValue,
      email: emailAddress,
      zip_code: String(zipCodeValue ?? ''),
      lead_source: leadSourceValue,
      notes: payloadNotes,
      vendor_reference_id: vendorRef,
      proof_of_sms_opt_in_link: proofLink,

      // Custom fields LAST (won't override core fields)
      ...prefixedCustom,
    };

    if (fullName) {
      payload.full_name = fullName;
    }

    const contactMethodLabelForPayload = metadata.preferred_contact_method_label || custom.preferred_contact_method_label || contactMethodLabel;
    if (contactMethodLabelForPayload) {
      payload.preferred_contact_method = contactMethodLabelForPayload;
    }

    const contactMethodValueForPayload = metadata.preferred_contact_method_value || custom.preferred_contact_method_value || contactMethod || '';
    if (contactMethodValueForPayload) {
      payload.preferred_contact_method_value = contactMethodValueForPayload;
    }

    const bestTimeLabelForPayload = metadata.best_time_to_contact_label || custom.best_time_to_contact_label || bestTimeLabel;
    if (bestTimeLabelForPayload) {
      payload.best_time_to_contact = bestTimeLabelForPayload;
    }

    const primaryAgeForPayload = metadata.primary_age || custom.primary_age || primaryAgeValue;
    if (primaryAgeForPayload) {
      payload.age = primaryAgeForPayload;
    }

    const insuranceLabelForPayload = metadata.current_insurance_status_label || custom.current_insurance_status_label || insuranceLabel;
    if (insuranceLabelForPayload) {
      payload.current_insurance_status = insuranceLabelForPayload;
    }

    const insuranceValueForPayload = metadata.current_insurance_status_value || custom.current_insurance_status_value || currentInsuranceValue;
    if (insuranceValueForPayload) {
      payload.current_insurance_status_value = insuranceValueForPayload;
    }

    if (coverageTypeLabel && !payload.coverage_type_label) {
      payload.coverage_type_label = coverageTypeLabel;
    }

    if (demographicSnapshot) {
      payload.demographic_snapshot = demographicSnapshot;
    }

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
