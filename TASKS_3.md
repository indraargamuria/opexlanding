# OpexCG landing page — round 2 revision prompts (opencode / Claude Code + GLM)

These are based on the actual current markup (pulled from your mhtml export),
not guesses — so the coding agent should be able to find these exact
structures without re-exploring the codebase first.

**Note on portability**: these prompts embed the relevant design principles
directly, rather than referencing Anthropic's internal `frontend-design`
skill file, since that path won't exist in your own opencode/Claude Code +
GLM setup. If you *are* running this through Claude Code with a skills
folder available, you can still ask it to consult any local frontend-design
skill you've added — otherwise these prompts are fully self-contained.

Run each task as its own message/session. Review the diff before moving to
the next — one task per turn keeps GLM from over-editing unrelated sections.

---

## Shared context (paste once at the start of the session, before Task 1)

```
Context for all following tasks on this landing page: this is OpexCG, an
industrial/Lean Six Sigma + Industry 4.0 consultancy. Design principles to
follow across every task in this session:

- Spend animation/visual effort on ONE signature moment at a time per task
  — don't add motion to sections not mentioned in the task. Scattered
  animation across a page is what makes a site look AI-generated; a single
  well-executed moment reads as intentional.
- Never invent new brand colors — use only the existing CSS variables
  already defined in the project (--brand, --dark-accent, --light-bg,
  --dark-text, --white, --muted, --border, plus their hover/derived
  variants). If a task needs a new visual role, reuse or lightly extend
  these, don't introduce arbitrary new hex values.
- Respect prefers-reduced-motion on any new animation.
- Keep the placeholder-image pattern already used elsewhere in the codebase
  (the dashed-border gray box with an aria-label/role="img" describing the
  intended real content) for any new image slots — don't switch to lorem/
  picsum images.
- After each change, briefly tell me what you changed and why, in plain
  terms, so I can review before we move to the next task.
```

---

## Task 1 — AI products section (highest priority: currently looks unfinished)

```
Find the "AI-enabled products" section (contains OpexMX, OpexDX, OpexIQ,
currently a plain centered text stack on a light background with no visual
distinction from surrounding sections).

Give this section its own visual identity as a spotlight, not a plain list:
1. Change the section background to --dark-accent (matching the treatment
   already used in the "How we work" framework section, which is also dark).
2. For each of the 3 products, add a placeholder visual styled as a simple
   browser/app-window mockup: a rounded rectangle with a small 3-dot
   "window chrome" bar at the top and a dashed-border placeholder body
   labeled with the product name and role="img"/aria-label describing it
   (e.g. "OpexMX — product screenshot placeholder"), consistent with the
   existing placeholder pattern in the codebase.
3. Lay the 3 products out as cards (icon/mockup + name + one-line
   description + "Learn more" link, which already exists) instead of the
   current centered stacked-text layout.
4. Keep this section calm otherwise — no additional animation beyond a
   simple fade/slide on scroll-into-view, matching the pattern used
   elsewhere in the page (if hero-fade-in style classes exist, reuse that
   convention rather than inventing a new animation approach).
```

## Task 2 — Framework section (add per-phase images)

```
Find the "How we work" / "One framework. Four phases." section — a
4-column grid with numbered phases (01 Assessment, 02 Improvement,
03 Solutioning, 04 Implementation), each with a connecting progress-line
div between them, currently text-only (no image).

Add a placeholder image slot to each of the 4 phase blocks, using the same
placeholder pattern already used for founders/project photos (dashed
border box, role="img", aria-label like "Assessment — gemba walk/floor
audit photo placeholder", etc. — one distinct, phase-appropriate label per
phase). Position the image above or beside the number+heading+description
within each phase block (your call on which reads better in a 4-column
layout at this width — consider stacking image-on-top if 4 columns makes
side-by-side too cramped).

This section is the one place on the page allowed a more elaborate
animation: if there's already logic driving the connecting-line highlight
based on scroll position or active phase, extend that same trigger so the
new per-phase image also transitions (e.g. a subtle opacity/scale change
on the active phase's image) when a phase becomes active. Don't add new
animation triggers beyond what already drives the connecting line — reuse
that mechanism.
```

## Task 3 — Founders section (remove repetition)

```
Find the "Our people" / "The team behind the framework" section — three
<article> blocks for Pak Franklin, Pak Theam Wah, and Pak Raj, each
currently identical: grid-template-columns "280px 1fr", image left, text
right, with a "01"/"02"/"03" label above each name.

Changes:
1. Remove the 01/02/03 numbering above each founder entirely — these
   three aren't a sequence, and the numbering currently implies a ranking
   that isn't intended.
2. Change the layout so the three articles aren't visually identical:
   keep founder 1 as image-left/text-right, reverse founder 2 to
   image-right/text-left, and make founder 3 a different composition —
   e.g. centered with the image above the text, full content width,
   rather than the same 280px/1fr side-by-side grid.
3. If each founder's bio paragraph is a generic multi-sentence block,
   consider pulling one sentence out as a distinct visual pull-quote
   (larger type, different color treatment using --brand or --dark-accent)
   above or beside the remaining bio text, so each founder has a distinct
   visual anchor rather than a uniform paragraph.
4. Keep visual weight roughly equal across all three despite the layout
   differences — this is about breaking repetition, not implying
   hierarchy.
```

## Task 4 — Footer (remove duplication with Contact)

```
Find the footer. It currently repeats the exact same three office blocks
(Singapore HQ, Jakarta, Penang — full addresses and phone numbers) that
already appear in the "Get in touch" / Contact section above it.

Simplify the footer to: logo/wordmark, one-line tagline (reuse "Industrial
transformation consulting" if that's already the tagline used), a simple
sitemap link list (Services, Approach, Founders, Experience, Contact —
matching the header nav), one general contact link (e.g. a mailto link or
an anchor back to #contact) instead of the three full address blocks, and
the copyright line. Remove the three duplicated office-address blocks from
the footer entirely — they should only live in the Contact section.
```

## Task 5 — New "Technology partners" section

```
Add a new section, positioned after the "What we do" / brand-agnostic
section (find the section with heading "Consultancy and technology,
delivered as one capability") and before "Our people". Title it something
like "Technology partners" or "Our technology ecosystem".

Content: a grid of placeholder client/partner logos (use the same
placeholder pattern as the existing client-logo grid in the "Trusted by
manufacturers" section — dashed-border box, role="img", aria-label per
logo), for: Epicor, Siemens Opcenter, Mendix, and at least 6-7 more
representative ERP/MES/low-code/IoT platform names of your choosing,
labeled generically if unsure (e.g. "Technology partner logo — [Category]
placeholder N").

Optionally group them loosely under 3-4 category labels (e.g. ERP, MES,
Low-code Platforms, IoT/Connectivity) — small uppercase caption labels
above each row/cluster, consistent with the caption styling already used
elsewhere on the page (the small uppercase "eyebrow" text pattern seen
above section headings).

Keep this section visually calm — background should match --light-bg or
--white (whichever alternates correctly with the sections immediately
above and below it), no motion beyond a simple scroll-in fade if that
convention exists elsewhere on the page.
```

## Task 6 — Hero background motion

```
Find the hero section — a 50:50 grid (grid-template-columns: 1fr 1fr) with
headline/subhead/CTA on the left (classes hero-fade-in, hero-delay-1,
hero-delay-2, hero-delay-3 already staggering their entrance) and a single
placeholder image on the right.

Keep the 50:50 layout and the existing fade-in sequence as-is — don't
touch that, it's already working. Add ambient background motion only:
1. On the image placeholder side, add a slow, subtle Ken Burns-style
   zoom/pan (scale from 1.0 to about 1.04 over ~15s, ease, looping) so it
   won't be static once a real photo replaces the placeholder. Wrap the
   image in a container with overflow hidden so the zoom doesn't spill
   outside its box.
2. Behind the text column, add a very low-opacity (5-8%) animated element
   suggesting systems/connectivity — e.g. a faint dot-grid or thin line
   pattern using an SVG or CSS background, drifting slowly (translate a
   few px over 20-30s, looping). This should be barely noticeable, purely
   ambient, not competing with the headline for attention.
3. Wrap both new animations in a prefers-reduced-motion media query check
   so they're disabled (static end-state) for users who have that setting.
Don't add a carousel/slider — the single image stays, just no longer
static.
```

## Task 7 — "What we do" section (currently pure text, no visuals at all)

```
Find the "What we do" section (heading "Consultancy and technology,
delivered as one capability") — currently an intro paragraph on the left
plus two plain text lists (Consultancy, Technology) with no icons, images,
or visual variation of any kind.

Add visual texture without turning this into a generic icon grid:
1. Give each list item (Business Process Re-engineering, Lean Six Sigma
   Training, Value Stream Mapping, and the Technology equivalents) a small
   visual marker — reuse the existing placeholder-box pattern at a small
   size (e.g. 48x48) rather than a generic icon font/library, labeled per
   item (e.g. "Icon placeholder — Value Stream Mapping").
2. Break the plain two-stacked-list layout: consider making "Consultancy"
   and "Technology" into two visually distinct columns side by side (they
   may already be separate blocks — check if they're currently stacked
   vertically or side by side, and prefer side by side at desktop width if
   not already), with a vertical divider or subtle background tint
   differentiating them from each other, while both staying within the
   existing --light-bg/--white palette (no new colors).
3. Optionally add one larger supporting placeholder visual (image or
   simple custom diagram, labeled "Brand-agnostic stack illustration —
   placeholder") near the intro paragraph, showing the idea of OpexCG
   sitting between multiple vendor tools — this can be the one place in
   this section with slightly more visual weight, everything else stays
   simple.
Keep animation minimal here — a single scroll-in fade for the section as a
whole is enough, no per-item animation.
```

## Task 8 — Trusted customers (static grid → subtle marquee)

```
Find the "Trusted by manufacturers across Southeast Asia" section — a
static 4-column grid of client logo placeholders (Toyota, Freyabadi, Astra
International, Sime Darby, Petronas, Wilmar International, IOI
Corporation, Tops Safety Wear), each at opacity 0.6.

Convert this into a continuously auto-scrolling horizontal marquee:
1. Lay all logos out in a single row (duplicate the logo list once so the
   loop is seamless) and animate a continuous leftward translateX loop,
   slow (about 30-40s for a full cycle), pausing on hover.
2. On hover of an individual logo, transition its opacity from 0.6 to 1.0
   (remove grayscale/dim effect on hover if not already present).
3. Wrap in prefers-reduced-motion: fall back to the current static grid
   (no scroll animation) if that's set.
4. Keep the section heading and background exactly as they are — only the
   logo row itself changes from a static grid to the marquee.
```
## Task 9
---

Find the "Experience" / "Proven results across the floor" section — 4
project articles (Automotive Parts Manufacturer, FMCG Conglomerate, Heavy
Industry Conglomerate, Regional Food Producer), each with a Challenge /
Approach / Outcome structure, aria-labels like "Project — [name]", and a
placeholder photo per project. This section is already working well —
these are additive polish changes only, don't restructure the existing
card layout.

1. Count-up animation: each project's "Outcome" line contains a quantified
   result (e.g. "Defect rate reduced from 4.2% to 0.8%", "USD 340K",
   "OEE... 92%", "62%", "USD 210K"). Wherever there's a standalone number
   in the outcome text, wrap just that number in its own element and
   animate it counting up from 0 to its final value over about 1-1.5s,
   triggered once via IntersectionObserver when the card scrolls into
   view. Don't re-animate on repeat scroll past. If a number is embedded
   in a longer sentence, only animate the numeric token itself, leave the
   surrounding sentence static.
2. Industry filter: above the 4 project cards, add filter tabs/pills for
   the industries already present in the data (Automotive, Consumer Goods,
   Manufacturing, Food & Beverage — reuse the exact category labels already
   used in each project's eyebrow text, e.g. "Automotive · Indonesia").
   Clicking a filter shows only matching cards (or all, for an "All"
   default tab). Keep this simple — no animation needed on the filter
   itself beyond a basic show/hide or fade of filtered-out cards.
3. Leave the card visual design, image placeholders, and Challenge/
   Approach/Outcome structure exactly as they are — this task only adds
   the count-up behavior and the filter control, nothing else.

## After these nine

Once these land, worth a fresh full-page mhtml export and another audit
pass — particularly to check the Experience/Clients polish items (count-up
numbers, logo marquee) from the earlier round, which weren't urgent enough
to prioritize this round.