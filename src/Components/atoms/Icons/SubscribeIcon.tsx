import { getClassname } from "../../utils"

import { DefaultProps } from "../../DefaultProps"

import './style.css'

export const SubscribeIcon = (props: Omit<DefaultProps, 'children'>) => {
	const className = getClassname('a__icon', [], props.className)

	return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.0156 20.8672L17.3125 11.5547C17.4531 11.3828 17.5234 11.2188 17.5234 11.0312C17.5234 10.7031 17.2734 10.4688 16.9297 10.4688H12.4688L14.7812 4.34375C15.1016 3.48438 14.2031 3.03125 13.6562 3.73438L6.36719 13.0391C6.22656 13.2188 6.14844 13.3828 6.14844 13.5703C6.14844 13.8906 6.39844 14.1328 6.74219 14.1328H11.2109L8.89062 20.25C8.57031 21.1094 9.46875 21.5625 10.0156 20.8672ZM13.1562 12.875H8.29688L12.6172 7.15625L10.5078 11.7266H15.3672L11.0547 17.4453L13.1562 12.875Z" fill="black"/>
	</svg>
}