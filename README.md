# SafeDriver

SafeDriver is a Next.js portfolio and research showcase for an AI-based driver monitoring and accident prevention platform. The site presents the project domain, features, implementation screenshots, technology stack, documentation, source links, team details, and an EmailJS-powered contact form.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React icons
- EmailJS contact form
- Vercel Analytics

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Set these values in `.env`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

- `app/page.tsx` - main landing page composition
- `app/components/` - section components
- `app/layout.tsx` - global metadata, analytics, font, and layout
- `app/sitemap.ts` - generated sitemap
- `app/robots.ts` - generated robots rules
- `public/` - images, PDFs, screenshots, and logos

## Resource Files

Project documents live in `public/documents`, presentations in `public/presentation`, and research files in `public/research`.

The “Final Documentation” resource is currently marked as coming soon because no final documentation PDF is present in `public/documents`. Add the PDF there and update `app/components/Documents.tsx` when it is ready.

## EmailJS Setup

The contact form requires:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

The template should support these variables:

- `name`
- `email`
- `message`
- `from_name`
- `from_email`
- `reply_to`
- `time`

If any EmailJS value is missing, the form shows a configuration error instead of attempting to send.

## SEO

SEO metadata is configured in `app/layout.tsx`, including:

- Title and description
- Keywords
- Canonical URL
- Open Graph metadata
- Twitter card metadata
- Social preview image from `public/coverimage.png`

Set `NEXT_PUBLIC_SITE_URL` to the production domain before deployment so `metadataBase`, `robots.txt`, and `sitemap.xml` use the correct URL.

## Deployment

Recommended deployment target: Vercel.

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add the environment variables from `.env.example`.
4. Set `NEXT_PUBLIC_SITE_URL` to the deployed domain.
5. Deploy.

For other hosts, build and start the production server:

```bash
npm run build
npm run start
```

## Production Notes

- `next.config.ts` sets `turbopack.root` to the project directory to avoid workspace-root warnings when another lockfile exists higher in the Windows user folder.
- `app/error.tsx` provides a user-friendly runtime error screen.
- `app/loading.tsx` provides a simple route loading state.
- Keep real `.env` values private. Use `.env.example` for documentation only.
