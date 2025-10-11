import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HeroForm from '../HeroForm';

const createHeaders = (value: string) => ({
  get: (header: string) => (header.toLowerCase() === 'content-type' ? value : null),
});

describe('HeroForm', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    vi.resetAllMocks();
    window.history.replaceState({}, '', '/?utm_source=search&utm_campaign=fall');
  });

  afterEach(() => {
    if (originalFetch) {
      global.fetch = originalFetch;
    }
  });

  it('submits a sanitized payload with metadata and custom fields', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      headers: createHeaders('application/json'),
      text: async () => '{}',
      json: async () => ({}),
    });

    global.fetch = fetchMock as unknown as typeof fetch;

    render(<HeroForm />);

    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: ' Jane ' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: ' Doe ' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '(407) 555-7788' } });
    fireEvent.change(screen.getByLabelText(/state/i), { target: { value: 'FL' } });
    fireEvent.click(screen.getByLabelText(/agree to receive text messages/i));

    fireEvent.click(screen.getByRole('button', { name: /start my consultation/i }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

    const [, requestInit] = fetchMock.mock.calls[0];
    const payload = JSON.parse((requestInit as RequestInit).body as string) as Record<string, unknown>;

    expect(payload.firstName).toBe('Jane');
    expect(payload.lastName).toBe('Doe');
    expect(payload.phone).toBe('4075557788');
    expect(payload.state).toBe('FL');
    expect(payload.consentToText).toBe(true);
    expect(payload.leadSource).toBe('Website — Hero Form');

    const metadata = payload.metadata as Record<string, unknown> | undefined;
    expect(metadata).toMatchObject({
      form: 'Hero',
      landingUrl: 'http://localhost:3000/?utm_source=search&utm_campaign=fall',
    });
    expect(metadata).toHaveProperty('submittedAt');
    expect(metadata?.utm).toMatchObject({ utm_source: 'search', utm_campaign: 'fall' });

    expect(payload.custom).toMatchObject({
      state: 'FL',
      consent_to_text: 'Yes',
      utm_source: 'search',
      utm_campaign: 'fall',
    });

    expect(payload.notes).toContain('Lead Source: Website — Hero Form');
    expect(payload.notes).toContain('UTM utm_source: search');

    await waitFor(() => expect(screen.getByText(/thank you for your submission/i)).toBeInTheDocument());
  });

  it('prevents submission when the phone number is invalid', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock as unknown as typeof fetch;

    render(<HeroForm />);

    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'User' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '123' } });
    fireEvent.change(screen.getByLabelText(/state/i), { target: { value: 'TX' } });

    fireEvent.click(screen.getByRole('button', { name: /start my consultation/i }));

    expect(fetchMock).not.toHaveBeenCalled();
    await waitFor(() => expect(screen.getByText(/please enter a valid phone number/i)).toBeInTheDocument());
  });

  it('surfaces plain-text server errors gracefully', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      headers: createHeaders('text/plain'),
      text: async () => 'Service unavailable',
    });

    global.fetch = fetchMock as unknown as typeof fetch;

    render(<HeroForm />);

    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Ava' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Lee' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'ava@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '(222) 333-4444' } });
    fireEvent.change(screen.getByLabelText(/state/i), { target: { value: 'GA' } });

    fireEvent.click(screen.getByRole('button', { name: /start my consultation/i }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/submission failed: service unavailable/i)).toBeInTheDocument());
  });
});
