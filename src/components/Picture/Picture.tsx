import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import picture from 'images/picture.jpg'
import { color } from 'enums/color'

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
	height: 128px;
	width: 128px;
	object-fit: cover;
	object-position: top;
	border-radius: 50%;
	border: 2px solid ${color.border};
`

const Picture: FunctionComponent = () => {
	return (
		<Wrapper>
			<ProfilePhoto src={picture} alt="Picture" />
		</Wrapper>
	)
}

export default Picture
