# next-starter

An opinionated, production-ready Next.js starter maintained by AudoraLabs. This template reflects the tooling and conventions we use to ship products quickly without compromising on quality.

## Why This Exists

Starting a new project shouldn't mean spending a day configuring TypeScript, linting, formatting, and SEO defaults. This starter provides a clean foundation with sensible defaults so you can focus on building features.

## Tech Stack

- **Next.js 16** with App Router and React 19
- **TypeScript** with strict mode enabled
- **Bun** as the package manager and runtime
- **Tailwind CSS 4** with PostCSS
- **ESLint 9** flat config with Next.js rules
- **Prettier** with Tailwind plugin
- **React Compiler** enabled for automatic optimizations

## Features

- SEO-ready with `robots.ts`, `sitemap.ts`, and Open Graph metadata
- Title templates and metadataBase configured
- Path alias `@/*` mapped to `./src/*`
- Dark mode support via CSS custom properties
- Geist font family pre-configured

## Folder Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind imports and CSS variables
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   ├── robots.ts        # robots.txt generation
│   └── sitemap.ts       # Sitemap generation
```

## Usage

Clone this template using degit:

```bash
bunx degit AudoraLabs/next-starter my-project
cd my-project
bun install
```

## Development

```bash
# Start development server
bun dev

# Build for production
bun run build

# Start production server
bun start

# Lint code
bun lint

# Format code
bun format

# Check formatting
bun format:check
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Base URL for sitemap, robots.txt, and Open Graph |

## SEO Configuration

This starter includes production-ready SEO defaults:

- **`layout.tsx`** exports metadata with Open Graph and Twitter card support
- **`robots.ts`** generates robots.txt with sitemap reference
- **`sitemap.ts`** provides a dynamic sitemap template

Update the metadata in `layout.tsx` and set `NEXT_PUBLIC_SITE_URL` to configure for your domain.

## Opinionated Decisions

**Bun over npm/yarn/pnpm**
Faster installs, native TypeScript execution, and fewer moving parts. The lockfile is smaller and the CLI is simpler.

**App Router only**
The Pages Router is legacy. App Router provides better layouts, streaming, and server components out of the box.

**React Compiler enabled**
Automatic memoization without manual `useMemo` and `useCallback`. Less code, fewer bugs.

**Tailwind CSS 4**
Native CSS cascade layers, no config file needed for basic usage, and the new `@theme` directive for design tokens.

**ESLint flat config**
The new config format is cleaner and more composable. No `.eslintrc` files.

**No component library**
We prefer building UI from scratch with Tailwind. Add shadcn/ui or Radix if your project needs it.

## How We Use This

At AudoraLabs, this template is our starting point for client projects and internal tools. We clone it, customize the metadata, and start building. The conventions here reflect what we've found works well across dozens of projects.

## License

MIT
