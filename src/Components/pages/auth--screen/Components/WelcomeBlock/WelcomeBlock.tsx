import { useContext } from "react"
import { useLocalization } from "../../../../../Hooks"

import { AppContext } from "../../../../../app"
import './WelcomeBlock.css'


import { welcomeBlock } from '../../../../../Config'
import { LogoIcon } from "../../../../atoms";
const { header, description } = welcomeBlock

interface WelcomeBlockProps {
	className?: string,
}
export const WelcomeBlock = ({ className }: WelcomeBlockProps) => {
	const { language } = useContext(AppContext)
	const { localize } = new useLocalization(language)

	return <article className={`welcomeBlock${className ? ` ${className}` : ''}`}>
		<div className={'welcomeBlock--wrapper'}>
			<LogoIcon className={'welcomeBlock--logo'}/>
			<div>
				<h1>{localize(header)}</h1>
				<p>{localize(description)}</p>
			</div>
		</div>
		<img className={'welcomeBlock--image'} src={require('../../../../../Assets/Images/WelcomePreview.png')} alt="12"/>
	</article>
}