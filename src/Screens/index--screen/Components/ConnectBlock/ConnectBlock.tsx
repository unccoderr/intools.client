import { useContext } from "react"
import { useLocalization } from "../../../../Hooks"

import { AppContext, initialUser } from "../../../../app"
import { Avatar } from "../../../../Components"
import './ConnectBlock.css'

import { connectBlock } from "../../../../Config"
const { title, description, button, tooltip } = connectBlock

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
				<span title={localize(tooltip).toString()} >
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M10.1484 6.89844C10.1484 7.59375 10.7031 8.14844 11.3984 8.14844C12.1016 8.14844 12.6484 7.59375 12.6484 6.89844C12.6484 6.19531 12.1016 5.64062 11.3984 5.64062C10.7031 5.64062 10.1484 6.19531 10.1484 6.89844ZM8.15625 17.1719C8.15625 17.6797 8.50781 18 9.04688 18H13.9453C14.4844 18 14.8359 17.6797 14.8359 17.1719C14.8438 16.6719 14.4922 16.3516 13.9453 16.3516H12.5781V10.7578C12.5781 10.2266 12.2344 9.89062 11.7188 9.89062H9.26562C8.71875 9.89062 8.36719 10.2109 8.375 10.7109C8.375 11.2188 8.72656 11.5391 9.26562 11.5391H10.7891V16.3516H9.04688C8.5 16.3516 8.15625 16.6719 8.15625 17.1719Z" fill="#2D80CD"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#2D80CD"/>
					</svg>
				</span>
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