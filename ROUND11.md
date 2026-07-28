Refactor the Hero Section component for the OpexCG website landing page using React, Tailwind CSS, and Lucide React icons. 

### Page Hierarchy & Design Objective
We want an asymmetric 2-column hero layout (`lg:grid-cols-12`) that positions OpexCG as an AI-driven consultancy firm while making our proprietary technology ecosystem diagram (`technology-partner.png`) the dominant visual centerpiece on the right side.

---

### Layout Specifications

#### Left Column (`lg:col-span-5`):
1. **Eyebrow Badge:** Compact badge reading `⚡ TECHNOLOGY-LED · AI-DRIVEN CONSULTING` (sky-blue theme).
2. **Main Headline:** Bold title `Enhancing Performance. Delivering Impact.`
3. **Sub-headline:** `Opex Consulting Group partners with organizations to solve complex operational challenges, optimize floor performance, and accelerate growth with proprietary AI and Industry 4.0 tech.`
4. **CTA Row:** 
   - Primary solid button: "Talk to Us"
   - Outline button: "OpexMX Demo"
   - Ghost button: "OpexAssistant ↗"
5. **Compact 2x2 Capability Grid:** Placed directly beneath the CTAs *inside* the left column to fill vertical space:
   - Card 1: 🤖 **AI Orchestration (OpexAssistant)** – Predictive analytics, ERP automation, and workflow orchestration.
   - Card 2: ⚙️ **Floor Execution (OpexMX)** – Computerized maintenance, NFC tag scanning, and real-time work order dispatch.
   - Card 3: 🔗 **Ecosystem Integration (OpexDX)** – Vendor-neutral connectivity bridging IT/OT for Siemens, Epicor, and custom MES.
   - Card 4: 📈 **Lean Operational Excellence** – Lean Six Sigma methodology paired with measurable floor outcomes.
   *Style Note:* Keep these micro-cards compact (`p-3`, `bg-slate-50`, small `text-[11px]` copy) so they fit tightly within the column without causing heavy vertical scroll.

---

#### Right Column (`lg:col-span-7`):
1. **Ecosystem Architecture Canvas (Primary Highlight):**
   - A large, clean card container housing `technology-partner.png` / `/ecosystem-diagram.png`.
   - Maximize height (`max-h-[520px]` or `550px`) and width so all diagram labels (Siemens, Epicor, OpexMX, workflow nodes) are crisp and easy to read.
2. **Slim Ecosystem Footer Strip:**
   - Positioned directly underneath the main diagram card.
   - Low-profile single line (`py-2 px-4 bg-slate-100` rounded strip):
     `ECOSYSTEM PARTNERS: Siemens · Epicor · Mendix · Zebra · UiPath · Kinaxis`

---

### Design & Styling Details
- **Theme:** Enterprise SaaS, clean minimalist, shadcn/ui aesthetic.
- **Color Palette:** Slate background tones (`bg-slate-50`), Sky blue primary accents (`sky-500` / `sky-600`), sharp dark typography (`text-slate-900`).
- **Responsiveness:** Stacks cleanly on mobile (`grid-cols-1`) and transitions smoothly to the 5:7 split on desktop (`lg:grid-cols-12`).