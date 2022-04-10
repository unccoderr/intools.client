import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"

import { ILanguageType, IPost, IThemeType, IUser } from "../Types"

import { subscriptionModal, DATA_KEYS } from "../Config"
const { show_by_delay, delay } = subscriptionModal
export const initialUser: IUser = {
	id: 12,
	biography: '',
	avatar_url: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612877575_149-p-krasnii-fon-pop-art-212.jpg',
	birthday: new Date(),
	posts: [],
	username: 'unccoder',
	external_url: '',
	is_private: false,
	is_verified: false,
	is_professional_account: false,
	category_name: 'GAMER',
}

export enum IStatsType {
	NEW_FOLLOWERS,
	NEW_UNFOLLOWERS,
	UNFOLLOWING_ME,
	BLOCKED_ME,
	NONE
}
interface AppContextProps {
	theme: IThemeType,
	setTheme?: Dispatch<SetStateAction<IThemeType>>,
	language: ILanguageType,
	setLanguage?: Dispatch<SetStateAction<ILanguageType>>
	user: IUser | null,
	setUser?: Dispatch<SetStateAction<IUser | null>>,
	openSubscriptionModal: boolean,
	setOpenSubscriptionModal?: Dispatch<SetStateAction<boolean>>,
	openPlannerModal: boolean,
	plannerPost: IPost | null,
	setPlannerPost?: Dispatch<SetStateAction<IPost | null>>,
	setOpenPlannerModal?: Dispatch<SetStateAction<boolean>>,
	statsModalType: IStatsType,
	setStatsModalType?: Dispatch<SetStateAction<IStatsType>>,
	openBuilderModal: boolean,
	setOpenBuilderModal?: Dispatch<SetStateAction<boolean>>,
}
export const AppContext = createContext<AppContextProps>({
	plannerPost: null,
	theme: IThemeType.LIGHT,
	language: ILanguageType.EN,
	user: null,
	openSubscriptionModal: false,
	openPlannerModal: false,
	statsModalType: IStatsType.NONE,
	openBuilderModal: false
})

interface AppContextProviderProps {
	children: ReactNode
}
export const AppContextProvider = ({ children }: AppContextProviderProps) => {
	const [theme, setTheme] = useState(IThemeType.LIGHT)
	const [language, setLanguage] = useState<ILanguageType>(ILanguageType.RU)
	const [user, setUser] = useState<IUser | null>(null)
	const [openSubscriptionModal, setOpenSubscriptionModal] = useState(false)
	const [openPlannerModal, setOpenPlannerModal] = useState(false)
	const [statsModalType, setStatsModalType] = useState(IStatsType.NONE)
	const [openBuilderModal, setOpenBuilderModal] = useState(false)
	const [plannerPost, setPlannerPost] = useState<IPost | null>(null)

	useEffect(() => {
		if (!show_by_delay) return
		if (localStorage.getItem(DATA_KEYS.CLOSED_SUBSCRIPTION_MODEL)) return
		setInterval(() => {
			if (setOpenSubscriptionModal) setOpenSubscriptionModal(true)
		}, delay)
	}, [])

	return <AppContext.Provider value={{
		theme, setTheme,
		language, setLanguage,
		user, setUser,
		openSubscriptionModal, setOpenSubscriptionModal,
		openPlannerModal, setOpenPlannerModal,
		plannerPost, setPlannerPost,
		statsModalType, setStatsModalType,
		openBuilderModal, setOpenBuilderModal
	}}>
		{children}
	</AppContext.Provider>
}