import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { getClassname } from "../../utils"
import { useBuilderProfilesData, useLocalization } from "../../../Hooks"

import { DefaultProps } from "../../DefaultProps"
import { BuilderProfile } from "../../../Types"

import { AppContext } from "../../../app"
import { IconHeader, BuilderItem } from "../../molecules"
import { Button, ErrorIcon, PlusIcon, Typography } from "../../atoms"
import './style.css'

import { builderProfileList } from "../../../Config"
const { title, description, button, empty_profiles } = builderProfileList

export const BuilderSection = (props: Omit<DefaultProps, 'children'>) => {
	const { language } = useContext(AppContext)
	const { localize } = new useLocalization(language)
	const { getProfilesList, getNewProfileID } = useBuilderProfilesData
	const builderAccounts: BuilderProfile[] = getProfilesList()
	const navigate = useNavigate()

	const hasAccounts = builderAccounts.length !== 0

	const className = getClassname('o__builderSection', [], props.className)
	return <section className={`o__builderSection${className ? ` ${className}` : ''}`}>
		<div className="o__builderSection__header">
			<div>
				<IconHeader elem={'h2'} header={localize(title).toString()} icon={'hammers'} />
				<Button
					onClick={() => navigate(`/builder/${getNewProfileID()}`)}
					size={'m'}
					className={"o__builderSection__headerBtn"}
				>
					<PlusIcon />
					{localize(button)}
				</Button>
			</div>

			<Typography elem={'p'} color={'secondary'} variant={'body1'}>
				{localize(description).toString()}
			</Typography>
		</div>
		<div className={hasAccounts ? `o__builderSection__wrapper` : 'o__builderSection__wrapper_empty'}>
			{ hasAccounts ? <>
				{ builderAccounts.map(builderProfile => {
					return <BuilderItem key={builderProfile.timestamp.toString()} builderProfile={builderProfile}/>
				}) }
			</> : <>
				<ErrorIcon />
				<Typography color={'secondary'} elem={'span'} variant={'body1'}>
					{localize(empty_profiles)}
				</Typography>
			</> }
		</div>
		<Button onClick={() => navigate(`/builder/${getNewProfileID()}`)} size={'l'} className={"o__builderSection__button"} >
			<PlusIcon />
			{localize(button)}
		</Button>
	</section>
}

