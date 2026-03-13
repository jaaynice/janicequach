# janicequach.com

personal portfolio. hub page with three immersive sections: think, lead, create. scroll-linked morphing diagrams. no frameworks beyond astro.

## quick start

```bash
just dev          # start dev server at localhost:4321
just build        # build static site to dist/
just preview      # preview the built site locally
```

## deploy

```bash
just deploy       # lint + build + push to cloudflare pages
just deploy-quick # build + push (skip lint)
```

first-time setup: `npx wrangler login` to authenticate with cloudflare.

## structure

```
src/
├── layouts/Base.astro         shared html head, meta, global styles
├── pages/
│   ├── index.astro            hub — name, intro, think/lead/create tags
│   ├── think.astro            scroll-morphing diagram page
│   ├── lead.astro             team philosophy (wip)
│   └── create.astro           visual craft + work samples (wip)
├── components/
│   ├── ScrollMorphDiagram.astro   the scroll-linked svg animation
│   └── PageFooter.astro           shared footer with contact links
└── styles/global.css          tokens, reset, shared typography
```

## for janice

you don't need to touch code. tell claude what you want changed — colours, text, layout, feel. claude will make the edits and deploy.

useful things to say:
- "make the think page feel warmer"
- "change the intro text to [whatever]"
- "add my figma screenshots to the create page"
- "the spacing feels too tight on mobile"
- "deploy it"

## for future claudes

read `CLAUDE.md` first. it's the constitution for this repo. key points:
- janice is the designer, you are the engineer
- code quality is non-negotiable — this is a portfolio
- `just ci` must pass before every commit
- reference `v0.1-scroll-morphing` tag for the original prototype direction
- portfolio research and moodboards are at `~/space/brr/portfolio/`
- janice's voice/principles are at `~/space/human/`

## tech

- [astro](https://astro.build) — static site generator
- [biome](https://biomejs.dev) — lint + format
- [cloudflare pages](https://pages.cloudflare.com) — hosting
- vanilla js — scroll animations, no react needed
- dm serif display + inter — typography

## domain

`janicequach.com` — currently pointed at github pages, will migrate to cloudflare pages. domain registered at squarespace domains, planned transfer to cloudflare registrar.
