import React, { useEffect, useState } from 'react';

import { SectionWrapper } from '../shared';
import { getData } from '../../utils';

import Experience from './Experience';
import Education from './Education';

import style from './style.module.scss';
import Projects from './Projects';

const CurriculumVitae = () => {
  const [data, setdData] = useState({});

  useEffect(() => {
    getData('/api/cv').then((newData) => {
      setdData(newData);
    });
  }, []);

  return (
    <SectionWrapper title="Curriculum Vitae">
      <Experience data={data.experience} className={style.section} />
      <Education data={data.education} className={style.section} />
      <Projects data={data.projects} className={style.section} />
    </SectionWrapper>
  );
};

export default CurriculumVitae;
