export interface BibEntry {
  id: string;
  type: string;
  selected?: boolean;
  abbr?: string;
  author?: string;
  title?: string;
  journal?: string;
  booktitle?: string;
  year?: string;
  month?: string;
  day?: string;
  volume?: string;
  number?: string;
  pages?: string;
  abstract?: string;
  doi?: string;
  url?: string;
  issn?: string;
  publisher?: string;
  keywords?: string;
  [key: string]: any;
}

export interface BibliographyData {
  allPublications: BibEntry[];
  selectedPublications: BibEntry[];
  publicationsByYear: Record<string, BibEntry[]>;
}
