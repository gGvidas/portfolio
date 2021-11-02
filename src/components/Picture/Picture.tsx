import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import picture from 'images/picture.jpg'

const Header = styled.header`
	position: relative;
	width: 100%;
	overflow: hidden;
`

const Wrapper = styled.section`
	height: 128px;
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 80px;
	border-bottom: 2px solid white;
`

const ProfilePhoto = styled.img`
	position: relative;
	top: 64px;
	border: 2px solid white;
	height: 128px;
	width: 128px;
	object-fit: cover;
	border-radius: 50%;
	object-position: top;
`

const Picture: FunctionComponent = () => {
	return (
		<Header>
			<Wrapper>
				<ProfilePhoto src={picture} />
			</Wrapper>
		</Header>
	)
}

export default Picture
