import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

// Define the new color palette
const COLORS = {
  PRIMARY_BG: '#0E0B16',        // Dark Plum
  PRIMARY_ACCENT: '#9370DB',    // Medium Purple
  SECONDARY_ACCENT: '#D8BFD8',  // Thistle
  SURFACE: '#1A162B',           // Deeper Plum
  TEXT_MAIN: '#E0E0E0',         // Soft White
  TEXT_MUTED: '#BDBDBD',        // Light Gray
  LINK_HOVER: '#B799FF',        // Vibrant Violet
  ERROR_WARNING: '#D9534F'       // Soft Vibrant Violet (Optional refinement)
};

// Define the stages for the hackathon journey
const stages = [
  {
    id: 'hack',
    icon: Code2,
    title: 'Hack & Compete',
    subtitle: 'Innovate with cutting-edge tech',
    description: 'Build powerful solutions using the latest technologies. Challenge yourself against global talent and showcase your skills in the ultimate coding competition.',
  },
  {
    id: 'learn',
    icon: "public/icons/learn.png",
    title: 'Learn & Grow',
    subtitle: 'Expand your skills with expert guidance',
    description: 'Join workshops, mentorships, and masterclasses led by top tech professionals. Level up your abilities and accelerate your developer journey.',
  },
  {
    id: 'network',
    icon: "/icons/collab.png",
    title: 'Collaborate & Network',
    subtitle: 'Build lasting connections',
    description: 'Meet and team up with developers, founders, and innovators from around the world. Forge partnerships that go beyond the hackathon.',
  },
  {
    id: 'win',
    icon: "/icons/win.png",
    title: 'Win Big',
    subtitle: 'Unlock prizes and opportunities',
    description: 'Stand out and earn recognition, cash rewards, and career-changing opportunities that can shape your future.',
  }
];


// StageCard component for each individual stage
const StageCard = ({ stage, index }: { stage: any, index: number }) => {
  const cardRef = useRef(null);
  // useInView hook to trigger animations when the element is in the viewport
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false);
  
  // Function to trigger the confetti effect
  const triggerConfetti = () => {
    // Only run confetti once for the 'win' stage
    if (stage.id === 'win' && !hasTriggeredConfetti) {
      setHasTriggeredConfetti(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: [COLORS.PRIMARY_ACCENT, COLORS.SECONDARY_ACCENT] // Use specified colors
      });
    }
  };

  // useEffect to trigger confetti when the 'win' card comes into view
  useEffect(() => {
    if (isInView && stage.id === 'win') {
      const timer = setTimeout(triggerConfetti, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, stage.id, hasTriggeredConfetti]);

  const isImage = typeof stage.icon === 'string';

  return (
    <motion.div
      ref={cardRef}
      className="relative backdrop-blur-sm border rounded-2xl p-6 shadow-xl"
      style={{
        backgroundColor: `${COLORS.SURFACE}80`, // 50% opacity
        borderColor: `${COLORS.PRIMARY_ACCENT}1A` // 10% opacity
      }}
      // Initial state of the animation
      initial={{ opacity: 0, y: 50 }}
      // Animate to this state when the element is in view
      animate={isInView ? {
        opacity: 1,
        y: 0,
      } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      // Hover animation
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative z-10">
        <motion.div
          className="inline-flex p-3 rounded-xl mb-4"
          style={{ backgroundColor: COLORS.PRIMARY_ACCENT }}
          whileHover={{ rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {isImage ? (
            <img src={stage.icon} alt={stage.title} className="w-6 h-6 filter invert" />
          ) : (
            <stage.icon className="w-6 h-6 text-white" />
          )}
        </motion.div>
        
        <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.TEXT_MAIN }}>
          {stage.title}
        </h3>
        
        <p
          className="text-base font-semibold bg-clip-text text-transparent mb-3"
          style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})` }}
        >
          {stage.subtitle}
        </p>
        
        <p className="text-sm leading-relaxed" style={{ color: COLORS.TEXT_MUTED }}>
          {stage.description}
        </p>
      </div>
    </motion.div>
  );
};

// AnimatedPath component for the scrolling line animation
const AnimatedPath = () => {
  const pathRef = useRef(null);
  // useScroll to track the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: pathRef,
    offset: ["start end", "end start"]
  });

  // useTransform to map the scroll progress to the path length
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={pathRef} className="absolute left-1/2 top-0 h-full hidden lg:block -translate-x-1/2">
      <svg width="4" height="100%" className="overflow-visible">
        <motion.line
          x1="2"
          y1="0"
          x2="2"
          y2="100%"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            pathLength,
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={COLORS.PRIMARY_ACCENT} />
            <stop offset="100%" stopColor={COLORS.SECONDARY_ACCENT} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Main WhyParticipate component
function WhyParticipate() {
  const containerRef = useRef(null);
  
  return (
    <section id="why-join" className="relative min-h-screen py-16 overflow-hidden font-inter" style={{ backgroundColor: COLORS.PRIMARY_BG }}>

      <div ref={containerRef} className="relative max-w-5xl mx-auto px-6">
        {/* Header section with text and animations */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div 
            className="inline-flex items-center gap-2 bg-clip-text text-transparent mb-4"
            style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})` }}
          >
            <Sparkles className="w-5 h-5" style={{ color: COLORS.PRIMARY_ACCENT }} />
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: COLORS.PRIMARY_ACCENT }}>The Journey</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight" style={{ color: COLORS.TEXT_MAIN }}>
            Why <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})` }}
            >Participate?</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.TEXT_MUTED }}>
            Embark on a transformative journey through four stages of innovation
          </p>
        </motion.div>

        {/* Journey stages section with the animated path */}
        <div className="relative">
          <AnimatedPath />
          
          <div className="space-y-0">
            {stages.map((stage, index) => (
              <div 
                key={stage.id} 
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} ${index > 0 ? '-mt-32 lg:-mt-40' : ''}`}
              >
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-2' : 'lg:pl-2'}`}>
                  <StageCard
                    stage={stage}
                    index={index}
                  />
                </div>
                <div className="hidden lg:block w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Call to action button with motion animations */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Changed from a button to a link with the provided href */}
          <motion.a
            href="https://unitedhacksv6.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-white font-bold text-lg rounded-full shadow-lg"
            style={{
              backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 30px ${COLORS.PRIMARY_ACCENT}40`
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                `0 0 15px ${COLORS.PRIMARY_ACCENT}2A`,
                `0 0 25px ${COLORS.PRIMARY_ACCENT}40`,
                `0 0 15px ${COLORS.PRIMARY_ACCENT}2A`
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            Join the Movement
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyParticipate;
