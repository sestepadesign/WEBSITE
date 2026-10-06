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

export const onRequestPost = async ({ request, env }) => {
  let body = {};
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const payload = body.payload && typeof body.payload === 'object' ? body.payload : {};
  const scriptUrl = env.SHEETS_SCRIPT_URL || LEGACY_SHEETS_SCRIPT_URL;
  const token = env.SHEETS_API_TOKEN || LEGACY_SHEETS_API_TOKEN;

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(payload)) {
    if (value !== undefined && value !== null) {
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
