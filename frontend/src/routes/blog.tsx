import { useEffect, useState } from 'react';
import { createRoute, Link } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { listPosts, type PostSummary } from '../lib/api';

function BlogPage() {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listPosts().then(setPosts).catch(() => {}).finally(() => setLoading(false));
  }, []);

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6">
        <div>
          <span className="text-[0.7rem] font-semibold tracking-wide uppercase text-accent">BLOG</span>
          <h1 className="text-[1.5rem] font-bold text-dark-text tracking-tight mt-1">Insights & Updates</h1>
          <p className="text-[0.8125rem] text-muted mt-1">Maintenance insights, product updates, and operational excellence.</p>
        </div>
        {loading && <p className="text-[0.8125rem] text-muted">Loading...</p>}
        {!loading && posts.length === 0 && (
          <div className="bg-white border border-border rounded-xl p-8 text-center">
            <p className="text-[0.875rem] text-muted">No posts yet. Check back soon.</p>
          </div>
        )}
        {posts.map((p) => (
          <Link key={p.slug} to={`/blog/$slug`} params={{ slug: p.slug }}
            className="block bg-white border border-border rounded-xl p-5 hover:shadow-md transition-shadow no-underline">
            <h2 className="text-[1rem] font-heading font-semibold text-dark-text">{p.title}</h2>
            <p className="text-[0.8125rem] text-muted mt-1">{p.excerpt}</p>
            <div className="flex items-center gap-3 mt-3 text-[0.6875rem] text-muted">
              <span>{p.author_name}</span>
              <span>·</span>
              <time>{p.published_at?.slice(0, 10)}</time>
              {p.tags && <><span>·</span><span>{p.tags}</span></>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const Route = createRoute({ getParentRoute: () => rootRoute, path: '/blog', component: BlogPage });
