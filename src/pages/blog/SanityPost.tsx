
// Bradford Informed Guidance | SanityPost | v1.3
import { useParams, Link } from 'react-router-dom';
import { createContext, useContext, useEffect, useState } from 'react';
import { getPostBySlug } from '../../lib/sanity';
import SEO from '../../components/SEO';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { buildArticleSEO } from '../../utils/seoHelpers';
import { breadcrumbSchema, faqPageSchema, personSchema, trustSealSchema, datasetSchema } from '../../utils/schema';
import { SITE } from '../../utils/schema';
import { blocksToMarkdown, extractFaqPairs, extractDataTables } from '../../utils/sanityContent';

interface SanityPostData {
  title: string;
  slug: { current: string };
  body: unknown[];
  excerpt: string;
  publishedAt: string;
  targetState: string;
  contentTrack: string;
  bridgeType: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    focusKeyword: string;
  };
  targetQuery: string;
  gapDefeated: string;
}

// Preloaded post payloads bypass the client useEffect fetch so crawlers (and
// fast first paint) see real article HTML instead of a loading spinner. SSR
// reads from PreloadedPostContext (populated by scripts/prerender.js per-route
// via src/ssr/render.ts). Client hydration reads from window.__PRELOADED_POST__,
// a global injected into the prerendered HTML *before* the JS bundle loads —
// that ordering is the whole reason this works, so do not move the read into
// an effect or a lazy accessor.
type PreloadedPostMap = Record<string, SanityPostData | undefined>;

export const PreloadedPostContext = createContext<PreloadedPostMap>({});

declare global {
  interface Window {
    __PRELOADED_POST__?: PreloadedPostMap;
  }
}

function readInitialPost(
  slug: string | undefined,
  ctx: PreloadedPostMap,
): SanityPostData | null {
  if (!slug) return null;
  if (typeof window !== 'undefined') {
    return window.__PRELOADED_POST__?.[slug] ?? null;
  }
  return ctx[slug] ?? null;
}

export default function SanityPost() {
  const { slug } = useParams<{ slug: string }>();
  const preloadedMap = useContext(PreloadedPostContext);
  const [post, setPost] = useState<SanityPostData | null>(() =>
    readInitialPost(slug, preloadedMap),
  );
  const [loading, setLoading] = useState<boolean>(() => !readInitialPost(slug, preloadedMap));

  useEffect(() => {
    if (!slug) return;
    if (post?.slug?.current === slug) return;
    const activeSlug = slug;
    async function fetchPost() {
      try {
        setLoading(true);
        const fetchedPost = await getPostBySlug(activeSlug);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Error fetching Sanity post:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug, post]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-jade-500" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-white mb-4">Article Not Found</h1>
          <p className="text-slate-400">This article may have been moved or is no longer available.</p>
        </div>
      </div>
    );
  }

  // Render article body through a single flattened markdown pass instead of
  // PortableText's per-block renderer. Cross-block structures (GFM tables,
  // multi-paragraph list items) only render correctly this way; PortableText
  // treats each block independently and drops table-row relationships. The
  // pass also applies the `<<aa` → `<a` corruption repair in sanityContent.ts.
  type MdProps = { children?: React.ReactNode };
  const markdownComponents = {
    h1: ({ children }: MdProps) => (
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mt-14 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }: MdProps) => (
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mt-12 mb-5">{children}</h2>
    ),
    h3: ({ children }: MdProps) => (
      <h3 className="font-serif text-xl md:text-2xl font-semibold text-white mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }: MdProps) => (
      <h4 className="font-serif text-lg font-semibold text-white mt-6 mb-3">{children}</h4>
    ),
    p: ({ children }: MdProps) => (
      <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">{children}</p>
    ),
    ul: ({ children }: MdProps) => (
      <ul className="list-disc list-outside ml-6 text-slate-300 text-lg leading-relaxed mb-6 font-light space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }: MdProps) => (
      <ol className="list-decimal list-outside ml-6 text-slate-300 text-lg leading-relaxed mb-6 font-light space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }: MdProps) => <li className="pl-1">{children}</li>,
    a: ({ children, href }: MdProps & { href?: string }) => {
      const isExternal = !!href && /^https?:\/\//i.test(href);
      return (
        <a
          href={href}
          className="text-brand-jade-400 hover:text-brand-jade-300 underline underline-offset-4 transition-colors"
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: MdProps) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }: MdProps) => <em className="text-slate-200 italic">{children}</em>,
    blockquote: ({ children }: MdProps) => (
      <blockquote className="border-l-4 border-brand-jade-500 pl-6 my-8 text-slate-300 italic text-lg">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-12 border-white/10" />,
    code: ({ children }: MdProps) => (
      <code className="px-1.5 py-0.5 rounded bg-slate-800 text-brand-jade-300 text-sm font-mono">
        {children}
      </code>
    ),
    table: ({ children }: MdProps) => (
      <div className="my-8 overflow-x-auto rounded-xl border border-white/10">
        <table className="min-w-full divide-y divide-white/10">{children}</table>
      </div>
    ),
    thead: ({ children }: MdProps) => <thead className="bg-slate-900/60">{children}</thead>,
    tbody: ({ children }: MdProps) => <tbody className="divide-y divide-white/5">{children}</tbody>,
    tr: ({ children }: MdProps) => <tr>{children}</tr>,
    th: ({ children }: MdProps) => (
      <th className="px-4 py-3 text-left text-sm font-semibold text-white">{children}</th>
    ),
    td: ({ children }: MdProps) => (
      <td className="px-4 py-3 text-slate-300 text-sm align-top">{children}</td>
    ),
  };

  const markdownBody = blocksToMarkdown(post.body);

  const getBridgeContent = (bridgeType: string) => {
    switch (bridgeType) {
      case 'A':
        return "If optimizing your health plan saves you $200–$400/month, that's money that could be building tax-free wealth in an Indexed Universal Life policy. Many of Zach's clients redirect those savings directly into an Indexed Accumulation Asset.";
      case 'B':
        return "There are Capital Legacy Structuring policies with living benefits built in — meaning they pay out on a critical illness diagnosis, not just at death. This can be as important as your health coverage.";
      case 'C':
        return "If you're navigating Insurability Architecture before Senior Risk Mitigation Architecture, you're in the most strategic window for Capital Legacy Structuring you'll ever have. Rates are favorable and an Indexed Accumulation Asset structured now can produce tax-free income exactly when Senior Risk Mitigation Architecture kicks in.";
      default:
        return null;
    }
  };

  const bridgeContent = getBridgeContent(post.bridgeType);

  const articleSEO = buildArticleSEO({
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    path: `/blog/${post.slug?.current || slug}`,
    datePublished: post.publishedAt,
    author: 'Zach Bradford',
  });

  const scripts = articleSEO.scripts.map((s: { innerHTML: string }) => s);

  scripts.push({
    innerHTML: breadcrumbSchema([
      { name: 'Home', item: SITE.url },
      { name: 'Blog', item: `${SITE.url}/blog` },
      { name: post.title, item: `${SITE.url}/blog/${post.slug?.current || slug}` },
    ]),
  });

  // Author E-E-A-T stack: Person (with credential + knowsAbout) + TrustSeal
  // (NPN-anchored ProfessionalService). Every article surface carries these so
  // AI citation engines can verify author credentials independent of the
  // article JSON-LD. Keep lexicon terms ("Systemic Risk Advisor") in the
  // Person description — this is intentional brand vocabulary per the
  // Insurability Risk Architecture strategy.
  scripts.push({
    innerHTML: personSchema(
      'Zach Bradford',
      'Systemic Risk Advisor',
      'Licensed Independent Broker (NPN 18181266) specializing in Insurability Risk Architecture, Systemic Subsidy Fragility, and Resilience Engineering for families across FL, MI, NC, AZ, TX, GA, IN, SC.',
      'https://bradfordinformedguidance.com/assets/zach.webp',
    ),
  });

  scripts.push({
    innerHTML: trustSealSchema({
      npn: '18181266',
      licenseNumber: 'W347851',
      associations: ['NIPR', 'NAIC'],
    }),
  });

  // Data-Anchor: every GFM table in the body becomes its own Dataset JSON-LD
  // so Perplexity / ChatGPT / Claude / Gemini can cite the structured rows
  // directly rather than synthesizing from prose. Protocol #2 of the
  // Authority Engine — every post must carry at least one Data-Anchor.
  const canonicalUrl = `${SITE.url}/blog/${post.slug?.current || slug}`;
  const dataTables = extractDataTables(markdownBody);
  dataTables.forEach((table, idx) => {
    scripts.push({
      innerHTML: datasetSchema({
        name: dataTables.length > 1 ? `${post.title} — Table ${idx + 1}` : post.title,
        description: post.excerpt || post.seo?.metaDescription || post.title,
        headers: table.headers,
        rows: table.rows,
        url: canonicalUrl,
      }),
    });
  });

  // Build FAQPage JSON-LD from actual Q/A pairs in the post body — this is
  // what AI answer engines ingest. Falls back to the synthetic single-Q
  // target-query schema only if the body contains no extractable FAQ.
  const faqPairs = extractFaqPairs(post.body);
  if (faqPairs.length > 0) {
    scripts.push({ innerHTML: faqPageSchema(faqPairs) });
  } else if (post.targetQuery) {
    scripts.push({
      innerHTML: faqPageSchema([
        {
          question: post.targetQuery,
          answer: post.excerpt || 'See the full article above for detailed guidance.',
        },
      ]),
    });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {post.seo && (
        <SEO
          title={post.seo.metaTitle}
          description={post.seo.metaDescription}
          path={`/blog/${post.slug?.current || slug}`}
          meta={articleSEO.meta}
          scripts={scripts}
        />
      )}

      <section className="py-24 bg-slate-900 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          {post.targetState && (
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-jade-500/10 border border-brand-jade-500/20 text-brand-jade-400 text-xs font-bold uppercase tracking-wider mb-6">
              {post.targetState}
            </div>
          )}

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-400 border-t border-white/10 pt-6">
            <span>By Zach Bradford | NPN: 18181266 | Licensed in FL, MI, NC, AZ, TX, GA, IN, SC</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {markdownBody}
          </ReactMarkdown>

          {bridgeContent && (
            <div className="my-12 p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20">
              <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
                {bridgeContent}
              </p>
              <Link to="/life-insurance" className="font-semibold tracking-wide uppercase text-sm text-amber-500 hover:text-amber-400 transition-colors">
                Learn about Wealth Protection options →
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
