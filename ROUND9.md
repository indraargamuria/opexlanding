# Task Instructions: Emergency Layout Cleanup & CSS Collision Fix for Home Page (`/`)

## Objective
Fix the severe layout overlap and broken CSS positioning on `src/routes/index.tsx`. Re-architect the Home page into a clean, 2-column flexbox grid that fits comfortably within the $100\text{dvh}$ app-shell without ANY overlapping elements, negative margins, or text clipping.

---

## Root Cause & Rules to Fix Immediately
1. **REMOVE ALL** `absolute` positioning, negative margins (`-mt-*`), and fixed pixel heights on cards that caused elements to overlap.
2. **USE FLEX/GRID FLOW:** Ensure every section sits cleanly in the vertical flow (`flex flex-col justify-between`).
3. **PREVENT OVERLAP:** Main canvas MUST use `overflow-hidden` on desktop with `gap-4` or `gap-6` between columns.

---

## Clean Layout Specifications (`src/routes/index.tsx`)

### 1. Left Canvas Column (50% Width — Hero & Capabilities Grid)
Wrap in a `flex flex-col justify-between h-full space-y-4`:

* **Top Block (Hero Intro):**
  * **Badge:** `⚡ Industry 4.0 CMMS & MES` in `#17A5DC` brand blue.
  * **Headline:** "Enhancing Operational Performance. Delivering Impact with OpexMX." (`text-2xl md:text-3xl font-bold text-slate-900`)
  * **Subheadline:** "Computerized Maintenance Management System (CMMS) & MES built for the floor." (`text-xs md:text-sm text-slate-600`)
* **Middle Block (CTA Actions):**
  * Primary Button: `Launch OpexMX ↗` -> Direct link to `https://mx.opexcg.com/` (`target="_blank"`, `rel="noopener noreferrer"`, `ExternalLink` icon).
  * Secondary Video Button: `▶ Watch OpexMX in 3 Min` -> Opens YouTube Modal (`https://www.youtube.com/embed/H4I4rk4Qf0M?autoplay=1`).
* **Bottom Block (Compact 2x2 Feature Grid):**
  * Render a `grid grid-cols-2 gap-2 md:gap-3` of 4 micro-cards:
    1. **Asset & NFC:** Instant tag scanning & mobile access.
    2. **Work Orders:** Real-time tickets & supervisor routing.
    3. **Preventive Maint:** Automated checklists & downtime control.
    4. **Analytics:** Team workload & MTTR response times.

---

### 2. Right Canvas Column (50% Width — Visual Ecosystem & Proof)
Wrap in a `flex flex-col justify-between h-full space-y-3`:

* **Top Block (Ecosystem Map Card):**
  * Container: `rounded-xl border border-slate-200 bg-white p-2 shadow-sm flex-1 flex items-center justify-center overflow-hidden`
  * Image: `<img src="/images/technology-partner.png" alt="OpexDX Ecosystem" className="max-h-[220px] w-full object-contain" />`
* **Bottom Block ("Why OpexMX" Proof Card):**
  * Container: `rounded-xl border border-slate-100 bg-slate-50/80 p-3 text-xs`
  * Content: 3 checkmark bullets (`✓ Operator-Centric Mobile App`, `✓ Vendor-Neutral Connectivity`, `✓ Real-Time Floor Impact`).

---

### 3. Ticker Bar (Bottom Above Footer)
* Render a simple, clean marquee bar:
  * Flex container: `flex items-center justify-between px-4 py-1.5 bg-slate-100/60 rounded-lg text-xs text-slate-500 font-medium`
  * Label: `<span className="font-semibold text-slate-700">ECOSYSTEM:</span>`
  * Logos/Text: Siemens • Epicor • Mendix • Zebra • UiPath • Kinaxis (spaced evenly, no overlapping text).

---

## Execution Verification
1. Ensure NO white cards overlap the hero headline, CTA buttons, or right image.
2. Verify the YouTube modal plays smoothly when clicking `▶ Watch OpexMX in 3 Min`.
3. Verify `Launch OpexMX ↗` safely opens `https://mx.opexcg.com/` in a new tab.
4. Run `tsc --noEmit` and `vite build` to guarantee zero build errors.