import React from 'react';

import { SectionWrapper } from '../../atoms/shared';
import PlanetsParade from '../../molecules/PlanetsParade';

const Skills = () => {
  let data = [
    { title: 'JS', since: 2017 },
    { title: 'HTML', since: 2017 },
    { title: 'CSS/SCSS', since: 2017 },
    { title: 'REACT.JS', since: 2018 },
    { title: 'VUE.JS', since: 2018 },
    { title: 'NODE.JS', since: 2020 },
  ];

  data = data.map((el) => {
    const years = (new Date()).getFullYear() - el.since;
    return { ...el, subtitle: `${years > 0 ? years : 1} ${years > 1 ? 'years' : 'year'}` };
  });

  return (
    <SectionWrapper title="Skills">
      <PlanetsParade data={data} />
    </SectionWrapper>
  );
};

export default Skills;
