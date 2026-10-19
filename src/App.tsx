import React, { useState, useCallback } from 'react';
import { PawjectsPortal } from './components/PawjectsPortal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const triggerHaptic = useCallback((intensity: 'light' | 'medium' = 'light') => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        if (intensity === 'light') navigator.vibrate(8);
        else if (intensity === 'medium') navigator.vibrate(16);
      } catch (_) {}
    }
  }, []);

  return (
    <div className="app-root">
      {/* Pawjects Collective Site */}
      <PawjectsPortal
        onSelectProject={(proj) => {
          triggerHaptic('light');
          setSelectedProject(proj);
        }}
        triggerHaptic={triggerHaptic}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => {
          triggerHaptic('light');
          setSelectedProject(null);
        }}
      />
    </div>
  );
};

export default App;
