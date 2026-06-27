'use client';
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="bg-[#0B63CE] text-white p-4 rounded-full shadow-lg hover:bg-[#084A99] hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center group cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="group-hover:animate-bounce" />
      </button>
    </div>
  );
};

export default ScrollToTop;
