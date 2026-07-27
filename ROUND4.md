# OpexCG landing page — round 4: technology-led repositioning

Based on current structure: Hero → Framework (4 phases) → What we do →
Technology ecosystem → Founders → Experience → Clients → AI-enabled
products → Contact.

Target structure: Hero → Trust bar (new, condensed) → AI-enabled products →
Technology ecosystem → How we deliver (merged Framework + What we do) →
Experience → Testimonials (new) → Founders → Clients (full) → FAQ (new) →
Closing CTA (new) → Contact.

Run in order — later tasks (testimonials, FAQ) reference sections built in
earlier tasks.

---

## Shared context (paste once before Task 1)

```
This is a repositioning of the OpexCG landing page from consultancy-led to
technology-led: we're a technology company (including our own AI products —
OpexAI, ProfetAI, OpexMX), with consultancy and training as our
differentiator, not our core identity. Keep this framing in mind across
every task in this session — technology sections should read as the
primary offer, consultancy/methodology sections should read as "why our
technology implementation actually works," not as the main pitch.

Don't invent new colors or fonts — reuse the existing design tokens
(--brand, --dark-accent, --light-bg, --dark-text, --white, --muted,
--border and derived variants) and existing type scale throughout.

Any new copy (testimonials, FAQ answers, CTA text) should be clearly
placeholder/draft — wrap in a code comment noting it needs real sign-off
before launch, same convention already used elsewhere in this codebase.
```

---

## Task 1 — Reorder sections + merge Framework/What-we-do

```
Reorder the page sections to this sequence: Hero, [new trust bar — leave a
placeholder gap for Task 3], AI-enabled products, Technology ecosystem,
"How we deliver" (see below), Experience, [new testimonials — placeholder
gap for Task 6], Founders, Clients ("Trusted by manufacturers"), [new FAQ
— placeholder gap for Task 7], [new closing CTA — placeholder gap for Task
8], Contact.

Merge the current "How we work" (4-phase framework) and "What we do"
sections into a single section titled "How we deliver". Keep both sets of
content (the 4 phases, and the consultancy/technology capability lists)
but combine them under one heading and one subheading that frames this as
proof of delivery execution, e.g. subheading direction: "The methodology
and expertise that make the technology actually stick" (draft copy, mark
for review). Keep all existing images/icons/animations from both sections
intact — this is a structural merge, not a content rewrite of the phases
or capability lists themselves.

Don't touch AI-enabled products, Technology ecosystem, Experience,
Founders, or Clients content in this task — just move them to their new
positions in the order above.
```

## Task 2 — Hero headline: tech-led positioning

```
Update the hero headline and subhead to lead with technology/product
identity rather than methodology. Replace "Digital transformation grounded
in methodology, not hype" with a headline in this direction (draft, mark
for review): "Industrial technology and AI, implemented by people who've
actually run the floor" — or similar, keeping the existing subhead's
brand-agnostic/vendor-neutral point but subordinating "methodology" to a
supporting clause rather than the lead claim. Keep the existing layout,
Ken Burns animation, and CTA unchanged — copy only.
```

## Task 3 — Trust bar (condensed, right after hero)

```
Add a new, compact "trust bar" section directly after the hero, before
AI-enabled products. Pull 5-6 logos from the existing "Trusted by
manufacturers" section's logo set (reuse the same logo/text-badge
components already built there — don't resource new logos). Layout: a
single thin horizontal row, small caption above it like "Trusted by
teams at" (small uppercase eyebrow style matching existing section
captions), logos at reduced size compared to the full Clients section
below. Keep this section visually quiet — no background color change,
no animation beyond what the rest of the page already uses for
scroll-in fades.
```

## Task 4 — Connecting sentence between AI products and Technology ecosystem

```
Between the "AI-enabled products" section and the "Technology ecosystem"
section, add a short one-line transitional statement (as its own small
block, not buried in either section) making the relationship between the
two explicit — draft direction: "Where a best-fit tool already exists, we
integrate it. Where one doesn't, we've built it ourselves." Style it
simply — centered, medium weight, on a plain background, no card/border,
similar treatment to a section eyebrow but at body-text size rather than
caption size.
```

## Task 5 — Trim technology partner logos

```
In the "Technology ecosystem" section, reduce from the current 13 logos
across 4 categories down to the 6-8 strongest/most recognizable ones
(prioritize by name recognition and how central each is to actual OpexCG
projects — if unsure which to cut, keep at minimum: Epicor, Siemens
(Opcenter), Mendix, UiPath, plus your own OpexMX, and 2-3 more you judge
most important). Keep the 4-category grouping structure and the
simpleicons/text-badge-fallback logic from the earlier build — just
reduce the count per category rather than removing categories entirely.
Add a small note element (e.g. "+ more integrations available on
request" as plain caption text, no need for a link yet) so the trim
doesn't read as incompleteness.
```

## Task 6 — Testimonials section (draft placeholder quotes)

```
Add a new "Testimonials" section between Experience and Founders. 2-3
testimonial cards, each with: a placeholder quote (draft, clearly marked
as needing a real client quote before launch), a person name/title
placeholder (e.g. "Plant Director, Automotive Parts Manufacturer" —
matching the anonymization level already used in the Experience section),
and reuse the existing placeholder-image pattern at small size for a
headshot. Draft quote directions (mark all as placeholder):
- "The team didn't just recommend software — they understood our floor
  before they touched a single system."
- "We'd tried two other vendors before. This was the first time
  implementation actually matched what was promised."
- "Brand-agnostic wasn't just a pitch — they genuinely pushed back when
  we suggested a tool that wasn't the right fit."
Keep the section visually calm — simple cards, no heavy motion beyond
the standard scroll-in fade used elsewhere.
```

## Task 7 — FAQ section (draft placeholder answers)

```
Add a new FAQ section between Clients and the closing CTA. Use a simple
accordion (expand/collapse), 4-5 questions relevant to a skeptical
industrial buyer evaluating a technology-led vendor. Draft
questions+answers (mark clearly as placeholder, needs real review):
1. "Does this require replacing our existing ERP or MES?" — answer
   direction: no, brand-agnostic approach integrates with what's already
   in place where it makes sense.
2. "How long does a typical engagement take?"
3. "Do you only work with large enterprises, or also mid-size
   manufacturers?"
4. "What happens after implementation — do you stay involved?"
5. "How is OpexCG different from a pure software vendor?"
Style the accordion simply, consistent with existing card/section styling,
no new colors.
```

## Task 8 — Closing CTA band

```
Add a short, distinct closing CTA section between the FAQ and Contact —
a single full-width band (consider --dark-accent background, consistent
with the AI-products section treatment, to give it visual weight as a
closing beat) with one short headline (draft: "Ready to see what's
actually slowing your floor down?") and one button linking to #contact.
Keep this section short — headline, one line of supporting text max, one
button — this is a punctuation mark before the contact form, not another
full section.
```

## Task 9 — Founders section tone pass (copy only, no structural change)

```
Adjust the Founders section's supporting copy (not layout, not photos) so
the framing emphasizes why their operational expertise makes OpexCG's
technology recommendations trustworthy, rather than emphasizing
methodology/process rigor. This is a light copy tone edit to align with
the technology-led positioning — keep bios, pull-quotes, and layout
exactly as currently built, only adjust framing language if it currently
leans heavily on "methodology" as the core value claim.
```

---

## After this round

This is a substantial batch — review after every 2-3 tasks rather than
waiting until all 9 are done, since Task 1's reordering affects where
everything else in the session gets inserted. Once done, another mhtml
export + audit pass is worth it before this goes anywhere near your boss
for review.