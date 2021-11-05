import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App/App'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'
import { color } from 'enums/color'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		height: 100vh;
		background-color: ${color.background};
		font-family: 'Zen Kaku Gothic Antique', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		overflow: auto;
	}
`

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
