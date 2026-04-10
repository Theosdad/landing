export interface NewsFrontMatter {
  layout?: string;
  title?: string;
  date: string;
  inline?: boolean;
  related_posts?: boolean;
  images?: {
    slider?: boolean;
  };
}

export interface FolderData {
  id: string;
  filePath: string;
  content: string;
}

export type LoadedNews = NewsFrontMatter & FolderData;

export interface NewsData {
  allNews: LoadedNews[];
  newsByYear: Record<string, LoadedNews[]>;
}
