import { BibEntry } from './types';

function extractBracedValue(str: string, startPos: number): { value: string; endPos: number } | null {
  let depth = 0;
  let start = -1;
  
  for (let i = startPos; i < str.length; i++) {
    if (str[i] === '{') {
      if (depth === 0) start = i + 1;
      depth++;
    } else if (str[i] === '}') {
      depth--;
      if (depth === 0) {
        return { value: str.substring(start, i), endPos: i };
      }
    }
  }
  return null;
}

export function parseBibTeX(content: string): BibEntry[] {
  const entries: BibEntry[] = [];
  
  let cleanContent = content.replace(/^---\s*\n---\s*\n/m, '');
  
  const entryStartRegex = /@(\w+)\s*\{\s*([^,\s]+)\s*,/g;
  let match;

  while ((match = entryStartRegex.exec(cleanContent)) !== null) {
    const type = match[1];
    const id = match[2];
    const fieldsStartPos = match.index + match[0].length;
    
    let depth = 1;
    let entryEndPos = -1;
    
    for (let i = fieldsStartPos; i < cleanContent.length; i++) {
      if (cleanContent[i] === '{') {
        depth++;
      } else if (cleanContent[i] === '}') {
        depth--;
        if (depth === 0) {
          entryEndPos = i;
          break;
        }
      }
    }
    
    if (entryEndPos === -1) continue;
    
    const fieldsStr = cleanContent.substring(fieldsStartPos, entryEndPos);
    
    const entry: BibEntry = {
      id: id.trim(),
      type: type.toLowerCase(),
    };

    let pos = 0;
    
    while (pos < fieldsStr.length) {
      const remaining = fieldsStr.substring(pos);
      const fieldMatch = remaining.match(/^\s*(\w+)\s*=\s*/);
      
      if (!fieldMatch) {
        pos++;
        continue;
      }
      
      const fieldName = fieldMatch[1].toLowerCase();
      pos += fieldMatch[0].length;
      
      let fieldValue = '';
      const nextChar = fieldsStr[pos];
      
      if (nextChar === '{') {
        let depth = 0;
        let start = pos;
        
        while (pos < fieldsStr.length) {
          if (fieldsStr[pos] === '{') depth++;
          if (fieldsStr[pos] === '}') {
            depth--;
            if (depth === 0) {
              fieldValue = fieldsStr.substring(start + 1, pos);
              pos++;
              break;
            }
          }
          pos++;
        }
      } else if (nextChar === '"') {
        pos++;
        let start = pos;
        
        while (pos < fieldsStr.length) {
          if (fieldsStr[pos] === '"' && fieldsStr[pos - 1] !== '\\') {
            fieldValue = fieldsStr.substring(start, pos);
            pos++;
            break;
          }
          pos++;
        }
      } else {
        let start = pos;
        while (pos < fieldsStr.length && fieldsStr[pos] !== ',' && fieldsStr[pos] !== '\n') {
          pos++;
        }
        fieldValue = fieldsStr.substring(start, pos).trim();
      }
      
      fieldValue = fieldValue.trim();
      
      if (fieldName === 'selected') {
        entry.selected = fieldValue === 'true';
      } else if (fieldValue) {
        entry[fieldName] = fieldValue;
      }
      
      while (pos < fieldsStr.length && (fieldsStr[pos] === ',' || fieldsStr[pos] === '\n' || fieldsStr[pos] === ' ')) {
        pos++;
      }
    }

    if (entry.author) {
      entry.author = entry.author.replace(/\s+and\s+/gi, ', ');
    }

    entries.push(entry);
  }

  return entries;
}
