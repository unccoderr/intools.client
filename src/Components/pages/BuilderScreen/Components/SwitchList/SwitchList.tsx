import { useContext } from "react"
import { useLocalization } from "../../../../../Hooks"

import { AppContext } from "../../../../../app"
import { ProfileBuilderContext } from "../builder--context"
import { SwitchInput } from "../../../../index"
import './SwitchList.css'

import { switchList } from "../../../../../Config"
const { main, biography, buttons, content } = switchList

interface SwitchListProps {
    className?: string,
}
export const SwitchList = ({ className }: SwitchListProps) => {
    const { language } = useContext(AppContext)
    const { localize } = new useLocalization(language)

    return <ProfileBuilderContext.Consumer>
        { profileBuilderContext => <div className={`switchList${className ? ` ${className}` : ''}`}>
            <div className={'switchList--wrapper'}>
                <h2>{localize(main.title)}</h2>
                <SwitchInput value={profileBuilderContext.stories} setValue={profileBuilderContext.toggleStories} label={localize(main.stories)}/>
                <SwitchInput value={profileBuilderContext.famousIcon} setValue={profileBuilderContext.toggleFamousIcon} label={localize(main.famous_icons)}/>
                <SwitchInput value={profileBuilderContext.privateProfile} setValue={profileBuilderContext.togglePrivateProfile} label={localize(main.private_profile)}/>
            </div>
            <div className={'switchList--wrapper'}>
                <h2>{localize(biography.title)}</h2>
                <SwitchInput value={profileBuilderContext.category} setValue={profileBuilderContext.toggleCategory} label={localize(biography.category)}/>
                <SwitchInput value={profileBuilderContext.description} setValue={profileBuilderContext.toggleDescription} label={localize(biography.description)}/>
                <SwitchInput value={profileBuilderContext.link} setValue={profileBuilderContext.toggleLink} label={localize(biography.link)}/>
            </div>
            <div className={'switchList--wrapper'}>
                <h2>{localize(buttons.title)}</h2>
                <SwitchInput value={profileBuilderContext.market} setValue={profileBuilderContext.toggleMarket} label={localize(buttons.open_market)}/>
                <SwitchInput value={profileBuilderContext.contact} setValue={profileBuilderContext.toggleContact} label={localize(buttons.email_contact)}/>
            </div>
            <div className={'switchList--wrapper'}>
                <h2>{localize(content.title)}</h2>
                <SwitchInput value={profileBuilderContext.highlights} setValue={profileBuilderContext.toggleHighlights} label={localize(content.highlights)}/>
                <SwitchInput value={profileBuilderContext.photos} setValue={profileBuilderContext.togglePhotos} label={localize(content.photos)}/>
				<SwitchInput value={profileBuilderContext.storiesCircle} setValue={profileBuilderContext.toggleStoriesCircle} label={localize(content.stories_circle)}/>

			</div>
        </div> }
    </ProfileBuilderContext.Consumer>
}