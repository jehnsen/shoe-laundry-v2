# Scented Bubbles & Shoe Laundry Co. — Website

Marketing site for a laundry shop that cleans both clothing and shoes. Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## Where things live

| Path | What it is |
| --- | --- |
| `lib/site.ts` | **All business details and copy**: name, phone, address, hours, services, signature scents, prices, plan, reviews, FAQs, time slots. Edit this first. |
| `app/globals.css` | Tailwind import, design tokens (`@theme` colours, shadows, animations) and a few global styles |
| `app/layout.tsx` | Font (Plus Jakarta Sans via `next/font`) and page metadata |
| `app/page.tsx` | Assembles the page sections |
| `app/actions.ts` | `requestPickup` Server Action — validates the booking form on the server |
| `components/` | One file per section; interactive pieces are client components (`"use client"`) |
| `legacy-static/` | The original plain HTML/CSS/JS version, kept for reference (excluded from lint and Tailwind scanning) |

## Before going live

- Replace the placeholder business details, prices and reviews in `lib/site.ts`.
- Connect the booking form: `app/actions.ts` validates submissions but only returns a confirmation — add email/SMS/database delivery at the `TODO`.
- Point the social links and the Privacy / Terms links at real pages.
