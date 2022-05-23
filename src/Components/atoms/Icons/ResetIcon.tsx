import { getClassname } from "../../utils"

import { DefaultProps } from "../../DefaultProps"

import './style.css'

export const ResetIcon = (props: Omit<DefaultProps, 'children'>) => {
	const className = getClassname('a__icon', [], props.className)

	return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.14844 13.0557C5.14844 16.9307 8.25781 20.0479 12.125 20.0479C15.9922 20.0479 19.1016 16.9307 19.1016 13.0557C19.1016 9.18848 16.0156 6.09473 12.1484 6.09473C11.7422 6.09473 11.3438 6.13379 11 6.2041L12.8906 4.33691C13.0234 4.19629 13.1016 4.0166 13.1016 3.81348C13.1016 3.3916 12.7734 3.04785 12.3594 3.04785C12.1406 3.04785 11.9531 3.12598 11.8203 3.27441L8.61719 6.53223C8.46094 6.68848 8.375 6.8916 8.375 7.09473C8.375 7.30566 8.45312 7.49316 8.61719 7.65723L11.8203 10.8916C11.9531 11.0322 12.1328 11.1025 12.3594 11.1025C12.7734 11.1025 13.1016 10.7744 13.1016 10.3447C13.1016 10.1416 13.0234 9.97754 12.8828 9.8291L10.7578 7.71973C11.1562 7.63379 11.6328 7.59473 12.1484 7.59473C15.1719 7.59473 17.5703 10.0088 17.5703 13.0557C17.5703 16.0869 15.1484 18.5166 12.125 18.5166C9.10156 18.5166 6.67969 16.0869 6.67969 13.0557C6.67969 12.5947 6.38281 12.2666 5.92969 12.2666C5.46875 12.2666 5.14844 12.5947 5.14844 13.0557Z" />
	</svg>
}