export type ContactMethod = 'text' | 'phone' | 'email' | '';

const CONTACT_METHOD_ALIASES: Record<Exclude<ContactMethod, ''>, string[]> = {
  text: ['text', 'textmessage', 'text me', 'sms', 'smsmessage'],
  phone: ['phone', 'phonecall', 'phone call', 'call', 'callme', 'telephone'],
  email: ['email', 'emailme', 'mail', 'email us'],
};

export function normalizeContactMethod(value: unknown): ContactMethod {
  if (typeof value !== 'string') {
    return '';
  }

  const normalized = value.trim().toLowerCase();
  if (!normalized) {
    return '';
  }

  const slug = normalized.replace(/[\s_-]+/g, '');

  for (const [method, aliases] of Object.entries(CONTACT_METHOD_ALIASES) as [
    Exclude<ContactMethod, ''>,
    string[],
  ][]) {
    if (aliases.some(alias => alias.replace(/[\s_-]+/g, '') === slug)) {
      return method;
    }
  }

  return '';
}
