import { ChangeEvent, Dispatch, SetStateAction } from "react"
import imageCompression from 'browser-image-compression'

export const updateSrc = async (e: ChangeEvent<HTMLInputElement>, setSrc: Dispatch<SetStateAction<string>>) => {
	if (!e.target.files || e.target.files.length === 0) return

	const file = e.target.files[0]
	const compressedFile = await imageCompression(file, {
		maxSizeMB: 0.1,
		maxWidthOrHeight: 1920,
		useWebWorker: true
	})

	const reader = new FileReader()
	reader.readAsDataURL(compressedFile)

	reader.onload = () => {
		if (reader.result) setSrc(reader.result.toString())
		else setSrc('')
	}
}

export const getBase64Src = async (blob: Blob): Promise<string> => {
	return new Promise((resolve) => {
		const reader = new FileReader();
		reader.onloadend = () => resolve(reader.result?.toString() || '');
		reader.readAsDataURL(blob);
	})
}