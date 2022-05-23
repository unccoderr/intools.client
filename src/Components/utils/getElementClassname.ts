import { TypographyVariant } from "../atoms"

export const getElementClassname = (variant: TypographyVariant) => {
	return `a__typography_${variant}`
}