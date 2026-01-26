export interface ParagraphPost {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  imageUrl?: string;
  publishedAt: string;
  updatedAt: string;
  staticHtml?: string;
  markdown?: string;
}
