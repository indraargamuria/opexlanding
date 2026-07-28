Frontend Structure Summary
Tech Stack
- React 19 + TypeScript 6 + Vite 8 (SPA)
- TanStack Router for routing
- Deployed on Cloudflare Pages
Directory Layout
frontend/
├── index.html            # SPA entry point
├── package.json          # 3 runtime deps (react, react-dom, tanstack-router)
├── vite.config.ts        # Minimal config (React plugin only)
├── wrangler.jsonc         # Cloudflare Pages deployment
├── public/
│   └── images/           # 18 stock photos (JPG/PNG)
├── src/
│   ├── main.tsx          # React bootstrap → RouterProvider
│   ├── index.css         # 429-line global stylesheet (design tokens + utilities)
│   ├── routeTree.tsx     # Single route: / → LandingPage
│   └── components/       # 16 section-level components (flat structure)
Architecture
- Single page — all 14 sections compose one landing page
- No component library — all hand-built with inline React.CSSProperties
- No state management — only local useState hooks
- No backend — all content hardcoded; Hono + D1 planned per PRD
Components (16)
Component	Purpose
Header	Sticky nav + hamburger menu
Hero	Headline, CTA, hero image with Ken Burns animation
TrustBar	Client logos row
Products	OpexAI & OpexMX product cards
ProductsToEcosystemBridge	Transition sentence
TechnologyPartners	Ecosystem image
HowWeDeliver	4-phase methodology + capabilities grid
Experience	Filterable case studies with count-up numbers
Testimonials	3 testimonial cards (placeholder headshots)
Founders	3 founder profiles with SVG illustrations
Clients	Infinite client logo marquee
Faq	5-question accordion
ClosingCta	Dark CTA band
Contact	Form + 3 office addresses (SG, ID, MY)
Footer	Sitemap links + copyright
PlaceholderImage	Reusable dashed-border placeholder
Styling
- CSS custom properties (design tokens) + inline styles
- Typography: IBM Plex Sans (headings) + Inter (body)
- Colors: #17A5DC brand blue, #0F4664 dark accent
- Responsive: Breakpoints at 768px and 480px
- Animations: IntersectionObserver for scroll-triggered fade-ins, prefers-reduced-motion respected
Notable
- Pre-launch: many sections marked /* DRAFT COPY */
- No tests, no linting, no ESLint/Prettier configured
- Stock images via Pexels API; client logos from SimpleIcons CDN
- .env at repo root contains plaintext Pexels API key