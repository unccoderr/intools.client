import { useState, MouseEvent, useContext } from "react"
import { useLocalization } from "../../../../Hooks"
import { NavLink, useNavigate } from "react-router-dom"

import { AppContext, initialUser } from "../../../../app"
import { InputField } from "../../../../Components"
import './FormBlock.css'

import { formBlock } from '../../../../Config'
const { header, email_placeholder, password_placeholder, buttons, links } = formBlock

export enum FormBlockType {
	SIGNIN,
	SIGNUP
}
interface FormBlockProps {
	className?: string,
	type: FormBlockType
}
export const FormBlock = ({ className, type }: FormBlockProps) => {
	const navigate = useNavigate()
	const { language, setUser } = useContext(AppContext)
	const { localize } = new useLocalization(language)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const login = () => {
		if (setUser) setUser(initialUser)
		navigate('/')
	}
	const resetForm = (e: MouseEvent) => {
		e.preventDefault()
		setEmail('')
		setPassword('')
	}

	const formHeader = type === FormBlockType.SIGNIN ? localize(header.sign_in) : localize(header.sign_up)

	return <form className={`formBlock${className ? ` ${className}` : ''}`}>
		<div className={'formBlock--header'}>
			<h2>{formHeader}</h2>
			<button onClick={e => resetForm(e)}>
				<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.73641 0.263604C10.0879 0.615076 10.0879 1.18492 9.73641 1.5364L6.273 5L9.73641 8.46362C10.0586 8.7858 10.0854 9.29148 9.81695 9.64424L9.73641 9.73641C9.38494 10.0879 8.81509 10.0879 8.46362 9.73641L5 6.273L1.5364 9.73641C1.18492 10.0879 0.615076 10.0879 0.263604 9.73641C-0.0878679 9.38494 -0.0878679 8.81509 0.263604 8.46362L3.727 5L0.263604 1.5364C-0.0585786 1.21421 -0.0854272 0.708534 0.183058 0.355769L0.263604 0.263604C0.615076 -0.087868 1.18492 -0.087868 1.5364 0.263604L5 3.727L8.46362 0.263604C8.81509 -0.087868 9.38494 -0.087868 9.73641 0.263604Z" fill="#818C99"/>
				</svg>
			</button>
		</div>
		<InputField placeholder={localize(email_placeholder).toString()} type={'email'} value={email} onChange={setEmail}/>
		<InputField placeholder={localize(password_placeholder).toString()} type={'password'} value={password} onChange={setPassword}/>
		<div className={'formBlock--buttons'}>
			{ type === FormBlockType.SIGNIN ? <>
				<button onClick={login}>{localize(buttons.sign_in)}</button>
				<NavLink to={'/signup'}>{localize(buttons.sign_up)}</NavLink>
			</> : <>
				<button onClick={login}>{localize(buttons.sign_up)}</button>
				<NavLink to={'/signin'}>{localize(buttons.sign_in)}</NavLink>
			</> }
		</div>
		<div className={'formBlock--divider'}/>
		<ul className={'formBlock--socials'}>
			<li>
				<NavLink to={'#'}>
					<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="24" height="24" rx="12" fill="#3678E9"/>
						<path d="M16 6.5H13C12.1716 6.5 11.5 7.17157 11.5 8V14.75M11.5 23V14.75M11.5 14.75H16M11.5 14.75H7" stroke="white" strokeWidth="3.3" stroke-linecap="square" strokeLinejoin="round"/>
					</svg>
					{localize(links.facebook)}
				</NavLink>
			</li>
			<li>
				<NavLink to={'#'}>
					<svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="0.5" width="24" height="24" rx="12" fill="url(#paint0_linear_70_11417)"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M15.5 7H9.5C8.39543 7 7.5 7.89543 7.5 9V15C7.5 16.1046 8.39543 17 9.5 17H15.5C16.6046 17 17.5 16.1046 17.5 15V9C17.5 7.89543 16.6046 7 15.5 7ZM9.5 6C7.84315 6 6.5 7.34315 6.5 9V15C6.5 16.6569 7.84315 18 9.5 18H15.5C17.1569 18 18.5 16.6569 18.5 15V9C18.5 7.34315 17.1569 6 15.5 6H9.5ZM10.5 12C10.5 13.1046 11.3954 14 12.5 14C13.6046 14 14.5 13.1046 14.5 12C14.5 10.8954 13.6046 10 12.5 10C11.3954 10 10.5 10.8954 10.5 12ZM12.5 9C10.8431 9 9.5 10.3431 9.5 12C9.5 13.6569 10.8431 15 12.5 15C14.1569 15 15.5 13.6569 15.5 12C15.5 10.3431 14.1569 9 12.5 9ZM16 9C16.2761 9 16.5 8.77614 16.5 8.5C16.5 8.22386 16.2761 8 16 8C15.7239 8 15.5 8.22386 15.5 8.5C15.5 8.77614 15.7239 9 16 9Z" fill="white"/>
						<defs>
							<linearGradient id="paint0_linear_70_11417" x1="24.5" y1="-2.86102e-06" x2="0.5" y2="24" gradientUnits="userSpaceOnUse">
								<stop stopColor="#8842B8"/>
								<stop offset="0.468655" stopColor="#CB416F"/>
								<stop offset="0.704404" stopColor="#EA8841"/>
								<stop offset="1" stopColor="#F6CC77"/>
							</linearGradient>
						</defs>
					</svg>
					{localize(links.instagram)}
				</NavLink>
			</li>
			<li>
				<NavLink to={'#'}>
					<svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_70_11436)">
							<path d="M20.9853 3.51472C19.4958 2.02524 17.6405 0.954076 15.6058 0.40889C13.5712 -0.136297 11.4288 -0.136297 9.39417 0.408891C7.3595 0.954078 5.50419 2.02524 4.01472 3.51472C2.52524 5.0042 1.45408 6.85951 0.908889 8.89417L5.54533 10.1365C5.87245 8.91571 6.51514 7.80252 7.40883 6.90883C8.30252 6.01514 9.4157 5.37245 10.6365 5.04533C11.8573 4.71822 13.1427 4.71822 14.3635 5.04533C15.5843 5.37245 16.6975 6.01514 17.5912 6.90883L20.9853 3.51472Z" fill="#D75140"/>
							<path d="M0.913152 8.87831C0.503206 10.3999 0.396976 11.9874 0.600529 13.55C0.804082 15.1127 1.31343 16.62 2.09949 17.9858L6.2597 15.5915C5.78806 14.772 5.48245 13.8676 5.36032 12.93C5.23819 11.9924 5.30192 11.0399 5.54789 10.127L0.913152 8.87831Z" fill="#F1BD42"/>
							<path d="M2.1077 18C2.93905 19.44 4.06058 20.6914 5.40115 21.675C6.74172 22.6587 8.27207 23.3529 9.89514 23.7139C11.5182 24.0748 13.1986 24.0945 14.8297 23.7717C16.4607 23.4489 18.0069 22.7907 19.3702 21.8387L16.6221 17.9032C15.8042 18.4744 14.8764 18.8693 13.8978 19.063C12.9191 19.2567 11.9109 19.2449 10.9371 19.0283C9.96324 18.8118 9.04503 18.3952 8.24069 17.805C7.43635 17.2149 6.76343 16.464 6.26462 15.6L2.1077 18Z" fill="#58A45C"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M24.5 10H14.5V15H19.0452C18.9826 15.1366 18.9156 15.2715 18.8443 15.4044C18.2902 16.437 17.4925 17.3187 16.5203 17.973L19.2006 21.955C20.8208 20.8645 22.1504 19.3949 23.0738 17.674C23.5296 16.8245 23.8797 15.9265 24.1189 15H24.5V10Z" fill="#5184EB"/>
						</g>
						<defs>
							<clipPath id="clip0_70_11436">
								<rect x="0.5" width="24" height="24" rx="12" fill="white"/>
							</clipPath>
						</defs>
					</svg>
					{localize(links.google)}
				</NavLink>
			</li>
		</ul>
	</form>
}