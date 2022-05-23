import { TypographyColor } from "../atoms"
import { IThemeType } from "../../Types"

export const getColorClassname = (theme: IThemeType, color: TypographyColor) => {
	return `a__typography_${theme}${color ? color[0].toUpperCase() + color.slice(1): ''}`
}