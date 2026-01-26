import { notFound } from "next/navigation";
import { getParagraphPost } from "@/lib/paragraph";
import { FormattedDate } from "@/components/formatted-date";
import { calculateReadingTime } from "@/lib/reading-time";
import type { Metadata } from "next";

const PARAGRAPH_POST_ID = "JPd97vsPc118HjFwEUux";

export async function generateMetadata(): Promise<Metadata> {
  const post = await getParagraphPost(PARAGRAPH_POST_ID);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      type: "article",
      images: post.imageUrl ? [post.imageUrl] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function timestampToISODate(timestamp: string): string {
  return new Date(parseInt(timestamp, 10)).toISOString();
}

export default async function RecoupIn2026Page() {
  const post = await getParagraphPost(PARAGRAPH_POST_ID);

  if (!post) {
    notFound();
  }

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
          <span className="font-medium text-foreground">Recoupable Team</span>
          <span className="text-muted-foreground/50">·</span>
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
          <span>Published by Recoupable Team</span>
          <FormattedDate dateString={publishedDate} />
        </div>
      </footer>
    </article>
  );
}
