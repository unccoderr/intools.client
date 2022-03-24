import { Route, Routes } from "react-router-dom"

import { Header } from "../Components"
import { AuthScreen, AuthScreenType, BuilderScreen, IndexScreen } from "../Screens"

export const IndexRouter = () => {
    return <>
        <Header/>
        <Routes>
			<Route path={'/signup'} element={ <AuthScreen type={AuthScreenType.SIGNUP}/> } />
            <Route path={'/signin'} element={ <AuthScreen type={AuthScreenType.SIGNIN}/> } />
            <Route path={'/builder/:id'} element={ <BuilderScreen/> }/>
            <Route path={'*'} element={ <IndexScreen/> }/>
        </Routes>
    </>
}