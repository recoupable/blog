import { notFound } from "next/navigation";
import {
  getParagraphPost,
  PARAGRAPH_POST_IDS,
  generateParagraphMetadata,
} from "@/lib/paragraph";
import { ParagraphPage } from "@/components/Paragraph/ParagraphPage";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const post = await getParagraphPost(
    PARAGRAPH_POST_IDS.INSTALL_MARKETPLACE_CLAUDE_DESKTOP
  );
  return generateParagraphMetadata(post);
}

export default async function InstallMarketplaceClaudeDesktopPage() {
  const post = await getParagraphPost(
    PARAGRAPH_POST_IDS.INSTALL_MARKETPLACE_CLAUDE_DESKTOP
  );

  if (!post) {
    notFound();
  }

  return <ParagraphPage post={post} author="" />;
}
