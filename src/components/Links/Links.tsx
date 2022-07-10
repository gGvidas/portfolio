import { FunctionComponent, SVGProps } from 'react'
import { ReactComponent as Twitter } from 'images/twitter.svg'
import { ReactComponent as Instagram } from 'images/instagram.svg'
import { ReactComponent as LinkedIn } from 'images/linkedin.svg'
import styled, { keyframes } from 'styled-components'
import { color } from 'enums/color'
import { FadeInTransitionWrapper } from 'components/Transition/FadeInTransitionWrapper'

interface ILink {
	name: string
	link: string
	image: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>
}

const WiggleKeyframes = keyframes`
	0% {
		transform: rotate(0deg);
	}
	25% {
		transform: rotate(10deg);
	}
	75% {
		transform: rotate(-10deg);
	}
	100% {
		transform: rotate(0deg);
	}
`

const Link = styled.a`
	margin: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: ${color.textPrimary};

	span {
		padding: 0 4px;
	}

	svg {
		height: 32px;
		width: 32px;
		fill: ${color.textPrimary};
	}

	&:hover,
	&:focus {
		cursor: pointer;
		outline: none;
		animation-name: ${WiggleKeyframes};
		animation-duration: 0.5s;
		animation-iteration-count: 1;
	}
`

const Navigation = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`
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

export const Links = () => (
	<Navigation>
		{links.map((link, index) => (
			<FadeInTransitionWrapper
				delay={2000 + 500 * index}
				duration={1000}
				key={index}
			>
				<Link href={link.link}>
					<link.image title={link.name} />
				</Link>
			</FadeInTransitionWrapper>
		))}
	</Navigation>
)
