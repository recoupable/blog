import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import {
  ParagraphPost,
  getParagraphPost,
  PARAGRAPH_POST_IDS,
  timestampToISODate,
} from "@/lib/paragraph";

export interface NormalizedPost {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
  author?: string;
  tags?: string[];
}

export function normalizeContentlayerPost(post: Post): NormalizedPost {
  return {
    id: post._id,
    title: post.title,
    description: post.description,
    date: post.date,
    url: post.url,
    author: post.author,
    tags: post.tags,
  };
}

export function normalizeParagraphPost(
  post: ParagraphPost,
  url: string,
  author: string = "Recoupable Team",
  tags: string[] = []
): NormalizedPost {
  return {
    id: post.id,
    title: post.title,
    description: post.subtitle || "",
    date: timestampToISODate(post.publishedAt),
    url,
    author,
    tags,
  };
}

export async function getAllPosts(): Promise<NormalizedPost[]> {
  const paragraphPost = await getParagraphPost(PARAGRAPH_POST_IDS.RECOUP_2026);

  const contentlayerPosts = allPosts
    .filter((post) => post.published !== false)
    .map(normalizeContentlayerPost);

  const paragraphPosts = paragraphPost
    ? [normalizeParagraphPost(paragraphPost, "/blog/recoup-in-2026", "Recoupable Team", ["roadmap", "2026"])]
    : [];

  return [...contentlayerPosts, ...paragraphPosts].sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
}
