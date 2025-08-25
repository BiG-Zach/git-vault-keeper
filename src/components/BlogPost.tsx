import React, { useEffect } from 'react';
import { applyHead } from '../utils/seo';
import { organizationSchema, articleSchema, faqSchema, breadcrumbSchema } from '../utils/schema';
import { trackEvent } from '../utils/gtm';

interface BlogPostProps {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  modifiedDate?: string;
  category: string;
  tags: string[];
  featuredImage: string;
  slug: string;
  readTime: number;
  faqs?: Array<{ question: string; answer: string }>;
  relatedKeywords?: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  content,
  author,
  publishDate,
  modifiedDate,
  category,
  tags,
  featuredImage,
  slug,
  readTime,
  faqs,
  relatedKeywords
}) => {
  useEffect(() => {
    const canonicalUrl = `https://www.bradfordinformedguidance.com/blog/${slug}`;
    
    applyHead({
      title: `${title} | Bradford Informed Guidance Blog`,
      description: excerpt,
      canonical: canonicalUrl,
      keywords: `${tags.join(', ')}, ${relatedKeywords?.join(', ') || ''}, insurance blog, insurance guides`,
      image: featuredImage,
      imageAlt: title,
      author,
      publishedTime: publishDate,
      modifiedTime: modifiedDate,
      section: category,
      tags,
      articleType: 'article',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: category, url: `/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}` },
        { name: title, url: canonicalUrl }
      ],
      scripts: [
        {
          type: 'application/ld+json',
          innerHTML: organizationSchema()
        },
        {
          type: 'application/ld+json',
          innerHTML: articleSchema(
            title,
            excerpt,
            author,
            publishDate,
            modifiedDate,
            featuredImage
          )
        },
        {
          type: 'application/ld+json',
          innerHTML: breadcrumbSchema([
            { name: 'Home', item: 'https://www.bradfordinformedguidance.com/' },
            { name: 'Blog', item: 'https://www.bradfordinformedguidance.com/blog' },
            { name: category, item: `https://www.bradfordinformedguidance.com/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}` },
            { name: title, item: canonicalUrl }
          ])
        },
        ...(faqs ? [{
          type: 'application/ld+json',
          innerHTML: faqSchema(faqs)
        }] : [])
      ]
    });

    // Track blog post view
    trackEvent({
      event: 'page_view',
      event_category: 'blog',
      event_action: 'blog_post_view',
      event_label: slug,
      page_type: 'blog_post',
      insurance_type: category.toLowerCase(),
      user_journey_stage: 'research'
    });

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (scrollPercent >= 25 && scrollPercent < 50) {
          trackEvent({
            event: 'scroll_depth',
            event_category: 'blog',
            event_action: 'scroll_25',
            event_label: slug
          });
        } else if (scrollPercent >= 50 && scrollPercent < 75) {
          trackEvent({
            event: 'scroll_depth',
            event_category: 'blog',
            event_action: 'scroll_50',
            event_label: slug
          });
        } else if (scrollPercent >= 75) {
          trackEvent({
            event: 'scroll_depth',
            event_category: 'blog',
            event_action: 'scroll_75',
            event_label: slug
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [title, excerpt, author, publishDate, modifiedDate, category, tags, featuredImage, slug, faqs, relatedKeywords]);

  const handleCTAClick = (action: string) => {
    trackEvent({
      event: 'cta_click',
      event_category: 'blog',
      event_action: action,
      event_label: slug,
      conversion_value: 100
    });
  };

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <header className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-600 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{category}</span>
              <span>{new Date(publishDate).toLocaleDateString()}</span>
              <span>{readTime} min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{excerpt}</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{author[0]}</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{author}</div>
                  <div className="text-sm text-gray-600">Licensed Insurance Agent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <img 
          src={featuredImage} 
          alt={title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        {faqs && faqs.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 mb-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Get personalized insurance quotes from our licensed agents. 
            Free consultations available in Florida, Michigan, and North Carolina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleCTAClick('get_quote')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => handleCTAClick('contact_agent')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact an Agent
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-xl font-bold mb-4">About the Author</h3>
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{author[0]}</span>
            </div>
            <div>
              <h4 className="font-semibold text-lg">{author}</h4>
              <p className="text-gray-600 mb-2">Licensed Insurance Agent</p>
              <p className="text-gray-700">
                {author} is a licensed insurance professional with expertise in health insurance, 
                life insurance, and retirement planning. Licensed to serve clients in Florida, 
                Michigan, and North Carolina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;