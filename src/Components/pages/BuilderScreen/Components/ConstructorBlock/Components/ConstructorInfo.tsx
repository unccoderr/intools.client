import { ChangeEvent, Dispatch, SetStateAction, useContext } from "react";
import { AppContext } from "../../../../../../app";
import { useLocalization } from "../../../../../../Hooks";
import { ProfileBuilderContext } from "../../builder--context";

import { constructorBlock } from '../../../../../../Config'
const { info } = constructorBlock
export const ConstructorInfo = () => {
	const { language } = useContext(AppContext)

	const { category, description, link, usernameValue,
		setUsernameValue, categoryValue, setCategoryValue, biographyValue,
		setBiographyValue, linkValue, setLinkValue } = useContext(ProfileBuilderContext)

	const { localize } = new useLocalization(language)
	const handleInput = (e: ChangeEvent<HTMLInputElement>, setState?: Dispatch<SetStateAction<string>>) => {
		if (setState) setState(e.target.value)
	}
	const handleTextarea = (e: ChangeEvent<HTMLTextAreaElement>, setState?: Dispatch<SetStateAction<string>>) => {
		e.target.style.height = 'auto'
		e.target.style.height = `${e.target.scrollHeight}px`
		if (!setState) return
		setState(e.target.value)
	}

	return <div className={'constructorBlock--info'}>
		<input id={'username'} type="text" value={usernameValue}
			   placeholder={localize(info.username).toString()}
			   onChange={e => handleInput(e, setUsernameValue)}
		/>
		{ category && <input id={'category'} type={"text"} value={categoryValue}
				placeholder={localize(info.category).toString()}
				onChange={e => handleInput(e, setCategoryValue)}
		/> }

		{ description && <textarea rows={1} id={'biography'} value={biographyValue}
				placeholder={localize(constructorBlock.info.biography).toString()}
				onChange={e => handleTextarea(e, setBiographyValue)}
		/> }
		{ link && <input value={linkValue} id={'url'} type="url"
				placeholder={localize(info.link).toString()}
				onChange={e => handleInput(e, setLinkValue)}
		/> }
	</div>
}