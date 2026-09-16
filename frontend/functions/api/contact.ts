import { Env, json, err } from './_lib';

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const { name, email, message } = await request.json() as Record<string, string>;
    if (!name || !email || !message) return err('name, email, and message are required', 400);

    await env.DB.prepare(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)'
    ).bind(name.trim(), email.trim(), message.trim()).run();

    return json({ ok: true }, 201);
  } catch (e) {
    return err('failed to submit contact form', 500);
  }
};
