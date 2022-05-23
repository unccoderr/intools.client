import { useContext, useEffect, useState } from "react"
import { useLocalization } from "../../../Hooks"

import { ILanguageType } from "../../../Types"
import { AppContext, initialUser } from "../../../app"

import { Avatar } from "../../Avatar/Avatar"
import { ExitIcon, GlobeIcon, LogoIcon, OptionsIcon, SubscribeIcon, Typography } from "../../atoms"
import './style.css'

import { headerConfig, IG_AUTH_URL } from "../../../Config"
import { Container } from "../../templates";
const { sign_in, sign_up, modal } = headerConfig

export const NavBar = () => {
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

	return <nav className={'o__navbar'}>
		<Container className={'o__navbar__wrapper'}>
			<Typography className={'o__navbar__left'} elem={"a"} variant={'title2'} href={'/'}>
				<LogoIcon />
				InTools
			</Typography>
			<div className={'o__navbar__right'}>
				<div className={`o__navbar__rightOverlay${showModal ? '' : ' o__navbar__rightOverlay-hidden'}`}>
					<a onClick={login} href={IG_AUTH_URL} className={'o__navbar__rightOverlaySection o__navbar__rightOverlaySection_large'}>
						<Avatar/>
						<div>
							<Typography elem={'h3'} variant={'body1'}>
								{user ? user.username : localize(modal.connect.header)}
							</Typography>
							<Typography elem={'p'} variant={'body2'}>
								{user ? localize(modal.connect.status) : localize(modal.connect.description)}
							</Typography>
						</div>
					</a>
					<div className={'header--rightOverlayDivider'}/>
					<button onClick={showSubscriptionModal} className={'o__navbar__rightOverlaySection o__navbar__rightOverlaySection_large'}>
						<SubscribeIcon />
						<div>
							<Typography elem={'h3'} variant={'body1'}>
								{localize(modal.subscriptions.header)}
							</Typography>
							<Typography color={'secondary'} elem={'p'} variant={'body2'}>
								{localize(modal.subscriptions.description)}
							</Typography>
						</div>
					</button>
					<button onClick={toggleLanguage} className={'o__navbar__rightOverlaySection o__navbar__rightOverlaySection_large'}>
						<GlobeIcon />
						<div>
							<Typography elem={'h3'} variant={'body1'}>
								{localize(modal.language.header)}
							</Typography>
							<Typography color={'secondary'} elem={'p'} variant={'body2'}>
								{localize(modal.language.description)}
							</Typography>
						</div>
					</button>
					{ user && <button onClick={logout} className={'o__navbar__rightOverlaySection'}>
						<ExitIcon />
						<Typography elem={'h3'} variant={'body1'}>
							{localize(modal.exit)}
						</Typography>
					</button> }
				</div>
				<button data-modal={true} onClick={toggleOverlayModal} className={'o__navbar__rightOptions'}>
					<OptionsIcon />
				</button>
				{ user ? <Avatar className={'o__navbar__rightAvatar'}/> : <div className={`o__navbar__rightText`}>
					<Typography elem={'a'} variant={'body2'} href={'/signin'}>
						{localize(sign_in)}
					</Typography>
					/
					<Typography elem={'a'} variant={'body2'} href={'/signup'}>
						{localize(sign_up)}
					</Typography>
				</div> }
			</div>
		</Container>
    </nav>
}