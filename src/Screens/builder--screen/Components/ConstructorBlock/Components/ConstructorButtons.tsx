import { useContext } from "react"
import { useLocalization } from "../../../../../Hooks"

import { ProfileBuilderContext } from "../../builder--context"
import { AppContext } from "../../../../../app"

import { constructorBlock } from '../../../../../Config'
const { buttons } = constructorBlock

export const ConstructorButtons = () => {
	const { language } = useContext(AppContext)
	const { market, contact, isSubscribed, setIsSubscribed, isContacted, setIsContacted } = useContext(ProfileBuilderContext)

	const { localize } = new useLocalization(language)
	const toggleSubscription = () => {
		if (setIsSubscribed) setIsSubscribed(!isSubscribed)
	}
	const toggleContact = () => {
		if (setIsContacted) setIsContacted(!isContacted)
	}

	return <div className={'constructorBlock--buttons'}>
		{ market && <div className={'constructorBlock--buttonsItem constructorBlock--buttonsItem-market'}>
			{localize(buttons.market)}
		</div> }
		<div className={'constructorBlock--buttonsWrapper'}>
			<div className={`constructorBlock--buttonsWrapper-inner${!contact ? ' constructorBlock--buttonsWrapper-innerTwo' : ''}`}>
				<div onClick={toggleSubscription} className={'constructorBlock--buttonsItem constructorBlock--buttonsItem-active'}>
					{ isSubscribed ? localize(buttons.follow.after) : localize(buttons.follow.before) }
				</div>
				<div className={'constructorBlock--buttonsItem'}>
					{localize(buttons.message)}
				</div>
				{ contact && <div onClick={toggleContact} className={'constructorBlock--buttonsItem'}>
					{ isContacted ? localize(buttons.email.after) : localize(buttons.email.before) }
				</div> }
			</div>
			<div className={'constructorBlock--buttonsItem constructorBlock--buttonsItem-dropdown'}>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 7L8.11127 10.1113L11.2225 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</div>
		</div>
	</div>
}