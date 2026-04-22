import { notFound } from "next/navigation";
import {
  getParagraphPost,
  PARAGRAPH_POST_IDS,
  generateParagraphMetadata,
} from "@/lib/paragraph";
import { ParagraphPage } from "@/components/Paragraph/ParagraphPage";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const post = await getParagraphPost(PARAGRAPH_POST_IDS.OPEN_LABELS);
  return generateParagraphMetadata(post);
}

export default async function OpenLabelsPage() {
  const post = await getParagraphPost(PARAGRAPH_POST_IDS.OPEN_LABELS);

  if (!post) {
    notFound();
  }

  return <ParagraphPage post={post} />;
}
