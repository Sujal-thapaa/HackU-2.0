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
        setTimeout(() => setIsFlipping(false), 300);
      }, 300);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setTimeout(() => setIsFlipping(false), 300);
      }, 300);
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
      if (targetPage !== currentPage && !isFlipping) {
        setIsFlipping(true);
        setFlipDirection(targetPage > currentPage ? 'next' : 'prev');
        setTimeout(() => {
          setCurrentPage(targetPage);
          setTimeout(() => setIsFlipping(false), 300);
        }, 300);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('navigateToPage', handleNavigation as EventListener);
      window.removeEventListener('navigateToPage', handleNavigation as EventListener);
    return () => window.removeEventListener('keydown', handleKeyPress);
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

  const pageVariants = {
    enter: (direction: 'next' | 'prev') => ({
      rotateY: direction === 'next' ? 180 : -180,
      opacity: 0,
      scale: 0.8,
      transformOrigin: direction === 'next' ? 'left center' : 'right center',
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transformOrigin: 'center center',
    },
    exit: (direction: 'next' | 'prev') => ({
      rotateY: direction === 'next' ? -180 : 180,
      opacity: 0,
      scale: 0.8,
      transformOrigin: direction === 'next' ? 'right center' : 'left center',
    }),
  };

  const pageTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
    duration: 0.6,
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

      {/* Page content with flip animation */}
      <div className="relative min-h-screen perspective-1000">
        <AnimatePresence mode="wait" custom={flipDirection}>
          <motion.div
            key={currentPage}
            custom={flipDirection}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={pageTransition}
            className="absolute inset-0 w-full"
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
          >
            {/* Page shadow effect during flip */}
            {isFlipping && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent pointer-events-none z-10" />
            )}
            
            {/* Actual page content */}
            <div className="relative z-0">
              {children[currentPage]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page dots indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== currentPage && !isFlipping) {
                setIsFlipping(true);
                setFlipDirection(index > currentPage ? 'next' : 'prev');
                setTimeout(() => {
                  setCurrentPage(index);
                  setTimeout(() => setIsFlipping(false), 300);
                }, 300);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentPage
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
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

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes pageFlip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(-90deg); }
          100% { transform: rotateY(-180deg); }
        }
        
        .page-flip-animation {
          animation: pageFlip 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PageManager;