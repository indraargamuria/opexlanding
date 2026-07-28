Refactor the Experience page component (`Experience.tsx`) for the OpexCG web application using React, Tailwind CSS, Lucide React icons, and Pexels image integration.

### RESPONSIVE LAYOUT BEHAVIOR
- **Desktop (`lg:` screens and above):** 
  - Strict zero-scroll viewport height (`h-[calc(100vh-80px)] overflow-hidden`).
  - 2x2 Grid (`grid-cols-2 grid-rows-2 gap-4 h-full`).
  - Horizontal card layout (`flex-row` with 35% image width / 65% content width).
- **Mobile & Tablet (`< lg:` screens):** 
  - Natural vertical scrolling allowed (`min-h-screen overflow-y-auto py-6`).
  - Single-column stacked cards (`grid-cols-1 gap-4`).
  - Vertical card layout (`flex-col` with image top height `h-40` / content bottom).

---

### Pexels API & Fallback Image Configuration
Include a Pexels image loader (or fallback image URLs) for the 4 case studies:

1. **Grand Venture Technology (GVT):**
   - Search Query: `cnc precision manufacturing`
   - Fallback URL: `https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800`
2. **OJJ Foods:**
   - Search Query: `food processing factory conveyor`
   - Fallback URL: `https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800`
3. **Wong Fong Engineering:**
   - Search Query: `heavy machinery crane manufacturing`
   - Fallback URL: `https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=800`
4. **PT Kobexindo Tractors Tbk:**
   - Search Query: `mining excavator heavy tractor`
   - Fallback URL: `https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800`

---

### Page Structure & Header
- **Container:** `w-full max-w-7xl mx-auto px-4 sm:px-6 lg:h-[calc(100vh-80px)] lg:overflow-hidden flex flex-col justify-between py-4`
- **Header:** Compact 1-line header to maximize grid real estate:
  - Eyebrow: `REAL-WORLD IMPACT` (text-[11px] font-semibold sky-600)
  - Title: `Proven Enterprise ERP Transformations` (text-lg sm:text-xl font-bold)
  - Subtitle: `Epicor ERP implementations paired with proprietary AI & Industry 4.0 modules.` (text-xs text-slate-500 hidden sm:block)

---

### 2x2 Responsive Card Grid (`grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-3 lg:gap-4 flex-1 my-2 overflow-y-auto lg:overflow-hidden`)

#### Card Structure (Reusable Component):
```tsx
<div className="flex flex-col sm:flex-row border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:border-slate-300 transition-all">
  {/* Image Container */}
  <div className="relative w-full sm:w-[35%] h-36 sm:h-auto shrink-0 bg-slate-100">
    <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded font-medium">
      {category}
    </span>
  </div>

  {/* Content Area */}
  <div className="w-full sm:w-[65%] p-3 sm:p-4 flex flex-col justify-between space-y-2">
    <div>
      <h3 className="font-bold text-sm text-slate-900">{companyName}</h3>
      <p className="text-[11px] text-slate-500 font-medium">{subtitle}</p>
    </div>

    <div className="text-[11px] text-slate-600 space-y-1">
      <p className="line-clamp-2"><strong className="text-slate-800">Challenge:</strong> {challenge}</p>
      <p className="line-clamp-1"><strong className="text-slate-800">Approach:</strong> {approach}</p>
    </div>

    {/* Metric Micro Pills */}
    <div className="flex flex-wrap gap-1.5 pt-1">
      {kpis.map(kpi => (
        <span className="bg-sky-50 text-sky-700 border border-sky-100 text-[10px] font-semibold px-2 py-0.5 rounded">
          {kpi}
        </span>
      ))}
    </div>

    {/* Tech Badges */}
    <div className="flex flex-wrap gap-1 border-t border-slate-100 pt-1.5">
      {tags.map(tag => (
        <span className="bg-slate-100 text-slate-600 text-[9px] px-1.5 py-0.5 rounded">
          {tag}
        </span>
      ))}
    </div>
  </div>
</div>
Data Objects for the 4 Cards
Grand Venture Technology (GVT)

category: Precision Engineering · SG / MY / CN

subtitle: High-Precision CNC Machining & Semiconductor Assembly

challenge: High-mix precision machining required multi-site job costing and real-time scrap tracking.

approach: Epicor Kinetic ERP + OpexMX real-time shop floor dispatch & WIP tracking.

kpis: ['38% Faster Costing', '99.4% WIP Visibility', '-24% Floor Scrap']

tags: ['Epicor Kinetic', 'OpexMX', 'Multi-Site']

OJJ Foods

category: Food Processing & Cold Chain · Singapore

subtitle: Automated Meat Processing & Cold Storage Distribution

challenge: Perishable inventory, variable catch-weights, and strict SFA/HACCP safety compliance.

approach: Epicor ERP + OpexDX catch-weight module with automated barcode lot traceability.

kpis: ['100% Traceability', '-18% Cold Chain Waste', '2.5x Order Speed']

tags: ['Epicor ERP', 'OpexDX', 'HACCP Lot Tracking']

Wong Fong Engineering

category: Heavy Machinery & ETO · Singapore

subtitle: Mobile Cranes & Transport Equipment Manufacturing

challenge: Complex Engineer-to-Order (ETO) multi-tier BOMs and fragmented field service dispatch.

approach: Epicor Advanced Project Management + OpexAssistant for automated ECO workflows.

kpis: ['-30% ETO Lead Time', '92% On-Time Assembly', 'Unified Field Service']

tags: ['Epicor Project', 'OpexAssistant', 'ETO Assembly']

PT Kobexindo Tractors Tbk

category: Heavy Equipment Distribution · Indonesia

subtitle: Nationwide Machinery, Parts & Mining Logistics

challenge: Spare parts inventory and field maintenance across 10+ nationwide branches and remote mine sites.

approach: Multi-branch Epicor ERP connected via OpexDX middleware for live inventory sync.

kpis: ['10+ Branches Synced', '-28% Parts Stockouts', 'Mining Site Support']

tags: ['Epicor ERP', 'OpexDX', 'Parts Logistics']