import { DefaultProps } from "../DefaultProps"
import { getClassname } from "../utils"

import './style.css'

export const Container = (props: DefaultProps) => {
	const className = getClassname('t__container',[], props.className)
	return <div className={className}>
		{props.children}
	</div>
}