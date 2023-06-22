import { fireEvent, render, screen } from "@testing-library/react"
import { Navbar } from "../../src/components/Navbar"
import { MemoryRouter } from "react-router-dom"
import { AuthContext, PropsContext } from "../../src/pages/auth/context/Context"
import { InitialState } from "../../src/pages/auth/reducer/authReducer"

const mockNavigate = jest.fn()


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

describe('Testing Navbar', () => { 
    
    test('Valores Iniciales ', () => {

        const initialState:InitialState ={
            stateAuth: 'login',
            user: {
                id: 123,
                username: 'OSARE'
            },
            error: null
        }

        const initialProps:PropsContext = {
            loginUser: jest.fn(),
            logoutUser: jest.fn(),
            stateAuthValues: initialState
        }

      render(
       <AuthContext.Provider value={initialProps}>
         <MemoryRouter initialEntries={['marvel']}>
            <Navbar />
        </MemoryRouter>
       </AuthContext.Provider>
      )
      const button = screen.getByRole('button')
      fireEvent.click(button)

      expect(initialProps.logoutUser).toBeCalled()
      expect(mockNavigate).toHaveBeenCalledWith( "/login", {"replace": true})

    })
    
 })