import { color } from 'enums/color'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
	color: ${color.textSecondary};
	width: 100%;
	display: grid;
	row-gap: 16px;
	margin: 16px 0;
	justify-items: center;
`
const Name = styled.h2`
	background-color: ${color.border};
	color: ${color.textPrimary};
	padding: 0 4px;
	margin: 0;
`

const Contacts = styled.section`
	display: grid;
	column-gap: 20px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	text-align: center;
`

const Email = styled.a`
	text-decoration: none;
	color: ${color.textSecondary};
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
