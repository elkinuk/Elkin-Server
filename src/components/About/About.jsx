import React from 'react';

import { SectionWrapper, Article } from '../shared';

import style from './style.module.scss';

const text = [
  `Hello, there! My name is Victoria and I'm a front-end developer. This page is 
    my CV, my bio, my everything, lets say. And as you already probably noticed, it is not
    so much stuff here going on. It is because this website is still WIP, but anyway, I'm
    really thankful to see you here!`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae
  accusamus, dignissimos possimus commodi quas, repudiandae officia dolorum
  quisquam nisi libero culpa doloribus sed. Voluptas dignissimos rerum
  corrupti velit quod. Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Porro vitae accusamus, dignissimos possimus commodi quas,
  repudiandae officia dolorum quisquam nisi libero culpa doloribus sed.
  Voluptas dignissimos rerum corrupti velit quod.`,
];

const About = () => (
  <SectionWrapper title="About Block">
    <Article text={text} className={style.article} />
  </SectionWrapper>
);

export default About;
