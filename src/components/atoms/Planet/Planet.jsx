import React from 'react';

import Planets from './Planets';

const Planet = ({ planet }) => {
  let PlanetComponent;

  if (planet && planet < Planets.length) {
    PlanetComponent = Planets[planet];
  } else PlanetComponent = Planets[0];

  return (<PlanetComponent />);
};

export default Planet;
