import { useState } from 'react';
import { createRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight, Play, CalendarCheck, Sparkles, Ticket, Clock, GraduationCap,
  Gauge, Package, BookOpen, BarChart3, Bot, Wrench, Zap, CheckCircle2,
} from 'lucide-react';
import { Route as rootRoute } from './__root';
import { OpexMxVideoModal } from '../components/OpexMxVideoModal';
import { OPEXMX } from '../data/opexmx';

const moduleIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  CalendarCheck, Sparkles, Ticket, Clock, GraduationCap, Gauge, Package, BookOpen, BarChart3,
};

const AMBER = '#F59E0B';

function OpexMxPage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="h-full overflow-y-auto">
      {/* ═══ Hero (dark, flagship) ═══ */}
      <section className="bg-dark-navy">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 self-start text-[0.7rem] font-semibold tracking-wide uppercase">
              <span className="px-2 py-0.5 rounded bg-blue text-white font-heading">CMMS + AI</span>
              <span className="text-white/60">Computerized Maintenance Management System</span>
            </div>
            <h1 className="text-[2rem] md:text-[2.75rem] font-bold leading-[1.08] tracking-tight text-white">
              AI Maintenance eXecution for Operational Excellence
            </h1>
            <p className="text-[0.9375rem] text-white/70 leading-relaxed max-w-xl">
              {OPEXMX.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a
                href={OPEXMX.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-accent text-dark-navy text-[0.8125rem] font-heading font-semibold px-5 py-2.5 rounded-[6px] hover:bg-accent-hover transition-colors no-underline"
              >
                Try OpexMX
                <ArrowRight size={14} />
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-1.5 text-white border border-white/30 text-[0.8125rem] font-heading font-medium px-5 py-2.5 rounded-[6px] bg-white/5 hover:bg-white/12 transition-colors cursor-pointer"
              >
                <Play size={14} />
                Watch Demo
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-white/80 border border-white/20 text-[0.8125rem] font-heading font-medium px-5 py-2.5 rounded-[6px] bg-transparent hover:bg-white/10 transition-colors no-underline"
              >
                Talk to Us
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-3">
              {OPEXMX.heroStats.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="text-[1.125rem] font-heading font-bold" style={{ color: AMBER }}>{s.value}</span>
                  <span className="text-[0.6875rem] text-white/50">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white/[0.06] border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full" style={{ background: AMBER }} />
                <span className="text-[0.7rem] font-heading font-semibold text-white">Workload Planning View</span>
                <span className="text-[0.6rem] text-white/40 ml-auto">app.opexmx.com</span>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { who: 'Ahmad Rizki', role: 'Mechanical · 06:00–14:00', load: '3h / 8h', pct: 38, ticket: '#1247 Bearing Temp Alarm', accent: AMBER },
                  { who: 'Siti Nurhaliza', role: 'Electrical · 06:00–14:00', load: '7h / 8h', pct: 88, ticket: '#1248 PLC Communication Error', accent: '#EF4444' },
                  { who: 'Budi Santoso', role: 'General · 14:00–22:00', load: '5h / 8h', pct: 63, ticket: '#1250 PM · Hydraulic Press A', accent: '#3B82F6' },
                ].map((t) => (
                  <div key={t.who} className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[0.6875rem] font-heading font-semibold text-white">{t.who}</span>
                      <span className="text-[0.5625rem] text-white/40">{t.role}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-1.5">
                      <div className="h-full rounded-full" style={{ width: `${t.pct}%`, background: t.accent }} />
                    </div>
                    <span className="text-[0.625rem] text-white/60">{t.ticket}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
                <Zap size={12} style={{ color: AMBER }} />
                <span className="text-[0.625rem] text-white/50">Auto-assignment just now: #1253 Coolant Pump Vibration Check → Ahmad Rizki</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 flex flex-col gap-10">
        {/* ═══ Value props ═══ */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {OPEXMX.valueProps.map((v, i) => (
            <div key={v.title} className="flex flex-col gap-2 bg-white border border-border rounded-xl p-5">
              <span className="text-[0.6875rem] font-heading font-bold" style={{ color: AMBER }}>0{i + 1}</span>
              <h3 className="text-[0.9375rem] font-heading font-semibold text-dark-text leading-snug">{v.title}</h3>
              <p className="text-[0.75rem] text-muted leading-relaxed">{v.body}</p>
            </div>
          ))}
        </section>

        {/* ═══ Modules ═══ */}
        <section className="flex flex-col gap-4">
          <div>
            <h2 className="text-[1.25rem] font-bold text-dark-text tracking-tight">Everything your maintenance team needs</h2>
            <p className="text-[0.75rem] text-muted mt-0.5">All modules your team uses, in one system.</p>
          </div>
          <div className="flex flex-col gap-6">
            {/* Tier 1: Core */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[0.625rem] font-heading font-bold text-blue uppercase tracking-wide">Core</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {OPEXMX.modules.slice(0, 3).map((m) => {
                  const Icon = moduleIcons[m.icon];
                  return (
                    <div key={m.name} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${AMBER}15` }}>
                        {Icon && <Icon size={15} className="text-accent" />}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[0.8125rem] font-heading font-semibold text-dark-text">{m.name}</span>
                        <span className="text-[0.6875rem] text-muted leading-snug">{m.body}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Tier 2: Operations */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[0.625rem] font-heading font-bold text-blue-dark uppercase tracking-wide">Operations</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {OPEXMX.modules.slice(3, 6).map((m) => {
                  const Icon = moduleIcons[m.icon];
                  return (
                    <div key={m.name} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${AMBER}15` }}>
                        {Icon && <Icon size={15} className="text-accent" />}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[0.8125rem] font-heading font-semibold text-dark-text">{m.name}</span>
                        <span className="text-[0.6875rem] text-muted leading-snug">{m.body}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Tier 3: Intelligence */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[0.625rem] font-heading font-bold text-blue-dark uppercase tracking-wide">Intelligence</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {OPEXMX.modules.slice(6, 9).map((m) => {
                  const Icon = moduleIcons[m.icon];
                  return (
                    <div key={m.name} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${AMBER}15` }}>
                        {Icon && <Icon size={15} className="text-accent" />}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[0.8125rem] font-heading font-semibold text-dark-text">{m.name}</span>
                        <span className="text-[0.6875rem] text-muted leading-snug">{m.body}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ How it works ═══ */}
        <section className="flex flex-col gap-4">
          <div>
            <h2 className="text-[1.25rem] font-bold text-dark-text tracking-tight">From WhatsApp chaos to live in days</h2>
            <p className="text-[0.75rem] text-muted mt-0.5">No total replacement. No months-long rollout.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {OPEXMX.howItWorks.map((s, i) => (
              <div key={s.title} className="flex flex-col gap-2 bg-slate-50 border border-slate-100 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md flex items-center justify-center text-[0.625rem] font-heading font-bold text-white" style={{ background: AMBER }}>{i + 1}</span>
                  {i === 3 && <span className="text-[0.5625rem] uppercase tracking-wide text-muted font-semibold">Optional</span>}
                </div>
                <h3 className="text-[0.8125rem] font-heading font-semibold text-dark-text">{s.title}</h3>
                <p className="text-[0.6875rem] text-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ AI / MCP ═══ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-dark-navy rounded-2xl p-6 lg:p-8">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 self-start text-[0.65rem] font-semibold tracking-wide uppercase text-white/60">
              <Bot size={13} style={{ color: AMBER }} />
              AI-NATIVE · MODEL CONTEXT PROTOCOL
            </div>
            <h2 className="text-[1.25rem] font-bold text-white tracking-tight">{OPEXMX.aiPitch.title}</h2>
            <p className="text-[0.8125rem] text-white/70 leading-relaxed">{OPEXMX.aiPitch.body}</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Claude', 'Cursor', 'Any AI agent'].map((a) => (
                <span key={a} className="text-[0.625rem] font-medium px-2 py-1 rounded-md bg-white/8 text-white/70 border border-white/10">{a}</span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white/[0.06] border border-white/10 rounded-xl p-3 flex flex-col gap-2">
              {[
                { icon: CheckCircle2, text: '20+ ready tools: tickets, work orders, inventory, assets' },
                { icon: CheckCircle2, text: 'Per-person keys — AI only does what that person may do' },
                { icon: CheckCircle2, text: 'Runs on laptop, server, or the floor terminal' },
              ].map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.text} className="flex items-start gap-2">
                    <Icon size={13} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-[0.6875rem] text-white/70 leading-snug">{r.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ Roadmap ═══ */}
        <section className="flex flex-col gap-3">
          <h2 className="text-[1.25rem] font-bold text-dark-text tracking-tight">What's coming</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {OPEXMX.roadmap.map((r) => (
              <div key={r.version} className="flex items-center gap-3 bg-white border border-border rounded-xl p-4">
                <Wrench size={14} className="text-accent shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[0.75rem] font-heading font-semibold text-dark-text">{r.version} — {r.label}</span>
                  <span className="text-[0.625rem] text-muted">{r.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="bg-brand rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-[1rem] font-heading font-semibold text-white">See it on your own floor</h3>
            <p className="text-[0.75rem] text-white/70">Book a walkthrough — managers see the difference in minutes, not after a 3-month pilot.</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 bg-white text-brand text-[0.75rem] font-heading font-semibold px-4 py-2 rounded-[6px] hover:bg-slate-100 transition-colors no-underline"
            >
              Book a Walkthrough
              <ArrowRight size={13} />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-white/80 border border-white/30 text-[0.75rem] font-heading font-medium px-4 py-2 rounded-[6px] hover:bg-white/10 transition-colors no-underline"
            >
              See Case Studies
            </Link>
          </div>
        </section>
      </div>
      <OpexMxVideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/opexmx',
  component: OpexMxPage,
});
