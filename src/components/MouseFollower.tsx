'use client';

import { useEffect, useRef } from 'react';

export default function MouseFollower() {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      
      currentX += dx * 0.1;
      currentY += dy * 0.1;

      if (follower) {
        follower.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="fixed w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-50 opacity-60 blur-sm mix-blend-multiply hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(147,51,234,0.4) 100%)',
      }}
    />
  );
}