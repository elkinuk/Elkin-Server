import React from 'react';

import styles from './style.module.scss';

const SectionWrapper = ({ title, children }) => (
  <section className={styles.section}>
    {title ? <h1 className={styles.title}>{title}</h1> : null}
    {children}
  </section>
);

export default SectionWrapper;
