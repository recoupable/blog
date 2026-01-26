export interface ParagraphPostConfig {
  id: string;
  url: string;
  author: string;
  tags: string[];
}

export const PARAGRAPH_POSTS: ParagraphPostConfig[] = [
  {
    id: "JPd97vsPc118HjFwEUux",
    url: "/blog/recoup-in-2026",
    author: "Recoupable Team",
    tags: ["roadmap", "2026"],
  },
  {
    id: "k12WiMLKQlt4hVtK5zOA",
    url: "/blog/sandbox-for-record-labels",
    author: "Recoupable Team",
    tags: ["engineering", "ai"],
  },
];

// Lookup by ID for individual pages
export const PARAGRAPH_POST_IDS = {
  RECOUP_2026: "JPd97vsPc118HjFwEUux",
  SANDBOX_FOR_RECORD_LABELS: "k12WiMLKQlt4hVtK5zOA",
} as const;
