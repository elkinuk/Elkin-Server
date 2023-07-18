import React from 'react';

import Projects from '../components/Projects';
import About from '../components/About';
import GreetingsBlock from '../components/GreetingsBlock';
import CurriculumVitae from '../components/CurriculumVitae';
import Skills from '../components/Skills';

const Home = () => (
  <>
    <GreetingsBlock />
    <Skills />
    <CurriculumVitae />
    <Projects />
    <About />
  </>
);

export default Home;
