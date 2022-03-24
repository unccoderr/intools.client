import { useContext } from "react"
import { useLocalization } from "../../../Hooks"

import { AppContext, IStatsType } from "../../../app"
import { ModalWrapper } from "../ModalWrapper"
import '../Modal.css'
import './StatsModal.css'

import { statsBlock } from "../../../Config"
const { new_followers, new_unfollowers, total_unfollowers, total_blocked_me } = statsBlock

interface StatsModalItemProps {
	src: string,
	username: string,
	status: string
}
const StatsModalItem = ({ src, username, status }: StatsModalItemProps) => {
	return <li className={'statsModal--listItem'}>
		<div style={{ backgroundImage: `url("${src}")` }}/>
		<div>
			<h3>{username}</h3>
			<p>{status}</p>
		</div>
	</li>
}

export const StatsModal = () => {
	const { language, statsModalType, setStatsModalType } = useContext(AppContext)
	const { localize } = new useLocalization(language)

	const getHeader = () => {
		switch (statsModalType) {
			case IStatsType.NEW_FOLLOWERS:
				return localize(new_followers)
			case IStatsType.NEW_UNFOLLOWERS:
				return localize(new_unfollowers)
			case IStatsType.UNFOLLOWING_ME:
				return localize(total_unfollowers)
			case IStatsType.BLOCKED_ME:
				return localize(total_blocked_me)
		}
	}
	const getHeaderSpan = () => {
		let count = getUsers().length
		switch (statsModalType) {
			case IStatsType.NEW_FOLLOWERS:
				return `+${count}`
			case IStatsType.NEW_UNFOLLOWERS:
				return `-${count}`
			default: return count
		}
	}
	const getClassName = () => {
		switch (statsModalType) {
			case IStatsType.NEW_FOLLOWERS:
				return ' statsModal-positive'
			case IStatsType.NEW_UNFOLLOWERS:
				return ' statsModal-negative'
			case IStatsType.UNFOLLOWING_ME:
				return ' statsModal-accent'
			case IStatsType.BLOCKED_ME:
				return ' statsModal-default'
			default: return ''
		}
	}
	const getUsers = () => {
		switch (statsModalType) {
			case IStatsType.NEW_UNFOLLOWERS:
				return [
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
				]
			case IStatsType.NEW_FOLLOWERS:
				return [
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
				]
			case IStatsType.UNFOLLOWING_ME:
				return [
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
				]
			case IStatsType.BLOCKED_ME:
				return [
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
					{ src: 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469621_vodopad_priroda.jpg', username: '@maksim.illyakhov', status: 'Медик с тату' },
				]
			default: return []
		}
	}

	const hasUsers = getUsers().length !== 0
	const showModal = statsModalType !== IStatsType.NONE
	const hideModal = () => {
		if (setStatsModalType) setStatsModalType(IStatsType.NONE)
	}

	return <ModalWrapper modal={showModal} hideModal={hideModal}>
		<div className={`statsModal${getClassName()}`}>
			<div className={`statsModal--header`}>
				<h2>
					{ getHeader() }
					{ hasUsers && <span>({getHeaderSpan()})</span> }
				</h2>
				<button onClick={() => hideModal()}>
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.73641 0.263604C10.0879 0.615076 10.0879 1.18492 9.73641 1.5364L6.273 5L9.73641 8.46362C10.0586 8.7858 10.0854 9.29148 9.81695 9.64424L9.73641 9.73641C9.38494 10.0879 8.81509 10.0879 8.46362 9.73641L5 6.273L1.5364 9.73641C1.18492 10.0879 0.615076 10.0879 0.263604 9.73641C-0.0878679 9.38494 -0.0878679 8.81509 0.263604 8.46362L3.727 5L0.263604 1.5364C-0.0585786 1.21421 -0.0854272 0.708534 0.183058 0.355769L0.263604 0.263604C0.615076 -0.087868 1.18492 -0.087868 1.5364 0.263604L5 3.727L8.46362 0.263604C8.81509 -0.087868 9.38494 -0.087868 9.73641 0.263604Z" fill="#818C99"/>
					</svg>
				</button>
			</div>
			{ hasUsers ? <ul className={`statsModal--list`}>
				{ getUsers().map((user, index) => {
					return <StatsModalItem key={index} src={user.src} username={user.username} status={user.status} />
				}) }
			</ul> : <div className={'statsModal--list statsModal--list-empty'}>
				<div>
					<h3>Nobody followed</h3>
					<p>For the period of used Intool</p>
				</div>
			</div> }
		</div>
	</ModalWrapper>

}