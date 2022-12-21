import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { typeText } from './utils';

import style from './style.module.scss';

const titleConfig = ['Hello', 1000, 'Hello, my name is Viktoria', 500];
const subtitleConfig = [1000, "and I'm a software engineer"];

const Greetings = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const [isTitleTyping, setIsTitleTyping] = useState(true);
  const [isCommentShown, setIsCommentShown] = useState(false);

  const switchClass = () => {
    setIsTitleTyping(!isTitleTyping);
  };

  const showComment = () => {
    setIsCommentShown(true);
  };

  useEffect(() => {
    if (isTitleTyping) {
      const typeTitle = () => typeText(titleRef, [...titleConfig, switchClass]);
      typeText(subtitleRef, [typeTitle, ...subtitleConfig, showComment]);
    }
  }, [isTitleTyping, titleRef, subtitleRef]);

  return (
    <div className={style.greeting}>
      <p
        ref={titleRef}
        className={clsx(style.title, isTitleTyping && 'moving-cursor')}
      />
      <p
        ref={subtitleRef}
        className={clsx(style.subtitle, !isTitleTyping && 'moving-cursor')}
      />
      <p className={clsx(style.comment, isCommentShown && 'fadeIn')}>
        Nice to see you here
      </p>
    </div>
  );
};

export default Greetings;
