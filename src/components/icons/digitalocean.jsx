const IconDigitalOcean = ({ id, className }) => (
  <svg
    viewBox="0 0 128 128"
    fill="none"
    id={id}
    className={className}
  >
    <title>DigitalOcean</title>
    <defs>
      <linearGradient id="do-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0080ff" />
        <stop offset="100%" stopColor="#0052cc" />
      </linearGradient>
    </defs>
    <path
      fill="url(#do-gradient)"
      d="M64.02 93.4v-17.5c18.7 0 33.2-18.6 26.1-38.3-2.8-7.8-9-14-16.8-16.8C54.6 13.7 36 28.2 36 46.9H18.5C18.5 19 43.3-2.3 72.2 3.4c14.4 2.9 26.2 14.7 29.1 29.1 5.7 28.9-15.6 53.7-43.5 53.7h-1.83z"
    />
    <path
      fill="url(#do-gradient)"
      d="M64.02 110.6H46.6V93.4h17.4v17.2z"
    />
    <path
      fill="url(#do-gradient)"
      d="M64.02 125.2H49.8v-14.6h14.2v14.6z"
    />
    <path
      fill="url(#do-gradient)"
      d="M64.02 125.2v-14.6h-14.2c0 8 6.2 14.6 14.2 14.6z"
    />
    <path
      fill="#006fcd"
      d="M49.8 110.6H35.6V96.5h14.2v14.1z"
    />
    <path
      fill="#0069c0"
      d="M35.6 96.5H23.9V84.7h11.7V96.5z"
    />
  </svg>
);

export default IconDigitalOcean;
