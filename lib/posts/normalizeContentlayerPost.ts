import { Post } from "contentlayer/generated";
import { NormalizedPost } from "./types";

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
