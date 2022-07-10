import { Picture } from 'components/Picture/Picture'
import { Links } from 'components/Links/Links'
import { Description } from 'components/Description/Description'
import styled from 'styled-components'

const AppWrapper = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`

const App = () => {
	return (
		<AppWrapper>
			<Picture />
			<Description />
			<Links />
		</AppWrapper>
	)
}

export default App
