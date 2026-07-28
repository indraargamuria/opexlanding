Refactor the Products page component (`Products.tsx`) for the OpexCG web application using React, Tailwind CSS, and Lucide React icons.

### Design Objective & Aesthetic
Transform the generic 2-card product layout into a high-density Enterprise SaaS Product Suite Workbench (`max-w-7xl`). The style must be compact, minimalist, dark/slate accented, and information-dense (shadcn/ui style), giving the impression of high-value industrial software tools.

---

### 1. Header Section
- **Page Title:** `Proprietary AI & Industry 4.0 Suite`
- **Subtitle:** `Built by OpexCG consultants to accelerate factory floor execution, predictive automation, and enterprise system integration.`
- **Top Metrics Strip (Compact 4-Stat Header Bar):**
  - `3 Core Engines` | `99.9% Floor Uptime` | `Epicor & Siemens Native` | `<100ms IT/OT Latency`

---

### 2. Product Suite Grid (3-Column Layout: `grid-cols-1 lg:grid-cols-3 gap-6`)

#### Card 1: OpexMX (Execution & CMMS)
- **Header Badge:** `OpexMX` · `v3.2 Stable` · `Live Engine`
- **Mini-UI Preview Component:**
  - Mock interactive widget showing a dark-themed "Floor Dispatch" log:
    - `WO-8821`: Injection Molding Line #2 — *Active* (NFC Tag Verified)
    - `WO-8822`: Stamping Press #4 — *Dispatched*
- **Description:** Real-time manufacturing execution system connecting machines, operators, and ERP planning modules into a single source of truth.
- **Key Capabilities (Compact Bullet List with Check Icons):**
  - NFC/QR tag scanning & mobile work order dispatch
  - Computerized Maintenance (CMMS) & downtime tracking
  - Brand-agnostic floor integration (Siemens, Mitsubishi, Fanuc)
- **Tech Spec Bar:** `Protocol: OPC-UA / MQTT` | `Mode: Offline-First Edge`
- **CTAs:** `Launch Platform` (Primary) | `View Spec Sheet` (Ghost)

#### Card 2: OpexAssistant / OpexAI (Orchestration & Copilot)
- **Header Badge:** `OpexAssistant` · `AI Agentic Engine`
- **Mini-UI Preview Component:**
  - Mock prompt interface box showing an AI workflow:
    - User query: *"Predict throughput bottleneck for Shift B."*
    - Agent Response: *"Scrap rate spike detected on Line 3. Triggered Epicor maintenance log."*
- **Description:** Context-aware AI copilot for predictive analytics, defect detection via computer vision, and automated ERP workflows.
- **Key Capabilities:**
  - Automated ERP data entry & approval routing
  - Computer vision defect detection & yield forecasting
  - Natural language querying across plant telemetry
- **Tech Spec Bar:** `LLM: Custom fine-tuned` | `Privacy: Zero-Retention`
- **CTAs:** `Launch Platform` (Primary) | `AI Architecture Docs` (Ghost)

#### Card 3: OpexDX (Ecosystem Integration Layer)
- **Header Badge:** `OpexDX` · `Integration Middleware`
- **Mini-UI Preview Component:**
  - Mock Pipeline Connection Flow widget:
    - `[PLC / OT Data]` ───⚡───> `[OpexDX Engine]` ───⚡───> `[Epicor ERP]`
- **Description:** Vendor-neutral connectivity layer bridging IT/OT silos between Siemens, Epicor, Mendix, and legacy MES platforms.
- **Key Capabilities:**
  - Bi-directional Epicor REST & Kinetic API connectors
  - Zero-code data mapping between PLC feeds & ERP tables
  - Real-time event streaming and payload validation
- **Tech Spec Bar:** `Throughput: 10k msg/sec` | `Connectors: 25+ Pre-built`
- **CTAs:** `Explore Integrations` (Primary) | `API Specs` (Ghost)

---

### 3. Bottom Integration Stack Strip
Add a dense, full-width bottom container:
- Label: `ENTERPRISE ECOSYSTEM COMPATIBILITY`
- Pills/Badges: `Epicor Kinetic` | `Siemens MindSphere / Opcenter` | `Mendix Low-Code` | `Zebra Industrial` | `UiPath RPA` | `Kinaxis RapidResponse` | `PostgreSQL / Cloudflare D1`

---

### Styling Guidelines
- Compact padding (`p-4` to `p-5` for cards), crisp typography (`text-xs` for details, `text-sm` for features, `text-base` for headings).
- Use subtle borders (`border-slate-200`), muted slate backgrounds (`bg-slate-50`), and primary sky accents (`bg-sky-500`, `text-sky-600`).