import React from 'react';

const PlanetTwo = () => (
  <svg height="100" width="100">
    <defs>
      <linearGradient id="bodyGradient2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="25%" style={{ stopColor: '#3888f7' }} />
        <stop offset="25%" style={{ stopColor: '#3c94f8' }} />
        <stop offset="50%" style={{ stopColor: '#3c94f8' }} />
        <stop offset="50%" style={{ stopColor: '#41a5fb' }} />
        <stop offset="75%" style={{ stopColor: '#41a5fb' }} />
        <stop offset="75%" style={{ stopColor: '#49bdff' }} />
      </linearGradient>
    </defs>

    <circle cx="13" cy="30" r="9" fill="#a3bbc9" />

    <circle cx="50" cy="50" r="40" fill="url(#bodyGradient2)" />
    <circle cx="40" cy="30" r="8" fill="#3c94f8" />
    <circle cx="59" cy="50" r="6" fill="#41a5fb" />
    <path
      d="M50 10A40 40 0 1 0 50 90 25 35 0 1 1 50 10z"
      fill="black"
      opacity="0.2"
    />

    <circle cx="80" cy="80" r="15" fill="#fefefe" />
    <circle cx="83" cy="87" r="5" fill="#d4eefd" />
    <circle cx="72" cy="80" r="3" fill="#d4eefd" />
    <circle cx="87" cy="72" r="3" fill="#d4eefd" />
  </svg>
);

export default PlanetTwo;
