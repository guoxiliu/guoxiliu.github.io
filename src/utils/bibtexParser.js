// BibTeX parser utility for parsing papers.bib file
export function parseBibTeX(bibContent) {
  const publications = [];
  
  // Split by @ to get individual entries
  const entries = bibContent.split('@').filter(entry => entry.trim());

  entries.forEach(entry => {
    const entryText = entry.trim();
    if (!entryText) return;
    
    // Parse entry type and key from first line
    const firstLineMatch = entryText.match(/^(\w+)\{([^,]+),?\s*$/m);
    if (!firstLineMatch) return;
    
    const [, entryType, key] = firstLineMatch;
    const pub = {
      id: key,
      type: mapEntryType(entryType),
    };
    
    parseFields(entryText, pub);
    postProcessPublication(pub);
    publications.push(pub);
  });
  
  return publications;
}

function parseFields(entryText, pub) {
  // Remove the entry header line and closing brace
  const contentMatch = entryText.match(/^\w+\{[^,]+,?\s*\n([\s\S]*)\n?\s*\}?\s*$/);
  if (!contentMatch) return;
  
  const content = contentMatch[1];
  
  // Updated regex to handle both braced and unbraced values
  const fieldRegex = /(\w+)\s*=\s*([{]|[^,\n}]+)/g;
  const fieldPositions = [];
  let match;
  
  while ((match = fieldRegex.exec(content)) !== null) {
    const fieldName = match[1];
    const valueStart = match[2];
    
    fieldPositions.push({
      name: fieldName,
      start: match.index,
      valueStartPos: match.index + match[0].length - valueStart.length,
      isBraced: valueStart.startsWith('{')
    });
  }
  
  // Process each field
  for (let i = 0; i < fieldPositions.length; i++) {
    const field = fieldPositions[i];
    const nextField = fieldPositions[i + 1];
    
    let fieldValue;
    
    if (field.isBraced) {
      // Handle braced values (existing logic)
      const fieldContent = content.substring(field.valueStartPos + 1, nextField ? nextField.start : content.length);
      fieldValue = extractFieldValue(fieldContent);
    } else {
      // Handle unbraced values (like month macros)
      const endPos = nextField ? nextField.start : content.length;
      const rawValue = content.substring(field.valueStartPos, endPos);
      
      // Find the end of the unbraced value (comma, newline, or closing brace)
      const match = rawValue.match(/^([^,\n}]+)/);
      fieldValue = match ? match[1].trim() : null;
    }
    
    if (fieldValue !== null && fieldValue !== '') {
      pub[field.name] = cleanValue(fieldValue, field.name);
    }
  }
}

function extractFieldValue(content) {
  let braceCount = 0;
  let result = '';
  let i = 0;
  
  while (i < content.length) {
    const char = content[i];
    
    if (char === '{') {
      braceCount++;
      result += char;
    } else if (char === '}') {
      if (braceCount > 0) {
        braceCount--;
        result += char;
      } else {
        // This is the closing brace for our field
        break;
      }
    } else {
      result += char;
    }
    i++;
  }
  
  // Remove trailing comma if present
  result = result.replace(/,\s*$/, '');
  
  return result.trim() || null;
}

function mapEntryType(entryType) {
  const typeMap = {
    'article': 'Journal',
    'inproceedings': 'Conference',
    'incollection': 'Book Chapter',
    'book': 'Book',
    'phdthesis': 'Thesis',
    'mastersthesis': 'Thesis',
    'techreport': 'Technical Report',
    'misc': 'Miscellaneous'
  };
  
  return typeMap[entryType.toLowerCase()] || 'Conference';
}

function cleanValue(value, fieldName = '') {
  let cleaned = value.trim();
  
  // For abstracts, preserve paragraph structure but normalize spacing
  if (fieldName === 'abstract') {
    cleaned = cleaned
      // Remove leading whitespace from each line while preserving paragraph breaks
      .split('\n')
      .map(line => line.trim())
      .join('\n')
      // Normalize paragraph breaks (double newlines)
      .replace(/\n\s*\n\s*/g, '\n\n')
      // Convert single line breaks to spaces (within paragraphs)
      .replace(/\n(?!\n)/g, ' ')
      // Clean up multiple spaces
      .replace(/\s+/g, ' ')
      // Handle LaTeX formatting
      .replace(/\\textit\{([^}]+)\}/g, '$1')
      .replace(/\\text\{([^}]+)\}/g, '$1')
      .replace(/\\\$/g, '$')
      .replace(/\\times/g, '×');
  } else {
    // For other fields, collapse all whitespace
    cleaned = cleaned
      .replace(/\s+/g, ' ')
      .replace(/\\textit\{([^}]+)\}/g, '$1')
      .replace(/\\text\{([^}]+)\}/g, '$1')
      .replace(/\\\$/g, '$')
      .replace(/\\times/g, '×');
  }
  
  return cleaned.replace(/\s*,\s*$/, ''); // Remove trailing comma
}

function postProcessPublication(pub) {
  // Handle month macros
  const monthMacros = {
    'jan': 'January', 'feb': 'February', 'mar': 'March', 'apr': 'April',
    'may': 'May', 'jun': 'June', 'jul': 'July', 'aug': 'August',
    'sep': 'September', 'oct': 'October', 'nov': 'November', 'dec': 'December'
  };
  
  // Convert month names to full names
  if (pub.month) {
    const monthLower = pub.month.toLowerCase();
    if (monthMacros[monthLower]) {
      pub.month = monthMacros[monthLower];
    }
  }
  
  if (pub.author) {
    pub.authors = parseAuthors(pub.author);
  }
  
  // Set venue based on journal or booktitle
  if (pub.journal) {
    pub.venue = pub.journal;
    if (!pub.type || pub.type === 'Conference') {
      pub.type = 'Journal';
    }
  } else if (pub.booktitle) {
    pub.venue = pub.booktitle;
    if (pub.booktitle.toLowerCase().includes('workshop')) {
      pub.type = 'Workshop';
    }
  }
  
  // Set URL priority: website > html > doi
  if (!pub.url) {
    if (pub.website) {
      pub.url = pub.website;
    } else if (pub.html) {
      pub.url = pub.html;
    } else if (pub.doi) {
      pub.url = `https://doi.org/${pub.doi}`;
    }
  }
  
  // Set date to year for consistency
  if (pub.year) {
    pub.date = pub.year.toString();
  }
}

function parseAuthors(authorString) {
  // Split by 'and' to get individual authors
  const authors = authorString.split(' and ').map(author => {
    author = author.trim();
    
    if (author.includes(',')) {
      const [last, first] = author.split(',').map(part => part.trim());
      return `${first} ${last}`;
    }
    
    return author;
  });
  
  return authors;
}
