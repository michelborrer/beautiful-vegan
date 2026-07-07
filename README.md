# Beautiful Vegan

Astro static site for [beautiful-vegan.com](https://beautiful-vegan.com) — honest reviews of vegan & cruelty-free beauty products.

## Stack

- [Astro](https://astro.build) 4 (static output, clean URLs)
- Tailwind CSS 3
- Deployed on [Cloudflare Pages](https://beautiful-vegan.pages.dev) (GitHub auto-deploy from `main`)

## Development

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # build static site to ./dist
npm run preview  # preview the production build
```

## Deploy

**Automatic:** every push to `main` triggers a Cloudflare Pages build via GitHub Actions (`.github/workflows/deploy-pages.yml`).

Cloudflare Pages project is also connected to `michelborrer/beautiful-vegan` on branch `main` with build command `npm run build` and output directory `dist`.

**Manual fallback** (Worker assets deploy):

```bash
npm run build
npx wrangler deploy
```

The legacy Worker `long-pond-37c9` config remains in `wrangler.jsonc` for emergency manual deploys.

## Custom domain DNS

If `beautiful-vegan.com` or `www.beautiful-vegan.com` show as pending in Pages, add proxied CNAME records in Cloudflare DNS for zone `beautiful-vegan.com`:

| Name | Type | Target | Proxy |
|------|------|--------|-------|
| `@` | CNAME | `beautiful-vegan.pages.dev` | On |
| `www` | CNAME | `beautiful-vegan.pages.dev` | On |

Remove any conflicting apex A/AAAA records. Pages custom domains must be active before they replace the old Worker route.
