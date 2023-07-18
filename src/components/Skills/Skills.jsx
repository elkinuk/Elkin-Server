import React from 'react';

import { SectionWrapper } from '../shared';
import PlanetsParade from './PlanetsParade';

const config = [
  { title: 'REACT.JS', since: 2018 },
  { title: 'JS/TS', since: 2017 },
  { title: 'CSS/SCSS', since: 2017 },
  { title: 'NODE.JS', since: 2019 },
  { title: 'JEST', since: 2018 },
  { title: 'AWS', since: 2022 },
];

const skills = config?.map((el) => {
  const years = new Date().getFullYear() - el.since;
  return {
    ...el,
    subtitle: `${years > 0 ? years : 1} ${years > 1 ? 'years' : 'year'}`,
  };
});

const Skills = () => (
  <SectionWrapper title="Key skills">
    <PlanetsParade data={skills} />
  </SectionWrapper>
);

export default Skills;
