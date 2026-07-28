# Task Instructions: Refactor Single-Page Landing Page to Multi-Page Architecture (TanStack Router) + Mobile-First Design

## Objective
Refactor the current single-page React SPA landing page into a clean, fully responsive multi-page architecture using **TanStack Router**. Retain the core design aesthetic, global tokens, and responsive behavior while restructuring section-level components into dedicated routes, locking in a persistent Header & Footer design based on reference layouts, ensuring seamless mobile UX across all viewports, and handling external product redirections safely.

---

## Technical Context & Tech Stack
* **Framework:** React 19 + TypeScript 6 + Vite 8
* **Routing:** TanStack Router (`@tanstack/react-router`)
* **Deployment:** Cloudflare Pages (`wrangler.jsonc`)[cite: 1]
* **Styling:** CSS Custom Properties (`src/index.css`) + Inline React Styles (`React.CSSProperties`)[cite: 1]
* **Icons:** `lucide-react` (or inline SVGs where applicable)
* **Breakpoints:** Mobile (`< 480px`), Tablet (`768px`), Desktop (`> 1024px`)[cite: 1]

---

## Design Tokens & Color Palette (Strict Adherence)
Maintain visual continuity with existing design tokens[cite: 1] and reference styling:

* **Primary Brand Blue:** `#17A5DC` (Used for primary CTA buttons, active state highlights, link hovers, subscribe button)[cite: 1].
* **Dark Accent / Footer BG:** `#0F4664` / Deep Navy `#0B2838` (Used for dark footer background, high-contrast dark sections)[cite: 1].
* **Header Background:** Crisp White (`#FFFFFF`) with subtle bottom border (`#E5E7EB`) or backdrop blur on scroll[cite: 1].
* **Text Colors:** Primary Headings `#0F172A`, Body `#475569`, Light Muted `#94A3B8`.

---

## Global Layout Requirements (Header, Footer & Responsiveness)

### 1. Persistent Header Layout
* **Desktop:** Clean, high-contrast light header with brand logo on the left, horizontal nav links centered/right, and a distinct primary CTA pill button (`Let's Talk` / `Contact Us`) on the far right styled in Brand Blue (`#17A5DC`)[cite: 1].
* **Mobile (< 768px):**
  * Brand logo on the left, primary mobile action/hamburger toggle button on the right.
  * Slide-out / full-width collapsible drawer menu for navigation links.
  * CTA button prominently rendered inside the mobile menu drawer or persistent as a compact sticky action.
* **Active Indicator:** Active route links MUST feature a prominent active state indicator (e.g., bottom highlight bar or colored text in `#17A5DC`) on desktop, and highlighted drawer items on mobile[cite: 1].
* **Global Scope:** Rendered at the root route (`__root.tsx`) so it stays persistently visible across all pages without layout shifts.

### 2. Persistent Dark Footer Layout
* **Visual Style:** Deep dark accent background (`#0F4664` or `#081E2C`) featuring multi-column navigation[cite: 1]:
  * **Col 1 (Brand):** Logo + short company description + copyright string at the bottom.
  * **Col 2 (Quick Links):** About Us, Services/Products, Industries, Insights, Contact.
  * **Col 3 (Social / Follow):** Social icon links with subtle circular container styling.
  * **Col 4 (Newsletter):** Inline email input + `#17A5DC` blue `Subscribe` action button[cite: 1].
* **Mobile Responsiveness (< 768px):**
  * Stack columns vertically into a clean 1-column layout with comfortable padding (minimum `16px` horizontal padding).
  * Newsletter form input and subscribe button stack cleanly on ultra-small screens (`< 480px`).
  * Touch-friendly tap targets for all footer links (minimum touch height `44px`).
* **Bottom Bar:** Subtle border separator containing copyright info and legal links (Privacy Policy, Terms of Use), wrapping cleanly on mobile.

---

## Key Architecture & Scope

### 1. Multi-Page Route Architecture
Transition from a flat single route (`/`) to a structured route tree using TanStack Router[cite: 1]:

* `/` — **Home Route:** Restructure to feature high-level hero, trust bar, ecosystem overview, method, testimonials, and closing CTA[cite: 1].
* `/products` — **Products Index Route:** Showcase product suites, high-level architecture/value props, and external product redirection cards[cite: 1].
* `/experience` — **Case Studies Route:** Dedicated page for filterable case studies, metrics count-up, and client highlights[cite: 1].
* `/about` — **Company / Founders Route:** Deep dive into leadership profiles, partners, and philosophy[cite: 1].
* `/contact` — **Contact Route:** Dedicated contact form, office addresses (SG, ID, MY), and inquiries[cite: 1].

### 2. Product Redirection UX & Security (Mobile-Optimized)
On both the Home `/` and `/products` pages, product cards (e.g., OpexAI, OpexMX) **must not open internal detail routes**[cite: 1]. Instead, they must serve as gateways redirecting to external application/product domains.

* **UX Standards:**
  * Primary Action CTA must explicitly state external movement (e.g., `"Launch Platform"`, `"Visit App"`, `"Open Dashboard"`).
  * Always render an external link icon (`<ExternalLink className="w-4 h-4" />`) next to the CTA label.
  * Full-width action buttons on mobile screens to maximize touch usability.
* **Security & Behavior:**
  * External links MUST open in a new tab using `target="_blank"`.
  * External links MUST enforce `rel="noopener noreferrer"`.

---

## File Structure Target State

```text
src/
├── main.tsx
├── index.css                 # Responsive media queries & brand tokens (#17A5DC, #0F4664)
├── routeTree.tsx
├── routes/
│   ├── __root.tsx            # Persistent Layout: <Header/> + <Outlet/> + <Footer/>
│   ├── index.tsx             # Home Page
│   ├── products.tsx          # Products Page (External redirect focus)
│   ├── experience.tsx        # Case Studies Page
│   ├── about.tsx             # Founders & Technology Partners
│   └── contact.tsx          # Contact Form & Offices
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Responsive Light style + #17A5DC CTA + Mobile Drawer
│   │   ├── Footer.tsx        # Dark #0F4664 style + 4-col responsive grid layout
│   │   └── Navigation.tsx
│   ├── products/
│   │   ├── ProductCard.tsx   # Enforces target="_blank", rel="noopener noreferrer", ExternalLink icon
│   │   └── ProductGrid.tsx   # Mobile 1-col, Tablet 2-col, Desktop 3-col
│   └── [existing sections reorganized by domain]
Code Reference: Root Layout (__root.tsx)
Ensure Header and Footer wrap the <Outlet /> so they remain fixed across page transitions:

TypeScript
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header/>
      <main className="flex-1">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  ),
});
Execution Steps
Root & Layout Setup: Configure src/routes/__root.tsx with persistent Header and Footer using the exact layout and palette specs (#17A5DC primary, #0F4664 dark footer)[cite: 1]. Ensure overflow-x-hidden prevents mobile side-scrolling.

Mobile Header & Drawer: Build responsive navigation in Header.tsx with a hamburger toggle menu for screen widths < 768px, using TanStack's <Link> components[cite: 1].

Responsive Footer: Implement mobile vertical stacking for Footer.tsx columns and email input elements for screens < 768px.

Product Redirect Refactor: Refactor Products.tsx cards to use the external link structure (target="_blank", rel="noopener noreferrer", external link icon) with mobile touch-friendly buttons.

Page Component Migration: Move remaining landing page sections into their corresponding route files (/, /products, /about, /experience, /contact)[cite: 1].

Build Check: Run tsc --noEmit and vite build to ensure clean execution and error-free builds[cite: 1].