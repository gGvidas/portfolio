import React from 'react'
import { createRoot } from 'react-dom/client'
import App from 'components/App/App'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'
import { color } from 'enums/color'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body, #root {
		height: 100vh;
		background-color: ${color.backgroundPrimary};
		font-family: 'Zen Kaku Gothic Antique', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		overflow: auto;
		color: ${color.textPrimary};
	}

	h1, h2, h3, h4, h5 {
		background-color: ${color.backgroundSecondary};
		color: ${color.textSecondary};
		padding: 0 4px;
		margin: 0;
	}
`
createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
