# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Workflow

- Never push directly to `main`
- Always create a feature branch for changes
- After committing changes, push to the feature branch
- If no pull request exists for the feature branch, open a PR from the feature branch to `main`

## Code Principles

- **DRY** (Don't Repeat Yourself): Extract shared logic into reusable functions or components
- **SRP** (Single Responsibility Principle): Each module/function should do one thing well
- **YAGNI** (You Aren't Gonna Need It): Only implement what's needed now, not speculative features
- **OCP** (Open/Closed Principle): Code should be open for extension but closed for modification

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Run development server (localhost:3000)
pnpm build            # Build for production (runs contentlayer2 build first)
pnpm start            # Start production server
pnpm lint             # Run ESLint
```

## Architecture

This is a Next.js 16 blog using the App Router with MDX content managed by Contentlayer2.

### Content Pipeline

1. Blog posts are MDX files in `content/blog/`
2. Contentlayer2 processes MDX files at build time (`contentlayer.config.ts`)
3. Generated types and data are imported from `contentlayer/generated`
4. The `Post` document type defines required fields: `title`, `date`, `description`
5. Posts with `published: false` are filtered from display

### Key Patterns

- **MDX Rendering**: `components/mdx-components.tsx` provides component overrides for MDX content using `useMDXComponent` hook from `next-contentlayer2/hooks`
- **Post Fetching**: Import `allPosts` from `contentlayer/generated` - it's an array of typed Post objects
- **Slug Resolution**: Computed from file path in contentlayer config (e.g., `content/blog/my-post.mdx` becomes slug `my-post`)
- **Theming**: Uses `next-themes` with ThemeProvider in root layout
- **Styling**: Tailwind CSS with `@/lib/utils` for `cn()` class merging utility

### Blog Post Frontmatter

Required fields:
- `title`: string
- `date`: date (YYYY-MM-DD)
- `description`: string (for SEO/previews)

Optional fields:
- `image`: string (cover image URL)
- `author`: string
- `tags`: string[]
- `published`: boolean (defaults to true)

### Path Aliases

- `@/` maps to project root (configured in tsconfig.json)
