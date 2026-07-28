# OpexCG landing page — round 5

## Shared context (paste once before Task 1)

```
Continuing work on the OpexCG landing page (technology-led positioning).
Reuse existing design tokens only (--brand, --dark-accent, --light-bg,
--dark-text, --white, --muted, --border and derived variants) — no new
colors without a specific reason stated in the task. For any new stock
photo sourcing, continue using the Pexels API with the existing
PEXELS_API_KEY setup. Flag placeholder/draft content clearly via code
comments, consistent with the convention already used in this codebase.
```

---

## Task 1 — Hero image: more technology-forward

```
Replace the current hero.jpg with a more technology-forward image via
Pexels API. Current photo reads as a general workplace/consulting photo;
we want something that visually signals industrial technology/AI/IoT
specifically. Try queries: "smart factory technology tablet", "industrial
IoT dashboard engineer", "digital twin factory technology", "engineer
augmented reality factory". Pick the result that best balances
"real/human" (not a sterile stock-photo-of-a-robot-arm cliché) with
"clearly technology, not generic office." Keep existing dimensions, Ken
Burns animation, and overlay/gradient treatment unchanged — image swap
only.
```

## Task 2 — AI-enabled products: trim to 2

```
In the "AI-enabled products" section, remove the ProfetAI card entirely,
leaving only OpexMX and OpexAI. Since this changes from 3 items to 2,
don't just delete the middle card and leave an unbalanced 3-column grid —
rework the layout for 2 items specifically: consider a larger 2-column
layout with more visual weight per product (bigger screenshot placeholder,
more room for description) rather than shrinking 2 cards into a grid
designed for 3. Keep the dark-accent section background and the
connecting sentence above it ("Where a best-fit tool already exists...")
unchanged.
```

## Task 3 — Fix the trust bar (mixed logo fidelity)

```
The "Trusted by teams at" bar directly under the hero currently mixes real
resolved SVG logos (Toyota, Astra) with text-badge fallbacks for the rest —
the inconsistency between a crisp vector logo and a plain text pill sitting
side by side is what makes this section look unfinished, especially since
it's the first thing after the hero.

Fix by choosing one of these two approaches:
1. (Preferred if it still reads as credible) Apply a unified visual
   treatment to every logo in this specific bar regardless of source —
   wrap all of them (both real SVGs and text-badges) in a fixed-height
   container, apply a consistent grayscale/monochrome filter and matching
   opacity (e.g. grayscale(100%) opacity 0.6, brand-colored on hover) so a
   text-badge and a real logo carry the same visual weight and neither
   stands out as "the placeholder one."
2. If that still looks inconsistent once tried, reduce this bar to only
   the logos that resolved as real SVGs (even if that's just 2-3) rather
   than padding it out with text badges — a shorter, fully-real trust bar
   is more credible than a longer mixed-fidelity one.
Try option 1 first and show me the result before falling back to option 2.
```

## Task 4 — Technology partners: replace with single image

```
Replace the entire "Our technology ecosystem" section's logo grid/category
structure with a single large image: /public/images/technology-partner.png
(this file will be provided directly, don't attempt to fetch or generate
it). Remove the simpleicons-fetch and text-badge-fallback logic for this
section specifically — it's no longer needed here. Keep the section
heading and background, just replace the content below the heading with
the single image, sized to fit the content width responsively (max-width:
100%, height: auto, reasonable max-width constraint like 900-1000px
centered).
```

## Task 5 — Founders: temporary vector illustration instead of photos

```
Replace the 3 founder photo placeholders (currently real stock photos
standing in for Pak Franklin, Pak Theam Wah, Pak Raj) with vector
illustrations instead, as a temporary measure — this avoids the risk of a
stock photo of a stranger being mistaken for a real person's photo, which
is a bigger problem than an obviously-illustrated placeholder.

Source from unDraw (https://undraw.co) — free, CC0-licensed, colorable SVG
illustrations, no attribution required. Pick 3 different
people/portrait-style illustrations (search their site for "profile,"
"team," or "portfolio" style illustrations) and recolor them to use
--brand and --dark-accent instead of unDraw's default palette, so they
match the site's tokens. Keep the existing alternating layout (image-left/
image-right/centered) from the earlier founders revision — only the image
content changes from photo to illustration. Keep the code comment flagging
these as temporary, updated to note "illustration placeholder — replace
with real founder photo when available."
```

## Task 6 — More engaging background rhythm (still professional)

```
The page currently has long runs of consecutive sections using the same
--light-bg/--white background with no variation, which reads as flat.
Without introducing new colors, add more visual rhythm:

1. Audit the section background sequence top to bottom and break up any
   run of 3+ consecutive sections sharing the same background — alternate
   between --white and --light-bg more deliberately section to section.
2. On --light-bg/--white sections specifically (not the dark-accent ones),
   add a very subtle background texture — reuse the same low-opacity
   (5-8%) dot-grid pattern already built for the hero background, applied
   sparingly to 1-2 additional light sections (not all of them, to avoid
   overuse) — e.g. Experience or Testimonials.
3. Add a subtle 1-2px top border accent line in --brand color to section
   headings sitewide if not already present, as a small consistent visual
   signature.
4. Do NOT add gradients, drop shadows on every card, or additional colors
   outside the existing token set — the goal is subtle rhythm and texture,
   not more visual noise. Show me before/after reasoning for which
   sections changed and why.
```

## Task 7 — Full mobile responsiveness pass

```
This codebase currently has zero @media queries — every section is
desktop-only. Do a full responsive pass across the entire page, section by
section, targeting at minimum a 768px breakpoint (tablet) and a 480px
breakpoint (phone). Specifically:

1. Hero: 50:50 grid collapses to single column (image below or above
   text) below 768px. Reduce headline font size appropriately.
2. Framework/"How we deliver" phases: 4-column grid collapses to a single
   stacked column (or a scrollable horizontal set of cards) below 768px —
   pick whichever preserves the phase-to-phase connector logic more
   simply; a stacked layout is likely easier to keep correct.
3. Founders: the alternating image-left/right/centered layout should
   stack to single-column (image above text) on mobile for all three,
   regardless of desktop alternation.
4. Experience/project cards, testimonials, and any other multi-column
   grids: collapse to single column below 768px.
5. Technology partner image (Task 4): ensure it scales down cleanly and
   remains legible on a 375px-wide viewport — if the image has small text
   that becomes unreadable at phone width, let me know so we can consider
   a mobile-specific cropped/simplified version rather than forcing it to
   remain legible.
6. Trust bar and Clients logo marquee: confirm wrapping/scrolling behavior
   still works at narrow widths without overflow or squished logos.
7. Nav: confirm there's a mobile menu (hamburger or similar) if the nav
   links don't already collapse — check this specifically since it wasn't
   mentioned in earlier rounds.
8. FAQ accordion and closing CTA band: confirm padding/font sizes scale
   down reasonably, no horizontal scroll introduced anywhere on the page.

After the pass, explicitly confirm: no horizontal overflow at 375px width
anywhere on the page, and no text that becomes illegibly small.
```

---

## After this round

This round touches almost every section, so review incrementally (after
Tasks 1-3, then 4-5, then 6-7) rather than all at once — Task 7 in
particular is large enough that partial failures are easy to miss if you
wait until the very end to look.