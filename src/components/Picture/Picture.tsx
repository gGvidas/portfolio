import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import picture from 'images/picture.jpg'
import { color } from 'enums/color'

const ProfilePhoto = styled.img`
	background-color: ${color.backgroundPrimary};
	border: 2px solid ${color.border};
	height: 128px;
	width: 128px;
	object-fit: cover;
	border-radius: 50%;
	object-position: top;
	user-select: none;
	margin: 0 auto;
	display: block;
	margin-top: 16px;
`

const Picture: FunctionComponent = () => {
	return (
		<>
			<ProfilePhoto src={picture} alt="Picture" />
		</>
	)
}

export default Picture
