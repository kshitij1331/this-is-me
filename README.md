# Kshitij Choubey — Portfolio Website

A single-page portfolio built with **Next.js 15**, **React**, **Tailwind CSS v4**, and **Framer Motion**. Dark theme with yellow accents, populated from CV content.

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, or pnpm

### Install & Run

```bash
cd this_is_me
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
this_is_me/
├── app/              # Next.js App Router (layout, page, globals)
├── components/       # UI sections (Header, Hero, Services, etc.)
├── lib/data.ts       # All CV content — edit here to update the site
└── public/           # Static assets
```

## Updating Content

All portfolio text lives in [`lib/data.ts`](lib/data.ts). Edit personal info, skills, experience, projects, and certifications in one place.

## Deployment

### Vercel (Recommended)

1. Push the `this_is_me` folder to a Git repository.
2. Import the project on [Vercel](https://vercel.com).
3. Set the **Root Directory** to `this_is_me`.
4. Deploy — Vercel auto-detects Next.js.

### Static Export (GitHub Pages)

Add to `next.config.ts`:

```ts
const nextConfig = {
  output: "export",
};
```

Then run `npm run build` and deploy the `out/` folder.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## License

Private portfolio — all rights reserved.
