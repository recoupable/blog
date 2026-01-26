import Link from "next/link";
import { FormattedDate } from "@/components/formatted-date";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-normal italic leading-[1.1] tracking-tight">
            Recoupable Research
          </h1>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed tracking-wide text-foreground/70 md:text-lg">
            Insights into the future of music technology
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="mx-auto max-w-7xl px-8 pb-24 pt-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.url}
              className="group relative flex flex-col"
            >
              {/* Card Container */}
              <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-card/50 hover:shadow-xl">
                {/* Meta */}
                <div className="mb-4 space-y-2">
                  <div className="text-xs font-light uppercase tracking-widest text-muted-foreground">
                    <FormattedDate
                      dateString={post.date}
                      formatString="MMMM d, yyyy"
                    />
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border/40 px-3 py-1 text-xs font-light tracking-wide text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col space-y-3">
                  <h2 className="text-xl font-light leading-tight tracking-tight transition-colors group-hover:text-foreground">
                    {post.title}
                  </h2>
                  <p className="flex-1 text-sm font-light leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-border/30 pt-3">
                    {post.author && (
                      <span className="text-xs font-light text-muted-foreground">
                        {post.author}
                      </span>
                    )}
                    <span className="inline-flex items-center text-xs font-light tracking-wide text-foreground transition-colors group-hover:text-[#4778f5]">
                      Read
                      <svg
                        className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="font-light text-muted-foreground">
              No posts published yet
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
