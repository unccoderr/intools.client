import { useContext } from "react"

import { IPost, ILanguageType } from "../../../../Types"

import { AppContext } from "../../../../app"
import './PostItem.css'

interface PostItemProps {
	scheduled: boolean,
    className?: string,
    post: IPost
}
export const PostItem = ({ scheduled, className, post }: PostItemProps) => {
    const { language, setOpenPlannerModal, setPlannerPost } = useContext(AppContext)

	const onClick = () => {
		if (!scheduled) return
		if (setPlannerPost) setPlannerPost(post)
		if (setOpenPlannerModal) setOpenPlannerModal(true)
	}
	const getTimestamp = (timestamp: Date) => {
		const date = new Date(timestamp)
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

    return <div onClick={onClick} className={`postItem${className ? ` ${className}` : ''}`}>
        <div className={`postItem--image${scheduled ? ' postItem--image-scheduled' : ''}`} style={{ backgroundImage: `url(${post.image_url})`}} />
        <div className={`postItem--text${scheduled ? ' postItem--text-scheduled' : ''}`}>
            <h4>
                {getTimestamp(post.timestamp)}
                <svg onClick={onClick} width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 7L15 12L10 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </h4>
            <p>{post.description}</p>
        </div>
    </div>
}