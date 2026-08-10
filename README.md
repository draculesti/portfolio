# Portfolio React App

A clean, modern personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. This project showcases Ivonne García’s work, skills, and contact details using a polished landing page with animated sections and glassmorphism-style UI.

## App Overview

The portfolio is composed of a single-page layout with a smooth scroll experience and distinct sections:

- **Navigation bar**: A fixed-like top menu that links to the main sections and includes an availability indicator.
- **Hero section**: A bold introduction with animated text, descriptive headline, and two CTA buttons to view projects or contact directly.
- **Work section**: A selected projects gallery with card-style previews, technology tags, and links to GitHub repositories.
- **About section**: A profile summary with experience highlights, coding stats, and a skills badge list.
- **Contact section**: A centered call-to-action card with email and social links for GitHub and LinkedIn.
- **Footer**: Simple branding, contact icons, and social links.

## Visual Style

The app presents itself with a polished, modern aesthetic:

- Soft glassmorphism cards and blurred background panels.
- Minimal, high-contrast typography with a bold hero headline.
- Gradient highlights on text and interactive buttons.
- Smooth motion effects for section entrances and hover states.
- Responsive layout that adjusts for mobile and desktop widths.

## Key Features

- Animated hero copy and entrance transitions.
- Select projects display with repository links.
- Technology tags for each project.
- Clean, documented personal summary section.
- Accessible contact point with email and social buttons.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion for animations
- Lucide React icons
- React Icons

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

- `src/App.tsx` - Root layout with main sections.
- `src/components/custom/Menubar.tsx` - Top navigation and brand bar.
- `src/sections/HeroSection.tsx` - Main landing hero block.
- `src/sections/WorksSections.tsx` - Selected project showcase.
- `src/sections/AboutSection.tsx` - Personal introduction and skills.
- `src/sections/ContactSection.tsx` - Contact invitation and social links.
- `src/sections/Footer.tsx` - Footer with contact icons.
- `src/components/custom/CardProject.tsx` - Project card grid rendering.
- `src/data/projects.ts` - Project metadata for the work section.

## Notes

The portfolio is designed for a software engineering profile and is ready to be extended with additional projects, case studies, or a blog section.
