import React from 'react';

const IconMobileDevelopment = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 hover:-translate-y-1 transition-transform duration-300"
  >
    <title>Mobile Application Development</title>
    {/* Phone body */}
    <rect x="6" y="2" width="12" height="20" rx="2" />
    {/* Screen line */}
    <line x1="12" y1="18" x2="12" y2="18" />
    {/* App grid (3x3 dots) */}
    <circle cx="9" cy="8" r="0.5" />
    <circle cx="12" cy="8" r="0.5" />
    <circle cx="15" cy="8" r="0.5" />
    <circle cx="9" cy="11" r="0.5" />
    <circle cx="12" cy="11" r="0.5" />
    <circle cx="15" cy="11" r="0.5" />
    <circle cx="9" cy="14" r="0.5" />
    <circle cx="12" cy="14" r="0.5" />
    <circle cx="15" cy="14" r="0.5" />
  </svg>
);

export default IconMobileDevelopment;