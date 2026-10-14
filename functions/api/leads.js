const LEGACY_SHEETS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzR8Kdmb5xfZv1___-qDOmeWgYuSOfwWlqQb00_6x37EACe4xKpgnlU5ZHRJuCPoZIszQ/exec';
const LEGACY_SHEETS_API_TOKEN = 'sestepa_secure_2026';

const jsonResponse = (body, init = {}) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'private, no-store',
      ...(init.headers || {}),
    },
  });

const isValidEmail = (email) => {
  if (typeof email !== 'string') return false;
  const trimmed = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
};

export const onRequestPost = async ({ request, env }) => {
  let body = {};
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const type = typeof body.type === 'string' ? body.type.trim() : '';
  const payload = body.payload && typeof body.payload === 'object' ? body.payload : {};

  // Honeypot trap: if company_website is present and filled, silently reject bot probe
  if (payload.company_website && String(payload.company_website).trim().length > 0) {
    return jsonResponse({ ok: false, error: 'spam_detected' }, { status: 400 });
  }

  // Strict payload validation by lead type
  if (type === 'whatsapp') {
    const isWaName = typeof payload.name === 'string' && payload.name.trim().toLowerCase().includes('whatsapp');
    const isWaSubject = typeof payload.subject === 'string' && payload.subject.trim().toLowerCase().includes('whatsapp');
    if (!isWaName && !isWaSubject) {
      return jsonResponse({ ok: false, error: 'invalid_whatsapp_payload' }, { status: 400 });
    }
  } else if (type === 'contact') {
    const name = typeof payload.name === 'string' ? payload.name.trim() : '';
    const email = typeof payload.email === 'string' ? payload.email.trim() : '';

    if (!name || name.length < 2) {
      return jsonResponse({ ok: false, error: 'missing_or_invalid_name' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return jsonResponse({ ok: false, error: 'missing_or_invalid_email' }, { status: 400 });
    }
  } else {
    // Reject empty probes, automated scanner hits, and unsupported types
    return jsonResponse({ ok: false, error: 'unsupported_or_missing_type' }, { status: 400 });
  }

  const scriptUrl = env.SHEETS_SCRIPT_URL || LEGACY_SHEETS_SCRIPT_URL;
  const token = env.SHEETS_API_TOKEN || LEGACY_SHEETS_API_TOKEN;

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(payload)) {
    if (value !== undefined && value !== null && key !== 'company_website') {
      params.set(key, String(value));
    }
  }
  params.set('token', token);

  const url = `${scriptUrl}?${params.toString()}`;
  const response = await fetch(url, { method: 'GET' });

  if (!response.ok) {
    return jsonResponse({ ok: false, error: 'upstream_failed' }, { status: 502 });
  }

  return jsonResponse({ ok: true });
};
