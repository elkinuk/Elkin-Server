import React, { useEffect, useState } from 'react';
import { SectionWrapper } from '../shared';
import CollapseBlock from '../Collapse';

import { getData } from '../../utils';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newProjects = await getData(
        '/api/projects',
        'defaultProject',
        true,
      );
      setProjects(newProjects);
    };
    fetchData();
  }, []);

  return (
    <SectionWrapper title="My pet projects">
      <CollapseBlock data={projects} />
    </SectionWrapper>
  );
};

export default Projects;
