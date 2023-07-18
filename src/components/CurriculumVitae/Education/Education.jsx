import React from 'react';

import { Article, SectionWrapper } from '../../shared';

import style from '../style.module.scss';

const Education = ({ data = {}, className }) => (
  <SectionWrapper className={className}>
    <h3 className={style.title}>Education</h3>
    <Article
      title={data?.uni}
      text={[`${data.degree} - ${data.field}`]}
      subTitle={`${data.startDate} - ${data.endDate || 'now'}`}
      headerType={4}
    />
  </SectionWrapper>
);

export default Education;
