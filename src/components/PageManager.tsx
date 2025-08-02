import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageManagerProps {
  children: React.ReactNode[];
  pageNames: string[];
}

const PageManager: React.FC<PageManagerProps> = ({ children, pageNames }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  const totalPages = children.length;

  const goToNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setTimeout(() => setIsFlipping(false), 800);
      }, 400);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setTimeout(() => setIsFlipping(false), 800);
      }, 400);
    }
  };

  const goToPage = (targetPage: number) => {
    if (targetPage !== currentPage && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection(targetPage > currentPage ? 'next' : 'prev');
      setTimeout(() => {
        setCurrentPage(targetPage);
        setTimeout(() => setIsFlipping(false), 800);
      }, 400);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNextPage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevPage();
      }
    };

    // Listen for navigation events from Navbar
    const handleNavigation = (e: CustomEvent) => {
      const targetPage = e.detail;
      goToPage(targetPage);
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('navigateToPage', handleNavigation as EventListener);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('navigateToPage', handleNavigation as EventListener);
    };
  }, [currentPage, isFlipping]);

  const notebookBgStyle: React.CSSProperties = {
    backgroundColor: '#F8F8F8',
    backgroundImage:
      'linear-gradient(to bottom, #d3e1f0 1px, transparent 1px), ' +
      'linear-gradient(to bottom, #2b3a4a 1px, transparent 1px)',
    backgroundSize: '100% 2em',
    backgroundPosition: 'left top',
    backgroundBlendMode: 'difference, normal',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <div className="relative" style={notebookBgStyle}>
      {/* Red notebook margin line */}
      <div className="absolute left-[40px] top-0 w-[2px] h-full bg-red-400 opacity-70 pointer-events-none z-10"></div>
      
      {/* Page indicator and title */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-gray-200">
        <div className="flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">
            {pageNames[currentPage]} ({currentPage + 1}/{totalPages})
          </span>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevPage}
        disabled={currentPage === 0 || isFlipping}
        className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
          currentPage === 0 || isFlipping
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
            : 'bg-white text-blue-600 hover:bg-blue-50 hover:scale-110 hover:shadow-xl'
        }`}
        title="Previous page (←)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages - 1 || isFlipping}
        className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
          currentPage === totalPages - 1 || isFlipping
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
            : 'bg-white text-blue-600 hover:bg-blue-50 hover:scale-110 hover:shadow-xl'
        }`}
        title="Next page (→ or Space)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Book container with realistic page flipping */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Current page (always visible) */}
        <div className="absolute inset-0 w-full h-full">
          {children[currentPage]}
        </div>

        {/* Flipping page overlay */}
        {isFlipping && (
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Page being flipped */}
            <div
              className={`absolute inset-0 w-full h-full origin-left transform-gpu`}
              style={{
                transformStyle: 'preserve-3d',
                animation: flipDirection === 'next' 
                  ? 'flipPageNext 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
                  : 'flipPagePrev 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
              }}
            >
              {/* Front of the flipping page (current content) */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(0deg)'
                }}
              >
                <div style={notebookBgStyle} className="w-full h-full">
                  <div className="absolute left-[40px] top-0 w-[2px] h-full bg-red-400 opacity-70"></div>
                  {children[flipDirection === 'next' ? currentPage : currentPage]}
                </div>
              </div>

              {/* Back of the flipping page (next/prev content) */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div style={notebookBgStyle} className="w-full h-full">
                  <div className="absolute left-[40px] top-0 w-[2px] h-full bg-red-400 opacity-70"></div>
                  {children[flipDirection === 'next' ? currentPage + 1 : currentPage - 1]}
                </div>
              </div>

              {/* Page shadow during flip */}
              <div 
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                  opacity: 0,
                  animation: 'pageShadow 0.8s ease-in-out'
                }}
              />
            </div>

            {/* Binding shadow effect */}
            <div 
              className="absolute left-0 top-0 w-2 h-full bg-gradient-to-r from-black/20 to-transparent pointer-events-none"
              style={{
                opacity: 0,
                animation: 'bindingShadow 0.8s ease-in-out'
              }}
            />
          </div>
        )}
      </div>

      {/* Page dots indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            disabled={isFlipping}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentPage
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            } ${isFlipping ? 'cursor-not-allowed opacity-50' : ''}`}
            title={pageNames[index]}
          />
        ))}
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <span>Use</span>
          <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs">←</kbd>
          <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs">→</kbd>
          <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs">Space</kbd>
          <span>to navigate</span>
        </div>
      </div>

      {/* CSS Animations for realistic page flipping */}
      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
        }

        @keyframes flipPageNext {
          0% {
            transform: rotateY(0deg);
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }
          25% {
            transform: rotateY(-45deg);
            box-shadow: -10px 0 30px rgba(0,0,0,0.2);
          }
          50% {
            transform: rotateY(-90deg);
            box-shadow: -20px 0 40px rgba(0,0,0,0.3);
          }
          75% {
            transform: rotateY(-135deg);
            box-shadow: -10px 0 30px rgba(0,0,0,0.2);
          }
          100% {
            transform: rotateY(-180deg);
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }
        }

        @keyframes flipPagePrev {
          0% {
            transform: rotateY(0deg);
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }
          25% {
            transform: rotateY(45deg);
            box-shadow: 10px 0 30px rgba(0,0,0,0.2);
          }
          50% {
            transform: rotateY(90deg);
            box-shadow: 20px 0 40px rgba(0,0,0,0.3);
          }
          75% {
            transform: rotateY(135deg);
            box-shadow: 10px 0 30px rgba(0,0,0,0.2);
          }
          100% {
            transform: rotateY(180deg);
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }
        }

        @keyframes pageShadow {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes bindingShadow {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default PageManager;