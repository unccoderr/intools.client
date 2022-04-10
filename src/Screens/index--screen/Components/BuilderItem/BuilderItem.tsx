import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useBuilderProfilesData, useLocalization } from "../../../../Hooks"

import { AppContext } from "../../../../app"
import { BuilderProfile } from "../../../../Types"
import './BuilderItem.css'

import { builderProfileItem, constructorBlock } from "../../../../Config"
const { posts, followers, following } = builderProfileItem
const { stats, header } = constructorBlock

interface BuilderItemProps {
    className?: string,
    builderProfile: BuilderProfile
}
export const BuilderItem = ({ className, builderProfile }: BuilderItemProps) => {
	const { profilename, posts_count, followers_count, following_count, avatar_url, timestamp } = builderProfile
	const { language } = useContext(AppContext)
	const { localize } = new useLocalization(language)
	const { getProfileID, deleteProfile } = useBuilderProfilesData
	const navigate = useNavigate()
	const [showOverlay, setShowOverlay] = useState(false)

	const deleteBuilderItem = () => {
		deleteProfile(getProfileID(timestamp))
		window.location.reload()
		toggleDeleteOverlay()
	}
	const toggleDeleteOverlay = () => setShowOverlay(!showOverlay)

	useEffect(() => {
		window.addEventListener('click', e => {
			const target = e.target as HTMLElement
			if (target.dataset.modal === undefined && showOverlay) toggleDeleteOverlay()
		})
	}, [])

	return <div className={`builderItem${className ? ` ${className}` : ''}`}>
        <div className="builderItem--header">
            <h3>{profilename || localize(header)}</h3>
			<div>
				<ul data-modal={true} className={`builderItem--deleteOverlay${!showOverlay ? ' builderItem--deleteOverlay-hidden' : ''}`}>
					<li data-modal={true}>
						<button data-modal={true} onClick={deleteBuilderItem}>Удалить профиль</button>
					</li>
					<li data-modal={true}>
						<button data-modal={true} onClick={toggleDeleteOverlay}>Отмена</button>
					</li>
				</ul>
				<button data-modal={true} onClick={toggleDeleteOverlay}>
					<svg data-modal={true}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path data-modal={true}  d="M17.5775 18.7049L18.1234 7.58456H18.9146C19.2389 7.58456 19.5 7.32595 19.5 7.01409C19.5 6.70224 19.2389 6.43602 18.9146 6.43602H15.4573V5.29508C15.4573 4.20738 14.6899 3.5 13.4715 3.5H10.5127C9.2943 3.5 8.53481 4.20738 8.53481 5.29508V6.43602H5.09335C4.7769 6.43602 4.5 6.70224 4.5 7.01409C4.5 7.32595 4.7769 7.58456 5.09335 7.58456H5.88449L6.43038 18.7125C6.48576 19.8078 7.23734 20.5 8.37658 20.5H15.6313C16.7627 20.5 17.5222 19.8002 17.5775 18.7049ZM9.80063 5.37114C9.80063 4.93758 10.1329 4.63333 10.6076 4.63333H13.3845C13.8671 4.63333 14.1994 4.93758 14.1994 5.37114V6.43602H9.80063V5.37114ZM8.49525 19.3591C8.03639 19.3591 7.6962 19.0244 7.67247 18.5832L7.11867 7.58456H16.8576L16.3354 18.5832C16.3117 19.032 15.9794 19.3591 15.5127 19.3591H8.49525ZM14.3497 18.0204C14.6108 18.0204 14.8085 17.815 14.8165 17.526L15.0538 9.49374C15.0617 9.2047 14.856 8.99172 14.587 8.99172C14.3418 8.99172 14.1361 9.2123 14.1282 9.48613L13.8908 17.526C13.8829 17.7998 14.0807 18.0204 14.3497 18.0204ZM9.65823 18.0204C9.92722 18.0204 10.125 17.7998 10.1171 17.526L9.87975 9.48613C9.87184 9.2123 9.65823 8.99172 9.41297 8.99172C9.14399 8.99172 8.9462 9.2047 8.95411 9.49374L9.19937 17.526C9.20728 17.815 9.39715 18.0204 9.65823 18.0204ZM12.4826 17.526V9.48613C12.4826 9.2123 12.269 8.99172 12.0079 8.99172C11.7468 8.99172 11.5253 9.2123 11.5253 9.48613V17.526C11.5253 17.7998 11.7468 18.0204 12.0079 18.0204C12.2611 18.0204 12.4826 17.7998 12.4826 17.526Z" fill="#FF3B30"/>
					</svg>
				</button>
				<button onClick={() => navigate(`/builder/${getProfileID(timestamp)}`)}>
					<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.2449 20.0012H12.7551C13.3308 20.0012 13.772 19.6494 13.9065 19.0956L14.228 17.6961L14.4673 17.6137L15.686 18.3622C16.172 18.669 16.7327 18.5942 17.1439 18.1825L18.1907 17.1422C18.6019 16.7306 18.6766 16.1618 18.3701 15.6828L17.6075 14.4704L17.6972 14.2459L19.0953 13.9165C19.6411 13.7818 20 13.3328 20 12.764V11.2821C20 10.7133 19.6486 10.2643 19.0953 10.1296L17.7121 9.79276L17.615 9.55327L18.3776 8.34083C18.6841 7.86184 18.6093 7.30053 18.1981 6.88141L17.1514 5.83363C16.7477 5.42948 16.1869 5.35464 15.7009 5.65401L14.4822 6.40242L14.228 6.30513L13.9065 4.90559C13.772 4.35176 13.3308 4 12.7551 4H11.2449C10.6692 4 10.228 4.35176 10.0935 4.90559L9.76449 6.30513L9.51028 6.40242L8.29907 5.65401C7.81308 5.35464 7.24486 5.42948 6.84112 5.83363L5.80187 6.88141C5.39065 7.30053 5.30841 7.86184 5.62243 8.34083L6.37757 9.55327L6.28785 9.79276L4.90467 10.1296C4.3514 10.2643 4 10.7133 4 11.2821V12.764C4 13.3328 4.35888 13.7818 4.90467 13.9165L6.3028 14.2459L6.38505 14.4704L5.62991 15.6828C5.31589 16.1618 5.39813 16.7306 5.80935 17.1422L6.8486 18.1825C7.25981 18.5942 7.82804 18.669 8.31402 18.3622L9.52523 17.6137L9.76449 17.6961L10.0935 19.0956C10.228 19.6494 10.6692 20.0012 11.2449 20.0012ZM11.3645 18.8337C11.2374 18.8337 11.1701 18.7813 11.1477 18.6615L10.6991 16.8054C10.243 16.6932 9.81682 16.5136 9.49533 16.3115L7.86542 17.3144C7.7757 17.3817 7.6785 17.3668 7.58879 17.277L6.70654 16.3938C6.6243 16.3115 6.61682 16.2217 6.67664 16.1169L7.6785 14.5003C7.50654 14.186 7.31215 13.7594 7.19252 13.3028L5.33832 12.8613C5.21869 12.8388 5.16636 12.7715 5.16636 12.6442V11.3944C5.16636 11.2597 5.21122 11.1998 5.33832 11.1773L7.18505 10.7283C7.30467 10.2418 7.52897 9.80025 7.66355 9.52333L6.66916 7.90675C6.60187 7.79448 6.60935 7.70467 6.69159 7.61486L7.58131 6.7467C7.67103 6.65689 7.75327 6.64192 7.86542 6.70928L9.48037 7.68971C9.80187 7.51008 10.2579 7.32298 10.7065 7.19575L11.1477 5.33967C11.1701 5.21992 11.2374 5.16753 11.3645 5.16753H12.6355C12.7626 5.16753 12.8299 5.21992 12.8449 5.33967L13.3009 7.21072C13.7645 7.33046 14.1682 7.51757 14.5047 7.69719L16.1271 6.70928C16.2467 6.64192 16.3215 6.65689 16.4187 6.7467L17.3009 7.61486C17.3907 7.70467 17.3907 7.79448 17.3234 7.90675L16.329 9.52333C16.471 9.80025 16.6879 10.2418 16.8075 10.7283L18.6617 11.1773C18.7813 11.1998 18.8336 11.2597 18.8336 11.3944V12.6442C18.8336 12.7715 18.7738 12.8388 18.6617 12.8613L16.8 13.3028C16.6804 13.7594 16.4935 14.186 16.314 14.5003L17.3159 16.1169C17.3757 16.2217 17.3757 16.3115 17.286 16.3938L16.4112 17.277C16.314 17.3668 16.2243 17.3817 16.1271 17.3144L14.4972 16.3115C14.1757 16.5136 13.757 16.6932 13.3009 16.8054L12.8449 18.6615C12.8299 18.7813 12.7626 18.8337 12.6355 18.8337H11.3645ZM12 14.8596C13.5626 14.8596 14.8486 13.5723 14.8486 12.0006C14.8486 10.4439 13.5626 9.15661 12 9.15661C10.4374 9.15661 9.14393 10.4439 9.14393 12.0006C9.14393 13.5648 10.4299 14.8596 12 14.8596ZM12 13.6995C11.0729 13.6995 10.3103 12.9361 10.3103 12.0006C10.3103 11.08 11.0729 10.3167 12 10.3167C12.9121 10.3167 13.6748 11.08 13.6748 12.0006C13.6748 12.9286 12.9121 13.6995 12 13.6995Z" fill="black"/>
					</svg>
				</button>
			</div>

        </div>
        <div onClick={() => navigate(`/builder/${getProfileID(timestamp)}`)} className="builderItem--content">
            <div>
                <div style={{ backgroundImage: `url(${avatar_url})` }}/>
            </div>
            <ul>
                <li>
                    {posts_count || localize(stats.placeholder)}
                    <span>{localize(posts)}</span>
                </li>
                <li>
                    {followers_count || localize(stats.placeholder)}
                    <span>{localize(followers)}</span>
                </li>
                <li>
                    {following_count || localize(stats.placeholder)}
                    <span>{localize(following)}</span>
                </li>
            </ul>
        </div>
    </div>
}