import { FC, useContext } from "react"
import { getClassname, getColorClassname, getElementClassname } from "../../utils"

import { TypographyProps } from "./TypographyProps"

import { NavLink } from "react-router-dom"
import './style.css'
import { AppContext } from "../../../app";

export const Typography: FC<TypographyProps> = (props: TypographyProps) => {
	const { theme } = useContext(AppContext)
	const className = getClassname(getElementClassname(props.variant), [
		getColorClassname(theme, props.color ? props.color : 'main')
	], props.className)

	switch (props.elem) {
		case "h1": return <h1 className={className}>
			{props.children}
		</h1>
		case "h2": return <h2 className={className}>
			{props.children}
		</h2>
		case "h3": return <h3 className={className}>
			{props.children}
		</h3>
		case "h4": return <h3 className={className}>
			{props.children}
		</h3>
		case "p": return <p className={className}>
			{props.children}
		</p>
		case "span": return <span className={className}>
			{props.children}
		</span>
		case "a": return <NavLink to={props.href || '#'} className={className}>
			{props.children}
		</NavLink>
	}

}

Typography.defaultProps = {
	href: '#',
	className: '',
	color: 'main'
}