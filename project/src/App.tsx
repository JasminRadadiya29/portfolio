import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ProjectModal from './components/ProjectModal';

// Data
import { educationData, experienceData, projectsData } from './data';

// Hooks
import useScrollToSection from './hooks/useScrollToSection';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });
  
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollToSection } = useScrollToSection();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Set initial theme class on component mount
  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleProjectClick = (project : any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Background pattern */}
      <div className="fixed inset-0 z-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] bg-repeat opacity-50"></div>
      </div>

      <div className="relative z-10">
        <Navbar scrollToSection={scrollToSection} />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        
        <main>
          <section id="home">
            <Hero scrollToSection={scrollToSection} />
          </section>
          
          <section id="about" className="py-10">
            <About />
          </section>
          
          <section id="education" className="py-10 bg-gradient-to-r from-primary-50/30 via-secondary-50/20 to-accent-50/30 dark:from-primary-950/30 dark:via-secondary-950/20 dark:to-accent-950/30">
            <Timeline 
              title="Education" 
              data={educationData}
              icon="GraduationCap"
            />
          </section>
          
          <section id="experience" className="py-10">
            <Timeline 
              title="Professional Experience" 
              data={experienceData}
              icon="Briefcase"
            />
          </section>
          
          <section id="projects" className="py-10">
            <Projects projects={projectsData} onProjectClick={handleProjectClick} />
          </section>
          
          <section id="skills" className="py-10 bg-gradient-to-l from-primary-50/30 via-secondary-50/20 to-accent-50/30 dark:from-primary-950/30 dark:via-secondary-950/20 dark:to-accent-950/30">
            <Skills />
          </section>
          
          <section id="contact" className="py-10 bg-gradient-to-br from-primary-50/30 via-secondary-50/20 to-accent-50/30 dark:from-primary-950/30 dark:via-secondary-950/20 dark:to-accent-950/30">
            <Contact />
          </section>
        </main>
        
        <Footer />
        
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={closeModal} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;