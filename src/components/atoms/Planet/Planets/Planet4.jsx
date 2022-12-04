import React from 'react';

const PlanetFour = () => (
  <svg height="100" width="100">
    <defs>
      <linearGradient
        id="bodyGradient4-1"
        x1="0"
        y1="0"
        x2="0"
        y2="1.2"
        gradientTransform="rotate(-30)"
      >
        <stop offset="0%" style={{ stopColor: '#f5186b' }} />
        <stop offset="100%" style={{ stopColor: '#f8d330' }} />
      </linearGradient>

      <linearGradient id="bodyGradient4-2">
        <stop offset="0%" style={{ stopColor: '#b7f7c7' }} />
        <stop offset="100%" style={{ stopColor: '#aad19b' }} />
      </linearGradient>

      <linearGradient id="bodyGradient4-3">
        <stop offset="0%" style={{ stopColor: '#b7f7c7' }} />
        <stop offset="6%" style={{ stopColor: '#3e8750' }} />
        <stop offset="94%" style={{ stopColor: '#3e8750' }} />
        <stop offset="100%" style={{ stopColor: '#aad19b' }} />
      </linearGradient>

      <linearGradient id="bodyGradient4-4">
        <stop offset="0%" style={{ stopColor: '#e2e3cc' }} />
        <stop offset="6%" style={{ stopColor: '#6f7054' }} />
        <stop offset="94%" style={{ stopColor: '#6f7054' }} />
        <stop offset="100%" style={{ stopColor: '#e2e3cc' }} />
      </linearGradient>
    </defs>

    <path
      d="M2 45 C 2 25, 98 25, 98 45"
      stroke="url(#bodyGradient4-4)"
      fill="transparent"
      strokeWidth="2"
    />
    <path
      d="M3 65 C 3 45, 97 15, 97 35"
      stroke="url(#bodyGradient4-3)"
      fill="transparent"
      strokeWidth="3"
    />

    <circle cx="50" cy="50" r="40" fill="url(#bodyGradient4-1)" />
    <path
      d="M50 10A40 40 0 1 0 50 90 25 35 0 1 1 50 10z"
      fill="#c80f55"
      opacity="0.3"
    />

    <path
      d="M2 45 C 2 65, 98 65, 98 45"
      stroke="#e2e3cc"
      fill="transparent"
      strokeWidth="2"
    />
    <path
      d="M3 65 C 3 85, 97 55, 97 35"
      stroke="url(#bodyGradient4-2)"
      fill="transparent"
      strokeWidth="3"
    />
  </svg>
);

export default PlanetFour;
