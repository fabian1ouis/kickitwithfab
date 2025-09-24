import React from 'react';
import { Clock, Eye, MessageCircle, Share2, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const BlogSection: React.FC = () => {
  const recentPosts = blogPosts.slice(0, 6);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Sports News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our comprehensive coverage of the sports world's biggest stories and breaking news.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid gap-8">
              {recentPosts.slice(0, 4).map((post, index) => (
                <article key={post.id} className="group">
                  <div className={`grid ${index === 0 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200`}>
                    <div className={`${index === 0 ? 'md:col-span-1' : 'md:col-span-1'} relative overflow-hidden rounded-xl`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className={`w-full ${index === 0 ? 'h-64' : 'h-48'} object-cover group-hover:scale-105 transition-transform duration-700`}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    <div className={`${index === 0 ? 'md:col-span-1' : 'md:col-span-2'} flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-2">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-6 h-6 rounded-full"
                            />
                            <span>{post.author.name}</span>
                          </div>
                          <span>•</span>
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>

                        <h3 className={`${index === 0 ? 'text-2xl' : 'text-xl'} font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight`}>
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock size={16} />
                            <span>{post.readTime} min</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye size={16} />
                            <span>{post.views?.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle size={16} />
                            <span>24</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                            <Share2 size={16} />
                          </button>
                          <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:bg-blue-50 px-4 py-2 rounded-full transition-colors">
                            <span>Read More</span>
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Popular Posts */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-1 h-6 bg-orange-500 rounded mr-3"></span>
                  Popular This Week
                </h3>
                <div className="space-y-4">
                  {recentPosts.slice(0, 5).map((post, index) => (
                    <div key={post.id} className="group cursor-pointer">
                      <div className="flex items-start space-x-3 p-3 hover:bg-white rounded-xl transition-colors">
                        <div className="flex-shrink-0">
                          <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                            {post.title}
                          </h4>
                          <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                            <Eye size={12} />
                            <span>{post.views?.toLocaleString()} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ad Space */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white text-center">
                <h4 className="text-lg font-bold mb-2">Advertisement</h4>
                <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📺</div>
                    <p className="text-sm text-gray-300">Your Ad Here</p>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['NFL', 'NBA', 'MLB', 'Olympics', 'Soccer', 'Tennis', 'Fantasy', 'College', 'Playoffs', 'Draft', 'Trades', 'Records'].map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-sm rounded-full transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;