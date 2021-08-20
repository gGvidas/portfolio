import React, { FunctionComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './App.module.css'
import Picture from 'components/Picture/Picture'
import Links from 'components/Links/Links'
import Description from 'components/Description/Description'

const App: FunctionComponent = () => {
	return (
		<div className={styles.background}>
			<CSSTransition appear in timeout={500} classNames={{ ...styles }}>
				<header className={styles.header}>
				</header>
			</CSSTransition>
			<Picture />
			<Description />
			<Links />
		</div>
	)
}

export default App