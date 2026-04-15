import fs from 'fs';
import path from 'path';
import { parseBibTeX } from './parser';
import { BibEntry } from './types';

export function loadBibFile(filePath: string): BibEntry[] {
  if (!fs.existsSync(filePath)) {
    console.warn(`[Bibliography Plugin] File not found: ${filePath}`);
    return [];
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const entries = parseBibTeX(content);
    
    entries.sort((a, b) => {
      const yearA = parseInt(a.year || '0', 10);
      const yearB = parseInt(b.year || '0', 10);
      return yearB - yearA;
    });

    return entries;
  } catch (error) {
    console.error(`[Bibliography Plugin] Error loading file ${filePath}:`, error);
    return [];
  }
}
