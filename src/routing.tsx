import { Route, Routes } from "react-router-dom"

import { AuthScreen, AuthScreenType, BuilderScreen, IndexScreen } from "./Components/pages"
import { NavBar } from "./Components/organisms"

export const Routing = () => {
    return <>
        <NavBar/>
        <Routes>
			<Route path={'/signup'} element={ <AuthScreen type={AuthScreenType.SIGNUP}/> } />
            <Route path={'/signin'} element={ <AuthScreen type={AuthScreenType.SIGNIN}/> } />
            <Route path={'/builder/:id'} element={ <BuilderScreen/> }/>
            <Route path={'*'} element={ <IndexScreen/> }/>
        </Routes>
    </>
}