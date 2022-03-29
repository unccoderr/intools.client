import { DATA_KEYS } from "../Config"

import { BuilderProfile } from "../Types"

const profileKey = DATA_KEYS.BUILDER_PROFILES_LIST

const setProfileList = (list: BuilderProfile[]) => localStorage.setItem(profileKey, JSON.stringify(list))
const getProfilesList = () => {
	let builderProfiles: BuilderProfile[] = []
	if (localStorage.getItem(profileKey)) {
		builderProfiles = JSON.parse(localStorage.getItem(profileKey) || '')
	}
	return builderProfiles
}

const createProfile = (profile: BuilderProfile) => {
	let profilesList = getProfilesList()
	profilesList.push(profile)
	setProfileList(profilesList)
}
const getProfile = (id: number) => getProfilesList()[id]

const deleteProfile = (id: number) => {
	let profilesList = getProfilesList()
	const before = profilesList.slice(0, id)
	const after = profilesList.slice(id + 1)
	setProfileList(before.concat(after))
}
const updateProfile = (id: number, updatedProfile: BuilderProfile) => {
	let profilesList = getProfilesList()
	profilesList[id] = { ...updatedProfile }
	setProfileList(profilesList)
}

const updateStory = (profileID: number, storyID: number, data: string, type: 'name' | 'src') => {
	let profile = getProfile(profileID)
	if (!profile) return
	let stories = profile.stories
	if (!stories || !stories[storyID]) return
	if (type === "name") stories[storyID].name = data
	else stories[storyID].src = data
	profile.stories = stories
	let profiles = getProfilesList()
	if (!profiles[profileID]) return
	profiles[profileID] = profile
	setProfileList(profiles)
}
const updateGallery = (profileID: number, galleryID: number, src: string) => {
	let profile = getProfile(profileID)
	if (!profile) return
	let gallery = profile.gallery
	if (!gallery || gallery.length <= galleryID + 1) return
	gallery[galleryID] = src.toString()
	profile.gallery = gallery
	let profiles = getProfilesList()
	if (!profiles[profileID]) return
	profiles[profileID] = profile
	setProfileList(profiles)
}

const getProfileID = (timestamp: Date) => getProfilesList().findIndex(i => i.timestamp === timestamp)
const getNewProfileID = () => getProfilesList().length

export const useBuilderProfilesData = {
	setProfileList, getProfilesList,
	createProfile, getProfile, updateProfile, deleteProfile,
	updateStory, updateGallery,
	getProfileID, getNewProfileID
}