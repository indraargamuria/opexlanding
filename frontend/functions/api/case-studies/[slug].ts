import { Env, json, err } from '../_lib';

export const onRequestGet: PagesFunction<Env> = async ({ env, params }) => {
  const slug = String(params.slug || '');
  try {
    const row = await env.DB.prepare(
      `SELECT id, slug, client_name, industry, summary, challenge, solution,
              results_md, metrics, cover_image, published_at
       FROM case_studies WHERE slug = ? AND status = 'published'`
    ).bind(slug).first();
    if (!row) return err('not found', 404);
    return json(row);
  } catch {
    return err('failed to fetch case study', 500);
  }
};
