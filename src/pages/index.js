import React from 'react';

import Projects from '../components/organisms/Projects';
import Description from '../components/organisms/Description';
import GreatingBlock from '../components/molecules/GreatingBlock';
import Skills from '../components/organisms/Skills';

export default function Home() {
  return (
    <>
      <GreatingBlock />
      <Skills />
      <Projects />
      <Description />
    </>
  );
}
