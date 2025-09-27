import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Clock, Eye, ArrowRight, Play } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider: React.FC = () => {
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 4);
  const [activeSlide, setActiveSlide] = useState(0);

  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          nextEl: '.hero-swiper-button-next',
          prevEl: '.hero-swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.hero-swiper-pagination',
          bulletClass: 'hero-swiper-bullet',
          bulletActiveClass: 'hero-swiper-bullet-active',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="h-full"
      >
        {featuredPosts.map((post, index) => (
          <SwiperSlide key={post.id}>
            <div className="relative h-full">
              {/* Background Image with Parallax Effect */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl">
                    <motion.div
                      variants={slideVariants}
                      initial="hidden"
                      animate={activeSlide === index ? "visible" : "hidden"}
                      className="space-y-6"
                    >
                      {/* Category Badge */}
                      <motion.span
                        variants={textVariants}
                        className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full shadow-lg"
                      >
                        {post.category}
                      </motion.span>

                      {/* Title */}
                      <motion.h1
                        variants={textVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                      >
                        {post.title}
                      </motion.h1>

                      {/* Excerpt */}
                      <motion.p
                        variants={textVariants}
                        className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl"
                      >
                        {post.excerpt}
                      </motion.p>

                      {/* Meta Info */}
                      <motion.div
                        variants={textVariants}
                        className="flex items-center space-x-6 text-gray-300"
                      >
                        <div className="flex items-center space-x-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-10 h-10 rounded-full border-2 border-white/20"
                          />
                          <span className="font-medium">By {post.author.name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={18} />
                          <span>{post.readTime} min read</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye size={18} />
                          <span>{post.views?.toLocaleString()} views</span>
                        </div>
                      </motion.div>

                      {/* CTA Buttons */}
                      <motion.div
                        variants={textVariants}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                      >
                        <button className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl">
                          <span>Read Full Story</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                          <Play className="w-5 h-5" />
                          <span>Watch Highlights</span>
                        </button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Animated Elements */}
              <motion.div
                className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute bottom-40 right-40 w-16 h-16 bg-orange-500/20 rounded-full"
                animate={{
                  y: [0, 30, 0],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="hero-swiper-button-prev absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer group">
        <ArrowRight className="w-6 h-6 rotate-180 group-hover:scale-110 transition-transform" />
      </div>
      <div className="hero-swiper-button-next absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer group">
        <ArrowRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </div>

      {/* Custom Pagination */}
      <div className="hero-swiper-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3"></div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-8 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Scroll Down</span>
          <div className="w-px h-8 bg-white/50"></div>
        </div>
      </motion.div>

      <style jsx>{`
        .hero-swiper-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hero-swiper-bullet-active {
          background: white;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;