import React from 'react';

import PapersBlock from './../../molecules/Papers';
import About from './../../atoms/About';

const Description = () => (
  <PapersBlock top={<About />} right={<About />} bottom={<About />} left={<About />} />
);

export default Description;