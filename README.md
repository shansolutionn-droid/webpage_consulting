# ShanSolution India website

The public website for ShanSolution India, an engineering design and development company supporting projects from requirement understanding through concept, 3D and 2D design, engineering analysis, and prototype development. The company also coordinates specialized technical partners for defined scopes.

- Production site: [www.shansolutionindia.com](https://www.shansolutionindia.com)
- Cloudflare Pages project: `webpage-consulting`
- Pages fallback URL: [webpage-consulting.pages.dev](https://webpage-consulting.pages.dev)
- Contact: [rdsupport@shansolutionindia.com](mailto:rdsupport@shansolutionindia.com)

## Technology

- React 19 and TypeScript
- Vite 8
- TanStack Router
- Tailwind CSS 4

This is a static frontend hosted on Cloudflare Pages. It does not require a Worker or application server. The contact form validates the brief in the browser and opens the visitor's email app with a message addressed to ShanSolution India. The visitor must send that draft; the website does not transmit or store form submissions.

## Run locally

Requirements: Node.js `^20.19.0` or `>=22.12.0`, plus npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

To build and preview the static output:

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Checks

Run the project's lint, TypeScript, and production build checks with:

```bash
npm run check
```

Individual commands are also available:

```bash
npm run lint
npm run typecheck
npm run build
```

## Cloudflare Pages deployment

The Pages project is connected to the GitHub repository and deploys from `main`. A push to `main` starts a production deployment automatically.

Pages build settings:

| Setting                | Value           |
| ---------------------- | --------------- |
| Production branch      | `main`          |
| Root directory         | `/`             |
| Build command          | `npm run build` |
| Build output directory | `dist`          |

Cloudflare Pages serves the generated static files. The production custom domain is `www.shansolutionindia.com`.

## Security headers

`public/_headers` is copied into the build output and read by Cloudflare Pages. It configures:

- A Content Security Policy that restricts scripts to the site's origin, allows the Google Fonts hosts used by the design, and blocks plugins and frames.
- `X-Frame-Options: DENY` to prevent framing.
- `Strict-Transport-Security` for the production `www` domain.
- `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.

The policy permits inline styles for the site's CSS animation and dynamically timed presentation styles. It does not permit inline scripts or `eval`.

## Website uptime monitoring

Uptime monitoring is configured separately from the website source. To receive downtime alerts, configure an HTTP(S) monitor for `https://www.shansolutionindia.com/` in an uptime-monitoring service and add `rdsupport@shansolutionindia.com` as an alert contact. Cloudflare Web Analytics reports visit and performance metrics; it is not an uptime alert service.
