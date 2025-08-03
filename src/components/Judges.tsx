import React from 'react';
import { motion } from 'framer-motion';

// Define the new color palette and font variables
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

// Particle animation background
const Particle = ({ index }: { index: number }) => {
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

const Judges = () => {
  return (
    <section 
      id="judges" 
      className="py-20 relative overflow-hidden flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundColor: COLORS.PRIMARY_BG }}
    >
      {/* Particle background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* JUDGES SECTION */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent px-4 sm:px-0"
          style={{
            backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`,
            fontFamily: 'var(--font-heading)'
          }}
        >
          Our Judges
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0"
          style={{
            color: COLORS.TEXT_MUTED,
            fontFamily: 'var(--font-body)'
          }}
        >
          Our panel of judges includes 15+ experts from different fields of tech, entrepreneurship, and design. Our judges have spent years working in their domains and have a passion for innovation. At United Hacks V6, they'll evaluate your projects based on [judging criteria], while also offering feedback, and incentivizing teams that push boundaries or tackle real-world problems in meaningful ways.
        </motion.p>
        
        {/* Placeholder for Rubric and Contact Info */}
        <div className="mb-12">
          <p className="text-md italic" style={{ color: COLORS.TEXT_MUTED, fontFamily: 'var(--font-body)' }}>
            [info here]
          </p>
        </div>

        <div className="w-full h-px bg-white/20 my-16" />

        {/* SPONSORS SECTION */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`,
            fontFamily: 'var(--font-heading)'
          }}
        >
          Our Sponsors
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-12"
          style={{
            color: COLORS.TEXT_MUTED,
            fontFamily: 'var(--font-body)'
          }}
        >
          Our sponsors make this event possible! They help empower the next generation of innovators by funding prizes, providing resources, and offering mentorship. We’re proud to partner with organizations that believe in building a better future through technology. If you're interested in sponsoring United Hacks V6, email us at <a href="mailto:humans@hackunited.org" className="underline" style={{ color: COLORS.PRIMARY_ACCENT }}>humans@hackunited.org</a>
        </motion.p>

        {/* Sponsor logo section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
          <img src="/logos/logo1.png" alt="Sponsor 1" className="w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition" />
          <img src="/logos/logo2.png" alt="Sponsor 2" className="w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition" />
          <img src="/logos/logo3.png" alt="Sponsor 3" className="w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition" />
          <img src="/logos/logo4.png" alt="Sponsor 4" className="w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition" />
          <img src="/logos/logo10.png" alt="Sponsor 5" className="w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition" />
          <img src="/logos/logo6.jpg" alt="Sponsor 6" className="w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition" />
          <img src="/logos/logo7.png" alt="Sponsor 7" className="w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition" />
          <img src="/logos/logo8.png" alt="Sponsor 8" className="w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition" />
          <img src="/logos/logo9.webp" alt="Sponsor 9" className="w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition" />
          <img src="/logos/logo5.svg" alt="Sponsor 10" className="w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition" />
          <img src="/logos/logo6.png" alt="Sponsor 11" className="w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition" />
          <img src="/logos/logo12.png" alt="Sponsor 12" className="w-36 filter grayscale brightness-200 opacity-70 hover:opacity-100 hover:filter-none transition" />
        </div>
      </div>
    </section>
  );
};

export default Judges;
