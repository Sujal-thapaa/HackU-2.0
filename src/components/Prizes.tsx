import React, { useState, useCallback } from 'react';
import { Trophy, Award, Users, Video, Zap, Gift, Star, RotateCcw } from 'lucide-react';

// Define the color palette
const COLORS = {
  

  PRIMARY_BG: '#0E0B16',      // Dark Plum
  PRIMARY_ACCENT: '#9370DB',  // Medium Purple
  SECONDARY_ACCENT: '#D8BFD8', // Thistle
  SURFACE: '#1A162B',         // Darker Plum
  TEXT_MAIN: '#E0E0E0',       // Soft White
  TEXT_MUTED: '#BDBDBD',      // Lighter Gray
  LINK_HOVER: '#B799FF',      // Soft Vibrant Violet (Optional refinement)
};

interface Prize {
  category: string;
  prize: string;
  winners: string;
  icon: React.ComponentType<any>;
  description?: string;
  items: string[];
}

const Prize = () => {
  const [currentPrizeIndex, setCurrentPrizeIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedPrizes, setRevealedPrizes] = useState<Prize[]>([]);
  const [chestOpened, setChestOpened] = useState(false);
  const [showCurrentPrize, setShowCurrentPrize] = useState(false);
  const [waitingForDismiss, setWaitingForDismiss] = useState(false);

  const prizes: Prize[] = [
    {
      category: 'First Place - General',
      prize: '$250 in cash',
      winners: '1 winner',
      icon: Trophy,
      items: [
        'Certificate of Achievement',
        'Featured and Praised in Online Article',
        '$250 Cash Prize',
        'Hack United Swag Pack',
        '1 Year VIP CodeCrafters Membership ($180)',
        'Chance to Pitch for a 50k investment from Switchon Capital',
        'All Participant Prizes'
      ]
    },
    {
      category: 'First Place - Theme',
      prize: '$250 in cash',
      winners: '1 winner',
      icon: Trophy,
      items: [
        'Certificate of Achievement',
        'Featured and Praised in Online Article',
        '$250 Cash Prize',
        'Hack United Swag Pack',
        '2 Year VIP CodeCrafters Membership ($360)',
        'Chance to Pitch 50k investment from Switchon Capital',
        'All Participant Prizes'
      ]
    },
    {
      category: 'Second Place - General',
      prize: '$100 in cash',
      winners: '1 winner',
      icon: Award,
      items: [
        'Certificate of Achievement',
        'Featured and Praised in Online Article',
        '$100 Cash Prize',
        'Hack United Swag Pack',
        'All Participant Prizes'
      ]
    },
    {
      category: 'Second Place - Theme',
      prize: '$100 in cash',
      winners: '1 winner',
      icon: Award,
      items: [
        'Certificate of Achievement',
        'Featured and Praised in Online Article',
        '$100 Cash Prize',
        'Hack United Swag Pack',
        '6 Month VIP CodeCrafters Membership ($90)',
        'All Participant Prizes'
      ]
    },
    {
      category: 'Best Solo Hack',
      prize: 'Airpods Pro 2 ($250)',
      winners: '1 winner',
      icon: Users,
      description: 'Best project developed by an individual rather than a team. In order to be eligible for this prize, your project MUST be based around the theme!',
      items: [
        'Airpods Pro 2 ($250)',
        'Certificate of Achievement',
        'Featured and Praised in Online Article',
        'Hack United Swag Pack',
        'All Participant Prizes'
      ]
    },
    {
      category: 'Best Pitch',
      prize: 'Digital Camera for EVERY Team Member',
      winners: '1 winner',
      icon: Video,
      description: 'This prize is given to the team with the most compelling video presentation.',
      items: [
        'Certificate of Achievement',
        'Featured and Praised in Online Article',
        'Hack United Swag Pack',
        'Digital Camera for EVERY Team Member'
      ]
    },
    {
      category: 'Moonshot Prize',
      prize: '$50,000 in cash',
      winners: '1 winner',
      icon: Zap,
      description: 'Build a hack that is way too ambitious for a weekend, yet you dared to dream big anyway.',
      items: [
        'Chance to Pitch with SwitchOn Capital for a $50,000 investment'
      ]
    },
    {
      category: 'Participant Prize',
      prize: 'Various Prizes',
      winners: 'All participants',
      icon: Gift,
      items: [
        'Certificate of Participation',
        '2 Months of Balsamiq Cloud Pro ($24)',
        '1 Month Interview Cake License ($249)',
        'Free .xyz domain for 1 year ($13)',
        'Wolfram 1 Access 6 Months ($50)'
      ]
    }
  ];

  const allPrizesRevealed = currentPrizeIndex >= prizes.length && !showCurrentPrize;
  const currentPrize = showCurrentPrize && currentPrizeIndex > 0 ? prizes[currentPrizeIndex - 1] : null;

  const handleChestClick = useCallback(() => {
    if (isAnimating || allPrizesRevealed) return;

    setIsAnimating(true);
    setChestOpened(true);
    setWaitingForDismiss(false);

    // Chest opening animation
    setTimeout(() => {
      const newPrize = prizes[currentPrizeIndex];
      setRevealedPrizes(prev => [...prev, newPrize]);
      setShowCurrentPrize(true);
      setCurrentPrizeIndex(prev => prev + 1);
      setWaitingForDismiss(true);

      // Reset chest state but keep prize visible
      setChestOpened(false);
      setIsAnimating(false);
    }, 800);
  }, [isAnimating, currentPrizeIndex, allPrizesRevealed, prizes]);

  const handleAdvanceToNext = useCallback(() => {
    if (!waitingForDismiss && !showCurrentPrize) return;
    
    setShowCurrentPrize(false);
    setWaitingForDismiss(false);
  }, [waitingForDismiss, showCurrentPrize]);

  const handleReset = useCallback(() => {
    setCurrentPrizeIndex(0);
    setRevealedPrizes([]);
    setChestOpened(false);
    setShowCurrentPrize(false);
    setIsAnimating(false);
    setWaitingForDismiss(false);
  }, []);

  return (
    <section 
      id="prizes" 
      className="py-20 min-h-screen" 
      style={{ backgroundColor: COLORS.PRIMARY_BG }}
      onClick={handleAdvanceToNext}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent px-4 sm:px-0"
            style={{
              backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`
            }}
          >
            Prizes
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4 sm:px-0" style={{ color: COLORS.TEXT_MUTED }}>
            $50,700+ in prizes + other prizes
          </p>
        </div>

        {!allPrizesRevealed ? (
          <>
            {/* Treasure Chest Section */}
            <div className="flex flex-col items-center justify-center mb-16">
              <div className="relative" style={{ perspective: '1000px' }}>
                {/* Treasure Chest */}
                <div
                  className={`
                    relative w-72 h-48 cursor-pointer transition-all duration-500 transform-gpu
                    ${!chestOpened && !isAnimating ? 'hover:scale-110 hover:rotateY-12 hover:rotateX-8' : ''}
                    ${chestOpened ? 'animate-bounce scale-105' : ''}
                    ${isAnimating ? 'animate-pulse scale-95' : ''}
                  `}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChestClick();
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    filter: `
                      drop-shadow(0 15px 35px rgba(0, 0, 0, 0.8)) 
                      drop-shadow(0 5px 15px rgba(255, 104, 73, 0.6))
                      drop-shadow(0 0 50px rgba(255, 104, 73, 0.4))
                    `,
                    animation: !chestOpened && !isAnimating ? 'treasure-glow 3s ease-in-out infinite alternate, gentle-float 4s ease-in-out infinite' : undefined
                  }}
                >
                  {/* Enhanced Base Shadow */}
                  <div
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-80 h-12 rounded-full opacity-60"
                    style={{
                      background: 'radial-gradient(ellipse, rgba(0,0,0,0.8) 0%, transparent 70%)',
                      filter: 'blur(8px)'
                    }}
                  />

                  {/* Chest Base with Enhanced 3D Effect */}
                  <div
                    className="absolute bottom-0 w-full h-32 rounded-lg border-4 border-yellow-600 transform-gpu"
                    style={{
                      background: `
                        linear-gradient(135deg, #4a2c2a 0%, #654321 15%, #8B4513 30%, #A0522D 50%, #8B4513 70%, #654321 85%, #4a2c2a 100%),
                        repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 6px),
                        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,215,0,0.1) 2px, rgba(255,215,0,0.1) 4px)
                      `,
                      boxShadow: `
                        inset 0 8px 16px rgba(0,0,0,0.5), 
                        inset 0 -8px 16px rgba(255,215,0,0.3),
                        inset 4px 0 8px rgba(0,0,0,0.3),
                        inset -4px 0 8px rgba(255,215,0,0.2),
                        0 20px 40px rgba(0,0,0,0.6),
                        0 0 0 3px #B8860B,
                        0 0 0 6px rgba(184,134,11,0.3)
                      `,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Enhanced Metal Bands with 3D Effect */}
                    <div 
                      className="absolute top-4 left-4 right-4 h-2 rounded-full transform"
                      style={{ 
                        background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)'
                      }}
                    />
                    <div 
                      className="absolute bottom-4 left-4 right-4 h-2 rounded-full"
                      style={{ 
                        background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)'
                      }}
                    />
                    <div 
                      className="absolute top-4 bottom-4 left-4 w-2 rounded-full"
                      style={{ 
                        background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)',
                        boxShadow: '2px 0 4px rgba(0,0,0,0.4), inset 1px 0 2px rgba(255,255,255,0.3)'
                      }}
                    />
                    <div 
                      className="absolute top-4 bottom-4 right-4 w-2 rounded-full"
                      style={{ 
                        background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)',
                        boxShadow: '-2px 0 4px rgba(0,0,0,0.4), inset -1px 0 2px rgba(255,255,255,0.3)'
                      }}
                    />
                    
                    {/* Corner Reinforcements */}
                    <div 
                      className="absolute top-2 left-2 w-6 h-6 rounded-full"
                      style={{ 
                        background: 'radial-gradient(circle, #FFD700 0%, #B8860B 100%)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)'
                      }}
                    />
                    <div 
                      className="absolute top-2 right-2 w-6 h-6 rounded-full"
                      style={{ 
                        background: 'radial-gradient(circle, #FFD700 0%, #B8860B 100%)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)'
                      }}
                    />
                    <div 
                      className="absolute bottom-2 left-2 w-6 h-6 rounded-full"
                      style={{ 
                        background: 'radial-gradient(circle, #FFD700 0%, #B8860B 100%)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)'
                      }}
                    />
                    <div 
                      className="absolute bottom-2 right-2 w-6 h-6 rounded-full"
                      style={{ 
                        background: 'radial-gradient(circle, #FFD700 0%, #B8860B 100%)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)'
                      }}
                    />
                  </div>
                  
                  {/* Chest Lid with Enhanced 3D Design */}
                  <div
                    className={`
                      absolute top-0 w-full h-28 rounded-t-lg transition-all duration-1000 origin-bottom border-4 border-yellow-600 transform-gpu
                      ${chestOpened ? 'rotateX-60 translateZ-8' : 'rotateX-0'}
                    `}
                    style={{
                      background: `
                        linear-gradient(135deg, #5d4037 0%, #8B4513 15%, #A0522D 30%, #D2691E 45%, #CD853F 55%, #A0522D 70%, #8B4513 85%, #5d4037 100%),
                        repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px),
                        repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,215,0,0.1) 1px, rgba(255,215,0,0.1) 2px)
                      `,
                      boxShadow: `
                        inset 0 8px 16px rgba(255,215,0,0.4), 
                        inset 0 -4px 8px rgba(0,0,0,0.5),
                        inset 4px 0 8px rgba(255,215,0,0.2),
                        inset -4px 0 8px rgba(0,0,0,0.3),
                        0 12px 24px rgba(0,0,0,0.5),
                        0 0 0 3px #B8860B,
                        0 0 0 6px rgba(184,134,11,0.3)
                      `,
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'bottom center'
                    }}
                  >
                    {/* Enhanced Lid Metal Bands */}
                    <div 
                      className="absolute top-4 left-4 right-4 h-2 rounded-full"
                      style={{ 
                        background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.4)'
                      }}
                    />
                    <div 
                      className="absolute bottom-4 left-4 right-4 h-2 rounded-full"
                      style={{ 
                        background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.4)'
                      }}
                    />
                    
                    {/* Lid Interior Glow */}
                    <div
                      className="absolute inset-2 rounded opacity-30"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.6) 0%, transparent 70%)'
                      }}
                    />
                  </div>
                  
                  {/* Enhanced Chest Lock with 3D Effect */}
                  <div
                    className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 flex items-center justify-center"
                    style={{
                      background: `
                        radial-gradient(circle, #FFD700 0%, #FFA500 30%, #FF8C00 60%, #B8860B 100%),
                        conic-gradient(from 0deg, #FFD700, #FFA500, #FFD700, #FFA500, #FFD700)
                      `,
                      borderColor: '#B8860B',
                      boxShadow: `
                        0 8px 16px rgba(0,0,0,0.5),
                        inset 0 4px 8px rgba(255,255,255,0.4),
                        inset 0 -4px 8px rgba(0,0,0,0.4),
                        0 0 20px rgba(255,215,0,0.6)
                      `,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Enhanced Keyhole */}
                    <div 
                      className="w-4 h-4 rounded-full relative"
                      style={{ 
                        background: 'radial-gradient(circle, #2c1810 0%, #1a0f0a 100%)',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.9), 0 0 0 1px rgba(139,69,19,0.5)'
                      }}
                    >
                      <div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-3"
                        style={{ 
                          background: 'linear-gradient(180deg, #2c1810 0%, #1a0f0a 100%)',
                          clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)'
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Enhanced Magical Aura */}
                  <div
                    className="absolute inset-0 rounded-lg animate-pulse pointer-events-none"
                    style={{
                      background: `
                        radial-gradient(ellipse 120% 80% at 50% 60%, ${COLORS.PRIMARY_ACCENT}40 0%, ${COLORS.SECONDARY_ACCENT}30 30%, transparent 70%),
                        radial-gradient(ellipse 80% 60% at 30% 30%, ${COLORS.SECONDARY_ACCENT}35 0%, transparent 60%),
                        radial-gradient(ellipse 100% 70% at 70% 70%, rgba(255,215,0,0.3) 0%, transparent 50%)
                      `,
                      filter: 'blur(20px)',
                      animation: 'magical-aura 3s ease-in-out infinite alternate'
                    }}
                  />
                  
                  {/* Enhanced Magical Sparkles */}
                  {!chestOpened && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <div 
                          key={i}
                          className="absolute w-3 h-3 rounded-full animate-ping pointer-events-none"
                          style={{ 
                            background: i % 3 === 0 ? COLORS.SECONDARY_ACCENT : i % 3 === 1 ? COLORS.PRIMARY_ACCENT : '#FFD700',
                            top: `${20 + (i * 15)}%`,
                            left: `${15 + (i * 12)}%`,
                            right: i > 3 ? `${15 + ((i-3) * 12)}%` : 'auto',
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${2 + (i * 0.2)}s`,
                            filter: 'blur(0.5px)',
                            boxShadow: `0 0 10px currentColor`
                          }}
                        />
                      ))}
                    </>
                  )}
                  
                  {/* Particle Effects */}
                  {!chestOpened && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 rounded-full animate-bounce"
                          style={{
                            background: `hsl(${45 + (i * 30)}, 80%, 60%)`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                            opacity: 0.7,
                            filter: 'blur(0.5px)'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Prize Counter */}
                <div className="mt-12 text-center">
                  <p style={{ color: COLORS.TEXT_MUTED }} className="text-lg">
                    Prizes Discovered: {currentPrizeIndex} / {prizes.length}
                  </p>
                  <p style={{ color: COLORS.SECONDARY_ACCENT }} className="text-sm mt-2">
                    {isAnimating ? 'Opening chest...' : 
                     waitingForDismiss ? 'Click anywhere to continue...' : 
                     'Click the chest to discover a prize!'}
                  </p>
                </div>
              </div>
            </div>

            {/* Current Prize Animation */}
            {currentPrize && showCurrentPrize && (
              <div
                className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 animate-fadeIn p-4 cursor-pointer"
                style={{ animation: 'prize-reveal 0.8s ease-out' }}
              >
                <div
                  className="p-6 rounded-2xl border-2 max-w-md w-full transform animate-bounce relative overflow-hidden"
                  style={{
                    backgroundColor: COLORS.SURFACE,
                    borderColor: COLORS.PRIMARY_ACCENT,
                    boxShadow: `
                      0 0 80px ${COLORS.PRIMARY_ACCENT}90,
                      0 0 120px ${COLORS.SECONDARY_ACCENT}60,
                      inset 0 2px 0 rgba(255,255,255,0.1),
                      inset 0 -2px 0 rgba(0,0,0,0.3)
                    `,
                    animation: 'prize-glow 2s ease-in-out infinite alternate, prize-float 3s ease-in-out infinite'
                  }}
                >
                  {/* Enhanced Background Effects */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `
                        radial-gradient(circle at 30% 30%, ${COLORS.PRIMARY_ACCENT} 0%, transparent 50%),
                        radial-gradient(circle at 70% 70%, ${COLORS.SECONDARY_ACCENT} 0%, transparent 50%),
                        conic-gradient(from 0deg at 50% 50%, transparent, ${COLORS.PRIMARY_ACCENT}20, transparent)
                      `
                    }}
                  />
                  
                  <div className="text-center relative z-10">
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center relative"
                      style={{ 
                        background: `
                          linear-gradient(135deg, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT}),
                          radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent)
                        `,
                        boxShadow: `
                          0 12px 30px rgba(0,0,0,0.4), 
                          0 0 0 6px ${COLORS.PRIMARY_ACCENT}30,
                          inset 0 4px 8px rgba(255,255,255,0.2),
                          inset 0 -4px 8px rgba(0,0,0,0.2)
                        `
                      }}
                    >
                      <currentPrize.icon className="text-white relative z-10" size={32} />
                      <div 
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{ backgroundColor: `${COLORS.PRIMARY_ACCENT}50` }}
                      />
                      <div 
                        className="absolute inset-0 rounded-full animate-pulse"
                        style={{ 
                          background: `conic-gradient(from 0deg, transparent, ${COLORS.SECONDARY_ACCENT}40, transparent)`,
                          animation: 'icon-rotate 4s linear infinite'
                        }}
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.TEXT_MAIN }}>
                      {currentPrize.category}
                    </h3>
                    
                    <p className="text-xl font-semibold mb-4" style={{ color: COLORS.SECONDARY_ACCENT }}>
                      {currentPrize.prize}
                    </p>
                    
                    <p className="text-base mb-4" style={{ color: COLORS.TEXT_MUTED }}>
                      {currentPrize.winners}
                    </p>
                    
                    {currentPrize.description && (
                      <p className="text-sm mb-4 italic" style={{ color: COLORS.TEXT_MUTED }}>
                        {currentPrize.description}
                      </p>
                    )}
                    
                    {/* Enhanced Prize Items List */}
                    <div className="text-left">
                      <h4 className="text-base font-semibold mb-3 text-center" style={{ color: COLORS.SECONDARY_ACCENT }}>
                        What You Get:
                      </h4>
                      <div className="space-y-2">
                        {currentPrize.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex} 
                            className="flex items-start gap-2 p-2 rounded-lg transform hover:scale-102 transition-all duration-300"
                            style={{ 
                              backgroundColor: `${COLORS.PRIMARY_ACCENT}15`,
                              border: `1px solid ${COLORS.PRIMARY_ACCENT}30`,
                              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}
                          >
                            <Star
                              className="mt-1 flex-shrink-0"
                              size={14}
                              style={{ 
                                color: COLORS.SECONDARY_ACCENT,
                                filter: 'drop-shadow(0 0 4px currentColor)'
                              }}
                            />
                            <p className="text-sm font-medium" style={{ color: COLORS.TEXT_MAIN }}>
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="text-sm animate-pulse" style={{ color: COLORS.SECONDARY_ACCENT }}>
                        Click anywhere to continue...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {/* All Prizes Revealed - Enhanced Grid Layout */}
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-6" style={{ color: COLORS.SECONDARY_ACCENT }}>
                🎉 All Prizes Discovered! 🎉
              </h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleReset();
                }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform"
                style={{
                  backgroundColor: COLORS.PRIMARY_ACCENT,
                  color: COLORS.TEXT_MAIN,
                  boxShadow: `0 8px 20px ${COLORS.PRIMARY_ACCENT}40`
                }}
              >
                <RotateCcw size={24} />
                
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {prizes.map((prize, index) => {
                const IconComponent = prize.icon;
                return (
                  <div
                    key={index}
                    className="p-6 sm:p-8 rounded-2xl border transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 animate-fadeInUp cursor-pointer"
                    style={{
                      backgroundColor: COLORS.SURFACE,
                      borderColor: `${COLORS.PRIMARY_ACCENT}30`,
                      animationDelay: `${index * 0.1}s`,
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                      background: `
                        ${COLORS.SURFACE},
                        radial-gradient(circle at top right, ${COLORS.PRIMARY_ACCENT}10, transparent)
                      `
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center"
                        style={{ 
                          backgroundColor: COLORS.PRIMARY_ACCENT,
                          boxShadow: `0 4px 12px ${COLORS.PRIMARY_ACCENT}40`
                        }}
                      >
                        <IconComponent className="text-white" size={24} className="sm:w-7 sm:h-7" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold" style={{ color: COLORS.TEXT_MAIN }}>
                          {prize.category}
                        </h3>
                        <p className="text-xs sm:text-sm" style={{ color: COLORS.TEXT_MUTED }}>
                          {prize.winners}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3" style={{ color: COLORS.SECONDARY_ACCENT }}>
                        {prize.prize}
                      </p>
                      {prize.description && (
                        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: COLORS.TEXT_MUTED }}>
                          {prize.description}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3">
                      {prize.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          <Star
                            className="mt-1 flex-shrink-0"
                            size={14}
                            style={{ color: COLORS.SECONDARY_ACCENT }}
                          />
                          <p className="text-sm leading-relaxed" style={{ color: COLORS.TEXT_MUTED }}>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Total Prize Pool */}
            <div className="text-center">
              <div
                className="p-10 rounded-2xl relative overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent)'
                  }}
                />
                <h3 className="text-4xl font-bold text-white mb-3 relative z-10">Total Prize Pool</h3>
                <p className="text-3xl font-semibold text-white relative z-10">$50,700+</p>
                <p className="mt-3 text-white opacity-90 text-lg relative z-10">in cash prizes and rewards</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes treasure-glow {
          0% { 
            filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.8)) drop-shadow(0 5px 15px rgba(255, 104, 73, 0.6)) drop-shadow(0 0 50px rgba(255, 104, 73, 0.4));
          }
          100% { 
            filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.9)) drop-shadow(0 8px 20px rgba(255, 104, 73, 0.8)) drop-shadow(0 0 70px rgba(255, 104, 73, 0.6));
          }
        }
        
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          33% { transform: translateY(-8px) rotateY(2deg); }
          66% { transform: translateY(-4px) rotateY(-1deg); }
        }
        
        @keyframes magical-aura {
          0% { 
            filter: blur(20px);
            opacity: 0.6;
            transform: scale(1);
          }
          100% { 
            filter: blur(25px);
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        
        @keyframes prize-reveal {
          0% { 
            opacity: 0; 
            transform: scale(0.8) rotateY(-20deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05) rotateY(5deg);
          }
          100% { 
            opacity: 1; 
            transform: scale(1) rotateY(0deg);
          }
        }
        
        @keyframes prize-glow {
          0% { 
            box-shadow: 0 0 80px ${COLORS.PRIMARY_ACCENT}90, 0 0 120px ${COLORS.SECONDARY_ACCENT}60, inset 0 2px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.3);
          }
          100% { 
            box-shadow: 0 0 100px ${COLORS.PRIMARY_ACCENT}100, 0 0 150px ${COLORS.SECONDARY_ACCENT}80, inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.4);
          }
        }
        
        @keyframes prize-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes icon-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(40px) rotateX(10deg); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) rotateX(0deg); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
        
        .hover\\:rotateY-12:hover {
          transform: rotateY(-12deg) !important;
        }
        
        .hover\\:rotateX-8:hover {
          transform: rotateX(-8deg) rotateY(-12deg) !important;
        }
        
        .rotateX-60 {
          transform: rotateX(-60deg);
        }
        
        .translateZ-8 {
          transform: rotateX(-60deg) translateZ(8px);
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        .hover\\:rotate-1:hover {
          transform: scale(1.05) rotate(1deg);
        }
      `}</style>
    </section>
  );
};

export default Prize;