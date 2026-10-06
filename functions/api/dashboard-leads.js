const LEGACY_DASHBOARD_PASSWORD = 'sestepa2026';
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

  const password = String(body.password || '');
  const expectedPassword = env.DASHBOARD_PASSWORD || LEGACY_DASHBOARD_PASSWORD;

  if (password !== expectedPassword) {
    return jsonResponse({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const scriptUrl = env.SHEETS_SCRIPT_URL || LEGACY_SHEETS_SCRIPT_URL;
  const token = env.SHEETS_API_TOKEN || LEGACY_SHEETS_API_TOKEN;
  const url = new URL(scriptUrl);
  url.searchParams.set('action', 'getLeads');
  url.searchParams.set('token', token);

  const response = await fetch(url.toString(), {
    headers: { Accept: 'text/csv,text/plain,*/*' },
  });

  if (!response.ok) {
    return jsonResponse({ ok: false, error: 'upstream_failed' }, { status: 502 });
  }

  const csv = await response.text();
  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Cache-Control': 'private, no-store',
    },
  });
};
