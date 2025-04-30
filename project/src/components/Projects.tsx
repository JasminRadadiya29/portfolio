import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  longDescription: string;
  features: string[];
  demoLink?: string;
  repoLink?: string;
  image?: string;
};

type ProjectsProps = {
  projects: Project[];
  onProjectClick: (project: Project) => void;
};

const Projects: React.FC<ProjectsProps> = ({ projects, onProjectClick }) => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Click on any project to see more details
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layoutId={`project-container-${project.id}`}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer transform hover:-translate-y-1"
              onClick={() => onProjectClick(project)}
            >
              <div className="h-48 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 dark:from-primary-700/20 dark:to-secondary-700/20 flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-4">
                    <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <motion.h3 
                  layoutId={`title-${project.id}`}
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  layoutId={`description-${project.id}`}
                  className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  layoutId={`technologies-${project.id}`}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </motion.div>
                
                <motion.div 
                  layoutId={`links-${project.id}`}
                  className="flex justify-between items-center"
                >
                  <span className="text-sm text-primary-600 dark:text-primary-400">
                    Click to view details
                  </span>
                  
                  <div className="flex space-x-2">
                    {project.repoLink && (
                      <a 
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;