import React from "react"

import { AppContext } from "../../app"
import { GreetingBlock, StatsBlock, BuilderList, ConnectBlock } from "./Components"
import { PostsList } from "./Components/PostsList/PostsList"
import './index--screen.css'

export const IndexScreen = () => {

	return <AppContext.Consumer>
		{ ({ user }) => <div className={'indexScreen'}>
			<div className={'indexScreen--posts'}>
				<GreetingBlock className={'indexScreen--greeting'} />
				{ user ? <StatsBlock className={'indexScreen--stats'} /> : <ConnectBlock/> }
				<PostsList className={'indexScreen--posts'}/>
			</div>
			<BuilderList className={'indexScreen--profilerList'} />
		</div> }
	</AppContext.Consumer>

}