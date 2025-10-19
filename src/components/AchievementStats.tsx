'use client';

import { useState, useEffect } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import AnimatedCounter from './AnimatedCounter';

const achievementStats = [
  {
    number: 500,
    suffix: '+',
    title: 'Projects Delivered',
    description: 'Successful software solutions',
    icon: '🚀',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: 150,
    suffix: '+',
    title: 'Happy Clients',
    description: 'Satisfied customers worldwide',
    icon: '😊',
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: 98,
    suffix: '%',
    title: 'Success Rate',
    description: 'Project completion rate',
    icon: '🎯',
    color: 'from-green-500 to-emerald-500'
  },
  {
    number: 50,
    suffix: '+',
    title: 'Team Members',
    description: 'Expert developers & designers',
    icon: '👥',
    color: 'from-orange-500 to-red-500'
  },
  {
    number: 7,
    suffix: '+',
    title: 'Years Experience',
    description: 'In software development',
    icon: '⭐',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    number: 24,
    suffix: '/7',
    title: 'Support Available',
    description: 'Round-the-clock assistance',
    icon: '🔧',
    color: 'from-teal-500 to-cyan-500'
  }
];

export default function AchievementStats() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence and innovation in software development
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementStats.map((stat, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <div
                className={`
                  relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl 
                  transition-all duration-500 transform hover:-translate-y-2 cursor-pointer
                  border border-white/20 group overflow-hidden
                  ${hoveredIndex === index ? 'scale-105 shadow-3xl' : ''}
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated background gradient */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 
                  transition-opacity duration-500
                `}></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>

                  {/* Number */}
                  <div className={`
                    text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2
                    transform group-hover:scale-110 transition-transform duration-300
                  `}>
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      duration={2500}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">
                    {stat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                    {stat.description}
                  </p>

                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Call to action */}
        <AnimateOnScroll delay={800}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
              <div className="px-8 py-3 bg-white rounded-full">
                <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Ready to be our next success story?
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}