import React from 'react';

import Projects from '../components/Projects';
import About from '../components/About';
import GreetingsBlock from '../components/GreetingsBlock';
import Skills from '../components/Skills';

const Home = () => (
  <>
    <GreetingsBlock />
    <Skills />
    <Projects />
    <About />
  </>
);

export default Home;
