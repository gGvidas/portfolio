import { FunctionComponent, SVGProps } from 'react'
import { ReactComponent as Twitter } from 'images/twitter.svg'
import { ReactComponent as Instagram } from 'images/instagram.svg'
import { ReactComponent as LinkedIn } from 'images/linkedin.svg'
import styled from 'styled-components'
import { color } from 'enums/color'
import { TransitionWrapper } from 'components/Transition/TransitionWrapper'

interface ILink {
	name: string
	link: string
	image: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>
}

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
		transition: transform 0.5s;
	}

	&:hover,
	&:focus {
		cursor: pointer;
		outline: none;

		svg {
			transform: scale(1.2);
		}
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

const Links = () => {
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
		<TransitionWrapper duration={2000}>
			<Navigation>
				{links.map((link, index) => (
					<Link href={link.link} key={index}>
						<link.image title={link.name} />
					</Link>
				))}
			</Navigation>
		</TransitionWrapper>
	)
}

export default Links
