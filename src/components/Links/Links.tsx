import React, { FunctionComponent } from 'react'
import { ReactComponent as Twitter } from 'images/twitter.svg'
import { ReactComponent as Instagram } from 'images/instagram.svg'
import { ReactComponent as LinkedIn } from 'images/linkedin.svg'
import styled from 'styled-components'
import { color } from 'enums/color'

interface ILink {
	name: string
	link: string
	image: FunctionComponent
}

const Link = styled.a`
	width: 150px;
	margin: 8px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-decoration: none;
	color: ${color.textPrimary};

	span {
		padding: 0 4px;
	}

	svg {
		fill: ${color.textPrimary};
		margin-right: 16px;
		transition: transform 0.5s;
	}

	&:hover,
	&:focus {
		cursor: pointer;
		outline: none;

		span {
			background-color: ${color.backgroundSecondary};
			color: ${color.textSecondary};
		}

		svg {
			transform: scale(1.2);
		}
	}
`

const Navigation = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Links: FunctionComponent = () => {
	const links: ILink[] = [
		{
			name: 'Twitter',
			link: 'https://twitter.com/xxiggw',
			image: Twitter,
		},
		{
			name: 'Instagram',
			link: 'https://www.instagram.com/xxiggw/',
			image: Instagram,
		},
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/gvidas-gaidauskas-7207a7184/',
			image: LinkedIn,
		},
	]

	return (
		<Navigation>
			{links.map((link, index) => (
				<Link href={link.link} key={index}>
					<link.image />
					<span>{link.name}</span>
				</Link>
			))}
		</Navigation>
	)
}

export default Links
