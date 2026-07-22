# Hanika TSS — React Version

This is a React (Vite) port of the original static Hanika TSS website
(Home, About, Gallery, Contact/Support pages), converted from plain
HTML/CSS/JS into a single-page app with client-side routing.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  main.jsx            entry point, wraps App in BrowserRouter
  App.jsx              route definitions + scroll-to-hash handling
  index.css             global reset (ported from the original styley.css base rules)
  components/
    Nav.jsx / .module.css     shared header/nav, mobile menu, active-link highlighting
    Footer.jsx / .module.css  shared footer (trades list, socials, contact CTA)
  pages/
    Home.jsx        "/"          animated hero + vision/mission/motto cards
    About.jsx        "/about"     intro text, "why choose us" grid, trades carousel,
                                    staff grid, social marquee
    Gallery.jsx       "/gallery"   masonry photo gallery
    Contact.jsx       "/support"   contact form (client-side only, no backend yet)
    Admission.jsx    "/admission" placeholder page (was a dead "#" link originally)
  assets/images/       all site imagery (renamed to lowercase/hyphenated, no spaces)

public/
  fontawesome/         Font Awesome 7 CSS (icons used via <i className="fas ..."> etc.)
  webfonts/            Font Awesome webfont files
  favicon.png           school logo used as favicon
```

## Notes on the conversion

- Each page's CSS was ported to a CSS Module (`*.module.css`) scoped to that
  page, since the original site had multiple standalone HTML documents that
  reused generic class names like `.head`, `.footer`, `.card` with different
  rules per page — that only works safely in a SPA if scoped.
- The trades carousel and mobile nav (previously vanilla JS / checkbox hacks)
  were rewritten as React state (`useState`) instead of DOM manipulation.
- The contact form is fully controlled (React state) and shows a local
  "message received" confirmation on submit — there's no backend wired up
  yet, so nothing is actually sent anywhere.
- The `/admission` nav link pointed to `#` in the original static site; it
  now routes to a small placeholder page so there are no dead links in the
  SPA.
- A couple of small bugs in the original were fixed along the way: duplicate
  `id="contactEmail"` on two different form fields, and a missing
  `screen.css` / `screens.css` reference on the Support and Gallery pages
  (their responsive rules didn't exist before — added sensible ones here).
