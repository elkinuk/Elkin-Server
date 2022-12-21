import React, { useEffect, useState } from 'react';
import { SectionWrapper } from '../shared';
import CollapseBlock from '../Collapse';

import { getData } from '../../utils';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getData('/api/projects', 'defaultProject', true).then((newProjects) => {
      setProjects(newProjects);
    });
  }, []);

  return (
    <SectionWrapper title="My pet projects">
      <CollapseBlock data={projects} />
    </SectionWrapper>
  );
};

export default Projects;
