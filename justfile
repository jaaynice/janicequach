# janicequach.com — task runner
# Usage: just <command>

# Development
dev:
    npx astro dev

build:
    npx astro build

preview:
    npx astro preview

# Code quality
lint:
    npx biome check src/

format:
    npx biome format --write src/

# CI — run before every deploy
ci: lint build

# Deploy to Cloudflare Pages
deploy: ci
    npx wrangler pages deploy dist/ --project-name janicequach-com

# Quick deploy (skip lint)
deploy-quick: build
    npx wrangler pages deploy dist/ --project-name janicequach-com
