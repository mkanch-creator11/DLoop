# Digital Loop website

React + Vite site for **www.digitalloop.co**.

Pages: Home · Sales Enablement · LinkedIn Lead Generation · About · Contact (+ 404).

## Run it on your computer

Requires Node.js 18 or newer (https://nodejs.org).

```bash
npm install
npm run dev        # opens http://localhost:5173
```

## Build for the web

```bash
npm run build      # creates the dist/ folder
```

Upload the **contents of `dist/`** to your host. A ready-built copy is already in `dist/`.

Routing files are included so links like `/sales-enablement` work when opened directly:

| Host | File used |
|---|---|
| cPanel / Hostinger / any Apache host | `dist/.htaccess` (also forces HTTPS) |
| Netlify | `dist/_redirects` |
| Vercel | `vercel.json` (deploy the project folder, build command `npm run build`, output `dist`) |

## Where to edit things

| What | File |
|---|---|
| Email, domain, social links, WhatsApp number, form endpoint | `src/config.js` |
| Sales Enablement content (process, services, challenges) | `src/data/enablement.js` |
| LinkedIn funnel, packages, comparison table | `src/data/linkedin.js` |
| Page layouts | `src/pages/*.jsx` |
| Colours, fonts, spacing | `src/styles/global.css` (tokens at the top) |
| Logo | `src/assets/logo.png` |
| SEO title, description, social preview image | `index.html`, `public/og-image.png` |
| Sitemap | `public/sitemap.xml` |

## Contact form

By default the form opens the visitor's email app with the message addressed to contact@digitalloop.co.

To receive submissions directly by email:

1. Create a free form at https://formspree.io (or similar) using contact@digitalloop.co.
2. Copy the endpoint URL (looks like `https://formspree.io/f/abcdwxyz`).
3. Create a file named `.env` in the project folder containing:
   `VITE_FORM_ENDPOINT=https://formspree.io/f/abcdwxyz`
4. Run `npm run build` again and upload the new `dist/`.

## Before launch

- Replace the placeholder LinkedIn, Facebook and Instagram URLs in `src/config.js` (and in `index.html` structured data).
