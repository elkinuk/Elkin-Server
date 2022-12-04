import React from 'react';

import Projects from '../components/organisms/Projects';
import Description from '../components/organisms/Description';
import GreetingsBlock from '../components/molecules/GreetingsBlock';
import Skills from '../components/organisms/Skills';

const Home = () => (
  <>
    <GreetingsBlock />
    <Skills />
    <Projects />
    <Description />
  </>
);

export default Home;
