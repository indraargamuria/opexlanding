import { Env, json, err, isAdmin } from '../../_lib';

// Update post by id
export const onRequestPut: PagesFunction<Env> = async ({ request, env, params }) => {
  if (!(await isAdmin(request, env))) return err('unauthorized', 401);
  const id = Number(params.id);
  const body = await request.json().catch(() => null);
  if (!body) return err('body required', 400);
  const tags = Array.isArray(body.tags) ? body.tags.join(',') : (body.tags ?? undefined);
  const fields: string[] = [];
  const vals: unknown[] = [];
  for (const [k, v] of Object.entries({ title: body.title, excerpt: body.excerpt, body_md: body.body_md, cover_image: body.cover_image, author_name: body.author_name, author_role: body.author_role })) {
    if (v !== undefined) { fields.push(`${k} = ?`); vals.push(v); }
  }
  if (tags !== undefined) { fields.push('tags = ?'); vals.push(tags); }
  if (body.status) {
    fields.push('status = ?'); vals.push(body.status);
    if (body.status === 'published') { fields.push("published_at = datetime('now')"); }
  }
  if (!fields.length) return err('nothing to update', 400);
  fields.push("updated_at = datetime('now')");
  vals.push(id);
  try {
    const { meta } = await env.DB.prepare(`UPDATE posts SET ${fields.join(', ')} WHERE id = ?`).bind(...vals).run();
    return meta.changes ? json({ ok: true }) : err('not found', 404);
  } catch (e: any) {
    if (String(e.message || '').includes('UNIQUE')) return err('slug conflict', 409);
    return err('failed', 500);
  }
};

// Delete post by id
export const onRequestDelete: PagesFunction<Env> = async ({ env, params, request }) => {
  if (!(await isAdmin(request, env))) return err('unauthorized', 401);
  const id = Number(params.id);
  const { meta } = await env.DB.prepare('DELETE FROM posts WHERE id = ?').bind(id).run();
  return meta.changes ? json({ ok: true }) : err('not found', 404);
};
