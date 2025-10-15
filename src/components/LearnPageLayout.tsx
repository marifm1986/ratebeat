import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Category {
  title: string;
  description: string;
  href: string;
}

interface Article {
  title: string;
  description: string;
  readTime: string;
  href: string;
  category: string;
}

interface FeaturedStory {
  title: string;
  description: string;
  readTime: string;
  href: string;
}

interface LearnPageLayoutProps {
  pageTitle: string;
  pageDescription: string;
  breadcrumb: string;
  heroImage: string;
  featuredStory: FeaturedStory;
  categories: Category[];
  articles: Article[];
  showCTA?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButton1Text?: string;
  ctaButton1Href?: string;
  ctaButton2Text?: string;
  ctaButton2Href?: string;
}

export const LearnPageLayout: React.FC<LearnPageLayoutProps> = ({
  pageTitle,
  pageDescription,
  breadcrumb,
  heroImage,
  featuredStory,
  categories,
  articles,
  showCTA,
  ctaTitle,
  ctaDescription,
  ctaButton1Text,
  ctaButton1Href,
  ctaButton2Text,
  ctaButton2Href
}) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm text-gray-600 mb-2">{breadcrumb}</p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                {pageTitle}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {pageDescription}
              </p>
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
                />
              </div>
            </div>
            
            {/* Right Image */}
            <div className="hidden lg:block">
              <img
                src={heroImage}
                alt={pageTitle}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Story - No Image */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 mb-8 border border-teal-100">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">Featured story</span>
              <span className="text-sm text-gray-600">{featuredStory.readTime}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {featuredStory.title}
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              {featuredStory.description}
            </p>
            <button 
              onClick={() => navigate(featuredStory.href)}
              className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Read more
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories - Content Only */}
        {categories.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by category</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => navigate(category.href)}
                  className="bg-white rounded-xl p-6 flex items-center justify-between cursor-pointer hover:shadow-lg transition-shadow border border-gray-200 hover:border-teal-200"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-teal-600 flex-shrink-0 ml-4" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Resources */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                onClick={() => navigate(article.href)}
                className="bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow border border-gray-200 hover:border-teal-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {article.description}
                </p>
                <button className="flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            ‹
          </button>
          <button className="px-3 py-2 bg-gray-900 text-white rounded-lg">1</button>
          <button className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            2
          </button>
          <button className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            ›
          </button>
        </div>

        {/* CTA Section */}
        {showCTA && (
          <div className="mt-16 bg-white rounded-2xl p-12 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {ctaTitle}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => ctaButton1Href && navigate(ctaButton1Href)}
                className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                {ctaButton1Text}
              </button>
              <button 
                onClick={() => ctaButton2Href && navigate(ctaButton2Href)}
                className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                {ctaButton2Text}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
