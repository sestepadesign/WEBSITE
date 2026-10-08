# Compara duas pastas dist (baseline vs nova versao). Uso: python scripts/compare-builds.py dist_base dist
# Ver docs/UPGRADE-ASTRO-6-PARA-7-2026-10-08.md
import os, re, hashlib, sys
base = sys.argv[1]; new = sys.argv[2]

def files(root):
    out = {}
    for r, d, f in os.walk(root):
        for n in f:
            p = os.path.join(r, n)
            out[os.path.relpath(p, root).replace(chr(92), '/')] = p
    return out

fb, fn = files(base), files(new)
html_b = {k for k in fb if k.endswith('.html')}
html_n = {k for k in fn if k.endswith('.html')}
print('html only in baseline:', sorted(html_b - html_n)[:10])
print('html only in astro7  :', sorted(html_n - html_b)[:10])
other_b = {k for k in fb if not k.endswith('.html') and '/_astro/' not in '/' + k and not k.startswith('pagefind/')}
other_n = {k for k in fn if not k.endswith('.html') and '/_astro/' not in '/' + k and not k.startswith('pagefind/')}
print('non-html only in baseline:', sorted(other_b - other_n)[:10])
print('non-html only in astro7  :', sorted(other_n - other_b)[:10])

def norm(t):
    t = re.sub(r'(/_astro/[^"\'\s)]*?)\.[A-Za-z0-9_-]{8}\.(css|js)', r'\1.HASH.\2', t)
    t = re.sub(r'data-astro-cid-[a-z0-9]+', 'data-astro-cid-X', t)
    t = re.sub(r'astro-[a-z0-9]{8}', 'astro-X', t)
    t = re.sub(r'\s+', ' ', t)
    return t

def sig(t):
    g = lambda p: (re.findall(p, t) or [''])[0]
    return (
        g(r'<title>([^<]*)'),
        g(r'<meta name="description" content="([^"]*)'),
        g(r'<link rel="canonical" href="([^"]*)'),
        len(re.findall(r'<h1[ >]', t)),
        len(re.findall(r'application/ld\+json', t)),
        sorted(re.findall(r'hreflang="([^"]+)"', t)),
        len(re.findall(r'<img ', t)),
    )

same = diff_meta = diff_body = 0
meta_diffs = []; body_diffs = []
for k in sorted(html_b & html_n):
    a = open(fb[k], encoding='utf8', errors='ignore').read()
    b = open(fn[k], encoding='utf8', errors='ignore').read()
    if sig(a) != sig(b):
        diff_meta += 1; meta_diffs.append(k)
    if norm(a) == norm(b):
        same += 1
    else:
        diff_body += 1; body_diffs.append((k, len(norm(a)), len(norm(b))))
print('pages compared:', len(html_b & html_n))
print('identical after hash-normalising:', same)
print('different body:', diff_body)
print('different SEO signature (title/desc/canonical/h1/ld+json/hreflang/img count):', diff_meta, meta_diffs[:10])
for k, la, lb in body_diffs[:12]:
    print('  body diff', k, la, '->', lb)

# sitemap url sets
def urls(root):
    s = set()
    for k in os.listdir(root):
        if k.startswith('sitemap') and k.endswith('.xml'):
            s |= set(re.findall(r'<loc>([^<]+)', open(os.path.join(root, k), encoding='utf8').read()))
    return s
ub, un = urls(base), urls(new)
print('sitemap urls baseline/astro7:', len(ub), len(un), '| only-b', len(ub - un), '| only-n', len(un - ub))
# redirects/headers identical
for name in ['_redirects', '_headers', 'robots.txt', 'llms.txt']:
    if name in fb and name in fn:
        print(name, 'identical' if open(fb[name], 'rb').read() == open(fn[name], 'rb').read() else 'DIFFERENT')
