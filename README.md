# Craftline Interactive

A frontend-only React portfolio website for Craftline Interactive, built with Vite, React Router, and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

Check the production build and lint with:

```sh
npm run build
npm run lint
```

## Project structure

```text
src/
  components/       Shared site and product UI
  layout/           Shared page shell, navigation, footer, and document title
  pages/            One module per route/page
  products/
    apps/           App details and each app's own legal-page copy
    games/          Game details and each game's own legal-page copy
  catalog.js        Combines app and game entries for shared UI
  styles/           Tailwind entry and Phosphor font glyph mappings
  App.jsx           Route definitions only
  main.jsx          React application entry point
```

## Add an app or game

Add one module for the new app under `src/products/apps/` or game under `src/products/games/`, then add its import to `src/catalog.js`. This keeps each product's information and its legal copy together. The catalog, home-page highlights, detail page, footer policy links, and product-specific Privacy Policy and Terms of Use routes are generated from those modules.

Each app/game module exports an entry that includes:

- `slug`, `name`, and `kind` (`App` or `Game`)
- `category`, `tagline`, `description`, `platforms`, and `status`
- `artwork`, `symbol`, `ornament`, and `label` for its illustrated product card
- optional `iconSrc` (a local image under `public/`) and `playStoreUrl` for a real Google Play listing
- optional `features` for product-detail feature sections
- optional `privacyPolicy` and `termsOfUse`: the sections and copy for that app/game's individual legal pages
- `featured` to control whether it appears on the home page

Use an existing `artwork` key (`moon`, `orbit`, `garden`, or `tide`) to reuse an illustration palette. Add legal sections only when the real product-specific copy is ready; a product without a policy does not show legal links and its legal routes show Not Found. Existing demo legal copy must be reviewed and completed before publishing a real product.

When a product has a `playStoreUrl` but no local `iconSrc`, its product card resolves the app icon at runtime through the Microlink metadata API. This adds an external service dependency; if lookup or image loading fails, the generated Phosphor icon remains visible. A local `iconSrc` can be provided to avoid remote lookup.

## Pages

- `/` — Home
- `/about` — About
- `/contact` — Contact
- `/products` — Apps and games
- `/app/:slug/` — App details
- `/app/:slug/privacy-policy/` — That app's Privacy Policy
- `/app/:slug/terms-of-use/` — That app's Terms of Use
- `/game/:slug/` — Game details
- `/game/:slug/privacy-policy/` — That game's Privacy Policy
- `/game/:slug/terms-of-use/` — That game's Terms of Use

Word Search: Brain Puzzle's product information, Google Play URL, Privacy Policy, and Terms of Use are in `src/products/games/word-search.js`.
