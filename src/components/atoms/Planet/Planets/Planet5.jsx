import React from 'react';

const PlanetFive = () => (
  <svg height="100" width="120">
    <defs>
      <linearGradient
        id="bodyGradient5-1"
        x1="0"
        y1="0"
        x2="0"
        y2="1.2"
        gradientTransform="rotate(-30)"
      >
        <stop offset="0%" style={{ stopColor: '#fbfbfb' }} />
        <stop stopOpacity="0" offset="100%" style={{ stopColor: '#581588' }} />
      </linearGradient>

      <linearGradient id="bodyGradient5-2">
        <stop offset="0%" style={{ stopColor: '#6bd5ff' }} />
        <stop stopOpacity="0" offset="100%" style={{ stopColor: '#581588' }} />
      </linearGradient>
    </defs>

    <circle cx="60" cy="50" r="50" fill="url(#bodyGradient5-2)" opacity="0.4" />
    <circle cx="60" cy="50" r="44" fill="url(#bodyGradient5-2)" opacity="0.3" />
    <circle cx="60" cy="50" r="36" fill="url(#bodyGradient5-2)" opacity="0.3" />

    <circle cx="60" cy="50" r="29" fill="url(#bodyGradient5-1)" />

    <circle cx="25" cy="44" r="2" fill="#ffd6f1" />
    <circle cx="80" cy="88" r="1" fill="#ffd6f1" />
    <circle cx="65" cy="7" r="1" fill="#ffd6f1" />
    <circle cx="27" cy="88" r="1" fill="#ffd6f1" />
  </svg>
);

export default PlanetFive;
