import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import { FormattedDate } from "@/components/formatted-date";
import { calculateReadingTime } from "@/lib/reading-time";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getPostFromParams(params: PageProps["params"]) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post || post.published === false) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.body.raw);

  return (
    <article className="container mx-auto max-w-2xl px-6 py-16 md:py-24">
      {/* Header */}
      <header className="mb-12">
        {/* Tags — pixel font kicker, then pills */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="font-pixel text-xs uppercase tracking-[0.05em] text-muted-foreground">
              {post.tags[0]}
            </span>
            {post.tags.slice(1).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title — Geist Pixel Square per DESIGN.md */}
        <h1 className="font-pixel text-display tracking-tight text-foreground">
          {post.title}
        </h1>

        {/* Description */}
        {post.description && (
          <p className="mt-6 text-lead text-muted-foreground">
            {post.description}
          </p>
        )}

        {/* Meta */}
        <div className="mt-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {post.author && (
            <>
              <span className="font-medium text-foreground">{post.author}</span>
              <span className="text-muted-foreground/50">·</span>
            </>
          )}
          <FormattedDate dateString={post.date} />
          <span className="text-muted-foreground/50">·</span>
          <span>{readingTime}</span>
        </div>
      </header>

      {/* Featured Image */}
      {post.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.image}
          alt={post.title}
          className="mb-12 w-full rounded-xl shadow-card"
        />
      )}

      {/* Content */}
      <div className="prose">
        <Mdx code={post.body.code} />
      </div>

      {/* Footer */}
      <footer className="shadow-border-top mt-16 pt-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Published by {post.author || "Recoupable Team"}</span>
          <FormattedDate dateString={post.date} />
        </div>
      </footer>
    </article>
  );
}
