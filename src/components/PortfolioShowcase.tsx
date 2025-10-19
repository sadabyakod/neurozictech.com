'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern e-commerce solution with AI-powered recommendations',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure banking application with biometric authentication',
    image: '/api/placeholder/400/300',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50'
  },
  {
    id: 3,
    title: 'Cloud Analytics Dashboard',
    category: 'Cloud Solutions',
    description: 'Real-time data analytics and business intelligence platform',
    image: '/api/placeholder/400/300',
    technologies: ['Vue.js', 'AWS', 'Python', 'PostgreSQL'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    id: 4,
    title: 'AI Chatbot Integration',
    category: 'AI/ML',
    description: 'Intelligent customer service automation system',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'TensorFlow', 'NLP', 'Docker'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50'
  },
  {
    id: 5,
    title: 'Healthcare Management System',
    category: 'Enterprise Software',
    description: 'Comprehensive healthcare management and patient tracking',
    image: '/api/placeholder/400/300',
    technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL'],
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'from-indigo-50 to-purple-50'
  },
  {
    id: 6,
    title: 'IoT Device Controller',
    category: 'IoT Solutions',
    description: 'Smart device management and monitoring platform',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'MQTT', 'InfluxDB', 'Grafana'],
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'from-teal-50 to-cyan-50'
  }
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Cloud Solutions', 'AI/ML', 'Enterprise Software', 'IoT Solutions'];

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Portfolio</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Showcasing our expertise through innovative solutions that drive business success
            </p>
          </div>
        </AnimateOnScroll>

        {/* Category Filter */}
        <AnimateOnScroll delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105
                  ${activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-blue-100 hover:bg-white/20 backdrop-blur-sm'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <AnimateOnScroll key={item.id} delay={index * 100}>
              <div
                className={`
                  group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden 
                  hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2
                  ${hoveredItem === item.id ? 'scale-105 shadow-2xl shadow-blue-500/25' : ''}
                `}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-80
                  `}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`
                      w-20 h-20 rounded-full bg-gradient-to-br ${item.color} 
                      flex items-center justify-center text-white text-2xl font-bold
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      {item.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category badge */}
                  <div className={`
                    inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3
                    bg-gradient-to-r ${item.color} text-white
                  `}>
                    {item.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-100 mb-4 group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/20 rounded-md text-xs text-blue-100 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className={`
                    w-full py-2 rounded-lg font-semibold text-white
                    bg-gradient-to-r ${item.color} hover:shadow-lg hover:shadow-blue-500/25
                    transform transition-all duration-300 group-hover:scale-105
                    opacity-0 group-hover:opacity-100
                  `}>
                    View Project
                  </button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                <div className="absolute bottom-20 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{animationDelay: '0.5s'}}></div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* View All Projects Button */}
        <AnimateOnScroll delay={600}>
          <div className="text-center mt-12">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
              <span className="relative z-10">View All Projects</span>
              <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}