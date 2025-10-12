import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { getRelatedItems } from '../../data/relatedContent';

type RelatedPostsProps = {
  slugs: string[];
  heading?: string;
  className?: string;
};

export default function RelatedPosts({ slugs, heading = 'Related Guides', className }: RelatedPostsProps) {
  const items = getRelatedItems(slugs);

  if (!items.length) {
    return null;
  }

  return (
    <aside
      className={cn(
        'mt-16 rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-sm backdrop-blur-sm',
        className,
      )}
      aria-labelledby="related-guides-heading"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="related-guides-heading" className="text-2xl font-bold text-slate-900">
            {heading}
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Continue exploring expert guides to stay informed before you make a coverage decision.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map(({ slug, href, title, description, category }) => (
          <Link
            key={slug}
            to={href}
            className="group block rounded-2xl border border-transparent bg-white/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            {category ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {category}
              </span>
            ) : null}
            <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-emerald-600">
              {title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
              Read more
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
