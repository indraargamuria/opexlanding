# OpexCG landing page — round 3: real stock photos + logo sourcing

## Prerequisite (do this before running any task below)

Sign up for a free Pexels API key at https://www.pexels.com/api/ and add it
to the project as an environment variable, e.g. `PEXELS_API_KEY` in `.env`.
Pexels' free tier requires no attribution and allows commercial use — this
is what the photo-sourcing tasks below rely on. (Unsplash's old
no-key "Source" endpoint is permanently shut down as of mid-2024 — don't
let the agent try that.)

## Shared context (paste once before Task 1)

```
For all tasks in this session: use the Pexels API (https://api.pexels.com/v1/search)
with the PEXELS_API_KEY environment variable to search and download stock
photos, saving them to /public/images/ or /src/assets/images/ (match
whatever convention the project already uses) with descriptive filenames.
Replace the existing PlaceholderImage usage at each spot with a real <img>
(or background-image) pointing to the downloaded file, keeping the exact
same dimensions/aspect ratio/border-radius the placeholder currently has —
don't change layout, only swap the visual content.

For company/brand logos: first try https://cdn.simpleicons.org/{slug} (a
free open-source icon set — check with a HEAD request whether it returns
200 before using it). If a logo isn't available there, don't leave a
broken image — render a text badge instead: the company name in a
rounded-rect pill, using a background color deterministically chosen from
our existing palette (--brand, --dark-accent, --muted, --border-strong,
cycling or hashed by name) with readable contrasting text. Never use a
paid/key-gated logo API for this project.

After each task, tell me exactly which images/logos were successfully
sourced vs. which fell back to a text badge, so I know what still needs a
real asset later.
```

---

## Task 1 — Hero: real stock photo

```
Replace the hero image placeholder with a real stock photo via Pexels API,
search query: "factory manager engineer discussion" or "industrial
consultant meeting floor" (try a couple of queries, pick the most fitting
result — should read as a real working/consulting moment, not a generic
office handshake photo). Keep the existing image container dimensions and
the Ken Burns animation applied to it unchanged — just swap the underlying
source from placeholder to the downloaded photo.
```

## Task 2 — Framework: photo per phase

```
Replace all 4 framework phase image placeholders (Assessment, Improvement,
Solutioning, Implementation) with real stock photos via Pexels API:
- Assessment: search "factory floor walkthrough audit" or "industrial
  inspection walkthrough"
- Improvement: search "workshop whiteboard team meeting" or "kaizen team
  discussion"
- Solutioning: search "engineers system design meeting" or "team planning
  screens whiteboard"
- Implementation: search "factory training floor" or "industrial team
  training session"
Keep the existing image dimensions and the crossfade/active-phase
transition logic unchanged — only swap image sources.
```

## Task 3 — What we do: illustration + icons

```
In the "What we do" section:
1. Replace the "Brand-agnostic stack illustration" placeholder with either
   a Pexels stock photo (search "technology integration abstract" or
   "network connection concept") OR, if a simple custom SVG diagram is
   easy to produce (a central node connected to 3-4 outer nodes labeled
   generically, representing "your operation" connected to multiple
   vendor tools), prefer the custom SVG — it'll communicate the
   brand-agnostic concept more precisely than a generic stock photo.
2. Replace all 8 icon placeholders (Business Process Re-engineering, Lean
   Six Sigma Training, Value Stream Mapping, Operational Excellence under
   Consultancy; IoT & Shop-Floor Sensing, MES & ERP Integration, Analytics
   & Dashboards, Digital Twin & Simulation under Technology) with a small
   consistent icon set — use a free icon library already available in the
   project's dependencies if one exists (e.g. lucide/heroicons), matching
   one icon per concept, sized consistently (~32-40px), colored with
   --brand or --dark-text depending on background. Don't use Pexels photos
   for these — icons should stay as simple line/solid icons, not photos.
```

## Task 4 — Technology partners: restructure into 4 categories + logo sourcing

```
Restructure the "Technology partners" section into exactly these 4
categories, replacing the current single flat grid:

1. Vertical Integration: Epicor, Siemens (Opcenter), OpexMX, Largo
2. Digitalization & Automation: Mendix, SICK (Sensor Intelligence), Zebra
   Technologies, UiPath
3. AI, ML & Agentic AI: Opex AI, Profet AI, RapidMiner
4. Horizontal Integration: Kinaxis, RELEX Solutions, Geotab

For each: try cdn.simpleicons.org/{slug} first (likely to work for Siemens,
Mendix, Zebra, UiPath, RapidMiner, Kinaxis — check each with a HEAD request).
For any that return 404 (likely Epicor, Largo, SICK, Opex AI, Profet AI,
RELEX, Geotab depending on current icon-set coverage), fall back to the
text-badge pattern described in the shared context. Keep OpexMX and Opex AI
visually distinct from third-party logos if you can (e.g. a small "Ours"
label or --brand-colored badge) since those are your own products, not
external partners.

Add a small category label (small uppercase caption style, matching the
existing section eyebrow text pattern) above each group of logos.
```

## Task 5 — Founders section: rename + placeholder photos (internal review only)

```
Rename this section's heading from "Our people" to "Our Founders" (keep
the nav label and anchor id in sync if they reference "founders" already —
just confirm the visible heading text matches).

Replace the 3 founder photo placeholders with Pexels stock photos as a
TEMPORARY internal-review visual only — search queries like "asian
businessman portrait industrial" / "engineer manager portrait factory" /
"consultant professional portrait industry" for a plausible working-context
portrait per founder. Add a visible, non-removed comment in the code next
to each (e.g. `{/* TEMP: stock photo placeholder, must be replaced with
real founder photo before public launch */}`) so this doesn't accidentally
ship as-is — these are stand-in photos of real named individuals and must
not go live without being swapped for the actual founders.
```

## Task 6 — Experience section: photo per project

```
Replace the 4 project image placeholders with Pexels stock photos:
- Automotive Parts Manufacturer: search "automotive assembly line factory"
- FMCG Conglomerate: search "FMCG factory production Southeast Asia" or
  "consumer goods factory line"
- Heavy Industry Conglomerate: search "heavy industry factory workers" or
  "industrial plant workers safety"
- Regional Food Producer: search "food beverage factory production line"
Keep existing image dimensions/positions unchanged, only swap sources.
```

## Task 7 — Trusted by manufacturers: real/fallback logos

```
Replace the 8 client logo placeholders (Toyota, Freyabadi, Astra
International, Sime Darby, Petronas, Wilmar International, IOI
Corporation, Tops Safety Wear) using the same simpleicons-first,
text-badge-fallback pattern from the shared context. Toyota and possibly
Petronas may resolve via simpleicons; the rest are likely to fall back to
text badges, which is fine and expected — flag clearly which resolved as
real logos vs. text badges so it's easy to swap in real logo files later
once permission is confirmed with each client.
```

## Task 8 — AI-enabled products: update list + add photos

```
Update the AI-enabled products section to show exactly these 3 (replacing
the current OpexMX/OpexDX/OpexIQ list): OpexAI, ProfetAI, OpexMX. Keep the
existing card/spotlight structure and dark-accent background from the
earlier revision — just swap in the new names and update each one-line
description appropriately (placeholder copy is fine, labeled as such).

Replace each product's screenshot placeholder with a generic dashboard/
analytics stock photo via Pexels (search "data dashboard analytics screen"
or "manufacturing analytics dashboard") as an interim stand-in for a real
product screenshot — clearly not the same as an actual UI capture, but
better than an empty placeholder box for now.
```

---

## After this round

Once these land, you'll have a very good sense visually of what's real vs.
placeholder — worth another mhtml export and audit pass, plus a final
pass to swap the founder photos and any client/partner logos once real
assets and permissions come back from your boss.