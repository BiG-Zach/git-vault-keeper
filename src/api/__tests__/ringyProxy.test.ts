import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import ringyProxy from '../ringyProxy';
import fetch from 'node-fetch';

vi.mock('node-fetch', () => ({
  default: vi.fn(),
}));

const mockedFetch = fetch as unknown as ReturnType<typeof vi.fn>;

type MockFn = ReturnType<typeof vi.fn>;

type ResponseStub = {
  statusCode: number;
  statusMessage: string;
  headers: Map<string, string>;
  payload?: unknown;
  setHeader: MockFn;
  status: MockFn;
  json: MockFn;
  end: MockFn;
};

const createRequest = (overrides: Partial<VercelRequest> = {}): VercelRequest => {
  return {
    method: 'POST',
    headers: {},
    body: {},
    ...overrides,
  } as VercelRequest;
};

const createResponse = (): ResponseStub => {
  const response: ResponseStub = {
    statusCode: 200,
    statusMessage: '',
    headers: new Map<string, string>(),
    setHeader: vi.fn((key: string, value: string) => {
      response.headers.set(key, value);
    }),
    status: vi.fn((code: number) => {
      response.statusCode = code;
      return response;
    }),
    json: vi.fn((payload: unknown) => {
      response.payload = payload;
      return response;
    }),
    end: vi.fn(),
  };

  return response;
};

describe('ringyProxy', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.RINGY_SID = 'test-sid';
    process.env.RINGY_AUTH_TOKEN = 'test-token';
    process.env.RINGY_ENDPOINT = 'https://example.com/lead';
  });

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  it('returns readiness message for GET requests', async () => {
    const req = createRequest({ method: 'GET' });
    const res = createResponse();

    await ringyProxy(req, res as unknown as VercelResponse);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Ringy proxy ready' });
  });

  it('fails fast when credentials are missing', async () => {
    delete process.env.RINGY_SID;
    delete process.env.RINGY_AUTH_TOKEN;

    const req = createRequest();
    const res = createResponse();

    await ringyProxy(req, res as unknown as VercelResponse);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Ringy credentials missing' });
    expect(mockedFetch).not.toHaveBeenCalled();
  });

  it('forwards sanitized payloads and returns upstream data', async () => {
    mockedFetch.mockResolvedValue({
      ok: true,
      text: async () => '{"ok":true}',
    });

    const req = createRequest({
      headers: { origin: 'http://localhost:8080' } as Record<string, string>,
      body: {
        firstName: 'Taylor',
        lastName: 'Reed',
        email: 'taylor@example.com',
        phone: '(555) 444-2211',
        leadSource: 'Website — Hero Form',
        notes: 'Lead Source: Website — Hero Form',
        metadata: {
          landingUrl: 'https://example.com',
          utm_source: 'search',
        },
        custom: {
          state: 'FL',
          consent_to_text: 'Yes',
        },
      },
    });

    const res = createResponse();

    await ringyProxy(req, res as unknown as VercelResponse);

    expect(mockedFetch).toHaveBeenCalledTimes(1);
    const [, init] = mockedFetch.mock.calls[0];
    const payload = JSON.parse((init as RequestInit).body as string) as Record<string, unknown>;

    expect(payload).toMatchObject({
      phone_number: '5554442211',
      first_name: 'Taylor',
      lead_source: 'Website — Hero Form',
    });

    expect(payload).toHaveProperty('custom_state', 'FL');
    expect(payload).toHaveProperty('custom_consent_to_text', 'Yes');
    expect(payload).toHaveProperty('metadata_summary');
    expect(typeof payload.notes).toBe('string');

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ ok: true });
  });

  it('bubbles up upstream errors with detail text', async () => {
    mockedFetch.mockResolvedValue({
      ok: false,
      status: 503,
      text: async () => 'Bad Request',
    });

    const req = createRequest({
      body: {
        email: 'person@example.com',
        phone: '555-111-2222',
      },
    });

    const res = createResponse();

    await ringyProxy(req, res as unknown as VercelResponse);

    expect(res.status).toHaveBeenCalledWith(expect.any(Number));
    expect(res.json).toHaveBeenCalledWith({ error: 'Ringy error', detail: 'Bad Request' });
  });
});
