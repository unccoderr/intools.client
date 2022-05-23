import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useBuilderProfilesData, useLocalization } from "../../../Hooks"

import { AppContext } from "../../../app"
import { BuilderProfile } from "../../../Types"
import './style.css'

import { builderProfileItem, constructorBlock } from "../../../Config"
import { DeleteIcon, OptionsIcon, Typography } from "../../atoms";
import { getClassname } from "../../utils";
import { DefaultProps } from "../../DefaultProps";
const { posts, followers, following } = builderProfileItem
const { stats, header } = constructorBlock

interface BuilderItemProps extends Omit<DefaultProps, 'children'> {
    builderProfile: BuilderProfile
}
export const BuilderItem = (props: BuilderItemProps) => {
	const { profilename, posts_count, followers_count, following_count, avatar_url, timestamp } = props.builderProfile
	const { language } = useContext(AppContext)
	const navigate = useNavigate()
	const { localize } = new useLocalization(language)
	const { getProfileID, deleteProfile } = useBuilderProfilesData
	const [showOverlay, setShowOverlay] = useState(false)

	const deleteBuilderItem = () => {
		deleteProfile(getProfileID(timestamp))
		window.location.reload()
		toggleDeleteOverlay()
	}
	const toggleDeleteOverlay = () => setShowOverlay(!showOverlay)

	useEffect(() => {
		window.addEventListener('click', e => {
			const target = e.target as HTMLElement
			if (target.dataset.modal === undefined && showOverlay) toggleDeleteOverlay()
		})
	}, [])

	const className = getClassname('m__builderItem', [], props.className)

	return <div className={className}>
        <div className="m__builderItem__header">
			<Typography elem={'h3'} variant={'header'}>
				{profilename || localize(header)}
			</Typography>
			<div>
				<ul data-modal={true} className={`m__builderItem__headerOverlay${!showOverlay ? ' m__builderItem__headerOverlay_hidden' : ''}`}>
					<li data-modal={true}>
						<button data-modal={true} onClick={deleteBuilderItem}>
							<Typography color={'negative'} elem={'span'} variant={'body1'}>
								Удалить профиль
							</Typography>
						</button>
					</li>
					<li data-modal={true}>
						<button data-modal={true} onClick={toggleDeleteOverlay}>
							<Typography elem={'span'} variant={'body1'}>
								Отмена
							</Typography>
						</button>
					</li>
				</ul>
				<button data-modal={true} onClick={toggleDeleteOverlay}>
					<DeleteIcon />
				</button>
				<button onClick={() => navigate(`/builder/${getProfileID(timestamp)}`)}>
					<OptionsIcon />
				</button>
			</div>
        </div>
        <div onClick={() => navigate(`/builder/${getProfileID(timestamp)}`)} className="m__builderItem__content">
            <div className={'m__builderItem__contentAvatar'}>
                <div style={{ backgroundImage: `url(${avatar_url})` }}/>
            </div>
            <ul className={'m__builderItem__contentList'}>
                <li>
					<Typography elem={'span'} variant={'header'}>
						{posts_count || localize(stats.placeholder)}
					</Typography>
					<Typography elem={'span'} variant={'body2'}>
						{localize(posts)}
					</Typography>
                </li>
                <li>
					<Typography elem={'span'} variant={'header'}>
						{followers_count || localize(stats.placeholder)}
					</Typography>
					<Typography elem={'span'} variant={'body2'}>
						{localize(followers)}
					</Typography>
				</li>
                <li>
					<Typography elem={'span'} variant={'header'}>
						{following_count || localize(stats.placeholder)}
					</Typography>
					<Typography elem={'span'} variant={'body2'}>
						{localize(following)}
					</Typography>
                </li>
            </ul>
        </div>
    </div>
}