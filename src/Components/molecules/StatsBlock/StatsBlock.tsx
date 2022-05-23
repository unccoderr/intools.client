import { useContext } from "react"
import { useLocalization } from "../../../Hooks"

import { DefaultProps } from "../../DefaultProps"

import { AppContext, IStatsType } from "../../../app"
import './style.css'

import { statsBlock } from "../../../Config"
import { getClassname } from "../../utils";
import { Typography } from "../../atoms";
const { new_followers, new_unfollowers, total_unfollowers, total_blocked_me } = statsBlock

interface AccountStatsProps extends Omit<DefaultProps, 'children'>{
    newFollowersCount?: number,
    newUnfollowersCount?: number,
    unfollowersCount?: number,
    blockedCount?: number,
    className?: string,
}


export const StatsBlock = (props: AccountStatsProps) => {
    const { setStatsModalType, language } = useContext(AppContext)
    const { localize } = new useLocalization(language)

	const showModal = (type: IStatsType) => {
		if (setStatsModalType) setStatsModalType(type)
	}
	const className = getClassname('m__statsBlock', [], props.className)

    return <ul className={className}>
        <li onClick={() => showModal(IStatsType.NEW_FOLLOWERS)} className={'m__statsBlock__item m__statsBlock__item_positive'}>
			+1
			<Typography elem={'span'} variant={'header'}>
				{localize(new_followers)}
			</Typography>
        </li>
        <li onClick={() => showModal(IStatsType.NEW_UNFOLLOWERS)} className={'m__statsBlock__item m__statsBlock__item_negative'}>
            -3
			<Typography elem={'span'} variant={'header'}>
				{localize(new_unfollowers)}
			</Typography>
        </li>
        <li onClick={() => showModal(IStatsType.UNFOLLOWING_ME)} className={'m__statsBlock__item m__statsBlock__item_accent'}>
            35
			<Typography elem={'span'} variant={'header'}>
				{localize(total_unfollowers)}
			</Typography>
        </li>
        <li onClick={() => showModal(IStatsType.BLOCKED_ME)} className={'m__statsBlock__item m__statsBlock__item_default'}>
            5
			<Typography elem={'span'} variant={'header'}>
				{localize(total_blocked_me)}
			</Typography>
        </li>
    </ul>
}