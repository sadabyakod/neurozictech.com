'use client';

import { useEffect, useState, useRef } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
  suffix?: string;
  className?: string;
}

function Counter({ end, duration = 2000, label, suffix = '', className = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-blue-100 text-lg">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Industry Leaders</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our track record speaks for itself. Here&apos;s what we&apos;ve achieved together with our clients.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimateOnScroll delay={200}>
            <Counter end={150} label="Projects Completed" suffix="+" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <Counter end={50} label="Happy Clients" suffix="+" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={600}>
            <Counter end={5} label="Years Experience" suffix="+" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={800}>
            <Counter end={99} label="Success Rate" suffix="%" />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}