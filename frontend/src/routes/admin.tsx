import { useEffect, useState } from 'react';
import { createRoute } from '@tanstack/react-router';
import Markdown from 'react-markdown';
import { Route as rootRoute } from './__root';
import {
  adminVerify, adminListPosts, adminCreatePost, adminUpdatePost, adminDeletePost,
  adminListCaseStudies, adminCreateCaseStudy, adminUpdateCaseStudy, adminDeleteCaseStudy,
  type AdminPost, type AdminCaseStudy,
} from '../lib/api';

type Tab = 'posts' | 'case-studies';

function AdminPage() {
  const [pw, setPw] = useState(() => sessionStorage.getItem('admin_pw') || '');
  const [authenticated, setAuthenticated] = useState(false);
  const [tab, setTab] = useState<Tab>('posts');
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [caseStudies, setCaseStudies] = useState<AdminCaseStudy[]>([]);
  const [editing, setEditing] = useState<Record<string, unknown> | null>(null);
  const [editingType, setEditingType] = useState<'post' | 'cs' | null>(null);

  // Auth
  const doLogin = async () => {
    const res = await adminVerify(pw).catch(() => null);
    if (res?.valid) { sessionStorage.setItem('admin_pw', pw); setAuthenticated(true); }
    else alert('Wrong password');
  };
  useEffect(() => {
    if (authenticated) {
      if (tab === 'posts') adminListPosts().then(setPosts).catch(() => {});
      else adminListCaseStudies().then(setCaseStudies).catch(() => {});
    }
  }, [authenticated, tab]);

  if (!authenticated) {
    return (
      <div className="h-full flex items-center justify-center bg-slate-50">
        <div className="bg-white border border-border rounded-xl p-6 w-full max-w-sm flex flex-col gap-3">
          <h1 className="text-[1.125rem] font-heading font-semibold text-dark-text">Admin Login</h1>
          <input type="password" placeholder="Password" value={pw} onChange={(e) => setPw(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && doLogin()}
            className="border border-border rounded-md px-3 py-2 text-[0.8125rem] outline-none focus:border-brand" />
          <button onClick={doLogin} className="bg-brand text-white text-[0.8125rem] font-heading font-semibold px-4 py-2 rounded-md hover:bg-brand-hover">Login</button>
        </div>
      </div>
    );
  }

  const refresh = () => {
    if (tab === 'posts') adminListPosts().then(setPosts).catch(() => {});
    else adminListCaseStudies().then(setCaseStudies).catch(() => {});
    setEditing(null); setEditingType(null);
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-[1.25rem] font-heading font-semibold text-dark-text">Content Admin</h1>
          <div className="flex gap-2">
            <button onClick={() => { sessionStorage.removeItem('admin_pw'); setAuthenticated(false); }}
              className="text-[0.75rem] text-muted hover:text-dark-text">Logout</button>
          </div>
        </div>
        <div className="flex gap-1 bg-slate-100 rounded-lg p-1 w-fit">
          {(['posts', 'case-studies'] as Tab[]).map((t) => (
            <button key={t} onClick={() => { setTab(t); setEditing(null); setEditingType(null); }}
              className={`text-[0.75rem] font-heading font-medium px-3 py-1.5 rounded-md transition-colors ${tab === t ? 'bg-white shadow-sm text-dark-text' : 'text-muted hover:text-dark-text'}`}>
              {t === 'posts' ? 'Posts' : 'Case Studies'}
            </button>
          ))}
        </div>
        <button onClick={() => { setEditing({ status: 'draft' }); setEditingType(tab === 'posts' ? 'post' : 'cs'); }}
          className="self-start bg-accent text-dark-navy text-[0.75rem] font-heading font-semibold px-4 py-2 rounded-md hover:bg-accent-hover">
          + New {tab === 'posts' ? 'Post' : 'Case Study'}
        </button>
        {editing && <Editor type={editingType!} data={editing} onSaved={refresh} onCancel={() => { setEditing(null); setEditingType(null); }} />}
        {tab === 'posts' && !editing && (
          <div className="flex flex-col gap-2">
            {posts.map((p) => (
              <div key={p.id} className="flex items-center gap-3 bg-white border border-border rounded-lg p-3">
                <span className={`text-[0.625rem] px-1.5 py-0.5 rounded ${p.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{p.status}</span>
                <span className="text-[0.8125rem] font-heading font-semibold text-dark-text flex-1">{p.title}</span>
                <button onClick={() => { setEditing(p as unknown as Record<string, unknown>); setEditingType('post'); }} className="text-[0.6875rem] text-accent hover:underline">Edit</button>
                <button onClick={async () => { if (confirm('Delete?')) { await adminDeletePost(p.id); refresh(); } }} className="text-[0.6875rem] text-red-500 hover:underline">Delete</button>
              </div>
            ))}
          </div>
        )}
        {tab === 'case-studies' && !editing && (
          <div className="flex flex-col gap-2">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="flex items-center gap-3 bg-white border border-border rounded-lg p-3">
                <span className={`text-[0.625rem] px-1.5 py-0.5 rounded ${cs.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{cs.status}</span>
                <span className="text-[0.8125rem] font-heading font-semibold text-dark-text flex-1">{cs.client_name}</span>
                <button onClick={() => { setEditing(cs as unknown as Record<string, unknown>); setEditingType('cs'); }} className="text-[0.6875rem] text-accent hover:underline">Edit</button>
                <button onClick={async () => { if (confirm('Delete?')) { await adminDeleteCaseStudy(cs.id); refresh(); } }} className="text-[0.6875rem] text-red-500 hover:underline">Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Editor sub-component ───
function Editor({ type, data, onSaved, onCancel }: { type: 'post' | 'cs'; data: Record<string, unknown>; onSaved: () => void; onCancel: () => void }) {
  const [form, setForm] = useState(data);
  const [saving, setSaving] = useState(false);
  const [previewMd, setPreviewMd] = useState(false);
  const set = (k: string, v: unknown) => setForm((f) => ({ ...f, [k]: v }));
  const save = async () => {
    setSaving(true);
    try {
      if (type === 'post') { if (form.id) await adminUpdatePost(form.id as number, form); else await adminCreatePost(form); }
      else { if (form.id) await adminUpdateCaseStudy(form.id as number, form); else await adminCreateCaseStudy(form); }
      onSaved();
    } catch (e: unknown) { alert(`Save failed: ${e}`); }
    setSaving(false);
  };
  const inputCls = "border border-border rounded-md px-3 py-2 text-[0.8125rem] outline-none focus:border-brand w-full";
  const L = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <label className="text-[0.6875rem] font-heading font-semibold text-dark-text flex flex-col gap-1">{label}{children}</label>
  );
  return (
    <div className="bg-white border border-border rounded-xl p-5 flex flex-col gap-3">
      <h3 className="text-[0.875rem] font-heading font-semibold text-dark-text">{form.id ? 'Edit' : 'New'} {type === 'post' ? 'Post' : 'Case Study'}</h3>
      {type === 'post' ? (
        <>
          <L label="Title"><input className={inputCls} value={String(form.title || '')} onChange={(e) => set('title', e.target.value)} /></L>
          <L label="Excerpt"><textarea className={inputCls + ' h-16'} value={String(form.excerpt || '')} onChange={(e) => set('excerpt', e.target.value)} /></L>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-[0.6875rem] font-heading font-semibold text-dark-text">Body (Markdown)</label>
              <button type="button" onClick={() => setPreviewMd(!previewMd)} className="text-[0.625rem] text-blue hover:underline cursor-pointer">
                {previewMd ? 'Edit' : 'Preview'}
              </button>
            </div>
            {previewMd ? (
              <div className="border border-border rounded-md p-3 h-48 overflow-y-auto prose prose-sm max-w-none">
                <Markdown>{String(form.body_md || '')}</Markdown>
              </div>
            ) : (
              <textarea className={inputCls + ' h-48 font-mono text-[0.75rem]'} value={String(form.body_md || '')} onChange={(e) => set('body_md', e.target.value)} />
            )}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <L label="Author Name"><input className={inputCls} value={String(form.author_name || 'OpexCG Team')} onChange={(e) => set('author_name', e.target.value)} /></L>
            <L label="Author Role"><input className={inputCls} value={String(form.author_role || '')} onChange={(e) => set('author_role', e.target.value)} /></L>
          </div>
          <L label="Tags"><input className={inputCls} value={String(form.tags || '')} onChange={(e) => set('tags', e.target.value)} /></L>
        </>
      ) : (
        <>
          <L label="Client Name"><input className={inputCls} value={String(form.client_name || '')} onChange={(e) => set('client_name', e.target.value)} /></L>
          <L label="Industry"><input className={inputCls} value={String(form.industry || '')} onChange={(e) => set('industry', e.target.value)} /></L>
          <L label="Summary"><textarea className={inputCls + ' h-16'} value={String(form.summary || '')} onChange={(e) => set('summary', e.target.value)} /></L>
          <L label="Challenge"><textarea className={inputCls + ' h-16'} value={String(form.challenge || '')} onChange={(e) => set('challenge', e.target.value)} /></L>
          <L label="Solution"><textarea className={inputCls + ' h-16'} value={String(form.solution || '')} onChange={(e) => set('solution', e.target.value)} /></L>
          <L label="Results (Markdown)"><textarea className={inputCls + ' h-32 font-mono text-[0.75rem]'} value={String(form.results_md || '')} onChange={(e) => set('results_md', e.target.value)} /></L>
          <L label="Metrics JSON"><textarea className={inputCls + ' h-16 font-mono text-[0.75rem]'} value={String(form.metrics || '[]')} onChange={(e) => set('metrics', e.target.value)} /></L>
        </>
      )}
      <L label="Status">
        <select className={inputCls} value={String(form.status || 'draft')} onChange={(e) => set('status', e.target.value)}>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </L>
      <div className="flex items-center gap-2 mt-1">
        <button onClick={save} disabled={saving} className="bg-accent text-dark-navy text-[0.75rem] font-heading font-semibold px-4 py-2 rounded-md hover:bg-accent-hover disabled:opacity-50">{saving ? 'Saving...' : 'Save'}</button>
        <button onClick={onCancel} className="text-[0.75rem] text-muted hover:text-dark-text px-3 py-2">Cancel</button>
      </div>
    </div>
  );
}

export const Route = createRoute({ getParentRoute: () => rootRoute, path: '/admin', component: AdminPage });
