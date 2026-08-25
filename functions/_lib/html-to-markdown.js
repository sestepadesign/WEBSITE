// Minimal, dependency-free HTML → Markdown converter for Markdown-for-Agents
// content negotiation. Runs inside the Cloudflare Pages Functions runtime
// (no DOM available), so this is regex-based rather than parser-based.
// It only needs to handle the tags Astro actually emits for this site's
// page bodies — it is not a general-purpose HTML→MD library.

const ENTITIES = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  '#39': "'",
  apos: "'",
  nbsp: ' ',
};

function decodeEntities(text) {
  return text
    .replace(/&(amp|lt|gt|quot|#39|apos|nbsp);/g, (_, name) => ENTITIES[name])
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function stripTag(html, tag) {
  return html.replace(new RegExp(`<${tag}[^>]*>[\\s\\S]*?</${tag}>`, 'gi'), '');
}

export function htmlToMarkdown(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : html;

  content = stripTag(content, 'script');
  content = stripTag(content, 'style');
  content = stripTag(content, 'noscript');
  content = stripTag(content, 'svg');

  content = content
    .replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level, text) => `\n\n${'#'.repeat(Number(level))} ${text.trim()}\n\n`)
    .replace(/<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => `[${text.trim()}](${href})`)
    .replace(/<img\s[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, (_, src, alt) => `![${alt}](${src})`)
    .replace(/<img\s[^>]*src="([^"]*)"[^>]*\/?>/gi, (_, src) => `![](${src})`)
    .replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, text) => `**${text.trim()}**`)
    .replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, text) => `*${text.trim()}*`)
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, text) => `- ${text.trim()}\n`)
    .replace(/<\/(ul|ol)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|section|article|header|footer|main|figure|figcaption)>/gi, '\n\n')
    .replace(/<[^>]+>/g, '');

  content = decodeEntities(content);

  content = content
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trimEnd())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return content;
}

export function estimateTokens(markdown) {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  return Math.ceil(words / 0.75);
}
