// Vercel Edge Function to proxy lead submissions to Ringy CRM
export const config = {
  runtime: 'edge',
};

const DEFAULT_LEAD_SOURCE = process.env.LEAD_SOURCE ?? 'Website - Mobile Hero';

type LeadBody = {
  consentToText?: boolean;
  [key: string]: unknown;
};

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

    let apiUrl: string | undefined;
    let sid: string | undefined;
    let authToken: string | undefined;
    let apiKey: string | undefined;
    let campaignId: string | undefined;

    if (consentToText) {
      apiUrl = process.env.RINGY_URL_TEXT;
      sid = process.env.RINGY_SID_TEXT;
      authToken = process.env.RINGY_AUTH_TOKEN_TEXT;
      apiKey = process.env.RINGY_API_KEY_TEXT;
      campaignId = process.env.RINGY_CAMPAIGN_ID_TEXT;
    } else {
      apiUrl = process.env.RINGY_URL_EMAIL_PHONE;
      sid = process.env.RINGY_SID_EMAIL_PHONE;
      authToken = process.env.RINGY_AUTH_TOKEN_EMAIL_PHONE;
      apiKey = process.env.RINGY_API_KEY_EMAIL_PHONE;
      campaignId = process.env.RINGY_CAMPAIGN_ID_EMAIL_PHONE;
    }

    if (!apiUrl || !sid || !authToken || !apiKey || !campaignId) {
      console.error('One or more Ringy integration variables are not configured.');
      return new Response(JSON.stringify({ message: 'Server configuration error.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

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