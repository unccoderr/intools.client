import { Dispatch, SetStateAction } from "react"

import './SwitchInput.css'

interface SwitchInputProps {
    label: string | JSX.Element,
    value: boolean,
    setValue?: Dispatch<SetStateAction<boolean>>,
    className?: string
}

export const SwitchInput = ({ label, value, setValue, className }: SwitchInputProps) => {
    const updateValue = () => {
        if (!setValue) return
        return () => setValue(!value)
    }

    return <label className={`switchInput ${value ? 'switchInput-toggled' : ''} ${className ? ` ${className}` : ''}`}>
        <input onClick={updateValue()} value={value.toString()} type="checkbox"/>
        <span/>
        {label}
    </label>
}