# Deployment Guide

## 🚀 Quick Deploy to Vercel

### Step 1: Push to GitHub

```bash
# Navigate to your blog directory
cd /Users/sidneyswift/Documents/GitHub/Recoupable/Recoup-Product/recoup-blog

# Stage all files
git add .

# Create initial commit
git commit -m "Initial commit: Recoupable Research blog"

# Create GitHub repository (using gh CLI if you have it)
gh repo create Recoupable/recoup-blog --public --source=. --remote=origin --push

# Or manually:
# 1. Go to https://github.com/new
# 2. Create repo named "recoup-blog"
# 3. Then run:
git remote add origin git@github.com:Recoupable/recoup-blog.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Vercel CLI (Fastest)

```bash
# Install Vercel CLI if you don't have it
pnpm add -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name? recoup-blog
# - Which directory? ./ (press enter)
# - Override settings? No

# Deploy to production
vercel --prod
```

#### Option B: Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your `Recoupable/recoup-blog` repository
3. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `pnpm run build`
   - **Install Command**: `pnpm install`
4. Click "Deploy"

### Step 3: Configure Custom Domain

1. In Vercel dashboard → Project Settings → Domains
2. Add domain:
   - Option 1: `research.recoupable.com`
   - Option 2: `blog.recoupable.com`
3. Add DNS records (Vercel will show you what to add):
   ```
   Type: CNAME
   Name: research (or blog)
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (~5-30 minutes)

## 📝 Publishing Workflow

Once deployed, publishing is simple:

```bash
# 1. Write your post
cd content/blog
# Create new-post.mdx with frontmatter

# 2. Test locally
pnpm dev
# Visit http://localhost:3000

# 3. Commit and push
git add content/blog/new-post.mdx
git commit -m "Add post: Your Post Title"
git push

# 4. Auto-deploys to Vercel in ~2 minutes!
```

## 🔧 Environment Variables

No environment variables are required for basic operation.

Future integrations might need:
- `RESEND_API_KEY` - for email newsletter
- `SUPABASE_URL` / `SUPABASE_ANON_KEY` - for social posting automation
- `DATABASE_URL` - for comments or analytics

## 🌐 Custom Domain Setup Details

### DNS Records

For `research.recoupable.com`:

```
Type: CNAME
Name: research
Value: cname.vercel-dns.com
TTL: Auto
```

### SSL Certificate

- Vercel automatically provisions SSL certificates
- HTTPS will be enforced
- Certificate auto-renews

## 📊 Monitoring

### Vercel Analytics (Free)

Enable in project settings:
- Web Analytics
- Speed Insights

### Custom Analytics

Add Google Analytics / Plausible / Fathom:

1. Create `app/layout.tsx` script tag:

```tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
```

## 🔄 Continuous Deployment

Once set up:

1. **Automatic**: Push to `main` → auto-deploy to production
2. **Preview**: Push to feature branch → get preview URL
3. **Rollback**: Vercel dashboard → Deployments → click previous → "Promote to Production"

## 🧪 Testing Before Deploy

```bash
# Build locally to catch errors
pnpm build

# Test production build
pnpm start

# Or use Vercel preview
git checkout -b preview/test-post
git push -u origin preview/test-post
# Vercel creates preview URL
```

## 📱 Social Sharing Setup (Future)

To auto-post to social media when publishing:

1. Set up Supabase table to store published posts
2. Create API route `/api/publish` that:
   - Saves post to database
   - Calls Twitter/LinkedIn APIs
   - Generates social cards
3. Add webhook in Vercel to trigger on deploy

Example flow:
```
Push to GitHub → Vercel Deploy → Webhook → API Route → Social Posts
```

## 🆘 Troubleshooting

### Build fails on Vercel

Check Vercel logs:
1. Vercel Dashboard → Project → Deployments
2. Click failed deployment
3. View "Building" logs

Common issues:
- Missing dependencies: `pnpm install` locally
- TypeScript errors: `pnpm build` locally
- MDX syntax errors: Check backticks in code blocks

### Domain not working

1. Verify DNS propagation: https://dnschecker.org
2. Check Vercel domain status (should be green checkmark)
3. Wait 30 minutes for full propagation

### Images not loading

- Store images in `/public/blog/`
- Reference as `/blog/image.jpg` in markdown
- Or use external URLs (imgur, cloudinary)

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Contentlayer Docs: https://contentlayer.dev

---

**You're all set!** Your blog is now live and ready for content. 🎉
