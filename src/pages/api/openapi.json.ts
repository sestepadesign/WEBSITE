import type { APIRoute } from 'astro';
import { SITE, API_LANGS, buildProjectsPayload } from '../../lib/projects-api';

// OpenAPI 3.1 description of the Projects API, linked from
// /.well-known/api-catalog as `service-desc`. The example is the real first
// project from the same build, not hand-written sample data.
export const GET: APIRoute = () => {
  const payload = buildProjectsPayload();
  const example = { ...payload, projects: payload.projects.slice(0, 1) };

  const translation = {
    type: 'object',
    required: ['title', 'subtitle', 'category', 'location', 'botanical', 'url'],
    properties: {
      title: { type: 'string', description: 'Project name in this language.' },
      subtitle: { type: 'string', description: 'One-line editorial summary of the design.' },
      category: { type: 'string', description: 'Project type, localized (e.g. "Residential Garden").' },
      location: { type: 'string', description: 'Place name, localized (e.g. "Sant Llorenç, Mallorca").' },
      botanical: { type: 'string', description: 'Comma-separated list of the main plant species (botanical names).' },
      url: { type: 'string', format: 'uri', description: 'Canonical project page in this language.' },
    },
  };

  const spec = {
    openapi: '3.1.0',
    info: {
      title: "S'Estepa Design — Projects API",
      version: '1.0.0',
      summary: 'Read-only portfolio of built garden projects in Mallorca, in English, Spanish and German.',
      description:
        "Public JSON feed of the S'Estepa Design garden portfolio, regenerated on every site deploy. " +
        'No authentication. Unpublished projects are excluded. Human-readable reference: ' + SITE + '/api/docs',
      contact: { name: "S'Estepa Design", url: SITE + '/contact/', email: 'sofia@sestepa.com' },
    },
    externalDocs: { description: 'API reference', url: SITE + '/api/docs' },
    servers: [{ url: SITE }],
    paths: {
      '/api/projects.json': {
        get: {
          operationId: 'listProjects',
          summary: 'List all published projects',
          description:
            'Returns every published project with its localized texts, canonical URLs and cover image. ' +
            'Supports conditional requests via ETag / If-None-Match.',
          responses: {
            '200': {
              description: 'The current portfolio.',
              headers: {
                ETag: { schema: { type: 'string' }, description: 'Entity tag for conditional requests.' },
              },
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ProjectList' },
                  example,
                },
              },
            },
            '304': { description: 'Not modified since the ETag sent in If-None-Match.' },
          },
        },
      },
    },
    components: {
      schemas: {
        ProjectList: {
          type: 'object',
          required: ['generatedAt', 'count', 'projects'],
          properties: {
            generatedAt: { type: 'string', format: 'date-time', description: 'Build time of this snapshot (UTC).' },
            count: { type: 'integer', minimum: 0, description: 'Number of items in `projects`.' },
            projects: { type: 'array', items: { $ref: '#/components/schemas/Project' } },
          },
        },
        Project: {
          type: 'object',
          required: ['slug', 'url', 'year', 'size', 'translations', 'coverImage'],
          properties: {
            slug: { type: 'string', description: 'Stable identifier of the project.' },
            url: { type: 'string', format: 'uri', description: 'Canonical project page (English).' },
            year: { type: 'string', pattern: '^[0-9]{4}$', description: 'Project year.' },
            size: {
              type: ['string', 'null'],
              description: 'Garden surface as a display string (e.g. "18,000 m²"); null when not recorded.',
            },
            translations: {
              type: 'object',
              required: [...API_LANGS],
              properties: Object.fromEntries(API_LANGS.map((lang) => [lang, { $ref: '#/components/schemas/ProjectTranslation' }])),
            },
            coverImage: { type: 'string', format: 'uri', description: 'Absolute URL of the cover photograph.' },
          },
        },
        ProjectTranslation: translation,
      },
    },
  };

  return new Response(JSON.stringify(spec, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
