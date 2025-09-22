import { Calendar, ArrowRight } from 'lucide-react';
import { getFeaturedPosts } from '../data/blogData';

export const BlogSection = () => {
  // Get the 3 most recent/featured blog posts
  const recentPosts = getFeaturedPosts(3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert insights, market updates, and practical tips for your home financing journey.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Thumbnail */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Published Date */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(post.publishedDate)}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* Read More Button */}
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blogs CTA */}
        <div className="text-center">
          <a
            href="/blog"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl group"
          >
            View All Blogs
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

