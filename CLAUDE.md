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

This is a Next.js 16 blog using the App Router. Blog posts come from **two different sources** — pick the right one for your task.

### Two content pipelines (pick one — do not mix for the same post)

**1. Paragraph-synced posts (PREFERRED for posts originating on paragraph.com)**

Live-fetched from the Paragraph public API at request time; cached via ISR (1 hour). Content stays single-source-of-truth on paragraph.com — edits there flow through automatically.

- Registry: `lib/paragraph/constants.ts` (`PARAGRAPH_POSTS` array)
- Fetcher: `lib/paragraph/api.ts` (`getParagraphPost(id)`)
- Renderer: `components/Paragraph/ParagraphPage.tsx`
- Route: `app/blog/<slug>/page.tsx` — thin wrapper that calls `getParagraphPost` + `<ParagraphPage>`
- Examples: `app/blog/recoup-in-2026/`, `app/blog/sandbox-for-record-labels/`

To add a Paragraph-synced post:

1. Grab the post ID from the Paragraph dashboard or from a DevTools Network request to `public.api.paragraph.com/api/v1/posts/<id>?includeContent=true` when viewing the post (slugs are NOT accepted by the API — only the 20-char alphanumeric post ID works).
2. Append an entry to `PARAGRAPH_POSTS` in `lib/paragraph/constants.ts` with `key`, `id`, `url`, `author`, `tags`.
3. Create `app/blog/<slug>/page.tsx` mirroring `sandbox-for-record-labels/page.tsx` — swap only the `PARAGRAPH_POST_IDS.<KEY>` reference and the component name.

Do NOT author an MDX file for Paragraph-backed posts. The two pipelines are independent and the post would render twice (or neither, depending on routing).

**2. MDX posts (for content authored directly in this repo)**

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
