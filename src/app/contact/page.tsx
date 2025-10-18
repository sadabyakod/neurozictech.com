import AnimateOnScroll from '@/components/AnimateOnScroll';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us - Get in Touch with Neurozic Software Solutions | Bengaluru',
  description: 'Contact Neurozic Software Solutions for your IT needs. Located in Bengaluru with expert team ready to help. Email: techinfo@neurozic.com, Mobile: +91 96322 77455. Free consultation available.',
  keywords: 'contact Neurozic, Bengaluru IT company contact, software development consultation, tech support, custom software quote, IT services contact, mobile +91 96322 77455',
  openGraph: {
    title: 'Contact Neurozic Software Solutions - Expert IT Services in Bengaluru',
    description: 'Get in touch with our expert team for custom software development, web applications, and IT solutions. Located in Bengaluru, India.',
    url: 'https://neurozic.com/contact',
    siteName: 'Neurozic Software Solutions',
    images: [
      {
        url: '/company-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Contact Neurozic Software Solutions',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Neurozic Software Solutions - Expert IT Services',
    description: 'Get in touch for custom software development and IT solutions. Expert team in Bengaluru. Email: techinfo@neurozic.com',
    images: ['/company-logo.jpeg'],
  },
  alternates: {
    canonical: 'https://neurozic.com/contact',
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bengaluru',
    'geo.position': '12.9716;77.5946',
    'ICBM': '12.9716, 77.5946',
  },
};

export default function Contact() {
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
            <AnimateOnScroll>
              <div className="inline-block mb-8">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-700 bg-clip-text text-transparent mb-6">
                  Contact <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Us</span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business with innovative technology solutions? 
                Let&apos;s start the conversation and build something amazing together.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimateOnScroll>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Have a project in mind? We&apos;d love to hear about it. Send us a message 
                  and we&apos;ll respond within 24 hours.
                </p>

                <ContactForm />
                  
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Or email us directly at{' '}
                    <a href="mailto:techinfo@neurozic.com" className="text-blue-600 hover:text-blue-700 font-medium hover-lift interactive focus-visible">
                      techinfo@neurozic.com
                    </a>
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Contact Information */}
            <AnimateOnScroll delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    We&apos;re here to help you succeed. Reach out through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover-lift gpu-accelerated">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                      <div className="space-y-1">
                        <p className="text-gray-600">
                          Technical Inquiries:{' '}
                          <a href="mailto:techinfo@neurozic.com" className="text-blue-600 hover:text-blue-700 font-medium interactive focus-visible">
                            techinfo@neurozic.com
                          </a>
                        </p>
                        <p className="text-gray-600">
                          HR & Careers:{' '}
                          <a href="mailto:hr@neurozic.com" className="text-blue-600 hover:text-blue-700 font-medium interactive focus-visible">
                            hr@neurozic.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 hover-lift gpu-accelerated">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">
                        <a href="tel:+919632277455" className="text-green-600 hover:text-green-700 font-medium interactive focus-visible">
                          +91 96322 77455
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Available 24/7 for urgent matters</p>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 hover-lift gpu-accelerated">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Office</h4>
                      <p className="text-gray-600">
                        Neurozic Software Solutions Pvt. Ltd<br />
                        Bengaluru, Karnataka, India
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Available for in-person consultations</p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <a
                      href="mailto:techinfo@neurozic.com?subject=Project Inquiry&body=Hi, I'm interested in discussing a project with Neurozic Software Solutions."
                      className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 hover-lift interactive focus-visible"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Request Project Quote</span>
                    </a>
                    
                    <a
                      href="mailto:hr@neurozic.com?subject=Career Opportunity&body=Hi, I'm interested in career opportunities at Neurozic Software Solutions."
                      className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 hover-lift interactive focus-visible"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V6m8 0H8m0 0v-.5A1.5 1.5 0 016.5 4h3A1.5 1.5 0 0111 5.5V6m-3 0h3m-3 8h3m6 0h.01M9 16h.01" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Career Opportunities</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-shimmer">
              Ready to Start Your Project?
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join over 200+ satisfied clients who have transformed their businesses with our innovative solutions.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:techinfo@neurozic.com?subject=Project Discussion&body=Hi, I'd like to discuss a project with your team."
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 hover-lift hover-glow interactive focus-visible gpu-accelerated shadow-lg hover:shadow-xl"
              >
                Start a Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:+919632277455"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 hover-lift interactive focus-visible gpu-accelerated"
              >
                Call Us Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}