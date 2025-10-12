import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import StaticRoutes from './StaticRoutes';
import type { SeoCollector } from '../components/SeoProvider';
import type { ResolvedSEO } from '../utils/seo';
import { canonicalFor, resolveSEO } from '../utils/seo';

class Collector implements SeoCollector {
  public latest: ResolvedSEO | null = null;

  register(config: ResolvedSEO) {
    this.latest = config;
  }
}

export interface RenderResult {
  html: string;
  head: string;
  seo: ResolvedSEO;
}

export function renderUrl(url: string): RenderResult {
  const collector = new Collector();
  const element = React.createElement(
    StaticRouter,
    { location: url },
    React.createElement(StaticRoutes, { seoCollector: collector }),
  );

  const html = renderToString(element);
  const seo = collector.latest ?? resolveSEO({ canonical: canonicalFor(url) });
  const head = renderHead(seo);

  return { html, head, seo };
}

function renderHead(seo: ResolvedSEO) {
  const parts: string[] = [];
  parts.push(`<title>${escapeHtml(seo.title)}</title>`);
  parts.push(`<meta name="theme-color" content="${escapeAttr(seo.themeColor)}">`);
  if (seo.robots) {
    parts.push(`<meta name="robots" content="${escapeAttr(seo.robots)}">`);
  }
  for (const meta of seo.meta) {
    if ('name' in meta) {
      parts.push(`<meta name="${escapeAttr(meta.name)}" content="${escapeAttr(meta.content)}">`);
    } else if ('property' in meta) {
      parts.push(`<meta property="${escapeAttr(meta.property)}" content="${escapeAttr(meta.content)}">`);
    } else if ('httpEquiv' in meta) {
      parts.push(`<meta http-equiv="${escapeAttr(meta.httpEquiv)}" content="${escapeAttr(meta.content)}">`);
    }
  }

  for (const link of seo.links) {
    const attrs = [
      `rel="${escapeAttr(link.rel)}"`,
      link.href ? `href="${escapeAttr(link.href)}"` : '',
      link.as ? `as="${escapeAttr(link.as)}"` : '',
      link.type ? `type="${escapeAttr(link.type)}"` : '',
      link.crossOrigin ? `crossorigin="${escapeAttr(link.crossOrigin)}"` : '',
    ]
      .filter(Boolean)
      .join(' ');
    parts.push(`<link ${attrs}>`);
  }

  for (const script of seo.scripts) {
    if (script.src) {
      const attrs = [
        `src="${escapeAttr(script.src)}"`,
        script.type ? `type="${escapeAttr(script.type)}"` : '',
        script.defer ? 'defer' : '',
        script.async ? 'async' : '',
      ]
        .filter(Boolean)
        .join(' ');
      parts.push(`<script ${attrs}></script>`);
    } else if (script.innerHTML) {
      const typeAttr = script.type ? ` type="${escapeAttr(script.type)}"` : ' type="application/ld+json"';
      parts.push(`<script${typeAttr}>${escapeScript(script.innerHTML)}</script>`);
    }
  }

  return parts.join('\n');
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case "'":
        return '&#39;';
      case '"':
        return '&quot;';
      default:
        return char;
    }
  });
}

function escapeAttr(value: string) {
  return escapeHtml(value);
}

function escapeScript(value: string) {
  return value.replace(/<\//g, '<\\/');
}
