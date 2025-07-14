import React from 'react';

const ZLogo = ({ size = 24, className = "", autoAnimate = false }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="transform transition-all duration-300 hover:scale-110"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="zGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
       
        {/* Main Z shape */}
        <path
          d="M20 25 L80 25 L20 75 L80 75"
          stroke="url(#zGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
          className={autoAnimate ? "animate-draw" : "hover:animate-draw"}
        />
        
        {/* Animated dots */}
        <circle
          cx="30"
          cy="30"
          r="3"
          fill="#3B82F6"
          className={autoAnimate ? "animate-bounce" : "hover:animate-bounce"}
          style={{ animationDelay: '0s' }}
        />
        <circle
          cx="70"
          cy="70"
          r="3"
          fill="#EC4899"
          className={autoAnimate ? "animate-bounce" : "hover:animate-bounce"}
          style={{ animationDelay: '0.5s' }}
        />
      </svg>
    </div>
  );
};

export default ZLogo; 