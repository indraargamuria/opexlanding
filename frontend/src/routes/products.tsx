import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { Check, ExternalLink, ArrowRight } from 'lucide-react';
import { ModuleMockup } from '../components/ModuleMockup';
import { PRODUCT_MODULES, OPEX_AIO } from '../data/products';

function ProductsPage() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8">
        {/* ═══ Header ═══ */}
        <section className="flex flex-col gap-3">
          <div className="text-[0.7rem] font-semibold tracking-wide uppercase text-blue">OUR PRODUCTS</div>
          <h1 className="text-[1.75rem] font-bold text-dark-text tracking-tight">{OPEX_AIO.name}</h1>
          <p className="text-[0.875rem] text-muted leading-relaxed max-w-2xl">
            {OPEX_AIO.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <a
              href={OPEX_AIO.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-brand text-white text-[0.8125rem] font-heading font-semibold px-5 py-2.5 rounded-[6px] hover:bg-brand-hover active:bg-brand-active transition-colors no-underline"
            >
              Launch Opex-AIO
              <ExternalLink size={14} />
            </a>
            <a
              href="#modules"
              className="inline-flex items-center gap-1.5 text-brand border border-brand text-[0.8125rem] font-heading font-medium px-5 py-2.5 rounded-[6px] bg-transparent hover:bg-brand/8 active:bg-brand/14 transition-colors no-underline"
            >
              Explore Modules
              <ArrowRight size={14} />
            </a>
          </div>
        </section>

        {/* ═══ Module Cards ═══ */}
        <section id="modules" className="flex flex-col gap-6">
          {PRODUCT_MODULES.map((m, idx) => (
            <div
              key={m.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 bg-white border border-border rounded-xl overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
            >
              {/* Mockup */}
              <div className="lg:col-span-5 bg-slate-50 p-4 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
                <ModuleMockup module={m.id} color={m.color} />
              </div>
              {/* Content */}
              <div className="lg:col-span-7 p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${m.color}15` }}>
                    <span className="text-[0.625rem] font-heading font-bold" style={{ color: m.color }}>{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h2 className="text-[1.125rem] font-heading font-bold text-dark-text">{m.name}</h2>
                </div>
                <p className="text-[0.8125rem] text-muted leading-relaxed">{m.description}</p>
                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {m.features.slice(0, 4).map((f) => (
                    <div key={f.title} className="flex items-start gap-2">
                      <Check size={12} className="shrink-0 mt-0.5" style={{ color: m.color }} />
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[0.6875rem] font-heading font-semibold text-dark-text">{f.title}</span>
                        <span className="text-[0.625rem] text-muted leading-snug">{f.body}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Value band */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {m.valueBand.map((v) => (
                    <span key={v} className="text-[0.5625rem] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {v}
                    </span>
                  ))}
                </div>
                {/* CTA */}
                <div className="flex items-center gap-2 mt-2">
                  <a
                    href={m.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[0.75rem] font-heading font-semibold text-white px-4 py-2 rounded-[6px] transition-colors no-underline"
                    style={{ background: m.color }}
                  >
                    Launch {m.name}
                    <ExternalLink size={11} />
                  </a>
                  <span className="text-[0.625rem] text-muted">Module {idx + 1} of 5</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ═══ Integration Note ═══ */}
        <section className="bg-brand rounded-xl p-6 flex flex-col gap-3">
          <h2 className="text-[1.125rem] font-heading font-semibold text-white">All modules share one platform</h2>
          <p className="text-[0.8125rem] text-white/70 leading-relaxed max-w-2xl">
            Users, customers, and projects are shared across all five products. Start with one module and add more later —
            no migration, no separate logins. One deployable app, one shared database, one login signs you into every product.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            {PRODUCT_MODULES.map((m) => (
              <span key={m.id} className="text-[0.6875rem] font-medium px-3 py-1.5 rounded-full bg-white/10 text-white/80 border border-white/20">
                {m.name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProductsPage,
});
