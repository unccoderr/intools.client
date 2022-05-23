export const getClassname = (base: string = '', modifiersList: string[] = [], optional: string = '') => {
	let result = ''
	if (base) result += base + ' '
	if (modifiersList.length !== 0) result += (modifiersList
		.map(modifier => modifier?.replaceAll(' ', ''))
		.toString()
		.replaceAll(',', ' ')) + ' '
	if (optional) result += optional
	return result
}