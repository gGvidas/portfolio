import React, { FunctionComponent } from 'react'
import Picture from 'components/Picture/Picture'
import Links from 'components/Links/Links'
import Description from 'components/Description/Description'

const App: FunctionComponent = () => {
	return (
		<>
			<Picture />
			<Description />
			<Links />
		</>
	)
}

export default App
