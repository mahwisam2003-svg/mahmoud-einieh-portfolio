# Maintenance notes

This portfolio is intentionally data-driven so it can be updated without redesigning the site.

## Routine updates

- Research projects: edit the `research` array in `data.js`.
- Clinical placements: edit the `clinical` array in `data.js`.
- Awards: edit the `awards` array in `data.js`.
- Teaching and leadership: edit the `teaching` array in `data.js`.
- Supporting credentials: put a public-safe PDF in `assets/docs/`, add a lightweight WebP thumbnail in `assets/thumbs/`, then add an item to the `credentials` array.
- Profile links and CV: edit `profile` in `data.js`.

## Supporting-document rule used for this site

Publish only documents that add professional verification and are appropriate for a public website. Recommendation letters are not included by default because they contain third-party signatures/contact details and are better shared directly with an employer or academic unit. Publisher PDFs are not mirrored unless redistribution rights are clear; the site links to DOI/PubMed/official records instead.

## Free deployment

The project is static and works on Vercel, GitHub Pages, Netlify, or Cloudflare Pages. Vercel requires no build command for this version.
