import React from 'react';

import Projects from './../components/organisms/Projects';
import Description from './../components/organisms/Description';
import GreatingBlock from './../components/molecules/GreatingBlock';
import Planet from './../components/atoms/Planet';


export default function Home() {
  return (
    <>
      <Planet />
      <GreatingBlock />
      <Projects />
      <Description />
    </>
  )
}
