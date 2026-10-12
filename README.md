![theseonLogo](public/theseon.Logo.svg)
# theseOn

A personal portfolio and writing site built with React, TypeScript, Vite, and Fluent UI v9.

## Features

- Responsive navigation with mobile drawer, search, and light/dark theme toggle.
- Home page with a featured-content carousel and professional experience timeline.
- Portfolio page with a JSON-backed certificate grid.
- Article listing and detail pages at `/articles/{id}/{article-title}`.
- About and GDPR-oriented privacy pages.
- Route-aware page metadata, canonical URLs, and structured data.
- Reusable Fluent UI components for cards, navigation, search, carousel, and sections.

## Getting started

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
  Components/       Shared UI components
  Hooks/            Theme and document metadata hooks
  Interfaces/       TypeScript data interfaces
  Pages/            Route-level pages
  Utils/            Shared utilities, including article slug generation
  assets/Data/      JSON content for articles, experience, carousel, and certificates
```

## Content

- Edit `src/assets/Data/Articles.json` to add or update articles. Each article uses an `id`, `title`, and `description`; `content`, `author`, `date`, `image`, and `tags` are optional.
- Edit `src/assets/Data/Experience.json` to update the home page experience timeline.
- Edit `src/assets/Data/LandingCarouselSlide.json` to change featured carousel slides.
- Add certificate entries to `src/assets/Data/Certificates.json` (`id`, `title`, and `issuer` are required; credential details and image are optional).

Article card links derive their readable URL segment from each article title. The article ID identifies the content when the title slug changes.
