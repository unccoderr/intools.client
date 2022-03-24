import { IPost } from "../Types"

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
	const getPostDate = (post: IPost) => {
		const timestamp = new Date(post.timestamp)
		return timestamp.getMonth() + 1 + '.' + timestamp.getDate() + '.' + timestamp.getFullYear()
	}

	const postsObj: { [key: string]: IPost[] } = {}
	postsList.forEach(post => {
		if (!postsObj[getPostDate(post)]) postsObj[getPostDate(post)] = [post]
		else postsObj[getPostDate(post)].push(post)
	})

	return postsObj
}
const createPost = (type: `published` | 'scheduled', post: IPost) => {
	let posts: IPost[] = getPostsList('all')
	posts.push(post)
	setPostsList(posts)
}
const getPost = (timestamp: Date) => {
	let posts: IPost[] = getPostsList('all')
	console.log(posts, timestamp)
	return posts.find(post => post.timestamp === timestamp)
}

export const usePostsData = {
	setPostsList,
	getPost, getPostsList,
	getPostObject,
	createPost,
}


