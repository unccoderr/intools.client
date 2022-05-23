import { FC } from "react"
import { getClassname } from "../../utils"

import './style.css'

import { DefaultProps } from "../../DefaultProps"
interface ButtonProps extends DefaultProps {
	size: 'l' | 'm' | 's',
	crumb?: boolean,
	active?: boolean,
	onClick?: () => any
}
export const Button: FC<ButtonProps> = (props: ButtonProps) => {
	const className = getClassname(props.crumb ? 'a__crumb' : 'a__btn', [
		props.crumb ? '' : `a__btn_${props.size}`,
		(props.crumb && props.active) ? `a__crumb_active` : ''
	], props.className)

	return <button onClick={props.onClick} className={className}>
		{props.children}
	</button>
}
Button.defaultProps = {
	crumb: false,
	active: false
}