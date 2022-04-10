import { useContext, useEffect, useState } from "react"
import { PostSection, useLocalization, usePostsData } from "../../../../Hooks"

import { AppContext } from "../../../../app"
import { PostItem } from "../PostItem/PostItem"
import { ErrorIllustration } from "../../../../Components"
import './PostList.css'

import { postsList } from "../../../../Config"
const { at, today, title, tabs, create_button, empty_posts } = postsList


enum PostTabType {
    ALL = 'all',
    SCHEDULED = 'scheduled',
    PUBLISHED = 'published'
}
interface PostsListProps {
    className: string
}
export const PostsList = ({ className }: PostsListProps) => {
    const { language, setOpenPlannerModal, openPlannerModal } = useContext(AppContext)
    const { localize } = new useLocalization(language)
	const { getPostsList, getPostObject } = usePostsData
    const [tab, setTab] = useState(PostTabType.ALL)
	const [postsSections, setPostsSections] = useState<PostSection[]>([])

	const getSectionHeader = (date: Date) => {
		const timestamp = new Date(date)
		const month = timestamp.getMonth().toString().length === 1
			? '0' + timestamp.getMonth()
			: timestamp.getMonth()
		if (timestamp.getDate() === new Date().getDate()) return localize(today)
		else return `${localize(at)}${timestamp.getDate()}.${month}.${timestamp.getFullYear()}`
	}
	const openPlanner = () => {
		if (setOpenPlannerModal) setOpenPlannerModal(true)
	}

	const hasPosts = postsSections.length > 0

	useEffect(() => {
		const posts = getPostsList(tab)
		const sections = getPostObject(posts)
		setPostsSections(sections)
		//console.log(sections)
	}, [tab, openPlannerModal])

    return <div className={`postList${className ? ` ${className}` : ''}`}>
        <div className={'postList--header'}>
            <h2>
                {localize(title)}
                <img src={require('../../../../Assets/Images/CalendarIcon.png')} alt={'calendar emoji'}/>
            </h2>
            <button onClick={openPlanner}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.38425 12.8842H11.1158V17.6158C11.1158 18.0967 11.5113 18.5 12 18.5C12.4887 18.5 12.8842 18.0967 12.8842 17.6158V12.8842H17.6158C18.0967 12.8842 18.5 12.4887 18.5 12C18.5 11.5113 18.0967 11.1158 17.6158 11.1158H12.8842V6.38425C12.8842 5.90334 12.4887 5.5 12 5.5C11.5113 5.5 11.1158 5.90334 11.1158 6.38425V11.1158H6.38425C5.90334 11.1158 5.5 11.5113 5.5 12C5.5 12.4887 5.90334 12.8842 6.38425 12.8842Z"/>
                </svg>
                {localize(create_button)}
            </button>
        </div>
        <ul className={'postList--tabs'}>
            <li className={`postList--tab ${tab === PostTabType.ALL ? 'postList--tab-active' : ''}`}>
				<button onClick={() => setTab(PostTabType.ALL)} >
					{localize(tabs.all)}
				</button>
            </li>
            <li className={`postList--tab ${tab === PostTabType.SCHEDULED ? 'postList--tab-active' : ''}`}>
				<button onClick={() => setTab(PostTabType.SCHEDULED)} >
					{localize(tabs.scheduled)}
				</button>
			</li>
            <li className={`postList--tab ${tab === PostTabType.PUBLISHED ? 'postList--tab-active' : ''}`}>
				<button onClick={() => setTab(PostTabType.PUBLISHED)} >
					{localize(tabs.posted)}
				</button>
			</li>
        </ul>
        { hasPosts ? <div className={'postList--wrapper'}>
			{ postsSections.map(section => {
				return <section key={'section_' + section.date}>
					<h3>{getSectionHeader(section.date)}</h3>
					<div className={'postList--wrapperInner'}>
						{ section.posts.map(currentPost => {
							return <PostItem key={currentPost.id} scheduled={new Date(currentPost.timestamp) > new Date()} post={currentPost}/>
						}) }
					</div>
				</section>
			}) }
        </div> : <div className={'postList--wrapper-empty'}>
            <ErrorIllustration/>
            <span>
                {localize(empty_posts)}
            </span>
        </div> }
    </div>
}