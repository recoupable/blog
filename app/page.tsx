import Link from "next/link";
import { FormattedDate } from "@/components/formatted-date";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Pixel kicker — DESIGN.md §4 inline tech label */}
          <div className="mb-6 flex items-center justify-center gap-3 text-muted-foreground">
            <span aria-hidden className="h-px w-8 bg-border" />
            <span className="font-pixel text-xs uppercase tracking-[0.05em]">
              Research
            </span>
            <span aria-hidden className="h-px w-8 bg-border" />
          </div>

          <h1 className="font-pixel text-display tracking-tight text-foreground">
            Recoup Research
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lead text-muted-foreground">
            Insights into the future of music technology — artist tools, AI
            agents, and the business of building a record label of one.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-muted-foreground">No posts published yet</p>
          </div>
        )}
      </section>
    </div>
  );
}

interface PostCardProps {
  post: Awaited<ReturnType<typeof getAllPosts>>[number];
}

function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={post.url}
      className="group relative block rounded-xl bg-card p-6 shadow-card transition-shadow duration-200 hover:shadow-elevated"
    >
      {/* Meta — date in pixel font, tags as pills */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="font-pixel text-xs uppercase tracking-[0.05em] text-muted-foreground">
          <FormattedDate dateString={post.date} formatString="MMM d, yyyy" />
        </span>
        {post.tags && post.tags.length > 0 && (
          <>
            <span aria-hidden className="text-muted-foreground/40">
              ·
            </span>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Title — Plus Jakarta Sans 600 per DESIGN.md card title */}
      <h2 className="font-ui text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-foreground">
        {post.title}
      </h2>

      <p className="mt-3 line-clamp-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
        {post.description}
      </p>

      {/* Footer */}
      <div className="shadow-border-top mt-6 flex items-center justify-between pt-4">
        {post.author ? (
          <span className="text-xs text-muted-foreground">{post.author}</span>
        ) : (
          <span />
        )}
        <span className="inline-flex items-center font-ui text-xs font-medium text-foreground">
          Read
          <svg
            className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
