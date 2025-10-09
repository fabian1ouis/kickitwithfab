import React from 'react';
import { categories } from '../data/mockData';
import { ArrowRight, Zap, Dribbble, Trophy, Target, Globe, Brackets as Racquet } from 'lucide-react';

const Categories: React.FC = () => {
  const categoryIcons = {
    Football: Zap,
    Basketball: Dribbble,
    Athletics: Trophy,
    Baseball: Target,
    Soccer: Globe,
    Tennis: Racquet
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Sports Categories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dive deep into your favorite sports with comprehensive coverage, expert analysis, and breaking news.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className={`${category.color} p-8 text-white relative`}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform rotate-12 translate-x-8 -translate-y-8">
                  {React.createElement(categoryIcons[category.name as keyof typeof categoryIcons] || Trophy, {
                    size: 128,
                    className: "w-32 h-32"
                  })}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="mb-2">
                      {React.createElement(categoryIcons[category.name as keyof typeof categoryIcons] || Trophy, {
                        size: 48,
                        className: "w-12 h-12"
                      })}
                    </div>
                    <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <button className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors">
                      View Articles
                    </button>
                    <div className="text-sm opacity-75">
                      12+ Articles
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;