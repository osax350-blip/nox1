import React, { useId } from 'react';

const BrandLogo = ({ className = 'w-10 h-10' }) => {
  const gradientId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={className}
      aria-label="futalix logo"
      role="img"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5DB8FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#7B5FFF" stopOpacity="1" />
        </linearGradient>
      </defs>

      <g transform="translate(100, 100)">
        <path
          d="M 70,0 A 70,70 0 0,1 0,70"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="10"
          strokeLinecap="round"
        />

        <path
          d="M -70,0 A 70,70 0 0,1 0,-70"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="10"
          strokeLinecap="round"
        />

        <rect x="-5" y="-35" width="10" height="70" rx="5" fill={`url(#${gradientId})`} />
        <rect x="-25" y="-25" width="8" height="50" rx="4" fill={`url(#${gradientId})`} />
        <rect x="17" y="-25" width="8" height="50" rx="4" fill={`url(#${gradientId})`} />
        <rect x="-42" y="-17" width="7" height="34" rx="3.5" fill={`url(#${gradientId})`} />
        <rect x="35" y="-17" width="7" height="34" rx="3.5" fill={`url(#${gradientId})`} />

        <circle cx="0" cy="0" r="7" fill="#5DB8FF" />
      </g>
    </svg>
  );
};

export default BrandLogo;
