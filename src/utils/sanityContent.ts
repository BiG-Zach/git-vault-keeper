// ... existing imports/types ...
// Bradford Informed Guidance | sanityContent | v1.0
// Utilities that convert Sanity PortableText bodies into the shapes the
// downstream renderers and schema emitters expect.
//
// Why a markdown intermediate: the published posts authored by the Publisher
// agent contain inline GFM (tables, bullets, bold, links, raw anchors) inside
// otherwise-plain PortableText blocks. Rendering each block through its own
// PortableText component loses cross-block structures like tables, so we
// flatten to markdown once and let react-markdown + remark-gfm do the heavy
// lifting. Also repairs a known Hermes-patch corruption (`<<aa` → `<a`) that
// hit content alongside JSX.

interface PortableTextSpan {
  _type: 'span';
  _key?: string;
  text?: string;
  marks?: string[];
}

interface PortableTextMarkDef {
  _key: string;
  _type: string;
  href?: string;
}

interface PortableTextBlock {
  _type: string;
  _key?: string;
  style?: string;
  listItem?: 'bullet' | 'number';
  level?: number;
  children?: PortableTextSpan[];
  markDefs?: PortableTextMarkDef[];
}

const INLINE_MARKS = new Set(['strong', 'em', 'underline', 'code', 'strike-through']);

function repairCorruption(text: string): string {
  // Hermes patch in a prior deploy doubled opening angle brackets and
  // renamed <a> tags to <aa>. Content was saved to Sanity in that state.
  // Undo here rather than mutating the source, which is the system of record.
  return text.replace(/<<aa\b/g, '<a').replace(/<<\//g, '</');
}

function spansToInlineMarkdown(block: PortableTextBlock): string {
  const children = block.children ?? [];
  const defs = block.markDefs ?? [];
  const out: string[] = [];

  for (const span of children) {
    let text = span.text ?? '';
    if (!text) continue;
    const marks = span.marks ?? [];

    for (const mark of marks) {
      if (INLINE_MARKS.has(mark)) continue;
      const def = defs.find((d) => d._key === mark);
      if (def?._type === 'link' && def.href) {
        text = `[${text}](${def.href})`;
      }
    }

    if (marks.includes('code')) text = `\`${text}\``;
    if (marks.includes('em')) text = `*${text}*`;
    if (marks.includes('strong')) text = `**${text}**`;

    out.push(text);
  }

  return repairCorruption(out.join(''));
}

// Detects a block whose flattened text is a GFM table line (starts and ends
// with a pipe). When consecutive normal blocks are table lines we suppress
// the usual paragraph separator between them so remark-gfm can assemble the
// rows into an actual table — without this fix, every row becomes its own
// orphan paragraph.
function isTableLine(block: PortableTextBlock | undefined): boolean {
  if (!block || block._type !== 'block' || block.listItem) return false;
  if (block.style && block.style !== 'normal') return false;
  const text = (block.children ?? []).map((c) => c.text ?? '').join('').trim();
  return text.startsWith('|') && text.endsWith('|');
}

export function blocksToMarkdown(blocks: unknown[] | undefined): string {
  if (!Array.isArray(blocks)) return '';
  const lines: string[] = [];
  const raws = blocks as PortableTextBlock[];

  for (let i = 0; i < raws.length; i++) {
    const block = raws[i];
    if (!block || block._type !== 'block') {
      if (block?._type === 'image') {
        const asset = (block as unknown as { asset?: { url?: string }; alt?: string });
        if (asset.asset?.url) lines.push(`![${asset.alt ?? ''}](${asset.asset.url})`, '');
      }
      continue;
    }

    const text = spansToInlineMarkdown(block);
    if (!text.trim() && !block.listItem) continue;

    if (block.listItem === 'bullet') {
      lines.push(`- ${text}`);
      continue;
    }
    if (block.listItem === 'number') {
      const stripped = text.replace(/^\s*\d+\.\s*/, '');
      lines.push(`1. ${stripped}`);
      continue;
    }

    switch (block.style) {
      case 'h1':
        lines.push(`# ${text}`, '');
        break;
      case 'h2':
        lines.push(`## ${text}`, '');
        break;
      case 'h3':
        lines.push(`### ${text}`, '');
        break;
      case 'h4':
        lines.push(`#### ${text}`, '');
        break;
      case 'blockquote':
        lines.push(`> ${text}`, '');
        break;
      default: {
        lines.push(text);
        const nextIsTable = isTableLine(raws[i + 1]);
        const selfIsTable = isTableLine(block);
        if (!(selfIsTable && nextIsTable)) lines.push('');
        break;
      }
    }
  }

  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

export function extractPlainText(blocks: unknown[] | undefined): string {
  if (!Array.isArray(blocks)) return '';
  const parts: string[] = [];
  for (const raw of blocks) {
    const block = raw as PortableTextBlock;
    if (block?._type !== 'block') continue;
    const text = (block.children ?? []).map((c) => c.text ?? '').join('');
    if (text.trim()) parts.push(text.trim());
  }
  return repairCorruption(parts.join(' '));
}

export function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/**
 * Extracts SEO-relevant metadata entities from the content blocks.
 */
export function extractContentMetadata(blocks: unknown[] | undefined): { keywords: string[], about: string[] } {
  const text = extractPlainText(blocks);
  // Basic heuristic: extract keywords (frequent high-value terms) and "about" entities (proper nouns/capitalized phrases)
  const keywords = text.toLowerCase().split(/\s+/).filter(word => word.length > 5).slice(0, 10);
  const about = text.match(/[A-Z][a-z]+(?:\s[A-Z][a-z]+)*/g) || [];
  return { keywords: Array.from(new Set(keywords)), about: Array.from(new Set(about.slice(0, 5))) };
}

// Parses GFM tables out of a markdown string. Each table becomes a
// { headers, rows } record. Used to emit Dataset JSON-LD for every table in a
// post so AI citation engines can ingest the structured data directly.
export function extractDataTables(markdown: string): Array<{ headers: string[]; rows: string[][] }> {
  if (!markdown) return [];
  const tables: Array<{ headers: string[]; rows: string[][] }> = [];
  const lines = markdown.split('\n');

  const splitRow = (row: string): string[] =>
    row
      .replace(/^\s*\|/, '')
      .replace(/\|\s*$/, '')
      .split('|')
      .map((cell) => cell.trim());

  const isSeparator = (line: string): boolean =>
    /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);

  for (let i = 0; i < lines.length - 1; i++) {
    const headerLine = lines[i];
    const sepLine = lines[i + 1];
    if (!headerLine.includes('|') || !isSeparator(sepLine)) continue;

    const headers = splitRow(headerLine);
    if (headers.length < 2) continue;

    const rows: string[][] = [];
    let j = i + 2;
    while (j < lines.length && lines[j].includes('|') && lines[j].trim()) {
      const row = splitRow(lines[j]);
      if (row.length === headers.length) rows.push(row);
      j++;
    }

    if (rows.length > 0) tables.push({ headers, rows });
    i = j - 1;
  }

  return tables;
}

// Pulls FAQ Q/A pairs from the body. Supports two authoring patterns seen in
// the published posts:
//   (1) `**Q: question**\nA: answer` inside a single normal block
//   (2) an h3 block containing the question followed by one or more normal
//       blocks containing the answer (terminated by the next h3/h2/h1 or EOF)
export function extractFaqPairs(
  blocks: unknown[] | undefined,
): Array<{ question: string; answer: string }> {
  if (!Array.isArray(blocks)) return [];
  const pairs: Array<{ question: string; answer: string }> = [];

  for (const raw of blocks) {
    const block = raw as PortableTextBlock;
    if (block?._type !== 'block') continue;
    const text = (block.children ?? []).map((c) => c.text ?? '').join('').trim();
    const match = text.match(/^\*\*Q:\s*(.+?)\*\*\s*A:\s*([\s\S]+)$/i);
    if (match) {
      pairs.push({
        question: match[1].trim().replace(/\*\*$/, ''),
        answer: match[2].trim(),
      });
    }
  }

  if (pairs.length === 0) {
    let currentQ: string | null = null;
    let currentA: string[] = [];
    const flush = () => {
      if (currentQ && currentA.length) {
        pairs.push({ question: currentQ, answer: currentA.join(' ').trim() });
      }
      currentQ = null;
      currentA = [];
    };

    for (const raw of blocks) {
      const block = raw as PortableTextBlock;
      if (block?._type !== 'block') continue;
      const text = (block.children ?? []).map((c) => c.text ?? '').join('').trim();
      if (!text) continue;

      if (block.style === 'h3') {
        flush();
        currentQ = text.replace(/^["']|["']$/g, '');
      } else if (block.style?.startsWith('h') && block.style !== 'h3') {
        flush();
      } else if (currentQ) {
        currentA.push(text);
      }
    }
    flush();
  }

  return pairs.filter((p) => p.question && p.answer);
}
