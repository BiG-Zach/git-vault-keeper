
// Bradford Informed Guidance | SanityPost | v1.1
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostBySlug } from '../../lib/sanity';
import SEO from '../../components/SEO';
import { PortableText } from '@portabletext/react';
import ReactMarkdown from 'react-markdown';
import { buildArticleSEO } from '../../utils/seoHelpers';
import { breadcrumbSchema, faqPageSchema } from '../../utils/schema';
import { SITE } from '../../utils/schema';

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

export default function SanityPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<<SanSanityPostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      try {
        setLoading(true);
        const fetchedPost = await getPostBySlug(slug);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Error fetching Sanity post:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <<divdiv className="min-h-screen bg-slate-950 flex items-center justify-center">
        <<divdiv className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-jade-500" />
      </div>
    );
  }

  if (!post) {
    return (
      <<divdiv className="min-h-screen bg-slate-950 flex items-center justify-center">
        <<divdiv className="text-center">
          <<hh1 className="text-2xl font-serif text-white mb-4">Article Not Found</h1>
          <<pp className="text-slate-400">This article may have been moved or is no longer available.</p>
        </div>
      </div>
    );
  }

  const portableTextComponents = {
    block: {
      normal: ({children}: {children?: React.ReactNode}) => {
        // Check if children contain markdown-like syntax to prevent raw rendering
        const content = children as any;
        const isMarkdown = typeof content === 'string' && (content.includes('**') || content.includes('[') || content.includes('|'));
        
        if (isMarkdown) {
          return (
            <<divdiv className="text-slate-300 text-lg leading-relaxed mb-6 font-light prose-invert prose-slate max-w-none">
              <<ReactReactMarkdown>{content}</ReactMarkdown>
            </div>
          );
        }
        return <<pp className="text-slate-300 text-lg leading-relaxed mb-6 font-light">{children}</p>;
      },
      h2: ({children}: {children?: React.ReactNode}) => <<hh2 className="text-2xl font-serif font-bold text-white mt-12 mb-6">{children}</h2>,
      h3: ({children}: {children?: React.ReactNode}) => <<hh3 className="text-xl font-serif font-semibold text-white mt-8 mb-4">{children}</h3>,
      blockquote: ({children}: {children?: React.ReactNode}) => <<blockquoteblockquote className="border-l-4 border-brand-jade-500 pl-6 my-8 text-slate-300 italic text-lg">{children}</blockquote>,
    },
    marks: {
      strong: ({children}: {children?: React.ReactNode}) => <<strongstrong className="text-white font-semibold">{children}</strong>,
      em: ({children}: {children?: React.ReactNode}) => <<emem className="text-slate-200 italic">{children}</em>,
    }
  };

  const getBridgeContent = (bridgeType: string) => {
    switch (bridgeType) {
      case 'A':
        return "If optimizing your health plan saves you $200–$400/month, that's money that could be building tax-free wealth in an Indexed Universal Life policy. Many of Zach's clients redirect those savings directly into an IUL.";
      case 'B':
        return "There are life insurance policies with living benefits built in — meaning they pay out on a critical illness diagnosis, not just at death. This can be as important as your health coverage.";
      case 'C':
        return "If you're navigating health insurance before Medicare, you're in the most strategic window for life insurance you'll ever have. Rates are favorable and an IUL structured now can produce tax-free income exactly when Medicare kicks in.";
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

  if (post.targetQuery && post.gapDefeated) {
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
    <<divdiv className="min-h-screen bg-slate-950 text-white">
      {post.seo && (
        <<SEOSEO
          title={post.seo.metaTitle}
          description={post.seo.metaDescription}
          path={`/blog/${post.slug?.current || slug}`}
          meta={articleSEO.meta}
          scripts={scripts}
        />
      )}
      
      <<sectionsection className="py-24 bg-slate-900 border-b border-white/10">
        <<divdiv className="max-w-4xl mx-auto px-6">
          {post.targetState && (
            <<divdiv className="inline-flex items-center px-3 py-1 rounded-full bg-brand-jade-500/10 border border-brand-jade-500/20 text-brand-jade-400 text-xs font-bold uppercase tracking-wider mb-6">
              {post.targetState}
            </div>
          )}
          
          <<hh1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          
          <<pp className="text-xl text-slate-300 font-light leading-relaxed mb-8">
            {post.excerpt}
          </p>
          
          <<divdiv className="flex items-center gap-4 text-sm text-slate-400 border-t border-white/10 pt-6">
            <span>By Zach Bradford | NPN: 18181266 | Licensed in FL, MI, NC, AZ, TX, GA, IN, SC</span>
            <span>•</span>
            <<timetime dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        </div>
      </section>

      <<sectionsection className="py-16">
        <<divdiv className="max-w-4xl mx-auto px-6">
          <<PortablePortableText value={post.body as import("@portabletext/types").TypedObject[]} components={portableTextComponents} />

          {bridgeContent && (
            <<divdiv className="my-12 p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20">
              <<pp className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
                {bridgeContent}
              </p>
              <<LinkLink to="/life-insurance" className="font-semibold tracking-wide uppercase text-sm text-amber-500 hover:text-amber-400 transition-colors">
                Learn about Wealth Protection options →
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
