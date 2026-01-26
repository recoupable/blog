import type { Metadata } from "next";
import { ParagraphPost } from "./types";

export function generateParagraphMetadata(post: ParagraphPost | null): Metadata {
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
