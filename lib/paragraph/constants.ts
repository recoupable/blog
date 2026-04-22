export interface ParagraphPostConfig {
  key: string;
  id: string;
  url: string;
  author: string;
  tags: string[];
}

export const PARAGRAPH_POSTS: ParagraphPostConfig[] = [
  {
    key: "RECOUP_2026",
    id: "JPd97vsPc118HjFwEUux",
    url: "/blog/recoup-in-2026",
    author: "Recoupable Team",
    tags: ["roadmap", "2026"],
  },
  {
    key: "SANDBOX_FOR_RECORD_LABELS",
    id: "k12WiMLKQlt4hVtK5zOA",
    url: "/blog/sandbox-for-record-labels",
    author: "Recoupable Team",
    tags: ["engineering", "ai"],
  },
  {
    key: "LABEL_SANDBOXES",
    id: "DgKA4S0MyBQPQqDK6X6y",
    url: "/blog/label-sandboxes",
    author: "sweetman",
    tags: ["sandboxes", "recoup", "labels", "agents", "vercel"],
  },
];

// Derived lookup by key for individual pages
export const PARAGRAPH_POST_IDS = Object.fromEntries(
  PARAGRAPH_POSTS.map((post) => [post.key, post.id])
) as Record<string, string>;
