import React from "react"
import { BrowserRouter } from "react-router-dom"

import { AppContextProvider } from "./app--context"
import { SubscriptionModal, PlannerModal, StatsModal, BuilderModal } from "../Components"
import { IndexRouter } from "../Routing"

export const App = () => {
	return <BrowserRouter>
		<AppContextProvider>
			<BuilderModal/>
			<StatsModal/>
			<PlannerModal/>
			<SubscriptionModal/>
			<IndexRouter/>
		</AppContextProvider>
	</BrowserRouter>
}