import { useContext, MouseEvent, useState, useEffect } from "react"
import { useLocalization, usePostsData } from "../../../Hooks"
import { updateSrc } from "../../../Utils"

import { IPost } from "../../../Types"

import { AppContext } from "../../../app"
import { InputField } from "../../InputField/InputField"
import { SwitchInput } from "../../SwitchInput/SwitchInput"
import { ModalWrapper } from "../ModalWrapper"
import './PlannerModal.css'

import { plannerModal } from '../../../Config'
const { description_input, location_input, button, date_input, schedule_toggle } = plannerModal

export const PlannerModal = () => {
	const { setOpenPlannerModal, openPlannerModal, language} = useContext(AppContext)
	const { localize } = new useLocalization(language)
	const { createPost } = usePostsData
	const [description, setDescription] = useState('')
	const [src, setSrc] = useState('')
	const [location, setLocation] = useState('')
	const [schedule, toggleSchedule] = useState(false)
	const [date, setDate] = useState('')

	const hideModal = (e: MouseEvent) => {
		e.preventDefault()
		if (setOpenPlannerModal) setOpenPlannerModal(false)
	}

	const createNewPost = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		let timestamp = new Date()
		if (date) timestamp = new Date(date)
		const post: IPost = {
			timestamp,
			description,
			image_url: src,
			id: description + new Date().toString()
		}
		createPost(schedule ? 'scheduled' : 'published', post)
		if (setOpenPlannerModal) setOpenPlannerModal(false)
	}

	useEffect(() => {
		const textarea = document.querySelector('textarea')
		if (!textarea) return
		textarea.addEventListener('resize', () => {
			textarea.style.height = 'auto'
			textarea.style.height = `${textarea.scrollHeight}px`
		})
	}, [])
	useEffect(() => {
		if (openPlannerModal) return
		setSrc('')
		setDescription('')
		setLocation('')
		setDate('')
		toggleSchedule(false)
	}, [openPlannerModal])

	const enableButton = schedule ? (description !== '' && date !== '' && src !== '') : (description !== '' && src !== '')

	return <ModalWrapper modal={openPlannerModal} hideModal={hideModal}>
		<form className={'plannerModal'}>
			<div style={{ backgroundImage: `url(${src})` }} className={`plannerModal--image ${src ? 'plannerModal--image-set' : ''}`}>
				<label>
					<input accept=".jpg, .jpeg, .png" type="file" onChange={e => updateSrc(e, setSrc)} />
					{ !src ? <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.494 22C13.2463 22 13.8672 21.389 13.8672 20.6957V13.3396H21.1507C21.8672 13.3396 22.5 12.7403 22.5 12C22.5 11.2714 21.8672 10.6604 21.1507 10.6604H13.8672V3.30435C13.8672 2.59929 13.2463 2 12.494 2C11.7537 2 11.1328 2.59929 11.1328 3.30435V10.6604H3.84925C3.14478 10.6604 2.5 11.2714 2.5 12C2.5 12.7403 3.14478 13.3396 3.84925 13.3396H11.1328V20.6957C11.1328 21.389 11.7537 22 12.494 22Z" fill="#828282"/>
					</svg> : <button onClick={() => setSrc('')}>
						<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.5775 15.7049L14.1234 4.58456H14.9146C15.2389 4.58456 15.5 4.32595 15.5 4.01409C15.5 3.70224 15.2389 3.43602 14.9146 3.43602H11.4573V2.29508C11.4573 1.20738 10.6899 0.5 9.47152 0.5H6.51266C5.2943 0.5 4.53481 1.20738 4.53481 2.29508V3.43602H1.09335C0.776899 3.43602 0.5 3.70224 0.5 4.01409C0.5 4.32595 0.776899 4.58456 1.09335 4.58456H1.88449L2.43038 15.7125C2.48576 16.8078 3.23734 17.5 4.37658 17.5H11.6313C12.7627 17.5 13.5222 16.8002 13.5775 15.7049ZM5.80063 2.37114C5.80063 1.93758 6.13291 1.63333 6.60759 1.63333H9.38449C9.86709 1.63333 10.1994 1.93758 10.1994 2.37114V3.43602H5.80063V2.37114ZM4.49525 16.3591C4.03639 16.3591 3.6962 16.0244 3.67247 15.5832L3.11867 4.58456H12.8576L12.3354 15.5832C12.3117 16.032 11.9794 16.3591 11.5127 16.3591H4.49525ZM10.3497 15.0204C10.6108 15.0204 10.8085 14.815 10.8165 14.526L11.0538 6.49374C11.0617 6.2047 10.856 5.99172 10.587 5.99172C10.3418 5.99172 10.1361 6.2123 10.1282 6.48613L9.89082 14.526C9.88291 14.7998 10.0807 15.0204 10.3497 15.0204ZM5.65823 15.0204C5.92722 15.0204 6.125 14.7998 6.11709 14.526L5.87975 6.48613C5.87184 6.2123 5.65823 5.99172 5.41297 5.99172C5.14399 5.99172 4.9462 6.2047 4.95411 6.49374L5.19937 14.526C5.20728 14.815 5.39715 15.0204 5.65823 15.0204ZM8.48259 14.526V6.48613C8.48259 6.2123 8.26899 5.99172 8.00791 5.99172C7.74684 5.99172 7.52532 6.2123 7.52532 6.48613V14.526C7.52532 14.7998 7.74684 15.0204 8.00791 15.0204C8.26108 15.0204 8.48259 14.7998 8.48259 14.526Z" fill="#FF3B30"/>
						</svg>
					</button> }
				</label>
			</div>
			<div className={'plannerModal--form'}>
				<div className={'plannerModal--formWrapper'}>
					<InputField placeholder={localize(description_input.label).toString()} type={'textarea'} value={description} onChange={setDescription}/>
					<InputField placeholder={localize(location_input).toString()} type={'text'} value={location} onChange={setLocation}/>
					<SwitchInput label={localize(schedule_toggle).toString()} value={schedule} setValue={toggleSchedule}/>
					{ schedule && <InputField placeholder={localize(date_input).toString()} type={'datetime-local'} value={date} onChange={setDate}/> }
				</div>
				<button className={`plannerModal--formButton ${schedule ? 'plannerModal--formButton-schedule' : ''}`}
						onClick={createNewPost} disabled={!enableButton}
				>
					{schedule ? localize(button.schedule) : localize(button.post)}
				</button>
			</div>
			<button className={'plannerModal--exit'} onClick={hideModal}>
				<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.73641 0.263604C10.0879 0.615076 10.0879 1.18492 9.73641 1.5364L6.273 5L9.73641 8.46362C10.0586 8.7858 10.0854 9.29148 9.81695 9.64424L9.73641 9.73641C9.38494 10.0879 8.81509 10.0879 8.46362 9.73641L5 6.273L1.5364 9.73641C1.18492 10.0879 0.615076 10.0879 0.263604 9.73641C-0.0878679 9.38494 -0.0878679 8.81509 0.263604 8.46362L3.727 5L0.263604 1.5364C-0.0585786 1.21421 -0.0854272 0.708534 0.183058 0.355769L0.263604 0.263604C0.615076 -0.087868 1.18492 -0.087868 1.5364 0.263604L5 3.727L8.46362 0.263604C8.81509 -0.087868 9.38494 -0.087868 9.73641 0.263604Z" fill="#818C99"/>
				</svg>
			</button>
		</form>
	</ModalWrapper>
}