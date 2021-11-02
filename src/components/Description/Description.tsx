import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
	color: white;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const Name = styled.span`
	font-weight: bold;
	font-size: 24px;
`
const Contacts = styled.section`
	margin: 16px 0;
	display: grid;
	grid-column-gap: 20px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	text-align: center;
`

const Email = styled.a`
	text-decoration: none;
	color: white;
`

const Description: FunctionComponent = () => {
	return (
		<Wrapper>
			<Name>Gvidas Gaidauskas</Name>
			<span>Software engineer</span>
			<Contacts>
				<Email href="mailto:gd.gvidas@gmail.com">gd.gvidas@gmail.com</Email>
				<span>+370 6904 5576</span>
			</Contacts>
		</Wrapper>
	)
}

export default Description
