'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function AnimateOnScroll({ 
  children, 
  className = '', 
  delay = 0, 
  threshold = 0.1 
}: AnimateOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, threshold]);

  return (
    <div 
      ref={elementRef} 
      className={`scroll-animate ${className}`}
    >
      {children}
    </div>
  );
}