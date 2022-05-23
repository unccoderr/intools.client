import React from "react"
import { BrowserRouter } from "react-router-dom"

import { AppContextProvider } from "./app--context"
import { SubscriptionModal, PlannerModal, StatsModal, BuilderModal } from "../Components"
import { Routing } from "../routing"

export const App = () => {
	return <BrowserRouter>
		<AppContextProvider>
			<BuilderModal/>
			<StatsModal/>
			<PlannerModal/>
			<SubscriptionModal/>
			<Routing/>
		</AppContextProvider>
	</BrowserRouter>
}