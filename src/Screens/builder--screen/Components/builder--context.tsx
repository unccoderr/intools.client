import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toPng } from "html-to-image"
import { useBuilderProfilesData, useLocalization } from "../../../Hooks"

import { BuilderProfile } from "../../../Types"

import { AppContext } from "../../../app"

import { constructorBlock, switchList } from "../../../Config"
const { header, stories_empty_label } = constructorBlock
const { main, biography, buttons, content } = switchList

interface ContextProps {
	stories: boolean,
	toggleStories?: Dispatch<SetStateAction<boolean>>,
	famousIcon: boolean,
	toggleFamousIcon?: Dispatch<SetStateAction<boolean>>,
	privateProfile: boolean,
	togglePrivateProfile?: Dispatch<SetStateAction<boolean>>,
	category: boolean,
	toggleCategory?: Dispatch<SetStateAction<boolean>>,
	description: boolean,
	toggleDescription?: Dispatch<SetStateAction<boolean>>,
	link: boolean,
	toggleLink?: Dispatch<SetStateAction<boolean>>,
	market: boolean,
	toggleMarket?: Dispatch<SetStateAction<boolean>>,
	contact: boolean,
	toggleContact?: Dispatch<SetStateAction<boolean>>,
	highlights: boolean,
	toggleHighlights?: Dispatch<SetStateAction<boolean>>,
	photos: boolean,
	togglePhotos?: Dispatch<SetStateAction<boolean>>,
	storiesCircle: boolean,
	toggleStoriesCircle?: Dispatch<SetStateAction<boolean>>,
	usernameValue: string,
	setUsernameValue?: Dispatch<SetStateAction<string>>,
	categoryValue: string,
	setCategoryValue?: Dispatch<SetStateAction<string>>,
	biographyValue: string,
	setBiographyValue?: Dispatch<SetStateAction<string>>,
	postsCount: string,
	setPostsCount?: Dispatch<SetStateAction<string>>,
	followersCount: string,
	setFollowersCount?: Dispatch<SetStateAction<string>>,
	followingCount: string,
	setFollowingCount?: Dispatch<SetStateAction<string>>,
	linkValue: string,
	setLinkValue?: Dispatch<SetStateAction<string>>,
	avatarURL: string,
	setAvatarURL?: Dispatch<SetStateAction<string>>,
	isContacted: boolean,
	setIsContacted?: Dispatch<SetStateAction<boolean>>,
	isSubscribed: boolean,
	setIsSubscribed?: Dispatch<SetStateAction<boolean>>,
	resetProfile?: () => void,
	exportProfile?: () => void,
	removeProfile?: () => void
}
export const ProfileBuilderContext = createContext<ContextProps>({
	storiesCircle: false,
	stories: false,
	famousIcon: false,
	privateProfile: false,
	category: false,
	description: false,
	link: false,
	market: false,
	contact: false,
	highlights: false,
	photos: false,
	usernameValue: '',
	categoryValue: '',
	biographyValue: '',
	postsCount: '',
	followersCount: '',
	followingCount: '',
	linkValue: '',
	avatarURL: '',
	isSubscribed: false,
	isContacted: false
})

interface ProfileBuilderContextProps {
	children: ReactNode,
	profileID: number
}
export const ProfileBuilderContextProvider = ({ children, profileID }: ProfileBuilderContextProps) => {
	const [stories, toggleStories] = useState(main.stories.initial)
	const [famousIcon, toggleFamousIcon] = useState(main.famous_icons.initial)
	const [privateProfile, togglePrivateProfile] = useState(main.private_profile.initial)
	const [category, toggleCategory] = useState(biography.category.initial)
	const [description, toggleDescription] = useState(biography.description.initial)
	const [link, toggleLink] = useState(biography.link.initial)
	const [market, toggleMarket] = useState(buttons.open_market.initial)
	const [contact, toggleContact] = useState(buttons.email_contact.initial)
	const [highlights, toggleHighlights] = useState(content.highlights.initial)
	const [photos, togglePhotos] = useState(content.photos.initial)
	const [storiesCircle, toggleStoriesCircle] = useState(content.stories_circle.initial)
	const [usernameValue, setUsernameValue] = useState('')
	const [categoryValue, setCategoryValue] = useState('')
	const [biographyValue, setBiographyValue] = useState('')
	const [linkValue, setLinkValue] = useState('')
	const [postsCount, setPostsCount] = useState('')
	const [followersCount, setFollowersCount] = useState('')
	const [followingCount, setFollowingCount] = useState('')
	const [avatarURL, setAvatarURL] = useState('')
	const [isContacted, setIsContacted] = useState(false)
	const [isSubscribed, setIsSubscribed] = useState(false)

	const navigate = useNavigate()
	const { language } = useContext(AppContext)
	const { localize } = new useLocalization(language)
	const { createProfile, getProfile, updateProfile, deleteProfile } = useBuilderProfilesData

	const updateProfileData = (profile: BuilderProfile) => {
		if (setUsernameValue) setUsernameValue(profile.username)
		if (setCategoryValue) setCategoryValue(profile.category)
		if (setBiographyValue) setBiographyValue(profile.biography)
		if (setLinkValue) setLinkValue(profile.external_url)
		if (setPostsCount) setPostsCount(profile.posts_count)
		if (setFollowersCount) setFollowersCount(profile.followers_count)
		if (setFollowingCount) setFollowingCount(profile.following_count)
		if (setAvatarURL) setAvatarURL(profile.avatar_url)
	}

	const resetProfile = () => {
		if (toggleStories) toggleStories(main.stories.initial)
		if (toggleFamousIcon) toggleFamousIcon(main.famous_icons.initial)
		if (togglePrivateProfile) togglePrivateProfile(main.private_profile.initial)
		if (toggleCategory) toggleCategory(biography.category.initial)
		if (toggleDescription) toggleDescription(biography.description.initial)
		if (toggleLink) toggleLink(biography.link.initial)
		if (toggleMarket) toggleMarket(buttons.open_market.initial)
		if (toggleContact) toggleContact(buttons.email_contact.initial)
		if (toggleHighlights) toggleHighlights(content.highlights.initial)
		if (togglePhotos) togglePhotos(content.photos.initial)
		if (getProfile(profileID)) {
			const profile = getProfile(profileID)
			updateProfile(profileID, {
				is_contacted: false,
				is_subscribed: false,
				timestamp: profile.timestamp,
				avatar_url: '',
				posts_count: '',
				followers_count: '',
				following_count: '',
				username: '',
				category: '',
				biography: '',
				external_url: '',
				stories: [
					{ src: '', name: localize(stories_empty_label).toString() + ' 1' },
					{ src: '', name: localize(stories_empty_label).toString() + ' 2' },
					{ src: '', name: localize(stories_empty_label).toString() + ' 3' },
					{ src: '', name: localize(stories_empty_label).toString() + ' 4' },
					{ src: '', name: localize(stories_empty_label).toString() + ' 5' }
				],
				gallery: []
			})
			updateProfileData(profile)
			window.location.reload()
		}
	}
	const removeProfile = () => {
		if (!getProfile(profileID)) return console.log('n id')
		deleteProfile(profileID)
		navigate('/')

	}
	const exportProfile = () => {
		const imageBlock = document.querySelector('#constructorBlock') as HTMLElement
		const constructorBlock = document.querySelector('.constructorBlock') as HTMLElement
		const noexportElements = document.querySelectorAll('#no-export')

		constructorBlock.style.overflowY = 'hidden'
		constructorBlock.style.borderRadius = '32px'
		constructorBlock.style.borderBottom = '8px solid #4E5659'
		noexportElements.forEach((emptyStory: any) => {
			emptyStory.style.display = 'none'
		})

		toPng(imageBlock, {
			width: 399,
			height: 1000,
		})
			.then(dataBase64 => require("downloadjs")(dataBase64, usernameValue || localize(header).toString(), 'png'))
			.catch(console.error)
			.finally(() => {
				constructorBlock.style.overflowY = 'auto'
				constructorBlock.style.borderRadius = '32px 32px 0 0'
				constructorBlock.style.borderBottomWidth = '0'
				noexportElements.forEach((emptyStory: any) => {
					emptyStory.style.display = 'block'
				})
			})

	}

	useEffect(() => {
		if (getProfile(profileID)) {
			const builderProfile = getProfile(profileID)
			if (setAvatarURL) setAvatarURL(builderProfile.avatar_url)
			if (setUsernameValue) setUsernameValue(builderProfile.username)
			if (setPostsCount) setPostsCount(builderProfile.posts_count)
			if (setFollowersCount) setFollowersCount(builderProfile.followers_count)
			if (setFollowingCount) setFollowingCount(builderProfile.following_count)
			if (setCategoryValue) setCategoryValue(builderProfile.category)
			if (setBiographyValue) setBiographyValue(builderProfile.biography)
			if (setLinkValue) setLinkValue(builderProfile.external_url)
			if (setIsSubscribed) setIsSubscribed(builderProfile.is_subscribed)
			if (setIsContacted) setIsContacted(builderProfile.is_contacted)
		} else {
			createProfile({
				is_contacted: false,
				is_subscribed: false,
				timestamp: new Date(),
				avatar_url: '',
				posts_count: postsCount,
				followers_count: followersCount,
				following_count: followingCount,
				username: usernameValue,
				category: categoryValue,
				biography: biographyValue,
				external_url: linkValue,
				stories: [
					{ src: '', name: localize(stories_empty_label).toString() + ' 1' },
					{ src: '', name: localize(stories_empty_label).toString() + ' 2' },
					{ src: '', name: localize(stories_empty_label).toString() + ' 3' },
					{ src: '', name: localize(stories_empty_label).toString() + ' 4' },
					{ src: '', name: localize(stories_empty_label).toString() + ' 5' }
				],
				gallery: []
			})
			window.location.reload()
		}
	}, [])
	useEffect(() => {
		if (!getProfile(+profileID)) return
		const profile = getProfile(profileID)
		updateProfile(+profileID, {
			is_contacted: isContacted,
			is_subscribed: isSubscribed,
			timestamp: profile.timestamp,
			avatar_url: avatarURL,
			posts_count: postsCount,
			followers_count: followersCount,
			following_count: followingCount,
			username: usernameValue,
			category: categoryValue,
			biography: biographyValue,
			external_url: linkValue,
			stories: getProfile(+profileID).stories,
			gallery: getProfile(+profileID).gallery,
		})
	}, [usernameValue, categoryValue, biographyValue, linkValue, postsCount, followersCount, followingCount, avatarURL, isContacted, isSubscribed])

	return <ProfileBuilderContext.Provider value={{
		stories, toggleStories,
		famousIcon, toggleFamousIcon,
		privateProfile, togglePrivateProfile,
		category, toggleCategory,
		description, toggleDescription,
		link, toggleLink,
		market, toggleMarket,
		contact, toggleContact,
		highlights, toggleHighlights,
		photos, togglePhotos,
		storiesCircle, toggleStoriesCircle,
		usernameValue, setUsernameValue,
		categoryValue, setCategoryValue,
		biographyValue, setBiographyValue,
		linkValue, setLinkValue,
		postsCount, setPostsCount,
		followersCount, setFollowersCount,
		followingCount, setFollowingCount,
		avatarURL, setAvatarURL,
		isContacted, setIsContacted,
		isSubscribed, setIsSubscribed,
		removeProfile, exportProfile, resetProfile
	}}>
		{children}
	</ProfileBuilderContext.Provider>
}
