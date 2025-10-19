'use client';

import AnimateOnScroll from './AnimateOnScroll';

const technologies = [
  {
    name: 'React',
    icon: '⚛️',
    description: 'Modern UI Development',
    color: 'from-blue-400 to-cyan-400'
  },
  {
    name: 'Next.js',
    icon: '▲',
    description: 'Full-Stack Framework',
    color: 'from-gray-700 to-gray-900'
  },
  {
    name: 'TypeScript',
    icon: '📘',
    description: 'Type-Safe Development',
    color: 'from-blue-600 to-blue-800'
  },
  {
    name: 'Node.js',
    icon: '🟢',
    description: 'Backend Development',
    color: 'from-green-500 to-green-700'
  },
  {
    name: 'Python',
    icon: '🐍',
    description: 'AI & Machine Learning',
    color: 'from-yellow-400 to-blue-500'
  },
  {
    name: 'AWS',
    icon: '☁️',
    description: 'Cloud Infrastructure',
    color: 'from-orange-400 to-orange-600'
  },
  {
    name: 'Docker',
    icon: '🐳',
    description: 'Containerization',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    description: 'NoSQL Database',
    color: 'from-green-400 to-green-600'
  }
];

export default function TechnologyShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full blur-3xl opacity-50 animate-float animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cutting-Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest and most powerful technologies to build scalable, secure, and high-performance solutions.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <AnimateOnScroll key={tech.name} delay={index * 100}>
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-gray-100 hover:border-blue-200 gpu-accelerated">
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:animate-bounce-gentle transition-all duration-300">
                    {tech.icon}
                  </div>
                  
                  {/* Technology name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-2xl"></div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Call to action */}
        <AnimateOnScroll delay={800}>
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">
              Want to see how these technologies can transform your business?
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 hover-lift hover-glow transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let&apos;s Discuss Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}