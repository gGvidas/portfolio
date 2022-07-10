import styled from 'styled-components'
import picture from 'images/picture.jpg'
import { color } from 'enums/color'
import { FadeInTransitionWrapper } from 'components/Transition/FadeInTransitionWrapper'

const Wrapper = styled.div`
	background-color: ${color.backgroundPrimary};
	height: 128px;
	width: 128px;
	user-select: none;
	margin: 0 auto;
	display: block;
`
const ProfilePhoto = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: top;
	border-radius: 50%;
	border: 2px solid ${color.border};
`

export const Picture = () => (
	<FadeInTransitionWrapper duration={1000}>
		<Wrapper>
			<ProfilePhoto src={picture} alt="Picture" />
		</Wrapper>
	</FadeInTransitionWrapper>
)
