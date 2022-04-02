import { useBuilderProfilesData } from "../../../../../Hooks"

import { ConstructorStoryItem } from "./ConstructorStoryItem"

interface ConstructorStoriesProps {
	profileID: number
}
export const ConstructorStories = ({ profileID }: ConstructorStoriesProps) => {
	const { getProfile } = useBuilderProfilesData

	return <div className={'constructorBlock--stories'}>
		{ getProfile(profileID)?.stories?.map((story, index) => {
			return <ConstructorStoryItem key={index} profileID={profileID} id={index} story={story} />
		}) }
	</div>
}