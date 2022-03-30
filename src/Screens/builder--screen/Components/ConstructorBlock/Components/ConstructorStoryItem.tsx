import imageCompression from "browser-image-compression"
import { ChangeEvent, useState } from "react"
import { getBase64Src } from "../../../../../Utils"
import { useBuilderProfilesData } from "../../../../../Hooks"

import { BuilderStoryItem } from "../../../../../Types"

interface ConstructorStoryItemProps {
	id: number,
	profileID: number,
	story: BuilderStoryItem
}
export const ConstructorStoryItem = ({ story, profileID, id }: ConstructorStoryItemProps) => {
	const { updateStoryItem } = useBuilderProfilesData
    const [src, setSrc] = useState(story.src.toString())
	const [name, setName] = useState(story.name.toString())

	const onChangeSrc = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files || e.target.files.length === 0) return
		const file = e.target.files[0]
		const compressedFile = await imageCompression(file, {
			maxSizeMB: 0.1,
			maxWidthOrHeight: 1920,
			useWebWorker: true
		})
		getBase64Src(compressedFile)
			.then(base64URL => {
				setSrc(base64URL)
				updateStoryItem(profileID, id, base64URL, 'src')
			})
	}
	const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
		updateStoryItem(profileID, id, e.target.value, 'name')
	}

    return <div id={'constructorBlock--emptyStoryIcon'}  className={'constructorBlock--storiesItem'}>
        <label>
            { !src && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.994 22C12.7463 22 13.3672 21.389 13.3672 20.6957V13.3396H20.6507C21.3672 13.3396 22 12.7403 22 12C22 11.2714 21.3672 10.6604 20.6507 10.6604H13.3672V3.30435C13.3672 2.59929 12.7463 2 11.994 2C11.2537 2 10.6328 2.59929 10.6328 3.30435V10.6604H3.34925C2.64478 10.6604 2 11.2714 2 12C2 12.7403 2.64478 13.3396 3.34925 13.3396H10.6328V20.6957C10.6328 21.389 11.2537 22 11.994 22Z" />
            </svg> }
            <input type="file" onChange={onChangeSrc} accept=".jpg, .jpeg, .png"/>
            { src && <div id={'constructorStoryItem'} style={{ backgroundImage: `url(${src})` }} /> }
        </label>
        <input type={"text"} value={name} onChange={onChangeName}/>
    </div>
}