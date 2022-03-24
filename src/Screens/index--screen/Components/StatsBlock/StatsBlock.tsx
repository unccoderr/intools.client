import { useContext } from "react"
import { useLocalization } from "../../../../Hooks"

import { AppContext, IStatsType } from "../../../../app"
import './StatsBlock.css'

import { statsBlock } from "../../../../Config"
const { new_followers, new_unfollowers, total_unfollowers, total_blocked_me } = statsBlock

interface AccountStatsProps {
    newFollowersCount?: number,
    newUnfollowersCount?: number,
    unfollowersCount?: number,
    blockedCount?: number,
    className?: string,
}


export const StatsBlock = ({ className }: AccountStatsProps) => {
    const { setStatsModalType, language } = useContext(AppContext)
    const { localize } = new useLocalization(language)

	const showModal = (type: IStatsType) => {
		if (setStatsModalType) setStatsModalType(type)
	}

    return <ul className={`statsBlock${className ? ` ${className}` : ''}`}>
        <li onClick={() => showModal(IStatsType.NEW_FOLLOWERS)} className={'statsBlock--item statsBlock--item-positive'}>
			+1
            <span>{localize(new_followers)}</span>
        </li>
        <li onClick={() => showModal(IStatsType.NEW_UNFOLLOWERS)} className={'statsBlock--item statsBlock--item-negative'}>
            -3
            <span>{localize(new_unfollowers)}</span>
        </li>
        <li onClick={() => showModal(IStatsType.UNFOLLOWING_ME)} className={'statsBlock--item statsBlock--item-accent'}>
            35
            <span>{localize(total_unfollowers)}</span>
        </li>
        <li onClick={() => showModal(IStatsType.BLOCKED_ME)} className={'statsBlock--item statsBlock--item-default'}>
            5
            <span>{localize(total_blocked_me)}</span>
        </li>
    </ul>
}