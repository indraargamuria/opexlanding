import { Env, json, err, isAdmin, slugify } from '../../_lib';

// List all posts (including drafts) for admin
export const onRequestGet: PagesFunction<Env> = async ({ env, request }) => {
  if (!(await isAdmin(request, env))) return err('unauthorized', 401);
  try {
    const { results } = await env.DB.prepare(
      `SELECT id, slug, title, excerpt, tags, author_name, status, published_at, created_at
       FROM posts ORDER BY created_at DESC`
    ).all();
    return json(results || []);
  } catch {
    return err('failed', 500);
  }
};

// Create a new post
export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!(await isAdmin(request, env))) return err('unauthorized', 401);
  const body = await request.json().catch(() => null);
  if (!body?.title) return err('title required', 400);
  const slug = body.slug || slugify(body.title);
  const tags = Array.isArray(body.tags) ? body.tags.join(',') : (body.tags || '');
  try {
    const { meta } = await env.DB.prepare(
      `INSERT INTO posts (slug, title, excerpt, body_md, cover_image, tags, author_name, author_role, status, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`
    ).bind(
      slug, body.title, body.excerpt || '', body.body_md || '', body.cover_image || '',
      tags, body.author_name || 'OpexCG Team', body.author_role || '',
      body.status || 'draft'
    ).run();
    return json({ id: meta.last_row_id, slug }, 201);
  } catch (e: any) {
    if (String(e.message || '').includes('UNIQUE')) return err('slug already exists', 409);
    return err('failed to create', 500);
  }
};
