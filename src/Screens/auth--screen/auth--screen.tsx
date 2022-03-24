import { FormBlock, FormBlockType, WelcomeBlock } from "./Components"
import './auth--screen.css'

export enum AuthScreenType {
	SIGNIN,
	SIGNUP
}
interface AuthScreenProps {
	type: AuthScreenType
}
export const AuthScreen = ({ type }: AuthScreenProps) => {
    return <main className={'authScreen'}>
        <WelcomeBlock/>
		<div>
			{ type === AuthScreenType.SIGNUP && <FormBlock type={FormBlockType.SIGNUP}/> }
			{ type === AuthScreenType.SIGNIN && <FormBlock type={FormBlockType.SIGNIN}/> }
		</div>
    </main>
}