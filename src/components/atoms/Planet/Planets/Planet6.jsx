import React from 'react';

const PlanetSix = () => (
  <svg height="100" width="100">
    <defs>
      <clipPath id="circleShape">
        <circle cx="50" cy="50" r="40" />
      </clipPath>

      <linearGradient id="bodyGradient6-1">
        <stop offset="0%" style={{ stopColor: '#fafafa' }} />
        <stop offset="100%" style={{ stopColor: '#b15dba' }} />
      </linearGradient>

      <linearGradient id="bodyGradient6-2">
        <stop offset="0%" style={{ stopColor: '#eadff5' }} />
        <stop offset="100%" style={{ stopColor: '#b15dba' }} />
      </linearGradient>

      <linearGradient id="bodyGradient6-3">
        <stop offset="0%" style={{ stopColor: '#d392d5' }} />
        <stop offset="100%" style={{ stopColor: '#e02b8e' }} />
      </linearGradient>

      <linearGradient id="bodyGradient6-4">
        <stop offset="0%" style={{ stopColor: '#ce5eb6' }} />
        <stop offset="100%" style={{ stopColor: '#e71e7d' }} />
      </linearGradient>

      <linearGradient id="bodyGradient6-5">
        <stop offset="0%" style={{ stopColor: '#e71e7d' }} />
        <stop offset="60%" style={{ stopColor: '#ce5eb6' }} />
      </linearGradient>
    </defs>

    <circle cx="50" cy="50" r="40" fill="url(#bodyGradient6-1)" />
    <path d="M 0 60 L 120 60 L 120 110 L 0 110 Z" fill="url(#bodyGradient6-5)" clipPath="url(#circleShape)" />
    <path d="M 110 60 C 50 50 100 50 50 40 C 30 60 10 30 0 70 C 10 100 30 60 60 70 C 100 90 100 70 110 60 Z" fill="url(#bodyGradient6-4)" clipPath="url(#circleShape)" />
    <path d="M 0 30 L 100 30 C 80 90 80 30 50 50 C 30 70 0 50 0 30 Z" fill="url(#bodyGradient6-3)" clipPath="url(#circleShape)" />
    <path d="M 0 10 C 30 50 90 0 90 30 C 70 80 60 30 0 40 Z" fill="url(#bodyGradient6-2)" clipPath="url(#circleShape)" />
  </svg>
);

export default PlanetSix;
