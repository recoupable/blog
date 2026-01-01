# Recoupable Research Blog

A modern blog built with Next.js 16, MDX, and Contentlayer. Deployed on Vercel.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Contentlayer** - MDX processing and type generation
- **shadcn/ui** - Component library aesthetic
- **Vercel** - Deployment

## 📝 Writing a Post

### Quick Start

1. Create a new file in `content/blog/my-post.mdx`
2. Add frontmatter:

```mdx
---
title: "Your Post Title"
date: "2026-01-15"
description: "A short description for SEO"
author: "Your Name"
tags: ["music", "tech"]
published: true
---

Your content here...
```

3. Write your content using markdown
4. Commit and push - Vercel auto-deploys!

### Frontmatter Fields

- `title` (required): Post title
- `date` (required): Publication date (YYYY-MM-DD)
- `description` (required): Short description for SEO and previews
- `image` (optional): Cover image URL
- `author` (optional): Author name
- `tags` (optional): Array of tags
- `published` (optional): Set to `false` to draft

### Markdown Features

- Headings, lists, links, images
- Code blocks with syntax highlighting
- Tables, blockquotes, horizontal rules
- Inline code and bold/italic text
- HTML (including iframe for videos)

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit `http://localhost:3000` to see your blog.

## 📁 Project Structure

```
recoup-blog/
├── app/
│   ├── blog/[slug]/page.tsx    # Individual blog post page
│   ├── page.tsx                # Homepage (blog listing)
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── mdx-components.tsx      # MDX component overrides
│   └── ui/                     # shadcn components (future)
├── content/
│   └── blog/                   # Your blog posts (.mdx files)
├── lib/
│   └── utils.ts                # Utility functions
├── public/
│   └── blog/                   # Blog images
├── contentlayer.config.ts      # Contentlayer configuration
└── next.config.mjs             # Next.js configuration
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push this repo to GitHub
2. Import to Vercel
3. Vercel auto-detects Next.js
4. Deploy!

Future pushes to `main` auto-deploy.

### Custom Domain

In Vercel dashboard:
1. Go to your project settings
2. Add custom domain (e.g., `blog.recoupable.com` or `research.recoupable.com`)
3. Update DNS records as shown

## 📊 Future Features

- [ ] Social sharing automation
- [ ] Newsletter integration
- [ ] Comments system
- [ ] Search functionality
- [ ] RSS feed
- [ ] Analytics dashboard
- [ ] Draft preview mode

## 🤝 Contributing

To add a post:
1. Create branch: `git checkout -b post/your-post-name`
2. Add your `.mdx` file in `content/blog/`
3. Test locally: `pnpm dev`
4. Commit: `git commit -m "Add post: Your Title"`
5. Push: `git push origin post/your-post-name`
6. Merge to main when ready

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Contentlayer Docs](https://contentlayer.dev)
- [Markdown Guide](https://www.markdownguide.org/)
- [Tailwind CSS](https://tailwindcss.com)

---

Built with ❤️ by [Recoupable](https://recoupable.com)
