import React from 'react';
import MiniModel from './MiniModel';
import { BookOpen, ExternalLink } from 'lucide-react';

// Define the new color palette
const COLORS = {
  PRIMARY_BG: '#0E0B16',        // Dark Plum
  PRIMARY_ACCENT: '#9370DB',    // Medium Purple
  SECONDARY_ACCENT: '#D8BFD3',  // Thistle
  SURFACE: '#1A162B',           // Deeper Plum
  TEXT_MAIN: '#E0E0E0',         // Soft White
  TEXT_MUTED: '#BDBDBD',        // Light Gray
  LINK_HOVER: '#B799FF',        // Vibrant Violet
  ERROR_WARNING: '#D9534F'      
};

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/hack-united/posts/?feedView=all',
      icon: '/icons/linkedin1.png',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hack_united/',
      icon: '/icons/instagram1.png',
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/hackunited',
      icon: '/icons/discord1.png',
    },
    {
      name: 'X',
      url: 'https://x.com/hackunited_',
      icon: '/icons/X1.png',
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Event Rules', href: 'https://unitedhacksv6.devpost.com/rules' },
    { name: 'Donate', href: 'https://www.hackunited.org/donate' },
    { name: 'Sponsor Prospectus', href: 'https://drive.google.com/file/d/13kB7zt1rcQ0lXdWlEDRP1qGt7mZ0sRyK/view' },
  ];

  const contactLinks = [
    { name: 'Join our community', href: 'https://www.hackunited.org/' },
    { name: 'Email Us', href: 'mailto:humans@hackunited.org' },
    { name: 'Blog', href: 'https://blog.hackunited.org/' },
    { name: 'Volunteer', href: 'https://www.hackunited.org/' },
  ];

  return (
    <footer className="py-12 border-t relative" style={{ backgroundColor: COLORS.PRIMARY_BG, borderColor: `${COLORS.SURFACE}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Logo and Socials */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <img 
              src="/HackUnitedLogo.webp" 
              alt="United Hacks Logo" 
              className="h-16 sm:h-20 w-auto mb-2 filter brightness-200"
            />
            <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: COLORS.TEXT_MAIN, fontFamily: 'var(--font-heading)' }}>United Hacks V6</h3>
            <p className="text-xs sm:text-sm" style={{ color: COLORS.TEXT_MUTED, fontFamily: 'var(--font-body)' }}>
              EIN: 81-2908499
            </p>
            <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-full transition-colors duration-200"
                  title={link.name}
                >
                  <img src={link.icon} alt={link.name} className="w-5 h-5 sm:w-6 sm:h-6 filter invert hover:opacity-75 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left mt-8 md:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: COLORS.TEXT_MAIN, fontFamily: 'var(--font-heading)' }}>Company</h3>
            <div className="space-y-1.5 sm:space-y-2 flex flex-col items-center md:items-start" style={{ fontFamily: 'var(--font-body)' }}>
              {companyLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors text-sm sm:text-base" style={{ color: COLORS.TEXT_MUTED }}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Links */}
          <div className="text-center md:text-left mt-8 md:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: COLORS.TEXT_MAIN, fontFamily: 'var(--font-heading)' }}>Contact Us</h3>
            <div className="space-y-1.5 sm:space-y-2 flex flex-col items-center md:items-start" style={{ fontFamily: 'var(--font-body)' }}>
              {contactLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors text-sm sm:text-base" style={{ color: COLORS.TEXT_MUTED }}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mini 3-D model bottom-right */}
        <div className="hidden md:block absolute right-4 bottom-4">
          <MiniModel />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
