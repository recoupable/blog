export interface NormalizedPost {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
  author?: string;
  tags?: string[];
}
