import React, { FunctionComponent } from 'react'
import styles from './Description.module.css'

const Description: FunctionComponent = () => {
	return (
		<section className={styles.container}>
			<span className={styles.name}>Gvidas Gaidauskas</span>
			<span className={styles.title}>Software developer</span>
		</section>
	)
}

export default Description