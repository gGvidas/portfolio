import React, { FunctionComponent } from 'react'
import styles from './App.module.css'
import Picture from 'components/Picture/Picture'
import Links from 'components/Links/Links'
import Description from 'components/Description/Description'

const App: FunctionComponent = () => {
	return (
		<div className={styles.background}>
			<Picture />
			<Description />
			<Links />
		</div>
	)
}

export default App
