// Cloudflare Pages Function: Markdown for Agents content negotiation.
// When a client explicitly sends `Accept: text/markdown`, serve the page's
// content as markdown instead of HTML. Browsers never send that Accept
// value, so this short-circuits to a no-op for every normal page view —
// the static asset path (and Lighthouse scores) is untouched.
import { htmlToMarkdown, estimateTokens } from './_lib/html-to-markdown.js';

export const onRequest = async (context) => {
  const accept = context.request.headers.get('Accept') || '';
  const wantsMarkdown = accept.includes('text/markdown');

  if (!wantsMarkdown || context.request.method !== 'GET') {
    return context.next();
  }

  const response = await context.next();
  const contentType = response.headers.get('Content-Type') || '';
  if (!contentType.includes('text/html')) {
    return response;
  }

  const html = await response.text();
  const markdown = htmlToMarkdown(html);

  return new Response(markdown, {
    status: response.status,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'X-Markdown-Tokens': String(estimateTokens(markdown)),
      'Vary': 'Accept',
    },
  });
};
