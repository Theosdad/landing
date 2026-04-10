import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import { LoadedNews, NewsFrontMatter } from './types';

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: false,
});

function markdownToHtml(markdown: string): string {
  return marked.parse(markdown) as string;
}

export function loadNewsDir(
  dir: string,
  validator: (data: any) => NewsFrontMatter
): Record<string, LoadedNews> {
  const result: Record<string, LoadedNews> = {};

  if (!fs.existsSync(dir)) return result;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile()) continue;
    if (!entry.name.endsWith('.md') && !entry.name.endsWith('.mdx')) continue;

    const fileName = entry.name;
    const filePath = path.join(dir, fileName);
    const newsItem = processSingleFile(filePath, validator);

    if (newsItem) {
      const id = fileName.replace(/\.(md|mdx)$/, '');
      result[id] = newsItem;
    }
  }

  return result;
}

function processSingleFile(
  filePath: string,
  validator: (data: any) => NewsFrontMatter
): LoadedNews | null {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = matter(raw);
  
  try {
    const data = validator(parsed.data);
    const fileName = path.basename(filePath);
    const id = fileName.replace(/\.(md|mdx)$/, '');

    return {
      id,
      ...data,
      filePath,
      content: markdownToHtml(parsed.content.trim()),
    };
  } catch (error) {
    console.warn(`[News Plugin] Failed to validate frontmatter in ${filePath}:`, error);
    return null;
  }
}
