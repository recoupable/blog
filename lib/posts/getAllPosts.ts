import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { getParagraphPost, PARAGRAPH_POSTS } from "@/lib/paragraph";
import { NormalizedPost } from "./types";
import { normalizeContentlayerPost } from "./normalizeContentlayerPost";
import { normalizeParagraphPost } from "./normalizeParagraphPost";

export async function getAllPosts(): Promise<NormalizedPost[]> {
  const paragraphPostsData = await Promise.all(
    PARAGRAPH_POSTS.map((config) => getParagraphPost(config.id))
  );

  const contentlayerPosts = allPosts
    .filter((post) => post.published !== false)
    .map(normalizeContentlayerPost);

  const paragraphPosts = paragraphPostsData
    .map((post, i) =>
      post
        ? normalizeParagraphPost(
            post,
            PARAGRAPH_POSTS[i].url,
            PARAGRAPH_POSTS[i].author,
            PARAGRAPH_POSTS[i].tags
          )
        : null
    )
    .filter((post): post is NormalizedPost => post !== null);

  return [...contentlayerPosts, ...paragraphPosts].sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
}
