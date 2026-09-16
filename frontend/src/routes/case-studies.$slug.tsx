import { useEffect, useState } from 'react';
import { createRoute, Link } from '@tanstack/react-router';
import Markdown from 'react-markdown';
import { Route as rootRoute } from './__root';
import { getCaseStudy, type CaseStudyFull } from '../lib/api';

function CaseStudyDetail({ slug }: { slug: string }) {
  const [cs, setCs] = useState<CaseStudyFull | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCaseStudy(slug).then(setCs).catch(() => setError(true));
  }, [slug]);

  if (error) return <div className="p-8 text-center text-muted">Case study not found.</div>;
  if (!cs) return <div className="p-8 text-center text-muted">Loading...</div>;

  let metrics: { label: string; value: string }[] = [];
  try { metrics = JSON.parse(cs.metrics); } catch {}

  const industryImages: Record<string, string> = {
    'Precision Engineering': '/images/cs-engineering.jpg',
    'Food Manufacturing': '/images/cs-food.jpg',
    'Heavy Equipment': '/images/cs-logistics.jpg',
    'Electronics': '/images/cs-electronics.jpg',
    'Cable Manufacturing': '/images/cs-engineering.jpg',
  };
  const coverImage = Object.entries(industryImages).find(([k]) => cs.industry.includes(k))?.[1] || '/images/hero-factory.jpg';

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-8 flex flex-col gap-5">
        <Link to="/case-studies" className="text-[0.75rem] text-blue hover:underline">&larr; All case studies</Link>
        {coverImage && (
          <img src={coverImage} alt={cs.client_name} className="w-full h-[200px] object-cover rounded-xl" />
        )}
        <div>
          <h1 className="text-[1.5rem] font-bold text-dark-text tracking-tight">{cs.client_name}</h1>
          <p className="text-[0.75rem] text-blue font-medium mt-1">{cs.industry}</p>
        </div>
        <p className="text-[0.875rem] text-muted leading-relaxed">{cs.summary}</p>
        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col items-center px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-[1rem] font-heading font-bold text-dark-text">{m.value}</span>
                <span className="text-[0.625rem] text-muted">{m.label}</span>
              </div>
            ))}
          </div>
        )}
        <section>
          <h2 className="text-[0.9375rem] font-heading font-semibold text-dark-text mb-1">Challenge</h2>
          <p className="text-[0.8125rem] text-muted leading-relaxed">{cs.challenge}</p>
        </section>
        <section>
          <h2 className="text-[0.9375rem] font-heading font-semibold text-dark-text mb-1">Solution</h2>
          <p className="text-[0.8125rem] text-muted leading-relaxed">{cs.solution}</p>
        </section>
        <section>
          <h2 className="text-[0.9375rem] font-heading font-semibold text-dark-text mb-1">Results</h2>
          <article className="prose prose-sm max-w-none text-dark-text">
            <Markdown>{cs.results_md}</Markdown>
          </article>
        </section>
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/case-studies/$slug',
  component: () => {
    const { slug } = Route.useParams();
    return <CaseStudyDetail slug={slug} />;
  },
});
