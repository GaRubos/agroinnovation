<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Catalog content (categories, products, contacts, partner logos) lives in `src/data/catalog.ts` as static data — no backend needed until the client asks for editable content.
- Landing and catalog share the `/` route (sections via hash anchors, category filter via `?category=` search param); each product has its own page at `/product/$slug` for shareable links and SEO.
- "Contact manager" buttons open `ContactManagerDialog` with messenger/phone/email links prefilled with the product name; there is no stored form.
- Product packaging photos are white-background CDN assets shown with `object-contain` on the `product-surface` token; serving-idea photos (`menuIdea`) are separate and shown with `object-cover` — keeps real packaging uncropped.
- Product spec fields (ingredients, nutrition, allergens) are optional and only filled from the client's catalog; never invent values for missing ones.
