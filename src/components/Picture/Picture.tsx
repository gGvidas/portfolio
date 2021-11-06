import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import picture from 'images/picture.jpg'
import { color } from 'enums/color'

const Header = styled.header`
	padding-top: 16px;
	width: 100%;
`

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
`

const Picture: FunctionComponent = () => {
	return (
		<Header>
			<ProfilePhoto src={picture} />
		</Header>
	)
}

export default Picture
