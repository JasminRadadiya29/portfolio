import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileDown } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const handleDownloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/Jasmin_Radadiya_ Resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            variants={itemVariants}
            className="md:w-1/3"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 h-65 md:h-85 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/jasmin.png"
                  alt="Developer workspace"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="md:w-2/3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Computer Science Student & Web Developer
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm a passionate Computer Science Engineering student at Charotar University of Science and Technology, 
                  with a strong focus on web development and programming.
                </p>
                <p>
                  With experience in building full-stack web applications using React.js, Next.js, and the MERN stack, 
                  I enjoy creating elegant solutions to complex problems, developing user-friendly interfaces, and writing clean, 
                  efficient code.
                </p>
                <p>
                  My academic excellence (9.5 CGPA) reflects my dedication to continuous learning and mastering new technologies. 
                  I'm enthusiastic about contributing to innovative projects and growing as a professional developer.
                </p>
              </div>
              
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleDownloadResume}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <FileDown size={18} className="mr-2" />
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
