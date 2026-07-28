# Task Instructions: Reposition Home Page (`/`) to OpexCG Consulting Firm with AI & Proprietary Accelerators

## Objective
Refactor `src/routes/index.tsx` to position **OpexCG** as an AI-driven Industry 4.0 operational consulting firm. Balance the narrative so OpexCG is the primary consulting parent, while **OpexAssistant** (AI Engine), **OpexMX** (CMMS/MES), and **OpexDX** (Ecosystem Integration) are highlighted as proprietary technology accelerators.

---

## UX Layout & Architecture Specifications

### 1. Hero Left Column (50% Width — OpexCG Consulting Value Prop)
* **Top Badge:** `⚡ TECHNOLOGY-LED · AI-DRIVEN CONSULTING` in `#17A5DC`.
* **Main Headline:** "Enhancing Performance. Delivering Impact." (`text-2xl md:text-3xl font-bold text-slate-900`).
* **Subheadline:** "Opex Consulting Group partners with organizations to solve complex operational challenges, optimize floor performance, and accelerate growth with proprietary AI and Industry 4.0 tech."
* **Action CTAs (3 Button Row):**
  1. `Talk to Us` -> Primary filled blue button (`/contact` via TanStack Router).
  2. `▶ OpexMX Demo` -> Video modal trigger (`https://www.youtube.com/embed/H4I4rk4Qf0M?autoplay=1`).
  3. `OpexAssistant ↗` -> External link (`target="_blank"`, `rel="noopener noreferrer"`, `ExternalLink` icon).

---

### 2. Hero Right Column (50% Width — Ecosystem Visual)
* Container for `public/images/technology-partner.png`.
* Styled in a crisp rounded card (`rounded-xl border border-slate-200 bg-white p-2 shadow-sm flex items-center justify-center`).
* Shows the central OpexDX hub connecting Siemens, Epicor, OpexMX, and OpexAssistant.

---

### 3. Middle Canvas — OpexCG 4 Proprietary Accelerators (Dense Grid)
Replace single-product cards with a 4-column (or 3-column) grid showcasing how OpexCG delivers results:

1. **AI Orchestration (OpexAssistant):** Predictive analytics, ERP automation, and workflow orchestration.
2. **Floor Execution (OpexMX):** Computerized maintenance, NFC tag scanning, and real-time work order dispatch.
3. **Ecosystem Integration (OpexDX):** Vendor-neutral connectivity bridging IT/OT for Siemens, Epicor, and custom MES.
4. **Lean Operational Excellence:** Lean Six Sigma methodology paired with measurable floor outcomes.

---

### 4. Bottom Canvas — Ecosystem Ticker & Footer
* Clean logo ticker bar: `ECOSYSTEM PARTNERS: Siemens • Epicor • Mendix • Zebra • UiPath • Kinaxis`.
* Single-line compact dark footer (`#081E2C`).

---

## Technical Constraints & Safety Rules
* **No Collisions:** Use clean CSS flex/grid flow (`flex flex-col justify-between h-full`). Do not use negative margins or absolute overlays that clip text.
* **App-Shell Bounds:** Fits neatly inside $100\text{dvh}$ on desktop, with `overflow-y-auto` fallback on mobile screens (`< 768px`).
* **External Security:** All external outbound links use `target="_blank"` and `rel="noopener noreferrer"`.

---

## Execution Verification
1. Verify headline focuses on OpexCG as a consulting firm.
2. Confirm OpexMX, OpexAssistant, and OpexDX are framed as proprietary accelerators.
3. Verify video modal plays smoothly and external CTAs open safely in a new tab.
4. Run `tsc --noEmit` and `vite build` to guarantee zero build errors.