import { ParagraphPost, timestampToISODate } from "@/lib/paragraph";
import { NormalizedPost } from "./types";

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
