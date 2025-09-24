import React from 'react';
import { Clock, Eye, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const Hero: React.FC = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const trendingPosts = blogPosts.filter(post => post.trending).slice(0, 3);

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          {featuredPost && (
            <div className="lg:col-span-2">
              <div className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center space-x-2">
                          <img
                            src={featuredPost.author.avatar}
                            alt={featuredPost.author.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <span>{featuredPost.author.name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={16} />
                          <span>{featuredPost.readTime} min read</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye size={16} />
                          <span>{featuredPost.views?.toLocaleString()} views</span>
                        </div>
                      </div>
                      <button className="flex items-center space-x-2 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        <span>Read More</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Trending Stories */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-2 h-8 bg-orange-500 rounded mr-3"></span>
                Trending Stories
              </h3>
              
              <div className="space-y-4">
                {trendingPosts.map((post, index) => (
                  <div key={post.id} className="group cursor-pointer">
                    <div className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
                      <div className="flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-2xl font-bold text-orange-400">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <h4 className="font-semibold text-sm leading-tight group-hover:text-orange-300 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center space-x-3 mt-2 text-xs text-gray-300">
                          <span>{post.publishedAt}</span>
                          <span>{post.views?.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Stay Updated!</h4>
              <p className="text-orange-100 text-sm mb-4">Get the latest sports news delivered to your inbox</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-orange-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;