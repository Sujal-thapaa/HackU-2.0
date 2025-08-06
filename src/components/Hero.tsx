import React, { useEffect, useState } from 'react';
import { Play, UserPlus } from 'lucide-react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const COLORS = {
    PRIMARY_BG: '#0E0B16',
    PRIMARY_ACCENT: '#6C2BD9',
    SECONDARY_ACCENT: '#4A2A80',
    SURFACE: '#1A162B',
    TEXT_MAIN: '#E0E0E0',
    TEXT_MUTED: '#BDBDBD',
    LINK_HOVER: '#B799FF',
    GRADIENT_START: '#6C2BD9',
    GRADIENT_END: '#B799FF',
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-01-18T11:00:00-06:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>
        {`
          /* Using Times New Roman as requested */
          :root {
            --font-heading: 'Times New Roman', serif;
            --font-body: 'Times New Roman', serif;
            --font-code: 'IBM Plex Mono', monospace;
          }

          body {
            font-family: var(--font-body);
          }

          /* Fixed background replacement - Safari optimized */
          #app-wrapper {
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
          }

          #app-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/Background.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            z-index: -2;
            will-change: transform;
            transform: translateZ(0);
          }

          .hero-gradient {
            position: relative;
            background: rgba(14, 11, 22, 0.85);
            will-change: transform;
            transform: translateZ(0);
          }

          /* Simplified gradient overlay */
          .hero-gradient::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 20% 80%, ${COLORS.PRIMARY_ACCENT}15 0%, transparent 60%),
              radial-gradient(circle at 80% 20%, ${COLORS.LINK_HOVER}10 0%, transparent 60%);
            animation: gentleGlow 12s ease-in-out infinite;
            will-change: opacity;
          }

          @keyframes gentleGlow {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.7; }
          }

          /* Simplified particles */
          .floating-particles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
          }

          .particle {
            position: absolute;
            background: ${COLORS.LINK_HOVER};
            border-radius: 50%;
            opacity: 0.15;
            will-change: transform;
          }

          .particle:nth-child(1) { 
            width: 3px; height: 3px; 
            top: 20%; left: 15%; 
            animation: gentleFloat1 8s ease-in-out infinite;
          }
          .particle:nth-child(2) { 
            width: 4px; height: 4px; 
            top: 60%; left: 25%; 
            animation: gentleFloat2 10s ease-in-out infinite 2s;
          }
          .particle:nth-child(3) { 
            width: 2px; height: 2px; 
            top: 40%; left: 75%; 
            animation: gentleFloat3 9s ease-in-out infinite 4s;
          }

          @keyframes gentleFloat1 {
            0%, 100% { transform: translate3d(0, 0, 0); }
            50% { transform: translate3d(0, -15px, 0); }
          }

          @keyframes gentleFloat2 {
            0%, 100% { transform: translate3d(0, 0, 0); }
            50% { transform: translate3d(0, -10px, 0); }
          }

          @keyframes gentleFloat3 {
            0%, 100% { transform: translate3d(0, 0, 0); }
            50% { transform: translate3d(0, -12px, 0); }
          }

          .hero-title {
            font-family: var(--font-heading);
            font-weight: 800;
            background: linear-gradient(135deg, ${COLORS.TEXT_MAIN}, ${COLORS.LINK_HOVER});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 0 20px rgba(183, 153, 255, 0.2);
            will-change: transform;
          }

          .hero-subtitle {
            font-family: var(--font-body);
            color: ${COLORS.TEXT_MUTED};
            font-weight: 500;
            line-height: 1.6;
          }

          .cta-button {
            font-family: var(--font-body);
            font-weight: 600;
            border-radius: 12px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            overflow: hidden;
            will-change: transform;
          }

          .cta-primary {
            background: linear-gradient(135deg, ${COLORS.PRIMARY_ACCENT}, ${COLORS.LINK_HOVER});
            box-shadow: 0 4px 20px rgba(108, 43, 217, 0.3);
          }

          .cta-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(108, 43, 217, 0.4);
          }

          .cta-secondary {
            background: linear-gradient(135deg, ${COLORS.SURFACE}, ${COLORS.SECONDARY_ACCENT});
            border: 1px solid rgba(183, 153, 255, 0.3);
            box-shadow: 0 4px 20px rgba(74, 42, 128, 0.2);
          }

          .cta-secondary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(74, 42, 128, 0.3);
            border-color: rgba(183, 153, 255, 0.5);
          }

          .countdown-container {
            background: linear-gradient(135deg, rgba(26, 22, 43, 0.9), rgba(74, 42, 128, 0.7));
            border: 1px solid rgba(183, 153, 255, 0.2);
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(108, 43, 217, 0.2);
            padding: 24px;
            position: relative;
            will-change: transform;
          }

          .countdown-title {
            font-family: var(--font-heading);
            color: ${COLORS.TEXT_MAIN};
            font-weight: 700;
            font-size: 1.25rem;
            margin-bottom: 16px;
            text-align: center;
          }

          .countdown-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            position: relative;
            z-index: 10;
          }

          .countdown-item {
            text-align: center;
            background: rgba(14, 11, 22, 0.7);
            border-radius: 12px;
            padding: 16px 8px;
            border: 1px solid rgba(183, 153, 255, 0.1);
            transition: transform 0.2s ease, border-color 0.2s ease;
            will-change: transform;
          }

          .countdown-item:hover {
            border-color: rgba(183, 153, 255, 0.3);
            transform: translateY(-1px);
          }

          .countdown-number {
            font-family: var(--font-code);
            font-size: 2rem;
            font-weight: 800;
            color: ${COLORS.LINK_HOVER};
            display: block;
            line-height: 1.2;
            text-shadow: 0 0 10px rgba(183, 153, 255, 0.3);
          }

          .countdown-label {
            font-family: var(--font-body);
            font-size: 0.875rem;
            color: ${COLORS.TEXT_MUTED};
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-top: 8px;
          }

          @media (max-width: 640px) {
            .countdown-grid {
              gap: 12px;
            }

            .countdown-item {
              padding: 12px 6px;
            }

            .countdown-number {
              font-size: 1.5rem;
            }

            .countdown-label {
              font-size: 0.75rem;
            }
          }

          .fade-in-up {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .fade-in-up.delay-1 { animation-delay: 0.2s; }
          .fade-in-up.delay-2 { animation-delay: 0.4s; }
          .fade-in-up.delay-3 { animation-delay: 0.6s; }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          /* Safari-specific optimizations */
          @media screen and (-webkit-min-device-pixel-ratio: 1) {
            .hero-gradient::before {
              animation-duration: 16s;
            }
            
            .particle {
              opacity: 0.1;
            }
          }
        `}
      </style>

      <div id="app-wrapper">
        <section id="home" className="hero-gradient min-h-screen flex flex-col justify-center items-center relative py-24 sm:py-32">
          {/* Floating Particles */}
          <div className="floating-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Main Heading */}
            <div className="fade-in-up">
              <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                United<br />
                Hacks V6
              </h1>
            </div>

            {/* Subheading */}
            <p className="hero-subtitle text-xl sm:text-2xl lg:text-3xl max-w-2xl mx-auto mt-8 fade-in-up delay-1">
              The Ultimate Global Online Hackathon – Code. Create. Compete.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 fade-in-up delay-2">
              <button
                className="cta-button cta-primary px-8 py-4 text-white font-semibold flex items-center justify-center gap-3 text-lg"
                onClick={() => window.open('https://www.youtube.com/watch?v=p8CHaDP3Bxg', '_blank')}
              >
                <Play size={20} />
                Watch Trailer
              </button>

              <button
                className="cta-button cta-secondary px-8 py-4 text-white font-semibold flex items-center justify-center gap-3 text-lg"
                onClick={() => window.open('https://unitedhacksv6.devpost.com', '_blank')}
              >
                <UserPlus size={20} />
                Register Now
              </button>
            </div>

            {/* Countdown Timer */}
            <div className="countdown-container max-w-2xl mx-auto mt-12 fade-in-up delay-3">
              <div className="countdown-title">
                Event Starts In
              </div>
              <div className="countdown-grid">
                <div className="countdown-item">
                  <span className="countdown-number">{timeLeft.days}</span>
                  <div className="countdown-label">Days</div>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{timeLeft.hours}</span>
                  <div className="countdown-label">Hours</div>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{timeLeft.minutes}</span>
                  <div className="countdown-label">Minutes</div>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{timeLeft.seconds}</span>
                  <div className="countdown-label">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
