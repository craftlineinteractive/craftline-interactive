# Craftline Interactive Website Design

## Understanding summary

- Build a public-facing company website for Craftline Interactive.
- Include a detailed home page, About, Contact, an apps-and-games catalog, product detail pages, and a separate Privacy Policy and Terms of Use for every product.
- Use clearly identified demo apps and games that can be replaced with real portfolio entries.
- Keep the site frontend-only, using React with no server, backend, database, or form submission.
- Use a warm, playful editorial visual style with bold typography and vivid product artwork.
- Make the experience responsive, accessible, quick to load, and maintainable through local content data.

## Assumptions

- Legal copy is starter/demo text, not legal advice, and must be reviewed before publication.
- Contact details are sample content and must be replaced with verified company details.
- The site does not collect visitor data or submit forms.
- The initial deployment is static, with modest traffic and no authentication.
- Company and product content is updated by editing local source files.

## Final design

### Architecture and routes

Use React Router to support directly addressable routes:

- `/` — Home
- `/about` — About
- `/contact` — Contact
- `/products` — Apps and games catalog
- `/app/:slug/` — App detail
- `/app/:slug/privacy-policy/` — App-specific Privacy Policy
- `/app/:slug/terms-of-use/` — App-specific Terms of Use
- `/game/:slug/` — Game detail
- `/game/:slug/privacy-policy/` — Game-specific Privacy Policy
- `/game/:slug/terms-of-use/` — Game-specific Terms of Use

Share a responsive header, footer, and not-found state across routes. Keep each page in its own module under `src/pages/`, reusable UI under `src/components/`, and each app/game's details and legal copy in its own module under `src/products/apps/` or `src/products/games/`. `src/catalog.js` combines those entries for shared UI. Generate catalog cards and links from the entries. Legal pages must identify the specific app/game in their title and content; they are not policies for the studio website. No API, server, or form submission is required.

### Visual direction and content

Use a warm editorial identity: soft cream canvas, ink-dark typography, oversized display headlines, coral/blue/acid-lime accents, subtle grain and shape motifs, and vivid illustrated product tiles. Keep navigation, typography, and content grids responsive and keyboard accessible.

The home page introduces the studio, highlights its apps and games, describes its approach, and ends with a contact call to action. Catalog cards distinguish apps from games. Product detail pages show a product's purpose, category, platform availability, description, and demo links only where clearly indicated. About tells the studio story; Contact provides static contact guidance; each product's legal pages use readable headings, product-specific draft copy, and in-page navigation.

### Content model and behavior

Each app or game module includes its name, slug, type, details, artwork, and its own `privacyPolicy` and `termsOfUse` sections. Add a product module under `src/products/apps/` or `src/products/games/` and register it in `src/catalog.js`; the catalog, detail page, footer links, and individual legal routes are generated from those entries. The catalog offers simple type filters. Unknown slugs show a not-found state. Policy and contact copy remain local and editable.

### Quality and risks

Use semantic headings, keyboard-accessible controls, reduced-motion support, responsive layouts, and page titles. Validate with ESLint and a Vite production build, then verify routes and responsive presentation in a browser where available.

The principal content risk is publishing demo legal copy or contact information as final. Clearly identify these as sample content in the source and on the legal pages.

## Decision log

| Decision | Alternatives considered | Rationale |
|---|---|---|
| Use static React Router pages | Single long landing page; hybrid sections/routes | Standalone URLs make product and legal pages shareable and keep page purposes clear; React Router is already installed. |
| Store portfolio records in local JavaScript data | Backend CMS or hard-coded repeated page markup | A local catalog preserves the no-backend requirement and allows cards/details to stay consistent. |
| Use warm editorial visual design | Dark cinematic; clean minimal | This direction provides a distinctive, colorful studio identity suited to both apps and games. |
| Treat portfolio, contact, and legal text as editable demo content | Present details as verified company facts | No real portfolio or contact details were provided; clear sample labeling avoids misleading visitors. |
| Avoid forms and visitor-data collection | Backend submission and analytics | The requested site is frontend-only and has no backend; static contact guidance keeps the scope honest. |
| Provide a separate privacy policy and terms route for each product | One studio-wide set of legal pages | The user clarified that legal pages must apply to each app and game individually, not to the company website. |
