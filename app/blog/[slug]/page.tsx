import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Mdx } from "@/components/mdx-components";
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

  return (
    <article className="container max-w-3xl py-12">
      <div className="space-y-4">
        <h1 className="inline-block font-bold text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <time dateTime={post.date}>
            {format(parseISO(post.date), "MMMM dd, yyyy")}
          </time>
          {post.author && (
            <>
              <span>•</span>
              <span>{post.author}</span>
            </>
          )}
          {post.tags && post.tags.length > 0 && (
            <>
              <span>•</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-primary">
                    #{tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="my-8 rounded-lg border bg-muted"
        />
      )}
      <hr className="my-8" />
      <div className="prose prose-lg dark:prose-invert">
        <Mdx code={post.body.code} />
      </div>
    </article>
  );
}
