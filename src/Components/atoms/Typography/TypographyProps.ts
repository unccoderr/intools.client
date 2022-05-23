import { DefaultProps } from "../../DefaultProps"

export type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'a'
export type TypographyVariant = 'constructorTitle' | 'constructorBody1' | 'constructorBody2'
| 'constructorCaption' | 'constructorNumbers' | 'title1' | 'title2' | 'header' | 'body1' | 'body2' | 'caption'
export type TypographyColor = 'main' | 'secondary' | 'negative'

export interface TypographyProps extends DefaultProps {
	elem: TypographyElement,
	variant: TypographyVariant,
	color?: TypographyColor,
	href?: string
}