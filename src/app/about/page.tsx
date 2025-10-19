import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Neurozic Software Solutions | Leading Technology Company in Bengaluru',
  description: 'Learn about Neurozic Software Solutions Pvt. Ltd - a leading technology company in Bengaluru providing innovative software solutions, web development, AI/ML, cloud services, and digital transformation.',
  keywords: 'Neurozic Software Solutions, about us, technology company Bengaluru, software development company, web development, AI ML services, cloud solutions, digital transformation, IT consulting',
  authors: [{ name: 'Neurozic Software Solutions' }],
  creator: 'Neurozic Software Solutions Pvt. Ltd',
  publisher: 'Neurozic Software Solutions',
  robots: 'index, follow',
  openGraph: {
    title: 'About Neurozic Software Solutions - Leading Technology Company',
    description: 'Discover our story, values, and team at Neurozic Software Solutions. We specialize in software development, AI/ML, cloud solutions, and digital transformation services.',
    url: 'https://neurozic.com/about',
    siteName: 'Neurozic Software Solutions',
    images: [
      {
        url: '/company-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Neurozic Software Solutions - About Us',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Neurozic Software Solutions - Leading Technology Company',
    description: 'Learn about our passionate team and innovative technology solutions at Neurozic Software Solutions Pvt. Ltd.',
    images: ['/company-logo.jpeg'],
  },
  alternates: {
    canonical: 'https://neurozic.com/about',
  },
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-700 bg-clip-text text-transparent mb-6 animate-fade-in-up">
                About <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Neurozic Software Solutions</span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              We&apos;re a team of passionate technologists dedicated to transforming 
              businesses through innovative software solutions and digital excellence.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-indigo-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, Neurozic Software Solutions Pvt. Ltd emerged from a simple vision: to bridge the gap 
                between innovative technology and practical business solutions. What started 
                as a small team of developers has grown into a comprehensive technology 
                consultancy serving clients worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that technology should empower businesses, not complicate them. 
                That&apos;s why we focus on creating intuitive, scalable solutions that drive 
                real results for our clients.
              </p>
              <p className="text-lg text-gray-600">
                Today, we&apos;re proud to have helped over 200 companies transform their 
                digital presence and achieve their business goals through cutting-edge 
                technology solutions.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl h-96 flex flex-col items-center justify-center border-2 border-white shadow-xl overflow-hidden">
                <div className="text-center p-8 w-full">
                  {/* Company Logo */}
                  <div className="w-full h-64 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src="/company-logo.jpeg" 
                      alt="Neurozic Software Solutions Logo" 
                      className="max-w-full max-h-full object-contain filter brightness-110"
                    />
                  </div>
                  <p className="text-lg text-blue-400 font-medium italic tracking-wide">Empowering Ideas Through Technology...</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-indigo-400 rounded-full animate-pulse animation-delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-700 bg-clip-text text-transparent mb-6">
              Our Values
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="group text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">Passion</h3>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re passionate about technology and committed to delivering excellence in every project we undertake.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4" style={{animationDelay: '0.2s'}}>
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards in code quality, testing, and project delivery for lasting results.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4" style={{animationDelay: '0.4s'}}>
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We work closely with our clients as partners to understand and achieve their strategic goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our skilled professionals driving excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group text-center p-6">
              <div className="relative mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-blue-600 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div className="text-xs text-blue-600 font-medium">CEO</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 font-medium mb-3">CEO & Founder</p>
              <p className="text-gray-600">
                15+ years of experience in technology leadership and business strategy.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="group text-center p-6">
              <div className="relative mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative w-32 h-32 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-purple-600 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div className="text-xs text-purple-600 font-medium">CTO</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Chen</h3>
              <p className="text-purple-600 font-medium mb-3">CTO</p>
              <p className="text-gray-600">
                Expert in cloud architecture and modern web technologies with 12+ years experience.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="group text-center p-6">
              <div className="relative mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative w-32 h-32 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-indigo-600 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div className="text-xs text-indigo-600 font-medium">Design</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emily Rodriguez</h3>
              <p className="text-indigo-600 font-medium mb-3">Lead Designer</p>
              <p className="text-gray-600">
                Creative visionary with expertise in UX/UI design and user-centered solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}