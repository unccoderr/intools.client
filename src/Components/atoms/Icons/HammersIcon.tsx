import { getClassname } from "../../utils"

import { DefaultProps } from "../../DefaultProps"

import './style.css'

export const HammersIcon = (props: Omit<DefaultProps, 'children'>) => {
	const className = getClassname('a__icon_large', [], props.className)
	return <img
		className={className}
		src={require('../../../Assets/icons/BuilderIcon.png')}
		alt={'greeting icon'}
	/>
}