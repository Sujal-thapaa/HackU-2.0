import React, { useState } from 'react';
import { Mail, MessageSquare, Users, Instagram, Linkedin, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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
      // In a real application, you would send this to your backend
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
      gradient: 'from-purple-500 to-purple-600',
      hoverGradient: 'from-purple-400 to-purple-500'
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/company/hack-united/posts/?feedView=all',
      icon: Linkedin,
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-700',
      hoverGradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'instagram',
      href: 'https://www.instagram.com/hack_united/',
      icon: Instagram,
      label: 'Instagram',
      gradient: 'from-pink-500 to-pink-600',
      hoverGradient: 'from-pink-400 to-pink-500'
    }
  ];

  return (
    // The main section is updated with the notebook background styling.
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: '#F8F8F8', // Light background for notebook paper
        backgroundImage: 
          'linear-gradient(to bottom, #d3e1f0 1px, transparent 1px), ' + // Blue lines for light mode
          'linear-gradient(to bottom, #2b3a4a 1px, transparent 1px)', // Darker lines for dark mode
        backgroundSize: '100% 2em', // Line spacing
        backgroundPosition: 'left top',
        backgroundBlendMode: 'difference, normal',
        minHeight: '100vh', // Ensure background covers full height
      }}
    >
      {/* Animated background elements were removed to avoid clashing with the lined paper effect. */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-blue-600 animate-pulse" size={24} /> {/* Adjusted text color */}
            <span className="text-blue-600 font-medium tracking-wide uppercase text-sm">Connect With Us</span> {/* Adjusted text color */}
            <Sparkles className="text-purple-600 animate-pulse delay-500" size={24} /> {/* Adjusted text color */}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient"> {/* Adjusted gradient colors for contrast */}
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"> {/* Adjusted text color for readability */}
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              {/* Adjusted card background and border for the new light background */}
              <div className="relative flex items-center space-x-4 p-6 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 group-hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  {/* Adjusted text colors for readability on light background */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">Email</h3>
                  <p className="text-blue-600 hover:text-blue-700 transition-colors">
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
                    <div className={`absolute inset-0 bg-gradient-to-r ${isHovered === social.id ? social.hoverGradient : social.gradient} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}></div>
                    {/* Adjusted card background and border for the new light background */}
                    <div className="relative flex flex-col items-center p-6 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 hover:border-blue-500/50 transition-all duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      {/* Adjusted text color for readability on light background */}
                      <span className="text-gray-900 font-medium group-hover:text-blue-700 transition-colors">{social.label}</span>
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            {/* Adjusted form background and border for the new light background */}
            <div className="relative bg-white/50 backdrop-blur-md p-8 rounded-xl border border-white/30 group-hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-white" size={16} />
                </div>
                {/* Adjusted text color for readability on light background */}
                <h3 className="text-2xl font-bold text-gray-900">Stay Updated</h3>
              </div>
              {/* Adjusted text color for readability on light background */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                Subscribe to our newsletter for the latest updates, announcements, and hackathon tips.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    // Adjusted input styling for the light background
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
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
                <p className="mt-4 text-center text-sm font-semibold text-blue-700">{submitMessage}</p>
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
