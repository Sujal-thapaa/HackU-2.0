import React, { useEffect, useState } from 'react';
import { Play, UserPlus } from 'lucide-react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <>
      <style>
        {`
          @import url('https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap');
          @import url('https://api.fontshare.com/v2/css?f[]=general-sans@500,600,400,700&display=swap');

          :root {
            --font-heading: 'Clash Display', sans-serif;
            --font-body: 'General Sans', sans-serif;
          }

          body {
            font-family: var(--font-body);
          }
          
          #app-wrapper {
            background-image: url('/Background.jpg');
            background-size: cover;
            background-attachment: fixed;
            background-position: center;
            min-height: 100vh;
          }

          .hero-gradient {
            position: relative;
            overflow: hidden;
            background: rgba(14, 11, 22, 0.8); /* Semi-transparent overlay */
          }

          .hero-gradient::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 80%, ${COLORS.PRIMARY_ACCENT}20 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, ${COLORS.LINK_HOVER}15 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, ${COLORS.SECONDARY_ACCENT}10 0%, transparent 50%);
            animation: gradientShift 8s ease-in-out infinite;
          }

          @keyframes gradientShift {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }

          .floating-particles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .particle {
            position: absolute;
            background: ${COLORS.LINK_HOVER};
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
            opacity: 0.1;
          }

          .particle:nth-child(1) { width: 4px; height: 4px; top: 20%; left: 10%; animation-delay: 0s; }
          .particle:nth-child(2) { width: 6px; height: 6px; top: 60%; left: 20%; animation-delay: 1s; }
          .particle:nth-child(3) { width: 3px; height: 3px; top: 40%; left: 70%; animation-delay: 2s; }
          .particle:nth-child(4) { width: 5px; height: 5px; top: 80%; left: 80%; animation-delay: 3s; }
          .particle:nth-child(5) { width: 4px; height: 4px; top: 30%; left: 90%; animation-delay: 4s; }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(120deg); }
            66% { transform: translateY(10px) rotate(240deg); }
          }

          .hero-title {
            font-family: var(--font-heading);
            font-weight: 800;
            background: linear-gradient(135deg, ${COLORS.TEXT_MAIN}, ${COLORS.LINK_HOVER}, ${COLORS.PRIMARY_ACCENT});
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: titleGradient 4s ease-in-out infinite;
            text-shadow: 0 0 40px rgba(183, 153, 255, 0.3);
          }

          @keyframes titleGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
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
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }

          .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.6s ease-in-out;
          }

          .cta-button:hover::before {
            left: 100%;
          }

          .cta-primary {
            background: linear-gradient(135deg, ${COLORS.PRIMARY_ACCENT}, ${COLORS.LINK_HOVER});
            box-shadow: 0 8px 32px rgba(108, 43, 217, 0.3);
          }

          .cta-primary:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 12px 40px rgba(108, 43, 217, 0.4);
          }

          .cta-secondary {
            background: linear-gradient(135deg, ${COLORS.SURFACE}, ${COLORS.SECONDARY_ACCENT});
            border: 1px solid rgba(183, 153, 255, 0.3);
            box-shadow: 0 8px 32px rgba(74, 42, 128, 0.2);
          }

          .cta-secondary:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 12px 40px rgba(74, 42, 128, 0.3);
            border-color: rgba(183, 153, 255, 0.5);
          }

          .logo-container {
            position: relative;
            animation: logoFloat 6s ease-in-out infinite;
          }

          @keyframes logoFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }

          .featured-logos {
            opacity: 0;
            animation: slideInUp 1s ease-out 1.5s forwards;
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1s ease-out forwards;
          }

          .fade-in-up.delay-1 { animation-delay: 0.2s; }
          .fade-in-up.delay-2 { animation-delay: 0.4s; }
          .fade-in-up.delay-3 { animation-delay: 0.6s; }
          .fade-in-up.delay-4 { animation-delay: 0.8s; }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .interactive-bg {
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: radial-gradient(circle, ${COLORS.PRIMARY_ACCENT}10 0%, transparent 70%);
            pointer-events: none;
            transition: all 0.3s ease;
            opacity: 0;
          }

          .interactive-bg.active {
            opacity: 1;
          }
        `}
      </style>
      
      <div id="app-wrapper">
        <section id="home" className="hero-gradient min-h-screen flex flex-col justify-center items-center relative py-24 sm:py-32">
          {/* Main Content Block for Centering */}
          <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Main Heading */}
            <div className={`fade-in-up`}>
              <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                United<br />
                Hacks V6
              </h1>
            </div>

            {/* Subheading */}
            <p className={`hero-subtitle text-xl sm:text-2xl lg:text-3xl max-w-2xl mx-auto mt-8 fade-in-up delay-1`}>
              The Ultimate Global Online Hackathon – Code. Create. Compete.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center mt-8 fade-in-up delay-2`}>
              <button
                className="cta-button cta-primary px-8 py-4 text-white font-semibold flex items-center justify-center gap-3 text-lg"
                onClick={() => window.open('https://www.youtube.com/watch?v=p8CHaDP3Bxg', '_blank')}
              >
                <Play size={20} />
                Watch Trailer
              </button>

              <button
                className="cta-button cta-secondary px-8 py-4 text-white font-semibold flex items-center justify-center gap-3 text-lg"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSehFwBX1yMcW1BjX-8XcC-vHnUgNE9Wv8iVvbSIO3361QneWg/viewform', '_blank')}
              >
                <UserPlus size={20} />
                Register Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
