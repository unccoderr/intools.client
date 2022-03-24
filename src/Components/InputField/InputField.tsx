import { ChangeEvent, Dispatch, SetStateAction } from "react"

import './InputField.css'

interface InputFieldProps {
	placeholder : string,
	type: 'text' | 'date' | 'email' | 'password' | 'datetime-local' | 'textarea',
	value: string,
	onChange: Dispatch<SetStateAction<string>>
}
export const InputField = ({ placeholder, type, value, onChange }: InputFieldProps) => {
	const handleTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
		e.target.style.height = 'auto'
		e.target.style.height = `${e.target.scrollHeight}px`
		onChange(e.target.value)
	}

	return <label htmlFor={placeholder} className="inputField">
		{ type === "textarea"
			? <textarea className={'inputField--input'} rows={1} name={placeholder} value={value} onChange={handleTextarea}/>
			: <input className={'inputField--input'} type={type} name={placeholder}
					 value={value} onChange={e => onChange(e.target.value)} /> }
		<span className={'inputField--label'}>{placeholder}</span>
	</label>
}