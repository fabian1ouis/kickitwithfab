import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MorphingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const MorphingButton: React.FC<MorphingButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 text-white',
    success: 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      className={`${variants[variant]} ${sizes[size]} ${className} rounded-full font-semibold shadow-lg relative overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.6 }}
      />
      
      <motion.div
        className="relative z-10"
        animate={{
          y: isPressed ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.div>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/30 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isPressed ? 1 : 0,
          opacity: isPressed ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default MorphingButton;