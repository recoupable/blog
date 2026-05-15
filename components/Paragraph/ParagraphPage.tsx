import { ParagraphPost, timestampToISODate, stripHtml } from "@/lib/paragraph";
import { FormattedDate } from "@/components/formatted-date";
import { calculateReadingTime } from "@/lib/reading-time";

interface ParagraphPageProps {
  post: ParagraphPost;
  author?: string;
}

export function ParagraphPage({
  post,
  author = "Recoupable Team",
}: ParagraphPageProps) {
  const publishedDate = timestampToISODate(post.publishedAt);
  const readingTime = post.staticHtml
    ? calculateReadingTime(stripHtml(post.staticHtml))
    : "5 min read";

  return (
    <article className="container mx-auto max-w-2xl px-6 py-16 md:py-24">
      {/* Header */}
      <header className="mb-12">
        {/* Pixel kicker */}
        <div className="mb-6 flex items-center gap-3 text-muted-foreground">
          <span aria-hidden className="h-px w-8 bg-border" />
          <span className="font-pixel text-xs uppercase tracking-[0.05em]">
            Article
          </span>
        </div>

        {/* Title — Geist Pixel Square per DESIGN.md */}
        <h1 className="font-pixel text-display tracking-tight text-foreground">
          {post.title}
        </h1>

        {/* Subtitle */}
        {post.subtitle && (
          <p className="mt-6 text-lead text-muted-foreground">{post.subtitle}</p>
        )}

        {/* Meta */}
        <div className="mt-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {author && (
            <>
              <span className="font-medium text-foreground">{author}</span>
              <span className="text-muted-foreground/50">·</span>
            </>
          )}
          <FormattedDate dateString={publishedDate} />
          <span className="text-muted-foreground/50">·</span>
          <span>{readingTime}</span>
        </div>
      </header>

      {/* Featured Image */}
      {post.imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.imageUrl}
          alt={post.title}
          className="mb-12 w-full rounded-xl shadow-card"
        />
      )}

      {/* Content */}
      {post.staticHtml && (
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.staticHtml }}
        />
      )}

      {/* Footer */}
      <footer className="shadow-border-top mt-16 pt-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          {author ? <span>Published by {author}</span> : <span />}
          <FormattedDate dateString={publishedDate} />
        </div>
      </footer>
    </article>
  );
}
