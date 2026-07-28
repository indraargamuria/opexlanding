# Frontend Structure Summary

## Tech Stack
- **React 19** + **TypeScript 6** + **Vite 8** (SPA)
- **TanStack Router** for routing (5 routes)
- Deployed on **Cloudflare Pages**

## Directory Layout
```
frontend/
├── index.html              # SPA entry point
├── package.json            # 3 runtime deps (react, react-dom, tanstack-router)
├── vite.config.ts          # Minimal config (React plugin only)
├── wrangler.jsonc          # Cloudflare Pages deployment (SPA fallback)
├── public/images/          # 18 stock photos
├── src/
│   ├── main.tsx            # React bootstrap → RouterProvider
│   ├── index.css           # Design tokens + app shell + responsive
│   ├── routeTree.tsx       # Router assembly (root + 5 child routes)
│   ├── routes/
│   │   ├── __root.tsx      # App Shell (100dvh, overflow-hidden, Header/Footer)
│   │   ├── index.tsx       # Home — 2-column: value prop + 3-card summary
│   │   ├── products.tsx    # Products — 2-column product grid with feature bullets
│   │   ├── experience.tsx  # Experience — 4-column case study grid with metric badges
│   │   ├── about.tsx       # About — 3-column founder profile cards
│   │   └── contact.tsx     # Contact — split form (left) + office cards (right)
│   └── components/layout/
│       ├── Header.tsx      # Compact ~52px sticky header with mobile drawer
│       ├── Footer.tsx      # Ultra-compact ~48px single-bar footer
│       └── Navigation.tsx  # Shared nav link config
```

## Architecture
- **Zero-scroll App Shell** — each route fits within `100dvh` (no scrolling on desktop/tablet)
- **Mobile** (< 768px): `overflow-y: auto` on main content, collapsed header with slide-out drawer
- **No component library** — all hand-built with inline `React.CSSProperties`
- **No state management** — only local `useState` hooks
- **No backend** — all content hardcoded

## Layout Components
| Component | Description |
|---|---|
| `Header` | ~52px sticky, brand-left / nav-center / CTA-right, hamburger on mobile → slide-out drawer with nav links + CTA |
| `Footer` | ~48px single bar: brand+© left / quick links center / newsletter pill right. Stacks on mobile, hides form on <480px |

## Routes
| Route | Content |
|---|---|
| `/` | 2-column: value prop headline + 3 highlight cards (AI Products, Ecosystem, Methodology) |
| `/products` | 2-column product grid — OpexAI / OpexMX with feature bullet lists, external CTAs (`target="_blank"`, `rel="noopener noreferrer"`) |
| `/experience` | 4-column case study grid — sector badges, metric highlights, outcomes |
| `/about` | 3-column founder cards — SVG illustrations, name, title, short bio |
| `/contact` | Split: contact form (left) + 3 office address cards (right) |

## Styling
- **CSS custom properties** (design tokens) + **inline `React.CSSProperties`**
- **Typography**: IBM Plex Sans (headings) + Inter (body)
- **Colors**: `#17A5DC` brand blue, `#0F4664` dark accent, `#081E2C` footer
- **Responsive**: Mobile breakpoints at 768px and 480px

## Notable
- CSS reduced from ~4.6 kB to ~2 kB after removing unused section styles
- Bundle reduced from ~339 kB to ~298 kB after removing unused IntersectionObserver animation components
- Active route indicator: `#17A5DC` 2px bottom bar in header nav
- No tests, no linting, no ESLint/Prettier configured
- Product links use `target="_blank" rel="noopener noreferrer"` with external link SVG icon
