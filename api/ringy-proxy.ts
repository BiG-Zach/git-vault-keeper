import { extractCaptchaToken, stripCaptchaFields } from './utils/captcha';
import { normalizeContactMethod } from './utils/contact';

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

    // At this point, config fields are validated to exist (lines 147-166)
    const headers = {
      'Content-Type': 'application/json',
      SID: config.sid,
      'Auth-Token': config.authToken,
      'X-API-KEY': config.apiKey,
    } as Record<string, string>;

    const leadSource = resolveLeadSource(restOfLeadData as Record<string, unknown>);

    const ringyPayload: Record<string, unknown> = {
      ...restOfLeadData,
      leadSource,
      lead_source: leadSource,
      sid: config.sid,
      authToken: config.authToken,
      campaignId: config.campaignId,
      campaign_id: config.campaignId,
    };

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
