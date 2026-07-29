import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

const caseStudies = [
  {
    company: 'Grand Venture Technology (GVT)',
    category: 'Precision Engineering \u00B7 SG / MY / CN',
    subtitle: 'High-Precision CNC Machining & Semiconductor Assembly',
    challenge: 'High-mix precision machining required multi-site job costing and real-time scrap tracking.',
    approach: 'Epicor Kinetic ERP + OpexMX real-time shop floor dispatch & WIP tracking.',
    kpis: ['38% Faster Costing', '99.4% WIP Visibility', '-24% Floor Scrap'],
    tags: ['Epicor Kinetic', 'OpexMX', 'Multi-Site'],
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    company: 'OJJ Foods',
    category: 'Food Processing & Cold Chain \u00B7 Singapore',
    subtitle: 'Automated Meat Processing & Cold Storage Distribution',
    challenge: 'Perishable inventory, variable catch-weights, and strict SFA/HACCP safety compliance.',
    approach: 'Epicor ERP + OpexDX catch-weight module with automated barcode lot traceability.',
    kpis: ['100% Traceability', '-18% Cold Chain Waste', '2.5x Order Speed'],
    tags: ['Epicor ERP', 'OpexDX', 'HACCP Lot Tracking'],
    image: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    company: 'Wong Fong Engineering',
    category: 'Heavy Machinery & ETO \u00B7 Singapore',
    subtitle: 'Mobile Cranes & Transport Equipment Manufacturing',
    challenge: 'Complex Engineer-to-Order (ETO) multi-tier BOMs and fragmented field service dispatch.',
    approach: 'Epicor Advanced Project Management + OpexAssistant for automated ECO workflows.',
    kpis: ['-30% ETO Lead Time', '92% On-Time Assembly', 'Unified Field Service'],
    tags: ['Epicor Project', 'OpexAssistant', 'ETO Assembly'],
    image: 'https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    company: 'PT Kobexindo Tractors Tbk',
    category: 'Heavy Equipment Distribution \u00B7 Indonesia',
    subtitle: 'Nationwide Machinery, Parts & Mining Logistics',
    challenge: 'Spare parts inventory and field maintenance across 10+ nationwide branches and remote mine sites.',
    approach: 'Multi-branch Epicor ERP connected via OpexDX middleware for live inventory sync.',
    kpis: ['10+ Branches Synced', '-28% Parts Stockouts', 'Mining Site Support'],
    tags: ['Epicor ERP', 'OpexDX', 'Parts Logistics'],
    image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function CaseStudyCard({ c }: { c: typeof caseStudies[0] }) {
  return (
    <div className="flex flex-row border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm h-full">
      {/* Left Image Column */}
      <div className="relative w-[32%] shrink-0 h-full bg-slate-900">
        <img src={c.image} alt={c.company} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium truncate max-w-[calc(100%-24px)]">
          {c.category}
        </span>
      </div>

      {/* Right Content Column */}
      <div className="w-[68%] p-4 sm:p-5 flex flex-col justify-between gap-2">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">{c.company}</h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">{c.subtitle}</p>
        </div>

        <div className="text-xs text-slate-600 space-y-1">
          <p><strong className="text-slate-800">Challenge:</strong> {c.challenge}</p>
          <p><strong className="text-slate-800">Approach:</strong> {c.approach}</p>
        </div>

        {/* KPI Badges */}
        <div className="flex flex-wrap gap-1.5">
          {c.kpis.map((k) => (
            <span
              key={k}
              className="bg-brand/10 text-brand border border-brand/20 text-xs font-semibold px-2.5 py-1 rounded-md"
            >
              {k}
            </span>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-2">
          {c.tags.map((t) => (
            <span
              key={t}
              className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperiencePage() {
  return (
    <div className="h-full w-full flex flex-col overflow-hidden bg-slate-50">
      <div className="flex-1 max-w-7xl w-full mx-auto px-6 py-3 flex flex-col justify-between overflow-hidden">
        {/* Page Header */}
        <div className="shrink-0 mb-2">
          <span className="text-xs font-semibold text-sky-600 tracking-wider uppercase">
            REAL-WORLD IMPACT
          </span>
          <h1 className="text-2xl font-bold text-slate-900 leading-tight">
            Proven Enterprise ERP Transformations
          </h1>
          <p className="text-xs text-slate-500">
            Epicor ERP implementations paired with proprietary AI &amp; Industry 4.0 modules.
          </p>
        </div>

        {/* 2x2 Card Grid */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 overflow-hidden mb-1">
          {caseStudies.map((c) => (
            <CaseStudyCard key={c.company} c={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/experience',
  component: ExperiencePage,
});
