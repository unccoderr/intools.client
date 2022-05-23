import { ChangeEvent, Dispatch, SetStateAction, useContext } from "react";
import { useLocalization } from "../../../../../../Hooks"

import { AppContext } from "../../../../../../app"
import { ProfileBuilderContext } from "../../builder--context"

import { constructorBlock } from '../../../../../../Config'
const { header } = constructorBlock

export const ConstructorNavBar = () => {
	const { language } = useContext(AppContext)
	const { profilenameValue, setProfilenameValue } = useContext(ProfileBuilderContext)

	const { localize } = new useLocalization(language)
	const handleInput = (e: ChangeEvent<HTMLInputElement>, setState?: Dispatch<SetStateAction<string>>) => {
		if (setState) setState(e.target.value)
	}

	return <div className={'constructorBlock--navBar'}>
		<svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.2027 4.99988L7.20264 11.9999L14.2027 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
		<input type="text" placeholder={localize(header).toString()}
			   value={profilenameValue} onChange={e => handleInput(e, setProfilenameValue)} />
		<svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="7" cy="11.5" r="1.5" fill="#0A4E9E"/>
			<circle cx="12.5" cy="11.5" r="1.5" fill="#0A4E9E"/>
			<circle cx="18" cy="11.5" r="1.5" fill="#0A4E9E"/>
		</svg>
	</div>
}