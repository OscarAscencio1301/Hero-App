import { render, screen } from "@testing-library/react"
import { AuthContext, PropsContext } from "../../src/pages/auth/context/Context"
import { InitialState, User } from "../../src/pages/auth/reducer/authReducer"
import PublicRoutes from "../../src/routes/PublicRoutes"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Testing Public Route', () => {



    test('Debe de mostrar el children si no está autenticado ', () => {


        const initialSate: InitialState = {
            stateAuth: 'logout',
            user: null,
            error: null
        }
        const propsContext: PropsContext = {
            stateAuthValues: initialSate,
            loginUser: jest.fn(),
            logoutUser: jest.fn()
        }

        render(
            <AuthContext.Provider value={propsContext}>
                <PublicRoutes>
                    <h1>Public Routes</h1>
                </PublicRoutes>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Public Routes')).toBeTruthy()
    })

    test('Debe de navegar a la plataforma si está autenticado ', () => {

        const user: User = {
            id: 123,
            username: 'oscar perez'
        }



        const initialSate: InitialState = {
            stateAuth: 'login',
            user,
            error: null
        }
        const propsContext: PropsContext = {
            stateAuthValues: initialSate,
            loginUser: jest.fn(),
            logoutUser: jest.fn()
        }

        render(
            <AuthContext.Provider value={propsContext}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="/login" element={
                            <PublicRoutes>
                                <h1>Public Routes</h1>
                            </PublicRoutes>
                        } />
                    <Route path="/*" element={<h1>Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Marvel')).toBeTruthy()
    })

})