import { TransitionWrapper } from 'components/Transition/TransitionWrapper'
import { color } from 'enums/color'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
	color: ${color.textPrimary};
	width: 100%;
	display: grid;
	row-gap: 16px;
	margin: 16px 0;
	justify-items: center;
`

const Contacts = styled.address`
	display: grid;
	column-gap: 20px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	text-align: center;
`

const Email = styled.a`
	text-decoration: none;
	color: ${color.textPrimary};
	padding: 0 4px;

	&:hover,
	&:focus {
		background-color: ${color.backgroundSecondary};
		color: ${color.textSecondary};
		outline: none;
	}
`

const Title = styled.span`
	min-height: 24px;
`

const FULL_TITLE = 'Software engineer'

const Description = () => {
	const [title, setTitle] = useState('')

	useEffect(() => {
		if (FULL_TITLE !== title) {
			setTimeout(
				() => {
					setTitle(title + FULL_TITLE[FULL_TITLE.indexOf(title) + title.length])
				},
				!title.length ? 2000 : 100
			)
		}
	}, [title])

	return (
		<TransitionWrapper duration={1500}>
			<Wrapper>
				<h2>Gvidas Gaidauskas</h2>
				<Title>{title}</Title>
				<Contacts>
					<Email href="mailto:gd.gvidas@gmail.com" type="email">
						gd.gvidas@gmail.com
					</Email>
					<span>+370 6904 5576</span>
				</Contacts>
			</Wrapper>
		</TransitionWrapper>
	)
}

export default Description
