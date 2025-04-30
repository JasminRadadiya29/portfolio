import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

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

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    // Add event listener for escape key
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        layoutId={`project-container-${project.id}`}
        className="bg-white dark:bg-gray-800 w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        <div className="relative">
          <div className="h-40 md:h-56 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 dark:from-primary-600/40 dark:via-secondary-600/40 dark:to-accent-600/40 flex items-center justify-center">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <h2 className="text-3xl md:text-4xl font-bold text-white px-4 text-center">
                {project.title}
              </h2>
            )}
          </div>
          
          <button
            className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors backdrop-blur-sm"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="p-6 md:p-8 overflow-y-auto">
          <motion.h3 
            layoutId={`title-${project.id}`}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3"
          >
            {project.title}
          </motion.h3>
          
          <motion.div 
            layoutId={`technologies-${project.id}`}
            className="flex flex-wrap gap-2 mb-6"
          >
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          
          <motion.div layoutId={`description-${project.id}`} className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Overview</h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </motion.div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <motion.div 
            layoutId={`links-${project.id}`}
            className="flex flex-wrap gap-4"
          >
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium inline-flex items-center space-x-2 transition duration-300"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium inline-flex items-center space-x-2 transition duration-300"
              >
                <Github size={16} />
                <span>View Code</span>
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;