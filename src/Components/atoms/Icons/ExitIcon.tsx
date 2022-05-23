import { getClassname } from "../../utils"

import { DefaultProps } from "../../DefaultProps"

import './style.css'

export const ExitIcon = (props: Omit<DefaultProps, 'children'>) => {
	const className = getClassname('a__icon', [], props.className)

	return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16 5C16.5523 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3V5ZM16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19V21ZM9 5H16V3H9V5ZM16 19H9V21H16V19ZM5 15V9H3V15H5ZM9 19C6.79086 19 5 17.2091 5 15H3C3 18.3137 5.68629 21 9 21V19ZM9 3C5.68629 3 3 5.68629 3 9H5C5 6.79086 6.79086 5 9 5V3Z" fill="black"/>
		<path d="M13 12H20M20 12L18 9M20 12L18 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
}