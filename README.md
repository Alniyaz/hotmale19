# HOTMALE 19th Anniversary Website

A responsive, multi-page anniversary invitation and collection website built with plain HTML, CSS and JavaScript.

## Pages

- Home and anniversary invitation
- New Arrivals
- Gen Z Fits
- Ethnic Wear
- Plus-Size Wear
- Combo Collections
- Reusable page for any new collection added to the catalogue

## Run locally

Serve the repository folder with any static web server. For example:

```powershell
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

Collection and product content is managed in one file: `assets/catalog.js`. New collections automatically appear on the home page and open in the reusable collection layout. Upload product photos into matching folders under `assets/products`. See `UPLOAD-GUIDE.md` and `assets/ADD-COLLECTION-TEMPLATE.js`.

The two store enquiry contacts are also configured near the top of `assets/catalog.js`. Product enquiry buttons open a responsive contact popup with direct call buttons.
