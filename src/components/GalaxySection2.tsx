import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Lightbulb, Users, DollarSign, ExternalLink, Zap, Cpu, Globe, Heart, Building } from 'lucide-react';
import GalaxySection from './GalaxySection';

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
  glowColor: string;
  position: { x: number; y: number; z: number };
  panelPosition: { x: number; y: number; align: 'left' | 'right' | 'center' };
  link: string;
  articleLink: string;
}

const hackathonData: HackathonData[] = [
  {
    id: 1,
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
    color: "#FF6B6B",
    glowColor: "#FF6B6B40",
    position: { x: -220, y: -100, z: -60 },
    panelPosition: { x: -60, y: -10, align: 'right' },
    link: "https://unitedhacks23.devpost.com/",
    articleLink: "#"
  },
  {
    id: 2,
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
    color: "#FEC5E5",
    glowColor: "#F646AA",
    position: { x: -180, y: 150, z: -30 },
    panelPosition: { x: -60, y: 0, align: 'right' },
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
    color: "#45B7D1",
    glowColor: "#45B7D140",
    position: { x: 190, y: 150, z: 80 },
    panelPosition: { x: 150, y: 0, align: 'left' },
    link: "https://unitedhacksv3.devpost.com/",
    articleLink: "https://blog.hackunited.org/united-hacks-v3-recap"
  },
  {
    id: 4,
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
    color: "#88E788",
    glowColor: "#013220",
    position: { x: 230, y: -90, z: 50 },
    panelPosition: { x: 150, y: 0, align: 'left' },
    link: "https://unitedhacksv2.devpost.com/",
    articleLink: "https://blog.hackunited.org/united-hacks-v2-hackathon-recap"
  },
  {
    id: 5,
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
    color: "#FECA57",
    glowColor: "#FECA5740",
    position: { x: 10, y: -200, z: -40 },
    panelPosition: { x: 550, y: 50, align: 'center' },
    link: "https://unitedhacksv5.devpost.com/",
    articleLink: "https://blog.hackunited.org/united-hacks-recap-tackling-mental-health-challenges-through-technology"
  }
];

// V6 Core Data
const v6Data: HackathonData = {
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
  color: "#C0C0C0",
  glowColor: "#888888",
  position: { x: 0, y: 0, z: 0 },
  panelPosition: { x: 100, y: 450, align: 'left' },
  link: "https://unitedhacksv6.devpost.com/",
  articleLink: "#"
};

const AnimatedCounter: React.FC<{ target: number; isVisible: boolean }> = ({ target, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500; // Reduced duration
    const steps = 30; // Reduced steps
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

const GalaxySection2 = () => {
  const [selectedShard, setSelectedShard] = useState<HackathonData | null>(null);
  const [hoveredShard, setHoveredShard] = useState<number | null>(null);
  const [coreRotation, setCoreRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reduced animation frequency for Safari
  useEffect(() => {
    const interval = setInterval(() => {
      setCoreRotation(prev => prev + 0.2); // Much slower rotation
    }, 100); // Less frequent updates

    return () => clearInterval(interval);
  }, []);

  const renderMemoryShards = () => {
    return hackathonData.map((hackathon) => {
      const isHovered = hoveredShard === hackathon.id;
      const isSelected = selectedShard?.id === hackathon.id;

      return (
        <div
          key={hackathon.id}
          className="absolute transition-all duration-300 cursor-pointer"
          style={{
            transform: `translate(${hackathon.position.x}px, ${hackathon.position.y}px)`, // Removed 3D transforms
            willChange: 'transform'
          }}
          onClick={() => setSelectedShard(isSelected ? null : hackathon)}
          onMouseEnter={() => setHoveredShard(hackathon.id)}
          onMouseLeave={() => setHoveredShard(null)}
        >
          {/* Memory Shard - Simplified */}
          <div
            className={`relative w-20 h-20 md:w-24 md:h-24 transition-transform duration-300 ${
              isHovered || isSelected ? 'scale-110' : 'scale-100'
            }`}
            style={{
              willChange: 'transform'
            }}
          >
            {/* Shard body with simplified styling */}
            <div
              className="w-full h-full rounded-lg border border-opacity-50 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${hackathon.color}40, ${hackathon.color}20)`,
                borderColor: hackathon.color,
                boxShadow: `0 4px 16px ${hackathon.glowColor}`
              }}
            >
              {/* Inner glow effect - simplified */}
              <div 
                className="absolute inset-0 rounded-lg opacity-30"
                style={{
                  background: `radial-gradient(circle at center, ${hackathon.color}60, transparent 70%)`
                }}
              />
              
              {/* Version label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span 
                  className="text-white font-bold text-lg md:text-xl"
                  style={{ textShadow: `0 0 8px ${hackathon.color}` }}
                >
                  {hackathon.version}
                </span>
              </div>

              {/* Simple animated border - only on hover */}
              {isHovered && (
                <div 
                  className="absolute inset-0 rounded-lg border-2 opacity-60"
                  style={{
                    borderColor: hackathon.color,
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                />
              )}
            </div>
          </div>

          {/* Info Panel - Custom positioning */}
          {isSelected && (
            <div 
              className="absolute z-50"
              style={{ 
                left: `${hackathon.panelPosition.x}px`,
                top: `${hackathon.panelPosition.y}px`,
                transform: hackathon.panelPosition.align === 'center' ? 'translate(-50%, -50%)' :
                          hackathon.panelPosition.align === 'right' ? 'translate(-100%, -50%)' : 'translateY(-50%)',
                width: '320px',
                maxWidth: '80vw'
              }}
            >
              <div 
                className="backdrop-blur-sm rounded-xl border border-opacity-40 p-6 relative"
                style={{
                  background: `linear-gradient(135deg, ${hackathon.color}20, rgba(0,0,0,0.9))`,
                  borderColor: hackathon.color,
                  boxShadow: `0 8px 24px ${hackathon.glowColor}`
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: hackathon.color }}
                  />
                  <h3 className="text-white text-xl font-bold">{hackathon.title}</h3>
                  <span 
                    className="text-sm px-2 py-1 rounded-full"
                    style={{ 
                      backgroundColor: hackathon.color + '30',
                      color: hackathon.color
                    }}
                  >
                    {hackathon.version}
                  </span>
                </div>

                {/* Info Grid */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-4 h-4" style={{ color: hackathon.color }} />
                    <span className="text-sm">{hackathon.dates}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    {hackathon.themeIcon}
                    <span className="text-sm">{hackathon.theme}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="w-4 h-4" style={{ color: hackathon.color }} />
                    <span className="text-sm">
                      <AnimatedCounter target={hackathon.participants} isVisible={isSelected} /> Participants
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <DollarSign className="w-4 h-4" style={{ color: hackathon.color }} />
                    <span 
                      className="text-lg font-bold"
                      style={{ 
                        color: hackathon.color,
                        textShadow: `0 0 8px ${hackathon.color}`
                      }}
                    >
                      {hackathon.prize}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-4 p-3 rounded-lg bg-black bg-opacity-50 border border-opacity-30" style={{ borderColor: hackathon.color }}>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {hackathon.summary[0]}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">
                    {hackathon.summary[1]}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <button 
                    className="flex-1 py-3 px-4 rounded-lg font-semibold transition-transform duration-200 flex items-center justify-center gap-2 hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${hackathon.color}, ${hackathon.color}80)`,
                      boxShadow: `0 4px 12px ${hackathon.glowColor}`
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(hackathon.link, '_blank');
                    }}
                  >
                    <span className="text-white">Devpost</span>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                  
                  <button 
                    className="flex-1 py-3 px-4 rounded-lg font-semibold transition-transform duration-200 flex items-center justify-center gap-2 hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${hackathon.color}, ${hackathon.color}80)`,
                      boxShadow: `0 4px 12px ${hackathon.glowColor}`
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(hackathon.articleLink, '_blank');
                    }}
                  >
                    <span className="text-white text-sm">Article</span>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  const renderV6Core = () => {
    const isV6Selected = selectedShard?.id === 6;
    const isV6Hovered = hoveredShard === 6;

    return (
      <>
        <div 
          className="relative z-10 cursor-pointer transition-transform duration-300"
          onClick={() => setSelectedShard(isV6Selected ? null : v6Data)}
          onMouseEnter={() => setHoveredShard(6)}
          onMouseLeave={() => setHoveredShard(null)}
        >
          <div className={`relative w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 ${
            isV6Hovered || isV6Selected ? 'scale-110' : 'scale-100'
          }`}>
            {/* Core glow - simplified */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, #88888830, transparent 70%)',
                filter: 'blur(15px)',
                transform: 'scale(1.3)'
              }}
            />
            
            {/* Core body */}
            <div className="relative w-full h-full rounded-full border-2 border-gray-400 overflow-hidden"
                 style={{ background: 'linear-gradient(135deg, #88888820, #88888810)' }}>
             
              {/* Core content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-lg md:text-xl font-bold mb-1" style={{ textShadow: '0 0 8px #888888' }}>
                  United Hacks
                </div>
                <div className="text-2xl md:text-3xl font-bold" style={{ textShadow: '0 0 12px #888888' }}>
                  V6
                </div>
              </div>

              {/* Simplified rotating rings - only when hovered */}
              {isV6Hovered && (
                <>
                  <div 
                    className="absolute inset-4 rounded-full border border-gray-400/50"
                    style={{ 
                      animation: 'spin 8s linear infinite',
                      transform: `rotate(${coreRotation}deg)`
                    }}
                  />
                  <div 
                    className="absolute inset-8 rounded-full border border-gray-400/30"
                    style={{ 
                      animation: 'spin 12s linear infinite reverse',
                      transform: `rotate(${-coreRotation * 0.8}deg)`
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* V6 Info Panel - Custom positioning */}
        {isV6Selected && (
          <div 
            className="absolute z-50"
            style={{ 
              left: `${v6Data.panelPosition.x}px`,
              top: `${v6Data.panelPosition.y}px`,
              transform: v6Data.panelPosition.align === 'center' ? 'translate(-50%, -50%)' :
                        v6Data.panelPosition.align === 'right' ? 'translate(-100%, -50%)' : 'translateY(-50%)',
              width: '320px',
              maxWidth: '80vw'
            }}
          >
            <div 
              className="backdrop-blur-sm rounded-xl border border-opacity-40 p-6 relative"
              style={{
                background: `linear-gradient(135deg, ${v6Data.color}20, rgba(0,0,0,0.9))`,
                borderColor: v6Data.color,
                boxShadow: `0 8px 24px ${v6Data.glowColor}`
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: v6Data.color }}
                />
                <h3 className="text-white text-xl font-bold">{v6Data.title}</h3>
                <span 
                  className="text-sm px-2 py-1 rounded-full"
                  style={{ 
                    backgroundColor: v6Data.color + '30',
                    color: v6Data.color
                  }}
                >
                  {v6Data.version}
                </span>
              </div>

              {/* Info Grid */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-4 h-4" style={{ color: v6Data.color }} />
                  <span className="text-sm">{v6Data.dates}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  {v6Data.themeIcon}
                  <span className="text-sm">{v6Data.theme}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Users className="w-4 h-4" style={{ color: v6Data.color }} />
                  <span className="text-sm">
                    <AnimatedCounter target={v6Data.participants} isVisible={isV6Selected} /> Participants
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <DollarSign className="w-4 h-4" style={{ color: v6Data.color }} />
                  <span 
                    className="text-lg font-bold"
                    style={{ 
                      color: v6Data.color,
                      textShadow: `0 0 8px ${v6Data.color}`
                    }}
                  >
                    {v6Data.prize}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-4 p-3 rounded-lg bg-black bg-opacity-50 border border-opacity-30" style={{ borderColor: v6Data.color }}>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {v6Data.summary[0]}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mt-1">
                  {v6Data.summary[1]}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <button 
                  className="flex-1 py-3 px-4 rounded-lg font-semibold transition-transform duration-200 flex items-center justify-center gap-2 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${v6Data.color}, ${v6Data.color}80)`,
                    boxShadow: `0 4px 12px ${v6Data.glowColor}`
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(v6Data.link, '_blank');
                  }}
                >
                  <span className="text-white">Devpost</span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </button>
                
                <button 
                  className="flex-1 py-3 px-4 rounded-lg font-semibold transition-transform duration-200 flex items-center justify-center gap-2 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${v6Data.color}, ${v6Data.color}80)`,
                    boxShadow: `0 4px 12px ${v6Data.glowColor}`
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(v6Data.articleLink, '_blank');
                  }}
                >
                  <span className="text-white text-sm">Article</span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <section id="previous" className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: '#0E0B16' }}>
      {/* Background - simplified */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-transparent" />
      </div>

      {/* Title Section */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Previous Hackathons
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our legacy of innovation through an interactive galaxy
        </p>
      </div>

      {/* Main container */}
      <div 
        ref={containerRef}
        className="relative w-full h-screen flex items-center justify-center"
      >
        {/* Central Core - United Hacks V6 */}
        {renderV6Core()}

        {/* Memory Shards */}
        {renderMemoryShards()}

        {/* Instructions */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-400">
          <p className="text-sm">Click on memory shards or the core to explore hackathons</p>
        </div>
      </div>

      {/* Simplified CSS animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Safari-specific optimizations */
        @media screen and (-webkit-min-device-pixel-ratio: 1) {
          .transition-all {
            transition-duration: 0.2s;
          }
          
          [style*="backdrop-blur"] {
            backdrop-filter: none;
            background: rgba(0, 0, 0, 0.8) !important;
          }
        }
      `}</style>
    </section>
  );
};

// Wrapper component that handles responsive rendering
const GalaxySectionWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show GalaxySection on mobile, GalaxySection2 on desktop
  return isMobile ? <GalaxySection /> : <GalaxySection2 />;
};

export default GalaxySectionWrapper;
