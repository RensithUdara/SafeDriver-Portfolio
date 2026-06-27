'use client';
import React, { useState, useEffect } from 'react';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Domain from './components/Domain';
import Features from './components/Features';
import MobileShowcase from './components/MobileShowcase';
import Technologies from './components/Technologies';
import Documents from './components/Documents';
import Team from './components/Team';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function SafeDriverPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent the browser from restoring the previous scroll position on reload/revisit
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Force scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sections = ['home', 'domain', 'features', 'showcase', 'technologies', 'documents', 'team', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B1220] selection:bg-[#0B63CE] selection:text-white overflow-x-hidden font-sans">
      <Navbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        <Hero />
        <Domain />
        <Features />
        <MobileShowcase />
        <Technologies />
        <Documents />
        <Team />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
