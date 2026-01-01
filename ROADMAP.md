# Recoupable Research: Blog Evolution Roadmap

**Vision**: Transform this from a simple blog into the definitive platform for music industry insights—powered by AI, built for speed, designed for delight.

---

## Core Philosophy

**Elegantly Simple, Deeply Capable**

- Surface should be minimal, clean, focused on content
- Depth reveals itself progressively to engaged users
- Every feature must earn its place through real value
- Performance and accessibility are non-negotiable

---

## The 15 Dimensions of Excellence

### 1. Content Infrastructure & Authoring

**Current State**: Manual MDX file creation, no workflow tools

**Vision**: World-class authoring experience that makes publishing effortless

**Improvements**:
- **Visual CMS** (Keystatic): Git-based editing with beautiful UI
- **Draft/Publish Workflow**: Separate preview environments, scheduled publishing
- **Content Versioning**: Leverage git history with UI to track post evolution
- **Rich Media Management**: Optimized image pipeline, video embedding, audio players
- **SEO Automation**: AI-generated meta descriptions, automatic keyword extraction
- **Collaborative Editing**: Team comments, suggestions, review workflow
- **Content Analytics**: Which sections engage readers, where they drop off
- **A/B Testing**: Test titles, descriptions, hero images to optimize engagement
- **Related Content Engine**: ML-based similarity matching for "you might also like"

### 2. Performance & Speed

**Current State**: Good foundation with Next.js 16, but unoptimized

**Vision**: Sub-100ms page loads, instant interactions, butter-smooth animations

**Improvements**:
- **Image Optimization**: Next.js Image with blur placeholders, WebP/AVIF
- **Route Prefetching**: Load post content on card hover for instant navigation
- **View Transitions API**: Smooth, native-feeling page transitions
- **Partial Prerendering**: Optimal static/dynamic balance
- **Edge Deployment**: Already on Vercel Edge ✓
- **Aggressive Caching**: ISR with smart revalidation, stale-while-revalidate
- **Bundle Optimization**: Code splitting, dynamic imports, tree shaking
- **Critical CSS Inlining**: Fastest possible first paint
- **Service Worker**: Offline reading, background sync
- **Reading Position Persistence**: Pick up exactly where you left off
- **Performance Budget**: Monitor and enforce size limits
- **Core Web Vitals**: Target 100/100 Lighthouse scores

**Metrics to Hit**:
- LCP: < 1.2s
- FID: < 50ms
- CLS: < 0.05
- TTFB: < 200ms

### 3. Typography & Readability

**Current State**: Inter font, basic responsive sizing

**Vision**: Best reading experience on the internet

**Improvements**:
- **Type Scale**: Proper modular scale (1.25 ratio)
- **Optimal Line Length**: 60-75 characters for body text
- **Leading/Tracking**: Perfect spacing for long-form reading
- **Font Pairing**: Add serif option (Crimson Pro/Lora) for articles
- **Reader Mode**: Distraction-free with customizable:
  - Font size (16-24px)
  - Line height (1.5-2.0)
  - Column width (45-75ch)
  - Font family (sans/serif/mono)
- **Reading Time**: Calculated and displayed (265 words/min average)
- **Progress Indicator**: Subtle progress bar showing article completion
- **Dark Mode Optimization**: Softer whites (#e4e4e7), deeper blacks
- **OpenType Features**: Ligatures, old-style numerals, proper fractions
- **Responsive Typography**: Fluid type that scales smoothly
- **Text-to-Speech**: Built-in narration using Web Speech API
- **Highlight to Share**: Select text → popup to tweet quote
- **Personal Annotations**: Local storage for highlights and notes

### 4. Content Formatting & MDX Features

**Current State**: Basic MDX, no custom components

**Vision**: Rich, interactive content that goes beyond traditional blogs

**Core Components**:
```typescript
<Callout type="info|warning|tip|danger">
<CodeBlock language="tsx" filename="app.tsx" highlight="3,5-7">
<Tabs items={["npm", "pnpm", "yarn"]}>
<Accordion title="Show details">
<Mermaid chart="...">
<Math equation="E = mc^2">
<Spotify track="...">
<AppleMusic album="...">
<YouTube video="...">
<Tweet id="...">
<ImageGallery images={[...]}>
<Aside>  // Tufte-style sidenotes
<TableOfContents>
<KeyTakeaways>  // Auto-extracted or manual
<AudioPlayer src="...">
<DataVisualization data={...}>
<InteractiveTool>  // Calculators, demos
<Timeline events={[...]}>
<ComparisonTable data={...}>
<DownloadButton file="...">
<NewsletterForm>
```

**Syntax Highlighting**:
- Shiki with theme matching (light/dark auto-switch)
- Line highlighting and diffs
- Copy button on all code blocks
- File name headers
- Language labels

**Music Industry Specific**:
```typescript
<RoyaltyCalculator streams={...}>
<StreamingChart data={...}>
<ReleaseTimeline>
<IndustryGlossary term="...">
<ContractTemplate type="...">
<ArtistProfile id="...">
<LabelInfo>
<ChartPosition track="..." platform="...">
<WaveformVisualizer audio="...">
<BPMDetector>
```

### 5. Visual Design & Aesthetics

**Current State**: Clean foundation with cards and dual themes

**Vision**: Unforgettable aesthetic that feels expensive and purposeful

**Improvements**:
- **Hero Images**: Featured images for each post (16:9, optimized)
- **Author Avatars**: Professional headshots with hover states
- **Atmospheric Depth**: Subtle texture/grain overlays for richness
- **Category Color Coding**: Visual hierarchy through color
  - AI/Technology: Blue (#4778f5)
  - Business: Green (#22c55e)
  - Artists: Purple (#a855f7)
  - Data: Orange (#f97316)
- **Featured Posts**: Hero treatment for important articles
- **Series Indicators**: Visual connection for multi-part articles
- **Alternative Views**:
  - Grid (1/2/3 columns)
  - List (compact)
  - Timeline (chronological)
  - Masonry (varied heights)
- **Loading States**: Skeleton screens that match content layout
- **Empty States**: Beautiful illustrations for "no results"
- **Error Pages**: Delightful 404 that keeps users engaged
- **Print Optimization**: Reader-friendly print stylesheets
- **Brand Consistency**: Match Recoupable.com aesthetic exactly

**Theme System**:
- Light (current)
- Dark (current)
- Sepia (warm reading)
- High Contrast (accessibility)
- Auto (time-based switching)

### 6. Motion & Animation

**Current State**: Basic hover transitions

**Vision**: Purposeful motion that guides attention and delights

**Principles**:
- Respect `prefers-reduced-motion`
- Subtle, not distracting
- Purposeful, not decorative
- Fast (< 300ms)
- Smooth (60fps)

**Implementations**:
- **View Transitions API**: Shared element transitions between pages
- **Scroll Animations**: Framer Motion for reveals
  - Fade up on cards
  - Stagger on lists
  - Parallax on hero (subtle)
- **Micro-interactions**:
  - Button press feedback
  - Hover states with scale/glow
  - Toggle switches with smooth transitions
  - Loading spinners that feel alive
- **Page Transitions**:
  - Fade for instant feel
  - Slide for directional navigation
  - Morph for related content
- **Gesture Support**:
  - Swipe to navigate posts (mobile)
  - Pull to refresh
  - Long press for context menu
- **Progress Animations**:
  - Reading progress (linear)
  - Loading content (skeletal)
  - Success states (celebrate)
- **Easter Eggs**:
  - Konami code reveals something fun
  - Cursor trail on logo hover
  - Confetti on newsletter signup

### 7. Search & Discovery

**Current State**: No search, chronological only

**Vision**: Find anything instantly, discover content serendipitously

**Search Implementation**:
- **Primary**: Pagefind (static, fast, no API costs)
  - Indexes all content at build time
  - Instant client-side search
  - Highlights matches in context
  - Works offline
- **Future**: Semantic search with embeddings
  - Natural language queries
  - "Posts about artist royalties from last year"
  - Question answering directly in search

**Search UX**:
- ⌘K modal (Spotlight-style)
- Search-as-you-type results
- Recent searches
- Popular searches
- Keyboard navigation (↑↓ to navigate, Enter to open)
- Mobile-optimized input

**Discovery Features**:
- **Tag System**: Click any tag to filter
- **Category Pages**: Browse by topic
- **Author Pages**: All posts by author
- **Series Pages**: Multi-part articles together
- **Date Archives**: Browse by year/month
- **Related Posts**: ML-based recommendations (3-5 per post)
- **Popular Now**: Trending posts based on views
- **Editor's Picks**: Curated selections
- **Reading History**: Track what you've read
- **Bookmarks**: Save for later (local storage)
- **Continue Reading**: Resume interrupted posts

**Filters**:
- By date range
- By read time (< 5min, 5-10min, 10+ min)
- By format (article, tutorial, case study, interview)
- By topic/tag
- By author

### 8. Social & Sharing

**Current State**: Basic OG tags

**Vision**: Built for sharing, optimized for virality

**Sharing Features**:
- **Share Buttons**: Twitter/X, LinkedIn, Email, Copy Link
- **Web Share API**: Native sharing on mobile
- **Quote Cards**: Auto-generate beautiful quote images
  - Custom design per theme
  - Author attribution
  - Recoupable branding
  - Download or share directly
- **Click to Tweet**: Inline tweetable quotes
- **Highlight to Share**: Select text → share popup
- **Social Metadata**:
  - Dynamic OG images per post
  - Twitter Card optimization
  - LinkedIn-specific formatting
  - Custom titles/descriptions

**Open Graph Images**:
- Auto-generated from post metadata
- Beautiful typography
- Category color coding
- Author avatar
- Recoupable branding
- 1200x630 optimized

**Community Features**:
- **Comments**: Giscus (GitHub Discussions)
  - Login with GitHub
  - Markdown support
  - Threaded conversations
  - Reactions
  - Author badges
- **Reactions**: Quick emoji reactions (👍 💡 ❤️ 🔥 🤔)
- **View Counter**: Show popularity
- **Reading Lists**: Curated collections users can share
- **Webmentions**: Show external references to posts

**Newsletter**:
- Prominent signup form
- Email-optimized post versions
- Welcome series
- Weekly digests
- Integration with existing Recoupable newsletter

**RSS**:
- Full-text feed
- Category-specific feeds
- Author-specific feeds
- JSON Feed support

### 9. AI Features (The Differentiator)

**Current State**: No AI features

**Vision**: An AI research assistant that knows everything published on Recoupable Research

**Core Feature: AI Chat Assistant**

```typescript
// User opens chat panel
User: "What has Recoupable written about artist royalty calculations?"

AI Assistant: "Recoupable has published several articles about royalty calculations:

1. In 'Meta Bought Manus Because Agents Still Break' (Jan 2026), we discuss how orchestration systems can help artists track royalty flows across multiple platforms.

2. [Future post] 'Understanding Streaming Royalties' covers the math behind per-stream payouts.

3. [Future post] 'Label Contracts 101' includes a section on royalty structures.

Would you like me to explain how streaming royalties are calculated?"

User: "Yes, explain streaming royalties"

AI Assistant: [Synthesizes information from multiple posts with citations]
```

**Technical Implementation**:

**Phase 1: Basic RAG**
- Embed all blog content using OpenAI text-embedding-3-small
- Store in Supabase pgvector (free, open source)
- On query: embed query, find similar chunks, pass to Claude
- Stream response using Vercel AI SDK
- Show source citations with links

**Phase 2: Advanced Features**
- Conversation memory (past 10 messages)
- Follow-up question suggestions
- Multi-post synthesis
- Timeline awareness ("recent posts about...")
- Author-specific queries ("what does Sidney think about...")
- Concept explanations (hover terms for AI explanation)

**Phase 3: Personalization**
- Learn user interests from reading history
- Suggest relevant posts proactively
- Adapt explanations to user's knowledge level
- Remember preferences across sessions

**UI/UX**:
- Floating chat button (bottom right)
- Slide-out panel (doesn't cover content)
- Markdown rendering in responses
- Code syntax highlighting
- Citations as clickable chips
- Copy button for responses
- Conversation history
- Example questions to start
- Mobile-optimized drawer

**Other AI Features**:

**Semantic Search**:
- Understand intent, not just keywords
- "How do independent artists get paid?" → finds royalty content
- Search across meaning, not just exact matches

**Auto-Summarization**:
- TL;DR at top of long posts
- Generate if not manually provided
- Key takeaways extraction

**Content Enhancements**:
- Suggest related questions at end of posts
- Auto-generate table of contents
- Extract key quotes automatically
- Improve SEO metadata if missing

**Writing Assistant** (Internal):
- Help authors improve drafts
- Suggest better titles
- Check clarity and readability
- Ensure consistent voice

**Accessibility**:
- AI-generated alt text for images
- Auto-transcribe embedded audio/video
- Translate posts (future)

**Privacy & Transparency**:
- Clear "Powered by AI" labels
- Explain how chat works
- Option to disable AI features
- No training on user data
- Conversation history is private

### 10. Analytics & Insights

**Current State**: No analytics

**Vision**: Understand your content and readers deeply while respecting privacy

**Privacy-First Analytics**:
- **Primary**: Vercel Analytics (Web Vitals, edge functions)
- **Secondary**: Plausible (privacy-friendly page views)
- No cookies required
- GDPR compliant by default
- Opt-in for any user tracking

**Metrics Tracked**:

**Public Metrics** (shown on site):
- Page views (aggregate)
- Popular posts (last 7/30 days)
- Reading time distribution
- Most searched terms
- Trending topics

**Internal Dashboard**:
- **Engagement**:
  - Time on page (real engagement, not bounce)
  - Reading depth (% of article read)
  - Scroll maps (where attention focuses)
  - Return visitors
  - Reading patterns (time of day, day of week)
- **Performance**:
  - Core Web Vitals per page
  - Load times by geographic region
  - Error rates
  - API response times
- **Content**:
  - Top performing posts
  - Underperforming content
  - Drop-off points in articles
  - Share rates
  - Comment engagement
- **Search**:
  - Popular search queries
  - No-result searches (content gaps)
  - Search-to-click rate
- **AI Chat**:
  - Question topics
  - Citation click-through
  - Conversation length
  - User satisfaction (thumbs up/down)
- **Conversion**:
  - Newsletter signups
  - Download clicks
  - External link clicks
  - Share button usage

**A/B Testing Framework**:
- Test titles, descriptions, hero images
- Measure impact on engagement
- Statistical significance calculation
- Easy variant creation

**Real-Time Features**:
- Live visitor count
- Current popular posts
- Recent searches
- Comment activity

**Author Dashboard**:
- Per-author analytics
- Best performing posts
- Reader feedback
- Writing streaks

### 11. Technical Infrastructure

**Current State**: Solid Next.js foundation, no testing/monitoring

**Vision**: Production-grade platform with monitoring, testing, and scalability

**Tech Stack Evolution**:

**Keep**:
- Next.js 16 (App Router, RSC, Server Actions) ✓
- React 19 ✓
- TypeScript ✓
- Tailwind CSS ✓
- Vercel deployment ✓

**Add**:

**Database**: Supabase (all-in-one)
- Postgres for dynamic data (views, likes, comments, users)
- pgvector for AI embeddings
- Auth for admin/user features
- Storage for media uploads
- Real-time subscriptions
- Row Level Security (RLS) for data protection

**Search**: Pagefind
- Static, fast, no API needed
- Indexes at build time
- Client-side search
- Zero cost

**AI**:
- Anthropic Claude (chat, summarization)
- OpenAI (embeddings, fallback)
- Vercel AI SDK (streaming, hooks)

**CMS**: Keystatic
- Git-based (no vendor lock-in)
- Beautiful visual editor
- Type-safe schema
- Works with existing content
- Deploy as /admin route

**Analytics**:
- Vercel Analytics (Core Web Vitals)
- Plausible (privacy-friendly pageviews)

**Monitoring**:
- Sentry (error tracking)
- Better Stack (uptime monitoring)
- Vercel Speed Insights

**Animation**:
- Framer Motion (React animations)
- View Transitions API (native)

**Testing**:
- Playwright (E2E)
- Vitest (unit/integration)
- Testing Library (component)

**CI/CD**:
- GitHub Actions
- Automated testing on PRs
- Preview deployments (Vercel) ✓
- Automated accessibility checks
- Bundle size monitoring

**Development**:
```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm test         # Run tests
pnpm test:e2e     # E2E tests
pnpm lint         # Lint code
pnpm format       # Format code
pnpm analyze      # Bundle analysis
```

**Project Structure**:
```
recoup-blog/
├── app/
│   ├── (blog)/              # Public routes
│   │   ├── page.tsx         # Homepage
│   │   ├── [slug]/         # Post pages
│   │   ├── tag/[tag]/      # Tag pages
│   │   ├── author/[author]/ # Author pages
│   │   ├── series/[series]/ # Series pages
│   │   └── search/         # Search page
│   ├── (reader)/            # Reader mode (minimal UI)
│   │   └── [slug]/
│   ├── api/                 # API routes
│   │   ├── chat/           # AI chat
│   │   ├── search/         # Search API
│   │   ├── views/          # View tracking
│   │   ├── analytics/      # Custom analytics
│   │   └── og/             # Dynamic OG images
│   ├── admin/              # Keystatic CMS
│   │   └── [[...params]]/
│   └── layout.tsx
├── components/
│   ├── ui/                 # Base components (Button, Card, etc)
│   ├── blog/               # Blog-specific (PostCard, Author, etc)
│   ├── mdx/                # MDX components (Callout, Code, etc)
│   ├── ai/                 # AI features (Chat, Suggest, etc)
│   ├── search/             # Search UI
│   └── analytics/          # Analytics widgets
├── lib/
│   ├── ai/
│   │   ├── chat.ts         # Chat logic
│   │   ├── embeddings.ts   # Vector operations
│   │   └── prompts.ts      # System prompts
│   ├── db/
│   │   ├── client.ts       # Supabase client
│   │   ├── queries.ts      # Database queries
│   │   └── migrations/     # Schema migrations
│   ├── search/
│   │   └── pagefind.ts     # Search utilities
│   ├── analytics/
│   │   └── track.ts        # Event tracking
│   └── utils/
│       ├── date.ts
│       ├── reading-time.ts
│       └── seo.ts
├── content/
│   ├── blog/               # MDX blog posts
│   ├── authors/            # Author profiles
│   └── series/             # Series metadata
├── public/
│   ├── images/
│   │   ├── backgrounds/
│   │   ├── logos/
│   │   ├── authors/
│   │   └── posts/
│   └── audio/
├── tests/
│   ├── e2e/                # Playwright tests
│   └── unit/               # Vitest tests
├── contentlayer.config.ts
├── keystatic.config.tsx    # CMS configuration
├── playwright.config.ts
└── vitest.config.ts
```

**Performance Monitoring**:
- Lighthouse CI on every deploy
- Bundle size tracking (warn if > 200KB)
- API response time monitoring
- Database query performance
- Edge function cold starts

**Security**:
- Dependency scanning (Dependabot)
- HTTPS only
- CSP headers
- Rate limiting on API routes
- Input sanitization
- SQL injection prevention (Supabase RLS)
- XSS protection

**Scalability**:
- Edge-first architecture
- Static generation where possible
- ISR for dynamic content
- Database connection pooling
- CDN for all assets
- Horizontal scaling ready

### 12. Mobile Experience

**Current State**: Responsive design, not optimized

**Vision**: Native app feel, works offline, delightful on mobile

**PWA Features**:
- Installable (Add to Home Screen)
- Offline reading (service worker cache)
- Background sync
- Push notifications (opt-in for new posts)
- Full-screen mode
- Custom splash screen
- App icons (all sizes)

**Mobile-Specific UX**:
- **Touch Gestures**:
  - Swipe left/right to navigate posts
  - Pull down to refresh
  - Long press for context menu
  - Pinch to zoom images
- **Bottom Navigation**: Easier thumb access
  - Home, Search, Bookmarks, More
- **Floating Action Button**: Quick actions
- **Native Sharing**: Use Web Share API
- **Haptic Feedback**: Subtle vibrations on interactions
- **Reading Position**: Sync across devices (cloud save)

**Performance**:
- Aggressive image lazy loading
- Intersection Observer for everything below fold
- Minimal JavaScript on initial load
- Preload critical fonts
- Service worker prefetching

**Responsive Breakpoints**:
- Mobile: < 640px (single column, compact)
- Tablet: 640-1024px (2 columns)
- Desktop: 1024-1536px (3 columns, sidebar)
- Large: > 1536px (wider content, more whitespace)

**Mobile Typography**:
- Larger touch targets (min 44x44px)
- Optimal line length for narrow screens
- Readable font sizes (min 16px)
- Sufficient contrast (WCAG AAA)

**Input Optimization**:
- Large search bar
- Auto-correct enabled
- Voice input support
- Search suggestions on tap

### 13. Accessibility (WCAG AAA)

**Current State**: Basic semantic HTML

**Vision**: Accessible to everyone, regardless of ability

**Standards**:
- WCAG 2.1 AAA compliance
- Section 508 compliant
- ARIA best practices
- Semantic HTML throughout

**Visual Accessibility**:
- **Contrast Ratios**: 7:1 minimum (AAA)
- **Color Blind Modes**: Deuteranopia, Protanopia, Tritanopia
- **High Contrast Mode**: Black/white, no grays
- **Focus Indicators**: Clear, visible focus states (3px outline)
- **Font Scaling**: Support up to 200% zoom
- **Dyslexia-Friendly**: OpenDyslexic font option

**Navigation**:
- **Keyboard Only**: Full keyboard navigation
- **Skip Links**: Jump to main content
- **Landmark Regions**: Proper ARIA landmarks
- **Heading Hierarchy**: Logical h1-h6 structure
- **Tab Order**: Logical focus order
- **Escape Keys**: Close modals, clear search

**Screen Reader Optimization**:
- Descriptive alt text for all images
- ARIA labels for interactive elements
- ARIA live regions for dynamic content
- Proper form labels
- Descriptive link text (no "click here")
- Reading order matches visual order

**Motor Accessibility**:
- Large touch targets (min 44x44px)
- No time-limited interactions
- Generous click areas
- No fine motor requirements
- Voice control support
- Switch control compatible

**Cognitive Accessibility**:
- Clear, simple language
- Consistent navigation
- Predictable interactions
- Minimal distractions
- Reading mode (simplified)
- Error prevention and recovery

**Media Accessibility**:
- Captions for all videos
- Transcripts for audio
- Audio descriptions for video
- Sign language interpretation (future)

**Testing**:
- Automated: axe, Lighthouse
- Manual: Screen reader testing (NVDA, JAWS, VoiceOver)
- User testing: People with disabilities
- Continuous monitoring

### 14. Content Strategy

**Current State**: Single article format

**Vision**: Diverse content types for different learning styles

**Content Types**:

**Articles** (Current):
- Long-form analysis (2000-5000 words)
- Research-backed insights
- Industry commentary
- Thought leadership

**Tutorials**:
- Step-by-step guides
- Code examples
- Video walkthroughs
- Downloadable resources

**Case Studies**:
- Real-world examples
- Data-driven analysis
- Before/after comparisons
- Lessons learned

**Interviews**:
- Q&A format
- Industry leaders
- Artist spotlights
- Behind-the-scenes

**Quick Takes**:
- Short posts (300-500 words)
- Rapid reactions
- Link posts with commentary
- Daily/weekly observations

**Data Stories**:
- Visualization-heavy
- Interactive charts
- Industry trends
- Market analysis

**Podcasts**:
- Audio discussions
- Embedded players
- Full transcripts
- Chapter markers

**Video Content**:
- Explainer videos
- Product demos
- Event coverage
- Video essays

**Interactive Tools**:
- Royalty calculators
- Budget planners
- Contract analyzers
- Release checklists

**Series**:
- Multi-part deep dives
- Course-like structure
- Progressive learning
- Certification (future)

**Resource Libraries**:
- Contract templates
- Spreadsheet tools
- Checklists
- Industry contacts

**Content Metadata**:
```typescript
interface Post {
  // Core
  title: string
  slug: string
  date: string
  published: boolean

  // Authoring
  author: string | string[]  // Multiple authors
  contributors?: string[]     // Non-primary contributors
  editor?: string             // Content editor

  // Organization
  type: 'article' | 'tutorial' | 'case-study' | 'interview' | 'quick-take'
  category: 'ai' | 'business' | 'artists' | 'data' | 'tools'
  tags: string[]
  series?: string             // Part of a series
  seriesOrder?: number        // Position in series

  // Content
  description: string
  excerpt?: string            // Different from description
  image?: string              // Hero image
  imageAlt?: string

  // Reading
  readingTime?: number        // Auto-calculated or manual
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  targetAudience?: string[]   // ['artists', 'labels', 'managers']

  // SEO
  seo?: {
    title?: string            // Override default
    description?: string      // Override default
    keywords?: string[]
    canonicalUrl?: string
  }

  // Social
  ogImage?: string            // Custom OG image
  twitterCard?: 'summary' | 'summary_large_image'

  // Features
  tableOfContents?: boolean   // Show TOC
  comments?: boolean          // Enable comments
  newsletter?: boolean        // Show signup form

  // Status
  featured?: boolean          // Featured on homepage
  updated?: string            // Last updated date
  deprecated?: boolean        // Mark as outdated
  redirectTo?: string         // Redirect old URLs
}
```

**Editorial Calendar**:
- Plan content 3 months ahead
- Balance content types
- Seasonal content
- Event-driven content
- Evergreen content

**Content Workflow**:
1. Ideation (brainstorm topics)
2. Research (gather data, interviews)
3. Outline (structure the post)
4. Draft (write first version)
5. Review (editor feedback)
6. Revise (incorporate feedback)
7. Finalize (polish, SEO, images)
8. Publish (schedule or immediate)
9. Promote (social, newsletter)
10. Analyze (track performance)
11. Update (refresh as needed)

### 15. Music Industry Specialization

**Current State**: Generic blog platform

**Vision**: The definitive blog for music industry insights

**Music-Specific Features**:

**Embeds & Players**:
```typescript
<SpotifyTrack id="..." />
<SpotifyAlbum id="..." />
<SpotifyPlaylist id="..." />
<AppleMusicTrack id="..." />
<AppleMusicAlbum id="..." />
<SoundCloudTrack url="..." />
<SoundCloudPlaylist url="..." />
<BandcampAlbum url="..." />
<AudioPlayer src="..." waveform={true} />
```

**Data Visualizations**:
```typescript
<StreamingChart
  data={[
    { platform: 'Spotify', streams: 1.2M },
    { platform: 'Apple Music', streams: 800K },
    // ...
  ]}
/>

<RoyaltyBreakdown
  totalRevenue={10000}
  breakdown={[
    { source: 'Streaming', amount: 6000 },
    { source: 'Performance', amount: 2500 },
    // ...
  ]}
/>

<MarketShare
  labels={['Universal', 'Sony', 'Warner', 'Independent']}
  shares={[32, 28, 21, 19]}
/>

<ReleaseTimeline
  releases={[
    { date: '2024-01-15', title: 'Album 1', type: 'album' },
    // ...
  ]}
/>
```

**Interactive Tools**:
```typescript
<RoyaltyCalculator
  streams={100000}
  rate={0.004}
  splits={[
    { role: 'Artist', percentage: 50 },
    { role: 'Label', percentage: 30 },
    { role: 'Producer', percentage: 20 },
  ]}
/>

<BudgetPlanner
  categories={['Recording', 'Marketing', 'Distribution', 'Legal']}
/>

<ContractAnalyzer
  type="recording|publishing|management|distribution"
/>

<ReleaseChecklist
  milestones={['Master complete', 'Artwork done', 'Distribution setup']}
/>

<SplitSheetGenerator
  collaborators={['Artist 1', 'Producer', 'Writer']}
/>
```

**Industry Data**:
```typescript
<ChartPosition
  track="Song Name"
  platform="spotify|billboard|apple"
  position={12}
  previousPosition={18}
/>

<StreamingGrowth
  artist="Artist Name"
  monthlyListeners={2.5M}
  growth={15}  // percentage
/>

<MarketTrends
  metric="streaming-revenue|vinyl-sales|concert-tickets"
  timeframe="ytd|monthly|yearly"
/>
```

**Resources**:
```typescript
<ContractTemplate
  type="recording|publishing|management|360"
  downloadable={true}
/>

<IndustryGlossary
  term="mechanical-royalties"
  definition="..."
  relatedTerms={['performance royalties', 'sync licensing']}
/>

<EventCalendar
  events={[
    { date: '2024-03-15', name: 'SXSW', location: 'Austin' },
    // ...
  ]}
/>

<JobBoard
  positions={[
    { title: 'A&R Manager', company: 'Label', location: 'Remote' },
    // ...
  ]}
/>
```

**Artist & Label Profiles**:
```typescript
<ArtistProfile
  name="Artist Name"
  genre="Pop"
  label="Independent"
  bio="..."
  socials={{ spotify: '...', instagram: '...' }}
  recentReleases={[...]}
/>

<LabelInfo
  name="Label Name"
  founded={2010}
  artists={['Artist 1', 'Artist 2']}
  contact="..."
/>
```

**Music Theory**:
```typescript
<MusicNotation
  abc="X:1\nT:Example\nK:C\nCDEF GABc|"
/>

<ChordProgression
  chords={['C', 'Am', 'F', 'G']}
  key="C Major"
/>

<WaveformAnalyzer
  audio="path/to/audio.mp3"
  features={['bpm', 'key', 'energy', 'danceability']}
/>
```

**Industry Connections**:
- **Recoupable Integration**: Link to Recoupable platform features
- **Partner Tools**: Integrate with industry tools (DistroKid, TuneCore, etc.)
- **Expert Network**: Directory of industry professionals
- **Collaboration Features**: Connect readers with each other

**Specialized Analytics**:
- Track engagement by artist/label
- Popular tools/calculators
- Most downloaded resources
- Industry segment (artist/label/manager/fan)

---

## Phased Implementation Plan

### Phase 1: Foundation (Weeks 1-2)
**Goal**: Production-ready with essential features

**Tasks**:
- [ ] Set up Supabase (database, auth, storage)
- [ ] Implement reading time calculation
- [ ] Add author system with profiles
- [ ] Create proper post schema with all fields
- [ ] Build table of contents generation
- [ ] Add reading progress indicator
- [ ] Optimize typography (line length, spacing)
- [ ] Implement syntax highlighting (Shiki)
- [ ] Create heading anchor links
- [ ] Add Next.js Image optimization
- [ ] Set up basic MDX components (Callout, Code)
- [ ] Configure Spotify/YouTube embeds
- [ ] Add share buttons
- [ ] Implement dynamic OG images
- [ ] Set up Vercel Analytics

**Deliverables**:
- Professional reading experience
- Proper SEO and social sharing
- Embedded media support
- Basic analytics tracking

### Phase 2: Discovery (Weeks 3-4)
**Goal**: Help readers find and engage with content

**Tasks**:
- [ ] Implement Pagefind search
- [ ] Build search modal UI (⌘K)
- [ ] Create tag filtering system
- [ ] Build category pages
- [ ] Build author pages
- [ ] Implement related posts (similarity matching)
- [ ] Add popular posts widget
- [ ] Create RSS feed
- [ ] Build newsletter signup form
- [ ] Add view tracking
- [ ] Implement reading history (local storage)
- [ ] Add bookmarking feature
- [ ] Set up Plausible Analytics

**Deliverables**:
- Fast, effective search
- Multiple discovery paths
- Newsletter integration
- Reading list management

### Phase 3: AI Integration (Weeks 5-6)
**Goal**: Add intelligent features that differentiate

**Tasks**:
- [ ] Set up pgvector in Supabase
- [ ] Create embedding pipeline for all posts
- [ ] Build chat API endpoint (Claude)
- [ ] Create chat UI component
- [ ] Implement RAG (retrieval augmented generation)
- [ ] Add citation system linking to posts
- [ ] Build conversation history
- [ ] Add example questions
- [ ] Implement semantic search
- [ ] Create auto-summarization
- [ ] Add key takeaways extraction
- [ ] Optimize AI costs and latency

**Deliverables**:
- Working AI chat assistant
- Semantic search capability
- Auto-generated summaries
- Enhanced content discovery

### Phase 4: Polish (Weeks 7-8)
**Goal**: Elevate experience with details

**Tasks**:
- [ ] Implement View Transitions API
- [ ] Add scroll-triggered animations (Framer Motion)
- [ ] Create micro-interactions
- [ ] Build reader mode (distraction-free)
- [ ] Add font customization options
- [ ] Implement theme variants (sepia, high contrast)
- [ ] Add text-to-speech
- [ ] Create highlight-to-share
- [ ] Build personal annotations system
- [ ] Set up PWA (service worker, manifest)
- [ ] Implement offline reading
- [ ] Add touch gestures (mobile)
- [ ] Create install prompt
- [ ] Optimize mobile experience

**Deliverables**:
- Smooth animations and transitions
- Customizable reading experience
- PWA installation
- Excellent mobile UX

### Phase 5: Community (Weeks 9-10)
**Goal**: Build engagement and community

**Tasks**:
- [ ] Integrate Giscus comments (GitHub Discussions)
- [ ] Add reaction system
- [ ] Set up Keystatic CMS
- [ ] Build draft/publish workflow
- [ ] Implement content scheduling
- [ ] Create author dashboard
- [ ] Add A/B testing framework
- [ ] Build content performance analytics
- [ ] Implement heatmaps
- [ ] Add conversion tracking
- [ ] Set up Sentry error monitoring
- [ ] Create contributor guidelines
- [ ] Build changelog system

**Deliverables**:
- Community discussion features
- Professional CMS for authoring
- Comprehensive analytics dashboard
- Production monitoring

### Phase 6: Music Industry (Weeks 11-12)
**Goal**: Specialize for music industry

**Tasks**:
- [ ] Build music player components (Spotify, Apple, SoundCloud)
- [ ] Create royalty calculator
- [ ] Build streaming chart visualization
- [ ] Create release timeline component
- [ ] Add contract template system
- [ ] Build industry glossary
- [ ] Create resource library
- [ ] Add event calendar
- [ ] Implement waveform visualizer
- [ ] Build BPM/key detector
- [ ] Create custom D3 visualizations
- [ ] Add artist/label profile components
- [ ] Integrate with Recoupable platform

**Deliverables**:
- Rich music embeds
- Interactive industry tools
- Specialized visualizations
- Resource library

---

## Technical Specifications

### Performance Budget

**Page Weight**:
- HTML: < 15 KB
- CSS: < 50 KB
- JavaScript: < 200 KB (initial)
- Images: < 500 KB (per page)
- Total: < 1 MB (initial load)

**Loading Times**:
- LCP: < 1.2s
- FID: < 50ms
- CLS: < 0.05
- TTFB: < 200ms
- Time to Interactive: < 2s

**Metrics**:
- Lighthouse: > 95 (all categories)
- PageSpeed: > 90 (mobile & desktop)
- WebPageTest: Grade A

### Accessibility Requirements

**WCAG 2.1 AAA**:
- Contrast: 7:1 minimum
- Touch targets: 44x44px minimum
- Keyboard: Full navigation
- Screen reader: 100% compatible
- Focus: Clear indicators (3px)

**Testing**:
- Automated: axe-core, Lighthouse
- Manual: NVDA, JAWS, VoiceOver
- User testing: With disabled users

### Browser Support

**Modern Browsers** (last 2 versions):
- Chrome/Edge (Chromium)
- Firefox
- Safari (macOS & iOS)

**Progressive Enhancement**:
- Core functionality works without JavaScript
- Enhanced features require modern browser
- Polyfills for critical features only

### Security Requirements

**Headers**:
- CSP (Content Security Policy)
- HSTS (HTTP Strict Transport Security)
- X-Frame-Options
- X-Content-Type-Options

**Data Protection**:
- HTTPS only
- Encrypted at rest (database)
- Rate limiting (API routes)
- Input sanitization
- SQL injection prevention (RLS)

**Privacy**:
- GDPR compliant
- CCPA compliant
- Cookie consent (if needed)
- Privacy policy
- Data export/deletion

### API Design

**RESTful Principles**:
```typescript
// Search
GET /api/search?q=query&limit=10

// Chat
POST /api/chat
Body: { message, conversationId?, context? }
Response: Stream<{ chunk, done, sources? }>

// Analytics
POST /api/views
Body: { postId }

POST /api/analytics/track
Body: { event, properties }

// Reactions
POST /api/reactions/:postId
Body: { type: '👍' | '💡' | '❤️' | '🔥' | '🤔' }

// Bookmarks
GET /api/bookmarks
POST /api/bookmarks/:postId
DELETE /api/bookmarks/:postId
```

**Rate Limiting**:
- Search: 20/min per IP
- Chat: 10/min per user
- Analytics: 100/min per user
- Public APIs: 60/min per IP

**Error Handling**:
```typescript
{
  error: {
    code: 'RATE_LIMIT_EXCEEDED',
    message: 'Too many requests',
    retryAfter: 60
  }
}
```

---

## Design System

### Typography Scale

**Font Families**:
- Sans: Inter (UI, body)
- Serif: Crimson Pro (articles, optional)
- Mono: JetBrains Mono (code)

**Type Scale** (1.25 ratio):
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)
- 5xl: 3rem (48px)
- 6xl: 3.75rem (60px)
- 7xl: 4.5rem (72px)

**Font Weights**:
- light: 300 (body, UI)
- normal: 400 (body)
- medium: 500 (emphasis)
- semibold: 600 (headings)
- bold: 700 (strong emphasis)

**Line Heights**:
- tight: 1.1 (large headings)
- snug: 1.25 (small headings)
- normal: 1.5 (UI)
- relaxed: 1.75 (body)
- loose: 2 (spaced content)

**Letter Spacing**:
- tighter: -0.05em
- tight: -0.025em
- normal: 0
- wide: 0.025em
- wider: 0.05em
- widest: 0.1em (uppercase)

### Color System

**Brand Colors**:
- Primary: #4778f5 (Recoupable blue)
- Secondary: #a855f7 (purple accent)

**Semantic Colors**:
- Success: #22c55e (green)
- Warning: #f97316 (orange)
- Danger: #ef4444 (red)
- Info: #3b82f6 (blue)

**Category Colors**:
- AI/Tech: #4778f5 (blue)
- Business: #22c55e (green)
- Artists: #a855f7 (purple)
- Data: #f97316 (orange)

**Neutral Palette** (Light):
- 50: #fafafa
- 100: #f5f5f5
- 200: #e5e5e5
- 300: #d4d4d4
- 400: #a3a3a3
- 500: #737373
- 600: #525252
- 700: #404040
- 800: #262626
- 900: #171717
- 950: #0a0a0a

**Dark Mode** (Adjusted):
- Background: #0a0a0a
- Surface: #171717
- Border: #262626
- Muted: #404040
- Text: #e5e5e5

### Spacing Scale

**Tailwind Scale**:
- 0: 0
- 0.5: 0.125rem (2px)
- 1: 0.25rem (4px)
- 2: 0.5rem (8px)
- 3: 0.75rem (12px)
- 4: 1rem (16px)
- 5: 1.25rem (20px)
- 6: 1.5rem (24px)
- 8: 2rem (32px)
- 10: 2.5rem (40px)
- 12: 3rem (48px)
- 16: 4rem (64px)
- 20: 5rem (80px)
- 24: 6rem (96px)
- 32: 8rem (128px)

### Component Library

**Base Components**:
- Button (primary, secondary, ghost, link)
- Input (text, search, textarea)
- Card (post, author, resource)
- Badge (tag, status, category)
- Avatar (user, author)
- Tooltip
- Dialog/Modal
- Dropdown
- Tabs
- Accordion
- Progress Bar
- Skeleton

**Blog Components**:
- PostCard (grid, list, featured)
- PostHeader (hero, metadata)
- PostContent (MDX wrapper)
- PostFooter (tags, share)
- AuthorCard (inline, full)
- SeriesBanner
- RelatedPosts
- TableOfContents
- ReadingProgress
- ShareButtons
- NewsletterForm

**MDX Components**:
- Callout (info, warning, tip, danger)
- CodeBlock (with copy, highlight)
- Tabs
- Accordion
- Image (with zoom)
- Video (embed)
- Audio (player)
- Tweet (static)
- Aside (sidenote)
- KeyTakeaways
- Quote
- Comparison Table

**AI Components**:
- ChatPanel
- ChatMessage
- ChatInput
- SuggestedQuestions
- Citation
- ThinkingIndicator

**Music Components**:
- SpotifyPlayer
- AppleMusicPlayer
- AudioPlayer (custom)
- Waveform
- RoyaltyCalculator
- StreamingChart
- ReleaseTimeline
- ArtistProfile
- ContractTemplate

### Animation Principles

**Duration**:
- Instant: 50ms (hover states)
- Fast: 150ms (micro-interactions)
- Normal: 300ms (transitions)
- Slow: 500ms (page transitions)

**Easing**:
- Default: cubic-bezier(0.4, 0, 0.2, 1)
- In: cubic-bezier(0.4, 0, 1, 1)
- Out: cubic-bezier(0, 0, 0.2, 1)
- In-Out: cubic-bezier(0.4, 0, 0.2, 1)
- Spring: Custom spring physics

**Reduced Motion**:
- Respect prefers-reduced-motion
- Fallback to instant transitions
- Remove parallax/scroll effects
- Disable auto-playing animations

---

## Success Metrics

### Performance
- [ ] Lighthouse score > 95 (all categories)
- [ ] LCP < 1.2s
- [ ] FID < 50ms
- [ ] CLS < 0.05
- [ ] Bundle size < 200 KB initial

### Engagement
- [ ] Average time on page > 3 minutes
- [ ] Bounce rate < 40%
- [ ] Pages per session > 2
- [ ] Return visitor rate > 30%
- [ ] Newsletter conversion > 5%

### AI Features
- [ ] Chat usage > 20% of readers
- [ ] Average conversation length > 3 messages
- [ ] Chat satisfaction > 80% thumbs up
- [ ] Citation click-through > 50%

### Accessibility
- [ ] WCAG AAA compliant
- [ ] 100% keyboard navigable
- [ ] Screen reader compatible
- [ ] Zero accessibility errors (axe)

### Content
- [ ] Publish 2-4 posts per month
- [ ] Average reading time 8-12 minutes
- [ ] Share rate > 5%
- [ ] Comment rate > 2%

---

## Cost Estimation

### Monthly Costs

**Infrastructure**:
- Vercel: $0 (Hobby) or $20 (Pro)
- Supabase: $0 (Free tier) or $25 (Pro)
- Total: $0-45/month

**AI Services**:
- Anthropic Claude: ~$50/month (est 500K tokens)
- OpenAI Embeddings: ~$10/month (one-time + updates)
- Total: ~$60/month

**Analytics**:
- Vercel Analytics: Included
- Plausible: $9/month (10K pageviews)
- Total: $9/month

**Monitoring**:
- Sentry: $0 (Developer tier)
- Better Stack: $0 (Free tier)
- Total: $0/month

**Total Estimated Cost**: $69-114/month

At scale (100K pageviews, heavy AI usage):
- Infrastructure: $45/month
- AI: $200/month
- Analytics: $19/month (Plausible)
- Monitoring: $29/month (Sentry Team)
- **Total: ~$293/month**

---

## Risks & Mitigations

### Technical Risks

**Risk**: AI costs spiral out of control
**Mitigation**:
- Rate limiting per user
- Cache common queries
- Use smaller models for embeddings
- Monitor usage with alerts

**Risk**: Database performance degrades
**Mitigation**:
- Proper indexing from day one
- Connection pooling
- Read replicas if needed
- Regular performance monitoring

**Risk**: Build times become slow
**Mitigation**:
- Incremental static regeneration
- Parallel builds
- Optimize Contentlayer
- Consider Turbopack

### Product Risks

**Risk**: AI chat provides incorrect information
**Mitigation**:
- Clear disclaimers
- Show sources/citations
- Thumbs up/down feedback
- Human review of flagged responses

**Risk**: Features add complexity
**Mitigation**:
- Progressive disclosure
- Simple defaults
- Optional advanced features
- Excellent documentation

**Risk**: Mobile experience suffers
**Mitigation**:
- Mobile-first design
- Performance budget
- Regular mobile testing
- Touch-optimized interactions

---

## Open Questions

1. **Content Strategy**: How often to publish? What's the editorial calendar?

2. **AI Personalization**: How much personalization is too much? Privacy concerns?

3. **Monetization**: Future revenue streams? (Courses, consulting, premium content?)

4. **Community**: Build in-house community or use Discord/Slack?

5. **Internationalization**: Multi-language support? Which languages first?

6. **Video Content**: Self-hosted or YouTube? Transcoding costs?

7. **Newsletter Platform**: Which ESP? (ConvertKit, Substack, Beehiiv?)

8. **Comments**: Giscus (GitHub) or build custom? Moderation strategy?

9. **Content Migration**: Import old content from other platforms?

10. **Contributor Model**: Open contributions? Guest posts? Payment?

---

## Conclusion

This roadmap transforms Recoupable Research from a simple blog into a world-class content platform purpose-built for the music industry. The key differentiators are:

1. **AI-Powered Research Assistant**: Chat with all published content
2. **Music Industry Focus**: Specialized tools, embeds, and visualizations
3. **Elegant Simplicity**: Clean design, powerful features
4. **Performance**: Blazing fast, works offline
5. **Accessibility**: WCAG AAA compliant
6. **Community**: Discussion, reactions, collaboration

The phased approach allows for iterative development and validation. Start with foundation (Weeks 1-2), prove value with discovery features (Weeks 3-4), differentiate with AI (Weeks 5-6), polish for delight (Weeks 7-8), build community (Weeks 9-10), and specialize for music industry (Weeks 11-12).

Total estimated timeline: 12 weeks for full implementation.

Monthly operating costs: $69-114 initially, scaling to ~$300 at 100K pageviews.

This isn't just a blog. It's a research platform, a community hub, a learning resource, and a showcase of what's possible when you combine great content with great technology.

**Next Steps**:
1. Review and validate this roadmap
2. Prioritize Phase 1 features
3. Set up infrastructure (Supabase, monitoring)
4. Begin development sprint
5. Ship Phase 1 in 2 weeks
