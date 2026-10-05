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
| `app/layout.tsx` | Locally hosted DM Sans and Cormorant Garamond via `next/font/local`, plus page metadata |
| `app/fonts/` | Compressed Latin variable fonts and their SIL Open Font Licenses |
| `public/images/laundry-still-life.webp` | Optimized custom hero image (191 KB) |
| `app/page.tsx` | Assembles the page sections |
| `app/actions.ts` | `requestPickup` Server Action — validates the booking form on the server |
| `components/` | One file per section; interactive pieces are client components (`"use client"`) |
| `legacy-static/` | The original plain HTML/CSS/JS version, kept for reference (excluded from lint and Tailwind scanning) |

## Before going live

- Replace the placeholder business details, prices and reviews in `lib/site.ts`.
- Connect the booking form: `app/actions.ts` validates submissions but only returns a confirmation — add email/SMS/database delivery at the `TODO`.
- Point the social links and the Privacy / Terms links at real pages.
- Replace the sample hero clips in `public/videos/` (from [Mixkit](https://mixkit.co), free licence) with the shop's own footage. Keep the same filenames, or update the list in `components/hero-reel.tsx`. Aim for ~6 s, no audio, 720px wide, under ~1.5 MB each, plus a `.webp` poster frame per clip.

## Design assets

The visual system pairs warm ivory, forest green and sage with editorial serif headings. Responsive layouts support narrow phones, tablets and desktop screens, with reduced-motion support and a mobile pickup bar that stays out of the booking form.

The hero image at `public/images/laundry-still-life.webp` was generated with the built-in imagegen tool, then encoded as WebP. It is decorative brand imagery, not a photograph of a customer order. Generation prompt:

> Use case: photorealistic-natural. Asset type: portrait hero photograph for a premium laundry and sneaker care website. Create a refined editorial still-life photograph: a beautifully folded stack of ivory towels and a sage green cotton shirt on a light natural oak bench, a pair of pristine minimalist white leather sneakers beside the folded laundry, a small dark amber glass bottle and subtle eucalyptus sprig. Warm plaster wall behind, soft late-afternoon sunlight from upper left, gentle window shadows, beautifully tactile linen, leather and wood textures. Palette: warm ivory, sand, muted sage, forest green accents. Composition: portrait 4:5, medium shot, objects in lower two thirds, tranquil negative space above, every main object visible within central 80 percent to support cropping. Elevated boutique hotel / Kinfolk editorial art direction, realistic photography, no people, no logos, no text, no lettering, no watermarks.
