import { ParagraphPost } from "./types";

const PARAGRAPH_API_BASE = "https://public.api.paragraph.com/api/v1";

export async function getParagraphPost(postId: string): Promise<ParagraphPost | null> {
  try {
    const response = await fetch(
      `${PARAGRAPH_API_BASE}/posts/${postId}?includeContent=true`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      console.error(`Failed to fetch Paragraph post: ${response.status}`);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching Paragraph post:", error);
    return null;
  }
}
