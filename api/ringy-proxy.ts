import { extractCaptchaToken, stripCaptchaFields } from './utils/captcha';
import { normalizeContactMethod } from './utils/contact';
import {
  getCoverageLabel,
  getInsuranceStatusLabel,
  getContactMethodLabel,
  getContactTimeLabel,
  formatChildAges,
  summarizeDemographics,
} from '../shared/demographics';

// Vercel Edge Function to proxy lead submissions to Ringy CRM
export const config = {
  runtime: 'edge',
};

const DEFAULT_LEAD_SOURCE = process.env.LEAD_SOURCE ?? 'Website - Mobile Hero';
const DEFAULT_TEXT_CAMPAIGN = 'Bradford Informed Guidance';
const DEFAULT_EMAIL_PHONE_CAMPAIGN = 'Website - Manual Follow-Up';

const DEFAULT_ALLOWED_ORIGINS = [
  'https://bradfordinformedguidance.com',
  'https://www.bradfordinformedguidance.com',
  'http://localhost:8080',
  'http://localhost:5173',
];

type LeadBody = {
  consentToText?: boolean;
  hcaptchaToken?: string;
  [key: string]: unknown;
};

type FieldName = 'apiUrl' | 'sid' | 'authToken' | 'apiKey' | 'campaignId';

type FieldDescriptor = {
  aliases: readonly string[];
  defaultValue?: string;
};

type ConfigDescriptor = Record<FieldName, FieldDescriptor>;

type ResolvedConfig = Record<FieldName, string>;

type MissingField = {
  field: FieldName;
  aliases: readonly string[];
};

const TEXT_DESCRIPTOR: ConfigDescriptor = {
  apiUrl: {
    aliases: ['RINGY_URL_TEXT', 'RINGY_AUTO_ENDPOINT', 'RINGY_ENDPOINT'],
  },
  sid: {
    aliases: ['RINGY_SID_TEXT', 'RINGY_AUTO_SID', 'RINGY_SID'],
  },
  authToken: {
    aliases: ['RINGY_AUTH_TOKEN_TEXT', 'RINGY_AUTO_AUTH_TOKEN', 'RINGY_AUTH_TOKEN'],
  },
  apiKey: {
    aliases: ['RINGY_API_KEY_TEXT', 'RINGY_AUTO_API_KEY'],
  },
  campaignId: {
    aliases: ['RINGY_CAMPAIGN_ID_TEXT'],
    defaultValue: DEFAULT_TEXT_CAMPAIGN,
  },
};

const EMAIL_PHONE_DESCRIPTOR: ConfigDescriptor = {
  apiUrl: {
    aliases: ['RINGY_URL_EMAIL_PHONE', 'RINGY_MANUAL_ENDPOINT', 'RINGY_ENDPOINT'],
  },
  sid: {
    aliases: ['RINGY_SID_EMAIL_PHONE', 'RINGY_MANUAL_SID', 'RINGY_SID'],
  },
  authToken: {
    aliases: ['RINGY_AUTH_TOKEN_EMAIL_PHONE', 'RINGY_MANUAL_AUTH_TOKEN', 'RINGY_AUTH_TOKEN'],
  },
  apiKey: {
    aliases: ['RINGY_API_KEY_EMAIL_PHONE', 'RINGY_MANUAL_API_KEY'],
  },
  campaignId: {
    aliases: ['RINGY_CAMPAIGN_ID_EMAIL_PHONE'],
    defaultValue: DEFAULT_EMAIL_PHONE_CAMPAIGN,
  },
};

function resolveLeadSource(data: Record<string, unknown>): string {
  const camel = typeof data['leadSource'] === 'string' ? data['leadSource'].trim() : '';
  if (camel) {
    return camel;
  }

  const snake = typeof data['lead_source'] === 'string' ? data['lead_source'].trim() : '';
  if (snake) {
    return snake;
  }

  return DEFAULT_LEAD_SOURCE;
}

function resolveConfig(descriptor: ConfigDescriptor): {
  config: Partial<ResolvedConfig>;
  missing: MissingField[];
} {
  const config: Partial<ResolvedConfig> = {};
  const missing: MissingField[] = [];

  (Object.keys(descriptor) as FieldName[]).forEach(field => {
    const { aliases, defaultValue } = descriptor[field];
    let value: string | undefined;

    for (const alias of aliases) {
      const envValue = process.env[alias];
      if (envValue) {
        value = envValue;
        break;
      }
    }

    if (!value && defaultValue) {
      value = defaultValue;
    }

    if (value) {
      config[field] = value;
    } else {
      missing.push({ field, aliases });
    }
  });

  return { config, missing };
}

function ensureApiKey(config: Partial<ResolvedConfig>, missing: MissingField[]): void {
  if (!config.apiKey && config.sid && config.authToken) {
    config.apiKey = `${config.sid}:${config.authToken}`;
    const index = missing.findIndex(item => item.field === 'apiKey');
    if (index >= 0) {
      missing.splice(index, 1);
    }
  }
}

function normalizeBoolean(value: unknown): boolean | undefined {
  if (typeof value === 'boolean') {
    return value;
  }
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (!normalized) return undefined;
    if (normalized === 'true') return true;
    if (normalized === 'false') return false;
    return undefined;
  }
  if (typeof value === 'number') {
    if (Number.isNaN(value)) return undefined;
    return value !== 0;
  }
  return undefined;
}

const sanitizePhone = (value: unknown) => {
  if (typeof value !== 'string') return '';
  return value.replace(/\D/g, '');
};

const toPlainObject = (value: unknown): Record<string, unknown> => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return value as Record<string, unknown>;
};

const toStringRecord = (input: Record<string, unknown>) => {
  const result: Record<string, string> = {};

  Object.entries(input).forEach(([key, rawValue]) => {
    if (rawValue === undefined || rawValue === null) return;

    if (typeof rawValue === 'string') {
      const trimmed = rawValue.trim();
      if (trimmed) result[key] = trimmed;
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
      if (serialized && serialized !== '{}' && serialized !== '[]') {
        result[key] = serialized;
      }
    } catch {
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

export default async function handler(req: Request) {
  const method = (req.method || 'GET').toUpperCase();
  const corsHeaders = buildCorsHeaders(req);
  const hcaptchaSecret = process.env.HCAPTCHA_SECRET;
  const hcaptchaVerifyEndpoint =
    process.env.HCAPTCHA_VERIFY_ENDPOINT || 'https://hcaptcha.com/siteverify';

  if (method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (method === 'HEAD') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (method === 'GET') {
    return new Response(JSON.stringify({ message: 'Ringy proxy ready' }), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  }

  if (method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const rawLeadData = (await req.json()) as LeadBody | Record<string, unknown> | undefined;
    // Root cause: submissions from different surfaces serialize the token under varying keys or inside a nested formData object.
    // Normalizing here lets the Edge handler see a solved challenge instead of rejecting with “captcha verification required”.
    const hcaptchaToken = extractCaptchaToken(rawLeadData);
    const sanitizedLeadData = stripCaptchaFields(rawLeadData);
    const {
      consentToText: consentCandidate,
      contactMethod: contactMethodCandidate,
      ...restOfLeadData
    } = sanitizedLeadData;
    const contactMethod = normalizeContactMethod(contactMethodCandidate);
    const consentToText =
      normalizeBoolean(consentCandidate) ?? (contactMethod === 'text' ? true : undefined);

    if (hcaptchaSecret) {
      if (!hcaptchaToken || typeof hcaptchaToken !== 'string') {
        return new Response(
          JSON.stringify({ message: 'Captcha verification required.' }),
          {
            status: 400,
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/json',
            },
          },
        );
      }

      const verifyResponse = await fetch(hcaptchaVerifyEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: hcaptchaSecret,
          response: hcaptchaToken,
          remoteip: getClientIp(req) ?? '',
        }),
      });

      let verification: { success?: boolean; ['error-codes']?: unknown } = {};
      try {
        verification = await verifyResponse.json();
      } catch {
        verification = {};
      }

      if (!verification.success) {
        return new Response(
          JSON.stringify({
            message: 'Captcha verification failed.',
            details: verification['error-codes'] ?? null,
          }),
          {
            status: 400,
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/json',
            },
          },
        );
      }
    }

    const descriptor = consentToText ? TEXT_DESCRIPTOR : EMAIL_PHONE_DESCRIPTOR;
    const pathLabel = contactMethod === 'text' ? 'text' : 'email_phone';

    const { config, missing } = resolveConfig(descriptor);
    ensureApiKey(config, missing);

    const requiredFields: FieldName[] = ['apiUrl', 'sid', 'authToken', 'apiKey', 'campaignId'];
    const unresolved = requiredFields.filter(field => !config[field]);

    if (missing.length > 0 || unresolved.length > 0) {
      const missingAliasSummary = missing.map(item => ({ field: item.field, aliases: item.aliases }));
      console.error('Ringy proxy missing env vars:', {
        path: pathLabel,
        missing: missingAliasSummary,
        unresolved,
      });
      return new Response(
        JSON.stringify({
          message: 'Server configuration error.',
          path: pathLabel,
          missing: missingAliasSummary,
          unresolved,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        },
      );
    }

    const leadRecord = { ...restOfLeadData } as Record<string, unknown>;
    const {
      firstName: firstNameRaw,
      lastName: lastNameRaw,
      fullName: fullNameRaw,
      email: emailRaw,
      phone: phoneRaw,
      phoneNumber: phoneNumberRaw,
      zipCode: zipCodeRaw,
      leadSource: leadSourceRaw,
      notes: notesRaw,
      proofOfSmsOptInLink,
      vendorReferenceId: vendorReferenceIdRaw,
      metadata: incomingMetadataRaw,
      custom: incomingCustomRaw,
      contactMethodLabel: contactMethodLabelRaw,
      bestTimeLabel: bestTimeLabelRaw,
      currentInsuranceLabel: currentInsuranceLabelRaw,
      coverageTypeLabel: coverageTypeLabelRaw,
      ...additionalFields
    } = leadRecord;

    const email = typeof emailRaw === 'string' ? emailRaw.trim() : '';
    const phoneCandidate = typeof phoneNumberRaw === 'string' && phoneNumberRaw.trim()
      ? phoneNumberRaw
      : typeof phoneRaw === 'string'
        ? phoneRaw
        : '';
    const normalizedPhone = sanitizePhone(phoneCandidate);

    if (!email || !normalizedPhone) {
      return new Response(
        JSON.stringify({ message: 'Missing required email or phone' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        },
      );
    }

    const firstName = typeof firstNameRaw === 'string' ? firstNameRaw.trim() : '';
    const lastName = typeof lastNameRaw === 'string' ? lastNameRaw.trim() : '';
    const fullName = typeof fullNameRaw === 'string' && fullNameRaw.trim()
      ? fullNameRaw.trim()
      : [firstName, lastName].filter(Boolean).join(' ');
    const zipCode = typeof zipCodeRaw === 'string' ? zipCodeRaw.trim() : '';
    const baseNotes = typeof notesRaw === 'string' ? notesRaw : '';

    const leadSource = typeof leadSourceRaw === 'string' && leadSourceRaw.trim()
      ? leadSourceRaw.trim()
      : resolveLeadSource(restOfLeadData as Record<string, unknown>);

    const metadataObject = toPlainObject(incomingMetadataRaw);
    const customObject = toPlainObject(incomingCustomRaw);

    const coverageTypeValue = typeof additionalFields.coverageType === 'string' ? additionalFields.coverageType : '';
    if ('coverageType' in additionalFields) {
      delete additionalFields.coverageType;
    }
    const coverageTypeLabel = typeof coverageTypeLabelRaw === 'string' && coverageTypeLabelRaw.trim()
      ? coverageTypeLabelRaw.trim()
      : getCoverageLabel(coverageTypeValue);

    if (coverageTypeLabel && metadataObject.coverage_type_label === undefined) {
      metadataObject.coverage_type_label = coverageTypeLabel;
    }
    if (coverageTypeValue && metadataObject.coverage_type_value === undefined) {
      metadataObject.coverage_type_value = coverageTypeValue;
    }
    if (coverageTypeLabel && customObject.coverage_type_label === undefined) {
      customObject.coverage_type_label = coverageTypeLabel;
    }
    if (coverageTypeValue && customObject.coverage_type_value === undefined) {
      customObject.coverage_type_value = coverageTypeValue;
    }

    const primaryAgeValue = typeof additionalFields.yourAge === 'string' ? additionalFields.yourAge : '';
    if ('yourAge' in additionalFields) {
      delete additionalFields.yourAge;
    }
    if (primaryAgeValue) {
      if (metadataObject.primary_age === undefined) metadataObject.primary_age = primaryAgeValue;
      if (customObject.primary_age === undefined) customObject.primary_age = primaryAgeValue;
    }

    const spouseAgeValue = typeof additionalFields.spouseAge === 'string' ? additionalFields.spouseAge : '';
    if ('spouseAge' in additionalFields) {
      delete additionalFields.spouseAge;
    }
    if (spouseAgeValue) {
      if (metadataObject.spouse_age === undefined) metadataObject.spouse_age = spouseAgeValue;
      if (customObject.spouse_age === undefined) customObject.spouse_age = spouseAgeValue;
    }

    const numberOfChildrenValue = typeof additionalFields.numChildren === 'string' ? additionalFields.numChildren : '';
    if ('numChildren' in additionalFields) {
      delete additionalFields.numChildren;
    }
    if (numberOfChildrenValue) {
      if (metadataObject.number_of_children === undefined) metadataObject.number_of_children = numberOfChildrenValue;
      if (customObject.number_of_children === undefined) customObject.number_of_children = numberOfChildrenValue;
    }

    const childAgesLabel = typeof additionalFields.childAgesLabel === 'string'
      ? additionalFields.childAgesLabel
      : formatChildAges(additionalFields.childAges);
    if ('childAges' in additionalFields) {
      delete additionalFields.childAges;
    }
    if ('childAgesLabel' in additionalFields) {
      delete additionalFields.childAgesLabel;
    }
    if (childAgesLabel) {
      if (metadataObject.child_ages === undefined) metadataObject.child_ages = childAgesLabel;
      if (customObject.child_ages === undefined) customObject.child_ages = childAgesLabel;
    }

    const currentInsuranceValue = typeof additionalFields.currentInsurance === 'string' ? additionalFields.currentInsurance : '';
    if ('currentInsurance' in additionalFields) {
      delete additionalFields.currentInsurance;
    }
    const insuranceLabel = typeof currentInsuranceLabelRaw === 'string' && currentInsuranceLabelRaw.trim()
      ? currentInsuranceLabelRaw.trim()
      : getInsuranceStatusLabel(currentInsuranceValue);
    if (insuranceLabel && metadataObject.current_insurance_status_label === undefined) {
      metadataObject.current_insurance_status_label = insuranceLabel;
    }
    if (currentInsuranceValue && metadataObject.current_insurance_status_value === undefined) {
      metadataObject.current_insurance_status_value = currentInsuranceValue;
    }
    if (insuranceLabel && customObject.current_insurance_status_label === undefined) {
      customObject.current_insurance_status_label = insuranceLabel;
    }
    if (currentInsuranceValue && customObject.current_insurance_status_value === undefined) {
      customObject.current_insurance_status_value = currentInsuranceValue;
    }

    const contactMethodLabel = typeof contactMethodLabelRaw === 'string' && contactMethodLabelRaw.trim()
      ? contactMethodLabelRaw.trim()
      : getContactMethodLabel(contactMethod);
    if ('contactMethodLabel' in additionalFields) {
      delete additionalFields.contactMethodLabel;
    }
    if (contactMethodLabel && metadataObject.preferred_contact_method_label === undefined) {
      metadataObject.preferred_contact_method_label = contactMethodLabel;
    }
    if (contactMethod && metadataObject.preferred_contact_method_value === undefined) {
      metadataObject.preferred_contact_method_value = contactMethod;
    }
    if (contactMethodLabel && customObject.preferred_contact_method_label === undefined) {
      customObject.preferred_contact_method_label = contactMethodLabel;
    }
    if (contactMethod && customObject.preferred_contact_method_value === undefined) {
      customObject.preferred_contact_method_value = contactMethod;
    }

    const bestTimeValue = typeof additionalFields.bestTime === 'string' ? additionalFields.bestTime : '';
    if ('bestTime' in additionalFields) {
      delete additionalFields.bestTime;
    }
    const bestTimeLabel = typeof bestTimeLabelRaw === 'string' && bestTimeLabelRaw.trim()
      ? bestTimeLabelRaw.trim()
      : getContactTimeLabel(bestTimeValue);
    if ('bestTimeLabel' in additionalFields) {
      delete additionalFields.bestTimeLabel;
    }
    if (bestTimeLabel && metadataObject.best_time_to_contact_label === undefined) {
      metadataObject.best_time_to_contact_label = bestTimeLabel;
    }
    if (bestTimeValue && metadataObject.best_time_to_contact_value === undefined) {
      metadataObject.best_time_to_contact_value = bestTimeValue;
    }
    if (bestTimeLabel && customObject.best_time_to_contact_label === undefined) {
      customObject.best_time_to_contact_label = bestTimeLabel;
    }
    if (bestTimeValue && customObject.best_time_to_contact_value === undefined) {
      customObject.best_time_to_contact_value = bestTimeValue;
    }

    const demographicSnapshot = summarizeDemographics({
      coverageLabel: metadataObject.coverage_type_label as string | undefined,
      primaryAge: metadataObject.primary_age as string | undefined ?? primaryAgeValue,
      spouseAge: metadataObject.spouse_age as string | undefined ?? spouseAgeValue,
      childrenCount: metadataObject.number_of_children as string | undefined ?? numberOfChildrenValue,
      childAges: metadataObject.child_ages as string | undefined ?? childAgesLabel,
      insuranceLabel: metadataObject.current_insurance_status_label as string | undefined ?? insuranceLabel,
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

    const remainingStrings = toStringRecord(additionalFields);
    Object.entries(remainingStrings).forEach(([key, value]) => {
      if (!(key in metadataObject)) {
        metadataObject[key] = value;
      }
    });

    const metadata = toStringRecord(metadataObject);
    const custom = toStringRecord(customObject);
    const prefixedCustom = prefixRecord(custom, 'custom_');
    const payloadNotes = composeNotes(baseNotes, metadata, custom);

    const shouldLog = typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production';
    if (shouldLog) {
      console.log('[ringy-proxy] preparing payload', {
        contactMethod,
        metadataKeys: Object.keys(metadata),
        customKeys: Object.keys(custom),
      });
    }

    const vendorReferenceId = typeof vendorReferenceIdRaw === 'string' && vendorReferenceIdRaw.trim()
      ? vendorReferenceIdRaw.trim()
      : (typeof crypto !== 'undefined' && 'randomUUID' in crypto
          ? crypto.randomUUID()
          : `ref_${Date.now()}_${Math.random().toString(36).slice(2)}`);

    const proofLink = typeof proofOfSmsOptInLink === 'string' && proofOfSmsOptInLink.trim()
      ? proofOfSmsOptInLink.trim()
      : (typeof metadataObject.proof_of_sms_opt_in_link === 'string'
          ? metadataObject.proof_of_sms_opt_in_link
          : typeof metadataObject.proofOfSmsOptInLink === 'string'
            ? metadataObject.proofOfSmsOptInLink
            : '');

    const headers = {
      'Content-Type': 'application/json',
      SID: config.sid,
      'Auth-Token': config.authToken,
      'X-API-KEY': config.apiKey,
    } as Record<string, string>;

    const ringyPayload: Record<string, unknown> = {
      ...prefixedCustom,
      sid: config.sid,
      authToken: config.authToken,
      campaignId: config.campaignId,
      campaign_id: config.campaignId,
      leadSource,
      lead_source: leadSource,
      phone_number: normalizedPhone,
      email,
      notes: payloadNotes,
      vendor_reference_id: vendorReferenceId,
      proof_of_sms_opt_in_link: proofLink,
    };

    if (firstName) ringyPayload.first_name = firstName;
    if (lastName) ringyPayload.last_name = lastName;
    if (fullName) ringyPayload.full_name = fullName;
    if (zipCode) ringyPayload.zip_code = zipCode;

    const contactMethodLabelForPayload = metadata.preferred_contact_method_label || custom.preferred_contact_method_label || contactMethodLabel;
    if (contactMethodLabelForPayload) {
      ringyPayload.preferred_contact_method = contactMethodLabelForPayload;
    }

    const contactMethodValueForPayload = metadata.preferred_contact_method_value || custom.preferred_contact_method_value || contactMethod || '';
    if (contactMethodValueForPayload) {
      ringyPayload.preferred_contact_method_value = contactMethodValueForPayload;
    }

    const bestTimeLabelForPayload = metadata.best_time_to_contact_label || custom.best_time_to_contact_label || bestTimeLabel;
    if (bestTimeLabelForPayload) {
      ringyPayload.best_time_to_contact = bestTimeLabelForPayload;
    }

    const primaryAgeForPayload = metadata.primary_age || custom.primary_age || primaryAgeValue;
    if (primaryAgeForPayload) {
      ringyPayload.age = primaryAgeForPayload;
    }

    const insuranceLabelForPayload = metadata.current_insurance_status_label || custom.current_insurance_status_label || insuranceLabel;
    if (insuranceLabelForPayload) {
      ringyPayload.current_insurance_status = insuranceLabelForPayload;
    }

    const insuranceValueForPayload = metadata.current_insurance_status_value || custom.current_insurance_status_value || currentInsuranceValue;
    if (insuranceValueForPayload) {
      ringyPayload.current_insurance_status_value = insuranceValueForPayload;
    }

    if (Object.keys(metadata).length > 0) {
      ringyPayload.metadata_summary = JSON.stringify(metadata);
    }

    const ringyResponse = await fetch(config.apiUrl as string, {
      method: 'POST',
      headers,
      body: JSON.stringify(ringyPayload),
    });

    if (!ringyResponse.ok) {
      const errorBody = await ringyResponse.text();
      console.error('Ringy API Error:', ringyResponse.status, errorBody);
      return new Response(
        JSON.stringify({
          message: 'Failed to submit lead to CRM.',
          status: ringyResponse.status,
          details: errorBody,
        }),
        {
          status: ringyResponse.status,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        },
      );
    }

    const responseData = await ringyResponse.json();

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return new Response(
      JSON.stringify({ message: 'An internal server error occurred.', details: errorMessage }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  }
}

function buildCorsHeaders(req: Request): Record<string, string> {
  const allowedOriginsEnv = process.env.RINGY_PROXY_ALLOW_ORIGINS;
  const allowList = allowedOriginsEnv
    ? allowedOriginsEnv
        .split(',')
        .map(origin => origin.trim())
        .filter(Boolean)
    : DEFAULT_ALLOWED_ORIGINS;

  const origin = req.headers.get('origin') ?? '';
  const allowedOrigin = origin && allowList.includes(origin) ? origin : allowList[0] ?? '*';

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,HEAD',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function getClientIp(req: Request): string | null {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (!forwardedFor) return null;
  const [first] = forwardedFor.split(',').map(part => part.trim()).filter(Boolean);
  return first ?? null;
}
