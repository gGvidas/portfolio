import React, { FunctionComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './Picture.module.css'

const Picture: FunctionComponent = () => {
	return (
		<section className={styles.container}>
			<CSSTransition appear in timeout={0} classNames={{ ...styles }}>
				<div className={styles.picture}></div>
			</CSSTransition>
		</section>
	)
}

export default Picture