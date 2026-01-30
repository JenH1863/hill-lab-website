# CLAUDE.md - Latent Capital

## Overview
Personal site: blog, projects, CV for quant/physics career.
Stack: Next.js 14 (App Router), Tailwind CSS v4, Contentlayer, MDX.

## Key Files
- `data/siteMetadata.js` — site config (title, description, social links)
- `data/headerNavLinks.ts` — navigation
- `data/authors/default.mdx` — about page content
- `data/projectsData.ts` — projects list
- `data/blog/` — blog posts (MDX)
- `public/static/cv.pdf` — CV file

## Commands
- `npm run dev` — dev server (localhost:3000)
- `npm run build` — production build
- `npm run serve` — serve production build

## Adding Content

### Blog Posts
Add `.mdx` files to `data/blog/`. Frontmatter format:
```yaml
---
title: 'Post Title'
date: '2024-01-15'
tags: ['tag1', 'tag2']
draft: false
summary: 'Brief summary'
---
```

### Projects
Edit `data/projectsData.ts`:
```ts
{ title: 'Name', description: '...', href: '/blog/post-slug', imgSrc: '/static/images/img.png' }
```

### About
Edit `data/authors/default.mdx`

### CV
Replace `public/static/cv.pdf`

## Style Guidelines
- Minimal, professional
- Physics/quant credible — no cringe
- No unnecessary features — capability-first
- Treat everything as an experiment

## Deployment
Vercel auto-deploys from main branch.
URL: https://latent-capital-git-vercel-react-serv-dc617f-alenngrens-projects.vercel.app
