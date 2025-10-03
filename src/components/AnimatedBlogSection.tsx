import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Clock, Eye, MessageCircle, Share2, ArrowRight, Heart, Bookmark } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import MotionWrapper from './MotionWrapper';
import MorphingButton from './MorphingButton';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AnimatedBlogSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(false);

  const recentPosts = blogPosts.slice(0, 8);
  const categories = ['All', 'Football', 'Basketball', 'Athletics', 'Soccer', 'Tennis'];

  const filteredPosts = activeFilter === 'All' 
    ? recentPosts 
    : recentPosts.filter(post => post.category === activeFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const toggleBookmark = (postId: string) => {
    setBookmarkedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleFilterChange = (category: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveFilter(category);
      setIsLoading(false);
    }, 300);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <MotionWrapper animation="fadeUp" className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-fraunces text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Latest Sports News
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Stay informed with our comprehensive coverage of the sports world's biggest stories and breaking news.
          </motion.p>

          {/* Category Filter */}
          <MotionWrapper animation="fadeUp" delay={0.6} className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                {category}
              </motion.button>
            ))}
          </MotionWrapper>
        </MotionWrapper>

        {/* Loading State */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center py-12"
            >
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Featured Post Slider */}
        <MotionWrapper animation="fadeUp" delay={0.3} className="mb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.blog-swiper-button-next',
              prevEl: '.blog-swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.blog-swiper-pagination',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="featured-posts-slider"
          >
            {filteredPosts.slice(0, 6).map((post) => (
              <SwiperSlide key={post.id}>
                <motion.article
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  whileHover={{ y: -10 }}
                  layout
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <motion.span
                      className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {post.category}
                    </motion.span>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        onClick={() => toggleLike(post.id)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                          likedPosts.has(post.id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart size={16} className={likedPosts.has(post.id) ? 'fill-current' : ''} />
                      </motion.button>
                      <motion.button
                        onClick={() => toggleBookmark(post.id)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                          bookmarkedPosts.has(post.id) 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Bookmark size={16} className={bookmarkedPosts.has(post.id) ? 'fill-current' : ''} />
                      </motion.button>
                    </div>

                    {/* Featured/Trending Badges */}
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      {post.featured && (
                        <motion.span
                          className="px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          Featured
                        </motion.span>
                      )}
                      {post.trending && (
                        <motion.span
                          className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          Trending
                        </motion.span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Author & Date */}
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">By {post.author.name}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <motion.h3
                      className="text-xl font-bold font-fraunces text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {post.title}
                    </motion.h3>

                    {/* Excerpt */}
                    <motion.p
                      className="text-gray-600 mb-4 leading-relaxed line-clamp-3 font-inter"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {post.excerpt}
                    </motion.p>

                    {/* Meta & Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime} min</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye size={14} />
                          <span>{post.views?.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle size={14} />
                          <span>24</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <motion.button
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Share2 size={16} />
                        </motion.button>
                        <MorphingButton size="sm" variant="primary" className="flex items-center space-x-2 group">
                          <span>Read More</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </MorphingButton>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button className="blog-swiper-button-prev w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <div className="blog-swiper-pagination flex space-x-2"></div>
            <button className="blog-swiper-button-next w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </MotionWrapper>

        {/* Load More Section */}
        <MotionWrapper animation="scale" delay={0.5} className="text-center">
          <MorphingButton variant="primary" size="lg">
            Load More Articles
          </MorphingButton>
        </MotionWrapper>
      </div>

      <style jsx>{`
        .blog-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #e5e7eb;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
        }
        .blog-swiper-pagination .swiper-pagination-bullet-active {
          background: #2563eb;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default AnimatedBlogSection;