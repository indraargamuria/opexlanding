import { useEffect, useState } from 'react';
import { createRoute, Link } from '@tanstack/react-router';
import Markdown from 'react-markdown';
import { Route as rootRoute } from './__root';
import { getPost, type PostFull } from '../lib/api';

function BlogPost({ slug }: { slug: string }) {
  const [post, setPost] = useState<PostFull | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPost(slug).then(setPost).catch(() => setError(true));
  }, [slug]);

  if (error) return <div className="p-8 text-center text-muted">Post not found.</div>;
  if (!post) return <div className="p-8 text-center text-muted">Loading...</div>;

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 py-8 flex flex-col gap-5">
        <Link to="/blog" className="text-[0.75rem] text-blue hover:underline">&larr; All posts</Link>
        <h1 className="text-[1.5rem] font-bold text-dark-text tracking-tight">{post.title}</h1>
        <div className="flex items-center gap-3 text-[0.75rem] text-muted">
          <span className="font-heading font-semibold text-dark-text">{post.author_name}</span>
          {post.author_role && <span className="px-2 py-0.5 rounded-full bg-brand/10 text-brand text-[0.625rem] font-medium">{post.author_role}</span>}
          <time>{post.published_at?.slice(0, 10)}</time>
        </div>
        {post.tags && <div className="flex gap-1">{post.tags.split(',').map(t => <span key={t} className="text-[0.625rem] px-2 py-0.5 rounded bg-slate-100 text-slate-600">{t.trim()}</span>)}</div>}
        <article className="prose prose-sm max-w-none text-dark-text leading-relaxed">
          <Markdown>{post.body_md}</Markdown>
        </article>
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$slug',
  component: () => {
    const { slug } = Route.useParams();
    return <BlogPost slug={slug} />;
  },
});
