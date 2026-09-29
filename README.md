# Andita Bilqis Aulia Rahma — Personal Portfolio

A premium personal portfolio website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Live Preview

Deploy to [Vercel](https://vercel.com) with one click.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Next/Image** for image optimization

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles & Tailwind theme
├── components/
│   ├── Navbar.tsx           # Fixed navigation with scroll spy
│   ├── Hero.tsx             # Hero section with animated headline
│   ├── ProfileFrame.tsx     # Editorial portrait frame
│   ├── About.tsx            # About section
│   ├── Education.tsx        # Education timeline
│   ├── Skills.tsx           # Tech stack display
│   ├── Projects.tsx         # Project showcase
│   ├── ProjectCard.tsx      # Reusable project card
│   ├── Experience.tsx       # Experience timeline
│   ├── Achievements.tsx     # Awards & certificates
│   ├── Contact.tsx          # Contact form (mailto)
│   ├── Footer.tsx           # Minimal footer
│   ├── CustomCursor.tsx     # Custom cursor (desktop)
│   ├── EditorialStatement.tsx # Large decorative text
│   ├── Marquee.tsx          # Horizontal scrolling text
│   └── SectionHeading.tsx   # Reusable section header
├── data/
│   └── portfolio.ts         # Centralized portfolio data
└── public/
    ├── images/              # Portfolio assets
    └── videos/              # Project demo videos
```

## Deployment

This project is optimized for **Vercel**:

1. Push to GitHub
2. Import in Vercel
3. Deploy

No environment variables required.

## License

© 2026 Andita Bilqis Aulia Rahma. All rights reserved.
