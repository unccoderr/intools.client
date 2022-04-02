export interface BuilderStoryItem {
	name: string,
	src: string
}

export interface BuilderProfile {
	is_subscribed: boolean,
	is_contacted: boolean,
	timestamp: Date,
    avatar_url: string,
	posts_count: string,
	followers_count: string,
	following_count: string,
	username: string,
	category: string,
	biography: string,
	external_url: string,
	stories: BuilderStoryItem[],
	gallery: string[]
}