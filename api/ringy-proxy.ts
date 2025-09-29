// Vercel Edge Function to proxy lead submissions to Ringy CRM
export const config = {
  runtime: 'edge',
};

const DEFAULT_LEAD_SOURCE = process.env.LEAD_SOURCE ?? 'Website - Mobile Hero';

const TEXT_KEYS = [
  'RINGY_URL_TEXT',
  'RINGY_SID_TEXT',
  'RINGY_AUTH_TOKEN_TEXT',
  'RINGY_API_KEY_TEXT',
  'RINGY_CAMPAIGN_ID_TEXT',
] as const;

const EMAIL_PHONE_KEYS = [
  'RINGY_URL_EMAIL_PHONE',
  'RINGY_SID_EMAIL_PHONE',
  'RINGY_AUTH_TOKEN_EMAIL_PHONE',
  'RINGY_API_KEY_EMAIL_PHONE',
  'RINGY_CAMPAIGN_ID_EMAIL_PHONE',
] as const;

type LeadBody = {
  consentToText?: boolean;
  [key: string]: unknown;
};

type EnvKey = typeof TEXT_KEYS[number] | typeof EMAIL_PHONE_KEYS[number];

function resolveLeadSource(data: Record<string, unknown>): string {
  const camel = typeof data['leadSource'] === 'string' ? (data['leadSource'] as string).trim() : '';
  if (camel) {
    return camel;
  }

  const snake = typeof data['lead_source'] === 'string' ? (data['lead_source'] as string).trim() : '';
  if (snake) {
    return snake;
  }

  return DEFAULT_LEAD_SOURCE;
}

function loadEnv(keys: readonly EnvKey[]) {
  const entries = keys.map(key => [key, process.env[key] ?? ''] as const);
  const missing = entries.filter(([, value]) => !value).map(([key]) => key);
  return { entries, missing };
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const leadData = (await req.json()) as LeadBody;
    const { consentToText, ...restOfLeadData } = leadData ?? {};

    const keys = consentToText ? TEXT_KEYS : EMAIL_PHONE_KEYS;
    const { entries, missing } = loadEnv(keys);

    if (missing.length > 0) {
      console.error('Ringy proxy missing env vars:', missing.join(', '));
      return new Response(
        JSON.stringify({
          message: 'Server configuration error.',
          missing,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    const envMap = Object.fromEntries(entries) as Record<EnvKey, string>;

    const apiUrl = envMap[keys[0]];
    const sid = envMap[keys[1]];
    const authToken = envMap[keys[2]];
    const apiKey = envMap[keys[3]];
    const campaignId = envMap[keys[4]];

    const headers = {
      'Content-Type': 'application/json',
      SID: sid,
      'Auth-Token': authToken,
      'X-API-KEY': apiKey,
    } as Record<string, string>;

    const leadSource = resolveLeadSource(restOfLeadData as Record<string, unknown>);

    const ringyPayload: Record<string, unknown> = {
      ...restOfLeadData,
      leadSource,
      lead_source: leadSource,
      sid,
      authToken,
      campaignId,
      campaign_id: campaignId,
    };

    const ringyResponse = await fetch(apiUrl, {
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
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    const responseData = await ringyResponse.json();

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return new Response(
      JSON.stringify({ message: 'An internal server error occurred.', details: errorMessage }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}