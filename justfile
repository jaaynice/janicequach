# janicequach.com — task runner
# Usage: just <command>

# Development
dev:
    pnpm astro dev

build:
    pnpm astro build

preview:
    pnpm astro preview

# Code quality
lint:
    pnpm biome check src/

format:
    pnpm biome format --write src/

# CI — run before every deploy
ci: lint build

# Deploy to Cloudflare Pages
deploy: ci
    pnpm wrangler pages deploy dist/ --project-name janicequach-com

# Quick deploy (skip lint)
deploy-quick: build
    pnpm wrangler pages deploy dist/ --project-name janicequach-com
