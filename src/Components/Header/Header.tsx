import { useContext, useEffect, useState } from "react"
import { useLocalization } from "../../Hooks"
import { Link } from "react-router-dom"

import { AppContext, initialUser } from "../../app"
import { Avatar } from "../Avatar/Avatar"
import { Logo } from "../Logo"
import './Header.css'

import { headerConfig, IG_AUTH_URL } from "../../Config"
import { ILanguageType } from "../../Types";

const { sign_in, sign_up, modal } = headerConfig

export const Header = () => {
    const { user, setUser, language, setOpenSubscriptionModal, setLanguage } = useContext(AppContext)
    const { localize } = new useLocalization(language)
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		const body = document.querySelector('body')
		if (!body) return
		const onClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement
			if (!target.dataset.modal) setShowModal(false)
		}
		body.addEventListener('click', onClick)
		return () => {
			body.removeEventListener('click', onClick)
		}
	}, [])

	let overlayClassName = 'header--rightOverlay'
	if (!showModal) overlayClassName += ' header--rightOverlay-hidden'
	if (user) overlayClassName += ' header--rightOverlay-authorized'

	const login = (e: any) => {
		e.preventDefault()
		if (setUser) setUser(initialUser)
	}
	const logout = () => {
		if (setUser) setUser(null)
	}
	const toggleOverlayModal = () => {
		if (setShowModal) setShowModal(!showModal)
	}
	const toggleLanguage = () => {
		if (setLanguage) setLanguage(language === ILanguageType.RU ? ILanguageType.EN : ILanguageType.RU)
	}
	const showSubscriptionModal = () => {
		if (setOpenSubscriptionModal) setOpenSubscriptionModal(true)
	}

	return <header className={'header'}>
        <Link className={'header--left'} to={'/'}>
			<Logo/>
            InTools
        </Link>
        <div className={'header--right'}>
			<div className={overlayClassName}>
				<a onClick={login} href={IG_AUTH_URL} className={'header--rightOverlaySection header--rightOverlaySection-large'}>
					<Avatar/>
					<div>
						<h3>
							{ !user ? localize(modal.connect.header) : user.username }
						</h3>
						<p>
							{ user ? localize(modal.connect.status) : localize(modal.connect.description) }
						</p>
					</div>
				</a>
				<div className={'header--rightOverlayDivider'}/>
				<button onClick={showSubscriptionModal} className={'header--rightOverlaySection'}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.0156 20.8672L17.3125 11.5547C17.4531 11.3828 17.5234 11.2188 17.5234 11.0312C17.5234 10.7031 17.2734 10.4688 16.9297 10.4688H12.4688L14.7812 4.34375C15.1016 3.48438 14.2031 3.03125 13.6562 3.73438L6.36719 13.0391C6.22656 13.2188 6.14844 13.3828 6.14844 13.5703C6.14844 13.8906 6.39844 14.1328 6.74219 14.1328H11.2109L8.89062 20.25C8.57031 21.1094 9.46875 21.5625 10.0156 20.8672ZM13.1562 12.875H8.29688L12.6172 7.15625L10.5078 11.7266H15.3672L11.0547 17.4453L13.1562 12.875Z" fill="black"/>
					</svg>
					<div>
						<h3>{localize(modal.subscriptions.header)}</h3>
						<p>{localize(modal.subscriptions.description)}</p>
					</div>
				</button>
				<button onClick={toggleLanguage} className={'header--rightOverlaySection'}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M11.9688 20.4297C16.3828 20.4297 20.0391 16.7812 20.0391 12.3594C20.0391 7.94531 16.3828 4.28906 11.9609 4.28906C7.54688 4.28906 3.89844 7.94531 3.89844 12.3594C3.89844 16.7812 7.55469 20.4297 11.9688 20.4297ZM7.26562 7.44531C8.04688 6.70312 8.99219 6.13281 10.0469 5.82031C9.49219 6.375 9.02344 7.15625 8.67188 8.10938C8.125 7.9375 7.65625 7.71094 7.26562 7.44531ZM13.8984 5.82812C14.9453 6.14062 15.8906 6.70312 16.6641 7.44531C16.2812 7.71875 15.8125 7.9375 15.2656 8.11719C14.9141 7.15625 14.4453 6.375 13.8984 5.82812ZM12.5156 6.07812C13.1641 6.39062 13.7578 7.23438 14.1797 8.38281C13.6641 8.47656 13.1094 8.53125 12.5156 8.55469V6.07812ZM9.75781 8.38281C10.1875 7.23438 10.7734 6.39062 11.4219 6.07812V8.55469C10.8281 8.53125 10.2734 8.47656 9.75781 8.38281ZM5.17188 11.8125C5.28125 10.4844 5.78125 9.25781 6.54688 8.25C7.02344 8.60156 7.64062 8.90625 8.35938 9.13281C8.15625 9.94531 8.02344 10.8516 7.98438 11.8125H5.17188ZM15.9531 11.8125C15.9141 10.8516 15.7812 9.94531 15.5781 9.13281C16.2969 8.90625 16.9141 8.60938 17.3828 8.25C18.1562 9.25781 18.6562 10.4844 18.7656 11.8125H15.9531ZM9.10156 11.8125C9.14062 10.9609 9.25781 10.1484 9.4375 9.41406C10.0625 9.53906 10.7266 9.61719 11.4219 9.64844V11.8125H9.10156ZM12.5156 11.8125V9.64844C13.2109 9.61719 13.875 9.53906 14.5 9.41406C14.6797 10.1484 14.7969 10.9609 14.8359 11.8125H12.5156ZM5.17188 12.9062H7.98438C8.02344 13.8828 8.15625 14.7969 8.35938 15.6172C7.64844 15.8438 7.03906 16.1406 6.57031 16.4922C5.78906 15.4766 5.28125 14.2422 5.17188 12.9062ZM9.10156 12.9062H11.4219V15.1094C10.7344 15.1406 10.0625 15.2188 9.44531 15.3359C9.25781 14.5938 9.13281 13.7656 9.10156 12.9062ZM12.5156 15.1094V12.9062H14.8359C14.8047 13.7656 14.6797 14.5938 14.4922 15.3359C13.875 15.2188 13.2109 15.1406 12.5156 15.1094ZM15.5781 15.6172C15.7891 14.7969 15.9141 13.8828 15.9531 12.9062H18.7656C18.6562 14.2422 18.1484 15.4766 17.3672 16.4922C16.8984 16.1406 16.2891 15.8438 15.5781 15.6172ZM12.5156 16.2031C13.1016 16.2266 13.6562 16.2812 14.1641 16.375C13.7422 17.5 13.1562 18.3359 12.5156 18.6406V16.2031ZM9.77344 16.375C10.2812 16.2812 10.8359 16.2266 11.4219 16.2031V18.6406C10.7812 18.3359 10.1953 17.5 9.77344 16.375ZM7.28906 17.2969C7.67188 17.0312 8.14062 16.8125 8.67969 16.6406C9.03125 17.5781 9.49219 18.3438 10.0312 18.8906C9 18.5781 8.0625 18.0234 7.28906 17.2969ZM15.2578 16.6406C15.7969 16.8125 16.2656 17.0312 16.6484 17.2969C15.875 18.0234 14.9375 18.5781 13.9062 18.8906C14.4453 18.3438 14.9062 17.5781 15.2578 16.6406Z" fill="black"/>
					</svg>
					<div>
						<h3>{localize(modal.language.header)}</h3>
						<p>{localize(modal.language.description)}</p>
					</div>
				</button>
				{ user && <button onClick={logout} className={'header--rightOverlaySection'}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16 5C16.5523 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3V5ZM16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19V21ZM9 5H16V3H9V5ZM16 19H9V21H16V19ZM5 15V9H3V15H5ZM9 19C6.79086 19 5 17.2091 5 15H3C3 18.3137 5.68629 21 9 21V19ZM9 3C5.68629 3 3 5.68629 3 9H5C5 6.79086 6.79086 5 9 5V3Z" fill="black"/>
						<path d="M13 12H20M20 12L18 9M20 12L18 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					<h3>{localize(modal.exit)}</h3>
				</button> }
			</div>
            <button data-modal={true} onClick={toggleOverlayModal} className={'header--options'}>
                <svg data-modal={true} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path data-modal={true} d="M11.2449 20.0012H12.7551C13.3308 20.0012 13.772 19.6494 13.9065 19.0956L14.228 17.6961L14.4673 17.6137L15.686 18.3622C16.172 18.669 16.7327 18.5942 17.1439 18.1825L18.1907 17.1422C18.6019 16.7306 18.6766 16.1618 18.3701 15.6828L17.6075 14.4704L17.6972 14.2459L19.0953 13.9166C19.6411 13.7818 20 13.3328 20 12.764V11.2821C20 10.7133 19.6486 10.2643 19.0953 10.1296L17.7121 9.79276L17.615 9.55327L18.3776 8.34083C18.6841 7.86184 18.6093 7.30053 18.1981 6.88141L17.1514 5.83363C16.7477 5.42948 16.1869 5.35464 15.7009 5.65401L14.4822 6.40242L14.228 6.30513L13.9065 4.90559C13.772 4.35176 13.3308 4 12.7551 4H11.2449C10.6692 4 10.228 4.35176 10.0935 4.90559L9.76449 6.30513L9.51028 6.40242L8.29907 5.65401C7.81308 5.35464 7.24486 5.42948 6.84112 5.83363L5.80187 6.88141C5.39065 7.30053 5.30841 7.86184 5.62243 8.34083L6.37757 9.55327L6.28785 9.79276L4.90467 10.1296C4.3514 10.2643 4 10.7133 4 11.2821V12.764C4 13.3328 4.35888 13.7818 4.90467 13.9166L6.3028 14.2459L6.38505 14.4704L5.62991 15.6828C5.31589 16.1618 5.39813 16.7306 5.80935 17.1422L6.8486 18.1825C7.25981 18.5942 7.82804 18.669 8.31402 18.3622L9.52523 17.6137L9.76449 17.6961L10.0935 19.0956C10.228 19.6494 10.6692 20.0012 11.2449 20.0012ZM11.3645 18.8337C11.2374 18.8337 11.1701 18.7813 11.1477 18.6615L10.6991 16.8054C10.243 16.6932 9.81682 16.5136 9.49533 16.3115L7.86542 17.3144C7.7757 17.3817 7.6785 17.3668 7.58879 17.277L6.70654 16.3938C6.6243 16.3115 6.61682 16.2217 6.67664 16.1169L7.6785 14.5003C7.50654 14.186 7.31215 13.7594 7.19252 13.3028L5.33832 12.8613C5.21869 12.8388 5.16636 12.7715 5.16636 12.6442V11.3944C5.16636 11.2597 5.21121 11.1998 5.33832 11.1773L7.18505 10.7283C7.30467 10.2418 7.52897 9.80025 7.66355 9.52333L6.66916 7.90675C6.60187 7.79448 6.60935 7.70467 6.69159 7.61486L7.58131 6.7467C7.67103 6.65689 7.75327 6.64192 7.86542 6.70928L9.48037 7.68971C9.80187 7.51008 10.2579 7.32298 10.7065 7.19575L11.1477 5.33967C11.1701 5.21992 11.2374 5.16753 11.3645 5.16753H12.6355C12.7626 5.16753 12.8299 5.21992 12.8449 5.33967L13.3009 7.21072C13.7645 7.33046 14.1682 7.51757 14.5047 7.69719L16.1271 6.70928C16.2467 6.64192 16.3215 6.65689 16.4187 6.7467L17.3009 7.61486C17.3907 7.70467 17.3907 7.79448 17.3234 7.90675L16.329 9.52333C16.471 9.80025 16.6879 10.2418 16.8075 10.7283L18.6617 11.1773C18.7813 11.1998 18.8336 11.2597 18.8336 11.3944V12.6442C18.8336 12.7715 18.7738 12.8388 18.6617 12.8613L16.8 13.3028C16.6804 13.7594 16.4935 14.186 16.314 14.5003L17.3159 16.1169C17.3757 16.2217 17.3757 16.3115 17.286 16.3938L16.4112 17.277C16.314 17.3668 16.2243 17.3817 16.1271 17.3144L14.4972 16.3115C14.1757 16.5136 13.757 16.6932 13.3009 16.8054L12.8449 18.6615C12.8299 18.7813 12.7626 18.8337 12.6355 18.8337H11.3645ZM12 14.8596C13.5626 14.8596 14.8486 13.5723 14.8486 12.0006C14.8486 10.4439 13.5626 9.15661 12 9.15661C10.4374 9.15661 9.14393 10.4439 9.14393 12.0006C9.14393 13.5648 10.4299 14.8596 12 14.8596ZM12 13.6995C11.0729 13.6995 10.3103 12.9361 10.3103 12.0006C10.3103 11.08 11.0729 10.3167 12 10.3167C12.9121 10.3167 13.6748 11.08 13.6748 12.0006C13.6748 12.9286 12.9121 13.6995 12 13.6995Z" fill="black"/>
                </svg>
            </button>
            <div className={`header--avatar${!user ? ' header--avatar-unauthorized' : ''}`}>
                { user ? <Avatar className={'header--avatar'}/> : <>
                    <Link to={'/signin'}>{localize(sign_in)}</Link>
                    /
                    <Link to={'/signup'}>{localize(sign_up)}</Link>
                </> }
            </div>
        </div>
    </header>
}