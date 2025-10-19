'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Quick action buttons */}
      <div className={`mb-2 space-y-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {/* Contact button */}
        <Link 
          href="/contact"
          className="group flex items-center bg-white hover:bg-blue-50 rounded-full shadow-lg hover:shadow-xl p-3 transition-all duration-300 hover-lift"
        >
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-700 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-gray-700 font-medium pr-4 group-hover:text-blue-600 transition-colors">Contact Us</span>
        </Link>

        {/* Services button */}
        <Link 
          href="/services"
          className="group flex items-center bg-white hover:bg-purple-50 rounded-full shadow-lg hover:shadow-xl p-3 transition-all duration-300 hover-lift"
        >
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-3 group-hover:bg-purple-700 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <span className="text-gray-700 font-medium pr-4 group-hover:text-purple-600 transition-colors">Our Services</span>
        </Link>

        {/* About button */}
        <Link 
          href="/about"
          className="group flex items-center bg-white hover:bg-indigo-50 rounded-full shadow-lg hover:shadow-xl p-3 transition-all duration-300 hover-lift"
        >
          <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mr-3 group-hover:bg-indigo-700 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-gray-700 font-medium pr-4 group-hover:text-indigo-600 transition-colors">About Us</span>
        </Link>
      </div>

      {/* Main FAB */}
      <button
        onClick={toggleMenu}
        className={`w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover-lift hover-glow ${isOpen ? 'rotate-45' : ''}`}
        aria-label="Quick actions menu"
      >
        <svg className="w-8 h-8 text-white transform translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  );
}