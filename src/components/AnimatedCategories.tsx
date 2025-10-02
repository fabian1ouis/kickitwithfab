import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/mockData';
import { ArrowRight, TrendingUp } from 'lucide-react';

const AnimatedCategories: React.FC = () => {
  const categoryIcons = {
    Football: '🏈',
    Basketball: '🏀',
    Athletics: '🏃‍♂️',
    Baseball: '⚾',
    Soccer: '⚽',
    Tennis: '🎾'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const backgroundVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-fraunces text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore Sports Categories
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Dive deep into your favorite sports with comprehensive coverage, expert analysis, and breaking news.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <motion.div
                variants={backgroundVariants}
                className={`${category.color} p-8 text-white relative h-64`}
              >
                {/* Animated Background Elements */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 transform rotate-12 translate-x-8 -translate-y-8"
                  animate={{
                    rotate: [12, 32, 12],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-8xl">
                    {categoryIcons[category.name as keyof typeof categoryIcons] || '🏆'}
                  </div>
                </motion.div>

                {/* Floating Particles */}
                <motion.div
                  className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
                <motion.div
                  className="absolute bottom-8 right-8 w-3 h-3 bg-white/20 rounded-full"
                  animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <motion.div 
                      variants={iconVariants}
                      className="text-5xl mb-2"
                    >
                      {categoryIcons[category.name as keyof typeof categoryIcons] || '🏆'}
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </motion.div>
                  </div>
                  
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold font-fraunces mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {category.name}
                    </motion.h3>
                    <motion.p 
                      className="text-white/90 mb-6 leading-relaxed font-inter"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {category.description}
                    </motion.p>
                    
                    <div className="flex items-center justify-between">
                      <motion.button 
                        className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Articles
                      </motion.button>
                      <div className="flex items-center space-x-1 text-sm opacity-75">
                        <TrendingUp size={14} />
                        <span>12+ Articles</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-white/0 to-black/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            View All Categories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedCategories;