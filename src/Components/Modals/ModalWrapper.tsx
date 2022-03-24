import {  ReactNode, MouseEvent } from "react"

import './Modal.css'

interface ModalWrapperProps {
	modal: boolean,
	hideModal: (e: any) => any,
	children: ReactNode
}
export const ModalWrapper = ({ modal, hideModal, children }: ModalWrapperProps) => {
	const handleClick = (e: MouseEvent) => {
		const target = e.target as HTMLElement
		if (!target.className) return
		if (target.className.toString().replaceAll(' ', '') !== 'modal') return
		hideModal(e)
	}

	return <div className={`modal${!modal ? ' modal-hidden' : ''}`} onClick={e => handleClick(e)}>
		{ children }
	</div>
}