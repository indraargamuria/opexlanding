import { useState } from 'react';
import { createRoute, Link } from '@tanstack/react-router';
import { ExternalLink, Play, ArrowRight, Clock, LifeBuoy, KanbanSquare, Users, Receipt, ShieldCheck, Settings, Network } from 'lucide-react';
import { Route as rootRoute } from './__root';
import { OpexMxVideoModal } from '../components/OpexMxVideoModal';
import { ModuleMockup } from '../components/ModuleMockup';
import { PRODUCT_MODULES, OPEX_AIO } from '../data/products';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Clock,
  LifeBuoy,
  KanbanSquare,
  Users,
  Receipt,
};

const framework = [
  { num: '01', title: 'Assessment', desc: 'Understand current state, identify gaps using Lean SIRI.' },
  { num: '02', title: 'Improvement', desc: 'Systematic training and coaching to close capability gaps.' },
  { num: '03', title: 'Solutioning', desc: 'Select the most suitable brand-agnostic solutions.' },
  { num: '04', title: 'Implementation', desc: 'Project-manage deployment with change management.' },
];

function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8">
        {/* ═══ Hero ═══ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="text-[0.7rem] font-semibold tracking-wide uppercase text-accent">
              <span className="mr-1">&#9889;</span>
              FLAGSHIP PRODUCT
            </div>
            <h1 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-[1.1] tracking-tight text-dark-text">
              AI Maintenance eXecution for Operational Excellence
            </h1>
            <p className="text-[0.875rem] text-muted leading-relaxed max-w-lg">
              OpexMX puts your maintenance team on one system in days — skills, shifts, and workloads in the
              loop, with AI agents built in. Backed by 20+ years of Lean Six Sigma and Industry 4.0 consulting
              across Southeast Asia.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Link
                to="/opexmx"
                className="inline-flex items-center gap-1.5 bg-accent text-dark-navy text-[0.8125rem] font-heading font-semibold px-5 py-2.5 rounded-[6px] hover:bg-accent-hover active:bg-accent-active transition-colors no-underline"
              >
                Explore OpexMX
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-1.5 text-brand border border-brand text-[0.8125rem] font-heading font-medium px-5 py-2.5 rounded-[6px] bg-transparent hover:bg-brand/8 active:bg-brand/14 transition-colors cursor-pointer"
              >
                <Play size={14} />
                Watch Demo
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-muted border border-border text-[0.8125rem] font-heading font-medium px-5 py-2.5 rounded-[6px] bg-transparent hover:bg-slate-100 transition-colors no-underline"
              >
                Talk to Us
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-3">
            <div className="bg-white border border-border rounded-xl p-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-[0.7rem] font-heading font-semibold text-dark-text">OpexMX · Flagship</span>
                <span className="text-[0.6rem] text-muted ml-auto">CMMS + AI agents</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="flex flex-col items-center gap-1.5 p-3 bg-accent/10 rounded-lg border border-accent/30">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent/20">
                    <Settings size={16} className="text-accent-active" />
                  </div>
                  <span className="text-[0.65rem] font-heading font-semibold text-dark-text">OpexMX</span>
                </div>
                {PRODUCT_MODULES.map((m) => {
                  const Icon = iconMap[m.icon];
                  return (
                    <div key={m.id} className="flex flex-col items-center gap-1.5 p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${m.color}15` }}>
                        {Icon && <Icon size={16} className="" />}
                      </div>
                      <span className="text-[0.65rem] font-heading font-semibold text-dark-text">{m.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-4 bg-slate-100/60 rounded-lg">
              <span className="text-[0.625rem] font-semibold text-dark-text whitespace-nowrap">
                ECOSYSTEM:
              </span>
              <span className="text-[0.625rem] font-medium text-muted">
                Siemens · Epicor · Mendix · Zebra · UiPath · Kinaxis
              </span>
            </div>
          </div>
        </section>

        {/* ═══ Opex-AIO Modules ═══ */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[1.25rem] font-bold text-dark-text tracking-tight">The Opex-AIO Suite</h2>
              <p className="text-[0.75rem] text-muted mt-0.5">Our all-in-one platform — five modular products that work independently or together.</p>
            </div>
            <Link to="/products" className="text-[0.75rem] font-heading font-semibold text-brand hover:text-brand-hover transition-colors no-underline flex items-center gap-1">
              View all <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PRODUCT_MODULES.map((m) => {
              const Icon = iconMap[m.icon];
              return (
                <div key={m.id} className="flex flex-col bg-white border border-border rounded-xl overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                  <div className="p-3 bg-slate-50 border-b border-slate-100">
                    <ModuleMockup module={m.id} color={m.color} />
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: `${m.color}15` }}>
                        {Icon && <Icon size={13} className="" />}
                      </div>
                      <span className="text-[0.8125rem] font-heading font-semibold text-dark-text">{m.name}</span>
                    </div>
                    <p className="text-[0.6875rem] text-muted leading-relaxed">{m.tagline}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {m.valueBand.slice(0, 2).map((v) => (
                        <span key={v} className="text-[0.5625rem] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">{v}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══ Consultancy (Secondary) ═══ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="text-[0.7rem] font-semibold tracking-wide uppercase text-accent">IMPLEMENTATION & ADVISORY</div>
            <h2 className="text-[1.25rem] font-bold text-dark-text tracking-tight">Consultancy that comes with every product</h2>
            <p className="text-[0.8125rem] text-muted leading-relaxed">
              Our Lean Six Sigma and Industry 4.0 consultants don't just sell software — we help you implement it,
              train your team, and measure the outcomes. Every product deployment is backed by 20+ years of
              operational excellence expertise across Southeast Asia.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              {[
                { icon: ShieldCheck, title: 'Lean Six Sigma Foundation', desc: 'Black Belt consultants with real floor experience.' },
                { icon: Settings, title: 'Brand-Agnostic Integration', desc: 'We integrate best-fit tools, not one platform.' },
                { icon: Network, title: 'IT/OT Connectivity', desc: 'Bridging shop floor to ERP with proven middleware.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3 p-3 bg-white border border-border rounded-lg">
                    <div className="w-7 h-7 rounded-md bg-brand/8 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-brand" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[0.75rem] font-heading font-semibold text-dark-text">{item.title}</span>
                      <span className="text-[0.6875rem] text-muted leading-snug">{item.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="bg-white border border-border rounded-xl p-4 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
              <h3 className="text-[0.875rem] font-heading font-semibold text-dark-text mb-3">Our Implementation Framework</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {framework.map((f) => (
                  <div key={f.num} className="flex flex-col gap-1.5 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-[0.625rem] font-heading font-bold text-accent">{f.num}</span>
                    <span className="text-[0.6875rem] font-heading font-semibold text-dark-text">{f.title}</span>
                    <span className="text-[0.5625rem] text-muted leading-snug">{f.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand rounded-xl p-4 flex flex-col gap-2">
              <h3 className="text-[0.875rem] font-heading font-semibold text-white">Ready to see Opex-AIO in action?</h3>
              <p className="text-[0.75rem] text-white/70 leading-relaxed">
                Schedule a demo and we'll show you how our modules fit your operation — no commitment required.
              </p>
              <div className="flex gap-2 mt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 bg-white text-brand text-[0.75rem] font-heading font-semibold px-4 py-2 rounded-[6px] hover:bg-slate-100 transition-colors no-underline"
                >
                  Schedule Demo
                </Link>
                <a
                  href={OPEX_AIO.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/80 border border-white/30 text-[0.75rem] font-heading font-medium px-4 py-2 rounded-[6px] hover:bg-white/10 transition-colors no-underline"
                >
                  Try Opex-AIO
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <OpexMxVideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});
