# Task Instructions: Refactor Home Page (`/`) to Ultra-Dense OpexMX Showcase Matching Reference Architecture

## Objective
Refactor `src/routes/index.tsx` into a multi-section, high-density layout inspired by reference enterprise layouts (`image_fd93cd.jpg`). Position **OpexMX** as the hero product showcase, incorporating both an interactive video modal trigger (`https://www.youtube.com/watch?v=H4I4rk4Qf0M`) and direct off-site workspace redirection to `https://mx.opexcg.com/`.

---

## Page Layout & Section Breakdown (`src/routes/index.tsx`)

### Row 1: Hero Split (OpexMX Launch & Video Trigger)
* **Left Column:**
  * **Badge:** `⚡ Industry 4.0 CMMS & MES` in `#17A5DC` brand blue.
  * **Headline:** "Enhancing Operational Performance. Delivering Impact with OpexMX."
  * **Subheadline:** "Computerized Maintenance Management System (CMMS) & MES built for the people who actually run the floor."
  * **CTA Row:**
    * **Primary Button:** `Launch OpexMX ↗` -> Direct external link to `https://mx.opexcg.com/` (`target="_blank"`, `rel="noopener noreferrer"`, Lucide `ExternalLink` icon).
    * **Secondary Video Button:** `▶ Watch OpexMX in 3 Min` -> Opens a lightbox video modal embedding `https://www.youtube.com/embed/H4I4rk4Qf0M?autoplay=1`.
* **Right Column:**
  * Render `public/images/technology-partner.png` in a sleek rounded container (`rounded-xl border border-slate-200 bg-white p-2 shadow-sm`) with a badge overlay: *"Integrated Ecosystem for Siemens, Epicor & OpexMX"*.

---

### Row 2: 4-Column OpexMX Capabilities Grid (Matching Reference Design)
Render 4 compact icon cards in a horizontal row:
1. **Asset & NFC Scanning:** Instant asset identification via NFC tag scanning and mobile access.
2. **Work Order Dispatch:** Real-time ticket reporting, supervisor routing, and paperless execution.
3. **Preventive Maintenance:** Automated checklists, inventory tracking, and downtime minimization.
4. **Real-Time Analytics:** Live visibility into team workload, MTTR, and response times.

---

### Row 3: "Why OpexMX?" Value Proof Split
* **Left Side (Visual Box):** High-density feature highlight card showcasing mobile work order execution and zero paperwork.
* **Right Side (3 Key Checkmarks):**
  * `✓ Operator-Centric Mobile App:` Fast execution with zero duplicate data entry.
  * `✓ Vendor-Neutral Connectivity:` Seamless integration with Siemens, Epicor, and custom MES.
  * `✓ Real-Time Floor Impact:` Instant visibility into asset history and response metrics.

---

### Row 4: Ecosystem & Technology Marquee
* Horizontal logo ticker bar featuring Siemens, Epicor, Mendix, Zebra, UiPath, and Kinaxis.

---

## Video Modal Component (`OpexMxVideoModal.tsx`)
Create a simple modal component using standard React state:
* When `isOpen` is true, render a dark backdrop with an embedded iframe:
  `<iframe src="https://www.youtube.com/embed/H4I4rk4Qf0M?autoplay=1" allow="autoplay; encrypted-media" allowFullScreen />`
* Include a close `X` button and backdrop click handler.

---

## Technical & Responsive Constraints
* **Density Styling:** Use compact margins (`gap-3`, `p-3` to `p-4`), crisp font sizes (`text-xs` to `text-sm` for body), and clean blue borders (`#17A5DC`).
* **Desktop ($> 1024px$):** Layout fills $100\text{dvh}$ bounds without awkward overflow gaps.
* **Mobile ($< 768px$):** Stacks rows vertically with `overflow-y-auto` inside `<main>` while keeping the Header and Footer fixed.
* **Security Attributes:** All external outbound links to `https://mx.opexcg.com/` MUST use `target="_blank"` and `rel="noopener noreferrer"`.

---

## Execution Verification
1. Click `▶ Watch OpexMX in 3 Min` to verify the YouTube modal opens and plays smoothly.
2. Click `Launch OpexMX ↗` to confirm it opens `https://mx.opexcg.com/` in a new tab safely.
3. Run `tsc --noEmit` and `vite build` to guarantee zero build errors.