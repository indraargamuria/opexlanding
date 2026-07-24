# Building the OpexCG landing page with opencode — design tips + prompt sequence

## Part 1 — Why most AI-built landing pages read as "slop" (and the fix)

Right now, AI-generated design clusters around a few defaults regardless of what the brief actually is:

1. Warm cream background + high-contrast serif + terracotta accent
2. Near-black background + one neon/acid accent
3. Broadsheet layout — hairline rules, zero border-radius, dense newspaper columns

None of these are *wrong*, but they show up because they're the path of least resistance, not because anyone chose them for this brand. Your colleague's version fell into a different but related trap: generic SaaS-consulting template (stock factory photo hero, unsourced stat blocks, templated FAQ accordion, zero real people).

The fix isn't a better template. It's:

- **Real content before real design.** A page with actual founder photos and one specific, named project will feel more "alive" than a beautifully coded page with placeholder text — every time. Gather this first (see checklist below).
- **Grounded, specific choices**, not defaults. Palette and type should come from *your* world — Lean Six Sigma, industrial floors, SEA manufacturing — not a generic "professional services" moodboard.
- **Numbering only where it's real.** Your 4-phase framework (Assessment → Improvement → Solutioning → Implementation) is an actual sequence — 01/02/03/04 is earned there. Don't repeat that numbering pattern on things that aren't sequences (services, team members, logos) just because it "looks structured."
- **Motion used once, deliberately** — not scroll-triggered fades on every section. Pick one moment (e.g. the framework diagram assembling as you scroll into it) and leave everything else calm.

## Part 2 — Content checklist (gather this *before* you prompt opencode)

Design quality is capped by content quality. Before you touch the tool, try to have:

- [ ] 3 founder photos — ideally a real session/workshop photo, not corporate headshots — plus 2–3 sentence bios each (Pak Franklin, Pak Theam Wah, Pak Raj)
- [ ] 3–5 real project write-ups: client (or sector if client is confidential), problem, what you did, one real quantified outcome
- [ ] Client logos you're cleared to display (Toyota, Freyabadi, etc. — confirm permission)
- [ ] Real office photos or at least real address/phone per branch (SG, ID, MY)
- [ ] One real sentence per product (OpexMX, OpexDX, etc.) — no need for feature depth, per your point 11
- [ ] Your actual logo files and any existing brand colors, so the palette isn't invented from scratch

If some of these aren't ready, better to launch with 3 strong real projects than 8 vague ones — the "success stories" section is explicitly your last resort for a reason.

## Part 3 — Design direction to hand opencode (adapt as needed)

A starting point, grounded in your actual subject matter rather than generic "consulting site" look:

- **Palette**: pull 1–2 colors from your real logo, add a deep industrial neutral (charcoal/graphite, not pure black) and one warm working-hours accent (amber/rust — reads as "shop floor," not "SaaS"). Avoid cream-serif-terracotta and avoid neon-on-black.
- **Type**: a confident, slightly technical sans for headings (something with engineering/industrial character — think utilitarian, not soft rounded startup fonts) paired with a plain, highly readable body face. Avoid pairing two generic geometric sans fonts — that's the default.
- **Signature element**: the 4-phase framework diagram. Make it the one place you spend real design effort/motion — it's your actual IP, unlike anyone else's site.
- **Photography over illustration**: real people, real floors, real workshops. No generic 3D blob illustrations, no generic isometric icons, no stock handshake photos.
- **Numbering**: use 01–04 only for the framework. Don't use it for services, founders, or testimonials.

## Part 4 — Data model (this is where Hono/Drizzle/D1 earns its keep)

Because your differentiators are people, projects, and clients — not a generic feature list — model that content as real tables, not hardcoded JSX. This also means your team can update founders/projects without touching code later.

Rough schema to propose to opencode:

```
founders(id, name, title, bio, photo_url, order)
projects(id, client_name_or_sector, industry, challenge, approach, outcome_metric, is_confidential, photo_url, order)
clients(id, name, logo_url, industry, order)
offices(id, city, country, address, phone, is_hq)
products(id, name, one_liner, external_url, order)
testimonials(id, quote, author_name, author_title, client_id) -- optional, only if real quotes exist
```

Serve these via a small Hono API on Workers, query with TanStack Query from the Vite/React frontend, define routes with TanStack Router. This keeps the "people-based, alive" feeling honest — the content is real, structured, and maintainable, not baked into static markup.

## Part 5 — The actual opencode prompt sequence

Don't ask for the whole site in one prompt. Work in passes, the way a real design lead would — plan, critique, then build.

### Prompt 1 — Design plan (no code yet)

```
I'm building a landing page for Opex Consulting Group (OpexCG), an industrial
consultancy in Singapore/Indonesia/Malaysia. We do Lean Six Sigma + Industry 4.0
digital transformation consulting, training, and brand-agnostic technology
implementation (we integrate best-fit tools rather than selling one platform).

Before writing any code, give me a design plan only:
- Color palette: 4-6 named hex values, grounded in an industrial/engineering
  feel (deep neutral + one warm accent), not a generic SaaS palette. Avoid
  cream-background-plus-serif-plus-terracotta, avoid near-black-plus-neon-accent.
- Typography: a confident, slightly technical display face for headings, a
  plain readable body face, and a utility face for data/captions if needed.
  Justify why each fits an industrial consultancy specifically.
- Layout concept per section (hero, framework, what-we-do, founders,
  experience/projects, clients, products, contact) with a one-line rationale
  each, plus a rough ASCII wireframe.
- One signature element: our real 4-phase framework (Assessment, Improvement,
  Solutioning, Implementation) should be the one place we spend real visual
  effort and motion. Everything else should be calm and disciplined.
- Explicitly flag anything in your plan that resembles a generic AI-design
  default, and replace it before we proceed.

Do not write code yet. Show me the plan first.
```

### Prompt 2 — Critique it yourself (paste this after prompt 1's answer)

```
Review your own plan: which parts would you have produced for almost any
generic "industrial consulting" brief, versus which parts are specific to
OpexCG? Revise anything generic. Then confirm the final token system
(colors, type, layout, signature) before we build.
```

### Prompt 3 — Data layer first

```
Now set up the data layer in our monorepo (Hono + Drizzle + Cloudflare D1).
Create a schema for: founders, projects, clients, offices, products, and
optional testimonials [use the schema I drafted above, or paste your own].
Add a Hono API with read endpoints for each, and seed data using these real
entries: [paste your real founder bios, project write-ups, client list,
office addresses]. Don't use placeholder/lorem content — use what I've given
you, and leave clearly marked TODOs anywhere content is still missing.
```

### Prompt 4 — Build section by section

```
Using the design plan we agreed on and the API you just built, implement the
hero and framework sections first in the Vite/React app, wired to TanStack
Query against the Hono API. Match the token system exactly — no default
Tailwind blues/grays outside our palette, no generic card-with-icon grids
unless I've asked for one. Show me a screenshot equivalent (describe the
result) before moving to the next section.
```

Then repeat prompt 4's pattern per section: "what we do" → "founders" → "experience/projects" → "clients" → "products" → "contact." Building and reviewing one section at a time is slower but is exactly what prevents the templated, everything-at-once look.

### Prompt 5 — Final self-critique (run this at the end)

```
Look at the full page as built. Where does it still resemble a generic
consulting template rather than something specific to OpexCG? Where is there
decoration that doesn't serve the content? Cut one thing. Also verify: mobile
responsiveness, visible keyboard focus states, and that animation respects
prefers-reduced-motion.
```

## Part 6 — Deploy

Once it's built: `wrangler deploy` for the Worker/Pages side, D1 migrations via `drizzle-kit` applied to your D1 binding, and confirm environment bindings (DB, any secrets) are set in `wrangler.toml` before the first deploy.

---

**One last piece of advice**: resist the urge to let opencode one-shot the whole thing from a single giant prompt, even though it's tempting. Vague or broad requests are exactly what produces the AI-slop look — the tool defaults to safe, generic choices when it doesn't have a real point of view to follow. The plan-critique-build-critique loop above is slower but is the actual mechanism that keeps it grounded in Opex's real identity.