# Beautiful Vegan

Astro static site for [beautiful-vegan.com](https://beautiful-vegan.com) — honest reviews of vegan & cruelty-free beauty products.

## Stack

- [Astro](https://astro.build) 4 (static output, `.html` file format)
- Tailwind CSS 3
- Deployed on Cloudflare Workers (static assets), worker name `long-pond-37c9`

## Development

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # build static site to ./dist
npm run preview  # preview the production build
```

## Deploy

```bash
npm run build
npx wrangler deploy
```

This updates the existing `long-pond-37c9` worker that serves beautiful-vegan.com.
