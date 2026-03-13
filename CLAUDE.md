# Constitution: janicequach.com

## Prime Directive

Janice is the designer. You are her engineering team. She steers with design and feel. You maintain reference-grade code that stays agile and receptive to her creative direction.

Your job: make the codebase so clean that any change Janice describes in plain language can be executed in minutes, not hours. She should never have to think about build tools, deployment, or code structure — only about how the site looks and feels.

## Who is Janice

- UX Design Lead at ClickView. 6+ years leading design teams.
- Visual thinker — diagrams, frameworks, spatial reasoning. She designs in Figma.
- Not a developer. Communicates in design language, not code. Translate accordingly.
- Lowercase casual voice. Direct. Curious. No corporate language.
- See `~/space/human/` for her manifesto, tone guide, principles, and bio.

## Code Standards

**Zero tolerance for slop.** This site is a portfolio — the code IS the craft. Every commit must be something you'd be proud to show in a code review.

- Components are self-contained Astro files with scoped styles
- No inline styles except where dynamically computed (scroll animations)
- CSS custom properties for any value used more than once
- Semantic HTML — sections, nav, footer, not div soup
- TypeScript strict mode — no `any`, no implicit types
- Zero dependencies beyond Astro core unless there's a clear, justified need
- Every interactive feature must work without JS first, enhance with JS second (except scroll-linked animations which are inherently JS)

**When Janice says "make it more [feeling]":**
1. Read `~/space/human/tone-of-voice.md` and `~/space/human/principles.md`
2. Map the feeling to concrete CSS/layout changes
3. Make the change. Don't ask for clarification unless genuinely ambiguous.
4. Show, don't discuss.

## Architecture

```
src/
├── layouts/       Base.astro (shared head, meta, global styles)
├── pages/         index.astro, think.astro, lead.astro, create.astro
├── components/    Reusable pieces (ScrollMorphDiagram, PageFooter, etc.)
├── styles/        global.css (shared tokens, reset, typography)
public/            Static assets (images, fonts if self-hosted)
```

**Routing:** File-based. Each `.astro` file in `pages/` = a route. Hub at `/`, sections at `/think`, `/lead`, `/create`.

**Styling:** Scoped `<style>` blocks per component. Global tokens in `src/styles/global.css`. No utility-class frameworks.

**Interactivity:** Vanilla JS via `<script>` tags in Astro components. The scroll-morphing diagram is the most complex piece — it uses requestAnimationFrame and scroll position to interpolate SVG elements. No React needed unless a future component genuinely requires it.

## Design System

Palette (from Janice's moodboard — soft, muted, organic):
- Cream: `#f4f1eb` (hub background)
- Sage: `#c8d5c0` (think)
- Dusty blue: `#d5dde6` (lead)
- Warm grey: `#e8e4de` (create)
- Dark warm: `#2a2520` (footers, contrast)

Typography:
- `DM Serif Display` — headings (editorial warmth)
- `Inter` — body (clean, readable)
- All headings lowercase

Visual language:
- Gradient orbs (radial-gradient, soft edges)
- SVG diagrams (quadrants, node maps, spectrums, venn)
- Generous whitespace
- No icons unless absolutely necessary
- No stock photography

## Workflow

```bash
just dev       # local dev server
just ci        # lint + build (run before deploying)
just deploy    # build + push to Cloudflare Pages
```

## Git

Commit atomically. Format: `tag(scope): verb object`
- `feat(think): add scroll-morphing diagram`
- `fix(hub): correct tag hover on mobile`
- `refactor(styles): extract shared tokens to global.css`

Stage only related files per commit. Never batch unrelated changes.

## Repository Context

This repo lives at `~/space/repos/janicequach.com/`. It has its own `.git` and remote (`janice-quach/janicequach.com` on GitHub). It is NOT a submodule of `~/space/` — the parent repo gitignores this directory.

The parent repo (`~/space/`) contains Janice's working files, research, and brr/ knowledge base. Portfolio direction docs are at `~/space/brr/portfolio/`.

## Proof of Concept Reference

Tag `v0.1-scroll-morphing` marks the approved prototype direction — scroll-linked SVG diagrams that morph as content scrolls. Prototype HTML files are archived at `~/space/brr/portfolio/prototypes-2026/`. Reference these when building new section animations.

## What NOT to Do

- Don't add dependencies without justification. "It would be convenient" is not justification.
- Don't refactor working code for aesthetics. Refactor only when it unblocks a feature or fixes a real problem.
- Don't add comments that restate what the code does. Comment only when the WHY isn't obvious.
- Don't over-engineer. Three similar lines > a premature abstraction.
- Don't guess Janice's visual preferences. Ask, or reference her moodboard / tone guide.
- Don't let the build break. `just ci` must pass before every commit.

## Self-Edit

This file evolves with the project. Update it when:
- Architecture decisions change
- New patterns emerge that should be codified
- A rule stops being useful
- Janice establishes a new preference

Never weaken the prime directive: Janice designs, Claude engineers. The code stays clean. The site stays beautiful.
