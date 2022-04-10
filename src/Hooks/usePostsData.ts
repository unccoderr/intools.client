import { IPost } from "../Types"
export interface PostSection {
	date: Date,
	posts: IPost[]
}

const postsKey = 'posts-list'

const setPostsList = (posts: IPost[]) => {
	localStorage.setItem(postsKey, JSON.stringify(posts))
}

const getPostsList = (type: 'published' | 'scheduled' | 'all') => {
	if (!localStorage.getItem(postsKey)) return []

	const posts: IPost[] = JSON.parse(localStorage.getItem(postsKey) || '')
	let postsList: IPost[] = posts.sort((a, b) => {
		if (a.timestamp > b.timestamp) return -1
		else if (a.timestamp > b.timestamp) return 1
		else return 0
	})
	if (type === "published") postsList = posts.filter(post => new Date(post.timestamp) <= new Date())
	else if (type === "scheduled") postsList = posts.filter(post => new Date(post.timestamp) > new Date())
	return postsList.reverse()
}
const getPostObject = (postsList: IPost[]) => {
	const postsObj: { [key: string]: IPost[] } = {}
	postsList.forEach(post => {
		const postDate = new Date(post.timestamp)
		const month = postDate.getMonth().toString().length === 2
			? postDate.getMonth()
			: '0' + postDate.getMonth()
		const date = postDate.getDate().toString().length === 2
			? postDate.getDate()
			: '0' + postDate.getDate()
		const postDateKey = `${postDate.getFullYear()}-${month}-${date}T00:00:00.000Z`
		if (!postsObj[postDateKey]) postsObj[postDateKey] = [post]//2022-04-10T00:00:00.000Z
		else postsObj[postDateKey].push(post)
	})
	const sections: PostSection[] = []
	for (const dateKey in postsObj) {
		//console.log(dateKey)
		const postSection: PostSection = {
			date: new Date(dateKey),
			posts: postsObj[dateKey]
		}
		sections.push(postSection)
	}
	return sections
}

const updatePost = (id: string, post: IPost) => {
	const posts = getPostsList('all')
	if (!posts) return
	const index = posts.findIndex(post => post.id === id)
	if (index === -1) return
	posts[index] = post
	setPostsList(posts)
}

const createPost = (post: IPost) => {
	let posts: IPost[] = getPostsList('all')
	posts.push(post)
	setPostsList(posts)
}
const getPost = (id: string) => {
	let posts: IPost[] = getPostsList('all')
	return posts.find(post => post.id === id)
}

export const usePostsData = {
	setPostsList,
	updatePost,
	getPost, getPostsList,
	getPostObject,
	createPost,
}


