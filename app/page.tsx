import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const posts = allPosts
    .filter((post) => post.published !== false)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="container max-w-4xl py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-bold text-4xl lg:text-5xl">
            Recoupable Research
          </h1>
          <p className="text-xl text-muted-foreground">
            Deep dives into music technology, artist tools, and the future of the music industry.
            Insights from the team building the next generation of artist infrastructure.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid gap-10 sm:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post._id}
            className="group relative flex flex-col space-y-2"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="rounded-md border bg-muted transition-colors aspect-video object-cover"
              />
            )}
            <h2 className="text-2xl font-bold">
              <Link href={post.url} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground">{post.description}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <time dateTime={post.date}>
                {format(parseISO(post.date), "MMMM dd, yyyy")}
              </time>
              {post.author && (
                <>
                  <span>•</span>
                  <span>{post.author}</span>
                </>
              )}
            </div>
            <Link
              href={post.url}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Read more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
      {posts.length === 0 && (
        <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
          <p className="text-lg text-muted-foreground">
            No posts published yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
