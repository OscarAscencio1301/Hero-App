import { Navigate, Route, Routes } from "react-router-dom"
import DCPage from "../pages/heroes/DCPage"
import MarvelPage from "../pages/heroes/MarvelPage"
import { Navbar } from "../components/Navbar"
import HeroePage from "../pages/heroes/HeroePage"
import SearchPage from "../pages/heroes/SearchPage"


const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/marvel' element={<MarvelPage />} />
                    <Route path='/dc' element={<DCPage />} />
                    <Route path='/search' element={<SearchPage />} />
                    <Route path='/heroe/:id' element={<HeroePage />} />
                    <Route path="/*" element={<Navigate to={'marvel'} />} />
                </Routes>
            </div>
        </>
    )
}

export default HeroesRoutes
