import { Env, json, err } from '../_lib';

export const onRequestGet: PagesFunction<Env> = async ({ env, params }) => {
  const slug = String(params.slug || '');
  try {
    const row = await env.DB.prepare(
      `SELECT id, slug, title, excerpt, body_md, cover_image, tags, author_name, author_role, published_at
       FROM posts WHERE slug = ? AND status = 'published'`
    ).bind(slug).first();
    if (!row) return err('not found', 404);
    return json(row);
  } catch {
    return err('failed to fetch post', 500);
  }
};
