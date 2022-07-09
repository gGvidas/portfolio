import { PropsWithChildren } from 'react'
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

export const TransitionWrapper = ({
	children,
	duration,
}: PropsWithChildren<{ duration: number }>) => {
	return (
		<Transition appear in timeout={duration}>
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
