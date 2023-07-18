import React from 'react';

import { Article, LinkSimple, SectionWrapper } from '../../shared';

import globalStyle from '../style.module.scss';
import style from './style.module.scss';

const Experience = ({ data = [], className }) => (
  <SectionWrapper className={className}>
    <h3 className={globalStyle.title}>Experience</h3>
    {data &&
      data.map((item) => (
        <Article
          title={item.title}
          subTitle={`${item.startDate} - ${item.endDate || 'now'}`}
          headerType={4}
          id={item.experienceId}
        >
          {item.items.map((subItem) => (
            <Article
              title={subItem.title}
              subTitle={`${subItem.startDate} - ${subItem.endDate || 'now'}`}
              headerType={5}
            >
              <p>Projects: </p>
              {subItem.projectsIds.map((id) => (
                <LinkSimple
                  href={`#${id.id}`}
                  withNewPage={false}
                  className={style.link}
                >
                  {id.name}
                </LinkSimple>
              ))}
            </Article>
          ))}
        </Article>
      ))}
  </SectionWrapper>
);

export default Experience;
