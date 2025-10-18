'use client';

import { useEffect } from 'react';

export default function ScrollAnimationOptimizer() {
  useEffect(() => {
    // Optimize scroll performance
    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';

    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      // Disable smooth scrolling for users who prefer reduced motion
      html.style.scrollBehavior = 'auto';
      
      // Add class to body to disable animations
      document.body.classList.add('reduce-motion');
    }

    // Cleanup
    return () => {
      html.style.scrollBehavior = '';
    };
  }, []);

  return null;
}