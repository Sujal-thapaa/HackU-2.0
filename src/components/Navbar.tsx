import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [logoLoaded, setLogoLoaded] = useState(false);
  const navRef = useRef<HTMLNavElement>(null);

  const COLORS = {
    PRIMARY_BG: '#0E0B16',
    PRIMARY_ACCENT: '#6C2BD9',
    SECONDARY_ACCENT: '#4A2A80',
    TEXT_MAIN: '#E0E0E0',
    TEXT_MUTED: '#BDBDBD',
    LINK_HOVER: '#B799FF',
    GRADIENT_START: '#6C2BD9',
    GRADIENT_END: '#B799FF',
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Previous', href: '#previous' },
    { name: 'Why Join', href: '#why-join' },
    { name: 'Judges & Sponsors', href: '#judges' },
    { name: 'More Info', href: '#requirements' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Logo entrance animation trigger
    const timer = setTimeout(() => setLogoLoaded(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNavClick(href);
    }
  };

  return (
    <>
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

          /* Mobile-first responsive design */
          * {
            box-sizing: border-box;
          }

          /* Prevent horizontal scroll */
          .navbar-container {
            max-width: 100%;
            overflow: hidden;
          }

          /* Logo entrance animation */
          .logo-container {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .logo-container.loaded {
            opacity: 1;
            transform: none;
          }

          /* Enhanced nav link animations */
          .nav-link {
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 8px;
          }

          .nav-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(183, 153, 255, 0.1), transparent);
            transition: left 0.5s ease-in-out;
          }

          .nav-link:hover::before {
            left: 100%;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, ${COLORS.GRADIENT_START}, ${COLORS.GRADIENT_END});
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .nav-link:hover {
            transform: translateY(-2px) scale(1.02);
            color: ${COLORS.LINK_HOVER} !important;
            text-shadow: 0 0 10px rgba(183, 153, 255, 0.3);
          }

          .nav-link:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }

          .nav-link.active {
            color: ${COLORS.LINK_HOVER} !important;
            background: rgba(108, 43, 217, 0.1);
            backdrop-filter: blur(10px);
          }

          .nav-link.active::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }

          /* Responsive flame button */
          .flame-button {
            position: relative;
            background: linear-gradient(45deg, #6a0dad, #8e44ad, #a084ca, #6a0dad);
            background-size: 300% 300%;
            animation: flameGradient 5s ease-in-out infinite, flamePulse 3s ease-in-out infinite;
            box-shadow:
              0 0 4px rgba(138, 43, 226, 0.25),
              0 0 8px rgba(155, 89, 182, 0.2),
              0 0 10px rgba(200, 162, 255, 0.15),
              inset 0 0 4px rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(200, 162, 255, 0.3);
            text-shadow: 0 0 2px rgba(255, 255, 255, 0.2), 0 0 4px rgba(200, 162, 255, 0.1);
            cursor: pointer;
            padding: 8px 16px;
            font-size: 0.875rem;
            border-radius: 8px;
            white-space: nowrap;
            min-width: auto;
          }

          @media (max-width: 640px) {
            .flame-button {
              padding: 6px 12px;
              font-size: 0.75rem;
            }
          }

          .flame-button::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg,
              transparent,
              rgba(138, 43, 226, 0.15),
              rgba(155, 89, 182, 0.2),
              rgba(200, 162, 255, 0.15),
              transparent
            );
            border-radius: inherit;
            z-index: -1;
            animation: flameHalo 3s ease-in-out infinite;
            filter: blur(1px);
            opacity: 0.4;
          }

          .flame-button::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.05) 45%,
              rgba(255, 255, 255, 0.08) 50%,
              rgba(255, 255, 255, 0.05) 55%,
              transparent 100%
            );
            border-radius: inherit;
            animation: flameShimmer 5s linear infinite;
            pointer-events: none;
          }

          .flame-button:hover {
            animation:
              flameGradient 3s ease-in-out infinite,
              flamePulse 1.5s ease-in-out infinite,
              flameShake 1s ease-in-out infinite;
            box-shadow:
              0 0 6px rgba(138, 43, 226, 0.3),
              0 0 12px rgba(155, 89, 182, 0.25),
              0 0 18px rgba(200, 162, 255, 0.2),
              inset 0 0 8px rgba(255, 255, 255, 0.05);
            transform: scale(1.03) translateY(-1px);
            border-color: rgba(200, 162, 255, 0.4);
          }

          .flame-button .flame-text {
            position: relative;
            z-index: 2;
            font-weight: 700;
            letter-spacing: 0.3px;
            animation: flameTextGlow 3s ease-in-out infinite;
            color: #f0e8ff;
          }

          /* Animations */
          @keyframes flameGradient {
            0%, 100% { background-position: 0% 50%; }
            25% { background-position: 100% 0%; }
            50% { background-position: 100% 100%; }
            75% { background-position: 0% 100%; }
          }

          @keyframes flamePulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }

          @keyframes flameHalo {
            0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.6; transform: scale(1.03) rotate(180deg); }
          }

          @keyframes flameShimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes flameShake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-0.5px); }
            75% { transform: translateX(0.5px); }
          }

          @keyframes flameTextGlow {
            0%, 100% {
              text-shadow:
                0 0 1px rgba(255, 255, 255, 0.2),
                0 0 2px rgba(200, 162, 255, 0.15),
                0 0 3px rgba(155, 89, 182, 0.1);
            }
            50% {
              text-shadow:
                0 0 2px rgba(255, 255, 255, 0.3),
                0 0 4px rgba(200, 162, 255, 0.2),
                0 0 6px rgba(155, 89, 182, 0.15);
            }
          }

          /* Glassmorphism navbar */
          .navbar-glass {
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            background: rgba(26, 22, 43, 0.8);
            border-bottom: 1px solid rgba(183, 153, 255, 0.1);
            box-shadow: 0 8px 32px rgba(14, 11, 22, 0.3);
          }

          .navbar-transparent {
            background: rgba(14, 11, 22, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
          }

          /* Mobile menu animation - improved */
          .mobile-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            width: 100%;
            background: rgba(26, 22, 43, 0.98);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            animation: slideDown 0.3s ease-out;
            border-top: 1px solid rgba(183, 153, 255, 0.1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            z-index: 1000;
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Mobile menu item animation */
          .mobile-nav-item {
            transition: all 0.2s ease-in-out;
            border-left: 3px solid transparent;
            display: block;
            width: 100%;
          }

          .mobile-nav-item:hover {
            background: rgba(108, 43, 217, 0.1);
            border-left-color: ${COLORS.PRIMARY_ACCENT};
            transform: translateX(5px);
          }

          /* Hamburger menu animation */
          .hamburger-btn {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hamburger-btn:hover {
            transform: scale(1.1);
            background: rgba(108, 43, 217, 0.2) !important;
          }

          /* Smooth height transition */
          .navbar-scrolled {
            height: 60px;
          }

          .navbar-normal {
            height: 70px;
          }

          @media (max-width: 640px) {
            .navbar-scrolled {
              height: 56px;
            }
            .navbar-normal {
              height: 64px;
            }
          }

          /* Focus styles for accessibility */
          .nav-link:focus,
          .hamburger-btn:focus {
            outline: 2px solid ${COLORS.PRIMARY_ACCENT};
            outline-offset: 2px;
          }

          /* Logo hover effect - mobile friendly */
          .logo-link:hover .logo-image {
            transform: scale(1.05) rotate(2deg);
            filter: drop-shadow(0 0 10px rgba(108, 43, 217, 0.5));
          }

          .logo-image {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            flex-shrink: 0;
          }

          /* Mobile responsive logo */
          .logo-text {
            color: #ffffff;
            font-weight: 700;
            letter-spacing: -0.02em;
            position: relative;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease-in-out;
            white-space: nowrap;
          }

          @media (max-width: 480px) {
            .logo-text {
              font-size: 0.9rem;
            }
          }

          @media (max-width: 360px) {
            .logo-text {
              font-size: 0.8rem;
            }
          }

          .logo-text:hover {
            color: #ffffff;
            transform: none;
            filter: none;
          }

          /* Responsive container fixes */
          .navbar-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            width: 100%;
            min-width: 0;
          }

          .logo-section {
            display: flex;
            align-items: center;
            flex-shrink: 1;
            min-width: 0;
            max-width: calc(100vw - 120px);
          }

          .actions-section {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex-shrink: 0;
          }

          @media (max-width: 640px) {
            .actions-section {
              gap: 0.25rem;
            }
          }

          /* Prevent layout shift */
          .nav-container {
            position: relative;
            width: 100%;
            max-width: 100%;
            overflow: hidden;
          }

          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}
      </style>
      
      <nav
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'navbar-scrolled navbar-glass' 
            : 'navbar-normal navbar-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-container">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 h-full">
            <div className="navbar-content">
              {/* Logo Section */}
              <div className="logo-section">
                <a 
                  href="#home" 
                  className="logo-link flex items-center focus:outline-none min-w-0"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }}
                  onKeyDown={(e) => handleKeyDown(e, '#home')}
                  tabIndex={0}
                  aria-label="HackUnited V6 Home"
                >
                  <img
                    src="/images/logo.webp"
                    alt="United Hacks V6 Logo"
                    className="logo-image h-10 w-10 sm:h-12 sm:w-12 rounded-lg object-cover"
                  />
                  <span className="logo-text ml-2 sm:ml-3 text-lg sm:text-xl font-bold font-heading truncate">
                    HackUnited V6
                  </span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex flex-grow justify-center items-center">
                <div className="flex items-center space-x-2">
                  {navItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`nav-link px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        activeSection === item.href.substring(1) ? 'active' : ''
                      }`}
                      style={{ 
                        color: activeSection === item.href.substring(1) 
                          ? COLORS.LINK_HOVER 
                          : COLORS.TEXT_MUTED,
                        animationDelay: `${index * 50}ms`
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      onKeyDown={(e) => handleKeyDown(e, item.href)}
                      tabIndex={0}
                      role="button"
                      aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Actions Section */}
              <div className="actions-section">
                <a
                  href="https://unitedhacksv6.devpost.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex flame-button"
                >
                  <span className="flame-text">Hackathon</span>
                </a>
                <div className="lg:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="hamburger-btn p-2.5 sm:p-3 rounded-lg transition-all duration-300 focus:outline-none"
                    style={{
                      backgroundColor: isOpen ? 'rgba(108, 43, 217, 0.2)' : 'transparent',
                      color: COLORS.TEXT_MAIN
                    }}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                  >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div 
              id="mobile-menu"
              className="mobile-menu lg:hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-1">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`mobile-nav-item px-4 py-3 text-base font-medium transition-all duration-200 ${
                      activeSection === item.href.substring(1) ? 'active' : ''
                    }`}
                    style={{ 
                      color: activeSection === item.href.substring(1) 
                        ? COLORS.LINK_HOVER 
                        : COLORS.TEXT_MUTED,
                      animationDelay: `${index * 30}ms`
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, item.href)}
                    tabIndex={0}
                    role="button"
                    aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 px-4 sm:hidden">
                  <a
                    href="https://unitedhacksv6.devpost.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flame-button w-full flex justify-center"
                  >
                    <span className="flame-text">Hackathon</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
