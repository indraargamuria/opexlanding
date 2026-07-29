import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { Check, ExternalLink, Zap, Bot, Settings, Network } from 'lucide-react';

const metrics = [
  { label: 'Core Engines', value: '3' },
  { label: 'Floor Uptime', value: '99.9%' },
  { label: 'Epicor & Siemens Native', value: '' },
  { label: 'IT/OT Latency', value: '<100ms' },
];

const ecosystem = [
  'Epicor Kinetic',
  'Siemens MindSphere / Opcenter',
  'Mendix Low-Code',
  'Zebra Industrial',
  'UiPath RPA',
  'Kinaxis RapidResponse',
  'PostgreSQL / Cloudflare D1',
];

const products = [
  {
    id: 'opexmx',
    badge: ['OpexMX', 'v3.2 Stable', 'Live Engine'],
    Icon: Settings,
    desc: 'Real-time manufacturing execution system connecting machines, operators, and ERP planning modules into a single source of truth.',
    capabilities: [
      'NFC/QR tag scanning & mobile work order dispatch',
      'Computerized Maintenance (CMMS) & downtime tracking',
      'Brand-agnostic floor integration (Siemens, Mitsubishi, Fanuc)',
    ],
    techSpec: [
      { label: 'Protocol', value: 'OPC-UA / MQTT' },
      { label: 'Mode', value: 'Offline-First Edge' },
    ],
    primaryCta: { label: 'Launch Platform', href: 'https://mx.opexcg.com/' },
    ghostCta: { label: 'View Spec Sheet', href: '#' },
    mockUi: (
      <div className="bg-[#0F172A] rounded-lg p-3 text-[0.65rem] font-mono leading-relaxed">
        <div className="flex items-center gap-2 text-[0.6rem] text-slate-500 mb-2 pb-1.5 border-b border-white/5">
          <span className="w-2 h-2 rounded-full bg-white/15" />
          <span className="w-2 h-2 rounded-full bg-white/15" />
          <span className="w-2 h-2 rounded-full bg-white/15" />
          <span className="ml-1">Floor Dispatch &mdash; Live</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
          <span className="text-white/70">WO-8821</span>
          <span className="text-white/50">Injection Molding Line #2</span>
          <span className="ml-auto text-[0.55rem] px-1.5 py-0.5 rounded bg-emerald-400/15 text-emerald-300">Active</span>
        </div>
        <div className="flex items-center gap-2 mt-1 text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
          <span className="text-white/70">WO-8822</span>
          <span className="text-white/50">Stamping Press #4</span>
          <span className="ml-auto text-[0.55rem] px-1.5 py-0.5 rounded bg-amber-400/15 text-amber-300">Dispatched</span>
        </div>
        <div className="mt-2 pt-1.5 border-t border-white/5 text-[0.55rem] text-slate-600">
          NFC Tag Verified &middot; Last sync: 12s ago
        </div>
      </div>
    ),
  },
  {
    id: 'opexai',
    badge: ['OpexAssistant', 'AI Agentic Engine'],
    Icon: Bot,
    desc: 'Context-aware AI copilot for predictive analytics, defect detection via computer vision, and automated ERP workflows.',
    capabilities: [
      'Automated ERP data entry & approval routing',
      'Computer vision defect detection & yield forecasting',
      'Natural language querying across plant telemetry',
    ],
    techSpec: [
      { label: 'LLM', value: 'Custom fine-tuned' },
      { label: 'Privacy', value: 'Zero-Retention' },
    ],
    primaryCta: { label: 'Launch Platform', href: 'https://app.opexcg.com/assistant' },
    ghostCta: { label: 'AI Architecture Docs', href: '#' },
    mockUi: (
      <div className="bg-[#0F172A] rounded-lg p-3 text-[0.65rem] font-mono leading-relaxed">
        <div className="text-[0.6rem] text-sky-400/80 mb-2">
          <span className="text-slate-500">$</span> query <span className="text-white/50">&quot;Predict throughput bottleneck for Shift B.&quot;</span>
        </div>
        <div className="bg-white/5 rounded-md p-2.5 text-[0.6rem]">
          <div className="flex items-center gap-1.5 text-slate-400 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
            Agent Response
          </div>
          <div className="text-white/80 leading-relaxed">
            Scrap rate spike detected on Line 3. Triggered Epicor maintenance log.
          </div>
        </div>
        <div className="mt-2 text-[0.55rem] text-slate-600">
          Model: opex-llm-v2 &middot; 0-retention policy active
        </div>
      </div>
    ),
  },
  {
    id: 'opexdx',
    badge: ['OpexDX', 'Integration Middleware'],
    Icon: Network,
    desc: 'Vendor-neutral connectivity layer bridging IT/OT silos between Siemens, Epicor, Mendix, and legacy MES platforms.',
    capabilities: [
      'Bi-directional Epicor REST & Kinetic API connectors',
      'Zero-code data mapping between PLC feeds & ERP tables',
      'Real-time event streaming and payload validation',
    ],
    techSpec: [
      { label: 'Throughput', value: '10k msg/sec' },
      { label: 'Connectors', value: '25+ Pre-built' },
    ],
    primaryCta: { label: 'Explore Integrations', href: '#' },
    ghostCta: { label: 'API Specs', href: '#' },
    mockUi: (
      <div className="bg-[#0F172A] rounded-lg p-3 text-[0.6rem] font-mono leading-relaxed flex items-center justify-between gap-1">
        <span className="text-sky-300/80">[PLC / OT Data]</span>
        <Zap size={12} className="text-amber-400 shrink-0" />
        <span className="text-brand/80 font-semibold">[OpexDX Engine]</span>
        <Zap size={12} className="text-amber-400 shrink-0" />
        <span className="text-emerald-300/80">[Epicor ERP]</span>
      </div>
    ),
  },
];

function ProductCard({ p }: { p: typeof products[0] }) {
  const Icon = p.Icon;
  return (
    <div className="flex flex-col bg-white border border-slate-200 rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Badge Row */}
      <div className="flex items-center gap-2 px-4 pt-4 pb-2">
        <div className="flex items-center justify-center w-7 h-7 rounded-md bg-brand/8 shrink-0">
          <Icon size={15} className="text-brand" />
        </div>
        {p.badge.map((b, i) => (
          <span
            key={b}
            className={`text-[0.6rem] font-medium px-2 py-0.5 rounded-full ${
              i === 0
                ? 'bg-brand/10 text-brand font-semibold'
                : 'bg-slate-100 text-slate-500'
            }`}
          >
            {b}
          </span>
        ))}
      </div>

      {/* Mock UI Preview */}
      <div className="px-4">{p.mockUi}</div>

      {/* Description */}
      <p className="text-[0.7rem] text-slate-600 leading-relaxed px-4 pt-3">{p.desc}</p>

      {/* Capabilities */}
      <ul className="flex flex-col gap-1.5 px-4 pt-2.5 pb-1">
        {p.capabilities.map((c) => (
          <li key={c} className="flex items-start gap-1.5 text-[0.65rem] text-slate-600 leading-snug">
            <Check size={11} className="text-brand shrink-0 mt-0.5" />
            {c}
          </li>
        ))}
      </ul>

      {/* Tech Spec Bar */}
      <div className="flex items-center gap-3 mx-4 my-2.5 py-1.5 px-2.5 bg-slate-50 rounded-md text-[0.6rem] text-slate-500">
        {p.techSpec.map((s) => (
          <span key={s.label}>
            <span className="text-slate-400">{s.label}:</span>{' '}
            <span className="font-medium text-slate-700">{s.value}</span>
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-2 px-4 pb-4 mt-auto">
        <a
          href={p.primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[0.7rem] font-heading font-semibold bg-brand text-white px-4 py-1.5 rounded-[6px] hover:bg-brand-hover active:bg-brand-active transition-colors no-underline"
        >
          {p.primaryCta.label}
          <ExternalLink size={11} />
        </a>
        <a
          href={p.ghostCta.href}
          className="inline-flex items-center gap-1 text-[0.7rem] font-heading font-medium text-slate-500 border border-slate-200 px-4 py-1.5 rounded-[6px] hover:bg-slate-50 transition-colors no-underline"
        >
          {p.ghostCta.label}
        </a>
      </div>
    </div>
  );
}

function ProductsPage() {
  return (
    <div className="h-full flex flex-col gap-4 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-[1.3rem] font-bold text-dark-text tracking-tight">
          Proprietary AI &amp; Industry 4.0 Suite
        </h1>
        <p className="text-[0.75rem] text-muted mt-1 max-w-2xl">
          Built by OpexCG consultants to accelerate factory floor execution,
          predictive automation, and enterprise system integration.
        </p>
        <div className="flex items-center gap-0 mt-3 border border-slate-200 rounded-lg bg-white overflow-hidden divide-x divide-slate-200">
          {metrics.map((m) => (
            <div key={m.label} className="flex-1 flex flex-col items-center py-2 px-2 text-center">
              {m.value && (
                <span className="text-[0.8rem] font-bold text-dark-text leading-tight">{m.value}</span>
              )}
              <span className="text-[0.6rem] text-slate-500 mt-0.5 leading-tight">{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3-Column Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1 min-h-0">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>

      {/* Ecosystem Strip */}
      <div className="flex items-center flex-wrap gap-2 py-2.5 px-4 bg-slate-100/60 rounded-lg shrink-0">
        <span className="text-[0.6rem] font-semibold text-dark-text tracking-wide mr-1">
          ENTERPRISE ECOSYSTEM COMPATIBILITY:
        </span>
        {ecosystem.map((e) => (
          <span
            key={e}
            className="text-[0.6rem] font-medium px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600"
          >
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProductsPage,
});
