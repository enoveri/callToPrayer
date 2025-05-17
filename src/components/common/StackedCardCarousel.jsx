import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

gsap.registerPlugin(Flip);

const StackedCardCarousel = ({ 
  items, 
  renderItem, 
  cardWidth = 280, 
  cardHeight = 380, 
  stackOffset = 15, // Reverted to single stackOffset
  autoplayDelay = 0 // 0 or less disables autoplay, value in milliseconds
}) => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayIntervalRef = useRef(null);
  const lastInteractionTimeRef = useRef(Date.now());

  // Initialize or update refs array
  cardRefs.current = [];
  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const arrangeCards = useCallback((activeIndexToShow) => {
    if (!cardRefs.current.length || !containerRef.current) return;
    setIsAnimating(true);

    const state = Flip.getState(cardRefs.current); // Get current state

    // Temporarily move all cards to a "neutral" state for Flip to calculate from
    gsap.set(cardRefs.current, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 0,
      zIndex: 0,
      position: 'absolute', // Ensure absolute positioning for Flip
      width: cardWidth,
      height: cardHeight,
    });
    
    // Set final positions and styles
    cardRefs.current.forEach((card, i) => {
      const relativeIndex = (i - activeIndexToShow + items.length) % items.length;
      const isBehind = relativeIndex > 0 && relativeIndex <= Math.floor(items.length / 2);
      const isWayBehind = relativeIndex > Math.floor(items.length / 2);

      let targetX, targetY, targetRotation, targetZIndex, targetOpacity, targetScale;

      if (relativeIndex === 0) { // Active card
        targetX = 0;
        targetY = 0;
        targetRotation = 0;
        targetZIndex = items.length + 1;
        targetOpacity = 1;
        targetScale = 1; // Changed from 1.1 to 1
      } else if (isBehind) { // Stacked behind
        targetX = relativeIndex * stackOffset; // Use single stackOffset
        targetY = -relativeIndex * stackOffset; // Use single stackOffset
        targetRotation = 0; // No rotation
        targetZIndex = items.length - relativeIndex;
        targetOpacity = 1;
        targetScale = 1; // Changed from 1 - (relativeIndex * 0.05) to 1
      } else { // Cards that will loop around from the "front" (way behind)
        targetX = (items.length - relativeIndex) * -stackOffset; // Use single stackOffset
        targetY = (items.length - relativeIndex) * -stackOffset; // Use single stackOffset, ensure consistency
        targetRotation = 0; // No rotation
        targetZIndex = relativeIndex; // Lower z-index
        targetOpacity = 0; // Initially hidden
        targetScale = 0; // Changed from 0.8 to 0 to make outgoing card shrink to nothing
      }
      
      gsap.set(card, {
        x: targetX,
        y: targetY,
        rotation: targetRotation,
        zIndex: targetZIndex,
        opacity: targetOpacity,
        scale: targetScale,
        transformOrigin: 'center center',
      });
    });

    Flip.from(state, {
      duration: 1, 
      ease: 'power3.inOut',
      stagger: 0.05, 
      absolute: true, 
      onComplete: () => {
        setIsAnimating(false);
        lastInteractionTimeRef.current = Date.now(); // Reset interaction time after animation
      },
    });
  }, [items.length, cardWidth, cardHeight, stackOffset, autoplayDelay]); // Updated dependencies

  useEffect(() => {
    if (items && items.length > 0) {
      arrangeCards(activeIndex);
    }
  }, [items, activeIndex, arrangeCards]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    lastInteractionTimeRef.current = Date.now();
  }, [isAnimating, items.length]);

  const handlePrev = () => {
    if (isAnimating) return;
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    lastInteractionTimeRef.current = Date.now();
  };

  // Autoplay logic
  useEffect(() => {
    if (autoplayDelay > 0 && items && items.length > 1) {
      const startAutoplay = () => {
        clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = setInterval(() => {
          // Only advance if enough time has passed since last manual interaction
          if (Date.now() - lastInteractionTimeRef.current >= autoplayDelay) {
            handleNext();
          }
        }, autoplayDelay);
      };

      startAutoplay(); // Start it initially

      return () => {
        clearInterval(autoplayIntervalRef.current);
      };
    } else {
      clearInterval(autoplayIntervalRef.current); // Clear if autoplay is disabled
    }
  }, [autoplayDelay, items, handleNext]);

  // Pause autoplay on hover (optional, can be added if desired)
  // const handleMouseEnter = () => clearInterval(autoplayIntervalRef.current);
  // const handleMouseLeave = () => { /* restart autoplay, considering lastInteractionTime */ };

  if (!items || items.length === 0) {
    return <div className="text-center p-4">No items to display.</div>;
  }

  return (
    <div 
      className="relative flex flex-col items-center justify-center py-8 w-full" // Removed inline style, added w-full
    >
      <div 
        ref={containerRef} 
        className="relative flex items-center justify-center"
        style={{ 
          width: cardWidth + (items.length > 1 ? (items.length -1) * stackOffset : 0) + 50, // Adjust container width based on stackOffset
          height: cardHeight + (items.length > 1 ? (items.length -1) * stackOffset : 0) + 50, // Adjust container height based on stackOffset
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.id || index} // Ensure unique key
            ref={addToRefs}
            className="absolute cursor-pointer shadow-xl rounded-lg bg-white overflow-hidden" // Base card styles
            style={{
              width: cardWidth,
              height: cardHeight,
              // Initial opacity 0 to prevent FOUC, GSAP will handle it
              opacity: 0, 
            }}
            onClick={() => {
              if (isAnimating) return;
              // If a non-active card is clicked, bring it to front.
              // For simplicity, current setup focuses on prev/next.
              // To make any card clickable to bring to front:
              // if (index !== activeIndex) setActiveIndex(index);
            }}
          >
            {renderItem(item, index === activeIndex)}
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button 
            onClick={handlePrev} 
            disabled={isAnimating}
            className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 disabled:opacity-50 transition-colors"
            aria-label="Previous Item"
          >
            <FaChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext} 
            disabled={isAnimating}
            className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 disabled:opacity-50 transition-colors"
            aria-label="Next Item"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default StackedCardCarousel;
