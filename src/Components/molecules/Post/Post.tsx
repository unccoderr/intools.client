import { useContext } from "react"
import { getClassname } from "../../utils"

import { ILanguageType, IPost } from "../../../Types"
import { DefaultProps } from "../../DefaultProps"

import { AppContext } from "../../../app"
import { Typography } from "../../atoms"
import './style.css'

interface PostProps extends Omit<DefaultProps, 'children'>{
	post: IPost
}
export const Post = (props: PostProps) => {
	const { language, setOpenPlannerModal, setPlannerPost } = useContext(AppContext)
	const scheduled = new Date(props.post.timestamp) > new Date()
	const onClick = () => {
		if (!scheduled) return
		if (setPlannerPost) setPlannerPost(props.post)
		if (setOpenPlannerModal) setOpenPlannerModal(true)
	}
	const getTimestamp = () => {
		const date = new Date(props.post.timestamp)
		switch (language) {
			case ILanguageType.EN: {
				const hours = date.getHours() > 12
					? date.getHours() - 12
					: date.getHours()
				const minutes = date.getMinutes().toString().length === 1
					? '0' + date.getMinutes().toString()
					: date.getMinutes().toString()
				const status = date.getHours() < 12
					? 'am'
					: 'pm'
				return `at ${hours}:${minutes} ${status}`
			}
			case ILanguageType.RU: {
				const hours = date.getHours()
				const minutes = date.getMinutes().toString().length === 1
					? '0' + date.getMinutes().toString()
					: date.getMinutes().toString()
				return `в ${hours}:${minutes}`
			}
		}
	}

	const className = getClassname('m__post', [
		scheduled ? 'm__post_scheduled' : ''
	], props.className)

	return <article onClick={onClick} className={className}>
		<div className={`m__post__image`} style={{ backgroundImage: `url(${props.post.image_url})`}} />
		<div className={`m__post__text`}>
			<Typography elem={'h4'} variant={'header'}>
				{getTimestamp()}
				<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M10 7L15 12L10 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</Typography>
			<Typography elem={'p'} color={"secondary"} variant={'body2'}>
				{props.post.description}
			</Typography>
		</div>
	</article>
}