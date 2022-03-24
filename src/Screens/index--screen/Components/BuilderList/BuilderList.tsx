import { useContext } from "react"
import { useBuilderProfilesData, useLocalization } from "../../../../Hooks"

import { BuilderProfile } from "../../../../Types"

import { AppContext } from "../../../../app"
import { NavLink } from "react-router-dom"
import { BuilderItem } from "../BuilderItem/BuilderItem"
import { ErrorIllustration } from "../../../../Components"
import './BuilderList.css'

import { builderProfileList } from "../../../../Config"
const { title, description, button, empty_profiles } = builderProfileList


interface BuilderListProps {
    className?: string
}
export const BuilderList = ({ className }: BuilderListProps) => {

    const { language } = useContext(AppContext)
    const { localize } = new useLocalization(language)
	const { getProfilesList, getNewProfileID } = useBuilderProfilesData
	let builderAccounts: BuilderProfile[] = getProfilesList()

    return <div className={`builderList${className ? ` ${className}` : ''}`}>
        <div className="builderList--header">
            <h2 className={'builderList--header'}>
                {localize(title)}
                <img src={require('../../../../Assets/Images/BuilderIcon.png')} alt={'builder emoji'}/>
            </h2>
            <p>{localize(description)}</p>
        </div>
        { builderAccounts.length !== 0 ? <div className={"builderList--list"}>
            { builderAccounts.map(builderProfile => {
                return <BuilderItem key={builderProfile.timestamp.toString()} builderProfile={builderProfile}/>
            }) }
        </div> : <div className={'builderList--list-empty'}>
            <ErrorIllustration />
			<span>{localize(empty_profiles)}</span>
        </div> }
        <NavLink className={"builderList--button"} to={`/builder/${getNewProfileID()}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.38425 12.8842H11.1158V17.6158C11.1158 18.0967 11.5113 18.5 12 18.5C12.4887 18.5 12.8842 18.0967 12.8842 17.6158V12.8842H17.6158C18.0967 12.8842 18.5 12.4887 18.5 12C18.5 11.5113 18.0967 11.1158 17.6158 11.1158H12.8842V6.38425C12.8842 5.90334 12.4887 5.5 12 5.5C11.5113 5.5 11.1158 5.90334 11.1158 6.38425V11.1158H6.38425C5.90334 11.1158 5.5 11.5113 5.5 12C5.5 12.4887 5.90334 12.8842 6.38425 12.8842Z"/>
            </svg>
            {localize(button)}
        </NavLink>
    </div>
}