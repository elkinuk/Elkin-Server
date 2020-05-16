import React from 'react';

const Planet = () => {
  return ( 
    <>
    <svg height="100" width="100">
      <defs>
        <linearGradient id="bodyGradient1" x1="0" y1="0" x2="0" y2="1.2" gradientTransform="rotate(-30)">
            <stop offset="0%" style={{stopColor: '#fa016d'}}></stop>
            <stop stopOpacity="0" offset="100%" style={{stopColor: '#581588'}}></stop>
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="40" fill="url(#bodyGradient1)"/>
      <circle cx="40" cy="30" r="2" fill="rgba(0, 0, 0, 0.2)"></circle>
      <circle cx="53" cy="35" r="6" fill="rgba(0, 0, 0, 0.2)"></circle>
      <circle cx="25" cy="70" r="3" fill="rgba(0, 0, 0, 0.2)"></circle>
    </svg>

    <svg height="100" width="100">
      <defs>
        <linearGradient id="bodyGradient2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.25" style={{stopColor: '#3888f7'}}></stop>
          <stop offset="0.25" style={{stopColor: '#3c94f8'}}></stop>
          <stop offset="0.5" style={{stopColor: '#3c94f8'}}></stop>
          <stop offset="0.5" style={{stopColor: '#41a5fb'}}></stop>
          <stop offset="0.75" style={{stopColor: '#41a5fb'}}></stop>
          <stop offset="0.75" style={{stopColor: '#49bdff'}}></stop>
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="40" fill="url(#bodyGradient2)"/>
      <circle cx="40" cy="30" r="8" fill="#3c94f8"></circle>
      <circle cx="59" cy="50" r="6" fill="#41a5fb"></circle>
      <path d="M50 10A40 40 0 1 0 50 90 25 35 0 1 1 50 10z" fill="black" opacity="0.2"/>

      <circle cx="80" cy="80" r="15" fill="#fefefe"></circle>
      <circle cx="83" cy="87" r="5" fill="#d4eefd"></circle>
      <circle cx="72" cy="80" r="3" fill="#d4eefd"></circle>
      <circle cx="87" cy="72" r="3" fill="#d4eefd"></circle>
    </svg>

    <svg height="100" width="100">
      <defs>
        <linearGradient id="bodyGradient3" x1="0" y1="0" x2="0" y2="1.2" gradientTransform="rotate(-30)">
          <stop offset="0%" style={{stopColor: '#f6cbde'}}></stop>
          <stop offset="100%" style={{stopColor: '#fbfbfb'}}></stop>
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="40" fill="#fbfbfb"/>
      <circle cx="42" cy="60" r="6" fill="url(#bodyGradient3)"></circle>
      <circle cx="65" cy="30" r="10" fill="url(#bodyGradient3)"></circle>
      <circle cx="40" cy="45" r="3" fill="url(#bodyGradient3)"></circle>
      <circle cx="80" cy="63" r="3" fill="url(#bodyGradient3)"></circle>
      <path d="M50 10A40 40 0 1 0 50 90 25 35 0 1 1 50 10z" fill="#e3bacc" opacity="0.4"/>
    </svg>

    <svg height="100" width="100">
      <defs>
        <linearGradient id="bodyGradient4" x1="0" y1="0" x2="0" y2="1.2" gradientTransform="rotate(-30)">
          <stop offset="0%" style={{stopColor: '#f5186b'}}></stop>
          <stop offset="100%" style={{stopColor: '#f8d330'}}></stop>
        </linearGradient>

        <linearGradient id="bodyGradient5">
          <stop offset="0%" style={{stopColor: '#7a3a8a'}}></stop>
          <stop offset="100%" style={{stopColor: '#bf3d88'}}></stop>
        </linearGradient>

        <linearGradient id="bodyGradient6">
          <stop offset="0%" style={{stopColor: '#7a3a8a'}}></stop>
          <stop offset="6%" style={{stopColor: '#2c2c6c'}}></stop>
          <stop offset="94%" style={{stopColor: '#2c2c6c'}}></stop>
          <stop offset="100%" style={{stopColor: '#bf3d88'}}></stop>
        </linearGradient>
      </defs>

      <path d="M3 66 C 4 50, 96 20, 97 36" stroke="url(#bodyGradient6)" fill="transparent" strokeWidth="4"/>
      <circle cx="50" cy="50" r="40" fill="url(#bodyGradient4)"/>
      <path d="M50 10A40 40 0 1 0 50 90 25 35 0 1 1 50 10z" fill="#c80f55" opacity="0.3"/>

      <path d="M3 65 C 5 80, 95 50, 97 35" stroke="url(#bodyGradient5)" fill="transparent" strokeWidth="4"/>

    </svg>
    </>
   );
}
 
export default Planet;