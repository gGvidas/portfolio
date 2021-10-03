import React, { FunctionComponent } from 'react'
import styles from './Description.module.css'

const Description: FunctionComponent = () => {
	return (
		<section className={styles.container}>
			<span className={styles.name}>Gvidas Gaidauskas</span>
			<span className={styles.title}>Software engineer</span>
			<section className={styles.contacts}>
				<a href="mailto:gd.gvidas@gmail.com" className={styles.email}>gd.gvidas@gmail.com</a>
				<span>+370 6904 5576</span>
			</section>
		</section>
	)
}

export default Description