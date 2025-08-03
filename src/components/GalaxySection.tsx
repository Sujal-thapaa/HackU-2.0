import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, DollarSign, ExternalLink, Zap, Heart, Building, CheckCircle } from 'lucide-react';

// Define the color palette
const COLORS = {
  PRIMARY_BG: '#0E0B16',
  PRIMARY_ACCENT: '#9370DB',
  SECONDARY_ACCENT: '#D8BFD8',
  SURFACE: '#1A162B',
  TEXT_MAIN: '#E0E0E0',
  TEXT_MUTED: '#BDBDBD',
  LINK_HOVER: '#B799FF',
  ERROR_WARNING: '#D9534F',
  LIGHT_BLUE: '#45B7D1',
  BRIGHT_GREEN: '#88E788',
  YELLOW: '#FECA57',
  RED: '#FF6B6B',
  PINK: '#FEC5E5',
};

// Data for each hackathon version
interface HackathonData {
  id: number;
  version: string;
  title: string;
  dates: string;
  theme: string;
  themeIcon: React.ReactNode;
  participants: number;
  prize: string;
  summary: [string, string];
  color: string;
  link: string;
  articleLink: string;
}

// Combined data for all hackathons
const hackathons: HackathonData[] = [
  {
    id: 6,
    version: "V6",
    title: "United Hacks V6",
    dates: "January 16–18, 2026",
    theme: "TBD",
    themeIcon: <Zap className="w-4 h-4" />,
    participants: 0,
    prize: "$50,700",
    summary: [
      "The most awaited edition yet",
      "More innovation, more impact"
    ],
    color: COLORS.PRIMARY_ACCENT,
    link: "https://unitedhacksv6.devpost.com/",
    articleLink: "#"
  },
  {
    id: 5,
    version: "V5",
    title: "United Hacks V5",
    dates: "July 11–13, 2025",
    theme: "Entertainment + General",
    themeIcon: <Zap className="w-4 h-4" />,
    participants: 1231,
    prize: "$51,000",
    summary: [
      "Enhance how people enjoy entertainment",
      "From new tech to novel experiences"
    ],
    color: COLORS.RED,
    link: "https://unitedhacksv5.devpost.com/",
    articleLink: "https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology"
  },
  {
    id: 4,
    version: "V4",
    title: "United Hacks V4",
    dates: "January 17–19, 2025",
    theme: "Revealed Live + General",
    themeIcon: <Zap className="w-4 h-4" />,
    participants: 359,
    prize: "$138,000",
    summary: [
      "Theme revealed during kickoff",
      "Unleash creativity in any direction"
    ],
    color: COLORS.PINK,
    link: "https://unitedhacksv4.devpost.com/",
    articleLink: "https://blog.hackunited.org/united-hacks-v4-celebrating-innovation-creativity-and-impact"
  },
  {
    id: 3,
    version: "V3",
    title: "United Hacks V3",
    dates: "September 6–8, 2024",
    theme: "Mini Hacks + General",
    themeIcon: <Heart className="w-4 h-4" />,
    participants: 151,
    prize: "$44,200",
    summary: [
      "Solve small problems with big impact",
      "Freedom to innovate without limits"
    ],
    color: COLORS.LIGHT_BLUE,
    link: "https://unitedhacksv3.devpost.com/",
    articleLink: "https://blog.hackunited.org/united-hacks-v3-recap"
  },
  {
    id: 2,
    version: "V2",
    title: "United Hacks V2",
    dates: "January 12–14, 2024",
    theme: "Resolution + General",
    themeIcon: <Building className="w-4 h-4" />,
    participants: 392,
    prize: "$39,500",
    summary: [
      "Build for self-growth or explore any domain",
      "Celebrate innovation with or without boundaries"
    ],
    color: COLORS.BRIGHT_GREEN,
    link: "https://unitedhacksv2.devpost.com/",
    articleLink: "https://blog.hackunited.org/united-hacks-v2-hackathon-recap"
  },
  {
    id: 1,
    version: "V1",
    title: "United Hacks 2023",
    dates: "August 4–6, 2023",
    theme: "Mental Health + General",
    themeIcon: <Zap className="w-4 h-4" />,
    participants: 386,
    prize: "$115,860",
    summary: [
      "Collaborate with like-minded innovators",
      "Tackle mental health or compete in the general track"
    ],
    color: COLORS.YELLOW,
    link: "https://unitedhacks23.devpost.com/",
    articleLink: "#"
  }
];

const AnimatedCounter: React.FC<{ target: number; isVisible: boolean }> = ({ target, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return <span>{count.toLocaleString()}</span>;
};

// New component for the info panel, now a full-screen modal
const InfoPanelModal = ({ hackathon, onClose }: { hackathon: HackathonData; onClose: () => void }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        ref={panelRef}
        initial={{ scale: 0.9, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md relative p-6 rounded-xl border border-opacity-40"
        style={{
          background: `linear-gradient(135deg, ${hackathon.color}40, rgba(0,0,0,0.8))`,
          borderColor: hackathon.color,
          boxShadow: `0 20px 40px ${hackathon.color}40, inset 0 0 30px ${hackathon.color}40`
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-lg font-bold p-1 rounded-full bg-black bg-opacity-40 hover:bg-opacity-60 transition-colors"
        >
          &times;
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-white text-xl font-bold">{hackathon.title}</h3>
          <span
            className="text-xs px-2 py-1 rounded-full font-bold"
            style={{
              backgroundColor: hackathon.color,
              color: COLORS.PRIMARY_BG
            }}
          >
            {hackathon.version}
          </span>
        </div>

        {/* Info Grid */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 text-gray-300">
            <Calendar className="w-4 h-4" style={{ color: hackathon.color }} />
            <span>{hackathon.dates}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            {hackathon.themeIcon}
            <span>{hackathon.theme}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <Users className="w-4 h-4" style={{ color: hackathon.color }} />
            <span><AnimatedCounter target={hackathon.participants} isVisible={true} /> Participants</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <DollarSign className="w-4 h-4" style={{ color: hackathon.color }} />
            <span className="text-lg font-bold" style={{ color: hackathon.color }}>{hackathon.prize}</span>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-4 p-3 rounded-lg bg-black bg-opacity-40 border border-opacity-30" style={{ borderColor: hackathon.color }}>
          <p className="text-gray-300 text-sm leading-relaxed">{hackathon.summary[0]}</p>
          <p className="text-gray-400 text-xs leading-relaxed mt-1">{hackathon.summary[1]}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <a
            href={hackathon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-sm"
            style={{
              background: `linear-gradient(135deg, ${hackathon.color}, ${hackathon.color}80)`,
              boxShadow: `0 4px 20px ${hackathon.color}40`
            }}
          >
            <span className="text-white">Devpost</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
          <a
            href={hackathon.articleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-sm"
            style={{
              background: `linear-gradient(135deg, ${hackathon.color}, ${hackathon.color}80)`,
              boxShadow: `0 4px 20px ${hackathon.color}40`
            }}
          >
            <span className="text-white">Article</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Mobile-friendly card layout component
const MobileGalaxySection = () => {
  const [selectedHackathon, setSelectedHackathon] = useState<HackathonData | null>(null);

  return (
    <section id="previous" className="relative w-full min-h-screen overflow-hidden py-16" style={{ backgroundColor: COLORS.PRIMARY_BG }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`
            }}
          >
            Previous Hackathons
          </h2>
          <p className="text-lg sm:text-xl" style={{ color: COLORS.TEXT_MUTED }}>
            Explore our legacy of innovation
          </p>
        </motion.div>

        {/* Grid of cards for all devices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon) => (
            <div key={hackathon.id} className="relative">
              <motion.div
                className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg p-6 flex flex-col justify-between h-48 transition-all duration-300 transform hover:scale-105 hover:z-30"
                style={{
                  backgroundColor: COLORS.SURFACE,
                  borderColor: hackathon.color,
                  borderWidth: '2px',
                  boxShadow: `0 4px 20px ${hackathon.color}40`
                }}
                onClick={() => setSelectedHackathon(hackathon)}
                whileHover={{ rotate: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Header with version and title */}
                <div className="flex items-center gap-3">
                  <span
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: hackathon.color,
                      color: COLORS.PRIMARY_BG
                    }}
                  >
                    {hackathon.version}
                  </span>
                  <h3 className="text-lg font-bold" style={{ color: hackathon.color }}>{hackathon.title}</h3>
                </div>

                {/* Main content */}
                <div className="mt-auto">
                  <p className="text-sm font-medium" style={{ color: COLORS.TEXT_MAIN }}>{hackathon.summary[0]}</p>
                  <p className="text-xs" style={{ color: COLORS.TEXT_MUTED }}>{hackathon.summary[1]}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Renders the info panel as a modal outside the grid */}
      <AnimatePresence>
        {selectedHackathon && (
          <InfoPanelModal hackathon={selectedHackathon} onClose={() => setSelectedHackathon(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

// Main GalaxySection component - always shows mobile version
const GalaxySection = () => {
  return <MobileGalaxySection />;
};

export default GalaxySection;
