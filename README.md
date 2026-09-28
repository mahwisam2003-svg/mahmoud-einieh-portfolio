# Mahmoud Einieh — Research & Clinical Portfolio

A fast, dependency-free personal academic website built for free static hosting (Vercel, GitHub Pages, Netlify, or Cloudflare Pages).

## Why this structure is easy to update

Most professional content lives in `data.js`. Research projects, clinical rotations, awards, teaching roles, links, and metrics can be updated there without touching the design.

- `index.html` — page structure and metadata
- `styles.css` — visual system, responsive layout, motion
- `data.js` — portfolio content
- `app.js` — filtering, search, project modal, animations, theme, mobile navigation
- `assets/docs/` — public-safe CV and privacy-redacted credentials

## Privacy / supporting-document policy

The public website intentionally excludes date of birth, home address, phone/WhatsApp number, and other unnecessary personal details.

Public certificate copies are privacy-redacted before publication. Recommendation letters are not published by default because they include signatures, direct contact details, and third-party personal information. Published research is linked to DOI/PubMed/official conference or university pages instead of republishing publisher PDFs unless the licence clearly supports redistribution.

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Updating later

Examples:
- Change a publication status in `data.js`
- Add a project to the `research` array
- Add a new rotation to the `clinical` array
- Place a privacy-safe document in `assets/docs/` and add its relative path as `credential`

Once this folder is connected to a GitHub repository and Vercel, every commit can automatically redeploy the live website.
