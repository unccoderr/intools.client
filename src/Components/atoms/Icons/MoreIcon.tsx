import { getClassname } from "../../utils"

import { DefaultProps } from "../../DefaultProps"

import './style.css'

export const MoreIcon = (props: Omit<DefaultProps, 'children'>) => {
	const className = getClassname('a__icon', [], props.className)
	return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="6.5" cy="11.5" r="1.5" fill="black"/>
		<circle cx="12" cy="11.5" r="1.5" fill="black"/>
		<circle cx="17.5" cy="11.5" r="1.5" fill="black"/>
	</svg>
}