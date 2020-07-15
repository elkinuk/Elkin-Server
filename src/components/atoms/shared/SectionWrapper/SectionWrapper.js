import React from 'react';

import styles from './style.module.scss';

const SectionWrapper = props => ( 
	<section className={ styles.section }>
		{ props.title ? <h1 className={styles.title}>{ props.title }</h1> : null }
		{ props.children }
	</section>
);
 
export default SectionWrapper;