import { useState } from 'react';
import { createRoute, Link } from '@tanstack/react-router';
import { ExternalLink, Play, Bot, Settings, Network, ShieldCheck } from 'lucide-react';
import { Route as rootRoute } from './__root';
import { OpexMxVideoModal } from '../components/OpexMxVideoModal';

const accelerators = [
  {
    title: 'AI Orchestration (OpexAssistant)',
    desc: 'Predictive analytics, ERP automation, and workflow orchestration.',
    icon: Bot,
  },
  {
    title: 'Floor Execution (OpexMX)',
    desc: 'Computerized maintenance, NFC tag scanning, and real-time work order dispatch.',
    icon: Settings,
  },
  {
    title: 'Ecosystem Integration (OpexDX)',
    desc: 'Vendor-neutral connectivity bridging IT/OT for Siemens, Epicor, and custom MES.',
    icon: Network,
  },
  {
    title: 'Lean Operational Excellence',
    desc: 'Lean Six Sigma methodology paired with measurable floor outcomes.',
    icon: ShieldCheck,
  },
];

const partners = ['Siemens', 'Epicor', 'Mendix', 'Zebra', 'UiPath', 'Kinaxis'];

function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="h-full flex flex-col gap-3 max-w-[1100px] mx-auto">
      {/* ═══ Main Grid: asymmetric 5:7 ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 min-h-0">

        {/* ── Left Column ── */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-3 min-h-0">
          <div>
            <div className="text-[0.7rem] font-semibold tracking-wide uppercase text-brand mb-0.5">
              <span className="mr-1">&#9889;</span>
              TECHNOLOGY-LED &middot; AI-DRIVEN CONSULTING
            </div>
            <h1 className="text-[1.5rem] md:text-[1.65rem] font-bold leading-[1.15] tracking-tight text-dark-text mb-1">
              Enhancing Performance. Delivering Impact.
            </h1>
            <p className="text-[0.8125rem] text-muted leading-relaxed">
              Opex Consulting Group partners with organizations to solve complex
              operational challenges, optimize floor performance, and accelerate
              growth with proprietary AI and Industry 4.0 tech.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-2 mt-1">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 bg-brand text-white text-[0.75rem] font-heading font-semibold px-[18px] py-[8px] rounded-[6px] hover:bg-brand-hover active:bg-brand-active transition-colors no-underline"
            >
              Talk to Us
            </Link>
            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-1.5 text-brand border border-brand text-[0.75rem] font-heading font-medium px-[18px] py-[8px] rounded-[6px] bg-transparent hover:bg-[rgba(23,165,220,0.08)] active:bg-[rgba(23,165,220,0.14)] transition-colors cursor-pointer"
            >
              <Play size={14} />
              OpexMX Demo
            </button>
            <a
              href="https://app.opexcg.com/assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted border border-border text-[0.75rem] font-heading font-medium px-[18px] py-[8px] rounded-[6px] bg-transparent hover:bg-slate-100 transition-colors no-underline"
            >
              OpexAssistant
              <ExternalLink size={14} />
            </a>
          </div>

          {/* 2x2 Capability Grid */}
          <div className="grid grid-cols-2 gap-2">
            {accelerators.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="flex flex-col gap-1.5 bg-white border border-border rounded-[10px] p-3"
                >
                  <div className="flex items-center justify-center w-[28px] h-[28px] rounded-[7px] bg-[rgba(23,165,220,0.08)] shrink-0">
                    <Icon size={15} className="text-brand" />
                  </div>
                  <div className="flex flex-col gap-[1px]">
                    <span className="text-[0.7rem] font-heading font-semibold text-dark-text leading-tight">
                      {a.title}
                    </span>
                    <span className="text-[0.625rem] text-muted leading-[1.3]">
                      {a.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="lg:col-span-7 flex flex-col gap-3 min-h-0">
          <div className="flex-1 flex items-center justify-center bg-white border border-border rounded-xl p-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
            <img
              src="/images/technology-partner.png"
              alt="OpexDX Ecosystem — Siemens, Epicor, OpexMX, OpexAssistant"
              className="max-h-[480px] w-full object-contain rounded-lg"
            />
          </div>

          <div className="flex items-center justify-center gap-2 py-2 px-4 bg-slate-100/60 rounded-lg shrink-0">
            <span className="text-[0.625rem] font-semibold text-dark-text whitespace-nowrap">
              ECOSYSTEM PARTNERS:
            </span>
            <span className="text-[0.625rem] font-medium text-muted whitespace-nowrap">
              {partners.join(' \u00B7 ')}
            </span>
          </div>
        </div>
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
