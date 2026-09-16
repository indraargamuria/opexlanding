import { Env, json, err, isAdmin, slugify } from '../../_lib';

export const onRequestGet: PagesFunction<Env> = async ({ env, request }) => {
  if (!(await isAdmin(request, env))) return err('unauthorized', 401);
  const { results } = await env.DB.prepare(
    `SELECT id, slug, client_name, industry, status, published_at FROM case_studies ORDER BY created_at DESC`
  ).all();
  return json(results || []);
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!(await isAdmin(request, env))) return err('unauthorized', 401);
  const body = await request.json().catch(() => null);
  if (!body?.client_name) return err('client_name required', 400);
  const slug = body.slug || slugify(body.client_name);
  const metrics = typeof body.metrics === 'string' ? body.metrics : JSON.stringify(body.metrics || []);
  try {
    const { meta } = await env.DB.prepare(
      `INSERT INTO case_studies (slug, client_name, industry, summary, challenge, solution, results_md, metrics, cover_image, status, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`
    ).bind(
      slug, body.client_name, body.industry || '', body.summary || '', body.challenge || '',
      body.solution || '', body.results_md || '', metrics, body.cover_image || '', body.status || 'draft'
    ).run();
    return json({ id: meta.last_row_id, slug }, 201);
  } catch (e: any) {
    if (String(e.message || '').includes('UNIQUE')) return err('slug already exists', 409);
    return err('failed', 500);
  }
};
