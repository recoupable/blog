import { notFound } from "next/navigation";
import { getParagraphPost, PARAGRAPH_POST_IDS } from "@/lib/paragraph";
import { ParagraphPage } from "@/components/Paragraph/ParagraphPage";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const post = await getParagraphPost(PARAGRAPH_POST_IDS.RECOUP_2026);

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

export default async function RecoupIn2026Page() {
  const post = await getParagraphPost(PARAGRAPH_POST_IDS.RECOUP_2026);

  if (!post) {
    notFound();
  }

  return <ParagraphPage post={post} />;
}
