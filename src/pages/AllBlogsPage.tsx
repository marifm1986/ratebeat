import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { getBlogPosts } from '../data/blogData';
import type { BlogPost } from '../data/blogData';

interface BlogPageData {
  posts: BlogPost[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export const AllBlogsPage = () => {
  const [blogData, setBlogData] = useState<BlogPageData>({
    posts: [],
    totalPosts: 0,
    totalPages: 0,
    currentPage: 1,
    hasNextPage: false,
    hasPreviousPage: false
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadBlogPosts(currentPage);
  }, [currentPage]);

  const loadBlogPosts = (page: number) => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const data = getBlogPosts(page, 6);
      setBlogData(data);
      setLoading(false);
    }, 300);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Our Blog
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Insights & Updates
              </p>
              <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
                Stay informed with expert insights, market updates, and practical tips for your home financing journey.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-gray-200 aspect-[16/10] rounded-2xl mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {blogData.posts.map((post) => (
                    <article 
                      key={post.id}
                      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      {/* Featured Image */}
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        {/* Meta Information */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(post.publishedDate)}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {post.readingTime} min read
                          </div>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Title */}
                        <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                          {post.title}
                        </h2>
                        
                        {/* Excerpt */}
                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        {/* Read More Link */}
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

                {/* Pagination */}
                {blogData.totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={!blogData.hasPreviousPage}
                      className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    
                    {[...Array(blogData.totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            currentPage === pageNumber
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={!blogData.hasNextPage}
                      className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
