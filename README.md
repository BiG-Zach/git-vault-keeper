# Bradford Informed Guidance — Project Readme

- Start here for immediate actions: NEXT_STEPS_NOW.md

## Mobile Styling Policy

**Scope:**
This project uses a **component-scoped mobile CSS** approach to ensure mobile changes never break desktop layouts.

**Rules:**
1. All mobile-specific styles live in `*.mobile.module.css` files located next to their corresponding component in `src/components/...`.
2. Do **not** modify existing desktop styles or markup.
3. Append mobile classes to JSX elements without replacing existing desktop classes.
4. All media queries use:
```css
@media (max-width: 767.98px) { … }
```

## SEO & Indexability

### 🚀 Build & Deploy
```bash
npm run build  # Triggers postbuild: prerender + generate sitemaps
```

### 🔍 Verify SEO Health (Local Preview)
1. Build the production bundle: `npm run build`
2. Start the static preview server in a separate terminal: `npm run preview`
3. With the preview running at `http://localhost:8080`, execute:
   - `npm run verify:seo:local`
   - `npm run check:headers:local`
4. On Windows, use `npm run verify:seo:local:win` and `npm run check:headers:local:win`.
5. When finished, stop the preview server with `Ctrl+C`.

### 📊 Submit to Google Search Console
After deployment, submit: `https://bradfordinformedguidance.com/sitemap_index.xml`

### ✅ SEO Features Implemented
- **Prerendered HTML**: All 38 routes return meaningful HTML to crawlers
- **Auto-generated Sitemaps**: Fresh sitemaps on every build (index, pages, images)
- **Apex Domain Canonicalization**: Enforces `bradfordinformedguidance.com` as canonical
- **301 Redirects**: www→apex and trailing slash normalization
- **JSON-LD Schema**: Comprehensive structured data for insurance services
- **SEO Validation**: Automated testing with Googlebot user agent
- **Core Web Vitals**: Performance monitoring and optimization

### 📈 Current Status
- 38 routes fully prerendered and indexable
- Lighthouse SEO baseline: 73/100 → Target: 96/100
- All routes return HTTP 200 with proper content-type
- Redirects functioning correctly
- Ready for Google Search Console submission


