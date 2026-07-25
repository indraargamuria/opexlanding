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

---

## After these five

Once these land, worth a fresh full-page mhtml export and another audit
pass — particularly to check the Experience/Clients polish items (count-up
numbers, logo marquee) from the earlier round, which weren't urgent enough
to prioritize this round.