import { render, screen } from "@testing-library/react"
import PrivateRoutes from "../../src/routes/PrivateRoutes"
import { AuthContext, PropsContext } from "../../src/pages/auth/context/Context"
import { InitialState, User } from "../../src/pages/auth/reducer/authReducer"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Testing Public Route', () => {
    test('Debe de mostrar el children si está autenticado  ', () => {

        const user: User = {
            id: 123,
            username: 'oscar perez'
        }



        const initialSate: InitialState = {
            stateAuth: 'login',
            user,
            error: null
        }

        const initialValues: PropsContext = {
            stateAuthValues: initialSate,
            loginUser: jest.fn(),
            logoutUser: jest.fn()
        }

        render(
            <AuthContext.Provider value={initialValues}>
                <PrivateRoutes>
                    <h1>Private Routes</h1>
                </PrivateRoutes>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Private Routes')).toBeTruthy()

    })

    test('Debe de redireccionar si no está autenticado  ', () => {


        const initialSate: InitialState = {
            stateAuth: 'logout',
            user: null,
            error: null
        }
        const initialValues: PropsContext = {
            stateAuthValues: initialSate,
            loginUser: jest.fn(),
            logoutUser: jest.fn()
        }

        render(
            <AuthContext.Provider value={initialValues}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Routes>
                        <Route path="/login" element={
                            <PrivateRoutes>
                                <h1>Private Routes</h1>
                            </PrivateRoutes>} />
                        <Route path="/*" element={
                            <h1>Auth</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Auth')).toBeTruthy()

    })

})