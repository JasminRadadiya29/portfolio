import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

type TimelineItem = {
  title: string;
  organization: string;
  date: string;
  location: string;
  description: string[];
  achievements?: string[];
};

type TimelineProps = {
  title: string;
  data: TimelineItem[];
  icon: 'Briefcase' | 'GraduationCap';
};

const Timeline: React.FC<TimelineProps> = ({ title, data, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const renderIcon = () => {
    return icon === 'Briefcase' ? 
      <Briefcase size={20} /> : 
      <GraduationCap size={20} />;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
        </motion.div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-7 md:left-1/2 ml-px md:-ml-px top-5 h-[calc(100%-2.5rem)] w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Timeline items */}
          <div className="space-y-">
            {data.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 md:pr-7 md:pl-7 pl-7 mb-4 md:mb-0">
                  <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 ${
                    index % 2 === 0 ? 'md:text-right' : 'text-left'
                  }`}>
                    <span className="inline-block text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {item.organization}
                    </h4>
                    <span className="inline-block text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {item.location}
                    </span>
                    <div className="space-y-2">
                      {item.description.map((desc, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-gray-600 dark:text-gray-300">
                          {desc}
                        </div>
                      ))}
                    </div>
                    {item.achievements && (
                      <div className="mt-3 space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="bg-primary-50 dark:bg-primary-900/30 rounded-lg p-3 text-primary-700 dark:text-primary-300">
                            {achievement}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="md:flex md:flex-col md:items-center z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-lg">
                    {renderIcon()}
                  </div>
                </div>
                
                {/* <div className="flex-1 md:pl-10 md:pr-0 pr-0 pl-10 hidden md:block">aaaa</div> */}
                <div className="flex-1 md:pr-7 md:pl-7 pl-7 mb-4 md:mb-0"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;