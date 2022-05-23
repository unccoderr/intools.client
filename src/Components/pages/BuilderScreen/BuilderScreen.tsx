import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useLocalization } from "../../../Hooks"

import { AppContext } from "../../../app"
import { SwitchList, ConstructorBlock, ProfileBuilderContextProvider, ProfileBuilderContext } from "./Components"
import './style.css'

import { header, tabList, exportButton, DATA_KEYS } from "../../../Config"
import { Button, DeleteIcon, ExitIcon, HammersIcon, InstagramIcon, MoreIcon, ResetIcon } from "../../atoms";
import { IconedHeader } from "../../atoms/IconedHeader";
import { IconHeader } from "../../molecules";
import { Container } from "../../templates";

export const BuilderScreen = () => {
	let { id: profileID } = useParams<{ id: string }>()
	const navigate = useNavigate()
	const { language, setOpenBuilderModal } = useContext(AppContext)
	const { localize } = new useLocalization(language)

	const showBuilderModal = () => {
		if (setOpenBuilderModal) setOpenBuilderModal(true)
	}

	useEffect(() => {
		if (!localStorage.getItem(DATA_KEYS.CLOSED_BUILDER_MODAL)) showBuilderModal()
	}, [])


	return <ProfileBuilderContextProvider profileID={profileID ? +profileID : 0}>
		<ProfileBuilderContext.Consumer>
			{ ({ resetProfile, removeProfile, exportProfile }) => <Container className={'p__builder__wrapper'}>
				<main className={'p__builder'}>
					<div className="p__builder__header">
						<div>
							<button onClick={() => navigate('/')}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M20 12H4M4 12L10 5M4 12L10 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</button>
							<IconHeader
								elem={'h1'}
								header={localize(header).toString()}
								icon={'hammers'}
							/>
							<button onClick={showBuilderModal}>
								<MoreIcon />
							</button>
						</div>
						<Button size={'l'} className={'p__builder__headerBtn'} onClick={exportProfile}>
							<InstagramIcon />
							{localize(exportButton)}
						</Button>
					</div>
					<ul className={'p__builder__actions'}>
						<li className={'p__builder__actionsItem p__builder__actionsItem_primary'}>
							<Button size={'m'}>
								<InstagramIcon />
								{localize(tabList.import)}
							</Button>
						</li>
						<li className={'p__builder__actionsItem'}>
							<Button size={'m'} onClick={resetProfile}>
								<ResetIcon />
								{localize(tabList.reset)}
							</Button>
						</li>
						<li className={'p__builder__actionsItem'}>
							<Button size={'m'} onClick={removeProfile}>
								<DeleteIcon />
								{localize(tabList.delete)}
							</Button>
						</li>
					</ul>
					<SwitchList className={'p__builder__options'} />
					<Button size={'l'} className={'p__builder__btn'} onClick={exportProfile}>
						<InstagramIcon />
						{localize(exportButton)}
					</Button>

					<ConstructorBlock className={'p__builder__phone'} profileID={profileID ? +profileID : 0} />
				</main>
			</Container> }
		</ProfileBuilderContext.Consumer>
	</ProfileBuilderContextProvider>
}