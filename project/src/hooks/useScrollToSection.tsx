import { useCallback } from 'react';

const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Calculate header height (assuming fixed header)
      const headerHeight = 70; // Approximate header height
      
      const sectionPosition = section.offsetTop;
      const offsetPosition = sectionPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);
  
  return { scrollToSection };
};

export default useScrollToSection;