import React from 'react';

const PlanetOne = () => (
  <svg height="100" width="120">
    <defs>
      <linearGradient
        id="bodyGradient1-1"
        x1="0"
        y1="0"
        x2="0"
        y2="1.2"
        gradientTransform="rotate(-30)"
      >
        <stop offset="0%" style={{ stopColor: '#fa016d' }} />
        <stop stopOpacity="0" offset="100%" style={{ stopColor: '#581588' }} />
      </linearGradient>

      <linearGradient id="bodyGradient1-2" x1="0" y1="0" x2="0" y2="1.2">
        <stop offset="0%" style={{ stopColor: '#ffd6f1' }} />
        <stop stopOpacity="0" offset="100%" style={{ stopColor: '#0a4afa' }} />
      </linearGradient>
    </defs>

    <circle cx="60" cy="50" r="40" fill="url(#bodyGradient1-1)" />

    <circle
      cx="60"
      cy="50"
      r="48"
      fill="transparent"
      stroke="url(#bodyGradient1-2)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="60 3 10"
    />

    <circle cx="50" cy="30" r="2" fill="rgba(0, 0, 0, 0.2)" />
    <circle cx="63" cy="35" r="6" fill="rgba(0, 0, 0, 0.2)" />
    <circle cx="35" cy="70" r="3" fill="rgba(0, 0, 0, 0.2)" />
  </svg>
);

export default PlanetOne;
