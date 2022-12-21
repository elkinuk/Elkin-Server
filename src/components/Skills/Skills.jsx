import React from 'react';

import { SectionWrapper } from '../shared';
import PlanetsParade from './PlanetsParade';

const config = [
  { title: 'JS', since: 2017 },
  { title: 'HTML', since: 2017 },
  { title: 'CSS/SCSS', since: 2017 },
  { title: 'REACT.JS', since: 2018 },
  { title: 'VUE.JS', since: 2018 },
  { title: 'NODE.JS', since: 2020 },
];

const skills = config?.map((el) => {
  const years = new Date().getFullYear() - el.since;
  return {
    ...el,
    subtitle: `${years > 0 ? years : 1} ${years > 1 ? 'years' : 'year'}`,
  };
});

const Skills = () => (
  <SectionWrapper title="Skills">
    <PlanetsParade data={skills} />
  </SectionWrapper>
);

export default Skills;
