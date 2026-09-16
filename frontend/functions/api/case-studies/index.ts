import { Env, json, err } from '../_lib';

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  try {
    const { results } = await env.DB.prepare(
      `SELECT id, slug, client_name, industry, summary, metrics, published_at
       FROM case_studies WHERE status = 'published'
       ORDER BY published_at DESC`
    ).all();
    return json(results || []);
  } catch {
    return err('failed to list case studies', 500);
  }
};
