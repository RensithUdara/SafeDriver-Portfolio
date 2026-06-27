'use client';
import React from 'react';
import NextImage from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen
}) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'domain', label: 'Domain' },
    { id: 'features', label: 'Features' },
    { id: 'showcase', label: 'Implementation' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'documents', label: 'Resources' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-300/70 bg-[#E5E7EB]">
      <div className="flex h-[74px] w-full items-center justify-between px-5 sm:px-7 lg:px-10">
        <a href="#home" className="flex items-center gap-3 cursor-pointer">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[18px] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.14)] ring-1 ring-white/80">
            <NextImage src="/safedriver-logo.png" alt="SafeDriver Logo" width={96} height={96} className="h-20 w-20 object-contain" priority />
          </div>
          <div className="leading-none">
            <span className="block text-2xl font-extrabold tracking-tight text-[#0B1220] sm:text-[26px]">SafeDriver</span>
            <span className="mt-2 hidden text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#0B63CE] sm:block">Smart Road Safety</span>
          </div>
        </a>

        <div className="hidden items-center gap-1 rounded-full bg-white px-2 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-full px-4 py-2.5 text-[13px] font-extrabold transition-all duration-300 cursor-pointer ${activeSection === link.id
                ? 'bg-[#0B63CE] text-white shadow-[0_8px_18px_rgba(11,99,206,0.28)]'
                : 'text-[#334155] hover:bg-[#EFF6FF] hover:text-[#0B63CE]'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0B63CE] shadow-[0_8px_24px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 cursor-pointer lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`absolute w-full overflow-hidden border-b border-slate-300/70 bg-[#E5E7EB] shadow-xl transition-all duration-300 lg:hidden ${isMenuOpen ? 'max-h-[720px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-6 px-5 py-6">
          <div className="grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-extrabold transition-colors cursor-pointer ${activeSection === link.id ? 'bg-[#0B63CE] text-white shadow-[0_8px_18px_rgba(11,99,206,0.22)]' : 'bg-white text-[#334155] shadow-sm'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
