import React from "react";

export default function PlayPauseIcon({ playing, progress }) {
  // SVG Geometry Config
  const radius = 22; 
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * radius;
  
  // Math: 
  // progress is 0.0 to 1.0 (coming from Hero.jsx)
  // At 0.0, we want full dashOffset (circle empty)
  // At 1.0, we want 0 dashOffset (circle full)
  const safeProgress = Math.max(0, Math.min(1, progress));
  const dashOffset = circumference - (safeProgress * circumference);

  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1. Background Track (Static Faint Circle) */}
      <circle
        cx="28"
        cy="28"
        r={radius}
        stroke="rgba(255,255,255,0.25)"
        strokeWidth={strokeWidth}
      />
      
      {/* 2. Progress Indicator (Animated Color Circle) */}
      <circle
        cx="28"
        cy="28"
        r={radius}
        fill="transparent"
        stroke="var(--color-secondary)" // Ensure you have this variable, or use a hex code like #F95B1C
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        // SVG Props for drawing the partial stroke
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        // Rotate -90deg so the drawing starts at 12 o'clock
        transform="rotate(-90 28 28)"
        // IMPORTANT: No transition allows the SVG to update instantly with the Swiper timer
        style={{ transition: "none" }}
      />
      
      {/* 3. Play/Pause Icons */}
      <g fill="white" className="drop-shadow-sm">
        {playing ? (
          // Pause Icon (Two Vertical Bars)
          <g>
            <rect x="23" y="20" width="4" height="16" rx="1" />
            <rect x="29" y="20" width="4" height="16" rx="1" />
          </g>
        ) : (
          // Play Icon (Triangle) - Visually centered
          <path d="M25 18 L38 28 L25 38 Z" transform="translate(1, 0)" />
        )}
      </g>
    </svg>
  );
}