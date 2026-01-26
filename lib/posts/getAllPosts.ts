import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { getParagraphPost, PARAGRAPH_POST_IDS } from "@/lib/paragraph";
import { NormalizedPost } from "./types";
import { normalizeContentlayerPost } from "./normalizeContentlayerPost";
import { normalizeParagraphPost } from "./normalizeParagraphPost";

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
