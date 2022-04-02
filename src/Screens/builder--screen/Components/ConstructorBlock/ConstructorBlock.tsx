import { useContext, useEffect } from "react"
import { useBuilderProfilesData } from "../../../../Hooks"

import { ProfileBuilderContext } from "../builder--context"
import { ConstructorButtons, ConstructorGallery, ConstructorIcons, ConstructorInfo,
	ConstructorNavBar, ConstructorStats, ConstructorStatusBar, ConstructorStories } from "./Components"
import './ConstructorBlock.css'

import { constructorBlock } from '../../../../Config'

interface ConstructorBlock {
	profileID: number
}
export const ConstructorBlock = ({ profileID }: ConstructorBlock) => {
	const { getProfile, updateProfile } = useBuilderProfilesData
	const { stories, famousIcon, photos } = useContext(ProfileBuilderContext)

	useEffect(() => {
		const gallery = document.querySelector(".constructorBlock--gallery") as HTMLDivElement
		const items = document.querySelectorAll('.constructorBlock--galleryItem')

		items.forEach(item => {
			item.addEventListener(`dragstart`, e => {
				const target = e.target as HTMLDivElement
				target.classList.add(`constructorBlock--galleryItem-selected`)
			})

			item.addEventListener(`dragend`, e => {
				const target = e.target as HTMLDivElement
				target.classList.remove(`constructorBlock--galleryItem-selected`)
			});

			item.addEventListener(`dragover`, e => {
				e.preventDefault()

				const activeElement = document.querySelector(`.constructorBlock--galleryItem-selected`) as HTMLDivElement
				const img = e.target as HTMLDivElement
				const currentElement = img?.parentElement?.parentElement as HTMLDivElement
				const isMovable = activeElement !== currentElement &&
					currentElement.classList.contains(`constructorBlock--galleryItem`);

				if (!isMovable) return
				const nextElement = (currentElement === activeElement.nextSibling) ?
					currentElement.nextSibling :
					currentElement;

				gallery.insertBefore(activeElement, nextElement)

				let sources = []
				for (let i = 0; i < gallery.children.length; i++) {
					const child = gallery.children[i] as HTMLDivElement
					if (child.draggable) {
						const img = child.querySelector('#constructorGalleryItem') as HTMLDivElement
						const source = img.style.backgroundImage.slice(5, -2)
						sources.push(source)
					}
				}
				updateProfile(profileID, {
					...getProfile(profileID), gallery: sources
				})
			})
		})
	}, [])


	return <div id={'constructorBlock'}>
		<div>
			<div/>
			<div/>
		</div>
		<div className={'constructorBlock'}>
			<ConstructorStatusBar />
			<ConstructorNavBar/>
			<ConstructorStats />
			<ConstructorInfo />
			<ConstructorButtons />
			{ stories && <ConstructorStories profileID={profileID} /> }
			{ famousIcon && <ConstructorIcons /> }
			{ photos && <ConstructorGallery profileID={profileID} /> }
		</div>
		<div/>
	</div>
}