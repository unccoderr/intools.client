import imageCompression from "browser-image-compression"
import { ChangeEvent } from "react"
import { useBuilderProfilesData } from "../../../../../../Hooks"
import { getBase64Src } from "../../../../../../Utils"

import { ConstructorGalleryItem } from "./ConstructorGalleryItem"

interface ConstructorGalleryProps {
	profileID: number
}
export const ConstructorGallery = ({ profileID }: ConstructorGalleryProps) => {
	const { getProfile, addGalleryItems } = useBuilderProfilesData

	const createNewGalleryItem = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (!files || files.length === 0) return

		for (let i = 0; i < files.length; i++) {
			const file = files[i]
			const compressedFile = await imageCompression(file, {
				maxSizeMB: 0.1,
				maxWidthOrHeight: 1920,
				useWebWorker: true
			})
			getBase64Src(compressedFile)
				.then(base64URL => addGalleryItems(profileID, base64URL))
				.catch(console.error)
		}

		window.location.reload()
	}

	return <div className={'constructorBlock--gallery'}>
		{ getProfile(profileID)?.gallery.map((source, index) => {
			return <ConstructorGalleryItem key={index} profileID={profileID} id={index} source={source || ''}/>
		}) }
		<div id={'no-export'} className={'constructorBlock--galleryItem'} >
			<label>
				<input type="file" multiple={true} onChange={createNewGalleryItem} accept=".jpg, .jpeg, .png" />
				<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.3086 21.9453C13.0469 21.9453 13.6562 21.3359 13.6562 20.6445V13.3086H20.8047C21.5078 13.3086 22.1289 12.7109 22.1289 11.9727C22.1289 11.2461 21.5078 10.6367 20.8047 10.6367H13.6562V3.30078C13.6562 2.59766 13.0469 2 12.3086 2C11.582 2 10.9727 2.59766 10.9727 3.30078V10.6367H3.82422C3.13281 10.6367 2.5 11.2461 2.5 11.9727C2.5 12.7109 3.13281 13.3086 3.82422 13.3086H10.9727V20.6445C10.9727 21.3359 11.582 21.9453 12.3086 21.9453Z" fill="#959595"/>
				</svg>
			</label>
		</div>
	</div>
}