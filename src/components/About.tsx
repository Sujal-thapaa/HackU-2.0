import React from 'react';
import { Play, Clock, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';

// Define the new color palette
const COLORS = {
  PRIMARY_BG: '#0E0B16',      // Charcoal Night (Main background, nav, footers)
  PRIMARY_ACCENT: '#6C2BD9',   // Royal Purple (Buttons, highlights, active states)
  SECONDARY_ACCENT: '#4A2A80', // A darker, more muted purple
  SURFACE: '#1A162B',         // Darker plum for cards
  TEXT_MAIN: '#BDBDBD',       // Soft Gray for main text
  TEXT_MUTED: '#BDBDBD',      // Soft Gray for muted text
  LINK_HOVER: '#6C2BD9',      // Royal Purple (Buttons, highlights, active states - for consistency)
};

const About = () => {
  const features = [
    {
      icon: "/icons/clock.png",
      title: "48 Hours of Innovation",
      description: "Non-stop coding, learning, and building with developers from 50+ countries worldwide.",
    },
    {
      icon: "/icons/trophy.png",
      title: "$50,000+ in Prizes",
      description: "Compete for cash prizes, internships, and exclusive opportunities with top tech companies.",
    },
    {
      icon: "/icons/peoples.png",
      title: "Learn from the Best",
      description: "Workshops, mentorship, and guidance from industry experts and successful entrepreneurs.",
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" style={{ backgroundColor: COLORS.PRIMARY_BG }}>
      {/* Background gradient effects */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `linear-gradient(135deg, ${COLORS.PRIMARY_ACCENT}08 0%, ${COLORS.SECONDARY_ACCENT}08 100%)` }}
      ></div>
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: `${COLORS.PRIMARY_ACCENT}1A` }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: `${COLORS.SECONDARY_ACCENT}1A` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent leading-tight px-4 sm:px-0"
            style={{
              backgroundImage: `linear-gradient(to right, ${COLORS.SECONDARY_ACCENT}, ${COLORS.TEXT_MAIN})`,
              fontFamily: 'var(--font-heading)'
            }}
          >
            What is United Hacks V6?
          </h2>
          <p
            className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0"
            style={{
              color: COLORS.TEXT_MAIN,
              fontFamily: 'var(--font-body)'
            }}
          >
            The premier global online hackathon bringing together the brightest minds from around the world.
            Join us for 48 hours of innovation, collaboration, and world-changing solutions.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl border rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:scale-105 hover:-rotate-1 transition-all duration-500 cursor-pointer"
              style={{
                backgroundColor: COLORS.SURFACE,
                borderColor: `${COLORS.PRIMARY_ACCENT}1A`,
                boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 ${COLORS.PRIMARY_BG}1A`
              }}
            >
              {/* Gradient background on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"
                style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})` }}
              ></div>

              {/* Icon */}
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-white group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: COLORS.PRIMARY_ACCENT }}
              >
                <img src={feature.icon} alt={feature.title} className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              {/* Content */}
              <h3
                className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                style={{
                  color: COLORS.TEXT_MAIN,
                  backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`,
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {feature.title}
              </h3>
              <p
                className="leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                style={{
                  color: COLORS.TEXT_MAIN,
                  fontFamily: 'var(--font-body)'
                }}
              >
                {feature.description}
              </p>

              {/* Subtle glow effect */}
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10"
                style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}40, ${COLORS.SECONDARY_ACCENT}40)` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
