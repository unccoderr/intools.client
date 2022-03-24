import { useContext, useEffect, useState } from "react"
import { useLocalization } from "../../../Hooks"

import { AppContext } from "../../../app"
import { ModalWrapper } from "../ModalWrapper"
import './BuilderModal.css'

import { builderModal, DATA_KEYS } from "../../../Config"
const { title, button, skip } = builderModal
export const BuilderModal = () => {
	const { openBuilderModal, setOpenBuilderModal, language } = useContext(AppContext)
	const { localize } = new useLocalization(language)
	const [tab, setTab] = useState(1)

	const hideModal = () => {
		if (setOpenBuilderModal) setOpenBuilderModal(false)
		localStorage.setItem(DATA_KEYS.CLOSED_BUILDER_MODAL, '+')
	}
	const getClassName = (num: number) => tab >= num ? 'builderModal--stepperItem-active' : ''

	useEffect(() => {
		setTab(1)
	}, [openBuilderModal])

	return <ModalWrapper modal={openBuilderModal} hideModal={hideModal}>
		<div className={'builderModal'}>
			<button onClick={() => setTab(tab - 1)} disabled={tab === 1} className={'builderModal--arrow'}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.7027 4.99988L6.70264 11.9999L13.7027 19" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
			<div className={'builderModal--wrapper'}>
				<div className={'builderModal--header'}>
					<h2>{localize(title)}</h2>
					<button onClick={hideModal}>{localize(skip)}</button>
				</div>
				<ul data-tab={tab} className={'builderModal--stepper'}>
					<li className={`builderModal--stepperItem ${getClassName(1)}`}>1</li>
					<li className={`builderModal--stepperItem ${getClassName(2)}`}>2</li>
					<li className={`builderModal--stepperItem ${getClassName(3)}`}>3</li>
					<li className={`builderModal--stepperItem ${getClassName(4)}`}>4</li>
					<li className={`builderModal--stepperItem ${getClassName(5)}`}>5</li>
				</ul>
				<img src={require('../../../Assets/Images/BuilderStepperIllustration-1.png')} alt={`stepper illustration ${tab}`}/>
				<button onClick={() => tab !== 5 ? setTab(tab + 1) : hideModal()} className={'builderModal--button'}>
					{ tab === 5 ? localize(button.finish) : localize(button.next) }
				</button>
			</div>
			<button onClick={() => setTab(tab + 1)} disabled={tab === 5} className={'builderModal--arrow'}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.99994 5L17 12.0001L9.99994 19.0001" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
		</div>

	</ModalWrapper>
}