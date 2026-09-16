const BASE = '';

async function api<T>(path: string, opts?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, opts);
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  return res.json();
}

// Public
export const listPosts = () => api<PostSummary[]>('/api/posts');
export const getPost = (slug: string) => api<PostFull>(`/api/posts/${slug}`);
export const listCaseStudies = () => api<CaseStudySummary[]>('/api/case-studies');
export const getCaseStudy = (slug: string) => api<CaseStudyFull>(`/api/case-studies/${slug}`);

// Admin
function adminHeaders(): Record<string, string> {
  const pw = typeof sessionStorage !== 'undefined' ? (sessionStorage.getItem('admin_pw') || '') : '';
  return pw ? { 'X-Admin-Password': pw, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
}
export const adminVerify = (pw: string) =>
  api<{ valid: boolean }>('/api/admin/verify', { method: 'POST', headers: { 'X-Admin-Password': pw, 'Content-Type': 'application/json' } });

export const adminListPosts = () => api<AdminPost[]>('/api/admin/posts', { headers: adminHeaders() });
export const adminCreatePost = (data: Record<string, unknown>) =>
  api<{ id: number; slug: string }>('/api/admin/posts', { method: 'POST', headers: adminHeaders(), body: JSON.stringify(data) });
export const adminUpdatePost = (id: number, data: Record<string, unknown>) =>
  api<{ ok: boolean }>(`/api/admin/posts/${id}`, { method: 'PUT', headers: adminHeaders(), body: JSON.stringify(data) });
export const adminDeletePost = (id: number) =>
  api<{ ok: boolean }>(`/api/admin/posts/${id}`, { method: 'DELETE', headers: adminHeaders() });

export const adminListCaseStudies = () => api<AdminCaseStudy[]>('/api/admin/case-studies', { headers: adminHeaders() });
export const adminCreateCaseStudy = (data: Record<string, unknown>) =>
  api<{ id: number; slug: string }>('/api/admin/case-studies', { method: 'POST', headers: adminHeaders(), body: JSON.stringify(data) });
export const adminUpdateCaseStudy = (id: number, data: Record<string, unknown>) =>
  api<{ ok: boolean }>(`/api/admin/case-studies/${id}`, { method: 'PUT', headers: adminHeaders(), body: JSON.stringify(data) });
export const adminDeleteCaseStudy = (id: number) =>
  api<{ ok: boolean }>(`/api/admin/case-studies/${id}`, { method: 'DELETE', headers: adminHeaders() });

// Types
export interface PostSummary { id: number; slug: string; title: string; excerpt: string; tags: string; author_name: string; author_role: string; published_at: string; }
export interface PostFull extends PostSummary { body_md: string; cover_image: string; }
export interface CaseStudySummary { id: number; slug: string; client_name: string; industry: string; summary: string; metrics: string; published_at: string; }
export interface CaseStudyFull extends CaseStudySummary { challenge: string; solution: string; results_md: string; cover_image: string; }
export interface AdminPost extends PostSummary { status: string; created_at: string; }
export interface AdminCaseStudy extends CaseStudySummary { status: string; }
