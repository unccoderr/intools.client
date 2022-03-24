import './ConstructorBlock.css'
import { ChangeEvent, Dispatch, SetStateAction, useContext } from "react"
import { useBuilderProfilesData, useLocalization } from "../../../../Hooks"

import { AppContext } from "../../../../app"
import { ProfileBuilderContext } from "../builder--context"
import { ConstructorGalleryItem } from "./Components/ConstructorGalleryItem"
import { ConstructorAvatar } from "./Components/ConstructorAvatar"
import { ConstructorStoryItem } from "./Components/ConstructorStoryItem"

import { constructorBlock } from '../../../../Config'
const { stats, info, buttons, header } = constructorBlock

interface ConstructorBlock {
	profileID: number
}
export const ConstructorBlock = ({ profileID }: ConstructorBlock) => {
    const { language } = useContext(AppContext)
    const { localize } = new useLocalization(language)
	const { getProfile } = useBuilderProfilesData

	const getMinutes = (date: Date) => date.getMinutes().toString().length === 1
		? '0' + date.getMinutes().toString()
		: date.getMinutes().toString()
	const handleInput = (e: ChangeEvent<HTMLInputElement>, setState?: Dispatch<SetStateAction<string>>) => {
		if (!setState) return
		setState(e.target.value)
	}
	const handleTextarea = (e: ChangeEvent<HTMLTextAreaElement>, setState?: Dispatch<SetStateAction<string>>) => {
		e.target.style.height = 'auto'
		e.target.style.height = `${e.target.scrollHeight}px`
		if (!setState) return
		setState(e.target.value)
	}
    return <ProfileBuilderContext.Consumer>
        { ({ stories, famousIcon, category,
			description, link, market,
		    contact, photos, usernameValue, setUsernameValue,
		    categoryValue, setCategoryValue, biographyValue,
		    setBiographyValue, linkValue, setLinkValue,
		    postsCount, setPostsCount, followersCount,
		    setFollowersCount, followingCount, setFollowingCount }) => <div className={'constructorBlock'}>
			<div id={'constructorBlock'}>
				<div className="constructorBlock--statusBar">
					<time>{new Date().getHours()}:{getMinutes(new Date())}</time>
					<div>
						<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M16.5 0.666748H15.5C14.9477 0.666748 14.5 1.11446 14.5 1.66675V10.3334C14.5 10.8857 14.9477 11.3334 15.5 11.3334H16.5C17.0523 11.3334 17.5 10.8857 17.5 10.3334V1.66675C17.5 1.11446 17.0523 0.666748 16.5 0.666748ZM10.8333 3.00008H11.8333C12.3856 3.00008 12.8333 3.4478 12.8333 4.00008V10.3334C12.8333 10.8857 12.3856 11.3334 11.8333 11.3334H10.8333C10.281 11.3334 9.83333 10.8857 9.83333 10.3334V4.00008C9.83333 3.4478 10.281 3.00008 10.8333 3.00008ZM7.16667 5.33341H6.16667C5.61438 5.33341 5.16667 5.78113 5.16667 6.33341V10.3334C5.16667 10.8857 5.61438 11.3334 6.16667 11.3334H7.16667C7.71895 11.3334 8.16667 10.8857 8.16667 10.3334V6.33341C8.16667 5.78113 7.71895 5.33341 7.16667 5.33341ZM2.5 7.33341H1.5C0.947715 7.33341 0.5 7.78113 0.5 8.33341V10.3334C0.5 10.8857 0.947715 11.3334 1.5 11.3334H2.5C3.05228 11.3334 3.5 10.8857 3.5 10.3334V8.33341C3.5 7.78113 3.05228 7.33341 2.5 7.33341Z" />
						</svg>
						<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M8.16707 2.61504C10.3918 2.61514 12.5315 3.46925 14.1438 5.00084C14.2652 5.11909 14.4593 5.1176 14.5789 4.9975L15.7395 3.82717C15.8 3.76626 15.8338 3.68375 15.8333 3.5979C15.8328 3.51205 15.7981 3.42994 15.7368 3.36974C11.5049 -0.682491 4.82857 -0.682491 0.596657 3.36974C0.535354 3.4299 0.500572 3.51198 0.500007 3.59783C0.499442 3.68368 0.53314 3.76621 0.593645 3.82717L1.75459 4.9975C1.87409 5.11778 2.06831 5.11927 2.18965 5.00084C3.80221 3.46915 5.94212 2.61504 8.16707 2.61504ZM8.16707 6.42263C9.38942 6.42255 10.5681 6.87651 11.4742 7.69628C11.5968 7.81263 11.7898 7.8101 11.9093 7.6906L13.0685 6.52027C13.1296 6.45888 13.1635 6.3756 13.1626 6.28907C13.1617 6.20253 13.1261 6.11996 13.0639 6.05983C10.3047 3.49542 6.03178 3.49542 3.27262 6.05983C3.2103 6.11996 3.17474 6.20257 3.17392 6.28914C3.1731 6.3757 3.20709 6.45897 3.26827 6.52027L4.42721 7.6906C4.54667 7.8101 4.73972 7.81263 4.86227 7.69628C5.76774 6.87705 6.94553 6.42313 8.16707 6.42263ZM10.4893 8.98446C10.4911 9.07124 10.4569 9.15491 10.3949 9.2157L8.38962 11.2377C8.33084 11.2971 8.25069 11.3306 8.16707 11.3306C8.08345 11.3306 8.0033 11.2971 7.94452 11.2377L5.93888 9.2157C5.87693 9.15486 5.84284 9.07117 5.84468 8.98439C5.84652 8.89761 5.88411 8.81544 5.94859 8.75727C7.22925 7.675 9.10489 7.675 10.3856 8.75727C10.45 8.81548 10.4875 8.89769 10.4893 8.98446Z" />
						</svg>
						<svg width="26" height="12" viewBox="0 0 26 12" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
							<rect opacity="0.35" x="1.33301" y="0.833328" width="21" height="10.3333" rx="2.16667" stroke="black"/>
							<path opacity="0.4" d="M23.833 4V8C24.6377 7.66122 25.161 6.87313 25.161 6C25.161 5.12687 24.6377 4.33878 23.833 4" fill="black"/>
							<rect x="2.83301" y="2.33333" width="18" height="7.33333" rx="1.33333" fill="black"/>
						</svg>
					</div>
				</div>
				<div className={'constructorBlock--navBar'}>
					<svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.2027 4.99988L7.20264 11.9999L14.2027 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					<input type="text" placeholder={localize(header).toString()}
						   value={usernameValue} onChange={e => handleInput(e, setUsernameValue)} />
					<svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="7" cy="11.5" r="1.5" fill="#0A4E9E"/>
						<circle cx="12.5" cy="11.5" r="1.5" fill="#0A4E9E"/>
						<circle cx="18" cy="11.5" r="1.5" fill="#0A4E9E"/>
					</svg>
				</div>
				<div className={'constructorBlock--stats'}>
					<ConstructorAvatar/>
					<ul>
						<li>
							<input placeholder={localize(stats.placeholder).toString()} type="text"
								   value={postsCount} onChange={e => handleInput(e, setPostsCount)} />
							{localize(stats.posts)}
						</li>
						<li>
							<input placeholder={localize(stats.placeholder).toString()} type="text"
								   value={followersCount} onChange={e => handleInput(e, setFollowersCount)} />
							{localize(stats.followers)}
						</li>
						<li>
							<input placeholder={localize(stats.placeholder).toString()} type="text"
								   value={followingCount} onChange={e => handleInput(e, setFollowingCount)} />
							{localize(stats.following)}
						</li>
					</ul>
				</div>
				<div className={'constructorBlock--info'}>
					<input id={'username'} placeholder={localize(info.username).toString()} type="text"
						   value={usernameValue} onChange={e => handleInput(e, setUsernameValue)} />
					{ category && <input placeholder={localize(info.category).toString()} id={'category'} type={"text"}
										 value={categoryValue} onChange={e => handleInput(e, setCategoryValue)} /> }

					{ description && <textarea rows={1} placeholder={localize(constructorBlock.info.biography).toString()} id={'biography'}
											   value={biographyValue} onChange={e => handleTextarea(e, setBiographyValue)} /> }
					{ link && <input placeholder={localize(info.link).toString()} id={'url'} type="url"
									 value={linkValue} onChange={e => handleInput(e, setLinkValue)} /> }
				</div>
				<div className={'constructorBlock--buttons'}>
					{ market && <div className={'constructorBlock--buttonsItem constructorBlock--buttonsItem-market'}>
						{localize(buttons.market)}
					</div> }
					<div className={'constructorBlock--buttonsWrapper'}>
						<div className={`constructorBlock--buttonsWrapper-inner${!contact ? ' constructorBlock--buttonsWrapper-innerTwo' : ''}`}>
							<div className={'constructorBlock--buttonsItem constructorBlock--buttonsItem-active'}>
								{localize(buttons.follow)}
							</div>
							<div className={'constructorBlock--buttonsItem'}>
								{localize(buttons.message)}
							</div>
							{ contact && <div className={'constructorBlock--buttonsItem'}>
								{localize(buttons.email)}
							</div> }
						</div>
						<div className={'constructorBlock--buttonsItem constructorBlock--buttonsItem-dropdown'}>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5 7L8.11127 10.1113L11.2225 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</div>
					</div>
				</div>
				{ stories && <div className={'constructorBlock--stories'}>
					{ getProfile(profileID)?.stories?.map((story, index) => {
						return <ConstructorStoryItem key={index} profileID={profileID} id={index} story={story} />
					}) }
				</div> }
				{ famousIcon && <div className={'constructorBlock--icons'}>
					<div className={`constructorBlock--iconsItem`}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9.44762 4V20M4.19048 14.5524L20.1905 14.5524M14.4 4V20M4.19048 9.6L20.1905 9.6M4 4H20V20H4V4Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
						</svg>
					</div>
					<div className={'constructorBlock--iconsItem constructorBlock--iconsItem-active'}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.4219 2.22208L12.7972 1.89177L12.7972 1.89177L12.4219 2.22208ZM12.052 2.05243L12.0576 1.55246L12.052 2.05243ZM14.3003 4.35669L13.925 4.68701L14.0743 4.85669H14.3003V4.35669ZM9.70715 4.35669V4.85669H9.92656L10.0751 4.69522L9.70715 4.35669ZM11.6785 2.21387L12.0465 2.5524L12.0465 2.5524L11.6785 2.21387ZM10.2945 5.19522L9.92656 4.85669V4.85669L10.2945 5.19522ZM12.0382 3.29987L12.4136 2.96955L12.0465 2.5524L11.6703 2.96134L12.0382 3.29987ZM5.30302 20.9476V21.4476H5.7568L5.80068 20.996L5.30302 20.9476ZM18.237 20.9476L17.7394 20.996L17.7833 21.4476H18.237V20.9476ZM13.6989 5.18701L13.3236 5.51732V5.51732L13.6989 5.18701ZM17.2311 20.9476V21.4476H17.7954L17.7274 20.8874L17.2311 20.9476ZM6.30898 20.9476L5.81262 20.8874L5.74465 21.4476H6.30898V20.9476ZM12.7972 1.89177C12.6099 1.67893 12.3411 1.55559 12.0576 1.55246L12.0465 2.5524L12.0465 2.5524L12.7972 1.89177ZM14.6757 4.02638L12.7972 1.89177L12.0465 2.5524L13.925 4.68701L14.6757 4.02638ZM18.9872 3.85669H14.3003V4.85669H18.9872V3.85669ZM21.9872 6.85669C21.9872 5.19984 20.644 3.85669 18.9872 3.85669V4.85669C20.0917 4.85669 20.9872 5.75212 20.9872 6.85669H21.9872ZM21.9872 19.4476V6.85669H20.9872V19.4476H21.9872ZM18.9872 22.4476C20.644 22.4476 21.9872 21.1045 21.9872 19.4476H20.9872C20.9872 20.5522 20.0917 21.4476 18.9872 21.4476V22.4476ZM5.01367 22.4476H18.9872V21.4476H5.01367V22.4476ZM2.01367 19.4476C2.01367 21.1045 3.35682 22.4476 5.01367 22.4476V21.4476C3.9091 21.4476 3.01367 20.5522 3.01367 19.4476H2.01367ZM2.01367 6.85669V19.4476H3.01367V6.85669H2.01367ZM5.01367 3.85669C3.35682 3.85669 2.01367 5.19984 2.01367 6.85669H3.01367C3.01367 5.75212 3.9091 4.85669 5.01367 4.85669V3.85669ZM9.70715 3.85669H5.01367V4.85669H9.70715V3.85669ZM11.3106 1.87534L9.33918 4.01817L10.0751 4.69522L12.0465 2.5524L11.3106 1.87534ZM12.0576 1.55246C11.7741 1.54933 11.5025 1.66669 11.3106 1.87534L12.0465 2.5524L12.0465 2.5524L12.0576 1.55246ZM10.6625 5.53375L12.4062 3.6384L11.6703 2.96134L9.92656 4.85669L10.6625 5.53375ZM9.92656 5.85669C10.2062 5.85669 10.4731 5.73957 10.6625 5.53375L9.92656 4.85669L9.92656 4.85669V5.85669ZM5.01367 5.85669H9.92656V4.85669H5.01367V5.85669ZM4.01367 6.85669C4.01367 6.30441 4.46139 5.85669 5.01367 5.85669V4.85669C3.9091 4.85669 3.01367 5.75212 3.01367 6.85669H4.01367ZM4.01367 19.4476V6.85669H3.01367V19.4476H4.01367ZM5.01367 20.4476C4.46139 20.4476 4.01367 19.9999 4.01367 19.4476H3.01367C3.01367 20.5522 3.9091 21.4476 5.01367 21.4476V20.4476ZM5.30302 20.4476H5.01367V21.4476H5.30302V20.4476ZM5.80068 20.996C6.02731 18.6629 7.99469 16.839 10.3875 16.839V15.839C7.47483 15.839 5.08128 18.0588 4.80536 20.8993L5.80068 20.996ZM10.3875 16.839H13.1526V15.839H10.3875V16.839ZM13.1526 16.839C15.5454 16.839 17.5128 18.6629 17.7394 20.996L18.7347 20.8993C18.4588 18.0588 16.0652 15.839 13.1526 15.839V16.839ZM18.9872 20.4476H18.237V21.4476H18.9872V20.4476ZM19.9872 19.4476C19.9872 19.9999 19.5395 20.4476 18.9872 20.4476V21.4476C20.0917 21.4476 20.9872 20.5522 20.9872 19.4476H19.9872ZM19.9872 6.85669V19.4476H20.9872V6.85669H19.9872ZM18.9872 5.85669C19.5395 5.85669 19.9872 6.30441 19.9872 6.85669H20.9872C20.9872 5.75212 20.0917 4.85669 18.9872 4.85669V5.85669ZM14.0743 5.85669H18.9872V4.85669H14.0743V5.85669ZM13.3236 5.51732C13.5134 5.73306 13.7869 5.85669 14.0743 5.85669V4.85669V4.85669L13.3236 5.51732ZM11.6629 3.63018L13.3236 5.51732L14.0743 4.85669L12.4136 2.96955L11.6629 3.63018ZM17.7274 20.8874C17.4507 18.6061 15.5084 16.839 13.1526 16.839V17.839C14.9966 17.839 16.5181 19.2225 16.7347 21.0078L17.7274 20.8874ZM13.1526 16.839H10.3875V17.839H13.1526V16.839ZM10.3875 16.839C8.03168 16.839 6.08939 18.6061 5.81262 20.8874L6.80534 21.0078C7.02194 19.2225 8.54351 17.839 10.3875 17.839V16.839ZM17.2311 20.4476H6.30898V21.4476H17.2311V20.4476ZM14.1411 11.3084C14.1411 12.5162 13.162 13.4953 11.9542 13.4953V14.4953C13.7143 14.4953 15.1411 13.0685 15.1411 11.3084H14.1411ZM11.9542 9.12155C13.162 9.12155 14.1411 10.1006 14.1411 11.3084H15.1411C15.1411 9.54837 13.7143 8.12155 11.9542 8.12155V9.12155ZM9.76732 11.3084C9.76732 10.1006 10.7464 9.12155 11.9542 9.12155V8.12155C10.1941 8.12155 8.76732 9.54837 8.76732 11.3084H9.76732ZM11.9542 13.4953C10.7464 13.4953 9.76732 12.5162 9.76732 11.3084H8.76732C8.76732 13.0685 10.1941 14.4953 11.9542 14.4953V13.4953ZM15.1411 11.3084C15.1411 13.0685 13.7143 14.4953 11.9542 14.4953V15.4953C14.2665 15.4953 16.1411 13.6208 16.1411 11.3084H15.1411ZM11.9542 8.12155C13.7143 8.12155 15.1411 9.54837 15.1411 11.3084H16.1411C16.1411 8.99608 14.2665 7.12155 11.9542 7.12155V8.12155ZM8.76732 11.3084C8.76732 9.54837 10.1941 8.12155 11.9542 8.12155V7.12155C9.64185 7.12155 7.76732 8.99608 7.76732 11.3084H8.76732ZM11.9542 14.4953C10.1941 14.4953 8.76732 13.0685 8.76732 11.3084H7.76732C7.76732 13.6208 9.64185 15.4953 11.9542 15.4953V14.4953Z" fill="#959595"/>
						</svg>
					</div>
				</div> }
				{ photos && <div className={'constructorBlock--gallery'}>
					{ (getProfile(profileID)?.gallery || ["","","","","","","","","","","","","","",""]).map((source, index) => {
						return <ConstructorGalleryItem key={index} profileID={profileID} id={index} source={source || ''}/>
					}) }
				</div> }
			</div>
        </div> }
    </ProfileBuilderContext.Consumer>
}