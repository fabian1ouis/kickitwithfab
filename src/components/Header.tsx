import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Bell, Moon, Sun, ChevronDown, Home, Grid3x3 as Grid3X3, FileText, User, Phone, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Categories', href: '/categories', icon: Grid3X3 },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Admin', href: '/admin', icon: Shield }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header 
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}
    >
      {/* Breaking News Ticker */}
      <motion.div 
        className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 text-sm overflow-hidden ${
          isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'
        } transition-all duration-500`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center space-x-8"
            animate={{ x: [0, -100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <span className="flex items-center space-x-2 whitespace-nowrap">
              🔥 <span>LIVE: NFL Conference Championships - Chiefs vs Ravens, Lions vs 49ers!</span>
            </span>
            <span className="flex items-center space-x-2 whitespace-nowrap">
              🏀 <span>NBA All-Star Weekend: Wembanyama leads rookie showcase</span>
            </span>
            <span className="flex items-center space-x-2 whitespace-nowrap">
              ⚾ <span>MLB Spring Training: Ohtani's Dodgers debut approaches</span>
            </span>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <motion.div 
          className="flex items-center justify-between py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold font-fraunces bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent">
                Kick it with Fab
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block font-inter">
                Your Ultimate Sports Destination
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-all duration-200 group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Bar */}
            <motion.div 
              className="relative hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  isSearchFocused 
                    ? 'w-80 bg-white dark:bg-gray-800 shadow-lg' 
                    : 'w-64 bg-gray-100 dark:bg-gray-800'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type="text"
                  placeholder="Search sports news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-12 pr-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                />
                <motion.div
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  animate={{ 
                    rotate: searchQuery ? 360 : 0,
                    scale: isSearchFocused ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Search className="h-5 w-5 text-gray-400" />
                </motion.div>
                
                {/* Search Results Dropdown */}
                <AnimatePresence>
                  {isSearchFocused && searchQuery && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4"
                    >
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Search results for "{searchQuery}"
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Notifications */}
            <motion.button
              className="relative p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Bell size={20} />
              <motion.span
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                3
              </motion.span>
            </motion.button>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4 overflow-hidden"
            >
              {/* Mobile Search */}
              <motion.div
                variants={menuItemVariants}
                className="mb-4 md:hidden"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search sports news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </motion.div>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    variants={menuItemVariants}
                    href={item.href}
                    className="flex items-center space-x-3 py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                ))}
              </nav>

              {/* Mobile Actions */}
              <motion.div
                variants={menuItemVariants}
                className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">Theme</span>
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl transition-colors"
                >
                  {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                  <span className="text-sm">{isDarkMode ? 'Light' : 'Dark'}</span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;