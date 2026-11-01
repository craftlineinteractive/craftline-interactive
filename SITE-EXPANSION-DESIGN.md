# Craftline Interactive site expansion

## Understanding

- Expand Home, About, and Contact with useful, polished content, and make the footer more substantial.
- Use warm, illustrative studio storytelling without inventing company-specific facts.
- Add subtle, consistent motion across the site, including product and legal routes.
- Preserve the React-only architecture, existing routes, product/legal content, and current email-link contact flow.
- Keep motion lightweight, responsive, accessible, and respectful of reduced-motion preferences.
- Avoid unrelated redesigns, backend features, analytics, and fabricated facts or destinations.

## Assumptions

- Performance: favor CSS and existing browser capabilities; avoid an animation dependency.
- Scale: this is a static portfolio site with modest traffic and a catalog manageable in the existing React structure.
- Security and privacy: do not introduce server-side processing or collect visitor data; retain the `mailto:` contact behavior.
- Reliability: all existing routes and deep links must continue to work; unsupported animation must degrade gracefully.
- Maintenance: keep content in the existing page modules and share motion behavior where useful.

## Final design

### Content

- **Home:** Keep the existing visual hero and featured catalog. Add depth to the studio story with an introduction, creative approach/process, fuller design principles, and a closing contact call to action. Reuse product entries and statuses; do not claim unlisted releases or achievements.
- **About:** Expand the current introduction with studio philosophy, a simple three-step idea-shaping story, and practical principles. Avoid invented team biographies, locations, dates, and track records.
- **Contact:** Keep the current email link and sample-email disclosure. Add clear topics visitors can write about and straightforward contact guidance. Do not promise response times or add a non-functional form.
- **Footer:** Add a stronger studio message and contact call to action, general navigation, and the existing email contact. Do not add product-by-product or legal-policy lists, or fabricated destinations.

### Motion and architecture

- Use CSS-led, restrained page-entry, hover, and focus transitions; add a small reusable React observer helper for selective section-heading/card reveals.
- Apply subtle page-entry motion to every route. Use scroll reveals selectively on marketing content and the footer; keep long product/legal text readable without paragraph-by-paragraph animation.
- Keep motion brief and decorative. It must not delay interaction, obscure content, or reduce keyboard-focus visibility. Honor `prefers-reduced-motion`.
- Preserve the existing route scroll-to-top behavior; do not add smooth scrolling.
- Keep page copy in the current page modules and shared footer. If `IntersectionObserver` is unavailable, skip reveals and display content normally.

### Validation and acceptance

- Run the existing lint and production build.
- Review Home, About, Contact, Apps & Games, app/game detail and legal pages, and Not Found at mobile and desktop widths.
- Check reduced-motion mode, keyboard navigation and visible focus, long-page overflow, and navigation/link destinations.
- Confirm unsupported observers do not hide content, the contact `mailto:` flow and disclosure remain intact, and no existing route regresses.

### Risks

The expanded layouts could feel repetitive if “bulk” is achieved only by adding paragraphs. Use varied section compositions and concise, non-redundant copy. Motion must stay progressive enhancement so failures never affect content visibility or navigation.

## Decision log

| Decision | Alternatives considered | Rationale |
|---|---|---|
| Use polished, illustrative studio storytelling without specific company claims. | Ask for real team/location/history details or invent them. | The chosen content direction is illustrative; avoiding unsupported facts is safer and easier to maintain. |
| Expand the existing page layouts with an editorial narrative and a fuller general-purpose footer. | Replace the visual direction or add a product/legal directory to the footer. | Builds on the current identity and preserves the preference for a general footer. |
| Use a shared, lightweight CSS/observer motion system. | Minimal hover-only motion or an expressive animation library. | Balances the requested smoothness with bundle size, performance, and maintenance. |
| Respect reduced motion and leave content visible when animation is unavailable. | Depend on animation for content reveal or omit accessibility handling. | Motion is decorative; accessibility and reliable content access take priority. |
| Preserve static `mailto:` contact and existing route behavior. | Add a server-backed form, analytics, or smooth scroll behavior. | These are outside scope and conflict with the frontend-only constraint. |
| Validate every route, responsive layout, motion preference, keyboard use, and existing build checks. | Validate only the expanded pages visually. | Shared layout and motion changes can affect the entire site, including legal routes. |
