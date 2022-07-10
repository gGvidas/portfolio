import styled from 'styled-components'
import picture from 'images/picture.jpg'
import { color } from 'enums/color'
import { TransitionWrapper } from 'components/Transition/TransitionWrapper'

const Wrapper = styled.div`
	background-color: ${color.backgroundPrimary};
	height: 128px;
	width: 128px;
	user-select: none;
	margin: 0 auto;
	display: block;
	margin-top: 16px;
`
const ProfilePhoto = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: top;
	border-radius: 50%;
	border: 2px solid ${color.border};
`

const Picture = () => {
	return (
		<TransitionWrapper duration={600}>
			<Wrapper>
				<ProfilePhoto src={picture} alt="Picture" />
			</Wrapper>
		</TransitionWrapper>
	)
}

export default Picture
