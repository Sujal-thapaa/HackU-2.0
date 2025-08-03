import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Define the new color palette
const COLORS = {
  PRIMARY_BG: '#0E0B16',        // Dark Plum
  PRIMARY_ACCENT: '#9370DB',    // Medium Purple
  SECONDARY_ACCENT: '#D8BFD8',  // Thistle
  SURFACE: '#1A162B',           // Deeper Plum
  TEXT_MAIN: '#E0E0E0',         // Soft White
  TEXT_MUTED: '#BDBDBD',        // Light Gray
  LINK_HOVER: '#B799FF',        // Vibrant Violet
  ERROR_WARNING: '#D9534F'
};

const FAQ = () => {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // UseEffect to check and update mobile state on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // The list of frequently asked questions and their answers
  const faqs = [
    { question: 'Can I join as a beginner?', answer: 'Of course! We welcome beginners and experienced developers alike. This is a great opportunity to learn and build something new.' },
    { question: 'How much does it cost to participate?', answer: 'United Hacks V6 is completely free to participate. We believe in making technology accessible to everyone.' },
    { question: 'Can I participate as a team?', answer: 'Yes! You can form teams of up to 4 members. You can find teammates on our Discord server or participate solo.' },
    { question: 'What are the rules and guidelines?', answer: 'You can find the rules and guidelines on the Discord and Devpost.' },
    { question: 'What should I build?', answer: 'Anything! Build web apps, mobile apps, games, AI/ML projects, or any innovative solution. Creativity is encouraged!' },
    { question: 'How will projects be judged?', answer: 'Projects are evaluated based on Creativity, Practicality, Presentation, Design, and Technical Complexity.' },
    { question: 'When is the deadline to register?', answer: 'Registration is open now! Registration deadline is 1st January 18th 2026. Make sure to sign up on Devpost, complete the Google Form, and join our Discord server.' },
    { question: 'Where is the workshop scheduled?', answer: 'The workshop schedule is available on the Discord.' },
    { question: 'What do I need to submit?', answer: 'You need to submit: 1) Public GitHub repository, 2) Demo video (2-5 mins), 3) Written explanation via Devpost. Live demo link is optional but helpful.' },
    { question: 'Do I have to pay?', answer: 'Nope! everything is free!' },
    { question: 'How does finding teammates work?', answer: 'You can find teammates in Devpost or you can work solo. Make sure to include all team members names while submitting the project.' },
    { question: 'I have more questions', answer: 'You can ask your questions on the Discord or email us at humans@hackunited.org.' }
  ];

  // Function to toggle the open/closed state of an FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Variants for the 3D card animation
  const cardVariants = {
    closed: { rotateY: 0, scale: 1 },
    open: {
      rotateY: isMobile ? 0 : 180,
      scale: isMobile ? 1 : 1.02,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{ backgroundColor: COLORS.PRIMARY_BG }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent px-4 sm:px-0"
            style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})` }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl px-4 sm:px-0" style={{ color: COLORS.TEXT_MUTED }}>
            Got questions? We've got answers!
          </p>
        </motion.div>
        
        {isMobile ? (
          // Mobile view: Accordion
          <div className="grid grid-cols-1 gap-4 sm:gap-6 w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: COLORS.SURFACE,
                    borderColor: openIndex === index ? COLORS.PRIMARY_ACCENT : COLORS.SURFACE,
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-base sm:text-lg leading-tight" style={{ color: COLORS.TEXT_MAIN }}>
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={24} className="sm:w-6 sm:h-6" style={{ color: COLORS.SECONDARY_ACCENT }} />
                    </motion.div>
                  </div>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{
                          opacity: { duration: 0.2 },
                          height: { duration: 0.4, ease: "easeInOut" }
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm sm:text-base leading-relaxed" style={{ color: COLORS.TEXT_MUTED }}>
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Desktop view: 3D Flip Cards with 3 columns
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative perspective-1000 h-36 md:h-40`}
              >
                <motion.div
                  className="relative w-full h-full cursor-pointer preserve-3d"
                  variants={cardVariants}
                  animate={openIndex === index ? "open" : "closed"}
                  whileHover={{
                      rotateX: 5,
                      rotateZ: 2,
                      scale: 1.05,
                      boxShadow: `0 20px 40px ${COLORS.PRIMARY_ACCENT}4D`,
                      transition: { duration: 0.3 }
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Front Side: Only Question */}
                  <div
                    className="absolute inset-0 rounded-xl backface-hidden"
                    style={{
                      transformStyle: 'preserve-3d',
                      background: COLORS.SURFACE,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      transform: 'rotate(2deg)',
                      zIndex: 2,
                      borderColor: COLORS.SECONDARY_ACCENT
                    }}
                  >
                    <div className="p-3 sm:p-4 h-full flex flex-col justify-between">
                      <h3 className="font-semibold text-base sm:text-lg leading-tight mb-2" style={{ color: COLORS.TEXT_MAIN }}>
                        {faq.question}
                      </h3>
                      <div className="flex justify-center">
                        <motion.div
                          animate={{
                            rotate: openIndex === index ? 180 : 0,
                            color: openIndex === index ? COLORS.PRIMARY_ACCENT : COLORS.SECONDARY_ACCENT
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={20} className="sm:w-6 sm:h-6" />
                        </motion.div>
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}1A, ${COLORS.SECONDARY_ACCENT}1A)`}}
                    />
                  </div>
                  {/* Back Side: Only Answer */}
                  <div
                    className="absolute inset-0 rounded-xl backface-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.PRIMARY_ACCENT} 0%, ${COLORS.SECONDARY_ACCENT} 100%)`,
                      transform: 'rotateY(180deg) rotate(2deg)',
                      transformStyle: 'preserve-3d',
                      zIndex: 3,
                    }}
                  >
                    <div className="p-4 h-full flex flex-col justify-between">
                      <p className="text-white leading-relaxed text-sm" style={{ color: COLORS.TEXT_MAIN }}>
                        {faq.answer}
                      </p>
                      <div className="flex justify-center">
                        <motion.div
                          animate={{
                            rotate: 180,
                            color: COLORS.TEXT_MAIN
                          }}
                        >
                          <ChevronUp size={24} />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

const App = () => (
  <div style={{ backgroundColor: COLORS.PRIMARY_BG }}>
    <FAQ />
  </div>
);

export default App;
