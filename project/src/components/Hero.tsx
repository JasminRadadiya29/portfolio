import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

type HeroProps = {
  scrollToSection: (sectionId: string) => void;
};

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/JasminRadadiya29" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/jasmin-radadiya2424/" },
    { icon: <Mail size={20} />, url: "mailto:jasminradadiya29@gmail.com" }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-secondary-50 to-accent-100 dark:from-primary-950 dark:via-secondary-900 dark:to-accent-900 opacity-30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.2'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            className="mb-6 inline-block"
            variants={item}
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-300">
              Web Developer
            </span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <span className="block">Hello, I'm</span>
            <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-400 dark:via-secondary-400 dark:to-accent-400 text-transparent bg-clip-text">
              Jasmin Radadiya
            </span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          >
            A passionate Computer Science student and web developer creating beautifully crafted digital experiences
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex justify-center space-x-4 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 dark:text-gray-300 dark:hover:text-primary-400 transition-colors shadow-sm"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div variants={item}>
            <button
              onClick={() => scrollToSection('about')}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium shadow-md hover:shadow-lg transition duration-300 inline-flex items-center mr-4"
            >
              Discover My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300 inline-flex items-center"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={24} className="text-gray-600 dark:text-gray-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;