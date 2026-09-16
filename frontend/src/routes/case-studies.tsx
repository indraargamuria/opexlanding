import { useEffect, useState } from 'react';
import { createRoute, Link } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { listCaseStudies, type CaseStudySummary } from '../lib/api';

function CaseStudiesPage() {
  const [items, setItems] = useState<CaseStudySummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listCaseStudies().then(setItems).catch(() => {}).finally(() => setLoading(false));
  }, []);

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6">
        <div>
          <span className="text-[0.7rem] font-semibold tracking-wide uppercase text-blue">CASE STUDIES</span>
          <h1 className="text-[1.5rem] font-bold text-dark-text tracking-tight mt-1">Real Results from Real Teams</h1>
          <p className="text-[0.8125rem] text-muted mt-1">Manufacturing operations that moved maintenance off WhatsApp and spreadsheets onto OpexMX.</p>
        </div>
        {loading && <p className="text-[0.8125rem] text-muted">Loading...</p>}
        {!loading && items.length === 0 && (
          <div className="bg-white border border-border rounded-xl p-8 text-center">
            <p className="text-[0.875rem] text-muted">No case studies published yet.</p>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((cs) => {
            let metrics: { label: string; value: string }[] = [];
            try { metrics = JSON.parse(cs.metrics); } catch {}
            return (
              <Link key={cs.slug} to={`/case-studies/$slug`} params={{ slug: cs.slug }}
                className="bg-white border border-border rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow no-underline">
                <div>
                  <h2 className="text-[0.9375rem] font-heading font-semibold text-dark-text">{cs.client_name}</h2>
                  <p className="text-[0.6875rem] text-blue font-medium">{cs.industry}</p>
                </div>
                <p className="text-[0.75rem] text-muted leading-relaxed">{cs.summary}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {metrics.map((m) => (
                    <div key={m.label} className="flex flex-col items-center px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-[0.8125rem] font-heading font-bold text-dark-text">{m.value}</span>
                      <span className="text-[0.5625rem] text-muted">{m.label}</span>
                    </div>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const Route = createRoute({ getParentRoute: () => rootRoute, path: '/case-studies', component: CaseStudiesPage });
