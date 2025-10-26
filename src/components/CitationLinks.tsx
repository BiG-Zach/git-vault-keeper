import React from 'react';
import { extractCitationNumbers, getCitationUrl } from '../utils/citations';

interface CitationLinksProps {
  citations: string; // e.g., "[1][5][8][16]"
  className?: string;
}

export default function CitationLinks({ citations, className = '' }: CitationLinksProps) {
  const citationNumbers = extractCitationNumbers(citations);
  
  return (
    <sup className={className}>
      {citationNumbers.map((num, index) => {
        const url = getCitationUrl(num);
        
        if (url) {
          return (
            <a
              key={num}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="citation-link text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              title={`View source ${num}`}
            >
              [{num}]
            </a>
          );
        }
        
        return <span key={num}>[{num}]</span>;
      })}
    </sup>
  );
}