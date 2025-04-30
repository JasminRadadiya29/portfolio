import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <motion.div 
            className="flex items-center mb-6 text-primary-600 dark:text-primary-400"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.7 }}
          >
            <Code size={32} />
          </motion.div>
          
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Jasmin Radadiya
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
            A passionate Computer Science student and web developer creating beautifully crafted digital experiences.
          </p>
          
          <div className="flex space-x-4 mb-8">
            <motion.a
              href="https://github.com/JasminRadadiya29"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/jasmin-radadiya2424/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:jasminradadiya29@gmail.com"
              className="h-10 w-10 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p>© {currentYear} Jasmin Radadiya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;