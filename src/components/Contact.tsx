import React, { useState } from 'react';
import { Mail, MessageSquare, Users, Instagram, Linkedin, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Define the new color palette
const COLORS = {
  PRIMARY_BG: '#121212',      // Deep Charcoal
  PRIMARY_ACCENT: '#FF6849',   // Burnt Coral
  SECONDARY_ACCENT: '#F6C177', // Warm Gold
  SURFACE: '#262626',         // Graphite Gray
  TEXT_MAIN: '#F1F1F1',       // Soft White
  TEXT_MUTED: '#B0B0B0',      // Mid Gray
  LINK_HOVER: '#FFD39A',      // Soft Amber Glow
  ERROR_WARNING: '#FF4E4E'    // Ember Red
};

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    try {
      console.log('Newsletter signup:', email);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Thanks for subscribing! Check your email for a confirmation.');
      setEmail('');
    } catch (error) {
      setSubmitMessage('There was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      id: 'discord',
      href: 'https://discord.gg/hackunited',
      icon: MessageSquare,
      label: 'Discord',
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/company/hack-united/posts/?feedView=all',
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      id: 'instagram',
      href: 'https://www.instagram.com/hack_united/',
      icon: Instagram,
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="animate-pulse" size={24} style={{ color: COLORS.PRIMARY_ACCENT }} />
            <span className="font-medium tracking-wide uppercase text-sm" style={{ color: COLORS.PRIMARY_ACCENT }}>Connect With Us</span>
            <Sparkles className="animate-pulse delay-500" size={24} style={{ color: COLORS.SECONDARY_ACCENT }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent animate-gradient"
            style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})` }}
          >
            Get In Touch
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: COLORS.TEXT_MAIN }}>
            Have questions? Want to get involved? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
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
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
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
                      className="relative flex flex-col items-center p-6 rounded-xl border transition-all duration-300"
                      style={{
                        backgroundColor: COLORS.SURFACE,
                        borderColor: isHovered === social.id ? COLORS.PRIMARY_ACCENT : COLORS.SURFACE
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                        style={{ backgroundColor: COLORS.SECONDARY_ACCENT }}
                      >
                        <Icon className="text-white" size={24} />
                      </div>
                      <span className="text-white font-medium transition-colors" style={{ color: COLORS.PRIMARY_ACCENT }}>{social.label}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Newsletter Form */}
          <div
            className="group relative overflow-hidden"
            onMouseEnter={() => setIsHovered('newsletter')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
              style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}1A, ${COLORS.SECONDARY_ACCENT}1A)`}}
            ></div>
            <div
              className="relative p-8 rounded-xl border transition-all duration-300"
              style={{
                backgroundColor: COLORS.SURFACE,
                borderColor: isHovered === 'newsletter' ? COLORS.PRIMARY_ACCENT : COLORS.SURFACE
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`}}
                >
                  <Sparkles className="text-white" size={16} />
                </div>
                <h3 className="text-2xl font-bold text-white" style={{ color: COLORS.PRIMARY_ACCENT }}>Stay Updated</h3>
              </div>
              <p className="mb-6 leading-relaxed" style={{ color: COLORS.TEXT_MAIN }}>
                Subscribe to our newsletter for the latest updates, announcements, and hackathon tips.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{
                      backgroundColor: `${COLORS.PRIMARY_BG}`,
                      borderColor: COLORS.SURFACE,
                      color: COLORS.TEXT_MAIN,
                      '--placeholder-color': `${COLORS.TEXT_MUTED}`
                    }}
                    required
                  />
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}33, ${COLORS.SECONDARY_ACCENT}33)`}}
                  ></div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`,
                    boxShadow: `0 0 20px ${COLORS.PRIMARY_ACCENT}40`
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Subscribe to Newsletter
                    </>
                  )}
                </button>
              </form>
              {submitMessage && (
                <p className="mt-4 text-center text-sm font-semibold" style={{ color: COLORS.PRIMARY_ACCENT }}>{submitMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
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
