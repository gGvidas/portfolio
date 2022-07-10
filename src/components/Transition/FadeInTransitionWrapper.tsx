import { PropsWithChildren, useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'

const defaultFadeInStyle = (duration: number) => ({
	opacity: 0,
	transition: `opacity ${duration}ms ease-in-out`,
})

const transitionFadeInStyles = {
	entering: { opacity: 0 },
	entered: { opacity: 1 },
	exiting: { opacity: 1 },
	exited: { opacity: 0 },
	unmounted: {},
}

export const FadeInTransitionWrapper = ({
	children,
	duration,
	delay = 0,
}: PropsWithChildren<{ duration: number; delay?: number }>) => {
	const [enabled, setEnabled] = useState(false)

	useEffect(() => {
		setTimeout(() => setEnabled(true), delay)
	}, [])

	return (
		<Transition appear in={enabled} timeout={duration}>
			{(state) => (
				<div
					style={{
						...defaultFadeInStyle(duration),
						...transitionFadeInStyles[state],
					}}
				>
					{children}
				</div>
			)}
		</Transition>
	)
}
