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
    <article className="container max-w-2xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <header className="mb-12">
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Description */}
        {post.description && (
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            {post.description}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-xl mb-12"
        />
      )}

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert">
        <Mdx code={post.body.code} />
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Published by {post.author || "Recoupable Team"}</span>
          <FormattedDate dateString={post.date} />
        </div>
      </footer>
    </article>
  );
}
