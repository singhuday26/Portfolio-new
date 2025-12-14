import { useEffect } from 'react';

// Import assets so Vite can resolve them properly with hashed URLs
import heroBackground from '@/assets/hero-background.jpg';
import projectMedicare from '@/assets/project-medicare.png';
import projectEdusphere from '@/assets/project-edusphere.png';
import projectChurn from '@/assets/project-churn.png';
import projectWasteManagement from '@/assets/project-waste_management.png';

const criticalAssets = [
  heroBackground,
  projectMedicare,
  projectEdusphere,
  projectChurn,
  projectWasteManagement
];

// Prioritize above-the-fold assets
const priorityAssets = [
  heroBackground
];

export const usePreloader = () => {
  useEffect(() => {
    const preloadPriorityAssets = () => {
      // Preload critical above-the-fold assets immediately
      priorityAssets.forEach((asset) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = asset;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      });
    };

    const preloadSecondaryAssets = () => {
      // Preload other critical assets after a delay
      criticalAssets.filter(asset => !priorityAssets.includes(asset)).forEach((asset) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = asset;
        document.head.appendChild(link);
      });
    };

    // Immediate preload for hero background
    preloadPriorityAssets();
    
    // Delayed preload for other assets
    const timer = setTimeout(preloadSecondaryAssets, 200);
    return () => clearTimeout(timer);
  }, []);
};