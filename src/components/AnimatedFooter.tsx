import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';

const AnimatedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '/' },
      { name: 'Categories', href: '/categories' },
      { name: 'Latest News', href: '/blog' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    'Sports': [
      { name: 'Football', href: '/categories/football' },
      { name: 'Basketball', href: '/categories/basketball' },
      { name: 'Baseball', href: '/categories/baseball' },
      { name: 'Soccer', href: '/categories/soccer' },
      { name: 'Tennis', href: '/categories/tennis' }
    ],
    'Resources': [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Advertise', href: '/advertise' },
      { name: 'Careers', href: '/careers' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-400', bgColor: 'hover:bg-blue-500' },
    { icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), href: '#', color: 'hover:text-black', bgColor: 'hover:bg-black' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400', bgColor: 'hover:bg-pink-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-400', bgColor: 'hover:bg-red-500' }
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white overflow-hidden transition-colors duration-300">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold font-fraunces mb-4"
            >
              Stay Ahead of the Game
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-blue-100 text-lg mb-8 font-inter"
            >
              Get the latest sports news, analysis, and exclusive content delivered straight to your inbox.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row max-w-md mx-auto gap-4"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30 pr-12"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                <span>Subscribe Now</span>
              </motion.button>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-blue-200 text-sm mt-4"
            >
              Join 50,000+ sports fans who trust Kick it with Fab for their daily sports fix.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 md:grid-cols-2 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-6">
              <motion.h2
                className="text-3xl font-bold font-fraunces bg-gradient-to-r from-blue-400 via-orange-400 to-green-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Kick it with Fab
              </motion.h2>
              <p className="text-gray-400 mt-2 font-inter">Your Ultimate Sports Destination</p>
            </div>
            
            <motion.p
              className="text-gray-300 mb-6 leading-relaxed font-inter"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Kick it with Fab is your premier source for comprehensive sports coverage, delivering the latest news, 
              in-depth analysis, and exclusive interviews from the world of athletics. We're passionate about 
              bringing you closer to the games you love.
            </motion.p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {[
                { icon: Mail, text: 'fabianlouis99@gmail.com' },
                { icon: Phone, text: '+254 718 112 530' },
                { icon: MapPin, text: 'Nairobi, Kenya' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <item.icon size={18} className="text-blue-400" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:bg-gray-700 transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    backgroundColor: social.bgColor.includes('blue') ? '#3b82f6' : 
                                   social.bgColor.includes('pink') ? '#ec4899' : 
                                   social.bgColor.includes('red') ? '#ef4444' : '#3b82f6'
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div key={category} variants={itemVariants}>
              <motion.h3
                className="text-lg font-bold font-fraunces text-white mb-6 relative"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                {category}
                <motion.span
                  className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                />
              </motion.h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: linkIndex * 0.1 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-200 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      />
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="flex items-center space-x-6 text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span>© {currentYear} Kick it with Fab. All rights reserved.</span>
              <div className="hidden md:flex items-center space-x-4">
                {['Privacy', 'Terms', 'Cookies'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-4 text-gray-400 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>Made with ❤️ for Sports Fans</span>
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Live Updates</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default AnimatedFooter;