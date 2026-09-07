import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const NAV_LINKS = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.resume', href: '#resume' },
  { key: 'nav.contact', href: '#contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-brown ${
      isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm py-2' : 'bg-cream py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center z-50">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-xl font-bold tracking-widest text-blue hover:text-red transition-colors">
              PORTFOLIO
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative px-1 py-2 text-sm font-bold transition-colors ${
                      isActive
                        ? 'text-blue'
                        : 'text-brown hover:text-red'
                    }`}
                  >
                    {t(link.key)}
                    {isActive && (
                      <motion.div 
                        layoutId="navIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-1 bg-yellow"
                      />
                    )}
                  </a>
                );
              })}
            </nav>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 border-2 border-brown rounded-xl text-sm font-bold text-brown hover:bg-yellow transition-colors shadow-[2px_2px_0px_rgba(98,63,27,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'TH' : 'EN'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden z-50">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 border-2 border-brown rounded-lg text-xs font-bold text-brown hover:bg-yellow transition-colors"
            >
              <Globe className="w-3 h-3" />
              {language === 'en' ? 'TH' : 'EN'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brown hover:text-red focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 w-full bg-cream/95 backdrop-blur-xl border-b border-brown pt-20"
          >
            <div className="px-4 pb-6 space-y-4 flex flex-col items-center">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`block px-4 py-3 text-2xl font-black tracking-widest relative transition-colors ${
                      isActive ? 'text-blue' : 'text-brown hover:text-red'
                    }`}
                  >
                    {t(link.key)}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/4 right-1/4 h-1.5 bg-yellow -z-10"></span>
                    )}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


