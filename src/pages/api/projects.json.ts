import type { APIRoute } from 'astro';
import { buildProjectsPayload } from '../../lib/projects-api';

export const GET: APIRoute = () =>
  new Response(JSON.stringify(buildProjectsPayload(), null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
