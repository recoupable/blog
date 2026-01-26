import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { getParagraphPost, PARAGRAPH_POST_IDS } from "@/lib/paragraph";
import { NormalizedPost } from "./types";
import { normalizeContentlayerPost } from "./normalizeContentlayerPost";
import { normalizeParagraphPost } from "./normalizeParagraphPost";

export async function getAllPosts(): Promise<NormalizedPost[]> {
  const [recoup2026Post, sandboxPost] = await Promise.all([
    getParagraphPost(PARAGRAPH_POST_IDS.RECOUP_2026),
    getParagraphPost(PARAGRAPH_POST_IDS.SANDBOX_FOR_RECORD_LABELS),
  ]);

  const contentlayerPosts = allPosts
    .filter((post) => post.published !== false)
    .map(normalizeContentlayerPost);

  const paragraphPosts: NormalizedPost[] = [
    recoup2026Post
      ? normalizeParagraphPost(recoup2026Post, "/blog/recoup-in-2026", "Recoupable Team", ["roadmap", "2026"])
      : null,
    sandboxPost
      ? normalizeParagraphPost(sandboxPost, "/blog/sandbox-for-record-labels", "Recoupable Team", ["engineering", "ai"])
      : null,
  ].filter((post): post is NormalizedPost => post !== null);

  return [...contentlayerPosts, ...paragraphPosts].sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
}
