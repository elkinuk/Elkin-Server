import React, { useEffect, useState } from 'react';
import { SectionWrapper } from '../../atoms/shared';
import CollapseBlock from '../../molecules/Collapse';

import { getData } from '../../../assets/utils';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    const newProjects = await getData('/api/projects', 'defaultProject', true);
    setProjects(newProjects);
  });

  return (
    <SectionWrapper title="My pet projects">
      <CollapseBlock data={projects} />
    </SectionWrapper>
  );
};

export default Projects;
