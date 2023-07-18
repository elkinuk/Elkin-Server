import React from 'react';

import clsx from 'clsx';
import styles from './style.module.scss';

const SectionWrapper = ({ title, children, className }) => (
  <section className={clsx(styles.section, className)}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {children}
  </section>
);

export default SectionWrapper;
