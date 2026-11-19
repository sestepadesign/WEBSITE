const LEGACY_SHEETS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzR8Kdmb5xfZv1___-qDOmeWgYuSOfwWlqQb00_6x37EACe4xKpgnlU5ZHRJuCPoZIszQ/exec';
const LEGACY_SHEETS_API_TOKEN = 'sestepa_secure_2026';
const DEFAULT_META_PIXEL_ID = '1185880420805434';

const sha256Hex = async (str) => {
  if (!str) return '';
  const data = new TextEncoder().encode(String(str).trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

const getCookieValue = (cookieHeader, name) => {
  if (!cookieHeader) return undefined;
  const match = cookieHeader.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[1]) : undefined;
};

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

  const reqHost = new URL(request.url).hostname;
  if (reqHost !== 'design.sestepa.com' && reqHost !== 'www.design.sestepa.com') {
    return jsonResponse({ ok: true, skipped: 'non_prod_host' });
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

  // Optional Server-Side Meta Conversions API (CAPI) dispatch if META_CAPI_TOKEN is configured in Cloudflare Pages env
  const capiToken = env.META_CAPI_TOKEN;
  const pixelId = env.META_PIXEL_ID || DEFAULT_META_PIXEL_ID;
  if (capiToken && pixelId) {
    try {
      const eventName = type === 'whatsapp' ? 'Contact' : 'Lead';
      const eventId = typeof body.event_id === 'string' && body.event_id.trim()
        ? body.event_id.trim()
        : `${type}_${Date.now()}`;
      const cookieHeader = request.headers.get('Cookie') || '';
      const fbp = getCookieValue(cookieHeader, '_fbp');
      const fbc = getCookieValue(cookieHeader, '_fbc');
      const clientIp = request.headers.get('CF-Connecting-IP') || undefined;
      const userAgent = request.headers.get('User-Agent') || undefined;
      const referer = request.headers.get('Referer') || 'https://design.sestepa.com/';

      const userData = {};
      if (clientIp) userData.client_ip_address = clientIp;
      if (userAgent) userData.client_user_agent = userAgent;
      if (fbp) userData.fbp = fbp;
      if (fbc) userData.fbc = fbc;

      if (type === 'contact') {
        const emailHash = await sha256Hex(payload.email || '');
        if (emailHash) userData.em = [emailHash];
        const rawPhone = String(payload.phone || '').replace(/[^\d]/g, '');
        if (rawPhone.length >= 7) {
          const phoneHash = await sha256Hex(rawPhone);
          if (phoneHash) userData.ph = [phoneHash];
        }
      }

      await fetch(`https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${encodeURIComponent(capiToken)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              event_name: eventName,
              event_time: Math.floor(Date.now() / 1000),
              event_id: eventId,
              action_source: 'website',
              event_source_url: referer,
              user_data: userData,
              custom_data: {
                currency: 'EUR',
                value: 1.0,
              },
            },
          ],
        }),
      });
    } catch {
      // Do not fail lead submission if CAPI ping fails
    }
  }

  return jsonResponse({ ok: true });
};
