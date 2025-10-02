import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowUp, Share2, Heart, Bookmark } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: ArrowUp, label: 'Back to Top', color: 'bg-blue-500' },
    { icon: Share2, label: 'Share', color: 'bg-green-500' },
    { icon: Heart, label: 'Like', color: 'bg-red-500' },
    { icon: Bookmark, label: 'Save', color: 'bg-purple-500' },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 space-y-3"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            {actions.map((action, index) => (
              <motion.button
                key={action.label}
                className={`w-12 h-12 ${action.color} text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={action.label === 'Back to Top' ? handleScrollToTop : undefined}
              >
                <action.icon size={20} />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Plus size={24} />
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;