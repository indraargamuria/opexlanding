# OpexCG Landing Page — Frontend Structure

## Technology Stack

| Layer | Choice |
|-------|--------|
| **Framework** | React 19 + TypeScript 6 |
| **Build tool** | Vite 8 (`@vitejs/plugin-react`) |
| **Router** | TanStack Router 1.170 (file-based route tree) |
| **Styling** | Tailwind CSS 4 (`@tailwindcss/vite` plugin) |
| **Icons** | lucide-react 1.27 |
| **Deployment** | Cloudflare Pages (Wrangler, SPA fallback) |

There is no global state management library (only `useState` for local UI state) and no dedicated API layer — this is a static marketing landing page.

---

## Directory Map

```
frontend/
├── src/
│   ├── routes/              # Page-level route components (TanStack Router)
│   │   ├── __root.tsx        # Root layout shell (Header + Outlet + Footer)
│   │   ├── index.tsx         # Home page
│   │   ├── products.tsx      # Product overview page
│   │   ├── experience.tsx    # Case studies / client experience
│   │   ├── about.tsx         # Founder profiles
│   │   └── contact.tsx       # Contact form + office locations
│   ├── components/
│   │   ├── layout/           # Shared structural components
│   │   │   ├── Header.tsx    # Sticky nav + mobile slide-out drawer
│   │   │   ├── Navigation.tsx  # Nav link definitions (shared by Header & Footer)
│   │   │   └── Footer.tsx    # Logo, nav links, newsletter subscribe form
│   │   └── OpexMxVideoModal.tsx  # YouTube embed overlay (used on Home)
│   ├── assets/               # Imported static assets (hero.png, svg logos)
│   ├── main.tsx              # App entry point (creates root, renders RouterProvider)
│   ├── index.css             # Tailwind import + @theme + base layer + CSS vars
│   └── routeTree.tsx         # Programmatic route tree definition
├── public/
│   ├── images/               # Public static images (hero, dashboards, founders, etc.)
│   ├── favicon.svg
│   └── icons.svg
├── scripts/
│   └── fetch-pexels-images.js  # Image download script for case study photos
├── index.html                # Vite HTML entry
├── vite.config.ts            # Vite config (Tailwind + React plugins)
├── tsconfig.json             # TypeScript config (strict, es2023 target)
├── wrangler.jsonc            # Cloudflare Pages deployment config
├── package.json
└── .gitignore
```

---

## Routing Structure

All routes are children of a single root layout (`__root.tsx`) and assembled in `routeTree.tsx`:

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | `HomePage` | Hero, 2×2 capability grid, partner strip, video CTA |
| `/products` | `ProductsPage` | 3-column product cards (OpexMX, OpexAssistant, OpexDX) + metric bar + ecosystem tags |
| `/experience` | `ExperiencePage` | 2×2 grid of case study cards with KPIs and tech tags |
| `/about` | `AboutPage` | 3-column founder cards with SVGs |
| `/contact` | `ContactPage` | Split layout: contact form (left) + office details (right) |

The root layout provides a sticky `<Header />`, a scrollable `<main>` outlet, and a fixed `<Footer />`.

---

## Global State & Data Flow

There is **no global state management** (no Zustand, Redux, Context, or React Query). All state is component-local `useState`:

- `Header.tsx` — `menuOpen` (mobile drawer toggle)
- `index.tsx` — `videoOpen` (video modal visibility)

Data like product definitions, case studies, founder bios, and office details are hardcoded as static arrays/constants within each route file.

---

## Component Library

There is no external UI component library (e.g., shadcn/ui, MUI, Radix). All components are hand-authored with inline styles or Tailwind utility classes. Patterns include:

| Component | Location | Notes |
|-----------|----------|-------|
| `Header` | `components/layout/Header.tsx` | Sticky, desktop nav + mobile slide-out drawer with overlay |
| `Footer` | `components/layout/Footer.tsx` | Dark bar with logo, nav links, email subscribe |
| `Navigation` | `components/layout/Navigation.tsx` | Pure data: shared `navLinks` array |
| `OpexMxVideoModal` | `components/OpexMxVideoModal.tsx` | Escape-key-aware YouTube modal |
| `NavLink / DrawerNavLink` | `Header.tsx` (private) | Active-route highlighting via `useRouterState` |
| `ProductCard` | `routes/products.tsx` (private) | Full-featured product display card |
| `CaseStudyCard` | `routes/experience.tsx` (private) | Horizontal split card (image + content) |

---

## Visual & Design System

### Color Palette

Defined in `src/index.css` via Tailwind v4's `@theme` directive, with fallback CSS custom properties:

| Token | Hex / Value | Usage |
|-------|-------------|-------|
| `--color-brand` | `#17A5DC` | Primary buttons, active nav links, interactive accents |
| `--color-brand-hover` | `#1490C2` | Button hover state |
| `--color-brand-active` | `#117BA8` | Button active/pressed state |
| `--color-dark-accent` | `#0F4664` | Footer background (`#081E2C`), secondary UI accents |
| `--color-light-bg` | `#F8FBFD` | Page background (very subtle blue-gray) |
| `--color-dark-text` | `#1F2937` | Primary text color |
| `--color-muted` | `#6B7280` | Secondary text, metadata, placeholders |
| `--color-border` | `#E2E8F0` | Card borders, dividers, input borders |
| `--white` | `#FFFFFF` | Card backgrounds, page shell |

### Typography

| Token | Font Stack | Usage |
|-------|------------|-------|
| `--font-heading` | `'IBM Plex Sans', system-ui, sans-serif` | All `h1`–`h4`, buttons, labels, logos |
| `--font-body` | `'Inter', system-ui, sans-serif` | Paragraphs, form inputs, body copy |

Font sizes are **not** part of a design token scale — they are set ad-hoc inline (e.g., `0.7rem`, `0.8125rem`, `1.25rem`, `1.5rem`).

### Border Radii

No global radius tokens; set per-element:

| Value | Usage |
|-------|-------|
| `4px` | Input fields, subscribe button |
| `6px` | Primary/secondary CTAs, inputs |
| `8px` | Founder cards, office cards, metric bar sections |
| `10px` | Home capability grid cards |
| `12px` | Video modal |
| `20px` | Header "Let's Talk" CTA (pill) |
| `rounded-lg` / `rounded-xl` / `rounded-2xl` | Various cards and containers |

### Shadows

- Cards: `0 1px 4px rgba(0,0,0,0.04)` (subtle), `0 2px 8px rgba(0,0,0,0.04)` (home hero image)
- Mobile drawer: `-4px 0 24px rgba(0,0,0,0.1)`
- Video modal: `0 20px 60px rgba(0,0,0,0.5)`

### Dark / Light Mode

**Light mode only.** No dark-mode variables, media queries, or `prefers-color-scheme` support exist.

### Overall Look & Feel

Professional, clean B2B SaaS corporate site with:
- **High-density information** layout (compact font sizes, tight spacing)
- **Card-based UI** with white backgrounds, subtle borders, and minimal shadows
- **Brand accent** in cyan-blue (`#17A5DC`) used sparingly for CTAs, icons, and active states
- **Monochromatic gray palate** for text hierarchy (slate/neutral tones)
- **Terminal-style mockups** (`bg-[#0F172A]` dark code panels) for product UI previews on Products page
- **Footer** is dark (`#081E2C`) with low-opacity white text — a common enterprise pattern

---

## API Layer & Service Integrations

There is **no backend API layer** in this codebase. External references are static links:

| Link | Target |
|------|--------|
| `https://assistant.opexcg.com` | OpexAssistant external app |
| `https://mx.opexcg.com/` | OpexMX external platform |
| `https://app.opexcg.com/assistant` | OpexAssistant launch |
| `https://www.youtube.com/embed/H4I4rk4Qf0M` | OpexMX demo video (YouTube embed) |

The contact form (`/contact`) has no submission handler — `onSubmit` calls `e.preventDefault()`.

Image paths reference external Pexels URLs (in `experience.tsx`) or local `public/images/` files.

---

## Deployment

Configured via `wrangler.jsonc` for **Cloudflare Pages**:
- Worker name: `landingpageopexcg`
- Static assets directory: `./dist` (Vite build output)
- SPA fallback: enabled (all routes serve `index.html`)
- Build command (from `package.json`): `tsc && vite build`
