import React from 'react';
import { Linkedin, Instagram, MessageCircle, BookOpen, ExternalLink } from 'lucide-react';

// Define the new color palette
const COLORS = {
  PRIMARY_BG: '#121212',      // Deep Charcoal
  PRIMARY_ACCENT: '#FF6849',   // Burnt Coral
  SECONDARY_ACCENT: '#F6C177', // Warm Gold
  SURFACE: '#262626',         // Graphite Gray
  TEXT_MAIN: '#F1F1F1',       // Soft White
  TEXT_MUTED: '#B0B0B0',      // Mid Gray
  LINK_HOVER: '#FFD39A',      // Soft Amber Glow
};

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/hack-united/posts/?feedView=all',
      icon: Linkedin,
    },
    {
      name: 'Devpost',
      url: 'https://unitedhacksv6.devpost.com/?ref_feature=challenge&ref_medium=discover&_gl=1*3d8olg*_gcl_au*MTU3NzE2NzUxOC4xNzU0MDE2OTU4*_ga*NzQ5OTA3MDkwLjE3NTQwMTY5NTg.*_ga_0YHJK3Y10M*czE3NTQwMTY5NTgkbzEkZzEkdDE3NTQwMTY5NjIkajU2JGwwJGgw',
      icon: ExternalLink,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hack_united/',
      icon: Instagram,
    },
    {
      name: 'Discord',
      url: 'https://discord.com/invite/hackunited',
      icon: MessageCircle,
    },
    {
      name: 'Blog',
      url: 'https://blog.hackunited.org/',
      icon: BookOpen,
    }
  ];

  return (
    <footer className="py-12 border-t" style={{ backgroundColor: COLORS.PRIMARY_BG, borderColor: `${COLORS.SURFACE}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4" style={{ color: COLORS.TEXT_MAIN }}>United Hacks V6</h3>
            <p className="text-sm" style={{ color: COLORS.TEXT_MUTED }}>
              The Ultimate Global Online Hackathon - Code. Create. Compete.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4" style={{ color: COLORS.TEXT_MAIN }}>Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block transition-colors" style={{ color: COLORS.TEXT_MUTED, '--hover-color': COLORS.PRIMARY_ACCENT }}>Home</a>
              <a href="#about" className="block transition-colors" style={{ color: COLORS.TEXT_MUTED, '--hover-color': COLORS.PRIMARY_ACCENT }}>About</a>
              <a href="#explore" className="block transition-colors" style={{ color: COLORS.TEXT_MUTED, '--hover-color': COLORS.PRIMARY_ACCENT }}>Explore</a>
              <a href="#contact" className="block transition-colors" style={{ color: COLORS.TEXT_MUTED, '--hover-color': COLORS.PRIMARY_ACCENT }}>Contact</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4" style={{ color: COLORS.TEXT_MAIN }}>Connect With Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-colors duration-200"
                    title={link.name}
                    style={{ color: COLORS.TEXT_MAIN }}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t" style={{ borderColor: `${COLORS.SURFACE}` }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm" style={{ color: COLORS.TEXT_MUTED }}>
              © 2024 United Hacks V6. Made with ❤️ for the global developer community.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="transition-colors" style={{ color: COLORS.TEXT_MUTED }}>Privacy Policy</a>
              <a href="#" className="transition-colors" style={{ color: COLORS.TEXT_MUTED }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
