# LKM Legacy Resources — Website

Static marketing site for LKM Legacy Group (cleaning, facilities manpower, and manufacturing
site support, Malaysia). Home + About pages, hand-written HTML/CSS, no build step.

## Structure
```
index.html      Home
about.html      About Us
styles.css      Shared design system
assets/         Photography + logos (assets/logos/)
.nojekyll       Serve files as-is on GitHub Pages
```

## Hosting
Deployed with GitHub Pages from the `main` branch (root). Any static host works — just serve
the folder; there is no build step.

## Notes
- Type: SF Pro Display where available, Inter (embedded/linked) as the fallback.
- Photography is licensed stock placeholder — swap for real LKM site/team photos before final.
- Client logos in the "Trusted By" section are displayed with the client's brand marks; confirm
  display permission with each brand before wide public promotion.
- Forms (quote / newsletter) are front-end only — wire to a backend/email service to go live.
