'use client';

import { useEffect, useRef } from 'react';

export default function ParallaxBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!backgroundRef.current) return;
      
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      
      backgroundRef.current.style.transform = `translateY(${parallax}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 w-full h-[120%] -z-10 opacity-30"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)
        `,
      }}
    >
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-gentle"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-gentle" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-gradient-to-br from-indigo-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-gentle" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-cyan-300 to-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-gentle" style={{animationDelay: '6s'}}></div>
    </div>
  );
}