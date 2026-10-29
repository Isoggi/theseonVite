export interface IGitRepository {
  id: number;
  title: string;
  url: string;
  description?: string;
  stack?: string[];
}
