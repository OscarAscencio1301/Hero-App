import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/auth/LoginPage"
import HeroesRoutes from "./HeroesRoutes"


const AppRouter = () => {
    return (
        <>
           

            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/*' element={<HeroesRoutes />} />
            </Routes>
        </>
    )
}

export default AppRouter
