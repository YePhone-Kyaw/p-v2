const IconDNS = ({ id, className }) => (
  <svg
    viewBox="0 0 128 128"
    fill="none"
    id={id}
    className={className}
  >
    <title>DNS Configuration</title>
    {/* Globe */}
    <circle cx="64" cy="56" r="36" stroke="#38bdf8" strokeWidth="5" fill="none" />
    {/* Latitude lines */}
    <ellipse cx="64" cy="56" rx="18" ry="36" stroke="#38bdf8" strokeWidth="3.5" fill="none" />
    <line x1="28" y1="56" x2="100" y2="56" stroke="#38bdf8" strokeWidth="3.5" />
    <line x1="33" y1="38" x2="95" y2="38" stroke="#38bdf8" strokeWidth="2.5" />
    <line x1="33" y1="74" x2="95" y2="74" stroke="#38bdf8" strokeWidth="2.5" />
    {/* DNS label */}
    <text
      x="64"
      y="110"
      textAnchor="middle"
      fill="#38bdf8"
      fontSize="18"
      fontWeight="700"
      fontFamily="monospace"
    >
      DNS
    </text>
  </svg>
);

export default IconDNS;
