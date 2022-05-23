import { FC, ReactNode } from "react";

interface H1Props {
	element?: 'h1' | 'h2',
	children: ReactNode,
	className?: string,

}
export const IconedHeader: FC<H1Props> = (props: H1Props) => {
	let src = ''


	switch (props.element) {
		case 'h1': return <h1 className={`${props.className ? props.className : ''}`}>
			{props.children}
			<img src={src} alt="icon header illustration"/>
		</h1>
		case 'h2': return <h2 className={`${props.className ? props.className : ''}`}>
			{props.children}
			<img src={src} alt="icon header illustration"/>
		</h2>
		default: return <h2 className={`${props.className ? props.className : ''}`}>
			{props.children}
			<img src={src} alt="icon header illustration"/>
		</h2>
	}
}
IconedHeader.defaultProps = {
	element: "h2",
	className: ''
}