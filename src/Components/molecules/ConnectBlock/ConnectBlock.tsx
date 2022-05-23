import { useContext } from "react"
import { useLocalization } from "../../../Hooks"
import { getClassname } from "../../utils";


import { ILanguageType } from "../../../Types";
import { DefaultProps } from "../../DefaultProps"

import { AppContext, initialUser } from "../../../app"
import { Avatar } from "../../index"
import { Button, InfoIcon, Typography, PlusIcon } from "../../atoms"
import './style.css'

import { connectBlock, IPINFO_TOKEN } from "../../../Config"
const { title, description, button, tooltip } = connectBlock

export const ConnectBlock = (props: Omit<DefaultProps, 'children'>) => {
    const { language, setUser } = useContext(AppContext);
    const { localize } = new useLocalization(language)

	const login = async () => {
		fetch(`https://ipinfo.io/?token=${IPINFO_TOKEN}`)
			.then(data => data.json())
			.then((data: { country: string }) => {
				if (data.country.toLowerCase() === ILanguageType.RU) {
					alert('Для доступа к Instagram подключите VPN')
				} else if (setUser) setUser(initialUser)
			})
	}

	const className = getClassname('m__connectBlock', [], props.className)

    return <div className={className}>
		<Avatar className={'m__connectBlock__avatar'}/>
        <div className={'m__connectBlock__wrapper'}>
			<Typography elem={'h2'} variant={'title2'}>
				{localize(title)}
				<span title={localize(tooltip).toString()} >
					<InfoIcon />
				</span>
			</Typography>
			<Typography color={'secondary'} elem={'p'} variant={'body1'}>
				{localize(description)}
			</Typography>
			<Button onClick={login} size={'s'} >
				<PlusIcon />
				{localize(button)}
			</Button>
        </div>
    </div>
}