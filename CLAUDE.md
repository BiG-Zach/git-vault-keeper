# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Vite dev server on port 8080
npm run dev:vercel   # Vercel dev (includes serverless API routes)
npm run live         # Dev + ngrok tunnel

# Build
npm run build        # Runs sitemap generation → build → prerender
npm run type-check   # TypeScript type checking

# Testing
npm test             # Vitest in watch mode
npm run test:run     # Single test run (CI)
npm run test:coverage

# Code quality
npm run lint
npm run lint:fix
npm run format
npm run format:check

# Run a single test file
npx vitest run src/components/__tests__/SomeComponent.test.tsx
```

## Architecture

**React SPA** built with Vite for an independent insurance broker (Bradford Informed Guidance). Deployed on Vercel with serverless API routes.

### Entry point flow
`index.html` → `src/main.tsx` → `src/App.tsx` (AppShell layout + Suspense) → `src/utils/routes.tsx` (lazy-loaded page routing)

### Key directories
- **`src/components/luxury/`** — Premium desktop components with aurora gradients and glass morphism; these are the flagship UI components
- **`src/components/ui/`** — Reusable Radix UI-based primitives (shadcn-style)
- **`src/pages/`** — Page-level components; `states/` for geo-targeted landing pages, `blog/` for Sanity CMS blog posts
- **`src/api/`** — Client-side API integration (Ringy CRM, hCaptcha)
- **`api/`** — Vercel serverless functions (Node.js), used for consent handling and API proxying
- **`studio/`** — Sanity CMS studio for blog content management
- **`scripts/`** — Build utilities: sitemap generation, prerendering, ngrok tunneling

### Path alias
`@` maps to `./src` in both TypeScript and Vite.

### Styling system
Tailwind CSS with a custom luxury design system defined in `tailwind.config.ts`:
- **Colors**: jade, sky, gold, navy
- **Fonts**: Playfair Display (serif headings), Inter (sans body)
- **Effects**: Aurora gradients, glass morphism (`glass-panel` utility, `text-gradient-gold`)
- **Breakpoints**: Three-tier layout — mobile / tablet / luxury desktop

### Data flow
1. Lead forms use `react-hook-form` + hCaptcha verification
2. Submissions go through Vercel API routes → Ringy CRM (`src/api/ringy-proxy.ts`)
3. Blog content served from Sanity CMS via `@sanity/client`
4. Analytics via Plausible (no cookies)

### Testing
Vitest + React Testing Library with `happy-dom`. Test setup in `src/test/setup.ts`. Tests colocated in `src/components/__tests__/`.

### CI/CD
GitHub Actions (`.github/workflows/ci.yml`) runs type-check, lint, tests, and build on Node 18.x and 20.x. Deploys to Vercel on merge to main.

## Environment variables
See `.env.example` for required vars: Plausible analytics URL, hCaptcha site key, Ringy API credentials, and JWT secret for API route auth.
