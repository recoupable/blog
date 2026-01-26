import { notFound } from "next/navigation";
import {
  getParagraphPost,
  PARAGRAPH_POST_IDS,
  generateParagraphMetadata,
} from "@/lib/paragraph";
import { ParagraphPage } from "@/components/Paragraph/ParagraphPage";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const post = await getParagraphPost(PARAGRAPH_POST_IDS.SANDBOX_FOR_RECORD_LABELS);
  return generateParagraphMetadata(post);
}

export default async function SandboxForRecordLabelsPage() {
  const post = await getParagraphPost(PARAGRAPH_POST_IDS.SANDBOX_FOR_RECORD_LABELS);

  if (!post) {
    notFound();
  }

  return <ParagraphPage post={post} />;
}
