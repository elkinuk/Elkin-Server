import React from 'react';

import Planets from './Planets';

const Planet = (props) => {
  let PlanetComponent;

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  if (props.planet && props.planet < Planets.length) {
    PlanetComponent = Planets[props.planet];
  } else PlanetComponent = Planets[0];

  return (<PlanetComponent />);
};

export default Planet;
