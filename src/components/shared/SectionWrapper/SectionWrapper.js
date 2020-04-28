import React from 'react';

import styles from './style.scss';

const SectionWrapper = props => ( 
	<section className={styles.section}>
		<h1 className={styles.title}>{ props.title }</h1>
		<div className="content">
		{ props.children }
		</div>
	</section>
);
 
export default SectionWrapper;