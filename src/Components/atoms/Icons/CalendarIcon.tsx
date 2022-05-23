import { getClassname } from "../../utils"

import { DefaultProps } from "../../DefaultProps"

import './style.css'

export const CalendarIcon = (props: Omit<DefaultProps, 'children'>) => {
	const className = getClassname('a__icon_large', [], props.className)


	return <img
		className={className}
		src={require('../../../Assets/icons/CalendarIcon.png')}
		alt={'greeting icon'}
	/>
}