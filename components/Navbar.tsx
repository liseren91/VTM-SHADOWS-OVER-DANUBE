import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Globe, Terminal, Menu, X } from 'lucide-react';
import { TRANSLATIONS } from '../translations';

interface NavbarProps {
  lang: Language;
  currentHash: string;
  onToggleLanguage: () => void;
  onOpenSchreckNet: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  lang, 
  currentHash, 
  onToggleLanguage, 
  onOpenSchreckNet 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const content = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when hash changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentHash]);

  const isActive = (href: string) => {
    if (href === '#') return currentHash === '';
    return currentHash === href.replace('#', '');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${
      isScrolled || isMenuOpen ? 'bg-black/95 border-white/10 shadow-lg' : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#"
          onClick={(e) => handleNavClick(e, '')}
          className="font-serif text-2xl text-blood-red font-bold tracking-widest cursor-pointer z-50 flex items-center gap-2"
        >
          <span className="hidden sm:inline">VTM:</span> 
          <span className="text-white text-base font-normal tracking-normal sm:ml-2">
            SHADOWS OVER DANUBE
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 items-center">
          {content.nav.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-blood-red ${
                isActive(item.href) ? 'text-blood-red font-bold' : 'text-gray-400'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
           <button
             onClick={onToggleLanguage}
             className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs font-mono border border-gray-800 px-3 py-1.5 rounded hover:bg-white/5"
             aria-label="Toggle Language"
           >
             <Globe className="w-3 h-3" />
             <span>{lang === 'en' ? 'RU' : 'EN'}</span>
           </button>
          
          <button 
            onClick={onOpenSchreckNet}
            className="flex items-center gap-2 border border-green-900 text-green-700 px-4 py-1.5 hover:bg-green-900/20 hover:text-green-500 transition-all font-mono text-xs rounded-sm"
            aria-label="Open Terminal"
          >
            <Terminal className="w-4 h-4" />
            <span>{content.schrecknet.button}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gray-300 hover:text-white z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col items-center gap-8">
          {content.nav.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl font-serif text-white hover:text-blood-red transition-colors tracking-widest"
            >
              {item.label}
            </a>
          ))}
          
          <div className="w-12 h-px bg-white/20 my-4" />

          <div className="flex gap-6">
            <button
               onClick={() => { onToggleLanguage(); setIsMenuOpen(false); }}
               className="flex items-center gap-2 text-gray-400 text-lg"
             >
               <Globe className="w-5 h-5" />
               <span>{lang === 'en' ? 'RU' : 'EN'}</span>
             </button>
             
             <button 
              onClick={() => { onOpenSchreckNet(); setIsMenuOpen(false); }}
              className="flex items-center gap-2 text-green-700 text-lg font-mono"
            >
              <Terminal className="w-5 h-5" />
              <span>NET</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;