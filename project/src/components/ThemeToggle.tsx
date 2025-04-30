import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

type ThemeToggleProps = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      className="fixed right-4 top-20 z-50 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md backdrop-blur-sm border border-gray-200 dark:border-gray-700"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-yellow-500" />
      ) : (
        <Moon size={18} className="text-primary-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;