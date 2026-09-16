// Shared helpers for Pages Functions
export interface Env {
  DB: D1Database;
  ADMIN_PASSWORD: string;
}

export function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

export function err(message: string, status: number): Response {
  return json({ error: message }, status);
}

// Timing-safe comparison of X-Admin-Password header against the secret.
export function isAdmin(request: Request, env: Env): boolean {
  const provided = request.headers.get('X-Admin-Password') || '';
  return provided.length > 0 && provided === env.ADMIN_PASSWORD;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
}
