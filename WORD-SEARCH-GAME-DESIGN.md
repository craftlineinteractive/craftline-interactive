# Word Search: Brain Puzzle

## Understanding

- Add Word Search: Brain Puzzle as a real game in the existing React catalog with a dedicated detail page.
- Use `/game/word-search/` as its canonical product URL, handled by the shared `/game/:slug` route.
- Use the supplied description and features as product information, not as privacy-policy or terms content.
- List Android and link to the supplied Google Play listing:
  `https://play.google.com/store/apps/details?id=com.craftlineinteractive.wordsearch`
- Do not label it as a demo concept.
- Initially hide its Privacy Policy and Terms of Use links until the user supplies the real copy; both documents have since been provided and added.
- Keep Word Search as the only app/game in the catalog.
- Show Word Search in Home's featured product cards and display its Play Store app icon without downloading a local asset.
- Preserve the frontend-only architecture and existing shared product/legal routes.

## Assumptions

- Performance: use the existing card UI; load the icon lazily and do not block page rendering.
- Scale: one real game and low portfolio-site traffic.
- Security and privacy: no backend, embedded API key, or new package; send only the public Play Store URL to the metadata provider.
- Reliability: the metadata lookup is optional; the generated icon remains as fallback if the API or remote image fails.
- Maintenance: keep the game description and feature copy in its own game module.
- Microlink's public free tier and availability are an external dependency; its listed free plan allows 25 requests per day and the tested response is cached for 24 hours.

## Final design

Add a `word-search.js` module under `src/products/games/` and register it in the existing catalog. Its data includes the actual Play Store URL, Android platform, real-game status, overview, and concise feature sections derived only from the provided description:

- Find hidden words in letter grids.
- Learn word meanings, explanations, and example sentences.
- Review discovered vocabulary.
- Explore themed worlds and levels.
- Encourage concentration, observation, spelling, and word recognition.
- Use hints and play a Daily Puzzle.
- Earn stars and coins, track progress, and work toward achievements.
- Explore themed word lists, including food.

The detail page uses the existing product layout and shows a “Get it on Google Play” action. Keep introductory and closing copy concise; do not repeat the full store description. Do not invent offline play, ads, purchases, accounts, privacy practices, supported devices, or release details.

Render legal links only when the game has its own policy content. The user has now supplied both the Privacy Policy and Terms of Use, so both pages are available with their provided September 2, 2026 last-updated date. The product appears under both All and Games in the responsive catalog, and the exact Play Store URL is used in the listing and detail page. Existing products and legal pages remain unchanged.

Set `featured: true` so the existing Home product section includes Word Search. The shared `ProductCard` uses the product's Google Play URL to request metadata from Microlink in the browser, reads the listing's icon URL from `data.image.url`, and renders it inside the existing square icon frame with `object-fit: cover`. No icon file is downloaded or committed. Keep the existing generated Phosphor icon until metadata succeeds and as a fallback for request, response-validation, or image-loading failures. Report lookup failures with a concise browser-console warning. The detail-page hero artwork remains the existing illustration.

## Validation and acceptance

- Verify Home features Word Search and the product listing contains only Word Search.
- Verify Microlink receives the Play Store URL and its returned icon loads without cropping distortion in the square card frame.
- Verify request/API/image failures leave the generated icon visible.
- Verify the detail page’s name, supplied feature information, Android platform, exact Play Store URLs, and absence of a demo badge.
- Verify the supplied Privacy Policy and Terms of Use render independently with the provided date.
- Verify existing products retain their legal links/pages.
- Run lint and production build.

The Home browser check confirmed the Google Play icon loaded at 512×512 and rendered in the 80×80 square card frame with `object-fit: cover`. A simulated HTTP 503 confirmed the generated icon remains visible when metadata lookup fails. Lint and production build pass.

## Decision log

| Decision | Alternatives considered | Rationale |
|---|---|---|
| Use a structured, scannable detail page. | Preserve all store copy verbatim. | Organizes features clearly and avoids an unnecessarily long, repetitive page. |
| Keep game information in a dedicated product module. | Add copy directly to shared page JSX. | Matches the current catalog pattern and keeps edits maintainable. |
| Use Android and the supplied Google Play URL only. | Invent additional platforms or store details. | These are the only confirmed platform and listing details. |
| Do not label the game as a demo. | Reuse the demo status used by other catalog entries. | The user clarified this is a real game. |
| Hide each legal link until its actual product-specific policy is supplied. | Show placeholder legal pages. | The user wanted to supply the real policies; both have now been provided for this game. |
| Keep the existing generated product artwork. | Display the Google Play app icon. | The product page should retain its original illustrated design. |
| Avoid unprovided gameplay, business, and privacy claims. | Fill in common store-page assumptions. | Keeps the page accurate and separates marketing from legal disclosures. |
| Mark Word Search as featured. | Leave the Home section empty. | Home filters its product cards by the `featured` flag. |
| Resolve the icon with Microlink at runtime from the Google Play URL. | Download/store a local icon or hardcode the image URL. | Satisfies the frontend-only dynamic lookup requirement; no image asset is committed. |
| Keep generated artwork as a visible fallback and warn on lookup failure. | Hide the card or block Home while fetching. | A remote icon is optional and must not prevent page content from rendering. |
