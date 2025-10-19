import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ParticleBackground from '@/components/ParticleBackground';
import Typewriter from '@/components/Typewriter';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TechnologyShowcase from '@/components/TechnologyShowcase';

export const metadata = {
  title: 'Neurozic Software Solutions Private Limited - Leading IT Services & Software Development in Bengaluru',
  description: 'Premier software development company in Bengaluru offering custom web applications, mobile apps, cloud solutions, AI/ML integration, and enterprise software. Expert team delivering innovative digital solutions.',
  keywords: 'software development, web development, mobile apps, cloud solutions, AI integration, machine learning, Neurozic, Bengaluru IT company, custom software, enterprise solutions, DevOps, digital transformation',
  openGraph: {
    title: 'Neurozic Software Solutions Private Limited - Premier IT Services Company in Bengaluru',
    description: 'Transform your business with cutting-edge software solutions. Expert development team in Bengaluru delivering innovative web applications, mobile apps, and cloud solutions.',
    url: 'https://neurozic.com',
    siteName: 'Neurozic Software Solutions Private Limited',
    images: [
      {
        url: '/company-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Neurozic Software Solutions Private Limited - Leading IT Services Company',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neurozic Software Solutions Private Limited - Premier IT Services in Bengaluru',
    description: 'Leading software development company in Bengaluru. Custom web applications, mobile apps, cloud solutions, and AI integration. Contact: techinfo@neurozic.com',
    images: ['/company-logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://neurozic.com',
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bengaluru',
    'geo.position': '12.9716;77.5946',
    'ICBM': '12.9716, 77.5946',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
          {/* Additional smaller floating elements */}
          <div className="absolute top-20 right-1/4 w-24 h-24 bg-cyan-200 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-float-gentle" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-float-gentle" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/3 right-16 w-16 h-16 bg-yellow-200 rounded-full mix-blend-multiply filter blur-md opacity-40 animate-float" style={{animationDelay: '5s'}}></div>
          <div className="absolute bottom-1/3 left-16 w-20 h-20 bg-green-200 rounded-full mix-blend-multiply filter blur-md opacity-45 animate-float-gentle" style={{animationDelay: '6s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <AnimateOnScroll delay={200}>
              <div className="flex items-center justify-center mb-8">
                <div className="relative mr-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur-lg opacity-75 animate-pulse-glow"></div>
                  <Image 
                    src="/company-logo.jpeg" 
                    alt="Neurozic Software Solutions Private Limited Logo" 
                    width={120} 
                    height={120} 
                    className="relative rounded-lg shadow-2xl hover-lift gpu-accelerated interactive"
                    priority
                  />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient-shift leading-tight">
                  Neurozic Software
                  <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text">Solutions Private Limited</span>
                </h1>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="text-2xl md:text-4xl text-gray-700 mb-8 font-light">
                We specialize in{' '}
                <span className="font-semibold text-blue-600">
                  <Typewriter 
                    words={[
                      'AI Integration',
                      'Cloud Solutions', 
                      'Web Development',
                      'Mobile Apps',
                      'DevOps Automation',
                      'Digital Transformation'
                    ]}
                    typeSpeed={80}
                    deleteSpeed={40}
                    delayBetweenWords={2500}
                  />
                </span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={600}>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business through cutting-edge software development, 
                AI integration, and digital innovation. Partner with us to accelerate 
                your digital transformation journey with results that exceed expectations.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={800}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 hover-lift hover-glow interactive focus-visible gpu-accelerated shadow-2xl hover:shadow-3xl transform transition-all duration-300"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  href="/services" 
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-blue-600 bg-white/90 backdrop-blur-sm border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white hover-lift interactive focus-visible gpu-accelerated shadow-lg hover:shadow-xl transform transition-all duration-300"
                >
                  <span className="relative z-10">Explore Services</span>
                  <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Scroll indicator */}
            <AnimateOnScroll delay={1000}>
              <div className="mt-16 flex justify-center">
                <div className="animate-bounce">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{animationDelay: '5s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimateOnScroll>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient-shift">Neurozic Software Solutions Private Limited?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through expertise, innovation, and dedication to your success.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <AnimateOnScroll delay={0}>
              <div className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-gray-100 hover:border-blue-200 gpu-accelerated animate-float-gentle" style={{animationDelay: '0.5s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-gentle">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Fast & Reliable</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lightning-fast development with reliable, scalable solutions that grow with your business.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Feature 2 */}
            <AnimateOnScroll delay={200}>
              <div className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-gray-100 hover:border-purple-200 gpu-accelerated animate-float-gentle" style={{animationDelay: '1.5s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-gentle">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Innovative Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cutting-edge technology and creative problem-solving to give you a competitive advantage.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Feature 3 */}
            <AnimateOnScroll delay={400}>
              <div className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-gray-100 hover:border-indigo-200 gpu-accelerated animate-float-gentle" style={{animationDelay: '2.5s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-gentle">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">Expert Team</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dedicated professionals with years of experience in modern web technologies and best practices.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          {/* Additional floating elements */}
          <div className="absolute top-16 left-20 w-28 h-28 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 right-16 w-36 h-36 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{animationDelay: '6s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient-shift">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions tailored to your business needs.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <AnimateOnScroll delay={0}>
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift border border-white/20 gpu-accelerated animate-float-gentle" style={{animationDelay: '1s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-6 group-hover:animate-bounce-gentle">☁️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Cloud & DevOps Solutions</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Scalable cloud infrastructure, migration services, and DevOps automation for modern businesses.
                  </p>
                  <Link href="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:translate-x-2 transition-all duration-300 interactive focus-visible">
                    Learn More 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Service 2 */}
            <AnimateOnScroll delay={200}>
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift border border-white/20 gpu-accelerated animate-float-gentle" style={{animationDelay: '2s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-6 group-hover:animate-bounce-gentle">🤖</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">AI / Machine Learning Integration</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Intelligent automation and AI-powered solutions to enhance your business capabilities.
                  </p>
                  <Link href="/services" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 group-hover:translate-x-2 transition-all duration-300 interactive focus-visible">
                    Learn More 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Service 3 */}
            <AnimateOnScroll delay={400}>
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift border border-white/20 gpu-accelerated animate-float-gentle" style={{animationDelay: '3s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-6 group-hover:animate-bounce-gentle">🌐</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">Web & Mobile App Development</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Modern, responsive web applications and mobile apps built with cutting-edge technologies.
                  </p>
                  <Link href="/services" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 group-hover:translate-x-2 transition-all duration-300 interactive focus-visible">
                    Learn More 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatsSection />

      {/* Technology Showcase */}
      <TechnologyShowcase />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          {/* Additional floating elements */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-white/8 rounded-full blur-2xl animate-float-gentle" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/6 rounded-full blur-2xl animate-float-gentle" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-16 left-20 w-32 h-32 bg-white/12 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-16 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float-gentle" style={{animationDelay: '5s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-shimmer">
              Ready to Transform Your Business?
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s discuss how we can help you achieve your technology goals and drive growth through innovative solutions.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-100 hover-lift hover-glow interactive focus-visible gpu-accelerated shadow-2xl hover:shadow-3xl"
            >
              <span className="relative z-10">Contact Us Today</span>
              <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
