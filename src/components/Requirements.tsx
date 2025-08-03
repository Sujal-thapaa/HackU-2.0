import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Calendar, Github, Video, ExternalLink, AlertTriangle, MessageCircle, Clock, Users, Trophy, Zap } from 'lucide-react';

// Define the new color palette
const COLORS = {
  PRIMARY_BG: '#0E0B16',      // Dark Plum
  PRIMARY_ACCENT: '#9370DB',  // Medium Purple
  SECONDARY_ACCENT: '#D8BFD8', // Thistle
  SURFACE: '#1A162B',         // Darker Plum
  TEXT_MAIN: '#E0E0E0',       // Soft White
  TEXT_MUTED: '#BDBDBD',      // Lighter Gray
  LINK_HOVER: '#B799FF',      // Soft Vibrant Violet (Optional refinement)
};

// Particle component for background
const Particle = ({ index }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{ backgroundColor: COLORS.PRIMARY_ACCENT, opacity: 0.2 }}
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      transition={{
        duration: Math.random() * 20 + 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay: index * 0.2,
      }}
    />
  );
};

const Requirements = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const requirements = [
    {
      icon: Github,
      title: 'Public Github/Alternative Repository',
      description: 'Your project code must be publicly accessible',
      iconColor: COLORS.SECONDARY_ACCENT,
      borderColor: `${COLORS.PRIMARY_ACCENT}1A`,
      textColor: COLORS.PRIMARY_ACCENT
    },
    {
      icon: Video,
      title: 'Demo Video of your Project (2-5 mins)',
      description: 'A video demonstration of your project functionality',
      iconColor: COLORS.SECONDARY_ACCENT,
      borderColor: `${COLORS.PRIMARY_ACCENT}1A`,
      textColor: COLORS.PRIMARY_ACCENT
    },
    {
      icon: FileText,
      title: 'Written Explanation of your Project',
      description: 'Detailed project description done via Devpost',
      iconColor: COLORS.SECONDARY_ACCENT,
      borderColor: `${COLORS.PRIMARY_ACCENT}1A`,
      textColor: COLORS.PRIMARY_ACCENT
    },
    {
      icon: ExternalLink,
      title: 'Link to Live Demo (Optional)',
      description: 'Link to live demo of your project (helpful but not required)',
      iconColor: COLORS.SECONDARY_ACCENT,
      borderColor: `${COLORS.PRIMARY_ACCENT}1A`,
      textColor: COLORS.PRIMARY_ACCENT
    }
  ];

  const importantDates = [
    {
      icon: Zap,
      event: 'Opening Ceremony',
      date: 'January 16th, 2026',
      time: '7:00 PM EST',
      description: 'Kickoff event with theme announcement and team formation',
      iconColor: COLORS.SECONDARY_ACCENT,
      borderColor: `${COLORS.PRIMARY_ACCENT}1A`,
      textColor: COLORS.PRIMARY_ACCENT
    },
    {
      icon: Clock,
      event: 'Submissions Due',
      date: 'January 18th, 2026',
      time: '12:00 PM EST',
      description: 'Final deadline for all project submissions',
      iconColor: COLORS.SECONDARY_ACCENT,
      borderColor: `${COLORS.PRIMARY_ACCENT}1A`,
      textColor: COLORS.PRIMARY_ACCENT
    },
    {
      icon: Trophy,
      event: 'Closing Ceremony',
      date: 'January 18th, 2025',
      time: '8:00 PM EST',
      description: 'Awards ceremony and winner announcements',
      iconColor: COLORS.SECONDARY_ACCENT,
      borderColor: `${COLORS.PRIMARY_ACCENT}1A`,
      textColor: COLORS.PRIMARY_ACCENT
    }
  ];

  const rules = [
    {
      text: 'Your submission MUST be a NEW project (All code must be written during the given time frame)',
      icon: AlertTriangle
    },
    {
      text: 'We will NOT accept submissions to other hackathons (Your creation must be original for United Hacks and not reused)',
      icon: ExternalLink
    },
    {
      text: 'You may ONLY work with ONE TEAM for the duration of the Hackathon',
      icon: Users
    }
  ];

  const registrationSteps = [
    {
      step: 'Sign up on this Devpost.',
      icon: FileText
    },
    {
      step: 'Join our Discord, as it\'s our primary method of communication with participants.',
      icon: MessageCircle
    }
  ];

  const themeInfo = {
    title: 'Our Theme',
    themeTrack: 'Theme Track: Announced during opening ceremony',
    generalTrack: 'United Hacks is a platform where innovators can unleash their creativity without limitations. If you choose to compete in the "General" track, you have the freedom to explore diverse topics—from accessibility to mental health and beyond, nurturing the potential of your ideas!'
  };

  const workshopInfo = {
    title: 'Workshop Schedule',
    status: 'Coming soon',
    description: 'All workshop links will be posted in our Discord, and are hyperlinked on the schedule'
  };

  const tabs = [
    { id: 'requirements', label: 'Requirements', icon: FileText },
    { id: 'dates', label: 'Important Dates', icon: Calendar },
    { id: 'rules', label: 'Rules & Registration', icon: AlertTriangle },
    { id: 'theme', label: 'Theme & Workshops', icon: MessageCircle }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      rotateY: -15,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      rotateX: 5,
      boxShadow: `0 20px 40px ${COLORS.PRIMARY_ACCENT}4D`, // Primary Accent shadow
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="requirements" className="py-20 relative overflow-hidden" style={{ backgroundColor: COLORS.PRIMARY_BG }}>
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`
            }}
          >
            Requirements & Important Info
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: COLORS.TEXT_MUTED }}>
            Everything you need to know about participating in United Hacks V6
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white shadow-lg'
                    : 'text-white'
                }`}
                style={{ 
                  backgroundColor: COLORS.SURFACE,
                  color: COLORS.TEXT_MAIN,
                  background: activeTab === tab.id 
                    ? `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})` 
                    : undefined 
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Requirements Tab */}
          {activeTab === 'requirements' && (
            <motion.div
              key="requirements"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {requirements.map((req, index) => {
                const IconComponent = req.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className="p-6 rounded-xl border transform rotate-1 hover:rotate-0 transition-transform duration-300"
                    style={{
                      background: COLORS.SURFACE,
                      borderColor: `${COLORS.PRIMARY_ACCENT}1A`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: req.iconColor }}
                      >
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2" style={{ color: req.textColor }}>{req.title}</h4>
                        <p style={{ color: COLORS.TEXT_MUTED }}>{req.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Important Dates Tab */}
          {activeTab === 'dates' && (
            <motion.div
              key="dates"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {importantDates.map((date, index) => {
                const IconComponent = date.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className="p-6 rounded-xl border transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                    style={{
                      background: COLORS.SURFACE,
                      borderColor: `${COLORS.PRIMARY_ACCENT}1A`,
                    }}
                  >
                    <div className="text-center">
                      <div 
                        className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: date.iconColor }}
                      >
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2" style={{ color: COLORS.TEXT_MAIN }}>{date.event}</h4>
                      <p className="font-semibold mb-1" style={{ color: date.textColor }}>{date.date}</p>
                      <p className="text-sm mb-3" style={{ color: date.textColor }}>{date.time}</p>
                      <p className="text-sm leading-relaxed" style={{ color: COLORS.TEXT_MUTED }}>{date.description}</p>
                    </div>
                  </motion.div>
                );
              })}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-3 mt-6 p-4 rounded-lg"
                style={{ 
                  backgroundColor: COLORS.SURFACE, 
                  borderColor: `${COLORS.PRIMARY_ACCENT}1A`,
                }}
              >
                <p className="text-center" style={{ color: COLORS.TEXT_MUTED }}>
                  <strong>Note:</strong> The link to the live streams will be posted in our Discord server.
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* Rules & Registration Tab */}
          {activeTab === 'rules' && (
            <motion.div
              key="rules"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Rules */}
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-xl border transform rotate-1"
                style={{
                  background: COLORS.SURFACE,
                  borderColor: `${COLORS.PRIMARY_ACCENT}1A`,
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ color: COLORS.TEXT_MAIN }}>
                  <AlertTriangle style={{ color: COLORS.PRIMARY_ACCENT }} size={28} />
                  Other Criteria
                </h3>
                <div className="space-y-6">
                  {rules.map((rule, index) => {
                    const IconComponent = rule.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg"
                        style={{
                          backgroundColor: `${COLORS.PRIMARY_ACCENT}1A`,
                          borderColor: `${COLORS.PRIMARY_ACCENT}1A`
                        }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent style={{ color: COLORS.PRIMARY_ACCENT }} className="mt-1 flex-shrink-0" size={20} />
                        <p style={{ color: COLORS.TEXT_MUTED }}>{rule.text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Registration Steps */}
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-xl border transform -rotate-1"
                style={{
                  background: COLORS.SURFACE,
                  borderColor: `${COLORS.SECONDARY_ACCENT}1A`,
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ color: COLORS.TEXT_MAIN }}>
                  <ExternalLink style={{ color: COLORS.SECONDARY_ACCENT }} size={28} />
                  How To Register
                </h3>
                <div className="space-y-6">
                  {registrationSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg"
                        style={{
                          backgroundColor: `${COLORS.SECONDARY_ACCENT}1A`,
                          borderColor: `${COLORS.SECONDARY_ACCENT}1A`
                        }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div 
                          className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                          style={{ backgroundColor: COLORS.SECONDARY_ACCENT }}
                        >
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <IconComponent style={{ color: COLORS.SECONDARY_ACCENT }} className="mb-2" size={20} />
                          <p style={{ color: COLORS.TEXT_MUTED }}>{step.step}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Theme & Workshops Tab */}
          {activeTab === 'theme' && (
            <motion.div
              key="theme"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Theme */}
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-xl border transform rotate-1"
                style={{
                  background: COLORS.SURFACE,
                  borderColor: `${COLORS.PRIMARY_ACCENT}1A`,
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ color: COLORS.TEXT_MAIN }}>
                  <FileText style={{ color: COLORS.PRIMARY_ACCENT }} size={28} />
                  {themeInfo.title}
                </h3>
                <div className="space-y-6">
                  <motion.div 
                    className="p-4 rounded-lg border"
                    style={{ 
                      backgroundColor: `${COLORS.PRIMARY_ACCENT}1A`, 
                      borderColor: `${COLORS.PRIMARY_ACCENT}1A` 
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: COLORS.PRIMARY_ACCENT }}>
                      <Trophy size={18} />
                      Theme Track
                    </h4>
                    <p style={{ color: COLORS.TEXT_MUTED }}>{themeInfo.themeTrack}</p>
                  </motion.div>
                  <motion.div 
                    className="p-4 rounded-lg border"
                    style={{ 
                      backgroundColor: `${COLORS.PRIMARY_ACCENT}1A`, 
                      borderColor: `${COLORS.PRIMARY_ACCENT}1A` 
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: COLORS.PRIMARY_ACCENT }}>
                      <Zap size={18} />
                      General Track
                    </h4>
                    <p style={{ color: COLORS.TEXT_MUTED }}>{themeInfo.generalTrack}</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Workshop Schedule */}
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-xl border transform -rotate-1"
                style={{
                  background: COLORS.SURFACE,
                  borderColor: `${COLORS.SECONDARY_ACCENT}1A`,
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ color: COLORS.TEXT_MAIN }}>
                  <MessageCircle style={{ color: COLORS.SECONDARY_ACCENT }} size={28} />
                  {workshopInfo.title}
                </h3>
                <motion.div 
                  className="p-6 rounded-lg border text-center"
                  style={{ 
                    backgroundColor: `${COLORS.SECONDARY_ACCENT}1A`, 
                    borderColor: `${COLORS.SECONDARY_ACCENT}1A` 
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: COLORS.SECONDARY_ACCENT
                    }}
                  >
                    <Clock className="text-white" size={28} />
                  </div>
                  <h4 className="font-semibold mb-2 text-xl" style={{ color: COLORS.SECONDARY_ACCENT }}>{workshopInfo.status}</h4>
                  <p style={{ color: COLORS.TEXT_MUTED }}>{workshopInfo.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Requirements;
