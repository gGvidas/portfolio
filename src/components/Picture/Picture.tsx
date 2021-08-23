import React, { FunctionComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './Picture.module.css'

const Picture: FunctionComponent = () => {
	return (
		<header className={styles.header}>
			<section className={styles.container}>
				<div className={styles.picture}></div>
			</section>
			<CSSTransition appear in timeout={0} classNames={{
				appear: styles.appear,
				appearDone: styles.appearDone
			}}>
				<div className={styles.animationContainer}></div>
			</CSSTransition>
		</header>
	)
}

export default Picture