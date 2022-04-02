import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useContext } from "react"
import { useLocalization } from "../../../../../Hooks"

import { AppContext } from "../../../../../app"
import { ProfileBuilderContext } from "../../builder--context"
import { ConstructorAvatar } from "./ConstructorAvatar"

import { constructorBlock } from '../../../../../Config'
const { stats } = constructorBlock

export const ConstructorStats = () => {
	const { language } = useContext(AppContext)
	const { postsCount, setPostsCount, followersCount,
		setFollowersCount, followingCount, setFollowingCount } = useContext(ProfileBuilderContext)

	const { localize } = new useLocalization(language)
	const handleNumberInput = (e: ChangeEvent<HTMLInputElement>, setState?: Dispatch<SetStateAction<string>>) => {
		if (!setState || isNaN(+e.target.value)) return
		setState(e.target.value)
	}
	const onUnfocusedInput = (e: FormEvent<HTMLInputElement>, setState?: Dispatch<SetStateAction<string>>) => {
		const target = e.target as HTMLInputElement
		if (!setState || target.value.includes('k') || target.value.includes('m')) return
		const value = +target.value

		if (value > 1000000) setState((value / 1000000).toFixed(0) + 'm')
		else if (value > 1000) setState((value / 1000).toFixed(0) + 'k')
		else setState(value.toString())
	}

	return <div className={'constructorBlock--stats'}>
		<ConstructorAvatar/>
		<ul>
			<li>
				<input placeholder={localize(stats.placeholder).toString()} type="text"
					   value={postsCount}
					   onBlur={e => onUnfocusedInput(e, setPostsCount)}
					   onChange={e => handleNumberInput(e, setPostsCount)} />
				{localize(stats.posts)}
			</li>
			<li>
				<input placeholder={localize(stats.placeholder).toString()} type="text"
					   value={followersCount}
					   onBlur={e => onUnfocusedInput(e, setFollowersCount)}
					   onChange={e => handleNumberInput(e, setFollowersCount)} />
				{localize(stats.followers)}
			</li>
			<li>
				<input placeholder={localize(stats.placeholder).toString()} type="text"
					   value={followingCount}
					   onBlur={e => onUnfocusedInput(e, setFollowingCount)}
					   onChange={e => handleNumberInput(e, setFollowingCount)} />
				{localize(stats.following)}
			</li>
		</ul>
	</div>
}