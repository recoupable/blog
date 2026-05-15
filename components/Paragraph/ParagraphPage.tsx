import { ParagraphPost, timestampToISODate, stripHtml } from "@/lib/paragraph";
import { FormattedDate } from "@/components/formatted-date";
import { calculateReadingTime } from "@/lib/reading-time";

interface ParagraphPageProps {
  post: ParagraphPost;
  author?: string;
}

export function ParagraphPage({ post, author = "Recoupable Team" }: ParagraphPageProps) {
  const publishedDate = timestampToISODate(post.publishedAt);
  const readingTime = post.staticHtml
    ? calculateReadingTime(stripHtml(post.staticHtml))
    : "5 min read";

  return (
    <article className="container mx-auto max-w-2xl px-6 py-16 md:py-24">
      {/* Header */}
      <header className="mb-12">
        {/* Title */}
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        {/* Description */}
        {post.subtitle && (
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {post.subtitle}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
        <img
          src={post.imageUrl}
          alt={post.title}
          className="mb-12 w-full rounded-xl"
        />
      )}

      {/* Content */}
      {post.staticHtml && (
        <div
          className="prose prose-lg dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.staticHtml }}
        />
      )}

      {/* Footer */}
      <footer className="mt-16 border-t border-border pt-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          {author ? <span>Published by {author}</span> : <span />}
          <FormattedDate dateString={publishedDate} />
        </div>
      </footer>
    </article>
  );
}
