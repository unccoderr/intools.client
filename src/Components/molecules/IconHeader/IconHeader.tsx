import { getClassname } from "../../utils"

import { CalendarIcon, HammersIcon, HandshakeIcon, Typography, TypographyElement } from "../../atoms"
import './style.css'
import { DefaultProps } from "../../DefaultProps"
interface IconHeaderProps extends Omit<DefaultProps, 'children'> {
	elem: TypographyElement,
	header: string,
	icon: 'handshake' | 'calendar' | 'hammers'
}
export const IconHeader = (props: IconHeaderProps) => {
	const className = getClassname('m__iconHeader', [], props.className)
	return <Typography
		className={className}
		elem={props.elem}
		variant={'title1'}
	>
		{props.header}
		{ props.icon === 'handshake'
			? <HandshakeIcon />
			: props.icon === 'calendar'
				? <CalendarIcon />
				: <HammersIcon />
		}
	</Typography>
}