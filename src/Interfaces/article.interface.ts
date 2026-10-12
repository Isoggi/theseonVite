export interface IArticle {
  id: string;
  title: string;
  description: string;
  content?: string;
  date?: string;
  author?: string;
  image?: string;
  tags?: string[];
}
