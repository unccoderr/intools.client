import { useContext, useState } from "react"
import { useLocalization } from "../../../Hooks"

import { AppContext } from "../../../app"
import { ModalWrapper } from "../ModalWrapper"
import '../Modal.css'
import './SubscriptionModal.css'

import { subscriptionModal, DATA_KEYS } from "../../../Config"
const { builder, planner, short_subscription, long_subscription, payment_button, cancel_button  } = subscriptionModal

enum FeeType {
    SHORT,
    LONG
}
export const SubscriptionModal = () => {
    const { language, setOpenSubscriptionModal, openSubscriptionModal } = useContext(AppContext)
    const { localize } = new useLocalization(language)
    const [feeType, setFeeType] = useState(FeeType.SHORT)

    const disableModal = () => {
        if (!setOpenSubscriptionModal) return
        setOpenSubscriptionModal(false)

		if (localStorage.getItem(DATA_KEYS.CLOSED_SUBSCRIPTION_MODEL) === '+') return
		localStorage.setItem(DATA_KEYS.CLOSED_SUBSCRIPTION_MODEL, '+')
		window.location.reload()
    }
	const getFeeItemClassName = (type: FeeType) => 'subscriptionModal--feeItem' + (feeType === type ? ' subscriptionModal--fee-selected' : '')

    return <ModalWrapper modal={openSubscriptionModal} hideModal={disableModal}>
        <div className="subscriptionModal">
            <div className={"subscriptionModal--header"}>
                <h2>
                    InTools
                    <span>pro</span>
                </h2>
                <svg onClick={disableModal} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7364 7.2636C17.0879 7.61507 17.0879 8.18492 16.7364 8.53639L13.273 12L16.7364 15.4636C17.0586 15.7858 17.0854 16.2915 16.817 16.6442L16.7364 16.7364C16.3849 17.0879 15.8151 17.0879 15.4636 16.7364L12 13.273L8.5364 16.7364C8.18492 17.0879 7.61508 17.0879 7.2636 16.7364C6.91213 16.3849 6.91213 15.8151 7.2636 15.4636L10.727 12L7.2636 8.53639C6.94142 8.21421 6.91457 7.70853 7.18306 7.35576L7.2636 7.2636C7.61508 6.91212 8.18492 6.91212 8.5364 7.2636L12 10.727L15.4636 7.2636C15.8151 6.91212 16.3849 6.91212 16.7364 7.2636Z" fill="white"/>
                </svg>
            </div>
            <div className={'subscriptionModal--benefits'}>
                <div>
                    <h3>{localize(builder.header)}</h3>
                    <ul>
                        { builder.benefits.map(benefit => {
                           return <li key={localize(benefit).toString()}>{localize(benefit)}</li>
                        }) }
                    </ul>
                </div>
                <div>
                    <h3>{localize(planner.header)}</h3>
                    <ul>
                        { planner.benefits.map(benefit => {
                            return <li key={localize(benefit).toString()}>{localize(benefit)}</li>
                        }) }
                    </ul>
                </div>
            </div>
            <div className={'subscriptionModal--fee'}>
                <button onClick={() => setFeeType(FeeType.SHORT)} className={getFeeItemClassName(FeeType.SHORT)}>
					<span/>
					<div>
                        <span>{localize(short_subscription.header)}</span>
                        {localize(short_subscription.description)}
                    </div>
                </button>
                <button onClick={() => setFeeType(FeeType.LONG)} className={getFeeItemClassName(FeeType.LONG)}>
					<span/>
                    <div>
                        <span>{localize(long_subscription.header)}</span>
                        {localize(long_subscription.description)}
                    </div>
                </button>
            </div>
            <div className={'subscriptionModal--buttons'}>
                <button onClick={disableModal} className={'subscriptionModal--buttonsItem subscriptionModal--buttonsItem-primary'}>{localize(payment_button)}</button>
                <button onClick={disableModal} className={'subscriptionModal--buttonsItem'}>{localize(cancel_button)}</button>
            </div>
        </div>
    </ModalWrapper>
}