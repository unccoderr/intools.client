import { ChangeEvent, useContext } from "react"
import { updateSrc } from "../../../../../Utils"
import { ProfileBuilderContext } from "../../builder--context"

export const ConstructorAvatar = () => {
	const { avatarURL, setAvatarURL } = useContext(ProfileBuilderContext)

	const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (setAvatarURL) await updateSrc(e, setAvatarURL)
	}

    return <div className={`constructorBlock--statsAvatar${!avatarURL ? ' constructorBlock--statsAvatar-empty' : ''}`}>
        <label>
            <input type="file" onChange={onChange} accept=".jpg, .jpeg, .png"/>
            { !avatarURL && <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.494 22C13.2463 22 13.8672 21.389 13.8672 20.6957V13.3396H21.1507C21.8672 13.3396 22.5 12.7403 22.5 12C22.5 11.2714 21.8672 10.6604 21.1507 10.6604H13.8672V3.30435C13.8672 2.59929 13.2463 2 12.494 2C11.7537 2 11.1328 2.59929 11.1328 3.30435V10.6604H3.84925C3.14478 10.6604 2.5 11.2714 2.5 12C2.5 12.7403 3.14478 13.3396 3.84925 13.3396H11.1328V20.6957C11.1328 21.389 11.7537 22 12.494 22Z" fill="#828282"/>
            </svg> }
            { avatarURL && <div id={'constructorAvatar'} style={{ backgroundImage: `url(${avatarURL})` }}/> }
        </label>
    </div>
}