import { Env, json } from '../_lib';

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const provided = request.headers.get('X-Admin-Password') || '';
  const ok = provided === env.ADMIN_PASSWORD;
  return ok ? json({ valid: true }) : json({ error: 'unauthorized' }, 401);
};
