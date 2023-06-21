import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/auth/LoginPage"
import HeroesRoutes from "./HeroesRoutes"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/auth/*' element={
                    <PublicRoutes>
                        <Routes>
                            <Route path="/*" element={<LoginPage />} />
                        </Routes>
                    </PublicRoutes>} />



                <Route path='/*' element={
                    <PrivateRoutes>
                        <HeroesRoutes />
                    </PrivateRoutes>} />
            </Routes>
        </>
    )
}

export default AppRouter
