import React from 'react';

const PlanetThree = () => (
  <svg height="100" width="100">
    <defs>
      <linearGradient id="bodyGradient3" x1="0" y1="0" x2="0" y2="1.2" gradientTransform="rotate(-30)">
        <stop offset="0%" style={{ stopColor: '#f6cbde' }} />
        <stop offset="100%" style={{ stopColor: '#fbfbfb' }} />
      </linearGradient>
    </defs>

    <circle cx="50" cy="50" r="40" fill="#fbfbfb" />

    <circle cx="42" cy="60" r="6" fill="url(#bodyGradient3)" />
    <circle cx="65" cy="30" r="10" fill="url(#bodyGradient3)" />
    <circle cx="40" cy="45" r="3" fill="url(#bodyGradient3)" />
    <circle cx="80" cy="63" r="3" fill="url(#bodyGradient3)" />

    <path d="M50 10A40 40 0 1 0 50 90 25 35 0 1 1 50 10z" fill="#e3bacc" opacity="0.4" />

    <circle cx="24" cy="40" r="6" fill="#fbfbfb" />
  </svg>
);

export default PlanetThree;
