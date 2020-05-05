import React from 'react';

import { SectionWrapper, Article } from './../../atoms/shared';

import style from './style.module.scss';

const About = () => {
  const text = [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae
    accusamus, dignissimos possimus commodi quas, repudiandae officia dolorum
    quisquam nisi libero culpa doloribus sed. Voluptas dignissimos rerum
    corrupti velit quod. Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Porro vitae accusamus, dignissimos possimus commodi quas,
    repudiandae officia dolorum quisquam nisi libero culpa doloribus sed.
    Voluptas dignissimos rerum corrupti velit quod.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae
    accusamus, dignissimos possimus commodi quas, repudiandae officia dolorum
    quisquam nisi libero culpa doloribus sed. Voluptas dignissimos rerum
    corrupti velit quod. Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Porro vitae accusamus, dignissimos possimus commodi quas,
    repudiandae officia dolorum quisquam nisi libero culpa doloribus sed.
    Voluptas dignissimos rerum corrupti velit quod.`
  ];

  return ( 
    <SectionWrapper title="About Block">
      <Article text={text} className={ style.article } />
    </SectionWrapper>
   );
}
 
export default About;