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

Form submissions are emailed to **contact@digitalloop.co** with the subject **"website lead"**, using FormSubmit (formsubmit.co). There's no account or API key.

One-time activation: after the site is live, submit the form once yourself. FormSubmit emails an activation link to contact@digitalloop.co. Click it, and every submission after that arrives in the inbox. Until then, visitors see a "did not send" message pointing them to the email address.

To change the subject line, edit `FORM_SUBJECT` in `src/config.js`. To use another form service, set `VITE_FORM_ENDPOINT` in Vercel → Settings → Environment Variables and redeploy.

## Before launch

- Replace the placeholder LinkedIn and Instagram URLs in `src/config.js` (and in `index.html` structured data).
