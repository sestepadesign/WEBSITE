import type { APIRoute } from 'astro';
import { SITE, API_LANGS, buildProjectsPayload } from '../../lib/projects-api';

// Human-readable reference for the Projects API, served at /api/docs
// (listed as `service-doc` in /.well-known/api-catalog). Built from the same
// payload as /api/projects.json, so the example and the dataset table are the
// real output of this deploy. Standalone page: no site header, scripts or
// analytics; noindex. The Markdown variant (Accept: text/markdown) comes from
// functions/_middleware.js.

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Minimal JSON highlighter over already-stringified, then escaped, JSON. */
function highlightJson(json: string): string {
  return esc(json).replace(
    /(&quot;(?:[^&]|&(?!quot;))*?&quot;)(\s*:)?|\b(-?\d+(?:\.\d+)?)\b|\bnull\b|\btrue\b|\bfalse\b/g,
    (match, str, colon, num) => {
      if (str) return colon ? `<span class="tk-key">${str}</span>${colon}` : `<span class="tk-str">${str}</span>`;
      if (num) return `<span class="tk-num">${num}</span>`;
      return `<span class="tk-lit">${match}</span>`;
    }
  );
}

const LANG_NAMES: Record<string, string> = { en: 'English', es: 'Spanish', de: 'German' };

export const GET: APIRoute = () => {
  const payload = buildProjectsPayload();
  const sample = payload.projects.find((p) => p.slug === 'sant-llorenc') ?? payload.projects[0];
  const exampleJson = JSON.stringify(
    { generatedAt: payload.generatedAt, count: payload.count, projects: [sample, '…'] },
    null,
    2
  ).replace(/"…"/, `/* … ${payload.count - 1} more projects */`);

  const buildDate = new Date(payload.generatedAt);
  const buildLabel = buildDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  const withSize = payload.projects.filter((p) => p.size).length;

  const rows = payload.projects
    .map((p) => {
      const t = p.translations.en;
      return `<tr>
          <td><code>${esc(p.slug)}</code></td>
          <td><a href="${esc(p.url)}">${esc(t.title)}</a></td>
          <td>${esc(t.category)}</td>
          <td>${esc(t.location)}</td>
          <td class="num">${esc(p.year)}</td>
          <td class="num">${p.size ? esc(p.size) : '<span class="muted">null</span>'}</td>
        </tr>`;
    })
    .join('\n');

  const endpoint = `${SITE}/api/projects.json`;

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Projects API — S'Estepa Design</title>
<meta name="description" content="Reference for the S'Estepa Design Projects API: a read-only JSON feed of built garden projects in Mallorca, in English, Spanish and German.">
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="${SITE}/api/docs">
<link rel="service-desc" type="application/vnd.oai.openapi+json" href="/api/openapi.json">
<link rel="alternate" type="application/json" href="/api/projects.json" title="Projects feed">
<link rel="icon" href="/favicon.ico">
<link rel="preload" href="/fonts/cormorant-garamond-500.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/jost-400.woff2" as="font" type="font/woff2" crossorigin>
<style>
@font-face{font-family:'Cormorant Garamond';font-weight:500;font-display:swap;src:url('/fonts/cormorant-garamond-500.woff2') format('woff2')}
@font-face{font-family:'Jost';font-weight:400;font-display:swap;src:url('/fonts/jost-400.woff2') format('woff2')}
@font-face{font-family:'Jost';font-weight:500;font-display:swap;src:url('/fonts/jost-500.woff2') format('woff2')}
:root{
  --bg:#FAF9F6;--surface:#F3EFE9;--line:#E3DDD3;--text:#1F211F;--muted:#625E57;
  --accent:#5A6755;--accent-strong:#3C4539;--accent-soft:#E6EAE2;
  --code-bg:#1F211F;--code-text:#ECE8E1;--tk-key:#B9C7B2;--tk-str:#E3C9A0;--tk-num:#D9A48F;--tk-lit:#9FB7C9;
  --serif:'Cormorant Garamond',Georgia,serif;--sans:'Jost',system-ui,sans-serif;
  --mono:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
  color-scheme:light;
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){
  --bg:#171917;--surface:#1F221F;--line:#2F332E;--text:#ECE8E1;--muted:#A8A399;
  --accent:#A9B8A2;--accent-strong:#C9D4C3;--accent-soft:#262B25;--code-bg:#0F110F;color-scheme:dark}}
:root[data-theme="dark"]{
  --bg:#171917;--surface:#1F221F;--line:#2F332E;--text:#ECE8E1;--muted:#A8A399;
  --accent:#A9B8A2;--accent-strong:#C9D4C3;--accent-soft:#262B25;--code-bg:#0F110F;color-scheme:dark}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:5rem}
body{background:var(--bg);color:var(--text);font:400 16px/1.7 var(--sans);-webkit-font-smoothing:antialiased}
a{color:var(--accent-strong);text-decoration:underline;text-decoration-color:var(--line);text-underline-offset:3px}
a:hover{text-decoration-color:currentColor}
code{font:0.86em/1.5 var(--mono);background:var(--accent-soft);color:var(--text);padding:.1em .4em;border-radius:4px;overflow-wrap:anywhere}
.topbar{position:sticky;top:0;z-index:10;background:color-mix(in srgb,var(--bg) 92%,transparent);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
.topbar-inner{max-width:1180px;margin:0 auto;padding:.9rem 1rem;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.brand{font:500 1.35rem/1 var(--serif);color:var(--text);text-decoration:none;letter-spacing:.01em}
.brand span{color:var(--muted);font:400 .75rem/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;margin-left:.35rem}
.topbar nav{display:flex;gap:1.25rem;font-size:.85rem}
.topbar nav a{color:var(--muted);text-decoration:none}
.topbar nav a:hover{color:var(--text)}
.layout{max-width:1180px;margin:0 auto;padding:0 1rem 5rem;display:grid;grid-template-columns:minmax(0,1fr);gap:3rem}
@media (min-width:1000px){.layout{grid-template-columns:210px minmax(0,1fr);gap:4rem;padding-top:1rem}}
.toc{display:none}
@media (min-width:1000px){.toc{display:block;position:sticky;top:5.5rem;align-self:start;font-size:.88rem}
  .toc p{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:.8rem}
  .toc ol{list-style:none;border-left:1px solid var(--line)}
  .toc a{display:block;padding:.28rem 0 .28rem 1rem;margin-left:-1px;border-left:1px solid transparent;color:var(--muted);text-decoration:none}
  .toc a:hover{color:var(--text);border-left-color:var(--accent)}}
main{max-width:780px;min-width:0}
.hero{padding:3.5rem 0 2.5rem;border-bottom:1px solid var(--line)}
.kicker{font-size:.75rem;letter-spacing:.16em;text-transform:uppercase;color:var(--accent)}
h1{font:500 clamp(2.6rem,6vw,3.6rem)/1.05 var(--serif);margin:.6rem 0 1rem;letter-spacing:-.01em}
.lead{font-size:1.1rem;color:var(--muted);max-width:60ch}
.facts{display:flex;flex-wrap:wrap;gap:1px;background:var(--line);border:1px solid var(--line);border-radius:10px;overflow:hidden;margin-top:2rem}
.facts div{flex:1 1 130px;background:var(--surface);padding:.85rem 1rem}
.facts dt{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.facts dd{font-weight:500;margin-top:.15rem;white-space:nowrap}
#dataset td code{white-space:nowrap;overflow-wrap:normal}
section{padding-top:3rem}
h2{font:500 2rem/1.15 var(--serif);margin-bottom:1rem}
h3{font:500 1.35rem/1.2 var(--serif);margin:2rem 0 .75rem}
p+p,p+ul,ul+p{margin-top:.9rem}
main ul{padding-left:1.2rem}
main li{margin:.3rem 0}
.endpoint{display:flex;align-items:center;gap:.75rem;flex-wrap:wrap;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;margin:1rem 0}
.method{font:600 .75rem/1 var(--mono);letter-spacing:.06em;background:var(--accent);color:var(--bg);padding:.4rem .55rem;border-radius:5px}
.endpoint code{background:none;padding:0;font-size:.95rem}
.code{position:relative;margin:1rem 0}
.code .label{display:block;font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:.35rem}
pre{background:var(--code-bg);color:var(--code-text);border-radius:10px;padding:1.1rem 1.2rem;overflow-x:auto;font:.84rem/1.6 var(--mono);tab-size:2}
pre code{background:none;color:inherit;padding:0;font-size:inherit;overflow-wrap:normal}
.tk-key{color:var(--tk-key)}.tk-str{color:var(--tk-str)}.tk-num{color:var(--tk-num)}.tk-lit{color:var(--tk-lit)}
.copy{position:absolute;right:.6rem;top:1.9rem;font:500 .72rem/1 var(--sans);letter-spacing:.06em;background:transparent;color:var(--code-text);border:1px solid #ffffff33;border-radius:5px;padding:.4rem .6rem;cursor:pointer;opacity:.75}
.copy:hover{opacity:1}
.table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:10px;margin:1rem 0}
table{border-collapse:collapse;width:100%;font-size:.9rem}
th,td{text-align:left;vertical-align:top;padding:.65rem .9rem;border-bottom:1px solid var(--line)}
th{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:500;background:var(--surface);white-space:nowrap}
tr:last-child td{border-bottom:0}
td.num{white-space:nowrap;font-variant-numeric:tabular-nums}
.type{font:.8rem var(--mono);color:var(--accent-strong);white-space:nowrap}
.muted{color:var(--muted)}
.note{border-left:3px solid var(--accent);background:var(--surface);padding:.9rem 1.1rem;border-radius:0 8px 8px 0;margin:1.2rem 0;font-size:.95rem}
footer{border-top:1px solid var(--line);margin-top:4rem;padding-top:1.5rem;font-size:.85rem;color:var(--muted)}
@media (max-width:640px){.topbar nav a:not(:last-child){display:none}.hero{padding-top:2.5rem}h2{font-size:1.75rem}}
</style>
</head>
<body data-pagefind-ignore="all">
<header class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="/">S'Estepa Design <span>Developers</span></a>
    <nav aria-label="API resources">
      <a href="/api/openapi.json">OpenAPI</a>
      <a href="/.well-known/api-catalog">API catalog</a>
      <a href="/api/projects.json">JSON feed</a>
    </nav>
  </div>
</header>

<div class="layout">
  <aside class="toc" aria-label="On this page">
    <p>On this page</p>
    <ol>
      <li><a href="#overview">Overview</a></li>
      <li><a href="#quick-start">Quick start</a></li>
      <li><a href="#endpoint">Endpoint</a></li>
      <li><a href="#schema">Response schema</a></li>
      <li><a href="#example">Example</a></li>
      <li><a href="#dataset">Current dataset</a></li>
      <li><a href="#http">HTTP behaviour</a></li>
      <li><a href="#discovery">Machine-readable</a></li>
      <li><a href="#usage">Usage &amp; contact</a></li>
    </ol>
  </aside>

  <main>
    <div class="hero">
      <p class="kicker">API reference · v1</p>
      <h1>Projects API</h1>
      <p class="lead">A read-only JSON feed of the gardens S'Estepa Design has designed and built in Mallorca: names, locations, planting, canonical pages and cover photography, in English, Spanish and German.</p>
      <dl class="facts">
        <div><dt>Base URL</dt><dd>design.sestepa.com</dd></div>
        <div><dt>Format</dt><dd>JSON, UTF-8</dd></div>
        <div><dt>Auth</dt><dd>None</dd></div>
        <div><dt>Projects</dt><dd>${payload.count}</dd></div>
        <div><dt>Last build</dt><dd>${esc(buildLabel)}</dd></div>
      </dl>
    </div>

    <section id="overview">
      <h2>Overview</h2>
      <p>The API exposes a single resource: the published portfolio. It is generated from the same data that renders the website, and is rebuilt on every deploy, so it always matches what is live on <a href="/portfolio/">the portfolio</a>. Projects that are not published on the site are not included.</p>
      <ul>
        <li><strong>Read-only.</strong> One <code>GET</code> endpoint; there is nothing to create, update or delete.</li>
        <li><strong>Open.</strong> No key, no sign-up, and cross-origin requests are allowed (<code>Access-Control-Allow-Origin: *</code>).</li>
        <li><strong>Multilingual.</strong> Every project carries texts and URLs in ${API_LANGS.map((l) => LANG_NAMES[l]).join(', ').replace(/, ([^,]*)$/, ' and $1')} (<code>${API_LANGS.join('</code>, <code>')}</code>).</li>
      </ul>
    </section>

    <section id="quick-start">
      <h2>Quick start</h2>
      <div class="code"><span class="label">cURL</span><pre><code>curl -s ${endpoint}</code></pre></div>
      <div class="code"><span class="label">JavaScript</span><pre><code>const res = await fetch('${endpoint}');
const { count, projects } = await res.json();
console.log(count, projects.map((p) =&gt; p.translations.en.title));</code></pre></div>
      <div class="code"><span class="label">Python</span><pre><code>import requests

data = requests.get('${endpoint}', timeout=10).json()
for p in data['projects']:
    print(p['slug'], p['year'], p['translations']['es']['title'])</code></pre></div>
    </section>

    <section id="endpoint">
      <h2>Endpoint</h2>
      <div class="endpoint"><span class="method">GET</span><code>/api/projects.json</code></div>
      <p>Returns the complete list of published projects in one response. The endpoint takes no parameters; pagination, filtering and sorting are left to the client, as the full list is small (${payload.count} items).</p>
      <p>The order of <code>projects</code> is not significant. Sort client-side, for example by <code>year</code> or <code>slug</code>.</p>
    </section>

    <section id="schema">
      <h2>Response schema</h2>
      <h3>Top level</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>generatedAt</code></td><td class="type">string (date-time)</td><td>When this snapshot was built, ISO 8601 in UTC.</td></tr>
          <tr><td><code>count</code></td><td class="type">integer</td><td>Number of items in <code>projects</code>.</td></tr>
          <tr><td><code>projects</code></td><td class="type">Project[]</td><td>The published projects.</td></tr>
        </tbody>
      </table></div>

      <h3>Project</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>slug</code></td><td class="type">string</td><td>Stable identifier of the project. Use it as the key when storing or merging data.</td></tr>
          <tr><td><code>url</code></td><td class="type">string (URI)</td><td>Canonical project page in English. Localized pages are under <code>translations</code>.</td></tr>
          <tr><td><code>year</code></td><td class="type">string</td><td>Project year, four digits (e.g. <code>"2026"</code>).</td></tr>
          <tr><td><code>size</code></td><td class="type">string | null</td><td>Garden surface as a display string (e.g. <code>"18,000 m²"</code>). <code>null</code> when the surface has not been recorded in the dataset.</td></tr>
          <tr><td><code>translations</code></td><td class="type">object</td><td>One <em>Translation</em> object per language, keyed <code>${API_LANGS.join('</code>, <code>')}</code>. All three are always present.</td></tr>
          <tr><td><code>coverImage</code></td><td class="type">string (URI)</td><td>Absolute URL of the project's cover photograph.</td></tr>
        </tbody>
      </table></div>

      <h3>Translation</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>title</code></td><td class="type">string</td><td>Project name in this language.</td></tr>
          <tr><td><code>subtitle</code></td><td class="type">string</td><td>One-line editorial summary of the design.</td></tr>
          <tr><td><code>category</code></td><td class="type">string</td><td>Project type, localized (e.g. <em>Residential Garden</em>, <em>Jardín Residencial</em>).</td></tr>
          <tr><td><code>location</code></td><td class="type">string</td><td>Place name, localized.</td></tr>
          <tr><td><code>botanical</code></td><td class="type">string</td><td>Comma-separated list of the main plant species, by botanical name.</td></tr>
          <tr><td><code>url</code></td><td class="type">string (URI)</td><td>Canonical project page in this language.</td></tr>
        </tbody>
      </table></div>
    </section>

    <section id="example">
      <h2>Example response</h2>
      <p>The first entry below is the real <code>${esc(sample.slug)}</code> record from the current build; the remaining projects are omitted for length.</p>
      <div class="code"><span class="label">200 OK · application/json</span><pre><code>${highlightJson(exampleJson).replace(/\/\* … \d+ more projects \*\//, (m) => `<span class="muted">${m}</span>`)}</code></pre></div>
    </section>

    <section id="dataset">
      <h2>Current dataset</h2>
      <p>The ${payload.count} projects returned by the endpoint as of this build, with their English titles. ${withSize === 0 ? 'The <code>size</code> field is not yet recorded for any project and is returned as <code>null</code>.' : `The <code>size</code> field is recorded for ${withSize} of ${payload.count} projects; the rest return <code>null</code>.`}</p>
      <div class="table-wrap"><table>
        <thead><tr><th>slug</th><th>Title</th><th>Category</th><th>Location</th><th>Year</th><th>Size</th></tr></thead>
        <tbody>
${rows}
        </tbody>
      </table></div>
    </section>

    <section id="http">
      <h2>HTTP behaviour</h2>
      <div class="table-wrap"><table>
        <thead><tr><th>Aspect</th><th>Behaviour</th></tr></thead>
        <tbody>
          <tr><td>Status codes</td><td><code>200</code> with the full list; <code>304</code> for a conditional request that matches; <code>404</code> for any other path under <code>/api/</code>; <code>405</code> for methods other than <code>GET</code> and <code>HEAD</code>.</td></tr>
          <tr><td>Caching</td><td><code>Cache-Control: public, max-age=0, must-revalidate</code>. Send the <code>ETag</code> back as <code>If-None-Match</code> to receive <code>304 Not Modified</code> when nothing has changed.</td></tr>
          <tr><td>CORS</td><td><code>Access-Control-Allow-Origin: *</code>. The feed can be read directly from a browser on any origin.</td></tr>
          <tr><td>Rate limits</td><td>No API-specific limit. Requests are served from Cloudflare's edge like the rest of the site; polling more than once an hour brings no benefit, since the data only changes on deploy.</td></tr>
          <tr><td>Versioning</td><td>This is version 1. This page and the OpenAPI description are generated from the same build as the feed, so they always describe the fields it actually returns.</td></tr>
        </tbody>
      </table></div>
    </section>

    <section id="discovery">
      <h2>Machine-readable resources</h2>
      <div class="table-wrap"><table>
        <thead><tr><th>Resource</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td><a href="/api/openapi.json"><code>/api/openapi.json</code></a></td><td>OpenAPI 3.1 description of the endpoint and its schemas.</td></tr>
          <tr><td><a href="/.well-known/api-catalog"><code>/.well-known/api-catalog</code></a></td><td>API catalog (RFC 9727) linking the feed to this page and to the OpenAPI description.</td></tr>
          <tr><td><a href="/llms.txt"><code>/llms.txt</code></a></td><td>Plain-text summary of the studio for language models.</td></tr>
          <tr><td><code>Accept: text/markdown</code></td><td>Any HTML page on the site, this one included, is returned as Markdown when requested with this header.</td></tr>
        </tbody>
      </table></div>
    </section>

    <section id="usage">
      <h2>Usage &amp; contact</h2>
      <p>The data is published so that it can be read, cited and linked. When quoting a project, link to its <code>url</code>. Texts and photographs remain © S'Estepa Jardineria Integral SLU; for reuse of images or editorial material, please write to the studio first.</p>
      <p>Questions, corrections or integration requests: <a href="mailto:sofia@sestepa.com">sofia@sestepa.com</a> · <a href="/contact/">contact page</a>.</p>
    </section>

    <footer>S'Estepa Design · Carrer dels Menestrals, 5, 07300 Inca, Mallorca · Generated ${esc(payload.generatedAt)}</footer>
  </main>
</div>

<script>
document.querySelectorAll('.code').forEach(function (box) {
  var pre = box.querySelector('pre');
  if (!pre || !navigator.clipboard) return;
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'copy';
  btn.textContent = 'Copy';
  btn.addEventListener('click', function () {
    navigator.clipboard.writeText(pre.innerText).then(function () {
      btn.textContent = 'Copied';
      setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
    });
  });
  box.appendChild(btn);
});
</script>
</body>
</html>
`;

  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
};
