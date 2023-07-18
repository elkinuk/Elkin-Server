import React from 'react';

import { Article, LinkSimple, SectionWrapper } from '../../shared';

import style from '../style.module.scss';

const Projects = ({ data = [], className }) => (
  <SectionWrapper className={className}>
    <h3 className={style.title}>Projects</h3>
    {data &&
      data.map((item) => (
        <Article
          title={item.title}
          subTitle={`${item.startDate} - ${item.endDate || 'now'}`}
          text={item.description}
          headerType={4}
          id={item.projectId}
        >
          <span>While working at </span>
          <LinkSimple
            href={`#${item.experienceId.id}`}
            withNewPage={false}
            className={style.link}
          >
            {item.experienceId.name}
          </LinkSimple>
        </Article>
      ))}
  </SectionWrapper>
);

export default Projects;
