import React from 'react';

import Planets from './Planets';

const Planet = ({ planet = 0 }) => {
  const PlanetComponent = Planets[planet];
  return <PlanetComponent />;
};

export default Planet;
