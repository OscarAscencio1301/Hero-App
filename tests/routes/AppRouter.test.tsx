import { render, screen } from "@testing-library/react";
import AppRouter from "../../src/routes/AppRouter";
import { MemoryRouter } from "react-router-dom";
import { AuthContext, PropsContext } from "../../src/pages/auth/context/Context";
import { InitialState, User } from "../../src/pages/auth/reducer/authReducer";

describe('Testing AppRouter', () => { 
    test('Valones Iniciales ', () => {
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
            <MemoryRouter initialEntries={['/']}>
                <AppRouter />
            </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('login')).toBeTruthy()
    });

    test('Valores Iniciales ', () => {

        const user:User = {
            id: 123,
            username: 'OSCXAE'
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
            <MemoryRouter initialEntries={['/']}>
                <AppRouter />
            </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Marvel')).toBeTruthy()
    });
 })