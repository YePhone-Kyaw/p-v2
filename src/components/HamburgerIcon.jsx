import React from 'react';

const HamburgerIcon = ({ open, className = '', ...props }) => (
  <svg
    viewBox="0 0 40 40"
    width={40}
    height={40}
    className={`transition-all duration-500 ${className}`}
    {...props}
  >
    {/* Top line (moves to center and rotates) */}
    <rect
      x={12}
      y={open ? 20 : 14}
      width={16}
      height={2}
      rx={1}
      className="fill-current text-neutral-200"
      style={{
        transition: 'y 0.05s cubic-bezier(.77,0,.18,1), transform 0.05s cubic-bezier(.77,0,.18,1)',
        transformOrigin: '20px 21px',
        transform: open ? 'rotate(45deg)' : 'none',
      }}
    />
    {/* Middle line (medium, centered) */}
    <rect
      x={12}
      y={20}
      width={16}
      height={2}
      rx={1}
      className="fill-current text-neutral-200"
      style={{
        transition: 'opacity 0.05s cubic-bezier(.77,0,.18,1), transform 0.05s cubic-bezier(.77,0,.18,1)',
        transformOrigin: '20px 21px',
        opacity: open ? 0 : 1,
        transform: open ? 'scaleX(0.1)' : 'scaleX(1)',
      }}
    />
    {/* Bottom line (moves to center and rotates) */}
    <rect
      x={12}
      y={open ? 20 : 26}
      width={16}
      height={2}
      rx={1}
      className="fill-current text-neutral-200"
      style={{
        transition: 'y 0.05s cubic-bezier(.77,0,.18,1), transform 0.05s cubic-bezier(.77,0,.18,1)',
        transformOrigin: '20px 21px',
        transform: open ? 'rotate(-45deg)' : 'none',
      }}
    />
  </svg>
);

export default HamburgerIcon; 