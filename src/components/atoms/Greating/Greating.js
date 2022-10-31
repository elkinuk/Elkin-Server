import React, { useEffect, useRef, useState }  from 'react';
import { type } from "../../../assets/typical";

import style from  './style.module.scss';

const Greating = () => {
  const typeText = (elRef, steps) => type(elRef.current, ...steps);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [isTitleTyping, setIsTitleTyping] = useState(true);
  const [isCommentShown, setIsCommentShown] = useState(false);

  const switchClass = () => {
    setIsTitleTyping(!isTitleTyping);
  }

  const showComment = () => { setIsCommentShown(true) };

  useEffect(() => {
    if (isTitleTyping) {
      const typeTitile = () => typeText(titleRef, ['Hello', 1000, 'Hello, my name is Viktoria', 500, switchClass]);
    
      typeText(subtitleRef, [typeTitile, 1000, 'and I\'m a software engineer', showComment]);
    }
  });

  return ( 
    <div className={ style.greating }>
      <h1 ref={titleRef} className={`${style.title} ${isTitleTyping ? 'moving-cursor' : ''} `}></h1>
      <h2 ref={subtitleRef} className={`${style.subtitle} ${!isTitleTyping ? 'moving-cursor' : ''} `}></h2>
      <p className={ `${style.comment} ${isCommentShown ? 'fadeIn' : ''}` }>Nice to see you here</p>
    </div>
  );
}
 
export default Greating;