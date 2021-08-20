import React, { FunctionComponent } from 'react'
import styles from './Links.module.css'
import { ReactComponent as Twitter } from 'images/twitter.svg'
import { ReactComponent as Instagram } from 'images/instagram.svg'
import { ReactComponent as LinkedIn } from 'images/linkedin.svg'
import { CSSTransition } from 'react-transition-group'

interface ILink {
    name: string,
    link: string,
    image: FunctionComponent
}

const Links: FunctionComponent = () => {
	const links: ILink[] = [
		{
			name: 'Twitter',
			link: 'https://twitter.com/xxiggw',
			image: Twitter
		},
		{
			name: 'Instagram',
			link: 'https://www.instagram.com/xxiggw/',
			image: Instagram
		},
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/gvidas-gaidauskas-7207a7184/',
			image: LinkedIn
		},
	]

	return (
		<section className={styles.container}>
			{
				links.map((link, index) =>
					<CSSTransition appear in timeout={1000} classNames={{...styles}} key={index}>
						<a href={link.link} className={styles.link}><link.image/>{link.name}</a>
					</CSSTransition>
				)
			}
		</section>
	)
}

export default Links