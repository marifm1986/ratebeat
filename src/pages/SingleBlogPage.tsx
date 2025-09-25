import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Facebook, Linkedin, Tag, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { getBlogPostBySlug, getFeaturedPosts } from '../data/blogData';
import type { BlogPost } from '../data/blogData';

export const SingleBlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      // Simulate API call delay
      setTimeout(() => {
        const blogPost = getBlogPostBySlug(slug);
        setPost(blogPost);
        setLoading(false);
        
        if (!blogPost) {
          navigate('/blog');
        }
      }, 300);
    }
  }, [slug, navigate]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = window.location.href;
  const shareTitle = post?.title || '';

  const socialShares = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      color: 'hover:bg-blue-500 hover:text-white',
      bgColor: 'bg-blue-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-700 hover:text-white',
      bgColor: 'bg-blue-700'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-800 hover:text-white',
      bgColor: 'bg-blue-800'
    }
  ];

  // Get related posts (excluding current post)
  const relatedPosts = getFeaturedPosts(6).filter(p => p.slug !== slug).slice(0, 3);

  // Popular tags for sidebar
  const popularTags = ['Mortgage Rates', 'Home Buying', 'Refinancing', 'First-Time Buyers', 'Market Trends', 'Credit Score'];

  // Recent posts for sidebar
  const recentPosts = getFeaturedPosts(4).filter(p => p.slug !== slug).slice(0, 3);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto animate-pulse">
              <div className="h-96 bg-gray-200 rounded-3xl mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-4">
                  {[...Array(8)].map((_, index) => (
                    <div key={index} className="h-4 bg-gray-200 rounded"></div>
                  ))}
                </div>
                <div className="space-y-6">
                  <div className="h-32 bg-gray-200 rounded-2xl"></div>
                  <div className="h-48 bg-gray-200 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section with Featured Image and Title Overlay */}
        <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <div className="max-w-4xl mx-auto text-center text-white">
                {/* Back Button */}
                <button
                  onClick={() => navigate('/blog')}
                  className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to All Blogs
                </button>

                {/* Tags */}
                <div className="flex justify-center flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
                  {post.title}
                </h1>

                {/* Author & Meta Info */}
                <div className="flex items-center justify-center space-x-8 text-white/90">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                    />
                    <span className="font-medium">{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedDate)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                
                {/* Main Content - Left Column */}
                <div className="lg:col-span-2">
                  <article className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
                    {/* Social Share - Top */}
                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
                      <div className="flex items-center space-x-4">
                        <Share2 className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600 font-medium">Share this article:</span>
                        <div className="flex items-center space-x-3">
                          {socialShares.map((social) => {
                            const IconComponent = social.icon;
                            return (
                              <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 rounded-full bg-gray-100 text-gray-600 transition-all duration-300 ${social.color}`}
                                aria-label={`Share on ${social.name}`}
                              >
                                <IconComponent className="w-4 h-4" />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div 
                      className="prose prose-lg max-w-none
                        prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                        prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                        prose-ul:text-gray-700 prose-ol:text-gray-700
                        prose-li:mb-2 prose-li:leading-relaxed
                        prose-strong:text-gray-900 prose-strong:font-semibold
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-800
                        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-gray-700"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Article Separator */}
                    <div className="my-12 text-center">
                      <div className="inline-flex items-center space-x-4">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
                      </div>
                    </div>

                    {/* Bottom Social Share */}
                    <div className="pt-8 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-600 font-medium">Enjoyed this article? Share it:</span>
                          <div className="flex items-center space-x-3">
                            {socialShares.map((social) => {
                              const IconComponent = social.icon;
                              return (
                                <a
                                  key={social.name}
                                  href={social.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`p-3 rounded-full ${social.bgColor} text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                                  aria-label={`Share on ${social.name}`}
                                >
                                  <IconComponent className="w-4 h-4" />
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                {/* Sidebar - Right Column */}
                <div className="space-y-8">
                  {/* Recent Posts */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h3>
                    <div className="space-y-4">
                      {recentPosts.map((recentPost) => (
                        <a
                          key={recentPost.id}
                          href={`/blog/${recentPost.slug}`}
                          className="block group"
                        >
                          <div className="flex space-x-4">
                            <img
                              src={recentPost.featuredImage}
                              alt={recentPost.title}
                              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                {recentPost.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {formatDate(recentPost.publishedDate)}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-sm font-medium rounded-full cursor-pointer transition-colors"
                        >
                          #{tag.replace(' ', '')}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Subscription */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                    <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                      Get the latest mortgage insights and market updates delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="bg-white py-16 lg:py-20 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">You May Also Like</h2>
                <p className="text-gray-600 text-lg">Discover more insights and tips for your home financing journey</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article 
                    key={relatedPost.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(relatedPost.publishedDate)}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                      <a
                        href={`/blog/${relatedPost.slug}`}
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group/link"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Back to All Blogs CTA */}
              <div className="text-center mt-12">
                <button
                  onClick={() => navigate('/blog')}
                  className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                  Back to All Blogs
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
