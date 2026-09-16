import { Env, json, err, isAdmin } from '../../_lib';

export const onRequestPut: PagesFunction<Env> = async ({ request, env, params }) => {
  if (!(await isAdmin(request, env))) return err('unauthorized', 401);
  const id = Number(params.id);
  const body = await request.json().catch(() => null);
  if (!body) return err('body required', 400);
  const fields: string[] = [];
  const vals: unknown[] = [];
  for (const [k, v] of Object.entries({
    client_name: body.client_name, industry: body.industry, summary: body.summary,
    challenge: body.challenge, solution: body.solution, results_md: body.results_md,
    cover_image: body.cover_image,
  })) {
    if (v !== undefined) { fields.push(`${k} = ?`); vals.push(v); }
  }
  if (body.metrics !== undefined) { fields.push('metrics = ?'); vals.push(typeof body.metrics === 'string' ? body.metrics : JSON.stringify(body.metrics)); }
  if (body.status) {
    fields.push('status = ?'); vals.push(body.status);
    if (body.status === 'published') fields.push("published_at = datetime('now')");
  }
  if (!fields.length) return err('nothing to update', 400);
  fields.push("updated_at = datetime('now')");
  vals.push(id);
  const { meta } = await env.DB.prepare(`UPDATE case_studies SET ${fields.join(', ')} WHERE id = ?`).bind(...vals).run();
  return meta.changes ? json({ ok: true }) : err('not found', 404);
};

export const onRequestDelete: PagesFunction<Env> = async ({ env, params, request }) => {
  if (!(await isAdmin(request, env))) return err('unauthorized', 401);
  const { meta } = await env.DB.prepare('DELETE FROM case_studies WHERE id = ?').bind(Number(params.id)).run();
  return meta.changes ? json({ ok: true }) : err('not found', 404);
};
