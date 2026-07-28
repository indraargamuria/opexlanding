# Task Instructions: Refactor Multi-Page App into High-Density Zero-Scroll Layout (App Shell Architecture)

## Objective
Refactor all page views (`/`, `/products`, `/experience`, `/about`, `/contact`) into a strict **high-density, zero-scroll layout** where each route fits within a single screen ($100\text{dvh}$ view height). The Header, Footer, and Page Content must remain readable, compact, and scannable without requiring the user to scroll vertically on desktop or tablet viewports.

---

## Technical Context & Constraints
* **Framework:** React 19 + TypeScript 6 + Vite 8
* **Routing:** TanStack Router (`@tanstack/react-router`)
* **Styling:** CSS Custom Properties (`src/index.css`) + Inline React Styles
* **Layout Goal:** Strict $100\text{dvh}$ viewport height (`h-dvh flex flex-col overflow-hidden`).
* **Design Philosophy:** Enterprise SaaS density (similar to high-density dashboards/control panels).

---

## Core Layout Architecture

### 1. Root App Shell Layout (`__root.tsx`)
Lock the primary viewport container so no page causes outer scrollbars:

```tsx
// src/routes/__root.tsx
export const Route = createRootRoute({
  component: () => (
    <div className="h-dvh w-vw flex flex-col overflow-hidden bg-slate-50 text-slate-900">
      {/* Compact Header (~52px) */}
      <Header/>

      {/* Dynamic Route Content (Fills remaining height) */}
      <main className="flex-1 overflow-hidden p-4 md:p-6 min-h-0">
        <Outlet/>
      </main>

      {/* Compact Footer (~40px - 48px) */}
      <Footer/>
    </div>
  ),
});
Component Refactoring Guidelines1. Compact Header (src/components/layout/Header.tsx)Reduce vertical padding from spacious py-4/py-6 down to compact py-2 or fixed height h-13 (~52px).Scale down logo height and nav text font sizes (text-xs or text-sm, font-medium).Keep active link indicator (#17A5DC) as a thin 2px underline or subtle pill tag.Shrink CTA button padding (px-3 py-1.5 text-xs).2. Ultra-Compact Single-Bar Footer (src/components/layout/Footer.tsx)Replace the tall 4-column block with a single horizontal bar layout (~40px to 48px height):Desktop: flex items-center justify-between px-6 py-2 bg-[#081E2C] text-slate-300 text-xsLeft: Brand logo icon + concise copyright statement.Center: Inline Quick Links (About | Products | Experience | Contact) as small muted text.Right: Compact inline newsletter pill (small text input + #17A5DC mini button) OR quick social icons.Eliminate large stacked columns, paragraph descriptions, and excessive whitespace.3. Route Views Density Optimization (src/routes/*)Each page route must structure its layout using standard grid/flex techniques so all elements fit cleanly without overflowing:Home (/): Replace long multi-section scrolling with a 2-column split or 3-card summary grid highlighting Core Value Prop, Ecosystem Bridge, and Top Capabilities.Products (/products): Render a high-density 2x2 or 3-column ProductGrid where cards use compact paddings, brief feature bullet points, and prominent external CTA links (target="_blank", rel="noopener noreferrer").Experience (/experience): Compact grid of case studies with metric badges and tight typography.About (/about): Horizontal row or compact grid for founder/leadership profiles.Contact (/contact): Split view (Form on Left, Compact Office Cards on Right) filling exact remaining height.Responsive Handling for Mobile & Small ScreensSince physical screen sizes on mobile ($< 768\text{px}$) may not fit dense content inside $100\text{dvh}$ without clipping text:Desktop & Tablet ($> 768\text{px}$): Enforce strict overflow-hidden (Zero Scroll).Mobile ($< 768\text{px}$): Allow localized vertical scrolling inside <main> (overflow-y-auto) if content exceeds mobile screen bounds, while keeping Header and Footer fixed/sticky.Execution StepsRoot Container: Update src/routes/__root.tsx to set fixed full viewport height (h-dvh flex flex-col overflow-hidden).Compact Footer: Redesign src/components/layout/Footer.tsx into a streamlined single-line horizontal dark bar (#081E2C).Compact Header: Reduce padding/margins in src/components/layout/Header.tsx for a dense top navigation bar.Refactor Page Views: Update components across /, /products, /about, /experience, and /contact to use high-density layouts (grid, flex-1, compact text sizes) fitting the remaining main canvas.Validation: Run tsc --noEmit and vite build to verify clean builds without layout regressions.