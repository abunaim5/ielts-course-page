# IELTS Course Product Page

A high-performance product page for the **IELTS Course by Munzereen Shahid**, built using **Next.js App Router**, **TypeScript**, and **TailwindCSS**, following the requirements provided by 10 Minute School.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Data Fetching**: REST API (SSR, ISR)
- **Deployment**: Vercel / Custom host (adjust as needed)

## Features Implemented

### Core Requirements

- **Product Title** — rendered from API.
- **Course Description** — rendered as HTML from the `description` field.
- **Course Instructors** — parsed from `sections` where `type === 'instructor'`.
- **Product Trailer** — embedded YouTube video from `media` field.
- **Default Price** — statically set to 1000 BDT.
- **CTA Button** — text from `cta_text`.

### Localization

- **URL-based Routing**: `/en/product/[slug]`, `/bn/product/[slug]`
- **API Integration**: language passed via query param `lang=en/bn`
- **Language Toggle**: seamless switching between English and Bangla

### SSR + ISR

- **SEO**: Dynamic `<meta>` tags are set using a custom `SeoHead` component based on the API's `seo` object.  
- **SSR**: Pages are rendered on the server using dynamic `fetch` and `async` components in the App Router.
- **ISR**: Implemented via `revalidate` in dynamic routes to statically regenerate with freshness.

### Additional Implementations (Good to Have)

- **Course Layout** — rendered from `sections` where `type === 'features'`.
- **What You'll Learn** — rendered from `sections` where `type === 'pointers'`.
- **Exclusive Feature** — rendered from `sections` where `type === 'feature_explanations'`.
- **Course Details** — shown using `sections` where `type === 'about'`.
- **Checklist** — displayed from `checklist` array.
- **SEO** — dynamic `meta` tags from `seo` object in API using a custom `SeoHead` component.

## How to Run Locally

```bash
git clone https://github.com/abunaim5/ielts-course-page.git
cd ielts-course-page
npm install
npm run dev