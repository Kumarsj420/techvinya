# TechVinya — company website

Marketing and lead-generation site for TechVinya, a product engineering studio serving travel,
healthcare, cybersecurity and AI chatbot companies.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # already done once; edit values as needed
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm run start   # production build, served locally
npm run lint                     # ESLint
```

---

## Pages

| Route                       | Rendering | Notes                                                    |
| --------------------------- | --------- | -------------------------------------------------------- |
| `/`                         | Static    | Hero, industries, capabilities, process, pricing, FAQ     |
| `/services`                 | Static    | All four practices plus cross-cutting capabilities        |
| `/services/[slug]`          | SSG       | `travel`, `medical`, `cybersecurity`, `ai-chatbots`       |
| `/work`                     | Static    | Reference architectures — replace with real case studies  |
| `/about`                    | Static    | Story, values, engagement rhythm                          |
| `/contact`                  | Dynamic   | Reads `?service=<slug>` to preselect the dropdown         |
| `/privacy`, `/terms`        | Static    | `noindex`                                                 |
| `/sitemap.xml`, `/robots.txt` | Static  | Generated from `src/lib/services.ts`                      |
| `/api/contact`              | Route     | Contact form handler                                      |

---

## Editing content

Almost all copy lives in two files — no component edits needed for routine changes:

- **`src/lib/site.ts`** — company name, tagline, email, phone, address, social links, header nav,
  hero stats.
- **`src/lib/services.ts`** — the four industry practices (each with capabilities, standards,
  stack, outcomes, FAQs), the cross-cutting capability list, the 5-step process, and the three
  engagement/pricing tiers.

Adding a fifth practice = appending one object to `services`. The nav, footer, sitemap, service
detail page, 404 page and contact dropdown all derive from that array automatically.

Page-specific copy that lives in its own file: the reference architectures on `/work`, the values
list on `/about`, and the home-page FAQ + principles at the top of `src/app/page.tsx`.

---

## Contact form

`POST /api/contact` validates the payload, checks a honeypot field, applies a per-IP rate limit
(5 requests / 10 minutes) and sends the enquiry via [Resend](https://resend.com).

**Without `RESEND_API_KEY` set, the form still returns success and logs the submission to the
server console** — so local development and preview deploys work with no configuration.

To turn on real delivery:

1. Create a Resend account and add your domain (`techvinya.com`), completing the DNS records.
2. Create an API key.
3. Set in your host's environment:
   - `RESEND_API_KEY`
   - `CONTACT_FROM_EMAIL` — e.g. `TechVinya <hello@techvinya.com>` (must be a verified domain)
   - `CONTACT_TO_EMAIL` — where enquiries land; comma-separate for several recipients

The rate limiter is in-memory, which is correct for a single instance. If the site is ever scaled
across multiple instances, move it to Upstash Redis — see the note in
`src/app/api/contact/route.ts`.

---

## Deploying

**Vercel** (recommended — zero config for Next.js):

```bash
npx vercel        # preview
npx vercel --prod # production
```

Set `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` in the
Vercel project's environment variables, then point the `techvinya.com` DNS at Vercel.

**Any Node host** (Railway, Render, Fly, a VPS): `npm run build` then `npm run start` behind a
reverse proxy on port 3000.

> This is a Node application, so it will **not** run under XAMPP/Apache as-is. If you need static
> hosting on shared Apache, `/contact` and `/api/contact` would have to move to a third-party form
> endpoint and the app exported with `output: "export"`.

---

## Before going live — checklist

- [ ] Replace placeholder contact details in `src/lib/site.ts`: `email`, `salesEmail`, `phone`,
      `phoneHref`, `address`, and the three social URLs.
- [ ] Confirm the pricing in `engagements` (`src/lib/services.ts`) matches what you actually quote.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain so canonicals and OG tags are correct.
- [ ] Configure Resend and send one test enquiry end to end.
- [ ] Have a lawyer or advisor review `/privacy` and `/terms` — they are sensible drafts, not
      jurisdiction-specific legal advice.
- [ ] Update the "Now taking projects for Q4 2026" badge in `src/app/page.tsx` when it goes stale.
- [ ] Replace the reference builds on `/work` with a real case study once the first client ships.
- [ ] Submit `/sitemap.xml` in Google Search Console.

---

## Design system

Brand tokens are defined once in `src/app/globals.css` under `@theme` and used as Tailwind
utilities throughout (`bg-ink`, `text-brand`, `border-line`, …).

| Token           | Value     | Use                          |
| --------------- | --------- | ---------------------------- |
| `ink`           | `#070b14` | Page background              |
| `surface`       | `#0f1729` | Cards, alternating sections  |
| `line`          | `#1e2a45` | Borders, dividers            |
| `brand`         | `#22d3ee` | Primary accent, CTAs         |
| `accent`        | `#6366f1` | Secondary accent, glows      |
| `body` / `muted` / `faint` | `#e2e8f0` / `#94a3b8` / `#64748b` | Text hierarchy |

Custom utilities: `container-x`, `card`, `glow`, `text-gradient`, plus `.grid-bg`, `.reveal` and
`.marquee-track`. All motion is disabled under `prefers-reduced-motion`.

Accessibility: skip link, visible focus rings, labelled form fields, `aria-expanded` on the mobile
menu toggle, and scroll-reveal content that is present in the HTML (and forced visible via
`<noscript>`) so it never hides content from crawlers or non-JS users.
