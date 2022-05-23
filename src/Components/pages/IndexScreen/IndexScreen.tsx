import React, { useContext } from "react"

import { AppContext } from "../../../app"
import { InfoSection, PostsSection, BuilderSection } from "../../organisms"
import { Container } from "../../templates"
import './style.css'

export const IndexScreen = () => {
	const { user, language } = useContext(AppContext)

	return <Container>
		<main className={'p__index'}>
			<InfoSection className={'p__index__info'} />
			<BuilderSection className={'p__index__builder'} />
			<PostsSection className={'p__index__planner'} />
		</main>
	</Container>
}