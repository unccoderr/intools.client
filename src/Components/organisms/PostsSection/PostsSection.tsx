import React, { useContext, useEffect, useState } from "react"
import { getClassname } from "../../utils"
import { PostSection, useLocalization, usePostsData } from "../../../Hooks"

import { DefaultProps } from "../../DefaultProps"

import { AppContext } from "../../../app"
import { IconHeader, Post } from "../../molecules"
import { Button, ErrorIcon, Typography, PlusIcon } from "../../atoms"
import './style.css'

import { postsList } from "../../../Config"
const { at, today, title, tabs, create_button, empty_posts } = postsList

enum PostTabType {
	ALL = 'all',
	SCHEDULED = 'scheduled',
	PUBLISHED = 'published'
}
export const PostsSection = (props: Omit<DefaultProps, 'children'>) => {
	const { language, openPlannerModal, setOpenPlannerModal } = useContext(AppContext)
	const { localize } = new useLocalization(language)
	const { getPostsList, getPostObject } = usePostsData

	const [tab, setTab] = useState(PostTabType.ALL)
	const [postsSections, setPostsSections] = useState<PostSection[]>([])

	const className = getClassname('o__postsSection', [], props.className)
	const hasPosts = postsSections.length !== 0

	const openPlanner = () => {
		if (setOpenPlannerModal) setOpenPlannerModal(true)
	}

	useEffect(() => {
		const posts = getPostsList(tab)
		const sections = getPostObject(posts)
		setPostsSections(sections)
	}, [tab, openPlannerModal])


	return <section className={className}>
		<div className={'o__postsSection__header'}>
			<IconHeader
				className={`indexScreen--greeting`}
				elem={'h2'}
				header={localize(title).toString()}
				icon={'calendar'}
			/>
			<Button onClick={openPlanner} size={'m'}>
				<PlusIcon />
				{localize(create_button)}
			</Button>
		</div>
		<div className={'o__postsSection__tabs'}>
			<Button
				onClick={() => setTab(PostTabType.ALL)}
				active={tab === PostTabType.ALL}
				crumb size={'s'}
			>
				{localize(tabs.all)}
			</Button>
			<Button
				onClick={() => setTab(PostTabType.SCHEDULED)}
				active={tab === PostTabType.SCHEDULED}
				crumb size={'s'}
			>
				{localize(tabs.scheduled)}
			</Button>
			<Button
				onClick={() => setTab(PostTabType.PUBLISHED)}
				active={tab === PostTabType.PUBLISHED}
				crumb size={'s'}
			>
				{localize(tabs.posted)}
			</Button>
		</div>
		<div className={hasPosts ? 'o__postsSection__wrapper' : 'o__postsSection__wrapper_empty'}>
			{ hasPosts ? <>
				{ postsSections.map(section => {
					const getSectionHeader = (date: Date) => {
						const timestamp = new Date(date)
						const month = timestamp.getMonth().toString().length === 1
							? '0' + timestamp.getMonth()
							: timestamp.getMonth()
						if (timestamp.getDate() === new Date().getDate()) return localize(today)
						else return `${localize(at)}${timestamp.getDate()}.${month}.${timestamp.getFullYear()}`
					}
					return <div id={'postsection'} className={'o__postsSection__wrapperSection'} key={`section_${section.date}`}>
						<Typography elem={'h3'} variant={'header'}>
							{getSectionHeader(section.date)}
						</Typography>
						<div id={'postgrid'}>
							{ section.posts.map(currentPost => {
								return <Post key={currentPost.id} post={currentPost}/>
							}) }
						</div>
					</div>
				}) }
			</> : <>
				<ErrorIcon />
				<Typography color={'secondary'} elem={'span'} variant={'body1'}>
					{localize(empty_posts)}
				</Typography>
			</> }
		</div>
	</section>
}