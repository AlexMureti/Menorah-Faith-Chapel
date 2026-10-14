# Menorah Faith Chapel

A single-page website for Menorah Faith Chapel, a church in Ngong, Embulbul, on the edge of Nairobi. It gives the congregation and visitors the service times, short clips of worship and teaching, the year's theme video, the ministries, the M-Pesa steps for giving, and an appointment request that opens as a WhatsApp message, with the copy switchable between seven languages.

## Live

Deployed on Vercel: https://menorah-faith-chapel.vercel.app

## Stack

- React 19 and TypeScript, bundled by Vite 7
- Tailwind CSS 3, with the church's navy, red and gold as named colours
- GSAP ScrollTrigger and Lenis for smooth scrolling and reveal-on-scroll
- lucide-react icons

## Run locally

```sh
npm install
npm run dev
```

`npm run build` type-checks with `tsc -b` and writes the production bundle to `dist/`; `npm run preview` serves that bundle, and `npm run lint` runs ESLint.

## Status

Deployed and reachable, last changed in June 2026, with all content hard-coded in the components: the contact form shows a success message without sending anything, the appointment slots and events list stop at early 2026, and the canonical domain in `index.html`, `robots.txt` and `sitemap.xml` does not resolve yet.
