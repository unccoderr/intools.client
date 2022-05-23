import React, { useContext } from "react"
import { getClassname } from "../../utils"
import { useLocalization } from "../../../Hooks"

import { AppContext } from "../../../app"
import { ConnectBlock, IconHeader, StatsBlock } from "../../molecules"
import './style.css'

import { DefaultProps } from "../../DefaultProps"
import { greetingBlock } from "../../../Config"
const { night, evening, day, morning, unauthorized } = greetingBlock

export const InfoSection = (props: Omit<DefaultProps, 'children'>) => {
	const { user, language } = useContext(AppContext)
	const { localize } = new useLocalization(language)

	const getGreetingWord = () => {
		const hours = new Date().getHours()
		if (hours >= 22 || hours < 6) return localize(night)
		if (hours >= 18) return localize(evening)
		if (hours >= 12) return localize(day)
		if (hours >= 6) return localize(morning)
	}

	const className = getClassname('o__infoSection', [], props.className)

	return <section className={className}>
		<IconHeader
			className={`indexScreen--greeting`}
			elem={'h1'}
			header={user ? getGreetingWord() + ", " + user.username : localize(unauthorized).toString()}
			icon={'handshake'}
		/>
		{ user ? <StatsBlock className={'indexScreen--headerStats'} /> : <ConnectBlock/> }
	</section>
}