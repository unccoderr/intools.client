import { useContext } from "react"
import { useLocalization } from "../../../../Hooks"

import { AppContext } from "../../../../app"
import './GreetingBlock.css'

import { greetingBlock } from "../../../../Config"
const { night, evening, day, morning, unauthorized } = greetingBlock

interface UserGreetingProps {
    username?: string,
    className?: string
}
export const GreetingBlock = ({ className }: UserGreetingProps) => {
    const { user, language } = useContext(AppContext)
    const { localize } = new useLocalization(language)

    const getGreetingWord = () => {
		const hours = new Date().getHours()
		if (hours >= 22 || hours < 6) return localize(night)
		if (hours >= 18) return localize(evening)
		if (hours >= 12) return localize(day)
		if (hours >= 6) return localize(morning)
    }

    return <h1 className={`greetingBlock${className ? ` ${className}` : ''}`}>
        {user ? `${getGreetingWord()}, ${user.username}` : localize(unauthorized)}
        <img src={require('../../../../Assets/Images/HandIcon.png')} alt={'greeting icon'} />
    </h1>

}