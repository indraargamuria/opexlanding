import { Env, json, err } from '../_lib';

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  try {
    const { results } = await env.DB.prepare(
      `SELECT id, slug, title, excerpt, tags, author_name, author_role, published_at
       FROM posts WHERE status = 'published'
       ORDER BY published_at DESC`
    ).all();
    return json(results || []);
  } catch {
    return err('failed to list posts', 500);
  }
};
