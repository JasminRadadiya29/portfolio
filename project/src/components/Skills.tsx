import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  const categories = [
    {
      title: "Technologies",
      skills: ["HTML", "CSS", "SQL", "MERN Stack", "REST APIs", "Data Structures & Algorithms"]
    },
    {
      title: "Programming Languages",
      skills: ["C++", "C", "JavaScript", "Python"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js (basic)", "Express.js", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL", "PostGreSQL"]
    },
    {
      title: "Developer Tools",
      skills: ["VS Code", "GitHub", "Canva", "Postman", "MongoDB Compass"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem-Solving", "Teamwork/Collaboration", "Creativity", "Adaptability", "Communication"]
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300 border border-primary-100 dark:border-primary-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;