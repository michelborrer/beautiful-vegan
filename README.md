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

**Automatic:** push to `main` on GitHub — Cloudflare Pages builds with `npm run build` and publishes `./dist`.

**Manual fallback** (Worker assets deploy):

```bash
npm run build
npx wrangler deploy
```

The legacy Worker `long-pond-37c9` config remains in `wrangler.jsonc` for emergency manual deploys.

## Cloudflare Pages

| Setting | Value |
|---------|-------|
| Project | `beautiful-vegan` |
| Repo | `michelborrer/beautiful-vegan` |
| Branch | `main` |
| Build | `npm run build` |
| Output | `dist` |
