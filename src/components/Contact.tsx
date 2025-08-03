import React, { useState } from 'react';
import { Mail, MessageSquare, Users, Instagram, Linkedin, Send, Sparkles, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Define the new color palette
const COLORS = {
  PRIMARY_BG: '#0E0B16',        // Dark Plum
  PRIMARY_ACCENT: '#9370DB',    // Medium Purple
  SECONDARY_ACCENT: '#D8BFD8',  // Thistle
  SURFACE: '#1A162B',           // Deeper Plum
  TEXT_MAIN: '#E0E0E0',         // Soft White
  TEXT_MUTED: '#BDBDBD',        // Light Gray
  LINK_HOVER: '#B799FF',        // Vibrant Violet
  ERROR_WARNING: '#D9534F',   
  White: '#FFFFFF'
     
};

const Contact = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const socialLinks = [
    {
      id: 'discord',
      href: 'https://discord.gg/hackunited',
      icon: '/icons/discord.png',
      label: 'Discord',
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/company/hack-united/posts/?feedView=all',
      icon: '/icons/linkedin.png',
      label: 'LinkedIn',
    },
    {
      id: 'instagram',
      href: 'https://www.instagram.com/hack_united/',
      icon: '/icons/instagram.png',
      label: 'Instagram',
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden" style={{ backgroundColor: COLORS.PRIMARY_BG }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ backgroundColor: COLORS.PRIMARY_ACCENT }}></div>
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" style={{ backgroundColor: COLORS.SECONDARY_ACCENT }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" style={{ backgroundColor: COLORS.PRIMARY_ACCENT }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="animate-pulse sm:w-6 sm:h-6" size={20} style={{ color: COLORS.PRIMARY_ACCENT }} />
            <span className="font-medium tracking-wide uppercase text-xs sm:text-sm" style={{ color: COLORS.PRIMARY_ACCENT }}>Connect With Us</span>
            <Sparkles className="animate-pulse delay-500 sm:w-6 sm:h-6" size={20} style={{ color: COLORS.SECONDARY_ACCENT }} />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent animate-gradient px-4 sm:px-0"
            style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})` }}
          >
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0" style={{ color: COLORS.TEXT_MAIN }}>
            Have questions? Want to get involved? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-8">
            {/* Email Card */}
            <motion.div
              className="group relative overflow-hidden"
              onMouseEnter={() => setIsHovered('email')}
              onMouseLeave={() => setIsHovered(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}33, ${COLORS.SECONDARY_ACCENT}33)`}}
              ></div>
              <div 
                className="relative flex items-center space-x-4 p-6 rounded-xl border transition-all duration-300"
                style={{
                  backgroundColor: COLORS.SURFACE,
                  borderColor: isHovered === 'email' ? COLORS.PRIMARY_ACCENT : COLORS.SURFACE
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300"
                  style={{ backgroundColor: COLORS.PRIMARY_ACCENT }}
                >
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1 transition-colors" style={{ color: COLORS.PRIMARY_ACCENT }}>Email</h3>
                  <p style={{ color: COLORS.SECONDARY_ACCENT }} className="hover:text-blue-300 transition-colors">
                    <a href="mailto:humans@hackunited.org" className="hover:underline">humans@hackunited.org</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const isCurrent = isHovered === social.id;
                return (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden"
                    onMouseEnter={() => setIsHovered(social.id)}
                    onMouseLeave={() => setIsHovered(null)}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
                      style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})` }}
                    ></div>
                    <div
                      className="relative flex flex-col items-center p-4 sm:p-6 rounded-xl border transition-all duration-300"
                      style={{
                        backgroundColor: COLORS.SURFACE,
                        borderColor: isCurrent ? COLORS.PRIMARY_ACCENT : COLORS.SURFACE
                      }}
                    >
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                        style={{ backgroundColor: COLORS.SECONDARY_ACCENT }}
                      >
                        <img src={social.icon} alt={social.label} className="w-5 h-5 sm:w-6 sm:h-6 filter invert" />
                      </div>
                      <span className="text-white font-medium transition-colors text-sm sm:text-base" style={{ color: COLORS.PRIMARY_ACCENT }}>{social.label}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Registration Section */}
          <div
            className="group relative overflow-hidden"
            onMouseEnter={() => setIsHovered('register')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
              style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}1A, ${COLORS.SECONDARY_ACCENT}1A)`}}
            ></div>
            <div
              className="relative p-8 rounded-xl border transition-all duration-300 h-full flex flex-col justify-between"
              style={{
                backgroundColor: COLORS.SURFACE,
                borderColor: isHovered === 'register' ? COLORS.PRIMARY_ACCENT : COLORS.SURFACE
              }}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`}}
                  >
                    <Sparkles className="text-white" size={16} />
                  </div>
                  <h3 className="text-2xl font-bold text-white" style={{ color: COLORS.PRIMARY_ACCENT }}>Don't wait! Register now!</h3>
                </div>
                <p className="mb-6 leading-relaxed" style={{ color: COLORS.TEXT_MAIN }}>
                  Join us on this innovation journey and push the boundaries of creativity and technology!
                </p>
                <div className="text-left space-y-2 mb-6" style={{ color: COLORS.TEXT_MAIN }}>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.SECONDARY_ACCENT }}></span>
                    Click on the Register button below & fill out the form.
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.SECONDARY_ACCENT }}></span>
                    Sign up on <a href="https://unitedhacksv6.devpost.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold" style={{ color: COLORS.White}}>Devpost</a>.
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.SECONDARY_ACCENT }}></span>
                    Join our <a href="https://discord.gg/hackunited" target="_blank" rel="noopener noreferrer" className="underline font-semibold" style={{ color: COLORS.White }}>Discord Server</a>.
                  </p>
                </div>
              </div>
              <a 
                href="https://unitedhacksv6.devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 mt-4"
                style={{
                  backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`,
                  boxShadow: `0 0 20px ${COLORS.PRIMARY_ACCENT}40`
                }}
              >
                <Send size={18} />
                Register Now!
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
