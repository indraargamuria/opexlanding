# OpexCG landing page — frontend-first opencode prompt sequence

Backend (Hono + Drizzle + D1) comes later. This sequence builds the Vite/React
frontend only, with placeholder content, wired so real data/API can drop in
without restructuring components.

Run these one at a time. Don't skip ahead even if opencode offers to do more —
reviewing each task before the next is what keeps the result from drifting
into generic-template territory.

---

## Task 0 — Design tokens and project scaffolding

```
Set up the design token system for the OpexCG landing page in our Vite/React
app (no backend work yet — frontend only, placeholder content).

Color tokens (CSS variables, landing-page use only — do not add app/dashboard
state colors like success/warning/error, this is a marketing site):
--brand: #17A5DC
--dark-accent: #0F4664
--light-bg: #F8FBFD
--dark-text: #1F2937
--white: #FFFFFF
--muted: #6B7280
--border: #E2E8F0
Add --brand-hover (#1490C2) and --brand-active (#117BA8) for interactive
states only.

Rules for how these get used:
- --light-bg and white carry most of the page. --brand appears only in a
  few deliberate places: primary CTA, active nav underline, and the accent
  line in the framework diagram. Do not wash section backgrounds in pale
  brand tints — that reads as dashboard UI, not a landing page.
- --dark-accent is for a confident dark section or two (e.g. footer,
  possibly the framework section background), not scattered everywhere.

Typography: pick a confident, slightly technical sans for headings (should
feel industrial/engineering, not soft rounded startup fonts) paired with a
plain highly readable body sans. Set up the type scale as CSS variables too
(h1-h4, body, caption sizes and weights). Show me your two font choices and
reasoning before installing them.

Set up placeholder image handling: use a simple <PlaceholderImage> component
that renders a labeled gray box with the intended content description (e.g.
"Founder photo — Pak Franklin") instead of picsum/lorem images, so it's
obvious to reviewers what's placeholder vs real, and easy to swap later.

Don't build any page sections yet — just tokens, fonts, and the placeholder
component. Show me the result.
```

## Task 1 — Layout shell and navigation

```
Build the page shell: header/nav (logo placeholder, nav links: Services,
Approach, Founders, Experience, Contact) and footer (three office addresses —
Singapore HQ, Jakarta, Penang — real addresses/phone numbers below, real
placeholder logo). Keep nav minimal and non-sticky-heavy — a normal top nav
that doesn't shrink/expand aggressively on scroll.

Offices:
Singapore: 1 One North Crescent, Level 7, Razer Building, Singapore 138538, +65 6640 3178
Jakarta: Centennial Tower Lt. 29 Unit D-F, Jl. Jend Gatot Subroto Kav. 24-25, Jakarta Selatan 12930, +62 21 3042 0660
Penang: 1-21-01, Lintang Mayang Pasir 3, Suntech, 11950 Bayan Baru, Penang, +604 202 0971

Use TanStack Router for routing even though this is a single page for now —
set it up so section anchors work cleanly and we can add real routes later.
```

## Task 2 — Hero section

```
Build the hero section. This is the thesis statement of the whole page —
avoid the generic template pattern of headline + subhead + two buttons +
stock photo. Instead:

Headline should center on the real differentiator: end-to-end digital
transformation grounded in Lean Six Sigma methodology, brand-agnostic
technology selection. Use placeholder body copy that reflects this
positioning (I'll refine wording later, but keep it specific to OpexCG,
not generic "we help you grow" language).

Visual: placeholder for a real photo of a founder or consultant in an
actual working session (not a stock handshake photo) — use the
PlaceholderImage component labeled "Hero — founder/consultant in
working session".

One primary CTA only ("Talk to us" or similar — placeholder wording ok).
Add a subtle page-load animation: headline and CTA fade/slide up in a
short staggered sequence on first paint (not on every scroll), respecting
prefers-reduced-motion.
```

## Task 3 — Framework section (signature element, with motion)

```
Build the "How we work" section around our real 4-phase framework:
01 Assessment, 02 Improvement, 03 Solutioning, 04 Implementation
(placeholder short descriptions for each, I'll refine copy later).

This is the signature element of the whole page — spend real design and
motion effort here, more than anywhere else on the page.

Implementation: use IntersectionObserver so that when this section scrolls
into view, phase 01 highlights first, then a connecting line/progress
indicator animates toward phase 02, which then highlights, and so on
through 04. Trigger once per page view, not on every scroll up/down.
Use Framer Motion if it simplifies this (install as a normal dependency),
or plain CSS transitions plus the observer — your call, but keep the
animation itself under ~2 seconds total and respect
prefers-reduced-motion by showing the end state immediately if set.

Everywhere else on the page should stay calm — this section is the one
place we spend animation budget.
```

## Task 4 — Brand-agnostic / what-we-do section

```
Build the "What we do" section: Consultancy (BPR, training, Lean Six Sigma)
and Technology (brand-agnostic Industry 4.0 solutions) presented as one
integrated capability, not as competing product tiers. Do not label any
item as "our product" vs "partner product" — list capabilities as a
unified stack, consistent with our brand-agnostic positioning. Placeholder
copy is fine, but keep the structure reflecting this unified framing.

Avoid a generic 3-4 column icon-card grid if it doesn't fit — consider an
asymmetric or editorial layout instead, consistent with the token system
from Task 0.
```

## Task 5 — Founders section

```
Build the founders section: Pak Franklin, Pak Theam Wah, Pak Raj. Each with
a placeholder photo (PlaceholderImage labeled "Founder — [name], working
session photo") and a short placeholder bio block. Layout should feel like
real profiles, not a generic "meet the team" icon-grid — give each founder
enough visual space that it reads as people, not a directory listing.
```

## Task 6 — Experience/projects section

```
Build the "Experience and projects" section: 3-5 project cards, each with
placeholder fields for client/sector, challenge, approach, and one
quantified outcome. Use PlaceholderImage for project photos. Avoid generic
numbered case-study cards (no 01/02/03 here — this isn't a sequence).
Design should read as evidence/proof, distinct in tone from the founders
section above it.
```

## Task 7 — Clients + products (light-touch) sections

```
Build two lighter sections:
1. Existing clients — logo wall using PlaceholderImage boxes labeled with
   client names, grouped loosely, no heavy styling.
2. AI-enabled products — OpexMX and others, one line each plus a "learn
   more" link placeholder, kept deliberately brief per our positioning
   (we don't want heavy product detail on the landing page).

Keep both visually quieter than the founders/experience sections above —
these are supporting proof, not the emotional core of the page.
```

## Task 8 — Contact section

```
Build the contact section: present but understated, not a hero CTA. Include
the three offices (reuse footer data from Task 1) and a simple contact
form (name, email, message — no backend wiring yet, just the UI and local
form state). This should feel available, not pushy.
```

## Task 9 — Full-page review pass

```
Look at the full assembled page. Where does it still resemble a generic
consulting/SaaS template rather than something specific to OpexCG? Where
is there decoration that doesn't serve the content? Check: mobile
responsiveness across all sections, visible keyboard focus states,
prefers-reduced-motion respected in both the hero and framework animations,
and that --brand blue isn't overused as background wash anywhere. Cut one
thing you'd consider decorative.
```

---

## After this: backend

Once the boss has reviewed the placeholder version and structure/vibe is
approved, come back for the Hono + Drizzle + D1 sequence to wire real data
(founders, projects, clients, offices, products) behind these same
components — the component structure above should need minimal change,
since PlaceholderImage and copy blocks map directly to real fields.