import { useContext } from "react"
import { useLocalization } from "../../../../Hooks"

import { AppContext, initialUser } from "../../../../app"
import { Avatar } from "../../../../Components"
import './ConnectBlock.css'

import { connectBlock } from "../../../../Config"
const { title, description, button } = connectBlock

interface ConnectBlockProps {
    className?: string
}
export const ConnectBlock = ({ className }: ConnectBlockProps) => {
    const { language, setUser } = useContext(AppContext);
    const { localize } = new useLocalization(language)

	const login = () => {
		//window.open(IG_AUTH_URL, '_self')
		if (setUser) setUser(initialUser)
	}

    return <div className={`connectBlock${className ? ` ${className}` : ''}`}>
		<Avatar className={'connectBlock--icon'}/>
        <div className={'connectBlock--wrapper'}>
            <h2>
				{localize(title)}
				<span title={'We do not store your usernames and passwords from Instagram'}/>
			</h2>
            <p> {localize(description)} </p>
            <button onClick={login}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.38425 12.8842H11.1158V17.6158C11.1158 18.0967 11.5113 18.5 12 18.5C12.4887 18.5 12.8842 18.0967 12.8842 17.6158V12.8842H17.6158C18.0967 12.8842 18.5 12.4887 18.5 12C18.5 11.5113 18.0967 11.1158 17.6158 11.1158H12.8842V6.38425C12.8842 5.90334 12.4887 5.5 12 5.5C11.5113 5.5 11.1158 5.90334 11.1158 6.38425V11.1158H6.38425C5.90334 11.1158 5.5 11.5113 5.5 12C5.5 12.4887 5.90334 12.8842 6.38425 12.8842Z"/>
                </svg>
                {localize(button)}
            </button>
        </div>
    </div>
}