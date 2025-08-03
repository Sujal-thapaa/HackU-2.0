import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Previous', href: '#previous' },
    { name: 'Why Join', href: '#why-join' },
    { name: 'Judges', href: '#judges' },
    { name: 'More Info', href: '#requirements' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const COLORS = {
    PRIMARY_BG: '#0E0B16',      // Charcoal Night (Main background, nav, footers)
  PRIMARY_ACCENT: '#6C2BD9',   // Royal Purple (Buttons, highlights, active states)
  SECONDARY_ACCENT: '#4A2A80', // A darker, more muted purple
  SURFACE: '#1A162B',         // Darker plum for cards
  TEXT_MAIN: '#BDBDBD',       // Soft Gray for main text
  TEXT_MUTED: '#BDBDBD',      // Soft Gray for muted text
  LINK_HOVER: '#6C2BD9', 
  };

  return (
    <>
      {/* Global Typography Styles */}
      <style>
  {`
    @import url('https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap');
    @import url('https://api.fontshare.com/v2/css?f[]=general-sans@500,600,400,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap');

    :root {
      --font-heading: 'Clash Display', sans-serif;
      --font-body: 'General Sans', sans-serif;
      --font-code: 'IBM Plex Mono', monospace;
    }

    body {
      font-family: var(--font-body);
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-heading);
    }

    code, pre {
      font-family: var(--font-code);
    }
  `}
</style>

      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md border-b' : 'bg-transparent'
      }`} style={{ backgroundColor: scrolled ? COLORS.SURFACE : 'transparent', borderColor: COLORS.SURFACE }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center">
                <img 
                  src="images/logo.webp" 
                  alt="United Hacks V6" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    style={{
                      color: COLORS.TEXT_MUTED,
                      '--hover-color': COLORS.PRIMARY_ACCENT,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = COLORS.PRIMARY_ACCENT}
                    onMouseLeave={(e) => e.currentTarget.style.color = COLORS.TEXT_MUTED}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-white hover:text-white focus:outline-none"
                style={{ backgroundColor: isOpen ? COLORS.SURFACE : 'transparent' }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden" style={{ backgroundColor: COLORS.SURFACE }}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  style={{ color: COLORS.TEXT_MUTED }}
                  onMouseEnter={(e) => e.currentTarget.style.color = COLORS.PRIMARY_ACCENT}
                  onMouseLeave={(e) => e.currentTarget.style.color = COLORS.TEXT_MUTED}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
